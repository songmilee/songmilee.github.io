---
layout: post
title:  "Swift Concurrency 둘러보기: async, await"
author: "LSM"
tag : [ios, swift]
categories : [ios]
---

# Swift Concurrency 둘러보기: async, await
Swift Concurrency 이전에는 RxSwift, Completion 핸들러, GCD 등이 사용되었습니다.  
Swift Concurrency는 Swift 언어에서 지원하는 비동기 및 병렬 처리 방식입니다.  
Swift Concurrency는 개발자가 비동기, 병렬 처리를 지원하기 위해 여러 방법을 지원하는데 이번 글에서는 async, await에 대해 알아보고자 합니다.

## async, await
async, await가 대표적으로 비동기를 구성하기 위해 사용되는 키워드입니다.  
메소드, 변수에 `async` 키워드가 붙어 있으면 실행 중 중지가 가능한 특별한 메소드/변수라는 것을 알 수 있습니다.

```swift
func listPhotos(inGallery name: String) async -> [String] {
    let result = await fetchPhotos() // ... some asynchronous networking code ...
    return result
}
```
`fetchPhotos()` 구문 앞을 보면 `await` 키워드가 있는 것을 확인할 수 있습니다. `await` 키워드는 해당 지점이 중단되는 지점이라는 것을 컴파일러에 알려주고 있습니다. 컴파일러는 `await`를 통해 fetchPhotos()의 결과가 오기 전까지 함수 실행이 중지됩니다.  
근데, 함수 실행이 중지된다는 것은 정확히 어떤 의미일까요?

### 함수 실행의 중지(Suspension)
함수 실행이 중지된다는 것은 실행 중인 함수가 일시정지되고 다른 작업을 처리할 수 있음을 의미합니다. 즉, 함수 실행이 쓰레드를 블록킹하지 않는다는 의미입니다.  
간단한 예를 통해 일반적인 함수 호출과 async/await 함수 호출이 다른 점을 비교해봅시다.
네트워크 호출을 통해 여러 개의 사진을 반환하는 `fetchPhotos()` 메소드가 있다고 가정해봅시다.
- 일반적인 함수 호출
![normal_call](https://raw.githubusercontent.com/songmilee/songmilee.github.io/refs/heads/master/2025/_resources/250317/sync_call.png)
  - 위와 같이 호출을 하게 되면 제어권이 fetchPhotos에 있다가 PhotosUrlRequest 넘어가게 됩니다. PhotosUrlRequest의 작업이 완료되기 전까지는 fetchPhotos는 제어권을 다시 가져올 수 없습니다. 작업이 큰 경우 PhotosUrlRequest가 동작하는 동안 시스템은 다른 작업을 수행할 수 없습니다. PhotosUrlRequest 작업이 완료된 후 다시 fetchPhotos의 남은 작업을 진행할 수 있습니다. 
- async 함수 호출
![async_call](https://raw.githubusercontent.com/songmilee/songmilee.github.io/refs/heads/master/2025/_resources/250317/async_call.png)
  - async 메소드 호출은 일반적인 메소드 호출과 다릅니다. fetchPhotos가 네트워크를 통해 사진을 받기 위해 async 메소드인 data()를 호출합니다. data() 메소드는 네트워크로부터 결과를 반환 받기 전까지 제어권을 **시스템**에 넘깁니다. 네트워크 요청이나 I/O와 같이 오래 걸리는 작업일 경우 메소드가 중지된 동안 시스템은 다른 작업들을 수행할 수 있습니다. 
  제어권을 넘겨받은 시스템은 data() 메소드의 결과를 전달받기 전까지 다른 작업을 수행합니다. data() 메소드의 결과가 도착하면 시스템은 다시 data() 메소드로 제어권을 넘겨 fetchPhotos는 data() 메소드 이후의 작업을 마칠 수 있습니다. 

## async 프로퍼티
async 키워드는 메소드/함수 뿐만 아니라 프로퍼티에서도 사용이 가능합니다. 
다만 프로퍼티에서 사용하기 위해서는 해당 프로퍼티가 **`read-only`** 여야 합니다.
```swift
extension UIImage {
    var thumbnail: UIImage? {
        get async {
            let size = CGSize(width: 40, height: 40)
            return await self.byPreparingThumbnail(ofSize: size)
        }
    }
}
```
thumbnail 변수를 호출할 때도 suspension 변수이기 때문에 `await` 키워드와 함께 호출해야 합니다.
```swift
let thumbnail = await UIImage.thumbnail
```

## async-let
async let은 메소드 실행을 병렬적으로 받아볼 수 있는 방법입니다.
다음의 코드를 살펴볼까요?
```swift
let firstPhoto = await downloadPhoto(named: photoNames[0])
let secondPhoto = await downloadPhoto(named: photoNames[1])
let thirdPhoto = await downloadPhoto(named: photoNames[2])


let photos = [firstPhoto, secondPhoto, thirdPhoto]
show(photos)
```
위 코드는 3개의 이미지를 다운받아 보여주는 코드입니다. `downloadPhoto(named:)` 앞에 `await` 키워드가 있어 중지가 가능한 함수인 것을 알 수 있습니다. 하지만 사진 데이터를 얻을 때마다 함수가 중지되는 것을 확인할 수 있습니다. 사실 사진 데이터 3개는 서로 종속적이지 않기 때문에, 매번 사진 데이터를 얻어올 때 마다 함수가 중지되는 것은 비효율적입니다. 위의 사진 데이터를 효율적으로 받아올 수 있는 방법으로 변경해 보겠습니다.

```swift
async let firstPhoto = downloadPhoto(named: photoNames[0])
async let secondPhoto = downloadPhoto(named: photoNames[1])
async let thirdPhoto = downloadPhoto(named: photoNames[2])


let photos = await [firstPhoto, secondPhoto, thirdPhoto]
show(photos)
```
위 코드도 마찬가지로 3개의 이미지를 다운로드 받습니다. 하지만 downloadPhoto(named:) 앞에 `await` 키워드가 붙어있지 않기 때문에 함수가 계속 실행됩니다. 대신 await 키워드가 있는 `let photos = await [firstPhoto, secondPhoto, thirdPhoto]` 구문에서 함수가 중지됩니다. 이 구문에서 각각 3개의 사진 요청은 병렬적으로 실행되고 완료된 후 다시 show() 구문이 실행됩니다.
async-let이 실행 도중 실패하는 경우도 있을텐데요, 그렇게 되면 실패한 함수 이외의 다른 함수들에게도 에러를 전파합니다. 이는 다음에 소개할 Task와 연관이 있으니 다음 글에서 더 자세히 작성해보도록 하겠습니다.

## 정리
- async/await는 중단이 가능한 특별한 함수를 만들 수 있습니다.
- `await` 키워드를 통해 컴파일러는 해당 함수가 중지 가능하다는 것을 알 수 있습니다.
- `async-let` 을 사용하면 병렬적으로 함수들을 처리할 수 있습니다. 

## 참고 자료
- [WWDC 2021 - Meet async/await in Swift](https://developer.apple.com/videos/play/wwdc2021/10132/)
- [Concurrency](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/concurrency/)
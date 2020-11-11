---
layout: post
title:  "Kotlin - return label"
author: "LSM"
tag : [android, kotlin]
categories : [android]
---

## Kotlin return label
### label
- 코틀린의 라벨 지시자 : @
    - ex) foo@, lit@
### return
- 가까이에 있는 한정 함수(enclosing)나 익명함수에 기본적으로 리턴하는 기능
- 코틀린 함수는 nested 형태로 사용할 수 있음
- 일반적인 return은 outer function에 값을 돌려줄 수 있음

#### 1. 일반적인 return

**code**

```
fun foo(){
        listOf(1, 2, 3, 4, 5).forEach {
            if(it == 3) return

            println(it)
        }
    }
```

**result**
```
1
2
```
- **non-local return : 람다 내부에서 return 시 람다 뿐만이 아니라 outer function까지 종료 시키는 것을 의미**
- return이 수행되면 가까이에 있는 enclosing function에 리턴을 수행
    - 본 코드에서는 foo 함수가 return을 받음
    - 람다 내부에서 return을 쓰고 싶을 경우 inline 함수로 작성을 해야함

### 2. label이 있는 return

**code**
```
fun foo() {
        listOf(1, 2, 3, 4, 5).forEach lit@{
            if(it == 3) return@lit

            println(it)
        }
    }
```

**result**
```
1
2
4
5
```
- lit@는 람다식을 부를 수 있는 라벨
- return을 수행 시 outer function인 foo로 가는 것이 아니라 lit 라벨을 붙여준 람다식이 받게 됨
- 라벨 대신 람다식 함수로 부를 수 있음
    - ```listOf(1, 2, 3, 4, 5).forEach{ if(it == 3) return@forEach}```
- 라벨 없이 return을 수행하고 싶을 경우 inline function을 구성해서 사용해야 함
```
listOf(1, 2, 3, 4, 5).forEach(fun(value:Int){
        if(value == 3) return
        print(value)
})
```

---
### Reference
- Kotlin docs
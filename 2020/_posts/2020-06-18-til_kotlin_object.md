---
layout: post
title : TIL:Kotlin-object
author : lsm
tag : [kotlin]
categories: [til]
---



# Object 선언

kotlin은 Object 선언을 통해 쉽게 **싱글톤**을 만들 수 있습니다.  

클래스 선언하듯이 object 키워드를 선언하고 이름을 써서 선언이 가능합니다. 일반적인 변수할당처럼 사용할 수는 없습니다. 

``` kotlin
object ObjectExample{
    fun sample(){
        //...
    }
}
```



Object 선언의 초기화는 thread-safe하고 처음 접근시 완료됩니다. object를 참조하기 위해서 이름을 직접 접근하면 가능합니다. (정의와 동시에 인스턴스 생성)

```kotlin
ObjectExample.sample()
```



## Companion Objects

object는 **companion** 키워드와 함께 선언이 가능합니다.

```kotlin
class ObjectExample{
    companion object Factory{
        fun create() : ObjectExample = ObjectExample()
    }
}
```

companion object의 멤버는 클래스 이름을 통해 쉽게 호출이 가능합니다.  

companion object 선언 시 이름은 생략이 가능하고 호출 시 Companion이 대신 사용됩니다.

```kotlin
class ObjectExample{
    companion object {
        //...
    }
}

val temp = ObjectExample.Companion
```



*** companion object의 멤버 객체가 java에서의 static member와 비슷하게 보이지만 런타임 시 object의 instance이고 인터페이스를 상속 받을 수 있다.



*** companion object에서 진짜 static 메소드와 필드를 사용하고 싶다면 @JvmStatic annotation을 사용하면 된다.

---

### References

- https://kotlinlang.org/docs/reference/object-declarations.html
- https://umbum.dev/597
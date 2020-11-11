---
layout : post
author : lsm
title : Kotiln:Coroutine(3)
tag : [kotiln]
categories : [android]
---

**본 포스트의 내용은 kotlin weekly에서 소개 된 블로그의 [내용](https://magdamiu.com/2020/04/27/kotlin-coroutines/)을 개인적으로 정리하였습니다.**  



### Cancel

코루틴이 하고 있는 작업은 취소가 가능합니다. 대신, 코루틴이 **suspension point**에 있을 때만 취소가 가능합니다.  



#### Async Process 취소를 위한 방법

1. launch builder가 리턴하는 Job 레퍼런스를 이용
2. async()가 리턴하는 Deffered<T> 레퍼런스 이용
   - cancel() 과 cancelandJoin() 함수를 이용할 수 있음
3. Timeout 함수 사용
4. withTimeoutOrNull 함수 사용



##### 1. cancel()

- Job을 취소



##### 2. join()

- job이 완료될 동안 코루틴 중지



##### 3. cancelAndJoin()

- Job을 취소하고 취소된 job이 완료될 도안 호출 코루틴 중지

```kotlin
runBlocking {
    println("start main")

    val job = launch {
        repeat(300){waitingTime ->
                    println("Job is waiting $waitingTime...")
                    delay(50L)
                   }
    }

    delay(300L)

    println("Stop Waiting. Let's cancel it")
    job.cancel()
    job.join()
    println("end main")
}
```



##### 4. withTimeout()

- Job이 너무 오래 걸릴 경우 유용
- 코루틴 안에 있는 코드 블록을 중지 시키고 타임아웃 시간을 초과하면 TimeoutCancellationException을 발생



##### 5. withTimeoutOrNull

- 코루틴 안에 있는 코드 블록을 중지 시키고 타임아웃 시간을 초과 시 null 리턴



```kotlin
runBlocking {
    withTimeout(1000L){
        repeat(50){ waitingTime ->
                   println("Job is waiting $waitingTime")
                   delay(100L)
                  }
    }
}
```



---

### References

- https://magdamiu.com/2020/04/27/kotlin-coroutines/
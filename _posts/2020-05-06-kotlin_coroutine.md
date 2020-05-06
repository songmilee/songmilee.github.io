---
author : lsm
title : Kotlin:Coroutine(1)
tag : [kotiln]
categories : [android]
---



**본 포스트의 내용은 kotlin weekly에서 소개 된 블로그의 [내용](https://magdamiu.com/2020/04/27/kotlin-coroutines/)을 개인적으로 정리하였습니다.**

# Coroutine

**코루틴이란?**  

코틀린 1.3 버전부터 코틀린의 공식적인 표준 라이브러리입니다. 코루틴을 이용하면 동시성을 가진non-blocking 코드를 작성할 수 있습니다. 간단히 말해 비동기 프로그래밍입니다.  코루틴은 정확히 경량 쓰레드입니다.



### Coroutine Scope

- 코루틴은 scope 안에서 실행
- scope
  - 코루틴의 생명주기를 따라가기 위해 사용
  -  앱의 특정 생명주기에 bind하는 방법 중 하나이기도 함
  - **structured concurrency** 컨셉
    - 개발자가 자원(디스크, 메모리, cpu, network) 낭비하는 것을 피하게 도와줌
    - **실행 중인 코루틴을 추적**
    - 더 이상 필요 없을 시 **작업 취소**
    - 코루틴 상 문제 발생 시 **에러 노티**
- 모든 코루틴 빌더는 CoroutineScope를 확장하여 사용
- Coroutine Context를 상속 받아 context 요소를 전파하거나 취소함



---

### References

- https://magdamiu.com/2020/04/27/kotlin-coroutines/
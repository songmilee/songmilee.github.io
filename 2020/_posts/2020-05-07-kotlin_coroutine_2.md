---
layout : post
author : lsm
title : Kotiln:Coroutine(2)
tag : [kotiln]
categories : [android]
---



**본 포스트의 내용은 kotlin weekly에서 소개 된 블로그의 [내용](https://magdamiu.com/2020/04/27/kotlin-coroutines/)을 개인적으로 정리하였습니다.**  



## Coroutin Builders

코루틴 빌더는 코루틴을 빌드하고 관리하기 위한 CoroutineScope의 확장함수  



1. run()

2. runBlocking

   - 새로운 코루틴을 실행
   - 작업이 완료될 때까지 현 쓰레드 블락
   - Debug 목적으로 코루틴에 이름 설정 가능

3. Launch

   - CoroutineScope의 확장함수
   - 새로운 코루틴을 실행
   - 현재 쓰레드는 블록하지 않음
   - 코루틴 레퍼런스를 Job 형태로 리턴

4. suspend

   - 현재 실행 중인 task를 중단하고 다른 task가 작동하도록함
   - 코루틴 안에서만 호출 가능
   - 함수
     - delay : 일정 시간 동안 현재 실행 중인 task 일시 중지
     - yield : 다른 task가 동작하도록 함

5. async/await

   - CoroutineScope의 확장함수
- task를 비동기적 실행
   - task의 결과를 얻기 위해서는 launch가 아닌 async를 사용해야 함
- async는 새로운 코루틴을 생성하고 미래의 결과 값을 Deffered<T>의 구현체로 리턴함
     - await()는 함수는 코루틴의 현재 상태를 얻기 좋음
   - await()는 async()에 의해 호출된 코루틴이 완료될 때까지 대기



---

### References

- https://magdamiu.com/2020/04/27/kotlin-coroutines/
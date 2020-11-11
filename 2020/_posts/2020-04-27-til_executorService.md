---
layout : post
author : lsm
title : TIL-Executor
tag : [til]
categories : [til]
---



## Executor Service

Android R 기준으로 AsyncTask가 deprecated 되었다. 이전의 비동기 코드를 작성할 때 대 부분 AsyncTask를 사용하였기 때문에  다른 대체재를 찾아야만 했다.  

구글 공식 문서에서 추천하는 것은 java.util.concurrent API나 kotiln의 concurrency 유틸을 추천하였다.   

concurrent API에는 Executor, ThreadPoolExecutor, FutureTask와 같은 패키지들이 들어있다.  

- Executor
  - JDK 제공 프레임워크
  - 자바 어플리케이션에 실행되는 task를 비동기로 처리할 수 있게 해주는 Thread-pool과 API 제공
  - Task는 Runnable/Callable 메소드를 이용해 실행
    - Runnable : 비동기 실행이 리턴 값이 없을 때 사용
    - Callable :  비동기 실행이 리턴 값이 존재할 때 사용
- ExecutorService
  - 병렬작업 시 여러 작업을 효율적으로 처리하기 위해 제공되는 라이브러리 (ThreadPool 구현 용이)
  - 종류
    - CachedThreadPool - 쓰레드를 캐싱하는 쓰레드풀
      - 일정시간 동안 작업이 없으면 Pool에서 제거
    - FixedThreadPool - 고정된 개수를 가지는 쓰레드 풀
    - SingleThreadExecutor - 1개의 쓰레드로 작업을 처리하는 쓰레드 풀(TaskPool)
  - task를 ExecutorService에 작업을 submit하게 되면 내부적으로 스케쥴링하여 일을 처리



---

### References

- https://developer.android.com/reference/android/os/AsyncTask
- https://engkimbs.tistory.com/589
- https://developer88.tistory.com/87
- [https://gompangs.tistory.com/entry/JAVA-ExecutorService-%EA%B4%80%EB%A0%A8-%EA%B3%B5%EB%B6%80](https://gompangs.tistory.com/entry/JAVA-ExecutorService-관련-공부)
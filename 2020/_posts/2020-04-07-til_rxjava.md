---
layout: post
title:  "TIL : Rx Java"
author: "LSM"
tag : [android]
categories : [til]
---

**RxJava 프로그래밍, 한빛미디어**에서 나온 책을 개인적으로 읽고 정리한 것입니다.

# RxJava

## 리액티브 프로그래밍

- 데이터 흐름과 전달에 관한 프로그래밍 패러다임
- 데이터의 흐름을 먼저 정의하고 데이터가 변경되었을 때 연관되는 함수나 수식이 업데이트되는 방식
- 일종의 Observer 패턴



### Java & Reactive Programming

- 기존의 pull 방식 프로그래밍 개념을 push 방식으로 바꿈
- 함수형 프로그래밍의 지원을 받음
  - side effect가 없다 !!!!!!
  
  - 순수 함수(pure function)을 지향
  
  - 멀티 쓰레드 환경에서도 안전
  
    

### RxJava가 나온 핵심적 이유

1. 동시성을 적극적으로 끌어안을 필요가 있다.
   - Java 동시성 처리의 번거로움
2. Java Future를 조합하기 어려운 점을 해결해야 한다.
   - 2013년 Java 8에서 제공하는 CompletableFuture 같은 클래스가 제공되지 않았기 때문
3. 콜백 방식의 문제점을 개선해야 한다.
   - 콜백으로 인한 가독성 저하




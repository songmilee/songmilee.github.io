---
layout: post
title:  "TIL : RxJava-Observable"
author: "LSM"
tag : [android, rxjava]
categories : [til]
---  

**RxJava 프로그래밍, 한빛미디어**에서 나온 책을 개인적으로 읽고 정리한 것입니다.  

# RxJava
## Observable
- 데이터 흐름에 맞게 알림을 보내 구독자가 데이터를 처리할 수 있도록 함
- 객체의 상태 변화를 관찰하는 옵저버 목록을 객체에 등록
- 상태 변화가 있을 때마다 메소드를 호출해 객체가 목록의 옵저버에게 변화를 알림  

**onNext**  
- Observable이 데이터 발행을 알림  

**onComplete**  
- 모든 데이터 발행 완료를 알림
- 해당 이벤트는 한 번만 발생  
- 자동으로 dispose()를 호출해 Observable과 구독자의 관계를 끊음

**onError**  
- 에러 발생 알림
- 해당 이벤트가 발생하면 이후 onNext, onComplete가 발생하지 않음

### just()
- 인자로 넣은 데이터를 차례로 발생시키기 위해 Observable을 생성
- 1개 ~ 10개(최대) 까지 넣을 수 있음
    - 타입은 모두 같아야 함  

### subscribe()
- just를 통해 정의한 데이터 흐름은 subscribe() 함수를 호출해야 실제 데이터를 받을 수 있음
- subscribe() 함수는 Disposable 인터페이스 객체를 리턴

### create()
- onNext, onComplete, onError 같은 알림을 개발자가 직접 호출

## Single
- 오직 1개의 데이터만 발행  
ex) 결과가 유일한 API 호출  
- 데이터 발행과 동시에 종료 (onSuccess = onNext + onComplete)
- Single 클래스에 여러 개의 값을 넣게 되면 에러 발생

## Mabye
- Single과 같이 최대 1개의 데이터를 가질 수 있음
- 데이터 발행 없이 데이터 발생 완료 가능

## Hot Observable
- Cold Observable
    - 옵서버가 subscribe() 함수를 호출해 구독하지 않으면 데이터 발행하지 않음 (lazy 접근)
- 구독자 존재 여부와 관계없이 데이터를 발행하는 Observable
- 데이터를 처음부터 수신한다는 것을 보장할 수 없음
- 구독한 시점부터 발행한 값을 받음  
ex) 마우스 이벤트, 키보드 이벤트, 시스템 이벤트, 센서 데이터, 주식 가격 등

## Subject
- Cold Observable -> Hot Observable로 변경 가능
- Observable 속성과 구독자 속성이 모두 있음
- 데이터 발행 및 발행 데이터 처리 가능
- AsyncSubject, BehaviorSubject, PublishSubject, ReplaySubject 등이 존재
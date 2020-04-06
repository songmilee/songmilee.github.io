---
layout: post
title:  "Android:4대 컴포넌트"
author: "LSM"
tag : [android]
categories : [android]
---

## Android 4대 컴포넌트
- Android의 4대 컴포넌트는 Activity, Service, Broadcast Receiver, Content Provider를 의미한다.
- 각각의 구성요소는 Intent를 통해 상호작용이 일어난다.

---
### 1. Activity
- 앱의 기본 요소
- 다른 앱의 activity 호출 가능

#### Activity에서 권한 선언
```xml
    <manifest>
    <activity android:name="...."
       android:permission=”com.google.socialapp.permission.SHARE_POST”
    />
    
```
- \<use-permission />에 선언된 것과 매치하는 것이 존재해야 activity 실행이 가능

#### Activity 생명 주기
<center><img src="https://developer.android.com/guide/components/images/activity_lifecycle.png?hl=ko" style="zoom:70%"/></center>

- onResume()
    - Activity가 사용자와 상호작용 하기 직전에 호출
    - 모든 사용자의 입력을 캡쳐
    
- onPause()
    - Activity가 포커스를 잃을 때 호출
    - onPause 상태에서 일반적으로 UI 업데이트가 진행
    - 데이터 저장/네트워크 호출/DB 트랜잭션 실행 시 **onPause는 호출하면 안됨**


### 2. Service
- 앱이 background에서 실행될 수 있게 하는 구성 요소
- 사용자 인터페이스 제공하지 않음
- 서비스 유형
    - foreground
        - 사용자에게 보이는 작업을 수행
        - foreground service는 알림을 표시해야함
        - 사용자가 앱과 상호작용 하지 않더라도 계속 실행됨
    - background
        - 사용자에게 보이지 않는 작업을 수행
    - bind
        - bindService() 호출로 호출된 서비스에 바인드 되서 서비스가 실행됨
        - client-server 인터페이스를 제공함

### 3. Broadcast Receiver
- publish-subscriber 구조
- 앱이 특정 브로드캐스트를 수신하도록 등록 가능

#### 권한 기반 수신
```xml
<receiver android:name=".MyBroadcastReceiver"
              android:permission="android.permission.SEND_SMS">
        <intent-filter>
            <action android:name="android.intent.action.AIRPLANE_MODE"/>
        </intent-filter>
</receiver>    
```
- android.permission.SEND_SMS 권한이 있어야만 수신이 가능

### 4. Content Provider
- 데이터 접근 및 제공 관리
    - File 입출력, SQLite, WEB 등을 이용해 데이터 관리
    - Content Provider를 통해 다른 앱의 데이터 변경 가능

---
### References
- https://developer.android.com/guide/components/activities/intro-activities?hl=ko
- https://developer.android.com/guide/components/services?hl=ko
- https://developer.android.com/guide/components/broadcasts
- https://developer.android.com/guide/topics/providers/content-provider-basics
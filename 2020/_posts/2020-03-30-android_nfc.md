---
layout: post
title:  "Android:NFC"
author: "LSM"
tag : [android]
categories : [android]
---


# NFC

- 단거리 무선 기술
  - 4cm 이하에서 동작 가능
- NFC 태그/안드로이드 구동 기기 간에 작은 데이터 페이로드 공유
- 제공 기능
  1. 읽기/쓰기 모드
  2. P2P 모드 
     - Android 10부터 Android Beam 지원 중단
  3. 카드 에뮬레이션 모드
     - NFC 기기가 NFC 카드로 작동
     - NFC POS/판독기에서 에뮬레이션 된 NFC 카드 엑세스 가능

---

### Card Emulation Mode (HCE)

#### 1. 특징

- App에서 카드 에뮬레이션하고 NFC 리더와 직접 통신 가능
- HCE 아키텍쳐
  - Service를 기반으로 함
  - NFC 리더가 실제 통신하려는 HCE 서비스를 인식해야 함 (ISO/IEC 7816-4)
  - AID(Application ID)는 최대 16바이트 구성
  - AID 그룹
    - OS 상에서 한 그룹으로 간주하는 AID 목록
    - 그룹의 모든 AID가 HCE 서비스로 라우팅 되게하거나 막을 수 있음
    - AID 그룹의 일부만 라우팅하는 방법은 없음



#### 2. 구현

- AndroidManifest.xml feautre 추가

```xml
<uses-feature android:name="android.hardware.nfc.hce" android:required="true"/>	
```



- HostApduService 구현
	- processCommandApdu
	  - APDU : NFC Reader와 HCE 서비스 간에 교환되는 패킷
	  - NFC Reader가 APDU를 서비스로 전송할 때마다 호출
	  - NFC Reader가 명령을 전송하고 응답 APDU를 수신할 때까지 대기
	- onDeactivated
	  - 발생 상황
	    - NFC Reader와 기기 간 NFC 링크가 끊어질 때
	    - NFC Reader가 "SELECT AID" APDU라는 다른 메시지를 보낼 때 
	      - os가 이 때 다른 서비스라고 인식





---

## Reference

- https://developer.android.com/guide/topics/connectivity/nfc?hl=ko
- https://developer.android.com/guide/topics/connectivity/nfc/advanced-nfc?hl=ko
- https://ko.chinthaka.org/item/how-to-build-a-simple-smart-card-emulator-reader-for-android-35ca67/


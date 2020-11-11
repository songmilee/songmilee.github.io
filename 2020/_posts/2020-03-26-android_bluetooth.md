---
layout: post
title:  "Android:Bluetooth"
author: "LSM"
tag : [android]
categories : [android]
---
# 블루투스

* 클래식 블루투스

  * 다른 블루투스 기기와 데이터를 무선으로 교환
  * Bluetooth API를 이용해 기능과 엑세스 권한을 제공
  * 배터리를 사용하는 작업에 적합한 옵션
  * 전력이 적게 들어가는 것은 API 18부터 지원

* 블루투스 사용 가능 기능

  * 기기 스캔
  * RFCOMM 채널 설정
  * 기기 간 데이터 송수신
  * 다중 연결 관리

  

* 저전력 블루투스

  * API 18 레벨부터 지원
  * GATT(포괄적 특성 프로필)
    * 저전력 블루투스 링크를 통해 **속성** 데이터를 주고 받기 위한 일반적 사양
    * 모든 저전력 앱 프로필의 기초
  * ATT(속성)
    * 저전력 블루투스 기기에서 실행되도록 최적화
    * UUID를 이용해 고유하게 식별 (128비트)
    * 전송은 **특성**과 **서비스**로 구분
  * 특성
    * 값과 설명자가 포함
      * 설명자는 특성 값을 설명
      * ex) 설명, 값 허용 범위, 측정 단위 등......
    * 일종의 유형 (클래스와 유사)
  * 서비스
    * 특성의 모음

* 권한

  ```xml
  <uses-permission android:name="android.permission.BLUETOOTH"/>
  <uses-permission android:name="android.permission.BLUETOOTH_ADMIN"/>
  
  <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
  ```

  - 저전력 비콘은 위치와 연결되는 경우가 많아 위치 권한 선언이 필요
    - 없으면 스캔이 되지 않음......
    - Android 9이하를 타겟하면 ACCESS_COARSE_LOCATION 선언도 가능



- BLEScanner

  - API 21(Lollipop) 부터 지원함

    - BluetoothAdapter를 이용한 startLeScan, stopLeScan이 deprecated 됨.

    ```java
    BluetoothScanner scanner = btAdapter.getBluetoothScanner();
    ```

    

  - startScan()

    ```java
    scanner.startScan(scanCallback);
    ```

    

  - stopScan()

    ```java
    scanner.stopScan(scanCallback);
    ```

    

---

### Reference

- https://developer.android.com/guide/topics/connectivity/bluetooth?hl=ko
- https://developer.android.com/guide/topics/connectivity/bluetooth-le?hl=ko#close
- https://stackoverflow.com/questions/30223071/startlescan-replacement-to-current-api
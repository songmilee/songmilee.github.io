---
layout: post
title:  "Android:NFC-NfcAdapter"
author: "LSM"
tag : [android]
categories : [android]
---

### NfcAdapter

#### enableForgroundDispath

- 주어진 Activity에 대해서 foreground 활동 가능하게 함
- 앱이 Tag를 찾았을 때 작동한 액티비티에 대해 우선권을 줌
- ACTION_TECH_DISCOVERED
  - 외부에 있는 메타 데이터에 의존
  - tech list 매치 되는 것만 PendingIntent로 넘김
  - filters, techLists -> null을 넣게 되면 모든 태그를 받게됨(ACTION_TAG_DISCOVERED)
- 무조건 main thread에서 호출되어야 함



#### enableReaderMode

- Activity가  foreground 상태 일 때 reader 모드만 되도록 제한
- NFC tag reader/writer로만 동작
- p2p 서비스, 카드 에뮬레이션 모드가 제한됨
- 카드 에뮬레이션된 안드로이드 기기와 상호작용 시 **FLAG_READER_NFC_A**, **FLAG_READER_SKIP_NDEF_CHECK**를 추천

---

### References

- https://developer.android.com/reference/android/nfc/NfcAdapter
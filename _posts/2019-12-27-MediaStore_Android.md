---
layout: post
title:  "Android:MediaStore"
author: "LSM"
tag : [android]
categories : [android]
---

## 공용 공간에 있는 미디어 파일 접근
- ContentResolver
    - media store와 소통을 하기 위해서는 다음의 추상 클래스를 이용해야 함
- 시스템이 기본적으로 외부 저장소를 스캔하고 미디어 파일을 위치 시킴
- Manifest에 권한 설정 필요
```
<use-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE"/>
```

### Query
- 미디어 파일 중에서 조건에 맞는 것을 찾기 위해 사용
- SQL문 같이 사용
~~~
context.getContentResolver().query(uri, 결과로 받고자 하는 값들, 조건, 조건 인자, 순서)
~~~

### Media 파일 열기
```
resolver.openFileDescriptor(uri, 읽을 모드)
resolver.openInputStream(uri) // File
```

### 아이템 추가
```
resolver.insert(uri 주소, 넣을 contents 정보)
```

### 아이템 업데이트
```
resolver.update(uri 정보, contents 정보, null, null)
```

---
### Reference
- https://developer.android.com/training/data-storage/shared

---
author: lsm
title: Android App Bundle
created_at: 2020.11.17
layout: post
tag: [android]
categories: [android]
---

## App Bundle 이란?

- 기기에 최적화된 apk 제공 방법
  - 특정 기기에 필요한 코드와 리소스만 제공
  - ex) hd를 지원하는 기기는 fhd를 지원하는 리소스를 받지 않아도 됨!
- apk에 비해 다운로드 용량이 줄어듦
- 업로드 시 .aab 용량은 `150mb`로 제한됨
- 사용자에게 필요한 기능을 사용자가 필요할 때 다운로드 받을 수 있게함
  - Play Asset Delivery, Play Feature Delivery

## App bundle 형식

- App bundle의 형식 : .aab
- aab 패키지 안에는 코드, 리소스, 라이브러리 등 모든 데이터가 포함
- Playstore는 aab 파일에서 아키텍쳐, density, locale, abi 별로 파일들을 분리해 apk 생성
  - 분리된 apk들을 설치해 한 개의 어플리케이션을 설치!
    ![https://developer.android.com/images/app-bundle/aab_format-2x.png?hl=ko](https://developer.android.com/images/app-bundle/aab_format-2x.png?hl=ko)

## 분할된 apk

1. 기본 apk

- 다른 분할 apk의 베이스가 되는 apk
- 기본 apk의 manifest는 의존성, 종속성 관련한 전체 선언이 포함되어 있음

2. 구성 apks

- 화면 밀도, CPU 아키텍처, 언어에 관한 네이티브 라이브러리 및 리소스
- Goolge Play에서 **자동으로 생성**

3. 기능 apks

- 앱에 사용될 모듈화된 코드와 리소스
- Play Core 라이브러리를 통해 설정 가능

## App Bundle 다루기 (bundletool)

- [bundletool](https://www.notion.so/Android-App-Bundle-c6296d701e6a46e2953a620e66c674a6#b741f88df99148929640aadfdf8d0a01) 다운로드

- `bundletool` alias 등록

```bash
alias bundletool='java -jar $PATH_TO_BUNDLETOOL/bundletool.jar'
```

- bundletool을 이용한 apk 빌드

```bash
bundletool build-apks --bundle=[aab bundle path] --output=[.apks output path]
```

다음의 명령어를 수행하면 분할된 .apk가 들어가 있는 .apks 파일이 생성된다.  
`--mode=universal`을 사용하면 기존의 형식과 같은 universal.apk 파일을 생성한다.
<br />

cf) .apks unzip

```bash
unzip [.apks path] -d [output folder]
```

`.apks` 역시 일종의 압축 형식이기 때문에 unzip을 통해 안의 파일들을 확인할 수 있습니다.

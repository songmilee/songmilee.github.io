---
layout: post
title:  "web:JSON/XML"
author: "LSM"
categories : [web]
---

## JSON
- Javascript Object Notation
- 텍스트 형식의 데이터 포맷
- XML의 대안으로 데이터를 쉽게 전달할 목적으로 개발
```
{"employees":[
    { "firstName":"John", "lastName":"Doe" },
    { "firstName":"Anna", "lastName":"Smith" },
    { "firstName":"Peter", "lastName":"Jones" }
]}
```

## XML
- EXtensible Markup Language
- 문자 기반의 마크업 언어
- 사람과 기계가 동시에 읽기 쉬운 언어
- 데이터를 저장하고 전달할 목적으로 개발
- 사용자가 직접 태그를 정의 가능

```
<employees>
    <employee>
        <firstName>John</firstName> <lastName>Doe</lastName>
    </employee>
    <employee>
        <firstName>Anna</firstName> <lastName>Smith</lastName>
    </employee>
    <employee>
        <firstName>Peter</firstName> <lastName>Jones</lastName>
    </employee>
</employees>
```

## JSON, XML 공통점
- 데이터 저장/전달을 위해 고안
- 계층적 구조

## JSON, XML 차이점
- JSON은 종료 태그가 없고 XML 보다 길이가 짧음
- JSON은 XML보다 데이터를 빠르게 읽고 쓰기가 가능
- XML은 배열 사용 불가, JSON은 배열 사용 가능

---
layout: post
title:  "TIL:Java Garbage Collection"
author: "LSM"
categories : [til]
---
### Garbage
프로그램 내에서 더 이상 사용되지 않는 메모리를 의미

# Garbage Collection
JVM의 Garbage Collector가 더 이상 사용하지 않는 인스턴스를 찾아 메모리를 삭제해 메모리 공간을 늘림
JVM의 내부적 판단에 의해 발생되기 때문에 언제 일어나는지는 알 수가 없음

## garbage collection 요청
System.gc()를 통해 가비지 컬렉션 요청이 가능

## Major GC
- 생명주기가 오래된 객체가 대상
- old generation이라고도 불리기도 함
- minor gc에 비해 속도가 느림

## Minor GC
- 생명주기 짧은 젊은 객체를 대상
- Young generation이라고도 불림
- major gc에 비해 속도가 빠름

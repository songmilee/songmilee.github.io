---
layout: post
title:  "Web:Java Spring"
author: "LSM"
categories : [web]
---
## Spring Framework
- Java Enterprise 개발을 편리하게 해주는 오픈 소스 프레임 워크
- 자바 플랫폼 개발을 위한 오픈 소스 애플리케이션 프레임워크
- 비침투적 방식을 이용해 복잡함을 해결
- POJO(Plain Old Java Object) 프로그래밍

### POJO(Plain Old Java Object)
- 단순한 자바의 객체를 이용하 비즈니스 로직을 구현하기 위해 나온 개념
- POJO 조건
	1. 특정 규약에 종속되지 않음
	2. 특정 환경에 종속되지 않음
- 객체지향 설계를 자유롭게 설계를 가능하게 함


### Dependency Injection (의존성 주입)
- 설정 파일을 통해 객체 간의 의존관계를 설정
- 외부 Assembler가 객체 간의 의존관계 정의
- 객체가 직접 의존하고 있는 개체 생성/검색 필요가 없어 코드 관리 쉬워짐

### Inversion of Control (제어의 역전)
- 프로그램의 제어 흐름 구조가 바뀌는 것
- 모든 객체는 제어권한을 위임 받은 특별한 객체에서 생성됨
	- bean : 스프링에서 제어권을 가지고 관계를 생성하는 객체



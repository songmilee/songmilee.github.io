---
layout: post
title:  "web:@controller, @service, @repository"
author: "LSM"
categories : [web]
---

### @Component
- 기본 자동 구성 요소 스캔 주석
- 모든 스프링 관리 구성요소의 일반 스테레오 타입
- Repository, Service, Controller 등은 Component를 구체화 시킨 것

### @Repository
- 저장소(DB) 역할
- 스테레오 타입을 만족시키는 모든 클래스 타입 마커
- 저장된 DB 연결에 사용됨

### @Service
- 비즈니스 계층 서비스 구성 요소
- 모든 웹 서비스 DB 연결에 사용됨

### @Controller
- spring-mvc에서 사용
- 주로 프레젠테이션 계층에서 사용됨
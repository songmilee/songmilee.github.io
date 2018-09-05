---
layout: post
title:  "web:autowired, inject, resource"
author: "LSM"
categories : [web]
---
Autowired, Inject, Resource는 모두 의존 관계를 연결해주는 어노테이션이다.

### Autowired
- 스프링 전용. 스프링 이외에는 사용이 불가
- 타입에 맞춰서 데이터를 연결

### Inject
- Java에서 지원
- 타입에 맞춰서 데이터를 연결

### Resource
- Java에서 지원
- 이름을 기반으로 연결

cf) Qualifier : 타입 이외에 방법으로 연결 가능
---
layout: post
title:  "web:spring boot, spring"
author: "LSM"
categories : [web]
---

### Spring Boot
- 웹 컨테이너를 내장
- 최소한의 설정을 통해 웹 어플리케이션 제작 가능
- web.xml을 사용하지 않아 RegistrationBean을 통해 servlet/filter 등록

BeanConfiguration
1. xml
	- 컨테이너가 관리하는 servlet, bean을 한 눈에 관리하기 쉬움
	- 코드량이 많고 버그 발생률이 높음
2. annotation 사용
	- 코드량이 적고 버그 발생률 적음
3. xml & annotation 사용
	- DB 등을 xml로 작성하고 나머지는 annotation으로 정의

### Spring MVC
- 설정과 사용이 간편한 MVC 패턴을 도입한 웹 어플리케이션
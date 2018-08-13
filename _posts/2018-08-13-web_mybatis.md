---
layout: post
title:  "mybatis"
author: "LSM"
categories : [web]
---
### Mybatis?
- Java의 관계형 DB 프로그래밍을 보다 쉽게 처리할 수 있게 하는 프레임워크
- 개발자가 지정한 SQL, 저장 프로시저 및 고급 매핑을 지원하는 퍼시스턴스 프레임워크
- JDBC 처리하는 상당 부분 코드/파라미터 설정&결과 매핑을 대신하여 처리

### 특징
- 간단함
- 생산성
	- 줄어든 길이의 코드
	- 간단한 설정
- 작업의 세분화에 도움이 됨
- SQL문이 어플리케이션 코드로부터 완전한 분리
- 어떤 프로그램으로도 구현 가능

### 구성요소
- SqlSessionFactoryBuilder : SqlSessionFactory를 만들기 위한 빌더
- SqlSessionFactory : SqlSession 인스턴스를 만들 수 있는 객체
- SqlSession : DB에 대해 실행 가능한 메소드를 가지고 있는 인스턴스
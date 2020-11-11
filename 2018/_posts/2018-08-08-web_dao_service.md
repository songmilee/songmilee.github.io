---
layout: post
title:  "web : dao, service, controller"
author: "LSM"
categories : [web]
---
### 1. controller
- 사용자의 요청을 handling
- @Controller 어노테이션을 통해 컨트롤러라는 것을 명시
- 컨트롤러에 들어오는 요청을 @RequestMapping에 따른 함수에서 처리
- return 값으로는 사용자에게 보여줄 jsp 파일을 지정
- ModelMap 객체를 사용해 요청 후 처리한 결과를 담아 jsp 페이지에 보여줌

### 2. DAO
- Data Access Object의 약어
- 단일 데이터의 접근과 갱신만 처리(CRUD)

### 3. Service
- 여러 DAO를 호출해 사용자 목적에 맞게 가공
- 서비스는 Transaction 단위임
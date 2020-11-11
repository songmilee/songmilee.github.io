---
layout : post
author : lsm
title : TIL:Long polling
tag : [til]
categories : [til]	
---

#### Polling

- 리얼 타임 웹을 위한 기법
- 일정한 주기를 갖고 서버와 응답을 주고 받는 방식
- 폴링 주기
  - 짧을 경우 : 서버 성능에 부담이 감
  - 길 경우 : 실시간 성에 문제가 생김



#### Long Polling

- 서버 측에서 접속을 열어두는 것을 길게하는 것
- flow
  - 서버가 Request를 받음
  - 보낼 메시지가 있을 때까지 서버는 연결을 계속 유지함
  - 보낼 메시지가 생기면 서버는 request 받은 곳에 respond
  - 브라우저는 서버에 다시 요청을 함
- 요청간격이 줄어들면 polling 보다 훨씬 더 많은 데이터를 보내게 됨

---

### Reference

-  https://wondongho.tistory.com/69
- [https://medium.com/@pakss328/%EB%8D%B0%EC%9D%B4%ED%84%B0-%ED%86%B5%EC%8B%A0-%EB%B0%A9%EC%8B%9D-realtime-push-polling-4cdb696fb7ad](https://medium.com/@pakss328/데이터-통신-방식-realtime-push-polling-4cdb696fb7ad)
- https://ko.javascript.info/long-polling

- [https://kamang-it.tistory.com/entry/Webhttp%ED%86%B5%EC%8B%A0%EC%9D%84-%EC%9D%B4%EC%9A%A9%ED%95%9C-%EC%96%91%EB%B0%A9%ED%96%A5-%ED%86%B5%EC%8B%A0%EA%B8%B0%EB%B2%95-long-polling](https://kamang-it.tistory.com/entry/Webhttp통신을-이용한-양방향-통신기법-long-polling)
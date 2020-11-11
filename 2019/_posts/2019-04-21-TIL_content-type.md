---
layout: post
title:  "web : Content-Type"
author: "LSM"
categories : [web]
---

# 1. Content-Type
- 리소스의 media type을 나타내기 위해 사용
- PUT, POST와 같은 요청 내에서 클라이언트가 서버에게 어떤 데이터가 실제로 전송됐는지 알려줌

# 2. 문법
---
Content-Type : text/html; charset=utf-8
Content-Type : multipart/form-data; boundary=something
---

### media-type
- 리소스/데이터의 MIME type

### boundary
- 멀티파트 개체에 필수적인 요소
- 멀티파트 경계선을 캡슐화하기 위해 사용

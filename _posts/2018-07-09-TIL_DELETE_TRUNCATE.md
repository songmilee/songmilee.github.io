---
layout: post
title:  "TIL: Drop, Truncate, Delete"
author: "LSM"
categories : [til]
---

### Drop
- 테이블의 정의 자체를 완전히 삭제시킨다.
- 해당 과정은 Rollback이 불가능하다.
- 테이블이 사용했던 용량은 모두 release가 됨

### Delete
- 데이터를 삭제하는 작업
- commit 하기 전에 삭제 했던 명렁들에 대해 rollback이 가능함
- 데이터를 모두 delete 해도 용량이 모두 release 되지 않음

### Truncate
- 테이블을 최초 생성된 초기 상태로 만드는 작업
- rollback이 불가능함
- 테이블이 사용했던 용량 중 최초 테이블 생성 시 할당된 용량만 남고 release 된다.

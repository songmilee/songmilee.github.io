---
layout: post
title:  "TIL:윈도우 함수"
author: "LSM"
categories : [til]
---
## Window Function
- 행 간의 관계를 쉽게 정의하기 위한 함수
- 복잡한 프로그램을 SQL 문을 이용해 쉽게 파악 가능하게 함
- **윈도우 함수는 중첩이 불가능하지만 서브쿼리에서는 가능함 **

1) 순위 관련 함수
```
- Rank
- DENSE_RANK
- ROW_NUMBER
```

2) 집계
```
- SUM
- MAX
- MIN
- COUNT
- AVG
```

3) 순서
```
- FIRST_VALUE
- LAST_VALUE
- LAG
- LEAD
```
**해당 기능은 ORACLE만 지원하는 기능이다.**

4) 그룹 내 비율
```
- CUME_DIST
- PERCENT_RANK
- NTILE
- RATIO_TO_REPORT
```

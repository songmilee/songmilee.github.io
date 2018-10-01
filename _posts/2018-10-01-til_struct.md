---
layout: post
title:  "TIL:구조체"
author: "LSM"
categories : [til]
---
## 구조체
- 하나 이상의 변수를 그룹지어 사용자 지정의 자료형을 만드는 것
- 사용자 정의 자료형
- 구조체를 이루는 변수들은 구조체 멤버라 지칭
- 구조체 변수 접근을 위해 연산자 **.**을 사용함

ex) 구조체 작성
```
struct example{
	int x1;
    char y1;
};
```

ex) 구조체 변수 선언
```
	struct example ex1;
    ex1.x1 = 10;
    ex1.y1 = 'a';
```

ex) 구조체 배열 선언
```
struct example ex[5];

ex[0].x1 = 10;
ex[0].y1 = 'b';
...
ex[4].x1 = 50;
ex[4].y1 = 'e';
```

ex) 구조체 포인터
```
struct example* pointer = NULL;
pointer = &ex[0];
pointer->x1 = 30;
```
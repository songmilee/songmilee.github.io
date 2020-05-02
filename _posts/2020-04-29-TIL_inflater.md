---
layout: post
title:  "TIL : Inflater"
author: "LSM"
tag : [android]
categories : [til]
---

## Inflater?

- xml로 정의된 view를 실제 객체화 시키는 용도
  - 메모리에 올라감
- **setContentView** 함수를 이용하면 xml 레이아웃을 인플레이션 후 화면에 보여줌
  - 인플레이션 된 위젯을 화면에 구성하는 기능을 함



#### 1. Context#getSystemService()

```java
LayoutInflater inflater = (LayoutInflater) context.getSystemService(CONTEXT_LAYOUT_INFLATER);
View view = inflater.inflate(R.layout.test_layout, parent, false);
```



#### 2. Activity#getLayoutInflater()

- Activity 윈도우에 있는 getLayoutInflater()로 포워딩



#### 3. LayoutInflater.from()

- static factory 메소드
- 내부적으로는 getSystemService를 호출



#### 4. View.inflate()

- View의 팩토리 메소드
- 내부에서는 LayoutInflater.inflate를 수행



---

### References

- https://m.blog.naver.com/PostView.nhn?blogId=epslrudals&logNo=220614598519&proxyReferer=https:%2F%2Fwww.google.com%2F
- https://b.jy.is/android-layoutinflater/
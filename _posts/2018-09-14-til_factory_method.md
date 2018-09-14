---
layout: post
title:  "TIL:Factory Pattern"
author: "LSM"
categories : [til]
---
## Abstract Factory Pattern
- 인터페이스를 이용해 서로 연관/의존 클래스를 구상 클래스로 지정하지 않고 생성

## Factory Pattern
- 상위, 하위 클래스 존재
- 팩토리 클래스를 이용해 하위 클래스의 인스턴스를 생성하는 패턴
- 객체 생성 처리 클래스

---
* Factory class
```
public class BurgerFactory{
	Burger burger = null;
	public Burger createBurger(String type){
    	if(type.equal("cheese")) burger = new CheeseBurger();
        ...
        return burger;
    }
}
```
---
* Factory Pattern
```
public class BurgerStore{
	BurgerFactory burgerFactory;
	public Burger orderBurger(String type){
    	...
        Bruger burger = burgerFactory.createBurger(type);
        ...
    }
}
```

### 장점
- 제품 생산, 사용 부분 분리 가능
- 제품 추가나 변경에도 느슨한 결합되어 유연함
- 객체 생성코드를 오직 하나의 클래스/메소드가 담당
- 중복을 방지



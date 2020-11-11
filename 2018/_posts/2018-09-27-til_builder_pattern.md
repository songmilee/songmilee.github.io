---
layout: post
title:  "TIL:Builder Pattern"
author: "LSM"
categories : [til]
---

## Builder Pattern
- 인스턴스를 생성자를 통해 직접 생성하지 않음
- 빌더라는 내부 클래스에서 간접적으로 생성하는 패턴

### 코드
```
public class Example{
	private Example(String name) {
    	//something class initiate
    }
    
    public static class Builder{
    	String name;
        
    	public Builder(){
        	//something 
        }
        public void setName(String name){
        	this.name = name;
        }
    	public Example build(){
        	return new Example(name);
        }
    }
}
```

### 사용 목적
- 클래스와 사용 대상의 결합도를 낮추기 위해 사용됨
	- 외부에서 임의 생성을 막아 클래스 간 결합도를 떨어뜨림
	- 빌더를 통해 간접적 생성
- 생성자에 전달하는 인수에 의미 부여
	- 인수가 너무 많게 되면 기존의 클래스 생성방식은 직관적이지 않게 됨
	- 빌더의 set...()를 통해서 인수를 지정해주면 직관적이게 됨
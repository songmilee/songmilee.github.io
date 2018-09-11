---
layout: post
title:  "TIL:Facade Pattern"
author: "LSM"
categories : [til]
---
### Facade 패턴
- 시스템의 복잡성을 감추고 사용자가 시스템에 접근할 수 있는 인터페이스를 사용자에게 제공
- 기존 시스템에 인터페이스를 추가해 복잡성을 감춤
- 구조적 패턴

### 예제
1. 인터페이스 생성
```
public interface Shape(){
	public void draw();
}
```

2. 인터페이스 생성을 위한 클래스 생성
```
public class Rectangle implements Shape {

   @Override
   public void draw() {
      System.out.println("Rectangle::draw()");
   }
}
```

3. 파사드 클래스 생성
```
public class ShapeMaker {
   private Shape circle;
   private Shape rectangle;
   private Shape square;

   public ShapeMaker() {
      circle = new Circle();
      rectangle = new Rectangle();
      square = new Square();
   }

   public void drawCircle(){
      circle.draw();
   }
   public void drawRectangle(){
      rectangle.draw();
   }
   public void drawSquare(){
      square.draw();
   }
}
```
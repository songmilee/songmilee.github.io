---
author:lsm
title : TIL-Java 8 이하에서 함수 매개변수로 넘기기
layout : post
tag : [til]
categories : [til]
---



kotlin에서 함수를 parameter로 넘겨 사용한 경험이 종종 있었다. Java에서 이용을 해보려하니 Java 8을 이용하지 않아 사용이 불가능했다.  8 미만의 버전에서는 어떻게 함수를 넘길 수 있나 찾아보니 **Callable**를  이용하는 것을 확인할 수 있었다.  



```java
public interface Callable<V>
```

call() 메소드를 제공하는데 결과를 반환하거나 실행이 불가능한 경우 에러를 리턴한다.  



다른함수에 parameter로 사용하려면 다음과 같이 사용하면된다.

```java
callMethod(param);
```




```java
private Callable<Integer> param = new Callable<Integer>(){
    @Override
    public Integer call() throws Exception {
        return 1;
    }
}

...
public void callMethod(Callable<Integer> param){
    ...
    param.call();
}
```

parameter로 넘겨준 메소드에서  **call() 메소드**를 실행시켜야 정의했던 함수가 올바르게 동작한다.



---

### Reference

- https://docs.oracle.com/javase/7/docs/api/java/util/concurrent/Callable.html

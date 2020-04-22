---
layout : post
title : Til - app 설치 확인
author : lsm
category : [til]
tag : [til, android]
---

## Android Application 설치 확인

안드로이드 어플리케이션에서 타 패키지 설치 여부를 확인이 필요한 경우가 있다. 이때 사용하면 좋은 것이 **PackageManger**이다.  



공식 페이지 설명은 다음과 같다.

```
Class for retrieving various kinds of information related to the application packages that are currently installed on the device. You can find this class through Context#getPackageManager.
```

  

PackageManager는 현재 기기에 설치되어 있는 앱 패키지와 관련된 다양한 정보를 리턴해준다고 정의 되어 있다.     

PackageManger의 public method인 **getPacakgeInfo**를 이용하면 시스템의 설치된 패키지 정보를 얻을 수 있다.  

패키지 정보가 없으면 **NameNotFoundException**이 발생한다.

- [PackageManager.NameNotFoundException](https://developer.android.com/reference/android/content/pm/PackageManager.NameNotFoundException)



- 예시

```java
PackageManager pm = new PacakgeManger();
PackageInfo pki = pm.getPackageInfo("com.sample.test", PackageManager.GET_META_DATA);
```



getPackageInfo는 패키지 이름 이외에도 flag를 옵션으로 줄 수 있는데 이를 통해서 얻어올 수 잇는 데이터를 정할 수 있다. 자세한 정보는 [공식문서](https://developer.android.com/reference/android/content/pm/PackageManager#getPackageInfo(java.lang.String,%20int))에서 확인하면 좋다.



### References

- https://developer.android.com/reference/android/content/pm/PackageManager
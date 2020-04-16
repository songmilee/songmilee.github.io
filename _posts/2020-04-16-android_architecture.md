---
layout: post
title:  "Android: Android Architecture"
author: "LSM"
tag : [android]
categories : [til]
---

# Android Architecture

- MVC
- MVP
- MVVM
  - [구글 권장 아키텍쳐](https://developer.android.com/jetpack/docs/guide#recommended-app-arch)



## 1. MVC

- Model View Controller로 구성

<center><img src="https://miro.medium.com/max/606/1*smJy5uFyF5qucw6_7svnQA.png"/></center>

- Model

  - 비즈니스 로직 담당

- View

  - 사용자 인터페이스

- Controller

  - View가 Model로 접근하는 것을 처리
  - Model을 통해 데이터가 처리된 결과를 View에 전달 (View-Model의 중계자)

  

- 기존 MVC의 문제?
  - 데이터가 View(Activity/Fragment)에 강하게 결합되어 있음 -> Unit test를 어렵게 만듦
  - 많은 코드가 컨트롤러로 모여 비대해지고 문제가 발생하기 쉬워짐



## 2. MVP

- Model View Presenter로 구성

<center><img src="https://miro.medium.com/max/584/1*-VWYtfbyuZe2yZ7nrOUtgQ.png"/></center>

- Model 

  - 앱의 비즈니스 로직 담당

- View

  - 데이터를 보여주는 인터페이스 역할
  - 사용자의 액션을 Presenter로 전달

- Presenter

  - View와 Model의 브릿지

  - 사용자가 만든 이벤트를 처리할 책임이 있음

    

#### MVP 장점

- 관심의 분리
  - 코드에 대한 이해와 유지보수하기 쉬워짐
- 유닛 테스트 용이
  - 컴포넌트 간 잘 분리되어 있다면 각 컴포넌트 테스트가 편해짐



#### MVP 단점

- 유지보수
  - Presenter 역시 시간이 지남에 따라 추가 비즈니스 로직이 모이는 경향이 있음
    - 문제 발생하기 쉬워짐
    - 코드 분리가 어려워짐

- [MVP 예제 코드](https://github.com/android/architecture-samples/tree/todo-mvp)

## 3. MVVM

- Model View ViewModel로 구성


<center><img src="https://developer.android.com/topic/libraries/architecture/images/final-architecture.png"/></center>

- Model
  - 비즈니스 로직 담당
- View
  - ViewModel이 보여주는 Observable 변수와 액션에 바인딩
- ViewModel
  - Model Wrapping
  - View에 필요한 Observable 데이터 준비
  - View가 Model에 이벤트를 전달할 수 있도록 hook 준비



#### MVVM 장점

- ViewModel이 View에 대한 의존성이 없어 유닛 테스트가 쉬워짐
- MVP 패턴 처럼 가상의 뷰를 만들 필요 없어짐 (Observable 변수가 제대로 들어오는지 확인만 하면 됨)



#### MVVM 단점

- 유지관리

- 유지보수  



[MVVM 예제 코드](https://github.com/android/architecture-samples/tree/dev-todo-mvvm-live)

---

## References

- https://medium.com/@beyram.ghali/android-model-view-presenter-mvp-design-pattern-b27c6bf938de

- https://www.adnansattar.com/android-architecture-mvc-mvp-and-mvvm-design-patterns-a-detail-tour/#mvcArchitecture

- https://academy.realm.io/kr/posts/eric-maxwell-mvc-mvp-and-mvvm-on-android/

- https://developer.android.com/jetpack/docs/guide#recommended-app-arch

- https://github.com/android/architecture-samples/tree/dev-todo-mvvm-live

  


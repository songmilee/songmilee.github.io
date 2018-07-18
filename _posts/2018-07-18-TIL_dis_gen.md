---
layout: post
title:  "TIL:generative model, discriminative model"
author: "LSM"
---

패턴 인지에서 분류를 할 때 사용되는 모델은 다음과 같이 2가지의 모델이 있음

##Generative Model
- 데이터를 생성하는 모델 관점
- 데이터를 기반으로 데이터를 생성하는 모델을 추정
- 추정한 모델을 기반으로 데이터의 클래스를 판별
- sample dataset을 생성할 수 있는 모델

##Discriminative Model
- 데이터 자체의 차이를 판별
- 데이터 간의 차이를 학습하는 posterior model
- 데이터 간의 차이를 학습함으로 decision boundary를 만들 때 사용
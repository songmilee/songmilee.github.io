---
layout: post
title:  "TIL:최우추정법(Maximum Likelihood)"
author: "LSM"
categories : [til]
---

### 우도함수(Likelihood)
- Training set 데이터가 얻어질 확률을 파라미터에 관한 함수로 간주한 것
- 확률 밀도 함수 fX( x;θ)
 	- θ 값은 이미 알고 있음
 	- θ = 상수, x = 변수
 	- θ가 정해져 있는 상황에서 x 값의 상대적 가능성
- Likelihood L(θ) = fX(x|θ)
	- x는 이미 발생해 값을 알고 있음
	- x = 상수, θ = 변수
	- x가 정해진 상태에서 θ 값의 상대적 가능성

### 최우추정법(Maximum Likelihood)
- 주어진 데이터에 대해 likelihood를 최대로 만들어 주는 모수 θ를 찾는 기법
	- (가설) 관측된 데이터는 발생확률이 가장 높은 데이터임이 틀림 없다
	- (가설 => True 가정) **계산되는 확률 P가 최대가 되도록**하는 파라미터를 결정하는 기법
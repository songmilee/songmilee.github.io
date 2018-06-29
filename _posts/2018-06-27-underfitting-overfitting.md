---
layout: post
title:  "TIL:Underfitting/Overfitting"
author: "LSM"
---

# Underfitting
학습 데이터가 부족하거나, 학습이 제대로 되지 않아 훈련 데이터에 가깝게 가지 못한 경우를 의미.
이렇게 나오는 모델의 경우 bias가 높게 나온다.

**해결법**
- 모델의 유연성을 높여줌으로써 해결
	- 새로운 도메일 별 특성을 더 학습
	- 사용된 정규화를 줄임
	- 사용된 특성 처리 유형 변경(ex. n-gram 크기 증가)

# Overfitting
모델이 훈련 데이터에 지나치게 적합하게 만들어진 것을 의미.
이런 모델은 variance가 높게 나온다.

**해결법**
- 더 많은 데이터를 학습시킨다.
- 학습 시 사용하는 feature 갯수를 줄인다.
- Regularization
	- L2 Regularization : 가중치가 클 수록 높은 패널티를 부여한다.
	- Dropout : 각 레이어의 노드를 일정 비율로 버리고 나머지만 학습
---
layout: post
title:  "TIL:K-means clustering"
author: "LSM"
categories : [til]
---
## K-means clustering
- 주어진 데이터를 k개의 클러스터로 묶는 알고리즘
- 각 클러스터의 거리 차이 분산을 최소화 하는 방식으로 동작함
- unsupervised learning이기 때문에 라벨이 붙지 않은 데이터에 라벨을 붙여줌

### 알고리즘
1. 초기 k의 평균값은 데이터들 중에서 무작위로 뽑힘
2. 각 데이터는 가까운 평균값을 기준으로 k개의 클러스터를 형성함
3. k개의 클러스터를 기준으로 평균값을 다시 재조정함
4. 수렴할 때까지 2 ~ 3의 과정이 반복


### Code
{% highlight markdown %}
from sklearn import datasets
import pandas as pd

#datasetting
iris = datasets.load_iris()

labels = pd.DataFrame(iris.target)
labels.columns = ['labels']

data = pd.DataFrame(iris.data)
data.columns = ['Sepal Length', 'Sepal Width', 'Petal Length', 'Petal Width']
data = pd.concat([data, labels], axis=1)

feature = data[['Sepal Length', 'Sepal Width']]
#print(feature.head())

#Kmeans clustering
from sklearn.cluster import KMeans
import matplotlib.pyplot as plt
import seaborn as sns

#모델 생성 및 예측
model = KMeans(n_clusters=3, algorithm='auto')
model.fit(feature) #학습 데이터를 이용한 학습
predict = pd.DataFrame(model.predict(feature))
predict.columns=['predict']

r = pd.concat([feature, predict], axis=1)

#시각화
#scatter plot을 만듦
plt.scatter(r['Sepal Length'], r['Sepal Width'], c=r['predict'], alpha=0.5)
centers = pd.DataFrame(model.cluster_centers_, columns=['Sepal Length', 'Sepal Width'])
center_x = centers['Sepal Length']
center_y = centers['Sepal Width']
plt.scatter(center_x, center_y, marker='D', c='r')
plt.show()

{% endhighlight %}

### 알고리즘의 한계점
1. k의 값은 사용자가 임의로 정해줘야 함
2. 알고리즘의 에러 수렴이 global minimum이 아닌 local minmum에 수렴할 가능성이 있음
3. 이상값에 민감
4. 구형이 아닌 모양을 군집할 시 적합하지 않음

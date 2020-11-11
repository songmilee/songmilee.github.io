---
layout : post
author : lsm
title : TIL:TaskAffinity
tag : [android]
categories : [til]
---



## TaskAffinity

- Activity Tag의 속성
- 같은 taskAffinity 값을 가지고 있는 activity들은 **같은 task에 속함**
- 기본적으로 한 Application 안의 **모든 Activity들은 같은 Affinity를 가짐**
  - default name = packageName
- allowTaskReparenting/FLAG_ACTIVITY_NEW_TASK와 상호작용 해 activity task 결정
  - allowTaskReparenting
    - 같은 affinity를 가진 task에서 launch 되도록 결정되는 값
    - true면 affinity task가 같은 application task의 top stack으로 launch 됨



---

### References

- https://developer.android.com/guide/topics/manifest/activity-element?hl=ko
- https://aroundck.tistory.com/76
- https://parkho79.tistory.com/42
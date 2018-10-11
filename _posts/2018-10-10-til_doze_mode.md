---
layout: post
title:  "TIL:Doze mode"
author: "LSM"
categories : [til]
---

## Android의 Doze 모드
- Android OS 6.0부터 선보인 절전기능
- 디바이스 사용이 오래되지 않은 경우 네트워크 백그라운드 작업을 미뤄 배터리 사용량을 늘리는 기능

## Doze 모드가 되기 위해서
1. 배터리가 충전되지 않음
2. 휴대폰이 물리적으로 제자리에 놓인 상태
3. 스크린 오프 상태로 오랫동안 방치될 경우

## Doze 모드 동작
- 배터리를 아끼기 위해 앱의 네트워크와 CPU 활용을 제한
- SyncAdapter, JobScheduler, AlarmManager가 작동하지 않음
- Doze 상태에서도 주기적으로 Doze 상태에서 벗어나 작업을 수행한 뒤 다시 Doze 모드가 됨
	- 해당 상태를 Maintenace라 함
	- 이 때 SyncAdapter, JobScheduler, AlarmManager가 작동
- Wake Look이 무시
	- 스스로 깨어나는 것이 불가능
- Wi-fi 스캔을 하지 않음

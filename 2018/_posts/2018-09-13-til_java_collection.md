---
layout: post
title:  "TIL:Java Collection(List, ArrayList, LikedList, Set)"
author: "LSM"
categories : [til]
---
## Vector
- List 객체
- 쓰레드 개수의 상관 없이 동기화 처리(Thread Safe)
- 싱글쓰레드 환경에서도 동기화함으로 성능이 떨어짐

## ArrayList
- Vector와 같은 추가, 삭제 기능
- 자동 동기화가 되지 않기 때문에 빠르게 처리 가능
- Array 구조를 이용해 데이터 추가/삭제를 복사 방법으로 처리
	- 대량의 데이터를 추가/삭제 시 오버헤드 발생
	- 성능 저하
- 인덱스가 있어 여러번 참조할 때 편리

## LinkedList
- 다음 리스트에 대한 정보를 가지고 있음 (양방향 linkedlist도 있음)
- 내부적으로 인덱스는 존재하지 않음
- 연결 자료의 정보만 갖고 있기 때문에 추가/삭제 시 다른 노드의 위치를 변경 시킬 필요 없음
- 데이터 탐색 시 모든 데이터를 돌기 때문에 검색 성능은 좋지 않음
=> Stack, Queue, Deque를 만들 때 사용

## Set
- 순서가 없는 데이터 집합
	- 데이터의 중복을 허용하지 않음
- 내부에 인덱스가 존재하지 않음
- HashSet : 빠른 접근 속도, 순서를 알 수 없음
- LinkedHashSet : 데이터를 추가한 순서대로 접근 가능
- TreeSet : 정렬방법을 지정할 수 있음

## Map
- Key, Value로 이루어진 데이터 집합
	- Key 중복 불가
	- Value 중복 가능
- Key 값을 알고 있다면 데이터 접근이 가능함
- HashMap : 키 중복이 불가, null 값 허용
- HashTable : HashMap보다 느리지만 동기화 지원, null 불가
- TreeMap : 정렬 순서대로 저장되 탐색 빠름, 추가/삭제 성능 나쁨

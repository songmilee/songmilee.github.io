---
layout: post
title:  "Android:Kotlin 함수 정리"
author: "LSM"
tag : [android]
categories : [android]
---
## Kotlin 함수 정리 (let, apply, also, run, with)

### 범위 지정 함수 (Scoping function)

#### 구성요소

- receiver
- block code

---

※ let, run, with : 람다 결과를 리턴
※ apply, also는 context 객체를 리턴

1. let

   - null check 
   - nullable 객체를 다른 nullable 객체로 변환
   - 로컬 변수 범위 제한

   ```kotlin
   val person = getPerson()
   getPersonDao().let { dao ->
   	dao.insert(person) //dao 변수는 let으로 지정한 블록 범위까지만 이용이 가능
   }
   ```

   

2. apply

   - 블록 안에서 리시버의 메소드 접근을 하지 않을때(!?)
   - 같은 리시버로 리턴 받을 때 사용
   - 새 객체를 초기화 할 때 주로 사용

   ```kotlin
   val peter = Person().apply{ //메소드에 접근하지 않음
   	name = "Peter"
   	age = 19
   }
   ```

   

3. also

   - 리시버의 변수에 접근하지 않을 때
   - 리시버 변수를 변형하지 않을때

   ```kotlin
   class Book(author:Person){
   	val author = author.also{
   		requireNotNull(it.age)
   		print(it.name)
   	}
   }
   ```

   

4. run

   - 값을 계산하거나 여러 지역 변수의 범위 제한이 필요할 때 사용
   - 명시적 리시버를 암시적 리시버로 변경 가능

   ```kotlin
   val inserted:Boolean = run {
   	val person = getPerson()
   	val personDAO = getPersonDAO()
   	
   	personDao.insert(person)		
   }
   
   fun printAge(person:Person) = person.run{
       print(age)
   }
   ```

   

5. with
   - run 함수와 유사
   - null-check는 진행하지 않음 (non-nullable receivers)
   - 람다 결과를 리턴하지 않는 함수 처리에 추천



### 함수 중첩

- 중첩하여 사용하는 경우가 있으나 가독성이 떨어짐
- **apply, run, with** 함수는 중첩하여 사용하지 않는 것을 권장
  - 수신 객체를 this나 생략하여 사용하기 대문에 중첩하여 사용할 경우 혼동하기 쉬움
- 호출 체인에 결합 가능 (중첩보다 가독성이 올라감)



---

### References

- https://kotlinlang.org/docs/reference/scope-functions.html
- https://medium.com/@fatihcoskun/kotlin-scoping-functions-apply-vs-with-let-also-run-816e4efb75f5
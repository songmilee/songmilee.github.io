---
layout: post
title:  "TIL : URI Permission"
author: "LSM"
tag : [android]
categories : [til]
---

## URI Permission

외부 저장소를 접근해서 파일을 조작하는 어플리케이션을 개발하고 있는데, 앱을 삭제 후 다시 해당 어플리케이션이 만든 파일을 접근하고자 하면 **RecoverableSecurityException** 가 발생하였다.

URI에 대한 권한이 있으면 삭제가 가능하지만, 권한이 없으면 다음과 같은 RecoverableSecurityException이 발생한다.

intentSender를 이용해 사용자로부터 파일을 조작할 수 있는 권한을 받는다.

```java
try{
    ...
    ParcelFileDescriptor pdf = getContentResolver().openFileDescriptor(item, "wat", null);
} catch(RecoverableSecurityException e){
    IntentSender intentSender = e.getUserAction().getActionIntent().getIntentSender();
    startIntentSenderForResult(intentSender, REQ_CODE, null, 0, 0, 0, null);
}
```



startIntentSenderForResult로 받은 값은 onActivityResult 함수에서 결과를 받아 처리가 가능하다.

```java
@Override
protected void onActivityResult(int req, int res, Intent data) {
    super.onActivityResult(requestCode, resultCode, data);
    
    if(res == Activity.RESULT_OK && req == REQ_CODE){
        //결과 처리
    }
}
```


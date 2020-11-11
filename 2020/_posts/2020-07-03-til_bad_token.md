---
layout : post
author : lsm
title : TIL:BadTokenException
tag : [android]
categories : [til]
---

## Android Bad Token Exception

앱을 잘 실행하다가도 종종 다음과 같은 에러가 발생하면서 앱이 갑작스레 종료되었다. 특히 AlertDialog를 띄울 때 이 문제가 자주 발생하였다.

```
 android.view.WindowManager$BadTokenException: Unable to add window -- token android.os.BinderProxy@9a64a1 is not valid; is your activity running?
        at android.view.ViewRootImpl.setView(ViewRootImpl.java:1122)
        at android.view.WindowManagerGlobal.addView(WindowManagerGlobal.java:439)
        at android.view.WindowManagerImpl.addView(WindowManagerImpl.java:95)
        at android.app.Dialog.show(Dialog.java:473)
        at com.ldcc.lemp.core.mdm.download.MdmDownloadManager.showProgress(구현.java:187)
        at com.ldcc.lemp.core.mdm.download.MdmDownloadManager.checkAgentVersion(구현.java:92)
        at com.ldcc.lemp.core.mdm.MdmUtil.checkMdmAgentForLatest(구현.java:146)
        at com.ldcc.lemp.core.view.fragment.LPCFragmentActivity.onStart(구현.java:68)
        at android.app.Instrumentation.callActivityOnStart(Instrumentation.java:1433)
        at android.app.Activity.performStart(Activity.java:7978)
        at android.app.ActivityThread.handleStartActivity(ActivityThread.java:3512)
        at android.app.servertransaction.TransactionExecutor.performLifecycleSequence(TransactionExecutor.java:221)
        at android.app.servertransaction.TransactionExecutor.cycleToPath(TransactionExecutor.java:201)
        at android.app.servertransaction.TransactionExecutor.executeLifecycleState(TransactionExecutor.java:173)
        at android.app.servertransaction.TransactionExecutor.execute(TransactionExecutor.java:97)
        at android.app.ActivityThread$H.handleMessage(ActivityThread.java:2175)
        at android.os.Handler.dispatchMessage(Handler.java:107)
        at android.os.Looper.loop(Looper.java:237)
        at android.app.ActivityThread.main(ActivityThread.java:7857)
        at java.lang.reflect.Method.invoke(Native Method)
        at com.android.internal.os.RuntimeInit$MethodAndArgsCaller.run(RuntimeInit.java:493)
        at com.android.internal.os.ZygoteInit.main(ZygoteInit.java:1076)
```



9a64a1은 객체가 올라간 메모리 주소를 의미한다. 하지만, 현재 해당 주소에 객체가 존재하지 않는다는 의미이다. 

나의 경우는 앱을 Swipe 종료하고 다시 앱을 실행시키면 무조건적으로 위의 에러가 발생하였다. 

원인을 분석해 본 결과 앱에서 static으로 선언된 객체가 참조하는 context가 유효하지 않아 발생하는 문제였다. Service와 Activity에서 동시에 static 변수를 참조하고 있었는데 앱을 종료해도 서비스로 돌아가는 쪽에서 static 객체를 잡고 있어 메모리 상에 계속적으로 변수가 살아있었다. context는 Activity의 것을 받았는데 Activity는 이미 Destroy가 되서 더 이상 유효하지 않다는게 문제가 되었다.

```java
    @Override
    public void onTaskRemoved(Intent rootIntent) {
        super.onTaskRemoved(rootIntent);
        ...
        Util.getInstance(getBaseContext()).sendExitMsg();
		...
        this.stopSelf();
    }
```

[SwipeService.java]



```java
public void sendExitMsg(){
        ...
        instance = null;
        ...
}
```

```java
public static Util getInstance(Context context){
        if(instance == null){
            instance = new MdmUtil(context);
        }

        return instance;
}
```

[Util.java]



앱을 Swipe 하는 이벤트를 감지하면 종료 메시지를 보내는 서비스이다. 유효하지 않은 context 참조를 없애기 위해 sendExitMsg()에서 static 변수인 instance를 null로 초기화 시켰다. 앱을 실행하여 Util 인스턴스를 리턴할 때 새로운 인스턴스를 만듦으로써 유효한 context를 사용하게 하였다.

이렇게 해서 앱을 swipe 종료 했다 다시 실행해도 문제 없이 앱이 실행하는 것을 확인할 수 있었다!



---

### References

- https://stackoverflow.com/questions/9529504/unable-to-add-window-token-android-os-binderproxy-is-not-valid-is-your-activ
- http://dimitar.me/android-displaying-dialogs-from-background-threads/
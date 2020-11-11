---
layout : post
author : lsm
title : TIL:Connectivity Manager NetworkCallback
tag : [android]
categories : [til]				
---





안드로이드  7.0부터는 리시버에서 connectivity_action 브로드캐스트를 수신하지 않는다. (Manifest에 등록할 경우 수신을 하지 않고 registerReceiver를 이용해 등록한 경우 여전히 수신 가능 - **API 28 deprecated**) 이 대신 networkcallback 인터페이스를 구현하여 네트워크 변경 여부를 수신할 수 있다.



```kotlin
val builder = NetworkRequest.Builder()
builder.addTransportType(NetworkCapabilities.TRANSPORT_CELLULAR) //모바일 데이터 일 때만 호출

val cb = object:ConnectivityManager.NetworkCallback(){
    override fun onAvaliable(network:Network){
        super.onAvaliable()
        Log.e("onAvaliable", "모바일 데이터 연결됨")
    }
}

connMgr.registerNetworkCallback(builder.build(), cb) //콜백 등록
```



```kotlin
override fun onDestroy(){
    connMgr.unregisterNetworkCallback(cb)
}
```



---

### References

- https://developer.android.com/topic/performance/background-optimization?hl=ko
- [https://developer.android.com/reference/android/net/ConnectivityManager?hl=ko#requestNetwork(android.net.NetworkRequest,%20android.net.ConnectivityManager.NetworkCallback)](https://developer.android.com/reference/android/net/ConnectivityManager?hl=ko#requestNetwork(android.net.NetworkRequest, android.net.ConnectivityManager.NetworkCallback))
- https://developer.android.com/reference/android/net/ConnectivityManager.NetworkCallback?hl=ko
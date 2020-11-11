---
layout: post
title:  "JavascriptInterface"
author: "LSM"
tag : [android]
categories : [android]
---
# JavascriptInterface
- Web과 Native Application이 편하게 데이터를 주고 받을 수 있는 방법
- @JavascriptInterface 어노테이션을 통해 정의
```
@JavascriptInterface
public void setCustomJavascriptListener(onCustomJavascriptListener listener){
    this.listener = listener;
}
```
- Webview에서 JavascriptInterface 사용을 위해 addJavascriptInterface 호출 필요
```
webView.addJavascriptInterface("호출할 JavascriptInterface", "이름");
```
- 웹에서 일어나는 버튼 이벤트 등을 JavascriptInterface가 받아 처리하는 것이 가능해짐

---
### Reference
1. https://fimtrus.tistory.com/entry/Android-Hybrid-JavascriptInterface-%EC%82%AC%EC%9A%A9%EB%B2%95
2. https://thdev.tech/androiddev/2016/08/11/Android-WebView-JavascriptInterface-Example/
3. https://nicgoon.tistory.com/192

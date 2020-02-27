---
id: nanoplayer_supported_browsers
title: Support Browsers
sidebar_label: Supported Browsers
---

The low-latency nanoStream h5Live Player **runs on all full-featured HTML5 browsers** including

- Safari 10,11,12,13 on iOS, iPadOS and macOS
- Chrome 54 and higher on desktop and mobile
- Firefox 48 and higher
- Edge
- Internet Explorer 11 (starting Windows 8.1)

For Internet Explorer 11 on Windows 7, H5Live player contains a `Flash` player fallback for `RTMP`.



### Issues on specific systems

Generally nanoStream H5live player support in a certain browser depends on the 
availability of the involved technologies, codecs and formats. 
For Windows, macOS and Android: 

- HTML5 Video 
- Web Sockets 
- Media Source Extensions 
- Support for `fMP4`, `H.264` Video, `AAC` Audio 

On iOS, nanoStream H5Live uses a unique version of `HLS` which works plugin-free on all Safari versions starting iOS 10.

On some Android-based mobile devices, the default browser is a stripped-down version not featuring all HTML5 elements. For example, the Samsung Internet browser is rather based on Chromium than Chrome. 
This results in differences regarding the support of certain technologies, codecs and formats. 
[See here for more info](https://www.chromium.org/audio-video)

The Samsung Internet Android browser is one example, where the HTML5 Media Source Extension is missing or disabled, one of the key HTML5 technologies.

We have been able to confirm that the MSE feature can be enabled through 

    internet://flags 

in version 6.4, while the default was `'disabled'`. 
In version 7(.2) this flag has been removed while the default seems to be `'disabled'` still. We are ongoing monitoring Samsung Internet progress.

The nanoPlayer setup call is returning a specific error message in case that the browser does not support one of the required technologies.

> **Setup Error:** "This browser does not fully support HTML5 and H5Live. 
>
> Supported are:
>
> - Chrome >=54 (Windows, macOS, Android)
> - Firefox >=48 (Windows, macOS, Android)
> - Microsoft Edge (Windows), Microsoft Internet Explorer 11 (at least Windows 8)
> - Safari (macOS & at least iOS 10)."

```javascript
player.setup(config).then(function (config) {
    console.log("setup success");
}, function (error) {
    alert(error.message);
});
```

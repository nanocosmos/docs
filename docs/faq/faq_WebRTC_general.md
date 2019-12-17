---
id: faq_WebRTC_general
title: General
sidebar_label: General
---

<details><summary><strong>Do we support all types of cameras?</strong></summary>

Camera support is dependent on your browser, which will do the live capture in WebRTC.
You can try the WebRTC Camera Test Page for "getusermedia" [here](https://webrtc.github.io/samples/src/content/devices/input-output/).

</details>


<details><summary><strong>Which browsers do we support?</strong></summary>
Generally we support the two major desktop platforms Windows and MacOS and Android and iOS as mobile platforms. Because WebRTC is an “in development” technology there are minor restrictions regarding browser support. 

>  Please see the below list for platform/browser combinations that we support officially.

|         | Chrome | Firefox |      MS Edge     | Safari |
|---------|--------|---------|------------------|--------|
| Windows |    x   |    x    | with limitations |    -   |
|  MacOS  |    x   |    x    |         -        | => v11  |
|   iOS   |    -   |    -    |         -        | => v11  |
| Android |    x   |    -    |         -        |    -   |

</details>

<details><summary><strong>How can I check browser support?</strong></summary>

You can check the static capabilities array of the NanoPlayers class `NanoPlayer.capabilities`. If the array has values, the player is supported. Values can be `h5live`, `flash` and `native`.

You might also try the webrtc sample pages at https://webrtc.github.io/samples/ and https://test.webrtc.org/

</details>

<details><summary><strong>How to check browser support during runtime?</strong></summary>
You can call the function `RtcUser.checkSupport()`. It will give you information about support regarding the currently used browser. 

> You can find more information [here](../../webrtc/nanostream_webrtc_api#rtcuserchecksupport) in the WebRTC Docs.

</details>

<details><summary><strong>Is WebRTC supported in a Webview on iOS and Android?</strong></summary>
WebRTC works both on the native browsers Safari on iOS and Chrome on Android.
For in-app usage for developers, the Android Webview works, but on iOS, camera support is not enabled by Apple yet.
Playback with H5Live player works fine on both systems.
There is one restriction about codec support, the systems need to support both H264 video for encoding and playback, and Opus audio for encoding, and AAC audio for playback.

</details>

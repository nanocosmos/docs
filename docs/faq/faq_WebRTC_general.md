---
id: faq_WebRTC_general
title: General
sidebar_label: General
---

<details><summary><strong>Do we support all types of cameras?</strong></summary>

We support all common cameras that can be connected to the PC via USB.

</details>

<details><summary><strong>Do we support IP cameras?</strong></summary>

No, not yet.

</details>

<details><summary><strong>Which browsers do we support?</strong></summary>
Generally we support the two major desktop platforms Windows and MacOS and Android and iOS as mobile platforms. Because WebRTC is an “in development” technology there are minor restrictions regarding browser support. 

>  Please see the below list for platform/browser combinations that we support officially.

|         | Chrome | Firefox |      MS Edge     | Safari |
| Windows |    x   |    x    | with limitations |    -   |
|  MacOS  |    x   |    x    |         -        |   v11  |
|   iOS   |    -   |    -    |         -        |   v11  |
| Android |    x   |    -    |         -        |    -   |



![Tabelle](C:\Users\nano\Desktop\Markdown_faq\Tabelle.PNG)

</details>

<details><summary><strong>Is Internet Explorer 11 on Windows 7 supported?</strong></summary>

For IE 11 Win 7 we provide a flash fallback with with limited but basic functionality.

</details>

<details><summary><strong>Can I check capabilities?</strong></summary>

Yes, you can check the static capabilities array of the NanoPlayers class `NanoPlayer.capabilities`. If the array has values, the player is supported. Values can be `h5live`, `flash` and `native`.

</details>

<details><summary><strong>How to check browser support during runtime?</strong></summary>
You can call the function `RtcUser.checkSupport()`. It will give you information about support regarding the currently used browser. 

> You can find more information [here](http://docs.nanocosmos.de/docs/webrtc/nanostream_webrtc_api#rtcuserchecksupport) in the WebRTC Docs.

</details>
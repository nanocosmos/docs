---
id: faq_WebRTC_general
title: General
sidebar_label: General
---

<details><summary><strong>Do we support all types of cameras?</strong></summary>

We support all common cameras that can be connected to the PC via USB.

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

<details><summary><strong>How can I check browser support?</strong></summary>

You can check the static capabilities array of the NanoPlayers class `NanoPlayer.capabilities`. If the array has values, the player is supported. Values can be `h5live`, `flash` and `native`.

</details>

<details><summary><strong>How to check browser support during runtime?</strong></summary>
You can call the function `RtcUser.checkSupport()`. It will give you information about support regarding the currently used browser. 

> You can find more information [here](http://docs.nanocosmos.de/docs/webrtc/nanostream_webrtc_api#rtcuserchecksupport) in the WebRTC Docs.

</details>
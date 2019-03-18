---
id: nanostream_webrtc_getting_started
title: Getting started
sidebar_label: Getting started
---
## How to use WebRTC.live with nanoStream Cloud?

It is very simple to test and use nanoStream WebRTC.live as your live encoder to nanoStream Cloud with integrated nanoStream H5Live Player. You need a camera connected to your computer or built-in on your device, and a WebRTC-compatible browser. We recommend using Google Chrome.

### Create your own nanoStream Cloud account

To stream directly to nanoStream Cloud you will need to register at [bintu.live](http://bintu.nanocosmos.de/) . 

>Bintu.live is the rest API and stream management tool included in nanoStream Cloud. You can find the step-by-step guide to register by [clicking here.](https://www.nanocosmos.de/blog/2016/07/live-streaming-with-bintu-live/)
>
>Once registered, you can create new URLs by calling the bintu API with a valid API key.

-----

### Easy and quick demo for simple tests

1. Click [here]([https://nanocosmos.de/webrtc) to try the WebRTC.live demo. 

<br>

2. On the right-hand side of the page you see the WebRTC.live broadcast from your camera.


![img](https://i2.wp.com/www.nanocosmos.de/blog/wp-content/uploads/2018/03/3.png?resize=360%2C361&ssl=1)

<br>
3. Click on the image for a webcam preview.

![img](https://i2.wp.com/www.nanocosmos.de/blog/wp-content/uploads/2018/03/4.png?resize=360%2C384&ssl=1)

<br>
4. Click on the orange button to start the broadcast. You will need to provide your email first.

![img](https://i0.wp.com/www.nanocosmos.de/blog/wp-content/uploads/2018/03/5.png?resize=360%2C394&ssl=1)

<br>
5. Your broadcast will then start: the live stream is sent to nanoStream Cloud and a new window from nanoStream H5Live Player will appear right below with your live stream.

![img](https://i0.wp.com/www.nanocosmos.de/blog/wp-content/uploads/2018/03/6.png?resize=360%2C388&ssl=1)
![img](https://i2.wp.com/www.nanocosmos.de/blog/wp-content/uploads/2018/03/7.png?resize=360%2C392&ssl=1)

>  The H5Live Player shows the low latency live stream coming from nanoStream Cloud. You can share the URL to test low latency live playback on any HTML5 browser.
-----

### Try our sample page

 Click [here](https://webrtc.nanocosmos.de/release/webcast.html?bintu.apikey=YOURAPIKEY) to use our sample web page with all broadcast features for further testing. 

> Note: You need a nanoStream Cloud / bintu.live account and API key to use this page. Click [here](www.bintu.live) for instructions.

<br>

1. Open the page in a WebRTC-compatible browser (Chrome or Firefox) and  add your bintu API key to the browser URL.

```
https://webrtc.nanocosmos.de/release/webcast.html?bintu.apikey=YOURAPIKEY
```
<br>
![img](https://i1.wp.com/www.nanocosmos.de/blog/wp-content/uploads/2018/03/8.png?resize=800%2C444&ssl=1)

<br>
2. You will see a preview of your camera image or screen in the `Local Video` window.

<br>
3. If you want to choose another camera or microphone, select `options`.

<br>

4. You are then ready to start your broadcast. Simply click on `broadcast` to start the live stream.

![img](https://i1.wp.com/www.nanocosmos.de/blog/wp-content/uploads/2018/03/9.png?resize=360%2C79&ssl=1)

<br>
5. The live stream is sent to nanoStream Cloud and can be played with the H5Live player.
To start playback click on `play h5live stream`  below the Broadcast Settings.

![img](https://i0.wp.com/www.nanocosmos.de/blog/wp-content/uploads/2018/03/10.png?resize=240%2C59&ssl=1)

<br>
6. The player will open in a new web page. You share this web page and open on all HTML5 browsers to play the live stream in ultra-low-latency.
  The player page also shows a Javascript code snippet to embed on your own web page.



[![img](https://i1.wp.com/www.nanocosmos.de/blog/wp-content/uploads/2018/03/h5live-2.png?resize=300%2C279&ssl=1)](https://i1.wp.com/www.nanocosmos.de/blog/wp-content/uploads/2018/03/h5live-2.png?ssl=1)

> Click [here](www.test.com) for more information on  how to embed the H5LivePlayer on your own webpage.

<br>

7. Broadcast configuration

The WebRTC.live broadcast configuration is automatically set to `H264 video` with `500 kbits/s`. Audio is sent with the `Opus audio codec` and will be transcoded automatically to `AAC` for live distribution with nanoStream Cloud.

[
![img](https://i0.wp.com/www.nanocosmos.de/blog/wp-content/uploads/2018/03/Screenshot-2018-03-28-11.20.21.png?resize=640%2C804&ssl=1)](https://www.nanocosmos.de/blog/wp-content/uploads/2018/03/Screenshot-2018-03-28-11.20.21.png)
-----

###  Embed nanoStream WebRTC.live as a live encoder and nanoStream H5Live Player in your own webpage

TODO

Click [here](www.test.de) to read on *how to embed nanoStream WebRTC.live and nanoStram H5Live Player in your own web page* in no time. 
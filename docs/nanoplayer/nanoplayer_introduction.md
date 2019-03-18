---
id: nanoplayer_introduction
title: Introduction
sidebar_label: Introduction
---
![Schema](https://www.nanocosmos.de/blog/wp-content/uploads/H5Live-Schema.png?direct&600)

## H5Live Overview

nanoPlayer with H5Live is the perfect playback solution for live video streaming in HTML5 web browsers. **Low latency live streaming** (`0.5-2 seconds end-to-end`) and a future-proof, plugin-free implementation enables a lot of exciting use cases. H5Live runs on any platform and is a great replacement for existing Flash players based on RTMP.

H5Live requires the `H5Live server` and `H5Live client`. The server can run as part of the nanoStream cloud services and bintu.live API, You can also obtain a server package for on-premise installations.

H5Live player works on any browser and operates in different modes:

- `fMP4` / `WebSocket` / `MediaSource`: compatible to Chrome, Firefox and other browsers
- `HLS low-latency`: compatible to Safari on iOS and MacOS
- `MP4`: compatible to settop boxes and TV Sets

## H5Live Cloud Usage

H5Live cloud is a global, geo-load-balanced content delivery network which you can use to play your RTMP live streams with ultra-low-latency. It is based on H5Live server components and plugin-free HTML players to “pull” any existing RTMP stream. 
It can be configured by the player client with a Javascript API or with our demo player page directly on the player URL.

## H5Live Server / On-Premise

H5Live server is a software package which you can install on your own server. It is very light-weight and can be used in combination with your existing streaming server environment.
You find more information and installation instructions in the download package of h5live-server.

## H5Live Configuration

### Demo Player Web Page Example

Click [here](http://demo.nanocosmos.de/nanoplayer/release/nanoplayer.html?h5live.token=%7B%22type%22:%22token1%22,%22key%22:CUSTOMERTOKEN123%22%7D&h5live.rtmp.url=rtmp://streaming.server.com/live&h5live.rtmp.streamname=myStreamName) to test the Demo Player

### Configuration

You need to add your own RTMP URLs to play your live streams:

- URL Parameters:
 - You need to change the URL parameters for your setup.

  Unique customer token: `CUSTOMERTOKEN` - **replace with the one you receive in your email**

 - `h5live.token` is to unlock your account (you may need to change this based on your license)

Example: 
```
h5live.token=h5live.token={"type":"token1","key":CUSTOMERTOKEN"}
```

### RTMP Stream configuration:
You can "pull" any existing live rtmp stream:

```
h5live.rtmp.url=rtmp://`<yourserver-address>`/`<yourserver-application
```
```
h5live.rtmp.streamname=`<yourserver-streamname>`
```

### RTMP Example
> **Attention:**
> You need to replace `streaming.server.com` and `myStreamName` with your own configuration.
```
h5live.rtmp.url=rtmp://streaming.server.com/live
```
```
h5live.rtmp.streamname=myStreamName
```


Below the video element you should see your URL then.
The` “tech: h5live”` information shows you that the plugin-free H5Live technology is used.

Player API documentation:
[http://demo.nanocosmos.de/nanoplayer/docs/nanoplayer](http://demo.nanocosmos.de/nanoplayer/docs/nanoplayer)

## nanoStream + bintu.live end-to-end streaming

>H5Live integrates with nanoStream Live Encoder SDKs and nanoStream Cloud with bintu.live for complete end-to-end live streaming services in ultra-low latency.

There are different possible use cases for interactive live streaming, including grouping and tagging live streams. You can create web pages which query for specific bintu tags and show their live streams accordingly.

Example playback URL with bintu.live:

```
http://demo.nanocosmos.de/nanoplayer/release/nanoplayer.html?bintu.apiurl=https://bintu.nanocosmos.de&bintu.streamid=b95225dd-3dd1-4d23-8eb0-232909aadab5
```

>h5live can be used in combination with our nanoStream SDKs for Windows, Mac, iOS, Android or the plugin-free browser-based WebRTC.live solution to create plugin-free interactive live streaming applications.

## nanoStream Cloud Analytics and Player Metrics

Todo

## More Information
[Product Overview and Live Demo](https://www.nanocosmos.de/h5live)

[API Documentation](https://demo.nanocosmos.de/nanoplayer/docs/nanoplayer/)

[H5Live FAQ](https://www.nanocosmos.de/blog/2017/05/nanostream-h5live-low-latency-faq/)

## Questions? 
please contact:

[sales@nanocosmos.de](mailto:sales@nanocosmos.de) for business related questions

[support@nanocosmos.de](mailto:support@nanocosmos.de) for technical questions.
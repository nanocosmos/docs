---
id: nanoplayer_introduction
title: Introduction
sidebar_label: Introduction
---
![Schema](https://www.nanocosmos.de/blog/wp-content/uploads/H5Live-Schema.png?direct&600)

## H5Live Overview

nanoStream H5Live is a client-server technology based on nanoStream Cloud and nanoStream H5Live Player (aka nanoPlayer). It is the perfect playback solution for live video streaming in all HTML5 web browsers, with  **Ultra-Low latency live streaming** (`around 1 second end-to-end, glass-to-glass`) . The future-proof, plugin-free implementation enables a lot of exciting use cases. 

H5Live requires the `H5Live server` and `H5Live client`. The server runs as part of the nanoStream cloud services and global CDN for providing the best end-to-end user experience with a global scale.

[More info and demo on our web page](https://www.nanocosmos.de/h5live)

## H5Live Usage

nanoStream Cloud is a global, geo-load-balanced content delivery network which you can use to deliver and play your live streams with ultra-low-latency.  
It can be configured by the player client with a Javascript API or with our demo player page directly with a player URL.

## H5Live Configuration

### Demo Player Web Page Example

The best way to use H5Live is as part of nanoStream Cloud. You can send a live stream to nanoStream Cloud and use the H5Live Player for playback on all browsers.
See the nanoStream Cloud - Getting Started Documentation for details.

### Configuration

You need to use the playback URL to play your live streams.
You can obtain the playback URL from the nanoStream Cloud / bintu API or dashboard. 

## nanoStream + bintu.live end-to-end streaming

>H5Live integrates with nanoStream Live Encoder SDKs and nanoStream Cloud with bintu.live for complete end-to-end live streaming services in ultra-low latency.

There are different possible use cases for interactive live streaming, including grouping and tagging live streams. You can create web pages which query for specific bintu tags and show their live streams accordingly.

For playback with nanoStream Cloud, you need to send ("push") a live stream to the bintu system. You obtain an ingest and playback URL from the bintu dashboard or API.  

Example playback URL with bintu.live:

```
http://demo.nanocosmos.de/nanoplayer/release/nanoplayer.html?bintu.apiurl=https://bintu.nanocosmos.de&bintu.streamid=b95225dd-3dd1-4d23-8eb0-232909aadab5
```

>h5live can be used in combination with our nanoStream SDKs for Windows, Mac, iOS, Android or the plugin-free browser-based nanoStream Webcaster solution to create plugin-free interactive live streaming applications.

#### Pull Mode

Note: it is recommended to use the "push" mode to nanoStream Cloud as described above.
If you have a running live stream and server already, you can also use H5Live Player with existing RTMP streams to pull from your server.  

Click [here](http://demo.nanocosmos.de/nanoplayer/release/nanoplayer.html?h5live.token=%7B%22type%22:%22token1%22,%22key%22:CUSTOMERTOKEN123%22%7D&h5live.rtmp.url=rtmp://streaming.server.com/live&h5live.rtmp.streamname=myStreamName) to test the Demo Player

- URL Parameters:
 - You need to change the URL parameters for your setup.

```
h5live.rtmp.url=rtmp://`<yourserver-address>`/`<yourserver-application
h5live.rtmp.streamname=`<yourserver-streamname>`
```

  Unique customer token: `CUSTOMERTOKEN` - **replace with the one you receive in your email**

 - `h5live.token` is to unlock your account (you may need to change this based on your license)

Example: 
```
h5live.token=h5live.token={"type":"token1","key":CUSTOMERTOKEN"}
```

## H5Live Operating Modes

H5Live player works on any browser and operates in different modes:

- `fMP4` / `WebSocket` / `MediaSource`: compatible to Chrome, Firefox and other browsers
- `HLS low-latency`: compatible to Safari on iOS and MacOS
- `MP4`: compatible to settop boxes and TV Sets

You do not need to worry about these modes, they are automatically selected by the player.

## More Information
[Product Overview and Live Demo](https://www.nanocosmos.de/h5live)

[API Documentation](../nanoplayer_api)

[H5Live FAQ](../../faq/faq_streaming)

## Questions? 
please contact:

[sales@nanocosmos.de](mailto:sales@nanocosmos.de) for business related questions

[support@nanocosmos.de](mailto:support@nanocosmos.de) for technical questions.
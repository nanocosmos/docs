---
id: nanostream_webrtc_browser_api
title: nanoStream WebRTC Browser API
sidebar_label: Browser API
---

## nanoStream WebRTC Browser API

The nanoStream WebRTC Browser API is based on a Javascript API connected to the nanoStream WebRTC Server. It can be used for creating your own live video broadcast web page for plugin-free live streaming with WebRTC.

See the separate documentation for our ready-to-use web page for instant streaming.

See our [blog article](https://www.nanocosmos.de/blog/2016/11/setting-up-nanostream-webrtc-for-live-video-broadcast/).



### Hosting Requirements

You will need the following requirements to be fulfilled in order to host a WebRTC driven website on your own infrastructure:

- HTTPS: **WebRTC client web pages need to be hosted via HTTPS** for accessing media devices within the browser and for connecting to the server component. Therefore you will need a valid SSL certificate.
- Supported browsers: As of 2018, Chrome, Firefox, Edge and Safari are supported. For mobile platforms we recommend Safari on iOS (min iOS11) and Chrome for Android. 



### Broadcast Sample

The following sample shows how to initiate a broadcast (one-to-many stream) from a WebRTC enabled HTML5 browser.

The stream is sent to an `RTMP` ingest point which you can get from our bintu.live API.
Playback can be done with nanoStream H5Live Player.

Be sure to attach a video device (webcam) to your computer.

You also find a full running [sample at codepen](https://codepen.io/nanocosmos-ol/pen/Xybadx)



###  Setup The User Interface & Embed The Library 

Within your HTML:
```xml
<body>
  <!-- videoelement to preview your video device (camera) -->
  <video id="video-local" autoplay playsinline style="width:800;height:600"></video>

  <!-- buttons for start/stop of broadcast -->
  <button id="btn-startbroadcast">broadcast</button>
  <button id="btn-stopbroadcast">stop broadcast</button>
	
  <!-- embed the nanoStream WebRTC.live library -->
  <!-- replace "<version>" with the version contained in your package -->
  <script src="./js/api/webrtc/nano.webrtc.<version>.min.js"></script>
</body>
```



### Minimal Broadcast Sample

```javascript
<script type="text/javascript">
    // entry point
    
    // create user object
    var user = new window.nanowebrtc.user();
    
    // sign into the cloud
    user.signIn({
      server: "wss://bintu-webrtc.nanocosmos.de/p/webrtcws",
      userName: "myName",
      room: "myRoom",
      // token or bintu API key for authentication
      token: "myToken",
      bintuApiKey: "myBintuApiKey"
    });
    
    // example bintu rtmp url
    // you should use the bintu api to obtain a valid ingest URL (see below)
    var myOutputStream = "rtmp://bintu-stream.nanocosmos.de/live/P4gSV-12345";
        
    // get connected devices
    user.getDevices();
        
    // devices have been gathered
    user.on("ReceivedDeviceList", function(event) {
    
      // available devices will be listed in "event.data":
      var audioDevices = event.data.devices.audiodevices;
      var videoDevices = event.data.devices.videodevices;
    
      // we choose the first video device:
      var videoDeviceConfig = {
        device: 0
      };
          
      // we choose the first audio device:
      var audioDeviceConfig = {
        device: 0
      };
    
      // we start the preview in a video element:
      var videoElement = "video-local"; // id of `<video>` tag for preview
      
      var config = {
        videoDeviceConfig: videoDeviceConfig,
        audioDeviceConfig: audioDeviceConfig,
        elementId: videoElement
      };
          
      user.startPreview(config);
      
    });
        
    user.on("StartPreviewSuccess", function(event) {  
      // preview succeeded
    });
        
    user.on("StartPreviewError", function(event) {
      // handle error
    });
        
    document.getElementById("btn-startbroadcast").addEventListener("click", function() {      
      var broadcastConfig = {
        transcodingTargets: {
          output: myOutputStream 
        }
      };
          
      // start the broadcast
      user.startBroadcast(broadcastConfig);
    });
    
    document.getElementById("btn-stopbroadcast").addEventListener("click", function() {
      // stop the broadcast
      user.stopBroadcast();
    });
        
    user.on("StartBroadcastSuccess", function(event) {
      // broadcast has started
    });
        
    user.on("StartBroadcastError", function(event) {
      // handle error
    });
</script>
```



## API Documentation

See the full documentation on the window.nanowebrtc.user object:

https://webrtc.nanocosmos.de/release/doc/webrtc/index.html



## nanoStream Cloud End-To-End Workflow

The following describes a plugin free end to end streaming solution with nanostream WebRTC, nanostream cloud and nanostream h5live player.



## Creating a live stream for broadcasting

To create a live stream to broadcast to your audience, you need to obtain an `RTMP` ingest URL from either nanoStream Cloud / bintu.live or your own `RTMP` server.



### Creating a stream for bintu.live with bintu.js

If you don't already have a stream url you can create a new webrtc enabled stream with our bintu.js which is included in the nanoStream WebRTC Browser API.

```javascript
<script src="./js/api/bintu/nano.bintu.js"></script>

<script type="text/javascript">
    var bintu = new Bintu(BintuApiKey, "https://bintu.nanocosmos.de", true, true);

    var bintuTags = ['newTag, test, webrtc']; // optionally add tags to the stream
    
    bintu.createStream(bintuTags, function success(request) {
      var response = JSON.parse(request.responseText);
      var ingest = response.ingest;
      var rtmp = ingest.rtmp;
      var url = rtmp.url;
      var streamname = rtmp.streamname;
      var ingestUrl = url + '/' + streamname;
    }, function onerror(error) {
      console.log(error);
    });

</script>
```

for more information see: [bintu.js documentation](https://webrtc.nanocosmos.de/release/doc/bintu/Bintu.html)



### Streaming to an RTMP URL

If you have a valid `RTMP` URL, you can use this to create a live broadcast: (see the example above):

```javascript
// example bintu rtmp url
// you should use the bintu api to obtain a valid ingest URL (see below)
var myOutputStream = "rtmp://bintu-stream.nanocosmos.de/live/P4gSV-12345";
var broadcastConfig = {
	transcodingTargets: {
        output: myOutputStream;
    }
};
```



## Live Stream Configuration

```javascript
var broadcastConfig = {
	transcodingTargets: {
    	output: rtmpurl,                      	// rtmp live stream URL
        videobitrate: entries.videoBitrate,   	// rtmp/h264 video bitrate
        audiobitrate: entries.audioBitrate,   	// rtmp/aac audio bitrate
        framerate: entries.framerate,         	// rtmp/h264 video framerate
        dropframes: this.dropframes,          	// rtmp/h264 allow dropframes
        h264passthrough: this.h264passthrough, 	// rtmp/h264 passthrough streaming
    }
}
```



## Streaming to nanoStream Cloud

The bintu.live REST API or Dashboard can be used to generate and manage live streams.

https://www.nanocosmos.de/v4/documentation/documentation#nanostream_cloud_bintulive_api



## Stream Status

the call to https://bintu.nanocosmos.de/doc/#stream-stream-info should give you all the info. The "state" value should be "live" when your broadcast is running.

Example:

```json
{
   "id":"123456-e7a1-46a6-9572-1037beff926c",
   "state":"live",
   "type":"low-latency",
   "created_at":"2018-10-02T08:53:50.377Z",
   "webrtc":true,
   "transcoding":false,
   "webrtc_server":"https://rtc1.nanocosmos.de/prod",
   "tags":[
      "myTag"
   ],
}
```



## Playing back from our servers

For additional info on the h5live player, see [here](https://www.nanocosmos.de/v4/documentation/nanoplayer-h5live)



## Camera / Capture Device Testing

https://webrtc.github.io/samples/src/content/devices/input-output/



## Screen Sharing 

`WebRTC` supports screen sharing! You can use a screen or a window, depending on a browser used, as a live video source instead of a web camera.

Screen sharing is currently available in:

  * Google Chrome
  * Firefox



## Screen sharing with Google Chrome

Chrome on Desktop since version 72 supports screen sharing without any further installation.
For former versions, a certified browser extension was required due to Google security policy.

You find the nanoStream branded screen capture extension [here](https://chrome.google.com/webstore/detail/nanostream-screen-capture/jfjljfmoopheadghnkjbonkmgbkjhjdo)



## Reporting bugs or issues 

To report any bugs or issues, please send a complete issue report including the following:

- a description of the issue and expected results
- the configuration you are using for webrtc, bintu.live and h5live
- potential stream IDs which show the issue
- how to replicate the issue



### Log information

#### browser console log

Press `Ctrl+Shift+J` or `F12` (Windows / Linux) or `Cmd+Opt+J` (Mac)
copy/paste the result of the console



#### use debug-log information 

Enhanced logging can be enabled by adding `&debug=3` to the web page URL



#### Chrome webrtc-internals 

Open a separate browser tab and open the URL `chrome://webrtc-internals` click `dump` and download the data and send to us.



### Remote Support 

- any potential issues might be best resolved based on a remote support session,
    dependent on your support level.
    Please contact us to arrange an online meeting.


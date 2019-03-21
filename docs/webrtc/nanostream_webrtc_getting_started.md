---
id: nanostream_webrtc_getting_started
title: Getting started
sidebar_label: Getting started
---
## How to use WebRTC.live with nanoStream Cloud?

It is very simple to test and use nanoStream WebRTC.live as your live encoder to nanoStream Cloud with integrated nanoStream H5Live Player. You need a camera connected to your computer or built-in on your device, and a WebRTC-compatible browser. We recommend using Google Chrome.

### Create your own nanoStream Cloud account

To stream directly to nanoStream Cloud you will need to register at [bintu.live](https://bintu.nanocosmos.de/) . 

>Bintu.live is the rest API and stream management tool included in nanoStream Cloud. You can find the step-by-step guide to register by [clicking here.](http://docs.nanocosmos.de/docs/cloud/cloud_getting_started)
>
>Once registered, you can create new URLs by calling the bintu API with a valid API key.

-----

## nanoStream WebRTC Browser API

The nanoStream WebRTC Browser API is based on a Javascript API connected to the nanoStream WebRTC Server. It can be used for creating your own live video broadcast web page for plugin-free live streaming with WebRTC.




### Hosting Requirements

You will need the following requirements to be fulfilled in order to host a WebRTC driven website on your own infrastructure:

- HTTPS: **WebRTC client web pages need to be hosted via HTTPS** for accessing media devices within the browser and for connecting to the server component. Therefore you will need a valid SSL certificate.
- Supported browsers: As of 2018, Chrome, Firefox, Edge and Safari are supported. For mobile platforms we recommend Safari on iOS (min iOS11) and Chrome for Android. 



## Broadcast Sample

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
    
    // set bitrate config, 0=default
    user.setConfig({
         bitrates: {
           videoSendInitialBitrate: 500, // initial webrtc bitrate 500 kbits/s
           videoSendBitrate: 1500 // target webrtc bitrate 1500 kbits/s
         }
    );

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

> You can find the bintu.js documentation [here](https://webrtc.nanocosmos.de/release/doc/bintu/Bintu.html)



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

> More information can be found [here](http://docs.nanocosmos.de/docs/cloud/cloud_getting_started).



## Stream Status

The call to
```
/stream/<YOUR-STREAM-ID>
```
should give you all the info. The `state` value should be `live` when your broadcast is running.

> You can find the full bintu.live documentation [here](https://bintu.nanocosmos.de/doc/#stream-stream-info).



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

You can play back from our servers with the [H5Live Player](http://docs.nanocosmos.de/docs/nanoplayer/nanoplayer_introduction)



## Camera / Capture Device Testing

https://webrtc.github.io/samples/src/content/devices/input-output/


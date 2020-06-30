---
id: nanostream_webrtc_getting_started
title: Getting started
sidebar_label: Getting started
---
## How to use nanoStream Webcaster with nanoStream Cloud?

It is very simple to test and use nanoStream Webcaster as your live encoder to nanoStream Cloud with integrated nanoStream H5Live Player. You need a camera connected to your computer or built-in on your device, and a WebRTC-compatible browser. We recommend using Google Chrome.

### Create your own nanoStream Cloud account

To stream directly to nanoStream Cloud you will need to register at [bintu.live](https://bintu.nanocosmos.de/) . 

>Bintu.live is the rest API and stream management tool included in nanoStream Cloud. You can find the step-by-step guide to register by [clicking here.](../../cloud/cloud_getting_started)
>
>Once registered, you can create new URLs by calling the bintu API with a valid API key.

-----

## nanoStream Webcaster Browser API

The nanoStream Webcaster Browser API is based on a Javascript API connected to the nanoStream WebRTC Server. It can be used for creating your own live video broadcast web page for plugin-free live streaming with WebRTC.




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
	
  <!-- embed the nanoStream Webcaster library -->
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
    var myOutputStreamUrl = "rtmp://bintu-stream.nanocosmos.de/live";
    var myOutputStreamName = "P4gSV-12345";
        
    // get connected devices
    user.getDevices();
        
    // devices have been gathered
    user.on("ReceivedDeviceList", function(event) {
    
      // available devices will be listed in "event.data":
      var audioDevices = event.data.devices.audiodevices;
      var videoDevices = event.data.devices.videodevices;
    
      // SELECT A/V DEVICES TO PREVIEW 
      // select a device by index from audioDevices/videoDevices,
      // for simplicity of this sample we select the first device
      // for audio and video (index = 0) in the next step.
      // you might need to change this for multiple cams/mics 
 
      // we choose the first video device:
      var videoDeviceConfig = {
        device: 0 // first camera
      };
          
      // we choose the first audio device:
      var audioDeviceConfig = {
        device: 0 // first microphone
      };
    
      // we start the preview in this html <video> element:
      var videoElement = "video-local"; 
      
      var config = {
        videoDeviceConfig: videoDeviceConfig,
        audioDeviceConfig: audioDeviceConfig,
        elementId: videoElement
      };
          
      // start camera preview
      user.startPreview(config);
      
    });

    // start/stop button handlers
    
    document.getElementById("btn-startbroadcast").addEventListener("click", function() {      
      var broadcastConfig = {
        transcodingTargets: {
          output: myOutputStreamUrl,
          streamname: myOutputStreamName
        }
      };
          
      // start the broadcast
      user.startBroadcast(broadcastConfig);
    });
    
    document.getElementById("btn-stopbroadcast").addEventListener("click", function() {
      // stop the broadcast
      user.stopBroadcast();
    });

    // event/error handlers
 
    user.on("StartPreviewSuccess", function(event) {  
      console.log("preview succeeded");
    });
 
    user.on("StartPreviewError", function(event) {
      console.log('Error starting preview: ' + event.data.error);
    });

    user.on("StartBroadcastSuccess", function(event) {
      // broadcast has started
    });
        
    user.on("StartBroadcastError", function(event) {
      // handle error
    });
</script>
```

## Streaming only audio or video

If you want to braodcast a stream that contains only audio or video you can do that by starting the preview accordingly:

```javascript
...
// we pass "false" for either the video device configuration or
// for the audio device configuration
 var videoDeviceConfig = {
  device: false // set "device: false" for "audio only" streaming
 };
 
 // we choose the first audio device:
 var audioDeviceConfig = {
  device: false // set "device: false" for "video only" streaming
 };

var config = {
  videoDeviceConfig: videoDeviceConfig,
  audioDeviceConfig: audioDeviceConfig,
  elementId: videoElement
};
 
user.startPreview(config);
...
```

## nanoStream Cloud End-To-End Workflow

The following describes a plugin-free end to end streaming solution from the camera to the viewer, with nanostream Webcaster, nanoStream Cloud and nanoStream h5live player.



## Creating a live stream for broadcasting

To create a live stream to broadcast to your audience, you need to obtain an `RTMP` ingest URL from either nanoStream Cloud / bintu.live or your own `RTMP` server.



### Creating a stream for bintu.live with bintu.js

If you don't already have a stream url you can create a new webrtc enabled stream with our bintu.js which is included in the nanoStream Webcaster Browser API.

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

> You can find the bintu.js documentation [here](../../cloud/bintu_api)


For instructions on how to setup the webcaster for screen sharing please follow this link: [Features > Screen Sharing](./nanostream_webrtc_screen_sharing#how-to-enable-screen-sharing-in-the-api/)

### Streaming to an RTMP URL

If you have a valid `RTMP` URL, you can use this to create a live broadcast: (see the example above):

```javascript
   // example bintu rtmp url
   // you should use the bintu api to obtain a valid ingest URL
   var myOutputStreamUrl = "rtmp://bintu-stream.nanocosmos.de/live/";
   var myOutputStreamName = "P4gSV-12345";
 
   var broadcastConfig = {
       transcodingTargets: {
           output: myOutputStreamUrl,
           streamname: myOutputStreamName
       }
   };
 
    // start the broadcast
    user.startBroadcast(broadcastConfig);
```



```javascript
var broadcastConfig = {
	transcodingTargets: {
        output: myOutputStreamUrl,  // rtmp://...
        streamname: myOutputStreamName
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

> More information can be found [here](../../cloud/cloud_getting_started).



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


## Live Playback with H5Live Player and nanoStream Cloud

You can play back from our servers with the [H5Live Player](../../nanoplayer/nanoplayer_introduction)



## Camera / Capture Device Testing

https://webrtc.github.io/samples/src/content/devices/input-output/


# Screen Sharing 

WebRTC supports screen sharing! You can use a screen or a window, depending on a browser used, as a live video source instead of a web camera.

Screen sharing is currently available in:

  * Google Chrome
  * Firefox

Chrome on Desktop since version 72 supports screen sharing without any further installation.
For former versions, a certified browser extension was required due to Google security policy.



# Reporting bugs or issues 

To report any bugs or issues, please send a complete issue report including the following:

- a description of the issue and expected results
- the configuration you are using for webrtc, bintu.live and h5live
- potential stream IDs which show the issue
- how to replicate the issue

### Log information

#### browser console log

press Ctrl+Shift+J or F12 (Windows / Linux) or Cmd+Opt+J (Mac)
copy/paste the result of the console


#### use debug-log information 

enhanced logging can be enabled by adding "&debug=3" to the web page URL


#### Chrome webrtc-internals 

open a separate browser tab and open the URL 
    chrome://webrtc-internals
click "dump" and download the data and send to us


### Remote Support 

- any potential issues might be best resolved based on a remote support session,
    dependent on your support level.
    Please contact us to arrange an online meeting.

## Camera / Capture Device Testing

https://webrtc.github.io/samples/src/content/devices/input-output/


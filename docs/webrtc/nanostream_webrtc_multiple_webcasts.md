---
id: nanostream_webrtc_multiple_webcasts
title: Multiple Webcasts
sidebar_label: Multiple Webcasts
---

Multiple Webcasts can be started from a single browser tab.<br>
Use cases can be:
- broadcast multiple camera (and/or microphone) streams at once
- broadcast a camera and a screen share stream

## Setup Multiple Webcasts

In order to set up multiple Webcasts you will have to create multiple instances of
the Webcaster API in your code.

### Example: Camera & Screen Share

#### 1) Create API instances

We will create two instances of the API, one for camera, one for screen share.

```js
// we will broadcast a camera with the first instance
var camUser = new window.nanowebrtc.user();

// we will broadcast a screen share with the second instance
var screenUser = new window.nanowebrtc.user();
```

#### 2) Starting the previews

We have to start the previews after the device lists have been emitted.<br>
Therefore we start the previews within [ReceivedDeviceList()](./nanostream_webrtc_api/#RtcUser+event_ReceivedDeviceList) event listeners for both API instances.

```js

camUser.on('ReceivedDeviceList', function(event) {
  // we received the device list, now we start a preview of the first camera in the list

  var cameraConfig = {
    source: 'camera',  
    device: 0,
    width: 1280,
    height: 720,
    framerate: 30
  };

  var audioDeviceConfig = {
    device: 0 // choose first audio device found
  };
  
  // preview camera in <video id="video-local-camera"> tag
  var videoElementCamera = 'video-local-camera';

  camUser.startPreview({
    videoDeviceConfig: cameraConfig,
    audioDeviceConfig: audioDeviceConfig,
    elementId: videoElementCamera
  });

});

screenUser.on('ReceivedDeviceList', function(event) {
  // we received the device list, now we start a preview of the screen

  var screenConfig = {
    source: 'screen',   
    width: 1920,
    height: 1080,
    framerate: 5
  };

  var audioDeviceConfig = {
    device: 0 // choose first audio device found
  };

  // preview screen share in <video id="video-local-screen"> tag
  var videoElementScreen = 'video-local-screen';

  screenUser.startPreview({
    videoDeviceConfig: screenConfig,
    audioDeviceConfig: audioDeviceConfig,
    elementId: videoElementScreen
  });

});

```
#### 3) Start both workflows

We will now:
- sign in to the server
- request the device lists for both instances
- start the webcasts once we have a preview

After we signed in successfully, we can call [getDevices()](./nanostream_webrtc_api#getdevices),<br>
this will emit the [ReceivedDeviceList()](./nanostream_webrtc_api/#RtcUser+event_ReceivedDeviceList) event when succeeding.<br>
In this example we simply start the broadcasts immediately once the previews have succeeded.

```js
camUser.on('SignInSuccess', function(event) {
  camUser.getDevices(); // will fire 'ReceivedDeviceList' for the camUser
});

screenUser.on('SignInSuccess', function(event) {
  screenUser.getDevices(); // will fire 'ReceivedDeviceList' for the screenUser
});

camUser.on('StartPreviewSuccess', function(event) {
  camUser.startBroadcast({
    TODO
  });
});

screenUser.on('StartPreviewSuccess', function(event) {
  screenUser.startBroadcast({
    TODO
  });
});

var signInConfig = {
   server: config.webrtc.server, // do not change the default
   bintuApiKey: bintuApiKey // your api key
};

// on success, both
camUser.signIn(signInConfig);
screenUser.signIn(signInConfig);
```
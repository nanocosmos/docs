---
id: nanostream_webrtc_quality
title: Quality Settings
sidebar_label: Quality Settings
---

# Configuring stream quality

Webcasting quality can be configured by setting different stream encoding and transcoding properties.
In the nanoStream Webcaster this is basically performed in three steps:

1) Previewing a stream. Certain stream properties can be set when starting the preview: <br>
[Video and audio preview](./nanostream_webrtc_quality#video-and-audio-preview) 
2) Encoding the stream in the browser. Upstream bitrates can be configured: <br>
[Encoding bitrates](./nanostream_webrtc_quality#encoding-bitrates)
3) Sending the stream to the nanoStream cloud. Audio transcoding is done on server side: <br>
[Transcoding on the server](./nanostream_webrtc_quality#transcoding-on-the-server)

 
 ## Video and audio preview 

Streams have different properties that can be set when starting a preview.<br>
Those are:

- video source (camera or screen share)
- video resolution
- video framerate
- audio source

The regarding API call is [startPreview()](./nanostream_webrtc_api#startpreviewconfig)

```js
var videoDeviceConfig = {
    device: 0, // use first video device
    source: 'camera', // or 'screen'
    width: 1280,
    height: 720,
    framerate: 30
};

var audioDeviceConfig = {
    device: 0 // use first audio device
};

var videoElement = "video-local"; // preview stream in <video id="video-local"> tag

var config = {
    videoDeviceConfig: videoDeviceConfig,
    audioDeviceConfig: audioDeviceConfig,
    elementId: videoElement
};

// Start the camera
// (Note: some browsers will show a popup asking for permission)
rtcuser.startPreview(config);

```

## Encoding bitrates

After the preview has been started and before the stream gets send to the nanoStream cloud, it will be encoded in the browser.
You can set audio and video target encoding bitrates. <br>
This is done with [setConfig()](./nanostream_webrtc_api#setconfigconfig)

```js
// set bitrates in kbits/s
var config = {
  bitrates: {
    videoSendInitialBitrate: 1000, // min bitrate (chrome only!)
    videoSendBitrate: 1500, // max video bitrate
    audioSendBitrate: 64 // max audio bitrate
  }
};

rtcuser.setConfig(config);
```

Note that those are target bitrates, "videoSendBitrate" is the maximum bitrate. For example: if there is no movement in front of the camera or the image is dark, the video bitrate will be lower than configured.

## Transcoding on the server

Video bitrate of the resulting RTMP stream will be similar to the bitrate encoded by the browsers. Audio is transcoded on server side.<br>
<b>Audio transcoding bitrate</b> can be set with [startBroadcast()](./nanostream_webrtc_api#startbroadcastconfig) 

```js
// set audio transcoding bitrate in bits/s
var broadcastConfig = {
    transcodingTargets: {
        output: url,
        streamname: streamname,
        audiobitrate: 64000 // value is in bits/s!
    }
};

rtcuser.startBroadcast(broadcastConfig);
```
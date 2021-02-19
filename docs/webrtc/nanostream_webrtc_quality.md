---
id: nanostream_webrtc_quality
title: Quality Settings
sidebar_label: Quality Settings
---

## Configuring stream quality

Webcasting quality can be configured by setting different stream encoding properties.
In the nanoStream Webcaster this is basically performed in three steps:

1) Previewing a stream. Certain stream properties can be set when starting the preview: <br>
[Video and audio preview](#video-and-audio-preview) 
2) Encoding the stream in the browser. Upstream bitrates can be configured: <br>
[Encoding bitrates](#encoding-bitrates)
3) Sending the stream to the nanoStream Cloud. Audio is converted again on server side: <br>
[Audio conversion on the server](#audio-conversion-on-the-server)

 
 ### Video and audio preview 

Streams have different properties that can be set when starting a preview.<br>
Those are:

- video source (camera or screen share)
- video resolution
- video framerate
- audio source

The corresponding API call is [startPreview(previewConfig)](webrtc/nanostream_webrtc_api.md#rtcuserstartpreviewconfig)

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

var videoElement = 'video-local'; // preview stream in <video id="video-local"> tag

var previewConfig = {
  videoDeviceConfig: videoDeviceConfig,
  audioDeviceConfig: audioDeviceConfig,
  elementId: videoElement
};

// Start the camera
// (Note: some browsers will show a popup asking for permission)
rtcuser.startPreview(previewConfig);

```

Note that the `width`, `height`, and `framerate` parameters provided to the `startPreview` are "ideal" values. In the end, it is up to a browser to decide what resolution and frame rate are the most optimal ones in a particular case.

### Encoding bitrates

After the preview has been started and before the stream gets send to the nanoStream Cloud, it will be encoded in the browser.
You can set audio and video target encoding bitrates. <br>
This is done with [setConfig(config)](webrtc/nanostream_webrtc_api.md#rtcusersetconfigconfig)

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

Note that those are target bitrates, `videoSendBitrate` is the maximum bitrate. The Webcaster will only go up to the configured bitrate when the image is complex (e.g., when much movement is visible in the image). This usually means that the mean bitrate will be lower than the
configured maximum bitrate. For example: if there is no movement in front of the camera or the image is dark, the video bitrate will be lower than configured.

Also note that due to non spec-compliant behaviour of some Android devices, it might be required to restart a stream after resolution has changed. Not doing so, can result in a corrupted playback. Resolution change can be detected in the Webcaster stats that is enabled by [enableStats([enable], [interval])](webrtc/nanostream_webrtc_api.md#rtcuserenablestatsenable-interval).

### Audio conversion on the server

Video bitrate of the resulting RTMP stream will be similar to the bitrate encoded by the browsers. Audio is converted on server side.<br>
<b>RTMP audio bitrate</b> can be set with [startBroadcast(broadcastConfig)](webrtc/nanostream_webrtc_api.md#rtcuserstartbroadcastconfig) 

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
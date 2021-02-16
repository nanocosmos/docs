---
id: nanostream_webrtc_audio_video_only
title: Audio- / Video-Only
sidebar_label: Audio- / Video-Only
---

In addition to regular streaming, with the nanoStream Webcaster you can stream Audio-Only and Video-Only.<br>

Audio-Only or Video-Only streaming is enabled by setting video or audio device to `false` in the configuration object passed to [startPreview(config)](nanostream_webrtc_api/#rtcuserstartpreviewconfig).<br>

## Audio-Only Streaming

```javascript
// to start Audio-Only streaming, we pass "false" to the video device configuration

var videoDeviceConfig = {
  device: false  // setting a video device to "false" allows to stream Audio-Only
};

var audioDeviceConfig = {
  device: 0 // we select the first available audio device
};

var config = {
  videoDeviceConfig: videoDeviceConfig,
  audioDeviceConfig: audioDeviceConfig,
  elementId: videoElement
};
 
user.startPreview(config);
```

## Video-Only Streaming

```javascript
// to start Video-Only streaming, we pass "false" to the audio device configuration

var videoDeviceConfig = {
  device: 0  // we select the first available video device
};

var audioDeviceConfig = {
  device: false // setting an audio device to "false" allows to stream Video-Only
};

var config = {
  videoDeviceConfig: videoDeviceConfig,
  audioDeviceConfig: audioDeviceConfig,
  elementId: videoElement
};
 
user.startPreview(config);
```
---
id: nanostream_webrtc_audio_video_only
title: Audio- / Video-Only
sidebar_label: Audio- / Video-Only
---

In addition to regular streaming, with the nanoStream Webcaster you stream Audio-Only and Video-Only:<br>

```javascript
// to start "Audio-Only" or "Video-Only" streaming, 
// we pass "false" to the video or audio device configuration

 var videoDeviceConfig = {
  device: false  // setting a video device to "false" allows to stream "Audio-Only"
 };

 var audioDeviceConfig = {
  device: false // setting an audio device to "false" allows to stream "Video-Only"
 };

var config = {
  videoDeviceConfig: videoDeviceConfig,
  audioDeviceConfig: audioDeviceConfig,
  elementId: videoElement
};
 
user.startPreview(config);
```
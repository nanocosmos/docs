---
id: nanostream_webrtc_speech_music
title: Speech / Music Streaming
sidebar_label: Speech / Music Streaming
---

Since Webcaster version 5.8.0 additional audio preprocessing options are available.<br>
Additionally to configuring bitrates ([Features > Quality Settings](../nanostream_webrtc_quality/)),
it is from now on possible to disable or enable the following filters explicitly:

- <b>autoGainControl</b> - Attempts to automatically maintain a steady overall volume level.
- <b>echoCancellation</b> - Attempts to prevent echo effects.
- <b>noiseSuppression</b> - Automatically filters the audio to remove background noise.

Depending on the use case it can make sense to disable or enable all of those filters at once.<br>
In general there are two different types of audio content:

- Audio containing <b>speech</b>
- Audio containing <b>music</b>

We recommend setting all of the above filters to "true" for speech/voice streams and all of them to "false" for music streaming.
On most systems these filters will be on by default.

## Speech audio

```js
var videoDeviceConfig = {
  device: 0, // use first video device
  source: 'camera'
};

// set all filters to 'true' for streaming voice/speech
var audioDeviceConfig = {
  device: 0, // use first audio device
  echoCancellation: true,
	autoGainControl: true,
	noiseSuppression: true
};

var videoElement = 'video-local'; // preview stream in <video id="video-local"> tag

var previewConfig = {
  videoDeviceConfig: videoDeviceConfig,
  audioDeviceConfig: audioDeviceConfig,
  elementId: videoElement
};

// Start the preview
rtcuser.startPreview(previewConfig);

```

## Music audio

```js
var videoDeviceConfig = {
  device: 0, // use first video device
  source: 'camera'
};

// set all filters to 'false' for streaming music
var audioDeviceConfig = {
  device: 0, // use first audio device
  echoCancellation: false,
	autoGainControl: false,
	noiseSuppression: false
};

var videoElement = 'video-local'; // preview stream in <video id="video-local"> tag

var previewConfig = {
  videoDeviceConfig: videoDeviceConfig,
  audioDeviceConfig: audioDeviceConfig,
  elementId: videoElement
};

// Start the preview
rtcuser.startPreview(previewConfig);

```
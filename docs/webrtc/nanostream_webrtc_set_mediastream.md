---
id: nanostream_webrtc_set_mediastream
title: External Streams / Mixing
sidebar_label: External Streams / Mixing
---

Since Webcaster version 5.11.0 you can use sources based on HTML5 canvas or other stream sources to enable user-generated live sources, separate to live camera or device screens.

To use this feature, a new API call was added, [setMediaStream()](nanostream_webrtc_api/#rtcusersetmediastreamconfig).
It works without using video and audio sources from [startPreview()](nanostream_webrtc_api/#startpreviewconfig).

#### notes:

If you simply intent to utilize a combination of camera, microphone or screen share sources:
   - please use the [startPreview()](nanostream_webrtc_api/#startpreviewconfig) call.

## use cases

- mixing of different video sources into one stream
    - PIP (picture in picture)
- mixing of different audio sources together
- preprocessing of video and audio in the browser
- video overlays, eg. rendering animations, drawings, watermarks and logos
- HTML5 canvas as a live source

## general workflow

1) acquire different video/image and/or audio sources
2) mix the sources together into one MediaStream
    - video: in a canvas, write your render loop where you mix the sources together via HTML canvas drawing
    - audio: with the WebAudio API
3) pass the resulting stream to the webcaster API

## restrictions

When utilizing this API call, application developers are responsible for the externally created stream.

- <b>Maintaining the provided framerate</b> is critical for end to end latency of the webcast.
- <b>Tab throttling.</b> When the current tab gets out of focus, most browsers will enable tab throttling. Timers, like `setInterval`, will be updated less frequently. You should check wether the tab left focus, and warn your users accordingly. E.g. with the DOM [visibilitychange event](https://developer.mozilla.org/en-US/docs/Web/API/Document/visibilitychange_event)
- <b>Video dimensions (width & height)</b> must not change during a webcast.
- Under certain circumstances the browsers encoder will <b>adapt the video resolution</b>, for example when <b>CPU overusage</b> is being detected.

## resources

- access [audio and video devices](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia)
- capture a screen [share or an application window](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getDisplayMedia)
- creating a [MediaStream from a HTML canvas](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/captureStream)
- create [MediaStreams with the WebAudio API](https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamAudioDestinationNode)

## samples & documentation

### online samples

Please see the online samples (replace XXX with your bintu API key):

- webcast_external_mixing_sample.html: https://webrtc.nanocosmos.de/release/webcast_external_mixing_sample.html?bintu.apikey=XXX
- webcast_external_stream.html: https://webrtc.nanocosmos.de/release/webcast_external_stream.html?bintu.apikey=XXX

### usage sample

#### HTML canvas as video source

```js
// pass an MediaStream to the API
// rtcUser: instance of RtcUser

var canvasWidth = 1280;
var canvasHeight = 720;
var framerate = 30;

// access your HTML canvas (<canvas id="my-canvas"/> element)
var canvas = document.getElementById('my-canvas');
var context = canvas.getContext('2d');

// create a MediaStream from the canvas
var canvasStream = canvas.captureStream(framerate);

// optionally, add an AudioStreamTrack
var myAudioTrack = ...;
canvasStream.addTrack(myAudioTrack);
     *
// your render loop, the loop calls itself 30 (framerate) times per second
// as an example, we simply draw the string "Hello World"
function renderLoop() {
    context.font = '50px serif';
    context.fillText('Hello world', 50, 90);
    setTimeout(loop, 1000 / framerate); // drawing at 30fps
 };
     *
var config = {
    stream: canvasStream,
    width: canvasWidth,
    height: canvasHeight,
    framerate: framerate
};

// start the render loop
renderLoop();

rtcUser.setMediaStream(config);
```
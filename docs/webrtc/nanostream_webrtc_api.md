---
id: nanostream_webrtc_api
title: nanoStream WebRTC API
sidebar_label: WebRTC API
---

<a name="RtcUser"></a>

### RtcUser
WebRTC Public API Class

**Kind**: global class  
**Version**: 5.2.1  

-----

## Constructors
<a name="new_RtcUser_new"></a>

### new RtcUser()
RtcUser is the main class and entry point of the nanoStream WebRTC API.

**Example**  
```js
var rtcUser = new RtcUser();
```

-----

## Functions
<a name="RtcUser+checkSupport"></a>

### checkSupport() ⇒ <code>int</code>
Checks if nanoStream WebRTC is supported by current browser.

**Kind**: instance method of [<code>RtcUser</code>](#RtcUser)  
**Example**  
```js
var supportLevel = RtcUser.checkSupport();
// 0: fully supported, no expected issues
// 1: not supported
// 2: partly supported, outdated browser version
// 3: partly supported with issues, e.g. Edge
```
<a name="RtcUser+signIn"></a>

### signIn(options)
Signs in.

**Kind**: instance method of [<code>RtcUser</code>](#RtcUser)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>options</td><td><code>object</code></td><td><p>The options object.</p>
</td>
    </tr><tr>
    <td>options.server</td><td><code>string</code></td><td><p>The url to the webrtc server.</p>
</td>
    </tr><tr>
    <td>[options.userName]</td><td><code>string</code></td><td><p>The name of the RtcUser (no spaces) - Deprecated: will be removed in WebRTC-Client v.6.</p>
</td>
    </tr><tr>
    <td>[options.room]</td><td><code>string</code></td><td><p>The room to join (no spaces) - Deprecated: will be removed in WebRTC-Client v.6.</p>
</td>
    </tr><tr>
    <td>[options.token]</td><td><code>string</code></td><td><p>The security token for the server.</p>
</td>
    </tr><tr>
    <td>[options.serverUserName]</td><td><code>string</code></td><td><p>The username credential for the server.</p>
</td>
    </tr><tr>
    <td>[options.serverPassword]</td><td><code>string</code></td><td><p>The password credential for the server.</p>
</td>
    </tr><tr>
    <td>[options.bintuApiKey]</td><td><code>string</code></td><td><p>The bintu apikey for authentication.</p>
</td>
    </tr>  </tbody>
</table>

**Example**  
```js
// rtcUser instance of RtcUser
var options = {
    server : 'https://rtc-lb.nanocosmos.de/p/webrtcws',
    token : 'token-123',
    serverUserName : 'username',
    serverPassword : 'password',
    bintuApiKey : 'awdegfq3490puerg2w54zj2p0w4h46zphm694i0796'
};
rtcUser.signIn(options);
```
<a name="RtcUser+signOut"></a>

### signOut()
Signs out.

**Kind**: instance method of [<code>RtcUser</code>](#RtcUser)  
**Example**  
```js
// rtcUser instance of RtcUser
rtcUser.signOut();
```
<a name="RtcUser+isSignedIn"></a>

### isSignedIn() ⇒ <code>boolean</code>
Checks if the RtcUser is connected with the webrtc server and signed in.

**Kind**: instance method of [<code>RtcUser</code>](#RtcUser)  
**Example**  
```js
// rtcUser instance of RtcUser
var isSignedIn = rtcUser.isSignedIn();
if (isSignedIn) {
    console.log('signed in');
} else {
    console.log('not signed in');
}
```
<a name="RtcUser+setConfig"></a>

### setConfig(config)
Sets config for the RtcUser.

**Kind**: instance method of [<code>RtcUser</code>](#RtcUser)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Default</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>config</td><td><code>object</code></td><td></td><td><p>The config object.</p>
</td>
    </tr><tr>
    <td>[config.codecs]</td><td><code>object</code></td><td></td><td><p>The codec object.</p>
</td>
    </tr><tr>
    <td>[config.codecs.videoCodec]</td><td><code>string</code></td><td><code>&quot;&#x27;H264&#x27;&quot;</code></td><td><p>The video codec to use (possible values: &#39;VP8&#39;, &#39;VP9&#39;, &#39;H264&#39;).</p>
</td>
    </tr><tr>
    <td>[config.bitrates]</td><td><code>object</code></td><td></td><td><p>The codec object.</p>
</td>
    </tr><tr>
    <td>[config.bitrates.videoSendInitialBitrate]</td><td><code>string</code></td><td><code>0</code></td><td><p>The webrtc initial bitrate</p>
</td>
    </tr><tr>
    <td>[config.bitrates.videoSendBitrate]</td><td><code>string</code></td><td><code>0</code></td><td><p>The webrtc bitrate</p>
</td>
    </tr><tr>
    <td>[config.iceServers]</td><td><code>Array.&lt;object&gt;</code></td><td></td><td><p>The ice servers object.</p>
</td>
    </tr><tr>
    <td>[config.iceServers.urls]</td><td><code>Array.&lt;string&gt;</code></td><td></td><td><p>An array of urls.</p>
</td>
    </tr><tr>
    <td>[config.iceServers.username]</td><td><code>string</code></td><td></td><td><p>The username for the ice servers if required.</p>
</td>
    </tr><tr>
    <td>[config.iceServers.credential]</td><td><code>string</code></td><td></td><td><p>The password for the ice servers if required.</p>
</td>
    </tr>  </tbody>
</table>

**Example**  
```js
// rtcUser instance of RtcUser
var config = {
    codecs: {
        videoCodec: 'H264'
    },
    bitrates: {
        videoSendInitialBitrate: 500,
        videoSendBitrate: 1000
    },
    iceServers: [
        {
            urls: [
                'turn:turn.myTurnServer.net:80?transport=udp'
            ],
            username: 'username',
            credential: 'password'
        },
        {
            urls: [
                'turn:turn.myTurnServer.net:80?transport=udp'
            ],
            username: 'username',
            credential: 'password'
        },
        {
            urls: [
                'stun:stun.l.google.com:19302'
            ]
        }
    ]
};
rtcUser.setConfig(config);
```
<a name="RtcUser+setIceServers"></a>

### <del>setIceServers(iceServers)</del>
***Deprecated***

Sets an array of turn/stun-servers for the peer-to-peer connection.

**Kind**: instance method of [<code>RtcUser</code>](#RtcUser)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>iceServers</td><td><code>Array.&lt;object&gt;</code></td><td><p>The ice servers object.</p>
</td>
    </tr><tr>
    <td>iceServers[].urls</td><td><code>Array.&lt;string&gt;</code></td><td><p>An array of urls.</p>
</td>
    </tr><tr>
    <td>[iceServers[].username]</td><td><code>string</code></td><td><p>The username for the ice servers if required.</p>
</td>
    </tr><tr>
    <td>[iceServers[].credential]</td><td><code>string</code></td><td><p>The password for the ice servers if required.</p>
</td>
    </tr>  </tbody>
</table>

**Example**  
```js
// rtcUser instance of RtcUser
var iceServers = [
    {
        urls: [
            'turn:turn.myTurnServer.net:80?transport=udp'
        ],
        username: 'username',
        credential: 'password'
    },
    {
        urls: [
            'turn:turn.myTurnServer.net:80?transport=udp'
        ],
        username: 'username',
        credential: 'password'
    },
    {
        urls: [
            'stun:stun.l.google.com:19302'
        ]
    }
];
rtcUser.setIceServers(iceServers);
```
<a name="RtcUser+checkServer"></a>

### checkServer(server)
Checks the state of a webrtc server.

**Kind**: instance method of [<code>RtcUser</code>](#RtcUser)  
**Emits**: <code>event:ReceivedServerStats</code>  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>server</td><td><code>string</code></td><td><p>The url of the server.</p>
</td>
    </tr>  </tbody>
</table>

**Example**  
```js
// rtcUser instance of RtcUser
var server = 'https://rtc-lb.nanocosmos.de/p/webrtc'
rtcUser.checkServer(server);
```
<a name="RtcUser+enableStats"></a>

### enableStats([enable], [interval])
Enables to receive webrtc stats in a given time interval.

**Kind**: instance method of [<code>RtcUser</code>](#RtcUser)  
**Emits**: <code>event:ReceivedWebRTCStats</code>  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Default</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>[enable]</td><td><code>boolean</code></td><td><code>true</code></td><td><p>A flag to enable webrtc stats.</p>
</td>
    </tr><tr>
    <td>[interval]</td><td><code>number</code></td><td><code>1000</code></td><td><p>The interval time in milli seconds.</p>
</td>
    </tr>  </tbody>
</table>

**Example**  
```js
// rtcUser instance of RtcUser
rtcUser.enableStats();
```
**Example**  
```js
// rtcUser instance of RtcUser
var enable = false;
rtcUser.enableStats(enable);
```
**Example**  
```js
// rtcUser instance of RtcUser
var enable = true;
var interval = 5000;
rtcUser.enableStats(enable, interval);
```
<a name="RtcUser+startBroadcast"></a>

### startBroadcast(config)
Starts a broadcast to an rtmp ingest with transcoding configs. Note: by default, only audio transcoding is enabled, video uses h264passthrough and same codec configuration as webrtc, in which case the videobitrate parameter is ignored.

**Kind**: instance method of [<code>RtcUser</code>](#RtcUser)  
**Emits**: [<code>StartBroadcastSuccess</code>](#RtcUser+event_StartBroadcastSuccess), [<code>StartBroadcastError</code>](#RtcUser+event_StartBroadcastError), [<code>BroadcastStatus</code>](#RtcUser+event_BroadcastStatus), [<code>BroadcastError</code>](#RtcUser+event_BroadcastError)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Default</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>config</td><td><code>object</code></td><td></td><td><p>The config object.</p>
</td>
    </tr><tr>
    <td>config.transcodingTargets</td><td><code>object</code></td><td></td><td><p>The transcoding config object.</p>
</td>
    </tr><tr>
    <td>config.transcodingTargets.output</td><td><code>string</code></td><td></td><td><p>The rtmp ingest url for the first stream.</p>
</td>
    </tr><tr>
    <td>[config.transcodingTargets.streamname]</td><td><code>string</code></td><td><code>null</code></td><td><p>Optional streamname. Use if you want to pass output and streamname seperately.</p>
</td>
    </tr><tr>
    <td>[config.transcodingTargets.videobitrate]</td><td><code>number</code></td><td><code>0</code></td><td><p>The video bitrate for the transcode of the first stream.</p>
</td>
    </tr><tr>
    <td>[config.transcodingTargets.audiobitrate]</td><td><code>number</code></td><td><code>0</code></td><td><p>The audio bitrate for the transcode of the first stream.</p>
</td>
    </tr><tr>
    <td>[config.transcodingTargets.framerate]</td><td><code>number</code></td><td><code>0</code></td><td><p>The framerate for the transcode of the first stream.</p>
</td>
    </tr><tr>
    <td>[config.transcodingTargets.dropframes]</td><td><code>string</code></td><td><code>null</code></td><td><p>A flag to enable frame dropping (possible values: &#39;0&#39;, &#39;1&#39;).</p>
</td>
    </tr><tr>
    <td>[config.transcodingTargets.h264passthrough]</td><td><code>string</code></td><td><code>null</code></td><td><p>A flag to enable transmuxing without transcoding if video codec &#39;H264&#39; is used (possible values: &#39;0&#39;, &#39;1&#39;).</p>
</td>
    </tr><tr>
    <td>[config.transcodingTargets.icecast_audio]</td><td><code>string</code></td><td><code>null</code></td><td><p>A flag to enable embedding of an icecast audio stream, normal audio will be ignored (possible values: &#39;0&#39;, &#39;1&#39;).</p>
</td>
    </tr><tr>
    <td>[config.transcodingTargets.rtmpconnectinfo]</td><td><code>string</code></td><td><code>null</code></td><td><p>Data to be send with the rtmp streams &quot;onconnect&quot;. Pass flat object with key value pairs, hierarchies are not supported.</p>
</td>
    </tr>  </tbody>
</table>

**Example**  
```js
// rtcUser instance of RtcUser
var config = {
    transcodingTargets: {
        output: 'rtmp://myIngestServer.com:1935/live/webrtcBroadcast',
        videobitrate: 500000,
        audiobitrate: 64000,
        framerate: 30,
        dropframes: '0',
        icecast_audio: '0',
        rtmpconnectinfo: {
            'key1': 'value1',
            'key2': 7.5,
            'key3': false
        }
    }
};
rtcUser.startBroadcast(config);
```
<a name="RtcUser+stopBroadcast"></a>

### stopBroadcast()
Stop a running broadcast.

**Kind**: instance method of [<code>RtcUser</code>](#RtcUser)  
**Emits**: [<code>StopBroadcastSuccess</code>](#RtcUser+event_StopBroadcastSuccess), [<code>BroadcastError</code>](#RtcUser+event_BroadcastError)  
**Example**  
```js
// rtcUser instance of RtcUser
rtcUser.stopBroadcast();
```
<a name="RtcUser+sendMetaData"></a>

### sendMetaData(handlerName, jsonValues)
Add live meta data to a broadcast stream.

**Kind**: instance method of [<code>RtcUser</code>](#RtcUser)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>handlerName</td><td><code>&#x27;onMetaData&#x27;</code> | <code>&#x27;onCuePoint&#x27;</code></td><td><p>Name of the meta data handler. Other types are not supported.</p>
</td>
    </tr><tr>
    <td>jsonValues</td><td><code>object</code></td><td><p>The data to be sent. Parameter can contain a maximum object depth of 6.</p>
</td>
    </tr>  </tbody>
</table>

**Example**  
```js
// rtcUser instance of RtcUser
rtcUser.sendMetaData('onMetaData', {myString: 'hello', myInteger: 1234});
```
<a name="RtcUser+addScreenCaptureExtension"></a>

### <del>addScreenCaptureExtension(name)</del>
***Deprecated***

Adds a Screen Capture Extension to the RtcUser for Chrome. Only needed in Chrome version < 72.

**Kind**: instance method of [<code>RtcUser</code>](#RtcUser)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>name</td><td><code>string</code></td><td><p>The name of the screen capture extension.</p>
</td>
    </tr>  </tbody>
</table>

**Example**  
```js
// rtcUser instance of RtcUser
var name = 'nanoScreenCapture';
rtcUser.addScreenCaptureExtension(name);
```
<a name="RtcUser+isScreenCaptureAvailable"></a>

### isScreenCaptureAvailable()
Checks if a Screen Capture Extension was added via addScreenCaptureExtension().

**Kind**: instance method of [<code>RtcUser</code>](#RtcUser)  
**Example**  
```js
// rtcUser instance of RtcUser
var name = 'nanoScreenCapture';
rtcUser.addScreenCaptureExtension(name);
// wait until api has registered extension:
setTimeout(function() {
    var hasScreenCapture = rtcUser.isScreenCaptureAvailable();
}, 1000);
```
<a name="RtcUser+getDevices"></a>

### getDevices()
Gets all connected local video and audio devices.

**Kind**: instance method of [<code>RtcUser</code>](#RtcUser)  
**Emits**: <code>event:ReceivedDeviceList</code>  
**Example**  
```js
// rtcUser instance of RtcUser
rtcUser.getDevices();
```
<a name="RtcUser+setVideoDevice"></a>

### <del>setVideoDevice(config)</del>
***Deprecated***

Sets the input video device with config.

**Kind**: instance method of [<code>RtcUser</code>](#RtcUser)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>config</td><td><code>object</code></td><td><p>The config object.</p>
</td>
    </tr><tr>
    <td>config.device</td><td><code>boolean</code> | <code>number</code></td><td><p>The value of the video device, possible values: true (auto device), false (no video), number (index of the video device).</p>
</td>
    </tr><tr>
    <td>[config.width]</td><td><code>number</code></td><td><p>The input width (only if device will be set by index).</p>
</td>
    </tr><tr>
    <td>[config.height]</td><td><code>number</code></td><td><p>The input height (only if device will be set by index).</p>
</td>
    </tr><tr>
    <td>[config.framerate]</td><td><code>number</code></td><td><p>The input framerate (only if device will be set by index).</p>
</td>
    </tr>  </tbody>
</table>

**Example**  
```js
// rtcUser instance of RtcUser
var config = {
    device: 0,
    width: 640,
    height: 360,
    framerate: 30
};
rtcUser.setVideoDevice(config);
```
**Example**  
```js
// rtcUser instance of RtcUser
var config = {
    device: 0
};
rtcUser.setVideoDevice(config);
```
**Example**  
```js
// rtcUser instance of RtcUser
var config = {
    device: true // auto device
};
rtcUser.setVideoDevice(config);
```
**Example**  
```js
// rtcUser instance of RtcUser
var config = {
    device: false // no video
};
rtcUser.setVideoDevice(config);
```
<a name="RtcUser+setAudioDevice"></a>

### <del>setAudioDevice(config)</del>
***Deprecated***

Sets the input audio device.

**Kind**: instance method of [<code>RtcUser</code>](#RtcUser)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>config</td><td><code>object</code></td><td><p>The config object.</p>
</td>
    </tr><tr>
    <td>config.device</td><td><code>boolean</code> | <code>number</code></td><td><p>The value of the audio device, possible values: true (auto device), false (no audio), number (index of the audio device).</p>
</td>
    </tr>  </tbody>
</table>

**Example**  
```js
// rtcUser instance of RtcUser
var config = {
    device: 0
};
rtcUser.setAudioDevice(config);
```
**Example**  
```js
// rtcUser instance of RtcUser
var config = {
    device: 0
};
rtcUser.setAudioDevice(config);
```
**Example**  
```js
// rtcUser instance of RtcUser
var config = {
    device: true // auto device
};
rtcUser.setAudioDevice(config);
```
**Example**  
```js
// rtcUser instance of RtcUser
var config = {
    device: false // no video
};
rtcUser.setAudioDevice(config);
```
<a name="RtcUser+getSelectedVideoDevice"></a>

### <del>getSelectedVideoDevice()</del>
***Deprecated***

Gets the current input video device.

**Kind**: instance method of [<code>RtcUser</code>](#RtcUser)  
**Example**  
```js
// rtcUser instance of RtcUser
var device = rtcUser.getSelectedVideoDevice();
```
<a name="RtcUser+getSelectedAudioDevice"></a>

### <del>getSelectedAudioDevice()</del>
***Deprecated***

Gets the current input audio device.

**Kind**: instance method of [<code>RtcUser</code>](#RtcUser)  
**Example**  
```js
// rtcUser instance of RtcUser
var device = rtcUser.getSelectedAudioDevice();
```
<a name="RtcUser+getSelectedDevice"></a>

### getSelectedDevice(config)
Gets the current input video/audio device.

**Kind**: instance method of [<code>RtcUser</code>](#RtcUser)  
**Emits**: [<code>GetSelectedDeviceError</code>](#RtcUser+event_GetSelectedDeviceError)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>config</td><td><code>object</code></td><td><p>The config object.</p>
</td>
    </tr><tr>
    <td>config.kind</td><td><code>string</code></td><td><p>The device kind (possible values: &#39;videoinput&#39;, &#39;audioinput&#39;).</p>
</td>
    </tr>  </tbody>
</table>

**Example**  
```js
// rtcUser instance of RtcUser
var config = {
    kind: 'videoinput'
};
var device = rtcUser.getSelectedDevice(config);
```
<a name="RtcUser+startPreview"></a>

### startPreview(config)
Starts the preview.

**Kind**: instance method of [<code>RtcUser</code>](#RtcUser)  
**Emits**: <code>event:StartPreviewSuccess</code>, <code>event:StartPreviewError</code>  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Default</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>config</td><td><code>object</code></td><td></td><td><p>The config object.</p>
</td>
    </tr><tr>
    <td>config.videoDeviceConfig</td><td><code>object</code></td><td></td><td><p>The video config object.</p>
</td>
    </tr><tr>
    <td>config.videoDeviceConfig.device</td><td><code>int</code></td><td></td><td><p>device id to use.</p>
</td>
    </tr><tr>
    <td>[config.videoDeviceConfig.width]</td><td><code>int</code></td><td></td><td><p>video width.</p>
</td>
    </tr><tr>
    <td>[config.videoDeviceConfig.height]</td><td><code>int</code></td><td></td><td><p>video height.</p>
</td>
    </tr><tr>
    <td>[config.videoDeviceConfig.framerate]</td><td><code>int</code></td><td></td><td><p>video framerate.</p>
</td>
    </tr><tr>
    <td>videoDeviceConfig.source</td><td><code>String</code></td><td></td><td><p>the video source to be requested
valid parameters: &#39;camera&#39; | &#39;screen&#39;.</p>
</td>
    </tr><tr>
    <td>config.audioDeviceConfig</td><td><code>object</code></td><td></td><td><p>The audio config object.</p>
</td>
    </tr><tr>
    <td>config.audioDeviceConfig.device</td><td><code>int</code></td><td></td><td><p>device id to use.</p>
</td>
    </tr><tr>
    <td>config.elementId</td><td><code>string</code></td><td></td><td><p>The id of a video element to pass in the requested stream directly.</p>
</td>
    </tr><tr>
    <td>[config.useWebView]</td><td><code>boolean</code></td><td><code>false</code></td><td><p>A flag to indicate that a WebView is used; default value: false.</p>
</td>
    </tr>  </tbody>
</table>

**Example**  
```js
// rtcUser instance of RtcUser
var config = {
    videoDeviceConfig : {
         device: 0,
         width: 640,
         height: 360,
         framerate: 30,
         source: 'camera'
    },
    audioDeviceConfig : {
         device: 0
    },
    elementId : 'video-local',
    useWebView : true
};
rtcUser.startPreview(config);
```
<a name="RtcUser+stopPreview"></a>

### stopPreview()
Stops the preview.

**Kind**: instance method of [<code>RtcUser</code>](#RtcUser)  
**Emits**: <code>event:StopPreviewSuccess</code>, <code>event:StopPreviewError</code>  
**Example**  
```js
// rtcUser instance of RtcUser
rtcUser.stopPreview();
```
<a name="RtcUser+muteVideo"></a>

### <del>muteVideo(mute)</del>
***Deprecated***

Mutes/unmutes the video.

**Kind**: instance method of [<code>RtcUser</code>](#RtcUser)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>mute</td><td><code>boolean</code></td><td><p>Mute/unmute.</p>
</td>
    </tr>  </tbody>
</table>

**Example**  
```js
// rtcUser instance of RtcUser
var mute = true;
rtcUser.muteVideo(mute);
```
<a name="RtcUser+muteAudio"></a>

### <del>muteAudio(mute)</del>
***Deprecated***

Mutes/unmutes the audio.

**Kind**: instance method of [<code>RtcUser</code>](#RtcUser)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>mute</td><td><code>boolean</code></td><td><p>Mute/unmute.</p>
</td>
    </tr>  </tbody>
</table>

**Example**  
```js
// rtcUser instance of RtcUser
var mute = true;
rtcUser.muteAudio(mute);
```
<a name="RtcUser+muteDevice"></a>

### muteDevice(config)
Mutes/unmutes a video/audio device.

**Kind**: instance method of [<code>RtcUser</code>](#RtcUser)  
**Emits**: [<code>MuteDeviceError</code>](#RtcUser+event_MuteDeviceError)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>config</td><td><code>object</code></td><td><p>The config object.</p>
</td>
    </tr><tr>
    <td>config.kind</td><td><code>string</code></td><td><p>The device kind to mute (possible values: &#39;videoinput&#39;, &#39;audioinput&#39;).</p>
</td>
    </tr><tr>
    <td>config.mute</td><td><code>boolean</code></td><td><p>Mute/unmute.</p>
</td>
    </tr>  </tbody>
</table>

**Example**  
```js
// rtcUser instance of RtcUser
var config = {
    kind: 'videoinput',
    mute: true
}
rtcUser.muteDevice(config);
```
<a name="RtcUser+injectExternalMediaStream"></a>

### injectExternalMediaStream(config)
Mixes tracks (currently only audio) of an external MediaStream into the currently previewed local stream.

**Kind**: instance method of [<code>RtcUser</code>](#RtcUser)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>config</td><td><code>object</code></td><td><p>Config object with info on what to mix in.</p>
</td>
    </tr><tr>
    <td>config.stream</td><td><code>MediaStream</code></td><td><p>the MediaStream containing the track(s) to mix in.</p>
</td>
    </tr><tr>
    <td>config.tracks</td><td><code>Array.&lt;string&gt;</code></td><td><p>Array with the types of tracks which should be injected (only &#39;audio&#39; is supported at the moment).</p>
</td>
    </tr>  </tbody>
</table>

**Example**  
```js
// rtcUser instance of RtcUser
// externalStream instance of MediaStream (https://developer.mozilla.org/de/docs/Web/API/MediaStream)
var data = {stream: externalStream, tracks: ['audio']};
rtcUser.injectExternalMediaStream(data);
```

-----

## Events
<a name="RtcUser+event_StartBroadcastSuccess"></a>

### "StartBroadcastSuccess"
The event is fired if a broadcast started successfully.

**Kind**: event emitted by [<code>RtcUser</code>](#RtcUser)  
<a name="RtcUser+event_StartBroadcastError"></a>

### "StartBroadcastError"
The event is fired if a broadcast failed to start.

**Kind**: event emitted by [<code>RtcUser</code>](#RtcUser)  
<a name="RtcUser+event_BroadcastStatus"></a>

### "BroadcastStatus"
The event is fired multiple times between the "start" and "stop" broadcast events. The payload contains information about the connection state.

**Kind**: event emitted by [<code>RtcUser</code>](#RtcUser)  
<a name="RtcUser+event_BroadcastError"></a>

### "BroadcastError"
The event is fired if a broadcasting error occurred between the "start" and "stop" broadcast events.

**Kind**: event emitted by [<code>RtcUser</code>](#RtcUser)  
<a name="RtcUser+event_StopBroadcastSuccess"></a>

### "StopBroadcastSuccess"
StopBroadcastSuccess event. The event is fired in case if a broadcast stopped successfully. It does not contain an event payload.

**Kind**: event emitted by [<code>RtcUser</code>](#RtcUser)  
<a name="RtcUser+event_StopBroadcastError"></a>

### "StopBroadcastError"
StopBroadcastError event. The event is fired in case if a broadcast failed to execute the "stop" call as it is expected. Note: the broadcast is guaranteed to stop before the event is fired.

**Kind**: event emitted by [<code>RtcUser</code>](#RtcUser)  
<a name="RtcUser+event_GetSelectedDeviceError"></a>

### "GetSelectedDeviceError"
GetSelectedDeviceError event. The event is fired if a selected video/audio device getting failed.

**Kind**: event emitted by [<code>RtcUser</code>](#RtcUser)  
<a name="RtcUser+event_MuteDeviceError"></a>

### "MuteDeviceError"
MuteDeviceError event. The event is fired if a video/audio device mute/unmute failed.

**Kind**: event emitted by [<code>RtcUser</code>](#RtcUser)  

-----

## Type Definitions
<a name="ErrorEvent"></a>

### ErrorEvent : <code>object</code>
**Kind**: global typedef  
**Properties**

<table>
  <thead>
    <tr>
      <th>Name</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>data</td><td><code>object</code></td><td><p>The data object - Deprecated: will be removed in WebRTC-Client v.6; please use the &quot;error&quot; object instead.</p>
</td>
    </tr><tr>
    <td>error</td><td><code>object</code></td><td><p>The error object.</p>
</td>
    </tr><tr>
    <td>error.code</td><td><code>number</code></td><td><p>The code of the error.</p>
</td>
    </tr><tr>
    <td>error.message</td><td><code>string</code></td><td><p>Human readable message of the error.</p>
</td>
    </tr><tr>
    <td>error.name</td><td><code>string</code></td><td><p>The name of the error.</p>
</td>
    </tr><tr>
    <td>error.text</td><td><code>string</code></td><td><p>The text of the error - Deprecated: will be removed in WebRTC-Client v.6; please use the &quot;error.message&quot; parameter instead.</p>
</td>
    </tr><tr>
    <td>error.type</td><td><code>string</code></td><td><p>The type of the error.</p>
</td>
    </tr><tr>
    <td>error.userinfo</td><td><code>object</code></td><td><p>The user info associated with the error.</p>
</td>
    </tr><tr>
    <td>name</td><td><code>string</code></td><td><p>The name of the event.</p>
</td>
    </tr>  </tbody>
</table>

<a name="StatusEvent"></a>

### StatusEvent : <code>object</code>
**Kind**: global typedef  
**Properties**

<table>
  <thead>
    <tr>
      <th>Name</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>data</td><td><code>object</code></td><td><p>The data object.</p>
</td>
    </tr><tr>
    <td>data.message</td><td><code>string</code></td><td><p>The connection state message (possible values: &#39;signalling&#39;, &#39;connected&#39;, &#39;reconnecting&#39;, &#39;broadcasting&#39;).</p>
</td>
    </tr><tr>
    <td>[data.number]</td><td><code>object</code></td><td><p>Reserverd for internal developer&#39;s use - Deprecated: will be removed in WebRTC-Client v.6.</p>
</td>
    </tr><tr>
    <td>[data.rtmp]</td><td><code>object</code></td><td><p>Reserved for internal developer&#39;s use - Deprecated: will be removed in WebRTC-Client v.6.</p>
</td>
    </tr><tr>
    <td>data.state</td><td><code>object</code></td><td><p>The connection state (possible values: 4 = &#39;signalling&#39;, 5 = &#39;connected&#39;, 7 = &#39;reconnecting&#39;, 6 = &#39;broadcasting&#39;).</p>
</td>
    </tr><tr>
    <td>data.streamname</td><td><code>object</code></td><td><p>The rtmp ingest streamname.</p>
</td>
    </tr><tr>
    <td>data.text</td><td><code>object</code></td><td><p>The connection state text (possible values: &#39;signalling&#39;, &#39;connected&#39;, &#39;reconnecting&#39;).</p>
</td>
    </tr><tr>
    <td>[name]</td><td><code>object</code></td><td><p>The name of the event.</p>
</td>
    </tr><tr>
    <td>[target]</td><td><code>object</code></td><td><p>Reserved for internal developer&#39;s use - Deprecated: will be removed in WebRTC-Client v.6.</p>
</td>
    </tr>  </tbody>
</table>


-----

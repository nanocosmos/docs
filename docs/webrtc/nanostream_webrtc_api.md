---
id: nanostream_webrtc_api
title: nanoStream Webcaster API
sidebar_label: Webcaster
---

<a name="RtcUser"></a>

## RtcUser
nanoStream Webcaster Public API Class

**Kind**: global class  
**Version**: 5.8.0  

-----

## Constructors
<a name="new_RtcUser_new"></a>

## new RtcUser()
An RtcUser is the main class and entry point of the nanoStream Webcaster API.

**Example**  
```js
var rtcUser = new RtcUser();
```

-----

## Functions
<a name="RtcUser+checkSupport"></a>

## rtcUser.checkSupport() ⇒ <code>int</code>
Checks if nanoStream Webcaster is supported by current browser.

**Kind**: instance method of [<code>RtcUser</code>](#RtcUser)  
**Example**  
```js
var supportLevel = RtcUser.checkSupport();
// 0: fully supported, no expected issues
// 1: not supported
// 2: partly supported - an outdated browser version
// 3: partly supported - a critically outdated browser version or a browser with issues, e.g. Edge
```
<a name="RtcUser+signIn"></a>

## rtcUser.signIn(options)
Signs in to the server.
After signIn succeeded you will have a session with the WebRTC server until reloading the browser or calling [signOut](#RtcUser+signOut).
Parameters in braces "[ ]" are optional.

**Kind**: instance method of [<code>RtcUser</code>](#RtcUser)  
**Emits**: [<code>SignInSuccess</code>](#RtcUser+event_SignInSuccess), [<code>SignInError</code>](#RtcUser+event_SignInError)  
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
    <td>options.server</td><td><code>string</code></td><td><p>The URL to the WebRTC server.</p>
</td>
    </tr><tr>
    <td>[options.userName]</td><td><code>string</code></td><td><p>The name of the RtcUser (no spaces) - Deprecated: will be removed in nanoStream Webcaster v.6.</p>
</td>
    </tr><tr>
    <td>[options.room]</td><td><code>string</code></td><td><p>The room to join (no spaces) - Deprecated: will be removed in nanoStream Webcaster v.6.</p>
</td>
    </tr><tr>
    <td>[options.token]</td><td><code>string</code></td><td><p>The access token for authentication.</p>
</td>
    </tr><tr>
    <td>[options.jwt]</td><td><code>string</code></td><td><p>The JWT access token for authentication.</p>
</td>
    </tr><tr>
    <td>[options.bintuApiKey]</td><td><code>string</code></td><td><p>The bintu API key for authentication.</p>
</td>
    </tr>  </tbody>
</table>

**Example**  
```js
// rtcUser instance of RtcUser
var options = {
    server : 'https://bintu-webrtc.nanocosmos.de/p/webrtcws',
    token : 'token-123',
    bintuApiKey : 'awdegfq3490puerg2w54zj2p0w4h46zphm694i0796'
};
rtcUser.signIn(options);
```
<a name="RtcUser+signOut"></a>

## rtcUser.signOut()
Signs out from the server. The current session and a broadcast (if running) will be stopped.

**Kind**: instance method of [<code>RtcUser</code>](#RtcUser)  
**Emits**: [<code>SignOutSuccess</code>](#RtcUser+event_SignOutSuccess), [<code>SignOutError</code>](#RtcUser+event_SignOutError)  
**Example**  
```js
// rtcUser instance of RtcUser
rtcUser.signOut();
```
<a name="RtcUser+isSignedIn"></a>

## rtcUser.isSignedIn() ⇒ <code>boolean</code>
Checks if the RtcUser is connected with the WebRTC server and signed in (see [signIn](#RtcUser+signIn)).

**Kind**: instance method of [<code>RtcUser</code>](#RtcUser)  
**Example**  
```js
// rtcUser instance of RtcUser
if (rtcUser.isSignedIn()) {
    console.log('signed in');
} else {
    console.log('not signed in');
}
```
<a name="RtcUser+setConfig"></a>

## rtcUser.setConfig(config)
Sets global configuration for the RtcUser instance.
Please note that setting the audio transcoding bitrate is currently done in [startBroadcast](#RtcUser+startBroadcast).
Parameters in braces "[ ]" are optional.

**Kind**: instance method of [<code>RtcUser</code>](#RtcUser)  
**Emits**: [<code>SetConfigError</code>](#RtcUser+event_SetConfigError)  
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
    <td>[config.logLevel]</td><td><code>int</code></td><td></td><td><p>Verbosity of console logging. Allowed are values from 0-4, with 4 being the maximum verbosity.</p>
</td>
    </tr><tr>
    <td>[config.metrics]</td><td><code>object</code></td><td></td><td><p>The metrics configuration object.</p>
</td>
    </tr><tr>
    <td>[config.metrics.accountId]</td><td><code>string</code></td><td></td><td><p>Account id provided to you.</p>
</td>
    </tr><tr>
    <td>[config.metrics.accountKey]</td><td><code>string</code></td><td></td><td><p>Account key provided to you.</p>
</td>
    </tr><tr>
    <td>[config.metrics.eventId]</td><td><code>string</code></td><td></td><td><p>An id of an event a stream is related to.</p>
</td>
    </tr><tr>
    <td>[config.metrics.statsInterval]</td><td><code>int</code></td><td><code>10</code></td><td><p>The interval how often the stats should be collected in seconds; default value: 10 seconds. The minimum is 1 second, the maximum is 10 seconds.</p>
</td>
    </tr><tr>
    <td>[config.metrics.customField*]</td><td><code>string</code></td><td></td><td><p>A custom field. * can be replaced with 1 - 10 e.g. &#39;customField3&#39;. Possible from &#39;customField1&#39; to &#39;customField10&#39;.</p>
</td>
    </tr><tr>
    <td>[config.bitrates]</td><td><code>object</code></td><td></td><td><p>The codec configuration object.</p>
</td>
    </tr><tr>
    <td>[config.bitrates.videoSendInitialBitrate]</td><td><code>string</code></td><td><code>0</code></td><td><p>The minimum video upstream bitrate in kbps (lower bound, does not work in Firefox).</p>
</td>
    </tr><tr>
    <td>[config.bitrates.videoSendBitrate]</td><td><code>string</code></td><td><code>0</code></td><td><p>The maximum video upstream bitrate in kbps.</p>
</td>
    </tr><tr>
    <td>[config.bitrates.audioSendBitrate]</td><td><code>string</code></td><td><code>0</code></td><td><p>The maximum audio upstream bitrate in kbps (does not work in Firefox).</p>
</td>
    </tr>  </tbody>
</table>

**Example**  
```js
// rtcUser instance of RtcUser
var config = {
    logLevel: 2,
    metrics: {
        accountId: 'YOUR_ACCOUNT_ID',
        accountKey: 'YOUR_ACCOUNT_KEY'
    },
    codecs: {
        videoCodec: 'H264'
    },
    bitrates: {
        videoSendInitialBitrate: 500,
        videoSendBitrate: 1000
    }
};
rtcUser.setConfig(config);
```
<a name="RtcUser+setIceServers"></a>

## <del>rtcUser.setIceServers(iceServers)</del>
***Deprecated***

Sets an array of turn/stun-servers for the peer-to-peer connection.
Parameters in braces "[ ]" are optional.

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
    <td>iceServers[].urls</td><td><code>Array.&lt;string&gt;</code></td><td><p>An array of URLs.</p>
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

## rtcUser.checkServer(server)
Checks the state of a WebRTC server.

**Kind**: instance method of [<code>RtcUser</code>](#RtcUser)  
**Emits**: [<code>ReceivedServerStats</code>](#RtcUser+event_ReceivedServerStats)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>server</td><td><code>string</code></td><td><p>The URL of the server - Deprecated: will be removed in nanoStream Webcaster v.6; the function will check the WebRTC server specified in the signIn() call.</p>
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

## rtcUser.enableStats([enable], [interval])
Enables to receive WebRTC stats in a given time interval.
Parameters in braces "[ ]" are optional.

**Kind**: instance method of [<code>RtcUser</code>](#RtcUser)  
**Emits**: [<code>ReceivedWebRTCStats</code>](#RtcUser+event_ReceivedWebRTCStats)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Default</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>[enable]</td><td><code>boolean</code></td><td><code>true</code></td><td><p>A flag to enable WebRTC stats.</p>
</td>
    </tr><tr>
    <td>[interval]</td><td><code>number</code></td><td><code>1000</code></td><td><p>The interval time in milliseconds.</p>
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

## rtcUser.startBroadcast(config)
Starts a broadcast to an RTMP ingest URL. Note: by default, only audio will be transcoded on server side, H264 codec will be used for video upstream and passed through directly to RTMP.
Therefore you will find the configuration for the video upstream bitrate here: [setConfig](#RtcUser+setConfig).
Parameters in braces "[ ]" are optional.

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
    <td>config.transcodingTargets.output</td><td><code>string</code></td><td></td><td><p>The RTMP ingest URL.</p>
</td>
    </tr><tr>
    <td>config.transcodingTargets.streamname</td><td><code>string</code></td><td><code>null</code></td><td><p>The RTMP streamname.</p>
</td>
    </tr><tr>
    <td>[config.transcodingTargets.audiobitrate]</td><td><code>number</code></td><td><code>0</code></td><td><p>The RTMP audio transcoded bitrate in bps, eg 64000.</p>
</td>
    </tr><tr>
    <td>[config.transcodingTargets.rtmpconnectinfo]</td><td><code>string</code></td><td><code>null</code></td><td><p>Data to be send with the RTMP streams &quot;onconnect&quot;. Pass flat object with key value pairs, hierarchies are not supported.</p>
</td>
    </tr><tr>
    <td>[config.jwt]</td><td><code>string</code></td><td></td><td><p>The JWT access token for authorization.</p>
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

## rtcUser.stopBroadcast()
Stops a running broadcast.

**Kind**: instance method of [<code>RtcUser</code>](#RtcUser)  
**Emits**: [<code>StopBroadcastSuccess</code>](#RtcUser+event_StopBroadcastSuccess), [<code>BroadcastError</code>](#RtcUser+event_BroadcastError)  
**Example**  
```js
// rtcUser instance of RtcUser
rtcUser.stopBroadcast();
```
<a name="RtcUser+sendMetaData"></a>

## rtcUser.sendMetaData(handlerName, jsonValues)
Adds live meta data to a broadcast stream.

**Kind**: instance method of [<code>RtcUser</code>](#RtcUser)  
**Emits**: <code>RtcUser#event:Error</code>  
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
    <td>jsonValues</td><td><code>object</code></td><td><p>The data to be sent. The parameter can contain a maximum object depth of 6.</p>
</td>
    </tr>  </tbody>
</table>

**Example**  
```js
// rtcUser instance of RtcUser
rtcUser.sendMetaData('onMetaData', {myString: 'hello', myInteger: 1234});
```
<a name="RtcUser+addScreenCaptureExtension"></a>

## <del>rtcUser.addScreenCaptureExtension(name)</del>
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

## rtcUser.isScreenCaptureAvailable()
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

## rtcUser.getDevices()
Gets all connected input video and audio devices.

**Kind**: instance method of [<code>RtcUser</code>](#RtcUser)  
**Emits**: [<code>ReceivedDeviceList</code>](#RtcUser+event_ReceivedDeviceList)  
**Example**  
```js
// rtcUser instance of RtcUser
rtcUser.getDevices();
```
<a name="RtcUser+setVideoDevice"></a>

## <del>rtcUser.setVideoDevice(config)</del>
***Deprecated***

Sets the input video device with config.
Parameters in braces "[ ]" are optional.

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

## <del>rtcUser.setAudioDevice(config)</del>
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

## <del>rtcUser.getSelectedVideoDevice()</del>
***Deprecated***

Gets the current input video device.

**Kind**: instance method of [<code>RtcUser</code>](#RtcUser)  
**Example**  
```js
// rtcUser instance of RtcUser
var device = rtcUser.getSelectedVideoDevice();
```
<a name="RtcUser+getSelectedAudioDevice"></a>

## <del>rtcUser.getSelectedAudioDevice()</del>
***Deprecated***

Gets the current input audio device.

**Kind**: instance method of [<code>RtcUser</code>](#RtcUser)  
**Example**  
```js
// rtcUser instance of RtcUser
var device = rtcUser.getSelectedAudioDevice();
```
<a name="RtcUser+getSelectedDevice"></a>

## rtcUser.getSelectedDevice(config)
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

## rtcUser.startPreview(config)
Starts the preview.
Parameters in braces "[ ]" are optional.

**Kind**: instance method of [<code>RtcUser</code>](#RtcUser)  
**Emits**: [<code>StartPreviewSuccess</code>](#RtcUser+event_StartPreviewSuccess), [<code>ReceivedDeviceList</code>](#RtcUser+event_ReceivedDeviceList), [<code>StartPreviewError</code>](#RtcUser+event_StartPreviewError)  
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
    <td>config.videoDeviceConfig.device</td><td><code>int</code></td><td></td><td><p>The device id to use (possible values: 0...n - specific device, true - auto device, false - no video).</p>
</td>
    </tr><tr>
    <td>[config.videoDeviceConfig.width]</td><td><code>int</code></td><td></td><td><p>The video width.</p>
</td>
    </tr><tr>
    <td>[config.videoDeviceConfig.height]</td><td><code>int</code></td><td></td><td><p>The video height.</p>
</td>
    </tr><tr>
    <td>[config.videoDeviceConfig.framerate]</td><td><code>int</code></td><td></td><td><p>The video framerate.</p>
</td>
    </tr><tr>
    <td>videoDeviceConfig.source</td><td><code>String</code></td><td></td><td><p>The video source to be requested
valid parameters: &#39;camera&#39; | &#39;screen&#39;.</p>
</td>
    </tr><tr>
    <td>config.audioDeviceConfig</td><td><code>object</code></td><td></td><td><p>The audio config object.</p>
</td>
    </tr><tr>
    <td>config.audioDeviceConfig.device</td><td><code>int</code></td><td></td><td><p>The device id to use (possible values: 0...n - specific device, true - auto device, false - no audio).</p>
</td>
    </tr><tr>
    <td>[config.audioDeviceConfig.autoGainControl]</td><td><code>boolean</code></td><td></td><td><p>Automatic gain control attempts to automatically maintain a steady overall volume level.</p>
</td>
    </tr><tr>
    <td>[config.audioDeviceConfig.echoCancellation]</td><td><code>boolean</code></td><td></td><td><p>Echo cancellation attempts to prevent echo effects.</p>
</td>
    </tr><tr>
    <td>[config.audioDeviceConfig.noiseSuppression]</td><td><code>boolean</code></td><td></td><td><p>Noise suppression automatically filters the audio to remove background noise.</p>
</td>
    </tr><tr>
    <td>config.elementId</td><td><code>string</code></td><td></td><td><p>The id of a video element to pass in the requested stream directly.</p>
</td>
    </tr><tr>
    <td>[config.useWebView]</td><td><code>boolean</code></td><td><code>false</code></td><td><p>A flag to indicate that a WebView is used; default value: false.</p>
</td>
    </tr>  </tbody>
</table>

**Example** *(Audio &amp; video.)*  
```js
// rtcUser instance of RtcUser
var config = {
    videoDeviceConfig : {
         device: 0, // video is enabled using specific device
         width: 640,
         height: 360,
         framerate: 30,
         source: 'camera'
    },
    audioDeviceConfig : {
         device: 0 // audio is enabled using specific device
    },
    elementId : 'video-local',
    useWebView : true
};
rtcUser.startPreview(config);
```
**Example** *(Video only.)*  
```js
// rtcUser instance of RtcUser
var config = {
    videoDeviceConfig : {
         device: 0, // video is enabled using specific device
         width: 640,
         height: 360,
         framerate: 30,
         source: 'camera'
    },
    audioDeviceConfig : {
         device: false // no audio; video-only preview
    },
    elementId : 'video-local',
    useWebView : false
};
rtcUser.startPreview(config);
```
**Example** *(Audio only.)*  
```js
// rtcUser instance of RtcUser
var config = {
    videoDeviceConfig : {
         device: false // no video; audio-only preview
    },
    audioDeviceConfig : {
         device: 0 // audio is enabled using specific device
    },
    elementId : 'video-local',
    useWebView : false
};
rtcUser.startPreview(config);
```
**Example** *(Audio only with all preprocessing disabled.)*  
```js
// rtcUser instance of RtcUser
var config = {
    videoDeviceConfig : {
         device: false // no video; audio-only preview
    },
    audioDeviceConfig : {
         device: 0, // audio is enabled using specific device
         autoGainControl: false,
         echoCancellation: false,
         noiseSuppression: false
    },
    elementId : 'video-local',
    useWebView : false
};
rtcUser.startPreview(config);
```
<a name="RtcUser+stopPreview"></a>

## rtcUser.stopPreview()
Stops the preview.

**Kind**: instance method of [<code>RtcUser</code>](#RtcUser)  
**Emits**: [<code>StopPreviewSuccess</code>](#RtcUser+event_StopPreviewSuccess), [<code>StopPreviewError</code>](#RtcUser+event_StopPreviewError)  
**Example**  
```js
// rtcUser instance of RtcUser
rtcUser.stopPreview();
```
<a name="RtcUser+muteVideo"></a>

## <del>rtcUser.muteVideo(mute)</del>
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

## <del>rtcUser.muteAudio(mute)</del>
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

## rtcUser.muteDevice(config)
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

## rtcUser.injectExternalMediaStream(config)
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
<a name="RtcUser+event_SignInSuccess"></a>

## "SignInSuccess"
SignInSuccess event. The event is fired if sign in succeeded.

**Kind**: event emitted by [<code>RtcUser</code>](#RtcUser)  
**Typeof**: [<code>SignInSuccessEvent</code>](#SignInSuccessEvent)  
<a name="RtcUser+event_SignInError"></a>

## "SignInError"
SignInError event. The event is fired if sign in failed.

**Kind**: event emitted by [<code>RtcUser</code>](#RtcUser)  
**Typeof**: [<code>ErrorEvent</code>](#ErrorEvent)  
<a name="RtcUser+event_SignOutSuccess"></a>

## "SignOutSuccess"
SignOutSuccess event. The event is fired if sign out succeeded. Session is now destroyed.

**Kind**: event emitted by [<code>RtcUser</code>](#RtcUser)  
**Typeof**: [<code>SuccessEvent</code>](#SuccessEvent)  
<a name="RtcUser+event_SignOutError"></a>

## "SignOutError"
SignOutError event. The event is fired if an error occured. Session is destroyed in any case.

**Kind**: event emitted by [<code>RtcUser</code>](#RtcUser)  
**Typeof**: [<code>ErrorEvent</code>](#ErrorEvent)  
<a name="RtcUser+event_SetConfigError"></a>

## "SetConfigError"
SetConfigError event. The event is fired if config failed to be set.

**Kind**: event emitted by [<code>RtcUser</code>](#RtcUser)  
**Typeof**: [<code>ErrorEvent</code>](#ErrorEvent)  
<a name="RtcUser+event_ReceivedServerStats"></a>

## "ReceivedServerStats"
ReceivedServerStats event. The event is fired if server stats is received.

**Kind**: event emitted by [<code>RtcUser</code>](#RtcUser)  
**Typeof**: [<code>ServerStatsEvent</code>](#ServerStatsEvent)  
<a name="RtcUser+event_ReceivedWebRTCStats"></a>

## "ReceivedWebRTCStats"
ReceivedWebRTCStats event. The event is fired multiple times between the "start" and "stop" broadcast events. The payload contains WebRTC stats information.

**Kind**: event emitted by [<code>RtcUser</code>](#RtcUser)  
**Typeof**: [<code>WebRTCStatsEvent</code>](#WebRTCStatsEvent)  
<a name="RtcUser+event_StartBroadcastSuccess"></a>

## "StartBroadcastSuccess"
StartBroadcastSuccess event. The event is fired if a broadcast started successfully.

**Kind**: event emitted by [<code>RtcUser</code>](#RtcUser)  
**Typeof**: [<code>SuccessEvent</code>](#SuccessEvent)  
<a name="RtcUser+event_StartBroadcastError"></a>

## "StartBroadcastError"
StartBroadcastError event. The event is fired if a broadcast failed to start.

**Kind**: event emitted by [<code>RtcUser</code>](#RtcUser)  
**Typeof**: [<code>ErrorEvent</code>](#ErrorEvent)  
<a name="RtcUser+event_BroadcastStatus"></a>

## "BroadcastStatus"
BroadcastStatus event. The event is fired multiple times between the "start" and "stop" broadcast events. The payload contains information about the connection state.

**Kind**: event emitted by [<code>RtcUser</code>](#RtcUser)  
**Typeof**: [<code>StatusEvent</code>](#StatusEvent)  
<a name="RtcUser+event_BroadcastError"></a>

## "BroadcastError"
BroadcastError event. The event is fired if a broadcasting error occurred between the "start" and "stop" broadcast events.

**Kind**: event emitted by [<code>RtcUser</code>](#RtcUser)  
**Typeof**: [<code>ErrorEvent</code>](#ErrorEvent)  
<a name="RtcUser+event_StopBroadcastSuccess"></a>

## "StopBroadcastSuccess"
StopBroadcastSuccess event. The event is fired if a broadcast stopped successfully. It does not contain an event payload.

**Kind**: event emitted by [<code>RtcUser</code>](#RtcUser)  
**Typeof**: [<code>SuccessEvent</code>](#SuccessEvent)  
<a name="RtcUser+event_StopBroadcastError"></a>

## "StopBroadcastError"
StopBroadcastError event. The event is fired if a broadcast failed to execute the "stop" call as it is expected. Note: the broadcast is guaranteed to stop before the event is fired.

**Kind**: event emitted by [<code>RtcUser</code>](#RtcUser)  
**Typeof**: [<code>ErrorEvent</code>](#ErrorEvent)  
<a name="RtcUser+event_ReceivedDeviceList"></a>

## "ReceivedDeviceList"
ReceivedDeviceList event. The event is fired if a list of connected input video and audio devices is received.

**Kind**: event emitted by [<code>RtcUser</code>](#RtcUser)  
**Typeof**: [<code>DevicesReceivedEvent</code>](#DevicesReceivedEvent)  
<a name="RtcUser+event_GetSelectedDeviceError"></a>

## "GetSelectedDeviceError"
GetSelectedDeviceError event. The event is fired if a selected video/audio device getting failed.

**Kind**: event emitted by [<code>RtcUser</code>](#RtcUser)  
**Typeof**: [<code>ErrorEvent</code>](#ErrorEvent)  
<a name="RtcUser+event_StartPreviewSuccess"></a>

## "StartPreviewSuccess"
StartPreviewSuccess event. The event is fired if a preview started successfully.

**Kind**: event emitted by [<code>RtcUser</code>](#RtcUser)  
**Typeof**: [<code>StartPreviewSuccessEvent</code>](#StartPreviewSuccessEvent)  
<a name="RtcUser+event_StartPreviewError"></a>

## "StartPreviewError"
StartPreviewError event. The event is fired if a preview failed to start.

**Kind**: event emitted by [<code>RtcUser</code>](#RtcUser)  
**Typeof**: [<code>ErrorEvent</code>](#ErrorEvent)  
<a name="RtcUser+event_StopPreviewSuccess"></a>

## "StopPreviewSuccess"
StopPreviewSuccess event. The event is fired if a preview stopped successfully.

**Kind**: event emitted by [<code>RtcUser</code>](#RtcUser)  
**Typeof**: [<code>SuccessEvent</code>](#SuccessEvent)  
<a name="RtcUser+event_StopPreviewError"></a>

## "StopPreviewError"
StopPreviewError event. The event is fired if a preview failed to stop. Note: the preview is guaranteed to stop before the event is fired.

**Kind**: event emitted by [<code>RtcUser</code>](#RtcUser)  
**Typeof**: [<code>ErrorEvent</code>](#ErrorEvent)  
<a name="RtcUser+event_MuteDeviceError"></a>

## "MuteDeviceError"
MuteDeviceError event. The event is fired if a video/audio device mute/unmute failed.

**Kind**: event emitted by [<code>RtcUser</code>](#RtcUser)  
**Typeof**: [<code>ErrorEvent</code>](#ErrorEvent)  

-----

## Type Definitions
<a name="ErrorEvent"></a>

## ErrorEvent : <code>object</code>
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
    <td>data</td><td><code>object</code></td><td><p>The data object - Deprecated: will be removed in nanoStream Webcaster v.6; please use the &quot;error&quot; object instead.</p>
</td>
    </tr><tr>
    <td>error</td><td><code>object</code></td><td><p>The error object.</p>
</td>
    </tr><tr>
    <td>error.code</td><td><code><a href="#ErrorCode">ErrorCode</a></code></td><td><p>The code of the error.</p>
</td>
    </tr><tr>
    <td>error.message</td><td><code>string</code></td><td><p>Human readable message of the error.</p>
</td>
    </tr><tr>
    <td>error.name</td><td><code>string</code></td><td><p>The name of the error.</p>
</td>
    </tr><tr>
    <td>error.text</td><td><code>string</code></td><td><p>The text of the error - Deprecated: will be removed in nanoStream Webcaster v.6; please use the &quot;error.message&quot; property instead.</p>
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

<a name="SuccessEvent"></a>

## SuccessEvent : <code>object</code>
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
    <td>[data]</td><td><code>object</code></td><td><p>The data object. Note: the property is optional, therefore, its presence is not guaranteed.</p>
</td>
    </tr><tr>
    <td>[data.output]</td><td><code>string</code></td><td><p>The RTMP ingest URL. Note: the property is optional, therefore, its presence is not guaranteed.</p>
</td>
    </tr><tr>
    <td>[data.streamname]</td><td><code>string</code></td><td><p>The RTMP ingest streamname. Note: the property is optional, therefore, its presence is not guaranteed.</p>
</td>
    </tr><tr>
    <td>[data.stream]</td><td><code>object</code></td><td><p>The stream object. Note: the property is optional, therefore, its presence is not guaranteed.</p>
</td>
    </tr>  </tbody>
</table>

<a name="StatusEvent"></a>

## StatusEvent : <code>object</code>
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
    <td>[data.number]</td><td><code>object</code></td><td><p>Reserverd for internal developer&#39;s use. Note: the property is optional, therefore, its presence is not guaranteed - Deprecated: will be removed in nanoStream Webcaster v.6.</p>
</td>
    </tr><tr>
    <td>[data.rtmp]</td><td><code>object</code></td><td><p>Reserved for internal developer&#39;s use. Note: the property is optional, therefore, its presence is not guaranteed - Deprecated: will be removed in nanoStream Webcaster v.6.</p>
</td>
    </tr><tr>
    <td>data.state</td><td><code>object</code></td><td><p>The connection state (possible values: 4 = &#39;signalling&#39;, 5 = &#39;connected&#39;, 7 = &#39;reconnecting&#39;, 6 = &#39;broadcasting&#39;).</p>
</td>
    </tr><tr>
    <td>data.streamname</td><td><code>object</code></td><td><p>The RTMP ingest streamname.</p>
</td>
    </tr><tr>
    <td>data.text</td><td><code>object</code></td><td><p>The connection state text (possible values: &#39;signalling&#39;, &#39;connected&#39;, &#39;reconnecting&#39;).</p>
</td>
    </tr><tr>
    <td>[name]</td><td><code>object</code></td><td><p>The name of the event. Note: the property is optional, therefore, its presence is not guaranteed.</p>
</td>
    </tr><tr>
    <td>[target]</td><td><code>object</code></td><td><p>Reserved for internal developer&#39;s use. Note: the property is optional, therefore, its presence is not guaranteed - Deprecated: will be removed in nanoStream Webcaster v.6.</p>
</td>
    </tr>  </tbody>
</table>

<a name="DevicesReceivedEvent"></a>

## DevicesReceivedEvent : <code>object</code>
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
    <td>data.devices</td><td><code>object</code></td><td><p>The audio and video devices object.</p>
</td>
    </tr><tr>
    <td>[data.devices.audiodevices]</td><td><code>Array.&lt;object&gt;</code></td><td><p>An array of connected input audio devices. Note: the property is optional, therefore, its presence is not guaranteed.</p>
</td>
    </tr><tr>
    <td>data.devices.audiodevices.id</td><td><code>string</code></td><td><p>The id of an audio device.</p>
</td>
    </tr><tr>
    <td>data.devices.audiodevices.index</td><td><code>number</code></td><td><p>The index of an audio device. Note: indices start from 0.</p>
</td>
    </tr><tr>
    <td>[data.devices.videodevices]</td><td><code>Array.&lt;object&gt;</code></td><td><p>An array of connected input video devices. Note: the property is optional, therefore, its presence is not guaranteed.</p>
</td>
    </tr><tr>
    <td>data.devices.videodevices.id</td><td><code>string</code></td><td><p>The id of a video device.</p>
</td>
    </tr><tr>
    <td>data.devices.videodevices.index</td><td><code>number</code></td><td><p>The index of a video device. Note: indices start from 0.</p>
</td>
    </tr><tr>
    <td>data.updated</td><td><code>boolean</code></td><td><p>Reserved for internal developer&#39;s use - Deprecated: will be removed in nanoStream Webcaster v.6.</p>
</td>
    </tr>  </tbody>
</table>

<a name="StartPreviewSuccessEvent"></a>

## StartPreviewSuccessEvent : <code>object</code>
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
    <td>data.constraints</td><td><code>object</code></td><td><p>The constraints object.</p>
</td>
    </tr><tr>
    <td>[data.constraints.audio]</td><td><code>object</code></td><td><p>The audio constraints object. Note: the property is optional, therefore, its presence is not guaranteed.</p>
</td>
    </tr><tr>
    <td>data.constraints.audio.deviceId</td><td><code>object</code></td><td><p>The id of an audio device.</p>
</td>
    </tr><tr>
    <td>[data.constraints.video]</td><td><code>object</code></td><td><p>The video constraints object. Note: the property is optional, therefore, its presence is not guaranteed.</p>
</td>
    </tr><tr>
    <td>data.constraints.video.deviceId</td><td><code>object</code></td><td><p>The id of a video device.</p>
</td>
    </tr><tr>
    <td>[data.constraints.video.framerate]</td><td><code>object</code></td><td><p>The video framerate. Note: the property is optional, therefore, its presence is not guaranteed.</p>
</td>
    </tr><tr>
    <td>[data.constraints.video.height]</td><td><code>object</code></td><td><p>The video height. Note: the property is optional, therefore, its presence is not guaranteed.</p>
</td>
    </tr><tr>
    <td>data.constraints.video.source</td><td><code>string</code></td><td><p>The video source.</p>
</td>
    </tr><tr>
    <td>[data.constraints.video.width]</td><td><code>object</code></td><td><p>The video width. Note: the property is optional, therefore, its presence is not guaranteed.</p>
</td>
    </tr><tr>
    <td>data.metadata</td><td><code>object</code></td><td><p>The metadata object.</p>
</td>
    </tr><tr>
    <td>data.metadata.framerate</td><td><code>number</code></td><td><p>The video framerate set in metdata.</p>
</td>
    </tr><tr>
    <td>data.metadata.hasAudio</td><td><code>number</code></td><td><p>A flag to indicate that audio is present.</p>
</td>
    </tr><tr>
    <td>data.metadata.hasVideo</td><td><code>number</code></td><td><p>A flag to indicate that video is present.</p>
</td>
    </tr><tr>
    <td>data.metadata.height</td><td><code>number</code></td><td><p>The video height set in metadata.</p>
</td>
    </tr><tr>
    <td>data.metadata.width</td><td><code>number</code></td><td><p>The video width set in metadata.</p>
</td>
    </tr><tr>
    <td>data.stream</td><td><code>object</code></td><td><p>The stream object.</p>
</td>
    </tr><tr>
    <td>data.stream.active</td><td><code>boolean</code></td><td><p>A flag to indicate that a stream is active.</p>
</td>
    </tr><tr>
    <td>data.stream.id</td><td><code>string</code></td><td><p>The stream id.</p>
</td>
    </tr>  </tbody>
</table>

<a name="SignInSuccessEvent"></a>

## SignInSuccessEvent : <code>object</code>
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
    <td>data.server</td><td><code>string</code></td><td><p>The URL of the WebRTC server</p>
</td>
    </tr><tr>
    <td>data.userId</td><td><code>string</code></td><td><p>The user id of the WebRTC server.</p>
</td>
    </tr>  </tbody>
</table>

<a name="ServerStatsEvent"></a>

## ServerStatsEvent : <code>object</code>
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
    <td>data.stats</td><td><code>object</code></td><td><p>The stats object.</p>
</td>
    </tr><tr>
    <td>data.stats.active_connections</td><td><code>number</code></td><td><p>The total number of active connections to the WebRTC server.</p>
</td>
    </tr><tr>
    <td>data.stats.active_passthroughs</td><td><code>number</code></td><td><p>The number of active connections with passthrough enabled to the WebRTC server.</p>
</td>
    </tr><tr>
    <td>data.stats.active_transcoders</td><td><code>number</code></td><td><p>The number of active connections with transcoding enabled to the WebRTC server.</p>
</td>
    </tr><tr>
    <td>data.stats.cpu_load</td><td><code>number</code></td><td><p>The WebRTC server CPU load.</p>
</td>
    </tr><tr>
    <td>data.stats.disk_space</td><td><code>number</code></td><td><p>The WebRTC server disk space.</p>
</td>
    </tr><tr>
    <td>data.stats.domainname</td><td><code>string</code></td><td><p>The WebRTC server domain name.</p>
</td>
    </tr><tr>
    <td>data.stats.hostname</td><td><code>string</code></td><td><p>The WebRTC server host name.</p>
</td>
    </tr><tr>
    <td>data.stats.license</td><td><code>object</code></td><td><p>The WebRTC server license.</p>
</td>
    </tr><tr>
    <td>data.stats.license.end</td><td><code>string</code></td><td><p>The license expiration date.</p>
</td>
    </tr><tr>
    <td>data.stats.license.expired</td><td><code>boolean</code></td><td><p>A flag to indicate that the license has expired.</p>
</td>
    </tr><tr>
    <td>data.stats.license.expiring</td><td><code>boolean</code></td><td><p>A flag to indicate if the license has an end date or not.</p>
</td>
    </tr><tr>
    <td>data.stats.license.start</td><td><code>string</code></td><td><p>The license issue date.</p>
</td>
    </tr><tr>
    <td>data.stats.license.valid</td><td><code>boolean</code></td><td><p>A flag to indicate that the license is valid.</p>
</td>
    </tr><tr>
    <td>data.stats.max_cpu_load</td><td><code>number</code></td><td><p>The WebRTC server maximum CPU load.</p>
</td>
    </tr><tr>
    <td>data.stats.max_transcoders</td><td><code>number</code></td><td><p>The WebRTC server maximum number of transcoders.</p>
</td>
    </tr><tr>
    <td>data.stats.server_version</td><td><code>string</code></td><td><p>The version of the WebRTC server.</p>
</td>
    </tr><tr>
    <td>data.stats.transcoder_version</td><td><code>string</code></td><td><p>The version of the transcoder.</p>
</td>
    </tr><tr>
    <td>name</td><td><code>string</code></td><td><p>The name of the event.</p>
</td>
    </tr><tr>
    <td>target</td><td><code>string</code></td><td><p>Reserved for internal developer&#39;s use - Deprecated: will be removed in nanoStream Webcaster v.6.</p>
</td>
    </tr>  </tbody>
</table>

<a name="WebRTCStatsEvent"></a>

## WebRTCStatsEvent : <code>object</code>
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
    <td>data.message</td><td><code>string</code></td><td><p>The connection state message (expected value: &#39;broadcasting&#39;).</p>
</td>
    </tr><tr>
    <td>data.stats.results</td><td><code>object</code></td><td><p>The results object.</p>
</td>
    </tr><tr>
    <td>[data.stats.results.audioBitrate]</td><td><code>string</code></td><td><p>The audio bitrate in kbps. Note: the property is optional, therefore, its presence is not guaranteed.</p>
</td>
    </tr><tr>
    <td>[data.stats.results.audioCodec]</td><td><code>string</code></td><td><p>The audio codec. Note: the property is optional, therefore, its presence is not guaranteed.</p>
</td>
    </tr><tr>
    <td>[data.stats.results.frameHeight]</td><td><code>number</code></td><td><p>The video frame height. Note: the property is optional, therefore, its presence is not guaranteed.</p>
</td>
    </tr><tr>
    <td>[data.stats.results.frameWidth]</td><td><code>number</code></td><td><p>The video frame width. Note: the property is optional, therefore, its presence is not guaranteed.</p>
</td>
    </tr><tr>
    <td>[data.stats.results.framerate]</td><td><code>number</code></td><td><p>The video frame rate in fps. Note: the property is optional, therefore, its presence is not guaranteed.</p>
</td>
    </tr><tr>
    <td>[data.stats.results.videoBitrate]</td><td><code>number</code></td><td><p>The video bitrate in kbps. Note: the property is optional, therefore, its presence is not guaranteed.</p>
</td>
    </tr><tr>
    <td>[data.stats.results.videoCodec]</td><td><code>string</code></td><td><p>The video codec. Note: the property is optional, therefore, its presence is not guaranteed.</p>
</td>
    </tr><tr>
    <td>data.stats.state</td><td><code>number</code></td><td><p>The connection state (expected value: 6 = &#39;broadcasting&#39;).</p>
</td>
    </tr><tr>
    <td>data.stats.streamname</td><td><code>string</code></td><td><p>The RTMP ingest streamname.</p>
</td>
    </tr><tr>
    <td>data.stats.text</td><td><code>string</code></td><td><p>The connection state text (expected value: &#39;broadcasting&#39;).</p>
</td>
    </tr><tr>
    <td>name</td><td><code>string</code></td><td><p>The name of the event.</p>
</td>
    </tr><tr>
    <td>target</td><td><code>string</code></td><td><p>Reserved for internal developer&#39;s use - Deprecated: will be removed in nanoStream Webcaster v.6.</p>
</td>
    </tr>  </tbody>
</table>

<a name="ErrorCode"></a>

## ErrorCode : <code>number</code>
The possible client error codes in an ErrorEvent event.

**Kind**: global typedef  
**See**: [ErrorEvent](#ErrorEvent)  
**Properties**

<table>
  <thead>
    <tr>
      <th>Name</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>1000-1999</td><td><code>GeneralError</code></td><td></td>
    </tr><tr>
    <td>1000</td><td></td><td><p>A general error returned by any nanoStream Webcaster component (see the error message for more informaiton).</p>
</td>
    </tr><tr>
    <td>1001</td><td></td><td><p>A type is not valid.</p>
</td>
    </tr><tr>
    <td>1002</td><td></td><td><p>A value is not valid.</p>
</td>
    </tr><tr>
    <td>1003</td><td></td><td><p>An enum value is not valid.</p>
</td>
    </tr><tr>
    <td>1004</td><td></td><td><p>An object does not exist.</p>
</td>
    </tr><tr>
    <td>1005</td><td></td><td><p>A functions is not defined.</p>
</td>
    </tr><tr>
    <td>2000-2999</td><td><code>RequestError</code></td><td></td>
    </tr><tr>
    <td>2000</td><td></td><td><p>A general request error - Deprecated: will be removed in nanoStream Webcaster v.6.</p>
</td>
    </tr><tr>
    <td>3000-3999</td><td><code>WebSocketError</code></td><td></td>
    </tr><tr>
    <td>3000</td><td></td><td><p>A general WebSocket error (see the error message for more information).</p>
</td>
    </tr><tr>
    <td>3001</td><td></td><td><p>A WebSocket state is wrong (see an error message for more information).</p>
</td>
    </tr><tr>
    <td>3002</td><td></td><td><p>An error occurred when creating a WebSocket.</p>
</td>
    </tr><tr>
    <td>4000-4999</td><td><code>SessionError</code></td><td></td>
    </tr><tr>
    <td>4000</td><td></td><td><p>Sign in failed.</p>
</td>
    </tr><tr>
    <td>4001</td><td></td><td><p>A session is not signed in.</p>
</td>
    </tr><tr>
    <td>5000-5999</td><td><code>BroadcastError</code></td><td></td>
    </tr><tr>
    <td>5000</td><td></td><td><p>A broadcast failed to start.</p>
</td>
    </tr><tr>
    <td>5001</td><td></td><td><p>A general broadcast error (see the error message for more information).</p>
</td>
    </tr><tr>
    <td>5002</td><td></td><td><p>A broadcast failed to stop.</p>
</td>
    </tr><tr>
    <td>6000-6999</td><td><code>WebRTCError</code></td><td></td>
    </tr><tr>
    <td>6000</td><td></td><td><p>A media stream was received, but no video/audio data is coming from a device. The device could be in use from another application.</p>
</td>
    </tr><tr>
    <td>6001</td><td></td><td><p>A media stream was received, but it contains no tracks.</p>
</td>
    </tr><tr>
    <td>6002</td><td></td><td><p>A media stream was not found.</p>
</td>
    </tr><tr>
    <td>6003</td><td></td><td><p>A media stream was not removed.</p>
</td>
    </tr><tr>
    <td>6004</td><td></td><td><p>No devices are available for &quot;getUserMedia&quot;.</p>
</td>
    </tr><tr>
    <td>6005</td><td></td><td><p>A general &quot;getUserMedia&quot; error (may include: &#39;PermissionDenied&#39;, &#39;NotAllowedError&#39;, &#39;NotReadableError&#39;, &#39;NotFoundError&#39;,
&#39;OverconstrainedError&#39;, &#39;AbortError&#39;, &#39;GetMediaError&#39;, &#39;NoDeviceError&#39;, &#39;NoStreamError&#39;).</p>
</td>
    </tr><tr>
    <td>6006</td><td></td><td><p>Devices failed to get enumerated.</p>
</td>
    </tr><tr>
    <td>6008</td><td></td><td><p>A general &quot;getDisplayMedia&quot; error (may include: &#39;PermissionDenied&#39;, &#39;NotAllowedError&#39;).</p>
</td>
    </tr><tr>
    <td>7000-7999</td><td><code>WebRTCError</code></td><td></td>
    </tr><tr>
    <td>7000</td><td></td><td><p>An error occurred on the server.</p>
</td>
    </tr>  </tbody>
</table>


-----
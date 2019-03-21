---
id: nanostream_webrtc_api
title: nanoStream WebRTC API
sidebar_label: WebRTC API
---

<a name="RtcUser"></a>

## RtcUser
WebRTC Public API Class Version 5.0.6.

**Kind**: global class  
<a name="new_RtcUser_new"></a>

### new RtcUser()
WebRTC Public API Class.

**Example**  
```js
var rtcUser = new RtcUser();
```
<a name="RtcUser+checkSupport"></a>

### rtcUser.checkSupport()
Checks if nanoStream WebRTC is supported by current browser

**Kind**: instance method of [<code>RtcUser</code>](#RtcUser)  
**Example**  
```js
RtcUser.checkSupport();
```
<a name="RtcUser+signIn"></a>

### rtcUser.signIn(options)
Signs in.

**Kind**: instance method of [<code>RtcUser</code>](#RtcUser)  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>object</code> | The options object. |
| options.server | <code>string</code> | The url to the webrtc server. |
| options.userName | <code>string</code> | The name of the RtcUser. |
| options.room | <code>string</code> | The room to join. |
| [options.token] | <code>string</code> | The security token for the server. |
| options.serverUserName | <code>string</code> | The username credential for the server. |
| options.serverPassword | <code>string</code> | The password credential for the server. |
| [options.bintuApiKey] | <code>string</code> | The bintu apikey for authentication. |

**Example**  
```js
// rtcUser instance of RtcUser
var config = {
    server : 'https://rtc-lb.nanocosmos.de/p/webrtcws',
    userName : 'WebrtcChatter',
    room : 'myChatRoom',
    token : 'token-123',
    serverUserName : 'username',
    serverPassword : 'password',
    bintuApiKey : 'awdegfq3490puerg2w54zj2p0w4h46zphm694i0796'
};
rtcUser.signIn(config);
```
<a name="RtcUser+signOut"></a>

### rtcUser.signOut()
Signs out.

**Kind**: instance method of [<code>RtcUser</code>](#RtcUser)  
**Example**  
```js
// rtcUser instance of RtcUser
rtcUser.signOut();
```
<a name="RtcUser+isSignedIn"></a>

### rtcUser.isSignedIn() ⇒ <code>boolean</code>
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

### rtcUser.setConfig(config)
Sets config for the RtcUser.

**Kind**: instance method of [<code>RtcUser</code>](#RtcUser)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| config | <code>object</code> |  | The config object. |
| config.codecs | <code>object</code> |  | The codec object. |
| config.codecs.videoCodec | <code>string</code> | <code>&quot;&#x27;H264&#x27;&quot;</code> | The video codec to use (possible values: 'VP8', 'VP9', 'H264'). |
| config.bitrates | <code>object</code> |  | The codec object. |
| config.bitrates.videoSendInitialBitrate | <code>string</code> | <code>0</code> | The webrtc initial bitrate |
| config.bitrates.videoSendBitrate | <code>string</code> | <code>0</code> | The webrtc bitrate |

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
    }
};
rtcUser.setConfig(config);
```
<a name="RtcUser+setIceServers"></a>

### rtcUser.setIceServers(iceServers)
Sets an array of turn/stun-servers for the peer-to-peer connection.

**Kind**: instance method of [<code>RtcUser</code>](#RtcUser)  

| Param | Type | Description |
| --- | --- | --- |
| iceServers | <code>Array.&lt;object&gt;</code> | The ice servers object. |
| iceServers[].urls | <code>Array.&lt;string&gt;</code> | An array of urls. |
| [iceServers[].username] | <code>string</code> | The username for the ice servers if required. |
| [iceServers[].credential] | <code>string</code> | The password for the ice servers if required. |

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

### rtcUser.checkServer(server)
Checks the state of a webrtc server.

**Kind**: instance method of [<code>RtcUser</code>](#RtcUser)  
**Emits**: <code>event:ReceivedServerStats</code>  

| Param | Type | Description |
| --- | --- | --- |
| server | <code>string</code> | The url of the server. |

**Example**  
```js
// rtcUser instance of RtcUser
var server = 'https://rtc-lb.nanocosmos.de/p/webrtc'
rtcUser.checkServer(server);
```
<a name="RtcUser+enableStats"></a>

### rtcUser.enableStats([enable], [interval])
Enables to receive webrtc stats in a given time interval.

**Kind**: instance method of [<code>RtcUser</code>](#RtcUser)  
**Emits**: <code>event:ReceivedWebRTCStats</code>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [enable] | <code>boolean</code> | <code>true</code> | A flag to enable webrtc stats. |
| [interval] | <code>number</code> | <code>1000</code> | The interval time in milli seconds. |

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

### rtcUser.startBroadcast(config)
Starts a broadcast to a rtmp ingest with transcoding configs.

**Kind**: instance method of [<code>RtcUser</code>](#RtcUser)  
**Emits**: <code>event:StartBroadcastSuccess</code>, <code>event:StartBroadcastError</code>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| config | <code>object</code> |  | The config object. |
| config.transcodingTargets | <code>object</code> |  | The transcoding config object. |
| config.transcodingTargets.output | <code>string</code> |  | The rtmp ingest url for the first stream. |
| [config.transcodingTargets.streamname] | <code>string</code> | <code>null</code> | Optional streamname. Use if you want to pass output and streamname seperately. |
| [config.transcodingTargets.videobitrate] | <code>number</code> | <code></code> | The video bitrate for the transcode of the first stream. |
| [config.transcodingTargets.audiobitrate] | <code>number</code> | <code></code> | The audio bitrate for the transcode of the first stream. |
| [config.transcodingTargets.framerate] | <code>number</code> | <code></code> | The framerate for the transcode of the first stream. |
| [config.transcodingTargets.dropframes] | <code>string</code> | <code>null</code> | A flag to enable frame dropping (possible values: '0', '1'). |
| [config.transcodingTargets.h264passthrough] | <code>string</code> | <code>null</code> | A flag to enable transmuxing without transcoding if video codec 'H264' is used (possible values: '0', '1'). |
| [config.transcodingTargets.icecast_audio] | <code>string</code> | <code>null</code> | A flag to enable embedding of an icecast audio stream, normal audio will be ignored (possible values: '0', '1'). |
| [config.transcodingTargets.rtmpconnectinfo] | <code>string</code> | <code>null</code> | Data to be send with the rtmp streams "onconnect". Pass flat object with key value pairs, hierarchies are not supported. |

**Example**  
```js
// rtcUser instance of RtcUser
var broadcastConfig = {
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
rtcUser.startBroadcast();
```
<a name="RtcUser+stopBroadcast"></a>

### rtcUser.stopBroadcast()
Stop a running broadcast.

**Kind**: instance method of [<code>RtcUser</code>](#RtcUser)  
**Emits**: <code>event:StopBroadcastSuccess</code>, <code>event:StopBroadcastError</code>  
**Example**  
```js
// rtcUser instance of RtcUser
rtcUser.stopBroadcast();
```
<a name="RtcUser+sendMetaData"></a>

### rtcUser.sendMetaData(handlerName, jsonValues)
Add live meta data to a broadcast stream.

**Kind**: instance method of [<code>RtcUser</code>](#RtcUser)  

| Param | Type | Description |
| --- | --- | --- |
| handlerName | <code>&#x27;onMetaData&#x27;</code> \| <code>&#x27;onCuePoint&#x27;</code> | Name of the meta data handler. Other types are not supported. |
| jsonValues | <code>object</code> | The data to be sent. Parameter can contain a maximum object depth of 6. |

**Example**  
```js
// rtcUser instance of RtcUser
rtcUser.sendMetaData('onMetaData', {myString: 'hello', myInteger: 1234});
```
<a name="RtcUser+enterRoom"></a>

### rtcUser.enterRoom()
Connects to the webrtc server and enters the specified room.

**Kind**: instance method of [<code>RtcUser</code>](#RtcUser)  
**Emits**: <code>event:EnterRoomSuccess</code>, <code>event:EnterRoomError</code>  
**Example**  
```js
// rtcUser instance of RtcUser
rtcUser.enterRoom();
```
<a name="RtcUser+leaveRoom"></a>

### rtcUser.leaveRoom()
Disconnects from the webrtc server and leaves the specified room.

**Kind**: instance method of [<code>RtcUser</code>](#RtcUser)  
**Emits**: <code>event:LeaveRoomSuccess</code>, <code>event:LeaveRoomError</code>  
**Example**  
```js
// rtcUser instance of RtcUser
rtcUser.leaveRoom();
```
<a name="RtcUser+invokeCall"></a>

### rtcUser.invokeCall(remoteUserId)
Invokes a call with another user.

**Kind**: instance method of [<code>RtcUser</code>](#RtcUser)  

| Param | Type | Description |
| --- | --- | --- |
| remoteUserId | <code>string</code> | The remote user id of the other user. |

**Example**  
```js
// rtcUser instance of RtcUser
var remoteUserId = '49647969';
rtcUser.invokeCall(remoteUserId);
```
<a name="RtcUser+hangUpCall"></a>

### rtcUser.hangUpCall(remoteUserId)
Hangs up a call with another user.

**Kind**: instance method of [<code>RtcUser</code>](#RtcUser)  
**Emits**: <code>event:???</code>  

| Param | Type | Description |
| --- | --- | --- |
| remoteUserId | <code>string</code> | The remote user id of the other user. |

**Example**  
```js
// rtcUser instance of RtcUser
var remoteUserId = '49647969';
rtcUser.hangUpCall(remoteUserId);
```
<a name="RtcUser+answerCall"></a>

### rtcUser.answerCall(remoteUserId)
Answers a call with another user.

**Kind**: instance method of [<code>RtcUser</code>](#RtcUser)  
**Emits**: <code>event:???</code>  

| Param | Type | Description |
| --- | --- | --- |
| remoteUserId | <code>string</code> | The remote user id of the other user. |

**Example**  
```js
// rtcUser instance of RtcUser
var remoteUserId = '49647969';
rtcUser.hangUpCall(remoteUserId);
```
<a name="RtcUser+declineCall"></a>

### rtcUser.declineCall(remoteUserId)
Declines a call with another user.

**Kind**: instance method of [<code>RtcUser</code>](#RtcUser)  
**Emits**: <code>event:???</code>  

| Param | Type | Description |
| --- | --- | --- |
| remoteUserId | <code>string</code> | The remote user id of the other user. |

**Example**  
```js
// rtcUser instance of RtcUser
var remoteUserId = '49647969';
rtcUser.declineCall(remoteUserId);
```
<a name="RtcUser+addScreenCaptureExtension"></a>

### rtcUser.addScreenCaptureExtension(name)
Adds a Screen Capture Extension to the RtcUser.

**Kind**: instance method of [<code>RtcUser</code>](#RtcUser)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | The name of the screen capture extension. |

**Example**  
```js
// rtcUser instance of RtcUser
var name = 'nanoScreenCapture';
rtcUser.addScreenCaptureExtension(name);
```
<a name="RtcUser+isScreenCaptureAvailable"></a>

### rtcUser.isScreenCaptureAvailable()
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

### rtcUser.getDevices()
Gets all connected local video and audio devices

**Kind**: instance method of [<code>RtcUser</code>](#RtcUser)  
**Emits**: <code>event:ReceivedDeviceList</code>  
**Example**  
```js
// rtcUser instance of RtcUser
rtcUser.getDevices();
```
<a name="RtcUser+setVideoDevice"></a>

### rtcUser.setVideoDevice(config)
Sets the input video device with config

**Kind**: instance method of [<code>RtcUser</code>](#RtcUser)  

| Param | Type | Description |
| --- | --- | --- |
| config | <code>object</code> | The config object |
| config.device | <code>boolean</code> \| <code>number</code> | The value of the video device, possible values: true (auto device), false (no video), number (index of the video device) |
| [config.width] | <code>number</code> | The input width (only if device will be set by index) |
| [config.height] | <code>number</code> | The input height (only if device will be set by index) |
| [config.framerate] | <code>number</code> | The input framerate (only if device will be set by index) |

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

### rtcUser.setAudioDevice(config)
Sets the input audio device

**Kind**: instance method of [<code>RtcUser</code>](#RtcUser)  

| Param | Type | Description |
| --- | --- | --- |
| config | <code>object</code> | The config object |
| config.device | <code>boolean</code> \| <code>number</code> | The value of the audio device, possible values: true (auto device), false (no audio), number (index of the audio device) |

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

### rtcUser.getSelectedVideoDevice()
Gets the current input video device

**Kind**: instance method of [<code>RtcUser</code>](#RtcUser)  
**Example**  
```js
// rtcUser instance of RtcUser
var device = rtcUser.getSelectedVideoDevice();
```
<a name="RtcUser+getSelectedAudioDevice"></a>

### rtcUser.getSelectedAudioDevice()
Gets the current input audio device

**Kind**: instance method of [<code>RtcUser</code>](#RtcUser)  
**Example**  
```js
// rtcUser instance of RtcUser
var device = rtcUser.getSelectedAudioDevice();
```
<a name="RtcUser+startPreview"></a>

### rtcUser.startPreview(config)
Starts the preview

**Kind**: instance method of [<code>RtcUser</code>](#RtcUser)  
**Emits**: <code>event:StartPreviewSuccess</code>, <code>event:StartPreviewError</code>  

| Param | Type | Description |
| --- | --- | --- |
| config | <code>object</code> | The config object |
| config.videoDeviceConfig | <code>object</code> | The video config object |
| config.videoDeviceConfig.device | <code>int</code> | device id to use |
| config.videoDeviceConfig.width | <code>int</code> | video width |
| config.videoDeviceConfig.height | <code>int</code> | video height |
| config.videoDeviceConfig.framerate | <code>int</code> | video framerate |
| videoDeviceConfig.source | <code>String</code> | the video source to be requested valid parameters: 'camera' | 'screen' |
| config.audioDeviceConfig | <code>object</code> | The audio config object |
| config.audioDeviceConfig.device | <code>int</code> | device id to use |
| config.elementId | <code>string</code> | The id of a video element to pass in the requested stream directly |
| config.useWebView | <code>boolean</code> | A flag to indicate that a WebView is used; default value: false. |

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

### rtcUser.stopPreview()
Stops the preview

**Kind**: instance method of [<code>RtcUser</code>](#RtcUser)  
**Emits**: <code>event:StopPreviewSuccess</code>, <code>event:StopPreviewError</code>  
**Example**  
```js
// rtcUser instance of RtcUser
rtcUser.stopPreview();
```
<a name="RtcUser+muteVideo"></a>

### rtcUser.muteVideo(mute)
Mutes/unmutes the video

**Kind**: instance method of [<code>RtcUser</code>](#RtcUser)  

| Param | Type | Description |
| --- | --- | --- |
| mute | <code>boolean</code> | Mute/unmute. |

**Example**  
```js
// rtcUser instance of RtcUser
var mute = true;
rtcUser.muteVideo(mute);
```
<a name="RtcUser+muteAudio"></a>

### rtcUser.muteAudio(mute)
Mutes/unmutes the audio

**Kind**: instance method of [<code>RtcUser</code>](#RtcUser)  

| Param | Type | Description |
| --- | --- | --- |
| mute | <code>boolean</code> | Mute/unmute. |

**Example**  
```js
// rtcUser instance of RtcUser
var mute = true;
rtcUser.muteAudio(mute);
```
<a name="RtcUser+injectExternalMediaStream"></a>

### rtcUser.injectExternalMediaStream(config)
Mixes tracks (currently only audio) of an external MediaStream into the currently previewed local stream

**Kind**: instance method of [<code>RtcUser</code>](#RtcUser)  

| Param | Type | Description |
| --- | --- | --- |
| config | <code>object</code> | Config object with info on what to mix in |
| config.stream | <code>MediaStream</code> | the MediaStream containing the track(s) to mix in |
| config.tracks | <code>Array.&lt;string&gt;</code> | Array with the types of tracks which should be injected (only 'audio' is supported at the moment) |

**Example**  
```js
// rtcUser instance of RtcUser
// externalStream instance of MediaStream (https://developer.mozilla.org/de/docs/Web/API/MediaStream)
var data = {stream: externalStream, tracks: ['audio']};
rtcUser.injectExternalMediaStream(data);
```

---
id: nanoplayer_api
title: NanoPlayer
sidebar_label: NanoPlayer
---

<a name="NanoPlayer"></a>

## NanoPlayer
NanoPlayer Public API Class 0.0.0

**Kind**: global class  
**Version**: 0.0.0  
<a name="new_NanoPlayer_new"></a>

### new NanoPlayer(playerDivId)
The constructor. The source can be loaded via script tag, AMD (requirejs) or CommonJS


| Param | Type | Description |
| --- | --- | --- |
| playerDivId | <code>string</code> | The div element the player will be embedded into. |

**Example**  
```xml
{}
<script type="text/javascript" src="nanoplayer.0.min.js"></script>
<script type="text/javascript">
    var player;
    document.addEventListener('DOMContentLoaded', function () {
        player = new NanoPlayer('playerDiv');
    });
</script>
```
**Example**  
```xml
{}
<script type="text/javascript" src="require.js"></script>
<script type="text/javascript">
    var player;
    requirejs.config({
        paths: {
            // loads the player ...
            // for a local copy of the minified player use a relative path e.g. 'js/nanoplayer.0.min'
            // if 'baseUrl' is defined a local path have to be relative to the base path
            nanoplayer: '//demo.nanocosmos.de/nanoplayer/api/nanoplayer.0.min.js'
        },
        waitSeconds: 20, // timeout for loading modules
    });
    require('nanoplayer', function() {
        player = new NanoPlayer('playerDiv');
    });
</script>
```
<a name="NanoPlayer+version"></a>

### nanoPlayer.version : <code>string</code>
The version of the player.

**Kind**: instance property of [<code>NanoPlayer</code>](#NanoPlayer)  
<a name="NanoPlayer+coreversion"></a>

### nanoPlayer.coreversion : <code>string</code>
The version of the core.

**Kind**: instance property of [<code>NanoPlayer</code>](#NanoPlayer)  
<a name="NanoPlayer+viewversion"></a>

### nanoPlayer.viewversion : <code>string</code>
The version of the view.

**Kind**: instance property of [<code>NanoPlayer</code>](#NanoPlayer)  
<a name="NanoPlayer+type"></a>

### nanoPlayer.type : <code>string</code>
The type of the player.

**Kind**: instance property of [<code>NanoPlayer</code>](#NanoPlayer)  
<a name="NanoPlayer+id"></a>

### nanoPlayer.id : <code>string</code>
The unique id of the player.

**Kind**: instance property of [<code>NanoPlayer</code>](#NanoPlayer)  
<a name="NanoPlayer+capabilities"></a>

### nanoPlayer.capabilities : <code>Array.&lt;string&gt;</code>
The supported tech names of the player.

**Kind**: instance constant of [<code>NanoPlayer</code>](#NanoPlayer)  
<a name="NanoPlayer+setup"></a>

### nanoPlayer.setup(config) ⇒ <code>Promise.&lt;(config\|error)&gt;</code>
Initializes the player with a given config object.

**Kind**: instance method of [<code>NanoPlayer</code>](#NanoPlayer)  
**See**: [config](#NanoPlayer..config)  

| Param | Type | Description |
| --- | --- | --- |
| config | <code>config</code> | The config object for the player including sources, events, styles. |

**Example**  
```js
// player instance of NanoPlayer
player.setup(config).then(function (config) {
    console.log('setup ok with config: ' + JSON.stringify(config)));
}, function (error) {
    console.log(error);
});
```
<a name="NanoPlayer+destroy"></a>

### nanoPlayer.destroy()
Cleans up the player and removes all nested elements from the container div.

**Kind**: instance method of [<code>NanoPlayer</code>](#NanoPlayer)  
**Example**  
```js
// player instance of NanoPlayer
player.destroy();
player.setup(config);
```
<a name="NanoPlayer+play"></a>

### nanoPlayer.play()
Plays the player.

**Kind**: instance method of [<code>NanoPlayer</code>](#NanoPlayer)  
**Example**  
```js
// player instance of NanoPlayer
player.play();
```
<a name="NanoPlayer+pause"></a>

### nanoPlayer.pause()
Pauses the player.

**Kind**: instance method of [<code>NanoPlayer</code>](#NanoPlayer)  
**Example**  
```js
// player instance of NanoPlayer
player.pause();
```
<a name="NanoPlayer+mute"></a>

### nanoPlayer.mute()
Mutes the player.

**Kind**: instance method of [<code>NanoPlayer</code>](#NanoPlayer)  
**Example**  
```js
// player instance of NanoPlayer
player.mute();
```
<a name="NanoPlayer+unmute"></a>

### nanoPlayer.unmute()
Unmutes the player.

**Kind**: instance method of [<code>NanoPlayer</code>](#NanoPlayer)  
**Example**  
```js
// player instance of NanoPlayer
player.unmute();
```
<a name="NanoPlayer+setVolume"></a>

### nanoPlayer.setVolume(volume)
Sets the volume of the player.

**Kind**: instance method of [<code>NanoPlayer</code>](#NanoPlayer)  

| Param | Type | Description |
| --- | --- | --- |
| volume | <code>number</code> | The volume to set in a range from 0.0 to 1.0. |

**Example**  
```js
// player instance of NanoPlayer
player.setVolume(0.3);
```
<a name="NanoPlayer+updateSource"></a>

### nanoPlayer.updateSource(source) ⇒ <code>Promise.&lt;(config\|error)&gt;</code>
Updates the source of the player.

**Kind**: instance method of [<code>NanoPlayer</code>](#NanoPlayer)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| source | <code>object</code> |  | The object to configure the source to play, one of the following properties have to be set. |
| [source.h5live] | <code>object</code> |  | The h5live object to configure the h5live connection. |
| source.h5live.server | <code>object</code> |  | The h5live server object. |
| [source.h5live.server.websocket] | <code>string</code> |  | The h5live websocket url. |
| [source.h5live.server.progressive] | <code>string</code> |  | The h5live progressive download url. |
| [source.h5live.server.hls] | <code>string</code> |  | The h5live hls url. Have to be set for playback on iOS 10 or higher. iOS 9 or lower is not supported. |
| [source.h5live.token] | <code>string</code> |  | The h5live server token. |
| [source.h5live.rtmp] | <code>object</code> |  | The rtmp playout object for h5live playback. |
| source.h5live.rtmp.url | <code>string</code> |  | The rtmp playout url. Have to include the domain, port and application e.g. 'rtmp://example.com:80/live'. |
| source.h5live.rtmp.streamname | <code>string</code> |  | The rtmp streamname. |
| [source.h5live.security] | <code>object</code> |  | The h5live security object for h5live playback. |
| source.h5live.security.token | <code>string</code> |  | The security service token. |
| source.h5live.security.expires | <code>string</code> |  | The time the token expires (system time). |
| source.h5live.security.options | <code>string</code> |  | The security options. |
| source.h5live.security.tag | <code>string</code> |  | The custom tag to decrypt the token. |
| [source.h5live.params] | <code>object</code> |  | The params object to pass custom query parameters over the h5live server connection. Parameters can be passed as key/value pairs. |
| [source.bintu] | <code>object</code> |  | An bintu object to get sources. |
| source.bintu.streamid | <code>string</code> |  | The bintu stream id. |
| [source.bintu.apiurl] | <code>string</code> | <code>&quot;\&quot;https://bintu.nanocosmos.de\&quot;&quot;</code> | The bintu api url. |
| [source.hls] | <code>string</code> |  | An hls playout url as string. |

**Example**  
```js
// player instance of NanoPlayer
var source = {
    h5live: {
        server: {
            websocket: 'wss://h5live.nanocosmos.de/h5live/stream',
            hls: 'https://h5live.nanocosmos.de/h5live/http/playlist.m3u8'
        },
        rtmp: {
            url: 'rtmp://example.nanocosmos.de:80/live',
            streamname: 'h5liveStream'
        },
        security: {
            token: 'awe456b367g4e6rm8f56hbe6gd8f5m8df6n8idf6tf8mfd68ndi',
            expires: '1519819200',
            options: '15',
            tag: 'anyTag'
        }
    }
}
player.updateSource(source).then(function (config) {
    console.log('update source ok with config: ' + JSON.stringify(config)));
}, function (error) {
    console.log(error);
});
```
<a name="NanoPlayer..event_onReady"></a>

### "onReady"
The ready event to pass in the 'config.events' object at the setup call. Fires if the player is ready to play after successful setup.

**Kind**: event emitted by [<code>NanoPlayer</code>](#NanoPlayer)  
**See**: [config](#NanoPlayer..config)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | The event name. |
| player | <code>string</code> | The player name (id of the playerDiv). |
| id | <code>string</code> | The unique id of the player instance. |
| version | <code>string</code> | The version of the player. |
| data | <code>object</code> | The data object. |
| data.config | <code>config</code> | The config object. |
| state | [<code>state</code>](#NanoPlayer..state) | The player state. |

**Example**  
```js
// player instance of NanoPlayer
var onReady = function (event) {
    console.log('Ready: ' + JSON.stringify(event.data.config));
}
config.events.onReady = onReady;
player.setup(config).then(function (config) {
    console.log('setup ok with config: ' + JSON.stringify(config)));
}, function (error) {
    console.log(error);
});
```
<a name="NanoPlayer..event_onPlay"></a>

### "onPlay"
The play event to pass in the 'config.events' object at the setup call. Fires if playout is started.

**Kind**: event emitted by [<code>NanoPlayer</code>](#NanoPlayer)  
**See**: [config](#NanoPlayer..config)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | The event name. |
| player | <code>string</code> | The player name (id of the playerDiv). |
| id | <code>string</code> | The unique id of the player instance. |
| version | <code>string</code> | The version of the player. |
| data | <code>object</code> | The data object. |
| data.stats | <code>object</code> | The startup stats object. |
| data.stats.connecting | <code>number</code> | The time when 'player.play()' is just called in ms (always zero). |
| data.stats.connected | <code>number</code> | The time when the connection is established in ms (relative to 'connecting'). |
| data.stats.firstFragmentReceived | <code>number</code> | The time when the first fragment is received in ms (relative to 'connecting'). |
| data.stats.firstFrameRendered | <code>number</code> | The time when the first frame is rendered in ms (relative to 'connecting'). |
| data.stats.playable | <code>number</code> | The time when the buffer has enough data to start in ms (relative to 'connecting'). |
| data.stats.playing | <code>number</code> | The time when the playback is started in ms (relative to 'connecting'). It's the total startup time. |
| state | [<code>state</code>](#NanoPlayer..state) | The player state. |

**Example**  
```js
// player instance of NanoPlayer
var onPlay = function (event) {
    console.log('Playing');
    console.log('play stats: ' + JSON.stringify(event.data.stats));
};
config.events.onPlay = onPlay;
player.setup(config).then(function (config) {
    console.log('setup ok with config: ' + JSON.stringify(config)));
}, function (error) {
    console.log(error);
});
```
<a name="NanoPlayer..event_onPause"></a>

### "onPause"
The pause event to pass in the 'config.events' object at the setup call. Fires if playout is paused.

**Kind**: event emitted by [<code>NanoPlayer</code>](#NanoPlayer)  
**See**: [config](#NanoPlayer..config)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | The event name. |
| player | <code>string</code> | The player name (id of the playerDiv). |
| id | <code>string</code> | The unique id of the player instance. |
| version | <code>string</code> | The version of the player. |
| data | <code>object</code> | The data object. |
| data.reason | [<code>pausereason</code>](#NanoPlayer..pausereason) | The reason of pausing. |
| state | [<code>state</code>](#NanoPlayer..state) | The player state. |

**Example**  
```js
// player instance of NanoPlayer
var onPause = function (event) {
    console.log('Pause');
    if (event.data.reason !== 'normal') {
         alert('Paused with reason: ' + event.data.reason);
    }
};
config.events.onPause = onPause;
player.setup(config).then(function (config) {
    console.log('setup ok with config: ' + JSON.stringify(config)));
}, function (error) {
    console.log(error);
});
```
<a name="NanoPlayer..event_onLoading"></a>

### "onLoading"
The load event to pass in the 'config.events' object at the setup call. Fires if playout was stopped or player is ready after setup and tries to play.

**Kind**: event emitted by [<code>NanoPlayer</code>](#NanoPlayer)  
**See**: [config](#NanoPlayer..config)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | The event name. |
| player | <code>string</code> | The player name (id of the playerDiv). |
| id | <code>string</code> | The unique id of the player instance. |
| version | <code>string</code> | The version of the player. |
| data | <code>object</code> | The data object. |
| data.connectDelay | <code>number</code> | The time in milliseconds to wait for initializing the connection to the server to get the stream. Is zero if no reconnect is imminent. |
| state | [<code>state</code>](#NanoPlayer..state) | The player state. |

**Example**  
```js
// player instance of NanoPlayer
var onLoading = function (event) {
    console.log('Loading with delay of ' + event.data.connectDelay + ' milliseconds');
};
config.events.onLoading = onLoading;
player.setup(config).then(function (config) {
    console.log('setup ok with config: ' + JSON.stringify(config)));
}, function (error) {
    console.log(error);
});
```
<a name="NanoPlayer..event_onStartBuffering"></a>

### "onStartBuffering"
The start buffering event to pass in the 'config.events' object at the setup call. Fires if playout is started but no media is available.

**Kind**: event emitted by [<code>NanoPlayer</code>](#NanoPlayer)  
**See**: [config](#NanoPlayer..config)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | The event name. |
| player | <code>string</code> | The player name (id of the playerDiv). |
| id | <code>string</code> | The unique id of the player instance. |
| version | <code>string</code> | The version of the player. |
| data | <code>object</code> | The data object (empty). |
| state | [<code>state</code>](#NanoPlayer..state) | The player state. |

**Example**  
```js
// player instance of NanoPlayer
var onStartBuffering = function (event) {
    console.log('Buffering');
};
config.events.onStartBuffering = onStartBuffering;
player.setup(config).then(function (config) {
    console.log('setup ok with config: ' + JSON.stringify(config)));
}, function (error) {
    console.log(error);
});
```
<a name="NanoPlayer..event_onStopBuffering"></a>

### "onStopBuffering"
The stop buffering event to pass in the 'config.events' object at the setup call. Fires if playout resumes after buffering.

**Kind**: event emitted by [<code>NanoPlayer</code>](#NanoPlayer)  
**See**: [config](#NanoPlayer..config)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | The event name. |
| player | <code>string</code> | The player name (id of the playerDiv). |
| id | <code>string</code> | The unique id of the player instance. |
| version | <code>string</code> | The version of the player. |
| data | <code>object</code> | The data object (empty). |
| state | [<code>state</code>](#NanoPlayer..state) | The player state. |

**Example**  
```js
// player instance of NanoPlayer
var onStopBuffering = function (event) {
    console.log('Resume');
};
config.events.onStopBuffering = onStopBuffering;
player.setup(config).then(function (config) {
    console.log('setup ok with config: ' + JSON.stringify(config)));
}, function (error) {
    console.log(error);
});
```
<a name="NanoPlayer..event_onError"></a>

### "onError"
The error event to pass in the 'config.events' object at the setup call. Fires if any kind of error occures.

**Kind**: event emitted by [<code>NanoPlayer</code>](#NanoPlayer)  
**See**: [config](#NanoPlayer..config)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | The event name. |
| player | <code>string</code> | The player name (id of the playerDiv). |
| id | <code>string</code> | The unique id of the player instance. |
| version | <code>string</code> | The version of the player. |
| data | <code>object</code> | The data object. |
| data.code | [<code>errorcode</code>](#NanoPlayer..errorcode) | The error code. |
| data.message | <code>string</code> | The error cause as human readable string. |
| state | [<code>state</code>](#NanoPlayer..state) | The player state. |

**Example**  
```js
// player instance of NanoPlayer
var onError = function (event) {
    alert('Error: ' + event.data.code + ' ' + event.data.message);
};
config.events.onError = onError;
player.setup(config).then(function (config) {
    console.log('setup ok with config: ' + JSON.stringify(config)));
}, function (error) {
    console.log(error);
});
```
<a name="NanoPlayer..event_onStats"></a>

### "onStats"
The stats event to pass in the 'config.events' object at the setup call. Fires if the player has measured statistics.

**Kind**: event emitted by [<code>NanoPlayer</code>](#NanoPlayer)  
**See**: [config](#NanoPlayer..config)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | The event name. |
| player | <code>string</code> | The player name (id of the playerDiv). |
| id | <code>string</code> | The unique id of the player instance. |
| version | <code>string</code> | The version of the player. |
| data | <code>object</code> | The data object. |
| data.stats | <code>object</code> | The stats object. |
| data.stats.currentTime | <code>number</code> | The current time of the video. |
| data.stats.playout | <code>object</code> | The playout object. |
| data.stats.playout.start | <code>number</code> | The start play time of the video. |
| data.stats.playout.end | <code>number</code> | The end play time of the video. |
| data.stats.buffer | <code>object</code> | The buffer object. |
| data.stats.buffer.start | <code>number</code> | The start buffer time of the video. |
| data.stats.buffer.end | <code>number</code> | The end buffer time of the video. |
| data.stats.buffer.delay | <code>object</code> | The delay buffer object. |
| data.stats.buffer.delay.current | <code>number</code> | The current delay time. |
| data.stats.buffer.delay.avg | <code>number</code> | The average delay time over the last second. |
| data.stats.buffer.delay.min | <code>number</code> | The minimum delay time over the last second. |
| data.stats.buffer.delay.max | <code>number</code> | The maximum delay time over the last second. |
| data.stats.bitrate | <code>object</code> | The bitrate object. |
| data.stats.bitrate.current | <code>number</code> | The current bitrate in Bit/s. Is '0' if not available. NOT AVAILABLE FOR IOS. |
| data.stats.bitrate.avg | <code>number</code> | The average bitrate in Bit/s over the last 10 seconds. Is '0' if not available. NOT AVAILABLE FOR IOS. |
| data.stats.bitrate.min | <code>number</code> | The minimum bitrate in Bit/s over the last 10 seconds. Is '0' if not available. NOT AVAILABLE FOR IOS. |
| data.stats.bitrate.max | <code>number</code> | The maximum bitrate in Bit/s over the last 10 seconds. Is '0' if not available. NOT AVAILABLE FOR IOS. |
| data.stats.framerate | <code>object</code> | The framerate object. |
| data.stats.framerate.current | <code>number</code> | The current network framerate. Is '0' if not available. NOT AVAILABLE FOR IOS. |
| data.stats.framerate.avg | <code>number</code> | The average network framerate over the last 10 seconds. Is '0' if not available. NOT AVAILABLE FOR IOS. |
| data.stats.framerate.min | <code>number</code> | The minimum network framerate over the last 10 seconds. Is '0' if not available. NOT AVAILABLE FOR IOS. |
| data.stats.framerate.max | <code>number</code> | The maximum network framerate over the last 10 seconds. Is '0' if not available. NOT AVAILABLE FOR IOS. |
| data.stats.quality | <code>object</code> | The video playback quality object. |
| data.stats.quality.corruptedVideoFrames | <code>number</code> | The total number of corrupted video frames. ONLY AVAILABLE FOR FIREFOX. |
| data.stats.quality.corruptedVideoFramesCurrent | <code>number</code> | The number of corrupted video frames within the last second. ONLY AVAILABLE FOR FIREFOX. |
| data.stats.quality.creationTime | <code>number</code> | The time in miliseconds since the start of the navigation and the creation of the video element. ONLY AVAILABLE FOR FIREFOX. |
| data.stats.quality.droppedVideoFrames | <code>number</code> | The total number of dropped video frames. ONLY AVAILABLE FOR FIREFOX. |
| data.stats.quality.droppedVideoFramesCurrent | <code>number</code> | The number of dropped video frames within the last second. ONLY AVAILABLE FOR FIREFOX. |
| data.stats.quality.totalVideoFrames | <code>number</code> | The total number of created and dropped video frames since creation of the video element. ONLY AVAILABLE FOR FIREFOX. |

**Example**  
```js
// player instance of NanoPlayer
var onStats = function (event) {
    console.log('Stats: ' + JSON.stringify(event.data.stats));
};
config.events.onStats = onStats;
player.setup(config).then(function (config) {
    console.log('setup ok with config: ' + JSON.stringify(config)));
}, function (error) {
    console.log(error);
});
```
<a name="NanoPlayer..event_onMetaData"></a>

### "onMetaData"
The metadata event to pass in the 'config.events' object at the setup call. The config param 'playback.metadata' have to be set to true. Fires if the player receives metadata.

**Kind**: event emitted by [<code>NanoPlayer</code>](#NanoPlayer)  
**See**: [config](#NanoPlayer..config)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | The event name. |
| player | <code>string</code> | The player name (id of the playerDiv). |
| id | <code>string</code> | The unique id of the player instance. |
| version | <code>string</code> | The version of the player. |
| data | <code>object</code> | The data object. |
| data.handlerName | <code>string</code> | The name of the metadata handler. |
| data.message | <code>\*</code> | The metadata message. |
| data.streamTime | <code>number</code> | The timestamp of the metadata in relation to currentTime. |

**Example**  
```js
// player instance of NanoPlayer
var onMetaData = function (event) {
    console.log('MetaData: ' + JSON.stringify(event.data));
};
config.events.onMetaData = onMetaData;
player.setup(config).then(function (config) {
    console.log('setup ok with config: ' + JSON.stringify(config)));
}, function (error) {
    console.log(error);
});
```
<a name="NanoPlayer..event_onMute"></a>

### "onMute"
The mute event to pass in the 'config.events' object at the setup call. Fires if the player is muted.

**Kind**: event emitted by [<code>NanoPlayer</code>](#NanoPlayer)  
**See**: [config](#NanoPlayer..config)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | The event name. |
| player | <code>string</code> | The player name (id of the playerDiv). |
| id | <code>string</code> | The unique id of the player instance. |
| version | <code>string</code> | The version of the player. |
| data | <code>object</code> | The data object. |
| data.volume | <code>number</code> | The current volume in a range from 0.0 to 1.0. |

**Example**  
```js
// player instance of NanoPlayer
var onMute = function (event) {
    console.log('Muted with volume: ' + event.data.volume);
};
config.events.onMute = onMute;
player.setup(config).then(function (config) {
    console.log('setup ok with config: ' + JSON.stringify(config)));
}, function (error) {
    console.log(error);
});
```
<a name="NanoPlayer..event_onUnmute"></a>

### "onUnmute"
The unmute event to pass in the 'config.events' object at the setup call. Fires if the player is unmuted.

**Kind**: event emitted by [<code>NanoPlayer</code>](#NanoPlayer)  
**See**: [config](#NanoPlayer..config)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | The event name. |
| player | <code>string</code> | The player name (id of the playerDiv). |
| id | <code>string</code> | The unique id of the player instance. |
| version | <code>string</code> | The version of the player. |
| data | <code>object</code> | The data object. |
| data.volume | <code>number</code> | The current volume in a range from 0.0 to 1.0. |

**Example**  
```js
// player instance of NanoPlayer
var onUnmute = function (event) {
    console.log('Unmuted with volume: ' + event.data.volume);
};
config.events.onUnmute = onUnmute;
player.setup(config).then(function (config) {
    console.log('setup ok with config: ' + JSON.stringify(config)));
}, function (error) {
    console.log(error);
});
```
<a name="NanoPlayer..event_onVolumeChange"></a>

### "onVolumeChange"
The volume change event to pass in the 'config.events' object at the setup call. Fires if the player's volume has changed.

**Kind**: event emitted by [<code>NanoPlayer</code>](#NanoPlayer)  
**See**: [config](#NanoPlayer..config)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | The event name. |
| player | <code>string</code> | The player name (id of the playerDiv). |
| id | <code>string</code> | The unique id of the player instance. |
| version | <code>string</code> | The version of the player. |
| data | <code>object</code> | The data object. |
| data.volume | <code>number</code> | The current volume in a range from 0.0 to 1.0. |

**Example**  
```js
// player instance of NanoPlayer
var onVolumeChange = function (event) {
    console.log('Volume: ' + event.data.volume);
};
config.events.onVolumeChange = onVolumeChange;
player.setup(config).then(function (config) {
    console.log('setup ok with config: ' + JSON.stringify(config)));
}, function (error) {
    console.log(error);
});
```
<a name="NanoPlayer..event_onStreamInfo"></a>

### "onStreamInfo"
The stream info event to pass in the 'config.events' object at the setup call. Fires if informations about a stream is available right before playback starts.

**Kind**: event emitted by [<code>NanoPlayer</code>](#NanoPlayer)  
**See**: [config](#NanoPlayer..config)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | The event name. |
| player | <code>string</code> | The player name (id of the playerDiv). |
| id | <code>string</code> | The unique id of the player instance. |
| version | <code>string</code> | The version of the player. |
| data | <code>object</code> | The data object. |
| data.streamInfo | <code>object</code> | The stream info object. |
| data.streamInfo.url | <code>string</code> | The complete stream url with parameters. |
| data.streamInfo.haveAudio | <code>boolean</code> | Indicates if the stream contains audio. |
| data.streamInfo.haveVideo | <code>boolean</code> | Indicates if the stream contains video. |
| data.streamInfo.audioInfo | <code>object</code> \| <code>null</code> | The audio info object. Is 'null' if the stream contains no audio. |
| data.streamInfo.audioInfo.bitsPerSample | <code>number</code> \| <code>null</code> | The bits per sample. Is 'null' if not available. NOT AVAILABLE FOR IOS. |
| data.streamInfo.audioInfo.sampleRate | <code>number</code> \| <code>null</code> | The audio sample rate. Is 'null' if not available. NOT AVAILABLE FOR IOS. |
| data.streamInfo.audioInfo.channels | <code>number</code> \| <code>null</code> | The number of audio channels. Is 'null' if not available. NOT AVAILABLE FOR IOS. |
| data.streamInfo.videoInfo | <code>object</code> \| <code>null</code> | The stream info object. Is 'null' if the stream contains no video. |
| data.streamInfo.videoInfo.width | <code>number</code> \| <code>null</code> | The width of the video. Is 'null' if not available. |
| data.streamInfo.videoInfo.height | <code>number</code> \| <code>null</code> | The height of the video. Is 'null' if not available. |
| data.streamInfo.videoInfo.frameRate | <code>number</code> \| <code>null</code> | The video frame rate. Is 'null' if not available. NOT AVAILABLE FOR IOS. |

**Example**  
```js
// player instance of NanoPlayer
var onStreamInfo = function (event) {
    console.log('StreamInfo: ' + JSON.stringify(event.data.streamInfo));
};
config.events.onStreamInfo = onStreamInfo;
player.setup(config).then(function (config) {
    console.log('setup ok with config: ' + JSON.stringify(config)));
}, function (error) {
    console.log(error);
});
```
<a name="NanoPlayer..event_onStreamInfoUpdate"></a>

### "onStreamInfoUpdate"
The stream info event to pass in the 'config.events' object at the setup call. Fires if the stream format has changed during playback.

**Kind**: event emitted by [<code>NanoPlayer</code>](#NanoPlayer)  
**See**: [config](#NanoPlayer..config)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | The event name. |
| player | <code>string</code> | The player name (id of the playerDiv). |
| id | <code>string</code> | The unique id of the player instance. |
| version | <code>string</code> | The version of the player. |
| data | <code>object</code> | The data object. |
| data.streamInfo | <code>object</code> | The stream info object. |
| data.streamInfo.url | <code>string</code> | The complete stream url with parameters. |
| data.streamInfo.haveAudio | <code>boolean</code> | Indicates if the stream contains audio. |
| data.streamInfo.haveVideo | <code>boolean</code> | Indicates if the stream contains video. |
| data.streamInfo.audioInfo | <code>object</code> \| <code>null</code> | The audio info object. Is 'null' if the stream contains no audio. |
| data.streamInfo.audioInfo.bitsPerSample | <code>number</code> \| <code>null</code> | The bits per sample. Is 'null' if not available. NOT AVAILABLE FOR IOS. |
| data.streamInfo.audioInfo.sampleRate | <code>number</code> \| <code>null</code> | The audio sample rate. Is 'null' if not available. NOT AVAILABLE FOR IOS. |
| data.streamInfo.audioInfo.channels | <code>number</code> \| <code>null</code> | The number of audio channels. Is 'null' if not available. NOT AVAILABLE FOR IOS. |
| data.streamInfo.videoInfo | <code>object</code> \| <code>null</code> | The stream info object. Is 'null' if the stream contains no video. |
| data.streamInfo.videoInfo.width | <code>number</code> \| <code>null</code> | The width of the video. Is 'null' if not available. |
| data.streamInfo.videoInfo.height | <code>number</code> \| <code>null</code> | The height of the video. Is 'null' if not available. |
| data.streamInfo.videoInfo.frameRate | <code>number</code> \| <code>null</code> | The video frame rate. Is 'null' if not available. NOT AVAILABLE FOR IOS. |

**Example**  
```js
// player instance of NanoPlayer
var onStreamInfoUpdate = function (event) {
    console.log('StreamInfo updated: ' + JSON.stringify(event.data.streamInfo));
};
config.events.onStreamInfoUpdate = onStreamInfoUpdate;
player.setup(config).then(function (config) {
    console.log('setup ok with config: ' + JSON.stringify(config)));
}, function (error) {
    console.log(error);
});
```
<a name="NanoPlayer..event_onWarning"></a>

### "onWarning"
The error event to pass in the 'config.events' object at the setup call. Fires if something is not as expected, but functionality works.

**Kind**: event emitted by [<code>NanoPlayer</code>](#NanoPlayer)  
**See**: [config](#NanoPlayer..config)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | The event name. |
| player | <code>string</code> | The player name (id of the playerDiv). |
| id | <code>string</code> | The unique id of the player instance. |
| version | <code>string</code> | The version of the player. |
| data | <code>object</code> | The data object. |
| data.message | <code>string</code> | The warning as human readable string. |
| state | [<code>state</code>](#NanoPlayer..state) | The player state. |

**Example**  
```js
// player instance of NanoPlayer
var onWarning = function (event) {
    console.log('Warning: ' + event.data.message);
};
config.events.onWarning = onWarning;
player.setup(config).then(function (config) {
    console.log('setup ok with config: ' + JSON.stringify(config)));
}, function (error) {
    console.log(error);
});
```
<a name="NanoPlayer..event_onDestroy"></a>

### "onDestroy"
The destroy event to pass in the 'config.events' object at the setup call. Fires if the player is destroyed.

**Kind**: event emitted by [<code>NanoPlayer</code>](#NanoPlayer)  
**See**: [config](#NanoPlayer..config)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | The event name. |
| player | <code>string</code> | The player name (id of the playerDiv). |
| id | <code>string</code> | The unique id of the player instance. |
| version | <code>string</code> | The version of the player. |
| data | <code>object</code> | The data object (empty). |
| state | [<code>state</code>](#NanoPlayer..state) | The player state. |

**Example**  
```js
// player instance of NanoPlayer
var onDestroy = function (event) {
    console.log('player destroy');
};
config.events.onDestroy = onDestroy;
player.setup(config).then(function (config) {
    console.log('setup ok with config: ' + JSON.stringify(config)));
}, function (error) {
    console.log(error);
});
```
<a name="NanoPlayer..config"></a>

### NanoPlayer~config : <code>object</code>
The config object to pass as param for the 'setup' call.

**Kind**: inner typedef of [<code>NanoPlayer</code>](#NanoPlayer)  
**See**: [NanoPlayer.setup](#NanoPlayer+setup)  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| source | <code>object</code> |  | The object to configure the source to play, one of the following properties have to be set. |
| [source.h5live] | <code>object</code> |  | The h5live object to configure the h5live connection. |
| source.h5live.server | <code>object</code> |  | The h5live server object. |
| [source.h5live.server.websocket] | <code>string</code> |  | The h5live websocket url. |
| [source.h5live.server.progressive] | <code>string</code> |  | The h5live progressive download url. |
| [source.h5live.server.hls] | <code>string</code> |  | The h5live hls url. Have to be set for playback on iOS 10 or higher. iOS 9 or lower is not supported. |
| [source.h5live.token] | <code>string</code> |  | The h5live server token. |
| [source.h5live.rtmp] | <code>object</code> |  | The rtmp playout object for h5live playback. |
| source.h5live.rtmp.url | <code>string</code> |  | The rtmp playout url. Have to include the domain, port and application e.g. 'rtmp://example.com:80/live'. |
| source.h5live.rtmp.streamname | <code>string</code> |  | The rtmp streamname. |
| [source.h5live.security] | <code>object</code> |  | The h5live security object for h5live playback. |
| source.h5live.security.token | <code>string</code> |  | The security service token. |
| source.h5live.security.expires | <code>string</code> |  | The time the token expires (system time). |
| source.h5live.security.options | <code>string</code> |  | The security options. |
| source.h5live.security.tag | <code>string</code> |  | The custom tag to decrypt the token. |
| [source.h5live.params] | <code>object</code> |  | The params object to pass custom query parameters over the h5live server connection. Parameters can be passed as key/value pairs. |
| [source.bintu] | <code>object</code> |  | An bintu object to get sources. |
| source.bintu.streamid | <code>string</code> |  | The bintu stream id. |
| [source.bintu.apiurl] | <code>string</code> | <code>&quot;\&quot;https://bintu.nanocosmos.de\&quot;&quot;</code> | The bintu api url. |
| [source.hls] | <code>string</code> |  | An hls playout url as string. |
| [playback] | <code>object</code> |  | The object to configure the playback. |
| [playback.autoplay] | <code>boolean</code> | <code>true</code> | Enable/disable autoplay (default: true). <br><b>IMPORTANT</b>: Browsers (mostly mobile) with stricter autoplay policy only allow autoplay with muted audio or within a user interaction (tap, click etc.). To allow autoplay in this case set the 'muted' property to 'true'. Known browsers are: Safari 11 on Mac OS X and Safari 10/11 on iOS, Chrome on Android (desktop versions follow in early 2018). See our [<b>nanocosmos-blog</b>](https://www.nanocosmos.de/blog/2018/03/autoplay-on-web-pages-with-h5live-player-for-ultra-low-latency-live-streams/) for more informations. |
| [playback.automute] | <code>boolean</code> | <code>false</code> | Enable/disable automute (default: false). <br><b>IMPORTANT</b>: Browsers (mostly mobile) with stricter autoplay policy only allow autoplay with muted audio or within a user interaction (tap, click etc.). With 'autoplay = true' and this option enabled the player will be muted to allow autoplay in case the browsers policy restricted autoplay. |
| [playback.muted] | <code>boolean</code> | <code>false</code> | Mute/unmute the player (default: false). <br><b>IMPORTANT</b>: Browsers (mostly mobile) with stricter autoplay policy only allow autoplay with muted audio. To allow autoplay set the 'muted' property to 'true'. See property 'autoplay' for more informations. |
| [playback.metadata] | <code>boolean</code> | <code>false</code> | Enable/disable metadata (default: false). |
| [playback.forceTech] | <code>string</code> |  | Force the player to use this tech - possible values: "h5live", "flash", "hls.native" |
| [playback.flashplayer] | <code>string</code> |  | A absolute or relative path to the "nano.player.swf". If not set the player will be required from the base path. |
| [playback.videoId] | <code>string</code> |  | An element id of a existing video tag that should be used for playback. No new element will be created and after destroy it will be kept. |
| [playback.keepConnection] | <code>boolean</code> | <code>false</code> | If enabled the player will have always a connection to the h5live server. |
| [playback.reconnect] | <code>object</code> |  | The reconnect object to configure the reconnect settings. See [errorcodes](#NanoPlayer..errorcode) for reconnect possibility. |
| playback.reconnect.minDelay | <code>number</code> | <code>2</code> | The minimum time to reconnect in seconds. The lowest possible value is 1 sec. |
| playback.reconnect.maxDelay | <code>number</code> | <code>10</code> | The maximum time to reconnect in seconds. |
| playback.reconnect.delaySteps | <code>number</code> | <code>10</code> | This number of steps till the maximum delay should reached. |
| playback.reconnect.maxRetries | <code>number</code> | <code>10</code> | The maximum count of reconnect tries. If set to zero no reconnect will be done. |
| [playback.timeouts] | <code>object</code> |  | The timeouts object to configure the timeouts for playback. |
| playback.timeouts.loading | <code>number</code> | <code>20</code> | The timeout for the loading state in seconds, range from 10 - 60 seconds. If reached the player will be stopped with reason 'streamnotfound' and error 2001 will be thrown. Will be cleared if player goes to playing state. |
| playback.timeouts.buffering | <code>number</code> | <code>20</code> | The timeout for the buffering state in seconds, range from 10 - 60 seconds. If reached the player will be stopped with reason 'buffer' and error 2002 will be thrown. Will be cleared if player goes to playing state again. |
| playback.timeouts.connecting | <code>number</code> | <code>5</code> | The timeout for establishing the websocket connection, range from 5 - 30 seconds. If reached the player will be stopped with reason 'connectionclose' and error 4106 will be thrown. WEBSOCKET ONLY, FOR IOS ONLY IF METADATA IS ENABLED |
| [style] | <code>object</code> |  | The object to configure the style of the player. |
| [style.width] | <code>string</code> | <code>&quot;&#x27;640px&#x27;&quot;</code> | The width of the player in pixels (e.g 320px) or percentage (80%) (height or aspectratio have to be set too). Use 'auto' to keep the parents size (height and aspectratio have no effect). |
| [style.height] | <code>string</code> |  | The height of the player in pixels (e.g 240px) or percentage (45%)  (width or aspectratio have to be set too). Use 'auto' to keep the parents size (width and aspectratio have no effect). |
| [style.aspectratio] | <code>string</code> | <code>&quot;&#x27;16/9&#x27;&quot;</code> | The aspectratio of the player (e.g. 16/9) (width or height have to be set too). |
| [style.controls] | <code>boolean</code> | <code>true</code> | Show/hide video controls. |
| [style.interactive] | <code>boolean</code> | <code>true</code> | Enable/disable interactivity of the player on click/touch. |
| [style.view] | <code>boolean</code> | <code>true</code> | Enable/disable view port handling/animations. |
| [style.scaling] | <code>string</code> | <code>&quot;&#x27;letterbox&#x27;&quot;</code> | Set's the display mode for the video inside the player - possible values: "letterbox", "fill", "crop", "original", "resize". |
| [style.keepFrame] | <code>boolean</code> | <code>false</code> | If true the last played frame will be displayed after a pause. |
| [style.displayAudioOnly] | <code>boolean</code> | <code>true</code> | If true a audio symbol will be shown in case of a stream with audio only. |
| [style.audioPlayer] | <code>boolean</code> | <code>false</code> | If true a player will be created as an audio player without video functionality. Controls can be enabled/disabled. The size can be customized via 'width' and 'height'. Default is 640px * 51px. |
| [style.displayMutedAutoplay] | <code>boolean</code> | <code>true</code> | If true a muted audio symbol will be shown in case of muted autoplay. |
| [events] | <code>object</code> |  | The object to set handlers to the player events. |
| [events.onReady] | <code>function</code> |  | Fires if the player is ready to play after successful setup. |
| [events.onPlay] | <code>function</code> |  | Fires if playout is started. |
| [events.onPause] | <code>function</code> |  | Fires if playout is paused. |
| [events.onLoading] | <code>function</code> |  | Fires if playout was stopped or player is ready after setup and tries to play. |
| [events.onStartBuffering] | <code>function</code> |  | Fires if playout is started but no media is available. |
| [events.onStopBuffering] | <code>function</code> |  | Fires if playout resumes after buffering. |
| [events.onError] | <code>function</code> |  | Fires if any kind of error occures. |
| [events.onStats] | <code>function</code> |  | Fires if the player has measured statistics. |
| [events.onMetaData] | <code>function</code> |  | Fires if the player has received metadata. |
| [events.onMute] | <code>function</code> |  | Fires if the player is muted. |
| [events.onUnmute] | <code>function</code> |  | Fires if the player is unmuted. |
| [events.onVolumeChange] | <code>function</code> |  | Fires if the player's volume has changed. |
| [events.onStreamInfo] | <code>function</code> |  | Fires if stream info is available. |
| [events.onWarning] | <code>function</code> |  | Fires if something is not as expected, but functionality works. |
| [events.onDestroy] | <code>function</code> |  | Fires if the player is destroyed. |
| [tweaks] | <code>object</code> |  | The object to tweak the player (only h5live). |
| [tweaks.buffer] | <code>object</code> |  | The bufffer object. |
| tweaks.buffer.min | <code>number</code> |  | The minimum time to buffer. |
| tweaks.buffer.start | <code>number</code> |  | The buffer time when the playout starts. |
| tweaks.buffer.target | <code>number</code> |  | The target buffer time. |
| tweaks.buffer.limit | <code>number</code> |  | The buffer time limit before increase play speed. |
| tweaks.buffer.max | <code>number</code> |  | The maximum time to buffer. |
| [tweaks.bufferDynamic] | <code>object</code> |  | The bufffer dynamic object. |
| tweaks.bufferDynamic.offsetThreshold | <code>number</code> |  | The threshold time between two bufferings in seconds. If the measured value is lower, the buffer will be increased by offsetStep. |
| tweaks.bufferDynamic.offsetStep | <code>number</code> |  | The step to increase in seconds. Also the step to decrease in cooldown. |
| tweaks.bufferDynamic.cooldownTime | <code>number</code> |  | The time to check stable playback. If stable playback is detected, the buffer values will be decreased till original buffer values are reached. |
| [metrics] | <code>object</code> |  | The metrics object. <b>Only usable with valid account.</b> Configuring this object allows you to collect and analyse data via the 'nanoStream Cloud'. If not set, metrics are disabled. See our [<b>nanocosmos / nanoStream documentation</b>](https://www.nanocosmos.de/v4/documentation/nanoplayer-h5live#nanostream_cloud_analytics_and_player_metrics) for more informations. |
| metrics.accountId | <code>string</code> |  | The account id provided by nanocosmos to use with the metrics. |
| metrics.accountKey | <code>string</code> |  | The account key provided by nanocosmos to use with the metrics. |
| [metrics.userId] | <code>string</code> |  | Application user/viewer id. If your application includes a user name or user id, providing this information enables you to filter or aggregate data by this user. |
| [metrics.eventId] | <code>string</code> |  | Application event id. If the stream is related to a certain event, e.g. webinar, auction or sports event, providing this information enables you to filter or aggregate data by this event. |
| [metrics.statsInterval] | <code>number</code> | <code>10</code> | The interval how often the stats should be collected in seconds. The minimum is 1 second. |
| [metrics.customField*] | <code>string</code> |  | Custom field. * can be replaced with 1 - 10 e.g. 'customField3'. Possible from 'customField1' to 'customField10'. |

**Example**  
```js
var config = {
    source: {
        bintu: {
            streamid: 'q23rf2tzw3h6754iretmft7irt'
        }
    }
};
```
**Example**  
```js
var config = {
    source: {
        h5live: {
            server: {
                websocket: 'wss://h5live.nanocosmos.de/h5live/stream',
                hls: 'https://h5live.nanocosmos.de/h5live/http/playlist.m3u8'
            },
            rtmp: {
                url: 'rtmp://example.nanocosmos.de:80/live',
                streamname: 'h5liveStream'
            },
            security: {
                token: 'awe456b367g4e6rm8f56hbe6gd8f5m8df6n8idf6tf8mfd68ndi',
                expires: '1519819200',
                options: '15',
                tag: 'anyTag'
            }
        }
    },
    playback: {
        autoplay: false,
        metadata: true,
        keepConnection: true,
        reconnect: {
            minDelay: 2.5,
            maxDelay: 12.5,
            delaySteps: 6,
            maxRetries: 20
        }
    },
    events: {
        onWarning: function (e) {
            console.log(e);
        }
    },
    style: {
        width: '1280px',
        height: '720px'
    },
    tweaks: {
        buffer: {
            min: 0.2,
            start: 0.5,
            max: 8.0,
            target: 1.2,
            limit: 1.7
        },
        bufferDynamic: {
            offsetThreshold: 2,
            offsetStep: 0.5,
            cooldownTime: 10
        }
    },
    metrics: {
        accountId: 'myId',
        accountKey: 'sdfhe457zsjhnrtzd8',
        userId: 'myUserId',
        eventId: 'myEventId',
        statsInterval: 10,
        customField1: 'custom',
        customField2: 42,
        customField3: true
    }
};
```
**Example**  
```js
var config = {
    source: {
        h5live: {
            server: {
                websocket: 'wss://h5live.nanocosmos.de/h5live/stream',
                hls: 'https://h5live.nanocosmos.de/h5live/http/playlist.m3u8'
            },
            params: {
                url: 'rtmp://example.nanocosmos.de:80/live',
                stream: 'h5liveStream',
                custom_key: 'custom_value'
            }
        }
    },
    playback: {
        autoplay: false,
        videoId: 'myVideoTagId'
    },
    events: {
        onStats: function (e) {
            console.log(e);
        }
    },
    style: {
       view: false
    },
    metrics: {
        accountId: 'myId',
        accountKey: 'sdfhe457zsjhnrtzd8'
    }
};
```
**Example**  
```js
var config = {
    source: {
        h5live: {
            server: {
                websocket: 'wss://h5live.nanocosmos.de/h5live/stream',
                hls: 'https://h5live.nanocosmos.de/h5live/http/playlist.m3u8'
            },
            rtmp: {
                url: 'rtmp://example.nanocosmos.de:80/live',
                streamname: 'gwr23t4q3g3'
            }
        },
        token: "{\"type\":\"token1\",\"key\":\"exampleToken\"}"
    },
    playback: {
        autoplay: true,
        muted: true
    },
    events: {
        onReady: function (e) {
            console.log('player ready with ' + JSON.stringify(e));
        },
        onPlay: function (e) {
            console.log('playing');
            console.log('play stats: ' + JSON.stringify(e.data.stats));
        },
        onPause: function (e) {
            console.log('pause');
            if (e.data.reason !== 'normal') {
                alert('Paused with reason: ' + e.data.reason);
            }
        },
        onError: function (e) {
            try {
                var err = JSON.stringify(e);
                if (err === '{}') {
                    err = e.message;
                }
                e = err;
            } catch (err) { }
            console.log(e);
            alert(e);
        },
        onMetaData: function (e) {
            console.log(e);
        },
        onStats: function (e) {
            console.log(e);
        },
        onStreamInfo: function (e) {
            console.log(e);
        },
        onDestroy: function (e) {
            console.log(e);
        }
    },
    style: {
        width: '1280px',
        aspectratio: '16/9',
        controls: false,
        scaling: 'crop'
    }
};
```
<a name="NanoPlayer..errorcode"></a>

### NanoPlayer~errorcode : <code>number</code>
The possible error codes in a onError event.

**Kind**: inner typedef of [<code>NanoPlayer</code>](#NanoPlayer)  
**See**: [onError](#NanoPlayer..event_onError)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| 1000-1999 | <code>PlayerError</code> |  |
| 1000-1999.1001 |  | No rtmp url set. |
| 1000-1999.1002 |  | No server set. |
| 1000-1999.1003 |  | Could not play because player has not been configured. |
| 1000-1999.1004 |  | Could not pause because player was not in playing state before. |
| 1000-1999.1005 |  | Playback must be initialized by user gesture. |
| 1000-1999.1006 |  | Buffer config is invalid. |
| 1000-1999.1007 |  | Playback suspended by external reason. |
| 1000-1999.1008 |  | Playback error. |
| 1000-1999.1009 |  | Playback failed because the player was in visibility state 'hidden' at load start. |
| 2000-2999 | <code>StreamError</code> |  |
| 2000-2999.2001 |  | The requested stream can not be found. |
| 2000-2999.2002 |  | No media available. |
| 2000-2999.2003 |  | Not enough media data received. The stream was already connected and the stream info event was fired. |
| 2000-2999.2004 |  | The source stream has been stopped. |
| 2000-2999.2011 |  | Received metadata with wrong index. |
| 2000-2999.2012 |  | Received metadata with invalid json string. |
| 2000-2999.2013 |  | Received metadata but no start index. |
| 2000-2999.2014 |  | Received metadata with start index but currently process another. |
| 3000-3999 | <code>MediaError</code> |  |
| 3000-3999.3001 |  | A fetching process of the media aborted by user. |
| 3000-3999.3002 |  | An error occurred when downloading media. |
| 3000-3999.3003 |  | An error occurred when decoding media. |
| 3000-3999.3004 |  | The received audio/video is not supported. |
| 3000-3999.3100 |  | The media source extension changed the state to 'ended'. NOT AVAILABLE FOR IOS. |
| 4000-4999 | <code>NetworkError</code> |  |
| 4000-4999.4000-4099 | <code>General</code> |  |
| 4000-4999.4000-4099.4001 |  | Could not establish connection. Maybe wrong protocol or path. |
| 4000-4999.4000-4099.4002 |  | Connection error. |
| 4000-4999.4000-4099.4003 |  | Maximum number of reconnection tries reached. |
| 4000-4999.4000-4099.4004 |  | Reconnection configuration invalid. |
| 4000-4999.4100-4199 | <code>WebSocket</code> |  |
| 4000-4999.4100-4199.4101 |  | An endpoint is "going away", such as a server going down or a browser having navigated away from a page. |
| 4000-4999.4100-4199.4102 |  | An endpoint is terminating the connection due to a protocol error. Reconnect possible. |
| 4000-4999.4100-4199.4103 |  | An endpoint is terminating the connection because it has received a type of data it cannot accept (e.g., an endpoint that understands only text data MAY send this if it receives a binary message). Reconnect possible. |
| 4000-4999.4100-4199.4104 |  | Reserved. The specific meaning might be defined in the future. |
| 4000-4999.4100-4199.4105 |  | No status code was actually present. Reconnect possible. |
| 4000-4999.4100-4199.4106 |  | Maybe no network, wrong url or server down. Reconnect possible. |
| 4000-4999.4100-4199.4107 |  | An endpoint is terminating the connection because it has received data within a message that was not consistent with the type of the message (e.g., non-UTF-8 [http://tools.ietf.org/html/rfc3629] data within a text message). Reconnect possible. |
| 4000-4999.4100-4199.4108 |  | An endpoint is terminating the connection because it has received a message that "violates its policy". This reason is given either if there is no other sutible reason, or if there is a need to hide specific details about the policy. Reconnect possible. |
| 4000-4999.4100-4199.4109 |  | An endpoint is terminating the connection because it has received a message that is too big for it to process. Reconnect possible. |
| 4000-4999.4100-4199.4110 |  | An endpoint (client) is terminating the connection because it has expected the server to negotiate one or more extension, but the server didn't return them in the response message of the WebSocket handshake. |
| 4000-4999.4100-4199.4111 |  | A server is terminating the connection because it encountered an unexpected condition that prevented it from fulfilling the request. Reconnect possible. |
| 4000-4999.4100-4199.4115 |  | The connection was closed due to a failure to perform a TLS handshake (e.g., the server certificate can't be verified). Reconnect possible. |
| 4000-4999.4400-4499 | <code>Http</code> |  |
| 4000-4999.4400-4499.4400 |  | Bad request. Maybe stream parameters are missing or malformed. |
| 4000-4999.4400-4499.4403 |  | Access denied. The authentication token is missing or invalid. |
| 4000-4999.4400-4499.4500 |  | The connection has been rejected due an internal server error. Reconnect possible. |
| 4000-4999.4400-4499.4503 |  | The requested service is currently unavailable. Reconnect possible. |
| 4000-4999.4900-4999 | <code>Security</code> |  |
| 4000-4999.4900-4999.4900 |  | The security service has been rejected due an internal server error. |
| 4000-4999.4900-4999.4901 |  | The security service denied access. The authentication token is invalid. |
| 4000-4999.4900-4999.4903 |  | The security service denied access. The url is expired or a token parameter is missing (expires, token, or options). |
| 4000-4999.4900-4999.4904 |  | The security service can not be found. |
| 5000-5999 | <code>SetupError</code> |  |
| 5000-5999.5000-5099 | <code>General</code> |  |
| 5000-5999.5000-5099.5001 |  | An exception was thrown during setup. |
| 5000-5999.5000-5099.5002 |  | A forced tech is not supported by your browser. |
| 5000-5999.5000-5099.5003 |  | The players source configuration is malformed or missing. |
| 5000-5999.5000-5099.5004 |  | This browser does not fully support HTML5 and H5Live. Supported are: Chrome >=54 (Windows, MacOSX, Android), Firefox >=48 (Windows, MacOSX, Android), Microsoft Edge (Windows), Microsoft Internet Explorer 11 (at least Windows 8), Safari (MacOSX & at least iOS 10). |
| 5000-5999.5000-5099.5005 |  | Configuration error. Could not create/update player, the rtmp configuration is missing or incomplete. Add an rtmp url and streamname to the configuration. |
| 5000-5999.5000-5099.5006 |  | Configuration error. Could not create/update player, with this configuration an security token is required. Add an token to the configuration. |
| 5000-5999.5000-5099.5007 |  | Configuration error. Could not create/update player, the websocket server configuration is missing. |
| 5000-5999.5000-5099.5008 |  | Configuration error. Could not create/update player, the hls server configuration is missing. |
| 5000-5999.5000-5099.5009 |  | Configuration error. Could not create/update player, the websocket server configuration for metadata is missing. |
| 5000-5999.5000-5099.5010 |  | Could not embed player. |
| 5000-5999.5100-5199 | <code>Bintu</code> |  |
| 5000-5999.5100-5199.5101 |  | Could not find bintu stream. The stream is not live. |
| 5000-5999.5100-5199.5102 |  | No bintu stream id passed. |
| 5000-5999.5100-5199.5103 |  | Bintu service rejected. |
| 5000-5999.5200-5299 | <code>Metrics</code> |  |
| 5000-5999.5200-5299.5201 |  | Metrics configuration error. No metrics config object passed. |
| 5000-5999.5200-5299.5202 |  | Metrics configuration error. Metrics config is not from type 'object'. |
| 5000-5999.5200-5299.5203 |  | Metrics configuration error. Metrics config is empty. |
| 5000-5999.5200-5299.5204 |  | Metrics configuration error. A custom property has no valid index number, the range is 1 to 10 e.g.'customField1'. |
| 5000-5999.5200-5299.5205 |  | Metrics configuration error. A custom property  is not indexed correctly, the range is 1 to 10 e.g.'customField1'. |
| 5000-5999.5200-5299.5206 |  | Metrics configuration error. A custom property has an index out of range, the range is 1 to 10 e.g.'customField1'. |
| 5000-5999.5200-5299.5207 |  | Metrics configuration error. A property is not valid. |
| 5000-5999.5200-5299.5208 |  | Metrics configuration error. No credentials passed. |

<a name="NanoPlayer..state"></a>

### NanoPlayer~state : <code>number</code>
The state of the player.

**Kind**: inner typedef of [<code>NanoPlayer</code>](#NanoPlayer)  
**See**: [Events](#NanoPlayer..event_onError)  
**Properties**

| Name | Description |
| --- | --- |
| 1 | UNINITIALIZED |
| 2 | IDLE |
| 3 | READY |
| 4 | LOADING |
| 5 | PLAYING |
| 6 | PAUSED |
| 7 | BUFFERING |
| 8 | UNKNOWN |
| 9 | PLAYBACK_NOT_STARTED |
| 10 | PLAYBACK_SUSPENDED |
| 11 | PAUSING |
| 12 | PLAYBACK_ERROR |
| 13 | RECONNECTION_IMMINENT |
| 14 | CONNECTION_ERROR |
| 15 | DESTROYING |
| 16 | PLAYBACK_RESTARTING |
| 17 | VISIBILITY_HIDDEN |
| 18 | NOT_ENOUGH_DATA |
| 19 | SOURCE_STREAM_STOPPED |

<a name="NanoPlayer..pausereason"></a>

### NanoPlayer~pausereason : <code>string</code>
The possible pause reason in a onPause event.

**Kind**: inner typedef of [<code>NanoPlayer</code>](#NanoPlayer)  
**See**: [onPause](#NanoPlayer..event_onPause)  
**Properties**

| Name | Description |
| --- | --- |
| normal | Paused by user. |
| buffer | Paused by buffer timeout. The stream was stopped or the buffer was underrunned. |
| connectionclose | Paused by network connection close. |
| servernotfound | Paused because of the h5live server was not found. |
| streamnotfound | Paused by loading timeout. The stream could not found. |
| interactionrequired | Paused because auto playback is denied. Can happen especially on mobile. |
| playbacksuspended | Paused because the playback was suspended by an external reason. |
| playbackerror | Paused because the playback had an error. |
| reconnectionimminent | Paused because the connection was closed by an external reason and a reconnect will be prepared. |
| destroy | Paused because the player will be destroyed. |
| playbackrestart | Paused because the player was stopped for update source. The player will restart immediately. |
| visibilityhidden | Paused because the player was not visible at load start. |
| notenoughdata | Paused by loading timeout. The stream was alive and connected but not enough data was received to start playback. |
| sourcestreamstopped | Paused because the source stream has been stopped. |

<a name="performance marks"></a>

## performance marks
This marks will be set via 'performance.mark()' and are related to a websocket connection only. Marks can be read with performance.getEntriesByName(name) that returns an array with objects. The object has the properties 'entryType=mark', 'name' and 'startTime'. The middle part of the name string is the element id of the player container. Not supported on Safari 11 OSX and iOS.

**Kind**: global variable  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| nano.[playerDivId].connecting | <code>string</code> | Will be set if the websocket connect is started. |
| nano.[playerDivId].connected | <code>string</code> | Will be set if the websocket connection is established. |
| nano.[playerDivId].disconnected | <code>string</code> | Will be set if the websocket connection is closed. |
| nano.[playerDivId].resuming | <code>string</code> | Will be set if the websocket connection is established and a play command will be send (keepConnection only). |
| nano.[playerDivId].firstFragmentReceived | <code>string</code> | Will be set if the first fragment is received over the websocket connection. |
| nano.[playerDivId].firstFrameRendered | <code>string</code> | Will be set if the first frame is received over the websocket connection. |


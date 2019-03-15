---
id: nanoplayer_api_class
title: Class
sidebar_label: Class
---
**Version:** NanoPlayer Public API Class 3.17.2

## new NanoPlayer(playerDivId)

The constructor. The source can be loaded via script tag, AMD (requirejs) or CommonJS

##### Parameters:

| Name          | Type   | Description                                       |
| ------------- | ------ | ------------------------------------------------- |
| `playerDivId` | string | The div element the player will be embedded into. |

Version:

- 3.17.2

##### Examples

```html
<script type="text/javascript" src="nanoplayer.3.min.js"></script>
<script type="text/javascript">
    var player;
    document.addEventListener('DOMContentLoaded', function () {
        player = new NanoPlayer('playerDiv');
    });
</script>
```

```html
<script type="text/javascript" src="require.js"></script>
<script type="text/javascript">
    var player;
    requirejs.config({
        paths: {
            // loads the player ...
            // for a local copy of the minified player use a relative path e.g. 'js/nanoplayer.3.min'
            // if 'baseUrl' is defined a local path have to be relative to the base path
            nanoplayer: '//demo.nanocosmos.de/nanoplayer/api/nanoplayer.3.min.js'
        },
        waitSeconds: 20, // timeout for loading modules
    });
    require('nanoplayer', function() {
        player = new NanoPlayer('playerDiv');
    });
</script>
```



## Members

##### <constant\> capabilities: Array.\<string\>

The supported tech names of the player.

Type:

- Array.\<string\>

-----

##### coreversion :string

The version of the core.

Type:

- string

------

##### id :string

The unique id of the player.Type:string

-----

##### type :string

The type of the player.Type:string

-----

##### version :string

The version of the player.Type:string

-----

##### viewversion :string

The version of the view.Type:string



## Methods

### destroy()

Cleans up the player and removes all nested elements from the container div.

Example

```
// player instance of NanoPlayer
player.destroy();
player.setup(config);
```
-----


### mute()

Mutes the player.

Example

```
// player instance of NanoPlayer
player.mute();
```
-----


### pause()

Pauses the player.

Example

```
// player instance of NanoPlayer
player.pause();
```
-----

### play()

Plays the player.

Example

```
// player instance of NanoPlayer
player.play();
```



#### setup(config) → {Promise.<(config|error)>}

Initializes the player with a given config object.

##### Parameters:

| Name     | Type   | Description                                                  |
| -------- | ------ | ------------------------------------------------------------ |
| `config` | config | The config object for the player including sources, events, styles. |

- See:

  [`config`](https://demo.nanocosmos.de/nanoplayer/docs/nanoplayer/NanoPlayer.html#~config)

##### Returns:

- Type

  Promise.<(config|error)>

Example

```javascript
// player instance of NanoPlayer
player.setup(config).then(function (config) {
    console.log('setup ok with config: ' + JSON.stringify(config)));
}, function (error) {
    console.log(error);
});
```



#### setVolume(volume)

Sets the volume of the player.

##### Parameters:

| Name     | Type   | Description                                   |
| -------- | ------ | --------------------------------------------- |
| `volume` | number | The volume to set in a range from 0.0 to 1.0. |

Example

```javascript
// player instance of NanoPlayer
player.setVolume(0.3);
```



### unmute()

Unmutes the player.

Example

```javascript
// player instance of NanoPlayer
player.unmute();
```



#### updateSource(source) → {Promise.<(config|error)>}

Updates the source of the player.

##### Parameters:

| Name     | Type   | Argument | Description                                                  |
| -------- | ------ | -------- | ------------------------------------------------------------ |
| `source` | object |          | The object to configure the source to play, one of the following properties have to be set.Properties |

!!! TODO !!!



##### Returns:

Type

- Promise.<(config|error)>



Example

```javascript
// player instance of NanoPlayer
var source = {
    h5live: {
        server: {
            websocket: 'wss://h5live.nanocosmos.de/h5live/stream',
            hls: 'https://h5live.nanocosmos.de/h5live/http/playlist.m3u8'
        },
        rtmp: {
            url: 'rtmp://example.nanocosmos.de:80/live',
            streamname: 'h5liveStream'
        },
        security: {
            token: 'awe456b367g4e6rm8f56hbe6gd8f5m8df6n8idf6tf8mfd68ndi',
            expires: '1519819200',
            options: '15',
            tag: 'anyTag'
        }
    }
}
player.updateSource(source).then(function (config) {
    console.log('update source ok with config: ' + JSON.stringify(config)));
}, function (error) {
    console.log(error);
});
```



## Type Definitions

### config

The config object to pass as param for the 'setup' call
Type:

- object



Properties:



!!! TODO !!!





- See:
  [`NanoPlayer.setup`](https://demo.nanocosmos.de/nanoplayer/docs/nanoplayer/NanoPlayer.html#setup)



Examples

```javascript
var config = {
    source: {
        bintu: {
            streamid: 'q23rf2tzw3h6754iretmft7irt'
        }
    }
};
```

```javascript
var config = {
    source: {
        h5live: {
            server: {
                websocket: 'wss://h5live.nanocosmos.de/h5live/stream',
                hls: 'https://h5live.nanocosmos.de/h5live/http/playlist.m3u8'
            },
            rtmp: {
                url: 'rtmp://example.nanocosmos.de:80/live',
                streamname: 'h5liveStream'
            },
            security: {
                token: 'awe456b367g4e6rm8f56hbe6gd8f5m8df6n8idf6tf8mfd68ndi',
                expires: '1519819200',
                options: '15',
                tag: 'anyTag'
            }
        }
    },
    playback: {
        autoplay: false,
        metadata: true,
        keepConnection: true,
        reconnect: {
            minDelay: 2.5,
            maxDelay: 12.5,
            delaySteps: 6,
            maxRetries: 20
        }
    },
    events: {
        onWarning: function (e) {
            console.log(e);
        }
    },
    style: {
        width: '1280px',
        height: '720px'
    },
    tweaks: {
        buffer: {
            min: 0.2,
            start: 0.5,
            max: 8.0,
            target: 1.2,
            limit: 1.7
        },
        bufferDynamic: {
            offsetThreshold: 2,
            offsetStep: 0.5,
            cooldownTime: 10
        }
    },
    metrics: {
        accountId: 'myId',
        accountKey: 'sdfhe457zsjhnrtzd8',
        userId: 'myUserId',
        eventId: 'myEventId',
        statsInterval: 10,
        customField1: 'custom',
        customField2: 42,
        customField3: true
    }
};
```

```
var config = {
    source: {
        h5live: {
            server: {
                websocket: 'wss://h5live.nanocosmos.de/h5live/stream',
                hls: 'https://h5live.nanocosmos.de/h5live/http/playlist.m3u8'
            },
            params: {
                url: 'rtmp://example.nanocosmos.de:80/live',
                stream: 'h5liveStream',
                custom_key: 'custom_value'
            }
        }
    },
    playback: {
        autoplay: false,
        videoId: 'myVideoTagId'
    },
    events: {
        onStats: function (e) {
            console.log(e);
        }
    },
    style: {
       view: false
    },
    metrics: {
        accountId: 'myId',
        accountKey: 'sdfhe457zsjhnrtzd8'
    }
};
```
```
var config = {
    source: {
        h5live: {
            server: {
                websocket: 'wss://h5live.nanocosmos.de/h5live/stream',
                hls: 'https://h5live.nanocosmos.de/h5live/http/playlist.m3u8'
            },
            rtmp: {
                url: 'rtmp://example.nanocosmos.de:80/live',
                streamname: 'gwr23t4q3g3'
            }
        },
        token: "{\"type\":\"token1\",\"key\":\"exampleToken\"}"
    },
    playback: {
        autoplay: true,
        muted: true
    },
    events: {
        onReady: function (e) {
            console.log('player ready with ' + JSON.stringify(e));
        },
        onPlay: function (e) {
            console.log('playing');
            console.log('play stats: ' + JSON.stringify(e.data.stats));
        },
        onPause: function (e) {
            console.log('pause');
            if (e.data.reason !== 'normal') {
                alert('Paused with reason: ' + e.data.reason);
            }
        },
        onError: function (e) {
            try {
                var err = JSON.stringify(e);
                if (err === '{}') {
                    err = e.message;
                }
                e = err;
            } catch (err) { }
            console.log(e);
            alert(e);
        },
        onMetaData: function (e) {
            console.log(e);
        },
        onStats: function (e) {
            console.log(e);
        },
        onStreamInfo: function (e) {
            console.log(e);
        },
        onDestroy: function (e) {
            console.log(e);
        }
    },
    style: {
        width: '1280px',
        aspectratio: '16/9',
        controls: false,
        scaling: 'crop'
    }
};
```



### errorcode

The possible error codes in a onError event.

##### Type:

- number

Properties:



!!! TODO !!!



- See:

  [`onError`](https://demo.nanocosmos.de/nanoplayer/docs/nanoplayer/NanoPlayer.html#~event:onError)



### pausereason

The possible pause reason in a onPause event.

##### Type:

- string


Properties:

| Name                   | Type | Description                                                  |
| ---------------------- | ---- | ------------------------------------------------------------ |
| `normal`               |      | Paused by user.                                              |
| `buffer`               |      | Paused by buffer timeout. The stream was stopped or the buffer was underrunned. |
| `connectionclose`      |      | Paused by network connection close.                          |
| `servernotfound`       |      | Paused because of the h5live server was not found.           |
| `streamnotfound`       |      | Paused by loading timeout. The stream could not found.       |
| `interactionrequired`  |      | Paused because auto playback is denied. Can happen especially on mobile. |
| `playbacksuspended`    |      | Paused because the playback was suspended by an external reason. |
| `playbackerror`        |      | Paused because the playback had an error.                    |
| `reconnectionimminent` |      | Paused because the connection was closed by an external reason and a reconnect will be prepared. |
| `destroy`              |      | Paused because the player will be destroyed.                 |
| `playbackrestart`      |      | Paused because the player was stopped for update source. The player will restart immediately. |
| `visibilityhidden`     |      | Paused because the player was not visible at load start.     |
| `notenoughdata`        |      | Paused by loading timeout. The stream was alive and connected but not enough data was received to start playback. |
| `sourcestreamstopped`  |      | Paused because the source stream has been stopped.           |

- See:

  [`onPause`](https://demo.nanocosmos.de/nanoplayer/docs/nanoplayer/NanoPlayer.html#~event:onPause)



### state

The state of the player.

##### Type:

- number



Properties: 

| Name | Type | Description           |
| ---- | ---- | --------------------- |
| `1`  |      | UNINITIALIZED         |
| `2`  |      | IDLE                  |
| `3`  |      | READY                 |
| `4`  |      | LOADING               |
| `5`  |      | PLAYING               |
| `6`  |      | PAUSED                |
| `7`  |      | BUFFERING             |
| `8`  |      | UNKNOWN               |
| `9`  |      | PLAYBACK_NOT_STARTED  |
| `10` |      | PLAYBACK_SUSPENDED    |
| `11` |      | PAUSING               |
| `12` |      | PLAYBACK_ERROR        |
| `13` |      | RECONNECTION_IMMINENT |
| `14` |      | CONNECTION_ERROR      |
| `15` |      | DESTROYING            |
| `16` |      | PLAYBACK_RESTARTING   |
| `17` |      | VISIBILITY_HIDDEN     |
| `18` |      | NOT_ENOUGH_DATA       |
| `19` |      | SOURCE_STREAM_STOPPED |

- See:

  [`Events`](https://demo.nanocosmos.de/nanoplayer/docs/nanoplayer/NanoPlayer.html#~event:onError)
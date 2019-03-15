---
id: nanoplayer_api_events
title: Events
sidebar_label: Events
---

## Events

### onDestroy

The destroy event to pass in the 'config.events' object at the setup call. Fires if the player is destroyed.

##### Type: 

- object

Properties:

| Name      | Type                                                         | Description                            |
| --------- | ------------------------------------------------------------ | -------------------------------------- |
| `name`    | string                                                       | The event name.                        |
| `player`  | string                                                       | The player name (id of the playerDiv). |
| `id`      | string                                                       | The unique id of the player instance.  |
| `version` | string                                                       | The version of the player.             |
| `data`    | object                                                       | The data object (empty).               |
| `state`   | [NanoPlayer~state](https://demo.nanocosmos.de/nanoplayer/docs/nanoplayer/NanoPlayer.html#~state) | The player state.                      |

- See:

  [`config`](https://demo.nanocosmos.de/nanoplayer/docs/nanoplayer/NanoPlayer.html#~config)



Example

```
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



### onError

The error event to pass in the 'config.events' object at the setup call. Fires if any kind of error occures.

##### Type: 
- object

Properties:

| Name      | Type                                                         | Description                                                  |
| --------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `name`    | string                                                       | The event name.                                              |
| `player`  | string                                                       | The player name (id of the playerDiv).                       |
| `id`      | string                                                       | The unique id of the player instance.                        |
| `version` | string                                                       | The version of the player.                                   |
| `data`    | object                                                       | The data object.PropertiesNameTypeDescription`code`[NanoPlayer~errorcode](https://demo.nanocosmos.de/nanoplayer/docs/nanoplayer/NanoPlayer.html#~errorcode)The error code.`message`stringThe error cause as human readable string. |
| `state`   | [NanoPlayer~state](https://demo.nanocosmos.de/nanoplayer/docs/nanoplayer/NanoPlayer.html#~state) | The player state.                                            |

- See:

  [`config`](https://demo.nanocosmos.de/nanoplayer/docs/nanoplayer/NanoPlayer.html#~config)



Example

```javascript
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



### onLoading

The load event to pass in the 'config.events' object at the setup call. Fires if playout was stopped or player is ready after setup and tries to play.

##### Type: 
- object

Properties:




!!! TODO !!!



- See:

  [`config`](https://demo.nanocosmos.de/nanoplayer/docs/nanoplayer/NanoPlayer.html#~config)



Example

```javascript
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



### onMetaData

The metadata event to pass in the 'config.events' object at the setup call. The config param 'playback.metadata' have to be set to true. Fires if the player receives metadata.

##### Type:
- object

Properties:



!!! TODO !!



- See:

  [`config`](https://demo.nanocosmos.de/nanoplayer/docs/nanoplayer/NanoPlayer.html#~config)



Example

```javascript
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



### onMute

The mute event to pass in the 'config.events' object at the setup call. Fires if the player is muted.

##### Type:
- object

Properties:



!!! TODO !!!



- See:

  [`config`](https://demo.nanocosmos.de/nanoplayer/docs/nanoplayer/NanoPlayer.html#~config)



Example

```javascript
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



### onPause

The pause event to pass in the 'config.events' object at the setup call. Fires if playout is paused.

##### Type: 
- object

Properties:



!!! TODO !!!



- See:

  [`config`](https://demo.nanocosmos.de/nanoplayer/docs/nanoplayer/NanoPlayer.html#~config)



Example

```
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



### onPlay

The play event to pass in the 'config.events' object at the setup call. Fires if playout is started.

##### Type: 
- object

Properties:



!!! TODO !!!



- See:

  [`config`](https://demo.nanocosmos.de/nanoplayer/docs/nanoplayer/NanoPlayer.html#~config)



Example

```
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



### onReady

The ready event to pass in the 'config.events' object at the setup call. Fires if the player is ready to play after successful setup.

##### Type:
- object

Properties: 

!!! TODO !!!

- See:

  [`config`](https://demo.nanocosmos.de/nanoplayer/docs/nanoplayer/NanoPlayer.html#~config)



Example

```javascript
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



### onStartBuffering

The start buffering event to pass in the 'config.events' object at the setup call. Fires if playout is started but no media is available.

##### Type: 
- object

Properties:

| Name      | Type                                                         | Description                            |
| --------- | ------------------------------------------------------------ | -------------------------------------- |
| `name`    | string                                                       | The event name.                        |
| `player`  | string                                                       | The player name (id of the playerDiv). |
| `id`      | string                                                       | The unique id of the player instance.  |
| `version` | string                                                       | The version of the player.             |
| `data`    | object                                                       | The data object (empty).               |
| `state`   | [NanoPlayer~state](https://demo.nanocosmos.de/nanoplayer/docs/nanoplayer/NanoPlayer.html#~state) | The player state.                      |

- See:

  [`config`](https://demo.nanocosmos.de/nanoplayer/docs/nanoplayer/NanoPlayer.html#~config)



Example

```javascript
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



### onStats

The stats event to pass in the 'config.events' object at the setup call. Fires if the player has measured statistics.

##### Type: 
- object

Properties:



!!! TODO !!!



- See:

  [`config`](https://demo.nanocosmos.de/nanoplayer/docs/nanoplayer/NanoPlayer.html#~config)



Example

```javascript
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



### onStopBuffering

The stop buffering event to pass in the 'config.events' object at the setup call. Fires if playout resumes after buffering.

##### Type: 
- object

Properties:

| Name      | Type                                                         | Description                            |
| --------- | ------------------------------------------------------------ | -------------------------------------- |
| `name`    | string                                                       | The event name.                        |
| `player`  | string                                                       | The player name (id of the playerDiv). |
| `id`      | string                                                       | The unique id of the player instance.  |
| `version` | string                                                       | The version of the player.             |
| `data`    | object                                                       | The data object (empty).               |
| `state`   | [NanoPlayer~state](https://demo.nanocosmos.de/nanoplayer/docs/nanoplayer/NanoPlayer.html#~state) | The player state.                      |

- See:

  [`config`](https://demo.nanocosmos.de/nanoplayer/docs/nanoplayer/NanoPlayer.html#~config)



Example

```javascript
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





### onStreamInfo

The stream info event to pass in the 'config.events' object at the setup call. Fires if informations about a stream is available right before playback starts.

##### Type:
- object

Properties: 



!!! TODO !!!



- See:

  [`config`](https://demo.nanocosmos.de/nanoplayer/docs/nanoplayer/NanoPlayer.html#~config)



Example

```javascript
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



### onStreamInfoUpdate

The stream info event to pass in the 'config.events' object at the setup call. Fires if the stream format has changed during playback.

##### Type:
- object



!!! TODO !!!



- See:

  [`config`](https://demo.nanocosmos.de/nanoplayer/docs/nanoplayer/NanoPlayer.html#~config)



##### Example

```javascript
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



### onUnmute

The unmute event to pass in the 'config.events' object at the setup call. Fires if the player is unmuted.

##### Type: 
- object

Properties: 

!!! TODO !!!

- See:

  [`config`](https://demo.nanocosmos.de/nanoplayer/docs/nanoplayer/NanoPlayer.html#~config)



Example

```javascript
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



### onVolumeChange

The volume change event to pass in the 'config.events' object at the setup call. Fires if the player's volume has changed.

##### Type:
- object

Properties: 



!!! TODO !!!



- See:

  [`config`](https://demo.nanocosmos.de/nanoplayer/docs/nanoplayer/NanoPlayer.html#~config)



Example

```javascript
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



### onWarning

The error event to pass in the 'config.events' object at the setup call. Fires if something is not as expected, but functionality works.

##### Type:
- object

Properties:



!!! TODO !!!



- See:

  [`config`](https://demo.nanocosmos.de/nanoplayer/docs/nanoplayer/NanoPlayer.html#~config)



Example

```javascript
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
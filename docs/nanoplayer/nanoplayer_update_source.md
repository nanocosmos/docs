---
id: nanoplayer_update_source
title: update source
sidebar_label: update source
---
The nanoStream H5Live Player updateSource API lets you replace the exisiting source (`config.source`) with a new source.

> **Important:** 
> To start using the update source feature make sure you're using the minimum required nanoStream H5Live Player version **4.0**

## How to use
With the nanoStream H5Live Player **version >= 4.0** you only need to provide a new `source` object as a parameter. In case a stream is currently playing and a stream of the new source should play immediately a stream switch will be initialized with the switch options that are set directly in the `config.source.options.switch` object. If an errror occurs in this case the playback is interrupted and an error is thrown. 

>  **Important:** The new source will always replace the previous source even in case of an error!


### source object parameter
The updateSource method **always** expects a new source object as a parameter. 

As you may notice this object is similar to the structure of the `config` object you are using to set up the player. 

**Example single stream source:**

```javascript
var source = {
    "entries": [ // array of 'entry' objects
        {
            "index": 0,
            "label": "high",
            "tag": "this is a single entry high quality stream",
            "info": {
                "bitrate": 1200,
                "width": 1280,
                "height": 720,
                "framerate": 30
            },
            "hls": "",
            "h5live": {
                "rtmp": {
                    "url": "rtmp://bintu-play.nanocosmos.de/play",
                    "streamname": "XXXXX-YYYY0"
                },
                "server": {
                    "websocket": "wss://bintu-h5live.nanocosmos.de:443/h5live/stream.mp4",
                    "hls": "https://bintu-h5live.nanocosmos.de:443/h5live/http/playlist.m3u8",
                    "progressive": "https://bintu-h5live.nanocosmos.de:443/h5live/http/stream.mp4"
                },
                "token": "",
                "security": {}
            },
            "bintu": {}
        }
    ]
}
```

**Example multi stream source object with ABR:**

```javascript
var source = {
    "entries": [ // array of 'entry' objects
        {
            "index": 0,
            "label": "high",
            "tag": "this is a high quality stream",
            "info": {
                "bitrate": 1200,
                "width": 1280,
                "height": 720,
                "framerate": 30
            },
            "hls": "",
            "h5live": {
                "rtmp": {
                    "url": "rtmp://bintu-play.nanocosmos.de/play",
                    "streamname": "XXXXX-YYYY0"
                },
                "server": {
                    "websocket": "wss://bintu-h5live.nanocosmos.de:443/h5live/stream.mp4",
                    "hls": "https://bintu-h5live.nanocosmos.de:443/h5live/http/playlist.m3u8",
                    "progressive": "https://bintu-h5live.nanocosmos.de:443/h5live/http/stream.mp4"
                },
                "token": "",
                "security": {}
            },
            "bintu": {}
        },
        {
            "index": 1,
            "label": "medium",
            "tag": "this is a medium quality stream",
            "info": {
                "bitrate": 800,
                "width": 864,
                "height": 480,
                "framerate": 30
            },
            "hls": "",
            "h5live": {
                "rtmp": {
                    "url": "rtmp://bintu-play.nanocosmos.de/play",
                    "streamname": "XXXXX-YYYY1"
                },
                "server": {
                    "websocket": "wss://bintu-h5live.nanocosmos.de:443/h5live/stream.mp4",
                    "hls": "https://bintu-h5live.nanocosmos.de:443/h5live/http/playlist.m3u8",
                    "progressive": "https://bintu-h5live.nanocosmos.de:443/h5live/http/stream.mp4"
                },
                "token": "",
                "security": {}
            },
            "bintu": {}
        },
        {
            "index": 2,
            "label": "low",
            "tag": "this is a low quality stream",
            "info": {
                "bitrate": 400,
                "width": 426,
                "height": 240,
                "framerate": 15
            },
            "hls": "",
            "h5live": {
                "rtmp": {
                    "url": "rtmp://bintu-play.nanocosmos.de/play",
                    "streamname": "XXXXX-YYYY2"
                },
                "server": {
                    "websocket": "wss://bintu-h5live.nanocosmos.de:443/h5live/stream.mp4",
                    "hls": "https://bintu-h5live.nanocosmos.de:443/h5live/http/playlist.m3u8",
                    "progressive": "https://bintu-h5live.nanocosmos.de:443/h5live/http/stream.mp4"
                },
                "token": "",
                "security": {}
            },
            "bintu": {}
        }
    ],
    "options": {
        "adaption": {
            "rule": "deviationOfMean" // enable ABR
        },
        "switch": {
            'method': 'server',
            'pauseOnError': false,
            'forcePlay': true,
            'fastStart': false,
            'timeout': 10,
        }
    },
    "startIndex": 2 // lowest
}
```

## updateSource API

**Example updateSource call:**

```javascript
var source = {
    "entries": [ // array of 'entry' objects
        {
            "index": 0,
            "label": "high",
            "tag": "this is a single entry high quality stream",
            "info": {
                "bitrate": 1200,
                "width": 1280,
                "height": 720,
                "framerate": 30
            },
            "hls": "",
            "h5live": {
                "rtmp": {
                    "url": "rtmp://bintu-play.nanocosmos.de/play",
                    "streamname": "XXXXX-YYYY0"
                },
                "server": {
                    "websocket": "wss://bintu-h5live.nanocosmos.de:443/h5live/stream.mp4",
                    "hls": "https://bintu-h5live.nanocosmos.de:443/h5live/http/playlist.m3u8",
                    "progressive": "https://bintu-h5live.nanocosmos.de:443/h5live/http/stream.mp4"
                },
                "token": "",
                "security": {}
            },
            "bintu": {}
        }
    ]
}

// player instance
player.updateSource(source).then(function(config) {
    console.log('update source ok with config: ' + JSON.stringify(config));
}, function(error) {
    console.log(error);
});
```

## updateSource events
With the release of the `updateSource` method there are also **4** events you should keep in mind:
<br>

### start event
- **[onUpdateSourceInit](nanoplayer_api/#onupdatesourceinit)**: This event signals an initialized update source request. This always **only** a start event! Another completion event will follow.
<br>

### completion events
- **[onUpdateSourceSuccess](nanoplayer_api/#onupdatesourcesuccess)**: This event signals a successful update source request and fires if the source is updated. 
- **[onUpdateSourceFail](nanoplayer_api/#onupdatesourcefail)**: This event signals a failed update source request. Fired if an error occurs during the source update.
- **[onUpdateSourceAbort](nanoplayer_api/#onupdatesourceabort)**: This event signals an aborted update source request. Possible reasons are an equal source (**'equalsource'**), a superseding (**'superseded'**) or the time difference between two following `updateSource` calls that is too small  (**'frequency'**). 

<br>
**Also, keep in mind...** there will be an [`onStreamInfo`](nanoplayer_api/#onstreaminfo) event indicating that the first image of the new stream is getting played out.

> **Note:** 
> You can find more specific information on all player events [here](nanoplayer_api/#nanoplayerupdatesourcesource-options-code-promise-lt-config-error-gt-code).



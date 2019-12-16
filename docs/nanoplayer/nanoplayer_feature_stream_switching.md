---
id: nanoplayer_feature_stream_switching
title: Stream switching via updateSource
sidebar_label: Stream switching
---


We are proud to announce the <b>new nanoStream H5Live Player Version 4.0 </b> that raises the level of your live stream quality by <b>enabling seamless switching between different streams.</b>
<br>It means you can send streams with different qualities (eg. high and medium) and the player can decide which of them to play, to accommodate the network situations and avoid buffering and frame drops. 

This is an important feature for <b>adaptive bitrate streaming (ABR)</b>, which will be fully enabled in future releases, starting our next 4.1 release!


> **Important:** 
> To start using the new stream switching feature make sure you're using the minimum required nanoStream H5Live Player version **4.0**

<br>
<hr>

## How to use the updateSource method
> **Note:** 
> To initialize a streamswitch you first need to set up your player via the `setup` method. 
> <br>You can find more information on how to set up the player [here](../nanoplayer_api/#nanoplayersetupconfig-code-promise-lt-config-error-gt-code).

<br> The updateSource method expects **2** parameters:
<br>

### 1) `source` object parameter
First, you need to configure a new `source` object. As you may notice this object is similar to the structure of the `config` object you are using to set up the player. 
<br>

**But** in case of the `updateSource` method you only provide the `source` object of the stream you want to switch to:

```javascript
var source = {
    h5live: {
        // h5live server endpoint of the new stream (not required to change)
        server: {
            websocket: 'wss://bintu-h5live.nanocosmos.de/h5live/stream',
            hls: 'https://bintu-h5live.nanocosmos.de/h5live/http/playlist.m3u8'
        },
        // rtmp stream source of the new stream
        rtmp: {
            url: 'rtmp://bintu-play.nanocosmos.de:80/live',
            streamname: 'XXXXX-YYYYY'
        }
    }
}
```
### 2) `options` object parameter
The second expected parameter is an `options` object to finetune your desired switching behaviour:
<br>

```javascript
var options = {
    method: 'server',
    pauseOnError: false,
    forcePlay: true,
    fastStart: false,
    timeout: 10,
    tag: 'XXXXX-YYYYY'
}
```
**Possible options**:

- `method`: 
    - The preferred switching method
    - Possible values are **'server'** (default) and **'client'**
- `pauseOnError`: 
    - If set the player stops in case an error occurs during the process of stream switching
    - Possible values are **false** (default) and **true**
- `forcePlay`: 
    - If set the player starts the playback even though the player is in `paused` state
    - Possible values are **false** and **true** (default) 
- `fastStart`: 
    - This option is only possible if `method` is **'server'** is used!
    - The server tries to accelerate the startup time of the new source 
    - Possible values are **false** (default) and **true**
- `timeout`: 
    - The maximal time to wait in **seconds** before running into a timeout
    - If the time limit is reached the **error 4006** will be thrown inside the [`onUpdateSourceFail`](../nanoplayer_api/#onUpdateSourceFail) event
    - The default value is **10** seconds and the possible range is between **5** and **30** seconds
- `tag`: 
    - This custom field can be any **string** you like and will be returned in all of the updateSource completion events. (`onUpdateSourceSuccess`, `onUpdateSourceFail` and `onUpdateSourceAbort`)

<br>

> **Note:** 
> You can find more specific information on the possible options [here](../nanoplayer_api/#nanoplayerupdatesourcesource-options-code-promise-lt-config-error-gt-code).


## Initialize the switch!
Now all you need to do is call the `updateSource` method with the `source` and `options` parameter configured in **1)** and **2)** :

```javascript
var source = {
    h5live: {
        // h5live server endpoint of the new stream (not required to change)
        server: {
            websocket: 'wss://bintu-h5live.nanocosmos.de/h5live/stream',
            hls: 'https://bintu-h5live.nanocosmos.de/h5live/http/playlist.m3u8'
        },
        // rtmp stream source of the new stream
        rtmp: {
            url: 'rtmp://bintu-play.nanocosmos.de:80/live',
            streamname: 'XXXXX-YYYYY'
        }
    }
}

var options = {
    method: 'server',
    pauseOnError: false,
    forcePlay: true,
    fastStart: false,
    timeout: 10,
    tag: 'XXXXX-YYYYY'
}

// player instance
player.updateSource(source, options).then(function(config) {
    console.log('update source ok with config: ' + JSON.stringify(config));
}, function(error) {
    console.log(error);
});
```



## New Streamswitch related events

With the release of the `updateSource` method there are also **4** new events you should keep in mind:

### start event

- **[onUpdateSourceInit](../nanoplayer_api/#onupdatesourceinit)**: This event signals an initialized update source request. This always **only** a start event! Another completion event will follow.

### completion events

- **[onUpdateSourceSuccess](../nanoplayer_api/#onupdatesourcesuccess)**: This event signals a successful update source request and fires if the source is updated. 
- **[onUpdateSourceFail](../nanoplayer_api/#onupdatesourcefail)**: This event signals a failed update source request. Fired if an error occurs during the source update.
- **[onUpdateSourceAbort](../nanoplayer_api/#onupdatesourceabort)**: This event signals an aborted update source request. Possible reasons are an equal source (**'equalsource'**), a superseding (**'superseded'**) or the time difference between two following `updateSource` calls that is too small  (**'updatefrequency'**). 

<br>
**Also, keep in mind...** there will be an [`onStreamInfo`](../nanoplayer_api/#onstreaminfo) event indicating that the first image of the new stream is getting played out.

> **Note:** 
> You can find more specific information on all player events [here](../nanoplayer_api/#nanoplayerupdatesourcesource-options-code-promise-lt-config-error-gt-code).




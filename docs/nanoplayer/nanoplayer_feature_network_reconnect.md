---
id: nanoplayer_feature_reconnect_timeouts
title: Reconnect and Timeouts
sidebar_label: Reconnect and Timeouts
---

## Reconnect on unexpected connection close

The **nanoStream H5Live Player** can use an internal reconnect in case the network connection is broke up.

Internal network reconnect is **supported on all platforms except iOS**. iOS media stream connections cannot be managed by the player, but by the browser and system.
For the supported platforms automatic network reconnect is handling two main cases:
* Initial connect failing
* Connection break up during streaming

The handling is optional and can be disabled. The reconnect is enabled by default with a suggested [configuration](#reconnect-configuration).

During a reconnect no [`onError`](../nanoplayer_api/#onerror) event is being fired. 
The reconnect will be notified by an [`onPause`](../nanoplayer_api/#onpause) event with [`reason`](../nanoplayer_api/#nanoplayerpausereason--codestringcode) 'reconnectionimminent'.

If the number of maximum consecutive reconnect attemps is exceeded, 
the player will fire an [`onError`](../nanoplayer_api/#onerror) event with the related [`errorcode`](../nanoplayer_api/#nanoplayererrorcode--codenumbercode) followed by an [`onPause`](../nanoplayer_api/#onpause) event. 

<br>
<br>

> **Important:** <br>
> The internal reconnect handles network connection break up only! It doesn't handle non network related stream break ups or pause reasons different then 'normal'.

> **Important:** <br>
> Reconnect is not supported on iOS!

<hr>

### Configuration

The internal reconnect behaviour can be configured via `config.playback.reconnect` object during the initial `setup` call.

> **Note:** You can find more information on how to configure the player in our [API documentation](../nanoplayer_api/#nanoplayerconfig--codeobjectcode).

The reconnect object has multiple parameters to adjust the behaviour. The parameters are:

* `minDelay` (default: 2) - The minimum time between reconnect attempts in seconds. The lowest possible value is 1 sec.
* `maxDelay` (default: 10)- The maximum time between reconnect attempts in seconds.
* `delaySteps` (default: 10)- The number of steps till the maximum delay should reached.
* `maxRetries` (default: 10) - The maximum count of reconnect tries. If set to zero no reconnect will be done.

> **Important:** <br>
> Disable reconnect by setting `maxRetries` to 0.

### Example

```javascript
var config = {
    "source": {
        ...
    },
    "playback" : {
        ...,
        "reconnect" : {
            "minDelay"   : 2,
            "maxDelay"   : 10,
            "delaySteps" : 10,
            "maxRetries" : 10
        }
    },
    "style" : {
        ...
    }
};
```

## Timeouts

> **Important:** <br>
> Changing the default timeout values is not recommended.

In case of a timeout, an [`onError`](../nanoplayer_api/#onerror) event is fired with a related [`errorcode`](../nanoplayer_api/#nanoplayererrorcode--codenumbercode), followed by an [`onPause`](../nanoplayer_api/#onpause) event. 

A timeout can be terminated either by receiving a playback or when the player is paused manually while loading.

### Loading timeout

The default value for `playback.timeouts.loading` is **20 seconds**.
If necessary, the default value can be changed to a value within a range (in seconds):
- min: 10
- max: 60

In case of loading timeout, the state is changed from loading to paused. 

### Connection timeout

Connection timeout is implemented within the time range of the loading timeout, which means that the `playback.timeouts.connecting` value should not be higher than the value of the loading timeout. 
Connection timeout it is the time between establishing a connection and having it open. After successfully opening it, this timeout will be cleared.

The default value for `playback.timeouts.connecting` is **5 seconds**.
If necessary, the default value can be changed to a value within a range (in seconds):
- min: 5
- max: 30

**Should not be higher than the loading timeout value**.

### Buffering timeout
 
Buffering timeout happens when there is not enough received data within the desired time interval. As in previous examples, it is followed by an [`onError`](../nanoplayer_api/#onerror) and [`onPause`](../nanoplayer_api/#onpause) event.
 
The default value for `playback.timeouts.buffering` is **20 seconds**. 
If necessary, it can be changed to a value within a range (in seconds)::
- min: 10
- max: 60

### Example

```javascript
// with default values:
var config = {
    "source": {
        ...
    },
    "playback" : {
        ...,
        "timeouts" : {
            "loading"    : 20,
            "connecting" : 5,
            "buffering"  : 20
        }
    },
    "style" : {
        ...
    }
};
```
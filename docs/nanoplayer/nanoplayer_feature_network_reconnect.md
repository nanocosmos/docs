--- 
id: nanoplayer_feature_network_reconnect
title: Network Reconnect
sidebar_label: Network Reconnect
--- 

## Network Reconnect on unexpected connection close

### General
The **nanoStream H5Live Player** can use an internal reconnect in case the network connection is broke up.

Internal network reconnect is **supported on all platforms except iOS**. iOS media stream connections cannot be managed by the player, but by the browser and system.
For the supported platforms automatic network reconnect is handling two main cases:
* Initial connect failing
* Connection break up during streaming

The handling is optional and can be disabled. The reconnect is enabled by default with a suggested [configuration](#configuration).

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

#### Parameters
The reconnect object has multiple parameters to adjust the behaviour. The parameters are:

* `minDelay` (default: 2) - The minimum time between reconnect attempts in seconds. The lowest possible value is 1 sec.
* `maxDelay` (default: 10)- The maximum time between reconnect attempts in seconds.
* `delaySteps` (default: 10)- The number of steps till the maximum delay should reached.
* `maxRetries` (default: 10) - The maximum count of reconnect tries. If set to zero no reconnect will be done.

> **Important:** <br>
> Disable reconnect by setting `maxRetries` to 0.

#### Example
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

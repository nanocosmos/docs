---
id: nanoplayer_feature_latency_control_modes
title: Latency Control Modes
sidebar_label: Latency control modes
---

## Playback latency control modes

Introduced in **nanoStream H5Live Player Version 4.14.1**, new latency control modes allow enhanced adaptive adjustments of the latency according to the current stream and network conditions.  
The control mode can be changed via `config.playback.latencyControlMode` configuration parameter. The default mode is set to `"classic"`. New parameters are `"balancedadaptive"` and `"fastadaptive"`.

### Common use cases

This feature is particularly helpful in i.e. live auctioning, where even lower latency is crucial. The usage depends on the needs, however, in most cases the `"classic"` mode is enough to achieve a satisfying viewing experience. 

### Support status (v.4.14.1)

The feature is supported and production-proven on:

* Desktop Windows/Mac/Linux: Chrome, Edge Chromium (80+), Firefox, Safari, Chromium-based browsers
* Android: Chrome, Firefox, Chromium-based browsers
* iOS is planned to follow soon

For unsupported platforms/browsers the player is doing automatic fallback to `"classic"` mode.

### Configuration 

Accessing latency control modes is possible via `playback.latencyControlMode` in the player `config`. 
To change from the `"classic"` mode (established and default mode), it is necessary to pass the desired value directly to the `config.playback` object:

```javascript
var config = {
        "playback": {
            "latencyControlMode" : "fastadaptive",
        }
```

### Latency control modes

As already mentioned, from the **H5Live Player Version 4.14.1** there are three available modes for latency control.

* `"classic"` mode - set as default, well-established, production-proven, suitable for most cases
* `"fastadaptive"` mode - higher priority on achieving lower latency
* `"balancedadaptive"` mode - higher priority on smooth playback 

`"Classic"` mode is a robust and well-tested tool for achieving a great streaming experience. Depending on the needs, new modes are improving the adaptive adjustments.`"Fastadaptive"` mode puts a higher priority on achieving lower latency, `"balancedadaptive"` mode prioritizes maintenance of smooth playback while adjusting to the current conditions. 


### Stats values

Values used by the latency control regarding buffer that are collected in stats:
* buffergoal - which is the `buffergoal` object itself, includes:
    * base - suggested calculated `buffergoal` value depending on the latency control mode and playback conditions
    * real - final calculated `buffergoal` value including offsets 
    * min - minimum possible `buffergoal` value
    * max - maximum possible `buffergoal` value

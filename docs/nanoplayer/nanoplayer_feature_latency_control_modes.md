---
id: nanoplayer_feature_latency_control_modes
title: Latency Control Modes
sidebar_label: Latency control modes
---

Introduced in **nanoStream H5Live Player Version 4.14.x**, two new latency control modes have been added, especially targeting lowest latency use cases like live auctioning.
The latency control mode can be selected via the added `playback.latencyControlMode` configuration parameter.
The established latency control mode is available as the `classic` option which remains to be the default mode.
In addition the new latency control modes `balancedadaptive` and `fastadaptive` have been added.
According to the current stream and network conditions they adjust the latency adaptively. This allows to achieve a lower latency while keeping the playback experience smooth.


### Supported platforms and browsers

This feature is particularly helpful in i.e. live auctioning, where even lower latency is crucial. The usage depends on the needs, however, in most cases the `"classic"` mode is enough to achieve a satisfying viewing experience. 

##### v.4.14.1

Version 4.14.x added support for all major desktop and Android browsers.

* Desktop Windows/Mac/Linux: Chrome, Edge Chromium (80+), Firefox, Safari, Chromium-based browsers
* Android: Chrome, Firefox, Chromium-based browsers
* iOS is planned to follow soon

For unsupported platforms/browsers the player is doing automatic fallback to `"classic"` mode.

### Configuration 

Accessing latency control modes is possible via `playback.latencyControlMode` in the player configuration. 

Parameter name: `config.playback.latencyControlMode`  
Values: `"classic"`, `"balancedadaptive"`, `"fastadaptive"`

#### Examples:

```javascript
var config = {
        "playback": {
            ...
            "latencyControlMode" : "classc",
            ...
        }
}
```
```javascript
var config = {
        "playback": {
            ...
            "latencyControlMode" : "balancedadaptive",
            ...
        }
}
```
```javascript
var config = {
        "playback": {
            ...
            "latencyControlMode" : "fastadaptive",
            ...
        }
}
```

### Latency control modes

##### `"classic"` mode
* default mode
* well-established and reliable option for a variety of use cases
+ based on threshold values that can be customized via `tweaks.buffer` setting

##### `"balancedadaptive"` mode
+ added in version 4.14.x
* latency control adapting to current stream and network conditions
* capable of achieving and maintaining lower playback latency
* lower operating points compared to `classic` mode
* recommended to be used without custom `tweaks.buffer` settings

##### `"fastadaptive"` mode
+ added in version 4.14.x
* latency control adapting to current stream and network conditions
* capable of achieving and maintaining lower playback latency
* lower operating points compared to `balancedadaptive` mode
* recommended to be used without custom `tweaks.buffer` settings
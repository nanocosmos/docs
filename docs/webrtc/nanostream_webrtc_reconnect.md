---
id: nanostream_webrtc_reconnect
title: Automatic Reconnection
sidebar_label: Automatic Reconnection
---

This feature allows configuration of the reconnection behaviour on API level.
Once the webcaster will register any connection loss, it will attempt to reconnect the current webcast.

## Reconnect configuration

To enable the feature, the [setConfig()](https://docs.nanocosmos.de/docs/webrtc/nanostream_webrtc_api#rtcusersetconfigconfig) API call now provides additional options:


- <b>reconnect.minDelay:</b> minimum amount of seconds to wait before attempting a reconnect after connection loss
- <b>reconnect.maxDelay:</b> maximum amount of seconds to wait before attempting a reconnect after connection loss
- <b>reconnect.maxRetries:</b> maximum amount reconnect attempts, setting this to an integer greater than 0 will enable the reconnect feature


```javascript

var config = {
  reconnect: {
    minDelay: 2,
    maxDelay: 8,
    maxRetries: 10
  }
};

rtcuser.setConfig(config);
```
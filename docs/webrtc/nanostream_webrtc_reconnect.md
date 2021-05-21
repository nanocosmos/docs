---
id: nanostream_webrtc_reconnect
title: Automatic Reconnection
sidebar_label: Automatic Reconnection
---

This feature allows configuration of the reconnection behaviour on API level.
Once the webcaster will register any connection loss, it will attempt to reconnect the current webcast.

When enabled, the feature will trigger a reconnect attempt in one of the following cases:

- Change of network:
  - On mobile devices, e.g. when switching from wifi to mobile network
  - Switching between multiple wifi endpoints

- Broadcaster’s brief internet interruptions
- Unexpected issues on the network side

You will be notified through the [BroadcastStatus](nanostream_webrtc_api.md#RtcUser+event_BroadcastStatus) Event once a reconnection takes place.
Please read on how to get notified about a reconnect [below](#notice-when-a-reconnect-happens).

## Automatic Reconnection Configuration

To enable the feature, the [setConfig()](https://docs.nanocosmos.de/docs/webrtc/nanostream_webrtc_api#rtcusersetconfigconfig) API call now provides additional options:


- <b>reconnect.minDelay:</b> minimum amount of seconds to wait before attempting a reconnect after connection loss
- <b>reconnect.maxDelay:</b> maximum amount of seconds to wait before attempting a reconnect after connection loss
- <b>reconnect.maxRetries:</b> maximum amount reconnect attempts, setting this to an integer greater than 0 will enable the reconnect feature


```javascript
// add reconnection settings to your config
var config = {
  reconnect: {
    minDelay: 2,
    maxDelay: 8,
    maxRetries: 10
  }
};

rtcuser.setConfig(config);
```

## Notice when a reconnect happens

A reconnect will be notified through the [BroadcastStatus](nanostream_webrtc_api.md#RtcUser+event_BroadcastStatus) Event.

Connection loss (from client to server) is notified with a status of <b>'reconnecting_broadcast'</b>.

```javascript
rtcuser.on('BroadcastStatus', function(event) {

  if(event.data && event.data.message === 'reconnecting_broadcast') {
    console.log('Broadcast is reconnecting');
  }
  
  // the status (event.data.message) will be one of:

  // 'signalling': a connection is being established
  // 'connected': the stream has connected to the server successfully
  // 'broadcasting': the broadcast is running
  // 'reconnecting_broadcast': the client is reconnecting
  // 'reconnecting': the RTMP connection is reconnecting on server side
    
});
```
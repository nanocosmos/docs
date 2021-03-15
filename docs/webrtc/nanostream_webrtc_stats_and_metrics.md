---
id: nanostream_webrtc_stats_and_metrics
title: Stats and Metrics
sidebar_label: Stats and Metrics
---

The Webcaster API provides two types of Quality Of Service reporting mechanisms:

- client side statistics
- collection of backend metrics 

## Stats

In order to display client side statistics that are visible directly in your Webcaster application, please:

- enable stats via the [enableStats()](nanostream_webrtc_api.md#rtcuserenablestatsenable-interval) API call
- listen to the ["ReceivedWebRTCStats"](nanostream_webrtc_api#RtcUser+event_ReceivedWebRTCStats) Event

### Stats Example

The following snipped will enable stats reporting on the client side.
Please find a list of available stats [here](nanostream_webrtc_api#WebRTCStatsEvent).
Also note that most of the stats are available in Chrome. The other browsers, e.g. Firefox, may not provide all the documented stats.

```js
// rtcUser: instance of RtcUser
rtcUser.enableStats();
rtcUser.on('ReceivedWebRTCStats', function(event) {
     console.log(JSON.stringify(event.data.results));
});
```

## Metrics

Sending metrics to our backend will help us analyze your customers webcast ingest quality and track down client side issues. Additionally you will be able to see useful information in the Analytics Dashboard. Please refer to the [nanoStream Cloud](../cloud/analytics#webcaster) documentation for details on how to enable client metrics for your organization.

### Metrics configuration

In order to enable sending metrics from the clients, please configure your accountId and accountKey with the [setConfig()](nanostream_webrtc_api#rtcusersetconfigconfig) API call.

```js
// rtcUser: instance of RtcUser
var rtcConfig = {
    metrics: {
        accountId: 'myAccountId',
        accountKey: 'myAccountKey'
    }
};

// Set metrics credentials
rtcUser.setConfig(rtcConfig);

```
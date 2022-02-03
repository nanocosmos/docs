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

Please find a list of available stats [here](nanostream_webrtc_api#WebRTCStatsEvent).<br>
Also note that most of the stats are available in Chrome. The other browsers, e.g. Firefox, may not provide all the documented stats.

### Stats Example

The following snippet will enable stats reporting on the client side:

```js
// rtcUser: instance of RtcUser
rtcUser.enableStats();

rtcUser.on('ReceivedWebRTCStats', function(event) {
    var results = event.data.results;
    console.log(JSON.stringify(results));
});
```

### Ingest Quality Indicators

Bad network is the major reason for bad end to end user experience.
In case of bad network conditions you can warn your users and they will be able to take further steps in order to improve the situation.

There are specific stats that indicate the current upstream quality:

- <b>roundTripTime</b> - Current time in milliseconds that data takes from the client to the webcaster server and back.
- <b>packetLoss</b> - Percentage of packets lost during past 10 seconds.
- <b>videoSendDelay</b> (Chromium based browsers only) - Delay before video frames are send to the server. 

Those statitics will allow you to show a <b>traffic light</b> to your webcasters, that indicates the current ingest quality. This regards the upstream network conditions from your customers browsers to our webcast servers.

### Traffic Light Recommendations

Based upon our analysis, we have gathered recommendations for indicating bad streaming conditions to the end users.<br>

<b>Round Trip Time</b>

We concider an rtt of 150 or less as acceptable. We observed RTT values going up to 150, with still good playback experience.
Above 150 and below 250 the viewer experience will degrade slighly. Above 250 milliseconds users should check their network and
see if there are things that can be improved.

<b>Packet Loss</b>

A packet loss of less than 5% still results good playback experience. Greater than 10% of lost packages will degrade viewer experience, 
especially for streams with higher bitrates (2Mb and above). Above 10% of packet loss, we observed that streams can get chunky and your users should take action then.

<br>
Sample for a simple traffic light implementation:


```js
// rtcUser: instance of RtcUser
rtcUser.enableStats();

rtcUser.on('ReceivedWebRTCStats', function(event) {
    
    var results = event.data.results;
    var roundTripTime = results.roundTripTime;
    var packetLoss = results.packetLoss;

    if (!roundTripTime || !packetLoss) return; // values can be undefined

    // thresholds
    var quality = 'good';
    var packetLossLowerBound = 5;
    var packetLossUpperBound = 10;
    var rttLowerBound = 150;
    var rttUpperBound = 250;

    if(packetLoss < packetLossLowerBound && roundTripTime < rttLowerBound) {
        quality = 'good';
    } 
    
    if ((packetLoss > packetLossLowerBound && packetLoss < packetLossUpperBound) 
        || (roundTripTime > rttLowerBound && roundTripTime < rttUpperBound)) {
        quality = 'medium';
    }

    if (packetLoss > packetLossUpperBound || roundTripTime > rttUpperBound) {
        quality = 'bad';
    }

    console.log('roundTripTime: ', roundTripTime);
    console.log('packetLoss: ', packetLoss);
    console.log('quality: ', quality);

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
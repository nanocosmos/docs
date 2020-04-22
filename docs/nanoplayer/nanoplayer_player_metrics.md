---
id: nanoplayer_player_metrics
title: Player Metrics
sidebar_label: Player Metrics
---

## How to use 

Player metrics are providing additional insights for our cloud support team and our [nanoStream Cloud Analytics](../../cloud/analytics) service. The player metrics can be enabled by adding the `metrics` object to the player config as shown below.

**Important** <br>
If you don't have metrics account information for your organisation yet please reach out to [sales@nanocosmos.de](mailto:sales@nanocosmos.de).

#### Example player configuration with metrics enabled

```
var config = {
    "source" : {
		...
    },
    "playback": {
        ...
    },
    "style": {
        ...
    },
    metrics: {
        accountId: 'YOUR-METRICS-ACCOUNT-ID',       // replace with your metrics account id
        accountKey: 'YOUR-METRICS-ACCOUNT-KEY',     // replace with your metrics account key
        userId: 'viewer1',                          // value can be changed per viewer
        eventId: 'event1',                          // value can be changed per event
        statsInterval: 10,                          // statistics interval in seconds
        customField1: 'CustomInfo1'                 // value can be changed
    },
    ...
}
```


> **Note:** For more information on the metrics configuration object see our [API documentation](../nanoplayer_api/#nanoplayerconfig--codeobjectcode). More detailed information around nanoStream Cloud Analytics can be found in our [blog](https://www.nanocosmos.de/blog/2019/09/nanostream-analytics-get-insights-in-your-nanostream-cloud-service-and-h5live-player-performance/) and [docs](../../cloud/analytics).
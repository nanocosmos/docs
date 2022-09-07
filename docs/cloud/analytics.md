---
id: analytics
title: nanoStream Cloud Analytics
sidebar_label: General
---

<div class="video-wrap">
    <div class="video-container">
        <iframe src="https://www.youtube.com/embed/F3SC3IK2cpg" frameborder="0" allowfullscreen></iframe>
    </div>
</div>

##### *Click `PLAY` button to start*

>Tutorial : Analytics for Low Latency Streams with nanocosomos

![Screenshot](/img/cloud/analytics/analytics.png)

nanoStream Cloud Analytics offers a great way to monitor and analyze the performance and quality of service of your live streams.

> nanoStream Cloud and the unique nanoStream H5Live Player have been designed as an easy to use ultra-low-latency and light-weight live streaming platform. nanoStream Analytics follows the same philosophy. Easy to use, lightweight and focused on delivering our partners the information that makes their business more successful.

nanoStream Analytics provides three levels of information.

1. **General information** about usage, traffic volume, countries, customers, IP’s and world map overview on ingest/playout
2. **Business intelligence**, conclusions about several aggregated metrics. Example: Tagging: you can “tag” your live streams by topics or events and then query them from the Analytics dashboard. Or you want insight on how certain countries perform compared to each other. by using the country filter.
3. **Customers enabled for H5Live metrics** will get additional insight and details about the player clients: we show H5Live player information like OS/browser, max concurrent viewers, play buffer ratio, startup time, player error codes and other events like buffer play ratio and latency, both shown as graphs and on a world map

> All of this data is meant to help you improve your Quality of Service and your viewers Quality of Experience. Overall, by using nanoStream Analytics, your technical team will have full insights on how your service behaves.

> In addition to improving your technical capabilities, nanoStream Analytics enables also a big advantage to your business intelligence, providing valuable data to your Management and to your Marketing and Sales teams to understand where they should strengthen your service and decide on the next steps to be taken.

## Server and Service Metrics

The server and service metrics give you an overview of the total streaming volume of your live streams, where your clients are located, which streams are used most and a lot of other information.

## Client Metrics

Client metrics let you analyze the experience of your users from the users point of view.
If enabled in the Browser application, the client metrics are sent to our backend.

**You need to have a platinum support agreement in place to make use of client metrics.**

Currently the following two applications support sending metrics.

### H5Live

To have metric data available for the [H5Live Dashboard](#h5live-1), you need to be enabled for [H5Live player metrics](../nanoplayer/nanoplayer_player_metrics.md).

### Webcaster

Similar to the H5Live player metrics the Webcaster also supports sending metrics.
If enabled you can see additional metric data on the [Webcaster Dashboard](#webcaster-1).

Please reach out to [sales@nanocosmos.de](mailto:sales@nanocosmos.de) if you like to use it.

## Analytics Dashboard

Analytics and metrics is available in several levels, dependent on your business agreement, support level and subscription plan. Please get in touch for any questions.

The default level allows you to access most of the metrics available on the different dashboards.

To see advanced metric widgets, e.g. for H5Live player metrics like "Buffering Play Ratio" or "Average and median of played time in seconds", you need the level "premium" for your organization.
Please reach out to [sales@nanocosmos.de](mailto:sales@nanocosmos.de) if access to the advanced metric widgets is required.

### Filter options

In general you will see metrics for all of the streams available for your organization.
It is possible to use the following filter options to get a more fine-grained overview:

- Country: let you select one or more countries
- Tag: can be used to filter for specifc stream names
  - you need to assign [tags in Bintu](bintu_stream_tags.md) to your stream(s) to be able to use them for filtering, this is described in our [Blog post about Analytics](https://www.nanocosmos.de/blog/2019/09/nanostream-analytics-get-insights-in-your-nanostream-cloud-service-and-h5live-player-performance/) (search for "Tagging").
  - **Important:** tag selection works like an `AND` filter, only metrics for streams are shown, which have all of the selected tags assigned
- Time range: to select specific points in time or different time ranges like "last month", "last 24 hours", etc.
- Event (only available for H5Live): let you filter for events you have labeled your streams with
  - you need to configure the 'eventId' at the H5Live Player to be able to use that filter (see [Player Metrics doc](https://docs.nanocosmos.de/docs/nanoplayer/nanoplayer_player_metrics/))

The filter option are available directly at the top of each sub-dashboard.
When switching to another sub-dashboard, already selected filter options will be applied there as well.

### Home

![Screenshot](/img/cloud/analytics/analytics-home.png)

The selected filter options affect all availabe metrics.

#### Usage switch

Switch all metrics in Home between data traffic and playtime.

#### Usage Playout/Ingest Overview

The total traffic of playout and ingest data for the selected time period in comparison.

#### Maximum concurrent H5Live viewers

The maximum concurrent viewer count for a time interval.

- absolute: the absolute amount of maximum concurrent viewer
- delta: the difference of maximum concurrent viewers to the previous time interval

#### Month to Date

The total traffic per month. Can be used to compare the current month with the previous month.

![Screenshot](/img/cloud/analytics/analytics-widget-month-to-date.png)

- First row: shows the total usage from the previous month
- Second row: shows the usage from the beginning of the previous month until the current moment (day and time) one month ago
- Third row: shows the usage from the beginning of the current month until the current moment (day and time)

> **Note**, comparing the second and third row can help to see a trend for the current month.

#### Usage Playout

The total playout traffic for each playout method.

- H5Live: the standard low latency playback method
- RTMP: less scalable
- HLS: long latency playback
- H5Live Token: in case you have your own (RTMP) ingest server, from which the streams are pulled and then distributed in the nanoStream cloud to your viewers

#### Usage Ingest

The total ingest traffic for each ingest method.

- RTMP: generic ingest method
- Webcaster: plugin-free stream ingest via Browser

#### Countries

A pie-chart which shows the percentage distribution of total traffic for countries.

### Breakdown

#### GBytes per stream name

Ingest (received) and playback (sent) traffic for each stream.

#### GBytes per client

Playback (sent) traffic for each client (referrer).

#### GBytes per IP

Ingest (received) and playback (sent) traffic for each IP.

### H5Live

![Screenshot](/img/cloud/analytics/analytics-h5live.png)

Most of the metrics are only available with [H5Live metrics](#h5live) enabled.
The selected filter options affect all availabe metrics.

#### H5Live play count per OS

Percentage distribution of playbacks on operating systems (OS).

#### H5Live play count per browser

Percentage distribution of playbacks in Browsers.

#### Reasons for stopping

The number and types of reason why playbacks were stopped or interrupted.
The link in the top right will open a new page with a explanation for each stop reason.

#### Play Buffering Ratio

The ratio between buffer and playback duration over all playouts.
Similar to the same category of the [world map](#world-map).

#### Player Loading Count

The number of player initalisations (clients which attempt to playback a stream) per country.

#### Average and median of player buffer length in seconds

The buffer length is the decisive factor for the latency.
Similar to the "Latency" category of the [world map](#world-map).

#### Median play start time in seconds

The time it takes until the playback of a stream is started - first frame rendered by the H5Live player.

#### Status/Error Codes

The number and types of status and error codes which occurred during playbacks.
The link in the top right will open a new page with a explanation for each code.

#### Average and median of played time in seconds

The average and median playback duration of a playback event, shows how long a viewer will watch a stream
Similar to the "Playtime average" category of the [world map](#world-map).

#### Used player versions

Percentage distribution of playbacks based on the used version of the H5Live player.

### Webcaster

![Screenshot](/img/cloud/analytics/analytics-webcaster.png)

Most of the metrics are only available with [Webcaster metrics](#webcaster) enabled.
The selected filter options affect all availabe metrics.

#### Webcaster publish count per OS

Percentage distribution of ingests on operating systems (OS).

#### Webcaster publish count per browser

Percentage distribution of ingests in Browsers.

#### Average and median of video bitrate

The average and median bitrate used by the video encoder over all ingested streams.
Note that the video encoder might reduce the bitrate if the available bandwidth is not high enough for the user specified bitrate.

#### Average and median of audio bitrate

The average and median bitrate used by the audio encoder over all ingested streams.

#### Average and median of ingest time in seconds

The average and median duration a stream was live, over all ingested streams.

#### Used webcaster versions

Percentage distribution of ingests based on the used version of the Webcaster.

### Reports

Makes it possible to export metrics.
Generates a PDF with usage values (data sent and received) for the selected time range.
The PDF contains the total numbers and two histograms.

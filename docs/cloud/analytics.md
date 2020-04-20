---
id: analytics
title: nanoStream Cloud Analytics
sidebar_label: Analytics
---

nanoStream Cloud Analytics offers a great way to monitor and analyze the performance and quality of service of your live streams.

> nanoStream Cloud and the unique nanoStream H5Live Player have been designed as an easy to use ultra-low-latency and light-weight live streaming platform. nanoStream Analytics follows the same philosophy. Easy to use, lightweight and focused on delivering our partners the information that makes their business more successful.

nanoStream Analytics provides three levels of information.

1. **General information** about usage, traffic volume, countries, customers, IP’s and world map overview on ingest/playout
2. **Business intelligence**, conclusions about several aggregated metrics. Example: Tagging: you can “tag” your live streams by topics or events and then query them from the Analytics dashboard. Or you want insight on how certain countries perform compared to each other. by using the country filter.
3. **Customers enabled for H5Live metrics** will get additional insight and details about the player clients: we show H5Live player information like OS/browser, max concurrent viewers, play buffer ratio, startup time, player error codes and other events like buffer play ratio and latency, both shown as graphs and on a world map

> All of this data is meant to help you improve your Quality of Service and your viewers Quality of Experience. Overall, by using nanoStream Analytics, your technical team will have full insights on how your service behaves.

> In addition to improving your technical capabilities, nanoStream Analytics enables also a big advantage to your business intelligence, providing valuable data to your Management and to your Marketing and Sales teams to understand where they should strengthen your service and decide on the next steps to be taken.

## Client Metrics

### H5Live

### Webcaster

## Analytics Dashboard

different levels: basic, full, premium
-> dependent visibility of views metric widgets

general filter options: country, tag, time range

### Home

The selected filter options affect all availabe metrics.

#### World map

The world map gives an overview where your customers are located and shows statistics per country.
You can choose from the following categories:

- Playout/Ingests: how many streams where ingested and played back
- Buffering Play Ratio (only available with [H5Live metrics](#h5live) enabled): the ratio between buffer and playback duration over all playouts for a country
  - a ratio of 0% means no buffering
  - a ratio of 100% means no playback was possible
  - for countries like India with a high number of mobile connections and unstable internet connection, a higher buffering/play ratio compared to other countries is expected
- Latency (only available with [H5Live metrics](#h5live) enabled): the average playback latency over all playbacks for a country
- Playtime average (only available with [H5Live metrics](#h5live) enabled): the average playback duration of a playback event, shows how long a viewer will watch a stream
- Usage (received/sent): the ingest and playback usage (in gigabytes) for a country

A table directly below the world map shows a top ten country list for the selected category.
The top ten countries are also highlighted on the world map.

#### Data sent/received

The total traffic per day/hour/minute (depending on the selected time range) for your organization.

#### Month to Date

The total traffic per month. Can be used to compare the current month with the previous month.

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

#### GBytes per Streamname

Ingest (received) and playback (sent) traffic for each stream.

#### GBytes per Client

Playback (sent) traffic for each client (referrer).

#### GBytes per IP

Ingest (received) and playback (sent) traffic for each IP.

#### Countries

A pie-chart which shows the percentage distribution of total traffic for countries.

### H5Live

Most of the metrics are only available with [H5Live metrics](#h5live) enabled.
The selected filter options affect all availabe metrics.

#### H5Live play count per OS

Percentage distribution of playbacks on operating systems (OS).

#### H5Live play count per browser

Percentage distribution of playbacks in Browsers.

#### Maximum concurrent H5Live viewers

The concurrent viewer count over all streams (dependent on the filter options) for a point in time.

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
Currently it is rather limited and generates a PDF with usage values (data sent and received) for the selected time range.
The PDF contains the total numbers and two histograms.

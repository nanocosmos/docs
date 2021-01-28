---
id: cloud_introduction
title: Introduction
sidebar_label: Introduction
---

# nanoStream Cloud and bintu.live

nanoStream Cloud is a unique live streaming platform based on different components for ultra low latency live streaming.

This section is about bintu, the stream management dashboard and api.

## What is bintu.live?

The bintu.live stream management software is part of the nanoStream Cloud an enables easy management of low-latency live video streams with nanoStream Live Encoders and Players or any other encoder or playback software.

> It is easy to setup and manage your live streams without additional server software. Leverage proven software know-how and quality with nanoStream Cloud live streaming services for low-latency live streaming for your own brand. Start streaming immediately!


## bintu concepts

Generally, you can either use the bintu.live system with 2 ways:

1. dashboard / manual access in the web browser to create and manage live streams

2. REST API for development purposesIf you use the REST API, you need to obtain your unique secret API Key from the dashboard (see below).



The bintu.live API and dashboard use the same URLs to create and manage live streams.

### bintu streams

Every “bintu stream” has a unique ID and contains of:

- stream URL for ingest (live encoding) with RTMP
- playback URL for in different formats (H5Live for Web, RTMP, HLS, …).



Example stream ID: 

```
1dec3bbc-758b-4879-a202-7ae877d511ba
```



Stream information can be obtained by dashboard or API with
`https://bintu.nanocosmos.de/stream/1dec3bbc-758b-4879-a202-7ae877d511ba`

#### Ingest and Playback

Every bintu stream has an ingest URL and a playback URL. Both are based on a basic URL like rtmp://bintu-stream.nanocosmos.de/live and a stream name like XXXX-YYYY.

The ingest URL needs to be used for your Live Encoder, the player URL on your player web page.

You can instantly start any number of ingest streams and players, dependent on your booked package and agreement.

#### nanoStream CDN

The bintu URLs point to real streaming servers, based on the closest geo location to your live encoder or player audience.



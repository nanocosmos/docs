---
id: cloud_introduction
title: Introduction
sidebar_label: Introduction
---

## What is bintu.live?

The bintu.live stream management software is part of the nanoStream Cloud an enables easy management of low-latency live video streams with nanoStream Live Encoders and Players or any other encoder or playback software.

> It is easy to setup and manage your live streams without additional server software. Leverage proven software know-how and quality with nanoStream Cloud live streaming services for low-latency live streaming for your own brand. Start streaming immediately!

![live streaming Schema.png](https://i0.wp.com/www.nanocosmos.de/blog/wp-content/uploads/live-streaming-Schema.png-1024x514.png?resize=474%2C238)



## bintu concepts

Generally, you can either use the bintu.live system with 2 ways:

1. dashboard / manual access in the web browser to create and manage live streams

2. REST API for development purposesIf you use the REST API, you need to obtain your unique secret API Key from the dashboard (see below).



The bintu.live API and dashboard use the same URLs to create and manage live streams.

Every “bintu stream” has a unique ID and contains of:

- stream URL for ingest (live encoding) with RTMP
- playback URL for in different formats (H5Live for Web, RTMP, HLS, …).



Example stream ID: 

```
1dec3bbc-758b-4879-a202-7ae877d511ba
```



Stream information can be obtained by dashboard or API with
`https://bintu.nanocosmos.de/stream/1dec3bbc-758b-4879-a202-7ae877d511ba`



Additionally to the stream URLs, every bintu stream can contain different `tags` for tagging and grouping streams, which can be human readable or any kind of hidden code like a `geo location` or `application ID`.
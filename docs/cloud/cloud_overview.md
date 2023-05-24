---
id: cloud_overview
title: nanoStream Cloud Product and Services Overview
sidebar_label: Overview
---

nanoStream Cloud is a unique **ultra-low-latency live streaming platform** for your live video/audio content. Ultra-low-latency means 1 second from the camera to the video, glass-to-glass. nanoStream Playback runs on all devices and browsers.

nanoStream software and services can be completely **white-labeled to run under your own brand** for instant live streaming around the world in 1 second.

## What makes nanoStream Cloud different?

nanoStream Cloud is a combination of unique software and services. <br>
It contains 

- **nanoStream CDN** - a powerful ULL CDN with a global scalable network for any audiences worldwide

- [nanoStream H5Live player for all HTML5 web browsers](../nanoplayer/nanoplayer_introduction.md)

- [nanoStream Webcaster for all HTML5 web browsers](../webrtc/nanostream_webrtc_introduction.md)

- Live Transcoding and Adaptive Bitrate (ABR) 

- nanoStream Analytics for improved insights into the quality of service of your live streams

- REST API for easy integration into custom products and web sites

all managed by our [bintu dashboard and API](bintu_api.md)  
 
nanoStream Cloud is available worldwide with server locations in US East/West, Europe, Asia, Australia, etc. 
The system is operating 24/7 for instant live streaming. 
Expected default latency end-to-end (glass-to-glass) is around 1 second. 

The service can be integrated into custom workflows with our white-label B2B platform.
We created the infrastructure and network based on our unique H5Live technology for ultra-low-latency (ULL) live streaming. 
All URLs are automatically geo-loadbalanced worldwide with automatic failover enabled. 
The system is operating 24/7 for instant live streaming worldwide. 
Fine-tuned configuration and custom configurations are available dependent on our business agreement.

## Live Encoding
Live encoding/ingest is supported with:

- ingest with your own **H264/AAC/RTMP Live Encoders** (e.g. OBS, Wirecast, Hardware Encoders)
- ingest with plugin-free web based **nanoStream Webcaster** broadcaster incl. screen sharing
- ingest with our **nanoStream Apps/SDKs** (nanoStream Apps for Win/Mac/iOS/Android),
- other formats like RTSP, SRT available upon request

## Live Playback with H5Live
Live Playback is supported with our unique H5Live player. The same player code runs on all browsers.
The player code can easily be embedded on your own web page with a code snippet shown on the player page,
or managed by our Javascript API.

## bintu.live Stream Management Dashboard and API
Stream Management is done with our bintu dashboard and API. 
You will obtain and manage geo-loadbalanced URLs to enable global scale.

## Adaptive Bitrate Playback (ABR) and Live Transcoding
Adaptive Bitrate enables live distribution and playback with different quality levels,
based on the viewer's network conditions. The player decides automatically which quality level to use.

## Metrics and Analytics
To get full insight about your quality of service, we created a metrics and analytics system. See separate documentation.

## New: nanoStream Guardian
nanoStream Guardian is a new service integrated into the nanoStream Cloud which allow you to **block specific IP addresses, referrers, and even entire CIDR masks from accessing your streams**.

By including the nanoStream Guardian in your workflow, you can effectively **prevent unauthorized access and illegal replication of your streams, ensuring that only legitimate viewers can watch your content**.

# Getting Started

It is very simple to create and run a stream.

First, create a stream from the bintu dashboard or REST API:
https://bintu.nanocosmos.de/stream/create

The create process is immediate and there is no limit in generating new streams, so you can instantly go live. 
You can keep the existing stream for new sessions, or create new streams any time.

- Copy the "Ingest" URL and Stream Name to your Live Encoder.

- Start Streaming!

When you start your encoder, the stream is sent to nanoStream Cloud and the stream state in bintu dashboard and API changes from "created" to "live".

With our ready-to-run Webcaster, you do not even need to create a stream, everything is instant.

## Live Playback with a Web Playout (nanoStream H5Live Player):

View from the dashboard / API: https://bintu.nanocosmos.de/stream/
The bintu dashboard or API shows a Web URL with H5Live Player which can be used to playback the live stream with ultra-low-latency on all HTML5 browsers, including Safari on iOS. Note: H5Live does not use WebRTC for delivery and playback, but a combination of HTML5 technologies like Websockets and Low Latency HLS.

The player can easily be embedded on your own web page with a code snippet shown on the player page. 


## Further Information

Check out our video tutorials and our blog!

For any further questions, use our technical support: https://www.nanocosmos.de/support


![live streaming Schema.png](https://www.nanocosmos.de/v6/images/nanoStreamCloud-Schema20-1.png)

---
id: live-recording-vod
title: Live Recording and VOD
sidebar_label: Live Recording and VOD
---

Live Recording and VOD can be enabled for your account.

If enabled, by default all incoming streams will be recorded for later 
playback (video on demand, VOD).
There will be a different ingest you can choose to either record the stream or
do a live stream without recording:

default ingest URL without recording, live only:

rtmp://bintu-stream.nanocosmos.de/live/STREAM

ingest URL with live recording:

rtmp://bintu-stream.nanocosmos.de/rec/STREAM

The bintu system saves the recording in different world regions,
based on their ingest location.

We have these regional storages available

-eu- Europe and default
-us- North America
-au- Australia/Oceania

As en example, if your ingest was in EU, you will get this playback URL:

https://bintu-vod-eu.nanocosmos.de/XXXXX/XXXXX-12345.mp4

for North America:

https://bintu-vod-us.nanocosmos.de/XXXXX/XXXXX-12345.mp4

for Australia:

https://bintu-vod-au.nanocosmos.de/XXXXX/XXXXX-12345.mp4

You might need to replace your default URL with the region, here -au-

---
id: support
title: Support
sidebar_label: Support
---

## Support Options

If you experience any issues or have questions, there are certain ways to do some diagnostics on your end. 
If you do not find a solution, please create a [support ticket](https://www.nanocosmos.de/support)

To check your network connectivity, please read our [network diagnostics](../network-diagnostics) information page.

### Live Stream Information

A live stream in nanoStream Cloud is identified by either a bintu stream ID or stream name. 
For any issues you report to us, please add

- the stream name and ID
- your live camera and encoder configuration
- your player page or a link to our demo player
- the time of the issue, UTC time, and if it happens frequently
- your geo location of live encoding and playback
- the result of the [network diagnostics](../network-diagnostics)

### Additional information for player issues

- Does the issue happen on all of your test streams and sessions?
- Please check your live encoder configuration: try lower bitrate and keyframe distance 2s

### Test Player

You can use our demo/test player for verifying your playback.

Example URL:

https://demo1.nanocosmos.de/nanoplayer/release/nanoplayer.html?h5live.server=bintu-play.nanocosmos.de&h5live.rtmp.url=rtmp://localhost/play&h5live.rtmp.streamname=XXXXX-YYYYY

Replace `XXXXX-YYYYY` with your bintu stream name.

You can also predefine a specific geo location for playback.
Replace h5live.server=bintu-play.nanocosmos.de
with one of the locations mentioned below.

Example playback from US East:

https://demo1.nanocosmos.de/nanoplayer/release/nanoplayer.html?h5live.server=bintu-play-use.nanocosmos.de&h5live.rtmp.url=rtmp://localhost/play&h5live.rtmp.streamname=XXXXX-YYYYY

### Geo Locations

By default, the URLs you get from our system are load-balanced between different geo locations. This means you will land on different servers close to your location.

You can override the geo location detection for both encoding/ingest and playback.

**In general overriding the default URL is not required and most of the time not recommended.**

## nanoStream Cloud Public URLs

### Standard URLs, geo-loadbalanced:

Playback: bintu-play.nanocosmos.de

Ingest: bintu-stream.nanocosmos.de

### Geo Region Override

#### bintu-play from EU

bintu-play-eu.nanocosmos.de

#### bintu-stream (ingest) from EU:

bintu-stream-eu.nanocosmos.de

#### bintu-play from US East

bintu-play-use.nanocosmos.de

#### bintu-stream (ingest) from US East:

bintu-stream-use.nanocosmos.de

#### bintu-play from US West

bintu-play-usw.nanocosmos.de

#### bintu-stream (ingest) from US West:

bintu-stream-usw.nanocosmos.de

#### bintu-play from Asia South

bintu-play-ass.nanocosmos.de

#### bintu-stream (ingest) from Asia South:

bintu-stream-ass.nanocosmos.de

#### bintu-play from Australia

bintu-play-au.nanocosmos.de

#### bintu-stream (ingest) from Australia

bintu-stream-au.nanocosmos.de

### Primary host URLs

If you need to test with specific hosts, please contact us.
Primary host URLs will only be shared on request.

### Additional Help

There are other secondary regions like South America, Turkey, Japan, Hongkong.

Please [create a support ticket](https://www.nanocosmos.de/support) for additional help.


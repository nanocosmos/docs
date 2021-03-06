---
id: faq_streaming
title: FAQ nanoStream Live Streaming
sidebar_label: Live Streaming
---


<details><summary><strong>What is nanoStream Cloud?</strong></summary>

nanoStream Cloud is a combination of software and services to enable interactive live streaming Live at a global scale.

You can connect a live source (camera) to a live encoder, and send your stream to nanoStream Cloud
nanoStream H5Live Player then works on all browsers to play this live stream with ultra-low-latency.

nanoStream Cloud provides a global CDN to ingest and playback your live streams with high quality anywhere in the world.

Easy to use dashboards, code snippets and APIs enable easy integration into custom applications.


</details>

<details><summary><strong>What is ultra low latency live streaming?</strong></summary>

Live streaming latency is the time between the video leaves the camera and shown on the player device.
Ultra-low-latency live streaming means near-realtime latency values of around 1 seconds.

nanoStream Cloud supports ultra-low latency live streaming, on any HTML5 browser with a global scale.

ULL Live Streaming enables interactive applications for audience engagement.

> **NOTES** 
> - End-to-end latency is dependent on all components in the workflow: capture, live encoder, upstream, server/cloud, downstream, player.
> - Latency is primarily based on stream buffers and streaming protocols used. Buffers can happen on all parts of a stream, encoder, streamer, server, CDN and player.
> - [nanoStream H5Live player](http://nanocosmos.de/h5live) (nanoPlayer), part of nanoStream Cloud, can be used for browser-based low latency playback on any device.
> - [nanoStream Webcaster](http://nanocosmos.de/webrtc) broadcaster part of nanoStream Cloud can be used for plugin-free, browser-based low latency broadcast (live encoding).

</details>

<details><summary><strong>Which Systems (OS) do you support?</strong></summary>

All existing major browsers and platforms are supported which support H264/AAC live playback.

</details>

<details><summary><strong>Which video, audio and streaming formats does nanoStream support (H264, RTMP, RTSP, ...) ?</strong></summary>

**nanocosmos supports the following Streaming formats:**

*** Ingest/Upstream from Live Sources:

- RTMP with H264 Video and AAC Audio (nanoStream Apps/SDKs or 3rd party software/hardware)
- nanoStream Webcaster (browser based)
- Other formats upon request, e.g. SRT, RTSP, H265, VP9

*** Playback/Downstream:

- H5Live (unique live streaming with ultra-low-latencyy on all browsers)
- HLS (ultra-low latency based on H5Live)
- RTMP

For plugin-free operation and mobile devices, the built-in hardware codecs are supported (H264 Video, AAC Audio).

</details>

<details><summary><strong>How to use RTMP for Live Encoding from your Application or Server?</strong></summary>

RTMP is still a valid and suitable format for live encoding and broadcast from your camera source, used by most live streaming platforms. 
Most Live Encoder software, hardware and servers support RTMP.
For ULL Live Streaming, certain configurations are recommended, like [OBS](https://www.nanocosmos.de/blog/2020/01/how-to-use-obs-as-a-live-encoder-for-your-nanostream/).

### RTMP URL Structure
RTMP is based on the following URL format:

```
rtmp://servername:port/application/streamname
```
The port is optional and `1935` by default.

Example to stream to nanoStream Cloud:
```
rtmp:/bintu-stream.nanocosmos.de/live/XXXX-YYYY
```
The “rtmp application” is “live”, the “stream name” is XXXX-YYYY

Sometimes the RTMP URL is split into the base URL and the stream name like this:
```
URL: rtmp:/bintu-stream.nanocosmos.de/live
Stream Name: XXXX-YYYY
```
With nanoStream Cloud, you get this information with the bintu API or dashboard (https://bintu.nanocosmos.de).

Some software and server applications require a username and password. This rtmp-specific proprietary information is not support by nanoStream Cloud. By default, you do not need username and password. For adding security, you can use web hooks and tokens. See separate docs.

-----
### Playback

Playback from nanoStream Cloud with Ultra-Low-Latency require the nanoStream H5Live Player (nanoPlayer).
It automatically selects the right playback format and protocol for your browser and device.
Certain apps and settop-boxes which do not support Javascript can also use our fallback URLs, please contact us for details.

</details>

<details><summary><strong>Resolution and bitrate settings</strong></summary>

The primary quality impact is done by the pixel resolution (e.g. `1280×720`) and the video encoder bitrate.

> **NOTE:** 
> - Video Encoding Quality is very much dependent on the content! Static content with little movement and structure is much better to compress than moving content.
> - Mobile networks have limited bandwidth and usually lead to a quality impact of a stream. If you set a high bitrate which cannot be delivered through the network, you will get buffering impacts.
> - For live streams, a constant pixel resolution is required, as most streaming and playback environments do not support changing resolutions.

The choice of the resolution and bitrate is highly dependent on your requirements and expected quality results. There are different options to choose from, you can always adjust settings according to your needs.

It is highly recommended to run your own tests based on typical content, and approve by your own quality expectations.

**Here is some general information:**

- Standard resolutions: `640×480 (4:3)` or `640×360 (16:9)`, up to `720×576 (4:3)`. <br> *Recommended bitrate:* min. `300-500 kBits/s` for medium quality, `1000 kBit/s` for high quality
- HD resolution: `1280×720 (=720p)`. <br>*Recommended bitrates:* `600-1000 kBits/s` for low/medium quality,  `1000-2000 kBits/s` for high quality
- Full HD: `1920×1080`,  `2-3 MBit/s` and higher
- 4K: up to `3820×2048`, min `6 MBit/s`
- you should configure the camera in the max. resolution you would like to use for streaming
- it never makes sense to up-scale video
- Full HD takes a lot CPU and bandwidth
- for live streaming HD `720` is probably preferrable to `1080`

*Also see the recommendations by Apple, Youtube, Vimeo and Adobe*
- [Apple](https://developer.apple.com/library/ios/technotes/tn2224/_index.html) 
- [Youtube](http://support.google.com/youtube/bin/answer.py?hl=en&answer=1722171) 
- [Vimeo](http://vimeo.com/help/compression) 
- [Adobe](http://www.adobe.com/devnet/adobe-media-server/articles/dynstream_live/popup.html)

-----

### Data Traffic
Data traffic usage is dependent on the overall bitrate sent from the encoder, plus the bitrate received for every viewer. Total traffic usage can be calculated per hour from the bitrate: `bitrate/s * 3600 / 8 = x bytes/h`

**Examples**

*500 kBits/s:*  `500 * 3600 / 8 = 225 MB / hour`

*1000 kBits/s:* `1000 * 3600 / 8 = 450 MB / hour`
</details>

<details><summary><strong>Can I Stream to a mobile phone or tablet pc - including iphone or ipad??</strong></summary>

Streaming to Mobile Devices is simple with nanoStream.

iOS requires `H.264` video and `AAC` audio, which is used by default in nanoStream.

### ENCODER SETTINGS
Video and Audio format should be `H.264` and `AAC`.

Video Encoding Profile can either “`Baseline`”, “`Main`” or “`High`”, dependent on the playback device support.

“`Baseline`” profile may lead to slightly lower latency values (max 500ms)

### OUTPUT STREAMING URL
#### H5Live
The unique nanoStream h5Live player supports live playback with ultra-low-latency on all HTML5 browsers. Live Playback in iOS devices requires `HLS` support (“HTTP Live Streaming”).

#### RTMP
Encoder URL: Live URL + Stream Name:

`rtmp://<server>:1935/live/streamname` 

See additional documentation about nanoStream Cloud and H5Live Server and Player.
</details>

<details><summary><strong>Can I Stream or record to a CDN?</strong></summary>

nanoStream Cloud can be used as a low-latency CDN for your interactive live streams. With nanoStream Cloud, you can additionally push to other RTMP publishing points (Youtube Live, Facebook Live, and more.)
</details>

<details><summary><strong>Can I record a video file locally or on the server?</strong></summary>

Yes, you can either record to a file instead of streaming to a server or stream and record simultaneously. Supported file formats depend on the platform you are working. Usually `MP4` is supported and recommended on all platforms.

<details><summary><strong>Does the software automatically adjust the Bitrate - Adaptive Bitrate?</strong></summary>

Yes! nanoPlayer now supports Adaptive Bitrate Playback (ABR).

</details>

<details><summary><strong>Can I add meta data to the live Stream?</strong></summary>

Yes, if you publish RTMP Meta Data, it will be passed through to nanoPlayer.

</details>

<details><summary><strong>Can I Stream only Audio?</strong></summary>
Yes, that is possible.

</details>

<details><summary><strong>Is screen capture available in your product?</strong></summary>

Yes, with nanoStream Webcaster and nanoMeet.

</details>

<details><summary><strong>Do you offer hardware accelerated encoding or decoding?</strong></summary>

nanoPlayer automatically uses the browser-based builtin codec for playback, which is usally hardware accelerated

</details>

<details><summary><strong>Can I automatically or manually check the available bandwidth?</strong></summary>

A bandwidth check function is available on Desktop and Mobile platforms.

There are different modes available:

- static bandwidth check before streaming
- dynamic bandwidth check during streaming (adaptive bitrate)

</details>

<details><summary><strong>Is your product compatible with Flash?</strong></summary>

Flash is an outdated technology.

nanoStream is compatible with the `RTMP streaming protocol`, which is independent from Flash.

>With `H5Live`, you can go completely plugin-free on all devices without using Flash.
</details>

<details><summary><strong>Do you offer WebM or Vp8 encoding?</strong></summary>

Some nanoStream platforms also support `VP8`, `VP9` and other codecs.
nanoStream Webcaster supports `VP8`, `VP9` and `H.264`.

Please contact us for details.

</details>

<details><summary><strong>What is Multiplexing?</strong></summary>

For Video/Audio Encoding and Streaming, Multiplexing means combining the Video and Audio data into a common container or stream. There are several multiplexing standards available, dependent on the application and system environment.

### Example Multiplexing Standards:

**File Formats:**

- `MPEG TS` (transport stream) - used for broadcast and streaming
- `MPEG PS` (program stream) - used for local storage and DVD
- `MP4` (ISO File Format)

**Streaming Formats:**

- `RTMP` (Realtime Message Protocol)
- `RTP` (Realtime Protocol)

> See also [the wikipedia article](http://en.wikipedia.org/wiki/Multiplexing#Video_processing)

</details>

<details><summary><strong>Why do I get a lower bitrate then specified?
</strong></summary>

A live encoder queries the camera device for the supported resolutions, framerates and colorspaces. If the camera reports the values, which it actually supports, the plugin would choose a supported capture mode of the camera. The resulting bitrate should be equal to the specified bitrate.

But, if the camera reports, that it is capable of delivering e.g. `30 frames` for a resolution of `640×480`, the plugin assumes that the camera will send `30 frames`. If the actual frame rate is then lower (e.g. `15 fps`) the bitrate will be the half of the specified bitrate.

That is to keep the quality specified by the user. Another reason for a lower bitrate is, that the lower framerate could be a cause of high cpu load or a low bandwidth. If the plugin would adjust the bitrate in this case, the framerate would be even lower in the process, which in turn would lead the plugin to increase the bitrate again, which in turn would lower the framerate, etc.

>Also keep in mind that the lighting conditions can have a huge effect on the frame rate of the >camera. We have several webcams delivering only half of the frame rate, if it is too dark.

</details>

<details><summary><strong>How do I set a Stream name?</strong></summary>

RTMP Streams:

example url:
```
rtmp://localhost/live/myStream
```
"myStream" represents the stream name.


<details><summary><strong>Firewall configuration</strong></summary>

Firewalls are sometimes sensitive to streaming protocols.
Here is some general advice, please contact us for details.

>**H5Live Playback**<br>
>H5Live playback is connected over https, port `443`, or http, ports `8180` and `8181`
>
>**Mp4 File Playback**<br>
>MP4 File playback is connected over https, port `443`, or http, port `8080`
>
>**RTMP Playback and Ingest**<br>
>RTMP is using ports `1935` or `80`
>
>**WebRTC**<br>
>WebRTC is using ports `https/443` for API calls, port `80` for turn (udp and tcp), and ports `40000-50000` over UDP.
</details

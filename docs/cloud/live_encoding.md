---
id: live_encoding
title: Live Encoding
sidebar_label: Live Encoding
---

# Live Encoding 

## What is Live Encoding ?

Live Encoding is done directly behind the live source (camera or screen).
A Live Encoder is either a software or hardware which converts the 
camera video to a compressed live stream, to send it to the cloud (ingest).
A Live Encoder requires codec and stream configuration. 

## Live Encoding Options

The following Live Encoding Options are possible:

nanoStream Webcaster:

-  for direct webcast from the browser (based on WebRTC)
-  supported for web cams and screen casts

Live Encoder Software:

- OBS Broadcaster Software, Wirecast, VMix, ffmpeg

Live Encoder Hardware:

- JVC Connected Camera, Videon, Teradek, and others

For getting started and tutorials, please see our [blog](https://www.nanocosmos.de/blog/2020/01/how-to-use-obs-as-a-live-encoder-for-your-nanostream/) and [videos](https://www.nanocosmos.de/blog/videos)!

### Supported formats

nanoStream Webcaster: 

- Video Codec: H264, VP9
- Audio Codec: Opus

Encoder Software/Hardware:

- Video Codec: H.264
- Audio Codec: AAC
- Stream Format: RTMP

Other formats like RTSP or SRT are available on request.

Important note: \
RTMP encoders/broadcasters are required to send proper RTMP configuration metadata (onMetaData) during the start of the ingest. 

### Values/fields

#### If a video stream is present 

- videocodecid ('avc1')
- width (640)
- height (480) 

#### If an audio stream is present 

- audiocodecid ('mp4a')
- audiosamplerate (44100) 

#### Further recommended 

- hasVideo [0 or 1]
- hasAudio [0 or 1] to indicate the present streams and
- framerate (30)
- audiochannels (2)

## Encoder Configuration

### Resolution and bitrate settings

The quality is primarily influenced by the pixel resolution (e.g. 1280x720)
and the video encoder bitrate (e.g. 500 kBits/s).

**Notes**:

- Video Encoding Quality is very much dependent on the content! Static content with little movement and structure is much better to compress than moving content.
- Mobile networks have limited bandwidth and usually lead to a quality impact of a stream. If you set a high bitrate for your stream, which cannot be delivered through the network, your clients will experience buffering and stream freezes during the playback.
- For live streams, a constant pixel resolution is required, as most streaming and playback environments do not support changing resolutions while streaming.

The choice of the resolution and bitrate is highly dependent on your requirements and expected quality results.
There are different options to choose from, you can always adjust settings according to your needs.

It is highly recommended to run your own tests based on typical content, and approve by your own quality expectations.

### General recommendations

nanoStream Cloud works with a wide range of live encoder configurations.
There is some general advice for low latency:

- Frame rate is recommended to use 25 or 30 fps, not 60
- Encoder GOP Size should be 2 seconds (=50 / 60 frames for 25/30 fps)
- Bitrate should be rather low than too high (see below)
- you should configure the camera with the max. resolution you would like to use for streaming, not higher (e.g. if you stream with 720p, also configure your camera with 720p, not higher)
- it never makes sense to up-scale video (e.g. do not scale from 720 to 1080)
- Full HD takes a lot CPU and bandwidth
- for live streaming HD 720 is probably preferrable to 1080

#### Standard Resolutions 

-  640x480 (4:3) 
-  640x360 (16:9)
-  240p (424x240)
-  360p (640x360)
-  432p (768x432)
-  480p (848x480)
-  576p (720x576 or 1024x576, "SD")
-  720p (1280x720, "HD")
-  1080p (1920x1080, "Full HD")

#### Recommended bitrates

**up to 720x576**

- min. 300-500 kBits/s for medium quality
- 1000 kBit/s or higher for high quality

**HD resolution: 1280x720 (=720p)**

- 600-1000 kBits/s for low/medium quality
- 1000-2000 kBits/s or higher for high quality

**Full HD: 1920x1080**

- 2-3 MBit/s and higher

**4K**

- up to 3820x2048, min 6 MBit/s


### Encoding for low bandwidth or bad networks

If you expect to have audiences in bad network environments, we suggest to reduce
the bitrate to far below 1 MBit/s (1000 kBits/s), for example 500 kBits/s.

## Stream Configuration

The default stream format for sending a live stream to nanoStream Cloud
is the RTMP Format.
Most Live Encoders support RTMP.
With nanoStream Cloud, you get a rtmp ingest URL from the bintu dashboard or API.
This ingest URL needs to be put to the Live Encoder.

## Data Traffic

Data traffic usage is dependent on the overall bitrate sent from the encoder, plus the bitrate received for every viewer.
Total traffic usage can be calculated per hour from the bitrate:
bitrate/s * 3600 / 8 =  bytes/h

Examples

500 kBits/s:
500 * 3600 / 8 = 225 MB / hour

1000 kBits/s:
1000 * 3600 / 8 = 450 MB / hour


## Adaptive Bitrate / Multi-Bitrate Live Streaming

To adjust to network conditions, certain adaptive bitrate (ABR) configurations are available.

- Dynamic Upstream (single bitrate): automatic adjustment of live encoder bitrate (dependent on your live encoder)

- Multiple Bitrates (MBR)
  To support multiple video quality levels, you can send multiple streams in multiple bitrates. Example: 1 HD 2 Mbits/s, 1 Lowres 500 kBits/s. You can send your own MBR stream or use our live transcoding service.

- Downstream: [ABR Playback](../nanoplayer/nanoplayer_feature_stream_switching.md): automatic adjustment of the quality on the player

For ABR Playback, several live streams need to be running at the same time with different quality levels. These streams can either be created on the encoder side or on the server side by live transcoding, based on one incoming stream.

### Additional info

Also see the recommendations by Apple, Youtube, Vimeo and Adobe:

- https://developer.apple.com/library/ios/technotes/tn2224/_index.html
- http://support.google.com/youtube/bin/answer.py?hl=en&answer=1722171
- http://vimeo.com/help/compression
- http://www.adobe.com/devnet/adobe-media-server/articles/dynstream_live/popup.html


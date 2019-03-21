---
id: directshow_avc_h264
title: DirectShow AVC H264 Codec
sidebar_label: directshow_avc_h264
---

## AVC/H.264 Video Codec / SDK

### High Quality and High Performance Video Coding

nanocosmos AVC/H.264 video codec is a high performance video codec for the latest generation `MPEG-AVC / H.264` video coding standards. It may be licensed by Professional and OEM customers for integration into custom applications.

#### Major Features

  * Most advanced video coding standard `H.264 (MPEG-AVC)`
  * Highly optimized software coding with support for latest CPU generations (Multicore / Core i7)
  * Wide range of applications from Mobile Phones (3GP), Portable Devices (iPod etc.) up to HDTV
  * Full HD `1080i` and `1080p `support
  * X-HD support for Custom Applications (Dome Cinema, Projections), up to `2k/4k` (4096 x 4096)
  * Support for realtime Full HD 1080 encoding and decoding of `dual channel video` (stereo video / 3d)
  * Baseline Profile, Main Profile and HDTV modes supported
  * Compatible to `ISO Mp4` and `Flash Media Streaming Server` and `Wowza`


#### Architecture and Availability

The Codec is available for Windows platforms based on DirectShow filters. For MacOS and Linux, custom based solutions are available.



#### Components

  * AVC/H.264 Video Encoder and Decoder, MP4 splitter and multiplexer
  * MPEG audio and AAC audio codecs.
  * MP4, 3GP and optionally Quicktime and AVI file format writers


#### Licensing model

We offer several licensing models, dependent on customer requirements.

  * Developer License (SDK):  With the Developer License, you will get a documented SDK including shared library objects (DLLs), interface specifications, header files and source code samples to develop video coding applications.
  * Redistribution License (Royalties):  For redistributing video coding modules with your application, a per-item additional royalty license is needed. You may also get flat fees for high sales volumes. Please contact us for further information.
  * Customization and flat fees are possible

#### H.264 / AVC Video Encoder

The Video Encoder produces compatible streams according to `ITU H.264 / ISO MPEG/AVC Reference `Model JM9.2`, as well as MP4 file format output.

Dual channel encoding for stereo video is supported.

The encoder accepts the following parameters:
  * GOP Structure (I-frame distance / P-frame distance)
  * Bit rate
  * Profile/Level (baseline, main, extended, high)
  * Field Structure (Interlaced/Progressive)
  * Frame rate (15, 24, 25, 30, 50, 60)
  * chroma_format / aux_format (monochrome, 4:2:0)
  * misc. rate controls (fixed quantization, vbr, cbr)
  * Motion Estimation method
  * full pel, half pel and quarter pel motion vectors
  * SVC chroma deblocking filter mode
  * transform_8x8_mode
  * Frame Size from Mobile to HDTV (64x64 to 4096x2048)

#### H.264/AVC Video Decoder

The decoder supports decoding of files created by `JM9.2` compliant encoders or later, as well as MP4 file format input. The decoder supports baseline, main, extended and high profiles features, including HD, e.g. 1080i.

#### Audio, Multiplexer and File Formats

  * Elementary Files, MP4 file format, 3GP file format, Quicktime
  * RTMP streaming for Flash compatible streaming servers
  * MPEG audio and AAC formats are available.

#### Other codec types 

Ask for special configurations and custom codec development, e.g. for `IMX`, `DVCPRO-HD XDCAM`.

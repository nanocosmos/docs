---
id: nanostream_directshow_h264
title: H264
sidebar_label: H264
---

## AVC/H.264 Video Codec / SDK

### High Quality and High Performance Video Coding

nanocosmos AVC/H.264 video codec is a high performance video codec for the latest generation `MPEG-AVC / H.264` video coding standards. It may be licensed by Professional and OEM customers for integration into custom applications.

### Major Features

  * Most advanced video coding standard `H.264 (MPEG-AVC)`
  * Highly optimized software coding with support for latest CPU generations (Multicore / Core i7)
  * Wide range of applications from Mobile Phones (3GP), Portable Devices (iPod etc.) up to HDTV
  * Full HD `1080i` and `1080p `support
  * X-HD support for Custom Applications (Dome Cinema, Projections), up to `2k/4k` (4096 x 4096)
  * Support for realtime Full HD 1080 encoding and decoding of `dual channel video` (stereo video / 3d)
  * Baseline Profile, Main Profile and HDTV modes supported
  * Compatible to `ISO Mp4` and `Flash Media Streaming Server` and `Wowza`


### Architecture and Availability

The Codec is available for Windows platforms based on DirectShow filters. For MacOS and Linux, custom based solutions are available.



### Components

  * AVC/H.264 Video Encoder and Decoder, MP4 splitter and multiplexer
  * MPEG audio and AAC audio codecs.
  * MP4, 3GP and optionally Quicktime and AVI file format writers


### Licensing model

We offer several licensing models, dependent on customer requirements.

  * Developer License (SDK):  With the Developer License, you will get a documented SDK including shared library objects (DLLs), interface specifications, header files and source code samples to develop video coding applications.
  * Redistribution License (Royalties):  For redistributing video coding modules with your application, a per-item additional royalty license is needed. You may also get flat fees for high sales volumes. Please contact us for further information.
  * Customization and flat fees are possible

### H.264 / AVC Video Encoder

The Video Encoder produces compatible streams according to `ITU H.264 / ISO MPEG/AVC Reference Model JM9.2`, as well as MP4 file format output.

Dual channel encoding for stereo video is supported.

The encoder accepts the following parameters:
  * GOP Structure (I-frame distance / P-frame distance)
  * Bit rate
  * Profile/Level (baseline, main, extended, high)
  * Field Structure (Interlaced/Progressive)
  * Frame rate (`15`, `24`, `25`, `30`, `50`, `60`)
  * chroma_format / aux_format `(monochrome`, `4:2:0`)
  * misc. rate controls (fixed quantization, vbr, cbr)
  * Motion Estimation method
  * full pel, half pel and quarter pel motion vectors
  * SVC chroma deblocking filter mode
  * transform_8x8_mode
  * Frame Size from Mobile to HDTV (`64x64` to `4096x2048`)

### H.264/AVC Video Decoder

The decoder supports decoding of files created by `JM9.2` compliant encoders or later, as well as MP4 file format input. The decoder supports baseline, main, extended and high profiles features, including HD, e.g. 1080i.

### Audio, Multiplexer and File Formats

  * Elementary Files, MP4 file format, 3GP file format, Quicktime
  * RTMP streaming for Flash compatible streaming servers
  * MPEG audio and AAC formats are available.

### Other codec types 

Ask for special configurations and custom codec development, e.g. for `IMX`, `DVCPRO-HD XDCAM`.

-----


## nanoAVC/H.264 DirectShow Decoding SDK

### Introduction

nanoAVC/H.264 Direct Show Decoding SDK enables you to decode/play back
AVC/H.264 video and AAC audio from MP4/3GP or transport stream (TS) sources
within Windows Media Player and custom applications based on Microsoft DirectShow Framework.

The nanocosmos H.264/AVC Video Decoder supports streams in baseline, main and high profile. It is highly optimized for use on hyper-threading and multi core systems.

### Filter components

  * nanocosmos AVC/H.264 Video Decoder
    * Module:		nh264dec.ax
    * CLSID:		{264DA7DD-CE74-472D-A2FD-796A1F0A379C}


  * nanocosmos AAC Audio Decoder
    * Module:		naacdec.ax
    * CLSID:		{AEED2B3D-6DA1-4C84-A85D-83547FA90486}


  * nanocosmos MP4 Stream Splitter
    * Module:		nmp4splitter.ax
    * CLSID:		{22F493C4-B51B-4767-BE55-ADFA34D6A205}


  * nanocosmos MPEG PS/TS Stream Splitter
    * Module:		nmpegsplitter.ax
    * CLSID:		{0994D1E8-B697-47DE-B1E3-36D26937D5B4}



![Example playback filtergraph](img/directshow_h264_decoding_filtergraph.png)

Figure 1.  Example playback filtergraph

### Registering and unregistering components in the DirectShow framework

In order to use them, filters must be registered in the DirectShow framework. After installation all filters are registered. To re-register or unregister components, execute the RegisterFilters.bat or UnregisterFilters.bat batch files from the SDK/bin folder.

### Evaluation mode and filter activation

Filters can be activated by installing a license key to windows registry or programmatically by setting a license key through the software interface of a filter instance. How to set license keys to unlock filters is described in the module's documents.
If filters run in evaluation mode, an overlay logo will be shown on video.

### Embedding / Customizing nanocosmos technology 

Nanocosmos also offers special OEM and customization service. Dependent on your needs, we may offer different models of licensing or application development.

-----


## nanoAVC/H.264 DirectShow Encoding SDK

### Introduction

nanoAVC/H.264 Direct Show Encoding SDK enables you to perform high quality and high performance video coding for the latest generation video and audio coding standards. It is intended to develop  video encoding / transcoding applications based on Microsoft(R) DirectX/DirectShow(R) technology.

### Major Features

  * ISO 14496 Part 10 (MPEG-AVC) / ITU H.264 compliance for many profiles and levels
  * Encoding of H.264 video streams in Baseline, Main, Extended and High profile
  * Encoding of AAC-LC/LTP/MAIN/HE(aacPlus) audio streams with up to 6 channels
  * Encoding of AMR-NB audio streams
  * Highly optimized software coding with support for latest CPU  technology by Intel and AMD (SSE2/SSE3/SSE4 and Dual-Core/Core-Duo, AMD Athlon64
  * Real-time Encoding from Capture cards is supported
  * Wide range of applications from Mobile Phones (3GP), Portable Devices (iPod, iPhone, Sony PSP etc) up to Professional HDTV
  * Multiplexer for MP4, MOV and 3GP


### Documentation

The SDK\doc folder contains the following further documents:

  * H.264/AVC Video Decoder
  * H.264/AVC Video Encoder
  * AAC Audio Encoder
  * AMR-NB Audio Encoder
  * MP4/3GP Multiplexer

### Filter components

  * nanocosmos AVC/H.264 Video Encoder
    * Module:		nh264enc.ax
    * CLSID:		{A88889A8-3C2A-4A32-8EAA-755D491D02A0}


  * nanocosmos AAC Audio Encoder
    * Module:		naacenc.ax
    * CLSID:		{0296CC21-B78D-416D-846C-45E26CA46A4A}


  * nanocosmos AMR-NB Audio Encoder
    * Module:		namrnbenc.ax
    * CLSID:		{10CAB930-E019-41DF-83B7-60D723706B8F}


  * nanocosmos MP4 Multiplexer
    * Module:		nmp4mux.ax
    * CLSID:		{78D670BF-49B5-4A3B-BB8C-E2A36E688FCF}


  * nanocosmos File Dump Filter
    * Module:		nanodump.ax
    * CLSID:		{DA67A541-8FEA-11D4-A908-00105A6758CF}


  * nanocosmos AVC/H.264 Video Decoder
    * Module:		nh264dec.ax
    * CLSID:		{264DA7DD-CE74-472D-A2FD-796A1F0A379C}


  * nanocosmos AAC Audio Decoder
    * Module:		naacdec.ax
    * CLSID:		{AEED2B3D-6DA1-4C84-A85D-83547FA90486}


  * nanocosmos MP4 Stream Splitter
    * Module:		nmp4splitter.ax
    * CLSID:		{22F493C4-B51B-4767-BE55-ADFA34D6A205}


  * nanocosmos MPEG PS/TS Stream Splitter
    * Module:		nmpegsplitter.ax
    * CLSID:		{0994D1E8-B697-47DE-B1E3-36D26937D5B4}


  * nanocosmos Color Space Converter
    * Module:		ncolconv.ax
    * CLSID:		{E855821E-C055-4C85-B04F-19F65D5D50FD}


  * nanocosmos MPEG TS Writer
    * Module:		nanoTsWriter.ax
    * CLSID:		{2C6E92AB-523E-4C90-8A01-394FC0FC273C}


![Example filtergraph](img/directshow_h264_encoding_filtergraph.png)

Figure 1.  Example  filtergraph

### Registering and unregistering components in the DirectShow framework

In order to use them, filters must be registered in the DirectShow framework. After installation all filters are registered. To re-register or unregister components, execute the `RegisterFilters.bat` or `UnregisterFilters.bat` batch files from the SDK/bin folder.

### Evaluation mode and filter activation

Filters can be activated by installing a license key to windows registry or programmatically by setting a license key through the software interface of a filter instance. How to set license keys to unlock filters is described in the module's documents.
If filters run in evaluation mode, an overlay logo will be shown on video.

### Embedding / Customizing nanoPEG technology

Nanocosmos also offers special OEM and customization service. Dependent on your needs, we may offer different models of licensing or application development.

-----


## nanocosmos H.264 Video Decoder Filter

### Module / Version

nanocosmos H.264/AVC Direct Show Video Decoder Filter\\
`nh264dec.ax  Version 2.5.2.4`

The nanocosmos H.264/AVC Video Decoder support streams in baseline, main and high profile. It is highly optimized for use on hyper-threading and multi core systems.

### Connectivity

The input is accepting connections to splitter filters or combined source/splitter filters matching the following media types:

Major types:
  * MEDIATYPE_Video

Subtypes:
  * FourCCs:
    * H264, h264,
    * AVC1, avc1,
    * X264, x264,
    * VSSH, vssh,
    * MEDIASUBTYPE_H264: {8D2D71CB-243F-45E3-B2D8-5FD7967EC09B}

Formats:
  * FORMAT_VideoInfo,
  * FORMAT_VideoInfo2,
  * FORMAT_MPEG2_VIDEO

The output supports these media types:

Major types:
  * MEDIATYPE_Video

Subtypes:
  * MEDIASUBTYPE_YV12,
  * MEDIASUBTYPE_I420,
  * MEDIASUBTYPE_IYUV,
  * MEDIASUBTYPE_YUY2,
  * MEDIASUBTYPE_RGB24,
  * MEDIASUBTYPE_RGB32,
  * MEDIASUBTYPE_ARGB32,
  * MEDIASUBTYPE_RGB565,

Formats:
  * FORMAT_VideoInfo
  * FORMAT_VideoInfo2

### Filter GUIDs


```cpp
//%% Filter GUID
//%% {264DA7DD-CE74-472d-A2FD-796A1F0A379C}
DEFINE_GUID(CLSID_NANO_H264_DECODER, 0x264DA7DD, 0xCE74, 0x472d, 0xA2, 0xFD, 0x79, 0x6A, 0x1F, 0x0A, 0x37, 0x9C);

//%% Configuration interface ICodecProp
//%% {0F817204-82C8-4c12-884A-F45FB2F33A6E}
DEFINE_GUID(IID_ICodecProp, 0xf817204, 0x82c8, 0x4c12, 0x88, 0x4a, 0xf4, 0x5f, 0xb2, 0xf3, 0x3a, 0x6e);

//%% ICodecProp: IID_nanoPeg_LicenseString
//%% type: BSTR / Unicode string
//%% Set license string to unlock filter
//%% {1788F0B0-5985-4a19-B7FE-8AAC1BFC14B3}
DEFINE_GUID(IID_nanoPeg_LicenseString, 0x1788f0b0, 0x5985, 0x4a19, 0xb7, 0xfe, 0x8a, 0xac, 0x1b, 0xfc, 0x14, 0xb3);

```

### Setting the license to unlock filter

The filter can be unlocked either through a license key entry in the windows registry or
by setting the license key through COM interface ICodecProp::SetProperty with the
property **IID_nanoPeg_LicenseString** as first parameter. 

> The second license parameter has to be a wide/unicode string!

### Decoder Configuration Registry Settings

The decoder is able to perform an adaptive frame dropping and deblocking depending on the quality / delay messages received from the downstream renderer filter.

Key: 
```
HKEY_CURRENT_USER\Software\nanocosmos\nh264dec
```

#### Frame dropping / skipping mode

Determines the behaviour in the case of timing / performance problems.
  * Value name: 	`DroppingMode`
  * Value type: 	        `REG_DWORD`
  * Valid values:
    * `0` - no frames are skipped
    * `1` - skip non reference frames only (B-frames)
    * `2` - skip non intra frames only (P- and B-frames), __default value__

#### Deblocking mode

Determines the deblocking behaviour.
  * Value name: 	`DeblockingMode`
  * Value type:  	`REG_DWORD`
  * Valid values:
    * `0` - disable deblocking
    * `1` - auto, decoder will reduce deblocking temporarily in the case of performance problems, __default value__
    * `2` - always perform full deblocking
    * `3` - always perform deblocking on reference frames only

#### Output color space selection

Forces the filter to use a desired output color format. If no or no valid value is set, the output color format will be negotiated with the downstream renderer filter (usually YV12).
  * Value name: 	`ForceOutputFourCC`
  * Value type:         `REG_SZ / String`
  * Valid values:
    * `YV12`,
    * `I420`,
    * `IYUV`,
    * `YUY2`,
    * `RGB32`,
    * `RGB24`,
    * `RGB565`,
    * `ARGB32`

#### Deinterlacing Mode

Determines the deinterlacing behaviour.
  * Value name:        `DeinterlacingMode`
  * Value type:          `REG_DWORD`
  * Valid values:
    * `0` - disabled
    * `1` - duplicate, __default value__
    * `2` - blend
    * `3` - median
    * `4` - edge detection
    * `5` - median threshold
    * `6` - content adaptive vertical temporal

#### DirectShow Editing Services (DES) Return Mode

Receive returns HRESULT error values if Deliver fails. Needs to be enabled for DES.
  * Value name:        `DESReturnMode`
  * Value type:          `REG_DWORD`
  * Valid values:
    * `0` - disabled, __default value__
    * `1` - enabled

#### Threading Mode

Determines the threading behaviour. Auto detection or number of decoding threads.
  * Value name:        `DESReturnMode`
  * Value type:          `REG_DWORD`
  * Valid values:
    * `0` - auto detect number of `cpus`, `__default value__`
    * `1-8` - set number of decoding threads

#### Output resolution alignment

Determines the alignment of the output resolution,
to adjust it to multiples of this value.
  * Value name:        OutputAlignment
  * Value type:          `REG_DWORD`
  * Valid values:
    * `1-16`, `__default value:__ 4`

### Debug-Log Configuration Registry Settings

Key: 
```
HKEY_CURRENT_USER\Software\DebugNano\nh264dec.ax
```

#### File name

Sets the output file name. The folder must already exist.
  * Value name: 	`LogToFile`
  * Value type:  	`REG_SZ` / `String`
  * Valid values:	a valid output file name to enable file logging or an empty string

#### Logging level

A higher value increases the amount of logging messages sent, and messages get more detailed.
  * Value name: 	`TRACE`
  * Value type:  	`REG_DWORD`
  * Valid values:
    * `0` - minimal logging
    * …
    * `9` - maximal logging


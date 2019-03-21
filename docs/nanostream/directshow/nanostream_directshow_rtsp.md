---
id: nanostream_directshow_rtsp
title: RTSP
sidebar_label: RTSP
---

## nanocosmos RTSP Sink Filter

#### Module / Version

nanocosmos RTSP Sink
nRTSPSink.ax  Version 1.1.1.0

#### nanocosmos RTSP Sink

  * DirectShow filter for RTSP Streaming
  * Supported Architectures: Microsoft DirectShow, Windows XP, Vista, 7, Server
  * Supported Formats: H.264 + AAC

### DirectShow Connectivity

The input is accepting connections matching the following media types:
  * Major types:
    * MEDIATYPE_Video
  * Subtypes:
    * FourCCs: H264, h264
  * Formats:
    * FORMAT_MPEG2_VIDEO,
    * FORMAT_NONE

  * Major types:
    * MEDIATYPE_Audio
  * Subtypes:
    * MEDIASUBTYPE_AAC,  FourCC: 0x000000FF
  * Formats:
    * FORMAT_WaveFormatEx,
    * FORMAT_NONE

### Configuration

The filter configuration may be set by using either the property page or the COM Interface IRTSPSink and as declared in header file RTSPWriterOptions.h . The streaming url can be set by using standard DirectShow interface IFileSinkFilter .
```cpp
// Filter GUID
// {2ECDA33B-81FB-4467-96C9-BD53A9ED975F}
DEFINE_GUID(CLSID_NANO_RTSP_WRITER, 0x2ecda33b, 0x81fb, 0x4467, 0x96, 0xc9, 0xbd, 0x53, 0xa9, 0xed, 0x97, 0x5f);

// Property Page GUID
// {F387B72B-05AA-4016-8EC8-D6DA5DB36D23}
DEFINE_GUID(CLSID_NANO_RTSP_WRITER_PROPPAGE, 0xf387b72b, 0x5aa, 0x4016, 0x8e, 0xc8, 0xd6, 0xda, 0x5d, 0xb3, 0x6d, 0x23);

// Configuration Interface GUID
// IRTSPSink
// {F79C7B6E-E89E-415e-B3C7-A8E8BFA0278D}
DEFINE_GUID(IID_IRTSPSink, 0xf79c7b6e, 0xe89e, 0x415e, 0xb3, 0xc7, 0xa8, 0xe8, 0xbf, 0xa0, 0x27, 0x8d);
```

#### Configuration through DirectShow filter property page

The filter's property page offers a subset of parameters, containing the most important options.



![RTSP Network Writer Properties](img/directshow_rtsp_writer_properties.png)

URL format:
```
rtsp:%%//%%127.0.0.1:8554/streaming
```
```
rtsp:%%//%%[ IP:port ]/[ stream name]
```

#### Debug-Log Configuration Registry Settings

Key: 
```
HKEY_CURRENT_USER\Software\DebugNano\nRTSPSink.ax  
```

##### File name

Sets the output file name. The folder must already exist.
Value name: 	LogToFile
Value type: 	REG_SZ / String
Valid values:	a valid output file name to enable file logging or an empty string

##### Logging level

A higher value increases the amount of logging messages sent, and messages get more detailed. 
Value name: 	TRACE
Value type: 	REG_DWORD
Valid values:

  * 0 - minimal logging
  * …
  * 9 - maximal logging

-----


## nanocosmos RTSP Source Filter

#### Module / Version

nanocosmos RTSP Source 
nRTSPSource.ax  Version 1.2.1.0

#### nanocosmos RTSP Source 

DirectShow filter for RTSP Streaming
  * Supported Architectures: Microsoft DirectShow, Windows XP, Vista, 7, Server
  * Supported Formats: H.264 + AAC

#### DirectShow Connectivity

The output is accepting connections matching the following media types:

  * Major types:
    * MEDIATYPE_Video
  * Subtypes:
    * FourCCs: H264, h264
  * Formats:
    * FORMAT_MPEG2_VIDEO,
    * FORMAT_NONE

  * Major types:
    * MEDIATYPE_Audio
  * Subtypes:
    * MEDIASUBTYPE_AAC,  FourCC: 0x000000FF
  * Formats:
    * FORMAT_WaveFormatEx,
    * FORMAT_NONE

### Configuration

The filter configuration may be set by using either the property page or the COM Interface IRTSPSource and as declared in header file RTSPSourceOptions.h . The streaming url can be set by using standard DirectShow interface IFileSourceFilter .

```cpp
// Filter GUID
// {99709313-5825-42ab-82ED-A7AD88ACBF4A}
DEFINE_GUID(CLSID_NANO_RTSP_SOURCE, 0x99709313, 0x5825, 0x42ab, 0x82, 0xed, 0xa7, 0xad, 0x88, 0xac, 0xbf, 0x4a);

// Property Page GUID
// {D3BE0AA6-A8E2-45a8-9414-385FFD94B816}
DEFINE_GUID(CLSID_NANO_RTSP_SOURCE_PROPPAGE, 0xd3be0aa6, 0xa8e2, 0x45a8, 0x94, 0x14, 0x38, 0x5f, 0xfd, 0x94, 0xb8, 0x16);

// Configuration Interface GUID
// IRTSPSource interface
// {C39F308A-D27B-4c17-B01E-469F00248981}
DEFINE_GUID(IID_IRTSPSource, 0xc39f308a, 0xd27b, 0x4c17, 0xb0, 0x1e, 0x46, 0x9f, 0x0, 0x24, 0x89, 0x81);
```

#### Buffer statistics can be retrieved using IRTSPSourceBufferStats interface.

```cpp
// IRTSPSourceBufferStats interface
// {655D499B-C9E0-4134-9DC4-6431FEEB5EB0}
DEFINE_GUID(IID_IRTSPSourceBufferStats, 0x655d499b, 0xc9e0, 0x4134, 0x9d, 0xc4, 0x64, 0x31, 0xfe, 0xeb, 0x5e, 0xb0);
```

#### Use standard DirectShow interface ICodecAPI to get/set these parameters:

```cpp
// ICodecAPI GUID
// get/set receive timeout in seconds
// VARIANT_TYPE: VT_I4, VARIANT::intVal
// default value: 2
// {33759D2A-3B7D-45ac-A8BF-C2477915C03B}
DEFINE_GUID(PROPID_nanoRTSPSourceConnectionTimeout, 0x33759d2a, 0x3b7d, 0x45ac, 0xa8, 0xbf, 0xc2, 0x47, 0x79, 0x15, 0xc0, 0x3b);
```

#### Configuration through DirectShow filter property page

The filter's property page offers a subset of parameters, containing the most important options.
{{ :nanortsp_netsrcprop.png?nolink |}}
URL format:
```
rtsp:%%//%%127.0.0.1:8554/streaming
```
```
rtsp:%%//%% [ IP:port ]/[ stream name]
```

#### Debug-Log Configuration Registry Settings

Key: 
```
HKEY_CURRENT_USER\Software\DebugNano\ nRTSPSource.ax  
```

##### File name

Sets the output file name. The folder must already exist.
Value name: 	LogToFile
Value type: 	REG_SZ / String
Valid values:	a valid output file name to enable file logging or an empty string

##### Logging level

A higher value increases the amount of logging messages sent, and messages get more detailed. 
Value name: 	TRACE
Value type: 	REG_DWORD
Valid values:

  * 0 - minimal logging
  * …
  * 9 - maximal logging
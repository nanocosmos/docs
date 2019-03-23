---
id: nanostream_directshow_rtmp
title: RTMP
sidebar_label: RTMP
---

## nanocosmos RTMP Source Filter

### Introduction
  * DirectShow filter for RTMP Downstreaming / Playback
  * Supported Architectures: Microsoft DirectShow, Windows XP, Vista, 7, Server
  * Supported Formats: H.264 + AAC + MP3

### Module Name / Version

Module: `nRTMPSource.ax`
Version: `1.3.1.1`

### DirectShow Connectivity

The output pins are accepting connections matching the following media types:

  * Major types:
    * MEDIATYPE_Video
  * Subtypes:
    * FourCCs: H264, h264
  * Formats:
    * FORMAT_MPEG2_VIDEO,
    * FORMAT_NONE
  * Major types:
    * AAC: 	   MEDIATYPE_Audio
    * MP3:     MEDIATYPE_Audio
    * SPEEX: MEDIATYPE Ogg Stream
  * Subtypes:
    *  AAC:    MEDIASUBTYPE_AAC,  FourCC: 0x000000FF,
    * MP3:     MEDIASUBTYPE_MP3,  FourCC: 0x00000055
    * SPEEX:  MEDIASUBTYPE_None
  * Formats:
  * AAC, MP3: 	FORMAT_WaveFormatEx,
  * SPEEX: 	FORMAT_Speex

### Filter GUIDs

```cpp
// Filter GUID
// {440E11F2-FB35-4699-809B-157C390E9238}
DEFINE_GUID(CLSID_NANO_RTMP_SOURCE, 0x440e11f2, 0xfb35, 0x4699, 0x80, 0x9b, 0x15, 0x7c, 0x39, 0xe, 0x92, 0x38);

// Property Page GUID
// {7A05E2F3-9258-4952-920A-54F6AE6A0D66}
DEFINE_GUID(CLSID_NANO_RTMP_SOURCE_PROPPAGE, 0x7a05e2f3, 0x9258, 0x4952, 0x92, 0xa, 0x54, 0xf6, 0xae, 0x6a, 0xd, 0x66);
```

### Configuration through COM Interface

The streaming url can be set by using standard DirectShow interface IFileSourceFilter .

#### URL format

```
rtmp:%%//%% [ IP:port ]/[ application name]/[ stream name]/
```
> If no port is specified, standard rtmp port `1935` will be used.

Example:
```
rtmp:%%//%%127.0.0.1:1935/live/myStream
```

Following options can be set by using standard DirectShow interface ICodecAPI.
See DirectShow documentation for usage of ICodecAPI interface.

#### Connect to nanocosmos decoder filters only

Value Type:     Integer, Variant::intVal, VT_INT\\
Valid values:   yes: 1, no: 0 \\
GUID:

```cpp
// {FB5005A0-3231-4171-A218-A3A3431D7790}
DEFINE_GUID(PROPID_nanoSourceConnectToNanoDecodersOnly, 0xfb5005a0, 0x3231, 0x4171, 0xa2, 0x18, 0xa3, 0xa3, 0x43, 0x1d, 0x77, 0x90);
```


#### Buffering delay in milliseconds

Under low bandwidth conditions a higher value leads to smoother playback.

Value Type:     Integer, Variant::intVal, VT_INT\\
Valid values:   0...INT32_MAX\\
GUID:

```cpp
// {3641DC07-82CD-40b0-9293-DCBE25E0C274}
DEFINE_GUID(PROPID_nanoSourceBufferingDelay, 0x3641dc07, 0x82cd, 0x40b0, 0x92, 0x93, 0xdc, 0xbe, 0x25, 0xe0, 0xc2, 0x74);
```

#### Buffering mode

Use this GUID to configure the buffering mode\\
Value Type:     VT_I4 / VARIANT::intVal, get/set \\
Valid values:   0 - Fill buffer once on start, 1 - Refill buffer always if empty\\
Default value: 1\\

```cpp
// {AB91A1D9-6701-4133-8733-6EB3A20E9583}
DEFINE_GUID(PROPID_nanoSourceBufferingMode, 0xab91a1d9, 0x6701, 0x4133, 0x87, 0x33, 0x6e, 0xb3, 0xa2, 0xe, 0x95, 0x83);
```

#### Receive timeout in milliseconds

A stream is stopped if no data is present for this amount of time Overrides registry value ReceiveTimeout
Value Type:      Integer, Variant::intVal, VT_I4\\
Valid values:   1000...INT (1-30 seconds), default: 5000 (5 seconds)\\
GUID:

```cpp
// {767B756C-A55B-4fd9-88F8-159B338207ED}
DEFINE_GUID(PROPID_nanoRTMPReceiveTimeoutMs, 0x767b756c, 0xa55b, 0x4fd9, 0x88, 0xf8, 0x15, 0x9b, 0x33, 0x82, 0x7, 0xed);
```

#### Stream format detection timeout in milliseconds

The detection is stopped after this amount of time, even if less than 2 streams found Overrides registry value DetectStreamFormatTimeout
Value Type:     Integer, Variant::intVal, VT_I4\\
Valid values:   1000...INT32_MAX, default: 10000 (10 seconds)\\
GUID:
```cpp
// {7400166F-8140-4b81-8B3E-C97CB7D972DF}
DEFINE_GUID(PROPID_nanoRTMPDetectStreamFormatTimeoutMs, 0x7400166f, 0x8140, 0x4b81, 0x8b, 0x3e, 0xc9, 0x7c, 0xb7, 0xd9, 0x72, 0xdf);
```


#### Configuration through DirectShow filter property page

![RTMP Source Properties](/img/nanostream/directshow/directshow_rtmp_source_properties.png)


#### Configuration Registry Settings

Key: 
```
HKEY_CURRENT_USER\Software\nanocosmos\nRTMPSource
```

#### Receive timeout

A stream is stopped if no data is present for this this amount of time\\
Value name: 	DetectStreamFormatTimeout\\
Value type: 	REG_DWORD\\
Valid values:	1 second - 30 seconds, default: 5 seconds

#### Stream format detection mode

Determines if stream format settings are detected from the RTMP network stream or from registry preset values below.\\
Value name: 	DetectStreamFormatMode\\
Value type: 	REG_DWORD\\
Valid values:	0: Detect from stream (default), 1: Use registry preset\\

#### Stream format detection timeout

Timeout for format detection in seconds\\
Value name: 	DetectStreamFormatTimeout\\
Value type: 	REG_DWORD\\
Valid values:	1 second - 30 seconds, default: 10 seconds

#### Audio Codec

Sets the audio codec if DetectStreamFormatMode = 1.\\
Value name: 	AudioCodec\\
Value type: 	REG_DWORD\\
Valid values:	0: Auto/Default(AAC), 1: AAC, 2: MP3, 3: SPEEX

#### Audio Channels

Sets the number of audio channels if DetectStreamFormatMode = 1.\\
Value name: 	AudioChannels\\
Value type: 	REG_DWORD\\
Valid values:	0: Auto/Default(Stereo), 1: Mono, 2: Stereo

#### Audio Bitlength

Sets the number of bits per audio sample if DetectStreamFormatMode = 1.\\
Value name: 	AudioBitlength\\
Value type: 	REG_DWORD\\
Valid values:	0: Auto/Default(16 Bit), 1: 8 Bit, 2: 16 Bit

#### Audio Samplerate

Sets the audio samplerate if DetectStreamFormatMode = 1.\\
Codecs support different sampling rates and have different default values!!!\\
Value name: 	AudioRate\\
Value type: 	REG_DWORD\\

##### Valid values AAC:
  * 0: Auto/Default(44100),
  * 1: 8000 ,
  * 2: 11025,
  * 3: 12000,
  * 4: 16000,
  * 5: 22050,
  * 6: 24000
  * 7: 32000,
  * 8: 44100,
  * 9: 48000,
  * 10: 64000,
  * 11: 88200,
  * 12: 96000

##### Valid values MP3:
  * 0: Auto/Default(44100),
  * 1: 5500 ,
  * 2: 11025,
  * 3: 22050,
  * 4: 44100

##### Valid values SPEEX:
  * 0: Auto/Default(16000),
  * 1: 8000 ,
  * 2: 16000,
  * 3: 32000,
  * 4: 44100
SPEEX internal sampling is usually 16000 (wideband).
It differs from flash's Microphone::rate value!


### Debug-Log Configuration Registry Settings

Key: 
```
HKEY_CURRENT_USER\Software\DebugNano\nRTMPSource.ax  
```

#### File name
Sets the output file name. The folder must already exist.\\
Value name: 	LogToFile\\
Value type: 	REG_SZ / String\\
Valid values:	a valid output file name to enable file logging or an empty string

#### Logging level

A higher value increases the amount of logging messages sent, and messages get more detailed. \\
Value name: 	TRACE\\
Value type: 	REG_DWORD\\
Valid values:
  * 0 - minimal logging
  * …
  * 9 - maximal logging

-----


## RTMP Network Renderer & Writer

### Purpose

Writing RTMP compatible video/audio streams over a network connection

DirectShow filter for streaming to Wowza and Flash Media Servers

  * Supported Architectures: Microsoft DirectShow, Windows XP, Vista, 7, Server
  * Supported Formats: H.264 + AAC

### Module / Version

nanocosmos RTMP Network Writer 
nRtmpRenderer.ax  Version 3.0.3.1

### DirectShow Connectivity

The RTMP Writer is implemented as a "Renderer Filter", which means it only has 2 input pins for compressed video and audio and no output pin.\\
The input is accepting connections matching the following media types:

  * Pin 1 Media Types:
    * MEDIATYPE_Video
  * Pin 1 Media Subtypes:
    * FourCCs: H264, h264
  * Pin 1 Formats:
    * FORMAT_MPEG2_VIDEO,
    * FORMAT_NONE
  * Pin 2 Major Media Types:
    * MEDIATYPE_Audio
  * Pin 2 Media Subtypes:
    * MEDIASUBTYPE_AAC,  FourCC: 0x000000FF
  * Pin 2 Formats:
    * FORMAT_WaveFormatEx,
    * FORMAT_NONE

### Configuration

The configuration may be set by using either the property page or the COM-Interface IRTMPOptions as declared in header file RTMPWriterOptions.h.

```c
// Filter Guids
// {B4FB59C5-983B-4d96-9204-F8B0E46704EE}
DEFINE_GUID(CLSID_NANO_RTMP_WRITER,  0xb4fb59c5, 0x983b, 0x4d96, 0x92, 0x4, 0xf8, 0xb0, 0xe4, 0x67, 0x4, 0xee);

// Property Page GUID
// {EFC673DE-E20E-4699-8331-9522C5DF7A6D}
DEFINE_GUID(CLSID_NANO_RTMP_WRITER_PROPPAGE, 0xefc673de, 0xe20e, 0x4699, 0x83, 0x31, 0x95, 0x22, 0xc5, 0xdf, 0x7a, 0x6d);

// Configuration Interface GUID
// IID_IRTMPOptions interface
// {B8AF4593-BE31-449c-8485-3E6D65CBC1FE}
DEFINE_GUID(IID_IRTMPOptions, 0xb8af4593, 0xbe31, 0x449c, 0x84, 0x85, 0x3e, 0x6d, 0x65, 0xcb, 0xc1, 0xfe)
```

The streaming url can be set by using standard DirectShow interface IFileSinkFilter .

### Configuration with DirectShow filter property page

![RTMP Writer Properties](/img/nanostream/directshow/directshow_rtmp_writer_properties.png)

The filter's property page offers a subset of encoding parameters, containing the most important options.

URL formatting:

`rtmp:// [hostname / IP address]/[application]+[stream name]`

for example:
`rtmp://127.0.0.1/live+myStream`

with:
IP address: 127.0.0.1
Application name: live,   Stream name: myStream

### Connection Test

Connect/Disconnect buttons. Allows to connect before starting the graph and disconnect during the streaming (this stops the running graph).

### RTMP Authentication
RTMP Authentication expects a user name and a password for unlocking access to the Media Server.
This has been verified with Flash Media Server (3.x and 4) and Wowza Media Server (2.x).
CDNs are supported on a case-by-case basis.
Special tuning as been made for some CDN access
(e.g. Limelight).

### Automatic Reconnection:

Attempts to restore network connection after n seconds to the server in case of network interrupts. During the reconnect attempts the graph still playing. 0 means no attempts to reconnect to server.

### Advanced Configuration Options

The advanced options should be handled carefully. They can severely affect network and streaming performance. Contact support if you want to fine tune any settings.

**Buffering:**

Data Flow:  `RTMP multiplexed data` -> `application buffer` -> `socket buffer` -> `network`.

There are 2 buffer types:
  * Socket level buffer
Size of the network socket buffer, much dependent on the underlying network architecture

  * Application level buffer (Output Buffer Size, Output packet size),  0=no buffer
Affects bandwidth utilization, prevents bitrate changes and puts the sending process to a separate thread.

#### Advanced Settings:
  * Live Mode:
    * Turns on/off blocking of input pins.  (should be off by default)
  * TCP No Delay:
    * Activates the TCP_NODELAY option for TCP transmission ("Nagle Algorithm")
  * Timecode Options:
    * Sends Time Code in RTMP Meta Data
  * Allow B Frames:
    * should be on
  * Reduces the buffer/delay in H.264 Main Profile without B Frames. No effect in Baseline Mode.
  * Timecode Options:
    * send Time Code in RTMP Meta Data

#### Connection Status Notification

There are two possibilities to get the status of the connection to the server:

  * Event messages are sent via IMediaEventSink with the event code `EC_NANO_RTMP_WRITER_STATUS`  declared in `RTMPWriterOptions.h (#define EC_NANO_RTMP_WRITER_STATUS EC_USER+181)`.  A message is sent when the connection state changes. The different states are represented by (also declared in RTMPWriterOptions.h):
  * RTMPWriterConnected=0
  * RTMPWriterDisconnected=1
  * RTMPWriterReconnecting=2
  * Using a callback function, which is called when the connection state changes:
  * Query for the interface `IRTMPStatusNotify`
  * Set the callback function via `SetStatusNotifyHandler()`

##### Rtmp Writer Filter crashes when using SetStatusNotifyHandler()

This problem is probably caused by calling a function declared with one calling convention with a function pointer declared with a different calling convention. Here is pretty good explanation of the problem:
  * [http://stackoverflow.com/questions/301655/c-visual-studio-runtime-error][59d1de83]
  * [http://stackoverflow.com/questions/10079625/c-run-time-check-failure-0-the-value-of-esp-was-not-properly-saved-across-a][31ed7150]



Conclusion: Make sure you use `__stdcall` in your declaration.

### Log / Debug Configuration Registry Settings

Key: HKEY_CURRENT_USER\Software\DebugNano\ nRtmpRenderer.ax

#### File name
  * Sets the output file name. The folder must exist.
  * Value name: 	LogToFile
  * Value type: 	REG_SZ / String
  * Valid values:	a valid output file name to enable file logging or an empty string

#### Logging level
  * A higher value increases the amount of logging messages sent, and messages get more detailed.
  * Value name: 	TRACE
  * Value type: 	REG_DWORD
  * Valid values:
    * 0 - minimal logging
    * …
    * 9 - maximal logging


http://stackoverflow.com/questions/301655/c-visual-studio-runtime-error "Stackoverflow C visual studio runtime error"
http://stackoverflow.com/questions/10079625/c-run-time-check-failure-0-the-value-of-esp-was-not-properly-saved-across-a "Stackoverflow c run time check failure"

-----


## RTMP DirectShow Events

RTMP Writer filter provides statistics and information about the current streaming status as DirectShow events.

All types are declared in `RTMPWriterOptions.h`.
### RTMP Event Codes
```cpp
// EC_USER is defined in Windows SDK\include\evcode.h
// EC_USER                             0x8000

// RTMP Statistics Event Code
#define EC_NANO_RTMP_WRITER_STATS	EC_USER+179

// RTMP Status Event Code
#define EC_NANO_RTMP_WRITER_STATUS	EC_USER+181
```


### RTMP Statistics Event Parameters

```cpp
// RTMP Statistics Event Parameters
// EventCode: (long)EC_NANO_RTMP_WRITER_STATS
// EventParam1: (LONG_PTR)rtmp_writer_stats_t* pStatistics
// EventParam2: (LONG_PTR)(char**)ppRTMPUrl or NULL
// The parameter pointers MUST NOT be deleted or released
```

### RTMP Status Event Parameters

```cpp
// RTMP Status Event Parameters
// EventCode: (long)EC_NANO_RTMP_WRITER_STATUS
// EventParam1: (LONG_PTR)(int*)pRtmpWriterStatus
// EventParam2: (LONG_PTR))(char**)ppRTMPUrl or NULL
// The parameter pointers MUST NOT be deleted or released
```

### RTMP Status Values

```cpp
enum RtmpWriterStatus
{
    RTMPWriterConnected = 0,	 // RTMP Writer is connected
    RTMPWriterDisconnected = 1,	 // RTMP Writer is disconnected
    RTMPWriterReconnecting = 2	 // RTMP Writer is trying to reconnect
};
```


### RTMP Statistics Data Structure

```cpp
struct rtmp_writer_stats_t
{
    int output_buffer_size;	// Available buffer size in bytes
    int output_buffer_fillness;	// Current buffer fillness in bytes

    __int64 output_bitrate;	// Data rate sent through network in bits/s
    __int64 output_bitrate2;	// Deprecated - works only with Windows XP
    __int64 output_bitrate3;	// Deprecated - works only with Windows XP

    DWORD packetsRtt;		// Deprecated - works only with Windows XP
    unsigned int clientBytesReceived;	// Experimental - Bytes received /
                                        // acknowledged by client

    size_t audio_packets_buffered; // Number of audio packets/frames buffered
    size_t video_packets_buffered; // Number of video packets/frames buffered

    int audio_bitrate;		// Input audio bitrate in bits/s
    int video_bitrate;		// Input video bitrate in bits/s

    int audio_packets_sent;	// Number of audio packets/frames sent
    int video_packets_sent;	// Number of video packets/frames sent
};
```


#### Contact
Please contact us [here](mailto:info@nanocosmos.de) for further information, extended services are available upon request.


(c) 2009-2012, nanocosmos gmbh
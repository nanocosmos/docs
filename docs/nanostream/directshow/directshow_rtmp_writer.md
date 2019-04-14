---
id: directshow_rtmp_writer
title: RTMP Writer
sidebar_label: RTMP Writer
---

# DirectShow RTMP Network Renderer & Writer

## Purpose

Writing `RTMP` compatible video/audio streams over a network connection

  * Supported Architectures: Microsoft DirectShow, Windows 
  * Supported Formats: H.264 Video + AAC Audio


## Module / Version

nanocosmos RTMP Network Writer
`nRtmpRenderer.ax` Version 3.0.3.1


## DirectShow Connectivity

The RTMP Writer is implemented as a “Renderer Filter”, which means it only has 2 input pins for compressed video and audio and no output pin.
The input is accepting connections matching the following media types:

1. Pin 1 Media Types:
- MEDIATYPE_Video
  Pin 1 Media Subtypes:
  	FourCCs: `H264`, `h264`


* Pin 1 Formats:

  `FORMAT_MPEG2_VIDEO`, `FORMAT_NONE`


* Pin 2 Major Media Types:

  `MEDIATYPE_Audio`


* Pin 2 Media Subtypes:

  `MEDIASUBTYPE_AAC`, `FourCC: 0x000000FF`


* Pin 2 Formats:
 
 `FORMAT_WaveFormatEx`,  `FORMAT_NONE`

![rtmp_writer_prop](img/windows_networkwriter_properties.png)

The filter's property page offers a subset of encoding parameters, containing the most important options.
URL formatting:`rtmp: [hostname / IP address]/[application]+[stream name]`  for  example:

`rtmp:127.0.0.1/live+myStream` with:`IP address: 127.0.0.1`
Application name: `live`, Stream name: `myStream`



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




## Connection Test

Connect/Disconnect buttons. Allows to connect before starting the graph and disconnect during the streaming (this stops the running graph).



## RTMP Authentication

RTMP Authentication expects a user name and a password for unlocking access to the Media Server. RTMP Authentication is an outdated functionality not available with nanoStream Cloud.



## Automatic Reconnection:

`Attempts` to restore network connection after n seconds to the server in case of network interrupts. During the reconnect attempts the graph still playing. 0 means no attempts to reconnect to server.



## Advanced Configuration Options

The advanced options should be handled carefully. They can severely affect network and streaming performance. Contact support if you want to fine tune any settings.
*Buffering:*
Data Flow: RTMP multiplexed data → application buffer → socket buffer → network.
There are 2 buffer types:

1. Socket level buffer: Size of the network socket buffer, much dependent on the underlying network architecture
2. Application level buffer (Output Buffer Size, Output packet size), 0=no buffer Affects bandwidth utilization, prevents bitrate changes and puts the sending process to a separate thread.



## Advanced Settings

- Live Mode: Turns on/off blocking of input pins. (should be off by default)
- TCP No Delay: Activates the `TCP_NODELAY` option for TCP transmission ("Nagle Algorithm")
- Timecode Options: Sends Time Code in RTMP Meta Data
- Allow B Frames: should be on, it reduces the buffer/delay in `H.264 Main Profile` without B Frames. No effect in Baseline Mode.
- Timecode Options: send Time Code in RTMP Meta Data



## Connection Status Notification

There are two possibilities to get the status of the connection to the server:
- Event messages are sent via IMediaEventSink with the event code EC_NANO_RTMP_WRITER_STATUS declared in `RTMPWriterOptions.h` (`#define EC_NANO_RTMP_WRITER_STATUS EC_USER+181`). A message is sent when the connection state changes. The different states are represented by (also declared in `RTMPWriterOptions.h`):
- `RTMPWriterConnected=0`
- `RTMPWriterDisconnected=1`
- `RTMPWriterReconnecting=2`
- Using a callback function, which is called when the connection state changes:
  - Query for the interface `IRTMPStatusNotify`
  - Set the callback function via `SetStatusNotifyHandler()`



## Rtmp Writer Filter crashes when using `SetStatusNotifyHandler()`

This problem is probably caused by calling a function declared with one calling convention with a function pointer declared with a different calling convention. Here is a good explanation of the problem:
[Visual Studio Runtime Error](http://stackoverflow.com/questions/301655/c-visual-studio-runtime-error)

[Run Time Check Failure](http://stackoverflow.com/questions/10079625/c-run-time-check-failure-0-the-value-of-esp-was-not-properly-saved-across-a)



**Conclusion**: Make sure you use `stdcall` in your declaration



## Log / Debug Configuration Registry Settings

`Key: HKEYCURRENTUSER\Software\DebugNano\ nRtmpRenderer.ax`
### File name
Sets the output file name. The folder must exist.
Value name: `LogToFile`
Value type: `REG_SZ / String`
Valid values: a valid output file name to enable file logging or an empty string

### Logging level
- A higher value increases the amount of logging messages sent, and messages get more detailed.
- Value name: `TRACE`
- Value type: `REG_DWORD`
- Valid values: 0 (minimal logging) - 9 (maximal logging)

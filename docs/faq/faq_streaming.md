---
id: faq_streaming
title: FAQ nanoStream Live Streaming
sidebar_label: Live Streaming
---

<details><summary><strong>Is low latency streaming available?</strong></summary>

Yes, our nanoStream Cloud software and services support low latency live streaming, on any HTML5 browser with a global scale.

> **NOTES** 
> - End-to-end latency is dependent on all components in the workflow: capture, live encoder, upstream, server/cloud, downstream, player.
> - Latency is primarily based on stream buffers and streaming protocols used. Buffers can happen on all parts of a stream, encoder, streamer, server, CDN and player.
> - The new [nanoStream H5Live player](http://nanocosmos.de/h5live) part of nanoStream Cloud can be used for plugin-free, browser-based low latency playback.
> - The new [nanoStream Webcaster](http://nanocosmos.de/webrtc) broadcaster part of nanoStream Cloud can be used for plugin-free, browser-based low latency broadcast (live encoding).

See also [here](https://www.nanocosmos.de/v4/documentation/live_video_encoder_-_low_latency).

</details>

<details><summary><strong>Which Systems (OS) do you support?</strong></summary>

nanoStream Apps and SDKs are available for different platforms:

- nanoStream Apps/SDKs for Windows, MacOS, iOS, Android
- nanoStream Webcaster broadcaster for all WebRTC-enabled browsers
- nanoStream H5Live Player for all HTML5 browsers (desktop and mobile)

</details>

<details><summary><strong>Which video, audio and streaming formats does nanoStream support (H264, RTMP, RTSP, ...) ?</strong></summary>

**nanocosmos supports the following Streaming formats:**

*** Ingest/Upstream from Live Sources:

- RTMP with H264 Video and AAC Audio (nanoStream Apps/SDKs or 3rd party software/hardware)
- nanoStream Webcaster (browser based)
- SRT 
- Other formats upon request, e.g. RTSP, H265, VP9

*** Playback/Downstream:

- H5Live (unique live streaming with ultra-low-latencyy on all browsers)
- HLS (ultra-low latency based on H5Live)
- RTMP

For plugin-free operation and mobile devices, the built-in hardware codecs are supported (H264 Video, AAC Audio).

**** Other platforms / native

The following formats are supported for some platforms only upon request (Windows):
- RTSP (server mode without streaming server)
- UDP-TS / MPEG2-TS (point-to-point and Multicast)
- MPEG-2 Video, including IMX and XDCAM-HD
- MP4 
- MPEG-PS and TS
- MXF

</details>

<details><summary><strong>How to use RTMP for Live Encoding from your Application or Server?</strong></summary>

RTMP is originally developed for live streaming with the Flash player. It is not suitable or recommended for playback.
 However, RTMP is still a valid and suitable format for live encoding and broadcast from your camera source. Most Live Encoder software, hardware and servers support RTMP.

### RTMP Structure
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
RTMP Playback has been supported by the Flash player in Browsers, which is now outdated. Some native apps still support RTMP playback. For a better user experience, we recommend using our nanoStream H5Live player running on all HTML5 browsers.
</details>

<details><summary><strong>Resolution and bitrate settings</strong></summary>

The primary quality impact is done by the pixel resolution (e.g. `1280×720`) and the video encoder bitrate.

> **NOTE:** 
> - For live streams, a constant pixel resolution is required, as most streaming and playback environments do not support changing resolutions.
> - Video Encoding Quality is very much dependent on the content! Static content with little movement and structure is much better to compress than moving content.
> - Mobile networks have limited bandwidth and usually lead to a quality impact of a stream. If you set a high bitrate which cannot be delivered through the network, you will get buffering impacts.

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

In earlier iOS revisions, only “`Baseline`” profile worked. Later versions also support Main and High Profiles.

### OUTPUT STREAMING URL
#### H5Live
The unique nanoStream h5Live player supports live playback with ultra-low-latency on all HTML5 browsers. Live Playback in iOS devices requires `HLS` support (“HTTP Live Streaming”).

#### RTMP
Encoder URL: Live URL + Stream Name:

`rtmp://<server>:1935/live+myStream` or `rtmp://<server>:80/live+myStream`

Playback URL on iOS Devices:
iOS support the `HLS` format only with a “playlist.m3u8” played over http or https.

The generic format is:

```http://[server-ip-address]:1935/live/myStream/playlist.m3u8```
> **NOTE:** You should use the H5Live player Javascript library and not directly access this URL.

See additional documentation about nanoStream Cloud and H5Live Server and Player.
</details>

<details><summary><strong>Which Streaming Servers can I use?</strong></summary>

nanoStream LiveVideoEncoder works best in combination with nanoStream Cloud or nanoStream Server software.

nanoStream Cloud offers the best end-to-end user experience for low-latency live streaming worldwide. It includes the unique H5Live player software for all HTML5 browsers.

Additionally, many third party servers or CDN may work, like Akamai, Adobe, Youtube.live, Facebook.live
</details>

<details><summary><strong>Can I Stream or record to a CDN?</strong></summary>

nanoStream Cloud can be used as a low-latency CDN for your interactive live streams. Other CDNs may also work based on RTMP publishing (Akamai, Limelight, Youtube Live, Facebook Live, and more.)
</details>

<details><summary><strong>Can I record a video file locally or on the server?</strong></summary>

Yes, you can either record to a file instead of streaming to a server or stream and record simultaneously. Supported file formats depend on the platform you are working. Usually `MP4` is supported and recommended on all platforms.

- To stream only to file you can set the output url to e.g. `“c:\temp\h264.mp4”`.
- To stream to a server and a file, set the output url for the server and set the output url 2 to e.g. `“c:\temp\h264.mp4”`. by using the DestinationURL2 property or use SetOutputConf() (for an example see [here](https://www.nanocosmos.de/v4/documentation/how_to_stream_to_multiple_urls))

On some nanoStream platforms, it is possible to encode and stream with different quality levels the same time (e.g. Windows, iOS).

It is possible to record a local HiRes / HD file while streaming with low resolutions.

This is also possible in mobile encoders on iOS and Android. Please contact us for details.

-----
#### Is local encoding and recording continued if the internet connection is dropped?

This feature depends on the platform. On Windows, if the option “UseInternalReconnect” is enabled, the local encoding and recording is continued, even if the internet connection is dropped. As of nanoStream version 3.0 this option is enabled by default. See [here](https://www.nanocosmos.de/v4/documentation/live_video_encoder_-_rtmp_reconnect#using_reconnection_to_keep_the_encoder_running) for detailed explanation.

(deprecated:) * configure the server to record the incoming stream, for documentation see [here](https://www.nanocosmos.de/v4/documentation/live_video_encoder_-_server_recording)
</details>

<details><summary><strong>Does the software automatically adjust the Bitrate - Adaptive Bitrate?</strong></summary>

The nanoStream Live Encoder Software has this feature for streams to adjust the bitrate to the existing bandwidth for the rtmp upstream.

See [general information here](https://www.nanocosmos.de/v4/documentation/live_video_encoder_-_adaptive_bitrate) and [plugin information here](https://www.nanocosmos.de/v4/documentation/live_video_encoder_-_plugin_integration_api) for how to enable the adaptive bitrate on the application and nanoStream API level.

[See here for a DirectShow description to dynamically set the bit rate.](https://www.nanocosmos.de/v4/documentation/directshow-adaptive_bitrate)</details>

<details><summary><strong>Do you offer a command line application?</strong></summary>
Yes, a command line encoder is available for both Windows and MacOS.

The command line application has all the features of the nanoStream plugin.
Some settings can be set with command line arguments. All settings can be configured with xml profiles, similar to FMLE.

Note that the mac command line app (like the mac plugin) does not support all features of the win command line app.
</details>

<details><summary><strong>Can I add meta data to the live Stream?</strong></summary>

Yes, you can use the nanoStream or DirectShow API to add Meta Data information to a live RTMP stream. Meta data is partly supported by nanoStream H5Live.

[Here is some info for the Windows version](https://www.nanocosmos.de/v4/documentation/live_video_encoder_-_rtmp_metadata)
</details>

<details><summary><strong>Can I Stream only Audio?</strong></summary>
Yes, that is possible.

### Using the desktop application
1. open the app
2. go to the input tab
3. as video source choose “No Video”
4. configure the rest of the settings to your liking
5. start the stream

### Programmtically
Set the video source to an invalid value: 
```c++
plugin.put_VideoSource(-1);
```
or 
```c++
plugin.VideoSource = -1;
```
</details>

<details><summary><strong>Is screen capture available in your product?</strong></summary>

Yes. There is an screen capture filter in our SDK. You can Capture the Entire Screen, a Region, a single window or you can use the Mouse Follow to capture a area following the mouse.
</details>

<details><summary><strong>Can I use more than one video source?</strong></summary>

Yes, up to two live video sources are supported, including screen capture. Either to stream in 3D or to stream with picture-in-picture mode. The latter mode also supports switching between the two video sources on the fly.
</details>

<details><summary><strong>Do you offer hardware accelerated encoding or decoding?</strong></summary>

Hardware accelerated encoding and decoding is available for the `Intel Quicksync` architecture, and optionally for `Nvidia CUDA`.

</details>

<details><summary><strong>Can I automatically or manually check the available bandwidth?</strong></summary>

A bandwidth check function is available on Desktop and Mobile platforms.

There are different modes available:

- static bandwidth check before streaming
- dynamic bandwidth check during streaming (adaptive bitrate)

</details>


<details><summary><strong>Can I also stream files?</strong></summary>

Yes, following file types are supported as live sources for streaming:
- `mp4`

- `mov`
- `wmv`
- `wma`
- `mpg`
- `m2v`
- `mp3`

>Please note, that there is no 100% guarantee to be able to play all combinations of file >formats and settings, as there are hundreds of combinations of formats available which >playback capabilities are very much dependent on the local system environments.


### How to stream files with the nanoStream API
To stream files, you need to set `VideoSource` to the `value 101` and set `FileSourceFilename` to the `path of the file` (including the file name). 
>See [here](https://docs.nanocosmos.de/docs/nanostream/windows/nanostream_encoder_plugin_api), for further information.


### Seemless switch / Ad insertion into live streams
There is also a special stream mode (set with `SetConfig("UseSourceBridge", "1")`), with which it is possible to stream from a video source (e.g. a webcam) and play files on demand during the streaming. This can be used to play advertisements during a stream for example.

>Available options for this special stream mode are described [here](https://docs.nanocosmos.de/docs/nanostream/windows/nanostream_encoder_plugin_api#advanced-settings-for-extra-module-sourcebridge-using-controlcommand).

</details>

<details><summary><strong>Is your product compatible with Flash?</strong></summary>

Flash is an outdated technology but still sometimes used.

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

<details><summary><strong>Can I send multiple streams?</strong></summary>

Yes, since `nanostream 3.0` this is possible with the applications and the `nanoStream API`.

> See [here](https://www.nanocosmos.de/v4/documentation/how_to_stream_to_several_urls_simultaneously), for a simple API sample code.
> 
</details>

<details><summary><strong>Where are the logfiles stored on my computer?</strong></summary>

follow these steps to [enable event logging for live video encoder](https://www.nanocosmos.de/v4/documentation/live_video_encoder_-_event_logging)

or

follow these steps to [enable logging for the browser plugin](https://www.nanocosmos.de/v4/documentation/how_do_i_enable_logging_for_the_plugin)

and set `"LogToFile"` to an existing folder, e.g.: 
```
"C:\temp\audiovolume.log"
```
the name of the file is specified and the files are located in the path you specified.

> continue following the instructions for [plugin logging](https://www.nanocosmos.de/v4/documentation/how_do_i_enable_logging_for_the_plugin) or [encoder logging](https://www.nanocosmos.de/v4/documentation/live_video_encoder_-_event_logging)
</details>


<details><summary><strong>Why does the plugin in some cases stream with a lower bitrate then specified?
</strong></summary>

The plugin queries the camera device for the supported resolutions, framerates and colorspaces. If the camera reports the values, which it actually supports, the plugin would choose a supported capture mode of the camera. The resulting bitrate should be equal to the specified bitrate.

But, if the camera reports, that it is capable of delivering e.g. `30 frames` for a resolution of `640×480`, the plugin assumes that the camera will send `30 frames`. If the actual frame rate is then lower (e.g. `15 fps`) the bitrate will be the half of the specified bitrate.

That is to keep the quality specified by the user. Another reason for a lower bitrate is, that the lower framerate could be a cause of high cpu load or a low bandwidth. If the plugin would adjust the bitrate in this case, the framerate would be even lower in the process, which in turn would lead the plugin to increase the bitrate again, which in turn would lower the framerate, etc.

>Also keep in mind that the lighting conditions can have a huge effect on the frame rate of the >camera. We have several webcams delivering only half of the frame rate, if it is too dark.

</details>

<details><summary><strong>How do I set a Stream name?</strong></summary>

RTMP Streams:

example url:
```
rtmp://localhost/live+myStream
```
or
```
rtmp://localhost/live/myStream
```
"myStream" represents the stream name.



**Using bintu.live / nanoStream Cloud**
bintu.live creates stream names for you which you can use for live streaming with nanoStream Cloud.

**Using the desktop application**

1. open the app
2. go to the `output tab`
3. insert the url and the stream name in the `output url edit field`
4. the stream name is the part of the whole url, which comes after the `"+"` or the last `"/"`

**Setting the stream name programmatically**
The stream name is always set with the rest of the url. 

For the stream name `"myStream"` you would do:

(Windows API:)

```c++
plugin.put_DestinationURL("rtmp:localhost/live+myStream") 
```

or 

```c++
plugin.DestinationURL("rtmp:localhost/live+myStream")
```

you can also use `"SetOutputURL"` or `"AddOutput"`.

</details>

<details><summary><strong>Do you have a 64bit version of the Encoder?</strong></summary>

Yes, we do have a 64 bit version available as an upgrade to the existing package.

</details>

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

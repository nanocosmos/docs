id: nanostream_encoder_plugin_api
title: Encoder Plugin API
sidebar_label: Encoder Plugin API

## Live Video Encoder - Plugin Interface Version 3.x and 4.x

*SDK / Developer license is needed for all functionality.*

> **NOTE**: This plugin is deprecated!


## Development Usage for Programming Languages C, C++, C#, .NET, etc.

### Active-X Control / COM Object

The Active-X Control is compatible with the Microsoft COM architecture, compatible to all existing Windows platforms. It is loaded by specifying the CLSID for the plugin. 

The plugin may be controlled from almost any language which is able to load COM objects.

There are many sample applications included in the nanoStream SDK based on C++ and C#. 

###  Browser based usage with HTML and Javascript


The Live Video Encoder core components are available as plugins for Active-X based apps and browsers (Internet Explorer) and NPAPI based browsers (Firefox, Safari). Chrome since version 45 only supports the new Chrome extension. You can also use our WebRTC based live communication solution.
See separate documentation for browser based live encoding.


## Plugin Interface - Properties and Methods


The plugin exposes methods and properties to get and set options, start preview and encoding.

Depending on the programming language properties might get wrapped into get and set functions.

For exact declarations see the documents "Javascript Interface" and "C++ Interface" as well.

### Platform differences Windows /  MacOS

Note: the MacOS version does not contain all features of the Windows version. Please see the separate README files delivered with the MacOS products. Some functions may be called in MacOS, but will be non-functional.

## Plugin Initialization

### InitEncoder()
```
Type: Method			
Initializes  the Plugin, should be the first call AFTER setting the License property.
```
### PluginVersion
     Type: Property get
     Returns the Plugin Version String    

### License
```
Type: Property get/set
Get or set the license key string            
```

### EnablePreview
```
Type: Property get/set
Enables or disables  video capture preview 
Values: 0 - disable, 1 - enable        
```

## Destination File Name or Stream URL (e.g. "rtmp://localhost/live+myStream") 

### DestinationURL
```
Type: Property get/set
Set or get the destination file name or stream url. The stream format is automatically detected from the URL.  

Example URL types: 
rtmp://wserver1.nanostream.net:1935/live/myStream
udp://224.0.0.1/udp.ts
See more info in the specific format settings dependend on the protocol (e.g. the "Auth" config for RTMP)
```


### DestinationURL2
```
Type: Property get/set
Can be used to capture to mp4 simultaneously while streaming to rtmp.
If NULL or empty second URL is not used anymore. Currently only available in the same video and audio compression formats as DestinationURL.
```

## Video and Audio Capture Devices (0 … n)

### NumberOfVideoSources
```
Type: Property get
Contains the number of video capture devices         
```

###  NumberOfAudioSources
```
Type: Property get
Contains the number of audio capture devices   
```

### GetVideoSource(num, string)
```
Type: Method
Returns the video capture device string for the specified number            
```
### GetAudioSource(num, string)
```
Type: Method
Returns the audio capture device string for the specified number           
```

### VideoSource
```
Type: Property get/set
Set or get the capture device to use as first source. 
Special modes: 100 (source=screen capture), 101 (source=file), 102 (source=mxf file), 103 (source=wmv file), 104 (source=vts), 105 (source=udp stream), 106 (source=rtmp stream), 107 (source=rtsp stream), 108 (source==ipcamwv), 109 and 110 are not supported at the moment

If a special mode higher than 100 is set, you also need to set the property FileSourceFilename appropriately.
```

### VideoSource2
```
Type: Property get/set
Set or get the capture device to use as second source (mix mode)  
```

## File sources

Instead using a live camera source from a video capture device, a file source may be used for streaming and / or transcoding to a destination.

### FileSourceFilename
```
Type: Property get/set
Like VideoSource, only for files, works only if VideoSource>100  
```

### FileSourceFilename2
```
Type: Property get/set
Like VideoSource2, only for files, works only if VideoSource>100
```

## Video and Audio Encoding Bitrates (Quality in Bits/s)

Video and Audio Bitrates are the primary parameters influencing resulting quality.
See below for recommended bit rates.

```
// nanoStreamAx instance of the plugin
// the index of the output, if two outputs are used choose 0 for the first, 1 for the second
int index = 0;

int videobitrate = 1200000;
this.nanoStreamAx.SetVideoBitrate(videobitrate, index);
int audiobitrate = 64000;
this.nanoStreamAx.SetAudioBitrate(audiobitrate, index);
```

### SetVideoBitrate

     Set the video bitrate in bits per second (bps)  


### SetAudioBitrate

     Set the audio bitrate in bits per second (bps)  

## Video Capture Frame Size and Frame Rate

### VideoWidth
```
Type: Property get/set
Set or get the video width for the capture device  
```

### VideoHeight
```
Type: Property get/set
Set or get the video height for the capture device  
```

### VideoFrameRate
```
Type: Property get/set
Set or get the video frame rate (fps) for the capture device  
```

## Video Capture Supported Resolution, Frame Rate and Color Space

### GetNumberOfResolutions(source)
```
Type: Methodv
Returns number of resolutions supported by device.  The parameter "source" is optional, and is only required in mixing mode ("source" = 0 for fist selected device, "source" = 1 for second selected device). So, in general the source parameter can be omitted.
```

### GetResolution(i, source)
```
Type: Method
Returns the i'th resolution as string: "$widthx$height" (e.g. "640x480"). GetNumberOfResolutions() has to be invoked before using this mehtod. For the source parameter see GetNumberOfResolutions().
```

### GetNumberOfColorSpaces(width, height, source)
```
Type: Method
Returns the number of colorspaces supported by the device for the supplied resolution (width, height). For the source parameter see GetNumberOfResolutions().
```

## GetColorSpace(i, source)
```
Type: Method
Returns the i'th colorspace for the resolution given to GetNumberOfColorSpaces(). For the source parameter see GetNumberOfResolutions()
```

### GetNumberOfFramerates(width, height, colorspace, source)
```
Type: Method
Returns the number of frame rates supported by the device for the supplied resolution (width, height) and colorspace. For the source parameter see GetNumberOfResolutions().
```

### GetFramerate(i, source)
```
Type: Method
Returns the i'th framerate for the resolution and colorspace given to GetNumberOfFramerates(). For the source parameter see GetNumberOfResolutions().
```

### OutputFormat
```
Type: Property get/set
Set or get video/stream output format id.
As of nanoStream version 3.0 this is only used for udp streaming to distinguish between H264/AAC and Mpeg2/MpegA.
"MPEG-2 ES"=5, "MPEG-2 TS"=8, "H.264 TS"=11
     
For versions lower than 3.0:
default=0, rtmp=1, rtmp_vh=2, mp4/h264=3, h264 main profile=4, mpeg2es=5, wmv=6, webm=7, mpeg2ts=8, rtsp=9
```

### CheckVideoFormat()
```
Type: Method
Returns result of checking for correct video format settings      
```

### VideoFormat
```
Reserved / currently not used     
```

### AudioFormat
```
Reserved / currently not used    
```

## Encoder / Stream Control

### StartPreview()
```
Type: Method
Starts video/audio capture preview    
```

### StopPreview()
```
Type: Method
Stops video/audio capture preview
```

### StartBroadcast()
```
Type: Method
Starts video/audio capture encoding/streaming 
```

### StopBroadcast()
```
Type: Method
Stops video/audio capture encoding/streaming
```

## Screen Capture Region Rectangle:

### RegionLeft
```
Type: Property get/set
Capture region left for resizer/screen capture
```

### RegionTop
```
Type: Property get/set
Capture region top for resizer/screen capture
```
### RegionRight
```
Type: Property get/set
Capture region right for resizer/screen capture
```

### RegionBottom
```
Type: Property get/set
Capture region bottom for resizer/screen capture      
```

## Resize Video
```
// nanoStreamAx instance of the plugin
// the index of the output, if two outputs are used choose 0 for the first, 1 for the second
int index = 0;
    
int videobitrate = 1200000;
this.nanoStreamAx.SetVideoBitrate(videobitrate, index);
int audiobitrate = 64000;
this.nanoStreamAx.SetAudioBitrate(audiobitrate, index);
    
int outputWidth = 384;
int outputHeight = 216;
this.nanoStreamAx.SetVideoResizeWidth(outputWidth, index);
this.nanoStreamAx.SetVideoResizeHeight(outputHeight, index);
```

### SetVideoResizeWidth
```
Resized/encoded stream width
```

### SetVideoResizeHeight
```
Resized/encoded stream height 
```

## Video Effects, Mix, Overlay, 3D, Snapshot

### VideoMixer
```
Type: Property get/set
Sets the mixer mode for video source 1 and 2 (both sources need to be active)

Video Mixer Mode: 	
0 - off, 0<x<16 - mix modes for nano video mixer 1(old),
15<x<32=mix modes for nano video mixer 2,
31`<x<48= mix modes for 3<sup>`rd`</sup>` party mixer, x>47=mix modes for 3dtv mixer;

for specific mix modes see "VideoMixerMode" for SetConfig() the mix mode has to be added to x 

Examples:  
17 = 16+1 nano video mixer 2 with mix mode left/right full
                 
You can quickly switch between 2 live video sources with this:
27 = picture-in-picture, video source #1 only
28 = picture-in-picture, video source #2 only
```

### VideoEffect
```
Type: Property get/set
Video Overlay Mode: 0=off, 1=left top, 2=right top, 3=left bottom, 4=left top, 5=user defined position
```

### TextOverlayText
```
Type: Property get/set
Text or path to image file to display as video overlay
```

### Snapshot

There are methods available for taking a snapshot of the current image from the input source. These methods are available for SDK/plugin versions 3.5.3.0 and higher.

**Important:** The snapshot functions can only be used when the SetConfig option "UseSampleGrabber" is enabled (pluginObj.SetConfig("UseSampleGrabber", 1);). This option has to be set once, before either StartPreview or StartBroadcast is invoked.

**Update:** Since version 3.6.0.6 there are two different options for "UseSampleGrabber":

*  1: If set to "1" the plugin will show the preview only for the browser mode "windowless".

*  2: If set to "2" the plugin will show the preview regardless of the mode used.

On MacOSX the snapshot works without setting any other option, such as "UseSampleGrabber".
     
#### MakeSnapshotJpegBase64
```
Available on MacOSX since plugin version 4.0.0.0
Type: Method
Returns a base64 encoded string
```

#### SaveSnapshot
```
Not available on MacOSX
Type: Method
Saves the snapshot as jpeg image to the given path (e.g. "C:\temp\snapshot.jpg")
```

## Audio Control

### AudioVolume
```
Type: Property get/set
Sets the audio volume 
```

### AudioDelay
```
Type: Property get/set
Streaming Audio Delay / Offset (ms) 
```

## Audio Information

### GetAudioVolume(channel)
```
Type: Method
Returns audio level for left (0) or right (1) channel via  
AudioVolume filter if used, else returns current audio volume      
```

### AudioLevel
```
Reserved / currently not used   
```

## RTMP Settings

### ReconnectDelay
```
Type: Property get/set
Auto Reconnect interval time in ms   
```

### ReconnectAttempts
```
Type: Property get/set
Auto Reconnect attempts
```

### sendCommandObject(StreamName, CommandName, Variant)
```
Type: Method
Send rtmp command/invoke from JavaScript as Variant/NPVariant. For use in Browser only.  
```

### StartBandwidthChecker()
```
Type: Method
Start estimating available bandwidth, use BandwidthCheckerKb to stop estimation and get a value returned
```

### BandwidthCheckerKb
```
Type: Property get
Stops bandwidth check and returns the estimated bitrate in Kbits if StartBandwithChecker was invoked before
```

### StartConnect()
```
Type: Method
Establish connection to the streaming server but don't start streaming/publishing
```

## Miscellaneous Settings

### CaptureHeight
```
Type: Property get/set
Video height if MediaLooks screen capture is used
```

### CaptureWidth
```
Type: Property get/set
Video width if MediaLooks screen capture is used
```

### ActivateKeyServer
```
Reserved / currently not used   
```

### LastError
```
Type: Property get
Returns last error occurred during graph building:
NC_GB_ERR_ADD_FILTER: could not use a filter (maybe not installed or used by another program)
NC_GB_ERR_CONNECT_FILTERS: two filters could not be connected; see LastErrorMessage for detailed error message
NC_GB_ERR_RTMP_DISCONNECTED: StartConnect failed, or established RTMP connection got disconnected
NC_GB_ERR_RTMP_RECONNECTING: RTMP got disconnected, trying to reconnect
NC_GB_CHECK_VIDEO_FORMAT_ERROR: the video settings could not be validated, streaming might still work
NC_RTMP_TIMEOUT_VIDEO: a renderer did not receive video data anymore
NC_RTMP_TIMEOUT_AUDIO: a renderer did not receive audio data anymore
ERROR_CANT_ACCESS_FILE: MP4 muxer could not access file (write failed)
```

### LastErrorMessage
```
Type: Property get
Returns last error message occurred during graph building
```

###  MP4MuxMode
```
Type: Property get/set
MP4 File Writing Mode:
	0: Write default single file 
	1: Moov in advance (//currently//// *//unsupported*) 
	2: Write file segments/chunks 
```

### OriginalVideoSize
```
Type: Property get/set
Display preview in native size in seperate window
```

### SetLog(logFile, logLevel)
```
Type: Method
Set file name with path and level for log file
```

### ShowPropertyPage
```
Type: Property get/set
Show configuration property pages for: 
0: disabled, 
1: stream config, 
2: video capture device(s), 
4: audio capture device(s), 
8: sink filters 
Multiple options can be chosen by adding the desired values
```

## Advanced Configuration

### SetConfig("Property", "Value")
```
Type: Method
Sets config property "Property" to value "Value"
See chapter "Advanced Configuration using GetConfig / SetConfig" for available options
```

### GetConfig("Property")
```
Type: Method
Get value for property "Property"
See chapter "Advanced Configuration using GetConfig / SetConfig" for available options
```

### SetXmlProfile(Mode, String)
```
Type: Method
Import settings from XML File or XML String with Configuration Info,

Modes (integer): 
0: nanocosmos format  
1: Flash Media Live Encoder format (default)  
```

### GetXmlProfile(Mode, String)
```
Type: Method
Get current settings as XML String

Modes (integer): 
0: nanocosmos format
1: Flash Media Live Encoder format (default) 
```

### SaveXmlProfile(Mode, String)
```
Type: Method
Saves the current settings as XML in the file specified by String
Modes (integer): 
0: nanocosmos format
1: Flash Media Live Encoder format (default) 
```

### ControlCommand("Property", "Value")
```
Type: Method
Sets control property "Property" according to value "Value"
See chapter "Advanced Settings for extra module SourceBridge using ControlCommand" for available options
```

## Advanced Configuration using GetConfig / SetConfig

For use with the API function: 

`SetConfig( "Property", "Value")`

### Video Preview Settings

| **Property**              | **Description**             | **Values**                                     |
| ------------              | ---------------             | ----------                                     |
| * UseVideoMixingRenderer9 | Renderer to use for Preview | 0=default, don't use VMR9, but VMR7 1=use VMR9 |

### Video Encoding Advanced Settings

| **Property**          | **Description**                                                                                                                                                                                                                                                                                                                                                                           | **Values**                                                                                                                                                                                                                                                                |
| ------------          | ---------------                                                                                                                                                                                                                                                                                                                                                                           | ----------                                                                                                                                                                                                                                                                |
| H264Profile           | H.264 Encoding Profile                                                                                                                                                                                                                                                                                                                                                                    | Baseline, Main, Extended, High Most compatible but lowest quality is Baseline, (no B-Frames, no CABAC VLC)                                                                                                                                                                |
| H264Level             | H.264 Level                                                                                                                                                                                                                                                                                                                                                                               | 10=1.0, 11=1.1, 12=1.2, 13=1.3, 20=2.0, 21=2.1, 22=2.2, 30=3.0, 31=3.1, 32=3.2, 40=4.0, 41=4.1, 42=4.2, 50=5.0, 51=5.1                                                                                                                                                    |
| H264FrameDistanceMode | Determines if H.264 I and P frame distance settings are applied as variable/maximum or fix/constant values. Multiple bitrate streams often require constant frame distances.                                                                                                                                                                                                              | 0=variable/maximum (default), 1=fix/constant                                                                                                                                                                                                                              |
| H264IFrameDistance    | H.264 I Frame / GOP Length in Frames  (100 Frames = 4 seconds for 25 fps)                                                                                                                                                                                                                                                                                                                 | 100=default, 1 = I-Frame-Only                                                                                                                                                                                                                                             |
| H264PFrameDistance    | H.264 P/B Frame Distance                                                                                                                                                                                                                                                                                                                                                                  | 1 = IP-Only (no B-Frames)                                                                                                                                                                                                                                                 |
| MPEGIFrameDistance    | MPEG2 I Frame Distance (s.a.)                                                                                                                                                                                                                                                                                                                                                             | 15                                                                                                                                                                                                                                                                        |
| MPEGPFrameDistance    | MPEG2 P Frame Distance (s.a.)                                                                                                                                                                                                                                                                                                                                                             | 3                                                                                                                                                                                                                                                                         |
| H264VlcMode           | H.264 VLC Mode (CAVLC/CABAC)                                                                                                                                                                                                                                                                                                                                                              | 1=CAVLC, 2=CABAC (not allowed in H.264 Baseline Profile)                                                                                                                                                                                                                  |
| RateControl           | Video Bitrate Control Mode, Determines the strictness or  tolerance that is used by the bitrate control. CBR Strict 1 is the most  strict setting. Tolerance is increasing from Constant Bitrate (CBR) to Average  Bitrate (ABR) to Variable Bitrate (VBR).                                                                                                                               | 0=Auto (CBR Stream), 1=CBR Strict 1, 2=CBR Strict 2, 3=CBR Stream, 4=ABR 1, 5=ABR 2, 6=VBR, CBR Stream is recommended  for most streaming applications and is the default mode. VBR is recommended for local file recording and fast video scene changes and transitions. |
| EncoderType           | Encoder Implementation (Software/Hardware)                                                                                                                                                                                                                                                                                                                                                | *1 = Default (Software)* *2 = QuickSync (Intel HW Acceleration)*                                                                                                                                                                                                      |
| CbrPadding            | If enabled the encoder is adding padding data in case of bitrate underflows in constant bitrate mode to maintain the configured bitrate                                                                                                                                                                                                                                                   | 0=disabled (default), 1=enabled                                                                                                                                                                                                                                           |
| MP4MuxMode            | MP4 File Writing Mode                                                                                                                                                                                                                                                                                                                                                                     | 0=default,  1=moov in advance (//unsupported//) 2=write file segments                                                                                                                                                                                                     |
| MP4SegmentDuration    | Duration of MP4 File Segments (used when MP4MuxMode=2)                                                                                                                                                                                                                                                                                                                                    | 60000=default (60 seconds)                                                                                                                                                                                                                                                |
| MP4MuxerFastStart     | Write Movie Index to File Start (MOOV atom) (for faster stream playback starts)                                                                                                                                                                                                                                                                                                           | 0 / 1                                                                                                                                                                                                                                                                     |
| MP4MuxerFilenameMode  | Rename or overwrite existing files                                                                                                                                                                                                                                                                                                                                                        | 0=overwrite,  1=rename in segmented mode, 2=rename always (default)                                                                                                                                                                                                       |
| H264Quality           | H.264 Encoder Quality/Speed Ratio                                                                                                                                                                                                                                                                                                                                                         | 0=worst/fastest 3=balanced(default) 6=highest/slowest                                                                                                                                                                                                                     |
| H264MinimumQuant      | Minimum H.264 quantizer value. Minimum and maximum quantizer settings are automatically adjusted by default. There is no need to override these settings in most cases. Please find more information here: [How do the H.264 rate control mode and minimum/maximum quantization settings interact](How do the H.264 rate control mode and minimum/maximum quantization settings interact) | 0=auto adjust, 1-51=custom value, this option might override the adjusted video bitrate setting                                                                                                                                                                           |
| H264MaximumQuant      | Maximum H.264 quantizer value. See above.                                                                                                                                                                                                                                                                                                                                                 | 0=auto adjust, 1-51=custom value, this option might override the adjusted video bitrate setting                                                                                                                                                                           |
| H264AdaptiveQuant     | Adaptive quantization depending on complexity                                                                                                                                                                                                                                                                                                                                             | 0=disable (default), 1=enable, this option might override the adjusted video bitrate setting                                                                                                                                                                              |
| OutputFrameRate       | Video Output (Encoded) Frame Rate                                                                                                                                                                                                                                                                                                                                                         | 5,10,15,20,25,30, OR 23980 OR 29970                                                                                                                                                                                                                                       |

### Audio Encoding Advanced Settings

| **Property**           | **Description**                             | **Values**                                                                                                                                                                                             |
| ------------           | ---------------                             | ----------                                                                                                                                                                                             |
| AACSamplingRate        | AAC Audio Sampling Rate (output)            | 0=use value of config "AudioSamplerate" (default), 1=96000, 2=88200, 3=64000, 4=48000, 5=441000, 6=32000, 7=24000, 8=22050, 9=16000, 10=12000, 11=11050, 12=8000                                       |
| AACProfile             | AAC Audio Profile                           | 1=LC 2=LTP 3=MAIN 4=HE                                                                                                                                                                                 |
| AACNoiseShaping        | AAC Noise Shaping                           | 0=off, 1=on (default)                                                                                                                                                                                  |
| AudioVolumePerSoftware | Control volume with the Audio Volume Filter | 0=off (default), 1=on                                                                                                                                                                                  |
| AudioMonoOutput        | Mix all input channels to one mono channel  | 0=off (default), 1=on                                                                                                                                                                                  |
| AACStereoMode          | Joint Stereo or L/R Mono Stereo             | 0=joint Stereo (default), 1=L/R Mono Stereo/Dual Channel, Use 1=L/R if the audio channels do not contain similar signals (stereo) but different sources like speaker/background or different languages |


### Audio/Video Device Configuration

| **Property**                     | **Description**                                | **Values**                                                                                                                           |
| ------------                     | ---------------                                | ----------                                                                                                                           |
| SkipConfigVideoDevice            | Skip Device Config (for Buggy Devices)         | 0 / 1                                                                                                                                |
| AllowClosestMediaTypeForAllGuids | *(unsupported)*                              |                                                                                                                                      |
| AudioLatency                     | Audio Device Latency (ms)                      |                                                                                                                                      |
| AudioDelay                       | Streaming Audio Delay / Offset (ms)            |                                                                                                                                      |
| AudioBitrate                     | Sets the audio bitrate (bits/s)                |                                                                                                                                      |
| AudioSamplerate                  | Sets the samplerate for audio (Hz)             |                                                                                                                                      |
| UseCrossbar                      | Use Analog Video Crossbar (TV Receivers)       | 0 / 1                                                                                                                                |
| CrossbarIn                       | Crossbar Input Index                           | 0..n                                                                                                                                 |
| CrossbarOut                      | Crossbar Output Index                          | 0..n                                                                                                                                 |
| DeinterlacingMode                | Deinterlacing Mode                             | 0=off, 1=auto (default), 2=on *Note: for some capture devices you need to set this to „on" (2). (Resolutions 480i, 576i, 1080i)* |
| DeinterlacingMethod              | Deinterlacing Method                           | 0=duplicate field/bob, 1=blend, 2=vertical filter, 3=edge, 4=median, 5=median2                                                       |
| VideoSource2Fps                  | Set the framerate for the second video device  | use GetFramerate to get valid values                                                                                                 |
| VideoSource2Res                  | Set the resolution for the second video device | use GetResolution to get valid values                                                                                                |
| VideoSource2Colorspace           | Set the colorspace for the second video device | use GetColorspace to get valid values                                                                                                |

### Streaming Settings

| **Property**           | **Description**                                                                                                                                              | **Values**                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ------------           | ---------------                                                                                                                                              | ----------                                                                                                                                                                                                                                                                                                                                                                                                                     |
| OutBufferSize          | Streaming Output Buffer Size                                                                                                                                 | size in bytes - default value: 256KB (256 * 1024)                                                                                                                                                                                                                                                                                                                                                                              |
| OutPacketSize          | Streaming Output Packet Size                                                                                                                                 | size in bytes - default value: 1450B                                                                                                                                                                                                                                                                                                                                                                                           |
| SocketBufferSize       | IP Socket Buffer Size                                                                                                                                        | size in bytes - default value: 128KB (128 * 1024)                                                                                                                                                                                                                                                                                                                                                                              |
| TcpNoDelay             | TCP_NODELAY (Nagle Algorithm)                                                                                                                                | 0  / 1                                                                                                                                                                                                                                                                                                                                                                                                                         |
| TcpSendTimeout         | Network Send Timeout                                                                                                                                         | 2000 (ms, default)                                                                                                                                                                                                                                                                                                                                                                                                             |
| TcpReceiveTimeout      | Network Receive Timeout                                                                                                                                      | 1000 (ms, default)                                                                                                                                                                                                                                                                                                                                                                                                             |
| TcpConnectTimeout      | Set a timeout for the connect process to the server                                                                                                          | in ms                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ScreenCapMode          | Screen Capture Desktop Mode                                                                                                                                  | 0=Screen, 1=FollowMouse, 2=Region relative, 3=Region absolute, 4=Window, 5=Window overlapping                                                                                                                                                                                                                                                                                                                                  |
| CaptureRegion          | Capture Region of the input source, example for a input resolution of 640x480: SetConfig("CaptureRegion", "10,630,10,470") - discards 10 pixels on each side | left,right,top,bottom                                                                                                                                                                                                                                                                                                                                                                                                          |
| ResizeMode             | Mode for Resize Filter                                                                                                                                       | 0=stretch, 1=crop, 2=preserve aspect ratio (PAR), 3=PAR no letterbox                                                                                                                                                                                                                                                                                                                                                           |
| VideoMixer             | Which mixer to use for mixing mode                                                                                                                           | 0=nanocosmos video mixer 1 (old), 1=nanocosmos video mixer 2, 2=MediaLooks mixer, 3=3dtv mixer                                                                                                                                                                                                                                                                                                                                 |
| VideoMixerMode         | Mixing mode (not every mode is supported by all mixer filters)                                                                                               | Important: you need to add an offset to the following mix modes (see property VideoMixer for explanation - 0=mixing disabled, 1=left/right full, 2=left/right half (cinemizer), 3=top/bottom, 4=interlaced lines, 5=interlaced columns, 6=anaglyph, 7=picture in picture (PIP) left top, 8= PIP right top, 9= PIP left bottom, 10= PIP right bottom, 11=PIP show only first video source, 12=PIP show only second video source |
| AudioPreview           | Enables audio preview during preview or broadcast                                                                                                            | 0=no preview, 1=visual preview (default, requires filter  AudioVolume), 2=visual and audible preview, 3=audible preview                                                                                                                                                                                                                                                                                                        |
| RTMPBufferOverflowMode | Defines how increasing input buffer fullness gets handled                                                                                                    | 0=no drop (default), 1=drop                                                                                                                                                                                                                                                                                                                                                                                                    |
| RTSPSinkMode           | Determines if the RTSPSink is running as a server (passive/pull) or as a streamer to a RTSP push capable server (active/push)                                | 1=server/pull (default), 2=streamer/push                                                                                                                                                                                                                                                                                                                                                                                       |
| RTSPSinkWriteSDP       | Determines if the RTSPSink is writing the session description to a local SDP file in pull mode. See also RTSPSinkSDPFolder                                   | 0=disable (default), 1=enable                                                                                                                                                                                                                                                                                                                                                                                                  |
| RTSPSinkSDPFolder      | Determines the folder path the RTSPSink is writing the session description to. See also RTSPSinkWriteSDP                                                     | Type: String                                                                                                                                                                                                                                                                                                                                                                                                                   |

### RTMP and MP4 Timecodes

| **Property**            | **Description**                                                                                                                        | **Values**                                      |
| ------------            | ---------------                                                                                                                        | ----------                                      |
| RTMPWriteTimecode       | Send timecodes in RTMP streams, If enabled RTMP timecodes are sent in addition to the always sent RTMP packet timestamps               | 0=off (default), 1=on                           |
| MP4WriteTimecode        | Write timecodes in MP4 files as AMF0 data track. AMF0 data tracks are not supported by all applications and might break compatibility. | 0=off (default), 1=on                           |
| UseSystemTimeAsTimecode | Send RTMP/MP4 timecodes as UTC system date time or stream time                                                                         | 0=stream time (default), 1=UTC system date time |
| TimecodeInterval        | RTMP/MP4 timecode interval in milliseconds                                                                                             | Should be higher or equal to 1000 (1s)          |
| SendTimecode            | Send timecodes in RTMP streams. DEPRECATED since nanoStream 3.4.3.2. Use above settings instead.                                       | 0=off (default), 1=on                           |



### Reconnect on Streaming Errors

| **Property**          | **Description**                                                                                                                                                                           | **Values** |
| ------------          | ---------------                                                                                                                                                                           | ---------- |
| ReconnectInterval     | Auto Reconnect Interval Time (ms)                                                                                                                                                         | 5000       |
| ReconnectAttempts     | Auto Reconnect No. of Attempts                                                                                                                                                            | 5          |
| UseInternalReconnect  | Use RTMP Internal Reconnect of the RTMP Filter (do not stop encoder on network errors)                                                                                                    | 0 / 1      |
| UseUnlimitedReconnect | Don't stop reconnecting after a specific number of failed attempts (encoder is not stopped)                                                                                               | 0 / 1      |
| UseReconnectOnStart   | When the broadcast is started and no connection can be established to the server, the directshow graph will not be stopped. The graph will periodically attempt to connect to the server. | 0 / 1      |
| ForceRtmpReconnect    | Force a reconnect to the server during streaming.                                                                                                                                         | none       |

### Auto Adjust / Adaptive Bitrate Control

| **Property**                  | **Description**                                                                                                                               | **Values**                                                                                                                                                    |
| ------------                  | ---------------                                                                                                                               | ----------                                                                                                                                                    |
| AutoApplyAdaptiveBitrate      | Enable Auto Adjust / ABC (Adaptive Bitrate Control) The encoded bitrate will be adjusted to the measured upstream bandwidth                   | 0 / 1                                                                                                                                                         |
| UseTcpSniffing                | Advanced Bitrate Measurement  Better ABC measurement (May be used with Admin rights only)                                                     | 0 / 1                                                                                                                                                         |
| NumberOfSamplesToUse          | Number of samples to use as statistics                                                                                                        | 5=default                                                                                                                                                     |
| BufferFillnessLimitIncBitrate | The maximum allowed buffer fillness percentage for increasing the bitrate                                                                     | 0.05=default (should be smaller than BufferFillnessLimitDecBitrate)                                                                                           |
| BufferFillnessLimitDecBitrate | The minimum buffer fillness percentage for decreasing the bitrate                                                                             | 0.1=default (should be bigger than BufferFillnessLimitIncBitrate)                                                                                             |
| DesiredBufferFillness         | The desired buffer fillness percentage                                                                                                        | 0.075=default (should be between BufferFillnessLimitIncBitrate and BufferFillnessLimitDecBitrate)                                                             |
| MinimumBitrate                | This value is the lower limit for the bitrate                                                                                                 | 50000 (bits, default)                                                                                                                                         |
| StartBitrate                  | The bitrate used at the start of the broadcast                                                                                                | 150000 (bits, default)                                                                                                                                        |
| RTTLimitFactor                | Specifies how much the round trip time (RTT) can deviate from the lowest measured RTT, to still allow an increase of the bitrate (Admin only) | 3.0=default (should only be changed, if you have knowledge of the algorithm for changing the bitrate, -the higher the value, the lower the allowed deviation) |

### Misc Settings

| **Property**                 | **Description**                                                                                                                                                   | **Values**                                                                                                                                                                                                                                                                                                                    |
| ------------                 | ---------------                                                                                                                                                   | ----------                                                                                                                                                                                                                                                                                                                    |
| AcousticEchoCancelation      | Use Acoustic Echo Cancellation (AEC)  for Mic/Speaker chat situations, see sep. doc.                                                                              | 0 (default) / 1                                                                                                                                                                                                                                                                                                               |
| AEC:AesTimes                 | *(unsupported)*                                                                                                                                                 |                                                                                                                                                                                                                                                                                                                               |
| AEC:Agc                      | *(unsupported)*                                                                                                                                                 |                                                                                                                                                                                                                                                                                                                               |
| AEC:AecEchoLength            | *(unsupported)*                                                                                                                                                 |                                                                                                                                                                                                                                                                                                                               |
| Auth                         | Authentication for RTMP and RTSP Push streaming                                                                                                                   | "user:password"                                                                                                                                                                                                                                                                                                               |
| RTMPPublishMode              | RTMP Publish/Live/Record on Server (VOD)                                                                                                                          | 1=record, 2=append, 0=live (default)                                                                                                                                                                                                                                                                                          |
| RemoteControlPort            | IP Port for Remote Control Commands                                                                                                                               | 17600                                                                                                                                                                                                                                                                                                                         |
| LicenseCode                  | *(unsupported)*                                                                                                                                                 |                                                                                                                                                                                                                                                                                                                               |
| AllowDomain                  | *(unsupported)*                                                                                                                                                 |                                                                                                                                                                                                                                                                                                                               |
| PreviewSize                  | Resolution of the preview                                                                                                                                         | "width,height"                                                                                                                                                                                                                                                                                                                |
| RegionOrigin                 | Set position of the dynamic cropping region (only used when using resizing)                                                                                       | "left,top"                                                                                                                                                                                                                                                                                                                    |
| RTMPAllowFallbackPorts       | Try fallback ports (443, 80), if no connection to server can be established on default port 1935                                                                  | 0 (default) / 1                                                                                                                                                                                                                                                                                                               |
| RTMPAllowFallbackTunnelPorts | Try to connect to rtmpt, if connection could not be establisged for rtmp. Also, try fallback ports (443, 1935), if connection could not be established for rtmpt. | 0 (default) / 1                                                                                                                                                                                                                                                                                                               |
| RtmpUrlDelimiter             | Set delimiter for RTMP-url and streamname.                                                                                                                        | Example: "+" will split "[rtmp://localhost/live+myStream](rtmp///localhost/live+myStream)" so that "myStream" is the stream name.                                                                                                                                                                                             |
| LockGraph                    | StartPreview(), StopPreview(), StartBroadcast() and StopBroadcast() are denied when locked                                                                        | 0 (unlock) / 1 (lock)                                                                                                                                                                                                                                                                                                         |
| AddExtraFilter               | Add extra filter(s) to the graph under specific circumstances                                                                                                     | "mp4Audio:GUID", "mp4Video:GUID" (e.g. "mp4Audio;{AEED2B3D-6DA1-4C84-A85D-83547FA90486}" would add the nanocosmos aac decoder for mp4 files to the graph)                                                                                                                                                                     |
| OverlayRect                  | Sets the dimensions for a given overlay-image.                                                                                                                    | "index,left,top,right,bottom". index: the overlay-index, beginning with 0. left, top, right and bottom define a rectangle in screen-coordinates.                                                                                                                                                                              |
| OverlayBackgroundColor       | Text Overlay Color                                                                                                                                                | Must be a hexadecimal color-value in BGR-format, e.g.: “000000” (0 (0x000000) - black).                                                                                                                                                                                                                                   |
| OverlayTextColor             | Text Overlay Color                                                                                                                                                | Must be a hexadecimal color-value in BGR-format, e.g.: "0000FF" (255 (0x0000FF) - red).                                                                                                                                                                                                                                       |
| OverlaySkipColor             | Setting skipcolor to a specific value will result in this color to be rendered transparent in the overlays.                                                       | Example: If OverlayBackgroundColor was set to blue ("FF0000") setting OverlaySkipColor to blue as well will result in a transparent background. Parameter must be a hexadecimal color-value in BGR-format, e.g.: "FF0000" (blue). Disable: Setting OverlaySkipColor to "FF000000" (ABGR) will disable the usage of skipcolor. |
| OverlayAlpha                 | Sets the alpha-value for overlays.                                                                                                                                | Range: 0-1. 0.0 (not visable), 1 (fully visable).                                                                                                                                                                                                                                                                             |
| FontSize                     | Text Overlay Font Size                                                                                                                                            | VideoHeight / 25                                                                                                                                                                                                                                                                                                              |
| UseColorConverter            | Add a default color converter to the graph                                                                                                                        | 1                                                                                                                                                                                                                                                                                                                             |
| ForceNtscRate                | Force NTSC for uneven FPS                                                                                                                                         | 0/1                                                                                                                                                                                                                                                                                                                           |
| StreamOffset                 | Video Device Stream Offset                                                                                                                                        |                                                                                                                                                                                                                                                                                                                               |
| LastFileBrowserDialogPath    | returns the path for last selected file or folder                                                                                                                 |
| ShowPropertyPageForDevice    | Calls the propertypage for a given device.                                                                                                                        | 0 for device with index: 0                                                                                                                                                                                                                                                                                                    |
| UseRotation                  | enable rotation, has to be set before StartPreview or StartBroadcast is invoked                                                                                   | 0=off, 1=on                                                                                                                                                                                                                                                                                                                   |
| RotateDegrees                | set the degrees by which video should be rotated, only works if UseRotation is set to on, set before StartPreview or StartBroadcast                               | 0/90/180/270                                                                                                                                                                                                                                                                                                                  |

### MP4 Recording

| **Property**             | **Description**                                                           | **Values**            |
| ------------             | ---------------                                                           | ----------            |
| Mp4RecordOnTheFly        | Enables start/stop recording to local file while the broadcast is running | 0=off (default), 1=on |
| Mp4RecordOnTheFlyControl | If Mp4RecordOnTheFly is enabled, controls start/stop recording            | 0=stop, 1=start       |

### SyncUsingStreamOffset

| **Property**          | **Description**                   | **Values**                      |
| ------------          | ---------------                   | ----------                      |
| MaxGraphLatency       |                                   |                                 |
| RtmpClientAgentString | Sets the RTMP Client Agent String | FMLE/3.0 (compatible; FMSc/1.0) |

### Advanced Settings for extra module SourceBridge using ControlCommand

The [SourceBridge](SourceBridge) can be used for streaming and looping files and video clips (Example: Ad-insertion). 

Other available options:

| **Property**          | **Description**                                                                                                                                                    | **Values**                                |
| ------------          | ---------------                                                                                                                                                    | ----------                                |
| OpenFileBrowserDialog | opens a dialog in a browser for selecting a file or a folder, the path for the selected object can be queried via the GetConfig option "LastFileBrowserDialogPath" | 0=folder selector dialog, 1=file selector |

### Internal Registry Settings

Additionally to the SetConfig variables, the settings can also be stored in the windows registry. 
Default Registry Key: 
    `HKCU\SOFTWARE\nanocosmos\nanostream `

## Valid Streaming Formats and URLs

### RTMP

RTMP uses H.264 video codec and AAC audio codec automatically.
URLs need to separate the url/application and stream name with a **"+"**.
URL parameters should be attached to the application part.\\
Examples:
`rtmp://localhost/live+myStream`
`rtmp://localhost/live?param1=1+myStream`

### H.264/Mp4 Files

Example:\\
        `C:\temp\test.mp4`

### UDP/TS

UDP/TS supports MPEG video and audio encoding.\\
Example:
        `udp://localhost:8888`

## Example Configuration and Streaming

In the following pseudocode nanoStream identifier stands for an object instance of the nanoStream Plugin.

```c++
nanoStream.License= "nlic:LicenseString:1234…";
nanoStream.InitEncoder();
nv = nanoStream.NumberOfVideoSources;

// destination URL (Use only one of these, for parallel MP4 storage use DestinationURL2 parameter)
nanoStream.DestinationURL = "rtmp://localhost/live+myStream";	
//  Flash or Wowza Media Server
nanoStream.DestinationURL2 = "c:\temp\h264.mp4";		        
// Local MP4 file storage
nanoStream.VideoSource = 0					                    
// Video Capture Device ID
nanoStream.AudioSource = 0					                    
// Audio Capture Device ID
nanoStream.VideoFrameRate = 15;				                    
// Video Device FPS
nanoStream.VideoWidth = 640;					                
// Video Device Pixel Width
nanoStream.VideoHeight = 480;					                
// Video Device Pixel Height
nanoStream.VideoBitrate = 400000;				                
// Video Bitrate (bits/s)
nanoStream.AudioBitrate = 32000;				                
// Audio Bitrate (bits/s)
    
// optional: output stream pixel resolution (width/height)
nanoStream.VideoResizeWidth = 320;				                
// Video Stream Pixel Width
nanoStream.VideoHeight = 240;					                
// Video Stream Pixel Height
nanoStream.EnableResize = 1;					                
// Enable Video Stream Resize

// start the preview from the current camera
nanoStream.StartPreview();	// this is not required if StartBroadcast() is invoked

// Start Encoding/Broadcast
nanoStream.StartBroadcast();
```


### Example H.264 Configurations

In the following pseudocode nanoStream identifier stands for an object instance of the nanoStream Plugin.

### "Baseline Profile - LowRes - Low Latency" configuration

Features: Highest compatibility, moderate quality, low cpu/system requirements, low latency
Applications: Standard web streaming configuration for up to SD resolution, 15-30 fps and 0.1-1.5 Mbit video bitrate

```c++
nanoStream.SetConfig("H264Profile", "Baseline");	// Baseline Profile supported by most devices and players
nanoStream.SetConfig("H264Level", "10"); 		    // Lowest value, automatically increased by encoder
nanoStream.SetConfig("H264VlcMode", "1");  		    // CAVLC entropy coding mode
nanoStream.SetConfig("RateControl", "1");  		    // Strict constant bitrate
nanoStream.SetConfig("H264IFrameDistance", "50");  	// Moderate GOP length
nanoStream.SetConfig("H264PFrameDistance", "1");  	// No B-frames 
nanoStream.SetConfig("H264Quality", "1");  		    // Moderate quality, lower cpu requirements
```


### "Main Profile - LowRes - Low Latency" configuration

Features: High compatibility, moderate quality, low cpu/system requirements, low latency
Applications: Standard web streaming configuration for up to SD resolution, 15-30 fps and 0.1-1.5 Mbit video bitrate
Similar to the Baseline Profile configuration above.
This is the recommended setting for Flash Player 11 with "Netstream Buffer = 0".

```c++
nanoStream.SetConfig("H264Profile", "Main");	    // Main Profile
nanoStream.SetConfig("H264Level", "10"); 		    // Lowest value, automatically increased by encoder
nanoStream.SetConfig("H264VlcMode", "1");  		    // CAVLC entropy coding mode
nanoStream.SetConfig("RateControl", "1");  		    // Strict constant bitrate
nanoStream.SetConfig("H264IFrameDistance", "50");  	// Moderate GOP length
nanoStream.SetConfig("H264PFrameDistance", "1");  	// No B-frames 
nanoStream.SetConfig("H264Quality", "1");  		    // Moderate quality, lower cpu requirements
```

### "Main Profile - MediumRes - Higher Quality" configuration

Features: Higher quality, Higher cpu/system requirements
Applications: Standard configuration for SD resolutions, 25-30 fps and 0.5-1.5 Mbit video bitrate

```c++
nanoStream.SetConfig("H264Profile", "Main");	    // Main Profile
nanoStream.SetConfig("H264Level", "10"); 		    // Lowest value, automatically increased by encoder
nanoStream.SetConfig("H264VlcMode", "2");  		    // CABAC entropy coding mode
nanoStream.SetConfig("RateControl", "2");  		    // Average constant bitrate
nanoStream.SetConfig("H264IFrameDistance", "50");  	// Moderate GOP length
nanoStream.SetConfig("H264PFrameDistance", "1");  	// No B-frames 
nanoStream.SetConfig("H264Quality", "2");  	 	    // Quality might be increased here
```


### "Main Profile - MediumRes - Highest Quality" configuration

Features: Highest quality, Highest cpu/system requirements
Applications: HQ configuration for SD resolutions, 25-30 fps and 0.5-1.5 Mbit video bitrate

```c++
nanoStream.SetConfig("H264Profile", "Main");	    // Main Profile
nanoStream.SetConfig("H264Level", "10"); 		    // Lowest value, automatically increased by encoder
nanoStream.SetConfig("H264VlcMode", "2");  		    // CABAC entropy coding mode
nanoStream.SetConfig("RateControl", "2");  		    // Average constant bitrate
nanoStream.SetConfig("H264IFrameDistance", "50");  	// Moderate GOP length
nanoStream.SetConfig("H264PFrameDistance", "3");  	// Coding 2 B-frames between I/P-frames
nanoStream.SetConfig("H264Quality", "6");  		    // Quality might be increased here
```


### Low Latency Streaming

For further options to configure low latency streaming see the separate document "LiveVideoEncoder-Low-Latency".


### Contact

*Please contact us for further information, extended services are available upon request.*

[http://www.nanocosmos.de](http://www.nanocosmos.de/)

[info@nanocosmos.de](mailto/info@nanocosmos.de)


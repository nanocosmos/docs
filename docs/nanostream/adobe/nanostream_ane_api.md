~~CLOSETOC~~
### NanoStreamANE API

nanocosmos GmbH

The NanoStreamWrapperANE API is a video capture and encoding software for streaming live video and audio to internet based media servers and other network clients.

It can be used to develop an Adobe Native Extension (ANE) to get access to device-specific libraries and features that are not available in the built-in ActionScript. Adobe Native Extension based on ActionScript can run on Windows and Mac OS X platforms.

The NanoStreamWrapperANE API supports internet broadcast streaming and local recording at the same time. A lots of video devices are supported, also Blackmagic devices. The resolution, frame rate, samplerate and more can be manipulated. For a full feature list and platform specific features look at the method list below.

## Setup:

1.  Create a new Adobe Flex Project

2.  Select desktop (Adobe AIR) Application

3.  Under native extension select the native extension nanoStreamWrapper.ane

4.  Add the NanoStreamWrapper.as to the project src folder

5.  Create a new Object of the NanoStreamWrapper

6.  Use the functions to build your app.

## System Requirements:

Mac OSX 10.7 or newer, Windows 7 or newer

**Hardware Requirements:**

Intel Core2 Duo or later

Recommended for HD capture: Intel Core i7 or Xeon


| ANE NanoStreamWrapper   |                                                 |
|-------------------------|-------------------------------------------------|
| Method Name             | Description                                     |
| InitPlugin              | Initialization of the Plugin.                   |
| SetXml                  | deprecated - no functionality                   |
| SetLicense              | Set license for nano sdk                        |
| SetConfig               | Set property over Identifier.                   |
| UpdatePreviewDimensions | Update preview dimensions of the bmp            |
| StartPreview            | Start the preview.                              |
| StopPreview             | Stop the preview.                               |
| StartBroadcast          | Start broadcasting.                             |
| StopBroadcast           | Stop broadcasting.                              |
| GetNumberOfVideoSources | Count video sources with current settings       |
| GetNumberOfAudioSources | Count audio sources with current settings       |
| GetVideoSource          | Get name of the video source as string.         |
| GetAudioSource          | Get name of the audio source as string.         |
| SetVideoSource          | Set video source for preview or broadcasting    |
| SetVideoSourceFromURL   | URL to an mp4 file source or ramp source        |
| SetAudioSource          | Set audio source for preview or broadcasting    |
| GetPreviewFrame         | Get current preview Frame                       |
| SetVideoWidth           | Set width of video in pixels                    |
| SetVideoHeight          | Set height of video in pixels                   |
| SetVideoResizeWidth     | Resize width of video in pixels                 |
| SetVideoResizeHeight    | Resize height of video in pixels                |
| SetVideoFramerate       | Set frame rate of video in frames per second    |
| SetVideoBitrate         | Set bitrate of video in kbits per second        |
| SetAudioBitrate         | Set bitrate of audio in kbits per second        |
| SetAudioSamplerate      | Set the samplerate of the audio in Hertz        |
| GetAudioLevel           | Get the audio level of a channel                |
| SetAudioVolume          | Set audio volume                                |
| SetAudioPreviewVolume   | Set audio volume of preview                     |
| SetColorSpace           | Set the color space of an input source          |
| GetNumberOfColorspaces  | Get the count of color spaces                   |
| GetColorspace           | Get color space name as string                  |
| GetNumberOfResolutions  | Get count of available resolutions              |
| GetResolution           | Get count of resolutions                        |
| GetNumberOfFramerates   | Count of available frame rates as integer value |
| GetFramerate            | Get the frame rate of a video source            |
| SetDeinterlacing        | Set deinterlacing mode and method               |
| GetNumberOfOutputs      | Get count of output sources                     |
| AddOutput               | Add new output source with url                  |
| SetOutputUrl            | Set output source with url. Local or rtmp       |
| SetFilesourceFilename   | Set the filename of a local source              |
| ClearOutputs            | Reset all output sources                        |
| SetVideoEffect          | Add a video effect.                             |
| SetOverlay              | Add a overlay to the video                      |
| ShowPropertyPage        | Show property page                              |
| SetLog                  | Set log file path and log level.                |
| dispose():void          | Reset buffer                                    |

## Method Description:

## Setup the Plugin

InitPlugin
----------

### Declaration

InitPlugin(xmlPath:String):int

### Parameters

| xmlPath:String | Path to the xml file with configuration information, can be local or a url. |

### Return Value

**-1** if the initialization failed

### Description

Initialization of the plugin.

### Availability

On Windows and Mac OSX

SetLicense
----------

### Declaration

SetLicense(licenseStr:String):int

### Parameters

| licenseStr:String | License String getting from nano. |
|-------------------|-----------------------------------|

### Return Value

-**1** if call failed

### Description

Set license for nano SDK

### Availability

On Windows and Mac OSX

SetConfig
---------

### Declaration

SetConfig(property:String, value:String):int

### Parameters

| property:String | Property identifier as string. See property list for configuration on page 32. |
|-----------------|--------------------------------------------------------------------------------|
| value:String    | Value for property as string representation.                                   |

### Return Value

**1** if call was successful, **0** otherwise

### Description

Set property over Identifier.

### Availability

On Windows and Mac OSX

Preview
-------

UpdatePreviewDimensions
-----------------------

### Declaration

UpdatePreviewDimensions():void

### Description

Updates the preview with the current width and height.

### Availability

On Windows and Mac OSX

StartPreview
------------

### Declaration

StartPreview():int

### Return Value

-**1** if call failed

### Description

Start the preview.

### Availability

On Windows and Mac OSX

StopPreview
-----------

### Declaration

StopPreview():int

### Return Value

-**1** if call failed

### Description

Stop the preview.

### Availability

On Windows and Mac OSX

## Broadcast

StartBroadcast
--------------

### Declaration

StartBroadcast():int

### Return Value

ERROR\_SETUP\_ENCODER\_FAILED = -2

ERROR\_RTMP\_OUTPUT\_SOURCE1\_FAILED = 2

ERROR\_RTMP\_OUTPUT\_SOURCE2\_FAILED = 3

### Description

Start broadcasting.

### Availability

On Windows and Mac OSX

StopBroadcast
-------------

### Declaration

StopBroadcast():int

### Return Value

-**1** if call failed

### Description

Stop broadcasting.

### Availability

On Windows and Mac OSX

## Video Source & Audio Source handling

GetNumberOfVideoSources
-----------------------

### Declaration

GetNumberOfVideoSources():int

### Return Value

Count of all available video sources.

### Description

Count of all available video sources with current settings

### Availability

On Windows and Mac OSX

GetNumberOfAudioSources
-----------------------

### Declaration

GetNumberOfAudioSources():int

### Return Value

Count of all available audio sources.

### Description

Count of all available audio sources with current settings

### Availability

On Windows and Mac OSX

GetVideoSource
--------------

### Declaration

GetVideoSource(index:int):String

### Parameters

| index:int | Index of the video source. The index of the video source, from **0 - GetNumberOfVideoSources -1** |
|-----------|---------------------------------------------------------------------------------------------------|

### Return Value

Video source name as string.

### Description

Get name of the video source as string. Call **GetNumberOfVideoSources** first.

### Availability

On Windows and Mac OSX

GetAudioSource
--------------

### Declaration

GetAudioSource(index:int):String

### Parameters

| index:int | Index of the audio source. The index of the audio source, from **0 - GetNumberOfAudioSources -1** |
|-----------|---------------------------------------------------------------------------------------------------|

### Return Value

Audio source name as string.

### Description

Get name of the audio source as string. Call **GetNumberOfAudioSources** first.

### Availability

On Windows and Mac OSX

SetVideoSource
--------------

### Declaration

SetVideoSource(index:int, mixSource:int, mixMode:int):int

### Parameters

| index:int     | Index of the video source. The index of the video source goes from **0 - GetNumberOfVideoSources -1**                          |
|---------------|--------------------------------------------------------------------------------------------------------------------------------|
| mixSource:int | set **0** to to set only the first video source. **1** to set a second video source                                            
|               |  —second video source only available on Microsoft Windows                                                                        |
| mixMode:int   | when mixSource **1** is set, the mix mode to combine two video sources can be chosen here. See available mix modes on page 33.

                 —only available on Microsoft Windows                                                                                            |

### Return Value

-**1** if call failed

### Description

Set video source for preview or broadcasting over index. Call **GetNumberOfVideoSources** first. The mix source defines the video source you want set. The mixSource and mixMode is optional and only available on Microsoft Windows. There with you can combine two videos over the mixMode.

### Availability

On Mac OSX only one video source can use. On Microsoft Windows up to two video sources can be used and be combined in different ways.

SetVideoSourceFromURL
---------------------

### Declaration

SetVideoSourceFromURL(url:String):int

### Parameters

| url:String | URL to use an mp4 file as video source. |
|------------|-----------------------------------------|

### Return Value

-**1** if call failed

### Description

URL to an mp4 file source to stream this file.

### Availability

Only Supported under Microsoft Windows

SetAudioSource
--------------

### Declaration

SetAudioSource(index:int):int

### Parameters

| index:int | Index of the audio source. The index of the audio source, from **0 - GetNumberOfAudioSources -1** |
|-----------|---------------------------------------------------------------------------------------------------|

### Return Value

-**1** if call failed

### Description

Set audio source for preview or broadcasting over index. Call **GetNumberOfAudioSources** first.

### Availability

Under Windows and Mac OSX

GetPreviewFrame
---------------

### Declaration

GetPreviewFrame(options:int = GET\_FRAME\_BITMAP):Boolean

### Parameters

| options:int | option as integer. Default is GET\_FRAME\_BITMAP = 2. A                                                                                                  
Also possible:                                                                 

GET\_FRAME\_RAW\_BYTES:int = 4, GET\_POWER\_OF\_2\_FRAME\_BGRA\_BYTES:int = 8


### Return Value

True if new frame was received otherwise false

### Description

Get current preview Frame.

## Video Properties

SetVideoWidth
-------------

### Declaration

SetVideoWidth(width:int, mixSource:int):int

### Parameters

| width:int     | Width of the video in pixels as integer value                                       |
|---------------|-------------------------------------------------------------------------------------|
| mixSource:int | set **0** to to set only the first video source. **1** to set a second video source

                 —second video source only available on Microsoft Windows                             |

### Return Value

-**1** if call failed

### Description

Set width of video in pixels. With mixSource the height for two video sources can be set.

### Availability

Set Width is supported under Mac OS X and Microsoft Windows. The second mix source is only available under Microsoft Windows.

SetVideoHeight
--------------

### Declaration

SetVideoHeight(height:int, mixSource:int):int

### Parameters

| height:int    | Height of the video in pixels as integer value                                      |
|---------------|-------------------------------------------------------------------------------------|
| mixSource:int | set **0** to to set only the first video source. **1** to set a second video source

                 —second video source only available on Microsoft Windows                             |

### Return Value

-**1** if call failed

### Description

Set height of video in pixels. With mixSource the height for two video sources can be set.

### Availability

Set Height is supported under Mac OS X and Microsoft Windows. The second mix source is only available under Microsoft Windows.

SetVideoResizeWidth
-------------------

### Declaration

SetVideoResizeWidth(width:int, index:int):int

### Parameters

| width:int | resize width of the video in pixels as integer value                             |
|-----------|----------------------------------------------------------------------------------|
| index:int | Index of the output. The index of the output, from **0 - GetNumberOfOutputs -1** |

### Return Value

-**1** if call failed

### Description

Resize width of video in pixels.

### Availability

Only Supported under Microsoft Windows

SetVideoResizeHeight
--------------------

### Declaration

SetVideoResizeHeight(height:int, index:int):int

### Parameters

| height:int | resize height of the video in pixels as integer value                            |
|------------|----------------------------------------------------------------------------------|
| index:int  | Index of the output. The index of the output, from **0 - GetNumberOfOutputs -1** |

### Return Value

-**1** if call failed

### Description

Resize height of video in pixels.

### Availability

Only supported under Microsoft Windows

SetVideoFramerate
-----------------

### Declaration

SetVideoFramerate(framerate:Number, mixSource:int):int

### Parameters

| framerate:Number | Frame rate in frames per Second(FPS) as number value.                               |
|------------------|-------------------------------------------------------------------------------------|
| mixSource:int    | set **0** to to set only the first video source. **1** to set a second video source

                    —second video source only available on Microsoft Windows                             |

### Return Value

-**1** if call failed

### Description

Set frame rate of video in frames per second (FPS). With mixSource the frame rate for two video sources can be set under Microsoft Windows.

### Availability

Set video frame rate is supported under Mac OS X and Microsoft Windows. Mix Source is only available under Microsoft Windows.

SetVideoBitrate
---------------

### Declaration

SetVideoBitrate(bitrate:int, index:int):int

### Parameters

| bitrate:int | Video bitrate as integer value.                                                                                    |
|-------------|--------------------------------------------------------------------------------------------------------------------|
| index:int   | index of output to set the bitrate for multiple encoders.                                                          

               —set different outputs is only available on Microsoft Windows. On Mac OS X the same bitrate is set to all outputs.  |

### Return Value

-**1** if call failed

### Description

Set bitrate of video in kbits per second (kbits/s).

### Availability

Under Mac OS X the same bitrate is set to all outputs. Under Microsoft Windows every output can be set to another bitrate.

## Audio Properties

SetAudioBitrate
---------------

### Declaration

SetAudioBitrate(bitrate:int, index:int):int

### Parameters

| bitrate:int | Audio bitrate as integer value.                                                                                    |
|-------------|--------------------------------------------------------------------------------------------------------------------|
| index:int   | index of output to set the bitrate for multiple encoders.                                                          

               —set different outputs is only available on Microsoft Windows. On Mac OS X the same bitrate is set to all outputs.  |

### Return Value

-**1** if call failed

### Description

Set bitrate of audio in kbits per second (kbits/s).

### Availability

Under Mac OS X the same bitrate is set to all outputs. Under Microsoft Windows every output can be set to another bitrate.

SetAudioSamplerate
------------------

### Declaration

SetAudioSamplerate(samplerate:int):int

### Parameters

| samplerate:int | Samplerate of audio as integer value |
|----------------|--------------------------------------|

### Return Value

-**1** if call failed

### Description

Set the samplerate of the audio in Hertz (Hz).

### Availability

Under Windows and Mac OSX.

GetAudioLevel
-------------

### Declaration

GetAudioLevel(channel:int):int

### Parameters

| channel:int | channel id as integer. |
|-------------|------------------------|

### Return Value

Audiolevel as integer value.

### Description

Get the audio level of a channel.

### Availability

Under Windows and Mac OSX.

SetAudioVolume
--------------

### Declaration

SetAudioVolume(volume:int):int

### Parameters

| volume:int | volume as integer value |
|------------|-------------------------|

### Return Value

**-1** if call failed

### Description

Set audio volume.

### Availability

Under Windows and Mac OSX.

SetAudioPreviewVolume
---------------------

### Declaration

SetAudioPreviewVolume(volume:int):int

### Parameters

| volume:int | volume as integer value |
|------------|-------------------------|

### Return Value

**-1** if call failed

### Description

Set audio volume of preview.

### Availability

Under Windows and Mac OSX.

## Color Management

SetColorSpace
-------------

### Declaration

SetColorSpace(index:int, mixSource:int):int

### Parameters

| index:int     | index of the input source.                                                          |
|---------------|-------------------------------------------------------------------------------------|
| mixSource:int | set **0** to to set only the first mixed source. **1** to set a second mixed source

                 —second mixed source is only available on Microsoft Windows                          |

### Return Value

-**1** if call failed

### Description

Set the color space of an input source. Only the firtst source is supported under Mac OS X

### Availability

Under Windows and Mac OSX.

GetNumberOfColorspaces
----------------------

### Declaration

GetNumberOfColorspaces(width:int, height:int, mixSource:int):int

### Parameters

| width:int     | width of the video source                                                        |
|---------------|----------------------------------------------------------------------------------|
| height:int    | height of the video source                                                       |
| mixSource:int | set **0** to to get the first mixed source. **1** to get the second mixed source

                 —second mixed source is only available on Microsoft Windows                       |

### Return Value

Count of color spaces as integer value.

### Description

Get the count of color spaces. Get the color space for the specified with and height.

### Availability

Under Windows and Mac OSX. Under Mac OSX mix source is not supported.

GetColorspace
-------------

### Declaration

GetColorspace(index:int, mixSource:int):String

### Parameters

| index:int     | Index of the color spaces. The index of the color spaces, from **0 - GetNumberOfColorspaces -1** |
|---------------|--------------------------------------------------------------------------------------------------|
| mixSource:int | set **0** to to get the first mixed source. **1** to get the second mixed source                 

                 —second mixed source is only available on Microsoft Windows                                       |

### Return Value

color space name as String

### Description

Get color space name as string. First call **GetNumberOfColorspaces.**

### Availability

Under Windows and Mac OSX. Under Mac OSX only the first mix source is supported.

## Resolution & Frame rate

GetNumberOfResolutions
----------------------

### Declaration

GetNumberOfResolutions(mixSource:int):int

### Parameters

| mixSource:int | set **0** to to get the first mixed source. **1** to get the second mixed source \\ —second mixed source is only available on Microsoft Windows  |

### Return Value

Count of resolutions as integer value.

### Description

Get count of resolutions.

### Availability

Under Windows and Mac OSX. Under Mac OSX only the first mix source is supported.

GetResolution
-------------

### Declaration

GetResolution(index:int, mixSource:int):Object

### Parameters

| index:int     | Index of the resolutions. The index of the resolutions, from **0 - GetNumberOfResolutions -1** |
|---------------|------------------------------------------------------------------------------------------------|
| mixSource:int | set **0** to to get the first mixed source. **1** to get the second mixed source               

                 —second mixed source is only available on Microsoft Windows                                     |

### Return Value

Get resolution of video source. First call **GetNumberOfResolutions.**

### Description

Get count of resolutions.

### Availability

Under Windows and Mac OSX. Under Mac OSX only the first mix source is supported.

GetNumberOfFramerates
---------------------

### Declaration

GetNumberOfFramerates(width:int, height:int, colorspace:String, mixSource:int):int

### Parameters

| width:int         | width of the video source                                                        |
|-------------------|----------------------------------------------------------------------------------|
| height:int        | height of the video source.                                                      |
| colorspace:String | name of the color space get from GetColorspace                                   |
| mixSource:int     | set **0** to to get the first mixed source. **1** to get the second mixed source

                     —second mixed source is only available on Microsoft Windows                       |

### Return Value

Count of available frame rates as integer value.

### Description

Get count of available frame rates.

### Availability

Under Windows and Mac OSX. Under Mac OSX only the first mix source is supported.

GetFramerate
------------

### Declaration

GetFramerate(index:int, mixSource:int):Number

### Parameters

| index:int     | Index of the frame rate. The index of the frame rate, from **0 - GetNumberOfFramerates -1** |
|---------------|---------------------------------------------------------------------------------------------|
| mixSource:int | set **0** to to get the first mixed source. **1** to get the second mixed source            

                 —second mixed source is only available on Microsoft Windows                                  |

### Return Value

Frame rate (FPS) as number value.

### Description

Get the frame rate of a video source. Call **GetNumberOfFramerates** first.

### Availability

Under Windows and Mac OSX. Under Mac OSX only the first mix source is supported.

SetDeinterlacing
----------------

### Declaration

SetDeinterlacing(mode:int, method:int):int

### Parameters

| mode:int   | possible values: **0**=off, **1**=auto, **2**=on \\ --no auto mode for mac                                                                                               |
| method:int | possible values: **0**=duplicate field/bob, **1**=blend, **2**=vertical filter, **3**=edge, 4=median, **5**=median2 |

### Return Value

**-1** if call failed

### Description

Set deinterlacing mode and method.

### Availability

Under Windows and Mac OSX.

## Outputs

GetNumberOfOutputs
------------------

### Declaration

GetNumberOfOutputs():int

### Return Value

Count of outputs as integer value.

### Description

Get count of outputs.

### Availability

Only Supported under Microsoft Windows.

AddOutput
---------

### Declaration

AddOutput(url:String):int

### Parameters

| url:String | Url of outputs can be a local mp4 recording or a rtmp source. |
|------------|---------------------------------------------------------------|

### Return Value

**-1** if call failed

### Description

Add new output source with url.

### Availability

Only Supported under Microsoft Windows.

SetOutputUrl
------------

### Declaration

SetOutputUrl(url:String, index:int):int

### Parameters

| url:String | Url of outputs can be a local mp4 recording or a rtmp server. |
|------------|---------------------------------------------------------------|
| index:int  | Index of the output.                                          |

### Return Value

**-1** if call failed

### Description

Set output with url. A local mp4 recording or a rtmp server.

### Availability

Under Windows and Mac OSX.

SetFilesourceFilename
---------------------

### Declaration

SetFilesourceFilename(url:String):int

### Parameters

| url:String | Url to the local file |
|------------|-----------------------|

### Return Value

**-1** if call failed

### Description

Set the filename of a local source.

### Availability

Only Supported under Microsoft Windows.

ClearOutputs
------------

### Declaration

ClearOutputs():int

### Return Value

**-1** if call failed

### Description

Reset all outputs except the first one.

### Availability

Only Supported under Microsoft Windows.

## Video Special

SetVideoEffect
--------------

### Declaration

SetVideoEffect(mode:int):int

### Parameters

| mode:int | Mode of video effect. See possible overlay effects on page 33 |
|----------|---------------------------------------------------------------|

### Return Value

**-1** if call failed

### Description

Add a video effect. For overlay.

### Availability

Only Supported under Microsoft Windows.

SetOverlay
----------

### Declaration

SetOverlay(url:String):int

### Parameters

| url:String | Url of the overlay source. Can be a locale path or server url to a png or txt file. Also can be a txt string. |
|------------|---------------------------------------------------------------------------------------------------------------|

### Return Value

**-1** if call failed

### Description

Add a overlay to the video.

### Availability

Only Supported under Microsoft Windows.

ShowPropertyPage
----------------

### Declaration

ShowPropertyPage(value:int):int

### Parameters

| value:int | **1** or **0** are possible values |
|-----------|------------------------------------|

### Return Value

**-1** if call failed

### Description

Show property page. Only used for Blackmagic devices.

### Availability

Only supported under Microsoft Windows.

## Logging

SetLog
------

### Declaration

SetLog(logFile:String, logLevel:int):int

### Parameters

| logFile:String | local path for logfile as string.                 |
|----------------|---------------------------------------------------|
| logLevel:int   | log level as integer. For possible loglevels 0-9. |

### Return Value

**-1** if call failed

### Description

Set log file path and log level.

### Availability

Under Windows and Mac OSX.

### Availability

Under Windows and Mac OSX.

dispose
-------

### Declaration

dispose():void

### Description

Destructor.

### Availability

Under Windows and Mac OSX.

| Property name               | Description                                                                                                              | Values                                                                                                                                                                                                                                                                                                                        |
| Mp4RecordOnTheFlyChangeName |                                                                                                                          |                                                                                                                                                                                                                                                                                                                               |
| Mp4RecordOnTheFlyControl    | If Mp4RecordOnTheFly is enabled, controls start/stop recording                                                           | 0=stop, 1=start                                                                                                                                                                                                                                                                                                               |
| H264IFrameDistance          |                                                                                                                          |                                                                                                                                                                                                                                                                                                                               |
| AudioPreview                |                                                                                                                          |                                                                                                                                                                                                                                                                                                                               |
| Mp4RecordOnTheFly           | Enables start/stop recording to local file while the broadcast is running                                                | 0=off (default), 1=on                                                                                                                                                                                                                                                                                                         |
| H264Quality                 | H.264 Encoder Quality/Speed Ratio                                                                                        | 0=worst/fastest 1=default 6=highest/slowest                                                                                                                                                                                                                                                                                   |
| OutputFrameRate             | Video Output (Encoded) Frame Rate                                                                                        | 5,10,15,20,25,30, OR 23980 OR 29970                                                                                                                                                                                                                                                                                           |
| RTMPWriteTimecode           | Send timecodes in RTMP streams, If enabled RTMP timecodes are sent in addition to the always sent RTMP packet timestamps | 0=off (default), 1=on                                                                                                                                                                                                                                                                                                         |
| TimecodeInterval            | RTMP/MP4 timecode interval in milliseconds                                                                               | Should be higher or equal to 1000 (1s)                                                                                                                                                                                                                                                                                        |
| AVFShowBlackmagicDevices    | use AVFoundation for BlackMagic devices                                                                                  | 0=off (default), 1=on                                                                                                                                                                                                                                                                                                         |
| OverlayRect                 | Sets the dimensions for a given overlay-image.                                                                           | “index,left,top,right,bottom”. index: the overlay-index, beginning with 0. left, top, right and bottom define a rectangle in screen-coordinates.                                                                                                                                                                              |
| OverlayAlpha                | Sets the alpha-value for overlays.                                                                                       | Range: 0-1. 0.0 (not visable), 1 (fully visable).                                                                                                                                                                                                                                                                             |
| OverlayTextColor            | Text Overlay Color                                                                                                       | Must be a hexadecimal color-value in BGR-format, e.g.: “0000FF” (255 (0x0000FF) - red)                                                                                                                                                                                                                                        |
| OverlayBackgroundColor      |                                                                                                                          | Must be a hexadecimal color-value in BGR-format, e.g.: “000000” (0 (0x000000) - black).                                                                                                                                                                                                                                       |
| OverlaySkipColor            | Setting skipcolor to a specific value will result in this color to be rendered transparent in the overlays.              | Example: If OverlayBackgroundColor was set to blue (“FF0000”) setting OverlaySkipColor to blue as well will result in a transparent background. Parameter must be a hexadecimal color-value in BGR-format, e.g.: “FF0000” (blue). Disable: Setting OverlaySkipColor to “FF000000” (ABGR) will disable the usage of skipcolor. |
| AudioDelay                  | Streaming Audio Delay / Offset (ms)                                                                                      |                                                                                                                                                                                                                                                                                                                               |
| ShowPropertyPageForDevice   | Calls the propertypage for a given device.                                                                               | 0 for device with index: 0                                                                                                                                                                                                                                                                                                    |

## Property

## Mixmode

NO\_MIXING = 0 (if video mixing is not used)

LEFT\_RIGHT\_FULL = 1

LEFT\_RIGHT\_HALF = 2

TOP\_BOTTOM = 3

INTERLACED\_LINES = 4

INTERLACED\_COLUMN = 5

ANAGLYPH = 6

PIC\_IN\_PIC\_LEFT\_TOP = 7

PIC\_IN\_PIC\_RIGHT\_TOP = 8

PIC\_IN\_PIC\_LEFT\_BOTTOM = 9

PIC\_IN\_PIC\_RIGHT\_BOTTOM = 10

VIDEO1\_ONLY = 11

VIDEO2\_ONLY = 12

REGION = 13

MAX = 14

## Overlay Effects

Overlay off = 0

Left Top = 1

Right Top = 2

Left Bottom = 3

Right bottom = 4

Free Postion = 5

## Example Video Device Setup:

1.  Connect all devices

2.  Start the ane programm

3.  Select a correct device with resolution and frame rate fit to your GoPro camera settings

# nanoStream MacOS API

## Intro

The nanoStream MacOS dylib API is a video capture and encoding software for streaming live video and audio to internet based media servers and other network clients.

The nanoStream MacOS dylib API supports internet broadcast streaming and local recording at the same time. A lots of video devices are supported, also Blackmagic devices. The resolution, frame rate, samplerate and more can be manipulated. For a full feature list and platform specific features look at the method list below.

It works perfectly together with internet streaming servers like Wowza Media Server and Flash Media Server, streaming to Mobile devices like iPhone, Silverlight and other playback clients is possible.

* Note: this is preliminary documentation, please contact us for further information or help.

## Setup:

The best way to start is using the C++ sample code included in the SDK.

## System Requirements:

Mac OSX 10.9 or newer, Windows 7 or newer

**Hardware Requirements:**

Intel Core2 Duo or later

Recommended for HD capture: Intel Core i7 or Xeon



| Method Name         | Description                                | libnanoStream.dylib Support  | Mac Plugin Support    | Mac Framework Support  | ANE Support |
|------------------------------|---------------------------------------------------------------------------|-------------------------------|--------------------------|-------------------------|--------------|
| InitPlugin | Initialization of the Plugin             | nanoStream | initEncoder   | init | ✔ |
| SetXml           | deprecated - no functionality                      | ✘              | ✘           | ✘           | ✔     |
| GetVersion         | Get version number of the SDK                      | ✔              |             |            |       |
| SetLicense         | Set license for nano SDK                        | ✔              | ✔           | ✔           | ✔     |
| GetLicense         | Get the current license of the SDK                   | ✔              |             |            |       |
| SetConfig          | Set property over Identifier.                      | ✔              | ✔           | ✔           | ✔     |
| UpdatePreviewDimensions   | Update preview dimensions of the bmp                  | ✘              | ✘           | ✘           | ✔     |
| GetPreviewDimensions    | Get the current preview dimensions                   | ✔              |             |            |       |
| GetPreviewImage       | Get the preview image                          | ✔              |             |            |       |
| GetPreviewFrame       | Get current preview Frame                        | ✘              | ✘           | ✘           | ✔     |
| StartPreview        | Start the preview.                           | ✔              | ✔           | ✘           | ✔     |
| StopPreview         | Stop the preview.                            | ✔              | ✔           | ✘           | ✔     |
| StartBroadcast       | Start broadcasting.                           | ✔              | ✔           | startStream      | ✔     |
| StopBroadcast        | Stop broadcasting.                           | ✔              | ✔           | stopStream      | ✔     |
| GetNumberOfVideoSources   | Count video sources with current settings                | ✔              | ✔           | ✔           | ✔     |
| GetNumberOfAudioSources   | Count audio sources with current settings                | ✔              | ✔           | ✔           | ✔     |
| GetVideoSource        | Get name of the video source as string.                 | ✔              | ✔           | ✘           | ✔     |
| GetAudioSource        | Get name of the audio source as string.                 | ✔              | ✔           | ✘           | ✔     |
| SetVideoSource        | Set video source for preview or broadcasting              | ✔              | VideoSource      | ✘           | ✔     |
| SetVideoSourceFromURL    | URL to an mp4 file source or ramp source                | ✘              | ✘           | ✘           | ✔     |
| SetAudioSource        | Set audio source for preview or broadcasting              | ✔              | AudioSource      | ✘           | ✔     |
| SetVideoWidth        | Set width of video in pixels                      | ✔              | VideoWidth       | ✔           | ✔     |
| GetVideoWidth        | Get width of video in pixels                      | ✔              | VideoWidth       |            |       |
| SetVideoHeight        | Set height of video in pixels                      | ✔              | VideoHeight      | ✔           | ✔     |
| GetVideoHeight        | Get height of video in pixels                      | ✔              | VideoHeight      |            |       |
| SetVideoResizeWidth     | Resize width of video in pixels                     | ✘              | ✔           | ✘           | ✔     |
| SetVideoResizeHeight     | Resize height of video in pixels                    | ✘              | ✔           | ✘           | ✔     |
| SetVideoFramerate      | Set frame rate of video in frames per second              | SetFramerate        | VideoFrameRate     | setFrameRate     | ✔     |
| SetNumberOfChannels     | set channel number                           | ✔              |             |            |       |
| SetVideoBitrate       | Set bitrate of video in kbits per second                | ✔              | ✔           | ✔           | ✔     |
| GetVideoBitrate       | Get the current video bitrate                      | ✔              |             |            |       |
| SetAudioBitrate       | Set bitrate of audio in kbits per second                | ✔              | ✔           | ✔           | ✔     |
| GetAudioBitrate       | Get the current audio bitrate                      | ✔              |             |            |       |
| SetAudioSamplerate      | Set the samplerate of the audio in Hertz                | ✔              | ✘           | setSampleRate     | ✔     |
| GetAudioLevel        | Get the audio level of a channel                    | ✔              | ✔           | ✔           | ✔     |
| SetAudioVolume        | Set audio volume                            | ✔              | AudioVolume      | ✘           | ✔     |
| SetAudioPreviewVolume    | Set audio volume of preview                       | ✔              | AudioPreviewVolume | ✘ | ✔                 |
| SetColorSpace        | Set the color space of an input source                 | ✔              | ✔           | ✘           | ✔     |
| GetNumberOfColorspaces   | Get the count of color spaces                      | ✔              | ✔           | ✘           | ✔     |
| GetColorspace       | Get color space name as string                     | ✔              | ✔           | ✔           | ✔     |
| GetNumberOfResolutions   | Get count of available resolutions                   | ✔              | ✔           | ✘           | ✔     |
| GetResolution       | Get count of resolutions                        | ✔              | ✔           | ✘           | ✔     |
| GetNumberOfFramerates   | Count of available frame rates as integer value | GetNumberOfFrameRates | ✔              | ✘           | ✔           |
| GetFramerate        | Get the frame rate of a video source                  | ✔              | ✔           | getFrameRate     | ✔     |
| SetDeinterlacing      | Set deinterlacing mode and method                    | ✘              | ✘           | ✘           | ✔     |
| GetNumberOfOutputs     | Get count of output sources                       | ✘              | ✔           | ✘           | ✔     |
| AddOutput         | Add new output source with url                     | ✘              | ✔           | ✘           | ✔     |
| SetOutputUrl        | Set output source with url. Local or rtmp                | ✔              | ✔           | setOutputUrl     | ✔     |
| GetOutputUrl        |                                     | ✔              |             |            |       |
| GetNumberOfOutputUrls   |                                     | ✔              |             |            |       |
| AcceptDataInSampleBuffer |  ✔                                    |               |             |            |       |
| AddSampleBuffer      |                                     | ✔              |             |            |       |
| SetFilesourceFilename   | Set the filename of a local source                   | ✘              | ✘           | ✘           | ✔     |
| ClearOutputs        | Reset all output sources                        | ✘              | ✔           | ✘           | ✔     |
| SetVideoEffect       | Add a video effect.                           | ✘              | ✔           | ✘           | ✔     |
| SetOverlay         | Add a overlay to the video                       | ✘              | ✘           | ✘           | ✔     |
| ShowPropertyPage      | Show property page                           | ✘              | ✔           | ✘           | ✔     |
| SetLog           | Set log file path and log level.                    | ✔              | ✔           | ✔           | ✔     |
| SetXmlProfile       |                                     | ✔              |             |            |       |
| dispose():void       | Reset buffer                              | ✘              | ✘           | ✘           | ✔     |




# Method Description:

## Setup the Plugin

### InitPlugin

#### Declaration


```obj
InitPlugin(xmlPath:String):int
```


#### Parameters

{!docs/nanostream/general/nanocosmos_method_parameter_header.md!}
| xmlPath|String | Path to the xml file with configuration information, can be local or a url. <sup>1</sup>|

<sup>1</sup> **— deprecated - no functionality**|


#### Return Value


**-1** if the initialization failed


#### Description


Initialization of the plugin.


#### Availability


On Windows and Mac OSX




### GetVersion

#### Declaration

```obj
GetVersion()
```

#### Return Value

Version number as int value

#### Description

Return the version number of the SDK as int value

#### Availability

On Mac OSX
### SetLicense

#### Declaration

```obj
SetLicense(licenseStr:String):int
```

#### Parameters
{!docs/nanostream/general/nanocosmos_method_parameter_header.md!}
| licenseStr|String | License String getting from nano. |

#### Return Value

-**1** if call failed

#### Description

Set license for nano SDK

#### Availability

On Windows and Mac OSX


### GetLicense

#### Declaration

```obj
GetLicense()
```

#### Return Value

String represantation of the license

#### Description

Get license for nano SDK

#### Availability

On Mac OSX

### SetConfig


#### Declaration

```obj
SetConfig(property:String, value:String):int
```

#### Parameters
{!docs/nanostream/general/nanocosmos_method_parameter_header.md!}
| property|String | Property identifier as string. See property list for configuration on page 32. |
| value|String  | Value for property as string representation.                  |

#### Return Value

**1** if call was successful, **0** otherwise

#### Description

Set property over Identifier.

#### Availability

On Windows and Mac OSX

## Preview


### UpdatePreviewDimensions

#### Declaration

UpdatePreviewDimensions():void

#### Description

Updates the preview with the current width and height.

#### Availability

On Windows and Mac OSX

### GetPreviewDimensions


#### Declaration

```cpp
GetPreviewDimensions(long *width, long *height, long *size)
```


#### Parameters

{!docs/nanostream/general/nanocosmos_method_parameter_header.md!}
| width|long | Pointer to return the video width |
| height|long | Pointer to return the video height |
| size|long | Pointer to return the video size |

#### Return Value

**1** if call failed, **0** otherwise

#### Description

Get the current preview dimensions.

### GetPreviewImage


#### Declaration

```cpp
GetPreviewImage(char *pixelBuffer, int size)
```

#### Parameters

{!docs/nanostream/general/nanocosmos_method_parameter_header.md!}
| pixelBuffer|char | pixel buffer|
| size|int | size |

#### Return Value

**1** if call failed, **0** otherwise

#### Description

Get the preview image.

### GetPreviewFrame


#### Declaration

```obj
GetPreviewFrame(options:int = GET\_FRAME\_BITMAP):Boolean
```


#### Parameters
{!docs/nanostream/general/nanocosmos_method_parameter_header.md!}
| options|int | option as integer. Default is GET\_FRAME\_BITMAP = 2. A\\ Also possible: \\ GET\_FRAME\_RAW\_BYTES:int = 4,\\ GET\_POWER\_OF\_2\_FRAME\_BGRA\_BYTES:int = 8 |

#### Return Value

True if new frame was received otherwise false

#### Description

Get current preview Frame.

### StartPreview


#### Declaration

```obj
StartPreview():int
```

#### Return Value

-**1** if call failed

#### Description

Start the preview.

#### Availability

On Windows and Mac OSX

### StopPreview


#### Declaration

```obj
StopPreview():int
```

#### Return Value

-**1** if call failed

#### Description

Stop the preview.

#### Availability

On Windows and Mac OSX

## Broadcast

### StartBroadcast

#### Declaration

```obj
StartBroadcast():int
```

#### Return Value

ERROR\_SETUP\_ENCODER\_FAILED = -2

ERROR\_RTMP\_OUTPUT\_SOURCE1\_FAILED = 2

ERROR\_RTMP\_OUTPUT\_SOURCE2\_FAILED = 3

#### Description

Start broadcasting.

#### Availability

On Windows and Mac OSX

### StopBroadcast


#### Declaration

```obj
StopBroadcast():int
```

#### Return Value

-**1** if call failed

#### Description

Stop broadcasting.

#### Availability

On Windows and Mac OSX

## Video Source & Audio Source handling

### GetNumberOfVideoSources


#### Declaration

```obj
GetNumberOfVideoSources():int
```

#### Return Value

Count of all available video sources.

#### Description

Count of all available video sources with current settings

#### Availability

On Windows and Mac OSX

### GetNumberOfAudioSources


#### Declaration

```obj
GetNumberOfAudioSources():int
```

#### Return Value

Count of all available audio sources.

#### Description

Count of all available audio sources with current settings

#### Availability

On Windows and Mac OSX

### GetVideoSource


#### Declaration

```obj
GetVideoSource(index:int):String
```

#### Parameters
{!docs/nanostream/general/nanocosmos_method_parameter_header.md!}
| index|int | Index of the video source. The index of the video source, from **0 - GetNumberOfVideoSources -1** |

#### Return Value

Video source name as string.

#### Description

Get name of the video source as string. Call **GetNumberOfVideoSources** first.

#### Availability

On Windows and Mac OSX

### GetAudioSource


#### Declaration

```obj
GetAudioSource(index:int):String
```

#### Parameters
{!docs/nanostream/general/nanocosmos_method_parameter_header.md!}
| index|int | Index of the audio source. The index of the audio source, from **0 - GetNumberOfAudioSources -1** |

#### Return Value

Audio source name as string.

#### Description

Get name of the audio source as string. Call **GetNumberOfAudioSources** first.

#### Availability

On Windows and Mac OSX

### SetVideoSource


#### Declaration

```obj
SetVideoSource(index:int, mixSource:int, mixMode:int):int
```

#### Parameters
{!docs/nanostream/general/nanocosmos_method_parameter_header.md!}
| index |int   | Index of the video source. The index of the video source goes from **0 - GetNumberOfVideoSources -1** |
| mixSource|int | set **0** to to set only the first video source. **1** to set a second video source. <sup>1</sup> |
| mixMode|int  | when mixSource **1** is set, the mix mode to combine two video sources can be chosen here. See available mix modes on page 33.  <sup>2</sup> |


<sup>1</sup>  **— second video source only available on Microsoft Windows**

<sup>2</sup>  **— only available on Microsoft Windows**

#### Return Value

-**1** if call failed

#### Description

Set video source for preview or broadcasting over index. Call **GetNumberOfVideoSources** first. The mix source defines the video source you want set. The mixSource and mixMode is optional and only available on Microsoft Windows. There with you can combine two videos over the mixMode.

#### Availability

On Mac OSX only one video source can use. On Microsoft Windows up to two video sources can be used and be combined in different ways.

### SetVideoSourceFromURL


#### Declaration

```obj
SetVideoSourceFromURL(url:String):int
```

#### Parameters
{!docs/nanostream/general/nanocosmos_method_parameter_header.md!}
| url|String | URL to use an mp4 file as video source. |

#### Return Value

-**1** if call failed

#### Description

URL to an mp4 file source to stream this file.

#### Availability

Only Supported under Microsoft Windows

### SetAudioSource


#### Declaration

```obj
SetAudioSource(index:int):int
```

#### Parameters
{!docs/nanostream/general/nanocosmos_method_parameter_header.md!}
| index|int | Index of the audio source. The index of the audio source, from **0 - GetNumberOfAudioSources -1** |

#### Return Value

-**1** if call failed

#### Description

Set audio source for preview or broadcasting over index. Call **GetNumberOfAudioSources** first.

#### Availability

Under Windows and Mac OSX


## Video Properties

### SetVideoWidth


#### Declaration

```obj
SetVideoWidth(width:int, mixSource:int):int
```

#### Parameters

{!docs/nanostream/general/nanocosmos_method_parameter_header.md!}
| width|int | Width of the video in pixels as integer value |
| mixSource|int | set **0** to to set only the first video source. **1** to set a second video source. <sup>1</sup> |

<sup>1</sup>  **— second video source only available on Microsoft Windows**
#### Return Value

-**1** if call failed

#### Description

Set width of video in pixels. With mixSource the height for two video sources can be set.

#### Availability

Set Width is supported under Mac OS X and Microsoft Windows. The second mix source is only available under Microsoft Windows.

### SetVideoHeight


#### Declaration

```obj
SetVideoHeight(height:int, mixSource:int):int
```

#### Parameters
{!docs/nanostream/general/nanocosmos_method_parameter_header.md!}
| height|int  | Height of the video in pixels as integer value                   |
| mixSource|int | set **0** to to set only the first video source. **1** to set a second video source <sup>1</sup> |

<sup>1</sup>  **— second video source only available on Microsoft Windows**

#### Return Value

-**1** if call failed

#### Description

Set height of video in pixels. With mixSource the height for two video sources can be set.

#### Availability

Set Height is supported under Mac OS X and Microsoft Windows. The second mix source is only available under Microsoft Windows.

### SetVideoResizeWidth


#### Declaration

```obj
SetVideoResizeWidth(width:int, index:int):int
```

#### Parameters
{!docs/nanostream/general/nanocosmos_method_parameter_header.md!}
| width|int | resize width of the video in pixels as integer value               |
| index|int | Index of the output. The index of the output, from **0 - GetNumberOfOutputs -1** |

#### Return Value

-**1** if call failed

#### Description

Resize width of video in pixels.

#### Availability

Only Supported under Microsoft Windows

### SetVideoResizeHeight


#### Declaration

```obj
SetVideoResizeHeight(height:int, index:int):int
```

#### Parameters
{!docs/nanostream/general/nanocosmos_method_parameter_header.md!}
| height|int | resize height of the video in pixels as integer value              |
| index|int | Index of the output. The index of the output, from **0 - GetNumberOfOutputs -1** |

#### Return Value

-**1** if call failed

#### Description

Resize height of video in pixels.

#### Availability

Only supported under Microsoft Windows

### SetVideoFramerate


#### Declaration

```obj
SetVideoFramerate(framerate:Number, mixSource:int):int
```

#### Parameters
{!docs/nanostream/general/nanocosmos_method_parameter_header.md!}
| framerate|Number | Frame rate in frames per Second(FPS) as number value.                |
| mixSource|int  | set **0** to to set only the first video source. **1** to set a second video source. <sup>1</sup> |

<sup>1</sup>  **— second video source only available on Microsoft Windows**

#### Return Value

-**1** if call failed

#### Description

Set frame rate of video in frames per second (FPS). With mixSource the frame rate for two video sources can be set under Microsoft Windows.

#### Availability

Set video frame rate is supported under Mac OS X and Microsoft Windows. Mix Source is only available under Microsoft Windows.

### SetNumberOfChannels

#### Declaration

```cpp
SetNumberOfChannels(int numOfChannels)
```

#### Parameters
{!docs/nanostream/general/nanocosmos_method_parameter_header.md!}
| numOfChannels|int | Number of channels as int value |

#### Description

Set channel number

#### Availability

On Mac OSX

### SetVideoBitrate


#### Declaration

```obj
SetVideoBitrate(bitrate:int, index:int):int
```

#### Parameters

{!docs/nanostream/general/nanocosmos_method_parameter_header.md!}
| bitrate|int | Video bitrate as integer value. |
| index|int  | index of output to set the bitrate for multiple encoders. <sup>1</sup>|

<sup>1</sup> **— set different outputs is only available on Microsoft Windows. On Mac OS X the same bitrate is set to all outputs.**

#### Return Value

-**1** if call failed

#### Description

Set bitrate of video in kbits per second (kbits/s).

#### Availability

Under Mac OS X the same bitrate is set to all outputs. Under Microsoft Windows every output can be set to another bitrate.



### GetVideoBitrate


#### Declaration

```cpp
GetVideoBitrate(int source)
```


#### Parameters
{!docs/nanostream/general/nanocosmos_method_parameter_header.md!}
| index|int  | index of output to get the bitrate for multiple encoders. <sup>1</sup>|

<sup>1</sup> **— set different outputs is only available on Microsoft Windows. On Mac OS X the same bitrate is set to all outputs.**

#### Return Value

Video bitrate as integer value.

#### Description

Get the current video bitrate.

#### Availability

Under Mac OS X there is only one output available. Under Microsoft Windows several outputs are available over the index parameter.

## Audio Properties

### SetAudioBitrate


#### Declaration

```obj
SetAudioBitrate(bitrate:int, index:int):int
```

#### Parameters
{!docs/nanostream/general/nanocosmos_method_parameter_header.md!}
| bitrate|int | Audio bitrate as integer value. |
| index|int  | index of output to set the bitrate for multiple encoders. <sup>1</sup>|

<sup>1</sup> **— set different outputs is only available on Microsoft Windows. On Mac OS X the same bitrate is set to all outputs.** |

#### Return Value

-**1** if call failed

#### Description

Set bitrate of audio in kbits per second (kbits/s).

#### Availability

Under Mac OS X the same bitrate is set to all outputs. Under Microsoft Windows every output can be set to another bitrate.

### GetAudioBitrate


#### Declaration

```cpp
GetAudioBitrate(int source)
```


#### Parameters
{!docs/nanostream/general/nanocosmos_method_parameter_header.md!}
| index|int  | index of output to get the bitrate for multiple encoders. <sup>1</sup>|

<sup>1</sup> **—Get different outputs is only available on Microsoft Windows. On Mac OS X there is only one source available.** |

#### Return Value

Audio bitrate as integer value.

#### Description

Get the current audio bitrate.

### SetAudioSamplerate


#### Declaration

```obj
SetAudioSamplerate(samplerate:int):int
```

#### Parameters
{!docs/nanostream/general/nanocosmos_method_parameter_header.md!}
| samplerate|int | Samplerate of audio as integer value |

#### Return Value

-**1** if call failed

#### Description

Set the samplerate of the audio in Hertz (Hz).

#### Availability

Under Windows and Mac OSX.

### GetAudioLevel


#### Declaration

```obj
GetAudioLevel(channel:int):int
```

#### Parameters
{!docs/nanostream/general/nanocosmos_method_parameter_header.md!}
| channel|int | channel id as integer. |

#### Return Value

Audiolevel as integer value.

#### Description

Get the audio level of a channel.

#### Availability

Under Windows and Mac OSX.

### SetAudioVolume


#### Declaration

```obj
SetAudioVolume(volume:int):int
```

#### Parameters
{!docs/nanostream/general/nanocosmos_method_parameter_header.md!}
| volume|int | volume as integer value |

#### Return Value

**-1** if call failed

#### Description

Set audio volume.

#### Availability

Under Windows and Mac OSX.

### SetAudioPreviewVolume


#### Declaration

```obj
SetAudioPreviewVolume(volume:int):int
```

#### Parameters
{!docs/nanostream/general/nanocosmos_method_parameter_header.md!}
| volume|int | volume as integer value |

#### Return Value

**-1** if call failed

#### Description

Set audio volume of preview.

#### Availability

Under Windows and Mac OSX.

## Color Management

### SetColorSpace


#### Declaration

```obj
SetColorSpace(index:int, mixSource:int):int
```

#### Parameters
{!docs/nanostream/general/nanocosmos_method_parameter_header.md!}
| index|int   | index of the input source. |
| mixSource|int | set **0** to to set only the first mixed source. **1** to set a second mixed source. <sup>1</sup>|

<sup>1</sup> **—second mixed source is only available on Microsoft Windows**

#### Return Value

-**1** if call failed

#### Description

Set the color space of an input source. Only the firtst source is supported under Mac OS X

#### Availability

Under Windows and Mac OSX.

### GetNumberOfColorspaces


#### Declaration

```obj
GetNumberOfColorspaces(width:int, height:int, mixSource:int):int
```

#### Parameters
{!docs/nanostream/general/nanocosmos_method_parameter_header.md!}
| width|int   | width of the video source |
| height|int  | height of the video source |
| mixSource|int | set **0** to to get the first mixed source. **1** to get the second mixed source. <sup>1</sup>|

<sup>1</sup>  **—second mixed source is only available on Microsoft Windows**

#### Return Value

Count of color spaces as integer value.

#### Description

Get the count of color spaces. Get the color space for the specified with and height.

#### Availability

Under Windows and Mac OSX. Under Mac OSX mix source is not supported.

### GetColorspace


#### Declaration

```obj
GetColorspace(index:int, mixSource:int):String
```

#### Parameters
{!docs/nanostream/general/nanocosmos_method_parameter_header.md!}
| index|int   | Index of the color spaces. The index of the color spaces, from **0 - GetNumberOfColorspaces -1** |
| mixSource|int | set **0** to to get the first mixed source. **1** to get the second mixed source. <sup>1</sup>|

<sup>1</sup>  **—second mixed source is only available on Microsoft Windows**  

#### Return Value

color space name as String

#### Description

Get color space name as string. First call **GetNumberOfColorspaces.**

#### Availability

Under Windows and Mac OSX. Under Mac OSX only the first mix source is supported.

## Resolution & Frame rate

### GetNumberOfResolutions


#### Declaration

```obj
GetNumberOfResolutions(mixSource:int):int
```

#### Parameters
{!docs/nanostream/general/nanocosmos_method_parameter_header.md!}
| mixSource|int | set **0** to to get the first mixed source. **1** to get the second mixed source. <sup>1</sup>|

<sup>1</sup>   **—second mixed source is only available on Microsoft Windows**

#### Return Value

Count of resolutions as integer value.

#### Description

Get count of resolutions.

#### Availability

Under Windows and Mac OSX. Under Mac OSX only the first mix source is supported.

### GetResolution


#### Declaration

```obj
GetResolution(index:int, mixSource:int):Object
```

#### Parameters
{!docs/nanostream/general/nanocosmos_method_parameter_header.md!}
| index|int   | Index of the resolutions. The index of the resolutions, from **0 - GetNumberOfResolutions -1** |
| mixSource|int | set **0** to to get the first mixed source. **1** to get the second mixed source. <sup>1</sup>|

<sup>1</sup>    **—second mixed source is only available on Microsoft Windows**

#### Return Value

Get resolution of video source. First call **GetNumberOfResolutions.**

#### Description

Get count of resolutions.

#### Availability

Under Windows and Mac OSX. Under Mac OSX only the first mix source is supported.

### GetNumberOfFramerates


#### Declaration

```obj
GetNumberOfFramerates(width:int, height:int, colorspace:String, mixSource:int):int
```

#### Parameters
{!docs/nanostream/general/nanocosmos_method_parameter_header.md!}
| width|int     | width of the video source |
| height|int    | height of the video source.                           |
| colorspace|String | name of the color space get from GetColorspace                  |
| mixSource|int   | set **0** to to get the first mixed source. **1** to get the second mixed source. <sup>1</sup>|

<sup>1</sup>    **—second mixed source is only available on Microsoft Windows**

#### Return Value

Count of available frame rates as integer value.

#### Description

Get count of available frame rates.

#### Availability

Under Windows and Mac OSX. Under Mac OSX only the first mix source is supported.

### GetFramerate


#### Declaration

```obj
GetFramerate(index:int, mixSource:int):Number
```

#### Parameters
{!docs/nanostream/general/nanocosmos_method_parameter_header.md!}
| index|int   | Index of the frame rate. The index of the frame rate, from **0 - GetNumberOfFramerates -1** |
| mixSource|int | set **0** to to get the first mixed source. **1** to get the second mixed source. <sup>1</sup>|

<sup>1</sup>    **—second mixed source is only available on Microsoft Windows**

#### Return Value

Frame rate (FPS) as number value.

#### Description

Get the frame rate of a video source. Call **GetNumberOfFramerates** first.

#### Availability

Under Windows and Mac OSX. Under Mac OSX only the first mix source is supported.

### SetDeinterlacing


#### Declaration

```obj
SetDeinterlacing(mode:int, method:int):int
```
#### Parameters
{!docs/nanostream/general/nanocosmos_method_parameter_header.md!}
| mode|int  | possible values: **0**=off, **1**=auto, **2**=on  \\ no auto mode for mac |
| method|int | possible values: **0**=duplicate field/bob, **1**=blend, **2**=vertical filter, **3**=edge, 4=median, **5**=median2 |

#### Return Value

**-1** if call failed

#### Description

Set deinterlacing mode and method.

#### Availability

Under Windows and Mac OSX.

## Outputs

### GetNumberOfOutputs


#### Declaration

```obj
GetNumberOfOutputs():int
```

#### Return Value

Count of outputs as integer value.

#### Description

Get count of outputs.

#### Availability

Only Supported under Microsoft Windows.

### AddOutput


#### Declaration

```obj
AddOutput(url:String):int
```

#### Parameters
{!docs/nanostream/general/nanocosmos_method_parameter_header.md!}
| url|String | Url of outputs can be a local mp4 recording or a rtmp source. |

#### Return Value

**-1** if call failed

#### Description

Add new output source with url.

#### Availability

Only Supported under Microsoft Windows.

### SetOutputUrl

#### Declaration

```obj
SetOutputUrl(url:String, index:int):int
```

#### Parameters
{!docs/nanostream/general/nanocosmos_method_parameter_header.md!}
| url|String | Url of outputs can be a local mp4 recording or a rtmp server. |
| index|int | Index of the output.                     |

#### Return Value

**-1** if call failed

#### Description

Set output with url. A local mp4 recording or a rtmp server.

#### Availability

Under Windows and Mac OSX.


### GetOutputUrl





### GetNumberOfOutputUrls



### AcceptDataInSampleBuffer


### SetFilesourceFilename


#### Declaration

```obj
SetFilesourceFilename(url:String):int
```

#### Parameters
{!docs/nanostream/general/nanocosmos_method_parameter_header.md!}
| url|String | Url to the local file |

#### Return Value

**-1** if call failed

#### Description

Set the filename of a local source.

#### Availability

Only Supported under Microsoft Windows.

### ClearOutputs


#### Declaration

```obj
ClearOutputs():int
```

#### Return Value

**-1** if call failed

#### Description

Reset all outputs except the first one.

#### Availability

Only Supported under Microsoft Windows.

## Video Special

### SetVideoEffect


#### Declaration

```obj
SetVideoEffect(mode:int):int
```

#### Parameters
{!docs/nanostream/general/nanocosmos_method_parameter_header.md!}
| mode|int | Mode of video effect. See possible overlay effects on page 33 |

#### Return Value

**-1** if call failed

#### Description

Add a video effect. For overlay.

#### Availability

Only Supported under Microsoft Windows.

### SetOverlay


#### Declaration

```obj
SetOverlay(url:String):int
```

#### Parameters
{!docs/nanostream/general/nanocosmos_method_parameter_header.md!}
| url|String | Url of the overlay source. Can be a locale path or server url to a png or txt file. Also can be a txt string. |

#### Return Value

**-1** if call failed

#### Description

Add a overlay to the video.

#### Availability

Only Supported under Microsoft Windows.

### ShowPropertyPage


#### Declaration

```objectiv-c
ShowPropertyPage(value:int):int
```

#### Parameters
{!docs/nanostream/general/nanocosmos_method_parameter_header.md!}
| value|int | **1** or **0** are possible values |

#### Return Value

**-1** if call failed

#### Description

Show property page. Only used for Blackmagic devices.

#### Availability

Only supported under Microsoft Windows.

## Logging

### SetLog


#### Declaration

```objectiv-c
SetLog(logFile:String, logLevel:int):int
```

#### Parameters
{!docs/nanostream/general/nanocosmos_method_parameter_header.md!}
| logFile|String | local path for logfile as string.         |
| logLevel|int  | log level as integer. For possible loglevels 0-9. |

#### Return Value

**-1** if call failed

#### Description

Set log file path and log level.

#### Availability

Under Windows and Mac OSX.

#### Availability

Under Windows and Mac OSX.




### SetXmlProfile


### dispose


#### Declaration

```obj
dispose():void
```

#### Description

Destructor.

#### Availability

Under Windows and Mac OSX.

# SetConfig Properties

| **Property name**        | **Description**                                                       | **Values**                                                                        | Mac Platform Support |
|-------------------------|------------------------------------------------------------------------|-----------------------------------------------------------------------------------|---------------------|
| license                 | License string                                                       |                                                                                |         ✔             |
| XMLPath               | Path to the XML file with configuration information                           |                                                                                |         ✔             |
| RemoteControlPort       | Port number                                                         |                                                                                |         ✔             |
| LiveSource              |                                                                   |                                                                                |         ✔             |
| RemoteIP               |                                                                   |                                                                                |         ✔             |
| AVOffsetMs       |                              |                                                                                                                           |         ✔             |
| ReconnectPeriod/ReconnectInterval       |                              |                                                                                                        |         ✔             |
| ReconnectAttempts       | Auto Reconnect No. of Attempts | 5                                                                                                                      |         ✔             |
| UseInternalReconnect       | Use RTMP Internal Reconnect of the RTMP Filter (do not stop encoder on network errors) | 0 / 1                                                                     |         ✔             |
| UseUnlimitedReconnect       | Don't stop reconnecting after a specific number of failed attempts (encoder is not stopped) | 0 / 1                                                                  |         ✔             |
| Auth       | Authentication for RTMP and RTSP Push streaming                             | “user:password”                                                                           |         ✔             |
| RtmpUrlDelimiter       | Set delimiter for RTMP-url and streamname.                             | Example: ”+“ will split [](rtmp://localhost/live+myStream) so that “myStream” is the stream name.          |         ✔             |
| DeinterlacingMode       | Deinterlacing Mode                             | 0=off, 1=auto (default), 2=on Note: for some capture devices you need to set this to „on“ (2). (Resolutions 480i, 576i, 1080i)       |         ✔             |
| DeinterlacingMethod       | Deinterlacing Method                              | 0=duplicate field/bob, 1=blend, 2=vertical filter, 3=edge, 4=median, 5=median2                                     |         ✔             |
| RemoteSendAudioLevelInterval       |                              |                                                                                                            |         ✔             |
| CaptureRegion       | Capture Region of the input source, example for a input resolution of 640×480: SetConfig(“CaptureRegion”, “10,630,10,470”) - discards 10 pixels on each side | left,right,top,bottom          |         ✔             |
| RTMPPublishMode       | RTMP Publish/Live/Record on Server (VOD)                             | 1=record, 2=append, 0=live (default)                                                       |         ✔             |
| VideoAudioInput       |                              |                                                                                                                       |         ✔             |
| PreviewNoInvert       |                              |                                                                                                                       |         ✔             |
| ScreenCapMode       | Screen Capture Desktop Mode                             | 0=Screen, 1=FollowMouse, 2=Region relative, 3=Region absolute, 4=Window, 5=Window overlapping                |         ✔             |
| ScreenCapWindowIndex       |                              |                                                                                                                  |         ✔             |
| ApplyDynamicSettings       |                              |                                                                                                                    |         ✔             |
| Mp4RecordOnTheFlyChangeName |                                                   |                                                                                            |    ✔     |
| Mp4RecordOnTheFlyControl  | If Mp4RecordOnTheFly is enabled, controls start/stop recording    | 0=stop, 1=start                                                                                |    ✔     |
| AudioPreview        | Enables audio preview during preview or broadcast                    | 0=no preview, 1=visual preview (default, requires filter AudioVolume), 2=visual and audible preview, 3=audible preview |    ✔     |
| Mp4RecordOnTheFly      | Enables start/stop recording to local file while the broadcast is running | 0=off (default), 1=on                                                                            |   ✔      |
| H264Quality         | H.264 Encoder Quality/Speed Ratio                                 | 0=worst/fastest 1=default 6=highest/slowest                                                         |   ✔      |
| H264IFrameDistance       | H.264 I Frame / GOP Length in Frames (100 Frames = 4 seconds for 25 fps)  | 100=default, 1 = I-Frame-Only                                                               |         ✔             |
| H264PFrameDistance       | H.264 P/B Frame Distance                                  | 3 1 = IP-Only (no B-Frames)                                                                       |         ✔             |
| H264Profile       | H.264 Encoding Profile                             | Baseline, Main, Extended, High Most compatible but lowest quality is Baseline, (no B-Frames, no CABAC VLC)                      |         ✔             |
| H264Level       | H.264 Level                              | 10=1.0, 11=1.1, 12=1.2, 13=1.3, 20=2.0, 21=2.1, 22=2.2, 30=3.0, 31=3.1, 32=3.2, 40=4.0, 41=4.1, 42=4.2, 50=5.0, 51=5.1                     |         ✔             |
| H264VlcMode       | H.264 VLC Mode (CAVLC/CABAC)                             | =CAVLC, 2=CABAC (not allowed in H.264 Baseline Profile)                                                   |         ✔             |
| OutputFrameRate       | Video Output (Encoded) Frame Rate                              | 5,10,15,20,25,30, OR 23980 OR 29970                                                             |    ✔     |
| RTMPWriteTimecode      | Send timecodes in RTMP streams, If enabled RTMP timecodes are sent in addition to the always sent RTMP packet timestamps | 0=off (default), 1=on                                 |   ✔      |
| UseSystemTimeAsTimecode       | Send RTMP/MP4 timecodes as UTC system date time or stream time                             | 0=stream time (default), 1=UTC system date time                    |         ✔             |
| TimecodeInterval      | RTMP/MP4 timecode interval in milliseconds                        | Should be higher or equal to 1000 (1s)                                                             |    ✔     |
| TcpConnectTimeout       |                              |                                                                                                                       |         ✔             |
| RTSPSinkMode       | Determines if the RTSPSink is running as a server (passive/pull) or as a streamer to a RTSP push capable server (active/push) | 1=server/pull (default), 2=streamer/push                      |         ✔             |
| RTSPSDPFileFolder       |                              |                                                                                                                       |         ✔             |
| RTSPStreamDescription       |                              |                                                                                                                       |         ✔             |
| AudioVolumePerSoftware       | Control volume with the Audio Volume Filter                             | 0=off (default), 1=on                                                                                                                       |         ✔             |
| AVFShowBlackmagicDevices  | use AVFoundation for BlackMagic devices                                                                 | 0=off (default), 1=on                                 |    ✔     |
| OverlayRect         | Sets the dimensions for a given overlay-image. | “index,left,top,right,bottom”. index: the overlay-index, beginning with 0. left, top, right and bottom define a rectangle in screen-coordinates.      |    ✔     |
| OverlayAlpha        | Sets the alpha-value for overlays.  | Range: 0-1. 0.0 (not visable), 1 (fully visable).                                                                                         |    ✔     |
| OverlayTextColor      | Text Overlay Color | Must be a hexadecimal color-value in BGR-format, e.g.: “0000FF” (255 (0x0000FF) - red)                                                                   |    ✔     |
| OverlayBackgroundColor   |             | Must be a hexadecimal color-value in BGR-format, e.g.: “000000” (0 (0x000000) - black).                                                                  |    ✔     |
| OverlaySkipColor      | Setting skipcolor to a specific value will result in this color to be rendered transparent in the overlays.       | Example: If OverlayBackgroundColor was set to blue (“FF0000”) setting OverlaySkipColor to blue as well will result in a transparent background. Parameter must be a hexadecimal color-value in BGR-format, e.g.: “FF0000” (blue). Disable: Setting OverlaySkipColor to “FF000000” (ABGR) will disable the usage of skipcolor.                                                                         |    ✔     |
| AudioDelay         | Streaming Audio Delay / Offset (ms) |                                                                                                                           |    ✔     |
| ShowPropertyPageForDevice  | Calls the propertypage for a given device.                                        | 0 for device with index: 0                                                     |     ✔    |
| UseQuicktimeH264Encoder       |                              |                                                                                                                |         ✔             |
| RotateDegrees       | set the degrees by which video should be rotated, only works if UseRotation is set to on, set before StartPreview or StartBroadcast | 0/90/180/270                                      |         ✔             |






# Mixmode

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

# Overlay Effects

Overlay off = 0

Left Top = 1

Right Top = 2

Left Bottom = 3

Right bottom = 4

Free Postion = 5

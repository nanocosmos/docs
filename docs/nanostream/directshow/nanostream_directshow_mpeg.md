---
id: nanostream_directshow_mpeg
title: MPEG
sidebar_label: MPEG
---

## nanocosmos MPEG-2 Broadcast DirectShow SDK

### Introduction

Nanocosmos MPEG-2 Broadcast DirectShow  SDK enables you to perform high quality and high performance video coding for the latest generation video and audio coding standards. It is intended to develop video encoding / transcoding applications based on Microsoft DirectShow technology.

### Major Features

  * Encoding of MPEG-2 video streams in Main and High profile
  * Highly optimized software coding with support for latest CPU  technology by Intel and AMD (SSE2/SSE3/SSE4 and Dual-Core/Core-Duo, AMD Athlon64
  * Real-time Encoding from Capture cards is supported
  * File Reader for MOV and MXF
  * File Writer for MOV and MXF

### Documentation

The SDK\doc folder contains further documentation for the following filters:

  * MPEG-2 Video Decoder
  * MPEG-2 Video Encoder
  * QuickTime Source
  * QuickTime Writer
  * MXF Reader
  * MXF Writer

> Contact us for additional modules for MPEG Audio Encoding and Multiplexing

### Filter components

  * nanocosmos MPEG-2 Video Decoder
    * Module:		nmpeg2dec.ax
    * CLSID:		{223784F1-4D9F-45A5-8281-8F9AFCABD904}

  * nanocosmos MPEG-2 Video Encoder
  * Module:		nmpeg2enc.ax
  * CLSID:		{2327A344-BECC-4F4F-89C6-DABDC5143832}

  * nanocosmos QuickTime Source Filter
    * Module:		nqtsource.ax
    * CLSID:		{53718C99-F067-4609-8184-A8A92A241A5A}

  * nanocosmos Quicktime Writer (MPEG2/Broadcast)
    * Module:		nmp4mux.ax
    * CLSID:		{C2FB362B-CE6C-4797-BC16-F81976DFEF61}

  * nanocosmos MXF Reader
    * Module:		nh264dec.ax
    * CLSID:		{A3462D0F-3BD0-48A2-BD91-A1366CFC35BB}

  * nanocosmos MXF Writer
    * Module:		nh264dec.ax
    * CLSID:		{C1C2C181-EBDA-421F-895F-638A4C5F132B}

  * nanocosmos MPEG PS/TS Stream Splitter
    * Module:		nmpegsplitter.ax
    * CLSID:		{0994D1E8-B697-47DE-B1E3-36D26937D5B4}

  * nanocosmos File Dump Filter
    * Module:		nanodump.ax
    * CLSID:		{DA67A541-8FEA-11D4-A908-00105A6758CF}

### Registering and unregistering components in the DirectShow framework

In order to use them, filters must be registered in the DirectShow framework. After
installation all filters are registered. To re-register or unregister components, execute the `RegisterFilters.bat` or `UnregisterFilters.bat` batch files from the SDK/bin folder.

### Filter activation 

Filters can be activated by installing a license key to windows registry or programmatically by setting a license key through the software interface of a filter instance. How to set license keys to unlock filters is described in the module's documents.

-----


## nanocosmos MPEG-2 HD/SD Video Decoder Filter

### DirectShow Filter / Module

nanocosmos MPEG-2 HD/SD Video Decoder\\
Module Name: `nmpeg2dec.ax`

### Connectivity

The input is accepting connections to splitter filters or combined source/splitter filters matching the following media types:

Major types:
  * MEDIATYPE_Video

Subtypes:
  * MEDIASUBTYPE_MPEG2

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
// Filter GUID
// {223784F1-4D9F-45a5-8281-8F9AFCABD904}
DEFINE_GUID(CLSID_NANO_MPEG2_DECODER, 0x223784f1, 0x4d9f, 0x45a5, 0x82, 0x81, 0x8f, 0x9a, 0xfc, 0xab, 0xd9, 0x4);

// Configuration interface ICodecProp
// {0F817204-82C8-4c12-884A-F45FB2F33A6E}
DEFINE_GUID(IID_ICodecProp, 0xf817204, 0x82c8, 0x4c12, 0x88, 0x4a, 0xf4, 0x5f, 0xb2, 0xf3, 0x3a, 0x6e);

// ICodecProp: IID_nanoPeg_LicenseString
// type: BSTR / Unicode string
// Set license string to unlock filter
// {1788F0B0-5985-4a19-B7FE-8AAC1BFC14B3}
DEFINE_GUID(IID_nanoPeg_LicenseString, 0x1788f0b0, 0x5985, 0x4a19, 0xb7, 0xfe, 0x8a, 0xac, 0x1b, 0xfc, 0x14, 0xb3);
```


### Setting the license to unlock filter

The filter can be unlocked either through a license key entry in the windows registry or
by setting the license key through COM interface ICodecProp::SetProperty with the
property **IID_nanoPeg_LicenseString** as first parameter. The second license parameter
has to be a wide/unicode string!

### Decoder Configuration Registry Settings

Key: 
```
HKEY_CURRENT_USER\Software\nanocosmos\nmpeg2dec
```

### Frame dropping / skipping mode

Determines the behaviour in the case of timing / performance problems.
  * Value name: 	DroppingMode
  * Value type: 	REG_DWORD
  * Valid values:
    * `0` - `disabled`
    * `1` - `enabled`, `__default value__`

### Output color space selection

Forces the filter to use a desired output color format. If no or no valid value is set, the output color format will be negotiated with the downstream renderer filter (usually YV12).
  * Value name: 	ForceOutputFourCC
  * Value type: 	        `REG_SZ / String`
  * Valid values:
    * `YV12`,
    * `I420`,
    * `IYUV`,
    * `YUY2`,
    * `RGB32`,
    * `RGB24`,
    * `RGB565`,
    * `ARGB32`

### Deinterlacing Mode

Determines the deinterlacing behaviour.
  * Value name: DeinterlacingMode
  * Value type:   REG_DWORD
  * Valid values:
    * `0` - disabled
    * `1` - duplicate, __default value__
    * `2` - blend
    * `3` - median
    * `4` - edge detection
    * `5` - median threshold
    * `6` - content adaptive vertical temporal

### DirectShow Editing Services (DES) Return Mode

Receive returns HRESULT error values if Deliver fails.
Needs to be enabled for DES.
  * Value name: `DESReturnMode`
  * Value type: `REG_DWORD`
  * Valid values:
    * `0` - disabled, __default value__
    * `1` - enabled

### Threading Mode

Determines the threading behaviour.
Auto detection or number of decoding threads.
  * Value name: `DESReturnMode`
  * Value type: `REG_DWORD`
  * Valid values:
    * `0` - auto detect number of cpus, __default value__
    * `1-8` - set number of decoding threads

### Output resolution alignment 

Determines the alignment of the output resolution,
to adjust it to multiples of this value.
  * Value name: `OutputAlignment`
  * Value type: `REG_DWORD`
  * Valid values:
    * `1-16`, __default value:__ 4

### Debug-Log Configuration Registry Settings

Key: 
```
HKEY_CURRENT_USER\Software\DebugNano\nmpeg2dec.ax
```

### File name
Sets the output file name. The folder must already exist.
  * Value name: 	`LogToFile`
  * Value type: 	        `REG_SZ` / `String`
  * Valid values:	a valid output file name to enable file logging or an empty string

### Logging level

A higher value increases the amount of logging messages sent, and messages get more detailed.
  * Value name: 	`TRACE`
  * Value type: 	        `REG_DWORD`
  * Valid values:
    * `0` - minimal logging
    * …
    * `9` - maximal logging

-----


## nanocosmos MPEG-2 Video Encoder Filter

### DirectShow Filter / Module

nanocosmos MPEG-2 Video Encoder\\
Module Name: nmpeg2enc.ax

### DirectShow Connectivity

The input is accepting connections to video source, capture and decoder filters matching the following media types:

Major types:
  * MEDIATYPE_Video

Subtypes:
  * MEDIASUBTYPE_YV12,
  * MEDIASUBTYPE_I420,
  * MEDIASUBTYPE_YUY2,
  * MEDIASUBTYPE_UYVY,
  * MEDIASUBTYPE_HDYC,
  * MEDIASUBTYPE_RGB24,
  * MEDIASUBTYPE_RGB32,
  * MEDIASUBTYPE_ARGB32,
  * MEDIASUBTYPE_RGB565,

Formats:
  * FORMAT_VideoInfo
  * FORMAT_VideoInfo2

The output supports these media types:

Major types:
  * MEDIATYPE_Video

Subtypes:
  * MEDIASUBTYPE_MPEG2_VIDEO,
  * MEDIASUBTYPE_mpgv

Formats:
  * FORMAT_MPEG2_VIDEO,
  * FORMAT_NONE

### Configuration

The encoding configuration may be set by using either the property page or the COM Interface INanoCodecOpts as declared in header file INanoCodecOpts.h .

```cpp
// Filter GUID
// {2327A344-BECC-4f4f-89C6-DABDC5143832}
DEFINE_GUID(CLSID_NANO_MPEG2_ENCODER, 0x2327a344, 0xbecc, 0x4f4f, 0x89, 0xc6, 0xda, 0xbd, 0xc5, 0x14, 0x38, 0x32);

// Property Page GUID
// {8A84396A-277A-4835-9EB5-719863194DC9}
DEFINE_GUID(CLSID_NANO_MPEG2_ENCODER_PROPPAGE, 0x8a84396a, 0x277a, 0x4835, 0x9e, 0xb5, 0x71, 0x98, 0x63, 0x19, 0x4d, 0xc9);

// Configuration Interface GUID
// {698E0F57-B828-4c40-8867-095FF49F77D6}
DEFINE_GUID(IID_INanoCodecOpts, 0x698e0f57, 0xb828, 0x4c40, 0x88, 0x67, 0x9, 0x5f, 0xf4, 0x9f, 0x77, 0xd6);

// Configuration interface ICodecProp
// {0F817204-82C8-4c12-884A-F45FB2F33A6E}
DEFINE_GUID(IID_ICodecProp, 0xf817204, 0x82c8, 0x4c12, 0x88, 0x4a, 0xf4, 0x5f, 0xb2, 0xf3, 0x3a, 0x6e);

// ICodecProp: IID_nanoPeg_LicenseString
// type: BSTR / Unicode string
// Set license string to unlock filter
// {1788F0B0-5985-4a19-B7FE-8AAC1BFC14B3}
DEFINE_GUID(IID_nanoPeg_LicenseString, 0x1788f0b0, 0x5985, 0x4a19, 0xb7, 0xfe, 0x8a, 0xac, 0x1b, 0xfc, 0x14, 0xb3);
```


### Setting the license to unlock filter

The filter can be unlocked either through a license key entry in the windows registry or
by setting the license key through COM interface ICodecProp::SetProperty with the
property **IID_nanoPeg_LicenseString** as first parameter. The second license parameter
has to be a wide/unicode string!

### Common Encoder Settings

| Parameter                    | Default values              | Description                     |
|------------------------------|-----------------------------|---------------------------------|
| profile, level               | Main Profile, Main Level    | MPEG-2 Profile and Level        |
| base_video.bitrate_kb        | Profile and Level dependend | Video Bitrate in kBits/second   |
| base_video.resolution.width  | 0 - use input width         | Picture Coding Width            |
| base_video.resolution.height | 0 - use input height        | Picture Coding Height           |
| chroma_format_idc            | 0 - I420, 1 - I422          | [0,1] Chroma Format             |
| rate_method                  | 0 - CBR, 1 - VBR            | [0,1] Rate Control Mode         |
| distance_i                   | 12                          | Intra Frame Distance / GOP len. |
| distance_p                   | 3                           | P Frame Distance                |

### Configuration through INanoCodecOpts interface

  - Version check by calling //GetCodecOptsVersion//// //(optional)
  - Instanciating a parameter structure of type //MPDX4_MPEG2EncoderParams//
  - Initializing the parameter struct by calling //InitCodecOptions// will set all parameters to default values for the selected profile and level
  - Setting custom values for resolution and bitrate
  - Applying settings by calling //SetCodecOptions//

Here a code snippet without error handling to show configuration for IMX 50 format:
```cpp
#include "mpeg2_enc_params.h"

HRESULT hr = S_OK;

// Query INanoCodecOpts interface from IBaseFilter interface
// of MPEG-2 Encoder filter
CComQIPtr<INanoCodecOpts> pNanoCodecOpts = pBaseFilter;

MPDX4_MPEG2EncoderParams mpeg2EncParams;
memset(&mpeg2EncParams, 0, sizeof(MPDX4_MPEG2EncoderParams));

// Set desired profile and level values
mpeg2EncParams.profile = MPDX4_MPEG2_PROFILE_422IMX;
mpeg2EncParams.level = MPDX4_MPEG2_LEVEL_MAIN;

// Intialize the parameter struct according to profile and level set
hr = pNanoCodecOpts->InitCodecOptions((MPDX4_BaseCodecOpts*) &mpeg2EncParams, INANOCODECOPTS_VERSION);

// Set custom parameter values
// Bitrate
mpeg2EncParams.base_video.bitrate_kb = 50000; // IMX 50
// If resize is needed
mpeg2EncParams.base_video.resolution.width = 720;
mpeg2EncParams.base_video.resolution.height = 608;

// Apply settings and finish configuration
hr = pNanoCodecOpts->SetCodecOptions((MPDX4_BaseCodecOpts*) &mpeg2EncParams, INANOCODECOPTS_VERSION);
```

### Configuration through DirectShow  filter property page

The filter's property page offers a subset of encoding parameters, containing the most important options.

![MPEG-2 Video Encoder Properties](img/directshow_mpeg2_video_enc_prop.png)

### Debug-Log Configuration Registry Settings

Key: HKEY_CURRENT_USER\Software\DebugNano\nmpeg2enc.ax

### File name

Sets the output file name. The folder must already exist.
  * Value name: 	LogToFile
  * Value type: 	       REG_SZ / String
  * Valid values:	a valid output file name to enable file logging or an empty string

### Logging level

A higher value increases the amount of logging messages sent, and messages get more detailed.
  * Value name: 	TRACE
  * Value type: 	REG_DWORD
  * Valid values:
    * 0 - minimal logging
    * …
    * 9 - maximal logging

-----


## Configure encoder settings

Here is a pseudo sample code, showing how to set the bitrate for the encoder -` m_pEncMpegA` is the instance of the mpeg audio encoder:
```cpp
ICodecAPI* encoderInt;
m_pEncMpegA->QueryInterface(IID_ICodecAPI, (void **) &encoderInt);
VARIANT v;
v.vt = VT_INT;
v.intVal = 128000;    // 128 kb
encoderInt->SetValue(&PROPID_nanoMPAEBitrate, &vt);
...
encoderInt->Release();
</code>
```


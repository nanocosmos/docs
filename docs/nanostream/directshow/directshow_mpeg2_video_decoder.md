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

#### Frame dropping / skipping mode

Determines the behaviour in the case of timing / performance problems.
  * Value name: 	DroppingMode
  * Value type: 	REG_DWORD
  * Valid values:
    * `0` - `disabled`
    * `1` - `enabled`, `__default value__`

#### Output color space selection

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

#### Deinterlacing Mode

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

#### DirectShow Editing Services (DES) Return Mode

Receive returns HRESULT error values if Deliver fails.
Needs to be enabled for DES.
  * Value name: `DESReturnMode`
  * Value type: `REG_DWORD`
  * Valid values:
    * `0` - disabled, __default value__
    * `1` - enabled

#### Threading Mode

Determines the threading behaviour.
Auto detection or number of decoding threads.
  * Value name: `DESReturnMode`
  * Value type: `REG_DWORD`
  * Valid values:
    * `0` - auto detect number of cpus, __default value__
    * `1-8` - set number of decoding threads

#### Output resolution alignment 

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

#### File name
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

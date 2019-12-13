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

# nanoStream Live Video Encoder Mixer / Overlay
Live Video Encoder supports several enhancements to video source mixing and overlays. Video mixing of 2 input video signals Text and bitmap overlay Region based capture
All functions can be used from within nanoStream plugin applications or by using DirectShow filter setups.

## Requirements:
- Nanocosmos Live Video Encoder Web Plugins
- Nanocosmos Video Mixer DirectShow Filter (for video mixing)
- Nanocosmos Text/Bitmap Overlay Filter (for text or image overlay)
- Video mixing and text/image overlay can be used independently.

## Usage

### Usage of Video Mixer:
Select 2 video sources:
- Unordered List ItemUsage for nanovid plugin: Set the `VideoSource` and `VideoSource2` properties
- Use for `nanoEncoder.js`: call `SetVideoSource` and `SetVideoSource2`
The parameters to the properties are the index numbers of the video capture device (0..n)
Select Video Mixing Mode: 0=off, 16+1=left/right, 16+2=left/right narrow, 16+7 … picture-in-picture

### Usage of Text/Bitmap Overlay:
An overlay can either be a text or an image. If the specified string contains an extension, like *.txt, .bmp, .jpg or .png* , the encoder tries to load the file from the given path. If no file extension is found the encoder assumes that the text in the string should be displayed directly.
Set the `TextOverlayText` Property to the text or file name
Set the `VideoEffect` Property: 0=off, 1=left top, 2=right top, 3=left bottom, 4=left top, 5=user defined position

### Setting the overlay position
Only possible when `VideoEffect` Property is set to 5.
1. via the Windows Registry (search for regedit in the Windows Start Menu):
Registry Key: HKCU\\SOFTWARE\\nanocosmos\\nanoStream
**Key**: “OverlayLeft” **Default Value**: VideoWidth1/20
**Key**: “OverlayTop” **Default Value**: VideoHeight1/20
2. via `SetConfig()`:
`SetConfig(“OverlayOrigin”, “0,$left,$top”)`: left and top coordiantes can be specified; right and bottom coordinates are determined automatically, the first value is the index of the overlay (always 0, if only one overlay is used)
`SetConfig(“OverlayRect”, “0,$left,$top,$right,$bottom”)`: all coordinates are specified, the image or text is resized if necessary

### Using more than one Overlay
To use more than one overlay the `VideoEffect` property has to be set to 5 (free positioning)! To add a new overlay apply following steps:
1. `SetConfig(“AddOverlay”, text)`, where `text` can be a path to a file or simple text.
2. Get the index of the overlay: `nanovideo.GetIndexOfOverlay(text)`, `text` has to be same as in the previous step.
3. Use either `SetConfig(“OverlayOrigin”, “$index,$left,$top”)` or `SetConfig(“OverlayRect”, “$index,$left,$top,$right,$bottom”)`

### Overlay Options
Options can be set with `SetConfig` and apply for all overlays used.
- `OverlayTextColor`: foreground color for text overlays
- `OverlayBackgroundColor`: background color
- `OverlaySkipColor`: color which should be not rendered, if the same as background color, no background is being drawn
- `OverlayAlpha`: the opaqueness of the overlay - from invisble (0.0) to fully opaque (1.0)

Colors are supplied as strings containing a COLORREF (RGB macro can be used), e.g. “0x00FF0000”.
Registry Keys:
**Key**: “OverlayBackColor” **Default Value**: 0
**Key**: “OverlayTextColor” **Default Value**: 0x000099FF

### Usage of Region Capture:
To capture a region of the input video, use the `CaptureRegion` configuration values or call the `SetCaptureRegion` Javascript Function.
<pre class="lang:js decode:true crayon-selected">nanovideo.SetConfig("CaptureRegion","left,right,top,bottom")
nanovideo.SetConfig("CaptureRegion",100,420,50,290)</pre>
During Encoding/Streaming, the CaptureRegion may be changed to follow a region object on the screen. For simpler usage of moving the origin of the region, the SetRegion method may be used:
<pre class="lang:js decode:true">SetRegion(left, top)</pre>

See example implementation in **nanoStream.html**

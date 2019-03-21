---
id: nanostream_directshow_quicktime
title: Quicktime IMX Playback
sidebar_label: Quicktime IMX Playback
---

## QuickTime IMX Video Playback Components

**For QuickTime und DirectShow**

The QuickTime IMX Playback components allow easy playback of QuickTime IMX video files with Windows or MacOS systems.
IMX is also known as `SMPTE D-10` and is based on the MPEG compression technology.

The Codec Packet contains the following components:

- QuickTime IMX Source Direct Show Package
- QuickTime IMX Codec for Quicktime Player

### QuickTime IMX Source Direct Show Package

The QuickTime IMX Source DirectShow Package allows playback of QuickTime IMX video files with all WindowsMediaPlayer-/DirectShow based applications. Installation of the Quicktime System is not required.
Direct Show Filters include:

#### File Reader for QuickTime IMX Video Files

Output Media Types:

- Majortype:
  - Video,
- Sub Type:
  - MPEG2_Video
- Majortype:
  - Audio:
- Sub Type:
  - PCMAudio

#### IMX Video Decoder Filter

Formats:

- MPEG-2 IMX 30 (FourCC: mx3p)
- MPEG-2 IMX 40 (FourCC: mx4p)
- MPEG-2 IMX 50 (FourCC: mx5p)



![Direct Show Example](/img/nanostream/directshow/directshow_qt_example.png)

Direct Show Example

### QuickTime IMX Decoder for Quicktime Player

QuickTime IMX Codec Package can be used in all Quicktime based applications, for example QuickTime Player.

#### Supported input Formats:

- QuickTime Movie File
- IMX Compression (MPEG-2 IMX 30 (FourCC: mx3p)
- MPEG-2 IMX 40 (FourCC: mx4p)
- MPEG-2 IMX 50 (FourCC: mx5p))

#### Supported Decoding Parameters:

- Bitrates from up to `100 mbps`
- Frame Rates: `23.976`, `24`, `25`, `29.97`, and `30` frames/sec up to `60` fields/sec.

The Codec is a QuickTime Decoder Component developed by nanocosmos.

![Quicktime IMX Example](/img/nanostream/directshow/directshow_imx_example.png)

Quicktime IMX Example


#### Supported input Formats:

- QuickTime Movie File
  - IMX Compression (MPEG-2 IMX 30 (FourCC: mx3p)
  - MPEG-2 IMX 40 (FourCC: 'mx4p')
  - MPEG-2 IMX 50 (FourCC: mx5p))

#### Supported Decoding Parameters:

- Bitrates from up to 100 mbps
- Frame Rates: 23.976, 24, 25, 29.97, and 30 frames/sec up to 60 fields/sec.
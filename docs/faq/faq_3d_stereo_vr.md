---
id: 3d_stereo_vr
title: 3D / Stereo / VR / 360
sidebar_label: 3D / Stereo / VR / 360
---

# Note: this is deprecated

<details><summary><strong>Can I stream 3D video in HD?</strong></summary>

In general, yes.
But it depends if your hardware (especially the cpu) is performant enough to handle the encoding process. It can be an option to use the `“nanocosmos H.264 Video Encoder QS” filter` for hardware encoding.

>Another factor to consider is the available bandwidth, because `HD` requires a higher bitrate >than lower resolution such as `320×240` or `640×480`.

</details>

<details><summary><strong>How do I start a 3D broadcast?</strong></summary>

#### With the desktop application: nanocosmos Live Video Encoder

- open the application
- go to the `input tab`
- check the `checkbox “Video 2”`
- select the desired input devices and choose the resolution, etc.
- choose the desired mix mode
- press the `“Start Encoding” button`

#### Programmatically

Todo: set link to example

</details>

<details><summary><strong>Which stereoscopic modes does your 3D encoder support?</strong></summary>

Following modes are available:

- Side-by-side left/right
- Side-by-side top/bottom
- Interlaced lines
- Interlaced columns
- Anaglyph
- (Picture-in-Picture)

</details>


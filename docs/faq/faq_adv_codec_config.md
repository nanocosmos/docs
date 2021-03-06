---
id: faq_adv_codec_config
title: Advanced Codec Configuration
sidebar_label: Advanced Codec Configuration
---

<details><summary><strong>How to achieve the optimal H.264 quality?</strong></summary>
#### Choosing appropriate video stream settings

First of all the video quality is determined by the relation of video resolution and frame rate and the configured video bitrate. Especially in lower bitrate scenarios it might be indicated to choose a lower resolution and frame rate to get an acceptable video quality.

#### Improving quality through higher coding efficiency

Nearly all options to increase coding efficiency require additional computation and therefore result in a higher cpu load.

**H.264 profile and entropy coding mode**

`H.264` Baseline profile supports a sub-set of H264, like no b-frame and lower complexity encoding modes (CAVLC). 
`H.264 Main and High profiles` in addition provide a more efficient encoding in forms of B-Frames, and entropy coding mode called `CABAC`. If your application allows to use these profiles, choosing `CABAC` can significantly increase coding efficiency and quality.

**H.264 profile and frame types**

`H.264 Baseline profile` only supports coding `frame types I and P`. 
`H.264 Main and High profiles` in addition support `B frames` which allow a much more efficient compression.

The key frame distance also called GOP Size (Group of pictures) determines how many `P or B frames` are encoded between `I/key frames`. Commonly used are key frame distances between `2 and 5 seconds`, at `25 frames` per second `50-250 frames`. We recommend 2 seconds.

The `P frame distance` determines how many `B frames` are encoded between `I and P frames`. Commonly used are P frame distances between `2 and 4`.

> **A P frame distance setting of X may result in `X-1 B frames` encoded between I and P frames.**

**IDR Frame Distance**

IDR frames are points in the video stream where a decoder can start instant decoding e.g. after a seek, because the following frames have no references pointing to frames before the IDR frame. This is not necessarily true for “normal” I frames. The IDR frame distance determines how many I frames are encoded between IDR frames. 
`IDR frame distance 1`: Every GOP starts with an IDR frame 

`IDR frame distance 2`: Every second GOP starts with an I instead of IDR frame

>**We recommend using IDR frame distance 1.**

**Frame Distance Modes**

nanocosmos `H.264 Encoder` and other encoders support two frame distance modes. This mode determines if `H.264 I and P frame distance settings` are applied as variable/maximum or fix/constant values. In variable mode the encoder can decide which frame type to use based on how efficient the encoding will be, and e.g. switch from `B` to `I` or `P` on a scene cut. Multiple bitrate streams often require constant frame distances.

**GOP Structure Examples (decoding order)**

>IDR=1, I=5, P=1)
>IDR P P P P IDR P P P P IDR P P P P
>
>IDR=2, I=5, P=1)
>IDR P P P P I P P P P IDR P P P P
>
>IDR=1, I=5, P=2)
>IDR P B P B IDR P B P B IDR P B P B
>
>IDR=1, I=5, P=4)
>IDR P B B B IDR P B B B IDR P B B B
>
**In the N/M notation I=N and P=M.**

**Number of reference frames**

During the encoding of P and B frames a defined number of frames is used to find most matching areas and reduce the amount of data needed to encode the difference to it. These frames are called reference frames. A higher number of reference frames will increase the chance to find a better match and result in a higher efficiency. The number of reference frames is not directly related to the GOP structure. Commonly used values are between 1 and 4.

**H.264 quality/speed setting**

The H.264 quality/speed setting is implicitely controlling advanced H.264 encoding parameters like block types, search range and search algorithms used. The goal is to provide an easy to use parameter allowing to balance video quality and performance, to not overload the encoder machine CPU. 

Dependent on the encoder vendor and brand, there are different configurations available.

For open-source based encoders like ffmpeg and OBS, the quality/speed tradeoff setting is called preset and as options like ultrafast, veryfast, fast, slow. We recommend "veryfast".

For nanoStream Encoders, the parameter range is from 0 (maximum speed) to 6 (maximum quality). nanoStream API is using the value 3 (balanced) as a default.

> Example for SD video with limiting factor bandwidth: 
> - H264Profile: Main
> - H264Level: 30
> - H264IFrameDistance: 50-100
> - H264PFrameDistance: 1 (low latency)
> - H264VlcMode: CABAC

> Example for HD video with limiting factor performance: 
> - H264Profile: Baseline or High
> - H264Level: 31
> - H264IFrameDistance: 50-100
> - H264PFrameDistance: 1 (low latency)
> - H264VlcMode: CAVLC

##### Deblocking Filter

The H.264 Deblocking Filter is an important tool to reduce annoying blocking artefacts by video filtering. It is working on the encoding and decoding path. nanoStream API and DirectShow encoder have the deblocking filter enabled with values `alpha: 2` , `beta: 2` by default.

</details>

<details><summary><strong>How do the H.264 rate control mode and minimum/maximum quantization settings interact?</strong></summary>
##### Rate Control Mode

The Rate Control Mode determines the strictness/tolerance that is used by the bitrate control. 

- Constant bitrate (CBR) is trying to keep the bitrate constant over time
- Variable bitrate (VBR) will allow variations of the bitrate dependent on the content complexity

There is a range of options between strict CBR and VBR, as both options have tradeoffs.
CBR is usually used in live streaming, as any network as limits of possible bandwidth.
VBR us more used in live recording and VOD playback, as this can use larger buffers to allow bandwidth variations.
Some encoders have options like ABR (average bitrate)
We recommend using CBR for live streaming.
 
`CBR Strict 1` is the most strict setting. Tolerance is increasing from `Constant Bitrate `(CBR) to `Average Bitrate` (ABR) to `Variable Bitrate` (VBR). nanoStream API is using the CBR Stream setting as a default.

>Values: 
> 0 = Auto (CBR Stream)
> 1 = CBR Strict 1
> 2 = CBR Strict 2
> 3 = CBR Stream
> 4 = ABR 1
> 5 = ABR 2
> 6 = VBR

>`CBR Stream` is recommended for most streaming applications and is the default mode.
>`VBR` is recommended for local file recording and fast video scene changes and transitions.

##### Minimum and Maximum Quantization

The bitrate is controlled through the quantization value that is adjusted for every frame according to the configured bitrate and settings for minimum and maximum quantization. By default nanoStream is calculating a suitable minimum quantization for the configured resolution, framerate and bitrate. So in most cases there is no need to override this setting normally. Setting up a minimum quantization helps the bitrate control to avoid overruns especially when changing back from static scenes with low complexity to scenes with higher complexity. The minimum quantization can be configured with the option `'H264MinimumQuant'`. `0=auto(1)`, `1-51 = custom value` Setting an explicit value (1) will decrease the bitrate drop during static scenes, but might increase short term bitrate overrun when changing back to more complex scenes.

</details>





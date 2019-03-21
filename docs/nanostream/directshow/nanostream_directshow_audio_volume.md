---
id: nanostream_directshow_audio_volume
title: Audio Volume
sidebar_label: Audio Volume
---

## Mix to mono

The filter is able to mix all channels to a mono channel.
This feature can be configured by using the interface `IAudioVolumeMix`.
Here is a short sample code for `c++`:


```cpp
CComQIPtr<IAudioVolumeMix, &IID_IAudioVolumeMix> pAudioVolMix = m_pAudioVol;
if(pAudioVolMix)
{
   pAudioVolMix->MixToMono(true); // true==mix all channels to one
}
...
```

> **Note:** 
>
> The option `MixToMono` has to be set before the output pin of the Audio Volume filter is connected to another filter.


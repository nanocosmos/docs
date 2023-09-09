---
id: nanoplayer_feature_fast start
title: Fast playback start
sidebar_label: Fast playback start
---

## Using the fast playback start feature with nanoStream Cloud

Introduced in **nanoStream H5Live Player Version 4.22.0**, the fast start mode is improving the time to first frame and the playback start time with nanoStream Cloud. 
To enable it, developers need to set the boolean value `config.playback.faststart` to true.
By default, the fast start mode is disabled in v4.22.0. 

#### Configuration with fast playback start enabled: 

```
'config': {
    ...
    'playback': {
        'faststart': true,
        ...
    },
    ...
}
```

#### Fast playback start support in v4.22 
If enabled, fast start mode will be applied in all cases where the player is transitioning from `paused` state to `playing` state including: 
- Playback start via player UI controls 
- API calls to player.setup() with autoplay enabled 
- API calls to player.play() if the player is in `paused` state 
- API calls to player.switchStream() with `source.options.switch.forcePlay` enabled if the player is in `paused` state 
- API calls to player.updateSource() with `source.options.switch.forcePlay` enabled if the player is in `paused` state 


#### Recommendations for fast playback start with adaptive bitrate (ABR) playback 
For adaptive bitrate (ABR) playback with fast start enabled it is recommended to adjust the start index/quality to a medium or lower bitrate rendition to ensure a seemless user experience in case of limited network bandwidth on the viewer side. 

### More about the player configuration

Please check examples on how to configure the player at the [Getting started](https://docs.nanocosmos.de/docs/nanoplayer/nanoplayer_getting_started/) section.

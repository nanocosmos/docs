---
id: nanoplayer_feature_embed_detailed
title: Embed detailed
---

## **Player Embed v1.1.0**


The version of the embed is related to the embed application code, current version is 1.1.0. 
The embed is using the latest player version which is always available at this location: [latest 4.x](https://files.nanocosmos.de/index.php/s/4nndC45mcB6oSa6).

### Implementation with iFrame

**Template example** 
In the following example the `streamname` value has to be replaced:

Link: `https://demo.nanocosmos.de/nanoplayer/embed/1.1.0/nanoplayer.html?entry.rtmp.streamname=XXXXX-YYYYY`
```  
        <iframe src="https://demo.nanocosmos.de/nanoplayer/embed/1.1.0/nanoplayer.html?entry.rtmp.streamname=XXXXX-YYYYY" frameborder="0" allowfullscreen width="1280" height="720"></iframe>

```

iFrame src has to direct to the embedded player ( `https://demo.nanocosmos.de/nanoplayer/embed/1.1.0/nanoplayer.html?entry.rtmp.streamname=XXXXX-YYYYY` ). It is necessary to add the query (like `entry.rtmp` with `streamname`, else the embedded player will be set but won't run without the stream)!

**Example with Nanocosmos Test Stream** 
Test stream is `streamname=HX26g-NRbx9`

Link: `https://demo.nanocosmos.de/nanoplayer/embed/1.1.0/nanoplayer.html?entry.rtmp.streamname=HX26g-NRbx9`
```  
        <iframe src="https://demo.nanocosmos.de/nanoplayer/embed/1.1.0/nanoplayer.html?entry.rtmp.streamname=HX26g-NRbx9" frameborder="0" allowfullscreen width="1280" height="720"></iframe>

```

**Sample links for v1.1.0 implementation:**

* single stream minimal:
    * https://demo.nanocosmos.de/nanoplayer/embed/1.1.0/nanoplayer.html?entry.rtmp.streamname=HX26g-NRbx9

* abr (entries):
    * https://demo.nanocosmos.de/nanoplayer/embed/1.1.0/nanoplayer.html?entry.rtmp.streamname=HX26g-NRbx9&entry.info.bitrate=1500&entry2.rtmp.streamname=HX26g-uVn3M&entry2.info.bitrate=800&entry3.rtmp.streamname=HX26g-VbAxm&entry3.info.bitrate=200&options.rule=deviationOfMean2&startIndex=2

* autoplay/mute settings:
    * https://demo.nanocosmos.de/nanoplayer/embed/1.1.0/nanoplayer.html?entry.rtmp.streamname=HX26g-NRbx9&playback.autoplay=true&playback.automute=false

* UI related: fullScreenControl, displayMutedAutoplay, backgroundColor and poster
    * https://demo.nanocosmos.de/nanoplayer/embed/1.1.0/nanoplayer.html?entry.rtmp.streamname=HX26g-NRbx9&playback.autoplay=true&playback.automute=false&style.displayMutedAutoplay=false&style.fullScreenControl=true&style.backgroundColor=black&style.poster=https://demo1.nanocosmos.de/assets/around720.png


### Configuration via URL parameters:

For embedded player the configuration is set via URL parameters. These params are mapped with the Player [config](https://docs.nanocosmos.de/docs/nanoplayer/nanoplayer_api#nanoplayerconfig--codeobjectcode) params, however in URL  the dot notation is being used for object values. For all objects the object name has to be included, expect from `config.source`. 

Supported query params:
* general parameters from `config.source` object (without `source` as prefix) e.g.:
    * `startIndex=2`
    * `options.adaption.rule=deviationOfMean2`
* entries from `config.source.entries` array (except `info`, `label` & `tag`) e.g.:
    * `entry.rtmp.streamname=**here the streamname**`
    * `entry1.rtmp.streamname=**here the streamname**`
    * `entry2.rtmp.streamname=**here the streamname**`
* all playback parameters from `config.playback` e.g.:
    * `playback.autoplay=true`
    * `playback.muted=false`
    * `playback.automute=false`
    * `playback.timeouts.buffering=20`
* all style parameters from `config.style` e.g.:
    * `style.fullScreenControl=true`
    * `style.displayMutedAutoplay=true`
    * `style.backgroundColor=black`
* all tweaks parameters from `config.tweaks` (have to be given in a complete set) e.g.:
    * `tweaks.buffer.limit=1.7`


### Not supported

Player config which is not supported in embed:

* metrics
* secure playback with referer binding

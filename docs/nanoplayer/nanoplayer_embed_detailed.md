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

iFrame src has to direct to the embedded player ( `https://demo.nanocosmos.de/nanoplayer/embed/1.1.0/nanoplayer.html?entry.rtmp.streamname=XXXXX-YYYYY` ). It is necessary to add the query (like `entry.rtmp` or `bintu` with `streamname` or `id`, else the embedded player will be set but won't run without the stream)!

**Example with Nanocosmos Test Stream** 
Test stream is `streamname=HX26g-NRbx9`

Link: `https://demo.nanocosmos.de/nanoplayer/embed/1.1.0/nanoplayer.html?entry.rtmp.streamname=HX26g-NRbx9`
```  
        <iframe src="https://demo.nanocosmos.de/nanoplayer/embed/1.1.0/nanoplayer.html?entry.rtmp.streamname=HX26g-NRbx9" frameborder="0" allowfullscreen width="1280" height="720"></iframe>

```

**Sample links for v1.1.0 implementation:**
* default:
    * https://demo.nanocosmos.de/nanoplayer/embed/1.1.0/nanoplayer.html?entry.rtmp.streamname=HX26g-NRbx9
    * https://demo.nanocosmos.de/nanoplayer/embed/1.1.0/nanoplayer.html?entry.rtmp.streamname=HX26g-NRbx9&playback.autoplay=true&playback.automute=true&playback.muted=false&style.displayMutedAutoplay=true&style.fullScreenControl=true

* !displayMutedAutoplay
    * https://demo.nanocosmos.de/nanoplayer/embed/1.1.0/nanoplayer.html?entry.rtmp.streamname=HX26g-NRbx9&playback.autoplay=true&playback.automute=true&style.displayMutedAutoplay=false&style.fullScreenControl=false

* !autoplay + muted + !fullscreen + poster:
    * https://demo.nanocosmos.de/nanoplayer/embed/1.1.0/nanoplayer.html?entry.rtmp.streamname=HX26g-NRbx9&playback.autoplay=false&playback.muted=true&style.fullScreenControl=false&style.poster=https://demo1.nanocosmos.de/assets/around720.png

* abr
    * https://demo.nanocosmos.de/nanoplayer/embed/1.1.0/nanoplayer.html?audioPlayer=0&entry.rtmp.streamname=HX26g-NRbx9&entry.info.bitrate=1500&entry2.rtmp.streamname=HX26g-uVn3M&entry2.info.bitrate=800&entry3.rtmp.streamname=HX26g-VbAxm&entry3.info.bitrate=200&options.rule=deviationOfMean2&startIndex=2


### Configuration via URL parameters:

For embedded player the configuration is set via URL parameters. 
The config object's values are reached with a dot notation. As it is already set to be IN the source object, the `source` and `source.entries` should be skipped. Instead, we immediately access values within the object by simply passing in the URL e.g. `startIndex=2`, `options.adaption.rule=deviationOfMean2`. 
Additionally, there is no need to first access the entries object, values can be reached by i.e: `entry2.info.bitrate`, `playback`.`keepConnection=true` and so on.
The structure and data types for config object is explicitly explained in docs [https://docs.nanocosmos.de/docs/nanoplayer/nanoplayer_api#nanoplayerconfig--codeobjectcode ]

Supported query params:
* general parameters from `config.source` object (without `source` as prefix) e.g.:
    * `startIndex=2`
    * `options.adaption.rule=deviationOfMean`
    * `options.switch.method=client`
* entries from `config.source.entries` array (except `info`, `label` & `tag`) e.g.:
    * `entry.rtmp.streamname=**here the streamname**`
    * `entry2.bintu.streamid=**here the streamid**`
* all playback parameters from `config.playback` e.g.:
    * `playback.autoplay=false`
    * `playback.muted=true`
    * `playback.automute=false`
    * `playback.timeouts.buffering=60`
* all style parameters from `config.style` e.g.:
    * `style.fullScreenControl=false`
    * `style.displayMutedAutoplay=false`
    * `style.backgroundColor=white`
* all tweaks parameters from `config.tweaks` (have to be given in a complete set) e.g.:
    * `tweaks.buffer.limit=1.7`


**Important!** Passing params to the URL is slightly different than in a regular nanoplayer example - values can be reached by pointing at them with dot notation (ie entry.info.bitrate, style.controls). While accessing the object, the `source` should be skipped. 
Note: using rtmp is preferred (entry.rtmp).


Not supported:
* metrics
* secure playback with referer binding

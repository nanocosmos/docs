---
id: nanoplayer_feature_embed_detailed
title: Embed detailed
---

## **Player Embed v1.2.0**


The version of the embed is related to the embed application code, current version is 1.2.0. 
The embed is using the latest player version which is always available at this location: [latest 4.x](https://files.nanocosmos.de/index.php/s/4nndC45mcB6oSa6).

### Implementation with iFrame

**Template example** 
In the following example the `streamname` value has to be replaced:

Link: `https://demo.nanocosmos.de/nanoplayer/embed/1.2.0/nanoplayer.html?entry.rtmp.streamname=XXXXX-YYYYY`
```  
        <iframe src="https://demo.nanocosmos.de/nanoplayer/embed/1.2.0/nanoplayer.html?entry.rtmp.streamname=XXXXX-YYYYY" frameborder="0" allowfullscreen width="1280" height="720"></iframe>

```

iFrame src has to direct to the embedded player ( `https://demo.nanocosmos.de/nanoplayer/embed/1.2.0/nanoplayer.html?entry.rtmp.streamname=XXXXX-YYYYY` ). It is necessary to add the query (like `entry.rtmp` with `streamname`, else the embedded player will be set but won't run without the stream)!

**Example with Nanocosmos Test Stream** 
Test stream is `streamname=HX26g-NRbx9`

Link: `https://demo.nanocosmos.de/nanoplayer/embed/1.2.0/nanoplayer.html?entry.rtmp.streamname=HX26g-NRbx9`
```  
        <iframe src="https://demo.nanocosmos.de/nanoplayer/embed/1.2.0/nanoplayer.html?entry.rtmp.streamname=HX26g-NRbx9" frameborder="0" allowfullscreen width="1280" height="720"></iframe>

```

### New in v1.2.0

Following the nanoStream H5Live Player Version 4.14.x release where two new [latency control modes](https://docs.nanocosmos.de/docs/nanoplayer/nanoplayer_feature_latency_control_modes/) have been added, it is possible to use them within Player Embed since v1.2.0. The default value is set to `"classic"` and doesn't require passing any parameter. To change to any of the adaptive modes, it is necessary to pass the desired value in the `playback.latencyControlMode` object via URL params. 

Values: `"classic"`, `"balancedadaptive"`, `"fastadaptive"`.

**URLs with latency control modes:**
* default mode:
    * https://demo.nanocosmos.de/nanoplayer/embed/1.2.0/nanoplayer.html?entry.rtmp.streamname=HX26g-NRbx9&playback.latencyControlMode=classic
* latency control mode set to `"balancedadaptive"`:
    * https://demo.nanocosmos.de/nanoplayer/embed/1.2.0/nanoplayer.html?entry.rtmp.streamname=HX26g-NRbx9&playback.latencyControlMode=balancedadaptive
* latency control mode set to `"fastadaptive"`:
    * https://demo.nanocosmos.de/nanoplayer/embed/1.2.0/nanoplayer.html?entry.rtmp.streamname=HX26g-NRbx9&playback.latencyControlMode=fastadaptive

**Important:** Latency control modes are not available in Player Embed prior to v1.2.0.


**Example URLs for embed player v1.2.0:**

* single stream minimal:
    * https://demo.nanocosmos.de/nanoplayer/embed/1.2.0/nanoplayer.html?entry.rtmp.streamname=HX26g-NRbx9

* latency control mode:
    * https://demo.nanocosmos.de/nanoplayer/embed/1.2.0/nanoplayer.html?entry.rtmp.streamname=HX26g-NRbx9&playback.latencyControlMode=balancedadaptive

* abr/multi stream:
    * https://demo.nanocosmos.de/nanoplayer/embed/1.2.0/nanoplayer.html?entry.rtmp.streamname=HX26g-NRbx9&entry.info.bitrate=1500&entry2.rtmp.streamname=HX26g-uVn3M&entry2.info.bitrate=800&entry3.rtmp.streamname=HX26g-VbAxm&entry3.info.bitrate=200&options.rule=deviationOfMean2&startIndex=2

* autoplay/mute setting:
    * https://demo.nanocosmos.de/nanoplayer/embed/1.2.0/nanoplayer.html?entry.rtmp.streamname=HX26g-NRbx9&playback.autoplay=true&playback.automute=true&playback.muted=false

* UI related: fullScreenControl, displayMutedAutoplay, backgroundColor and poster
    * https://demo.nanocosmos.de/nanoplayer/embed/1.2.0/nanoplayer.html?entry.rtmp.streamname=HX26g-NRbx9&playback.autoplay=true&playback.automute=true&style.displayMutedAutoplay=false&style.fullScreenControl=true&style.backgroundColor=black&style.poster=https://demo1.nanocosmos.de/assets/around720.png


### Configuration via URL parameters:

For embedded player the configuration is set via URL parameters. These params are mapped with the Player [config](https://docs.nanocosmos.de/docs/nanoplayer/nanoplayer_api#nanoplayerconfig--codeobjectcode) params, however in URL  the dot notation is being used for object values. For all objects the object name has to be included, expect from `config.source`. 

Supported query params:
* general parameters from `config.source` object (without `source` as prefix) e.g.:
    * `startIndex=2`
    * `options.adaption.rule=deviationOfMean2`
* entries from `config.source.entries` array (except `info`, `label` & `tag`) e.g.:
    * `entry.rtmp.streamname=**here the streamname**`
    * `entry2.rtmp.streamname=**here the streamname**`
    * `entry3.rtmp.streamname=**here the streamname**`
* all playback parameters from `config.playback` e.g.:
    * `playback.autoplay=true`
    * `playback.muted=false`
    * `playback.automute=true`
    * `playback.timeouts.buffering=20`
    * `playback.latencyControlMode=classic` (v1.2.0)
* all style parameters from `config.style` e.g.:
    * `style.fullScreenControl=true`
    * `style.displayMutedAutoplay=true`
    * `style.backgroundColor=black`
* all tweaks parameters from `config.tweaks` (have to be given in a complete set) e.g.:
    * `tweaks.buffer.limit=1.7`


### Not supported

Player config which is not supported in embed:

* player metrics configuration
* secure playback with referer binding

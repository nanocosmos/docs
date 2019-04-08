---
id: faq_h5live_player_adjust_style
title: Adjust/Style
sidebar_label: Adjust/Style
---

<details><summary><strong>Can I style the player as audio player?</strong></summary>

Yes, you can style the player as audio player by passing

```javascript
config.style.audioPlayer = true;
```

</details>

<details><summary><strong>Can I play video only or audio only streams?</strong></summary>

Yes.


</details>

<details><summary><strong>Can I customize the inline controls?</strong></summary>

No, but you can disable them by passing.

```
config.style.controls = false;
```

</details>

<details><summary><strong>Can I use a raw player without any styles?</strong></summary>

Yes, by passing the config property `style.view = false` all styles will be disabled.

</details>

<details><summary><strong>Can I use an own external video element?</strong></summary>

Yes, by passing the `id` attribute of an existing html5 video element through the config property `playback.videoId`. The video will be inserted into the players container and existing styles will be overwritten and restored after a destroy.

</details>

<details><summary><strong>Can I update the source?</strong></summary>

Yes, by executing the player’s function `updateSource` with an updated `config.source` object.

</details>

<details><summary><strong>Is a fullscreen functionality available?</strong></summary>

Yes, over the native player controls.

</details>

<details><summary><strong>Can I set the players size responsively?</strong></summary>

Yes, by passing over `style.width` and `style.height` the value `auto` and styling the players div.

</details>

<details><summary><strong>Can I use a poster as placeholder for the video?</strong></summary>

But you can use a workaround by passing the id of an existing video tag with poster through the config (`config.playback.videoId`). This video element would be used by the player instead of creating a new one. See [here](http://docs.nanocosmos.de/docs/nanoplayer/nanoplayer_api_class).

Another possibility can be that you grab the video element from the DOM after successful setup and then modify the poster attribute.

```javascript
var video = document.querySelector("#playerDiv video");
video.poster = ....;
```

</details>

<details><summary><strong>Can I change the background color of the player?</strong></summary>
No, currently there is no way to configure the background-color of the video element, but you can have workarounds. You can select the video in the resolve function of the promise (see the sample) and then change the color or you can create a global css rule for video elements. Please see the following examples.

```javascript
var player; 
  var config = {
    "source": {
        "bintu": {
            "apiurl": "https://bintu.nanocosmos.de",
            "streamid": "236af21e-fbf3-4ba3-889c-343ef3f0e7ca"
        }
    },
   "playback": {
      "autoplay": true,
      "automute": true,
      "muted": false
  },
  "style": {
      "controls": true,
      "width": "auto",
      "height": "auto",    
      }
};
document.addEventListener('DOMContentLoaded', function () {
    player = new NanoPlayer("playerDiv");
    player.setup(config).then(function (config) {
        console.log("setup success");
        console.log("config: " + JSON.stringify(config, undefined, 4));
        var video = document.querySelector('#playerDiv video');
        video.style.backgroundColor = '#123456';
    }, function (error) {
        alert(error.message);
    });
});
```

```
<style>
    video {
        background-color: #123456;
    }
</style>
```

</details>

<details><summary><strong>Is there a simple code snippet available?</strong></summary>

Yes, 

</details>

<details><summary><strong>Can I use the player within a mobile webview?</strong></summary>

Yes! 

</details>

<details><summary><strong>Can I have multiple player instances in one page?</strong></summary>

Yes!

</details>

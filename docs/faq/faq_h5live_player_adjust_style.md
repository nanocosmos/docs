---
id: faq_h5live_player_adjust_style
title: Adjust/Style
sidebar_label: Adjust/Style
---

<details><summary><strong>How to make the player responsive and preserve the aspect ratio?</strong></summary>
<br>The following example is for a **16:9 ratio**, which can be changed to work for all other aspect ratios.

### 1. Player configuration

Set the `style.width` and `style.height` properties inside the player config to `auto` to  keep the size of the parent container.

```
    // player config 
    var config = {
        "style": {
            "width": "auto",
            "height": "auto"
        },
        ...
    }
```

### 2. Player DIV CSS

Set a percentage value for `padding-bottom` to maintain the aspect ratio of the players `<div>` element.
<br>For a 16:9 aspect ratio: **(9 / 16 = 0.5625) = 56.25%**

```
    <body>
        <div id="playerDiv" style="padding-bottom: 56.25%"></div>
    </body>
```

### Other aspect ratios

| Aspect ratio | padding-bottom |
| ------------ | -------------- |
| 1:1          | 100%           |
| 16:9         | 56.25%         |
| 4:3          | 75%            |

</details>

<details>
<summary><strong>How to embed the player into an iframe element?</strong></summary>
For most use cases the implementation of the player directly into the page is the best option. We recommend embedding the player within an iframe element only when the use case requires it.

### 1. Creating the embedded page including the player on your side

Please find information and examples on how to add the player to a webpage [here](https://docs.nanocosmos.de/docs/nanoplayer/nanoplayer_getting_started/).

### 2. Embedding the player page in an iframe on a second page on the distribution side

**Important:** The `allowfullscreen` attribute is required if the page wants to support fullscreen video.

```
    <iframe id="ifvideo" width="640" height="480" scrolling="no" frameborder="0" allowfullscreen=""
    src="//yourdomain.com/playerpage.html">
    </iframe>
```

</details>

<details><summary><strong>Can I use a raw player without built-in controls, animations and styles?</strong></summary>

Yes, by passing the config property `config.style.view = false`.

The view is the top level UI layer containing all built-in controls, animations and styles including automatic video scaling.
Disabling the view will disable these features as well which is why this is recommended for experienced users only.

If you want to disable certain parts of the view (eg. controls) keep the `config.style.view` enabled and disable the specific property

Example to disable inline controls:

```
    "style": {
        "view": true // default,
        "controls": false
    },
```

You can find more information regarding config properties in our API docs [here](../nanoplayer/nanoplayer_api/#nanoplayerconfig--codeobjectcode).

> **Important:**
> If you create custom controls or other overlay elements make sure to set the `z-index` value > 1 to ensure they are positioned on top of the video layer.

</details>

<details><summary><strong>Can I customize the inline controls?</strong></summary>

Yes, of course. To adjust the inline controls please follow our customization guideline [here](../nanoplayer/nanoplayer_feature_customization/#built-in-controls-animations-and-styles)

In case you would like to disable them, it is enough to pass false in `config.style.controls`.

```
config.style.controls = false;
```

> **Important:**
> If you create custom controls or other overlay elements make sure to set the `z-index` value > 10 to ensure they are positioned on top of the video layer.

</details>

<details><summary><strong>How to adjust the playout orientation when the broadcast on an iOS device get's rotated?</strong></summary>

> **Note:**
> The iPhone and iPad send the stream with the initial orientation of the device. Meaning, if you rotate the device the stream is rotated which is a technical restriction that we can not change.

In order to have live rotation on the player side, we send rotation **metadata** to the player to adjust the playback to the rotation.
To receive metadata on the player side simply enable it within your player config:

```
    "playback": {
        "metadata": true
    },
```

</details>

<details><summary><strong>Can I style the player as audio player?</strong></summary>

Yes, you can style the player as audio player by passing

```javascript
config.style.audioPlayer = true;
```

</details>

<details><summary><strong>Can I play video only or audio only streams?</strong></summary>

Yes.

</details>

<details><summary><strong>Can I use an own external video element?</strong></summary>

Yes, by passing the `id` attribute of an existing html5 video element through the config property `playback.videoId`. The video will be inserted into the players container and existing styles will be overwritten and restored after a destroy.

> **Important:**
> Since introducing player version **4.4** with seamless stream switching on iOS & iPadOS, **2** video elements are needed internally. So for special use cases where existing video tags need to be used for playback an `array` of maximal two element Ids can be provided via the `playback.videoId` config property (**NOT mandatory**)
>
> - if 0 Ids are provided 2 video elements will be created internally
> - if 1 Id is provided the other video element will be created internally
>
> You can find more information regarding the `playback.videoId` and other config properties in our [API docs](../nanoplayer/nanoplayer_api#nanoplayerconfig--codeobjectcode).

</details>

<details><summary><strong>Can I update the source?</strong></summary>

Yes, by executing the player’s function `updateSource` with an updated `config.source` object.

</details>

<details><summary><strong>Is a fullscreen functionality available?</strong></summary>

Yes. Fullscreen is available over the public [fullscreen API](../nanoplayer/nanoplayer_feature_fullscreen_api) or over the bottom right fullscreen button in the built-in H5live player control bar.

</details>

<details><summary><strong>Can I use a poster as placeholder for the video?</strong></summary>

Since the **nanoStream H5Live Player Version 4.9.1** it is possible.
Poster images, which are displayed while the video element is loading, are supported and can be added in the `config.style.poster`. The string has to be a relative or absolute path to a valid image source like `"./assets/poster.png"` or image URL.

#### Example

```javascript
"style": {
    "poster": "https://[yourdomain]/assets/niceimage.png"
}
```

However, if you prefer to use other version of H5Live Player, you cannot set poster in this way. Alternatively, you can use a workaround by passing the id of an existing video tag with poster through the config (`config.playback.videoId`). This video element would be used by the player instead of creating a new one. See [here](../nanoplayer/nanoplayer_api#nanoplayerconfig--codeobjectcode).

Another possibility can be that you grab the video element from the DOM after successful setup and then modify the poster attribute.

```javascript
var video = document.querySelector("#playerDiv video");
video.poster = ....;
```

</details>

<details><summary><strong>Can I change the background color of the player?</strong></summary>

To change the background color of the player set the backgroundColor parameter in `config.style.backgroundColor` to the desired color. By default it is set to black.

#### Code example with changed background color

```
"style": {
    "backgroundColor": 'white'
}
```

However, if you prefer to use older version of **nanoStream H5Live Player**, then there is no way to configure the background-color of the video element, but you can have workarounds. You can select the video in the resolve function of the promise (see the sample) and then change the color or you can create a global CSS rule for video elements. Please see the following examples.

#### Code example with change in the resolve function of the promise

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

#### Code example with changed global CSS rule

```
<style>
    video {
        background-color: #123456;
    }
</style>
```

</details>

<details><summary><strong>Is there a simple code snippet available?</strong></summary>

Yes. Please check out the 'Getting started' topic in the documentation.
<https://docs.nanocosmos.de/docs/nanoplayer/nanoplayer_getting_started/>

</details>

<details><summary><strong>Can I use the player within a mobile webview?</strong></summary>

Yes. Some mobile webviews require configuration flags to be set on the app level
to allow, e.g. inline playback or playback without user interaction (autoplay).
Examples
iOS: allowsInlineMediaPlayback, mediaTypesRequiringUserActionForPlayback
Android: setMediaPlaybackRequiresUserGesture

Please check the documentation of the webview component.

</details>

<details><summary><strong>Can I have multiple player instances in one page?</strong></summary>

Yes. Please check out the nanoplayer-multi sample in the player package.

</details>

<details><summary><strong>How to adjust volume?</strong></summary>
<br>Adjusting volume differs depending on the operational system.

### 1. iOS

Due to Apple policy, setting the volume internally is not possible at the moment.

### 2. Others

Set the volume with player method `'setVolume'` and passed value in range of 0 to 1.

#### Code example with set volume to 50%

```javascript
player.setVolume(0.5)
</details>
```

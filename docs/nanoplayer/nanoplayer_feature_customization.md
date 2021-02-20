---
id: nanoplayer_feature_customization
title: UI and customization 
sidebar_label: UI and customization
---

Changing parameters is straightforward and easy. You can have a tailor-made design and a smooth appearance within seconds. **It is possible**, among others, **to adjust integrated player controls, icons, background color, add a poster, change the cursor** etc. Of course, you can also disable all built-in styles. In this manual, we will go through customizable elements so that  **H5Live Player** UI will suit all your needs.

![PlayerManual](/img/nanoplayer/h5Live_view_with_poster.png)

1. [**view**](#other-customizations): video overlayer including visible styles, controls and poster/background.
2. [**center view**](#other-customizations): can include play button [see example above], loading animation, mute/volume icon.
3. [**controls**](#built-in-controls-animations-and-styles): control bar with play/pause control, mute control, volume control (slider), playback time, fullscreen control.
4. [**poster**](#poster) / [**background**](#background-color-of-the-player): a poster [image of your choice] that can be set and the background color can be changed.

Below you have a short description of each property and how-to for adjusting styles.

## Built-in controls, animations and styles

The [**nanoStream H5Live Player Version 4.9.1**](https://www.nanocosmos.de/blog/2021/02/nanostream-player-4-9-1-introducing-a-new-design/) is introducing new possibilities in terms of design. The control bar and control icons background colors are customizable. The player is more vivid due to additional button behavior: `buttonHighlighting`, `buttonAnimation` and a variety of available cursors with `buttonCursor`. See the [config](nanoplayer_api.md#nanoplayerconfig--codeobjectcode) here.

**The default style of the player:**

![Default](/img/nanoplayer/h5Live_view_nanoplayer_default.png)

### "symbolColor" and "controlBarColor"

In `config.style.symbolColor` you need to pass the value of the desired color. The default value is `"rgba(244,233,233,1)"`.
The control bar color background is set by default to `"rgba(0,0,0,0.5)"`. To change it, insert the string with desired color value in `config.style.controlBarColor`.

To change one of the colors, insert its value in one of the formats (all case insensitive):

- RGB e.g. `"rgb(255,165,0)"` and with alpha `"rgba(255,165,0,0.5)"`
- HEX e.g. `"#FFA500"` or `"#fa0"` and with alpha `"#FFA500AA"` or `"#fa0a"`
- HSL e.g. `"hsl(39,100%,50%)"` and with alpha `"hsla(39,100%,50%,0.5)"`
- valid CSS Keyword (e.g. `"pink"`/`"white"`/`"aquamarine"`)

Example with HEX color value for symbolColor and controlBarColor:

```javascript
"style": {
        "symbolColor"     : "#ed7d0e",
        "controlBarColor" : "#000000FF"
}
```

![Schema](/img/nanoplayer/h5Live_view_symbolColororange.png)

Example with RGBA color value and transparency:

```javascript
"style": {
        "symbolColor"     : "rgb(255,255,255)",
        "controlBarColor" : "rgba(237,125,14,0.8)"
}
```

![Schema](/img/nanoplayer/h5Live_view_colorBar.png)

### "buttonHighlighting" and "buttonAnimation"

Both properties add the 3D effect to the player and make it more lively.

- `buttonHighlighting` on hover activates a shadow container of the button
- `buttonAnimation` on hover magnifies the button and bounces when clicked

The  `config.style.buttonHighlighting` and `config.style.buttonAnimation` properties will either be:

- `true` by default, means that they are displayed
- `false` to have them disabled

#### Example

```javascript
"style": {
    "buttonHighlighting" : false,
    "buttonAnimation"    : false
}
```

### "buttonCursor"

To change the cursor, you can use any CSS cursor property, e.g:

- `"default"`
- `"pointer"`
- `"grab"`

The default value is set to `"pointer"`. To change it, implement the string with the desirable CSS cursor in `config.style.buttonCursor`

#### Example

```javascript
"style": {
    "buttonCursor": "default"
}
```

Changing the default value to `"default"`, resolves in a switch from the pointing finger to an arrow while hovering over a clickable element.

### Poster

Poster images, which are displayed while the video element is loading, are supported and can be added in the `config.style.poster`. The string has to be a relative or absolute path to a valid image source like `"./assets/poster.png"` or image URL.

#### Example

```javascript
"style": {
    "poster": "https://[yourdomain]/assets/niceimage.png"
}
```

### Background color of the player

To change the background color of the player set the backgroundColor parameter in `config.style.backgroundColor` to the desired color. By default, it is set to `"black"`.

```javascript
"style": {
    "backgroundColor": "white"
}
```

## Responsiveness

To make the player responsive and preserve the aspect ratio, you need to set up player configuration and the CSS of playerDiv.

### Player configuration

Set the `style.width` and `style.height` properties inside the player config to `auto` to  keep the size of the parent container.

```javascript
// player config 
    var config = {
        "style": {
            "width"  : "auto",
            "height" : "auto"
        },
        ...
    }
```

### playerDiv CSS

Set a percentage value for `padding-bottom` to maintain the aspect ratio of the players `<div>` element.
For a 16:9 aspect ratio: **(9 / 16 = 0.5625) = 56.25%**

```html
    <body>
        <div id="playerDiv" style="width:100%;padding-bottom:56.25%"></div>
    </body>
```

### Other aspect ratios

| Aspect ratio | padding-bottom |
| ------------ | -------------- |
| 1:1          | 100%           |
| 16:9         | 56.25%         |
| 4:3          | 75%            |

## Other Customizations

To disable all custom properties in the player, e.g. in case you want to build your controls or display the video as a background without any icons, you can simply set the `view` to false in `config.style.controls`. In this way, you receive a plain video element.

```javascript
"style": {
    "view": false
}
```

### Disable built-in controls

Inline controls are set by default. However, it is possible to disable them by changing the value to `false` in `config.style.controls`.

```javascript
"style": {
    "controls": false
}
```

> **Important**
> If you create custom controls or other overlay elements make sure to set the z-index value > 10 to ensure they are positioned on top of the video layer.

### Style as an audio-only player

To style the player as audio-only (without displaying the video element), it is enough to set the audioPlayer value to `true` in `config.style.audioPlayer`.

```javascript
"style": {
    "audioPlayer": true
}
```

![Schema](/img/nanoplayer/h5Live_view_audioOnly.png)

To customize audio-only control bar follow [built-in controls customization](#built-in-controls-animations-and-styles).

### Display audio-only stream

For audio-only stream, when there is no video, you can style the player to have a black background in the video frame and audio controls.

```javascript
"style": {
    "displayAudioOnly": true
}
```

### Hide fullscreen control

To hide fulscreen control icon set the fullscreen control to `false` in `config.style.fullScreenControl`.

```javascript
"style": {
    "fullScreenControl": false
}
```

### Other customizable parameters with a boolean value

It is possible to customize other parameters as well by setting them to `true` or `false` in `config.style.[parameter]`, e.g.:

- `interactive`
- `view`
- `keepFrame`
- `centerView`

A list of all parameters available for styling can be found in [NanoPlayer API](nanoplayer_api/#nanoplayerconfig--codeobjectcode) in the `config.style` object.

## Example code snippet with customization

In this example we want to change `controlBarColor` and `symbolColor`, replace the default `buttonCursor` and disable the `buttonAnimation`. In addition the `playerDiv` is styled responsive. For presentation, we insert all other customizable parameters within the `style` object. To try it out simply copy the snippet and paste it into a body of any HTML file (replace the streamname `[your_streamname]` with yours).

```html
    <div id="playerDiv" style="width:100%;padding-bottom: 56.25%"></div>
    <script src="//demo.nanocosmos.de/nanoplayer/api/release/nanoplayer.4.min.js?20210127"></script>
    <script>
    var player;
    var defaultUrl = "rtmp://bintu-play.nanocosmos.de/play"; 
    var defaultServer = {
        "websocket": "wss://bintu-h5live.nanocosmos.de:443/h5live/stream",
        "hls": "https://bintu-h5live.nanocosmos.de:443/h5live/http/playlist.m3u8",
        "progressive": "https://bintu-h5live.nanocosmos.de:443/h5live/http/stream.mp4"
    }; 
    var streamNames = [ 
        "[your_streamname]"
    ]; 
    var config = {
        "source": {
            "startIndex": 0,
            "entries": [
                {
                    "index": 0,
                    "h5live": {
                        "server": defaultServer,
                        "rtmp": {
                            "url"        : defaultUrl,
                            "streamname" : streamNames[0]
                        }
                    }
                }
            ]
        },
        "playback": {
            "autoplay" : true,
            "automute" : true,
            "muted"    : false
        },
        "style": {
            "width"                : "auto",
            "height"               : "auto",
            "controls"             : true,
            "interactive"          : true,
            "view"                 : true,
            "scaling"              : "letterbox",
            "keepFrame"            : true,
            "displayAudioOnly"     : true,
            "audioPlayer"          : false,
            "displayMutedAutoplay" : true,
            "backgroundColor"      : "rgb(237,125,14)",
            "fullScreenControl"    : true,
            "centerView"           : true,
            "symbolColor"          : "#FFF",
            "controlBarColor"      : "rgba(237,125,14,0.8)",
            "buttonAnimation"      : false,
            "buttonHighlighting"   : true,
            "buttonCursor"         : "grab",
            "poster"               : ""
        },
    };
    document.addEventListener("DOMContentLoaded", function () {
        player = new NanoPlayer("playerDiv");
        player.setup(config).then(function (config) {
            console.log("setup success");
            console.log("config: " + JSON.stringify(config, undefined, 4));
        }, function (error) {
            alert(error.message);
        });
    });
    </script>
```

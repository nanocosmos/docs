---
id: nanoplayer_feature_customization
title: Customization
sidebar_label: Customization
---

When using H5Live Player, you can customize some parameters according to your needs. 

## 1 Responsivness 

To make the player responsive and preserve the aspect ratio, you need to set up player configuration and the CSS of playerDiv.

### 1.1 Player configuration
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

### 1.2 playerDiv CSS
Set a percentage value for `padding-bottom` to maintain the aspect ratio of the players `<div>` element.
For a 16:9 aspect ratio: **(9 / 16 = 0.5625) = 56.25%**

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

## 2 UI: build-in controls, animations and styles

The **nanoStream H5Live Player Version 4.9.1** is introducing new possibilities in terms of design. The control bar and control icons background colors are customizable. The player is more vivid due to additional button behaviour: `buttonHighlighting`, `buttonAnimation` and variety of available cursors (`buttonCursor`). 

### 2.1 symbolColor and controlBarColor

To change the color, insert its value in one of the formats (all case insensitive):
- RGB e.g. 'rgb(255,165,0)' and with alpha 'rgba(255,165,0,0.5)'
- HEX e.g. '#FFA500' or '#fa0' and with alpha '#FFA500AA' or '#fa0a'
- HSL e.g. 'hsl(39,100%,50%)' and with alpha 'hsla(39,100%,50%,0.5)'
- valid CSS Keyword (e.g. 'pink'/'white'/'aquamarine')

# symbolColor

In `config.style.symbolColor` you need to pass the value of the desired color. The default value is “rgba(244,233,233,1)”.

![Schema](https://www.nanocosmos.de/blog/wp-content/uploads/2021/02/symbolColororange.png)

# controlBarColor

The control bar color background is set by default to “rgba(0,0,0,0.5)”. To change it, insert the string with desired color value in `config.style.controlBarColor`.

![Schema](https://www.nanocosmos.de/blog/wp-content/uploads/2021/02/colorBar.png)

#### Code example:

Example with HEX color value for symbolColor:
```
"style": {
        "symbolColor": "#ed7d0e",
        "controlBarColor": "#00000"
}
```

Example with RGBA color value and trasparency:
Note: symbolColor is set to white only for display contrast in this example

```
"style": {
        "symbolColor": "rgb(255,255,255)",
        "controlBarColor": "rgba(237,125,14,0.8)"
}
```

### 2.2 buttonHighlighting and buttonAnimation

Both properties add the 3D effect to player and make it more lively. 
While hovering over a clickable element (one of control icons):
- `buttonHighlighting` activates a a shadow container of this element
- `buttonAnimation` magnifies the element

The  `config.style.buttonHighlighting` and `config.style.buttonAnimation` properties will either be:

- **true** by default, means that they are displayed
- **false** to have them disabled

#### Code example to disable both:
```
"style": {
    "buttonHighlighting": false,
    "buttonAnimation": false
}
```
### 2.3 buttonCursor

There are three available cursor options in the player which can be implemented in `config.style.buttonCursor`:
- default
- pointer
- progress


By default it is set to an arrow pointer (`default`). 

#### Code example default cursor
```
"style": {
    "buttonCursor": "default"
}
```
Changing the default value to `pointer`, resolves in a switch from arrow cursor to a tiny hand while hovering over a clickable element.

#### Code example pointer cursor
```
"style": {
    "buttonCursor": "pointer"
}
```
Another possibility is setting the value to `progress`, which then will add a spinning wheel to the default arrow while hovering over a clickable element. 

#### Code example progress cursor
```
"style": {
    "buttonCursor": "progress"
}
```
### 2.4 Poster

Poster images, which are displayed while video element is loading, are supported and can be added in the `config.style.poster`. The string has to be relative or absolute path to a valid img source like “./assets/poster.png” or image URL.

#### Code example poster
```
"style": {
    "poster": "https://[yourdomain]/assets/niceimage.png"
}
```

### 2.5 Background color of the player

To change the background color of the player set the backgroundColor parameter in `config.style.backgroundColor` to the desired color. By default it is set to black.

```
"style": {
    "backgroundColor": 'white'
}
```
## 3 Other parameters which can be customized

### 3.1 Disable inline controls

Inline controls are set by default, however, it is possible to disable them by changing the value to false in `config.style.controls`.
```
"style": {
    "controls": false
}
```

> **Important**
>  If you create custom controls or other overlay elements make sure to set the z-index value > 1 to ensure they are positioned on top of the video layer. 

### 3.2 Style as an audio only player

<!-- so when you have video+audio then only audio is displayed so how to style the video player-->
To style player as an audio only (without displaying the video element), it is enough to set audioPlayer value to true in `config.style.audioPlayer`. 
```
"style": {
    "audioPlayer": true
}
```

![Schema](https://www.nanocosmos.de/blog/wp-content/uploads/2021/02/audioOnly.png)

To customize audio only control bar follow 1.2. 


### 3.3 Display audio only stream

For audio only stream, when there is no video, you can style the player to have a black background in the video frame and audio controls.

```
"style": {
    "displayAudioOnly": true
}
```


### 3.4 Hide fullscreen control

To hide fulscreen control icon set the fullScreenControl to false in `config.style.fullScreenControl`.

```
"style": {
    "fullScreenControl": false
}
```
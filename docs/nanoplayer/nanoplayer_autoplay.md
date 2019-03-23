---
id: nanoplayer_autoplay
title: Autoplay
sidebar_label: Autoplay
---

# nanoPlayer / H5Live Autoplay

Autoplay of videos on web pages is a highly discussed topic. 
Does it improve or reduce user experience? 

> **Auto-play of video and audio streams is now only supported with _muted_ audio (silent)!**

> **When auto is not muted, the video would just not play.**

This is a restriction introduced by all large browser vendors, and it requires fine-tuned configuration for web developers.

From the Google web page:

> Chrome's autoplay policies have changed in April 2018 and this is going to affect video playback with sound. Spoiler alert: users are going to love it!

## How can you achieve auto-play on web pages with H5Live player?

With autoplay and automute enabled the player will attempt to start the playback unmuted.
If this fails due to browser autoplay policy restrictions the playback will be started muted.

Configuring auto mute in nanoStream H5live Player:

```javascript
    config.playback.autoplay=true;
    config.playback.automute=true;
    config.playback.muted=false;
```

or

```javascript
var config = {
    "source": {
        // ...
    },
    "playback": {
        "autoplay": true,
        "automute": true,
        "muted": false
    }
    // ...
};
```       

## More information:

[Chrome web page](https://developers.google.com/web/updates/2017/09/autoplay-policy-changes)
[Webkit / Safari web page](https://webkit.org/blog/7734/auto-play-policy-changes-for-macos/)

 



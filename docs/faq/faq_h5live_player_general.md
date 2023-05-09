---
id: faq_h5live_player_general
title: General
sidebar_label: General
---

<details><summary><strong>
What is H5Live and how can it guarantee ultra-low latency live streaming and playback?
</strong></summary>

To respond to our customers’ needs for ultra-low latency use cases, the nanocosmos team invented the plugin-free nanoStream H5Live stream delivery and playback technology.

nanoStream H5Live is a client-server delivery and playback solution based on HTML5 technologies, including HLS on iOS, enabling ultra-low latency browser-based playout, plugin-free on all web browsers.

See the separate H5Live section in our docs,
and our blog posts
<https://www.nanocosmos.de/blog/2017/05/nanostream-h5live-low-latency-faq/>

</details>

<details><summary><strong>
Which browsers/plattforms do we support??
</strong></summary>

## Browser support

The low-latency nanoStream h5Live Player runs on all full-featured HTML5 browsers including

- Safari 10 and higher on iOS, iPadOS and macOS
- Chrome 54 and higher on desktop and mobile
- Firefox 48 and higher
- MS Edge (all versions)
- Internet Explorer 11 (starting Windows 8.1)

For Internet Explorer 11 on Windows 7, H5Live player contains a Flash player fallback for RTMP.

## Browser emulations

Browser emulation might not be supported. Using the player in a browser emulation mode could lead to unexpected behaviour due to mismatching conditions.
It is highly recommended to use real devices for testing and display.

## Issues on specific systems

Generally nanoStream H5live player support in a certain browser depends on the
availability of the involved technologies, codecs and formats.
For Windows, macOS and Android:

- HTML5 Video
- Web Sockets
- Media Source Extensions
- Support for fMP4, H.264 Video, AAC Audio

On iOS, nanoStream H5Live uses a unique version of HLS which works plugin-free on all Safari versions starting iOS 10.

On some Android-based mobile devices, the default browser is a stripped-down version not featuring all HTML5 elements.
For example, the Samsung Internet browser is rather based on Chromium than Chrome.
This results in differences regarding the support of certain technologies, codecs and formats.
<https://www.chromium.org/audio-video>

The Samsung Internet Android browser is one example, where the HTML5 Media Source Extension is missing or disabled, one of the key HTML5 technologies.

We have been able to confirm that the MSE feature can be enabled through

    internet://flags 

in version 6.4, while the default was 'disabled'.
In version 7(.2) this flag has been removed while the default
seems to be 'disabled' still. We are ongoing monitoring Samsung Internet progress.

The nanoPlayer setup call is returning a specific error message in case that the
browser does not support one of the required technologies.

Setup Error: "This browser does not fully support HTML5 and H5Live.
Supported are: Chrome >=54 (Windows, macOS, Android), Firefox >=48 (Windows, macOS, Android),
Microsoft Edge (Windows), Microsoft Internet Explorer 11 (at least Windows 8),
Safari (macOS & at least iOS 10)."

    player.setup(config).then(function (config) {
        console.log("setup success");
    }, function (error) {
        alert(error.message);
    });

</details>

<details><summary><strong>How can I check browser support?</strong></summary>

You can check the static capabilities array of the NanoPlayers class `NanoPlayer.capabilities`. If the array has values, the player is supported. Values can be `h5live`, `flash` and `native`.

</details>

<details><summary><strong>Is H5Live supported in native apps in a Webview on iOS and Android?</strong></summary>

H5Live Player works on native browsers like Safari on iOS and Chrome on Android.
For native apps, you can use WebView components in-app, which both operating systems support.
Example for iOS: <https://developer.apple.com/documentation/webkit/wkwebview/>
The operating systems need to support both H264 video and AAC audio formats for playback, which most platforms do.

</details>

<details><summary><strong>Is there an API documentation available?</strong></summary>

Yes, you can find it [here](../nanoplayer/nanoplayer_api).

</details>

<details><summary><strong>Is there a recommended reconnect/replay event flow?</strong></summary>

This is the recommended pattern for reconnect implementation:

- Re-play can be applied for certain error codes and pause reasons
- Last error code being stored in `onError` handler
- Re-play decision and execution taking place in `onPause` handler
- The number of consecutive replay attempts should be limited

Please find a sample for reconnect logic below:

```
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">

<body>
    <div id="playerDiv"></div>
    <script src="http://demo.nanocosmos.de/nanoplayer/api/release/nanoplayer.4.min.js"></script>
    <script>
        var player;
        var config = {
            "source": {
                "entries": [
                    {
                        "index": 0,
                        "label": "stream 1",
                        "tag": "",
                        "info": {
                            "bitrate": 1500,
                            "width": 1280,
                            "height": 720,
                            "framerate": 30
                        },
                        "hls": "",
                        "h5live": {
                            "server": {
                                "websocket": "wss://bintu-h5live.nanocosmos.de:443/h5live/stream",
                                "hls": "https://bintu-h5live.nanocosmos.de:443/h5live/http/playlist.m3u8",
                                "progressive": "https://bintu-h5live.nanocosmos.de:443/h5live/http/stream.mp4"
                            },
                            "rtmp": {
                                "url": "rtmp://bintu-play.nanocosmos.de/play",
                                "streamname": "XXXXX-YYYYY" // Enter your stream name
                            }
                        },
                        "bintu": {}
                    },
                ],
                "options": {
                    "adaption": {
                        "rule": "none"
                    },
                    "switch": {}
                },
                "startIndex": 0
            },
            "playback": {
                "autoplay": true,
                "automute": true,
                "muted": false
            },
            "style": {
                "controls": true,
                "displayMutedAutoplay": false
            },
            // event callback functions
            "events": {
                "onPlay": onPlay,
                "onPause": onPause,
                "onError": onError,
                "onSwitchStreamSuccess": onSwitchStreamSuccess,
                "onUpdateSourceSuccess": onUpdateSourceSuccess,
            }
        };

        // last error
        var error = null;
        // current and maximum consecutive replay attempts 
        var playAttempts = 0, maxPlayAttempts = 10;
        // do NOT replay when these pausereasons occure
        var pauseReasonsDoNotReplay = ['playbackrestart', 'servernotfound', 'streamnotfound', 'normal'];
        // replay when these error codes occure
        var errorCodesReplay = [1008, 2001, 2002, 2003, 2004, 3003, 4001, 4005, 4006];

        function resetPlayAttemps() {
            playAttempts = 0;
        }

        // playback started successfully
        function onPlay(e) {
            resetPlayAttemps();
        }

        // store error, pause will be fired immediately
        // error will be checked in pause handler
        function onError(e) {
            error = e.data;
            console.log("error code: " + error.code.toString());
            console.log("error message: " + error.message);
        }

        // check for error
        function onPause(e) {
            if (error !== null && e.reason !== 'normal') {
                console.log("paused after error " + error.code.toString());
                if (errorCodesReplay.indexOf(error.code) !== -1 || pauseReasonsDoNotReplay.indexOf(e.reason) !== -1) {
                    doReplay();
                } else {
                    doNotReplay();
                }
            }
            // reset error
            error = null;
        }

        function onSwitchStreamSuccess() {
            console.log("SwitchStreamSuccess");
            resetPlayAttemps();
        }

        function onUpdateSourceSuccess() {
            console.log("UpdateSourceSuccess");
            resetPlayAttemps();
        }

        function doNotReplay() {
            console.log("no replay scheduled");
        }

        function doReplay() {
            try {
                if (player && player.play) {
                    if (playAttempts < maxPlayAttempts) {
                        playAttempts++;
                        console.log("replay attempt " + playAttempts.toString());
                        player.play();
                    } else {
                        console.log('max replays reached');
                    }
                }
            } catch (err) { }
        }

        document.addEventListener('DOMContentLoaded', function () {
            player = new NanoPlayer("playerDiv");
            player.setup(config).then(function (config) {
                console.log("setup success");
                console.log("config: " + JSON.stringify(config, undefined, 4));
            }, function (error) {
                console.log("setup reject error code: " + error.code.toString());
                console.log("setup reject error message: " + error.message);
            });
        });
    </script>
</body>

</html>
```

</details>

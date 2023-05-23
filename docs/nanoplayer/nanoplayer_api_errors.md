---
id: nanoplayer_api_errors
title: NanoPlayer Error Codes & Handling
sidebar_label: NanoPlayer Error Codes & Handling
---

## General

In case something went wrong at setup, startup or playback an error will be thrown over the [`onError`](nanoplayer_api/#onerror) event if registered with an error handler function over [`config.events.onError`](nanoplayer_api/#nanoplayerconfig--codeobjectcode).

There are five error groups:

* [**general player errors**](#player-errors) `1000-1999`
* [**stream errors**](#stream-errors) `2000-2999`
* [**media element errors**](#media-errors) `3000-3999`
* [**network connection and security errors**](#network-errors) `4000-4999`
* [**setup errors**](#setup-errors) `5000-5999`

Following some of the most frequent errors will be described.<br /> To see all errors please have a look at the possible [`errorcodes`](nanoplayer_api/#nanoplayererrorcode--codenumbercode).

## Player Errors

>These errors have codes in a **range from 1000 to 1999**.<br />

1xxx codes represent general errors of the player on startup or playback.<br />
The most frequent errors here are `1005`, `1007`. `1008` and `1009`.

### 1005 Playback must be initialized by user gesture

This is related to autoplay. There are two possible scenarios for this error occurrence:

1. Unmuted playback is not able to start due to the browser policy
2. iOS low power mode

It is recommended to review the autoplay settings.<br />

Read more about how to configure [Autoplay](https://docs.nanocosmos.de/docs/nanoplayer/nanoplayer_autoplay).

### 1007 Playback suspended by external reason

This is indicating a special condition on mobile devices when the playback has been stopped by an event in the browser or system on a mobile device.<br />

>NOTE: This is a non critical error.<br />

This includes:

* Player tab going to background after a tab switch
* Browser application being minimized or closed
* Browser application being interrupted by the system, e.g. in case of an incoming call or device being locked

### 1008 Playback error. Only on iOS.

An unexpected error occurred during playback on iOS. This error is recoverable. Read more about [Media Error Recovery](https://docs.nanocosmos.de/docs/nanoplayer/nanoplayer_feature_media_error_recovery/).

### 1009 Playback failed because the player was in visibility state 'hidden' at load start

This is related to a policy in some browsers, e.g. Chrome, Chromium based and Safari preventing media playback start in a background tab, a tab that did not have focus/visibility yet.

## Stream Errors

>These errors have codes in a **range from 2000 to 2999**.<br />

2xxx codes are related to fetching the media stream on the player side and the occurrence
of timeouts during loading or playback. It is about the availability of the stream on the player side,
which can be connected to the general availabilty of the stream, but as well to bad network conditions
on the player side.<br />
The most frequent errors here are `2001`, `2002`, `2003` and `2004`.

### 2001 The requested stream can not be found

No stream info and media data received.

### 2002 No media available

The stream was already playing, but media data stopped receiving.

### 2003 Not enough media data received

Stream info is received, but no media data was fetched.

### 2004 The source stream has been stopped

The stream was already playing, but the stream was unpublished.

## Media Errors

>These errors have codes in a **range from 3000 to 3999**.<br />

3xxx codes are related to media playback errors in the system/browser playback components,
MediaElement and/or Media Source Extensions.<br />
The most present errors here are `3003`, `3100` for MSE playback and `3005`, `3101` for HLS playback. This errors can be recovered.
Read more about [Media Error Recovery](https://docs.nanocosmos.de/docs/nanoplayer/nanoplayer_feature_media_error_recovery/).

### 3003 An error occurred when decoding media

An receiving media data chunk couldn't be decoded.

### 3005 An error occurred while hls playback when decoding video

The receiving media data of the hls stream couldn't be decoded.

### 3100 The media source extension changed the state to 'ended'

The MSE stopped working.

### 3101 An error occurred while buffering on hls playback

The hls playback was interupted during media data buffering.

## Network Errors

>These errors have codes in a **range from 4000 to 4899**.<br />

4xxx codes are related to network errors of the media stream connections.
Connect failures can be caused by bad network conditions, firewall issues
and in rare cases by overreacting ad blockers.

### 4001 Could not open connection. Timeout reached

The websocket server is not available or not present, a timeout for establishing the connection is reached.

### 4006 The source request was aborted by timeout

An [`updateSource`](nanoplayer_api/#nanoplayerupdatesourcesource) or a [`switchStream`](nanoplayer_api/#nanoplayerswitchstreamindex) request was run into a timeout.

### 4106 Maybe no network, wrong url or server down. Reconnect possible.

The websocket server is not available or not present, establishing new connection is possible.

## Security Errors

>These errors have codes in a **range from 4900 to 4999**.<br />

### 4901 The security service denied access. The authentication token is invalid.

Unsuccesful authentication due to invalid token. Read more about [Secure playback with H5Live](https://docs.nanocosmos.de/docs/nanoplayer/nanoplayer_token_security).

### 4903 The security service denied access. The url is expired or a token parameter is missing (expires, token, or options).

Unsuccesful authentication due to expired token or a missing token parameter. Read more about [Secure playback with H5Live](https://docs.nanocosmos.de/docs/nanoplayer/nanoplayer_token_security).

## Setup Errors

>These errors have codes in a **range from 5000 to 5999**.<br />

5xxx are related to errors during the setup/configuration stage, mainly configuration errors and insufficient browser capabilities.
In most cases it makes sense to check the configuration that has been used.

### 5001 "?javascript error?"

A javascript error occured during setup promise execution. Most often the is reason an 'undefined' error within the setup promise resolve or triggered events (e.g. [`onReady`](nanoplayer_api/#onready), [`onMute`](nanoplayer_api/#onmute) or [`onVolumeChange`](nanoplayer_api/#onvolumechange)) during setup.<br />

Example:

* "undefined is not an object"

### 5002 This browser does not fully support HTML5 and H5Live

The used browser does not fully support HTML5 and H5Live.<br />

Supported browsers are:

* Chrome >=54 (Windows, MacOSX, Android)
* Firefox >=48 (Windows, MacOSX, Android)
* Microsoft Edge (Windows)
* Microsoft Internet Explorer 11 (at least Windows 8)
* Safari (MacOSX & at least iOS 10)

### 5004 The players source configuration is malformed or missing.

This setup error occurres when one of the key parameters (ie `source` object, `group.id` or `rtmp.streamname`) in the config object is malformed, therefore not readable for config parsing, or missing.
Proper configuration examples can be found in [Getting started](https://docs.nanocosmos.de/docs/nanoplayer/nanoplayer_getting_started).

## Error handling

In case of an error, the following choice is to either try to replay/reconnect, or do nothing. 

There are 3 available scenarios depending on the error type:
1. Errors covered by internal recovery or reconnect workflow:

a) Media element errors with available configuration for automatic recovery
- error codes: `1008`, `3003`, `3005`, `3100`. `3101`;

Those are media errors which have an automatic recovery workflow. In case of an error, the recovery will be triggered. The amount of recoveries is set within a time frame of 60 seconds and can be adjusted via player configuration. Read more about [Media Error Recovery](nanoplayer_feature_media_error_recovery).

b) Network connection errors with available configuration for reconnection
- error codes: `4102`, `4103`, `4105`, `4106`, `4107`, `4108`, `4109`, `4111`, `4115`, `4500`, `4503`;

In case of initial connection failure or connection break up during streaming, there is an internal network reconnection workflow supported on all platforms except iOS. Read more about [Reconnect and Timeouts](https://docs.nanocosmos.de/docs/nanoplayer/nanoplayer_feature_reconnect_timeouts).

2. Shouldn't be attempted to recover by retry
- error codes related to autoplay policies: `1005`, `1007`, `1009`;
- error codes related to network security: `49xx`-`4999`;
- error codes related to setup: `5001`-`5010`;

There are errors which should not be attempted to recover as it would be mutually exclusive with the fundation of particular errors. Most errors in this category are directly linked with the mobile usage (autoplay policies, low power mode, tab switching), as well as security errors group (error codes: `49xx`-`4999`) and setup errors (error codes: `5001`-`5010`).

Example 1: user is switching tabs on the phone and the application with running player is going to the background for a moment. In this situation, no one wants to have a running playback in the background tab. As a result the `1007` error (`Playback suspended by external reason`) is thrown and the playback should not be recovered while in the background tab. Therefore, the error recovery is not recommended for this error. 

3. Errors for which replay can be attempted

Errors which are not a part of the internal automatic recovery or reconnect worfklow mentioned above (#1), nor are not suitable for the retry (#2) fall under the replay/reconnect attempt category. 
However, it is strongly recommended that in this scenario:
* the number of consecutive replay attempts is limited and/or
* the time/interval between consecutive replay attempts is increasing with the number of attempts

### Most common errors that shouldn't be recovered by user due to internal automatic recovery or reconnection workflow

            1005, // Playback must be initialized by user gesture.
            1007, // Playback suspended by external reason.
            1008, // Playback error, only on iOS.
            1009, // Playback failed because the player was in visibility state 'hidden' at load start.
            3001, // A fetching process of the media aborted by user.
            3002, // An error occurred when downloading media.
            3003, // An error occurred when decoding media.
            3004, // The received audio/video is not supported.
            3005, // The receiving media data of the hls stream couldn't be decoded.
            3100, // The media source extension changed the state to 'ended'. NOT AVAILABLE FOR IOS.
            3101, // An error occurred while buffering on hls playback
            3200, // An unspecific media error occurred.
            4003  // Maximum number of reconnection tries reached.

### Reconnect/replay event flow

For errors that meet the conditions of replay/reconnection, there is a recommended workflow. 
Based on the last error code (stored in `onError` handler), the replay decision and following execution will take place (in `onPause` handler). The number of consecutive replay attempts should be limited. 

## Example code snippet 

```html
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<body>
    <div id="playerDiv"></div>
    <p>
        <input type="checkbox" id="allowReplay">
        <label for="replay">allow replay</label>
    </p>
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
                            "rtmp": {
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
                "onUpdateSourceSuccess": onUpdateSourceSuccess
            }
        };

        var allowReplayCheckBox = document.getElementById("allowReplay");
        // last error
        var error = null;
        // current and maximum consecutive replay attempts 
        var playAttempts = 0, maxPlayAttempts = 10;
        var errorCodesNotReplay = [
            1005, // Playback must be initialized by user gesture.
            1007, // Playback suspended by external reason.
            1008, // Playback error, only on iOS.
            1009, // Playback failed because the player was in visibility state 'hidden' at load start.
            3001, // A fetching process of the media aborted by user.
            3002, // An error occurred when downloading media.
            3003, // An error occurred when decoding media.
            3004, // The received audio/video is not supported.
            3005, // The receiving media data of the hls stream couldn't be decoded.
            3100, // The media source extension changed the state to 'ended'. NOT AVAILABLE FOR IOS.
            3101, // An error occurred while buffering on hls playback
            3200, // An unspecific media error occurred.
            4003  // Maximum number of reconnection tries reached.
        ];

        function resetPlayAttemps () {
            playAttempts = 0;
        }

        // playback started successfully
        function onPlay (e) {
            resetPlayAttemps();
        }

        // store error, pause will be fired immediately
        // error will be checked in pause handler
        function onError (e) {
            error = e.data;
            console.log("error code: " + error.code.toString());
            console.log("error message: " + error.message);
        }

        // check for error
        function onPause (e) {
            if (error !== null && e.reason !== 'normal') {
                console.log("paused after error " + error.code.toString());

                if (allowReplayCheckBox.checked) {
                    // shouldn't replay when error from errorCodesNotReplay occur or error from range: 4001-4999, 5001-5010
                    if (errorCodesNotReplay.indexOf(error.code) !== -1 || ((error.code >= 4001 && error.code <= 4999) || (error.code >= 5001 && error.code <= 5010))) {
                        doNotReplay();
                    } else {
                        doReplay();
                    }
                }
            }
            // reset error
            error = null;
        }

        function onSwitchStreamSuccess () {
            console.log("SwitchStreamSuccess");
            resetPlayAttemps();
        }

        function onUpdateSourceSuccess () {
            console.log("UpdateSourceSuccess");
            resetPlayAttemps();
        }

        function doNotReplay () {
            console.log("no replay scheduled");
        }

        function doReplay () {
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

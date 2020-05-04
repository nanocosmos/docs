---
id: nanoplayer_api_errors
title: NanoPlayer Status & Error Codes
sidebar_label: NanoPlayer Status & Error Codes
---

## General

In case something went wrong at setup, startup or playback an error will be thrown over the [`onError`](../nanoplayer_api/#onerror) event if registered with an error handler function over [`config.events.onError`](../nanoplayer_api/#nanoplayerconfig--codeobjectcode).

There are five error groups:

* [**general player errors**](#player-errors) `1000-1999`
* [**stream errors**](#stream-errors) `2000-2999`
* [**media element errors**](#media-errors) `3000-3999`
* [**network connection errors**](#network-errors) `4000-4999`
* [**setup errors**](#setup-errors) `5000-5999`

Following some of the most frequent errors will be described.<br /> To see all errors please have a look at the possible [`errorcodes`](../nanoplayer_api/#nanoplayererrorcode--codenumbercode).

## Player Errors

>These errors have codes in a **range from 1000 to 1999**.<br />

1xxx codes represent general errors of the player on startup or playback.<br />
The most frequent errors here are `1005`, `1007` and `1009`.

### 1005 Playback must be initialized by user gesture.

This is related to autoplay. It is recommended to review the autoplay settings.<br />

Please have a look at our blog entry [about autoplay policies](https://www.nanocosmos.de/blog/2018/03/autoplay-on-web-pages-with-h5live-player-for-ultra-low-latency-live-streams/).

### 1007 Playback suspended by external reason.

This is indicating a special condition on mobile devices when the playback has been stopped by an event in the browser or system on a mobile device.<br />

>NOTE: This is a non critical error.<br />

This includes:
* Player tab going to background after a tab switch
* Browser application being minimized or closed
* Browser application being interrupted by the system, e.g. in case of an incoming call or device being locked

### 1009 Playback failed because the player was in visibility state 'hidden' at load start.

This is related to a policy in some browsers, e.g. Chrome, Chromium based and Safari preventing media playback start in a background tab, a tab that did not have focus/visibility yet.

## Stream Errors 

>These errors have codes in a **range from 2000 to 2999**.<br />

2xxx codes are related to fetching the media stream on the player side and the occurrence
of timeouts during loading or playback. It is about the availability of the stream on the player side,
which can be connected to the general availabilty of the stream, but as well to bad network conditions
on the player side.<br />
The most frequent errors here are `2001`, `2002`, `2003` and `2004`.

### 2001 The requested stream can not be found.

No stream info and media data received.

### 2002 No media available.

The stream was already playing, but media data stopped receiving. 

### 2003 Not enough media data received.

Stream info is received, but no media data was fetched.

### 2004 The source stream has been stopped.

The stream was already playing, but the stream was unpublished.

## Media Errors

>These errors have codes in a **range from 3000 to 3999**.<br />

3xxx codes are related to media playback errors in the system/browser playback components,
MediaElement and/or Media Source Extensions.<br />
The most present errors here are `3003` and `3100`.

### 3003 An error occurred when decoding media.

An receiving media data chunk couldn't be decoded.

### 3100 The media source extension changed the state to 'ended'.

The MSE stopped working.

## Network Errors

>These errors have codes in a **range from 4000 to 4999**.<br />

4xxx codes are related to network errors of the media stream connections.
Connect failures can be caused by bad network conditions, firewall issues
and in rare cases by overreacting ad blockers.

### 4001 Could not open connection. Timeout reached.

The websocket server is not available or not present, a timeout for establishing the connection is reached.

### 4006 The source request was aborted by timeout.

An [`updateSource`](../nanoplayer_api/#nanoplayerupdatesourcesource) or a [`switchStream`](../nanoplayer_api/#nanoplayerswitchstreamindex) request was run into a timeout.

## Setup Errors

>These errors have codes in a **range from 5000 to 5999**.<br />

5xxx are related to errors during the setup/configuration stage, mainly configuration errors and insufficient browser capabilities.
In most cases it makes sense to check the configuration that has been used.

### 5001 "?javascript error?"

A javascript error occured during setup promise execution. Most often the is reason an 'undefined' error within the setup promise resolve or triggered events (e.g. [`onReady`](../nanoplayer_api/#onready), [`onMute`](../nanoplayer_api/#onmute) or [`onVolumeChange`](../nanoplayer_api/#onvolumechange)) during setup.<br />

Example: 
* "undefined is not an object"

### 5002 This browser does not fully support HTML5 and H5Live.

The used browser does not fully support HTML5 and H5Live.<br />

Supported browsers are:

* Chrome >=54 (Windows, MacOSX, Android)
* Firefox >=48 (Windows, MacOSX, Android)
* Microsoft Edge (Windows)
* Microsoft Internet Explorer 11 (at least Windows 8)
* Safari (MacOSX & at least iOS 10)

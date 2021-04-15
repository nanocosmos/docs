---
id: nanoplayer_feature_media_error_recovery
title: Media Error Recovery
sidebar_label: Media Error Recovery
---

With the **nanoStream H5Live Player Version 4.10.2** an automatic recovery workflow was introduced, meaning that for certain media errors (`3003`, `3100`, `1008`) which might occur during playback, the recovery will be triggered. In this way, even if there is a disturbance during media decoding, instead of throwing an error and stopping the playback, recovery will start with ongoing playback. This feature brings a smooth experience for users even if there are slight issues with the media element.

## Errors covered by automatic recovery

- `1008` (HLS playback error)
- `3003` (media decode error)
- `3100` (media source ended)

## Configuration parameter

You can adjust the allowed maximum number of recoveries which would be triggered within **60 seconds**. To do so, use a new config parameter: 
`playback.mediaErrorRecoveries`, by setting the value to the desired number. Remember that the default: `3` which is recommended to use.
To disable the parameter set the `playback.mediaErrorRecoveries` value to `0`.

## 60 seconds time span

**Important:** <br>
It is important to note, that the recoveries are counted in the span of **60 seconds**. After that time, if no error occurred but there was another disturbance in i.e. media decoding, the count will start again from 0. The number of allowed recoveries can be customized.
<br>

The default number of recoveries is `3`. If the threshold was reached, an error will be thrown and followed by a pause with message: `'playbackerror'`.


## Warnings

When enabling the media error recovery, each recovery will be indicated by 
[`onWarning`](https://docs.nanocosmos.de/docs/nanoplayer/nanoplayer_api#onwarning) event.

A sample message which you might see in the console when a warning is thrown:
* `'Recovering from media error 3003, recovery number 2 within the last 60 seconds (3 allowed).'`

  As already mentioned, if the threshold was reached, an error will be thrown and followed by a pause with message: `'playbackerror'`

Read more about playback section in:[config](https://docs.nanocosmos.de/docs/nanoplayer/nanoplayer_api#nanoplayerconfig--codeobjectcode)

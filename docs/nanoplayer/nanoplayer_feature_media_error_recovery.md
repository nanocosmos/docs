---
id: nanoplayer_feature_media_error_recovery
title: Media Error Recovery
sidebar_label: Media Error Recovery
---

With the **nanoStream H5Live Player Version 4.10.4** an automatic recovery workflow was introduced, meaning that for certain media errors which might occur during playback, the recovery will be triggered.  In this way, even if there is a disturbance during media decoding, playback resumes automatically. This feature brings a better experience for users.

## Errors covered by automatic recovery

- `1008` - `'Playback error.'`
- `3003` - `'An error occurred when decoding media.'`
- `3005` - `'An error occurred while hls playback when decoding video.'` (since 4.20.2)
- `3100` - `'The media source extension changed the state to \'ended\'.'`
- `3101` - `'An error occurred while buffering on hls playback.'` (since 4.20.2)

For further information see `errorcode` [definitions](https://docs.nanocosmos.de/docs/nanoplayer/nanoplayer_api#nanoplayererrorcode--codenumbercode).

## Configuration parameter

You can adjust the maximum number of recoveries allowed within **60 seconds**. To do so, use the config parameter `playback.mediaErrorRecoveries`,
by setting the value to the desired number. Remember that the default value is `3`, which is recommended to use. To disable the recovery feature set the `playback.mediaErrorRecoveries` value to `0`.
Read more about playback section in [config](https://docs.nanocosmos.de/docs/nanoplayer/nanoplayer_api#nanoplayerconfig--codeobjectcode).

## 60 seconds time frame

> **Important:** <br>
>It is important to note, that the recoveries are counted in the frame of **60 seconds**.
When a recovery is triggered, the last 60 seconds of playback are checked for the total number of recoveries which were set off. If the number (of recoveries) is higher than the allowed maximum number within this time frame, an error is thrown. If no error occured and there were no issues in i.e. media decoding in the last 60 seconds, the count will start again from 0. The number of allowed recoveries can be customized.
<br>

The default number of recoveries is `3`. When the threshold is reached, an error is thrown, followed by a pause with reason: `'playbackerror'`.

## Warnings

When enabling the media error recovery, each recovery will be indicated by an [`onWarning`](https://docs.nanocosmos.de/docs/nanoplayer/nanoplayer_api#onwarning) event.

A sample message which you might see in the console when a warning is thrown:

- `'Recovering from media error 3003, recovery 1/3 within the last 60 seconds (12 total).'`

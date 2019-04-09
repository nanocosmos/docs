# Can I also live stream from files?

Yes, following file types are supported as live sources for streaming:

*  mp4

*  mov

*  wmv

*  wma

*  mpg

*  m2v

*  mp3

Please note, that there is no 100% guarantee to be able to play all combinations of file formats and settings, as there are hundreds of combinations of formats available which playback capabilities are very much dependent on the local system environments.

## How to stream files with the nanoStream API

To stream files, you need to set VideoSource to the value 101 and set FileSourceFilename to the path of the file (including the file name). See [here](live_video_encoder_-_plugin_integration_api), for further information.

## Seemless switch / Ad insertion into live streams

There is also a special stream mode (set with SetConfig("UseSourceBridge", "1")), with which it is possible to stream from a video source (e.g. a webcam) and play files on demand during the streaming. This can be used to play advertisements during a stream for example.

Available options for this special stream mode are described [here]().

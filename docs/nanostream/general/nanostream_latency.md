# nanoStream - Latency
The latency for a stream depends on the protocol, which is used to view the stream, and also on the buffer size for the player. RTMP allows a lower latency than HLS. Common latency values for RTMP are 2 to 5 seconds. Whereas latency values for HLS are often between 20 to 30 seconds.
Notice that RTMP servers, like Wowza, allow to transcode a RTMP stream to HLS.
## How is the stream viewed on the receiver side
- With Flash-Player in a browser or RTMP source player (available in the SDK downloads for iOS and Android - and also available on Windows)
- Native playback on mobile devices use in general HLS, so the latency will be significantly higher.

## HLS settings for Wowza
The latency for HLS depends on the chunk size (for wowza: cupertinoChunkDurationTarget), as described here:
- [HLS from Live Camera](http://www.wowza.com/forums/showthread.php?15352-HLS-from-live-camera)
- [Cupertino Streaming Segmenter](http://www.wowza.com/forums/content.php?88-Cupertino-Streaming-segmenter-parameters-%28iOS)
- [Minimizing HLS Latency](http://www.wowza.com/forums/showthread.php?27066-Minimizing-HLS-latency)

Basically, “cupertinoChunkDurationTarget” has to be modified to achive a lower latency for HLS. For example, using:
**cupertinoChunkDurationTarget=2000 (in milliseconds)** should lead to a lower latency (less than 10 seconds).

## Platform specific latency settings
### iOS
**Notice**: Following descriptions assume that HLS is not used.
There are two encoding modes:
1. NSXEncodingModeAdvancedInMemory (default): available since version 4.0.0.0, requires at least iOS 8. This mode allows low latency from 0.5 to 2 seconds. The buffer setting on the player side is the main factor for the latency.
2. NSXEncodingModeLegacy: backwards compatible for iOS 7. For this mode, the latency is around 2 to 4 seconds. By changing the settings for the parameters “framerate” and “keyFramerate” it is possible to influence the latency. Using the standard settings: framerate=30fps and keyFramerate=60 - the latency should be around 2 to 3 seconds.

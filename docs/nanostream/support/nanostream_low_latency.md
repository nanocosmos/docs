## Live Video Encoder - Low Latency Streaming

### Overview:

This document describes recommended settings to reduce overall end-to-end delay/latency in a video streaming/video chat application.
Latency is primarily based on stream buffers. The lower the buffers, the lower is the latency.
Buffers can happen on all parts of a stream, encoder, streamer, server, CDN and player.

//NOTE: These settings are dependent on overall system configurations and may vary between different version releases of encoder, server and client components.//

### Choosing the right stream protocol

Lowest latency for client-server based streaming can be reached with RTMP.
With additional fine tuning, you can reach end-to-end-latency values below 1 second.
For local area networks, UDP-TS has the lowest latency.
HLS, HDS, Smooth Streaming and MPEG DASH have high buffers by default and are not suitable for low latency applications.

### Encoder Configuration

On Application/API level, nanoStream provides some functions to decrease end-to-end latency.

#### nanoStream Encoder Configuration

nanoStream supports some external and internal settings which may affect latency.

Usage of Baseline profile is recommended if suitable
regarding the quality/bitrate scenario.
Framerates should be as high as possible (20-25-30 fps).
Lower than 15 fps might **increase** the
overall latency, due to frame buffering.

###### Baseline Profile

Highest compatibility, low cpu/system requirements, low latency\\
Applications: Standard web streaming configuration for up to SD resolution, 15-30 fps and 0.1-1.5 Mbit video bitrate:

```cpp
nanoStream.SetConfig("H264Profile", "Baseline");            // Baseline Profile supported by most devices and players
nanoStream.SetConfig("H264IFrameDistance", "50");  	    // Moderate GOP length
nanoStream.SetConfig("H264PFrameDistance", "1");  	    // No B-frames
```

###### Main Profile

Compatibility to most devices, low latency\\
Applications: Standard web streaming configuration for up to SD resolution, 15-30 fps and 0.1-1.5 Mbit video bitrate:

```cpp
nanoStream.SetConfig("H264Profile", "Main");                 // Main Profile
nanoStream.SetConfig("H264IFrameDistance", "50");      // Moderate GOP length
nanoStream.SetConfig("H264PFrameDistance", "1");       // No B-frames
//nanoStream.SetConfig("H264PFrameDistance", "3");       // Optional: 2 B-frames (better quality, slightly higher latency)
```

**Performance settings**

```cpp
nanoStream.SetConfig("H264VlcMode", "1");                    // CAVLC entropy coding mode
nanoStream.SetConfig("RateControl", "1");                       // Strict constant bitrate
nanoStream.SetConfig("H264Quality", "1");                      // Moderate quality, lower cpu requirements
```

#### Additional low-latency settings

The Plugin Interface supports one function "LowDelayOn" which sets some internal buffer settings to achieve lower latency:

```c
  LowDelayOn() {
  SetConfig("TcpNoDelay","0");
  SetConfig("OutBufferSize","0");
  SetConfig("SocketBufferSize","524288");
  }
```


**RTMP Writer**

We recommend connecting to the server before starting the stream.
On Windows, use StartConnect or IRTMPOptions::ConnectServer
to establish the server connection before the stream
is started (this is done automatically when using the plugin).

**TCP/IP Networking**

On the network level we recommend to use
IRTMPOptions::SetTcpNoDelay(true) which
disables the use of the nagle algorithm to
decrease latency. For the plugin this can be set with the option "TcpNoDelay" for SetConfig().

**Capture devices**

It is important that the latency/sample buffer size
is not too big for the audio capture device pin.
By default audio devices might use 500ms-1s.
We recommend buffer sizes/audio latencies
between 50ms-100ms.
For Windows, this can be configured for the plugin using the option "AudioLatency" for SetConfig() or on DirectShow level with IAMBufferNegotiation::SuggestAllocatorProperties.

### Player Configuration

The Player buffers have a high impact on latency.
Flash Player net stream buffer should be set to a low value or 0:
(e.g. jwplayer or others)

NetStream buffer = 0.1   or    0  

### Wowza Server Configuration

To improve delay, one server based config can be changed on Wowza:\\
changeing
```xml
<StreamType>live</StreamType>
```  
to
```xml
<StreamType>live-lowlatency</StreamType>
```

For low latency chat applications, it is best to use smaller socket buffer sizes (16000 bytes for read and write). The socket buffer sizes are configured in **[install-dir]/conf/VHost.xml:**

Code:
```xml
<ReceiveBufferSize>16000</ReceiveBufferSize>
<SendBufferSize>16000</SendBufferSize>
```

Further information:


[http://www.wowzamedia.com/forums_46][43f4fff2]

[http://www.wowzamedia.com/forums_8][dbe68e6e]

[43f4fff2]: http://www.wowzamedia.com/forums/content.php?46 "Wowzamedia How to do performance tuning"

[dbe68e6e]: http://www.wowzamedia.com/forums/content.php?8 "Wowzamedia Live streaming and encoders"



{!docs/nanostream/general/nanocosmos_contact.md!}

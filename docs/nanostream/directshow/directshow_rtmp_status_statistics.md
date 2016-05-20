## RTMP DirectShow Events

RTMP Writer filter provides statistics and information about the current streaming status as DirectShow events.

All types are declared in RTMPWriterOptions.h.
### RTMP Event Codes
```cpp
// EC_USER is defined in Windows SDK\include\evcode.h
// EC_USER                             0x8000

// RTMP Statistics Event Code
#define EC_NANO_RTMP_WRITER_STATS	EC_USER+179

// RTMP Status Event Code
#define EC_NANO_RTMP_WRITER_STATUS	EC_USER+181
```


### RTMP Statistics Event Parameters

```cpp
// RTMP Statistics Event Parameters
// EventCode: (long)EC_NANO_RTMP_WRITER_STATS
// EventParam1: (LONG_PTR)rtmp_writer_stats_t* pStatistics
// EventParam2: (LONG_PTR)(char**)ppRTMPUrl or NULL
// The parameter pointers MUST NOT be deleted or released
```

### RTMP Status Event Parameters

```cpp
// RTMP Status Event Parameters
// EventCode: (long)EC_NANO_RTMP_WRITER_STATUS
// EventParam1: (LONG_PTR)(int*)pRtmpWriterStatus
// EventParam2: (LONG_PTR))(char**)ppRTMPUrl or NULL
// The parameter pointers MUST NOT be deleted or released
```

### RTMP Status Values

```cpp
enum RtmpWriterStatus
{
    RTMPWriterConnected = 0,	 // RTMP Writer is connected
    RTMPWriterDisconnected = 1,	 // RTMP Writer is disconnected
    RTMPWriterReconnecting = 2	 // RTMP Writer is trying to reconnect
};
```


### RTMP Statistics Data Structure

```cpp
struct rtmp_writer_stats_t
{
    int output_buffer_size;	// Available buffer size in bytes
    int output_buffer_fillness;	// Current buffer fillness in bytes

    __int64 output_bitrate;	// Data rate sent through network in bits/s
    __int64 output_bitrate2;	// Deprecated - works only with Windows XP
    __int64 output_bitrate3;	// Deprecated - works only with Windows XP

    DWORD packetsRtt;		// Deprecated - works only with Windows XP
    unsigned int clientBytesReceived;	// Experimental - Bytes received /
                                        // acknowledged by client

    size_t audio_packets_buffered; // Number of audio packets/frames buffered
    size_t video_packets_buffered; // Number of video packets/frames buffered

    int audio_bitrate;		// Input audio bitrate in bits/s
    int video_bitrate;		// Input video bitrate in bits/s

    int audio_packets_sent;	// Number of audio packets/frames sent
    int video_packets_sent;	// Number of video packets/frames sent
};
```

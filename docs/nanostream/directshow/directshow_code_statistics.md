## Codec Statistics DirectShow Events


The option to send Codec Statistics to the DirectShow event queue
is currently implemented by H.264 Encoder and MPEG-2 Encoder filters.

Codec Statistics are disabled by default and can be enabled and
configured through the INanoCodecStatistics COM interface
declared in INanoCodecStatistics.h .

### Configuration COM Interface

```cpp
// {60D60E3B-9A3D-4201-9851-82667041D307}
DEFINE_GUID(IID_INanoCodecStatistics,
0x60d60e3b, 0x9a3d, 0x4201, 0x98, 0x51, 0x82, 0x66, 0x70, 0x41, 0xd3, 0x7);


interface __declspec (uuid("60D60E3B-9A3D-4201-9851-82667041D307"))
INanoCodecStatistics : public IUnknown
{
    // Get/Set statistics events
    // Mode - 0: disable (default), 1: enable
    // Interval - Notification interval in seconds - disabled if <= 0
    STDMETHOD(GetStatisticsMode( int* pmode, int* pinterval)) = 0;
    STDMETHOD(SetStatisticsMode( int mode, int interval)) = 0;
};
```


### Codec Statistics Event Code

```cpp
// Codec Statistics Event Code
// EC_USER is defined in Windows SDK\include\evcode.h
// EC_USER                             0x8000
#define EC_NANO_CODEC_STATS	EC_USER+201 // 0x80C9
```


### Codec Statistics Event Parameters

```cpp
// Codec Statistics Event Parameters
// EventCode: (long)EC_NANO_CODEC_STATS
// EventParam1: (LONG_PTR)NanoCodecStatistics* statistics
// EventParam2: (LONG_PTR)IBaseFilter* instance or NULL
// The parameter pointer MUST NOT be deleted or released
```

### Codec Statistics Data Structure

```cpp
struct NanoCodecStatistics
{
    uint64_t timeInterval; // Overall duration of statistics event in ms
    uint64_t timeIdle;     // Idle time waiting for input in ms
    uint64_t timeProcess;  // Processing, Encoding, Decoding time in ms
    uint64_t timeDeliver;  // Delivery to downstream filter time in ms
    uint64_t numInput;     // Input frames or samples
    uint64_t numOutput;    // Output frames or samples
    uint64_t numDropped;   // Dropped frames or samples
    uint64_t numFailed;    // Failed frames or samples
};
```

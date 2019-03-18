# Auto-Adjust Bitrate & Statistics for RTMP
## General Information
nanoStream 2.0 supports an “Auto Adjust” mode to control the encoded video bitrate to avoid network congestion.
The following modes are available:
- Automatic Bandwidth Checker to initially set a recommended video bitrate
- Dynamic/Adaptive Bitrate Control (ABC) during streaming
- The ABC can be controlled automatically by an internal algorithm, or customized by using the plugin `OnEvent`. Event statistics are gathered by monitoring the tcp traffic on the sender side.

## Bandwidth Checker / Get Recommended Bitrate
The bandwidth checker estimates the highest possible bitrate for your bandwidth.
Note: please ensure that you have a stable internet connection during the bandwidth tests.

## Adaptive Bitrate Control
Adaptive Bitrate Control additionally compensates dynamic bandwidth changes during streaming.
- Applications - GUI and browser plugin
There is a checkbox “Adaptive”, respectively “Adaptive Bitrate”, available in both GUI and browser page, which enables the automatic adjustment of the bitrate.

### How to use Adaptive Bitrate Control
1. Select the target bitrate, that is, the bitrate you want to achieve in the best (optimal) possible case (the maximum permitted bitrate)
2. Set the minimum bitrate. The default of 150kB can be changed (see [Advanced Configuration Options](nanostream_bitrate_control_statistics.md#advanced_configuration_options) below).
3. Make sure the checkbox “Adaptive Bitrate” is checked
4. Start broadcasting

**Important**
The bitrate will be adjusted every five seconds if necessary.
To achieve the best possible control of the bitrate, start the GUI or the browser plugin as administrator or as an user with administrative permissions. Otherwise the TCP traffic cannot be monitored and the actual bitrate, which is received on the client side, has to be estimated.

## Connection Status and Network Statistics send via OnEvent
Event notifications sent via `OnEvent` consist of the event type and a set of key/value pairs containing the event information. Currently there are two types of notifications send via `OnEvent`: RTMP Connection Status and Network Statistics.

### RTMP Connection Status Event
Type Id: 11
The connection status has three possible states, Key/Values: connectionStatus/connected, disconnected, reconnecting.
Reconnecting means that the plugin/rtmp client is currently trying to reestablish the connection to the server.

### RTMP Network Statistics Event
Type Id: 10
The tcp traffic statistics are sent as a JSON-Object.
Keys/Values:
```json
{"outputBufferSize" : intVal, "outputBufferFillness" : intVal, "outputBitrateDefault" : intVal, "outputBitrateFallback" : intVal, "videoBitrate" : intVal, "roundTripTime" : intVal}
```
| Option (Key) | Description |
|-------|-------------|
| outputBufferSize | the maximum available buffer (in bytes) |
| outputBufferFillness | how much if the buffer is used (in bytes) |
| outputBitrateDefault | the estimated bitrate with which the packets are sent to the stream URL, this value is estimated by using tcp packet statistics gathered with a tcp sniffer. Only available when running as admin |
| outputBitrateFallback | like outputBitrateDefault, but not as accurate; does not use a tcp sniffer, but is always available |
| videoBitrate | the bitrate used by the video encoder at the moment |
| roundTripTime | the average time in ms, which is needed to receive an acknowledgement for a sent packet |

**Note**: If you only want the statistics but no automatic control of the bitrate make sure to uncheck the checkbox “Adpative Bitrate” and check the checkbox “Tcp Sniffing ”. “Adaptive Bitrate” and “Tcp Sniffing” can be activated/deactivated via SetConfig(Option, Value) with the parameters “AutoApplyAdaptiveBitrate”, respectively “UseTcpSniffing” for `Option` and 0 (off) or 1 (on) for `Value`.
For more information about how to use the statistics, see the Javascript API and nanoStream.html sample for an example implementation.

### Advanced Configuration Options
The internal algorithm for ABC can be adjusted by following variables, changed via `SetConfig(Option, Value)`:

| Option                        | Description                                                                                                                                                                                        |
|-------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| NumberOfSamplesToUse          | how many samples from the statistics should be used for adjusting the bitrate, the default value is 5                                                                                              |
| BufferFillnessLimitIncBitrate | the maximum allowed buffer fillness percentage for increasing the bitrate. The default value is five percent (0.05), this value should be smaller than or equal to BufferFillnessLimitDecBitrate   |
| BufferFillnessLimitDecBitrate | The minimum buffer fillness percentage, in which case the bitrate is decreased. The default value is ten percent (0.1), this value should be bigger than or equal to BufferFillnessLimitIncBitrate |
| DesiredBufferFillness         | The desired buffer fillness percentage, the default value is 7.5 percent (0.075). This value should be between BufferFillnessLimitIncBitrate and BufferFillnessLimitDecBitrate                     |
| MinimumBitrate                | This value is the lower limit for the bitrate, the default value is 50Kb (50000)                                                                                                                   |
| StartBitrate                  | The bitrate used at the start of the broadcast, the default value is 150Kb (150000)                                                                                                                |
| RTTLimitFactor                | the bitrate is only increased, for the round trip                                                                                                                                                  |

### How ABC works
When broadcasting starts the bitrate is set to the value `StartBitrate`. The bitrate will be checked and possibly adjusted every few seconds - the number of seconds is specified by the value NumberOfSamplesToUse (if set to five, every five seconds). Depending on the conditions at the moment of ckecking, the bitrate will either be increased, decreased or not changed at all. The bitrate value will neither be changed to a value higher than target bitrate (selected by the user) nor lower than the `MinimumBitrate`. If an event lowers the available bandwidth, the bitrate will be decreased accordingly. Vice versa, the bitrate will be increased if there is more bandwidth available. It can take a few minutes to reach the maximum bitrate depending on the size of the gap between the user selected target bitrate and the current bitrate.

## Adaptive Bitrate on iOS and Android
The ABC for iOS and Android works in a similar way to ABC on Windows.
The stream is started with the user selected target bitrate, which is also the maximum bitrate the ABC will use. Depending on the network conditions the bitrate will be decreased or increased. To determine the network conditions the ABC uses internal buffer and bandwidth measurements. Because encoding segments are used on iOS, the adjustment of the bitrate can take longer than on Windows or Android.
Following settings are available:
- `minimumBitrate`: the minimum bitrate the ABC should use as lowest bitrate setting, default is 50000 (~50 kb)
- `maxPercentBitrateChange`: it does not mean that the bitrate change will be limited to a maximum percent, but that the stream is restarted internally if the bitrate change is greater than the `maxPercentBitrateChange` value. A low value will lead to many stream restarts, which in turn will lead to dropouts in the stream, default: 50 (50%).
Both, iOS and Android, also allow to adjust the framerate depending on the network conditions. There is an additional setting available for this mode:
- `minimumFramerate`: the minimum framerate the ABC should use as lowest framerate settings, default is 15 fps
<a id="abc_modes">
## ABC Modes
There are two modes available to control the bitrate in case of low bandwidth:
### Quality Degrade - AdaptiveBitrateControlModeQualityDegrade
Uses properties:
- minimumBitrate
- maxPercentBitrateChange

In case of not enough bandwidth the ABC will decrease the bitrate incrementally. The bitrate will not be reduced under the minimum bitrate value. The framerate remains at the initially set value.
If the bitrate is reduced during one step by an amount larger than the maxPercentBitrateChange value, all buffered data, which was not sent yet, will be discarded. This forces the encoder to continue the stream with new data and prevents it from being stuck with processing old data. This mechanism also prevents the latency from increasing further.
*Advantages*: keeps framerate at initially set value and supports the smoothness of the video playback.
*Disadvantage*: the video quality is reduced when the bitrate is reduced

### Frame Drop - AdaptiveBitrateControlModeFrameDrop.
Uses properties:
- minimumBitrate
- minimumFramerate
- maxPercentBitrateChange

Low bandwidth will be compensated by decreasing the framerate. When the bandwidth is too low the framerate will be reduced incrementally by dropping some frames. The bitrate will be reduced as well to fit the adjusted output framerate. The framerate and bitrate will be set lower than the minimum famerate and bitrate. This mechanism is designed to maintain the video image quality by reducing the smoothness of the video playback.
The maxPercentBitrateChange algorithm works exactly the same as described above for AdativBitrateControlModeQualityDegrade.
*Advantage*: maintains video image quality even with lower bandwidth.
*Disadvantage*: framerate is reduced for low bandwidth conditions, which leads to a reduced smoothness of the video playback.

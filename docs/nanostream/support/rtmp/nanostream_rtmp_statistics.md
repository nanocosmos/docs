# RTMP statistics

The following pseudocode, shows how to query the connection status and the statistics of the RTMP Writer (`m_pMediaEventEx` is of type `IMediaEventEx`):
```cpp
while (SUCCEEDED(m_pMediaEventEx-&gt;GetEvent(&amp;nEvCode, &amp;param1, &amp;param2, 0))) {
switch (nEvCode) {
case EC_NANO_RTMP_WRITER_STATUS:
{
RtmpWriterStatus *status = (RtmpWriterStatus*)param1;
switch(*status)
{
case RTMPWriterConnected: //...
case RTMPWriterDisconnected: //...
case RTMPWriterReconnecting: //...
}
}

case EC_NANO_RTMP_WRITER_STATS:
{
rtmp_writer_stats_t* stats = (rtmp_writer_stats_t*)param1;
//...
// if you use multiple rtmp writer you can identify which rtmp writer did send
// the statistics by using the second parameter (it contains the url, to which
// the rtmp writer is streaming
char* urlId = (char*)param2;
//...
}
}
}
```
Explanation of `rtmp_writer_stats_t`:
- `output_buffer_size` = max. available buffer in bytes
- `output_buffer_fillness` = how much bytes of the buffer are used
- `output_bitrate` = estimated bitrate of the stream
- `output_bitrate2` = similar to ouput_bitrate, but another (more accurate) method is used (only available if tcp sniffing is enabled - works only with win xp)
- `output_bitrate3` = similar to ouput_bitrate, but another method is used (only available if tcp sniffing is enabled - works only with win xp)
- `packetsRtt` = rount trip time (RTT) in ms
- `clientBytesReceived` = amount of received bytes
- `audio_buffered_samples` = amount of buffered samples for audio
- `video_buffered_samples` = amount of buffered samples for video
- `audio_bitrate` = current audio bitrate of the encoder
- `video_bitrate` = current video bitrate of the encoder

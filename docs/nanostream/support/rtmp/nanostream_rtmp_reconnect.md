# RTMP Streaming Automatic Reconnect

## General Information
Nanocosmos Rtmp streaming can be configured to try to reconnect after connection to the streaming server failed (for example due to unstable internet connection).

&lt;a id="reconnect_settings"&gt;
## Available Reconnection Settings (for use with Plugin or directly with RTMP Writer)
| Option | Description | Values |
|--------|-------------|--------|
| ReconnectAttempts | how often a reconnection should be attempted | 0-max(int32). Default: 5 |
| UseUnlimitedReconnect (*plugin*); PROPID_nanoRTMPUnlimitedReconnect(*rtmp-writer*) | unlimited reconnection attempts (filter graph is not stopped). Overrides ReconnectAttempts | 0: disable, 1: enable |
| ReconnectPeriod | time to wait before a new reconnection attempt is made | 100 ms - max(int32)ms. Values &lt; 100 ms disable Auto-reconnect. Default 5000 ms |
| UseInternalReconnect | if enabled, the filter graph is not restarted when trying to reconnect: local encoding and recording continues despite absent internet connection | 0: disabled (reconnection is done by stopping and starting the filter graph), 1: enabled (use internal reconnect of rtmp-writer)|

If all reconnection attempts were unsuccessful, streaming will be stopped, except when **UseUnlimitedReconnect** is used.
**Important**
If a reconnection attempt was successful the internal reconnection counter is reset. For following disconnections, the rtmp writer tries again to reconnect the given number of reconnect attempts before stopping the encoder.

### Using Reconnection with the browser plugin
To use the reconnection ability of the rtmp writer `SetConfig(Option, Value)` can be used, see [Table Above](#reconnect_settings) for available options and corresponding values.

### Using Reconnection with the RTMP Writer
Reconnection can be configured via the interface IRTMPOptions:
```cpp
CComQIPtr&lt;IRTMPOptions, &amp;IID_IRTMPOptions&gt; optRtmp = pSink;
if (optRtmp)
{
optRtmp-&gt;SetReconnectInterval(reconnectPeriodValue);
optRtmp-&gt;SetReconnectAttempts(reconnectAttemptsValue);
}
```
Further options are available via ICodecApi:
```
CComQIPtr api = pSink;
if(SUCCEEDED(api-&gt;IsSupported(&amp;PROPID_nanoRTMPUnlimitedReconnect)))
{
VARIANT vt;
VariantInit(&amp;vt);
vt.vt = VT_BOOL;
vt.boolVal = VARIANT_TRUE; // or VARIANT_FALSE
api-&gt;SetValue(&amp;PROPID_nanoRTMPUnlimitedReconnect, &amp;vt);
}
```
### Using Reconnection with XML
See Also: **LiveVideoEncoder-XML-Config**
```html
&lt;reconnectinterval&gt;
&lt;attempts&gt;5&lt;/attempts&gt;
&lt;interval&gt;5000&lt;/interval&gt;
&lt;restartgraph&gt;false&lt;/restartgraph&gt; &lt;!-- false: internal reconnect of the rtmp writer will be used--&gt;
&lt;unlimitedattempts&gt;true&lt;/unlimitedattempts&gt; &lt;!-- overrides attempts (5 in this example) --&gt;
&lt;/reconnectinterval&gt;
```
&nbsp;

**restartgraph** and **UseInternalReconnect** have reversed meaning:
**restartgraph** set to *false* enables usage of the rtmp-writer's internal reconnect, whereas **UseInternalReconnect** set to *0* disables usage of rtmp-writer's internal reconnect (reconnection is done by stopping and starting the filter graph).

### Using Reconnection to keep the encoder running
If the rtmp writer is disconnected from the streaming server URL, the whole encoder graph will be stopped. When a parallel stream to another destination is running, this recording will be stopped as well. This is especially important for the local mp4 file writer. To avoid this, you can use the option enable UseInternalReconnect (if the plugin is used) or SetReconnectAttempts, (if the RTMP Writer is used directly). The filter graph will then keep running until all reconnect attempts fail.

**Example**
`reconnect attempts = 100`
`reconnect period = 6000 ms`
Here, the encoder will keep running for ten minutes if all reconnection attempts failed. If you use the option `UseUnlimitedReconnect`, resp. `PROPID_nanoRTMPUnlimitedReconnect` the graph will never be stopped by the rtmp filter - a reconnection attempt is made every *x* ms (depending on the specified value).

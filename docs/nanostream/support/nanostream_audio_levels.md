# nanoStream Audio Levels
The current audio level can be queried with the method `GetAudioLevel(int channel)`. Valid parameters are *0* for the left respectively *1* for the right channel. Note that the plugin method gives back audio level values (*min value* is *0*, *max value* is *32767*) after `StartPreview` or `StartBroadcast` was invoked; before that the method will just return the current audio volume (most of the time that will be the value *100*).

Simple sample code for java script:
First create a variable:
```javascript
var liveTimer = {};
```
&nbsp;

Then in the handler function for the button `StartPreview` or `StartBroadcast` method assign a function which should be called every *x* milliseconds (here *100 ms*)
```javascript
liveTimer = window.setInterval(audioLevelHandler, 100);
```
&nbsp;

The function itself:
```javascript
function audioLevelHandler() {
var v = liveObj.GetAudioLevel(channel); // channel can be 0 for left channel or 1 for right channel
var percent = Math.round(v*100.0/32767.0);
//... do something with the values
}```
After the preview or broadcast is stopped you can stop the audio level handler:
```javascript
window.clearInterval(liveTimer);
```
&nbsp;

**More frequent update of audio level values**
To get the audio level data more frequently from the plugin you can use following setting:
```javascript
pluginObj.SetConfig(_T("AudioLatency"), _T("100")); // the 2° value is time in ms
```
The default value for most cameras for the audio latency is 500 ms, so the audio level display can be quite delayed. You can also try to set 50ms for the AudioLatency, but 100ms should be sufficient.

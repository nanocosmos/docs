# RTMP Connect Data
nanoStream supports sending a user defined amf data object included in the RTMP connect call. The data can be handled in the `onConnect()` handler of the RTMP server. Common applications are custom authentication and transmission of additional user/setup information. If set, the data will be included in the next connect call.

The function `SetConnectInfo` is supported on Windows/MacOS/iOS/Android.
Parameters are `string jsonValues`, JSON object string.
Restrictions
- Top-level object must be an object.
- Cannot contain arrays or other objects.
- May only contain key-value pairs.

Example JSON showing a string, number and boolean value:
<pre class="lang:js decode:true ">{
  "key1" : "value1",
  "key2" : 7.5,
  "key3" : false
}</pre>
Line breaks are only used for clarity, JSON will more look like this:
<pre class="lang:js decode:true ">{"key1":"value1","key2":7.5,"key3":false}</pre>
&nbsp;

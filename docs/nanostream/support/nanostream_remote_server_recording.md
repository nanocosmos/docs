## nanoStream Remote Server Recording


### Recording on demand on Flash Media Server


#### General Information


nanoStream 2.0 supports a "Remote Server Record" mode to enable server based video recording functionality. Currently this works only with Flash Media Server. See Wowza section for how to record on demand to Wowza Media Server.

#### Requirements:

  * Flash Media Server 3/4 or higher
  * The application must support recording. Some preinstalled applications (live on FMS4) dont. To test recording, you have to create a new application folder in FMS_DIR\applications, and copy the files from FMS_DIR\samples\applications\live into it.
  * Streams containing H.264/AVC video data have to be named matching the **mp4:streamname** scheme, otherwise recording will fail. Sample stream URL: ```rtmp://localhost/liverec+mp4:samplerec.mp4```
  * The recorded file can be found in the directory specified with LIVE_DIR in the config file FMS_DIR\conf\fms.ini

#### Usage:

  * Set the publish mode with a call to **SetRTMPPublishMode** before calling **StartBroadcast()** - if you use the RTMP filter directly use the property **PROPID_nanoRTMPPublishMode**
    * Valid Values are:
      * 0 - live(no recording),
      * 1 - record(rewrite file),
      * 2 - append(append to file)
  * Javascript API:
    * call the function SetRTMPPublishMode()to configure publish mode
  * Plugin API / ActiveX / C/C++:
    * Call the API function setConfig with parameter name **RTMPPublishMode**:
      * nanoStream.setConfig("RTMPPublishMode","1");

#### Sample Web Application:

See the HTML web page in the folder web/liveEncoder/nanoStream.html\\
The feature is implemented there under "Advanced Options".\\
See the function code for SetRTMPPublishMode  in nanoEncoder.js for how it is implemented in Javascript.\\

### Recording on demand on Wowza Media Server

#### General Information


nanoStream 2.0 supports a "Remote Server Record" mode to enable server based video recording functionality. Currently this works only with Wowza Media Server and an additional server plugin.

#### Wowza Streaming Engine

  * Edit the file Application.xml at: [install-dir]/conf/[application]/
  * Edit the "StreamType" to: "<StreamType>live-record</StreamType>"

#### Older Versions

#### Requirements:


  * Wowza Media Server 2.0.0.4 or higher.
  * Wowza Plugin Module "LiveStreamRecord: Module for recording a live stream on demand.

Download Link: [Wowza LiveStreamRecord 2.0][8403a33b]


#### Installation:

  * Unpack the ZIP file and copy the jar files wms-plugin-into the Wowza installation folder: [install-dir]/lib
  * Edit the file Application.xml at: [install-dir]/conf/[application]/
  * Add this <Module> at the end of the <Modules> list:
```xml
<Module>
    <Name>ModuleLiveStreamRecord</Name>
    <Description>ModuleLiveStreamRecord</Description>
    <Class>com.wowza.wms.plugin.livestreamrecord.ModuleLiveStreamRecord</Class>
</Module>
```

#### Usage:

  * Recording requires a running encoder start with **StartBroadcast()**
  * Javascript API:
    * call the function **StartServerRecording()**to advise the server to record the stream
  * Plugin API / ActiveX / C/C++:
    * Call the API function **sendCommandObject** - if you use the RTMP filter directly the interface **IRTMPMetadataSink** has to be used (see [[can_i_add_meta_data_to_the_live_stream|here]] for a description):
      * nanoStream.sendCommandObject(myStreamName,"startRecording",cmd);
        * myStreamName is the current RTMP Stream Name (e.g. "livestream1")
        * cmd is a command object, or NULL (please contact us for sample code for C++)
          * Sample JavaScript Code:

```js
var myStreamName = "YourStreamName"; // replace with your stream name
var cmd = {};
cmd.streamName = myStreamName;   // rtmp stream name
cmd.cmd2 = {};

cmd.cmd2.format = "mp4";        // video format - mp4 recommended
cmd.cmd2.append = false;         // append files or write new files
cmd.cmd2.startOnKeyFrame = true; // start recording on a video key frame
cmd.cmd2.recordData = false;
cmd.cmd2.versionFile = true;     // start recorded

pluginObj.SendRtmpCommand(myStreamName, "startRecording", cmd);
```

##### Sample Web Application:

See the HTML web page in the folder web/liveEncoder/nanoStream.html\\
The feature is implemented there under "Advanced Options".\\
See the function code for //StartServerRecording// in nanoEncoder.js for how it is implemented in Javascript.

#### Contact
{!docs/nanostream/general/nanocosmos_contact.md!}


[8403a33b]: http://www.wowzamedia.com/downloads/forums/livestreamrecord/LiveStreamRecord_2.0.zip "http://www.wowzamedia.com/downloads/forums/livestreamrecord/LiveStreamRecord_2.0.zip"

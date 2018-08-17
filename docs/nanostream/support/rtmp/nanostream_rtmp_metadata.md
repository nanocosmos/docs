# RTMP Metadata
nanoStream supports sending user defined RTMP metadata during the stream. Common applications are the calls to onMetaData and onCuePoint handlers.
Function Name: `SendMetadata`
*Supported Platforms: Windows/MacOS/iOS/Android*
Parameters:
- `string handlerName`, Name of the handler, e.g. "onMetaData","onCuePoint" or a custom handler name "onMyHandler"
- `string jsonValues`, JSON object string, see example below
- `string type`, reserved, leave empty ""
- `boolean live`, Send metadata live/in-stream or non live which means that the metadata is aggregated at the server and sent at stream start of a player. Should be true in most cases.
*Restrictions*:
- Top-level object must be an object.
- Top-level object can contain objects and key/value pairs.
- Second-level objects cannot contain further nested objects.
- Cannot contain arrays.

## Example JSON for "onMetaData" handler
```javascript
{
  "key" : "value",
  "nextkey" : "nextvalue",
  "anotherkey" : 14.0,
   "lastkey" : false
}
// Line breaks are only used for clarity.
// The real JSON string will more look like this:
{"key" : "value", "nextkey" : "nextvalue", "anotherkey" : 14.0, "lastkey" : false}
```
&nbsp;

## Example JSON for "onCuePoint" handler
```javascript
{
  "name" : "chapter1",
  "type" : "event",
  "time" : 14.0,
  "parameters" :
  {
    "parameter1" : "value1",
    "parameter2" : 0,
    "parameter3" : false
  }
}
```
// Line breaks are only used for clarity.
// The real JSON string will more look like this:
```javascript
{"name":"chapter1","type":"event","time":14.0,"parameters":{"parameter1":"value1","parameter2":0,"parameter3":false}}
```
&nbsp;

## More information
More information about RTMP metadata and cue points can be found here:
* [Adobe Using cue points and metadata][8f1f3741]
* [Adobe Use cue points][a3a32446]

  [8f1f3741]: http://help.adobe.com/en_US/as3/dev/WSD30FA424-950E-43ba-96C8-99B926943FE7.html "http://help.adobe.com/en_US/as3/dev/WSD30FA424-950E-43ba-96C8-99B926943FE7.html"
  [a3a32446]: http://help.adobe.com/en_US/ActionScript/3.0_UsingComponentsAS3/WS5b3ccc516d4fbf351e63e3d118a9c65586-7feb.html "http://help.adobe.com/en_US/ActionScript/3.0_UsingComponentsAS3/WS5b3ccc516d4fbf351e63e3d118a9c65586-7feb.html"

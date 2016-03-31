nanoStream Live Video Encoder 
============================
Webcaster / Browser based Live Encoder
Version 4.0
Compatible to NPAPI, ActiveX and Chrome Extension
(c) 2015 nanocosmos gmbh
http://www.nanocosmos.net

**Work in Progress**

# NANO.NanoStream

* Description
    * Use the `NANO.NanoStream` API to communicate with the plugin. It provide async functions and events to handle devices, configs, preview and broadcast. Use the functions with callbacks to retrieve necessary informations and data for the encoder lifecycle and the usage with frontend javascript code.

* Browser
    * Chrome, Firefox, Internet Explorer, Safari

* OS
    * Windows Support for NPAPI / Chrome
    * MacOS Support only for NPAPI (Chrome not supported yet)

* Availability
    * Since nanoStream 4.0

## NanoStream Summary

* [API Methods (async with callbacks)](#api_methods_async_with_callbacks)
    * [GetAudioDeviceConfig](#getaudiodeviceconfig)
    * [GetAudioDevices](#getaudiodevices)
    * [GetAudioLevels](#getaudiolevels)
    * [GetConfig](#getconfig)
    * [GetInputs](#getinputs)
    * [GetOutputs](#getoutputs)
    * [GetVideoDeviceConfig](#getvideodeviceconfig)
    * [GetVideoDevices](#getvideodevices)
    * [GetWindows](#getwindows)
    * [SaveXmlProfile](#savexmlprofile)
    * [SetAudioVolume](#setaudiovolume)
    * [SetConfigs](#setconfigs)
    * [SetInputs](#setinputs)
    * [SetOutputs](#setoutputs)
    * [SetPictureInPictureSize](#setpictureinpicturesize)
    * [SetVideoMixingMode](#setvideomixingmode)
    * [SetXmlProfile](#setxmlprofile)
    * [StartBroadcast](#startbroadcast)
    * [StartPreview](#startpreview)
    * [StopBroadcast](#stopbroadcast)
    * [StopPreview](#stoppreview)
    * [Init](#init)

* [Helper Methods (sync)](#helper_methods_sync)
    * [DetectBrowser](#detectbrowser)
    * [InstallExtensionInline](#installextensioninline)
    * [InstallExtensionWebstore](#installextensionwebstore)
    * [FireEvent](#fireevent)

* [Events](#events)
    * [onError](#onerror)
    * [onNotifyEvent](#onnotifyevent)
    * [onStopEvent](#onstopevent)
    * [onSupported](#onsupported)
    * [onUnsupported](#onunsupported)

## API Methods (async with callbacks)

### GetAudioDeviceConfig

[up to summary](#nanostream_summary)

_object_ NANO.NanoStream.GetAudioDeviceConfig(_integer_ index, _function_ successCallback, _function_ errorCallback)

#### Description

* An object with all possible config parameters of the the audio device by index will be passed in the success callback.
* The error callback parameters is optional. If no callback should be used, pass `null`
    * e.g. _object_ NANO.NanoStream.GetAudioDeviceConfig(_integer_ index, _function_ successCallback, _null_)
        * only with success callback
        * the `NANO.NanoStream.onError` event will be used if defined

#### Parameters

* _integer_ index
    * The index of the audio device
* _function_ successCallback(message)
    * The success callback method if defined
    * _object_ message
        * The parsed message that will be send back to the client

```javascript
        general:
            {
                "command": "GetAudioDeviceConfig",
                "data": {
                    "value": {
                        "device": {
                            "id": string, // the device name
                            "index": integer, // the device index
                            "options": [ // array with options
                                {
                                    "samplerates": [ // array available samplerates 
                                        integer,
                                        integer,
                                        ...
                                    ]
                                }
                            ]
                        }
                    }
                },
                "result": "OK",
                "status": "COMPLETE",
                "type": string // defines the sender
            }
        example:
            {
                "command": "GetAudioDeviceConfig",
                "data": {
                    "value": {
                        "device": {
                            "id": "Mikrofon (HD Pro Webcam C920)",
                            "index": 2,
                            "options": [
                                {
                                    "samplerates": [
                                        22050,
                                        24000,
                                        44100,
                                        48000
                                    ]
                                }
                            ]
                        }
                    }
                },
                "result": "OK",
                "status":"COMPLETE",
                "type":"nanonative"
            }
```

* _function_ errorCallback(message)
    * _object_ message
        * The parsed message that will be send back to the client

```javascript
            {
                "command": "GetAudioDeviceConfig",
                "data": {
                    "value": string  // the error message
                },
                "result": "FAILED",
                "status": "COMPLETE",
                "type": string
            }
```

#### Returns

* The parsed message that will be send to the plugin
    * _object_

```javascript
            {
                "type": "nanoclient",
                "command": "GetAudioDeviceConfig",
                "params": [
                    index
                ]                
            }
```

#### Example

```javascript
    var index = 0;
    var message = NANO.NanoStream.GetAudioDeviceConfig(
        index,
        function success(message) {
            console.log("Callback: " + JSON.stringify(message));
            var device = message.data.value.device;
            var options = message.data.value.device.options;
            for (var i = 0; i < options.length; i += 1) {
                console.log("Found options " + i + " for audio device '" + device.id + "' with index = " + device.index);
                var samplerates = options[i].samplerates;
                for (var j = 0; j < samplerates.length; j += 1) {
                    console.log("Available samplerate: " + samplerates[j]);                
                }
            }
        },
        function error(message) {
            alert("Callback Error: " + JSON.stringify(message));
        }
    );
    console.log("Call: " + JSON.stringify(message));
```

[up](#getaudiodeviceconfig)

---

### GetAudioDevices

[up to summary](#nanostream_summary)

_object_ NANO.NanoStream.GetAudioDevices(_function_ successCallback, _function_ errorCallback)

#### Description

* An array object with all available audio devices will be passed in the success callback.
* The error callback parameters is optional. If no callback should be used, pass `null`
    * e.g. _object_ NANO.NanoStream.GetAudioDevices(_function_ successCallback, _null_)
        * only with success callback
        * the `NANO.NanoStream.onError` event will be used if defined

#### Parameters

* _function_ successCallback(message)
    * The success callback method if defined
    * _object_ message
        * The parsed message that will be send back to the client

```javascript
        general:
            {
                "command": "GetAudioDevices",
                "data": {
                    "value": {
                        "devices": {
                            "audio": [ // array with device objects
                                {
                                    "id": string, // the device name
                                    "index": integer // the device index
                                },
                                {
                                    "id": string,
                                    "index": integer
                                },
                                {
                                    "id": string,
                                    "index": integer
                                },
                                ...
                            ]
                        }
                    }
                },
                "result": "OK",
                "status": "COMPLETE",
                "type": string // defines the sender
            }
        example:
            {
                "command": "GetAudioDevices",
                "data": {
                    "value": {
                        "devices": {
                            "audio": [
                                {
                                    "id": "Mikrofon (HD Pro Webcam C920)",
                                    "index": 0
                                },
                                {
                                    "id": "nanocosmos Live Audio Capture",
                                    "index": 1
                                }
                            ]                            
                        }
                    }
                },
                "result": "OK",
                "status": "COMPLETE",
                "type":"nanonative"
            }
```

* _function_ errorCallback(message)
    * _object_ message
        * The parsed message that will be send back to the client

```javascript
            {
                "command": "GetAudioDevices",
                "data": {
                    "value": string // the error message
                },
                "result": "FAILED",
                "status": "COMPLETE",
                "type": string
            }
```

#### Returns

* The parsed message that will be send to the plugin
    * _object_

```javascript
            {
                "type": "nanoclient",
                "command": "GetAudioDevices",
                "params": []                
            }
```

#### Example

```javascript
    var message = NANO.NanoStream.GetAudioDevices(
        function success(message) {
            console.log("Callback: " + JSON.stringify(message));
            var devices = message.data.value.devices.audio;
            for (var i = 0; i < devices.length; i += 1) {
                console.log("Found audio device '" + devices[i].id + "' with index = " + devices[i].index);
            }
        },
        function error(message) {
            alert("Callback Error: " + JSON.stringify(message));
        }
    );
    console.log("Call: " + JSON.stringify(message));
```

[up](#getaudiodevices)

---

### GetAudioLevels

[up to summary](#nanostream_summary)

_object_ NANO.NanoStream.GetAudioLevels(_function_ successCallback, _function_ errorCallback)

#### Description

* An array object with the current audio levels (stereo) will be passed in the success callback.
* The error callback parameters is optional. If no callback should be used, pass `null`
    * e.g. _object_ NANO.NanoStream.GetAudioLevels(_function_ successCallback, _null_)
        * only with success callback
        * the `NANO.NanoStream.onError` event will be used if defined

#### Parameters

* _function_ successCallback(message)
    * The success callback method if defined
    * _object_ message
        * The parsed message that will be send back to the client

```javascript
        general:
            {
                "command": "GetAudioLevels",
                "data": {
                    "value": {
                        "levels": [
                            integer,
                            integer
                        ]
                    }
                },
                "result": "OK",
                "status": "COMPLETE",
                "type": string // defines the sender
            }
        example:
            {
                "command": "GetAudioLevels",
                "data": {
                    "value": {
                        "levels": [
                            14326,
                            13954
                        ]
                    }
                },
                "result": "OK",
                "status": "COMPLETE",
                "type":"nanonative"
            }
```

* _function_ errorCallback(message)
    * _object_ message
        * The parsed message that will be send back to the client

```javascript
            {
                "command": "GetAudioLevels",
                "data": {
                    "value": string // the error message
                },
                "result": "FAILED",
                "status": "COMPLETE",
                "type": string
            }
```

#### Returns

* The parsed message that will be send to the plugin
    * _object_

```javascript
            {
                "type": "nanoclient",
                "command": "GetAudioLevels",
                "params": []                
            }
```

#### Example

```javascript
    NANO.NanoStream.GetAudioLevels(function success(message) {
        var levels = message.data.value.levels;
        var reference = 32768.0;
        var left = Math.round(levels[0] / reference * 100) / 100;
        var right = Math.round(levels[1] / reference * 100) / 100;
        console.log("Audio level left: " + left);
        console.log("Audio level right: " + right);
    }, null);
```

[up](#getaudiolevels)

---

### GetConfig

[up to summary](#nanostream_summary)

_object_ NANO.NanoStream.GetConfig(_string_ key, _function_ successCallback, _function_ errorCallback)

#### Description

* This method gets the value from a defined key of the advanced configuration.
* NOTE: see possible advanced configuration [here](http://www.nanocosmos.de/v4/documentation/live_video_encoder_-_plugin_integration_api#advanced_configuration_using_getconfig_setconfig)
* The error callback parameters is optional. If no callback should be used, pass `null`
    * e.g. _object_ NANO.NanoStream.GetConfig(_string_ key, _function_ successCallback, _null_)
        * only with success callback
        * the `NANO.NanoStream.onError` event will be used if defined

#### Parameters
* _string_ key
    * The key of the key value pair
* _function_ successCallback(message)
    * The success callback method if defined
    * _object_ message
        * The parsed message that will be send back to the client

```javascript
        general:
            {
                "command": "GetConfig",
                "data": {
                    "value": {
                        "key": string, // the key of the key value pair
                        "value": string // the value of the key value pair
                    }                    
                },
                "result": "OK",
                "status": "COMPLETE",
                "type": string // defines the sender
            }
        example:
            {
                "command": "GetConfig",
                "data": {
                    "value": {
                        "key": "VideoMixerMode",
                        "value": "0"
                    }                    
                },
                "result": "OK",
                "status": "COMPLETE",
                "type":"nanonative"
            }
```

* _function_ errorCallback(message)
    * _object_ message
        * The parsed message that will be send back to the client

```javascript
            {
                "command": "GetConfig",
                "data": {
                    "value": string  // the error message
                },
                "result": "FAILED",
                "status": "COMPLETE",
                "type": string
            }
```

#### Returns

* The parsed message that will be send to the plugin
    * _object_

```javascript
            {
                "type": "nanoclient",
                "command": "GetConfig",
                "params": []                
            }
```

#### Example

```javascript
    var key = "VideoMixerMode";
    var message = NANO.NanoStream.GetConfig(
        key,
        function success(message) {
            console.log("Callback: " + JSON.stringify(message));
            console.log("Config pair: " + message.data.value.key + "," + message.data.value.value);
        },
        function error(message) {
            alert("Callback Error: " + JSON.stringify(message));
        }
    );
    console.log("Call: " + JSON.stringify(message));
```

[up](#getconfig)

---

### GetInputs

### GetOutputs

### GetVideoDeviceConfig

[up to summary](#nanostream_summary)

_object_ NANO.NanoStream.GetVideoDeviceConfig(_integer_ index, _function_ successCallback, _function_ errorCallback)

#### Description

* An object with all possible config parameters of the the video device by index will be passed in the success callback.
* The error callback parameters is optional. If no callback should be used, pass `null`
    * e.g. _object_ NANO.NanoStream.GetVideoDeviceConfig(_integer_ index, _function_ successCallback, _null_)
        * only with success callback
        * the `NANO.NanoStream.onError` event will be used if defined

#### Parameters

* _integer_ index
    * The index of the video device
* _function_ successCallback(message)
    * The success callback method if defined
    * _object_ message
        * The parsed message that will be send back to the client

```javascript
        general:
            {
                "command": "GetVideoDeviceConfig",
                "data": {
                    "value": {
                        "device": {
                            "id": string, // the device name
                            "index": integer, // the device index
                            "options": [ // array with options
                                { // the option object with an available resolution
                                    "colorspaces": [ // array of colorspace objects related to the resolution (available colorspaces)
                                        {
                                            "framerates": [ // array of framerates related to the specified available colorspace
                                                float, // available framerate
                                                float,
                                                ...
                                            ],
                                            "id": string, // the name of the colorspace
                                            "index": integer // the index of the colorspace
                                        },
                                        ... // more available colorspaces
                                    ],
                                    "resolution": { // the resolution object
                                        "height": integer, // the height
                                        "width": integer // the width
                                    }
                                },
                                { // the option object with an available resolution
                                    "colorspaces": [ // array of colorspace objects related to the resolution (available colorspaces)
                                        {
                                            "framerates": [ // array of framerates related to the specified available colorspace
                                                float, // available framerate
                                                float,
                                                ...
                                            ],
                                            "id": string, // the name of the colorspace
                                            "index": integer // the index of the colorspace
                                        },
                                        ... // more available colorspaces
                                    ],
                                    "resolution": { // the resolution object
                                        "height": integer, // the height
                                        "width": integer // the width
                                    }
                                },
                                ... // more objects
                            ]
                        }
                    }
                },
                "result": "OK",
                "status": "COMPLETE",
                "type": string // defines the sender
            }
        example:
            {
                "command": "GetVideoDeviceConfig",
                "data": {
                    "value": {
                        "device": {
                            "id": "Logitech HD Pro Webcam C920",
                            "index": 1,
                            "options": [
                                {
                                    "colorspaces": [
                                        {
                                            "framerates": [ 5, 7.5, 10, 15, 20, 24, 30 ],
                                            "id": "MJPG",
                                            "index": 0
                                        },
                                        {
                                            "framerates": [ 5, 7.5, 10, 15, 20, 24, 30 ],
                                            "id": "RGB24",
                                            "index": 1
                                        },
                                        {
                                            "framerates": [ 5, 7.5, 10, 15, 20, 24, 30 ],
                                            "id": "I420",
                                            "index": 2
                                        }
                                    ],
                                    "resolution": {
                                        "height": 360,
                                        "width": 640
                                    }
                                },
                                {
                                    "colorspaces": [
                                        {
                                            "framerates": [ 5, 7.5, 10, 15, 20, 24, 30 ],
                                            "id": "MJPG",
                                            "index": 0 
                                        },
                                        {
                                            "framerates": [ 5, 7.5, 10, 15, 20, 24, 30 ],
                                            "id": "RGB24",
                                            "index": 1 
                                        },
                                        {
                                            "framerates": [ 5, 7.5, 10, 15, 20, 24, 30 ],
                                            "id": "I420",
                                            "index": 2 
                                        }
                                    ],
                                    "resolution": {
                                        "height": 720,
                                        "width": 1280
                                    }
                                }
                            ]
                        }
                    }
                },
                "result": "OK",
                "status": "COMPLETE",
                "type": "nanonative"
            }
```

* _function_ errorCallback(message)
    * _object_ message
        * The parsed message that will be send back to the client

```javascript
            {
                "command": "GetVideoDeviceConfig",
                "data": {
                    "value": string  // the error message
                },
                "result": "FAILED",
                "status": "COMPLETE",
                "type": string
            }
```

#### Returns

* The parsed message that will be send to the plugin
    * _object_

```javascript
            {
                "type": "nanoclient",
                "command": "GetVideoDeviceConfig",
                "params": [
                    index
                ]                
            }
```

#### Example

```javascript
    var index = 0;
    var message = NANO.NanoStream.GetVideoDeviceConfig(
        index,
        function success(message) {
            console.log("Callback: " + JSON.stringify(message));
            var device = message.data.value.device;
            var options = message.data.value.device.options;
            for (var i = 0; i < options.length; i += 1) {
                console.log("Found options " + i + " for audio device '" + device.id + "' with index = " + device.index);
                var width = options[i].resolution.width;
                var height = options[i].resolution.height;
                console.log("Available resolution: " + width + "x" + height);
                var colorspaces = options[i].colorspaces;
                for (var j = 0; j < colorspaces.length; j += 1) {
                    var name = colorspaces[j].id;
                    var index = colorspaces[j].index;
                    console.log("Available colorspace for resolution " + width + "x" + height + ": name = " + name + ", index = " + index);
                    for (var k = 0; k < colorspaces[j].framerates.length; k += 1) {
                        console.log("Available framerate for " + width + "x" + height + ", " + name + ": " + colorspaces[j].framerates[k]);
                    }
                }
            }
        },
        function error(message) {
            alert("Callback Error: " + JSON.stringify(message));
        }
    );
    console.log("Call: " + JSON.stringify(message));
```

[up](#getvideodeviceconfig)

---

### GetVideoDevices

[up to summary](#nanostream_summary)

_object_ NANO.NanoStream.GetVideoDevices(_function_ successCallback, _function_ errorCallback)

#### Description

* An array object with all available video devices will be passed in the success callback.
* The error callback parameters is optional. If no callback should be used, pass `null`
    * e.g. _object_ NANO.NanoStream.GetVideoDevices(_function_ successCallback, _null_)
        * only with success callback
        * the `NANO.NanoStream.onError` event will be used if defined

#### Parameters

* _function_ successCallback(message)
    * The success callback method if defined
    * _object_ message
        * The parsed message that will be send back to the client

```javascript
        general:
            {
                "command": "GetVideoDevices",
                "data": {
                    "value": {
                        "devices": {
                            "video": [ // array with device objects
                                {
                                    "id": string, // the device name
                                    "index": integer // the device index
                                },
                                {
                                    "id": string,
                                    "index": integer
                                },
                                {
                                    "id": string,
                                    "index": integer
                                },
                                ...
                            ]
                        }
                    }
                },
                "result": "OK",
                "status": "COMPLETE",
                "type": string // defines the sender
            }
        example:
            {
                "command": "GetVideoDevices",
                "data": {
                    "value": {
                        "devices": {
                            "video": [
                                {
                                    "id": "Mikrofon (HD Pro Webcam C920)",
                                    "index": 0
                                },
                                {
                                    "id": "nanocosmos Live Video Capture",
                                    "index": 1
                                }
                            ]                            
                        }
                    }
                },
                "result": "OK",
                "status": "COMPLETE",
                "type":"nanonative"
            }
```

* _function_ errorCallback(message)
    * _object_ message
        * The parsed message that will be send back to the client

```javascript
            {
                "command": "GetVideoDevices",
                "data": {
                    "value": string // the error message
                },
                "result": "FAILED",
                "status": "COMPLETE",
                "type": string
            }
```

#### Returns

* The parsed message that will be send to the plugin
    * _object_

```javascript
            {
                "type": "nanoclient",
                "command": "GetVideoDevices",
                "params": []                
            }
```

#### Example

```javascript
    var message = NANO.NanoStream.GetVideoDevices(
        function success(message) {
            console.log("Callback: " + JSON.stringify(message));
            var devices = message.data.value.devices.video;
            for (var i = 0; i < devices.length; i += 1) {
                console.log("Found video device '" + devices[i].id + "' with index = " + devices[i].index);
            }
        },
        function error(message) {
            alert("Callback Error: " + JSON.stringify(message));
        }
    );
    console.log("Call: " + JSON.stringify(message));
```

[up](#getvideodevices)

---

### GetWindows

### SaveXmlProfile

[up to summary](#nanostream_summary)

_object_ NANO.NanoStream.SaveXmlProfile(_string_ path, _function_ successCallback, _function_ errorCallback)

#### Description

* This method saves an 'XML' profile to a defined path.
* The error callback parameters is optional. If no callback should be used, pass `null`
    * e.g. _object_ NANO.NanoStream.SaveXmlProfile(_string_ path, _function_ successCallback, _null_)
        * only with success callback
        * the `NANO.NanoStream.onError` event will be used if defined
    * e.g. _object_ NANO.NanoStream.SaveXmlProfile(_string_ path, _null_, _function_ errorCallback)
        * only with error callback
    * e.g. _object_ NANO.NanoStream.SaveXmlProfile(_string_ path, _null_, _null_)
        * no callback

#### Parameters
* _string_ path
    * The path to save the profile to
* _function_ successCallback(message)
    * The success callback method if defined
    * _object_ message
        * The parsed message that will be send back to the client

```javascript
        general:
            {
                "command": "SaveXmlProfile",
                "data": {
                    "value": string             
                },
                "result": "OK",
                "status": "COMPLETE",
                "type": string // defines the sender
            }
        example:
            {
                "command": "SaveXmlProfile",
                "data": {
                    "value": "noreturnvalue"          
                },
                "result": "OK",
                "status": "COMPLETE",
                "type":"nanonative"
            }
```

* _function_ errorCallback(message)
    * _object_ message
        * The parsed message that will be send back to the client

```javascript
            {
                "command": "SaveXmlProfile",
                "data": {
                    "value": string  // the error message
                },
                "result": "FAILED",
                "status": "COMPLETE",
                "type": string
            }
```

#### Returns

* The parsed message that will be send to the plugin
    * _object_

```javascript
            {
                "type": "nanoclient",
                "command": "SaveXmlProfile",
                "params": []                
            }
```

#### Example

```javascript
    var path = "C:\profile.xml";
    var message = NANO.NanoStream.SaveXmlProfile(
        path,
        function success(message) {
            console.log("Callback: " + JSON.stringify(message));
            console.log("Profile saved");
        },
        function error(message) {
            alert("Callback Error: " + JSON.stringify(message));
        }
    );
    console.log("Call: " + JSON.stringify(message));
```

[up](#savexmlprofile)

---

### SetAudioVolume

[up to summary](#nanostream_summary)

_object_ NANO.NanoStream.SetAudioVolume(_integer_ volume, _function_ successCallback, _function_ errorCallback)

#### Description

* This method sets the audio volume in a range between 0 and 100.
* The error callback parameters is optional. If no callback should be used, pass `null`
    * e.g. _object_ NANO.NanoStream.SetAudioVolume(_integer_ volume, _function_ successCallback, _null_)
        * only with success callback
        * the `NANO.NanoStream.onError` event will be used if defined
    * e.g. _object_ NANO.NanoStream.SetAudioVolume(_integer_ volume, _null_, _function_ errorCallback)
        * only with error callback
    * e.g. _object_ NANO.NanoStream.SetAudioVolume(_integer_ volume, _null_, _null_)
        * no callback

#### Parameters
* _integer_ volume
    * The volume to set in a range between 0 and 100
* _function_ successCallback(message)
    * The success callback method if defined
    * _object_ message
        * The parsed message that will be send back to the client

```javascript
        general:
            {
                "command": "SetAudioVolume",
                "data": {
                    "value": string             
                },
                "result": "OK",
                "status": "COMPLETE",
                "type": string // defines the sender
            }
        example:
            {
                "command": "SetAudioVolume",
                "data": {
                    "value": "noreturnvalue"          
                },
                "result": "OK",
                "status": "COMPLETE",
                "type":"nanonative"
            }
```

* _function_ errorCallback(message)
    * _object_ message
        * The parsed message that will be send back to the client

```javascript
            {
                "command": "SetAudioVolume",
                "data": {
                    "value": string  // the error message
                },
                "result": "FAILED",
                "status": "COMPLETE",
                "type": string
            }
```

#### Returns

* The parsed message that will be send to the plugin
    * _object_

```javascript
            {
                "type": "nanoclient",
                "command": "SetAudioVolume",
                "params": [
                    integer
                ]                
            }
```

#### Example

```javascript
    var volume = 50;
    var message = NANO.NanoStream.SetAudioVolume(
        volume,
        function success(message) {
            console.log("Callback: " + JSON.stringify(message));
            console.log("Volume set");
        },
        function error(message) {
            alert("Callback Error: " + JSON.stringify(message));
        }
    );
    console.log("Call: " + JSON.stringify(message));
```

[up](#setaudiovolume)

---

### SetConfigs

[up to summary](#nanostream_summary)

_object_ NANO.NanoStream.SetConfigs(_object_ [nanoConfigObject](#nano_config), _function_ successCallback, _function_ errorCallback)

#### Description

* This method sets multiple key value pairs for advanced configuration.

* NOTE: see possible advanced configurations [here](http://www.nanocosmos.de/v4/documentation/live_video_encoder_-_plugin_integration_api#advanced_configuration_using_getconfig_setconfig)

* NOTE: it's necesary to use the [NANO.Config](#nano_config) class to generate the needed object [nanoConfigObject](#nano_config)

* The error callback parameters is optional. If no callback should be used, pass `null`
    * e.g. _object_ NANO.NanoStream.SetConfigs(_object_ [nanoConfigObject](#nano_config), _function_ successCallback, _null_)
        * only with success callback
        * the `NANO.NanoStream.onError` event will be used if defined

#### Parameters

* _object_ [nanoConfigObject](#nano_config)
    * The object with one or multiple key value pairs
    * NOTE: see the description to the usage of this object [here](#nano_config)
* _function_ successCallback(message)
    * The success callback method if defined
    * _object_ message
        * The parsed message that will be send back to the client

```javascript
        general:
            {
                "command": "SetConfigs",
                "data": {
                    "value": string             
                },
                "result": "OK",
                "status": "COMPLETE",
                "type": string // defines the sender
            }
        example:
            {
                "command": "SetConfigs",
                "data": {
                    "value": "noreturnvalue"            
                },
                "result": "OK",
                "status": "COMPLETE",
                "type":"nanonative"
            }
```

* _function_ errorCallback(message)
    * _object_ message
        * The parsed message that will be send back to the client

```javascript
            {
                "command": "SetConfigs",
                "data": {
                    "value": string  // the error message
                },
                "result": "FAILED",
                "status": "COMPLETE",
                "type": string
            }
```

#### Returns

* The parsed message that will be send to the plugin
    * _object_

```javascript
            {
                "type": "nanoclient",
                "command": "SetConfigs",
                "params": [ object ]                
            }
```

#### Examples

* low latency configuration

```javascript
    var config = new NANO.Config();
    config.AddConfig("H264Profile", "Baseline"); // Baseline Profile supported by most devices and players
    config.AddConfig("H264IFrameDistance", "50"); // Moderate GOP length
    config.AddConfig("H264PFrameDistance", "1"); // No B-frames 
    //(optional)
    //config.AddConfig("H264VlcMode", "1"); // CAVLC entropy coding mode
    //config.AddConfig("RateControl", "1"); // Strict constant bitrate
    var nanoConfigObject = config.GetConfig(); // returns the well json parsed object we need to pass
    var message = NANO.NanoStream.SetConfigs(
        nanoConfigObject,
        function success(message) {
            console.log("Callback: " + JSON.stringify(message));
            console.log("Configuration set");
        },
        function error(message) {
            alert("Callback Error: " + JSON.stringify(message));
        }
    );
    console.log("Call: " + JSON.stringify(message));
```

[up](#setconfig)

---


### SetInputs

### SetOutputs

### SetPictureInPictureSize

[up to summary](#nanostream_summary)

_object_ NANO.NanoStream.SetPictureInPictureSize(_integer_ size, _function_ successCallback, _function_ errorCallback)

#### Description

* This method sets the picture in picture size in a range between 0 and 3.
* The error callback parameters is optional. If no callback should be used, pass `null`
    * e.g. _object_ NANO.NanoStream.SetPictureInPictureSize(_integer_ size, _function_ successCallback, _null_)
        * only with success callback
        * the `NANO.NanoStream.onError` event will be used if defined
    * e.g. _object_ NANO.NanoStream.SetPictureInPictureSize(_integer_ size, _null_, _function_ errorCallback)
        * only with error callback
    * e.g. _object_ NANO.NanoStream.SetPictureInPictureSize(_integer_ size, _null_, _null_)
        * no callback

#### Parameters
* _integer_ size
    * The picture in picture size to set in a range between 0 and 3
* _function_ successCallback(message)
    * The success callback method if defined
    * _object_ message
        * The parsed message that will be send back to the client

```javascript
        general:
            {
                "command": "SetPictureInPictureSize",
                "data": {
                    "value": string             
                },
                "result": "OK",
                "status": "COMPLETE",
                "type": string // defines the sender
            }
        example:
            {
                "command": "SetPictureInPictureSize",
                "data": {
                    "value": "noreturnvalue"          
                },
                "result": "OK",
                "status": "COMPLETE",
                "type":"nanonative"
            }
```

* _function_ errorCallback(message)
    * _object_ message
        * The parsed message that will be send back to the client

```javascript
            {
                "command": "SetPictureInPictureSize",
                "data": {
                    "value": string  // the error message
                },
                "result": "FAILED",
                "status": "COMPLETE",
                "type": string
            }
```

#### Returns

* The parsed message that will be send to the plugin
    * _object_

```javascript
            {
                "type": "nanoclient",
                "command": "SetPictureInPictureSize",
                "params": [
                    integer
                ]                
            }
```

#### Example

```javascript
    var size = 2;
    var message = NANO.NanoStream.SetPictureInPictureSize(
        size,
        function success(message) {
            console.log("Callback: " + JSON.stringify(message));
            console.log("Picture in picture size set");
        },
        function error(message) {
            alert("Callback Error: " + JSON.stringify(message));
        }
    );
    console.log("Call: " + JSON.stringify(message));
```

[up](#setpictureinpicturesize)

---

### SetVideoMixingMode

[up to summary](#nanostream_summary)

_object_ NANO.NanoStream.SetVideoMixingMode(_integer_ mode, _function_ successCallback, _function_ errorCallback)

#### Description

* This method sets the video mix mode.
* The error callback parameters is optional. If no callback should be used, pass `null`
    * e.g. _object_ NANO.NanoStream.SetVideoMixingMode(_integer_ mode, _function_ successCallback, _null_)
        * only with success callback
        * the `NANO.NanoStream.onError` event will be used if defined
    * e.g. _object_ NANO.NanoStream.SetVideoMixingMode(_integer_ mode, _null_, _function_ errorCallback)
        * only with error callback
    * e.g. _object_ NANO.NanoStream.SetVideoMixingMode(_integer_ mode, _null_, _null_)
        * no callback

#### Parameters
* _integer_ mode
    * The video mix mode to set
* _function_ successCallback(message)
    * The success callback method if defined
    * _object_ message
        * The parsed message that will be send back to the client

```javascript
        general:
            {
                "command": "SetVideoMixingMode",
                "data": {
                    "value": string             
                },
                "result": "OK",
                "status": "COMPLETE",
                "type": string // defines the sender
            }
        example:
            {
                "command": "SetVideoMixingMode",
                "data": {
                    "value": "noreturnvalue"          
                },
                "result": "OK",
                "status": "COMPLETE",
                "type":"nanonative"
            }
```

* _function_ errorCallback(message)
    * _object_ message
        * The parsed message that will be send back to the client

```javascript
            {
                "command": "SetVideoMixingMode",
                "data": {
                    "value": string  // the error message
                },
                "result": "FAILED",
                "status": "COMPLETE",
                "type": string
            }
```

#### Returns

* The parsed message that will be send to the plugin
    * _object_

```javascript
            {
                "type": "nanoclient",
                "command": "SetVideoMixingMode",
                "params": [
                    integer
                ]                
            }
```

#### Example

```javascript
    var mode = 0;
    var message = NANO.NanoStream.SetVideoMixingMode(
        mode,
        function success(message) {
            console.log("Callback: " + JSON.stringify(message));
            console.log("Video mix mode set");
        },
        function error(message) {
            alert("Callback Error: " + JSON.stringify(message));
        }
    );
    console.log("Call: " + JSON.stringify(message));
```

[up](#setvideomixingmode)

---

### SetXmlProfile

[up to summary](#nanostream_summary)

_object_ NANO.NanoStream.SetXmlProfile(_string_ path, _function_ successCallback, _function_ errorCallback)

#### Description

* This method loads an 'XML' profile from a defined path.
* The error callback parameters is optional. If no callback should be used, pass `null`
    * e.g. _object_ NANO.NanoStream.SetXmlProfile(_string_ path, _function_ successCallback, _null_)
        * only with success callback
        * the `NANO.NanoStream.onError` event will be used if defined
    * e.g. _object_ NANO.NanoStream.SetXmlProfile(_string_ path, _null_, _function_ errorCallback)
        * only with error callback
    * e.g. _object_ NANO.NanoStream.SetXmlProfile(_string_ path, _null_, _null_)
        * no callback

#### Parameters
* _string_ path
    * The path to load the profile from
* _function_ successCallback(message)
    * The success callback method if defined
    * _object_ message
        * The parsed message that will be send back to the client

```javascript
        general:
            {
                "command": "SetXmlProfile",
                "data": {
                    "value": string             
                },
                "result": "OK",
                "status": "COMPLETE",
                "type": string // defines the sender
            }
        example:
            {
                "command": "SetXmlProfile",
                "data": {
                    "value": "noreturnvalue"          
                },
                "result": "OK",
                "status": "COMPLETE",
                "type":"nanonative"
            }
```

* _function_ errorCallback(message)
    * _object_ message
        * The parsed message that will be send back to the client

```javascript
            {
                "command": "SetXmlProfile",
                "data": {
                    "value": string  // the error message
                },
                "result": "FAILED",
                "status": "COMPLETE",
                "type": string
            }
```

#### Returns

* The parsed message that will be send to the plugin
    * _object_

```javascript
            {
                "type": "nanoclient",
                "command": "SetXmlProfile",
                "params": []                
            }
```

#### Example

```javascript
    var path = "C:\profile.xml";
    var message = NANO.NanoStream.SetXmlProfile(
        path,
        function success(message) {
            console.log("Callback: " + JSON.stringify(message));
            console.log("Profile loaded");
        },
        function error(message) {
            alert("Callback Error: " + JSON.stringify(message));
        }
    );
    console.log("Call: " + JSON.stringify(message));
```

[up](#setxmlprofile)

---

### StartBroadcast

[up to summary](#nanostream_summary)

_object_ NANO.NanoStream.StartBroadcast(_function_ successCallback, _function_ errorCallback)

#### Description

* This method will start the broadcast and/or recording.
* The callback parameters are optional. If no callback should be used, pass `null`
    * e.g. _object_ NANO.NanoStream.StartBroadcast(_function_ successCallback, _null_)
        * only with success callback
        * the `NANO.NanoStream.onError` event will be used if defined
    * e.g. _object_ NANO.NanoStream.StartBroadcast(_null_, _function_ errorCallback)
        * only with error callback
    * e.g. _object_ NANO.NanoStream.StartBroadcast(_null_, _null_)
        * no callback

#### Parameters

* _function_ successCallback(message)
    * The success callback method if defined
    * _object_ message
        * The parsed message that will be send back to the client

```javascript
        general:
            {
                "command": "StartBroadcast",
                "data": {
                    "value": {
                        "framerate": float
                    }                    
                },
                "result": "OK",
                "status": "COMPLETE",
                "type": string // defines the sender
            }
        example:
            {
                "command": "StartBroadcast",
                "data": {
                    "value": {
                        "framerate": 30
                    }                    
                },
                "result": "OK",
                "status": "COMPLETE",
                "type":"nanonative"
            }
```

* _function_ errorCallback(message)
    * _object_ message
        * The parsed message that will be send back to the client

```javascript
            {
                "command": "StartBroadcast",
                "data": {
                    "value": string  // the error message
                },
                "result": "FAILED",
                "status": "COMPLETE",
                "type": string
            }
```

#### Returns

* The parsed message that will be send to the plugin
    * _object_

```javascript
            {
                "type": "nanoclient",
                "command": "StartBroadcast",
                "params": []                
            }
```

#### Example

```javascript
    var message = NANO.NanoStream.StartBroadcast(
        function success(message) {
            console.log("Callback: " + JSON.stringify(message));
            console.log("Broadcast started with framerate " + message.data.value.framerate);
        },
        function error(message) {
            alert("Callback Error: " + JSON.stringify(message));
        }
    );
    console.log("Call: " + JSON.stringify(message));
```

[up](#startbroadcast)

---

### StartPreview

[up to summary](#nanostream_summary)

_object_ NANO.NanoStream.StartPreview(_function_ successCallback, _function_ errorCallback)

#### Description

* This method will start the preview.
* The callback parameters are optional. If no callback should be used, pass `null`
    * e.g. _object_ NANO.NanoStream.StartPreview(_function_ successCallback, _null_)
        * only with success callback
        * the `NANO.NanoStream.onError` event will be used if defined
    * e.g. _object_ NANO.NanoStream.StartPreview(_null_, _function_ errorCallback)
        * only with error callback
    * e.g. _object_ NANO.NanoStream.StartPreview(_null_, _null_)
        * no callback

#### Parameters

* _function_ successCallback(message)
    * The success callback method if defined
    * _object_ message
        * The parsed message that will be send back to the client

```javascript
        general:
            {
                "command": "StartPreview",
                "data": {
                    "value": {
                        "framerate": float
                    }                    
                },
                "result": "OK",
                "status": "COMPLETE",
                "type": string // defines the sender
            }
        example:
            {
                "command": "StartPreview",
                "data": {
                    "value": {
                        "framerate": 30
                    }                    
                },
                "result": "OK",
                "status": "COMPLETE",
                "type":"nanonative"
            }
```

* _function_ errorCallback(message)
    * _object_ message
        * The parsed message that will be send back to the client

```javascript
            {
                "command": "StartPreview",
                "data": {
                    "value": string  // the error message
                },
                "result": "FAILED",
                "status": "COMPLETE",
                "type": string
            }
```

#### Returns

* The parsed message that will be send to the plugin
    * _object_

```javascript
            {
                "type": "nanoclient",
                "command": "StartPreview",
                "params": []                
            }
```

#### Example

```javascript
    var message = NANO.NanoStream.StartPreview(
        function success(message) {
            console.log("Callback: " + JSON.stringify(message));
            console.log("Preview started with framerate " + message.data.value.framerate);
        },
        function error(message) {
            alert("Callback Error: " + JSON.stringify(message));
        }
    );
    console.log("Call: " + JSON.stringify(message));
```

[up](#startpreview)

---

### StopBroadcast

[up to summary](#nanostream_summary)

_object_ NANO.NanoStream.StopBroadcast(_function_ successCallback, _function_ errorCallback)

#### Description

* This method will start the preview.
* The callback parameters are optional. If no callback should be used, pass `null`
    * e.g. _object_ NANO.NanoStream.StopBroadcast(_function_ successCallback, _null_)
        * only with success callback
        * the `NANO.NanoStream.onError` event will be used if defined
    * e.g. _object_ NANO.NanoStream.StopBroadcast(_null_, _function_ errorCallback)
        * only with error callback
    * e.g. _object_ NANO.NanoStream.StopBroadcast(_null_, _null_)
        * no callback

#### Parameters

* _function_ successCallback(message)
    * The success callback method if defined
    * _object_ message
        * The parsed message that will be send back to the client

```javascript
        general:
            {
                "command": "StopBroadcast",
                "data": {
                    "value": string           
                },
                "result": "OK",
                "status": "COMPLETE",
                "type": string // defines the sender
            }
        example:
            {
                "command": "StopBroadcast",
                "data": {
                    "value": "noreturnvalue"            
                },
                "result": "OK",
                "status": "COMPLETE",
                "type":"nanonative"
            }
```

* _function_ errorCallback(message)
    * _object_ message
        * The parsed message that will be send back to the client

```javascript
            {
                "command": "StopBroadcast",
                "data": {
                    "value": string  // the error message
                },
                "result": "FAILED",
                "status": "COMPLETE",
                "type": string
            }
```

#### Returns

* The parsed message that will be send to the plugin
    * _object_

```javascript
            {
                "type": "nanoclient",
                "command": "StopBroadcast",
                "params": []                
            }
```

#### Example

```javascript
    var message = NANO.NanoStream.StopBroadcast(
        function success(message) {
            console.log("Callback: " + JSON.stringify(message));
            console.log("Broadcast stopped");
        },
        function error(message) {
            alert("Callback Error: " + JSON.stringify(message));
        }
    );
    console.log("Call: " + JSON.stringify(message));
```

[up](#stopbroadcast)

---

### StopPreview

[up to summary](#nanostream_summary)

_object_ NANO.NanoStream.StopPreview(_function_ successCallback, _function_ errorCallback)

#### Description

* This method will start the preview.
* The callback parameters are optional. If no callback should be used, pass `null`
    * e.g. _object_ NANO.NanoStream.StopPreview(_function_ successCallback, _null_)
        * only with success callback
        * the `NANO.NanoStream.onError` event will be used if defined
    * e.g. _object_ NANO.NanoStream.StopPreview(_null_, _function_ errorCallback)
        * only with error callback
    * e.g. _object_ NANO.NanoStream.StopPreview(_null_, _null_)
        * no callback

#### Parameters

* _function_ successCallback(message)
    * The success callback method if defined
    * _object_ message
        * The parsed message that will be send back to the client

```javascript
        general:
            {
                "command": "StopPreview",
                "data": {
                    "value": string            
                },
                "result": "OK",
                "status": "COMPLETE",
                "type": string // defines the sender
            }
        example:
            {
                "command": "StopPreview",
                "data": {
                    "value": "noreturnvalue"
                },
                "result": "OK",
                "status": "COMPLETE",
                "type":"nanonative"
            }
```

* _function_ errorCallback(message)
    * _object_ message
        * The parsed message that will be send back to the client

```javascript
            {
                "command": "StopPreview",
                "data": {
                    "value": string  // the error message
                },
                "result": "FAILED",
                "status": "COMPLETE",
                "type": string
            }
```

#### Returns

* The parsed message that will be send to the plugin
    * _object_

```javascript
            {
                "type": "nanoclient",
                "command": "StopPreview",
                "params": []                
            }
```

#### Example

```javascript
    var message = NANO.NanoStream.StopPreview(
        function success(message) {
            console.log("Callback: " + JSON.stringify(message));
            console.log("Preview stopped");
        },
        function error(message) {
            alert("Callback Error: " + JSON.stringify(message));
        }
    );
    console.log("Call: " + JSON.stringify(message));
```

[up](#stoppreview)

---

### Init

[up to summary](#nanostream_summary)

_object_ NANO.NanoStream.Init(_string_ elementId, _string_ license, _function_ successCallback, _function_ errorCallback)

#### Description

* This method embeds the plugin into an container element (div) and initilize the plugin.
* Call this method after `NANO.NanoStream.DetectBrowser()` and before any other API call.

#### Parameters
* _string_ elementId
    * The id of the div element where to embed the plugin into
* _string_ license
    * The license string
* _function_ successCallback(message)
    * The success callback method if defined
    * _object_ message
        * The parsed message that will be send back to the client

```javascript
        general:
            {
                "command": "Init",
                "data": {
                    "value": string             
                },
                "result": "OK",
                "status": "COMPLETE",
                "type": string // defines the sender
            }
        example:
            {
                "command": "Init",
                "data": {
                    "value": "noreturnvalue"          
                },
                "result": "OK",
                "status": "COMPLETE",
                "type":"nanonative"
            }
```

* _function_ errorCallback(message)
    * _object_ message
        * The parsed message that will be send back to the client

```javascript
            {
                "command": "Init",
                "data": {
                    "value": {
                        "code": integer, // the error code
                        "error": string // the error message
                    }
                },
                "result": "FAILED",
                "status": "COMPLETE",
                "type": string
            }
```

#### Returns

* The parsed message that will be send to the plugin
    * _object_

```javascript
            {
                "type": "nanoclient",
                "command": "Init",
                "params": [
                    string,
                    string
                ]
            }
```

#### Example (with all possible errors)

```javascript
    var elementId = "video-container"; // an existing div element with this id
    var license = "nlic::..."; // an valid nanostream license string
    var message = NANO.NanoStream.Init(
        elementId,
        license,
        function success(message) {
            console.log("Callback: " + JSON.stringify(message));
            console.log("NanoStream plugin successfully embedded and ready!");
        },
        function error(message) {
            if (message.type === "nanoextensioncheck") { // only chrome
                if (message.data.value.code === 0) { // extension not installed or unavailable
                    // DO STUFF
                    var result = confirm("You using chrome browser, but don't have installed your extension!\r\nDo you want to install it now?");
                    if (result) {
                        NANO.NanoStream.InstallExtensionInline();
                    }
                } else if (message.data.value.code === 1) { // extension installation finished (not really an error, but passed within the handler)
                    // DO STUFF
                    console.log("Extension now installed");
                }
            } else if (message.type === "nanoversioncheck") { // only chrome
                if (message.data.value.code === 0) { // native version outdated
                    alert(message.data.value.error);
                } else if (message.data.value.code === 1) { // extension version outdated
                    alert(message.data.value.error);
                } else if (message.data.value.code === 2) { // lib version outdated
                    alert(message.data.value.error);
                }
            } else {
                if (message.data.value.code === 100) { // error initialization
                    alert(message.data.value.error);
                } else if (message.data.value.code === 101) { // error setting license
                    alert(message.data.value.error);
                } else if (message.data.value.code === 102) { // error connecting to the native plugin (only chrome)
                    alert(message.data.value.error);
                } else if (message.data.value.code === 103) { // error connecting to the extension (only chrome)
                    alert(message.data.value.error);
                } else if (message.data.value.code === 104) { // error passing parameters / wrong parameters
                    alert(message.data.value.error);
                } else { // error embedding plugin
                    if (message.data.value.code === 0) { // plugin found but no version
                        alert(message.data.value.error);
                    } else if (message.data.value.code === -1) { // general no plugins available (unsupported browser) 
                        alert(message.data.value.error);
                    } else if (message.data.value.code === -2) { // plugin not found / not installed / not activated
                        alert(message.data.value.error);
                    } else {
                        alert("Unknown Error Init: code = " + message.data.value.code + ", error = '" + message.data.value.error + "'");
                    }
                }
            }
        }
    );
    console.log("Call: " + JSON.stringify(message));
```

[up](#init)

---

## Helper Methods (sync)

### DetectBrowser

### FireEvent

### InstallExtensionInline

### InstallExtensionWebstore

## Events

### onError

### onNotifyEvent

### onStopEvent

### onSupported

### onUnsupported

# NANO Config




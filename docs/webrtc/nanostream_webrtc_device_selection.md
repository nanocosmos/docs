---
id: nanostream_webrtc_device_selection
title: Device Selection
sidebar_label: Device Selection
---

The Webcaster API gives you the possibility to present all currently attached audio and video devices to your users.
The API call to requrest the device list is [getDevices()](./nanostream_webrtc_api/#getdevices).<br>
You will receive the list of devices in the [ReceivedDeviceList](../nanostream_webrtc_api/#RtcUser+event_ReceivedDeviceList) event. After that you can populate this list to the user, so he can choose which devices he wants to be used for the Webcast.

## Example: Display audio and video devices

```js
// create an instance of the API
var user = new window.nanowebrtc.user();

user.on('ReceivedDeviceList', function(event) {

  // devices are received in event.data.devices
  var audioDevices = event.data.devices.audiodevices;
  var videoDevices = event.data.devices.videodevices;

  var todo

});

user.getDevices(); // request device list, will fire 'ReceivedDeviceList' for the user
```
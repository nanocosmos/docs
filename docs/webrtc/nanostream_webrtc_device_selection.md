---
id: nanostream_webrtc_device_selection
title: Device Selection
sidebar_label: Device Selection
---

The Webcaster API gives you the possibility to present all currently attached audio and video devices to your users.
The API call to requrest the device list is [getDevices()](../webrtc/nanostream_webrtc_api#rtcusergetdevices).<br>
You will receive the list of devices in the [ReceivedDeviceList](nanostream_webrtc_api#rtcuserRtcUser+event_ReceivedDeviceList) event. After that you can show this list to the user, so he can choose which devices he wants to be used for the Webcast.

## Preparation

We will need two `<select>` tags in our HTML document, in order to display the attached audio & video devices in your HTML document. Also we will add a button to trigger the [startPreview(previewConfig)](webrtc/nanostream_webrtc_api.md#rtcuserstartpreviewconfig) call after we made our device selection in the UI and a video element to show the preview in.

```js
// in your html body
<video id="video-preview" autoplay playsinline muted></video>

<select id="audio-device-list"></select>
<select id="video-device-list"></select>

<button id="start-preview-button" type="button">start preview</button>
```

Also we will create a Javascript function that populates above device selection lists later on.

```js
// adds options to a select element
var createSelectOptions = function (elementId, devices) {

  var selectOptions = document.getElementById(elementId).options;

  // Add all devices by id and index
  for (var device of devices) {
    selectOptions[selectOptions.length] = new Option(device.id, device.index);
  }

};
```

## Request and render devices

Next we will create an instance of the Webcaster API and request attached devices with the [getDevices()](webrtc/nanostream_webrtc_api.md#rtcusergetdevices) call.

```js
// create an instance of the API
var user = new window.nanowebrtc.user();

user.on('ReceivedDeviceList', function(event) {

  // device lists are arrays, received in event.data.devices
  var audioDevices = event.data.devices.audiodevices;
  var videoDevices = event.data.devices.videodevices;

  createSelectOptions('audio-device-list', audioDevices);
  createSelectOptions('video-device-list', videoDevices);

});

// request device list, will fire 'ReceivedDeviceList' event
user.getDevices();
```

## Start the preview

Once a user has selected audio and video devices from the lists, the preview can be started.

```js
// we will trigger the preview once the 'start-preview-button' has been clicked.
document.getElementById('start-preview-button').addEventListener('click', function() {

  // get the index of the selected audio device
  var audioDeviceList = document.getElementById('audio-device-list');
  var audioDeviceIndex = audioDeviceList.options[audioDeviceList.selectedIndex].value;

  // get the index of the selected video device
  var videoDeviceList = document.getElementById('video-device-list');
  var videoDeviceIndex = videoDeviceList.options[videoDeviceList.selectedIndex].value;

  var previewConfig = {
      audioDeviceConfig: {device: audioDeviceIndex},
      videoDeviceConfig: {device: videoDeviceIndex},
      elementId: 'video-preview'
  };

  user.startPreview(previewConfig);

});
```

---
id: faq_WebRTC_devices
title: Devices
sidebar_label: Devices
---

<details><summary><strong>I do not see a preview of my camera. What can this be?</strong></summary>

This can have multiple reasons. First be sure to listen to the proper events for device handling - please listen to the event `StartPreviewError` to see why the camera/preview is not working correctly.

</details>

<details><summary><strong>I am trying to preview my camera but I get an error message. What can this be?</strong></summary>

![error2browser](/img/faq/error2browser.png)

1. There is no camera connected.
2. Camera is being used by another browser.

</details>

<details><summary><strong>I want to toggle my video device. How can I achieve this?</strong></summary>

You can not switch cameras/devices while a broadcast is active. Please stop the broadcast, switch camera/device and then start the broadcast again. Unfortunately we do not have an example for device toggling, you receive a list of available devices in the `ReceivedDeviceList` event. Please also add at least logs to the error handlers so you can see if something goes wrong:

```javascript
user.on("StartPreviewError", function(evt) {
  // handle error
console.log((event.data.text);
});
```

```javascript
user.on("StartBroadcastError", function(evt){
// handle error
console.log((event.data.text);
});
```

</details>


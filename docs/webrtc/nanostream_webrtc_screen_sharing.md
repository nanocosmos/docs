---
id: nanostream_webrtc_screen_sharing
title: Screen Sharing
sidebar_label: Screen Sharing
---

The `nanoStream Webcaster` supports screen sharing.

Instead of a web camera you can use a screen or a window as a live video source, depending on the browser used.

## Supported Browsers

Screen sharing is currently available for desktop browsers:

  * Google Chrome
  * Firefox
  * Safari


## Screen sharing with Google Chrome

Chrome on Desktop since version 72 supports screen sharing without any further installation.

For former versions, a certified browser extension was required due to Google security policy.
You will find the nanoStream branded screen capture extension [here](https://chrome.google.com/webstore/detail/nanostream-screen-capture/jfjljfmoopheadghnkjbonkmgbkjhjdo).

## How to enable screen sharing in the API

Please refer to the [Broadcast Sample](./nanostream_webrtc_getting_started#minimal-broadcast-sample) section, in order to see how to start preview and start streaming.

To enable screen sharing there are 2 things to change in the `videoDeviceConfig` property of the [startPreview()](./nanostream_webrtc_api#startpreviewconfig) call:

1) set source to "screen"
2) select the last device in the video devices list returned by the "ReceivedDeviceList" event

### Sample

```javascript
<script type="text/javascript">
    ...
    ...
    // devices have been gathered
    user.on("ReceivedDeviceList", function(event) {
    
      // available devices will be listed in "event.data":
      var audioDevices = event.data.devices.audiodevices;
      var videoDevices = event.data.devices.videodevices;
    
      // SELECT A/V DEVICES TO PREVIEW 
      // select a device by index from audioDevices/videoDevices,
      // for simplicity of this sample we select the first device
      // for audio and video (index = 0) in the next step.
      // you might need to change this for multiple cams/mics 
 
      // here we configure the screen share device,
      // it is always the last device in the videoDevices list
      var videoDeviceConfig = {
        source: 'screen',
        device: videoDevices.length -1 
      };
          
      // we choose the first audio device:
      var audioDeviceConfig = {
        device: 0 // first microphone
      };
    
      // we start the preview in this html <video> element:
      var videoElement = "video-local"; 
      
      var config = {
        videoDeviceConfig: videoDeviceConfig,
        audioDeviceConfig: audioDeviceConfig,
        elementId: videoElement
      };

      // start camera preview
      user.startPreview(config);
    };
    ...
    ...
</script>
```
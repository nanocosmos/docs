Copied from : [https://www.nanocosmos.de/wiki/nanostream-sdk-for-ios-developer-quickstart/][8ffbac7a]

# NANOSTREAM SDK FOR IOS – DEVELOPER QUICKSTART

(c) 2017-2018 nanocosmos gmbh, http://www.nanocosmos.de

## Purpose
This documentation is about the [nanoStream Live Video Streaming][870448de] SDK for iOS and can be used by software developers to integrate nanoStream Live Video Encoding into custom apps.
## Requirements
* Apple Mac with MacOS 10.9 or higher with XCode 6 or higher
* Apple iPhone with iOS 7 or later (min. iOS 8.1 recommended)

## Check library version
```objc
int version = [nanostreamAVC getVersion];
if(version!=NANOSTREAM_AVC_VERSION)
{
  // Handle header and library version mismatch
}

nanostreamAVCSettings *nAVCSettings = [[nanostreamAVCSettings alloc] init];

// set the rtmp url, you want to stream to
[nAVCSettings setUrl: @"rtmp://localhost/live"];
[nAVCSettings setStreamId: @"myStream"];

// set the video settings
[nAVCSettings setVideoResolution: Resolution640x480];
[nAVCSettings setVideoBitrate: 512];
[nAVCSettings setKeyFramerate: 60];
[nAVCSettings setOrientation: AVCaptureVideoOrientationLandscapeRight];
[nAVCSettings setCropMode: NoCrop];
[nAVCSettings setFramerate: 30];
[nAVCSettings setH264Level: Baseline30];

// set the audio settings
[nAVCSettings setInitialVolume: 1.0];
[nAVCSettings setAudioMonoStereo: Stereo];
[nAVCSettings setAudioSamplerate: 44100.0f];
```
## Initialize the nanoStream module
```objc
// nAVC and previewView are properties of the controller class in this example
self.nAVC = [[nanostreamAVC alloc] initWithSettings: nAVCSettings
                                          uiPreview: self.previewView
                                      errorListener: self];

// set the license key (required for streaming)
[self.nanostream setLicense: @"nlic:1.2:LiveEnc:1.1:LvApp=1.....288"];
```
## Start a stream
```objc
// Start broadcast asynchronously with completion handler
[self.nAVC start:^(bool success)
```
[870448de]: http://www.nanocosmos.de/v4/en/products/live_video_streaming.html "nanoStream Live Video Streaming"
[8ffbac7a]: https://www.nanocosmos.de/wiki/nanostream-sdk-for-ios-developer-quickstart/ "https://www.nanocosmos.de/wiki/nanostream-sdk-for-ios-developer-quickstart/"

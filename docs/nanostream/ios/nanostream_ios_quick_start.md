---
id: nanostream_ios_quick_start
title: Developer Quickstart
sidebar_label: Developer Quickstart
---

The documentation is updated for nanoStream SDK v.4.10.0.0.

## Purpose

This documentation is about the [nanoStream Live Video Streaming](http://www.nanocosmos.de/v4/en/products/live_video_streaming.html) SDK for iOS and can be used by software developers to integrate nanoStream Live Video Encoding into custom apps.



## Requirements

* Apple Mac with MacOS 10.9 or higher with `Xcode` 6 or higher
* Apple iPhone with iOS 7 or later (min. iOS 8.1 recommended)



## Check library version

```objc
int version = [nanostreamAVC getVersion];
if (version != NANOSTREAM_AVC_VERSION) {
  // Handle header and library version mismatch
}

nanostreamAVCSettings *nAVCSettings = [[nanostreamAVCSettings alloc] init];

// Set the RTMP URL, you want to stream to
[nAVCSettings setUrl:@"rtmp://localhost/live"];
[nAVCSettings setStreamId:@"myStream"];

// Set the video settings
[nAVCSettings setVideoResolution:Resolution640x480];
[nAVCSettings setVideoBitrate:512];
[nAVCSettings setKeyFramerate:60];
[nAVCSettings setOrientation:AVCaptureVideoOrientationLandscapeRight];
[nAVCSettings setCropMode:NoCrop];
[nAVCSettings setFramerate:30];
[nAVCSettings setH264Level:Baseline30];

// Set the audio settings
[nAVCSettings setInitialVolume:1.0];
[nAVCSettings setAudioMonoStereo:Stereo];
[nAVCSettings setAudioSamplerate:44100.0f];
```


## Initialize the nanoStream module

```objc
// nAVC is a property of the controller class in this example
self.nAVC = [[nanostreamAVC alloc] initWithSettings:nAVCSettings
                                      eventListener:self];

// Set the license key (required for streaming)
[self.nAVC setLicense:@"nlic:1.2:LiveEnc:1.1:LvApp=1.....288"];

// Implement the nanostreamEventListener protocol method 
// to display a preview in the previewView
- (void)didUpdatePreviewLayer:(CALayer*)layer {

    // UI View is modified, main queue required
    dispatch_async(dispatch_get_main_queue(), ^{
        if (self.previewView.layer.sublayers.count > 0) {
            self.previewView.layer.sublayers = nil;
        }
        layer.bounds = CGRectZero;
        [layer setFrame:self.previewView.bounds];
        [(AVCaptureVideoPreviewLayer*)layer setVideoGravity:AVLayerVideoGravityResizeAspectFill];
        [self.previewView.layer addSublayer:layer];
    });
}
```


## Start a stream

```objc
// Start broadcast asynchronously with completion handler
[self.nAVC start: ^(NSXError error) {
    dispatch_async(dispatch_get_main_queue(), ^{
        if (error == NSXErrorNone) {
            // Handle succesful stream start
        } else {
            // Handle failure
        }
    });
}];
```
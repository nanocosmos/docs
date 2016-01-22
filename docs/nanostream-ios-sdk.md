This is Markdown.
vergleiche
http://www.nanocosmos.de/v4/documentation/nanostream_sdk_for_ios_-_developer_documentation

# nanoStream SDK for iOS - Developer Manual

## Purpose

This documentation is about the nanoStream Live Video Streaming SDK for iOS and can be used by software developers to integrate nanoStream Live Video Encoding into custom apps.

## Requirements

 * Apple Mac with MacOS 10.9 with XCode 6

 * Apple iPhone with iOS 7 or later (min. iOS 8.1 recommended)


## Getting Started

### Preparation

Add the library "libnanostreamAVC.a" as dependency (Link Binary With Libraries) to your project.
Further required dependencies:

*  libc++.dylib

*  libstdc++.dylib

*  AVFoundation.framework

*  Accelerate.framework

*  CoreGraphics.framework

*  CoreMedia.framework

*  CoreVideo.framework

*  Foundation.framework

*  SystemConfiguration.framework

*  VideoToolbox.framework (link as Optional, not as Required)

*  AudioToolbox.framework

Include the header "libnanostreamAVC.h" in your source code.

### Check library version

```objc
	int version = [nanostreamAVC getVersion];
	if(version!=NANOSTREAM_AVC_VERSION)
	{
	  // Handle header and library version mismatch
	}

```

### Initialize the library

Implement the interface "nanostreamEventListener" in your class:

```objc
	@interface SampleLiveViewController : UIViewController `<nanostreamEventListener>`
	...
	@property (nonatomic, strong) nanostreamAVC *nAVC;
	@property (nonatomic, strong) IBOutlet UIView *previewView;
	...
	@end
	
	@implementation SampleLiveViewController
	...
	-(void)nanostreamEventHandlerWithType:(nanostreamEvent)type andLevel:(int)level andDescription:(NSString *)description
	{
	  switch (type) {
	    case StreamStarted:
	      break;
	    case StreamStopped:
	      break;
	    case StreamError:
	      NSLog(@"nanostreamEventHandlerWithType: StreamError: %@", description);
	      break;
	    case StreamErrorConnect:
	      NSLog(@"nanostreamEventHandlerWithType: StreamErrorConnect: %@", description);
	      break;
	    case StreamConnectionStatus:
	      NSLog(@"nanostreamEventHandlerWithType: RtmpConnectionStatus %@", description);
	        }
	      break;
	    case GeneralError:
	      break;
	    default:
	      break;
	  }
	}
	...
	@end
```


Configure the settings object for the library:

```objc
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

Then the library itself can be initialized:

```objc
	// nAVC and previewView are properties of the controller class in this example
	self.nAVC = [[nanostreamAVC alloc] initWithSettings: nAVCSettings
	                                          uiPreview: self.previewView
	                                      errorListener: self];
	                                      
	// set the license key (required for streaming)
	[self.nanostream setLicense: @"nlic:1.2:LiveEnc:1.1:LvApp=1.....288"];
```


### Start a stream

```objc
	// Start broadcast asynchronously with completion handler
	[self.nAVC start:^(bool success)
	{
	  // use main queue to change UI related things
	  dispatch_async(dispatch_get_main_queue(), ^
	  {
	    if (success)
	    {
	      // Handle succesful stream start
	      ...
	    }
	    else
	    {
	      // Handle failure
	      ...
	    }
	  }
	}
```


### Stop a running stream

If the parameter "blocking" of the stop method is set to YES, all the remaining data (to this moment) will be sent before stopping the stream.
If set to NO, the stream will stop immediately, discarding the remaining data.

```objc
	// Stop broadcast asynchronously with completion handler
	[self.nAVC stop:YES withCompletion:^
	{
	  // use main queue to change UI related things
	  dispatch_async(dispatch_get_main_queue(), ^
	  {
	    // Handle stream stop
	  }
	}
```


## Advanced Settings/Usage

### Server Authentication

In case authentication is required, the credentials can be set with the method `-(void) setAuthentication: (NSString*) user withPassword: (NSString*) password;`{objc}

The method has to be invoked before a stream is started.

For example:

```objc
	// set up nAVC object
	...
	[nAVC setAuthentication: @"MyUser" withPassword: @"MyPassword"];
	...
	// start the stream
```

### Cropping

The stream can be transformed to a different format than the input from the camera.

The following example shows how to crop the format to 16:9.

```objc
	[nAVCSettings setCropMode: CropTo16By9];

```

### Local Recording

It is possible to make a local copy of the stream, on the iOS device.
This is an extra feature and needs to be unlocked by the license - the license should contain the string "MP4=2".

```objc
	NSString *homeDirectory = [NSHomeDirectory() stringByAppendingPathComponent:@"Documents"];
	NSDateFormatter *dateFormatter=[[NSDateFormatter alloc] init];
	[dateFormatter setDateFormat:@"yyyy-MM-dd_HH-mm-ss"];
	NSString *locStr = [homeDirectory stringByAppendingPathComponent: [[dateFormatter stringFromDate:[NSDate date]] stringByAppendingString: @".mp4"]];
	
	[nAVCSettings setLocalRecordingMode:AVCRecordingModeDoubleAtLeastOneMbit];
	[nAVCSettings setLocalRecordingPath:locStr];
```


### Adaptive Bitrate

By using the Adaptive Bitrate Control (ABC) the stream will automatically adjust to changes of the bandwidth.
There are two modes available:

*  AdaptiveBitrateControlModeQualityDegrade: The video quality will be changed if the bandwidth changes. For instance, if not enough bandwidth is available, the video bitrate will be decreased, which in turn degrades the video quality.

*  AdaptiveBitrateControlModeFrameDrop: Low bandwidth is compensated by decreasing the framerate (FPS), but maintaining the video qualtiy.

Make sure to set the ABC settings before a stream is started.

```objc
	[self.nAVC setAdaptiveBitrateControlMode: AdaptiveBitrateControlModeQualityDegrade];
	    
	AdaptiveBitrateControlSettings abr;
	abr.minimumBitrate = 100000;  // 100kb
	abr.minimumFramerate = 15;
	abr.maxPercentBitrateChange = 50;  // if the bitrate drops to less than 50% of the previous bitrate, all buffered data will be discarded
	
	[self.nAVC setAdaptiveBitrateControlSettings: abr];
```


Possible properties:
 | property                | default values | range of values    | optional | 
 | --------                | -------------- | ---------------    | -------- | 
 | minimumBitrate          | 5000 (50 kb)   | 50000 - 10 000 000 | YES      | 
 | minimumFramerate        | 15 (fps)       | 5 - 60             | YES      | 
 | maxPercentBitrateChange | 50 (%)         | 0 - 100            | YES      | 

_

For more information look here http://www.nanocosmos.de/v4/documentation/live_video_encoder_-_adaptive_bitrate#abc_modes
### Measuring the available bandwidth

For measuring the available bandwidth you can use the method "runBandwidthCheck". After the check finished, the result can be used to set the bitrate for the nanostreamAVC object.

The check measures the bandwidth by running a test stream to the server.

```objc
	NSXBandwidthCheckSettings *bwSettings = [[NSXBandwidthCheckSettings alloc] init];
	// the URL settings are identical to the URL settings for the nanostreamAVCSettings
	// for testing the bandwidth it is advised to use the same server you want to stream to
	// you might want to use a stream id different from the stream id for the actual stream, to distinguish between a bandwidth check and a real stream
	bwSettings.url = @"rtmp://localhost/live";
	bwSettings.streamId = @"bwcheck";
	// the maxium bitrate that should be tested - if this value is lower than the actual bandwidth, the result will be similar to the maximum bitrate
	bwSettings.maxBitrate = 5000000;  // 5Mb
	
	[self.nAVC runBandwidthCheck: bwSettings withCompletionBlock:^(NSXBandwidthCheckResult* measuredBandwidth){
	  NSLog(@"measuredBandwidth: avg=%i, median=%i, min=%i, max=%i, runTimeMs=%i", (int)measuredBandwidth.avgBitrate, (int)measuredBandwidth.medianBitrate, (int)measuredBandwidth.minBitrate, (int)measuredBandwidth.maxBitrate, (int)measuredBandwidth.runTimeMs);
	}];
```


The default run time is 10 seconds. The run time can be changed with the property "runTime".
If the bandwidth check should be stopped before it finished on itself, the method "stopBandwidthCheck" can be used. This will force the bandwidth check to stop and return the result based on the collected information up to this point.

```objc
	[self.nAVC stopBandwidthCheck];    // stop bw check if still running
```


The result of the bandwidth check can be used as bitrate setting for library object. At the moment it is not possible to change the video bitrate after the initialization of the library object, thus the object need to be re-initialized. (This will change in future releases.)

### Snaphot from the current stream

To get a snaphot (image) of the current preview/stream, the method "grabStillImageWithCompletionBlock" can be used.

```objc
	[self.nAVC grabStillImageWithCompletionBlock:^(UIImage *image, NSError *error) {
	  // do something with the image
	}];
```


### Overlay/Watermark

It is possible to use an overlay (image, text, or both) for a stream. Notice that the CPU usage will be increased slightly when an overlay is used.
This is an extra feature and needs to be unlocked by the license - the license should contain the string "OVL=1".

The easiest way to use an overlay is to use the class "AVCFullImageOverlay":

```objc
	UIImage *overlayImg = [UIImage imageNamed:@"button"];  // uses an image from the bundle resources, named "button"
	    
	UIGraphicsBeginImageContextWithOptions(CGSizeMake(640, 480), NO, 1.0);  // assuming the video resolution is set to "Resolution640x480"
	[overlayImg drawInRect:CGRectMake(200, 200, 240, 80) blendMode:kCGBlendModeNormal alpha:0.5];
	UIFont *font = [UIFont boldSystemFontOfSize:20];
	[[UIColor whiteColor] set];
	NSString *text = @"Watermark";
	[text drawInRect:CGRectMake(200, 300, 100, 50) withFont:font];
	UIImage *finalOverlayImage = UIGraphicsGetImageFromCurrentImageContext();
	UIGraphicsEndImageContext();
	    
	[self.nAVC setOverlay: [[AVCFullImageOverlay alloc] initWithImage: finalOverlayImage]];
```


Notice that the final output resolution can be different, if an option like cropping is used.
In this case it is better to implement your own overlay class, which is shown in the following example:

```objc
	@interface NSXWatermark : NSObject `<AVCOverlay>`
	
	@property (assign) AVCOverlayRawBuffer buffer;
	
	@end
	
	@implementation NSXWatermark
	
	@synthesize imageSize;
	@synthesize overlayBoundingRect;
	
	-(AVCOverlayRawBuffer)overlayImageWithStreamTime:(NSTimeInterval)time
	{
	    if (self.buffer.buffer == NULL) {
	        UIImage *image = [NSXWatermark generateWatermarkWithSize:self.imageSize inBoundingRect:self.overlayBoundingRect];
	        self.buffer = [NSXWatermark makeBufferFromUIImage:image];
	    }
	    
	    return self.buffer;
	}
	
	+(UIImage *)generateWatermarkWithSize:(CGSize)size inBoundingRect:(CGRect)boundingRect
	{
	    UIImage *watermarkImage = ...  // use your desired UIImage here
	    CGFloat padding = 10.0;
	    CGSize overlaySize = watermarkImage.size;
	    
	    CGFloat height = size.height / 3;
	    if (overlaySize.height > height) {
	        overlaySize.width = height;
	        overlaySize.height = height;
	    }
	    
	    CGFloat boundingMaxX = boundingRect.origin.x + boundingRect.size.width;
	    CGFloat boundingMaxY = boundingRect.origin.y + boundingRect.size.height;
	    
	    CGRect overlayRect = CGRectMake(boundingMaxX - overlaySize.width, boundingMaxY - overlaySize.height, overlaySize.width, overlaySize.height);
	    
	    //    CGRect overlayRect = CGRectMake(size.width - overlaySize.width, size.height - overlaySize.height, overlaySize.width, overlaySize.height);
	    CGRect realRect =  AVMakeRectWithAspectRatioInsideRect(watermarkImage.size, overlayRect);
	    
	    realRect.origin.y -= padding;
	    realRect.origin.x -= padding;
	    
	    UIGraphicsBeginImageContext(size);
	    [watermarkImage drawInRect:realRect];
	    
	    UIImage *overlayImage = UIGraphicsGetImageFromCurrentImageContext();
	    
	    UIGraphicsEndImageContext();
	    
	    return overlayImage;
	}
	
	+(AVCOverlayRawBuffer)makeBufferFromUIImage:(UIImage *)image
	{
	    CGImageRef rawPic = [image CGImage];
	    
	    CGDataProviderRef inProvider = CGImageGetDataProvider(rawPic);
	    CFDataRef inBitmapData = CGDataProviderCopyData(inProvider);
	    
	    size_t inBitmapDataBytesPerRow = CGImageGetBytesPerRow(rawPic);
	    
	    UInt8 *buffer = (UInt8*)CFDataGetBytePtr(inBitmapData);
	    
	    AVCOverlayRawBuffer rawBuf;
	    rawBuf.buffer = buffer;
	    rawBuf.bytesPerRow = (int)inBitmapDataBytesPerRow;
	    rawBuf.bufferType = AVCOverlayBufferTypeBGRA;
	    return rawBuf;
	}
	@end
```


## Possible Issues

### General

For older versions of the sdk, without support for arm64, architecture in Xcode has to be set to armv7 and/or armv7s. This works also for newer iOS-Devcies like iPhone 5s.
This is not required for newer sdk versions, which also support arm64.

### Compiler/Linker

#### libstdc++

If there are linker errors with "std::": "symbol(s) not found for architecture", make sure that you added the libraries "libstdc++.dylib" and "libc++.dylib" to your project.

Due to a bug in Xcode, depending on the selected Base SDK and deployment target, there might be still linker errors regarding "std". In this case you need to add a specific version of the libstdc++ to your project, e.g.: libstdc++-6.0.9.dylib instead of libstdc++.dylib

#### Undefined Symbols for Parrot & DJI

Since version 3.3.x it might be possible that there are linker errors for the classes

*  ParrotBebopCaptureSession or

*  DJIPhantom2CaptureSession

Generally, if the Parrot & DJI extensions are not used, the symbols should be stripped automatically by Xcode and you do not need to link the frameworks. 
However this is not the case when the linker flag "-ObjC" is used in the app project. This causes the linker to load all symbols included in all linked object files (including the Parrot & DJI symbols). This prevents the automatic stripping. 

To use our library without Parrot & DJI, either remove the "-ObjC" linker flag from the project or replace the "-ObjC" linker flag with the "-force_load" flag for each library that you want to use. Do not use "-force_load" with libnanostreamAVC.a. 
For examples see http://stackoverflow.com/questions/11254269/using-the-force-load-linker-flag-with-restkit-ios

### Crashes

#### CALayerGetDelegate / CALayerGetSuperlayer / Other CALayer

If there are crashes occurring in your app that include above symbols in the stack trace and are otherwise not obvious, check to see if you added a subviews to the preview view. The UIView instance that is passed to 

```objc
	-[RtmpSourceCaptureSession initWithPreview:andStatusListener:andLogLevel:]
```


and 

`-[nanostreamAVC initWithSettings:uiPreview:errorListener:]` 

cannot contain any subviews (UIButtons or otherwise).

## Logging Information

If you encounter a problem with the nanostreamAVC library and you want to report the problem, log files will help us to comprehend the problem.

Please use the following steps to create the log files:

*  enable logging for the library with the method "SetLogLevel", use LogLevelVerbose:

```objc
	    [self.nAVC SetLogLevel: LogLevelVerbose];  // set the log level before the method "start" is invoked
```


*  try to reproduce the problem

*  download the app container (for your app) from the iOS device with Xcode, as explained here: https://developer.apple.com/library/ios/recipes/xcode_help-devices_organizer/articles/manage_containers.html

*  in Finder right click on the downloaded container and select "Show Package Contents"

*  send us the logfiles located (in the container) in the folder "/AppData/Library/Caches/Logs/"


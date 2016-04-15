# Tutorial / Getting started with nanoStream and bintu.live

# Overview

In this guide you will learn how to to build a live video broadcaster app with nanoStream that streams to our bintu.live streaming platform. Learn how to create the connection to bintu and obtain streaming configuration for your client. Setup the nanoStream client SDK to use the configuration we just got and broadcast your own live stream in minutes!

You will learn how to build simple broadcaster and player app from the ground of with XCode for iOS, that can play the stream from our broadcaster app.

# Prerequisites

- nanoStream 4.6 or later, including the bintu.live streaming platform connection
- a valid Bintu APIKey
- a nanoStreamSDK License valid for iOS (broadcast and playback)
- bintu.live connector requires at least iOS 8.0

This tutorial is based on Mac OS X 10.11.3, Xcode 7.1 and iOS 9.1.

# Bintu.live platform connection

Our Bintu.live connection component consists of an entry point API client class ```BNTAPIClient``` which you use to make calls to our streaming platform. There are other class, like ```BNTStreamInfo``` and ```BNTRTMPInfo``` which mainly hold the configuration you receive from the ```BNTAPIClient```.

In general, if you want to interface with our streaming platform, you construct an instance of the ```BNTAPIClient``` with its main constructor:

    BNTAPIClient *client = [BNTAPIClient initWithAPIKey:apiKey];

Once you have an instance, you can create new streams with it, receive information about a previously created stream or list all streams that are present on your account.

Lets step through these in detail:

With the ```createStream``` call you create a new stream. You would use this in your broadcaster app. In the completion block of this method, you get an instance of ```BNTStreamInfo``` which exposes an instance of ```BNTRTMPIngest``` which holds the configuration you need to stream to bintu.live.

    [client createStreamWithCompletion:^(BNTStreamInfo *stream, NSError *err) {
        self.streamID = stream.id;
        self.streamURL = stream.ingest.rtmpInfo.url;
        self.streamName = stream.ingest.rtmpInfo.streamName;
    }];

With the```getStreamWithID``` call you can receive information about a previously created stream. In most cases, you would take the stream ID you get while creating a stream and store it on your own server somewhere. If anyone wants to view a stream, you send that ID to the player app. Then you can receive that stream's playout information.
For example, if you want to play the stream via HLS:

    [client getStreamWithID:@"<a long id>" andCompletion:^(BNTStreamInfo *stream, NSError *err) {
        BNTHLSPlayout *playout = [stream.hlsPlayouts firstObject];
        self.hlsURL = playout.url;
    }];

Last but not least, you can list all streams on your account with the ```getStreams``` call. For example, you can bypass your server, get all streams on the player and let the user select the one they want to see. Or you just play the first one that is live, like shown below:

    [client getStreamsWithCompletion:^(NSArray *streams, NSError *err) {
        for (BNTStreamInfo *stream in streams) {
            if (stream.state == BNTStreamStateLive) {
                // play stream!
            }
        }
    }];

That was a basic overview of your bintu.live component. Now we show you how to build an end-to-end system with that.

# Live Video Encoder (broadcast) app

## Setup

Create a new Xcode project with the template "Single View Application".

Enter your desired application name and organisation identifier. For this tutorial, our app is called "StreamingExample", but you can name it anything you like. These settings do not matter right now. For this tutorial we will not create Unit or UI tests, so you can disable them for now. This guide will be in Objective-C.

Save the project somewhere on your computer.

Our app will be in portrait only. Therefore on the "General" tab of your application target in Xcode, under "Deployment Info" -> "Device Orientation", uncheck all except for "Portrait". It should look like this:

## Broadcast View

To create our broadcast view, go into the ```Main.storyboard``` file Xcode should have generated for you. It should be pretty empty right now.

Change the background color to any color (except white) you like so we can better see where it is.

This will be the view which will hold the camera preview so the user can see what is being streamed right now. We want this to cover our whole screen so we will make some adjustments to the autolayout constraints. We create four new constraints from our view to every edge of the screen. The distance should be zero for all, and margins should not be used for this.

Now the autolayout engine should tell us with some yellow warnings that our current view state does not reflect our constraints.

We will then click on the little yellow arrow next to "View Controller Scene" which will show us what is going wrong with the constraints.

After clicking on the little yellow triangle, Xcode shows us some recommended fixes for the problems. We choose "Update Frames" and click "Fix Misplacement". This will instruct Xcode to use our constraints as guidelines and update the view accordingly, therefore expanding our preview view to cover the screen. Your storyboard should now look something like this:

Next we will add the button that will start and stop our stream. Add a new button to our main view, give it the title "Start" and give it a text color which we can see on top of our camera view.

The place looks a little bit off, so we will add some constraints which fix it to the bottom of the screen. Select the button and add a constraint with zero distance to the bottom margin of the screen.

Also add a constraint which horizontally centers the button.

After that, we will again use "Update Frames" and "Fix Misplacement" to make our view conform to our constraints.

## Connection to ViewController

Next, enter Automatic Mode and create outlets for the broadcast button and the preview to our ViewController. Do this via holding down Ctrl and dragging from the button/view to the interface section of the ```ViewController.m``` file.

Create an action for the button by dragging from the button to the implementation part of the viewcontroller code.

Now we have created our view. We can now move on to importing our modules.

## Importing the SDKs

You need the following files: ```Bintu.framework```, ```libnanostreamAVC.a``` and ```nanostreamAVC.h```. Drag all files into your project in the Navigator on the left side. Check "Copy items if needed" for all of them.

Your project should now look something like this. The framework and library file should be automatically entered into the section "Linked frameworks and libraries".

Remove the entry for ```Bintu.framework``` from that section (it will get readded later). Drag the ```Bintu.framework``` file from the Navigator to the section "Embedded Binaries". This should add it to the "Linked Frameworks and Libraries" again.

If you build and run this project now on your iPhone, you should see the preview view with our colored background and the broadcast button. If you see a linker error that probably means you did not import the libraries correctly, try to do it again.

## Setting up nanoStream SDK

nanoStream SDK has some dependencies which you need to include, otherwise it will not compile correctly. Go to the "Linked Frameworks and Libraries" section of your target and add following libraries (by clicking the plus sign):

- CoreVideo.framework
- libc++ (.tbd or .dylib)
- libstdc++.6.0.9 (.tbd or .dylib)
- AVFoundation.framework
- CoreMedia.framework
- libz (.tbd or .dylib)
- UIKit.framework
- Foundation.framework
- CoreGraphics.framework
- SystemConfiguration.framework
- Accelerate.framework
- VideoToolbox.framework (link as Optional, not as Required)
- AudioToolbox.framework

The section should now look like this:

Now enter your ```ViewController.m``` file. At this point, it looks something like this (your property names may vary):

```
//
//  ViewController.m
//  StreamingExample
//
//  Created by nanocosmos on 18.02.16.
//  Copyright © 2016 exampleorganisation. All rights reserved.
//

#import "ViewController.h"

@interface ViewController ()
@property (weak, nonatomic) IBOutlet UIButton *broadcastButton;
@property (weak, nonatomic) IBOutlet UIView *preview;

@end

@implementation ViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view, typically from a nib.
}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

- (IBAction)toggleStreaming:(id)sender {
}
@end
```

Below ```#import ViewController.h```, import the nanostreamSDK header like this:

    #import "nanostreamAVC.h"

Below ```@property (weak, nonatomic) IBOutlet UIView *preview;``` add a property which will hold our SDK instance to the interface section.

```
@property (strong) nanostreamAVC *streamer;
```

After the ```viewDidLoad``` method, add the following lines (replace the license string with the real license):

```
- (void)viewDidAppear:(BOOL)animated
{
    // create default settings for nanostream SDK
    nanostreamAVCSettings *settings = [[nanostreamAVCSettings alloc] init];

    // set our stream to portrait orientation, same as our interface
    settings.orientation = AVCaptureVideoOrientationPortrait;

    // create our nanoStream SDK instance and create the preview (by passing our preview view into it)
    self.streamer = [[nanostreamAVC alloc] initWithSettings:settings uiPreview:self.preview errorListener:nil];

    [self.streamer setLicense:@"<your license here>"];
}
```

If you build and run this on your device, the app should start and ask for camera and microphone permissions.

After you accept, it should look something like this, with the preview running and the broadcast button at the bottom:

## Setting up the bintu.live connection

We will now create the connection to bintu so we can get our streaming configuration.
Add the following import after ```#import "nanostreamAVC.h"```:

```
#import <Bintu/Bintu.h>
```

Below ```@property (strong) nanostreamAVC *streamer;```, add these three properties:

```
@property (strong) NSString *streamURL;
@property (strong) NSString *streamName;

@property (strong) BNTAPIClient *client;
```

Now, add these lines to the ```viewDidAppear:``` method (replace the apikey string with your API key):

```
// create bintu api client with apikey
self.client = [[BNTAPIClient alloc] initWithAPIKey:@"<your apikey here>"];
```

You can now create a stream without any effort. To do this, fill out the ```toggleStreaming:``` method:

```
- (IBAction)toggleStreaming:(id)sender {
    [self.client createStreamWithCompletion:^(BNTStreamInfo *stream, NSError *err) {
        if (err) {
            NSLog(@"There was an error while creating the stream: %@", err);
            return;
        }
        self.streamURL = stream.ingest.rtmpInfo.url;
        self.streamName = stream.ingest.rtmpInfo.streamName;

        NSLog(@"We created a stream! StreamURL: %@, StreamName: %@", self.streamURL, self.streamName);
    }];
}
```
This code will create a stream via the Bintu API and return the info we need.

If you run your app and tap the broadcast button, after a short while you should see something logged to the console. Either there was an error or you will get a stream.
If this first test was successful, we can continue. If there was an error logged, please check your API key and your account. The error message should tell you something about the error. If not, contact us.

## Putting it together

If the test was successful, we can now really start streaming with the configuration we got. We need to give the configuration to our nanoStream SDK and start the stream. This is done via following code which we add at the end of the completion block of our ```createStream``` call:

```
// set the configuration we just received
[self.streamer setURL:self.streamURL streamID:self.streamName];

// start the stream!
[self.streamer start:^(NSXError error) {
    if (error != NSXErrorNone) {
        NSLog(@"There was an error starting the stream. %ld", (long)error);
        return;
    }

    // this callback is called asynchronously on a background thread/queue.
    // UI updates should happen on the main queue, therefore switch to it
    dispatch_async(dispatch_get_main_queue(), ^{

        // change the button title so we know we are streaming
        [self.broadcastButton setTitle:@"Stop" forState:UIControlStateNormal];
    });

}];
```

Now you should be able to tap the broadcast button and stream using nanoStream SDK. If the button changes its title to "Stop", everything is great. If not, check the console and your code.

Of course we also want to stop the stream once we started it. You can check if a stream is running with the ```-active``` method on our nanostream SDK. Stopping a stream is done via the ```-stop:withCompletion:``` method. The first parameter ("blocking") tells the SDK if you want to wait for all remaining stream packets (set to ```true```) to be sent or if you want the stream to end right now (set to ```false```).

You can now wrap the contents of the ```-toggleStreaming:``` method with this check:

```
if ([self.streamer active]) {
    // stream is currently running. we want to stop it here.

    [self.streamer stop:false withCompletion:^{
        // stream was stopped

        // update button on main queue again:
        dispatch_async(dispatch_get_main_queue(), ^{
            [self.broadcastButton setTitle:@"Start" forState:UIControlStateNormal];
        });

    }];
} else {
    // stream is not running, we want to create a new one and start it

    // our previous code

}
```

We are finished with the broadcaster! Altogether, our ```-toggleStreaming:``` looks like this:

```
- (IBAction)toggleStreaming:(id)sender {

    if ([self.streamer active]) {
        // stream is currently running. we want to stop it here.

        [self.streamer stop:false withCompletion:^{
            // stream was stopped

            // update button on main queue again:
            dispatch_async(dispatch_get_main_queue(), ^{
                [self.broadcastButton setTitle:@"Start" forState:UIControlStateNormal];
            });

        }];
    } else {
        // stream is not running, we want to create a new one and start it


        [self.client createStreamWithCompletion:^(BNTStreamInfo *stream, NSError *err) {
            if (err) {
                NSLog(@"There was an error while creating the stream: %@", err);
                return;
            }
            self.streamURL = stream.ingest.rtmpInfo.url;
            self.streamName = stream.ingest.rtmpInfo.streamName;

            NSLog(@"We created a stream! StreamURL: %@, StreamName: %@", self.streamURL, self.streamName);

            // set the configuration we just received
            [self.streamer setURL:self.streamURL streamID:self.streamName];

            // start the stream!
            [self.streamer start:^(NSXError error) {
                if (error != NSXErrorNone) {
                    NSLog(@"There was an error starting the stream. %ld", (long)error);
                    return;
                }

                // this callback is called asynchronously on a background thread/queue.
                // UI updates should happen on the main queue, therefore switch to it
                dispatch_async(dispatch_get_main_queue(), ^{

                    // change the button title so we know we are streaming
                    [self.broadcastButton setTitle:@"Stop" forState:UIControlStateNormal];
                });

            }];
        }];

    }

}
```

You can find the complete broadcaster sample project in the SDK-folder, at ```samples/SimpleEncoder```. That sample also includes additional error handling and error surfacing, which has been omitted from this guide for brevity.

# Playing App

## Setup

Again, create a new Xcode project with the template "Single View Application".

We will name this app "PlayingExample". Again, disable Unit Tests and UI Tests.

Save the project somewhere on your computer where you can find it later.

To correspond with our broadcaster streaming in portrait orientation, the player will also be in portrait mode only. Therefore on the "General" tab of your application target in Xcode, under "Deployment Info" -> "Device Orientation", uncheck all except for "Portrait". It should look like this:

## Playing View

To create our playing view, go into the ```Main.storyboard``` file.

The UI will be a lot like our broadcaster app, so we just repeat all the steps. But instead of creating a "Start" button for our stream, we create a button with the title "Play" which will play back our stream. The other steps are identical. If you have trouble, please see the section [Broadcast View](#broadcast-view) in the broadcaster part.  The result should look something like this:

## Connection to ViewController

Just like in the broadcaster example, we create outlets for our view and our button to the ViewController. If you have trouble with these steps, please see the [section from the broadcaster part](#connection-to-viewcontroller).

We also create an action and name it ```togglePlayback```. The result looks like this:

## Importing the SDKs

Just like in our player app, we need to import the nanoStream SDK. If you have trouble with any of the following steps, please see the more [detailed guide in the broadcaster section](#importing-the-sdks).

For the player app, you need a little bit more than for the broadcaster, but not much. You need the files ```Bintu.framework```, ```libnanostreamAVC.a```, ```nanostreamAVC.h```, ```nanostreamAVCExtendedCaptureSession.h``` and ```nanostreamAVCRtmpSourceCaptureSession.h```. Drag all of them into your project in the Navigator on the left side. Here as well, check "Copy items if needed" for all of them.

Your project will probably look something like this:

Again as well, remove ```Bintu.framework``` from the "Linked Frameworks" section, because we will add it soon. Drag ```Bintu.framework``` from the left side into the "Embedded Binaries" section. Now it should be in the "Linked Frameworks" section again.

You can now build and run the project on your device. You should see the preview view and your "Play" button.

## Setting up nanoStream SDK

Again, you need to add the dependencies for nanoStream SDK. Please refer to this [guide](#setting-up-nanostream-sdk) for instructions.

Once you have your dependencies in place, your "Linked Frameworks" section should look like this:

Now we can start coding. Enter your ```ViewController.m``` file. It will look something like this:

```
//
//  ViewController.m
//  PlayingExample
//
//  Created by nanocosmos on 19.02.16.
//  Copyright © 2016 exampleorganisation. All rights reserved.
//

#import "ViewController.h"

@interface ViewController ()
@property (weak, nonatomic) IBOutlet UIView *preview;
@property (weak, nonatomic) IBOutlet UIButton *playButton;

@end

@implementation ViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view, typically from a nib.
}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}
- (IBAction)togglePlayback:(id)sender {
}

@end
```

Now we can setup our rtmp player. Below ```#import ViewController.h```, import our rtmp player header:

```
#import "nanostreamAVCRtmpSourceCaptureSession.h"
```

Add a property for the player below ```@property (weak, nonatomic) IBOutlet UIButton *playButton;```:

```
@property (strong) RtmpSourceCaptureSession *player;
```

After the ```viewDidLoad``` method, add the following lines which will create an instance of our player. Replace the license with you real license:

```
- (void)viewDidAppear:(BOOL)animated
{
    // construct an instance of the player and give it our preview
    self.player = [[RtmpSourceCaptureSession alloc] initWithPreview:self.preview andStatusListener:nil andLogLevel:LogLevelMinimal];

    // set the license
    [self.player setLicense:@"<your license here>"];
}
```

We will configure the player later.

## Setting up the connection to bintu.live

In this part we again connect to bintu.live, this time we do not want to create a new stream but we want to play an existing one. For this use case, we assume that the last stream that is currently live is our stream. The following code follows that logic. If you have multiple users using your account, this may not work correctly (it may play another user's stream).

Below ```#import "nanostreamAVCRtmpSourceCaptureSession.h"```, import the bintu.live connector:

```
#import <Bintu/Bintu.h>
```

Add these properties below ```@property (strong) RtmpSourceCaptureSession *player;```:

```
@property (strong) NSString *streamURL;
@property (strong) NSString *streamName;

@property (strong) BNTAPIClient *client;
```

These will hold an instance of our API client and contain the stream information which we will use for playback.

Add these lines to the end of the ```viewDidAppear``` method (replace ```<your apikey here>``` with your real API key.

```
// create bintu api client with apikey
self.client = [[BNTAPIClient alloc] initWithAPIKey:@"<your apikey here>"];
```

You are now ready to query your streams from bintu.live. To do this, fill out the ```togglePlayback``` method:

```
- (IBAction)togglePlayback:(id)sender {
    // get all streams from our account
    [self.client getStreamsWithCompletion:^(NSArray *streams, NSError *err) {

        // check for errors
        if (err) {
            NSLog(@"There was an error while receiving the streams: %@", err);
            return;
        }

        // the last stream in stream is the one that was created last
        // therefore we go through the array in reverse
        for (BNTStreamInfo *stream in [streams reverseObjectEnumerator]) {

            // check if this particular stream is live
            if (stream.state == BNTStreamStateLive) {

                // we found a live one! this is the one we want to play
                // get rtmp playout information from it and store them
                BNTRTMPPlayout *playout = [stream.rtmpPlayouts firstObject];
                self.streamURL = playout.rtmpInfo.url;
                self.streamName = playout.rtmpInfo.streamName;

                NSLog(@"We found a stream. StreamURL %@, StreamName %@", self.streamURL, self.streamName);

                // we found our stream, now we can exit the loop
                break;
            }
        }

        if (!self.streamName || !self.streamURL) {
            // we found no live stream. log an error
            NSLog(@"There is no stream that is currently live.");
            return;
        }
    }];
}
```

This code will get all streams from bintu. These will be in chronological order, meaning the first stream in the list is the first stream that was created. We want to find the last stream that is live, so we traverse through the streams in reverse order. The first stream that we find that is live will be the latest live stream in chronological order. We store the information we get about that stream because we need them for playback later.

If no stream can be found that is live, we log an error to the console.

If you run your app and tap the play button, after a short while you should see something logged to the console. Either there was an error or you will get a stream. If this first test was successful, we can continue. If there was an error logged, please check your API key and your account. The error message should tell you something about the error. If not, contact us.

## Play the stream already!

If the test was successful, we can now really play the stream that we found. We need to take our streamURL and streamName and put it into our nanoStream Player. The following code achieves this. Below

        if (!self.streamName || !self.streamURL) {
            // we found no live stream. log an error
            NSLog(@"There is no stream that is currently live.");
            return;
        }

add this code:


    // set our configuration
    self.player.url = self.streamURL;
    self.player.streamId = self.streamName;

    // start playback
    [self.player start];

    // this callback is called asynchronously on a background thread/queue.
    // UI updates should happen on the main queue, therefore switch to it
    dispatch_async(dispatch_get_main_queue(), ^{

        // change the button title so we know we are playing
        [self.playButton setTitle:@"Stop" forState:UIControlStateNormal];
    });

You can now run the app. If you have another device with the broadcaster app, start a stream there. Now tap the "Play" button in your app. After a while you should see that playback is starting and video should be displayed. Your "Play" button should change its title to "Stop". If this does not happen, check your console log and check the previous steps.

We may want to stop playback before the stream has ended. For this, we can use the ```-stop``` method of our ```RTMPSourceCaptureSession```. Checking if we are currently playing back a stream can be done via ```-isPlaying```.

Now wrap the contents of the ```-togglePlayback:``` method with this check:


    // check if we are playing already
    if ([self.player isPlaying]) {

        // we are already playing. we want to stop now
        [self.player stop];

        // the player will stop, we now update the button title again
        dispatch_async(dispatch_get_main_queue(), ^{
            [self.playButton setTitle:@"Play" forState:UIControlStateNormal];
        });
    } else {

        // we are not playing, we want to start playback

        // our previous code goes here
    }

We are finished with the player. Our complete ```-togglePlayback:``` should look like this:

```
- (IBAction)togglePlayback:(id)sender {

    // check if we are playing already
    if ([self.player isPlaying]) {

        // we are already playing. we want to stop now
        [self.player stop];

        // the player will stop, we now update the button title again
        dispatch_async(dispatch_get_main_queue(), ^{
            [self.playButton setTitle:@"Play" forState:UIControlStateNormal];
        });
    } else {

        // we are not playing, we want to start playback

        // get all streams from our account
        [self.client getStreamsWithCompletion:^(NSArray *streams, NSError *err) {

            // check for errors
            if (err) {
                NSLog(@"There was an error while receiving the streams: %@", err);
                return;
            }

            // the last stream in stream is the one that was created last
            // therefore we go through the array in reverse
            for (BNTStreamInfo *stream in [streams reverseObjectEnumerator]) {

                // check if this particular stream is live
                if (stream.state == BNTStreamStateLive) {

                    // we found a live one! this is the one we want to play
                    // get rtmp playout information from it and store them
                    BNTRTMPPlayout *playout = [stream.rtmpPlayouts firstObject];
                    self.streamURL = playout.rtmpInfo.url;
                    self.streamName = playout.rtmpInfo.streamName;

                    NSLog(@"We found a stream. StreamURL %@, StreamName %@", self.streamURL, self.streamName);

                    // we found our stream, now we can exit the loop
                    break;
                }
            }

            if (!self.streamName || !self.streamURL) {
                // we found no live stream. log an error
                NSLog(@"There is no stream that is currently live.");
                return;
            }

            // set our configuration
            self.player.url = self.streamURL;
            self.player.streamId = self.streamName;

            // start playback
            [self.player start];

            // this callback is called asynchronously on a background thread/queue.
            // UI updates should happen on the main queue, therefore switch to it
            dispatch_async(dispatch_get_main_queue(), ^{

                // change the button title so we know we are playing
                [self.playButton setTitle:@"Stop" forState:UIControlStateNormal];
            });
        }];
    }
}
```

You can find the complete player sample project in the SDK-folder, at ```samples/SimplePlayer```. That sample also includes additional error handling and error surfacing, which has been omitted from this guide for brevity.

# End-To-End Goodness

You can now use both apps together if you have two devices to test on. Load the broadcaster app on one device and the player app on another one.

Start a stream in the broadcaster app. It should look something like this:

Now start the player app on the other device and press "Play". It should find your stream from the other device and start playing it. Please allow a little time for the playback to begin. It should then look something like this:

Congratulations! You now have built your own live streaming app, end-to-end with nanoStream and bintu.live!

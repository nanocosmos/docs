---
id: bintu_ios_sdk
title: bintu.live client SDK
sidebar_label: bintu.live client SDK
---

(c) 2016-2019 nanocosmos gmbh
http://www.nanocosmos.de

Version 0.2.1

The bintu.live client SDK is used to generate and access live stream URLs from the bintu.live service from nanoStream Cloud
to be used in combination with the nanoStream SDKs for live video encoding and broadcast.

## LEGAL NOTICE

This material is subject to the terms and conditions defined in
separate license conditions ('LICENSE.txt')
All information contained herein is, and remains the property
of nanocosmos GmbH and its suppliers if any. The intellectual and technical concepts
contained herein are proprietary to nanocosmos GmbH, and are protected by trade secret
or copyright law. Dissemination of this information or reproduction of this material
is strictly forbidden unless prior written permission is obtained from nanocosmos.

## Importing the Bintu.framework

Open your Xcode project and go to the "General" tab of your application target. Drag the ```Bintu.framework``` file to the section "Embedded Binaries" of your application target. Check "Copy items if needed" when asked.

After embedding and linking it, you can import the SDK anywhere you need it with the following line:


```
#import <Bintu/Bintu.h>
```


## Bintu.live platform connection

Our Bintu.live connection component (Bintu.framework) consists of an entry point API client class ```BNTAPIClient``` which you use to make calls to our streaming platform. There are other class, like ```BNTStreamInfo``` and ```BNTRTMPInfo``` which mainly hold the configuration you receive from the ```BNTAPIClient```.

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

You can also list all streams on your account with the ```getStreams``` call. For example, you can bypass your server, get all streams on the player and let the user select the one they want to see. Or you just play the first one that is live, like shown below:

    [client getStreamsWithCompletion:^(NSArray *streams, NSError *err) {
        for (BNTStreamInfo *stream in streams) {
            if (stream.state == BNTStreamStateLive) {
                // play stream!
            }
        }
    }];

But this example can be made simpler. There is also the ```getStreamsWithState``` call (added in version 0.2.0 of the Bintu.framework) which allows you filter the streams by state directly on the server, resulting in quicker load times. The above example can be implemented like this:


    [client getStreamsWithState:BNTStreamStateLive completion:^(NSArray *streams, NSError *err) {
        // all objects in streams have state = live
        BNTStreamInfo *stream = [streams firstObject];
        if (stream) {
            // play stream!
        }  
    }];


That was a basic overview of our bintu.live component.

## Strip simulator architectur slices

Xcode 6 and sometimes higher versions contain a bug where an app containing an embedded framework cannot be submitted to the app store when the framework contains simulator architectures (see [here](http://www.openradar.me/radar?id=6409498411401216)).


On the other hand, including the simulator architectures in the framework is necessary for anyone that wants to test their app (and also the bintu.live connector) on the simulator.

The workaround is that Bintu.framework contains a script (```strip-frameworks.sh```) which removes the simulator architectures from the framework just before submitting to the app store.

For this to work correctly, you need to add a "Run Script Phase" to your Xcode app target. This phase has to come after the "Embed Frameworks" phase otherwise it will not work.

The "Run Script" phase should contain following line:

```
bash "${BUILT_PRODUCTS_DIR}/${FRAMEWORKS_FOLDER_PATH}/Bintu.framework/strip-frameworks.sh"
```

This should be all that is needed to work around the Xcode bug.
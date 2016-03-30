# bintu.live client SDK for Android

© 2016 nanocosmos gmbh [http://www.nanocosmos.de][e98cabe4]

Version 0.X.X

The bintu.live client SDK is used to generate and access live stream URLs from the bintu.live service to be used in combination with the nanoStream SDKs for live video encoding and broadcast.

## Legal Notice

This material is subject to the terms and conditions defined in separate license conditions ('LICENSE.txt') All information contained herein is, and remains the property of nanocosmos GmbH and its suppliers if any. The intellectual and technical concepts contained herein are proprietary to nanocosmos GmbH, and are protected by trade secret or copyright law. Dissemination of this information or reproduction of this material is strictly forbidden unless prior written permission is obtained from nanocosmos.

## Project setup
### Android Studio
To use the bintu.live SDK in your Android Studio project you need to include the bintu android archive as module. In order to do this copy the android archive (bintu-sdk.aar) on you drive and open the "Create Module" menu in Android Studio (via File -> New -> Create Module). On the "Create New Module" menu select "Import .JAR/.AAR Package", as shown below, and click on "Next".
![Create Module Menu][Create_Module]

Afterwards select the location of the bintu-live sdk archive file and enter a name for this module (e.g. "BintuSDK").
After finishing the bintu.live sdk is included to your project and ready to use.

### Eclipse ADT

## bintu.live platform connection
Our bintu.live connection component (bintu-sdk.aar) consists of an entry point API client class BintuSDK (net.nanocosmos.bintu.bintusdk.BintuSDK) which you use to make calls to our streaming platform. There are other classes, like StreamInfo (net.nanocosmos.bintu.bintusdk.stream.StreamInfo) and RtmpIngest  (net.nanocosmos.bintu.bintusdk.stream.RtmpIngest), which mainly hold the configuration you receive from the BintuSDK.

In general, if you want to interface with our streaming platform, you construct an instance of the BintuSDK with its main constructor:

```java
BintuSDK bintuSDK = new BintuSDK(apiKey);
```

Once you have an instance, you can create new streams with it, receive information about a previously created stream or list all streams that are present on your account.

Lets step through these in detail:

With the createStream call you create a new stream. You would use this in your broadcaster app. As argument you pass an Instace of an implementation of the StreamInfoResponseHandler interface to the createStream call. This interface represents callback classes to handle the result of the create stream call. It contains two method declarations. One to handle the result, called "handle", and one to handle errors, called "onError". Either the implementation of the "handle"- or the "onError"-Method will be executed as result of the createStream call. When the "handle"-Method is executed it gets the result data of the createStream call as a StreamInfo object passed as a method argument.

```java
bintu.createStream(new StreamInfoResponseHandler() {
                @Override
                public void handle(StreamInfo streamInfo) {
                    //TODO Handle the Result
                }

                @Override
                public void onError(Throwable error) {
                    //TODO Handle the Error
                }

            });
```

With getStream call you can receive information about a previously created stream, by passing its id to the call. In most cases, you would take the stream ID you get while creating a stream and store it on your own server somewhere. If anyone wants to view a stream, you send that ID to the player app. Then you can receive that stream's playout information. For example, if you want to play the stream via RTMP:

```java
bintuSDK.getStream(streamID, new StreamInfoResponseHandler() {
            @Override
            public void handle(StreamInfo streamInfo) {
                RtmpPlayout rtmpPlayout = streamInfo.getRtmpPlayouts().get(0);
                String rtmpURL = rtmpPlayout.getUrl();
                String streamName = rtmpPlayout.getStreamName();
                //TODO Play the stream
            }

            @Override
            public void onError(Throwable error) {
                //TODO Handle the Error
            }
        });
```
You can also list all streams on your account with the getStreams call. For example, you can bypass your server, get all streams on the player and let the user select the one they want to see. Or you just play the first one that is live, like shown below:

```java
bintuSDK.getStreams(new StreamInfoListResponseHandler() {
               @Override
               public void handle(List<StreamInfo> result) {
                 for(StreamInfo info : result){
                       if (info.getState() == State.LIVE){
                           //TODO Play this stream
                           break;
                       }
                   }
               }

               @Override
               public void onError(Throwable e) {
                   //TODO Handle the Error
               }
           });
```

But this example can be made simpler. There is also the getStreams call (added in version 0.?.? of the bintu-sdk.aar) which allows you filter the streams by state directly on the server, resulting in quicker load times. The above example can be implemented like this:
```java
bintuSDK.getStreams(State.LIVE, new StreamInfoListResponseHandler() {
                @Override
                public void handle(List<StreamInfo> result) {
                    try {
                        StreamInfo info = result.get(0);
                        //TODO Play stream
                    }catch (Exception ex){
                        //TODO Handle the Error    
                    }
                }

                @Override
                public void onError(Throwable e) {
                    //TODO Handle the Error
                }
            });
```

That was a basic overview of our bintu.live component.

## Links
  [e98cabe4]: http://www.nanocosmos.de "http://www.nanocosmos.de"

## Illustration Directory
  [Create_Module]: img/android_studio_create_module.png "Create New Module Menu"

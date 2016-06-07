# nanoStream SDK: Streamer Sample

nanoStream Live Video Encoder and Player for Android
(c) 2015 nanocosmos gmbh, [http://www.nanocosmos.de][0900f009]



## Description

This sample shows the basic usage of the nanoStream Android SDK for streaming apps.

## Usage

**Step 1: Unzip the sample project to the desired project path**

**Step 2: Copy the SDK libraries into the Android Studio project**

Before runnig the sample, six libraries have to copied from the SDK library folder:
Add the ``net.nanocosmos.nanoStream.jar`` java component to the Android Studio project by copying ``[SDK]/libs/net.nanocosmos.nanoStream.jar`` to the folder``[projectpath]/app/libs/net.nanocosmos.nanoStream.jar``

Add the nanoStream.so native components to the Android Studio project by copying the 5 folders ``[SDK]/libs/[platform]/libRTMPStream.so`` to
``[projectpath]/app/src/main/jniLibs/[platform]/libRTMPStream.so``

Platforms are armeabi, armeabi-v7a, arm64-v8a, x86, mips

**Step 3: Open the MainActivity.java in the Android Studio Code Editor**
The MainActivity contains the main application code. The location is:
[projectpath]/app/src/main/java/net/nanocosmos/nanoStream/demo/basicstreamer

Your window should look like this:

![Git-Android-Streamer](/images/2016/06/android_sample_streamer_studio.png)

&nbsp;

**Step 4: Enter your license in the MainActivity**

Just replace the placeholder with your license key.
```java
// TODO: REPLACE WITH YOUR LICENSE
private String license = "--- ADD YOUR LICENSE HERE ---";
```
**Step 5: Enter your stream configuration in the MainActivity**

Replace the server url and the stream name with yours.
The server url usually has this pattern : `[Protocol]://[Adresse]/[Application]`.
With the stream name your streaming server identifies each stream.
```java
// TODO: REPLACE THE RTMP URL AND STREAM NAME
private static final String strStreamUrl = "--- INSERT THE STREAMING SERVER URL ---";
private static final String strStreamname = "--- INSERT THE STREAM NAME OR FILE NAME ---";
```
&nbsp;

**Step 6: Connect an Android device, build and run the application**

## About

**Version** : nanoStream SDK 4.3.0

**Compatible with** : Android API-Level from 16 up to 23


  [0900f009]: http://www.nanocosmos.de "nanocosmos Website"

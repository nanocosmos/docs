---
id: nanostream_android_developer_manual_sample
title: Sample
sidebar_label: Sample
---

## Quickstart

The **nanoStream SDK** contains libraries for developing streaming apps for Android devices or for incorporating streaming capabilities in your existing Android applications.

Three samples are included to show the basic usage of the nanoStream SDK (Android-BasicStreamer, Android-StreamerSample and Android-Player).  You will need to download and install the latest version of Android Studio. Visit the [Download Page](http://www.nanocosmos.de/v4/order/demo.php) of Nanocosmos to download a trial version of the nanoStream SDK (version 4.3.0 supports  Android API-Level from 16 up to 23). Contact Nanocosmos for obtaining a licence longer than the trial period.



*Android-BasicStreamer*: this sample contains a single java file that starts and stops a stream. How-to start running the sample.

*Android-StreamerSample*: this sample contains a single java file that starts and stops a stream and includes options for adjusting the quality of the stream.

*Android-Player*: this sample contains a single java file that starts and stops playing a stream from a remote source.



## Player Sample

### Description

This sample shows the basic usage of the nanoStream Android SDK for player apps.

### Usage

**Step 1: Unzip the sample project to the desired project path**



**Step 2: Copy the SDK libraries into the Android Studio project**

Before runnig the sample, six libraries have to copied from the SDK library folder:
Add the ``net.nanocosmos.nanoStream.jar`` java component to the Android Studio project by copying ``[SDK]/libs/net.nanocosmos.nanoStream.jar`` to the folder `[projectpath]/app/libs/net.nanocosmos.nanoStream.jar`

Add the nanoStream.so native components to the Android Studio project by copying the 5 folders `[SDK]/libs/[platform]/libRTMPStream.so` to
`[projectpath]/app/src/main/jniLibs/[platform]/libRTMPStream.so`

Platforms are `armeabi`, `armeabi-v7a`, `arm64-v8a`, `x86`, `mips`



**Step 3: Open the PlayerActivity.java in the Android Studio Code Editor**
The PlayerActivity contains the main application code. The location is:
`[projectpath]/app/src/main/java/net/nanocosmos/nanoStream/demo/player`

Your window should look like this:

![Git-Android-Player](/img/nanostream/android/android_sample_player_studio.png)



**Step 4: Enter your license in the PlayerActivity**

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



**Step 6: Connect an Android device, build and run the application**



### About

**Version** : nanoStream SDK 4.3.0

**Compatible with** : Android API-Level from 16 up to 23



## Streamer Sample

### Description

This sample shows the basic usage of the nanoStream Android SDK for streaming apps.

### Usage

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

![Git-Android-Streamer](/img/nanostream/android/android_sample_streamer_studio.png)



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



**Step 6: Connect an Android device, build and run the application**



### About

**Version** : nanoStream SDK 4.3.0

**Compatible with** : Android API-Level from 16 up to 23
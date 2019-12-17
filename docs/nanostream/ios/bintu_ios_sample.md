---
id: bintu_ios_sample
title: iOS Streaming App in 5 Minutes
sidebar_label: iOS Streaming App in 5 Minutes
---

## Introduction

This guide will show you how you can get a head start on your competition for your end-to-end streaming platform by leveraging tried and true nanoStream technology.

You will be able to create a *live video broadcaster app* with nanoStream SDK, connected to the nanoStream Cloud / bintu.live streaming platform. 

You do not need to install your own server, just stream to the URL you get from bintu! 

-----


## Requirements

- `nanoStream SDK 4.5.5` or later
- a nanoStream SDK license for iOS (valid for publish & playback)
- a valid bintu.live API key
- `XCode 7.2` or later on `Mac OS 10.10` or later
- bintu.live connector requires at least `iOS 8.0`

-----


## Broadcast (Publisher) App

- Open one of the sample projects from the SDK samples folder in `Xcode`. We recommend getting started with the BintuStream sample, which includes both live encoding and playback. 

> BintuStream is written in `Swift`. The BintuEncoder and BintuPlayer samples can also be used, they are written in `ObjC`.

- Add the license and API keys

  - Open ```nanoLicenseConfig.h```.
  - insert your License and API keys.

```
myLicenseKey = @"nlic:1.2:..."
myApiKey  = @"12773-..."

```

- Build and run the application.

### How to use the broadcaster

- Run the app
- Enter your API key if not hardcoded
- Wait for the bandwidth check to finish or just skip to use defaults
- Tap the `start broadcast` button

You should see the result logged to the console: `You are live!`. The streamer automatically gets a stream URL from bintu.live and starts streaming. The stream URL is logged as well.

> In case of error please check the error message in the console log, your API key and your account. Contact us for help.

![bandwidth check](https://www.nanocosmos.de/v4/documentation/_media/run_bandwith_check1.png)[![img](https://www.nanocosmos.de/v4/documentation/_media/anzeige_bandwidth_in_stream1.png)

-----


## Player App

- Open the project `PlayingExample` from the SDK samples folder in Xcode.
- Build and run the application. (your license and API keys should be used from the same file as the broadcaster app)

> If you tap the play button, you should see your live video sent from the broacaster device! In case of error, please check the debug console. The error message should tell you something about the error. Check your API and license keys. Contact us for help.

-----


## All Together

Congratulations! You now have everything you need for your own streaming platform.

> You can now run the broadcaster app on one device and the player app on another. You can start a stream in the broadcaster app (via `Start` button) and can play it directly in the player app (via `Play` button). The player app assumes that you want to play the latest stream on your account that is live.

<br>
### Next steps

From here on you would probably want to integrate the live streaming function into your own backend. If you want to know more how these sample apps were created and how you can set up your own ones, visit this [step-by-step tutorial](https://www.nanocosmos.de/v4/documentation/nanostream-sdk-bintu-ios-getting-started-tutorial).

> These samples are pretty basic for better understanding what is going on. For a more complete sample on how to use nanoStream and bintu.live, see the samples `BintuEncoder` and `BintuPlayer` in the SDK `samples` folder.

<br>
### New to bintu.live?

If you don't have a bintu.live account yet click [here](../../../cloud/cloud_getting_started) to learn how to create one.

<br>
### Getting help

Contact us for additional help, or additional functions, full-feature apps and consulting services!
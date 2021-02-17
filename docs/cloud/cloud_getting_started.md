---
id: cloud_getting_started
title: Getting started
sidebar_label: Getting started
---
## Using the bintu.live dashboard

bintu.live is the dashboard and API for nanoStream Cloud.

### What you need

To create and broadcast a live stream, you need a live source.
This can be either a webcam, external camera, streaming device, or even your PC screen.
To send a live stream to nanoStream Cloud, you need a streaming software or hardware,
or just your browser which directly can be used to send a live stream to your audience.

See our introduction videos and tutorials for step-by-step instructions!

- [Videos](https://www.nanocosmos.de/blog/videos)

- [Getting started with the OBS Software](https://www.nanocosmos.de/blog/2020/01/how-to-use-obs-as-a-live-encoder-for-your-nanostream/)

- [Getting started with nanoStream Webcaster from the browser](https://www.nanocosmos.de/blog/2019/09/how-to-create-a-livestream-with-our-nanostream-webrtc-application-demo-version/)

### Create a nanoStream Cloud account (bintu.live)

You can use the new [bintu dashboard](https://bintu-cloud-frontend.nanocosmos.de/) ,

NOTE: The following screenshots is about the former simplified [bintu dashboard v.1](https://bintu.nanocosmos.de/). 

Click [bintu-cloud-frontend.nanocosmos.de](https://bintu-cloud-frontend.nanocosmos.de/signup) to sign up and create a new user account

![Screen Shot 2016-07-19 at 13.45.00](https://i2.wp.com/www.nanocosmos.de/blog/wp-content/uploads/Screen-Shot-2016-07-19-at-13.45.00.png?resize=600%2C448&ssl=1)
<br>
> Your email account will be part of an *organisation*. All streams associated with your organisation or company will be filed under this account.

<br>
After signing up, you can click [here](https://bintu-cloud-frontend.nanocosmos.de) to login to your bintu.live stream account.

![Screen Shot 2016-07-19 at 13.44.40](https://i2.wp.com/www.nanocosmos.de/blog/wp-content/uploads/Screen-Shot-2016-07-19-at-13.44.40.png?resize=300%2C234&ssl=1)

-----


### Create a new live stream

Create your first live stream: In the top menu select `Stream`, then `create`

[![Screen Shot 2016-07-19 at 16.42.57](https://i1.wp.com/www.nanocosmos.de/blog/wp-content/uploads/Screen-Shot-2016-07-19-at-16.42.57.png?resize=599%2C149&ssl=1)](https://i1.wp.com/www.nanocosmos.de/blog/wp-content/uploads/Screen-Shot-2016-07-19-at-16.42.57.png?ssl=1)

> Every stream is assigned a unique ID and an ingest URL for the live encoder software.

-----


### Start a live stream broadcast

To start a live stream broadcast, you need a live encoder software, either based on an `RTMP Live Encoder application`, or the browser-based [nanoStream Webcaster broadcaster](../webrtc/nanostream_webrtc_introduction).

You can use [nanoStream Apps](../nanostream/nanostream), or 3rd part software like [OBS (Open Broadcaster)](https://obsproject.com/) or professional Live Encoders like [Elemental Live](https://www.elemental.com/products/aws-elemental-live).

> The primary ingest protocol is RTMP.

**Copy/paste the ingest URL to use it with your live encoder software**

Example: 
```
rtmp://bintu-stream.nanocosmos.de/live/XYZ1-2345
```

For some live encoder software, you might need to separate the stream url and stream name, e.g.

- RTMP URL: `rtmp://bintu-stream.nanocosmos.de/live`
- Stream Name: `XYZ1-2345`

> Some applications like `OBS` use the name `Stream Key` instead `Stream Name`

-----


### Configuring the camera and live encoder

Codecs: 
- `H264 video`,
- `AAC audio`

Video resolution: flexible, e.g. `640×480`, `1280×720`, `1920×1080`

Video bitrate: flexible, e.g. `500 kbits/s`, `1 MBit/s`

-----


### Running the stream

After entering the `RTMP ingest URL` and `stream name` into your live encoder software, you can instantly start the broadcast to nanoStream Cloud / bintu.live.

[![Screen Shot 2016-07-19 at 16.43.20](https://i2.wp.com/www.nanocosmos.de/blog/wp-content/uploads/Screen-Shot-2016-07-19-at-16.43.20-1024x507.png?resize=640%2C317)](https://i2.wp.com/www.nanocosmos.de/blog/wp-content/uploads/Screen-Shot-2016-07-19-at-16.43.20.png?ssl=1)

-----


### Play your live stream

Play the stream directly in your browser or by inserting the Playout URL into a player application. By using the `Web Playout URL`, you will automatically be directed to a web player page based on our unique `nanoStream H5Live` low-latency playback technology.

> **Note:** 
>
> the player URL is different from the Ingest URL!
> This is to adjust to world regional locations of our worldwide CDN with ingest and playback servers.



[![Screen Shot 2016-07-19 at 16.43.37](https://i2.wp.com/www.nanocosmos.de/blog/wp-content/uploads/Screen-Shot-2016-07-19-at-16.43.37-1024x554.png?resize=640%2C346)](https://i0.wp.com/www.nanocosmos.de/blog/wp-content/uploads/Screen-Shot-2016-07-19-at-16.43.37.png?ssl=1)
<br>
The H5Live player is running on a sample page which also shows an embed code to copy to your own web page.
<br>

-----


### Manage your live streams

Select `Streams`, then `List` to find a list of all streams that you created. 

These can be sorted by `live`, `ended`, `created`, or `external` streams.

[![Screen Shot 2016-07-19 at 16.44.01](https://i1.wp.com/www.nanocosmos.de/blog/wp-content/uploads/Screen-Shot-2016-07-19-at-16.44.01-1024x530.png?resize=640%2C331)](https://i2.wp.com/www.nanocosmos.de/blog/wp-content/uploads/Screen-Shot-2016-07-19-at-16.44.01.png?ssl=1)





## Additional features


### Using bintu.live stream tags

You can add any text-based tags to your stream. It can be a stream `title` or any other `information` that you would like to add to the stream (category, event name, date,…). 
It can also be a `JSON string` to use for specific programmatic purposes.

> A simple use case is grouping the streams with your custom application logic.

<br>

![BintuPlayer](https://i0.wp.com/www.nanocosmos.de/blog/wp-content/uploads/BintuPlayer-1024x585.jpg?resize=474%2C271)

Every tag added to a stream is directly displayed in the Stream Info.

*See more info about tagging and how it is used in our Bintu Encoder and Player sample apps on our* [*blog*](https://www.nanocosmos.de/blog/2016/06/new-bintu-live-grouping-and-tagging-feature-for-streams/)*.*

The Bintu Encoder and Player sample apps are part of our [*mobile nanoStream SDKs*](../nanostream/android/nanostream-android-sdk) *for iOS and Android.*

-----

### Metrics

By selecting `Organisation` from the top menu, you can see your Organisation ID, as well as monthly and total playtime of all streams. 

> Please ask for details about other metrics you can get.

![Screen Shot 2016-07-19 at 13.45.44](https://i1.wp.com/www.nanocosmos.de/blog/wp-content/uploads/Screen-Shot-2016-07-19-at-13.45.44-1024x389.png?resize=474%2C180)

-----


### API Access

Under `Keys` you will find your account’s API Key and Player Key to manage live streams within your own application.

![img](https://i0.wp.com/www.nanocosmos.de/blog/wp-content/uploads/keys.png?resize=768%2C194&ssl=1)

-----


### Secure Streaming

Secure streaming can be done on the ingest side based on rtmps or WebRTC.

For encrypted ingest with rtmps, you can use port 1936 instead 1935.

Example: 

Standard non-encrypted ingest (RTMP): rtmp://bintu-stream.nanocosmos.de:1935/live/STREAM
Encrypted ingest (RTMPS): rtmps://bintu-stream.nanocosmos.de:1936/live/STREAM

For secure playback with the nanoStream H5Live Player you need to have your account enabled for playback security. See the h5live secure playback documentation.
-----


#### More information:

- [bintu.live dashboard](https://bintu-cloud-frontend.nanocosmos.de)
- [bintu.live API documentation](https://bintu.nanocosmos.de/doc/)
- [Create a live streaming app in 5 minutes](cloud_ios_streaming_app)
- [nanoStream and bintu.live](https://www.nanocosmos.de/blog/2016/07/nanostream-and-bintu-live/)
- [Grouping & Tagging with bintu.live](https://www.nanocosmos.de/blog/2016/06/new-bintu-live-grouping-and-tagging-feature-for-streams/)
- [nanoStream Presents End-to-End Live Streaming Software](https://www.nanocosmos.de/blog/2016/05/nanocosmos-presents-new-end-to-end-live-streaming-software/)
- [nanoStream software demos and downloads](http://www.nanocosmos.de/demo)

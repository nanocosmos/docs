---
id: How_to_Start_a_Stream
title: How to start a stream
sidebar_label: Start streaming
---
# How to Start a Stream

In this tutorial you'll get to know the basic functionality of the nanoStream Cloud:
create, broadcast and watch a live stream with ultra-low-latency. 

The process requires the following steps:

- create a bintu live stream on the dashboard
- configure your live encoder software or Webcaster
- use the nanoPlayer page or API to view the live stream

### Create a Stream

First, log in to your organization account. [Link: How to Log in to nanoStream Cloud.]

Then, create a bintu live stream with *Create Stream*. You can press *Create New Stream* right next to your organization name or press the *plus icon* on the top of the site. Alternatively, you can navigate to the menu on the left hand side and press *Streams* and then *Create New Stream*.

![dashboard](assets/dashboard.png)

To send a live stream, there are 2 options:

- use a separate live encoder software or hardware (for example OBS)
– use the nanoStream Webcaster web page or API directly from your browser.

### Setting up a Live Stream Using the Webcaster

The Webcaster is a browser application that allows you to go live around the world immediately, without a separate setup. 

#### **Set up the video settings**

- You can set up your source resolution and frame rate from a list of prefilled values.
- Select suitable values that fit your needs.
- If in doubt, just keep the default or contact customer support.

#### **Set up the bitrates**

- Similarly, you can set up your audio and video bitrates from a list of prefilled values.
- Select suitable values taking into account network bandwidth considerations.
- If in doubt, just keep the default or contact customer support.

### **Add Stream Tags**

You can group and tag streams with bintu stream tags. These are human readable words or IDs you can use to identify your streams. This is optional.

- Click on `ADD STREAM TAGS` to add search tags to your stream.
- You can create new tags by typing onto the `Tags` field and hit `Enter` to add it to the list.
- Repeat this for all tags you want to add.
- Or add an existing tag through `Show all tags`. 

![create stream](assets/create-stream.png)

Transcoding allows your stream to perform perfectly adjusted to any network situation. 
See the separate page for more information about adaptive bitrate and live transcoding.

As soon as you have adjusted your preferences, press *Create New Stream* and you’ll be redirected automatically to the *Stream Overview*. Press *Start Broadcast* to start your stream directly from the browser.

![start broadcast](assets/start-broadcast.png)

### Use a live encoder 

You can ingest a live stream with a live encoder software or hardware, using the RTMP ingest streamname and the RTMP ingest URL. 
Click here for information on ingesting a stream with the [OBS software](https://www.nanocosmos.de/blog/2019/03/how-to-use-obs-for-low-latency-live-encoding-to-nanostream-cloud/) or [Wirecast](https://www.nanocosmos.de/blog/2020/12/how-to-use-wirecast-with-nanostream-cloud-for-ultra-low-latency-live-streaming/). 

![start ingest](assets/start-ingest.png)

### Live Player 

You find direct access to the nanoplayer playout of your live stream. 

![access-playout](assets/access-playout.png)

If you are a secured organization, you can also  *Create a Secure Playback Token*. [To learn more about this, click here] (This applies only for secured organizations.)

If you want to embed the stream playout in your own webpage, use the *H5Live Code Snippet*. [Link: Code Snippet]

![code snippet](assets/code-snippet.png)

The information displayed under *Stream Overview* shows an overview of your created stream(s). 

![created-stream-link](assets/created-stream-link.png)

### Stream Playout

Clicking the *Live Playout URL* opens a new browser tab displaying your stream output. This is the default *H5Live Playout* of your created stream. It also displays important information on your stream.  As you can see, the latency is below one second.

![stream playout](assets/stream-playout.png)

Share the *Live Playout URL* with the people you want to reach and let your stream go around the world in one second!

I hope that this brief tutorial was helpful. If you need further assistance, check our [support page](https://www.nanocosmos.de/support)


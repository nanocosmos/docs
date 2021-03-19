---
id: troubleshooting
title: nanoStream Cloud Analytics
sidebar_label: Troubleshooting
---

## Troubleshooting Page

The trouble shooting page helps to investigate stream or user specific metrics across the streaming experience from stream ingest to the playout at the enduser. With this feature you have a complete transparent view at your streams, which helps you to find potential problems and be more capable of solving them faster.
    
### Access

To access the trouble shooting page you have to enable metrics on your business plan.

### Time Picker

The time picker declares the time period in which you will query for available metric results. Use to " Set to Now" button the to automatically update to the current time.

> **Note**, that UTC is the current standard for time periods which are used by our metrics.

![Screenshot](/img/cloud/analytics/troubleshooting/time_picker.png)

### Copy URL Button

The Copy URL button copies the exact options regarding the affected playout and ingest that you are currently want to investigate from the URL. Pasting the information into a support ticket helps to synchronize our support team with your issue and accelerates the solution process.

![Screenshot](/img/cloud/analytics/troubleshooting/copy_URL.png)

### Playouts

After selecting a specific time period you are asked to enter an IP address or an user ID to access playout statistics about all streams that this user retrieved. You will then be able to select one out of the 5 newest playouts based on their start date. To view more than these 5 results you need to adjust the time range accordingly. We also implemented support for current running playouts.

> **Note**, only playouts that have metric option enabled are visible.  
    
   - Search by IP
   The IP address which requested access to a stream.
    
   - Search by UserID
   The unique user ID of your customer. 

> **Note**, to make this work with UIDs, you have to assign IDs to your users beforehand and also transmit that to the [player API](https://docs.nanocosmos.de/docs/nanoplayer/nanoplayer_player_metrics/#how-to-use).

![Screenshot](/img/cloud/analytics/troubleshooting/playouts.png)
    
#### Navigation

If there are statistics about the valid IP / UID within the stated time period, you will have a selection of streams that this user entered. Select the desired stream name and you will see a list of all playouts that user had in combination with the selected stream name. After you selected a playout you can access meta data information and also more detailed statistics below. Define the time interval with the slider to zoom into streams with a longer duration or to focus on specific parts of the stream. At this point you can synchronize with the corresponding ingest data of the playout on the right side.

![Screenshot](/img/cloud/analytics/troubleshooting/metadata.png)

> **Note**, if an user reloads the page of a stream, it will be accounted as a new playout. 

> **Note**, If you set the visible time range to under 5 minutes, you switch from data aggregation mode into raw data mode. Therefore you will get exact datapoints at the given time. 

![Screenshot](/img/cloud/analytics/troubleshooting/raw_mode.png)

   - Statistics - Bitrate [kBits/s]:
   The corresponding retrieved bitrate on client side at a specific time. Purple lines symbolize event calls which are also listed under the Events table.

   - Statistics - Latency [s]:
   The latency from ingest to playout. Purple lines symbolize event calls which are also listed under the Events table.

   - Statistics - Buffering Totaltime Ratio [%]:
   The ratio between buffer and playback duration. 
   
   > **Note**, a ratio of 0% means no buffering and a ratio of 100% means no playback was possible.

   - Statistics - Events:
   The 5 oldest called events within the defined time period. (These are always equal to the 5 furthest left events in the chart)

![Screenshot](/img/cloud/analytics/troubleshooting/statistics_playout.png)
        

### Ingests

Whether you have synchronized a corresponding playout or entered a valid, in the time period available stream name yourself, you will have access to ingest specific data, depending on the used protocol WebRTC or RTMP. You can see which protocol was used after entering a stream name right below the selection. We also implemented support for current running ingests. Ingests with metric option disabled are also shown, but will not contain data.

![Screenshot](/img/cloud/analytics/troubleshooting/ingests.png)

#### Navigation

After the overview of the meta data you can define a specific time period within the stream duration. Therefore you can use the slider or type the time in manually, in which case the time gets rounded respective to the selected time interval to insure correct data aggregation. The results you get for the ingest stream name are also sorted by newest first as for the playouts. Selecting a time period auto-refreshes the statistics below.

![Screenshot](/img/cloud/analytics/troubleshooting/statistics_ingest_interval.png)

#### RTMP Ingests

Ingests using RTMP only provide metrics about video and audio bitrates.

   - Statistics - Video bitrate [kBits/s]:
   The uploaded bitrate of video data.

   - Statistics - Audio bitrate [kBits/s]:
   The uploaded bitrate of audio data.

#### WebRTC Ingests

Ingests using Web Real Time Communication are providing additional insights to framerate, encoding and package delivery.

   - Statistics - Video bitrate [kBits/s]:
   The uploaded bitrate of video data.

   - Statistics - Audio bitrate [kBits/s]:
   The uploaded bitrate of audio data.

   - Statistics - Framerate [1/s]:
   Amount of uploaded video frames.

   - Statistics - Encode time - total time - ratio [%]:
   The Ratio between the time needed to encode video data and the actual video play time. 
   
   > **Note**, that a high ratio is an indicator for high encoder workload, which can lead to ingest problems. 

   - Statistics - Count of packet loss detections:
   Amount of WebRTC notifications about lost data packages.

   > **Note**, a high count of lost packages at a time can lead to issues with the video representation on the side of the end user.
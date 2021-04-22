---
id: troubleshooting
title: nanoStream Cloud Analytics
sidebar_label: Troubleshooting
---

# Troubleshooting Page

The trouble shooting page helps to investigate stream or user specific metrics across the streaming experience from stream ingest to the playout at the enduser. With this feature you have a complete transparent view at your streams, which helps you to find potential problems and be more capable of solving them faster.
    
## Access

Access to the Trouble Shooting page is available for every nanoStream Cloud customer.

> **Note**, displaying Stream Playout information will require a business upgrade to sent your H5Live Player metrics to our Analytics backend. Please contact sales@nanocosmos.de for business details.

## Time Picker

The time picker declares the time period in which you will query for available metric results. Use to " Set to Now" button the to automatically update to the current time.

> **Note**, that UTC is the current standard for time periods which are used by our metrics.

![Screenshot](assets/tp-time_picker.png)

## Playouts

After selecting a specific time period you are asked to enter an IP address or an user ID to access playout statistics about all streams that this user retrieved. You will then be able to select one out of the 5 newest playouts based on their start date. To view more than these 5 results you need to adjust the time range accordingly. We also implemented support for current running playouts.

> **Note**, only organizations with player metrics option enabled will be able to see the items in this data group.

![Playout](assets/tp-playout.png)

&#9398;
`From (UTC Time)` the **start** of the time range to search in.

&#9399;
`To (UTC Time)` the **end** of the time range to search in.

&#9400;
`By` indicates the time interval granularity. It can be 30 seconds or 1 minute.

&#9401;
`Playout` tab which selects to view playout statistics. Playout statistics for all streams in the selected time period are retrieved.

&#9402;
`End to End` tab which selects to view both playout and ingest statistics in the same page. Playout and ingest statistics for all streams in the selected time period are retrieved.

&#9403;
`Ingest` tab which selects to view ingest statistics. Ingest statistics for all streams in the selected time period are retrieved.

&#9404;
`Copy URL to share` will copy the current page setup to clipboard. Users can send this URL link information to nanocosmos support for further troubleshooting help.

&#9405;
`IP address/user ID` indicates using either the IP address used in client playouts or user IDs to search for related streams.

> **Note**, to make this work with UIDs, you have to assign IDs to your users beforehand and also transmit that to the [player API](https://docs.nanocosmos.de/docs/nanoplayer/nanoplayer_player_metrics/#how-to-use).

&#9406;
`Select a stream` shows all streams that has a playout related to the IP address or user ID set earlier.
    
### Stream Playout Information

If there are statistics about the valid IP / UID within the stated time period, you will have a selection of streams that this user entered. Select the desired stream name and you will see a list of all playouts that user had in combination with the selected stream name. After you selected a playout you can access meta data information and also more detailed statistics below. Define the time interval with the slider to zoom into streams with a longer duration or to focus on specific parts of the stream. At this point you can synchronize with the corresponding ingest data of the playout on the right side.

![Playout Stream Information](assets/tp-po1.png)

&#9398;
`Playouts of stream` indicates the selected stream name to check.

&#9399;
`Start` indicates the start time.\
`End` indicates the end time.\
`Duration` indicates the active time.

&#9400;
Groups of meta-data information are shown related to the stream. The meta-data includes :\
`User ID` - user defined data setup using the nanoPlayer API.\
`IP` - client IP address used for playout.\
`Event ID` - user defined data setup using the nanoPlayer API.\
`Custom field 1` - user defined data setup using the nanoPlayer API.\
`Playout ID` - internal generated unique ID.\
`H5Live player version` - version of nanoplayer used.\
`Device` - type of device used.\
`Referrer` - webpage that hosts the nanoPlayer.\
`Country` - country in which playout was initiated.\
`City` - city in which playout was initiated.\
`Resolution width` - width of video stream in pixels.\
`Resolution height` - height of video stream in pixels.\
`OS` - OS used.\
`OS version` - OS version.\
`Browser` - web browser used.\
`Browser version` - browser version.

&#9401;
This tab shows which group of meta-data information is being shown at the moment and how many groups are available.

&#9402; &#9403;
This area allows changing between different groups of meta-data information for viewing.

&#9404;
This time slider can be used to define the time interval, allowing to zoom into streams with a longer duration or to focus on specific parts of the stream.

&#9405;
`Synchronize ingest` gives the ability to synchronize the current selected playout with the corresponding ingest data group that provided the playout. In this selection, the playout data group is shown on the left side while the ingest data group is shown on the right side. This is same as selecting the ***End to End*** data group.

> **Note**, if an user reloads the page of a stream, it will be accounted as a new playout. 

> **Note**, If you set the visible time range to under 5 minutes, you switch from data aggregation mode into raw data mode. Therefore you will get exact datapoints at the given time. 

![Screenshot](assets/tp-raw_mode.png)

### Visualizations

This part of the playout data group shows the graphical view of various media statistics.

![Playout Media Information](assets/tp-po2.png)

`Bitrate` [kBits/s]:
The corresponding retrieved bitrate on client side at a specific time. Purple lines symbolize event calls which are also listed under the Events table.

`Latency` [s]:
The latency from ingest to playout. Purple lines symbolize event calls which are also listed under the Events table.

`Buffering Totaltime Ratio` [%]:
The ratio between buffer and playback duration. 
   
> **Note**, a ratio of 0% means no buffering and a ratio of 100% means no playback was possible.

`Events`:
The 5 oldest called events within the defined time period. (These are always equal to the 5 furthest left events in the chart)

## Ingests

The ***Ingest*** tab selects the ingest data group with all items described in detail next. Whether you have synchronized a corresponding playout or entered a valid, in the time period available stream name yourself, you will have access to ingest specific data, depending on the used protocol WebRTC or RTMP. You can see which protocol was used after entering a stream name right below the selection. We also implemented support for current running ingests.

![Ingest](assets/tp-ingest1.png)

&#9398;
`Stream name` indicates the stream name of interest.

&#9399;
`Start` indicates the start time.\
`End` indicates the end time.\
`Duration` indicates the active time.

&#9400;
Groups of meta-data information are shown related to the stream. The meta-data includes :\
`Protocol` - streaming protocol used.\
`Data center` - specific data center used for this ingest.\
`Server` - specific server in the data center used.\
`IP` - client IP address in which ingest was initiated.\
`Country` - country in which ingest was initiated.\
`City` - city in which ingest was initiated.\
`Resolution width` - width of video stream in pixels.\
`Resolution height` - height of video stream in pixels.

&#9401;
This tab shows which group of meta-data information is being shown at the moment and how many groups are available.

&#9402; &#9403;
This area allows changing between different groups of meta-data information for viewing.

&#9404;
This time slider can be used to define the time interval, allowing to zoom into streams with a longer duration or to focus on specific parts of the stream.

### Visualizations 

After the overview of the meta data you can define a specific time period within the stream duration. Therefore you can use the slider or type the time in manually, in which case the time gets rounded respective to the selected time interval to insure correct data aggregation. The results you get for the ingest stream name are also sorted by newest first as for the playouts. Selecting a time period auto-refreshes the statistics below.

#### RTMP Ingests

Ingests using RTMP only provide metrics about video and audio bitrates.

![Screenshot](assets/tp-ingest2.png)

`Video bitrate` [kBits/s]:
The uploaded bitrate of video data.

`Audio bitrate` [kBits/s]:
The uploaded bitrate of audio data.

#### WebRTC Ingests

Ingests using Web Real Time Communication are providing additional insights to framerate, encoding and package delivery.

![Screenshot](assets/tp-webrtc.png)

`Video bitrate` [kBits/s]:
The uploaded bitrate of video data.

`Audio bitrate` [kBits/s]:
The uploaded bitrate of audio data.

`Framerate` [1/s]:
Amount of uploaded video frames.

`Average frame encode time` [ms]:
The average time needed to encode one frame of the stream.
   
> **Note**, that a high ratio is an indicator for high encoder workload, which can lead to ingest problems. 

`Count of packet loss detections`:
Amount of WebRTC notifications about lost data packages.

> **Note**, a high count of lost packages at a time can lead to issues with the video representation on the side of the end user.

## Workflow Examples 

#### Video only ingest workflow

The figure below shows the graphical representation.\
In this scenario, only video bitrate data can be observed, while audio bitrate is not available.
Also, the detected video bitrate is about 1 Mbps and this can be checked against settings on ingest encoder.

![Video Only](assets/tp-video-only.png)

#### Audio only ingest workflow

The figure below shows the graphical representation.\
In this scenario, only audio bitrate data can be observed, while video bitrate is not available.
Similarly, the detected audio bitrate is averaging above 25Kbps and this can be checked against settings on ingest encoder.

![Audio Only](assets/tp-audio-only.png)

#### Audio/Video ingest workflow in good condition

The figure below shows the graphical representation.\
As can be observed, the average video bitrate is about 1.2Mbps while audio bitrate is about 90Kbps. The video and audio bitrates does not deviate too much from the center average over time and will not cause overflow or underflow of buffers.

![AV Good](assets/tp-ingest2.png)

#### Audio/Video ingest workflow with network issues

The figure below shows the graphical representation.\
As can be observed, the average video bitrate is about 2Mbps while audio bitrate is about 150Kbps. Towards the end of the graph as highlighted by the red box, the video and audio bitrates fluctuates by more than 50% of the average. This signifies some issues with the ingest from the encoder to nanoCosmos CDN. Some causes of these could be ISP related network degradation or encoding anomalies. If this issue is not rectified quickly, then it will cause overflow or underflow of buffers resulting in buffering, connection issues, etc.

![AV Bad](assets/tp-ingestNG.png)
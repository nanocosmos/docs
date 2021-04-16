---
id: worldmap
title: nanoStream Cloud Analytics
sidebar_label: Worldmap
---

# World map

The selected filter options affect all availabe metrics.

The world map gives an overview where your customers are located and shows statistics per country.
You can choose from the following categories:

-  Playout/Ingests: how many streams where ingested and played back
-  Buffering Play Ratio (only available with [H5Live metrics](#h5live) enabled): the ratio between buffer and playback duration over all playouts for a country
   -  a ratio of 0% means no buffering
   -  a ratio of 100% means no playback was possible
   -  for countries like India with a high number of mobile connections and unstable internet connection, a higher buffering/play ratio compared to other countries is expected
-  Latency (only available with [H5Live metrics](#h5live) enabled): the average playback latency over all playbacks for a country
-  Playtime average (only available with [H5Live metrics](#h5live) enabled): the average playback duration of a playback event, shows how long a viewer will watch a stream
-  Usage (received/sent): the ingest and playback usage (in gigabytes) for a country

A table directly below the world map shows a top ten country list for the selected category.
The top ten countries are also highlighted on the world map.

## Country View
In the **Country View** you can investigate the TOP 50 countries that apply to your set filter options. These are ranked by the chosen metric, which can be selected right below the View Switch.
![Screenshot](assets/analytics-worldmap-country-view.png)

&#9398;
`View Switch`

&#9399;
`Metric Selection`

&#9400;
`CDN Options`

&#9401;
`Metric Subswitch`

## Regions View
In the **Region View** all countries belong to there continental region. The functionalites are basically the same than on the **Country View**, but the corresponding data is shown in the **Region Comparison** bar chart below the **Worldmap**.

![Screenshot](assets/analytics-worldmap-regions-view.png)

### Regions Comparison
In this visualization is shown the current selected metric data while in **Region View**. For example, this diagram displays the **buffering ratio metric**, which consists of one metric property. The regions are always ranked from "best" to "worst" based on the selected metric.

![Screenshot](assets/analytics-region-comparison1.png)

&#9398;
`World Regions`

&#9399;
`Bar Tooltip Description`

&#9400;
`Metric Unit`

If a metric consists of more than 1 metric property, which are uniform, you can select this within the **Metric Subswitch** to show the relation of these properties within a **stacked bar chart**. For example the **ABR Switch Metric**, which indicates the count of stream quality related "up" and "down" switches:

![Screenshot](assets/analytics-region-comparison2.png)

### Zoom Country View
Clicking on a region in the worldregion view, lets you zoom in and shows country data of the Top 50 countries within the selected region. The region comparison bar chart also changes to the Top 10 countries ranking of the selected region.   

![Screenshot](assets/analytics-region-zoom-view.png) 

![Screenshot](assets/analytics-zoom-view-Top10.png)


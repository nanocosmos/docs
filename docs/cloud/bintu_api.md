---
id: bintu_api
title: nanoStream Cloud - bintu
sidebar_label: bintu api
---

# What is bintu?

bintu is the stream management dashboard and API for nanoStream Cloud and CDN. By using bintu, you can create and manage your live streams, to enable ultra-low-latency live streaming at a global scale.

The dashboard and API can be reached at https://bintu.nanocosmos.de . 

# What do I need?

You need a bintu account, based on our trial or a paid plan. 
You also need a live encoder, currently based on RTMP/H264/AAC.
Live playback will be supported by using our built-in H5Live Player.
By using our nanoStream Webcaster solution, you can directly start live streaming without any additional soft- or hardware, plugin-free in all browsers.

* [Homepage: Overview and Plans](https://www.nanocosmos.de/v6/cloud)
* [Introduction](cloud_introduction)
* [Getting Started with bintu](cloud_getting_started)


# bintu dashboard / main api entry point

https://bintu.nanocosmos.de/

>All URLs can both be used in a web browser, and by using REST API calls.

The dashboard and REST API have the same URL formats.
When using bintu via your web browser, the dashboard is shown.
When using the REST API, JSON objects are used.

# bintu rest api documentation

https://bintu.nanocosmos.de/doc/

# Examples

## Get latest live stream

```
curl -X GET "https://bintu.nanocosmos.de/stream?quantity=1" \
-H 'content-type: application/json' \
-H 'x-bintu-apikey: YOUR_BINTU_API_KEY' 
```

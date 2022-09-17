---
id: bintu_api
title: nanoStream Cloud - bintu
sidebar_label: bintu api
---

# What is bintu?

bintu is the stream management dashboard and API for nanoStream Cloud and CDN. By using bintu, you can create and manage your live streams, to enable ultra-low-latency live streaming at a global scale.

The dashboard can be reached at 

https://dashboard.nanostream.cloud

# What do I need?

You need a bintu account, based on our trial or a paid plan. 
You also need a live encoder, currently based on RTMP, SRT, WHIP applications or WebRTC in the browser.
Live playback will be supported by using our built-in nanoPlayer which you can easily embed into your own applications.

* [Homepage: Overview and Plans](https://www.nanocosmos.de/cloud)
* [Introduction](cloud_introduction)
* [Getting Started with bintu](cloud_getting_started)

# bintu REST API 

- API Entry point: https://bintu.nanocosmos.de/

- Documentation: https://doc.pages.nanocosmos.de/bintuapi-docs/

# Examples

## Get latest live stream

### curl command line 

```
curl -X GET "https://bintu.nanocosmos.de/stream?quantity=1" \
-H 'content-type: application/json' \
-H 'x-bintu-apikey: YOUR_BINTU_API_KEY' 
```

### Javascript

```
    fetch("https:bintu.nanocosmos.de/stream?quantity=1", {
        "headers": { "x-bintu-apikey": BINTU_API_KEY }, "method": "GET",
    }).then((response) => response.json())
```

## Create MBR/ABR Stream including live transcoding

### curl command line

```
curl 'https://bintu.nanocosmos.de/stream' \
  -H 'content-type: application/json' \
  -H 'accept: application/json' \
  -H 'x-bintu-apikey: YOUR_BINTU_API_KEY' 
  --data-raw '{"transcodes":[{"profile":"vtrans2-852x480x800x25","tags":[]},{"profile":"vtrans2-640x360x400x25","tags":[]}]}' \
```

### Javascript

```
    fetch("https://bintu.nanocosmos.de/stream", {
        "headers": { "x-bintu-apikey": BINTU_API_KEY }, "method": "POST",
        "body": JSON.stringify({"transcodes":[{"profile":"vtrans2-852x480x800x25","tags":[]},{"profile":"vtrans2-640x360x400x25","tags":[]}]}),
    })
```

Please [reach out to our support team](https://www.nanocosmos.de/support) for help in using our API !

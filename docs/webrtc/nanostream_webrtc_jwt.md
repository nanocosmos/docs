---
id: nanostream_webrtc_jwt
title: JWT
sidebar_label: JWT
---

The JWT feature enables security and transparency for your end users in a simple way.<br>
By using JWT you can omit the Bintu API key when using the Webcster API.<br>
Also JWT will contain ingest information, so your customers will not need to see ingest urls
and ingest stream names.

## About Webcaster and JWT

The Webcaster API can now utilize JWT for signing in to the servers and for sharing ingest information. Please see the following workflow on how to get started.

## Creating JWT for the Webcaster

In order to use JWT with the Webcaster you will need the follwing data:

- your bintu API key
- a stream name
- an ingest url
- an expiration date (this is optional, a JWT will expire after 1 week by default)

You can create JWT by calling the REST interface of the JWT endpoint of the Webcaster.
You will need a Bintu API key for creating token.
The endpoint needs the follwoing fields set as JSON data.

### Steps

1) Create a bintu stream

Create a bintu stream either through the bintu cloud frontend or with help of the bintu REST API.

2) Create the JWT

Use data from the previously created stream to create a JWT. The Webcaster token endpoint needs
"RTMP Ingest Streamname" and "RTMP Ingest URL" from the bintu cloud frontend.

```js
https://bintu-cloud-token.k8s-prod.nanocosmos.de/webcaster
```

```js
{
  "streamname": "YOUR_RTMP_STREAMNAME", // string
  "ingesturl": "YOUR_RTMP_INGEST_URL", // string
  "exp": UTC_TIMESTAMP // integer
}
```


3) Use the JWT in the Webcaster

## Parsing information from JWT

If you want to display information contained in a JWT you can do that by decoding the token.
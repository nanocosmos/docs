---
id: bintu_custom_webhooks
title: bintu custom web hooks
sidebar_label: bintu custom web hooks
---

It's possible to use a custom web hook for custom based authentication. 


> NOTE: using web hooks is the recommended way to protect your ingest workflow. Ask us for account upgrades to help with implementations or hosting

> NOTE: using web hooks for playback is not recommended and not always enabled. Use nanoPlayer Token Security instead.

### API 

Set the custom web hook via this api call (linux notation): 

```
curl -X PUT \
https://bintu.nanocosmos.de/organisation/webhook \
-H 'content-type: application/json' \
-H 'x-bintu-apikey: YOUR_BINTU_API_KEY' \
-d '{
    "webhook": "https://your-custom-server.com/hook"
}'
```


NOTES:

- The custom api call will be called from bintu for each on\_play, on\_publish, on\_play\_done, on\_publish\_done and on\_publish\_update webhook. 
- It's a blocking api call. You need to ensure quick response times. Long response times from the customer api server will create a delay for the time required to start a playout or publish. 
- The customer api hook needs to reply with http status code 200, otherwise the bintu api will reject this stream and it's not possible to publish or play the stream. 
- The custom api server should response with 200 to accept a stream and with 403 to reject a stream.

Bintu will send a POST request with header `Content-Type: application/x-www-form-urlencoded` and body will contain url encoded form data as in the following example:

```
call=publish&name=CD6xx-123456&type=live&app=live&addr=xxx.yyy.zzz.aaa&clientid=123456
```

**For the publish\_done webhook, the request body also contains the keys bytes\_in and bytes\_out. The unit of the values is byte.**

## Custom data

Its possible to amend this body with custom fields/data by adding the data as query parameter to the stream-name.

### Example for publish:

`rtmp://bintu-stream.nanocosmos.de:80/live/CD6xx-123456?foo=bar&batz=12345`

This stream name will result in the request body below:

```
foo=bar&batz=12345&call=publish&name=CD6xx-123456&type=live&app=live&tcurl=rtmp%3A%2F%2Fbintu-stream.nanocosmos.de%3A1935%2Flive
&addr=xxx.yyy.zzz.aaa&clientid=123456    
```    

### Example for play:

`http://demo.nanocosmos.de/nanoplayer/release/nanoplayer.html?h5live.server=bintu-play.nanocosmos.de&h5live.rtmp.url=rtmp://bintu-play.nanocosmos.de/play&h5live.rtmp.streamname=CD6xx-123456?test%3D123`

Which will result in the request body below:

```
test=123&call=play&name=CD6xx-123456&start=0&duration=0&reset=0&app=play&addr=xxx.yyy.zzz.aaa&clientid=123456    
```    

Note: you might need to url encode your parameters, e.g. `test=123` needs to be url encoded: `test%3D123`

## Parameters

- call: 'play\_done',  Webhook play, publish, play\_done, publish\_done, update\_publish
- name: 'YYstV-BVPq4', stream name
- bytes\_in: '575', Bytes, received by rtmp server
- bytes\_out: '8516372', Bytes sent by rtmp server
- addr: '17.31.43.214', Client IP Addr
- clientid: '9466245' internal client id (displayed in log and stat)
- time: '46807', number of seconds since play/publish call
- timestamp: '46805903', timestamp of the last audio/video packet sent to the client

## Available Parameters per Webhook

Webhook play:

- call
- name
- start
- duration
- app
- addr
- clientid

Webhook play\_done:

- call
- name
- bytes\_in
- bytes\_out
- app
- addr
- clientid

Webhook publish:

- call
- name
- app
- addr
- clientid

Webhook publish\_done:

- call
- name
- bytes\_in
- bytes\_out
- app
- addr
- clientid

Webhook update\_publish:

- call
- time
- timestamp
- name
- app
- addr
- clientid


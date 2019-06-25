---
id: nanoplayer_token_security
title: Secure playback with H5Live
sidebar_label: Secure playback with H5Live
---

## Encrypted playback

When using H5Live player, all playback is done with SSL-Encrypted URLs over `HTTPS`.

## Token Security for nanoStream H5Live Player

H5Live Player supports signed URLs with tokens to restrict playback to a specific time or / and domain. To use token security, you need a security enabled bintu account in nanoStream Cloud.

Please [contact us](mailto:support@nanocosmos.de) for further details.

## Signing URLs

### Step 1. Generate a record for a stream

Test data (common):

  * Stream name: your Bintu stream name as a `String`
  * Secret: your secret as a `String`

*Request*:

```bash
curl -X POST https://bintu-splay.nanocosmos.de/secure/stream -H "Content-Type: application/json" -H "X-BINTU-APIKEY: [your Bintu API key]" -d "{\"streamname\": \"[your Bintu stream name]\", \"secret\": \"[your secret]\"}"
```

### Step 2. Generate a token ...

> **Attention:**
>
> The expiration date time for the parameter `expires` is expected to be in **SECONDS**. Using milliseconds will lead to expiration dates far in the future and won't be accepted by the token generation API!

#### (a). ...with a Bintu stream name, custom tag, and an expiration date in the future

Test data (additional):

  * Expires: 1591747200 = 06/10/2020 @ 12:00am (UTC) **[expiration date and time in SECONDS in Unix time format and UTC; cannot be in the past or more than 365 days in the future]**

*Request:*

```bash
curl -X POST https://bintu-splay.nanocosmos.de/secure/token -H "Content-Type: application/json" -H "X-BINTU-APIKEY: [your Bintu API key]" -d "{\"streamname\": \"[your Bintu stream name]\", \"tag\": \"[your custom tag]\", \"expires\": \"1591747200\"}"
```

*Response:*

```
{
    "h5live": {
        "security": {
            "expires": "1591747200",
            "tag": "[your custom tag]",
            "token": "[your token will be here]",
            "options": 9
        }
    }
}
```

#### (b). ...with a Bintu orga hash, custom tag, and an expiration date in the future

Test data (additional):

  * Expires: 1591747200 = 06/10/2020 @ 12:00am (UTC) **[expiration date and time in SECONDS in Unix time format and UTC; cannot be in the past or more than 365 days in the future]**

*Request:*

```bash
curl -X POST https://bintu-splay.nanocosmos.de/secure/token -H "Content-Type: application/json" -H "X-BINTU-APIKEY: [your Bintu API key]" -d "{\"orga\": \"[your Bintu orga hash]\", \"tag\": \"[your custom tag]\", \"expires\": \"1591747200\"}"
```

*Response:*

```
{
    "h5live": {
        "security": {
            "expires": "1591747200",
            "tag": "[your custom tag]",
            "token": "[your token will be here]",
            "options": 25
        }
    }
}
```

#### (c). ...with a client IP

*Request:*

```bash
curl -X POST https://bintu-splay.nanocosmos.de/secure/token -H "Content-Type: application/json" -H "X-BINTU-APIKEY: [your Bintu API key]" -d "{\"streamname\": \"[your Bintu stream name]\", \"ip\": \"[your client ip]\"}"
```

*Response:*

```
{
    "h5live": {
        "security": {
            "expires": "",
            "tag": "",
            "token": "[your token will be here]",
            "options": 2
        }
    }
}
```

#### (d). ...with a custom tag and a referer

Test data (additional): 
  * Referer: `demo.nanocosmos.de`

*Request*:

```bash
curl -X POST https://bintu-splay.nanocosmos.de/secure/token -H "Content-Type: application/json" -H "X-BINTU-APIKEY: [your Bintu API key]" -d "{\"streamname\": \"[your Bintu stream name]\", \"tag\": \"[your custom tag]\", \"referer\": \"demo.nanocosmos.de\"}"
```

*Response*:

```
{
    "h5live": {
        "security": {
            "expires": "",
            "tag": "[your custom tag]",
            "token": "[your token will be here]",
            "options": 12
        }
    }
}
```

## Verifying playbacks

Playback url - you have to replace the highlighted parameter values with your specific values:

```
https://demo.nanocosmos.de/nanoplayer/release/nanoplayer.html?h5live.server.websocket=wss://bintu-splay.nanocosmos.de/h5live/authstream&h5live.server.hls=https://bintu-splay.nanocosmos.de/h5live/authhttp/playlist.m3u8&h5live.rtmp.url=rtmp://bintu-splay.nanocosmos.de/splay&h5live.rtmp.streamname=**[your Bintu stream name]**&h5live.security.expires=**[expires from response]**&h5live.security.tag=**[tag from response]**&h5live.security.token=**[token from response]**&h5live.security.options=**[options from response]**
```

>**Explanation:**
  * Step 2 (a): the URL hasn’t expired yet, so the playback works for a particular stream.
  * Step 2 (b): the URL hasn’t expired yet, so the playback works for all the stream for a particular Bintu orga hash.
  * Step 2 (c): the playback only works for a specified client ip.
  * Step 2 (d): the referrer is demo.nanocosmos.de, so the playback works.

To verify that the playback doesn't work with an incorrect referrer, 
copy the code snippet generated on the link above to an `.html` file on a different domain.
Try to playback the stream from the newly created web page.

>**Explanation:** 
> The referrer is not `demo.nanocosmos.de`, so the playback doesn’t work.
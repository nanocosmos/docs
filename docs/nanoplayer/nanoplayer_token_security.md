---
id: nanoplayer_token_security
title: Secure playback with H5Live
sidebar_label: Secure playback with H5Live
---

## Encrypted playback

When using H5Live player, all playback is done with SSL-Encrypted URLs over `HTTPS`.

## Token Security for nanoStream H5Live Player

H5Live Player supports signed URLs with tokens to restrict playback to a specific time or / and domain. To use token security, you need a security enabled Bintu account in nanoStream Cloud.

Please [contact us](mailto:support@nanocosmos.de) for further details.



## Signing URLs

### Available Parameters

- `expires`: Expiration date in seconds as [Unix time format](https://en.wikipedia.org/wiki/Unix_time). The token will be only valid until the given expiration date. A token is only validated when a stream playback is started or a reconnect happens. So if there is no reconnect, the stream playback continues even if the token expires during the playback.
- `referer`: A domain name. Can be used to restrict a token to a specific domain, e.g. `demo.nanocosmos.de`. Notice that wildcards (`*`) are currently not supported.
- `tag`: A tag is just a custom string which will be included into a token. It is a customer's responsibility to manage the tags included into the tokens. We do not store them anywhere on our side.
  - Sample use case: track which tokens were generated for a customer ID
- `Bintu stream name`: The stream name, which is managed by [Bintu](../cloud/bintu_api.md#multi-stream-configuration).
- `Bintu orga hash`: The hash of your [Bintu](../cloud/bintu_api organization. It is possible to generate a token which is valid for all streams of an organization.

### Generate a token ...

> **Attention:**
>
> The expiration date time for the parameter `expires` is expected to be in **SECONDS**. Using milliseconds will lead to expiration dates far in the future and won't be accepted by the token generation API!

### (a) ...with a Bintu stream name, custom tag, and an expiration date in the future

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

### (b) ...with a Bintu orga hash, custom tag, and an expiration date in the future

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

### (c) ...with a client IP

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

### (d) ...with a custom tag and a referer

Test data (additional): 
  * Referer: <pre><code>demo.nanocosmos.de [<b>a valid referer is a domain name which meets the requirement below</b>]</pre></code>

Referer requirements:
- The full domain name may not exceed the length of 253 characters (including delimiting dots, but not a trailing dot) in its textual representation.
- The domain name part may contain from 1 to 63 characters.
- The domain name may contain: a-z | A-Z | 0-9, periods (.), and hyphens (-).
- The domain name may have a trailing period (.), the root domain.
- The domain name should not start or end with a hyphen (-).
- The top-level domain (TLD) should not include digits only.

Valid referers (examples):
- nanocosmos.de
- demo.nanocosmos.de
- demo-nanocosmos123.de

Invalid referers (examples):
- https://demo.nanocosmos.de - Cannot include a protocol
- nanocosmos.de/nanoplayer - Cannot include a resource ID (“/nanoplayer”)
- nanocosmos - Must include a TLD

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

To test that a token works as expected you can either configure the token parameters in the [player configuration](nanoplayer_feature_stream_switching.md#single-stream-configuration):

```
"security": {
    "expires": "[your expire date]",
    "tag": "[your custom tag]",
    "token": "[your token]",
    "options": [your option]
}
```

or use URL parameters - you have to replace the highlighted parameter values with your specific values:

<pre><code>https://demo.nanocosmos.de/nanoplayer/release/nanoplayer.html?h5live.server.websocket=wss://bintu-splay.nanocosmos.de/h5live/authstream&h5live.server.hls=https://bintu-splay.nanocosmos.de/h5live/authhttp/playlist.m3u8&h5live.rtmp.url=rtmp://bintu-splay.nanocosmos.de/splay&h5live.rtmp.streamname=<b>[your Bintu stream name]</b>&h5live.security.expires=<b>[expires from response]</b>&h5live.security.tag=<b>[tag from response]</b>&h5live.security.token=<b>[token from response]</b>&h5live.security.options=<b>[options from response]</b></pre></code>

>**Explanation:**
> * Step 2 (a): the URL hasn’t expired yet, so the playback works for a particular stream.
> * Step 2 (b): the URL hasn’t expired yet, so the playback works for all the stream for a particular Bintu orga hash.
> * Step 2 (c): the playback only works for a specified client ip.
> * Step 2 (d): the referrer is demo.nanocosmos.de, so the playback works.

To verify that the playback doesn't work with an incorrect referrer, 
copy the H5Live player code snippet to an `.html` file on a different domain.
Try to playback the stream from the newly created web page.

>**Explanation:** 
> The referrer is not `demo.nanocosmos.de`, so the playback doesn’t work.

## Update secure tokens during playback

With the new H5Live stream configuration (`config."source"."entries": {}`) it is also possible to update an expiring secure token for a client, with a new token, during the playback of the stream.
It is only required to update the source object of the player with the method `updateSource` as described in [nanoStream H5Live Player updateSource API](nanoplayer/nanoplayer_update_source.md).
The stream information like the h5live streamname remains the same, only the object `h5live.security` has to be updated.

## Using secure tokens for ABR

If secure playback should be used for an ABR multi-stream configuration, a secure token has to be generated for each stream independently. That means that the object `h5live.security` has to be set for each entry. The configuration of multiple streams/entries is described in detail in [Multi Stream Configuration](nanoplayer_feature_stream_switching.md#multi-stream-configuration).

E.g. for three streams the security object has to be configured three times with a separate token for each stream.
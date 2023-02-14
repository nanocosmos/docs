---
id: nanoplayer_feature_security_sts
title: Secure playback with STS tokens
---

## Signing URLs

### Available Parameters

- `expires`: Expiration date in seconds as [Unix time format](https://en.wikipedia.org/wiki/Unix_time). The token will be only valid until the given expiration date. A token is only validated when a stream playback is started or a reconnect happens. So if there is no reconnect, the stream playback continues even if the token expires during the playback.
- `referer`: A domain name. Can be used to restrict a token to a specific domain, e.g. `demo.nanocosmos.de`. Notice that wildcards (`*`) are currently not supported.
- `tag`: A tag is just a custom string which will be included into a token. It is a customer's responsibility to manage the tags included into the tokens. We do not store them anywhere on our side.
  - Sample use case: track which tokens were generated for a customer ID
- `Bintu stream name`: The stream name, which is managed by [Bintu](../cloud/bintu_api.md).
- `Bintu orga hash`: The hash of your [Bintu](../cloud/bintu_api.md) organization. It is possible to generate a token which is valid for all streams of an organization.

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

```json
{
    "h5live": {
        "security": {
            "expires": "1591747200",
            "tag": "[your custom tag]",
            "token": "[your token will be here]",
            "options": "9"
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

```json
{
    "h5live": {
        "security": {
            "expires": "1591747200",
            "tag": "[your custom tag]",
            "token": "[your token will be here]",
            "options": "25"
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

```json
{
    "h5live": {
        "security": {
            "expires": "",
            "tag": "",
            "token": "[your token will be here]",
            "options": "2"
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

```json
{
    "h5live": {
        "security": {
            "expires": "",
            "tag": "[your custom tag]",
            "token": "[your token will be here]",
            "options": "12"
        }
    }
}
```

## Verifying playbacks

To test that a token works as expected you can either configure the token parameters in the [player configuration](nanoplayer_feature_stream_switching.md#single-stream-configuration):

```js
"security": {
    "expires": "[your expire date]",
    "tag": "[your custom tag]",
    "token": "[your token]",
    "options": "[your option]"
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

## Integrating secure H5Live player configuration with STS token

Here are example code snippets to test the H5Live player with secure tokens.

> **Note:** 
>
> Refer to the detailed example code in [Embedding H5Live player on your own web page](nanoplayer_getting_started.md) and modify the relevant sections to include playback security.


```html
<div id="playerDiv"></div>
<script src="https://demo.nanocosmos.de/nanoplayer/api/release/nanoplayer.4.min.js?20200806"></script>
<script>
var player;
var streamName = "XXXXX-YYYYY"; // your stream name (NOT the bintu stream ID)
var config = {
    "source": {
        "entries": [
            {
                "h5live": {
                    "rtmp": {
                        "url": "rtmp://bintu-splay.nanocosmos.de/splay",
                        "streamname": streamName
                    },
                    "server": {
                        "websocket": "wss://bintu-h5live-secure.nanocosmos.de/h5live/authstream",
                        "hls": "https://bintu-h5live-secure.nanocosmos.de/h5live/authhttp/playlist.m3u8"
                    },
                    "security": {
                        "expires": "[your expiry date]",
                        "tag": "[your custom tag]",
                        "token": "[your token]",
                        "options": "[your option]"             
                    }                    
                }                
            }
        ]
    },
    "playback": {
        "autoplay": true,
        "automute": true,
        "muted": true
    },
    "style": {
        "displayMutedAutoplay": true
    }
};
document.addEventListener('DOMContentLoaded', function () {
    player = new NanoPlayer("playerDiv");
    player.setup(config).then(function (config) {
        console.log("setup success");
        console.log("config: " + JSON.stringify(config, undefined, 4));
    }, function (error) {
        alert(error.message);
    });
});
</script>
```


## Update secure tokens during playback

It is also possible to update an expiring secure token for a client, with a new token, during the playback of the stream via the [updateSource](nanoplayer_update_source.md/) method.
The `updateSource` method always expects a new source object as a parameter. As you may notice this object is similar to the structure of the config object you are using to set up the player.

If you are using the: 
- [new single / multi stream configuration notation](nanoplayer_feature_stream_switching.md/#example-new-single-stream-configuration):
    only change the `security` object inside the desired `entry` object (e.g. for the first entry: `config.source.entries[0].h5live.security = { YOUR CHANGED SECURITY DETAILS FOR FIRST ENTRY }`) 
- [old single configuration notation](nanoplayer_feature_stream_switching.md/#example-old-single-stream-configuration-deprecated): only change the `security` object inside the `h5live` object (`config.source.h5live.security = { YOUR CHANGED SECURITY DETAILS }`) 

You can leave the rest of the stream information unchanged. After updating the local config object you need to call the `updateSource` method with the new source (`config.source`) as a parameter to replace the existing source inside the player.
<br>

More detailed information can be found in the [nanoPlayer API](nanoplayer_api.md/#nanoplayerupdatesourcesource-⇒-codepromiseltconfigerrorgtcode) or in the [updateSource feature description](nanoplayer_update_source.md/).

<br>

## Using secure tokens for ABR

If secure playback should be used for an ABR multi-stream configuration, a secure token has to be generated for **each stream independently**. That means that the `security` object has to be set for each entry (e.g. for the first entry: `config.source.entries[0].h5live.security = { SECURITY DETAILS FOR FIRST ENTRY }`). The configuration of multiple streams/entries with ABR and secure tokens is described [here](nanoplayer_feature_stream_switching.md/#example-multi-stream-configuration-with-abr-and-playback-security).

> **Important:** 
>
> E.g. for **three streams** the security object has to be configured **three times** with a **separate token for each stream**.

---
id: nanoplayer_feature_security_jwt
title: Secure playback with JSON Web Token (JWT)
---

Since **nanoStream H5Live Player Version 4.18.0** it is possible to use JSON Web Token (JWT) for a secure playback for all use cases. It can be applied with the `entries` configuration and with the `group` configuration. Contrary to the STS secure configuration, there can be single JWT token for all streams within the stream group. It is now easier than ever to use live transcoding and ABR with ultra-low-latency live streaming.

## How to create a JSON Web Token for secure playback in the Cloud Dashboard

Since version 3 of the nanoStream Cloud Dashboard it is supported to create JSON Web Token for secure playback.  
Dashboard URL: https://dashboard.nanostream.cloud 

There are 2 locations in the dashboard where tokens can be created 
* via the `Secure Playback Token` item in the sidebar 
* via the `Create new token` button in the stream overview 

## How to create JSON Web Token for secure playback via API

### Request URL and method
* URL : `https://token.nanostream.cloud/api/v1/splay` 
* Method: `POST`

### HTTP request header 
* `content-type` : `application/json` 
* Authentication via bintu API key or bintu token 
  * `X-BINTU-APIKEY` : Your API key. Can be obtained from the nanoStream Cloud dashboard. 
  * `X-BINTU-TOKEN` : Your bintu token. 
  
### HTTP request body 
* Format: JSON object containing the following fields 

#### Stream group id, stream names or entire organisation 

* There are 3 options available for identifying the streams included in the token 
* One of the options must be included 

* a) Create token for an entire stream group 
  * Key: `groupid` 
  * Value: string, bintu streamgroup id 
  * Example: `"groupid": "xxxxxxxx-zzzz-yyy-aaaa-aaabbbcccddd"` 

* b) Create token for one or more stream names 
  * Key: `streams` 
  * Value: array, containing one or more stream names 
  * Example: `"streams": ["XXXXX-YYYY1","XXXXX-YYYY2","XXXXX-YYYY3"]`

* c) Create token for all streams of your organisation 
  * Key: `orgawide` 
  * Value: boolean, true 
  * Example: `"orgawide": true` 

#### Time range restrictions 

* Start time 
  * The parameter nbf stands for NotBefore and is the time in the future when the token becomes valid. It is not possible to use the token before this time is reached. 
  * optional 
  * Key: `nbf` 
  * Value: number, UNIX timestamp in seconds 
  * Example: `"nbf": 1686900000` 

* End time 
  * optional 
  * The parameter exp stands for expiration and is the time at which the token looses its validity. After the expiration, the token can no longer be used. 
  * Key: `exp` 
  * Value: number, UNIX timestamp in seconds 
  * Example: `"exp": 1686903652` 

#### Web application domain name/referer restriction 

* Web application domain 
  * optional 
  * Key: `domain` 
  * Value: string, domain name 
  * Example: `"domain": "example.domain.com"`
  
#### IP address restriction 
  
* IP address
  * optional 
  * Key: `ip`
  * Value: string, IP address 
  * Example: `"ip": "123.45.67.89"` 

#### Tag 

* Tag 
  * optional 
  * Key: `tag`
  * Value: string, tag 
  * Example: `"tag": "table 7"` 
  
#### User identifier 

* User 
  * optional 
  * Key: `user`
  * Value: string, user id, name or alias 
  * Example: `"user": "aaa-bbb-ccc-ddd"` 

#### Example of a complete JSON object

```
{
  "groupid": "xxxxxxxx-zzzz-yyy-aaaa-aaabbbcccddd",
  "exp": 1686903652,
  "domain": "example.domain.com",
  "ip": "123.45.67.89",
  "tag": "table 7",
  "user": "aaa-bbb-ccc-ddd"
}
```

### HTTP response 

* Content type: `application/json; charset=utf-8` 

#### HTTP response codes 

* `200`: success 
  * example body: `{"success": true,"data": {"token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Im5hbm9jb3Ntb3MifQ..."}}` 
* `400`: parameter required 
  * example body: `{"success": false,"errorCode": 1000,"message": "Parameter required: ..."}` 
* `403`: forbidden 
  * example body: `{"success": false,"errorCode": 1001,"message": "Provided APIKey is not valid"}`

## How to verify JSON Web Token for secure playback via API

### Request URL and method 

* URL : `https://token.nanostream.cloud/api/v1/splay/verify` 
* Method: `POST`

### HTTP request header 

* `content-type` : `application/json`
  
### HTTP request body 

* Format: JSON object containing the following fields 
* Token 
  * Key: `token` 
  * Value: string, JSON Web Token
* Example body: `{"token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Im5hbm9jb3Ntb3MifQ..."}`

### HTTP response 

* Content type: `application/json; charset=utf-8`

#### HTTP response codes 

* `200`: success, valid token
  * example body: `{"success": true, "data": {"token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Im5hbm9jb3Ntb3MifQ..."}}`
* `403`: error, invalid token
  * example body: `{"success": false, "errorCode": 1002,"message": "jwt expired"}`

## How to integrate secure H5Live player configuration with JWT

**Adding the secure `stream group` to the config**

While passing the `group` object with nested `'id' : 'your_stream_group_id'` in the `source`, in case of a secure stream group, add `security` with JSON Web Token (JWT) `'jwtoken' : 'your_token'`.

#### JSON representation with stream group
```json
'config': {
    'source': {
        'group': {
            'id': 'xxxxxxxx-zzzz-yyy-aaaa-aaabbbcccddd', // your stream group id
            'security': {
                'jwtoken': 'xxx' // your JSON Web Token
            },
        },
        ...
    },
    ...
}
```

#### Config example with stream group configuration

```javascript
var config = {
    "source": {
        "group": {
            "id": "xxxxxxxx-zzzz-yyy-aaaa-aaabbbcccddd", // your stream group id
            "security": {
                "jwtoken": "xxx" // your JSON Web Token
            },
        },
        ...
    },
    ...
};
```

#### Config example with entries configuration

```javascript
var config = {
    "source": {
        "entries": [
            {
                "h5live": {
                    "rtmp": {
                        "url": "rtmp://bintu-splay.nanocosmos.de/splay",
                        "streamname": 'XXXXX-YYYYY' // your streamname
                    },
                    "server": {
                        "websocket": "wss://bintu-h5live-secure.nanocosmos.de/h5live/authstream",
                        "hls": "https://bintu-h5live-secure.nanocosmos.de/h5live/authhttp/playlist.m3u8"
                    },
                    "security": {
                        "jwtoken": "xxx" // your JSON Web Token
                    }                    
                }                
            }
        ]
        ...
    },
    ...
};
```

Here are example code snippets to test the H5Live player with secure tokens.

> **Note:** 
>
> Refer to the detailed example code in [Embedding H5Live player on your own web page](nanoplayer_getting_started.md) and modify the relevant sections to include playback security.

### On a web page

```html
<div id="playerDiv"></div>
<script src="https://demo.nanocosmos.de/nanoplayer/api/release/nanoplayer.4.min.js"></script>
<script>
var player;
var config = {
    "source": {
       "group": {
            "id": "xxxxxxxx-zzzz-yyy-aaaa-aaabbbcccddd", // your stream group id
            "security": {
                "jwtoken": "xxx" // your JSON Web Token
            },
        },
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
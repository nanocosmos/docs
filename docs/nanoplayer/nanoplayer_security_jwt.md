---
id: nanoplayer_feature_security_jwt
title: Secure playback with JSON Web Token (JWT)
---

Since **nanoStream H5Live Player Version 4.18.0** it is possible to use JSON Web Token (JWT) for a secure playback for all use cases. It can be applied with the `entries` configuration and with the `group` configuration. Contrary to the STS secure configuration, there can be single JWT token for all streams within the stream group.

## How to create JSON Web Token

//TODO

## How to verify JSON Web Token

//TODO

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
> Refer to the detailed example code in [Integrating H5Live player on your own web page](nanoplayer_getting_started.md) and modify the relevant sections to include playback security.

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
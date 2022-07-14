---
id: nanoplayer_feature_source_defaults
title: Source defaults
sidebar_label: Source defaults

---

## Using source defaults with standard nanoStream Cloud

Introduced in **nanoStream H5Live Player Version 4.13.0**, source defaults make the configuration easier. In prior versions the configuration via RTMP url and stream name required the definition of `h5live.server` and `h5live.rtmp.url`. If `source.defaults.service` is set, the `h5live.server` object and the `h5live.rtmp.url` in each entry can be omitted now. In this case defaults will be applied internally. Values for `h5live.server` and/or `h5live.rtmp.url` that are defined explicitly in a stream entry have priority.   

Assign `'bintu'` to `defaults.service` for using the standard nanoStream Cloud.  

The source defaults support both: standard and secure stream playback. 

Additionally, it is not mutually exclusive with custom server/rtmp - setting the defaults service does not overwrite explicitly defined values for `h5live.server` or `h5live.rtmp.url`. In a nutshell, in case some value is missing in i.e. `h5live.server` object, the default one is used in this place but without interfering with other parameters that were given.

**Adding the `defaults.service` to the config**

At the moment the available service is `'bintu'` for using the standard nanoStream Cloud. Pass the `defaults` object with nested `'service' : 'bintu'` in the `source` and that's all you need to do:

```
'config': {
    'source': {
        'defaults': {
            'service': 'bintu'
        },
        ...
    },
    ...
}
```

#### Config example with service defaults: 
```javascript
var config = {
        "source": {
            "defaults": {
                "service": "bintu"
            },
            "entries": [
                    {
                        "h5live": {
                             // your rtmp streamname
                            "rtmp": {
                                "streamname": "XXXXX-YYYYY"
                            }
                        }
                    }
            ]
        }
    };
```

#### Config example without service defaults: 
```javascript
var config = {
        "source": {
            "entries": [
                    {
                        "h5live": {
                             // your rtmp stream
                            "rtmp": {
                                "url": "rtmp://bintu-play.nanocosmos.de/play",
                                "streamname": "XXXXX-YYYYY"
                            },
                            "server": {
                                "websocket": "wss://bintu-h5live.nanocosmos.de:443/h5live/stream.mp4",
                                "hls": "https://bintu-h5live.nanocosmos.de:443/h5live/http/playlist.m3u8",
                                "progressive": "https://bintu-h5live.nanocosmos.de:443/h5live/http/stream.mp4"
                            }
                        }
                    }
            ]
        }
    };
```

**Using source defaults in combination with custom server or RTMP urls**

Of course it is possible. The service works like a simplified backup for your configuration.
Default service fills up gaps for params that were not given, however, it doesn't overwrite already passed values of your i.e. server or rtmp.

#### Config example using service defaults and custom RTMP urls: 
```javascript
var config = {
        "source": {
            "defaults": {
                "service": "bintu"
            },
            "entries": [
                    {
                        "h5live": {
                             // your rtmp stream
                            "rtmp": {
                                "url": "rtmp://[your_path]",
                                "streamname": "XXXXX-YYYYY"
                            }
                        }
                    }
            ]
        }
    };
```

#### Config example using service defaults and custom server urls: 
```javascript
var config = {
        "source": {
            "defaults": {
                "service": "bintu"
            },
            "entries": [
                    {
                        "h5live": {
                             // your rtmp stream
                            "rtmp": {
                                "streamname": "XXXXX-YYYYY"
                             },
                            "server": {
                                "websocket": "wss://[your_path]",
                                "hls": "https://[your_path]",
                                "progressive": "https://[your_path]"
                            }
                        }
                    }
            ]
        }
    };
```


**Applying a custom h5live server domain**

Introduced in **nanoStream H5Live Player Version 4.16.0** the general h5live server domain makes the `source.defaults` and `bintu.streamid` configuration more flexible. These configurations are using standard geo-loadbalanced domains by default. Due to the fact, that general server domain has the highest priority, it will override (modify) all h5live server domains. To use it, it is necessary to add `config.source.general.serverDomain` with its value, i.e `bintu-play-eu.nanocosmos.de`. Please find the list here: [nanoStream Cloud Public Standard and geo-loadbalanced URLs](https://docs.nanocosmos.de/docs/cloud/support#geo-region-override).


#### Config example using service defaults, custom h5live server domain and RTMP streamname: 
```javascript
var config = {
        "source": {
            "defaults": {
                "service": "bintu"
            },
            "general": {
                "serverDomain": "bintu-play-eu.nanocosmos.de"
            },
            "entries": [
                {
                    "h5live": {
                        // your rtmp stream
                        "rtmp": {
                            "streamname": "XXXXX-YYYYY"
                        }
                    }
                }
            ]
        }
    };
```

#### Config example using custom h5live server domain and bintu stream id: 
```javascript
var config = {
        "source": {
            "general": {
                "serverDomain": "bintu-play-eu.nanocosmos.de"
            },
            "entries": [
                {
                    // your bintu stream id
                    "bintu": {
                        "streamid": "XXXX-YYYY-ZZZZ-AAAA-BBBB"
                    }
                }
            ]
        }
    };
```

### More about the player configuration

Please check examples on how to configure the player at the [Getting started](https://docs.nanocosmos.de/docs/nanoplayer/nanoplayer_getting_started/) section.
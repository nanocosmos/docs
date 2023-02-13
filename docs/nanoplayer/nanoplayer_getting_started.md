---
id: nanoplayer_getting_started
title: Getting started
sidebar_label: Getting started
---

## Embedding H5Live player on your own web page

There are a few options when it comes to implementing H5Live player on your web page depending on your needs, we will walk you through each of them.

**Basically, there are 4 options for configuration:**

 1. [**Configuration with bintu stream group (since v4.18.0)**](#option-1-configuration-with-bintu-stream_group)
 2. [**Simple configuration with RTMP streamname (since v4.13.0)**](#option-2-simple-configuration-with-RTMP-streamname)
 3. [**Custom configuration with RTMP streamname**](#option-3-custom-configuration-with-RTMP-streamname)
 4. [**Configuration with bintu stream id**](#option-4-configuration-with-bintu-stream-id)

### Option 1: Configuration with bintu stream group

Bintu stream group configuration was introduced in **nanoStream H5Live Player Version 4.18.0** and is available a single and multiple streams. It is the easiest player configuration available especially for ABR setup.
For more than one stream it is necessary to add a `'startIndex'` or `'group.startQuality'`. 
More information about stream group configuration, can be found in the feature description: [Stream group configuration](https://docs.nanocosmos.de/docs/nanoplayer/nanoplayer_feature_stream_group_configuration)

```html
<div id='playerDiv'></div>
<script src='https://demo.nanocosmos.de/nanoplayer/api/release/nanoplayer.4.18.0.min.js'></script>
<script>
var player;
var config = {
   'source': {
        'group': {
            'id': 'xxxxxxxx-zzzz-yyy-aaaa-aaabbbcccddd', // your streamgroup id
            'security': {
                'jwtoken': 'xxx' // your security token if applicable
            },
            'apiurl': 'https://bintu.nanocosmos.de', // optional
            'startQuality': 'medium' // optional
        },
         "options": {
            "adaption": {
                "rule": "deviationOfMean2" // enable ABR
            },
            "switch": {
                'method': 'server',
                'pauseOnError': false,
                'forcePlay': true,
                'fastStart': false,
                'timeout': 10,
            }
        },
    },
    'playback': {
        'autoplay': true,
        'automute': true,
        'muted': false
    }
};
document.addEventListener('DOMContentLoaded', function () {
    player = new NanoPlayer('playerDiv');
    player.setup(config).then(function (config) {
        console.log('setup success');
        console.log('config: ' + JSON.stringify(config, undefined, 4));
    }, function (error) {
        alert(error.message);
    });
});
</script>
```

### Option 2: simple configuration with RTMP streamname

Using source defaults with standard nanoStream Cloud was introduced in **nanoStream H5Live Player Version 4.13.0**. By passing `defaults.service` with the value `'bintu'`, the bintu defaults values for `h5live.server` and `h5live.rtmp.url` will be applied which means that adding it on your side is not needed.

```html
<div id='playerDiv'></div>
<script src='https://demo.nanocosmos.de/nanoplayer/api/release/nanoplayer.4.min.js'></script>
<script>
var player;
var config = {
   'source': {
            'defaults': {
                'service': 'bintu'
            },
            'entries': [
                    {
                        'h5live': {
                            'rtmp': {
                                'streamname': 'XXXXX-YYYYY' // your rtmp streamname
                            }
                        }
                    }
            ]
        },
    'playback': {
        'autoplay': true,
        'automute': true,
        'muted': false
    },
};
document.addEventListener('DOMContentLoaded', function () {
    player = new NanoPlayer('playerDiv');
    player.setup(config).then(function (config) {
        console.log('setup success');
        console.log('config: ' + JSON.stringify(config, undefined, 4));
    }, function (error) {
        alert(error.message);
    });
});
</script>
```

The configuration with `source.defaults.service` allows for combinations with custom server or RTMP urls. More examples and full documentation of the source defaults feature can be found here: [Source defaults](https://docs.nanocosmos.de/docs/nanoplayer/nanoplayer_feature_source_defaults).

### Option 3: custom configuration with RTMP streamname

In most cases the simple RTMP configuration is sufficient but in case of enhanced flexibility needed or usage of older version of nanoplayer (until 4.13.0), this is a recommended configuration.

```html
<div id='playerDiv'></div>
<script src='https://demo.nanocosmos.de/nanoplayer/api/release/nanoplayer.4.min.js'></script>
<script>
var player;
var streamName = 'XXXXX-YYYYY'; // your bintu stream name (not the stream ID)
var config = {
    'source': {
        'entries': [
            {
                'h5live': {
                    'rtmp': {
                        'url': 'rtmp://bintu-play.nanocosmos.de:80/play',
                        'streamname': streamName
                    },
                    'server': {
                        'websocket': 'wss://bintu-h5live.nanocosmos.de:443/h5live/stream/stream.mp4',
                        'hls': 'https://bintu-h5live.nanocosmos.de:443/h5live/http/playlist.m3u8',
                        'progressive': 'https://bintu-h5live.nanocosmos.de:443/h5live/http/stream.mp4'
                    }
                }
            }
        ]
    },
    'playback': {
        'autoplay': true,
        'automute': true,
        'muted': false
    },
};
document.addEventListener('DOMContentLoaded', function () {
    player = new NanoPlayer('playerDiv');
    player.setup(config).then(function (config) {
        console.log('setup success');
        console.log('config: ' + JSON.stringify(config, undefined, 4));
    }, function (error) {
        alert(error.message);
    });
});
</script>
```

### Option 4: configuration with bintu stream id

```html
<div id='playerDiv'></div>
<script src='https://demo.nanocosmos.de/nanoplayer/api/release/nanoplayer.4.min.js'></script>
<script>
var player;
var streamId = '1111-2222-3333-4444-5555'; // your bintu stream ID (not the stream name)
var config = {
    'source': {
        'entries': [
            {
                'bintu': {
                    'streamid': streamId
                }
            }
        ]
    },
    'playback': {
        'autoplay': true,
        'automute': true,
        'muted': false
    }
};
document.addEventListener('DOMContentLoaded', function () {
    player = new NanoPlayer('playerDiv');
    player.setup(config).then(function (config) {
        console.log('setup success');
        console.log('config: ' + JSON.stringify(config, undefined, 4));
    }, function (error) {
        alert(error.message);
    });
});
</script>
```

## Frameworks

Please find more information about player integration with common web frameworks [here](https://docs.nanocosmos.de/docs/nanoplayer/nanoplayer_getting_started#frameworks)

### Vue.js

*Useful link:*

 * [GitHub repository](https://github.com/nanocosmos/nanoplayer-vuejs-sample)


Embedding the H5LivePlayer in your Vue.js project is simple:

1. Include the provided `nanoplayer.4.min.js` script within your `index.html` in your `root` directory

    ```html
    <script src='https://demo.nanocosmos.de/nanoplayer/api/release/nanoplayer.4.min.js'></script>
    ```

    Example `index.html`

    ```html
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset='utf-8'>
        <meta name='viewport' content='width=device-width,initial-scale=1.0'>
        <title>h5-live-player</title>
        <script src='https://demo.nanocosmos.de/nanoplayer/api/release/nanoplayer.4.min.js'></script>
    </head>
    <body>
        <div id='app'></div>
    </body>
    </html>
    ```

2. Create a new Vue Component with a simple div as a placeholder that will contain player the content.

    ```html
    <div id='playerDiv'></div>
    ```

3. Add a new variable called `config` to your `data() method` inside your component

   ```html
    <script>
    export default {
        data() {
            return {
                'config': {
                    'source': {
                        'defaults': {
                            'service': 'bintu'
                        },
                        'entries': [
                            {
                                'h5live': {
                                    'rtmp': {
                                        'streamname': 'XXXXX-YYYYY' // your rtmp streamname
                                    }
                                }
                            }
                        ]
                    },
                    'playback': {
                        'autoplay': true,
                        'automute': true,
                        'muted': false
                    }
                }
            }
        }
    }
    </script>
    ```

    > **Note:**
    >
    > Change the `bintu` `streamid` inside the `config` object to the streamid of your created live stream.
    >
    > [Here](../cloud/cloud_getting_started) you can find a guide on how to create your own livestream with `bintu.live`

4. Instantiate the NanoPlayer inside the `mounted()` lifecycle hook

    ```html
    <script>
    export default {
        data() { ... },
        mounted: function(){
            var nanoPlayer = new window.NanoPlayer('playerDiv');
            nanoPlayer.setup(this.config).then(function (config) {
                console.log('setup success');
                console.log('config: ' + JSON.stringify(config, undefined, 4));
            }, function (error) {
                alert(error.message);
            });
        }
    }
    </script>
    ```

    Now you should see the player running in your browser's window.

### React.js

*Useful links:*

 * [GitHub repository](https://github.com/nanocosmos/nanoplayer-react-sample.git)

 * [Sample app](https://demo.nanocosmos.de/nanoplayer/react/)
   
### Configuration steps

1. Import your minified nanoplayer version within your `index.html` in your `public` directory

    ```html
    <script  src='https://demo.nanocosmos.de/nanoplayer/api/release/nanoplayer.4.min.js'></script>
    ```

    Example:

    ```html
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <script src='https://demo.nanocosmos.de/nanoplayer/api/release/nanoplayer.4.min.js'></script>
        <title>H5Live Player</title>
    </head>
    <body>
        <div id='root'></div>
    </body>
    </html>
    ```

2. Create a React Component with a `div` tag, to create an entry point for the player

    ```jsx
    <div id='playerDiv' />
    ```

3. Add a `config` object to your `state`

    ```js
    let config = {
        'source': {
            'defaults': {
                'service': 'bintu'
            },
            'entries': [
                    {
                        'h5live': {
                            'rtmp': {
                                'streamname': 'XXXXX-YYYYY' // your rtmp streamname
                            }
                        }
                    }
            ]
        },
        'playback': {
            'autoplay': true,
            'automute': true,
            'muted': false
        }
    };
    ```

4. Setup the player

    ```js
    function setupNanoplayer(config) {
        var nanoPlayer = new window.NanoPlayer('playerDiv');

        nanoPlayer.setup(config).then(function (config) {
            console.log('setup success');
            console.log('config: ' + JSON.stringify(config, undefined, 4));
        }, function (error) {
            alert(error.message);
        });
    };
    ```

    - If you are using React Hooks, initialize the setup like this:

    ```jsx
    useEffect(() => {
        setupNanoplayer(config);
    }, [])
    ```

    - If you are not using React Hooks, initialize the setup like this:

    ```jsx
    componentDidMount() {
        setupNanoplayer(this.state.config);
    }
    ```

## Wordpress

1. Add a block and choose Custom HTML

2. Embed the Player

    - It is important to add a wrapper around the `playerDiv` element, otherwise you won't see the nanoStream H5Live Player

    ```html
    <script src='https://demo.nanocosmos.de/nanoplayer/api/release/nanoplayer.4.min.js'></script>
    <div style='width: 480px; height: 360px; overflow: hidden; position: absolute; margin: 0; padding: 0;'>
    <div id='playerDiv'></div>
    </div>

    <script>
            var player;
            var streamName = 'XXXXX-YYYYY'; // your bintu stream name (not the stream ID)
            var config = {
                'source': {
                    'defaults': {
                        'service': 'bintu'
                    },
                    'entries': [
                        {
                            'h5live': {
                                'rtmp': {
                                    'streamname': 'XXXXX-YYYYY' // your rtmp streamname
                                }
                            }
                        }
                    ]
                },
                'playback': {
                    'autoplay': true,
                    'automute': true,
                    'muted': false
                }
            };
            player = new NanoPlayer('playerDiv');
            player.setup(config).then(function (config) {
                console.log('setup success');
                console.log('config: ' + JSON.stringify(config, undefined, 4));
            }, function (error) {
                alert(error.message);
            });
    </script>
    ```

---
id: nanoplayer_getting_started
title: Getting started
sidebar_label: Getting started
---

## Embedding H5Live player on your own web page

There are a few options when it comes to implementing H5Live player on your web page depending on your needs, we will walk you through each of them.

Basically, there are 3 options for configuration:
* configuration via RTMP streamname
 1. simple RTMP (since v4.13.0)
 2. custom RTMP 

* configuration via bintu stream id
 3. bintu stream id

### Option 1: simple RTMP config with default service bintu

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
                             // your rtmp streamname
                            'rtmp': {
                                'streamname': 'XXXXX-YYYYY'
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


### Option 2:  custom RTMP

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

### Option 3: configuration with bintu stream id 

**Important**: replace the value of `streamid` with your own `streamiIdValue` value

   <br>

   > **Note: ** 
   >
   > If you don't know how to get your custom `streamid` click [here](../cloud/cloud_getting_started) .

```html
<div id='playerDiv'></div>
<script src='https://demo.nanocosmos.de/nanoplayer/api/release/nanoplayer.4.min.js'></script>
<script>
var player;
var streamIdValue = '1111-2222-3333-4444-5555'; // your bintu stream ID (not the stream name)
var config = {
    'source': {
        'entries': [
            {
                'bintu': {
                    'apiurl': 'https://bintu.nanocosmos.de',
                    'streamid': streamIdValue
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

A few examples of player implementation for different frameworks:

### Vue.js 

Embedding the H5LivePlayer in your Vue.js project is simple: 

1. Include the provided `nanoplayer.4.min.js` script within your `index.html` in your `root` directory

```html
<script src='https://demo.nanocosmos.de/nanoplayer/api/release/nanoplayer.4.min.js'></script>
```

<br>

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

<br>

2. Create a new Vue Component with a simple div as a placeholder that will contain player the content.

```html
<div id='playerDiv'></div>
```

<br>

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
                             // your rtmp streamname
                            'rtmp': {
                                'streamname': 'XXXXX-YYYYY'
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

<br>

> **Note:**
>
> Change the `bintu` `streamid` inside the `config` object to the streamid of your created live stream. 
>
> [Here](../cloud/cloud_getting_started) you can find a guide on how to create your own livestream with `bintu.live`

<br>

4. Instantiate the NanoPlayer inside the `mounted()` lifecycle hook 

```html
<script>
  export default {
    data() { ... },
    mounted: function(){
      var nanoPlayer = new NanoPlayer('playerDiv');
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

<br>
Now you should see the player running in your browser's window.



### React.js 

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

1. Create a React Component with a `div` tag, to create an entry point for the player

```jsx
<div id='playerDiv' />
```

2. Add a `config` object to your `state`

```js
let config = {
    'source': {
        'defaults': {
            'service': 'bintu'
        },
        'entries': [
                {
                    'h5live': {
                         // your rtmp streamname
                        'rtmp': {
                            'streamname': 'XXXXX-YYYYY'
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

3. Setup the player 

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
                             // your rtmp streamname
                            'rtmp': {
                                'streamname': 'XXXXX-YYYYY'
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

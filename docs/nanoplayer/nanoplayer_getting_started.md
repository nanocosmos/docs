---
id: nanoplayer_getting_started
title: Getting started
sidebar_label: Getting started
---

## Embedding H5Live player on your own web page

You can embed this code snippet to test the H5Live player on your page in no time. 

**Important:** replace `CUSTOM-STREAMID`  with your own `streamid`.

> **Note:** 
>
> If you don't know how to get your custom bintu.live `streamid` click [here](../../cloud/cloud_getting_started) .

```html
<div id="playerDiv"></div>
<script src="https://demo.nanocosmos.de/nanoplayer/api/release/nanoplayer.4.min.js?20200227"></script>
<script>
var player;
var config = {
    "source": {
        "bintu": {
            "apiurl": "https://bintu.nanocosmos.de",
            "streamid": "CUSTOM-STREAMID"
        }
    },
    "playback": {
        "autoplay": true,
        "automute": true,
        "muted": false,
        "forceTech": "h5live",
        "flashplayer": "//demo.nanocosmos.de/nanoplayer/nano.player.swf"
    },
    "style": {
        "controls": true
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



## Frameworks



### Vue.js 

Embedding the H5LivePlayer in your Vue.js project is simple: 

1. Include the provided `nanoplayer.4.min.js` script within your `index.html` in your `root` directory

```html
<script src="https://demo.nanocosmos.de/nanoplayer/api/release/nanoplayer.4.min.js?20200227"></script>
```

<br>

Example `index.html`

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <title>h5-live-player</title>
    <script src="https://demo.nanocosmos.de/nanoplayer/api/release/nanoplayer.4.min.js?20200227"></script>
  </head>
  <body>
    <div id="app"></div>
  </body>
</html>
```

<br>

2. Create a new Vue Component with a simple div as a placeholder that will contain player the content.

```html
<div id="playerDiv"></div>
```

<br>

3. Add a new variable called `config` to your `data() method` inside your component

   **Important**: replace `CUSTOM-STREAMID`  with your own `streamid`

   <br>

   > **Note: ** 
   >
   > If you don't know how to get your custom `streamid` click [here](../../cloud/cloud_getting_started) .

```html
<script>
    export default {
      data() {
        return {
          config: {
            source: {
              bintu: {
                  "apiurl": "https://bintu.nanocosmos.de",
                  "streamid": "CUSTOM-STREAMID"
              }
            },
            playback: {
                "autoplay": true,
                "automute": true,
                "muted": false,
                "forceTech": "h5live",
                "flashplayer": "//demo.nanocosmos.de/nanoplayer/nano.player.swf"
            },
            style: {
                "controls": true
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
> [Here](../../cloud/cloud_getting_started) you can find a guide on how to create your own livestream with `bintu.live`

<br>

4. Instantiate the NanoPlayer inside the `mounted()` lifecycle hook 

```html
<script>
  export default {
    data() { ... },
    mounted: function(){
      var nanoPlayer = new NanoPlayer("playerDiv");
      nanoPlayer.setup(this.config).then(function (config) {
          console.log("setup success");
          console.log("config: " + JSON.stringify(config, undefined, 4));
      }, function (error) {
          alert(error.message);
      });
    }
  }
</script>
```

<br>
Now you should see the player running in your browser window.



### React.js 

1. Import your minified nanoplayer version within your `index.html` in your `public` directory

```html
<script  src="https://demo.nanocosmos.de/nanoplayer/api/release/nanoplayer.4.min.js?20191114"></script>
```

Example:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <script src="https://demo.nanocosmos.de/nanoplayer/api/release/nanoplayer.4.min.js?20200326"></script>
    <title>H5Live Player</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
```

1. Create a React Component with a `div` tag, to create a entrypoint for the player

```jsx
<div id="playerDiv" />
```

2. Add a `config` object to your `state`

```js
let config = {
    source: {
        bintu: {
            "apiurl": "https://bintu.nanocosmos.de",
            "streamid": "CUSTOM-STREAMID"
        }
    },
    playback: {
        "autoplay": true,
        "automute": true,
        "muted": false,
        "forceTech": "h5live",
        "flashplayer": "//demo.nanocosmos.de/nanoplayer/nano.player.swf"
    },
    style: {
        "controls": true
    }
};
```

3. setup the player 

```js
function setupNanoplayer(config) {
    var nanoPlayer = new window.NanoPlayer("playerDiv");

    nanoPlayer.setup(config).then(function (config) {
        console.log("setup success");
        console.log("config: " + JSON.stringify(config, undefined, 4));
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

- It is important to add a wrapper around the `playerDiv` Element, otherwise you wont see the nanoStream H5Live Player

```html
<script src="https://demo.nanocosmos.de/nanoplayer/api/release/nanoplayer.4.min.js?20200302"></script>
<div style="width: 480px; height: 360px; overflow: hidden; position: absolute; margin: 0; padding: 0;>
<div id="playerDiv"></div>
</div>

<script>
        var player;
        var config = {
            source: {
                entries: [
                    {
                        index: 0,
                        label: "stream 1",
                        tag: "",
                        info: {
                            bitrate: 1500,
                            width: 1280,
                            height: 720,
                            framerate: 30
                        },
                        hls: "",
                        h5live: {
                            rtmp: {
                                // YOUR STREAMNAME HERE
                                url: "rtmp://bintu-play.nanocosmos.de/play",
                                streamname: "HX26g-NRbx9"
                            },
                            server: {
                                websocket: "wss://bintu-play.nanocosmos.de:443/h5live/stream.mp4",
                                hls: "https://bintu-play.nanocosmos.de:443/h5live/http/playlist.m3u8",
                                progressive: "https://bintu-play.nanocosmos.de:443/h5live/http/stream.mp4"
                            },
                            token: "",
                            security: {}
                        },
                        bintu: {}
                    },
                ],
            },
            playback: {
                autoplay: true,
                automute: true,
                muted: true,
                flashplayer: "https://demo.nanocosmos.de/nanoplayer/nano.player.swf"
            },
            style: {
                displayMutedAutoplay: false,
                width: "100%",
                height: "100%"
            }
        };
        player = new NanoPlayer("playerDiv");
        player.setup(config).then(function (config) {
            console.log("setup success");
            console.log("config: " + JSON.stringify(config, undefined, 4));
        }, function (error) {
            alert(error.message);
        });
</script>
```
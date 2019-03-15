---
id: nanoplayer_getting_started
title: Getting started
sidebar_label: Getting started
---

## Embedding H5Live player on your own web page

You find an embed code snippet on the demo page.

```html
<div id="playerDiv"></div>
<script src="//demo.nanocosmos.de/nanoplayer/api/release/nanoplayer.3.min.js?20170505"></script>
<script>
  var player;
  var config = {
    "source": {
 	    "h5live": {
 	      "server": {
 	        "websocket": "wss://h5live.nanocosmos.de:443/h5live/stream",
 	        "hls": "https://h5live.nanocosmos.de:443/h5live/http/playlist.m3u8",
 	        "progressive": "https://h5live.nanocosmos.de:443/h5live/http/stream.mp4"
 	      },
 	      "rtmp": {
 	        "url": "rtmp://my.server.com/live",
 	        "streamname": "myStream"
 	      }
 	    }
    },
  };
  document.addEventListener('DOMContentLoaded', function () {
    player = new NanoPlayer("playerDiv");
 	   player.setup(config).then(function (config) {
 	   }, function (error) {
 	    alert(error.message);
    });
  });
</script>
```



## Frameworks



### Vue.js 

Embedding the H5LivePlayer in your Vue.js project is simple: 

1. Include the provided `nanoplayer.3.min.js` script within your `index.html` in your `root` directory

```html
<script src="https://demo.nanocosmos.de/nanoplayer/api/release/nanoplayer.3.min.js?20190226"></script>
```

<br>

Example `index.html`

```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <title>h5-live-player</title>
    <script src="https://demo.nanocosmos.de/nanoplayer/api/release/nanoplayer.3.min.js?20190226"></script>
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

```html
<script>
    export default {
      data() {
        return {
          config: {
            source: {
              bintu: {
                  "apiurl": "https://bintu.nanocosmos.de",
                  "streamid": "45f8c052-7285-4965-9fbe-36eaeeb9387d"
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
> [Here](www.test.de) you can find a guide on how to create your own livestream with `bintu.live`

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

You can download the sample project [here](www.github.de).



------

### Angular 4

Embedding the H5LivePlayer in your Vue.js project is simple: 

1. Include the provided `nanoplayer.3.min.js` script within your `index.html` in your `root` directory

```html
<script src="https://demo.nanocosmos.de/nanoplayer/api/release/nanoplayer.3.min.js?20190226"></script>
```

<br>

Example `index.html`

```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <title>h5-live-player</title>
    <script src="https://demo.nanocosmos.de/nanoplayer/api/release/nanoplayer.3.min.js?20190226"></script>
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

```html
<script>
    export default {
      data() {
        return {
          config: {
            source: {
              bintu: {
                  "apiurl": "https://bintu.nanocosmos.de",
                  "streamid": "45f8c052-7285-4965-9fbe-36eaeeb9387d"
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
> [Here](www.test.de) you can find a guide on how to create your own livestream with `bintu.live`

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

You can download the sample project [here](www.github.de).



------

### React

Embedding the H5LivePlayer in your Vue.js project is simple: 

1. Include the provided `nanoplayer.3.min.js` script within your `index.html` in your `root` directory

```html
<script src="https://demo.nanocosmos.de/nanoplayer/api/release/nanoplayer.3.min.js?20190226"></script>

```

<br>

Example `index.html`

```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <title>h5-live-player</title>
    <script src="https://demo.nanocosmos.de/nanoplayer/api/release/nanoplayer.3.min.js?20190226"></script>
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

```html
<script>
    export default {
      data() {
        return {
          config: {
            source: {
              bintu: {
                  "apiurl": "https://bintu.nanocosmos.de",
                  "streamid": "45f8c052-7285-4965-9fbe-36eaeeb9387d"
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
> [Here](www.test.de) you can find a guide on how to create your own livestream with `bintu.live`

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

You can download the sample project [here](www.github.de).



------
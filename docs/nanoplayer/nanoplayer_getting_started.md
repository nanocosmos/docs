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
<script src="https://demo.nanocosmos.de/nanoplayer/api/release/nanoplayer.3.min.js?20190313"></script>
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

   **Important**: replace `CUSTOM-STREAMID`  with your own `streamid`

   <br>

   > **Note: ** 
   >
   > If you don't know how to get your custom `streamid` click [here](www.testing.de) .

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
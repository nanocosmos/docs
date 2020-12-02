---
id: nanoplayer_feature_fullscreen_api
title: Fullscreen API
sidebar_label: Fullscreen API
---

The **nanoStream H5Live Player Version 4.7** is introducing the new fullscreen API which enables to request and exit the player's fullscreen mode as well as listening to fullscreen changes on the application level.
<br>
<br>

> **Important:** <br>
> To start using the fullscreen API feature make sure you're using the minimum required nanoStream H5Live Player version **4.7** !

<br>

> **Important:** <br>
> Due to limitations of browser policies the fullscreen request can be rejected if not being executed in a user interaction context ! A user interaction context can be e.g. a 'click' or 'touch' event within the page.

<hr>

## Methods

### requestFullscreen

The method to request the fullscreen mode for the player. This will return a promise that will either be:

- **resolved** if the player successfully enters fullscreen mode
- **rejected** if the player could not enter the fullscreen mode. The reason can be accessed via the response object inside the catch handler (See code example)

> **Important**
> Please make sure to handle the promise as shown in the code sample below to prevent unhandled promise rejection errors. 

#### Code example: 
```javascript
// player instance of NanoPlayer
player.requestFullscreen()
   .then(function (){
       console.log('requestFullscreen resolved');
   })
   .catch(function (err) {
       // error reasons can be 'denied' or 'disabled' (e.g. in audio player mode)
       console.log('requestFullscreen rejected: ' + err.reason);
   });
```

### exitFullscreen

The method to exit the fullscreen mode for the player. This will return a promise that will either be:

- **resolved** if the player successfully exits the fullscreen mode
- **rejected** if the player could not exit the fullscreen mode. The reason can be accessed via the response object inside the catch handler (See code example).

#### Code example: 

```javascript
// player instance of NanoPlayer
player.exitFullscreen()
   .then(function (){
       console.log('exitFullscreen resolved');
   })
   .catch(function (err) {
       // error reasons can be 'denied' or 'disabled' (e.g. in audio player mode)
       console.log('exitFullscreen rejected: ' + err.reason);
   });
```

<br>

## Events

### onFullscreenChange
The fullscreen change event to pass in the `config.events` object at the setup call. This will fire if the player's fullscreen mode has changed. The fullscreen mode will be returned via the event response object inside the event handler (See code example). 

The `event.data.entered` property will either be:

- **true** if the player's fullscreen mode is currently entered
- **false** if the player's fullscreen mode is currently not entered

#### Code example: 

```javascript
// player instance of NanoPlayer
var onFullscreenChange = function (event) {
    console.log('FullscreenChange');
    if (event.data.entered === true) {
         console.log('Fullscreen Mode Entered');
    } else {
         console.log('Fullscreen Mode Exited');
    }
};
config.events.onFullscreenChange = onFullscreenChange;
player.setup(config).then(function (config) {
    console.log('setup ok with config: ' + JSON.stringify(config));
}, function (error) {
    console.log(error);
});
```

<br>

## Implementation example 

For this example there will be two additional UI elements to request and exit the fullscreen mode:
1) button (`#buttonFullscreenRequest`) that will call the `requestFullscreen` method
2) div (`#fullscreenOverlay`) that will be positioned on top of the video element. The overlay will only be visible when the player entered the fullscreen mode. This is just an example to show the `exitFullscreen` API functionality by using a custom button. 
The provided example is for testing purposes and it is not a player element. 

To try the `exitFullscreen` method with a custom button, uncomment these lines in the code example below:
```html
<!-- FULLSCREEN OVERLAY with exitFullscreen button -->
<div id="fullscreenOverlay" style="display: none;position: absolute; top: 25%; margin-left: 50%; margin-right: 50%; z-index: 3">
    <button id="buttonFullscreenExit" onclick="exitFullscreenPlayer();" style="cursor: pointer;height: 50px; width: 200px; margin-left: -50%; background-color: #f14e4e; font-size: 12px; color: #fff">Click this custom button to test exitFullscreen API!</button>
</div>
```

> **Important**
> As the default z-index of the video layer on iOS devices was set to 1 make sure to set the `z-index` of the `fullscreenOverlay` > 1.  


Make sure to replace:
1) `script src` (**LINK_TO_nanoplayer.4.7.1.min.js**)
2) `<YOUR CONFIG HERE>` with your nanoplayer config

#### Code Example
```html
<body>
	<div id="playerDiv" class="player">
        <!-- FULLSCREEN OVERLAY with exitFullscreen button -->
        <!-- uncomment to enable custom overlay with exitFullscreen button
        <div id="fullscreenOverlay" style="display: none;position: absolute; top: 25%; margin-left: 50%; margin-right: 50%; z-index: 3">
            <button id="buttonFullscreenExit" onclick="exitFullscreenPlayer();" style="cursor: pointer;height: 50px; width: 200px; margin-left: -50%; background-color: #f14e4e; font-size: 12px; color: #fff">Click this custom button to test exitFullscreen API!</button>
        </div>
        -->
	</div>
	<!-- requestFullscreen BUTTON -->
    <button id="buttonFullscreenRequest" onclick="requestFullscreenPlayer();">requestFullscreen</button>
    <script src="LINK_TO_nanoplayer.4.7.1.min.js"></script>
    <script>
        var player;
        var config = {
            // <YOUR CONFIG HERE>
            // ...
            // bind onFullscreenChange event handler
            "events": {
                "onFullscreenChange": onFullscreenChange
            }
        };

        function requestFullscreenPlayer() {
            if (player) {
                player.requestFullscreen()
                .then(function (){
                    console.log('requestFullscreen resolved');
                })
                .catch(function (err) {
                    console.log('requestFullscreen rejected: ' + err.reason);
                });
            }
        }

        function exitFullscreenPlayer () {
            if (player) {
                player.exitFullscreen()
                .then(function (){
                    console.log('exitFullscreen resolved');
                })
                .catch(function (err) {
                    console.log('exitFullscreen rejected: ' + err.reason);
                });
            }
        }

        function hideFullscreenOverlay () {
            var fullscreenOverlay = document.getElementById("fullscreenOverlay");
            if (fullscreenOverlay) {
                // hide fullscreen overlay
                fullscreenOverlay.style.display = "none";
            }
        }

        function showFullscreenOverlay () {
            var fullscreenOverlay = document.getElementById("fullscreenOverlay");
            if (fullscreenOverlay) {
                // show fullscreen overlay
                fullscreenOverlay.style.display = "block";
            }
        }

        function onFullscreenChange (event) {
            var isFullscreen = event.data.entered;
            if (isFullscreen) {
                console.log("Fullscreen mode entered")
                showFullscreenOverlay();
            } else {
                hideFullscreenOverlay();
                console.log("Fullscreen mode exited")
            }
        }

        function initPlayer () {
            player = new NanoPlayer('playerDiv');
            player.setup(config).then(function (config) {
                console.log('setup ok with config: ' + JSON.stringify(config));
            }, function (error) {
                console.log(error);
            });
        }

        document.addEventListener('DOMContentLoaded', function () {
            initPlayer();
        });
    </script>
</body>
```
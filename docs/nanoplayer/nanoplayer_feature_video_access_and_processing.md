---
id: nanoplayer_feature_video_access_and_processing
title: Video Access and Processing
sidebar_label: Video Access and Processing
---

## Video access and processing using `onActiveVideoElementChange`

Introduced in **nanoStream H5Live Player Version 4.17.0**, the new `onActiveVideoElementChange` event is providing access to the active video element. This is enabling video processing use cases such as canvas drawing, snapshoting and in similar occasions when the currently active video element is necessary. The event will be executed when the video element has been activated or changed. Find out more in our API events' section: [`onActiveVideoElementChange`](https://docs.nanocosmos.de/docs/nanoplayer/nanoplayer_api#onactivevideoelementchange).

Note: for functional reasons, on iOS there are 2 video elements. As the event will be fired always on switch/creation etc, there would be an indication which video element is currently displayed.

In case of iOS stream switching, please read more about the [stream switch feature](https://docs.nanocosmos.de/docs/nanoplayer/nanoplayer_feature_stream_switching/).

> **Important:**
> Canvas drawing might not be supported in all browsers
>   * Canvas drawing with Media Source Extensions is not supported in Safari macOS and iPadOS desktop mode (by August 2022)
>   * Experimental support behind the feature flag `Experimental MediaSource Inline Painting` has been added in Safari 15.4

### How to use `onActiveVideoElementChange` to take a snapshot

To draw/render image on the canvas or save a snapshot from the video, it is necessary to properly setup the player configuration, declare necessary variables and add functions which will get and then display the image.

1. In the html page, add the player and shapshot holder and load the player script.

    ```javascript
    <div>
        <label>Playback</label>
        <!-- the container element for the player -->
        <div id="playerDiv" style="width: 100%;padding-top: 56.25%;"></div>
        <label>Snapshot</label>
        <!-- the image element for the snapshot -->
        <img id="image"/>
    </div>
    <script type="text/javascript" src="nanoplayer.4.min.js"></script>
    ```

2. Setup the player configuration and declare necessary variables to enable the active video element feature. Due to cross-origin policies for video elements, it is required to set `'crossOrigin'` to `'anonymous'` to be able to take a snapshot.

    ```javascript
        <script type="text/javascript">
            var playerConfig = { // the basic configuration of the player
                'playback': {
                    'autoplay'    : true,
                    'automute'    : true,
                    'muted'       : false,
                    'crossOrigin' :'anonymous'
                },
                'events': {},
                'source': {
                    'defaults': {
                        'service': 'bintu'
                    },
                    'entries': [
                        {
                            'index': 0,
                            'label': 'stream 1',
                            'h5live': {
                                'rtmp': {
                                    'streamname': 'xxxx-xxxx' // your streamname
                                }
                            }
                        }
                    ]
                },
                'style': {
                    'width'                : 'auto',
                    'height'               : 'auto'
                }
            };
            var player, activeVideoElement, canvasElement, canvasContext, imgElement, snapshot; // defining the necessary variables
        </script>
    ```

3. Add functions that handle drawing the video on a canvas and convert it to an image.

    ```javascript
        <script type="text/javascript">
            function drawImageOnCanvas () { // paint the current video frame on a canvas
                if (activeVideoElement) {
                    var w, h;
                    w = activeVideoElement.clientWidth;
                    h = activeVideoElement.clientHeight;
                    canvasElement.width = w;
                    canvasElement.height = h;
                    canvasContext.drawImage(activeVideoElement, 0, 0, w, h);
                }
            }
            function getImageFromCanvas () { // get a jpeg encoded image as dataURL string from the canvas
                return canvasElement.toDataURL('image/jpeg', 1);
            }
            function showSnapshot (dataURL) { // set the dataURL string as image source
                imgElement.src = dataURL;
            }
            function takeSnapshot (){ // take the snapshot by drawing the video on a canvas, getting the image and display it in a img element
                drawImageOnCanvas();
                snapshot = getImageFromCanvas();
                showSnapshot(snapshot);
            }
        </script>
    
    ```

4. Create event handlers that connect the player to the snapshot functionality. It is essential to get the active video element reference and invalidate it on destroy. For demonstrative purposes snapshots are taken on play, on pause and when the active video element is changing.

    ```javascript
        <script type="text/javascript">
            function onActiveVideoElementChange (event) { // fires if a video element for playback will be activated or changed
                activeVideoElement = event.data.activeVideoElement; // store a reference to the active video element to be able to access it
                takeSnapshot();
            }
            function onPlay (event) { // fires if the playback has been started
                takeSnapshot();
            }
            function onPause (event) { // fires if the playback has been stopped
                takeSnapshot();
            }
            function onDestroy (event) { // fires if the player will be destroyed
                activeVideoElement = null; // remove the reference to the element, the element should not be accessed after destroy
            }
        </script>
    ```

5. Prepare DOM elements and setup the player.

    ```javascript
        <script type="text/javascript">
            function prepareElements () { // load necessary DOM elements into variables
                canvasElement = document.createElement('canvas');
                canvasContext = canvasElement.getContext('2d');
                imgElement = document.querySelector('img');
            }
            function preparePlayerConfig () { // add additional needed parameters to the player configuration
                playerConfig.playback.crossOrigin = 'anonymous';
                playerConfig.events.onActiveVideoElementChange = onActiveVideoElementChange;
                playerConfig.events.onPlay = onPlay;
                playerConfig.events.onPause = onPause;
                playerConfig.events.onDestroy = onDestroy;
            }
            function initPlayer () { // instanciate and setup the player
                player = new NanoPlayer('playerDiv');
                player.setup(playerConfig).then(function (_config) {
                    console.log('setup ok with playerConfig: ' + JSON.stringify(_config));
                }, function (error) {
                    console.log(error);
                });
            }
            document.addEventListener('DOMContentLoaded', function () {
                prepareElements();
                preparePlayerConfig();
                initPlayer();
            });
        </script>
    ```

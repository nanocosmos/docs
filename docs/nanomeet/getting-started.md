---
id: getting-started
title: Getting Started
sidebar_label: Getting Started
---

nanoMeet is part of [nanoStream Cloud](https://bintu-cloud-frontend.nanocosmos.de). 
You need a nanoStream Cloud/Bintu account with nanoMeet enabled.

> *If you do not have an account or nanoMeet enabled yet, please contact our sales team via [contact form](https://www.nanocosmos.de/contact) or sales(at)nanocosmos.de.*
>
> To check if your organisation enables nanoMeet, check your [organisation overview](https://bintu-cloud-frontend.nanocosmos.de/organisation).
>
>  ![nanoMeet enabled](assets/enable-nanomeet.jpg)


## Embedding nanoMeet on your own web page

You can embed the following code snippet to test nanoMeet on your page in no time. It is a recommended example and runs on any web page. 

> **Note**: To make this code snippet run, you need to **create a new nanoMeet room first**. <br/>
> Execute this step via the nanoMeet web API using the method [createNanoMeetRoom](api#nanomeetcreatenanomeetroomapikey-roomsetup--promisesuccesserror) or using our [nanoMeet Token Creator (Online Sample)]((https://nanomeet.pages.nanocosmos.de/nanomeet-frontend/nanomeet-helper.html?bintu.apikey=YOUR-API-KEY&nanomeet.room=YOUR-ROOM-NAME)). <br/>
> Both approaches will generate a **new secure invite token** that can be used to enter a nanoMeet room.


```html
// Code to embed a nanoMeet meeting room on a web page
<div id="nanoStream-meet"></div>
<script src="https://nanomeet.pages.nanocosmos.de/nanomeet-frontend/js/nanomeet.js"></script>
<!-- The div element the nanoMeet room will be embedded into -->
<script>
    var nanoMeet = new NanoMeet(); // Instance of the nanoMeet web API
    var token = "SECURE-TOKEN" // Your secure invite token

    // Initialization of the nanoMeet player
    document.addEventListener('DOMContentLoaded', function () {
        nanoMeet.init({ token, id: "nanoStream-meet" })
            .then((success) => {
                console.log("nanoMeet setted up...", success);
            }).catch((error) => {
                console.log("Error setting up nanoMeet", error);
            });
    })
</script>
```

## Online Samples

1. Open the [nanoMeet Token Creator](https://nanomeet.pages.nanocosmos.de/nanomeet-frontend/nanomeet-helper.html?bintu.apikey=YOUR-API-KEY&nanomeet.room=YOUR-ROOM-NAME) to create a new secure token.  - (See [source code](source-code#nanomeet-token-creator-source-code)) 

![nanoMeet Token Creator](assets/nanomeet-helper.jpg)

2. Insert your API key from [nanoStream Cloud/Bintu Organisation](https://bintu-cloud-frontend.nanocosmos.de/organisation).
3. Name the room you want to create.
4. Choose the server location.
5. Set a time frame in which your secure token will be valid for the participants to join the nanoMeet room.
6. Click on "create".
   - Full Stream Overview: See the full stream overview in the [nanoStream Cloud dashboard](https://bintu-cloud-frontend.nanocosmos.de/), including a code snippet, the playout URL and the stream names.
   - Open room: Use the invite link to launch your created room in the [nanomeet-sample](https://nanomeet.pages.nanocosmos.de/nanomeet-frontend/nanomeet-sample.html?token=) we provide.  - (See [source code](source-code#nanomeet-sample-source-code))

   ![nanoMeet Meeting](assets/nanomeet-meeting.jpg)


## Start a live stream ...

> To start a live stream you need to have the "moderator" [role](introduction#roles).

### ... (a) via *"Broadcast Settings"* (nanoMeet Sample)

To start a live stream to the nanoStream Cloud you can click the button "Start stream" in the "Broadcast Settings". You will see a live playback URL which you can share with your audience (e.g. https://demo.nanocosmos.de/nanoplayer/release/nanoplayer.html?..) and a vod playback URL if you choose to record the live stream.

![nanoMeet Sample Settings](assets/nanomeet-ui-settings.jpg)

### ... (b) via nanoMeet UI

To start a live stream via the nanoMeet UI you need to click on the three dots on the right and click on the "Start nanoStream Cloud live stream". The dialog will ask you to insert the ingest informations. You should provide it using this format: `rtmp://rtmp-bintu-ingest-url:1935/rec/XXXXX-YYYYY`.


## Watch a live stream within nanoMeet (Watchparty)

To start a watchparty click on the three dots right on the toolbar. Toggle "Start watchparty" and insert a nanoStream Cloud streamname (e.g. `HX26g-1Qs78`). You can also paste ABR streamnames following this format (e.g. `XXXXX-YYYY1,XXXXX-YYYY2,XXXXX-YYYY3`). The nanoPlayer will be shown within the meeting room and can be controlled by the [moderator](introduction#roles).

![nanoMeet Watchparty](assets/nanomeet-watchparty.jpg)


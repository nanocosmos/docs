---
id: source-code
title: nanoMeet Sample Code Snippets
sidebar_label: nanoMeet Source Code
---

To create your own token helper you can use our way of implementation. Find here working code snippets and use our approach to create new nanoMeet rooms or use the [nanoMeet web API](api) to do it on your own.

nanoMeet is part of [nanoStream Cloud](https://bintu-cloud-frontend.nanocosmos.de). 
You need a nanoStream Cloud/Bintu account with nanoMeet enabled.

> *If you do not have an account or nanoMeet enabled yet, please contact our sales team via [contact form](https://www.nanocosmos.de/contact) or sales(at)nanocosmos.de.*
>
> To check if your organisation enables nanoMeet, check your [organisation overview](https://bintu-cloud-frontend.nanocosmos.de/organisation).
>
>  ![nanoMeet enabled](assets/enable-nanomeet.jpg)


## nanoMeet Token Creator Source Code

The following code lets you create a secure token with moderator rights with which you can join and invite people in to a nanoMeet room.

```html
<script src="https://nanomeet.pages.nanocosmos.de/nanomeet-frontend/js/nanomeet.js"></script>
<div id="apikey-input">
    <p>Insert the API Key from your <a target="blank"
            href="https://bintu-cloud-frontend.nanocosmos.de/organisation">nanoStream Cloud/Bintu
            Organisation</a>.</p>
    <input type="text" id="apikey" placeholder="Type in API Key" onchange="onAPIKeyChanged()" />
</div>

<div id="room-input">
    <p>Choose a name for your nanoMeet-room </p>
    <input type="text" id="roomname" placeholder="Type in room name" onchange="onRoomNameChanged()" />
</div>

<div id="server-input">
    <p>Choose a location where you want to host your nanoMeet-room.</p>
    <select value="eu" id="server" onchange="onServerChange(this)">
        <option value="eu">EU</option>
        <option value="us">US</option>
    </select>
</div>

<div id="date-input">
    <p>Choose the time frame where the secure token should be valid.</p>
    <label for="nbf">Not before date</label>
    <input type="datetime-local" id="nbf" name="not-before" value="" min="" max="">
    <label for="exp">Expiration date</label>
    <input type="datetime-local" id="exp" name="expiration" value="" min="" max="">
</div>

<div style="display: none;" class="response-wrapper">
    <p>You created a new nanoMeet room:</p>
    <p>Part of it is the creation of a nanoStream Cloud live stream incl. ABR Playback.<br />
        Click/Copy the link below to see
        the stream overview in the nanoStream Cloud, including playout URLs and code snippet, to share with
        larger audiences.</p>
    <div id="full-stream-overview">nanoStream Live Stream Overview</div>
    <p>Click/Copy the link below to open your nanoMeet room.</p>
    <div id="initial-invite-link">Open nanoMeet room</div>
</div>

<button onClick="cancel()">Cancel</button>
<button onClick="createNanoMeet()">Create</button>

<script>

    // Validate API Key
    const validate = (apikey) => {
        nanoMeet.validateAPIKey(apikey).then((success) => {
            console.log("Valid nanoStream Cloud API key...")
        }).catch((error) => {
            console.log("Invalid nanoStream Cloud / bintu API key")
        });
    }

    // Create new nanoMeet room
    const createNanoMeet = () => {
        var streamname, streamData, cloudDashboardLink;

        // 1. create nanoStream Cloud live streams (including ABR)
        nanoMeet.createNanoStreams(apikey)
            .then((success) => {
                let setup = {
                    exp: exp.value,     // Customized expiration value
                    nbf: nbf.value,     // Customized not before value
                    room: roomname,     // Customized room name
                    moderator: true,    // Moderator or participant
                    server: `nanomeet-${serverInput}.nanocosmos.de`,     // Server Location
                    streamname: success.data.streamInfo.ingest.rtmp.streamname // Passthrough streamname
                }
                cloudDashboardLink = success.data.cloudDashboardLink // Link to access the stream informations via dashboard

                // 2. Create nanoMeet room with customized set up
                nanoMeet.createNanoMeetRoom(apikey, setup)
                    .then((success) => {
                        streamOverview = cloudDashboardLink;
                        success.data.cloudDashboardLink = streamOverview

                        const inviteLink = `https://nanomeet.pages.nanocosmos.de/nanomeet-frontend/nanomeet-sample.html?token=${success.data.token}`;
                        document.getElementsByClassName("response-wrapper")[0].style.display = "block";
                        document.getElementById("initial-invite-link").innerHTML = `<a class="link" href=${inviteLink} target="_blank">Open nanoMeet room</a>`;
                        document.getElementById("full-stream-overview").innerHTML = `<a class="link" href=${streamOverview} target="_blank">Full stream overview</a>`;
                    }).catch((error) => {
                        console.log(error)
                    })

            }).catch((error) => {
                console.log(error)
            })
    }

    let nanoMeet = new window.NanoMeet(); // Instance of the nanoMeet web API

    let apikeyInput = document.getElementById("apikey");
    let roomNameInput = document.getElementById("roomname");
    let serverInput = document.getElementById("server").value;
    let nbfInput = document.getElementById("nbf");
    let expInput = document.getElementById("exp");

    // Date set up
    let today = new Date().toISOString().slice(0, 16); // Todays date
    let expDate = new Date(new Date().setDate(new Date().getDate() + 14)).toISOString().slice(0, 16); // Default 2 weeks from today
    let maxTime = new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().slice(0, 16); // Token can't be longer valid as a year

    nbf.value = today;
    nbf.min = today;
    nbf.max = maxTime;

    exp.value = expDate;
    exp.min = today;
    exp.max = maxTime

    // Helper method to update the nanoMeet player based on changed input value
    const onAPIKeyChanged = () => {
        apikey = document.getElementById("apikey").value;
        validate(apikey);
    }

    // Helper method to update the room name based on changed input value
    const onRoomNameChanged = () => {
        roomname = roomNameInput.value;
    }

    // Helper method to update the server based on changed input value
    const onServerChange = (setServer) => {
        serverInput = setServer.value;
    }

</script>
```

## nanoMeet Sample Source Code

The following code lets you use nanoMeet with a valid secure token. Using this sample in a moderator role lets you invite people, set up security options and start a broadcast incl. recording.

```html
<script src="https://nanomeet.pages.nanocosmos.de/nanomeet-frontend/js/nanomeet.js"></script>
<div id="invite-section">
    <p>Insert invite token</p>
    <input type="text" id="token" placeholder="Type in token" onchange="onInviteTokenChange()" />
</div>

<div style="display: none;" id="moderator-access">
    <div id="invite-token-input">
        <p>Create Invite Token</p>
        <label for="nbf">Not before date</label>
        <input type="datetime-local" id="nbf" name="not-before" value="" min="" max="">
        <label for="exp">Expiration date</label>
        <input type="datetime-local" id="exp" name="expiration" value="" min="" max="">
        <input type="checkbox" id="moderator" name="moderator">
        <label for="moderator">is Moderator</label>
        <button onClick="createInviteToken()">Create Invite Token</button>
    </div>
    <div id="invited">
        <div id="invite-link-url"></div>
    </div>
    <hr />
    <div id="security-section">
        <p>Security Settings</p>
        <input type="checkbox" id="lobby" name="lobby" onclick="toggleLobby()">
        <label for="lobby">Enable Lobby</label>
        <input type="text" id="password" placeholder="Type in password" />
        <button onClick="changePassword()">Set password</button>
    </div>
    <hr />
    <div id="broadcast-section">
        <p>Broadcast Settings</p>
        <input type="checkbox" id="vod" name="vod" checked>
        <label for="vod">Live Stream Recording</label>
        <button onClick="startBroadcast()">Start Stream</button>
        <button onClick="stopBroadcast()">Stop Stream</button>
        <div id="broadcasted">
            <div id="live-playout-url"></div>
            <div id="vod-playout-url"></div>
        </div>
        <div id="play-section"></div>
    </div>

    <div id="nanoMeet-wrapper">
        <div id="nanoStream-meet"></div>
    </div>
</div>

<script>
    let nanoMeetIdentifier = "nanoStream-meet" // ID of the nanoMeet div
    let nanoMeet = new window.NanoMeet(); // Instance of the nanoMeet web API
    var roomUrl = "https://nanomeet.pages.nanocosmos.de/nanomeet-frontend/nanomeet-helper.html" // URL to the nanoMeet room creator 

    let tokenInput = document.getElementById("token");
    // Date set up
    let today = new Date().toISOString().slice(0, 16); // Todays date
    let expDate = new Date(new Date().setDate(new Date().getDate() + 14)).toISOString().slice(0, 16); // Default 2 weeks from today
    let maxTime = new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().slice(0, 16); // Token can't be longer valid as a year

    nbf.value = today;
    nbf.min = today;
    nbf.max = maxTime;

    exp.value = expDate;
    exp.min = today;
    exp.max = maxTime

    // Initializes the nanoMeet player
    const init = (token, id) => {

        nanoMeet.init({ token, id })
            .then((success) => {
                if (success.data.moderator) {
                    document.getElementById("moderator-access").style.display = "block";
                }
                if (!success.data.moderator) {
                    document.getElementById("moderator-access").style.display = "none";
                }
                console.log(`Init nanoMeet. Moderator: ${success.data.moderator}`);
            }).catch((error) => {
                document.getElementById("moderator-access").style.display = "none";
                console.log(error);
            });
    }

    // Creates invite token for the nanoMeet room
    const createInviteToken = () => {
        let moderator = document.getElementById("moderator").checked
        let expDate = exp.value;
        let nbfDate = nbf.value;
        nanoMeet.createInviteToken(token, { moderator, exp: expDate, nbf: nbfDate })
            .then((success) => {
                var inviteUrl = `https://nanomeet.pages.nanocosmos.de/nanomeet-frontend/nanomeet-sample.html?token=${success.data.token}`;
                document.getElementById("invite-link-url").innerHTML = `<a class="link" href=${inviteUrl} target="_blank">${moderator ? "Moderator" : "Participant"} Invite Link</a>`;
                console.log("Invite token result", success.data.token);
            }).catch((error) => {
                console.log(error);
            });
    }

    // Starts the broadcast
    const startBroadcast = () => {
        let isVOD = document.getElementById("vod").checked;
        nanoMeet.startBroadcast(isVOD)
            .then((success) => {
                document.getElementById("live-playout-url").innerHTML = `<a class="link" href=${success.data.playback.live} target="_blank">Live Playout URL</a>`;

                if (isVOD) {
                    document.getElementById("vod-playout-url").innerHTML = `<a class="link" href=${success.data.playback.vod} target="_blank">VOD Playout URL</a>`;

                } else {
                    document.getElementById("vod-playout-url").innerHTML = "";
                }
                console.log(`Started nanoStream Cloud live stream`, success.data);
            }).catch((error) => {
                console.log(error);
            })
    }

    // Stops the broadcast
    const stopBroadcast = () => {
        nanoMeet.stopBroadcast()
            .then((success) => {
                console.log("Stopped nanoStream Cloud live stream.");
            }).catch((error) => {
                console.log(error);
            })
    }

    // Helper method to update the nanoMeet player based on changed input value
    const onInviteTokenChange = () => {
        token = document.getElementById("token").value;
        if (token) {
            init(token, nanoMeetIdentifier);
        }
    }

    // Helper method to open in new tab
    const openInNew = (link) => {
        window.open(link, '_target');
    }

    // Changes the password of the nanoMeet room
    const changePassword = (e) => {
        let password = document.getElementById("password").value;
        nanoMeet.setPassword(password)
            .then((success) => {
                document.getElementById("lobby").value = success.data.lobby
                console.log(success.data);
            }).catch((error) => {
                console.log(error);
            })
    }

    // Toggles the lobby of the nanoMeet room
    const toggleLobby = (e) => {
        let lobbyOn = document.getElementById("lobby").checked
        nanoMeet.setLobby(lobbyOn)
            .then((success) => {
                document.getElementById("password").value = success.data.password
                console.log(success.data);
            }).catch((error) => {
                console.log(error);
            })
    }

</script>
```
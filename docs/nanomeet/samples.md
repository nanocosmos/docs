---
id: samples
title: nanoMeet Samples
sidebar_label: nanoMeet Samples
---

The nanoMeet online samples utilize the [nanoMeet web API](api).

> You can find source codes for the samples [here](source-code).

## How to use nanoMeet Samples?

nanoMeet is part of [nanoStream Cloud](https://bintu-cloud-frontend.nanocosmos.de). 
You need a nanoStream Cloud/Bintu account with nanoMeet enabled.

> *If you do not have an account or nanoMeet enabled yet, please contact our sales team for a personal demo via [contact form](https://www.nanocosmos.de/contact) or sales(at)nanocosmos.de.*
>
> To check if your organisation enables nanoMeet, check your [organisation overview](https://bintu-cloud-frontend.nanocosmos.de/organisation).
>
>  ![nanoMeet enabled](assets/enable-nanomeet.jpg)

### **nanoMeet Token Creator (Online Sample)** - *Create a room and secure invite token*

1. Open the [nanoMeet Token Creator](https://nanomeet.pages.nanocosmos.de/nanomeet-frontend/nanomeet-helper.html?bintu.apikey=YOUR-API-KEY&nanomeet.room=YOUR-ROOM-NAME).

2. Insert your [nanoStream Cloud/Bintu API key](https://bintu-cloud-frontend.nanocosmos.de/organisation).

3. Name the room you want to create.

4. Choose the server location.

5. Set a time frame in which the secure token will be valid for the invitees to join the nanoMeet room.

6. Click on "create".
   - **Full Stream Overview**: See the full stream overview in your [nanoStream Cloud dashboard](https://bintu-cloud-frontend.nanocosmos.de/), including a code snippet, the playout URL and the stream names.
   - **Open room**: Use the invite link to launch your created and secure nanoMeet room in our [nanoMeet Sample](https://nanomeet.pages.nanocosmos.de/nanomeet-frontend/nanomeet-sample.html?token=YOUR-INVITE-TOKEN). *See instructions below.*

### **nanoMeet Sample (Online Sample)** - *Host nanoMeet meetings*

> **Required**: A valid secure invite token for a nanoMeet room. 
> (Use our [nanoMeet Token Creator](https://nanomeet.pages.nanocosmos.de/nanomeet-frontend/nanomeet-helper.html?bintu.apikey=YOUR-API-KEY&nanomeet.room=YOUR-ROOM-NAME) to create a new secure token. *See instructions above.)*

This sample lets you intialize your created nanoMeet room. If you dont use this sample as a moderator but as a participant you will not be able to see the "Moderator Functions" like "Invite Participant", "Security Options" and "Broadcast Settings".

![nanoMeet Meeting](assets/nanomeet-meeting.jpg)
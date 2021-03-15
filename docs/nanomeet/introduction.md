---
id: introduction
title: nanoMeet
sidebar_label: Introduction
---

&copy; 2021 <a href="https://info.nanocosmos.de/" target="_blank">nanocosmos</a>

## About the nanoMeet documentation

The following content we provide is divided in 3 main parts:

- [User Guide](samples): Working online samples that can be used immediately with all features and functions we provide.
- [User/Developer Guide](source-code): The source code of our samples that can be copied easily.
- [Developer Guide](api): The documentation of our web API that provides all features and functions of nanoMeet.

## What is nanoMeet?

nanoMeet is a browser-based live video and collaboration platform connected to nanoStream Cloud, for interactive live streaming.
It allows you to create your own branded video meeting rooms in the browser to engage and interact with your audience. 
nanoMeet is based on a custom version of [Jitsi Meet](https://github.com/jitsi/jitsi-meet) and integrated with [nanoStream Cloud](https://info.nanocosmos.de).

The following content we provide is divided in 3 main parts:

![nanoMeet Meeting](assets/nanomeet-ui.jpg)

### Key features

With nanoMeet you can create, host and broadcast online video meetings on you own web page:

- Host online video meetings embedded on your own web page
- Web browser based applications and web services
- Live streaming integration with nanoStream Cloud
- Enable audience interaction with large audiences (1000s of participants anywhere in the world)
- Invite participants with secure tokens
- nanoMeet web API and code examples for easy white-label integration into custom branded environments
- „Watch party“: Watch a live stream together in a video meeting
- Run everything under your own brand (white label)


### Example applications

There are various usecases for nanoMeet:

- Town Hall Meetings, e.g. company webcasts
- Podium Discussions, e.g. expert sessions
- Interviews and announcements with Q&A, e.g. press briefings
- Live events, e.g. music, comedy, …
- Fan engagement, e.g. meet and greet
- Watchparties, e.g. watch a live stream together and discuss

![nanoMeet Infographic](assets/nanomeet-infografik.jpg)

## What is part of nanoMeet?

- Web services for usage 24/7 anywhere in the world
- Sample pages for setting up and using nanoMeet rooms
- Web API with code snippets/example implementations
- Live Streaming: Integration into nanoStream Cloud (Bintu)


### Requirements

nanoMeet is part of [nanoStream Cloud](https://bintu-cloud-frontend.nanocosmos.de). 
You need a nanoStream Cloud/Bintu account with nanoMeet enabled.

> *If you do not have an account or nanoMeet enabled yet, please contact our sales team via [contact form](https://www.nanocosmos.de/contact) or sales(at)nanocosmos.de.*
>
> To check if your organisation enables nanoMeet, check your [organisation overview](https://bintu-cloud-frontend.nanocosmos.de/organisation).
>
>  ![nanoMeet enabled](assets/enable-nanomeet.jpg)



### Contents 

Enabling **nanoMeet** for your organisation gives you access to create, use and broadcast nanoMeet rooms. 
For that you can either use our samples that utilize our nanoMeet web API, copy the source code or create your own code using our documentation.


1. **nanoMeet Token Creator (Online Sample)** - *Create a room and secure invite token* <br/>
   Lets you create a secure token with moderator rights with which you can join and invite people in to a nanoMeet room.
   
> Available as [online web page](https://nanomeet.pages.nanocosmos.de/nanomeet-frontend/nanomeet-helper.html?bintu.apikey=YOUR-API-KEY&nanomeet.room=YOUR-ROOM-NAME) and [source code](source-code#nanomeet-token-creator-source-code) to integrate.

![nanoMeet Token Creator](assets/nanomeet-helper.jpg)

2. **nanoMeet sample (Online Sample)** - *Host nanoMeet meetings* <br/>
   Lets you use nanoMeet with a valid secure token. Using this sample in a moderator role lets you invite people, set up security options and start a broadcast incl. recording.
> Available as [online web page](https://nanomeet.pages.nanocosmos.de/nanomeet-frontend/nanomeet-sample.html?token=YOUR-INVITE-TOKEN) and [source code](source-code#nanomeet-sample-source-code) to integrate.

![nanoMeet Meeting](assets/nanomeet-meeting.jpg)

3. **nanoMeet Web API** - *All nanoMeet functions* <br/>
This nanomeet.js file lets you access all nanoMeet functions and procedures.

   > Find the nanoMeet API documentation [here](api).


### Usage

To use nanoMeet you can either use our online samples, copy our sample code or write your own code.


- **nanoMeet Samples**:
Read the section [nanoMeet Samples](samples) to get further instructions.

- **nanoMeet samples source code code**:
Find the source code of our samples [here](source-code).

- **nanoMeet Web API**:
Read our [developers documentation](api) 


### Customization

You are able to customize your nanoMeet room using your own branding! Read more [here](#nanomeetinitconfig--promisesuccesserror).


### Roles

There are two main Roles

- **Moderator**: Is able to create invite tokens for participants and moderators, start live streams and customize the nanoMeet room.
- **Participant**: Is able to join a nanoMeet room.

## Support

Please use https://www.nanocosmos.de/support or support(at)nanocosmos.de for further assistance.




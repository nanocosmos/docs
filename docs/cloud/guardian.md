---
id: guardian
title: nanoStream Guardian
sidebar_label: nanoStream Guardian
---

<div class="video-wrap">
    <div class="video-container">
        <iframe src="https://www.youtube.com/embed/hVbkifac1uo" frameborder="0" allowfullscreen></iframe>
    </div>
</div>

##### *Click `PLAY` button to start*

# What is nanoStream Guardian?

nanoStream Guardian is a new service integrated into nanoStream Cloud, which allows you to **block specific IP addresses, referrers, and even entire CIDR masks from accessing your streams**.

 `A CIDR mask is a notation that allows to affect a range of IP adresses. For example blocking the following mask: 255.255.255.0 /24 would block all 256 IP adresses starting with 255.255.255`

By including nanoStream Guardian in your workflow, you can effectively **prevent unauthorized access and illegal replication of your streams, ensuring that only legitimate viewers can watch your content**.

*Blocking an IP address is effective for 24 hours* and will affect all your organization's playouts new connections from the given IP address after a delay of max. 6 minutes. Blocking a referrer will prevent the given web domain from playing your streams *until you unblock it*.

# What do you need to use nanoStream Guardian?

You need a valid bintu account, based on our trial or a paid plan. 

* [Homepage: Overview and Plans](https://info.nanocosmos.de/)
* [Introduction](cloud_introduction)

# How to use nanoStream Guardian

## With nanoStream Cloud Analytics Dashboard

Via the Analytics Dashboard, you can easily access the data you need to quickly observe any suspicious activities and take action.

nanoStream Guardian is included in the Analytics Dashboard in the Guardian and the Breakdown tab.

- Analytics Dashboard URL: http://metrics.nanocosmos.de/

- [In-depth information on using nanoStream Guardian with the Analytics Dashboard](./analytics-guardian.md)

## With nanoStream Guardian API

If you require additional control over the service (e.g: for automatization or blocking a high number of IPs) or simply want to integrate the service into your programmers existing workflow, you are also able to use the nanoStream Guardian API.

Manipulating CIDR-masks is yet only available via the API. 

- API Entry point: https://guardian.nanostream.cloud/

- API documentation: https://guardian.nanostream.cloud/docs


## API Examples

#### Block an IP for 24 hours


```
curl --location 'https://guardian.nanostream.cloud/ip' \
--header 'Content-Type: application/json' \
--header 'X-BINTU-APIKEY: BINTU_API_KEY' \
--data '{
    "ip": "103.13.113.1",
    "type": "deny",
    "tag": "Blocking malicious user IP"
}'
```

#### Block a Referer

```
curl --location 'https://guardian.nanostream.cloud/referer' \
--header 'Content-Type: application/json' \
--header 'X-BINTU-APIKEY: BINTU_API_KEY' \
--data '{
    "domain": "all-good-streams.com",
    "info": "Domain that replicates 3 streams on 24/02",
    "type": "deny"
}'
```

Please [reach out to our support team](https://www.nanocosmos.de/support) for help in using nanoStream Guardian!

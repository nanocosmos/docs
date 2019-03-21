---
id: faq_h5live_player_bintu
title: bintu
sidebar_label: bintu
---


<details><summary><strong>What is bintu?</strong></summary>

bintu is the core of nanoStream Cloud, the global CDN work ultra-low-latency live streaming.
At the delivery part (edge servers) of nanoStream Cloud, the H5Live server software is running, which connects to the H5Live player in the browser, to provide the lowest possible playback latency on all browsers.

</details>


<details><summary><strong>How can I play a bintu stream?</strong></summary>

Use for the `config.source` object the subobject `bintu`. It’s only necessary to pass the property `streamid`


```javascript
var config = {
    "source": {
        "bintu": {
            "apiurl": "https://bintu.nanocosmos.de",
            "streamid": "39b2cc18-7116-43a4-81bd-f62b7a1a9dbc"
       	 }

}
```

</details>


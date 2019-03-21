---
id: faq_h5live_player_bintu
title: bintu
sidebar_label: bintu
---

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

<details><summary><strong>Can I check capabilities?</strong></summary>

Yes, you can check the static capabilities array of the NanoPlayers class `NanoPlayer.capabilities`. If the array has values, the player is supported. Values can be `h5live`, `flash` and `native`.

</details>

<details><summary><strong>Is there an API documentation available?</strong></summary>

Yes, you can find it [here](http://docs.nanocosmos.de/docs/nanoplayer/nanoplayer_api_class).

</details>


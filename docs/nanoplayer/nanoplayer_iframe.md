---
id: nanoplayer_iframe
title: iframe Embeds 
sidebar_label: iframe Embeds
---

## Creating a custom iframe


**How to embed the player into an iframe element?**
For most use cases the implementation of the player directly into the page is the best option. We recommend embedding the player within an iframe element only when the use case requires it.

### Creating the embedded page including the player on your side

Please find information and examples on how to add the player to a webpage [here](https://docs.nanocosmos.de/docs/nanoplayer/nanoplayer_getting_started/).

### Embedding the player page in an iframe on a second page on the distribution side

**Important:** The `allowfullscreen` attribute is required if the page wants to support fullscreen video.

```
    <iframe id="ifvideo" width="640" height="480" scrolling="no" frameborder="0" allowfullscreen=""
    src="//yourdomain.com/playerpage.html">
    </iframe>
```


## Ready-for-use iframe

If you are looking for a ready-for-use iframe hosted in the nanoStream Cloud please reach out to us at [support@nanocosmos.de](mailto:support@nanocosmos.de) for details.
---
id: nanoplayer_feature_streamgroup
title: Streamgroup
sidebar_label: Streamgroup

---

## Using streamgroup with standard nanoStream Cloud

Introduced in **nanoStream H5Live Player Version 4.18.0**, *bintu streamgroup* makes the configuration easier, particularly in case of more than one stream. In prior versions the configuration via entries required passing `entry.rtmp.streamname` value for each entry in the source object. The streamgroup feature allows to pass once the `streamgroup.id` to have available all entries that included in this streamgroup. Due to `streamgroup.id` being decoded to deliver expected entries, this solution makes a shorter and easier configuration.
It also works with query parameters which means that sharable links are adjusted to the shorter and clearer version.

// bintu streamgroup => response gives us all necessasary stuff ie bintu stream id 

The streamgroup supports both: standard and secure stream playback. However, it is not allowed to configure certain regions via that stream. 

For Player Embed the streamgroup feature is available since embed v1.3.0.


**Adding the `streamgroup` to the config**

Pass the `group` object with nested `'id' : 'your_streamgroup_id'` in the `source`. In case of a secure streamgroup, add `security` with `'tokenv2' : 'your_token'`. Adding `'apiurl'` is optional.

```json
'config': {
    'source': {
        'group': {
            'id': 'xxxxxxxx-zzzz-yyy-aaaa-aaabbbcccddd', // your streamgroup id
            'security': {
                'tokenv2': 'xxx' // your security token if applicable
            },
            'apiurl': 'https://bintu.nanocosmos.de' // optional
        },
        ...
    },
    ...
}
```

#### Config example with streamgroup and serverDomain: 

```javascript
var config = {
    "source": {
        "group": {
            "id": "xxxxxxxx-zzzz-yyy-aaaa-aaabbbcccddd", // your streamgroup id
            "security": {
                "tokenv2": "xxx" // your security token if applicable
            },
            "apiurl": "https://bintu.nanocosmos.de" // optional
        },
        "general": {
            "serverDomain": "bintu-play-eu.nanocosmos.de"
        },
        ...
    },
    ...
};
```
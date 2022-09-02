---
id: nanoplayer_feature_stream_group_configuration
title: Stream group configuration
sidebar_label: Stream group configuration

---

## Using stream group with standard nanoStream Cloud

Introduced in **nanoStream H5Live Player Version 4.18.0**, *bintu stream group* makes the configuration easier, particularly in case of more than one stream. In prior versions the configuration via entries required passing `entry.rtmp.streamname` value for each entry in the source object. The stream group feature allows to pass once the `streamgroup.id` to have available all entries included in this stream group. Due to `streamgroup.id` response being decoded to deliver expected entries, this solution makes a shorter and easier configuration.
It also works with query parameters which means that sharable links are adjusted to the shorter and clearer version.

The streamgroup supports both: standard and secure stream playback. However, it is not allowed to configure certain regions via that stream.

For Player Embed the streamgroup feature is available since embed v1.3.0.

**Adding the `stream group` to the config**

Pass the `group` object with nested `'id' : 'your_streamgroup_id'` in the `source`. In case of a secure streamgroup, add `security` with `'jwtoken' : 'your_token'`. Adding `'apiurl'` and `'startQuality'` are optional.

```json
'config': {
    'source': {
        'group': {
            'id': 'xxxxxxxx-zzzz-yyy-aaaa-aaabbbcccddd', // your streamgroup id
            'security': {
                'jwtoken': 'xxx' // your security token if applicable
            },
            'apiurl': 'https://bintu.nanocosmos.de', // optional
            'startQuality': 'medium-low' // optional
        },
        ...
    },
    ...
}
```

#### Config example with stream group and serverDomain

```javascript
var config = {
    "source": {
        "group": {
            "id": "xxxxxxxx-zzzz-yyy-aaaa-aaabbbcccddd", // your streamgroup id
            "security": {
                "jwtoken": "xxx" // your security token if applicable
            },
            "apiurl": "https://bintu.nanocosmos.de", // optional
            "startQuality": "medium-low" // optional
        },
        "general": {
            "serverDomain": "bintu-play-eu.nanocosmos.de"
        },
        ...
    },
    ...
};
```

### `'group.startQuality'` parameter

New parameter `'group.startQuality'` is an enhanced version of `'config.source.startIndex'`, designed particularly for the stream group feature. Instead of passing the `startIndex` that is mapped with the stream index, `startQuality` is based on the range of streams within given quality. Streams assigned to the `startQuality` vary depending on the total number of available entries.

`group.startQuality` possible values:
- high
- medium-high
- medium
- medium-low
- low

### Secure playback with stream group

It is possible to use JSON Web Token (JWT) for a secure playback with `group` configuration. This token type can contain playback permissions for one or more stream names, therefore a single token can be applied for all secure use cases.

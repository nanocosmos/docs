---
id: nanoplayer_feature_stream_group_configuration
title: Stream group configuration
sidebar_label: Stream group configuration

---

## Using stream group configuration with standard nanoStream Cloud

Introduced in **nanoStream H5Live Player Version 4.18.0**, *bintu stream group* makes the configuration easier, particularly in case of more than one stream. While the configuration via entries requires passing `rtmp.streamname` or `bintu.streamid` value for each entry in the source object, the stream group feature allows to pass once the `group.id` to have available all entries included in the stream group. Due to `group.id` response from the Bintu API being decoded to deliver expected entries, this solution makes a shorter and easier configuration.

The stream group supports both: standard and secure stream playback.

**Adding the `stream group` to the config**

Find the stream group id in the `stream` object in the Cloud Dashboard or in the `/stream/{id}` response from the Bintu API. Pass the `group` object with nested `'id' : 'your_stream_group_id'` in the `source`. In case of a secure stream group, add `security` with JSON Web Token (JWT) `'jwtoken' : 'your_token'`. Find more information about the security with [JSON Web Token here](https://docs.nanocosmos.de/docs/nanoplayer/nanoplayer_token_security).
Adding `'apiurl'` and `'startQuality'` is optional.

#### JSON representation

```json
'config': {
    'source': {
        'group': {
            'id': 'xxxxxxxx-zzzz-yyy-aaaa-aaabbbcccddd', // your stream group id
            'security': { // required for secure group playback
                'jwtoken': 'xxx' // your security token if applicable
            },
            'apiurl': 'https://bintu.nanocosmos.de', // optional
            'startQuality': 'medium' // optional
        },
        ...
    },
    ...
}
```

#### Config example with stream group

```javascript
var config = {
    "source": {
        "group": {
            "id": "xxxxxxxx-zzzz-yyy-aaaa-aaabbbcccddd", // your stream group id
            "security": {   // required for secure group playback
                "jwtoken": "xxx" // your security token if applicable
            },
            "startQuality": "medium" // optional
        },
        ...
    },
    ...
};
```

### Player Embed with stream group configuration

For Player Embed the stream group feature is available since embed v1.3.0. It is necessary to configure it via URL parameters: `group.id`, `group.security.jwtoken`, `group.startQuality`.

### `'group.startQuality'` parameter

New parameter `'group.startQuality'` is an enhanced version of `'config.source.startIndex'`, designed particularly for the stream group feature where the number of streams might be unknown at the time of configuration. Instead of passing the `startIndex` that is mapped with the stream index, `startQuality` is based on the range of streams within given quality. Streams assigned to the `startQuality` vary depending on the total number of available entries.

`group.startQuality` values:
- `high`
- `medium-high`
- `medium`
- `medium-low`
- `low`

Regardless of the amount of streams, the values will always be mapped to a start index and thus result in a valid configuration.

Examples of `startQuality` to `startIndex` mapping:

|number of streams|high|medium-high|medium|medium-low|low|
|:-:|:-:|:-:|:-:|:-:|:-:|
|2|0|0|1|1|1|
|3|0|1|1|1|2|
|4|0|1|2|2|3|
|5|0|1|2|3|4|

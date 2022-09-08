---
id: bintu_stream_tags
title: bintu.live Stream Tags
sidebar_label: bintu.live Stream Tags
---

You can group and tag streams with bintu stream tags. These are human readable words or IDs you can use to identify your streams.

API Documentation:

https://doc.pages.nanocosmos.de/bintuapi-docs/#tag/Tag

Example:

    curl -X PUT \
      https://bintu.nanocosmos.de/stream/12345678-78f3-466a-97cc-54f160705724/tag \
      -H 'content-type: application/json' \
      -H 'x-bintu-apikey: YourBintuApiKeyXXXZZZYYYAAA'  \
      -d '{
        "tags": ["myStreamTag1", "camera1", "key1:value1", "key2: value2"]
    }'

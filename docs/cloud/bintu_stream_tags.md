# bintu.live stream tags

You can group and tag streams with bintu stream tags.

API Documentation:

https://bintu.nanocosmos.de/doc/#tag

Example:

    curl -X PUT \
      https://bintu.nanocosmos.de/stream/12345678-78f3-466a-97cc-54f160705724/tag \
      -H 'content-type: application/json' \
      -H 'x-bintu-apikey: YourBintuApiKeyXXXZZZYYYAAA'  \
      -d '{
        "tags": ["myStreamTag1", "camera1", "key1:value1", "key2: value2"]
    }'
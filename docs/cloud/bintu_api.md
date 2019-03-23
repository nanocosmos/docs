---
id: bintu_api
title: nanoStream Cloud bintu api
sidebar_label: bintu api
---

# Using bintu

bintu is both a dashboard and REST API.

All URLs can both be used in a web browser, and by using REST API calls.

# bintu dashboard / main api entry point

https://bintu.nanocosmos.de/

# bintu rest api documentation

https://bintu.nanocosmos.de/doc/

# Examples

## Get latest live stream

```
curl -X GET \
"https://bintu.nanocosmos.de/stream?quantity=1 \
-H 'content-type: application/json' \
-H 'x-bintu-apikey: YOUR_BINTU_API_KEY' 
```

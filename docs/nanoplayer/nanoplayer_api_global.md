---
id: nanoplayer_api_global
title: Global
sidebar_label: Global
---
## Members

### performance marks

This marks will be set via `'performance.mark()'` and are related to a websocket connection only. Marks can be read with `performance.getEntriesByName(name)` that returns an array with objects. The object has the properties `'entryType=mark'`, `'name'` and `'startTime'`. The middle part of the name string is the element id of the player container. 

>**Not supported on Safari 11 OSX and iOS.**



Properties:

| Name                                       | Type   | Description                                                  |
| ------------------------------------------ | ------ | ------------------------------------------------------------ |
| `nano.[playerDivId].connecting`            | string | Will be set if the websocket connect is started.             |
| `nano.[playerDivId].connected`             | string | Will be set if the websocket connection is established.      |
| `nano.[playerDivId].disconnected`          | string | Will be set if the websocket connection is closed.           |
| `nano.[playerDivId].resuming`              | string | Will be set if the websocket connection is established and a play command will be send (keepConnection only). |
| `nano.[playerDivId].firstFragmentReceived` | string | Will be set if the first fragment is received over the websocket connection. |
| `nano.[playerDivId].firstFrameRendered`    | string | Will be set if the first frame is received over the websocket connection. |


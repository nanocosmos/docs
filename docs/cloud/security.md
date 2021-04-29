---
id: security
title: nanoStream Cloud Security
sidebar_label: nanoStream Cloud Security
---

# nanoStream Cloud Security

nanoStream Cloud ensures security on several levels:

- reliability: our system works 24/7 on a global scale with automatic failover 
- security: encrypted streaming is possible
- authorization: web hooks and secure tokens can be used to authorize clients

## Encrypted streaming

- nanoStream H5Live Player and Webcaster by default work over transport level security (HTTPS), based on industry standards.

- RTMP can be encrypted with SSL. You can use rtmps over port 1936 instead 1935.

Example:

Standard non-encrypted ingest (RTMP): rtmp://bintu-stream.nanocosmos.de:1935/live/STREAM 
Encrypted ingest (RTMPS): rtmps://bintu-stream.nanocosmos.de:1936/live/STREAM

## Client authorization

- RTMP Ingest can be authorized with [web hooks](bintu_custom_webhooks.md) with our bintu REST API.

- nanoStream H5Live Player clients can be authorized with nanoPlayer [secure tokens](../nanoplayer/nanoplayer_token_security.md)

[Contact us](https://www.nanocosmos.de/support) for additional options or any further questions.

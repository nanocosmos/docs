---
id: nanoplayer_token_security
title: Secure playback with H5Live
sidebar_label: Secure playback with H5Live
---

## Encrypted playback

When using H5Live player, all playback is encrypted by default over `HTTPS`.

## Token Security for nanoStream H5Live Player

> **Note:**
>
> Token Security for nanoPlayer is not enabled by default and requires a separate account and business agreement.
> Please [contact us](https://www.nanocosmos.de/support) for further details.

H5Live Player supports signed URLs with tokens to restrict playback to a specific time or / and domain. To use token security, you need a security enabled [Bintu](../cloud/bintu_api.md) organization in nanoStream Cloud.

Notice that once the secure feature is enabled for your organization, every stream group (H5Live Player v4.18) or stream playback requires a token. It is not possible to playback a stream without a token.
Thus we recommend to use a second Bintu organization to not interfere with your current (production) setup.

**There are 2 options for secure playback configuration:**

 1. [**Simple configuration with JSON Web Token (JWT) (since v4.18.0)**](https://docs.nanocosmos.de/docs/nanoplayer/nanoplayer_feature_security_jwt)
    A standard security token, recommeneded for more than one stream, easy ABR configuration.
 2. [**Configuration with STS**](https://docs.nanocosmos.de/docs/nanoplayer/nanoplayer_feature_security_sts)
    Proprietary security token with multi value format, commonly used before v4.18.0.
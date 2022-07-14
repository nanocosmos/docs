---
id: nanoplayer_release_latest
title: Latest Release
sidebar_label: Latest
---

## **[4.16.0]**

### **Release Notes**

This version adds the possibility to set a general H5Live server domain. A domain can be applied via `config.source.general.serverDomain`. This can be especially useful with configurations via `source.defaults` or `bintu.streamid`. By default, these configurations are using the standard geo-load-balanced domain namest. Please find further information in our [documentation](https://docs.nanocosmos.de/docs/nanoplayer/nanoplayer_feature_source_defaults#applying-a-custom-h5live-server-domain) regarding this feature.

In addition an issue in relation to timed out stream switches has been fixed. Previously this could lead to a temporarily inconsistent internal stream state.

### **Changelog**

### Added

- new config parameter `config.source.general.serverDomain`
  - will override/modify all h5live server domains

### Fixed

- internal stream state after timed out stream switches

### **Release Package**

- [4.16.0](https://files.nanocosmos.de/index.php/s/4BbC7Xq6XcksCs5)
- [latest 4.x](https://files.nanocosmos.de/index.php/s/4nndC45mcB6oSa6)
- [latest](https://files.nanocosmos.de/index.php/s/2tpCzgRjNEZDzeP)

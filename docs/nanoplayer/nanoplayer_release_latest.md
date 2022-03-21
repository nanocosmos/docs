---
id: nanoplayer_release_latest
title: Latest Release
sidebar_label: Latest
---

## Please find more about the **latency control modes** feature in our [documentation](https://docs.nanocosmos.de/docs/nanoplayer/nanoplayer_feature_latency_control_modes/).

## **[4.14.1]**

### **Release Notes**

This release introduces two new latency control modes targeting especially lowest latency use cases like live auctioning.
The latency control mode can be selected via the added `config.playback.latencyControlMode` configuration parameter.
The established latency control mode is available as the `'classic'` option which remains to be the default mode.
In addition the new latency control modes `'balancedadaptive'` and `'fastadaptive'` have been added. According to the current stream and network conditions they can adjust the latency adaptively. This allows to achieve a lower latency while keeping the playback experience smooth. Please find further information in the [feature description](https://docs.nanocosmos.de/docs/nanoplayer/nanoplayer_feature_latency_control_modes/) of our documentation.

### **Changelog**

### Added

- added latency control modes and related configuration parameter
  - configuration parameter: `config.playback.latencyControlMode`
  - string values: `'classic'`, `'balancedadaptive'`, `'fastadaptive'`

### Improved

- improved handling in case of video frames being dropped by the browser

### **Release Package**

- [4.14.1](https://files.nanocosmos.de/index.php/s/3cKSNC9XnWpLfgJ)
- [latest 4.x](https://files.nanocosmos.de/index.php/s/4nndC45mcB6oSa6)
- [latest](https://files.nanocosmos.de/index.php/s/2tpCzgRjNEZDzeP)
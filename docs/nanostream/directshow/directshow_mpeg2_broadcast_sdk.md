## nanocosmos MPEG-2 Broadcast DirectShow SDK

### Introduction

Nanocosmos MPEG-2 Broadcast DirectShow  SDK enables you to perform high quality and high performance video coding for the latest generation video and audio coding standards. It is intended to develop video encoding / transcoding applications based on Microsoft DirectShow technology.

### Major Features

  * Encoding of MPEG-2 video streams in Main and High profile
  * Highly optimized software coding with support for latest CPU  technology by Intel and AMD (SSE2/SSE3/SSE4 and Dual-Core/Core-Duo, AMD Athlon64
  * Real-time Encoding from Capture cards is supported
  * File Reader for MOV and MXF
  * File Writer for MOV and MXF

### Documentation

The SDK\doc folder contains further documentation for the following filters:

  * MPEG-2 Video Decoder
  * MPEG-2 Video Encoder
  * QuickTime Source
  * QuickTime Writer
  * MXF Reader
  * MXF Writer

> Contact us for additional modules for MPEG Audio Encoding and Multiplexing

### Filter components

  * nanocosmos MPEG-2 Video Decoder
    * Module:		nmpeg2dec.ax
    * CLSID:		{223784F1-4D9F-45A5-8281-8F9AFCABD904}

  * nanocosmos MPEG-2 Video Encoder
  * Module:		nmpeg2enc.ax
  * CLSID:		{2327A344-BECC-4F4F-89C6-DABDC5143832}

  * nanocosmos QuickTime Source Filter
    * Module:		nqtsource.ax
    * CLSID:		{53718C99-F067-4609-8184-A8A92A241A5A}

  * nanocosmos Quicktime Writer (MPEG2/Broadcast)
    * Module:		nmp4mux.ax
    * CLSID:		{C2FB362B-CE6C-4797-BC16-F81976DFEF61}

  * nanocosmos MXF Reader
    * Module:		nh264dec.ax
    * CLSID:		{A3462D0F-3BD0-48A2-BD91-A1366CFC35BB}

  * nanocosmos MXF Writer
    * Module:		nh264dec.ax
    * CLSID:		{C1C2C181-EBDA-421F-895F-638A4C5F132B}

  * nanocosmos MPEG PS/TS Stream Splitter
    * Module:		nmpegsplitter.ax
    * CLSID:		{0994D1E8-B697-47DE-B1E3-36D26937D5B4}

  * nanocosmos File Dump Filter
    * Module:		nanodump.ax
    * CLSID:		{DA67A541-8FEA-11D4-A908-00105A6758CF}

### Registering and unregistering components in the DirectShow framework

In order to use them, filters must be registered in the DirectShow framework. After
installation all filters are registered. To re-register or unregister components, execute the `RegisterFilters.bat` or `UnregisterFilters.bat` batch files from the SDK/bin folder.

### Filter activation 

Filters can be activated by installing a license key to windows registry or programmatically by setting a license key through the software interface of a filter instance. How to set license keys to unlock filters is described in the module's documents.

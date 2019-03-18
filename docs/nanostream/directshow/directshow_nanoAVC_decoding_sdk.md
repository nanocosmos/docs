## nanoAVC/H.264 DirectShow Decoding SDK

### Introduction

nanoAVC/H.264 Direct Show Decoding SDK enables you to decode/play back
AVC/H.264 video and AAC audio from MP4/3GP or transport stream (TS) sources
within Windows Media Player and custom applications based on Microsoft DirectShow Framework.

The nanocosmos H.264/AVC Video Decoder supports streams in baseline, main and high profile. It is highly optimized for use on hyper-threading and multi core systems.

### Filter components

  * nanocosmos AVC/H.264 Video Decoder
    * Module:		nh264dec.ax
    * CLSID:		{264DA7DD-CE74-472D-A2FD-796A1F0A379C}


  * nanocosmos AAC Audio Decoder
    * Module:		naacdec.ax
    * CLSID:		{AEED2B3D-6DA1-4C84-A85D-83547FA90486}


  * nanocosmos MP4 Stream Splitter
    * Module:		nmp4splitter.ax
    * CLSID:		{22F493C4-B51B-4767-BE55-ADFA34D6A205}


  * nanocosmos MPEG PS/TS Stream Splitter
    * Module:		nmpegsplitter.ax
    * CLSID:		{0994D1E8-B697-47DE-B1E3-36D26937D5B4}



![Example playback filtergraph](img/directshow_h264_decoding_filtergraph.png)

Figure 1.  Example playback filtergraph

### Registering and unregistering components in the DirectShow framework

In order to use them, filters must be registered in the DirectShow framework. After installation all filters are registered. To re-register or unregister components, execute the RegisterFilters.bat or UnregisterFilters.bat batch files from the SDK/bin folder.

### Evaluation mode and filter activation

Filters can be activated by installing a license key to windows registry or programmatically by setting a license key through the software interface of a filter instance. How to set license keys to unlock filters is described in the module's documents.\\
If filters run in evaluation mode, an overlay logo will be shown on video.

### Embedding / Customizing nanocosmos technology 

Nanocosmos also offers special OEM and customization service. Dependent on your needs, we may offer different models of licensing or application development.

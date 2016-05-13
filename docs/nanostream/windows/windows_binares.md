# nanoStream Live Video Encoder - Binary Modules for Windows
This list covers the Windows binaries.
**NOTES:**
You require a distribution license agreement to use any specific module for distributing it to 3rd parties
Usually it is recommended and best practice to use our nanostream-plugins setup for redistribution
A typical distribution license does NOT include the application files (exe)
Not all combinations of modules will work out of the box.
**nanoStream Runtime Installer**
For Windows and MacOS, you usually should use the [runtime installer][a6957aa7] to deploy nanoStream components.
## Applications
| Module | Description | Dependencies |
|--------|-------------|--------------|
| LiveEnc.exe | nanoStream Live Video Encoder (GUI) | nanoATLServer.dll |
| LiveEncCmd.exe | nanoStream Live Video Encoder (Command Line) | nanoATLServer.dll |
| nanoLicenseTool.exe | | |
## Plugins
| Module | Description | Dependencies |
|--------|-------------|--------------|
| nanoStream.ax | nanoStream Plugin for ActiveX and Internet Explorer | nanoATLServer.dll |
| np_nanoStream.dll | nanoStream Plugin for Mozilla | nanoATLServer.dll |
## MPEG-2 Based DirectShow Filters
| Module | Description | Dependencies |
|--------|-------------|--------------|
| nmpeg2enc.ax | nanocosmos MPEG-2 Video Encoder | nanoATLServer.dll |
| nmpeg2dec.ax | nanocosmos MPEG-2 Video Decoder | nanoATLServer.dll |
| nmpaenc.ax | nanocosmos MPEG Audio Encoder | nanoATLServer.dll |
| nmpegsplitter.ax | nanocosmos MPEG Splitter | nanoATLServer.dll |
| nanotswriter.ax | nanocosmos MPEG Multiplexer for Transport Stream | nanoATLServer.dll |
## MPEG-4/H.264 Based DirectShow Filters
| Module | Description | Dependencies |
|--------|-------------|--------------|
| nh264enc.ax | nanocosmos H.264 Video Encoder | nanoATLServer.dll, libiomp5md.dll |
| nh264dec.ax | nanocosmos H.264 Video Decoder | nanoATLServer.dll |
| naacenc.ax | nanocosmos AAC Audio Encoder | nanoATLServer.dll |
| naacdec.ax | nanocosmos AAC Audio Decoder | nanoATLServer.dll |
| nmp4splitter.ax | nanocosmos MP4 Splitter | nanoATLServer.dll |
| nmp4mux.ax | nanocosmos MP4 Multiplexer | nanoATLServer.dll |
## Streaming DirectShow Filters
| Module | Description | Dependencies |
|--------|-------------|--------------|
| nRTMPSource.ax | nanocosmos RTMP Source | nanoATLServer.dll |
| nRTMPRenderer.ax | nanocosmos RTMP Writer | nanoATLServer.dll |
| nRTSPSource.ax | nanocosmos RTSP Source | nanoATLServer.dll |
| nRTSPSink.ax | nanocosmos RTSP Writer | nanoATLServer.dll |
| nanoNetSource.ax | nanocosmos UDP Source | nanoATLServer.dll |
| nanoNetSink.ax | nanocosmos UDP Writer | nanoATLServer.dll |
## Capture DirectShow Filters
| Module | Description | Dependencies |
|--------|-------------|--------------|
| nscreencap.ax | nanocosmos Live Screen Capture | nanoATLServer.dll |
| VoiceCaptureFilter.dll | nanocosmos AEC Voice Capture Source | nanoATLServer.dll |
## Image Processing DirectShow Filters
| Module | Description | Dependencies |
|--------|-------------|--------------|
| nVideoMixer.ax | nanocosmos Video Mixer | nanoATLServer.dll |
| nVideoMixer2.ax | nanocosmos Video Mixer 2 | nanoATLServer.dll |
| nremixer3d.ax | nanocosmos Video Remixer 3D | nanoATLServer.dll |
| nVideoOverlay.ax | nanocosmos Video Overlay | nanoATLServer.dll |
| nresizer2.ax | nanocosmos Video Resizer 2 | nanoATLServer.dll |
| ncolconv.ax | nanocosmos Color Space Converter | nanoATLServer.dll |
## Other DirectShow Filters
| Module | Description | Dependencies |
|--------|-------------|--------------|
| nanodump.ax | nanocosmos File Dump | nanoATLServer.dll |
| nAudioVolume.ax | nanocosmos Audio Volume | |
| nWavWriter.ax | nanocosmos Wave Writer | nanoATLServer.dll |
## Related Modules
| Module | Description | Dependencies |
|--------|-------------|--------------|
| nMediaBridge.ax | nanocosmos Media Bridge - *add support for seemless switch / live encoding / file streaming* | |
## Dependencies
**Note:** Only the nanoATLServer.dll is mandatory. The Intel and MS files may be optional, dependent on your OS.
| Module | Description | Dependencies |
|--------|-------------|--------------|
| nanoATLServer.dll | nanocosmos License Server | |
| libiomp5md.dll | Intel OpenMP Library | |
| vcomp90.dll | MS OpenMP Library | |

  [a6957aa7]: http://nanocosmos.de/get/nanostream "http://nanocosmos.de/get/nanostream"

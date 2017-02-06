# nanocosmos Developer Documentation
Welcome to the nanocosmos Developer Documentation. Here you can find every documentation available for our products nanoStream and bintu. nanoStream is our streaming sdk, which can be used to stream live av-streams using for example rtmp. Bintu, our streaming service, allows you to use our streaming environment in your application. Therefore you need to use the bintu sdk which is described in this documentation.
## nanoStream Documentation
The nanoStream sdk ist available for a wide range of operating systems. Beginning with windows and macos, we now even support Android and iOS. In addtion the nanoStream sdk can be used with directshow , within most modern webbrowsers and as Adobe Native Extension. Therefore this documentation contains information for the usage of the nanoStream sdk in all of these cases.
### Android Documentation
#### [Streaming Media](nanostream/android/android_developer_manual_streaming.md)
This developer manual provides a quick insight in how to setup the basic streaming functionality in android apps using the nanoStream SDK. Furthermore it contains a description of some main functions and options of the sdk.
#### [Playback](nanostream/android/android_developer_manual_streaming.md)
This developer manual provides a quick insight in how to setup the basic playback functionality in android apps using the nanoStream SDK. Furthermore it contains a description of some main functions and options of the sdk.
#### [Samples](nanostream/android/android_developer_manual_sample.md)
To allow an even quicker start with the nanoStream SDK for Android we provide some basic samples. These samples are containing android studio projects with the basic app structure needed from using the nanoStream SDK. Currently, we are providing two different sample. The Streamer Sample ,containing the basic setup for streaming AV-Data from your device and the playback sample, containing the basic setup for playing rtmp-streams on your device.
### [iOS Documentation](nanostream/ios/nanostream-ios-sdk.md)
The nanoStream iOS documentation provides a short introduction in the basic usage of the nanoStream SDK for iOS.
### [MacOS](nanostream/macos/nanostream-macos-sdk.md)
An introduction into the nanoStream SDK for MacOS and streaming with it.
### Windows
#### [Developer Manual](nanostream/windows/windows_developer_manual.md) & [Binary Modules](nanostream/windows/windows_binares.md)
An overview over the available components for windows and directshow including the GUI-Software and the directshow filter.
#### [License help](nanostream/windows/windows_license_help.md)
A tutorial on how to register the license in windows correctly.
#### [RTMP Network Renderer & Writer](nanostream/windows/windows_networkwriter.md)
Description of the RTMP Network Renderer & Writer filter for directshow.
#### Language integration
Tutorials on how to use the nanoStream SDK in a variety of programming languages, including [C++](nanostream/windows/language_integration/nanostream_cpp_integration.md), [C#](nanostream/windows/language_integration/nanostream_csharp_integration.md), [Delphi](nanostream/windows/language_integration/nanostream_delphi_integration.md), [VisualC++](nanostream/windows/language_integration/nanostream_activex_visualcpp.md) und [MFC](nanostream/windows/language_integration/nanostream_activex_visualcpp_mfc.md).
### DirectShow
A collection of descriptions of some functionalities of the directshow filters.

- [Audio Volume](nanostream/directshow/directshow_audio_volume.md)
- H.264:
  - [AVC/H.264 Video Codec](nanostream/directshow/directshow_avc_h264.md)
  - [nanoAVC/H.264 DirectShow Decoding](nanostream/directshow/directshow_nanoAVC_decoding_sdk.md)
  - [nanoAVC/H.264 DirectShow Encoding](nanostream/directshow/directshow_nanoAVC_encoding_sdk.md)
  - [H.264 Video Decoder Filter](nanostream/directshow/directshow_h264_video_decoder.md)
  - [H.264 Video Encoder Filter](nanostream/directshow/directshow_h264_video_encoder.md)
- MPEG:
  - [MPEG2 Broadcast SDK](nanostream/directshow/directshow_mpeg2_broadcast_sdk.md)
  - [MPEG2 Video Decoder](nanostream/directshow/directshow_mpeg2_video_decoder.md)
  - [MPEG2 Video Encoder](nanostream/directshow/directshow_mpeg2_video_encoder.md)
  - [MPEG Audio Encoder](nanostream/directshow/directshow_mpeg_audio_encoder.md)
- [Quicktime IMX Playback](nanostream/directshow/directshow_quicktime_imx.md)
- RTMP:
  - [RTMP Source](nanostream/directshow/directshow_rtmp_source.md)
  - [RTMP Writer](nanostream/directshow/directshow_rtmp_writer.md)
  - [RTMP Status & Statistics](nanostream/directshow/directshow_rtmp_status_statistics.md)
- RTSP:
  - [RTSP Sink](nanostream/directshow/directshow_rtsp_sink.md)
  - [RTSP Source](nanostream/directshow/directshow_rtsp_source.md)
- [UDP/TS Streaming](nanostream/directshow/directshow_udp_ts_streaming.md)
- Video Filter:
  - [Screen Capture Filter](nanostream/directshow/directshow_screen_capture_filter.md)
  - [Video Mixer PiP](nanostream/directshow/directshow_video_mixer.md)
  - [Video Mixer Overlay](nanostream/directshow/directshow_overlay_mixing.md)

### Additional Knowledge
A collection of articles about some general topics in streaming media related to the nanocosmos products.

*  [Acoustic Echo Cancellation](nanostream/support/nanostream_aec.md)
- [Audio Level](nanostream/support/nanostream_audio_levels.md)
- [Bitrate Control & Statistics](nanostream/support/nanostream_bitrate_control_statistics.md)
- [Latency](nanostream/support/nanostream_latency.md)
- [Low Latency](nanostream/support/nanostream_low_latency.md)
- [Overlay Mixer](nanostream/support/nanostream_mixer_overlay.md)
- [MP4 Recording](nanostream/support/nanostream_mp4_recording.md)
- [Remote Server Recording](nanostream/support/nanostream_remote_server_recording.md)
- [UDP/TS Streaming](nanostream/support/nanostream_udp_ts_streaming.md)
- [RTMP](nanostream/support/nanostream_rtmp_all.md)


## Bintu Documentation
### [Android](bintu/android/bintu-android-sdk.md)
A how to on the basic usage of the bintu.live sdk for android and its functionality.
### [iOS](bintu/ios/bintu_ios_sdk.md)
A how to on the basic usage of the bintu.live sdk for iOS and its functionality including [the provided samples](bintu/ios/bintu_ios_sample.md).

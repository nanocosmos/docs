# nanoStream C++ Integration
The C++ plugin interface is similar to the plugin property/method interface, but has separate methods for “getting” and “setting” the properties.
**NOTE: SDK / Developer license is needed for this functionality.**
```cppMIDL_INTERFACE("65E7065E-43B5-46e4-9766-4E01ACAE530C")
IRTMPActiveXCommands : public IDispatch```
&nbsp;

## Initialization and Configuration:
```cpp
InitEncoder( )
get_PluginVersion( /* [retval][out] */ LONG *pVal)```
&nbsp;

## License Key String
```cpp
get_License( /* [retval][out] */ BSTR *pVal)
put_License( /* [in] */ BSTR newVal)
get_EnablePreview(/* [retval][out] */ LONG *pVal)
put_EnablePreview( /* [in] */ LONG newVal)
```
&nbsp;

## Destination File Name or Stream URL

Example destination URL:"rtmp://localhost/live+myStream"
```cpp
get_DestinationURL( /* [retval][out] */ BSTR *pVal)
put_DestinationURL( /* [in] */ BSTR newVal)```
&nbsp;

## Video and Audio Capture Devices (0 … n)
```cpp
get_NumberOfVideoSources( /* [retval][out] */ LONG *pVal)
get_NumberOfAudioSources( /* [retval][out] */ LONG *pVal)
GetVideoSource( /* [in] */ LONG num, /* [retval][out] */ BSTR *pVal)
GetAudioSource( /* [in] */ LONG num, /* [retval][out] */ BSTR *pVal)
get_VideoSource( /* [retval][out] */ LONG *pVal)
put_VideoSource( /* [in] */ LONG newVal)
get_AudioSource( /* [retval][out] */ LONG *pVal)
put_AudioSource( /* [in] */ LONG newVal)
get_VideoFormat( /* [retval][out] */ BSTR *pVal)
put_VideoFormat( /* [in] */ BSTR newVal)
get_AudioFormat( /* [retval][out] */ BSTR *pVal)
put_AudioFormat( /* [in] */ BSTR newVal)
```
&nbsp;

## Video and Audio Encoding Bitrates (Quality in Bits/s)
```cpp
get_VideoBitrate( /* [retval][out] */ LONG *pVal)
put_VideoBitrate( /* [in] */ LONG newVal)
get_AudioBitrate( /* [retval][out] */ LONG *pVal)
put_AudioBitrate( /* [in] */ LONG newVal)
```
&nbsp;

## Video Capture Frame Size and Frame Rate
```cpp
get_VideoWidth( /* [retval][out] */ LONG *pVal)
put_VideoWidth( /* [in] */ LONG newVal)
get_VideoHeight( /* [retval][out] */ LONG *pVal)
put_VideoHeight( /* [in] */ LONG newVal)
get_VideoFrameRate(/* [retval][out] */ DOUBLE *pVal)
put_VideoFrameRate(/* [in] */ DOUBLE newVal)
get_OutputFormat( /* [retval][out] */ LONG *pVal)
put_OutputFormat( /* [in] */ LONG newVal)
get_CaptureWidth( /* [retval][out] */ LONG *pVal)
put_CaptureWidth( /* [in] */ LONG newVal)
get_CaptureHeight( /* [retval][out] */ LONG *pVal)
put_CaptureHeight( /* [in] */ LONG newVal)
CheckVideoFormat( )
```
&nbsp;

## Encoder / Stream Control:
```cpp
StartPreview( )
StartBroadcast( )
StopPreview( )
StopBroadcast( )
```
&nbsp;

## Screen Capture Area:
```cpp
get_ScreenRegionLeft( /* [retval][out] */ LONG *pVal)
put_ScreenRegionLeft( /* [in] */ LONG newVal)
get_ScreenRegionTop( /* [retval][out] */ LONG *pVal)
put_ScreenRegionTop( /* [in] */ LONG newVal)
get_ScreenRegionRight( /* [retval][out] */ LONG *pVal)
put_ScreenRegionRight( /* [in] */ LONG newVal)
get_ScreenRegionBottom(/* [retval][out] */ LONG *pVal)
put_ScreenRegionBottom(/* [in] */ LONG newVal)
```
&nbsp;

## Resize Video
```cpp
get_EnableResize( /* [retval][out] */ LONG *pVal)
put_EnableResize( /* [in] */ LONG newVal)
get_VideoResizeWidth( /* [retval][out] */ LONG *pVal)
put_VideoResizeWidth( /* [in] */ LONG newVal)
get_VideoResizeHeight( /* [retval][out] */ LONG *pVal)
put_VideoResizeHeight( /* [in] */ LONG newVal)
```
&nbsp;

## Video Effects, Mix, Overlay, 3D
```cpp
get_VideoMixer(/* [retval][out] */ LONG *pVal)
put_VideoMixer(/* [in] */ LONG newVal)
get_VideoSource2( /* [retval][out] */ LONG *pVal)
put_VideoSource2( /* [in] */ LONG newVal)
get_TextOverlayText(/* [retval][out] */ BSTR *pVal)
put_TextOverlayText(/* [in] */ BSTR newVal)
get_VideoEffect( /* [retval][out] */ LONG *pVal)
put_VideoEffect( /* [in] */ LONG newVal)
```
&nbsp;

## Audio Control
```cpp
get_AudioDelay( /* [retval][out] */ DOUBLE *pVal)
put_AudioDelay( /* [in] */ DOUBLE newVal)
get_AudioVolume(/* [retval][out] */ LONG *pVal)
put_AudioVolume(/* [in] */ LONG pVal)
GetConfig( /* [in] */ BSTR prop, /* [retval][out] */ BSTR *pVal)
SetConfig( /* [in] */ BSTR prop, /* [in] */ BSTR pVal)
get_XMLProfile( /* [retval][out] */ BSTR *pVal)
put_XMLProfile( /* [in] */ BSTR pVal)
```
&nbsp;

## Miscellaneous

```cpp
get_ActivateKeyServer( /* [retval][out] */ LONG *pVal)
put_ActivateKeyServer( /* [in] */ LONG newVal)
get_FileSourceFilename(/* [retval][out] */ BSTR *pVal)
put_FileSourceFilename(/* [in] */ BSTR newVal)
get_FileSource2Filename(/* [retval][out] */ BSTR *pVal)
put_FileSource2Filename(/* [in] */ BSTR newVal)
get_MP4MuxMode( /* [retval][out] */ LONG *pVal)
put_MP4MuxMode( /* [in] */ LONG newVal)
get_OriginalVideoSize(/* [retval][out] */ LONG *pVal)
put_OriginalVideoSize( /* [in] */ LONG newVal)
get_ShowPropertyPage( /* [retval][out] */ LONG *pVal)
put_ShowPropertyPage( /* [in] */ LONG newVal)
```
&nbsp;

# nanoStream C++ Integration
The C++ plugin interface is similar to the plugin property/method interface, but has separate methods for “getting” and “setting” the properties.
**NOTE: SDK / Developer license is needed for this functionality.**
<pre class="lang:c++ decode:true">MIDL_INTERFACE("65E7065E-43B5-46e4-9766-4E01ACAE530C")
IRTMPActiveXCommands : public IDispatch</pre>
&nbsp;

## Initialization and Configuration:
<pre class="lang:c++ decode:true">InitEncoder( )
get_PluginVersion( /* [retval][out] */ LONG *pVal)</pre>
&nbsp;

## License Key String
<pre class="lang:c++ decode:true">get_License( /* [retval][out] */ BSTR *pVal)
put_License( /* [in] */ BSTR newVal)
get_EnablePreview(/* [retval][out] */ LONG *pVal)
put_EnablePreview( /* [in] */ LONG newVal)</pre>
&nbsp;

## Destination File Name or Stream URL

Example destination URL:"rtmp://localhost/live+myStream"
<pre class="lang:c++ decode:true">get_DestinationURL( /* [retval][out] */ BSTR *pVal)
put_DestinationURL( /* [in] */ BSTR newVal)</pre>
&nbsp;

## Video and Audio Capture Devices (0 … n)
<pre class="lang:c++ decode:true">get_NumberOfVideoSources( /* [retval][out] */ LONG *pVal)
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
</pre>
&nbsp;

## Video and Audio Encoding Bitrates (Quality in Bits/s)
<pre class="lang:c++ decode:true">get_VideoBitrate( /* [retval][out] */ LONG *pVal)
put_VideoBitrate( /* [in] */ LONG newVal)
get_AudioBitrate( /* [retval][out] */ LONG *pVal)
put_AudioBitrate( /* [in] */ LONG newVal)
</pre>
&nbsp;

## Video Capture Frame Size and Frame Rate
<pre class="lang:c++ decode:true">get_VideoWidth( /* [retval][out] */ LONG *pVal)
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
</pre>
&nbsp;

## Encoder / Stream Control:
<pre class="lang:c++ decode:true">StartPreview( )
StartBroadcast( )
StopPreview( )
StopBroadcast( )
</pre>
&nbsp;

## Screen Capture Area:
<pre class="lang:c++ decode:true">get_ScreenRegionLeft( /* [retval][out] */ LONG *pVal)
put_ScreenRegionLeft( /* [in] */ LONG newVal)
get_ScreenRegionTop( /* [retval][out] */ LONG *pVal)
put_ScreenRegionTop( /* [in] */ LONG newVal)
get_ScreenRegionRight( /* [retval][out] */ LONG *pVal)
put_ScreenRegionRight( /* [in] */ LONG newVal)
get_ScreenRegionBottom(/* [retval][out] */ LONG *pVal)
put_ScreenRegionBottom(/* [in] */ LONG newVal)
</pre>
&nbsp;

## Resize Video
<pre class="lang:c++ decode:true">get_EnableResize( /* [retval][out] */ LONG *pVal)
put_EnableResize( /* [in] */ LONG newVal)
get_VideoResizeWidth( /* [retval][out] */ LONG *pVal)
put_VideoResizeWidth( /* [in] */ LONG newVal)
get_VideoResizeHeight( /* [retval][out] */ LONG *pVal)
put_VideoResizeHeight( /* [in] */ LONG newVal)
</pre>
&nbsp;

## Video Effects, Mix, Overlay, 3D
<pre class="lang:c++ decode:true">get_VideoMixer(/* [retval][out] */ LONG *pVal)
put_VideoMixer(/* [in] */ LONG newVal)
get_VideoSource2( /* [retval][out] */ LONG *pVal)
put_VideoSource2( /* [in] */ LONG newVal)
get_TextOverlayText(/* [retval][out] */ BSTR *pVal)
put_TextOverlayText(/* [in] */ BSTR newVal)
get_VideoEffect( /* [retval][out] */ LONG *pVal)
put_VideoEffect( /* [in] */ LONG newVal)
</pre>
&nbsp;

## Audio Control
<pre class="lang:c++ decode:true crayon-selected">get_AudioDelay( /* [retval][out] */ DOUBLE *pVal)
put_AudioDelay( /* [in] */ DOUBLE newVal)
get_AudioVolume(/* [retval][out] */ LONG *pVal)
put_AudioVolume(/* [in] */ LONG pVal)
GetConfig( /* [in] */ BSTR prop, /* [retval][out] */ BSTR *pVal)
SetConfig( /* [in] */ BSTR prop, /* [in] */ BSTR pVal)
get_XMLProfile( /* [retval][out] */ BSTR *pVal)
put_XMLProfile( /* [in] */ BSTR pVal)
</pre>
&nbsp;

## Miscellaneous
<pre class="lang:c++ decode:true">get_ActivateKeyServer( /* [retval][out] */ LONG *pVal)
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
</pre>
&nbsp;

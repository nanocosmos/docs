---
id: nanostream_windows_language_integration
title: nanoStream Windows Language Integration
sidebar_label: nanoStream Windows Language Integration
---

## VisualC++ Integration

This tutorial shows how to create a custom Live Encoding and Streaming application with the nanoStream plugins, based on VisualStudio and C++ for a simple console application.
*This tutorial was created with VisualStudio 2008 but should work similar with VS 2010.*
Create a new Win32 Console Application Project (File/New Project)

![visualc_1](/img/nanostream/windows/visualc_1-300x215.png)

Leave all options to default and press “Finish”

![visualc_2](/img/nanostream/windows/visualc_2-300x252.png)



## VisualC++ MFC Integration

This tutorial shows how to create a custom Live Encoding and Streaming application with the nanoStream plugins, based on VisualStudio, C++ and MFC.
This tutorial was created with VisualStudio 2008 but should work similar with VS 2010.
Create a new MFC Application Project (File/New Project)

![mfc_1](/img/nanostream/windows/nanostream_activex_visualcpp_mfc1.png)

In the following MFC Application Wizard, select “Dialog Based Application”

![mfc_2](/img/nanostream/windows/nanostream_activex_visualcpp_mfc2.png)

Select all default values for the rest and Finish

![mfc_3](/img/nanostream/windows/nanostream_activex_visualcpp_mfc3.png)

A new project solution is created based on an empty dialog.

Right-click on the dialog and select “Insert ActiveX Control…”

![mfc_4](/img/nanostream/windows/nanostream_activex_visualcpp_mfc4.png)

Select “nanoStream RTMPActiveX Class”

![mfc_5](/img/nanostream/windows/nanostream_activex_visualcpp_mfc5.png)

Position and resize the control window accordingly.

The window will show a live camera preview later.

![mfc_6](/img/nanostream/windows/nanostream_activex_visualcpp_mfc6.png)

Create a class member variable for the control for simpler access:

![mfc_7](/img/nanostream/windows/nanostream_activex_visualcpp_mfc7.png)

![mfc_8](/img/nanostream/windows/nanostream_activex_visualcpp_mfc8.png)

Now let us create a button to create a camera preview.

From the Toolbox, select “Button” and place the button on the dialog.

![mfc_9](/img/nanostream/windows/nanostream_activex_visualcpp_mfc9.png)



Double-Click on the button to edit the new source code event handler:

![mfc_10](/img/nanostream/windows/nanostream_activex_visualcpp_mfc10.png)



This is the complete code which shows the camera preview:

```cpp
void CnanoStreamTestDlg::OnBnClickedButton1()
{
//nanoStream Live Video Encoder Plugin
m_nanoStream.InitEncoder(); // Init Encoder
m_nanoStream.put_VideoSource(0); // Select Video Capture Source
m_nanoStream.StartPreview(); // Start Camera Preview in Window
}
```

&nbsp;

Now add another button to start a real encoded stream.
Add the following code to the button:

```cpp
void CnanoStreamTestDlg::OnBnClickedButton2()
{
// nanoStream Live Video Encoder Plugin
// Live Encoding/Streaming to RTMP Server
m_nanoStream.put_License(_T("nlic:1.0:nanoLiveEncDemo:1.1:LivePlgDemo=1,MP4=1,RTMP=1,....."));
m_nanoStream.InitEncoder(); // Init Encoder
m_nanoStream.put_VideoSource(0); // Select Video Capture Source
m_nanoStream.put_VideoBitrate(500000); // 500 kBit/s encoded bitrate

// URL to Flash Media Server / Wowza Media Server
// Syntax: rtmp://&lt;server&gt;/&lt;app&gt;+&lt;stream&gt;
m_nanoStream.put_DestinationURL(_T("rtmp://ws1.3p0.de/live+mfcStream01"));
m_nanoStream.StartBroadcast(); // Start Camera Preview in Window
}
```

When pressing button2 / broadcast, the live encoding will be started.



## C++ Integration

The C++ plugin interface is similar to the plugin property/method interface, but has separate methods for “getting” and “setting” the properties.



> **NOTE:**
>
> A SDK / Developer license is needed for this functionality.



```c++
MIDL_INTERFACE("65E7065E-43B5-46e4-9766-4E01ACAE530C")
IRTMPActiveXCommands : public IDispatch
```



### Initialization and Configuration:

```c++
InitEncoder( )
get_PluginVersion( /* [retval][out] */ LONG *pVal)
```



### License Key String

```c++
get_License( /* [retval][out] */ BSTR *pVal)
put_License( /* [in] */ BSTR newVal)
get_EnablePreview(/* [retval][out] */ LONG *pVal)
put_EnablePreview( /* [in] */ LONG newVal)
```



### Destination File Name or Stream URL

Example destination URL: `rtmp://localhost/live+myStream`

```c++
get_DestinationURL( /* [retval][out] */ BSTR *pVal)
put_DestinationURL( /* [in] */ BSTR newVal)
```



### Video and Audio Capture Devices (0 … n)

```c++
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



### Video and Audio Encoding Bitrates (Quality in Bits/s)

```c++
get_VideoBitrate( /* [retval][out] */ LONG *pVal)
put_VideoBitrate( /* [in] */ LONG newVal)
get_AudioBitrate( /* [retval][out] */ LONG *pVal)
put_AudioBitrate( /* [in] */ LONG newVal)
```



### Video Capture Frame Size and Frame Rate

```c++
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



### Encoder / Stream Control:

```c++
StartPreview( )
StartBroadcast( )
StopPreview( )
StopBroadcast( )
```



### Screen Capture Area:

```c++
get_ScreenRegionLeft( /* [retval][out] */ LONG *pVal)
put_ScreenRegionLeft( /* [in] */ LONG newVal)
get_ScreenRegionTop( /* [retval][out] */ LONG *pVal)
put_ScreenRegionTop( /* [in] */ LONG newVal)
get_ScreenRegionRight( /* [retval][out] */ LONG *pVal)
put_ScreenRegionRight( /* [in] */ LONG newVal)
get_ScreenRegionBottom(/* [retval][out] */ LONG *pVal)
put_ScreenRegionBottom(/* [in] */ LONG newVal)
```



### Resize Video

```c++
get_EnableResize( /* [retval][out] */ LONG *pVal)
put_EnableResize( /* [in] */ LONG newVal)
get_VideoResizeWidth( /* [retval][out] */ LONG *pVal)
put_VideoResizeWidth( /* [in] */ LONG newVal)
get_VideoResizeHeight( /* [retval][out] */ LONG *pVal)
put_VideoResizeHeight( /* [in] */ LONG newVal)
```



### Video Effects, Mix, Overlay, 3D

```c++
get_VideoMixer(/* [retval][out] */ LONG *pVal)
put_VideoMixer(/* [in] */ LONG newVal)
get_VideoSource2( /* [retval][out] */ LONG *pVal)
put_VideoSource2( /* [in] */ LONG newVal)
get_TextOverlayText(/* [retval][out] */ BSTR *pVal)
put_TextOverlayText(/* [in] */ BSTR newVal)
get_VideoEffect( /* [retval][out] */ LONG *pVal)
put_VideoEffect( /* [in] */ LONG newVal)
```



### Audio Control

```c++
get_AudioDelay( /* [retval][out] */ DOUBLE *pVal)
put_AudioDelay( /* [in] */ DOUBLE newVal)
get_AudioVolume(/* [retval][out] */ LONG *pVal)
put_AudioVolume(/* [in] */ LONG pVal)
GetConfig( /* [in] */ BSTR prop, /* [retval][out] */ BSTR *pVal)
SetConfig( /* [in] */ BSTR prop, /* [in] */ BSTR pVal)
get_XMLProfile( /* [retval][out] */ BSTR *pVal)
put_XMLProfile( /* [in] */ BSTR pVal)
```



### Miscellaneous

```c++
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



## C# Integration

Add a New Visual C# Project / Windows Forms application

![c_sharp_1](/img/nanostream/windows/c_sharp_1-300x202.png)

Move mouse to the left to the *Toolbox* list, search for *General* and right click to select *Choose Items…*

![c_sharp_2](/img/nanostream/windows/c_sharp_2-241x300.png)

Select tab *COM Components* under *Name* nanoStream RTMPActiveX Class.

![c_sharp_3](/img/nanostream/windows/c_sharp_3-300x206.png)

Drag the *nanoStream* Object Icon from the Toolbox onto your Form, and drag a Button onto your Form.

![c_sharp_5](/img/nanostream/windows/c_sharp_5-278x300.png)

Double Click the “Button” to add source code:

```csharp
private void button1_Click(object sender, EventArgs e)
{
axRTMPActiveX1.InitEncoder();
axRTMPActiveX1.StartPreview();
}
```

Run the application and press the button. You should see a video image from your default camera.

![c_sharp_6](/img/nanostream/windows/c_sharp_6-300x300.png)



### Additional Options

Video Device

```csharp
axRTMPActiveX1.VideoSource = 0; // may be 1,2,… dependent on your devices
```



## Delphi Integration

nanoStream plugins are based on `ActiveX` Controls, which can be used from within any development environment.
This document describes how to use the nanoStream plugins from within the Delphi Development IDE.

In a Delphi Project, first *Import ActiveX Control* under the *Component* tab

![delphi_1](/img/nanostream/windows/delphi_1-300x95.png)

Search for nanoStream Live Video Encoder.

![Delphi_import_activex](/img/nanostream/windows/Delphi_import_activex-264x300.png)

Create a *RTMP ActiveX* Unit.

![Delphi_rtmp_activex](/img/nanostream/windows/Delphi_rtmp_activex-300x86.png)

On the resulting form, pull an area with the mouse.

![Delphi_FormArea](/img/nanostream/windows/Delphi_FormArea.png)

Then add a standard button to test nanoStream:

![Delphi_Button](/img/nanostream/windows/Delphi_button.png)

Double Click the button and add this code:

```delphi
procedure TForm1.Button1Click(Sender: TObject);
begin
RTMPActiveX1.InitEncoder;
RTMPActiveX1.StartPreview;
end;
```

Run the project.
Click on the button.
You should see nanoStream running in camera preview mode then.
Add Streaming / Broadcasting to a Media Server

```delphi
RTMPActiveX1.DestinationURL := 'rtmp://example.com/live+delphi123';
RTMPActiveX1.VideoBitrate := 200000;
RTMPActiveX1.StartBroadcast;
```
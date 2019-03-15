---
id: faq_nanostream_sdk_win
title: nanoStream SDK for Windows
sidebar_label: nanoStream SDK for Windows
---

<details><summary><strong>How do I enable logging for the plugin?</strong></summary>

#### Windows

You can enable logging/create a logfile for the plugin following these steps:

- in explorer create a folder - e.g. 
```
C:\temp
```
- open the registry editor (`regedit.exe`)
- go to the right registry key:
    - for the browser plugin for firefox or chrome go to 

    ```
    HKEYCURRENTUSER\Software\DebugNano\npnanoStream.dll
    ```
    - for the browser plugin for internet explorer or the `ActiveX` based desktop apps go to 
    ```
    HKEYCURRENT_USER\Software\DebugNano\nanoStream.ax
    ```
- double click on `“LogToFile”` and specifiy a filename **including** the folder path - make sure the folder exists! - e.g.: 
    ```
    “C:\temp\nanostream.log”
    ```
    and press OK
- double click on `“TRACE”` and insert the value `“9”`, press OK
- you have to **restart the browser (or the app)** before the log settings take effect 

Disabling the logging again, is simple:
- set `“TRACE”` to `“0”`

>For a Long version see [here](https://www.nanocosmos.de/v4/documentation/live_video_encoder_-_event_logging)



#### MacOS

> The logfile is usually located in the home directory of the user and 
> is called `“LiveEncoderPlugin.log”`.

The settings for the loglevels can be changed in the file 
```
“~/Library/Preferences/de.nanocosmos.log.prefs”
```
To enable the logging the value for `“LOG_TRACE”` has to be changed to `“9”`.

You have to **restart the browser** before the log settings take effect.

>To disable the logging change the value for `“LOG_TRACE”` back to `“0”`.

</details>

<details><summary><strong>How do I enable logging for a specific module?</strong></summary>

#### Enable the logging

You can enable logging/create a logfile for a module following these steps (**replace $moduleName** with the module you would like to enable logging for):

- in explorer create a folder - e.g. 
```
C:\temp
```
- open the registry editor (`regedit.exe`)

- go to this reg key:
```
  HKEYCURRENT*USER\Software\DebugNano\$moduleName.ax
```
- double click on `“LogToFile”` and specifiy a filename

- double click on `“TRACE”` and insert the a value between `1 and 9`, `press OK`

>Note: the log file needs to be a full path- make sure the folder exists! - e.g.: 
> ```
> “C:\temp\logfile.log”
> ```

>**you have to restart the app before the log settings take effect**

#### Disabling the logging

- set `“TRACE”` to `“0”`
- clear `“LogToFile”` (double click and the delete every character)

>**you have to restart the app before the log settings take effect**

#### Module List

**Replacing $moduleName**

| **Module**                                    | **moduleName**   |
| --------------------------------------------- | ---------------- |
| nanocosmos ActiveX Plugin                     | nanoStream       |
| nanocosmos Firefox or Chrome Plugin           | np_nanoStream    |
| nanocosmos AAC Audio Decoder                  | naacdec          |
| nanocosmos AAC Audio Encoder                  | naacenc          |
| nanocosmos Audio Volume                       | nAudioVolume     |
| nanocosmos Color Space Converter              | ncolconv         |
| nanocosmos DVD Source                         | ndvdsrc          |
| nanocosmos Dump                               | nanoDump         |
| nanocosmos H.264 Video Decoder                | nh264dec         |
| nanocosmos H.264 Video Encoder                | nh264enc         |
| nanocosmos H.264 Video Encoder QS             | nh264enc_qs      |
| nanocosmos Live Audio Capture                 | naudiocap        |
| nanocosmos Live Screen Capture                | nscreencap       |
| nanocosmos MP4 Muxer                          | nmp4mux          |
| nanocosmos MP4 Splitter                       | nmp4splitter     |
| nanocosmos MPEG Audio Encoder                 | nmpaenc          |
| nanocosmos MPEG PS Writer                     | nPSWriter        |
| nanocosmos MPEG Splitter                      | nmpegsplitter    |
| nanocosmos MPEG TS Multiplexer                | nanoTsMux        |
| nanocosmos MPEG TS Writer                     | nanoTsWriter     |
| nanocosmos MPEG-2 HD/SD Video Decoder         | nmpeg2dec        |
| nanocosmos MPEG-2 Video Encoder               | nmpeg2enc        |
| nanocosmos MXF Reader                         | nMXFReader       |
| nanocosmos MXF Writer                         | nMXFSink         |
| nanocosmos Net Source                         | nanoNetSource    |
| nanocosmos QT IMX Source                      | nqtsource        |
| nanocosmos Quicktime Writer (MPEG2/Broadcast) | nmp4mux          |
| nanocosmos RTMP Network Writer                | nRtmpRenderer    |
| nanocosmos RTMP Source                        | nRTMPSource      |
| nanocosmos RTSP Network Writer                | nRTSPSink        |
| nanocosmos RTSP Source                        | nRTSPSource      |
| nanocosmos Source Bridge                      | nMediaBridge     |
| nanocosmos Subtitle encoder                   | nSubtitleEncoder |
| nanocosmos Text Overlay                       | nVideoOverlay    |
| nanocosmos UDP Network Writer                 | nanoNetSink      |
| nanocosmos Video Mixer 2                      | nVideoMixer2     |
| nanocosmos Video Remixer 3D                   | nremixer3d       |
| nanocosmos Video Resizer 2                    | nresizer2        |
| nanocosmos VideoMixer                         | nVideoMixer      |
| nanocosmos Virtual Cam                        | nVirtualCam      |
| nanocosmos WAV Writer                         | nWavWriter       |

#### Example

Typical example is `nRtmpRenderer`, which sends the `RTMP Live Stream` to the server.

- create a log folder 
```
C:\TEMP
```

- open `regedit.exe`
- open this key:

```
HKEY CURRENT USER\Software\DebugNano\nRtmpRenderer.ax
```

- double click on `“LogToFile”` and add 
```
“C:\temp\nRtmpRenderer.log”
```
- press OK

- double click on `“TRACE”` and insert the value `“6”`, press OK

> Note: The log file can be very large for `values > 1`, be aware to 
> disable logging again

</details>

<details><summary><strong>Which settings affect the performance of the H264 Encoder?</strong></summary>

Most performance relevant settings are :

- Resolution, lower
- Framerate, lower
- Quality/Speed ratio, should be `1`
- H.264 Profile, Baseline or Main
- I-frame distance, not too low, `recommended 50-100`
- P-frame distance, lower, should be `1`,` no B-fames coded`
- Entropy coding mode, `CAVLC` is less complex and faster than `CABAC`
- Deinterlacing Mode, `off or auto`,  if the video input is not interlaced or is not getting scaled in the encoder

</details>

<details><summary><strong>After installation the program says - License not valid - what do I do?</strong></summary>

You should have received a valid license from us. There are two ways to apply your license:

- If you installed the complete sdk, there was also a program installed letting you manage your license(s): `License Tool`. It is located in the start menu under 

```
nanocosmos → LiveVideoEncoder → Tools → License Tool
```
If you opened it, you can choose your product and supply your license.



- You can set the license manually with regedit application from windows:

1. open regedit.exe - go to one of the following keys: 
```
“HKEYCURRENTUSER\SOFTWARE\nanocosmos”
```
or 
```
“HKEYLOCALMACHINE\SOFTWARE\nanocosmos”
```
or
```
“HKEYLOCALMACHINE\SOFTWARE\Wow6432Node\nanocosmos” (64bit windows)
```

2.  open the right subkey (e.g. `“LiveVideoEncoder”` for the desktop app nanocosmos Live Video Encoder) - edit or create the string value `“License”` and insert you license key

> Regardless which way you choose, always enter the **whole** license key we have send you. A license key will look similar to the following sample key:
```
nlic:1.0:LiveEnc:1.1:LvApp=1,...:win:20120101,20120202::0:0:id:nchp:1234567890a1234567890b1234567890
```

</details>

<details><summary><strong>How do I report bugs, crashes or other issues?</strong></summary>

[Enable the logging](https://www.nanocosmos.de/v4/documentation/live_video_encoder_-_event_logging) for the nanoStream plugin, application or module, restart the program and repeat the same steps which lead to the program crashing. Send a mail to our support with the logfile attached and a - short description of the problem.

</details>


<details><summary><strong>Can i create my own installer?</strong></summary>

You can create your own custom installer with a SDK or white-label rebranding license. Contact us for further info.

</details>

<details><summary><strong>License error with x64 filter</strong></summary>

If you used the nanoStream license tool (`x86`) to store the license, it will not be visible to `x64` applications.

Please check with registry editor `x64` if the license key exists at:
```
HKEYCURRENTUSER\SOFTWARE\nanocosmos\<License Name>\License
```
or
```
HKEY_LOCAL_MACHINE\SOFTWARE\nanocosmos\<License Name>\License
```
</details>

<details><summary><strong>How do I set default settings for H.264 Encoder?</strong></summary>

There are several ways to configure the default encoder settings.

1. Use the Encoder Application
2. Use the `API`
3. Adjusting the serialized registry settings directly. Heres is a sample registry file, that shows the registry key and values available:
4. Instantiating the `H.264` encoder filter in a `DirectShow` application like GraphEdit or GraphStudio. Open the property page and adjust the settings. When the property page is applied and closed the settings are serialized to the windows registry and will be the default settings for the next instantiation.

```
Windows Registry Editor Version 5.00

[HKEY_CURRENT_USER\Software\Nanocosmos\nh264enc]
"profile"=dword:00000001
"level"=dword:00000000
"codingWidth"=dword:00000000
"codingHeight"=dword:00000000
"aspectWidth"=dword:00000001
"aspectHeight"=dword:00000001
"rateMode"=dword:00000002
"bitrate"=dword:000f4240
"distanceIDR"=dword:00000001
"distanceI"=dword:00000032
"distanceP"=dword:00000001
"quantizer"=dword:00000014
"quality"=dword:00000001
"numRefFrames"=dword:00000001
"deinterlacingMode"=dword:00000001
"deinterlacingMethod"=dword:00000000
"threadingMode"=dword:00000000
"directPredictionMode"=dword:00000002
```

</details>

<details><summary><strong>Error installing the setup for Windows Server 2008</strong></summary>

**Error:**  The file `nanoStream.ax` cannot be registered and fails with error `0x3`.

Solution: `nanoStream.ax` requires the feature “Desktop Experience” to be installed. This feature can be installed with the Server Manager.
</details>

<details><summary><strong>Is there a quiet install mode for the installer? </strong></summary>

Yes, you can use the following command line parameters:
```
/SILENT
```
or 
```
/VERYSILENT
```
</details>

<details><summary><strong>Plugin cannot be installed on MacOS</strong></summary>

When you try to install the plugin for MacOSX and an error pops up “nanostream-plugins.pkg can't be opened because it is from an unidentified developer”, like in the following screenshot:![img](https://www.nanocosmos.de/v4/documentation/_media/mac_error.png)

## Solution

There are two workarounds: 1. Right-click the package in the Downloads folder,click Open and proceed to install the package. 2. Changing the security settings to allow packages downloaded from anywhere in System Preferences/Security & Privacy/General

To change the security settings go to:

`Apple menu > System Preferences… > Security & Privacy > General` tab, then change the setting as highlighted in the screenshot:![img](https://www.nanocosmos.de/v4/documentation/_media/mac_security.png)

*Further Information:* 
[Apple-Support 1](http://support.apple.com/kb/HT5290)
[Apple-Support 2](http://support.apple.com/kb/PH11437)
</details>



<details><summary><strong>How can I use the Audio Volume Meter?</strong></summary>

The Audio Volume of the audio capture device (Microphone/Camera) can be checked with the `GetAudioLevel() API`
.
Here is a code snipped to show how to create a level meter from this:

```c++
:::cpp

const static double REFERENCE = 32768;
const static double MIN_DB = 20 * log10( 1.0 / REFERENCE ) + 40;
const static double MAX_DB = 0;

// 2 channel audio level meter
for(int ch = 0; ch < 2; ch++)
{

	int avgAudioValue = nanoStream.GetAudioLevel(ch);

	WPARAM wParam = 0;
	double db = -1000000;
	if (avgAudioValue > 0)
		db = log10((double)avgAudioValue / REFERENCE) * 20.0;
	if(db < -50.0)
		db = -50.0;

	wParam = (long) ((db - MIN_DB) * 100 / (MAX_DB - MIN_DB));

	// simple progress bars for audio volume level
	SendDlgItemMessage(AUDIO_VOLUME_LEVEL[ch], PBM_SETPOS, wParam, 0);
}
```

</details>

<details><summary><strong>Can I add overlays to the live stream?</strong></summary>

Yes, see [here](https://www.nanocosmos.de/v4/documentation/live_video_encoder_-_overlay_mixing) and [here](https://www.nanocosmos.de/v4/documentation/nanocosmos_-_directshow_overlay_mixing) for detailed explanations.
</details>


<details><summary><strong>Runnning a sample project or solution fails with COMException "Class not registered" </strong></summary>

When starting/debugging a sample project, the `COMException` Class not registered (`REGDB_E_CLASSNOTREG`) is thrown by Visual Studio, althought the `ActiveX` plugin (`nanoStream.ax`) was registered properly with `regsvr32.exe`.

This error occurs most likely due to a wrong setting in the configuration properties for the project.

Make sure the platform is set to either `x86` or `win32`, as the `ActiveX` plugin is not available for `x64` at the moment. Open the Configuration Manager of Visual Studio to [change this setting](http://msdn.microsoft.com/en-us/library/t1hy4dhz%28v=vs.100%29.aspx).
</details>

<details><summary><strong>Which formats do your MXF filters support?</strong></summary>

nanocosmos supports `MPEG-2` video and `PCM/AES` audio in `MXF` containers.
Supported sub formats are `XDCAM-HD422`, `IMX` and others.
Our components have been verified to work and interoperate with professional studio equipment from other vendors.
</details>

<details><summary><strong>How to remove a Quicktime Codec</strong></summary>

If the codec is not uninstalled by the setup automatically you need to manually delete the file from `C:\ProgramFiles\QuickTime\QTComponents`. The files are called `nano.qtx` and `nano.qtr` or similar.
In any case, if a codec does not work as expected, please contact our support team - we might be able to suggest a solution.

</details>

## Live Video Encoder - Acoustic Echo Cancellation (AEC)



This document describes recommended settings for Acoustic Echo Cancellation in a video streaming/video chat application.



### Requirements:

  *nanoStream Live Video Encoder running on Windows Vista or Windows 7
  *RTMP Server (Wowza recommended)
  *Flash Media Player or other client
  *Microphone and Loudspeaker setup to let echo cancellation work (no headset)

###### NOTE:
 These settings are dependent on overall system configurations and may vary between different version releases of encoder, server and client components.

### General Description

When using microphone and speaker setups for audio/video communication, a known acoustic "echo" effect is sometimes leading to disturbing feedback loops. To remove these echoes, a special technique called "Acoustic Echo Cancellation (AEC)" may be used.

Nanocosmos AEC works by installing a special audio driver called "VoiceCaptureDriver".

There are 2 operation modes of this driver:

  *usage within nanoStream Live Video Encoder
Switching on AEC in Live Video Encoder automatically uses the VoiceCaptureDriver

  *usage within DirectShow or other applications
The VoiceCapture driver may be directly used as an audio recording source; \\  additionally the original audio source needs to be configured in the driver properties.

##### Notes:

  *All effects are dependent on hardware and software system setup, microphone and loudspeaker positions.
  *This driver uses the Microsoft "Voice Capture DSP" driver available only with Windows Vista and 7.

### Sample / Test Setup

The nanoStream.html sample web page contains a sample implementation to show how to use the AEC feature within Live Video Encoder. Switch on "AEC" in the "Advanced Options" area.

### Plugin / ActiveX Configuration

#### Switch on AEC

To switch on AEC, use the SetConfig method of the Plugin Interface:
```
    SetConfig("AcousticEchoCancelation","1");
```

//The AEC mode supports some additional configuration settings to fine tune AEC behavior. See nanoEncoder.js for sample code.//

#### Echo Supression
//Specifies how many times the Voice Capture performs acoustic echo suppression (AES) on the residual signal.//

```
    SetConfig("AEC:AesTimes", 2);
```

##### Possible Values:
```
    0, 1, 2 (default=0)
```

##### MS Property:
```
    MFPKEY_WMAAECMA_FEATR_AES
```

#### Gain control

//Specifies whether the Voice Capture DSP performs automatic gain control.//

```
    SetConfig("AEC:Agc", 1);
```

##### Possible Values:
```
    0,1 (default=0)
```
##### MS Property:
```
    MFPKEY_WMAAECMA_FEATR_AGC
```    

#### Acoustic Echo Cancellation

//Specifies the duration of echo that the acoustic echo cancellation (AEC) algorithm can handle, in milliseconds.//
```
    SetConfig("AEC:AecEchoLength", 1024);
```    

##### Possible Values:
```
    128, 256, 512, 1024 (default=256)
```
##### MS Property:
```
    MFPKEY_WMAAECMA_FEATR_ECHO_LENGTH
```    

#### Additional Information:


Microsoft Notes on Windows XP:

 [http://support.microsoft.com/kb/310507][a1031afe]


Microsoft Voice Capture:

[http://msdn.microsoft.com/en-us/library/ff819492(v=vs.85).aspx][ce6b1f0e]

[http://msdn.microsoft.com/en-us/library/ff819411(v=vs.85).aspx][9ff1d5b4]






#### Contact
//Please contact us for further information, extended services are available upon request.//

[[http://www.nanocosmos.de/|http://www.nanocosmos.de]]

[[mailto:info@nanocosmos.de|info@nanocosmos.de]]

(c) 2009-2012, nanocosmos gmbh

[a1031afe]: http://support.microsoft.com/kb/310507 "http://support.microsoft.com/kb/310507"
[ce6b1f0e]: http://msdn.microsoft.com/en-us/library/ff819492(v=vs.85).aspx "http://msdn.microsoft.com/en-us/library/ff819492(v=vs.85).aspx"
[9ff1d5b4]: http://msdn.microsoft.com/en-us/library/ff819411(v=vs.85).aspx "http://msdn.microsoft.com/en-us/library/ff819411(v=vs.85).aspx"

## Introduction


### Purpose


This documentation is about the nanoStream Live Video Streaming SDK for Android and can be used by software developers to integrate nanoStream Live Video Encoding into custom apps.

### Requirements


-	Android 4.1+ (API Level 16)

#### Required permissions:

The nanoStream SDK for android does not request any permissions by itself.
However, it needs a few permissions to work.

The needed permissions are :
* android.permission.INTERNET - This is needed since the stream should be sent over a network.
* android.permission.RECORD_AUDIO - In case your stream is not video-only the app needs this permission to record audio data using the microphone.
* android.permission.RECORD_VIDEO - In case your stream is not audio-only the app needs this permission to record image data using the camera.
* android.permission.WRITE_EXTERNAL_STORAGE - In case the encoded stream should be written on the phone's memory.

How these permissions should be requested depends on the used version of android.

On devices with android versions prior to Android 6.0 the permissions are getting requested once per app installation. They just need to be configured within the AndroidManifest.xml file, so that the user can give the permission while installing the app.

On devices with android versions from 6.0 upwards the permissions should be requested at run time when needed. It can be checked whether a permission is already granted or not. Afterwards, the needed permissions can be requested. This will create a pop-up, which asks the user to grant the needed permissions. If you are working with our BinutStreamer-Sample, an example of this can be found in the CheckAppPermission-Class.

### Getting Started


#### Copy the SDK libraries into your Android Studio project

Add the `net.nanocosmos.nanoStream.jar` java component to your Android Studio project by copying `[SDK]/libs/net.nanocosmos.nanoStream.jar` to the folder `[projectpath]/app/libs/net.nanocosmos.nanoStream.jar` Add the `nanoStream.so` native components to the Android Studio project by copying the 5 folders `[SDK]/libs/[platform]/libRTMPStream.so` to [projectpath]/app/src/main/jniLibs/[platform]/libRTMPStream.so\`

Platforms are armeabi, armeabi-v7a, arm64-v8a, x86, mips

#### Add the nanoStream to the gradle file

Open the build.gradle file (Module:app) and add

```
compile files('libs/net.nanocosmos.nanoStream.jar')
```

to the dependencies section.

#### Check library version

```java
String nanoStreamVersion = nanoStream.getVersion().fullVersion;
```

#### Initialize the library

Implement the interface "nanoStreamEventListener" in your class:

```java
public class StreamActivity extends Activity implements NanostreamEventListener {
  // implement your class

  private class NotificationRunable implements Runnable {
     private NanostreamEvent m_event;

     public NotificationRunable(NanostreamEvent event) {
      m_event = event;
     }

     @Override
     public void run() {
       Toast.makeText(getApplicationContext(), m_event.GetDescription(), Toast.LENGTH_SHORT).show();
     }
   }

  @Override
  public void onNanostreamEvent(NanostreamEvent event) {
    if (event.GetType() != NanostreamEvent.TYPE_RTMP_QUALITY) {
      this.runOnUiThread(new NotificationRunable(event));
    }
  }
}
```

Configure the nanoStreamSettings object for the library:

```java
  private String license = "--- add your nanoStream license here ---";
  private String serverUrl = "rtmp://example.org/live";
  private String streamName = "myStream";
  private nanoStream streamLib = null;

  void initStreamLib() {
    if(null == streamLib) {
      nanoStreamSettings nss = new nanoStreamSettings();
      nss.setLicense(license);
      nss.setLogSettings(logSettings);
      nss.setStreamUrl(serverUrl);
      nss.setStreamName(streamName);
      nss.setEventListener(this);

      try {
        streamLib = new nanoStream(nss);
      } catch (NanostreamException en) {
        Toast.makeText(getApplicationContext(), en.toString(), Toast.LENGTH_LONG).show();
      }

      if(null != streamLib) {
        try {
          streamLib.init();
        } catch (NanostreamException e) {
          Toast.makeText(getApplicationContext(), e.toString(), Toast.LENGTH_LONG).show();
        } catch (IllegalArgumentException e) {
          e.printStackTrace();
        }
      }
    }
  }
```

Start/Stop the Stream:

```java
public void toggleStreaming(View clicked) {
  if (null == streamLib) {
    Toast.makeText(getApplicationContext(), "nanoStream failed to initialize", Toast.LENGTH_LONG).show();
    return;
  }

  if (!streamLib.hasState(nanoStream.EncoderState.RUNNING)) {
    Toast.makeText(getApplicationContext(), "Starting...", Toast.LENGTH_SHORT).show();

    if (streamLib.hasState(nanoStream.EncoderState.STOPPED) || streamLib.hasState(nanoStream.EncoderState.CREATED)) {
      try {
        Logging.log(Logging.LogLevel.DEBUG, TAG, "toggleStreaming init nanoStream");
        streamLib.init();
      } catch (NanostreamException en) {
        Toast.makeText(getApplicationContext(), en.toString(), Toast.LENGTH_LONG).show();
        return;
      }
    }

    try {
      streamLib.start();
    } catch (NanostreamException en) {
      Toast.makeText(getApplicationContext(), en.toString(), Toast.LENGTH_LONG).show();
      return;
    }
  } else {
    Toast.makeText(getApplicationContext(), "Stopping...", Toast.LENGTH_SHORT).show();
    streamLib.stop();
  }
}
```

[//]: # (Link list)

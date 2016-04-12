nanoStream SDK for Android RTMP Playback
========================================

<a name="rtmp_playback_description"></a>Description
---------------------------------------------------

RTMP Playback Component enables application developers to add playback of RTMP live and on demand streams to their apps.

Supported codecs are H.264 Video, AAC and MP3 Audio.

Video streams are decoded and rendered on a Surface that is hold by the application, usually connected to a `SurfaceView`.

Audio streams are decoded and rendered to system audio using the Android AudioSession/AudioTrack API.

The interface and usage are similar to the Android MediaPlayer. The Android MediaPlayerControl interface is implemented to enable control through an `android.widget.MediaController` instance.

Requirements
------------

Related nanoStream SDK Version: 4.1

Minimum supported Android OS/API: 4.1/API 16

Required application permissions:

- `android.permission.INTERNET`
- `android.permission.RECORD_AUDIO`
- `android.permission.RECORD_VIDEO`
- `android.permission.MODIFY_AUDIO_SETTINGS`

License
-------

The playback component requires a special feature flag to be enabled in your nanoStream license key. It not necessarily included in nanoStream Android SDK licenses.

<a name="rtmp_playback_interface"></a>Interface
-----------------------------------------------

### Package name

`net.nanocosmos.nanoStream.streamer`

### Declaration

`public abstract class NanostreamPlayer implements MediaPlayercontrol, Surfaceholder.Callback`

### Function Life Cycle

| Instance Handling      | Initialization         | Capabilities    | Queries            | Playback Control | Supported by RTMP Player |
|------------------------|------------------------|-----------------|--------------------|------------------|--------------------------|
| createNanostreamPlayer |                        |                 |                    |                  |                          |
|                        | setSettings            |                 |                    |                  | yes                      |
|                        | setPlayerEventListener |                 |                    |                  | yes                      |
|                        |                        | canPrepare      |                    |                  | yes                      |
|                        |                        | canPrepareAsync |                    |                  | yes                      |
|                        |                        | canPause        |                    |                  | yes                      |
|                        |                        | canSeekBackward |                    |                  | yes                      |
|                        |                        | canSeekForward  |                    |                  | yes                      |
|                        |                        |                 | getState           |                  | yes                      |
|                        |                        |                 | isPlaying          |                  | yes                      |
|                        |                        |                 | getCurrentPosition |                  | no                       |
|                        |                        |                 | getDuration        |                  | no                       |
|                        |                        |                 |                    | prepare          | no                       |
|                        |                        |                 |                    | prepareAsync     | no                       |
|                        |                        |                 |                    | start            | yes                      |
|                        |                        |                 |                    | pause            | yes                      |
|                        |                        |                 |                    | seekTo           | yes                      |
|                        |                        |                 |                    | stop             | yes                      |
|                        |                        |                 |                    | start            | yes                      |
|                        |                        |                 |                    | stop             | yes                      |
|                        | close                  |                 |                    |                  | no                       |
|                        | release                |                 |                    |                  | yes                      |

Creating an Instance
--------------------

`NanostreamPlayer` instances can be created through the static factory function `createNanostreamPlayer` at the top level `nanoStream class`. NanostreamPlayer is designed to support multiple player instances. The number of parallel instances can be limited by system resources such as codec,surfaces,memory, network connections and bandwidth.

Configuration and Settings
--------------------------

Initial player settings are wrapped by the `NanostreamPlayer.PlayerSettings` class. The settings can be applied by calling `NanostreamPlayer.setSettings`.

PlayerSettings:
---------------

| Setting             | Functions                                                           | Description                                                                  | Type              | Default Values         |
|---------------------|---------------------------------------------------------------------|------------------------------------------------------------------------------|-------------------|------------------------|
| License             | getLicense/setLicense                                               | nanoStream license key                                                       | String            | empty                  |
| Url                 | getUrl/setUrl                                                       | RTMP url                                                                     | String            | empty                  |
| Stream Name         | getStreamname/setStreamname                                         | RTMP stream name                                                             | String            | empty                  |
| User Name           | getUsername/setUsername                                             | User name if RTMP authentication is required                                 | String            | empty                  |
| Password            | getPassword/setPassword Password if RTMP authentication is required | String                                                                       | empty             |                        |
| Buffer Time         | getBufferTimeMs/setBufferTimeMs                                     | Length of the stream buffer in milliseconds                                  | Integer           | 2000ms/2s              |
| Frame Dropping Mode | getFrameDroppingMode/setFrameDroppingMode                           | Configuration of the dropping mode regarding different droppable frame types | FrameDroppingMode | DROP_NO_FRAMES         |
| Stream Playback     | getVideoPlayback/getAudioPlayback/setStreamPlayback                 | Enable stream types to be decoded and played                                 | boolean           | video:true, audio:true |
| TrackTimout         | getTrackTimeout/setTrackTimeout                                     | Timeout to waiting for Track info                                            | long              | 10000                  |
| EndlessMode         | getEndlessMode/setEndlessMode                                       | Reopen the stream until stop call                                            | boolean           | false                  |

Player State
------------

The player stat can be queried through the `getState()` function

```java
/**
*
* The different states of the player instance.
*
*/
public enum PlayerState
{
    IDLE, INITIALIZED, PREPARED, STARTED, PAUSED, SEEKING, BUFFERING, RECONNECTING, PLAYBACKCOMPLETED, STOPPING, STOPPED;
}
```

| State                         | Description                                                            | Supported by RTMP Player |
|-------------------------------|------------------------------------------------------------------------|--------------------------|
| PlayerState.IDLE              | Initial state. Player has not yet been initialized or has been closed. | yes                      |
| PlayerState.INITIALIZED       | Player has been initialized with license and settings.                 | yes                      |
| PlayerState.PREPARED          | Player has been prepared and is ready to start.                        | no                       |
| PlayerState.STARTED           | Playback has been started.                                             | yes                      |
| PlayerState.PAUSED            | Playback has been paused.                                              | yes                      |
| PlayerState.SEEKING           | Player is Seeking                                                      | yes                      |
| PlayerState.BUFFERING         | Player is buffering stream data.                                       | yes                      |
| PlayerState.RECONNECTING      | Player is performing a reconnect                                       | no                       |
| PlayerState.PLAYBACKCOMPLETED | Playback has ended due to end of stream.                               | yes                      |
| PlayerState.STOPPING          | Player is stopping                                                     | yes                      |
| PlayerState.STOPPED           | Player is stopped                                                      | yes                      |

Event Notification
------------------

Event notifications can be received through the `NanostreamPlayer.PlayerEventListener` interface. Derive your listener from this interface and add it to the player by calling `setPlayerEventListener()`.

Status Events
-------------

Event Type : `TYPE_RTMP_STATUS`

| Event Code                                         | Description                                      | Corresponding State           |
|----------------------------------------------------|--------------------------------------------------|-------------------------------|
| NanostreamEvent.CODE_STREAM_STARTED                | Playback has been started.                       | PlayerState.STARTED           |
| NanostreamEvent.CODE_STREAM_STOPPING               | Playback will stop.                              | PlayerState.STOPPING          |
| NanostreamEvent.CODE_STREAM_STOPPED                | Playback has been stopped.                       | PlayerState.STOPPED           |
| NanostreamEvent.CODE_STREAM_ERROR_CONNECT          | The connect to the stream url failed.            | PlayerState.STOPPED           |
| NanostreamEvent.CODE_STREAM_BUFFERING              | Player is buffering stream data                  | PlayerState.BUFFERING         |
| NanostreamEvent.CODE_STREAM_PLAYBACKCOMPLETED      | Playback has ended due to end of stream.         | PlayerState.PLAYBACKCOMPLETED |
| NanostreamEvent.CODE_STREAM_NOT_FOUND              | The specified stream could not be found.         | PlayerState.STOPPED           |
| NanostreamEvent.CODE_STREAM_SEEKING                | The Stream is seeking.                           | PlayerState.SEEKING           |
| NanostreamEvent.CODE_STREAM_PAUSED                 | The Stream is paused                             | PlayerState.PAUSED            |
| NanostreamEvent.CODE_STREAM_VIDEO_FORMAT_AVAILABLE | The Stream has a MediaFormat for the Video Track |                               |
| NanostreamEvent.CODE_STREAM_AUDIO_FORMAT_AVAILABLE | The Stream has a MediaFormat for the Audio Track |                               |

Results and Error Events
------------------------

Event Type : `TYPENANORESULTS` Event Codes : Values of type nanoResults

| Event Code                                      | Description                                                       | Corresponding State |
|-------------------------------------------------|-------------------------------------------------------------------|---------------------|
| nanoResults.N_NOT_INITIALIZED                   | The RTMP library has not been initialized properly.               | PlayerState.STOPPED |
| nanoResults.N_ALLOCATEDATA_FAILED_RTMP_SRC      | Memory allocation failed.                                         | PlayerState.STOPPED |
| nanoResults.N_LICENSE_INVALID                   | License check failed - License invalid.                           | PlayerState.STOPPED |
| nanoResults.N_LICENSE_INVALID_RTMP_SRC          | License check failed - RTMP playback is not included.             | PlayerState.STOPPED |
| nanoResults.N_LICENSE_EXPIRED                   | License check failed - The license period has ended.              | PlayerState.STOPPED |
| nanoResults.N_TCP_CONNECT_FAILED                | TCP connect failed.                                               | PlayerState.STOPPED |
| nanoResults.N_RTMP_HANDSHAKE_FAILED             | RTMP handshake failed.                                            | PlayerState.STOPPED |
| nanoResults.N_RTMP_CONNECT_FAILED               | RTMP connect failed.                                              | PlayerState.STOPPED |
| nanoResults.N_RTMP_AUTH_FAILED                  | RTMP authentication is required and failed.                       | PlayerState.STOPPED |
| nanoResults.N_RTMP_APP_INVALID                  | The application part of the url is invalid and has been rejected. | PlayerState.STOPPED |
| nanoResults.N_RTMP_STATUS_PLAY_STREAM_NOT_FOUND | The stream name could not be found.                               | PlayerState.STOPPED |
| nanoResults.N_RTMP_STATUS_PLAY_STREAM_SEEK      | The player is seeking.                                            | PlayerState.SEEKING |
| nanoResults.N_RTMP_SEEK_NOT_AVAILABLE           | The stream can not seek.                                          |                     |
| nanoResults.N_RTMP_SEEK_FAILED                  | The stream can not seek.                                          |                     |

Audio / Video Format
--------------------

After the `NanostreamEvent.CODE_STREAM_AUDIO/VIDEO_FORMAT_AVAILABLE` event, you can get the MediaFormat Object with the `getAudio/VideoFormat()`<sup>[1](#fnAV1)</sup> function call.

We added two custom Fields for the Video MediaFormat:

-	`NanostreamPlayer.KEY_ASPECT_RATIO_WIDTH`
-	`NanostreamPlayer.KEY_ASPECT_RATIO_HEIGHT`

With these custom fields you can get the aspect ratio width and height.

```java
MediaFormat videoFormat = mPlayer.getVideoFormat();

int aspectRatioWidth = videoFormat.getInteger(NanostreamPlayer.KEY_ASPECT_RATIO_WIDTH);
int aspectRatioHeight = videoFormat.getInteger(NanostreamPlayer.KEY_ASPECT_RATIO_HEIGHT);
```

<a name="rtmp_playback_implementation_example"></a>Implementation Example
-------------------------------------------------------------------------

```java
public class PlayerActivity extends Activity implements PlayerEventListener, SurfaceHolder.Callback {
    ...
    private NanostreamPlayer mPlayer = null;
    private String license = "YOUR LICENSE CODE";

    private String strStreamUrl = "rtmp://192.168.1.100/vod";
    private String strStreamname = "mp4:file.mp4";

    private LinearLayout root;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        root = new LinearLayout(this);
        root.setOrientation(LinearLayout.VERTICAL);
        root.setLayoutParams(containerParams);
        root.setBackgroundColor(Color.BLACK);

        ...

        mPlayer = nanoStream.createNanostreamPlayer();

        PlayerSettings settings = mPlayer.new PlayerSettings();

        settings.setLicense(license);
        settings.setUrl(strStreamUrl);
        settings.setStreamname(strStreamname);
        settings.setAuthUsername("");
        settings.setAuthPassword("");
        settings.setBufferTimeMs(2000);

        mPlayer.setSettings(settings);
        mPlayer.setPlayerEventListener(this);

        ...
        // we need a surface Callback for the application
        LinearLayout.LayoutParams surfaceParams = new LinearLayout.LayoutParams(ViewGroup.LayoutParams.FILL_PARENT, ViewGroup.LayoutParams.FILL_PARENT, 0.5F);
        surfaceParams.gravity = Gravity.CENTER;
        surfaceParams.weight = 0.5f;

        SurfaceView surfaceView = new SurfaceView(this);
        surfaceView.setLayoutParams(surfaceParams);
        surfaceView.getHolder.addCallback(this);

        root.addView(surfaceView);
        setContentView(root);
    }

    ...

    @Override
    public void onPlayerEvent(NanostreamEvent event, NanostreamPlayer instance) {
        final String msg = event.GetDescription();
        Log.d(this.getClass().getName(), event.GetDescription());
    }

    @Override
    public void surfaceCreated(SurfaceHolder holder) {
        mPlayer.surfaceCreated(holder);

        try {
            if (!mPlayer.getState().equals(PlayerState.STARTED)) {
                mPlayer.start();
            }
        } catch (IllegalStateException e) {
            e.printStackTrace();
        }
    }

    @Override
    public void surfaceChanged(SurfaceHolder holder, int format, int width, int height) {
        mPlayer.surfaceChanged(holder, format, width, height);
    }

    @Override
    public void surfaceDestroyed(SurfaceHolder holder) {
        mPlayer.surfaceDestroyed(holder);
    }
}
```

<a name="fnAV1">1</a>: since nanoStream Android SDK 3.2

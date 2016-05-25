# RotationHelper Class
## Description
With the nanoStream SDK 4.3.1 release we added a 'RotationHelper' Class, this Class improves the Rotation handling.
## RotationHelper
The RotationHelper class has two static Methods, 'getDeviceDefaultOrientation(Context context)' and 'getRotation(int orientation, boolean isDefaultOrientationLandscape)'.
### getDeviceDefaultOrientation
The return values are one of the following
* [Configuration.ORIENTATION_LANDSCAPE][fe92646b]
* [Configuration.ORIENTATION_PORTRAIT][2b840eb1]

### getRotation
#### Parameter
The 'orientation' parameter of the 'getRoation' Method is one of the following:
* [ActivityInfo.SCREEN_ORIENTATION_PORTRAIT][89a7f166]
* [ActivityInfo.SCREEN_ORIENTATION_LANDSCAPE][418a0516]
* [ActivityInfo.SCREEN_ORIENTATION_REVERSE_PORTRAIT][1091fa98]
* [ActivityInfo.SCREEN_ORIENTATION_REVERSE_LANDSCAPE][97752f31]

The 'isDefaultOrientationLandscape' parameter is true or false.

## Return values
The return values given from 'RotationHelper.getRoation' can be used as a Parameter for 'setStreamRotation' and 'setPreviewRotation'. is the 'orientation' parameter non of the above described the 'getRotation' Method returns 'null'.
### Implementation Example
```java
import net.nanocosmos.nanoStream.streamer.Rotation;
import net.nanocosmos.nanoStream.streamer.RotationHelper;

public class MainActivity extends Activity {
  // ...
  private boolean isDefaultOrientationLandscape = false;
  private CustomOrientationEventListener orientation = null;

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    // ...
    streamLib = new nanoStream(/*settings*/);

    isDefaultOrientationLandscape = (RotationHelper.getDeviceDefaultOrientation(this) == android.content.res.Configuration.ORIENTATION_LANDSCAPE);
    orientation = new CustomOrientationEventListener(this, SensorManager.SENSOR_DELAY_UI);
    orientation.enable();
  }

  private class CustomOrientationEventListener extends OrientationEventListener {
    private int lastScreenOrientation = 0;
    public CustomOrientationEventListener(Context context, int rate) {
      super(context, rate);
    }

    @Override
    public void onOrientationChanged(int orientation) {
      if (null != streamLib) {
        if(!streamLib.hasState(nanoStream.EncoderState.RUNNING)) {
          if (isDefaultOrientationLandscape) {
              orientation -= 90;

              if (orientation < 0) {
                  orientation += 360;
              }
          }
          int screenOrientation = -1;

          if (orientation > 70 && orientation < 110) {
            setRequestedOrientation(ActivityInfo.SCREEN_ORIENTATION_REVERSE_LANDSCAPE);
            screenOrientation = ActivityInfo.SCREEN_ORIENTATION_REVERSE_LANDSCAPE;
          } else if (orientation > 160 && orientation < 200) {
            setRequestedOrientation(ActivityInfo.SCREEN_ORIENTATION_REVERSE_PORTRAIT);
            screenOrientation = ActivityInfo.SCREEN_ORIENTATION_REVERSE_PORTRAIT;
          } else if (orientation > 250 && orientation < 290) {
            setRequestedOrientation(ActivityInfo.SCREEN_ORIENTATION_LANDSCAPE);
            screenOrientation = ActivityInfo.SCREEN_ORIENTATION_LANDSCAPE;
          } else if ((orientation > 340 && orientation <= 360) || (orientation >= 0 && orientation < 20)) {
            setRequestedOrientation(ActivityInfo.SCREEN_ORIENTATION_PORTRAIT);
            screenOrientation = ActivityInfo.SCREEN_ORIENTATION_PORTRAIT;
          }

          if (screenOrientation != lastScreenOrientation) {
            Rotation rotation = RotationHelper.getRotation(screenOrientation, isDefaultOrientationLandscape);
            if (null != rotation) {
              try {
                streamLib.setPreviewRotation(rotation);
                streamLib.setStreamRotation(rotation);
                streamLib.setAspectRatio(videoAspectRatio);
              } catch (IllegalStateException e) {
                Logging.log(Logging.LogLevel.ERROR, TAG, "Camera rotate failed", e);
              }
            }
            lastScreenOrientation = screenOrientation;
          }
        }
      }
    }
  }
}
```
[418a0516]: http://developer.android.com/reference/android/content/pm/ActivityInfo.html#SCREEN_ORIENTATION_LANDSCAPE "ActivityInfo.SCREEN_ORIENTATION_LANDSCAPE"
[1091fa98]: http://developer.android.com/reference/android/content/pm/ActivityInfo.html#SCREEN_ORIENTATION_REVERSE_PORTRAIT "ActivityInfo.SCREEN_ORIENTATION_REVERSE_PORTRAIT"
[97752f31]: http://developer.android.com/reference/android/content/pm/ActivityInfo.html#SCREEN_ORIENTATION_REVERSE_LANDSCAPE "ActivityInfo.SCREEN_ORIENTATION_REVERSE_LANDSCAPE"
  [89a7f166]: http://developer.android.com/reference/android/content/pm/ActivityInfo.html#SCREEN_ORIENTATION_PORTRAIT "ActivityInfo.SCREEN_ORIENTATION_PORTRAIT"
  [fe92646b]: http://developer.android.com/reference/android/content/res/Configuration.html#ORIENTATION_LANDSCAPE "Configuration.ORIENTATION_LANDSCAPE"
  [2b840eb1]: http://developer.android.com/reference/android/content/res/Configuration.html#ORIENTATION_PORTRAIT "Configuration.ORIENTATION_PORTRAIT"

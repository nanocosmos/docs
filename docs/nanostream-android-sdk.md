# Android nanoStream SDK

## Camera Focus

### Description

The nanoStream Android SDK supports Camera focus and focus lock, if the the internal cameras supports them.
There are two nonblocking functions
```java
setFocusArea(int focusWidth, int focusHeight, float areaMultiple, int x, int y, int previewWidth, int previewHeight, int weigh)
setFocusLockArea(int focusWidth, int focusHeight, float areaMultiple, int x, int y, int previewWidth, int previewHeight, int weigh)
```
over the
```java
addFocusCalback(FocusCallback callback)
removeFocusCalback(FocusCallback callback)
```
you can attach or remove a FocusCallback listener. To check if your device Supports Focus call
```java
isFocusSupported()
```
this will return true or false.

### Parameter List

| Parameter name | meaning |
|----------------|---------|
| focusWidth     | the focus Area width|
| focusHeight    | the focus Area height|
| areaMultiple   | a Multiple for the focus area (default: 1f)|
| x              | the x position on the Screen|
| y              | the y position on the Screen|
| previewWidth   | the width of the preview |
| previewHeight  | the height of the preview |
| weight         |  the weight of the area must be range from 1 to 1000 |

### FocusCallback interface
The FocusCallback interface has three abstract functions
```java
onSuccess()
onSuccess(Rect rect, Boolean focusLock)
onFailure()
```

### Implementation Example

```java
public class MainActifity extens Actifity implements FocusCallback {
  private GestureDetector gestureDetector;
  private nanoStream streamLib = null;

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    streamLib = new nanoStream(new nanoStreamSettings());
    if(streamLib.isFocusSupported()) {
      gestureDetector = new GestureDetector(this, new GestureListener());
    }
    ...
  }

  @Override
  public boolean onTouchEvent(MotionEvent event)
  {
    if (gestureDetector != null)
    {
        gestureDetector.onTouchEvent(event);
    }
    return true;
  }
  ....
  private class GestureListener implements OnGestureListener {

     @Override
     public boolean onSingleTapUp(MotionEvent e)
     {
         if (streamLib != null)
         {
             streamLib.setFocusArea(300, 300, 1f, (int) e.getX(), (int) e.getY(), surface.getWidth(), surface.getHeight(), 1000);
         }
         return true;
     }

    @Override
     public void onLongPress(MotionEvent e)
     {
         if (streamLib != null)
         {
             streamLib.setFocusLockArea(300, 300, 1f, (int) e.getX(), (int) e.getY(), surface.getWidth(), surface.getHeight(), 1000);
         }
     }
   }

   @Override
    public void onSuccess(Rect rect, Boolean aBoolean) {
      Log.i(TAG, "focus success");
    }

    @Override
    public void onFailure() {
      Log.i(TAG, "focus failed");
    }
}
```


## MP4 Local Recording

### Description

The nanoStream Android SDK supports local file recording on the device in MP4 format.
This document describes how to enable and configure nanoStream for local recording.

### Steps to configure MP4 recording

MP4 recording can be configured with two function calls on a nanoStreamSettings object.

1. Enabling MP4 recording: setRecordMp4(boolean)
2. Setting up the file path: setMp4Path(String)

### setRecordMp4(boolean)

The setRecordMp4 function takes a boolean as parameter to enable/disable the recording function.

### setMp4Path(String)

The setMp4Path function takes a String as parameter. This string needs to be a valid file path (e.g. /sdcard/test.mp4).
It is recommended to use the getExternalStorageDirectory or getExternalStoragePublicDirectory functions from the Android  [Environment](http://developer.android.com/reference/android/os/Environment.html) API, and add a file name to the returned path.
Please find the code snippet below as an example.

### Android Permission

To be able to write to an external file path your Android app needs the following permissions to be added to the
app manifest (AndroidMainfest.xml).

```xml
<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
<uses-permission android:name="android.permission.STORAGE" />
```

#### Android 6.0

Due to the new permission handling in Android 6 (M) writing to external directories (DCIM) requires a permission by user.
Writing to the applications own data directory (/Android/data/com.companyname.appname/) is not restricted.

### Implementation Example

```java
File externalFilePath = Environment.getExternalStoragePublicDirectory(Environment.DIRECTORY_DCIM);
File filePath = new File(externalFilePath, "myMp4File.mp4");
String mp4FilePath = filePath.getAbsolutePath();

nanoStreamSettings nss = new nanoStreamSettings();
nss.setRecordMp4(true);
nss.setMp4Path(mp4FilePath);
```

# Android nanoStream SDK

## DeviceProperties
Before Android 4.3 there was no obligation for Android hardware manufacturers to pass the video related parts of the CTS (Compatibility Test Suite).
Therefore some Android 4.1 and 4.2 Devices show non standard behaviour in regard to color format definitions and representation of video frames in memory. This could lead to issues in the video stream like switched red and blue colors, dislocated color components or a green bar at the bottom of the video frame. nanoStream Android now provides the functionality to detect and compensate common issues related to this.

### Description
`nanoStream.getDeviceProperties()` is a static function that is running a test on the device hardware to detect non standard behaviour and returning a DeviceProperties object containing the result.
`DeviceProperties.getFlags()` returns the test result as an integer value that can be stored in the application preferences, to avoid running the device test on every app start.
DeviceProperties can be applied to a new nanoStream instance by calling `nanoStream.setDeviceProperties(DeviceProperties)`.
We recommend to call `getDeviceProperties()` in a background thread during the first app start on a pre 4.3 device, because the call is blocking and might last up to 5 seconds on older/weaker devices.
We also recommend to store the OS version in the preferences, to be able to detect OS updates and to eventually rerun the device test or stop setting the DeviceProperties if the new OS is 4.3 or higher.

### Implementation Example
```java
public class App extends Application
{
    private static DeviceProperties deviceProp = null;

    public void onCreate()
    {
        super.onCreate();

        Thread chkThread = new Thread(new Runnable()
        {
            @Override
            public void run()
            {
                try
                {
                    SharedPreferences prefs = PreferenceManager.getDefaultSharedPreferences(getApplicationContext());
                    int curApiVer = android.os.Build.VERSION.SDK_INT;
                    int curAppVer = getPackageManager().getPackageInfo(getPackageName(), 0).versionCode;
                    int curEncVer = DeviceProperties.VERSION;

                    int oldApiVer = prefs.getInt("Pref_Android_API", 0);
                    int oldAppVer = prefs.getInt("Pref_App_Version", 0);
                    int oldChkVer = prefs.getInt("Pref_Check_Version", 0);
                    int oldChkResult = prefs.getInt("Pref_Check_Result", -1);

                    if (((oldApiVer * oldAppVer * oldApiVer) == 0)
                    || (oldApiVer < curApiVer)
                    || (oldAppVer < curAppVer)
                    || (oldChkVer < curEncVer)
                    || oldChkResult < 0)
                    {

                        Editor edit = prefs.edit();
                        edit.putInt("Pref_Android_API", curApiVer);
                        edit.putInt("Pref_App_Version", curAppVer);

                        /* Run  device check */
                        try
                        {
                            deviceProp = nanoStream.getDeviceProperties();

                            edit.putInt("Pref_Check_Result", deviceProp.getFlags());
                            edit.putInt("Pref_Check_Version", deviceProp.getVersion());
                            edit.commit();
                        }
                        catch (RuntimeException e)
                        {
                            Log.d("Device Check failed", e.toString());
                            edit.putInt("Pref_Check_Result", -1);
                            edit.putInt("Pref_Check_Version", 0);
                            edit.commit();
                        }

                    }
                    else
                    {
                        deviceProp = new DeviceProperties(oldChkResult);
                    }

                    Log.d("Device Properties: ", deviceProp.toString());
                }
                catch (Exception e)
                {
                    Log.d(this.getClass().getName(), "Device Check Runnable");
                    e.printStackTrace();
                }
            }
        });

        if (android.os.Build.VERSION.SDK_INT < 18)
        {
            chkThread.start();
        }

        ...
    }

    public static DeviceProperties getDeviceProperties()
    {
        return deviceProp;
    }
}
```

```java
public class MainActivity extends Activity implements NanostreamEventListener
{
    ...
    @Override
    protected void onCreate(Bundle savedInstanceState)
    {
        try
        {
            nanoStreamSettings nss = new nanoStreamSettings();

            streamLib = new nanoStream(nss);

            DeviceProperties deviceProperties = App.getDeviceProperties();

            if(null != streamLib && null != deviceProperties)
            {
                streamLib.setDeviceProperties(deviceProperties);
            }
        }
        catch(NanostreamException en)
        {
            Toast.makeText(getApplicationContext(), en.toString(), Toast.LENGTH_LONG).show();
        }
    }
    ...
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

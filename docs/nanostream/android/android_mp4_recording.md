# Android MP4 Recording
## Description
The nanoStream Android SDK supports, MP4 recording to do this there needs to be set a valid Path to the nanoStreamSettings object. And the MP4 Recording needs to be enabled. This feature allows you to record the current stream to the Device internal/external sd card.
## Enable MP4 recording
To enable the MP4 recording there are tow functions in the nanoStreamSettings Class.

1. setRecordMp4(boolean)
2. setMp4Path(String)

## setRecordMp4(boolean)
The setRecordMp4 function takes a boolean as parameter, this is to enable/disable the recording function.
## setMp4Path(String)
The setMp4Path function takes a String as parameter, this string needs to be a valid file path (e.g. /sdcard/test.mp4). Much better is to use the getExternalStoragePublicDirectory from the [Environment][6ea348a3] Android API, and add a file name to this directory Path.
## Android permission
To write to an external File Path your Android App needs the following permission (Add this to your AndroidMainfest.xml).
```xml
<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
<uses-permission android:name="android.permission.STORAGE" />
```
### Android 6.0
Due to the new Permission handling it is possible that you can't write in external Directorys if the user isn't granted this permission, you can always write in your own data directory (/Android/data/com.companyname.appname/)
## Implementation Example
```java
File externalFilePath = Environment.getExternalStoragePublicDirectory(Environment.DIRECTORY_DCIM);
File filePath = new File(externalFilePath, "myMp4File.mp4");
String mp4FilePath = filePath.getAbsolutePath();

nanoStreamSettings nss = new nanoStreamSettings();
nss.setRecordMp4(true);
nss.setMp4Path(mp4FilePath);
```

  [6ea348a3]: http://developer.android.com/reference/android/os/Environment.html "Android Environment API Reference"

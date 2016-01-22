# Android nanoStream SDK

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

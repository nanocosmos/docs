
# Adaptive Bitrate Streaming


By using the Adaptive Bitrate Control (ABC) the stream will automatically adjust to changes of the bandwidth. There are four modes available:

-	DISABLED: The Adaptive Bitrate Control is disabled.
-	QUALITY_DEGRADE: The video quality will be changed if the bandwidth changes. For instance, if not enough bandwidth is available, the video bitrate will be decreased, which in turn degrades the video quality.
-	FRAME_DROP: Low bandwidth is compensated by decreasing the framerate (FPS), but maintaining the video qualtiy.
-	QUALITY_DEGRADE_AND_FRAME_DROP: The video quality and the framerate (FPS) decreased if the not enough bandwidth is available.

Make sure to set the ABC settings before a stream is started.

## Implementation Example

```java
private AdaptiveBitrateControlSettings.AdaptiveBitrateControlMode abcMode = AdaptiveBitrateControlSettings.AdaptiveBitrateControlMode.QUALITY_DEGRADE_AND_FRAME_DROP;
private int videoBitrate = 500000;

private void initStreamLib() {
  AdaptiveBitrateControlSettings abcSettings = new AdaptiveBitrateControlSettings(abcMode);
  abcSettings.SetMaximumBitrate((int)(videoBitrate * 1.5));

  nanoStreamSettings nss = new nanoStreamSettings();
  nss.setAbcSettings(abcSettings);
}
```

## Measuring the available bandwidth


For measuring the available bandwidth you can use the method `runBandwidthCheck`. After the check finished, the result can be used to set the bitrate for the nanoStream object.
The check measures the bandwidth by running a test stream to the server.
The BandwidthCheck Class has three public functions:

* runBandwidthCheck(BandwidthCheckSettings settings, BandwidthCheckResultCallback callback()
* forceStop()
* abort()

There is a BandwidthCheckSettings Class, the constructor creates a standard object of BandwidthCheckSettings, with the following settings:

| property | default values	|	meaning|
|:------------------------------------------------|:----------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| prerollSeconds                                  | 1 (in sec.)                 | this is the pre roll time to connect to the server                                                                                                                                                                                                                                     |
| runTime                                         | 5 (in sec.)                 | the run time of the bandwidth check                                                                                                                                                                                                                                                    |
| maxBitrate                                      | 3000000 (bit/s = 3 MBit/s)  | the maximum bit rate for the bandwidth check                                                                                                                                                                                                                                           |
| rtmpUrl                                         | empty                       | the rtmp url for the bandwidth check                                                                                                                                                                                                                                                   |
| streamId                                        | empty                       | the stream id for the bandwidth check                                                                                                                                                                                                                                                  |

With this settings you can call the runBandwidthCheck methode, the second parameter is the callback for the results. This callback class has a finished method that will be called after bandwidth check is done.
The finished method has one parameter from type BandwidthCheckResult, this object has 6 getter methods:

 - getAverageBitrate() // the average measured bandwidth
 - getMedianBitrate() // the median measured bandwidth
 - getMaxBitrate() // the maximum measured bandwidth
 - getMinBitrate() // the minimum measured bandwidth
 - getRunTimeMS() // the run time in ms
 - getErrorCode() // the error code if all is ok this is nanoResults.N_OK (all error codes can be found in the nanoStream API Reference documentation for nanoResults)

The forceStop call stops the bandwidth check and will return the results that where measured until then. The abort call stops the bandwidth check but don't return any results.

The bandwidth check, sends a special type of metadata that will not be recorded on the Streaming Server.

### Implementation Example

```java
private BandwidthCheck bwCheck = null;

private class CustomBandwidthCheckResultCallback implements BandwidthCheckResultCallback {
  @Override
  public void finished(final BandwidthCheckResult bandwidthCheckResult) {
    Log.d(TAG, "BandwidthCheck results: " +
      "\n\tAverage Bitrate (kBit/s): " + bandwidthCheckResult.getAverageBitrate() / 1000 +
      "\n\tMedian Bitrate  (kBit/s): " + bandwidthCheckResult.getMedianBitrate() / 1000 +
      "\n\tMax Bitrate     (kBit/s): " + bandwidthCheckResult.getMaxBitrate() / 1000 +
      "\n\tMin Bitrate     (kBit/s): " + bandwidthCheckResult.getMinBitrate() / 1000 +
      "\n\tRun Time        (ms)    : " + bandwidthCheckResult.getRunTimeMS());
  }
}

private void initBandwidthCheck() {
  if(null == bwCheck) {
    BandwidthCheckSettings settings = new BandwidthCheckSettings();
    settings.setRtmpUrl(serverUrl);
    settings.setStreamId(streamName);
    bwCheck = new BandwidthCheck();
    bwCheck.runBandwidthCheck(settings, new CustomBandwidthCheckResultCallback());
  }
}
```

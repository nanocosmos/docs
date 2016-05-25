##Snapshot

To get a snapshot (image) of the current preview/stream, the method `takeSnapshot` can be used. This is a non blocking function, for the result you need to implement the SnapshotCallback interface. The snapshot returns as a base64 encoded JPEG

### Implementation Example

```java
private class CustomSnapshotCallback implements SnapshotCallback {
  @Override
  void onSuccess(String arg0){
    // do something with the base64 encoded JPEG.
  }

  @Override
 void onFailure(){
   Log.d(TAG, "takeSnapshot() failed!")
 }
}
private void shapshot() {
  streamLib.takeSnapshot(new CustomSnapshotCallback());
}
```

# Camera Zoom
## Description
The nanoStream Android SDK supports camera zoom, if the internal camera supports it. Therefor there are a few functions, the most important are:

| Function        | Return Type   | returns                                                               |
|:----------------|:--------------|:----------------------------------------------------------------------|
| hasZoom()       | boolean       | true if zoom is supported by the video source/ device                 |
| getZoomRatios() | List<Integer> | list with of ale zoom ratios                                          |
| getZoom()       | int           | the index of the List<Integer> that returned from getZoomRatios()     |
| setZoom(int)    | int           | the new index of the List<Integer> that returned from getZoomRatios() |

It is recommended to use pinch to zoom, therefor you need to implement a ScaleGestureDetector.SimpleOnScaleGestureListener, and a pinch2zoom function, that takes the scalefactor from the SimpleOnScaleGestureListener as a int parameter, take a look at the [Implementation Example][ef1c8421].
### getZoomRatios()
getZoomRatios() returns a List of Integer values, this values are the zoom ratios in 1/100 increments (e.g. a zoom of 3.2x is returned as 320).
### setZoom(int)
The int parameter from setZoom(int zoom) is the index of zoom ratios that returns getZoomRatios().
### Zoom Behavior on Camera Switch
During a camera switch (e.g. from back to front) the zoom remains unaffected.
## Implementation Example
```java
public class MainActivity extends Activity {
  private ScaleGestureDetector scaleGestureDetector;
  private List<Integer> mZoomRatios = null;

  private nanoStream streamLib = null;

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);

    nanoStreamSettings nss = new nanoStreamSettings();
    // configure nanoStreamSettings

    streamLib = new nanoStream(nss);

    if(streamLib.hasZoom()) {
      mZoomRatios = streamLib.getZoomRatio();
    }

    if(null == scaleGestureDetector) {
      scaleGestureDetector = new ScaleGestureDetector(this, new ScaleGestureListener());
    }
  }

  @Override
  public boolean onTouchEvent(MotionEvent event)
  {
    if (scaleGestureDetector != null)
    {
      scaleGestureDetector.onTouchEvent(event);
    }
    return true;
  }

  private class ScaleGestureListener extends ScaleGestureDetector.SimpleOnScaleGestureListener {
    @Override
    public boolean onScale(ScaleGestureDetector detector) {
      if(null != streamLib) {
        if (streamLib.hasZoom()) {
          pinch2Zoom(detector.getScaleFactor());
        }
      }
      return true;
    }
  }

  public void pinch2Zoom(float scaleFactor) {
    if (streamLib.hasZoom() && null != mZoomRatios) {
      int zoomFactor = streamLib.getZoom();
      float zoomRatio = mZoomRatios.get(zoomFactor) / 100f;
      zoomRatio *= scaleFactor;
      if (zoomRatio > 1.0f) {
        if (scaleFactor > 1.0f) {
          for (int i = zoomFactor; i < mZoomRatios.size(); i++) {
            Double zoom = mZoomRatios.get(i) / 100.0;
            if (zoom >= zoomRatio) {
              streamLib.setZoom(i);
              break;
            }
          }
        } else {
          for (int i = zoomFactor; i > 0; i--) {
            Double zoom = mZoomRatios.get(i) / 100.0;
            if (zoom <= zoomRatio) {
              streamLib.setZoom(i);
              break;
            }
          }
        }
      }
    }
  }   
}
```



  [ef1c8421]: https://www.nanocosmos.de/v4/documentation/android_camera_zoom#zoom_implementation_example "Implementation Example"

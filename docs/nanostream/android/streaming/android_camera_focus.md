##  Camera Focus
### Description
The nanoStream Android SDK supports Camera focus and focus lock, if the the internal cameras supports them. There are two nonblocking functions

```java
setFocusArea(int focusWidth, int focusHeight, float areaMultiple, int x, int y, int previewWidth, int previewHeight, int weigh)
setFocusLockArea(int focusWidth, int focusHeight, float areaMultiple, int x, int y, int previewWidth, int previewHeight, int weigh)
```
through the
```java
addFocusCalback(FocusCallback callback)
removeFocusCalback(FocusCallback callback)
```
you can attach or remove a FocusCallback listener.
To check if your device Supports focus you can call
```java
isFocusSupported()
```
this will return true or false
### Parameter List
| Parameter name | meaning                                             |
|:---------------|:----------------------------------------------------|
| focusWidth     | the focus Area width                                |
| focusHeight    | the focus Area height                               |
| areaMultiple   | a Multiple for the focus area (default: 1f)         |
| x              | the x position on the Screen                        |
| y              | the y position on the Screen                        |
| previewWidth   | the width of the preview                            |
| previewHeight  | the height of the preview                           |
| weight         | the weight of the area must be range from 1 to 1000 |

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

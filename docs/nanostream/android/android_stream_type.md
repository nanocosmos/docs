#Stream Type


The SDK supports differnet streaming modes:

-	Video and Audio
-	Video only
-	Audio only

You can en/disable Video/Audio in the `nanoStreamSettings`.

## Implementation Example

```java
nanoStreamSettings nss = new nanoStreamSettings();
nss.setHaveVideo(true); // false
nss.setHaveAudio(true); // false
```

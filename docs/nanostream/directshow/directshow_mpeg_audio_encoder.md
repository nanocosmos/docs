## Configure encoder settings

Here is a pseudo sample code, showing how to set the bitrate for the encoder - m_pEncMpegA is the instance of the mpeg audio encoder:
```cpp
ICodecAPI* encoderInt;
m_pEncMpegA->QueryInterface(IID_ICodecAPI, (void **) &encoderInt);
VARIANT v;
v.vt = VT_INT;
v.intVal = 128000;    // 128 kb
encoderInt->SetValue(&PROPID_nanoMPAEBitrate, &vt);
...
encoderInt->Release();
</code>
```

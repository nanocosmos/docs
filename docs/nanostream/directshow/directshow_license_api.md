## nanocosmos License API for DirectShow
For unlocking a DirectShow Filter, the following API should be used.// Configuration Interface ICodecProp
```cpp
// {0F817204-82C8-4c12-884A-F45FB2F33A6E}
DEFINE_GUID(IID_ICodecProp, 0xf817204, 0x82c8, 0x4c12, 0x88, 0x4a, 0xf4, 0x5f, 0xb2, 0xf3, 0x3a, 0x6e);

// ICodecProp: IID_nanoPeg_LicenseString
// type: BSTR / Unicode string
// Set license string to unlock filter
// {1788F0B0-5985-4a19-B7FE-8AAC1BFC14B3}
DEFINE_GUID(IID_nanoPeg_LicenseString, 0x1788f0b0, 0x5985, 0x4a19, 0xb7, 0xfe, 0x8a, 0xac, 0x1b, 0xfc, 0x14, 0xb3);


CComQIPtr <ICodecProp> nanoProp = filter;
if(nanoProp)
{               
  nanoProp->SetProperty(&IID_nanoPeg_LicenseString,_T("nlic:..."));
} else {
...
}
```

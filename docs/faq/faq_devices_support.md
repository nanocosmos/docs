---
id: faq_devices_support
title: Capture Devices and Camera Support
sidebar_label: Capture Devices and Camera Support
---

<details><summary><strong>Which capture cards are compatible with the nanoStream product?</strong></summary>

Basically every capture card should be compatible dependent on the driver architecture. `Blackmagic design cards` proved to be working well with our product.

>For Windows, the driver needs to be `DirectShow` compatible which is usually the case.

>For MacOS, either `AVFoundation` or `Quicktime` compatible drivers can be used.

!!! Todo: Please contact us for details and specific support. !! CONTACT LINK
</details>

<details><summary><strong>Which cameras are compatible with the nanoStream product?</strong></summary>

Basically every camera which has a compatible driver installed can be used.

There is a range of cameras which are tested in our lab and verified.

**Our recommendations**:
- Web cams: `Logitech` or `Microsoft`
- Studio based encoding `Blackmagic Decklink` and `Intensity Osprey`
</details>


<details><summary><strong>Can I stream from an IP camera?</strong></summary>

It depends, if the drivers for the IP camera supports `directshow`. For instance IP cameras from axis are supported.
We can also provide custom development for unsupported IP cameras.
</details>

<details><summary><strong>Devices and cameras supported for Android and iOS?</strong></summary>
#### Web Applications / nanoStream H5Live

**nanoStream H5Live Player**

nanoStream H5Live player is compatible to most HTML5 browsers, either based on - `ULL HLS` (Safari/iOS) - `MSE` (other browsers)

Known to work for H5Live plugin-free are `Chrome`, `Firefox`, `Safari`, `Edge` and `IE` 

For Windows 7 / IE there is a Flash player fallback

>Note: some builtin browsers, especially on Android, do not fully support HTML5. This might >affect builtin Samsung browsers. **We recommend using Chrome.**


**nanoStream Webcaster Broadcaster**

Most browsers supporting the latest HTML5 WebRTC standards should work. 
Apple introduced WebRTC support end 2017 for iOS/Safari, and the WebRTC standard is not fully finalized yet, so there might be specific issues on specific devices. Please contact us for details.

#### Native Applications / nanoStream SDKs

**nanoStream native SDK iOS**

All iOS devices running `iOS8 and higher` should be compatible with nanoStream Live Encoder for iOS. It is recommended to use at least `iPhone 5s or higher` with the latest updates available.

**nanoStream native SDK for Android**

min. required Android version is `4.1` Recommended Android version is `4.4`

**Compatible devices for Android:**

There is a wide range of Android devices known to work with nanoStream Live Encoder. Here is a small excerpt:

- Samsung Galaxy S
- Google/HTC/LG Nexus
- Samsung Galaxy Tab
- Sony XPeria Z1 mini and higher (Z3, etc)
- Asus Iconia Tab
- Amazon Fire HD
- LG G3
- HTC One

>**There is specific support for region specific devices (e.g. East Asia), dependent on your >support level agreement. Please contact us for details.**

</details>

<details><summary><strong>Are there any drawbacks when using deinterlacing for non-interlaced material?</strong></summary>

The drawbacks of having deinterlacing turned on all the time are:

- degraded picture quality for non-interlaced material (The picture quality degration is dependent on the deinterlacer algorithm. Using a good algorithm, quality should not be affected.)
- higher cpu load (the amount of extra cpu time required depends on the algorithm used for deinterlacing - algorithm requiring more cpu time produce better results)

For detailed explanation [click here](http://www.100fps.com/video_resolution_vs_fluidity.htm)

</details>

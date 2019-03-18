# nanoStream Visual C# Integration

Add a New Visual C# Project / Windows Forms application

![c_sharp_1](img/c_sharp_1-300x202.png)

Move mouse to the left to the *Toolbox* list, search for *General* and right click to select *Choose Items…*

![c_sharp_2](img/c_sharp_2-241x300.png)

Select tab *COM Components* under *Name* nanoStream RTMPActiveX Class.

![c_sharp_3](img/c_sharp_3-300x206.png)

Drag the *nanoStream* Object Icon from the Toolbox onto your Form, and drag a Button onto your Form.

![c_sharp_5](img/c_sharp_5-278x300.png)

Double Click the “Button” to add source code:

```csharp
private void button1_Click(object sender, EventArgs e)
{
axRTMPActiveX1.InitEncoder();
axRTMPActiveX1.StartPreview();
}
```

Run the application and press the button. You should see a video image from your default camera.

![c_sharp_6](img/c_sharp_6-300x300.png)
## Additional Options
Video Device
```csharp
axRTMPActiveX1.VideoSource = 0; // may be 1,2,… dependent on your devices
```

&nbsp;

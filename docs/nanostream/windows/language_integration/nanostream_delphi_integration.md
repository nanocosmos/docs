# nanoStream Delphi Integration

nanoStream plugins are based on ActiveX Controls, which can be used from within any development environment.
This document describes how to use the nanoStream plugins from within the Delphi Development IDE.

In a Delphi Project, first *Import ActiveX Control* under the *Component* tab


![delphi_1](img/delphi_1-300x95.png)


Search for nanoStream Live Video Encoder.

![Delphi_import_activex](img/Delphi_import_activex-264x300.png)

Create a *RTMP ActiveX* Unit.


![Delphi_rtmp_activex](img/Delphi_rtmp_activex-300x86.png)

On the resulting form, pull an area with the mouse.


![Delphi_FormArea](img/Delphi_FormArea.png)

Then add a standard button to test nanoStream:


![Delphi_Button](img/Delphi_button.png)

Double Click the button and add this code:
<pre class="lang:delphi decode:true ">procedure TForm1.Button1Click(Sender: TObject);
begin
RTMPActiveX1.InitEncoder;
RTMPActiveX1.StartPreview;
end;</pre>
Run the project.
Click on the button.
You should see nanoStream running in camera preview mode then.
Add Streaming / Broadcasting to a Media Server
<pre class="lang:delphi decode:true ">RTMPActiveX1.DestinationURL := 'rtmp:%%//%%3p0.de/live+delphi123';
RTMPActiveX1.VideoBitrate := 200000;
RTMPActiveX1.StartBroadcast;</pre>
&nbsp;

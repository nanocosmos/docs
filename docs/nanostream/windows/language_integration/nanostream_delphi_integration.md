nanoStream plugins are based on ActiveX Controls, which can be used from within any development environment.
This document describes how to use the nanoStream plugins from within the Delphi Development IDE.

In a Delphi Project, first *Import ActiveX Control* under the *Component* tab

<img class="alignnone size-medium wp-image-797" src="http://www.nanocosmos.de/wiki/wp-content/uploads/2016/02/delphi_1-300x95.png" alt="delphi_1" width="300" height="95" />

Search for nanoStream Live Video Encoder.

<img class="alignnone size-medium wp-image-798" src="http://www.nanocosmos.de/wiki/wp-content/uploads/2016/02/Delphi_import_activex-264x300.png" alt="Delphi_import_activex" width="264" height="300" />

Create a *RTMP ActiveX* Unit.

<img class="alignnone size-medium wp-image-799" src="http://www.nanocosmos.de/wiki/wp-content/uploads/2016/02/Delphi_rtmp_activex-300x86.png" alt="Delphi_rtmp_activex" width="300" height="86" />

On the resulting form, pull an area with the mouse.

<img class="alignnone size-full wp-image-800" src="http://www.nanocosmos.de/wiki/wp-content/uploads/2016/02/Delphi_FormArea.png" alt="Delphi_FormArea" width="200" height="177" />

Then add a standard button to test nanoStream:

<img class="alignnone size-full wp-image-801" src="http://www.nanocosmos.de/wiki/wp-content/uploads/2016/02/Delphi_button.png" alt="Delphi_button" width="200" height="192" />

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

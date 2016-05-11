&nbsp;

add a New Visual C# Project / Windows Forms application

<img class="alignnone size-medium wp-image-783" src="http://www.nanocosmos.de/wiki/wp-content/uploads/2016/02/c_sharp_1-300x202.png" alt="c_sharp_1" width="300" height="202" />

Move mouse to the left to the *Toolbox* list, search for *General* and right click to select *Choose Items…*

<img class="alignnone size-medium wp-image-784" src="http://www.nanocosmos.de/wiki/wp-content/uploads/2016/02/c_sharp_2-241x300.png" alt="c_sharp_2" width="241" height="300" />

Select tab *COM Components* under *Name* nanoStream RTMPActiveX Class.

<img class="alignnone size-medium wp-image-786" src="http://www.nanocosmos.de/wiki/wp-content/uploads/2016/02/c_sharp_3-300x206.png" alt="c_sharp_3" width="300" height="206" />

Drag the *nanoStream* Object Icon from the Toolbox onto your Form, and drag a Button onto your Form.

<img class="alignnone size-medium wp-image-787" src="http://www.nanocosmos.de/wiki/wp-content/uploads/2016/02/c_sharp_5-278x300.png" alt="c_sharp_5" width="278" height="300" />

Double Click the “Button” to add source code:
<pre class="lang:c# decode:true crayon-selected">private void button1_Click(object sender, EventArgs e)
{
axRTMPActiveX1.InitEncoder();
axRTMPActiveX1.StartPreview();
}</pre>
Run the application and press the button. You should see a video image from your default camera.

<img class="alignnone size-medium wp-image-789" src="http://www.nanocosmos.de/wiki/wp-content/uploads/2016/02/c_sharp_6-300x300.png" alt="c_sharp_6" width="300" height="300" />

## Additional Options
Video Device
<pre class="lang:c# decode:true ">axRTMPActiveX1.VideoSource = 0; // may be 1,2,… dependent on your devices
</pre>
&nbsp;

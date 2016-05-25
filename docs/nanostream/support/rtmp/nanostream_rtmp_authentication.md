# nanoStream RTMP Authentication
## General Information
This document describes the nanoStream 2.0 “RTMP Authentication” interface.
## Requirements:
- Wowza Media Server 2.0 or higher
- Wowza Plugin Module “Media Security”
- [Wowza Media Security Link/Description][2f2456d2]
or
- FMS 3.5 or higher
- FMS authentication addin
- [Flash Media Authentication][87f71cb1]
## Installation:
### Installation for Wowza:
- since version 3.5 the module is included in the server, see [How-To enable username/password][97ad9719]
- Follow the download and unpack instructions from the download link
- Edit the file Application.xml at [install-dir]/conf/[application]/
- Add this *Module*  at the end of the *Modules* list:
<pre class="lang:xhtml decode:true ">&lt;Module&gt;
&lt;Name&gt;ModuleRTMPAuthenticate&lt;/Name&gt;
&lt;Description&gt;ModuleRTMPAuthenticate&lt;/Description&gt;
&lt;Class&gt;com.wowza.wms.plugin.security.ModuleRTMPAuthenticate&lt;/Class&gt;
&lt;/Module&gt;</pre>
- Create a text file in the *[install-dir]/conf* folder named *connect.password*, then add a line with a username and password separate with a space for each user:
`[install-dir]/conf/connect.password:`
*user1 pass1*
*user2 pass2*
### Installation for Flash Media Server
- install the addin
- open `cmd.ex` as admin and go to `FMSINSTALLDIR\conf`
- create *user* with users.exe add -u [username] -p [password]







## Usage
Pass the user name and password to the nanoStream API with:
<pre class="lang:c++ decode:true">nanostream.SetConfig("Auth","user:password");</pre>
Start Streaming with
<pre class="lang:c++ decode:true">StartBroadcast();</pre>
## Sample Web Application:
See the HTML web page in the folder `web/liveEncoder/nanoStream.html`
The feature is implemented there under *Options*.


[2f2456d2]: http://www.wowzamedia.com/forums/content.php?115 "http://www.wowzamedia.com/forums/content.php?115"
[87f71cb1]: http://help.adobe.com/en_US/FlashMediaLiveEncoder/3.2/Using/WS5b3ccc516d4fbf351e63e3d11c104ba878-7ff8.html "http://help.adobe.com/en_US/FlashMediaLiveEncoder/3.2/Using/WS5b3ccc516d4fbf351e63e3d11c104ba878-7ff8.html"
[97ad9719]: http://www.wowza.com/forums/content.php?449-How-to-enable-username-password-authentication-for-RTMP-and-RTSP-publishing-%28ModuleRTMPAuthenticate%29 "http://www.wowza.com/forums/content.php?449-How-to-enable-username-password-authentication-for-RTMP-and-RTSP-publishing-%28ModuleRTMPAuthenticate%29"

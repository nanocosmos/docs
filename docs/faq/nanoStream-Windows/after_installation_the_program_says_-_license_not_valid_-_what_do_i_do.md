# After installation the program says - License not valid - what do I do?

You should have received a valid license from us. There are two ways to apply your license:

 1.  If you installed the complete sdk, there was also a program installed letting you manage your license(s): License Tool. It is located in the start menu under nanocosmos->LiveVideoEncoder->Tools->License Tool. If you opened it, you can choose your product and supply your license.
 2.  You can set the license manually with regedit application from windows:
    - open regedit.exe
    - go to one of the following keys:
    - "HKEY_CURRENT_USER\SOFTWARE\nanocosmos" 
    - "HKEY_LOCAL_MACHINE\SOFTWARE\nanocosmos"  
    - "HKEY_LOCAL_MACHINE\SOFTWARE\Wow6432Node\nanocosmos" (64bit windows)
    - open the right subkey (e.g. "LiveVideoEncoder" for the desktop app nanocosmos Live Video Encoder)
    - edit or create the string value "License" and insert you license key

Regardless which way you choose, always enter the **whole** license key we have send you. A lisense key will look similar to the following sample key:

	
	nlic:1.0:LiveEnc:1.1:LvApp=1,...:win:20120101,20120202::0:0:id:nchp:1234567890a1234567890b1234567890


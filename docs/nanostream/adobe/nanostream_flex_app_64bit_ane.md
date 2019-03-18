# Configure Flash Builder 4.7 to build the Flex-App

1. Import your project to Flash Builder.  `Go to File` -> `Import` -> `Flash Builder Project` -> `Select your project folder`
<br>
2. Open Adobe AIR Application Description Template. Change Tag to 
```
<application xmls="http://ns.adobe.com/air/application/20">
```
<br>
3. To open the Properties Pane, right click on project folder in the Package Explorer.
  ![](img/nanostream_flex_app_64bit_ane_open_properties.png)
  <br>

4. Open the card Flex Build Path. Open the tap Native Extension. Add ANE Binary. Ignore error message "This ANE does not support air-nativ-macosx platform". Under Targets you can see that the error is wrong and the ANE is supported under your platform.
  ![](img/nanostream_flex_app_64bit_ane_properties-BuildPath.png)
  <br>

5. Make also sure that the Package checkbox is selected at the Flex Build Packaging card under Native Extensions.
  ![](img/nanostream_flex_app_64bit_ane_properties-BuildPackaging.png)
  <br>

6. Export Build over Project -> Export Release Build...
<br>
7. Select `Signed nativ installer`. Click `Next`.  
Make sure you select the correct certificate under `Digital Signature` and enter a password. Open the tap `Nativ Extension` and select the `checkbox Package` and `Ignore errors`. The Error is a bug in Flash Builder and can be ignored. Click `finish` to build the DMG-Package. You can just install and run the app. Put the `nanoStreamMacx64.framework` at the correct position. 

  The default position under Mac OS X is ` Library/Frameworks/`                                          
   ![](img/nanostream_flex_app_64bit_ane_exportReleaseBuild2.png)
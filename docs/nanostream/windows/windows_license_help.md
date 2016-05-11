# Setting the license key during setup (License Tool starts automatically):
1. Select “License Tool” at the end of the Setup.
2. Select Application/Product
3. Paste your License Key from the Clipboard (displayed in the download page or delivered to you by email)

# Setting or updating the License Key by manually starting the License Tool:
1. Go to the *Start* - *All Programs* - *nanocosmos* - *LiveVideoEncoder* - *Tools* - *License Tool*
2. Select Application/Product
3. Paste your License Key from the Clipboard

# Setting the license key in the registry
The registry contains previous licenses (if any), you can place a new or an updated license in one
of the following locations:
1. Windows XP/7 32 bit, local machine global key:
`HKEY_LOCAL_MACHINE\SOFTWARE\nanocosmos\LiveVideoEncoder`
“License”=“nlic:1.0:nanoLiveEnc:…”
2. Windows XP/7 32 bit, local user key:
`HKEY_CURRENT_USER\SOFTWARE\nanocosmos\LiveVideoEncoder`
“License”=“nlic:1.0:nanoLiveEnc:…”
3. Windows XP/7 64 bit, Wow64 key
`HKEY_LOCAL_MACHINE\SOFTWARE\Wow6432Node\nanocosmos\LiveVideoEncoder`
“License”=“nlic:1.0:nanoLiveEnc:…”

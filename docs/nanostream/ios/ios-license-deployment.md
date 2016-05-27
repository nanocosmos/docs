# nanoStream License Deployment Information
For temporary license keys, you need to ensure your app will be updated early enough before expiration. To avoid in-app expiration, you may load the license key from your server over a secure https connection. You need to ensure the server connection is protected against 3rd party access

## Sample code for iOS
```objc
NSString * const kNSXLicenseKey = @"kNSXLicenseKey";

@implementation NSXLicenseHelper

-(void)downloadLicenseFromURL:(NSURL *)url handler:(void ()(NSString *license))completion
{
if (!completion) {
return;
}
if (!url) {
completion(nil);
}

NSURLSessionConfiguration* sessionConfig = [NSURLSessionConfiguration defaultSessionConfiguration];

/* Create session, and optionally set a NSURLSessionDelegate. */
NSURLSession session = [NSURLSession sessionWithConfiguration:sessionConfig delegate:nil delegateQueue:nil];

NSMutableURLRequest* request = [NSMutableURLRequest requestWithURL:url];
request.HTTPMethod = @"GET";

/* Start a new Task */
NSURLSessionDataTask task = [session dataTaskWithRequest:request completionHandler:NSData *data, NSURLResponse *response, NSError *error {
if (error == nil) {
NSString *license = [[NSString alloc] initWithData:data encoding:NSUTF8StringEncoding];
if ([license hasPrefix:@"nlic:"]) {
[self saveLicense:license];
return completion(license);
}
}
return completion(nil);
}];

[task resume];
}

-(void)saveLicense:(NSString *)license
{
[[NSUserDefaults standardUserDefaults] setObject:license forKey:kNSXLicenseKey];
}

-(NSString *)getSavedLicense
{
return [[NSUserDefaults standardUserDefaults] stringForKey:kNSXLicenseKey];
}
```
&nbsp;

Further questions? Would you like a feature not available yet?
We can make it work for you based on our consulting and development / implementation services. [Contact us](http://www.nanocosmos.de/v4/en/contact-form.html)

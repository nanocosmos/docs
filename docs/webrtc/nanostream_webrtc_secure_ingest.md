---
id: nanostream_webrtc_secure_ingest
title: Secure ingest with Webcaster
sidebar_label: Secure ingest with Webcaster
---

We enable secure ingest with the Webcaster by using <b>JWT</b>.<br>

## What is JWT

JWT is an open standard for securely transmitting information between two parties.
It enables security and transparency for your end users in a simple way.<br>

### About Webcaster and JWT

By using JWT you can now omit the Bintu API key when using the Webcster.<br>
Also JWT will contain ingest information, so your customers will not need to see ingest urls
and ingest stream names.
The Webcaster API can now utilize JWT for signing in to the servers and for sharing ingest information.
You can pass JWT in the two follwoing API calls:<br>

- [signIn(config)](nanostream_webrtc_api.md#RtcUser+signIn) - for authorizing with the Webcaster server
- [startBroadcast(config)](nanostream_webrtc_api.md#RtcUser+startBroadcast) - for starting the Webcast & passing ingest information

Please see the following workflow on how to get started.

## Creating JWT for the Webcaster

In order to use JWT with the Webcaster you will need the follwing data:

- your bintu API key
- a stream name
- an ingest url
- an expiration date (this is optional, a JWT will expire after 1 week by default)

You can create JWT by calling the REST interface of the JWT endpoint of the Webcaster.
You will need a Bintu API key for creating tokens.

### Nanocosmos Token Creator

Feel free to create JWT through our [Webcaster Token Creator
](https://bintu-helpers.nanocosmos.de/webcaster-helper) and test the feature immediately.<br>
All you need to get started is a bintu API key.

### Using JWT with the Webcaster

1) Create a bintu stream

Create a bintu stream either through the [bintu cloud frontend](https://bintu-cloud-frontend.nanocosmos.de/) or with help of the bintu REST API,<br>see the [bintu docs](../cloud/bintu_api).

2) Create JWT

Use data from the previously created stream to create a JWT. The Webcaster token endpoint needs
"RTMP Ingest Streamname" and "RTMP Ingest URL" from the bintu cloud frontend.

- url: https://cts.nanocosmos.de/webcaster
- method: POST
- content-type: application/json
- headers: X-BINTU-APIKEY (mandatory)
- JSON data:
  - 'streamname': 'YOUR_RTMP_STREAMNAME' (string)
  - 'ingesturl': 'YOUR_RTMP_INGEST_URL' (string)
  - 'exp': UTC_TIMESTAMP (integer)


<br>
Find a <b>CURL</b> example below:

```js
curl --request POST \
  --url https://cts.nanocosmos.de/webcaster \
  --header 'Accept: application/json' \
  --header 'Content-Type: application/json' \
  --header 'x-bintu-apikey: YOUR-APIKEY' \
  --data '{
    "streamname": "YOUR_RTMP_STREAMNAME",
    "ingesturl": "YOUR_RTMP_INGEST_URL"
  }'
```

<br>
<b>CURL</b> response example:<br>
The JWT will be contained in "data.token"

```js
{
    "success": true,
    "data": {
        "token": "eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJuYW5vY29zbW9zIiwiZXhwIjoxMjM0NTY3ODksIm5iZiI6MTIzNDU2Nzg5LCJpbmdlc3R1cmwiOiJydG1wOi8vYmludHUtc3RyZWFtLm5hbm9jb3Ntb3MuZGU6MTkzNS9saXZlIiwic3RyZWFtbmFtZSI6ImFiYy1kZWYiLCJpYXQiOjE2MzU4NzEwOTN9.0BrnTUmu0A8yrcVHXj4OZU23sKpAHIQekALgW5jnZAo"
    }
}
```

3) Use JWT in the Webcaster

```js
var yourJWT = 'YOUR_JWT'; // obtain the JWT by the previous step

// 1) the JWT is used for signing into the server

rtcuser.signIn({
  server: 'wss://bintu-webrtc.nanocosmos.de/p/webrtcws',
  jwt: yourJWT
});

...

// 2) pass the JWT on startBroadcast()

rtcuser.startBroadcast({jwt: yourJWT });
```

## Verify a JWT

You can verify a JWT by passing it when calling the verification url:

- url: https://cts.nanocosmos.de/webcaster/verify
- method: POST
- content-type: application/json
- JSON data:
  - 'token': A (JWT)Token-String.

```js
curl --request POST \ 
--url https://cts.nanocosmos.de/webcaster/verify \ 
--header 'Content-Type: application/json' \ 
--data '{"token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Im5hbm9jb3Ntb3MifQ..."}'
```

```js
{
    "success": true,
    "data": {
        "token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Im5hbm9jb3Ntb3MifQ..."
    }
}
```


## Parsing information from JWT

If you want to read the public information contained in a JWT you can do that by decoding the token.<br>
The token has its payload encoded in base64.

```js
var yourJWT = 'YOUR_JWT';

var base64Url = yourJWT.split('.')[1];
var base64 = base64Url.replace('-', '+').replace('_', '/');

console.log(JSON.parse(atob(base64)));

/* example log:
{
  exp: 1636648020,
  iat: 1635434867,
  ingesturl: "YOUR_RTMP_INGEST_URL",
  iss: "nanocosmos",
  nbf: 1635434867,
  streamname: "YOUR_RTMP_STREAMNAME",
}
*/
```
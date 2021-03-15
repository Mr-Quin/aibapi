# bilibili-api
Yet another Bilibili API wrapper because there are not enough in existence.

Currently, the selection of APIs is quite small, more to be added...

## Install
Using npm
```
npm i @mr-quin/bilibili-api -S
```

## Usage
bilibili-api exports a single function to interact with Bilibili
```typescript
import { biliRequest } from "@mr-quin/bilibili-api";
```
### Interact with a single API
```typescript
const name = await biliRequest((api) => api.uname, { mid: 79 })
console.log(name) //saber酱
```
### Interact with multiple APIs at a time

Note: the same parameters is passed into each selected API
```typescript
// array destructuring assignment
const [title, streams] = await biliRequest((api) => [api.videoTitle, api.videoStream], { vid: 2233 }) // vid is parsed internally into either aid (avid) or bvid
console.log(title) //[初音ミクと 巡音ルカと メグポイド] 千年の雪
console.log(streams[0].data.durl[0].url) //https://upos-hz-mirrorakam.akamaized.net/upgcxcode....
```
### biliRequest(selector[,searchParams])

The selector function should return one, or an array of APIs from the list of available APIs.

`biliRequest()` will match the selector's return

```typescript
const selector = (apiList) => apiList.uname
const selectorArray = (apiList) => [apiList.uname]
const selectorMultiple = (apiList) => [apiList.uname, apiList.memberAvatar]

const uname = biliRequest(selector, { mid: 79 })
// uname -> string
const unameArray = biliRequest(selectorArray, { mid: 79 })
// unameArray -> [string]
const multiple = biliRequest(selectorMultiple, { mid: 79 })
// multiple -> [string, string]
```

The searchParams is an object that should at least contain the required keys for the selected APIs. An error will be thrown at runtime if the required keys are missing.

Below is a list of available APIs. For the required and optional paramters for each API, see [the api definition files](src/api) or [SocialSisterYi's awesome API collection](https://github.com/SocialSisterYi/bilibili-API-collect)
<details>
<summary>List of available APIs</summary>

```typescript
type ApiKeyMaster =
    | 'aid'
    | 'bvid'
    | 'cid'
    | 'coin'
    | 'like'
    | 'memberAvatar'
    | 'memberFollowing'
    | 'memberFollowingPageCount'
    | 'memberInfo'
    | 'memberSubmissionCount'
    | 'memberSubmissions'
    | 'memberSubmissionsAll'
    | 'memberVideos'
    | 'memberVideosAll'
    | 'memberVideosAllBvid'
    | 'mid'
    | 'myFollowings'
    | 'myInfo'
    | 'search'
    | 'spacePageCount'
    | 'triple'
    | 'uname'
    | 'videoDanmakuProto'
    | 'videoDanmakuXml'
    | 'videoInfo'
    | 'videoStream'
    | 'videoTitle'
    | 'vmid'
```
</details>

## Configuration
The configurations are stored in an internal store. They can be changed at any time using `biliConfig()` and will affect all subsequent requests

Default configuration
```typescript
import { biliConfig } from "@mr-quin/bilibili-api";

biliConfig({
    SESSDATA: '', // cookie
    bili_jct: '', // cookie
    DedeUserID: '', // cookie
    buvid3: '', // cookie
    sid: '', // cookie
    requestDelay: 250, // set a short delay before each request, may help to not get banned when chaining requests
    'user-agent':
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.146 Safari/537.36', // request header
    origin: 'https://www.bilibili.com', // request header
    referer: 'https://www.bilibili.com', // request header
})
```
To change `requestDelay` to 0 for example, simply do
```typescript
biliConfig({requestDelay: 0})
```
### Authentication
Some APIs, such as `like`, requires the user to be "signed in"

Currently, cookie is the only supported authentication method. Adding cookies is the same as changing any other configurations
```typescript
biliConfig({SESSDATA: '.....', bili_jct: '....'})
```
Note: `SESSDATA` and `bili_jct` are the only two that's actually needed

## Protobuf
There is currently one API that uses protobuf: `videoDanmakuProto`

It returns an array of protobuf encoded buffers which can be decoded using `decodeDanmaku`. The decoded data is statically typed if using Typescript.

See the API documentation for the difference between protobuf danmaku and xml danmaku.
```typescript
import { decodeDanmaku } from '@mr-quin/bilibili-api/proto'

const buffer = await biliRequest((api) => api.videoDanmakuProto, {
    vid: 'BV1vE411s7kX',
})
const danmaku = buffer.map(decodeDanmaku)
```
This is not done internally because the protobuf schema file is quite big and should only be imported when needed.

## Utility
bilibili-api also exports some utility functions and definition. See [the export file](./src/util.ts)


## Typescript
Typescript is strongly recommended because data returned by `biliRequest()` is fully typed:
```typescript 
const info = await biliRequest((api)=>api.videoInfo, {vid:2233}) 
// info -> VideoInfoResponse

const res = await biliRequest((api)=>[api.videoTitle, api.cid], {vid:2233}) 
// res -> [string, number[]]
```

# Acknowledgement
Thanks to [SocialSisterYi/bilibili-API-collect](https://github.com/SocialSisterYi/bilibili-API-collect) for the extensive API documentation

Inspired by [simon300000/bili-api](https://github.com/simon300000/bili-api)

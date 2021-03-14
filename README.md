# bilibili-api
Yet another Bilibili API wrapper because there are not enough in existence.

Currently, the selection of APIs is quite small, more to be added...

## Install
Using npm
```
npm i @mr-quin/bilibili-api -S
```

## Usage
This module exports a single function to interact with Bilibili
```typescript
import { biliRequest } from "@mr-quin/bilibili-api";
```
To get the uname of a member
```typescript
// the syntax is biliRequest(selector[, params])
const name = await biliRequest((api) => api.uname, { mid: 79 })
console.log(name) //saber酱
```
Request multiple APIs at a time. Note: the same params is passed into each selected API
```typescript
// array destructuring assignment
const [title, streams] = await biliRequest((api) => [api.videoTitle, api.videoStream], { vid: 2233 }) // vid is parsed internally into either aid (avid) or bvid
console.log(title) //[初音ミクと 巡音ルカと メグポイド] 千年の雪
console.log(streams[0].data.durl[0].url) //https://upos-hz-mirrorakam.akamaized.net/upgcxcode....
```
###biliRequest(selector[,searchParams])

The selector function should return one, or an array of APIs from the list of available APIs. Doing this allows for type inference.

The searchParams is an object that should at least contain the required keys for the selected APIs.

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

```typescript
import { biliConfig } from "@mr-quin/bilibili-api";
```
Default configuration
```typescript
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
Some APIs, such as `like`, requires the user to be authenticated

Currently, cookie is the only supported authentication method. You can add cookies like so
```typescript
biliConfig({SESSDATA: '.....', bili_jct: '....'})
```

## Example

Request one API
```typescript
// vid is automatically converted to aid or bvid
const info = await biliRequest((api)=>api.videoInfo, {vid:2233}) 
// videoInfo provides the raw api response
console.log(info.data.title) //[初音ミクと 巡音ルカと メグポイド] 千年の雪
```

Request multiple APIs
```typescript
const [title, streams] = await biliRequest((api)=>[api.videoTitle, api.videoStream], {vid:2233})
console.log(title) //[初音ミクと 巡音ルカと メグポイド] 千年の雪
console.log(streams[0].data.durl[0].url) //https://upos-hz-mirrorakam.akamaized.net/upgcxcode....
```

Request all, for whatever reason
```typescript
const all = await biliRequest((api)=>Object.values(api), {vid:2233,mid:79})
console.log(all) //[...]
```

### Some APIs need authentication
```typescript
import { biliConfig, biliRequest } from "@mr-quin/bilibili-api";

// authenticate using cookie
biliConfig({SESSDATA: '.....', bili_jct: '....'})
// like a video
const response = await biliRequest((api)=>api.like, {vid:2233})
console.log(response.code) //0 success
```

## Examples
Convert aid to bvid
```typescript
const bvid = await biliRequest(({bvid})=>bvid, {vid:2233})
```

Get all cid of video
```typescript
const cid = await biliRequest(({cid})=>cid, {vid:2233})
```

Get stream information of video (all parts)
```typescript
const params = {
    vid: 2233,
    qn: 116 // optionally provide a video quality to get, defaults to 120 if signed in
}
const streams = await biliRequest(({videoStream})=>videoStream, params)
const urls = streams.map(s=>s.data?.durl) // data can be undefined if an invalid vid is given
```

## Typescript
Typescript is strongly recommended because data returned by `biliRequest()` is fully typed:
```typescript 
const info = await biliRequest((api)=>api.videoInfo, {vid:2233}) 
typeof info // VideoInfoResponse

const res = await biliRequest((api)=>[api.videoTitle, api.cid], {vid:2233}) 
typeof res // [string, number[]]
```

# Acknowledgement
Thanks to [SocialSisterYi/bilibili-API-collect](https://github.com/SocialSisterYi/bilibili-API-collect) for the extensive API documentation

Inspired in part by [simon300000/bili-api](https://github.com/simon300000/bili-api)

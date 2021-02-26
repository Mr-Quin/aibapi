# aibapi
Yet another Bilibili API wrapper because there are not enough in existence.

Currently, the selection of APIs is quite small, more to be added...
```
npm i aibapi -S
```
```typescript
import { biliRequest } from "aibapi";

const name = await biliRequest(({memberName})=>memberName, {mid:79})
console.log(name) //saber酱
```

## Usage

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
import { biliConfig, biliRequest } from "aibapi";

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
Data returned by `biliRequest` is fully typed:
```typescript
const info = await biliRequest((api)=>api.videoInfo, {vid:2233}) 
typeof info // VideoInfoResponse

const res = await biliRequest((api)=>[api.videoTitle, api.cid], {vid:2233}) 
typeof res // [string, number[]]
```
```typescript
interface VideoInfoResponse extends GeneralResponse {
    data?: VideoInfoData
}
interface VideoInfoData {
    bvid: string
    aid: number
    videos: number
    tid: number
    tname: string
    copyright: number
    pic: string
    title: string
    pubdate: number
    ctime: number
    desc: string
    state: number
    duration: number
    rights: VideoRights
    owner: VideoOwner
    stat: VideoStats
    dynamic: string
    cid: number
    dimension: VideoDimension
    no_cache: boolean
    pages: VideoPages[]
    subtitle: VideoSubtitle
    user_garb: UserGarb
}
// ......
```

The api object currently has the following keys:
```typescript
type ApiKeyMaster =
    | 'aid'
    | 'bvid'
    | 'cid'
    | 'coin'
    | 'like'
    | 'memberAvatar'
    | 'memberInfo'
    | 'memberName'
    | 'memberSubmissionCount'
    | 'memberSubmissions'
    | 'memberSubmissionsAll'
    | 'memberVideos'
    | 'memberVideosAll'
    | 'memberVideosAllBvid'
    | 'mid'
    | 'myInfo'
    | 'spacePageCount'
    | 'triple'
    | 'videoInfo'
    | 'videoStream'
    | 'videoTitle'
```
More will be added as needed...

# Acknowledgement
Thanks to [SocialSisterYi/bilibili-API-collect](https://github.com/SocialSisterYi/bilibili-API-collect) for the extensive API documentation

Inspired in part by [simon300000/bili-api](https://github.com/simon300000/bili-api)

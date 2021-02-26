# YABA
Yet Another Bilibili API
```
npm i yaba -S
```
```typescript
import { biliRequest } from "yaba";

const name = await biliRequest(({memberName})=>memberName, {mid:79})
console.log(name) //saber酱
```

## Usage

Request one API
```typescript
// vid is automatically converted to aid or bvid
const info = await biliRequest((api)=>api.videoInfo, {vid:2233}) 
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
import { biliConfig, biliRequest } from "yaba";

// authenticate using cookie
biliConfig({SESSDATA: '.....', bili_jct: '....'})
// like a video
const response = await biliRequest((api)=>api.like, {vid:2233})
console.log(response.code) //0 success
```

## Typescript
Results returned by `biliRequest` are fully typed:
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
More might be added as needed...

# Acknowledgement
Thanks to [SocialSisterYi/bilibili-API-collect](https://github.com/SocialSisterYi/bilibili-API-collect) for documenting the Bilibili API

Inspired in part by [simon300000/bili-api](https://github.com/simon300000/bili-api)

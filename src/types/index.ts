import Api from '../api/Api'

export * from './video'
export * from './member'

export type VideoAcceptQuality = 6 | 16 | 32 | 64 | 74 | 80 | 112 | 116 | 120 | 208

export const videoQualityDefinition = {
    6: 'MP4-240P',
    16: '360P',
    32: '480P', // max for guest
    64: '720P',
    74: '720P60', // need membership
    80: '1080P',
    112: '1080P+', // need membership
    116: '1080P60', // need membership
    120: '4K',
    208: 'MP4-unknown',
}

export type ParamRequirement = Array<string | string[]>

export type Data = {
    [key: string]: any
}

export interface GeneralResponse {
    code: number
    message?: string
    ttl?: number
}

export type ApiKeyMaster =
    | 'memberInfo'
    | 'memberSubmissions'
    | 'memberSubmissionsAll'
    | 'memberVideosAll'
    | 'memberSubmissionCount'
    | 'memberVideos'
    | 'memberVideosAllBvid'
    | 'spacePageCount'
    | 'memberName'
    | 'memberAvatar'
    | 'videoInfo'
    | 'videoTitle'
    | 'like'
    | 'aid'
    | 'bvid'
    | 'cid'
    | 'mid'

export type ApiItem = Api<any>

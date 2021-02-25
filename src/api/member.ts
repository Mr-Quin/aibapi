import getUrl, { UrlOption } from '../client/getUrl'
import { mapSeries } from 'async'
import Api from './Api'
import {
    MemberInfoResponse,
    SpaceSearchResponse,
    VideoInfoResponse,
    MyInfoResponse,
    VlistEntity,
} from './index'

export default {
    memberInfo: new Api<MemberInfoResponse>('memberInfo', {
        method: 'get',
        require: ['mid'],
        headers: {
            Origin: 'https://www.bilibili.com',
            Host: 'api.bilibili.com',
        },
        action: async (payload, options) => {
            return getUrl('https://api.bilibili.com/x/space/acc/info', options)(payload)
        },
    }),
    memberSubmissions: new Api<SpaceSearchResponse>('memberSubmissions', {
        method: 'get',
        require: ['mid'],
        optional: ['pn', 'ps'],
        headers: {
            Origin: 'https://www.bilibili.com',
            Host: 'api.bilibili.com',
        },
        action: (payload, options) => {
            const defaultPayload = {
                pn: 1,
                ps: 100,
            }
            return getUrl(
                'https://api.bilibili.com/x/space/arc/search',
                options
            )({ ...defaultPayload, ...payload })
        },
    }),
    memberSubmissionsAll: new Api<SpaceSearchResponse[]>('memberSubmissionsAll', {
        method: 'get',
        require: ['mid'],
        optional: ['pn', 'ps'],
        parents: ['spacePageCount'],
        headers: {
            Origin: 'https://www.bilibili.com',
            Host: 'api.bilibili.com',
        },
        action: async (payload, options) => {
            return mapSeries([...Array(payload.spacePageCount).keys()], async (i) => {
                return await getUrl(
                    'https://api.bilibili.com/x/space/arc/search',
                    options
                )({
                    mid: payload.mid,
                    pn: (i + 1).toString(),
                    ps: 100,
                })
            })
        },
    }),
    myInfo: new Api<MyInfoResponse>('myInfo', {
        method: 'get',
        parents: [],
        headers: {
            Origin: 'https://www.bilibili.com',
            Host: 'api.bilibili.com',
        },
        action: async (payload, options) => {
            return await getUrl('http://api.bilibili.com/x/member/web/account', options)(payload)
        },
    }),
    memberSubmissionCount: new Api<number>('memberSubmissionCount', {
        method: 'get',
        parents: ['memberSubmissions'],
        action: (payload: { memberSubmissions: SpaceSearchResponse }) =>
            payload.memberSubmissions.data?.page.count,
    }),
    memberVideos: new Api<VlistEntity[]>('memberVideos', {
        method: 'get',
        parents: ['memberSubmissions'],
        action: (payload: { memberSubmissions: SpaceSearchResponse }) =>
            payload.memberSubmissions.data?.list.vlist,
    }),
    memberVideosAll: new Api<VlistEntity[]>('memberVideosAll', {
        method: 'get',
        parents: ['memberSubmissionsAll'],
        action: (payload: { memberSubmissionsAll: SpaceSearchResponse[] }) =>
            payload.memberSubmissionsAll.flatMap((item) => item.data?.list.vlist),
    }),
    memberVideosAllBvid: new Api<string[]>('memberVideosAllBvid', {
        method: 'get',
        parents: ['memberVideosAll'],
        action: (payload: { memberVideosAll: VlistEntity[] }) =>
            payload.memberVideosAll.map((d) => d?.bvid),
    }),
    spacePageCount: new Api<number>('spacePageCount', {
        method: 'get',
        parents: ['memberSubmissions'],
        action: (payload: { memberSubmissions: SpaceSearchResponse }) =>
            Math.ceil(
                (payload.memberSubmissions.data?.page.count ?? -1) /
                    (payload.memberSubmissions.data?.page.ps ?? -1)
            ),
    }),
    memberName: new Api<string>('memberName', {
        method: 'get',
        parents: ['memberInfo'],
        action: (payload: { memberInfo?: MemberInfoResponse; videoInfo?: VideoInfoResponse }) => {
            if (payload['memberInfo']) return payload['memberInfo'].data?.name
            if (payload['videoInfo']) return payload['videoInfo'].data?.owner.name
            return ''
        },
    }),
    memberAvatar: new Api<string>('memberAvatar', {
        method: 'get',
        parents: ['memberInfo'],
        action: (payload: { memberInfo: MemberInfoResponse }) => {
            return payload.memberInfo.data?.face
        },
    }),
    mid: new Api<number>('mid', {
        method: 'get',
        parents: ['videoInfo'],
        action: (payload: { videoInfo: VideoInfoResponse }) => {
            return payload.videoInfo.data?.owner.mid
        },
    }),
}

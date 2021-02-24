import getUrl, { UrlOption } from '../client/getUrl'
import { mapSeries } from 'async'
import Api from './Api'
import * as Bilibili from '../types'

export default {
    memberInfo: new Api<Bilibili.MemberInfoResponse>('memberInfo', {
        method: 'get',
        require: ['mid'],
        optional: [],
        parents: [],
        callback: async (payload, options) => {
            const defaultHeaders: Partial<UrlOption['headers']> = {
                origin: 'https://www.bilibili.com',
                host: 'api.bilibili.com',
            }
            const headers = { ...options?.headers, ...defaultHeaders }
            return getUrl('https://api.bilibili.com/x/space/acc/info', {
                ...options,
                headers,
            })(payload)
        },
    }),
    memberSubmissions: new Api<Bilibili.SpaceSearchResponse>('memberSubmissions', {
        method: 'get',
        require: ['mid'],
        optional: ['pn', 'ps'],
        parents: [],
        callback: (payload, options) => {
            const defaultHeaders: Partial<UrlOption['headers']> = {
                origin: 'https://www.bilibili.com',
                host: 'api.bilibili.com',
            }
            const headers = { ...options?.headers, ...defaultHeaders }
            const defaultPayload = {
                pn: 1,
                ps: 100,
            }
            return getUrl<Bilibili.SpaceSearchResponse>(
                'https://api.bilibili.com/x/space/arc/search',
                {
                    ...options,
                    headers,
                }
            )({ ...defaultPayload, ...payload })
        },
    }),
    memberSubmissionsAll: new Api('memberSubmissionsAll', {
        method: 'get',
        require: ['mid'],
        optional: ['pn', 'ps'],
        parents: ['spacePageCount'],
        callback: async (payload, options) => {
            const defaultHeaders: Partial<UrlOption['headers']> = {
                origin: 'https://www.bilibili.com',
                host: 'api.bilibili.com',
            }
            const headers = { ...options?.headers, ...defaultHeaders }
            return mapSeries([...Array(payload.spacePageCount).keys()], async (i) => {
                return await getUrl<Bilibili.SpaceSearchResponse>(
                    'https://api.bilibili.com/x/space/arc/search',
                    {
                        ...options,
                        headers,
                    }
                )({
                    mid: payload.mid,
                    pn: (i + 1).toString(),
                    ps: 100,
                })
            })
        },
    }),
    memberSubmissionCount: new Api('memberSubmissionCount', {
        method: 'get',
        parents: ['memberSubmissions'],
        callback: (payload: { memberSubmissions: Bilibili.SpaceSearchResponse }) =>
            payload.memberSubmissions.data!.page.count,
    }),
    memberVideos: new Api('memberVideos', {
        method: 'get',
        parents: ['memberSubmissions'],
        callback: (payload: { memberSubmissions: Bilibili.SpaceSearchResponse }) =>
            payload.memberSubmissions.data!.list.vlist,
    }),
    memberVideosAll: new Api('memberVideosAll', {
        method: 'get',
        parents: ['memberSubmissionsAll'],
        callback: (payload: { memberSubmissionsAll: Bilibili.SpaceSearchResponse[] }) =>
            payload.memberSubmissionsAll.map((item) => item.data?.list.vlist).flat(),
    }),
    memberVideosAllBvid: new Api('memberVideosAllBvid', {
        method: 'get',
        parents: ['memberVideosAll'],
        callback: (payload: { memberVideosAll: any[] }) =>
            payload.memberVideosAll.map((d) => d.bvid),
    }),
    spacePageCount: new Api('spacePageCount', {
        method: 'get',
        parents: ['memberSubmissions'],
        callback: (payload: { memberSubmissions: Bilibili.SpaceSearchResponse }) =>
            Math.ceil(
                payload.memberSubmissions.data!.page.count / payload.memberSubmissions.data!.page.ps
            ),
    }),
    memberName: new Api('memberName', {
        method: 'get',
        parents: ['memberInfo'],
        callback: (payload: {
            memberInfo?: Bilibili.MemberInfoResponse
            videoInfo?: Bilibili.VideoInfoResponse
        }) => {
            if (payload['memberInfo']) return payload['memberInfo'].data!.name
            if (payload['videoInfo']) return payload['videoInfo'].data!.owner.name
            return ''
        },
    }),
    memberAvatar: new Api('memberAvatar', {
        method: 'get',
        parents: ['memberInfo'],
        callback: (payload: { memberInfo: Bilibili.MemberInfoResponse }) => {
            return payload.memberInfo.data?.face
        },
    }),
    mid: new Api('mid', {
        method: 'get',
        parents: ['videoInfo'],
        callback: (payload: { videoInfo: Bilibili.VideoInfoResponse }) => {
            return payload.videoInfo.data?.owner.mid
        },
    }),
}

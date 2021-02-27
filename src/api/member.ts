import getUrl from '../client/getUrl'
import { mapSeries } from 'async'
import Api from './Api'
import { MemberInfoResponse, SpaceSearchResponse, VideoInfoResponse, VlistEntity } from './index'

export default {
    memberInfo: new Api<MemberInfoResponse>('memberInfo', {
        method: 'get',
        require: ['mid'],
        headers: {
            Origin: 'https://www.bilibili.com',
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
    uname: new Api<string>('uname', {
        method: 'get',
        parents: ['memberInfo'],
        action: (payload: { memberInfo: MemberInfoResponse }) => payload['memberInfo'].data?.name,
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

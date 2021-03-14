import getUrl from '../client/getUrl'
import { mapSeries } from 'async'
import Api from './Api'
import {
    MemberFollowingResponse,
    MemberInfoResponse,
    SpaceSearchResponse,
    VideoInfoResponse,
    VlistEntity,
} from './index'
import { checkResponse } from '../helper'

export default {
    memberInfo: new Api<MemberInfoResponse>('memberInfo', {
        require: ['mid'],
        action: async (payload, options) => {
            const res = await getUrl<MemberInfoResponse>(
                'https://api.bilibili.com/x/space/acc/info',
                options
            )(payload)
            return checkResponse(res)
        },
    }),
    memberSubmissions: new Api<SpaceSearchResponse>('memberSubmissions', {
        require: ['mid'],
        optional: ['pn', 'ps'],
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
        parents: ['spacePageCount'],
        require: ['mid'],
        optional: ['pn', 'ps'],
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
        parents: ['memberSubmissions'],
        action: (payload: { memberSubmissions: SpaceSearchResponse }) =>
            payload.memberSubmissions.data?.page.count,
    }),
    memberVideos: new Api<VlistEntity[]>('memberVideos', {
        parents: ['memberSubmissions'],
        action: (payload: { memberSubmissions: SpaceSearchResponse }) =>
            payload.memberSubmissions.data?.list.vlist,
    }),
    memberVideosAll: new Api<VlistEntity[]>('memberVideosAll', {
        parents: ['memberSubmissionsAll'],
        action: (payload: { memberSubmissionsAll: SpaceSearchResponse[] }) =>
            payload.memberSubmissionsAll.flatMap((item) => item.data?.list.vlist),
    }),
    memberVideosAllBvid: new Api<string[]>('memberVideosAllBvid', {
        parents: ['memberVideosAll'],
        action: (payload: { memberVideosAll: VlistEntity[] }) =>
            payload.memberVideosAll.map((d) => d?.bvid),
    }),
    memberFollowing: new Api<MemberFollowingResponse>('memberFollowing', {
        parents: ['vmid'],
        optional: ['order_type', 'ps', 'pn'],
        action: async (payload, options) => {
            return await getUrl('http://api.bilibili.com/x/relation/followings', options)(payload)
        },
    }),
    memberFollowingPageCount: new Api<number>('memberFollowingPageCount', {
        parents: ['memberFollowing'],
        action: ({ memberFollowing }: { memberFollowing: MemberFollowingResponse }) =>
            Math.ceil(
                (memberFollowing.data?.total ?? -1) / (memberFollowing.data?.list.length ?? -1)
            ),
    }),
    spacePageCount: new Api<number>('spacePageCount', {
        parents: ['memberSubmissions'],
        action: (payload: { memberSubmissions: SpaceSearchResponse }) =>
            Math.ceil(
                (payload.memberSubmissions.data?.page.count ?? -1) /
                    (payload.memberSubmissions.data?.page.ps ?? -1)
            ),
    }),
    uname: new Api<string>('uname', {
        parents: ['memberInfo'],
        action: (payload: { memberInfo: MemberInfoResponse }) => payload['memberInfo'].data?.name,
    }),
    memberAvatar: new Api<string>('memberAvatar', {
        parents: ['memberInfo'],
        action: (payload: { memberInfo: MemberInfoResponse }) => {
            return payload.memberInfo.data?.face
        },
    }),
    mid: new Api<number>('mid', {
        parents: ['videoInfo'],
        action: (payload: { videoInfo: VideoInfoResponse }) => {
            return payload.videoInfo.data?.owner.mid
        },
    }),
    vmid: new Api<string>('vmid', {
        parents: ['mid'],
        action: ({ mid }: { mid: number }) => mid,
    }),
}

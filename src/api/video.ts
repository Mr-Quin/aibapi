import getUrl from '../client/getUrl'
import { mapSeries } from 'async'
import Api from './Api'
import biliStore from '../store'
import {
    CoinResponse,
    GeneralResponse,
    TripleResponse,
    VideoInfoResponse,
    VideoStreamResponse,
} from './index'
import { av2bv, bv2av, isSignedIn } from '../util'
import { checkResponse } from '../helper'

export default {
    videoInfo: new Api<VideoInfoResponse>('videoInfo', {
        method: 'get',
        require: [['aid', 'bvid']],
        action: async (payload, options) => {
            const res = await getUrl<VideoInfoResponse>(
                'https://api.bilibili.com/x/web-interface/view',
                options
            )(payload)
            return checkResponse(res)
        },
    }),
    videoStream: new Api<VideoStreamResponse[]>('videoStream', {
        method: 'get',
        require: [['avid', 'bvid']], // not a typo. avid === aid, a number
        parents: ['cid'],
        optional: ['type', 'platform', 'high_quality', 'qn', 'fourk', 'fnval'],
        format: (payload) => {
            const p = isSignedIn()
                ? { qn: 120, fourk: 1, fnval: 0 }
                : {
                      type: 'mp4',
                      platform: 'html5',
                      high_quality: 1,
                  }
            if (payload['aid'] !== undefined) {
                return { ...p, ...payload, avid: payload['aid'] }
            }
            return { ...p, ...payload }
        },
        action: async (payload, options) => {
            const cids = Array.isArray(payload.cid) ? payload.cid : [payload.cid]
            return mapSeries(cids, async (cid: string) => {
                return getUrl(
                    'https://api.bilibili.com/x/player/playurl',
                    options
                )({
                    ...payload,
                    cid,
                })
            })
        },
    }),
    like: new Api<GeneralResponse>('like', {
        method: 'post',
        require: [['aid', 'bvid']],
        optional: ['like'],
        action: async (payload, options) => {
            const defaultPayload = {
                like: 1,
                csrf: biliStore.getState().bili_jct,
            }
            return getUrl(
                'http://api.bilibili.com/x/web-interface/archive/like',
                options
            )({ ...defaultPayload, ...payload })
        },
    }),
    coin: new Api<CoinResponse>('coin', {
        method: 'post',
        require: [['aid', 'bvid']],
        optional: ['multiply', 'like'],
        headers: {
            Origin: 'https://www.bilibili.com',
        },
        action: async (payload, options) => {
            const defaultPayload = {
                multiply: 1,
                csrf: biliStore.getState().bili_jct,
            }
            return getUrl(
                'http://api.bilibili.com/x/web-interface/coin/add',
                options
            )({ ...defaultPayload, ...payload })
        },
    }),
    triple: new Api<TripleResponse>('triple', {
        method: 'post',
        require: [['aid', 'bvid']],
        headers: {
            Origin: 'https://www.bilibili.com',
        },
        action: async (payload, options) => {
            const defaultPayload = {
                csrf: biliStore.getState().bili_jct,
            }
            return getUrl(
                'http://api.bilibili.com/x/web-interface/archive/like/triple',
                options
            )({ ...defaultPayload, ...payload })
        },
    }),
    videoTitle: new Api<string>('videoTitle', {
        method: 'get',
        parents: ['videoInfo'],
        action: ({ videoInfo }: { videoInfo: VideoInfoResponse }) => videoInfo.data?.title,
    }),
    aid: new Api<number>('aid', {
        method: 'get',
        require: ['bvid'],
        action: ({ bvid }: { bvid: string }) => bv2av(bvid),
    }),
    bvid: new Api<number>('bvid', {
        method: 'get',
        require: ['aid'],
        action: ({ aid }: { aid: number | bigint }) => av2bv(aid),
    }),
    cid: new Api<number[]>('cid', {
        method: 'get',
        parents: ['videoInfo'],
        action: ({ videoInfo }: { videoInfo: VideoInfoResponse }) => {
            return videoInfo.data ? videoInfo.data.pages.map((page) => page.cid) : null
        },
    }),
}

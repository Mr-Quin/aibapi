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

export default {
    videoInfo: new Api<VideoInfoResponse>('videoInfo', {
        require: [['aid', 'bvid']],
        action: async (payload, options) => {
            const res = await getUrl<VideoInfoResponse>(
                'https://api.bilibili.com/x/web-interface/view',
                options
            )(payload)
            return res
        },
    }),
    videoStream: new Api<VideoStreamResponse[]>('videoStream', {
        require: [['avid', 'bvid']],
        parents: ['cid'],
        optional: ['type', 'platform', 'high_quality', 'qn', 'fourk', 'fnval'],
        format: (payload) => {
            const defaultPayload = isSignedIn()
                ? { qn: 120, fourk: 1, fnval: 0 }
                : {
                      type: 'mp4',
                      platform: 'html5',
                      high_quality: 1,
                  }
            const aid = payload['aid']
            if (aid !== undefined) {
                return { ...defaultPayload, ...payload, avid: aid }
            } else {
                return { ...defaultPayload, ...payload }
            }
        },
        action: async (payload, options) => {
            const cidList = [payload['cid']].flat()
            return mapSeries(cidList, async (cid: string) => {
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
        intercept: (payload) => ({
            csrf: biliStore.getState().bili_jct,
            ...payload,
        }),
        format: (payload) => ({ like: 1, ...payload }),
        action: async (payload, options) => {
            return getUrl('http://api.bilibili.com/x/web-interface/archive/like', options)(payload)
        },
    }),
    coin: new Api<CoinResponse>('coin', {
        method: 'post',
        require: [['aid', 'bvid']],
        optional: ['multiply', 'like'],
        intercept: (payload) => ({
            csrf: biliStore.getState().bili_jct,
            ...payload,
        }),
        format: (payload) => ({ multiply: 1, ...payload }),
        action: async (payload, options) => {
            return getUrl('http://api.bilibili.com/x/web-interface/coin/add', options)(payload)
        },
    }),
    triple: new Api<TripleResponse>('triple', {
        method: 'post',
        require: [['aid', 'bvid']],
        intercept: (payload) => ({
            csrf: biliStore.getState().bili_jct,
            ...payload,
        }),
        action: async (payload, options) => {
            return getUrl(
                'http://api.bilibili.com/x/web-interface/archive/like/triple',
                options
            )(payload)
        },
    }),
    videoTitle: new Api<string>('videoTitle', {
        parents: ['videoInfo'],
        action: ({ videoInfo }: { videoInfo: VideoInfoResponse }) => videoInfo.data?.title,
    }),
    aid: new Api<number>('aid', {
        require: ['bvid'],
        action: ({ bvid }: { bvid: string }) => bv2av(bvid),
    }),
    bvid: new Api<number>('bvid', {
        require: ['aid'],
        action: ({ aid }: { aid: number | bigint }) => av2bv(aid),
    }),
    cid: new Api<number[]>('cid', {
        parents: ['videoInfo'],
        action: ({ videoInfo }: { videoInfo: VideoInfoResponse }) => {
            return videoInfo.data ? videoInfo.data.pages.map((page) => page.cid) : []
        },
    }),
}

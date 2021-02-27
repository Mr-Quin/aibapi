import getUrl from '../client/getUrl'
import omit from 'lodash/omit'
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
import { isSignedIn } from '../util'

export default {
    videoInfo: new Api<VideoInfoResponse>('videoInfo', {
        method: 'get',
        require: [['aid', 'bvid']],
        headers: {
            Origin: 'https://www.bilibili.com',
        },
        action: (payload, options) => {
            return getUrl('https://api.bilibili.com/x/web-interface/view', options)(payload)
        },
    }),
    videoStream: new Api<VideoStreamResponse[]>('videoStream', {
        method: 'get',
        require: [['avid', 'bvid']],
        parents: ['cid'],
        optional: ['type', 'platform', 'high_quality', 'qn', 'fourk', 'fnval'],
        headers: {
            Origin: 'https://www.bilibili.com',
        },
        action: async (payload, options) => {
            const defaultPayload = isSignedIn()
                ? { qn: payload.qn ?? 120, fourk: 1, fnval: 0 }
                : {
                      type: 'mp4',
                      platform: 'html5',
                      high_quality: 1,
                  }
            if (!Array.isArray(payload.cid)) {
                return [
                    await getUrl(
                        'https://api.bilibili.com/x/player/playurl',
                        options
                    )({
                        ...defaultPayload,
                        ...payload,
                    }),
                ]
            } else {
                return mapSeries(payload.cid, async (cid: string) => {
                    return getUrl(
                        'https://api.bilibili.com/x/player/playurl',
                        options
                    )({
                        cid,
                        ...omit({ ...defaultPayload, ...payload }, ['cid']),
                    })
                })
            }
        },
    }),
    like: new Api<GeneralResponse>('like', {
        method: 'post',
        require: [['aid', 'bvid']],
        optional: ['like'],
        headers: {
            Origin: 'https://www.bilibili.com',
            Host: 'api.bilibili.com',
        },
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
        action: (payload: { videoInfo: VideoInfoResponse }) => payload.videoInfo.data?.title,
    }),
    aid: new Api<number>('aid', {
        method: 'get',
        parents: ['videoInfo'],
        action: (payload: { videoInfo: VideoInfoResponse }) => payload.videoInfo.data?.aid,
    }),
    bvid: new Api<number>('bvid', {
        method: 'get',
        parents: ['videoInfo'],
        action: (payload: { videoInfo: VideoInfoResponse }) => payload.videoInfo.data?.bvid,
    }),
    cid: new Api<number[]>('cid', {
        method: 'get',
        parents: ['videoInfo'],
        action: (payload: { videoInfo: VideoInfoResponse }) =>
            payload.videoInfo.data?.pages.map((page) => page.cid),
    }),
}

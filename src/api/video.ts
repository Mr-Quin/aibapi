import getUrl, { UrlOption } from '../client/getUrl'
import omit from 'lodash/omit'
import { mapSeries } from 'async'
import Api from './Api'
import biliStore from '../store/store'
import * as Bilibili from '../types'

export default {
    videoInfo: new Api<Bilibili.VideoInfoResponse>('videoInfo', {
        method: 'get',
        require: [['aid', 'bvid']],
        optional: [],
        parents: [],
        callback: async (payload, options) => {
            const defaultHeaders: Partial<UrlOption['headers']> = {
                origin: 'https://www.bilibili.com',
                host: 'api.bilibili.com',
            }
            const headers = { ...options?.headers, ...defaultHeaders }
            return getUrl('https://api.bilibili.com/x/web-interface/view', {
                ...options,
                headers,
            })(payload)
        },
    }),
    videoStream: new Api<Bilibili.VideoStreamResponse[]>('videoStream', {
        method: 'get',
        require: [['avid', 'bvid']],
        optional: ['type', 'platform', 'high_quality', 'qn', 'fourk', 'fnval'],
        parents: ['cid'],
        callback: async (payload, options) => {
            const defaultHeaders: Partial<UrlOption['headers']> = {
                origin: 'https://www.bilibili.com',
                host: 'api.bilibili.com',
            }
            const headers = { ...options?.headers, ...defaultHeaders }
            const defaultPayload = biliStore.getState().SESSDATA
                ? { qn: payload.qn ?? 120, fourk: 1, fnval: 0 }
                : {
                      type: 'mp4',
                      platform: 'html5',
                      high_quality: 1,
                  }
            if (!Array.isArray(payload.cid)) {
                return [
                    await getUrl('https://api.bilibili.com/x/player/playurl', {
                        ...options,
                        headers,
                    })({
                        ...defaultPayload,
                        ...payload,
                    }),
                ]
            } else {
                return mapSeries(payload.cid, async (id: string) => {
                    return getUrl(
                        'https://api.bilibili.com/x/player/playurl',
                        options
                    )({
                        cid: id,
                        ...omit({ ...defaultPayload, ...payload }, ['cid']),
                    })
                })
            }
        },
    }),
    like: new Api<string>('like', {
        method: 'post',
        require: [['aid', 'bvid']],
        optional: [],
        parents: [],
        callback: async (payload, options) => {
            const defaultHeaders: Partial<UrlOption['headers']> = {
                origin: 'https://www.bilibili.com',
                host: 'api.bilibili.com',
            }
            const headers = { ...options?.headers, ...defaultHeaders }
            const defaultPayload = {
                like: 1,
                csrf: biliStore.getState().bili_jct,
            }
            return getUrl('http://api.bilibili.com/x/web-interface/archive/like', {
                ...options,
                headers,
            })({ ...payload, ...defaultPayload })
        },
    }),
    videoTitle: new Api<string>('videoTitle', {
        method: 'get',
        parents: ['videoInfo'],
        callback: (payload: { videoInfo: Bilibili.VideoInfoResponse }) =>
            payload.videoInfo.data!.title,
    }),
    aid: new Api<number>('aid', {
        method: 'get',
        parents: ['videoInfo'],
        callback: (payload: { videoInfo: Bilibili.VideoInfoResponse }) =>
            payload.videoInfo.data!.aid,
    }),
    bvid: new Api<number>('bvid', {
        method: 'get',
        parents: ['videoInfo'],
        callback: (payload: { videoInfo: Bilibili.VideoInfoResponse }) =>
            payload.videoInfo.data!.bvid,
    }),
    cid: new Api<number[]>('cid', {
        method: 'get',
        parents: ['videoInfo'],
        callback: (payload: { videoInfo: Bilibili.VideoInfoResponse }) =>
            payload.videoInfo.data!.pages.map((page) => page.cid),
    }),
}

import Api from './Api'
import { mapSeries } from 'async'
import getUrl from '../client/getUrl'
import { inflateRawSync, unzipSync } from 'zlib'

export default {
    videoDanmakuProto: new Api<Buffer[]>('videoDanmakuProto', {
        parents: ['cid'],
        optional: ['pid', 'segment_index', 'type'],
        format: (payload) => {
            const defaultPayload = {
                type: 1,
                segment_index: 1,
            }
            return { ...defaultPayload, ...payload }
        },
        intercept: (payload) => {
            const { cid, ...others } = payload
            return { oid: cid, ...others }
        },
        action: async (payload, options) => {
            const oidList: number[] = [payload['oid']].flat()
            const compressed: Buffer[] = await mapSeries(oidList, async (oid) => {
                const p = { ...payload, oid }
                return await getUrl<Buffer>('https://api.bilibili.com/x/v2/dm/web/seg.so', {
                    ...options,
                    responseType: 'arraybuffer',
                    decompress: false,
                })(p)
            })
            return compressed.map((buffer) => unzipSync(buffer))
        },
    }),
    videoDanmakuXml: new Api<string[]>('videoDanmakuXml', {
        parents: ['cid'],
        intercept: (payload) => {
            const { cid, ...others } = payload
            return { oid: cid, ...others }
        },
        action: async (payload, options) => {
            const oidList: number[] = [payload['oid']].flat()
            const compressed: Buffer[] = await mapSeries(oidList, async (oid) => {
                const p = { ...payload, oid }
                return await getUrl(`https://api.bilibili.com/x/v1/dm/list.so`, {
                    ...options,
                    responseType: 'arraybuffer',
                    decompress: false,
                })(p)
            })
            return compressed.map((buffer) => inflateRawSync(buffer).toString())
        },
    }),
}

import Api from './Api'
import { MemberFollowingResponse, MyInfoResponse } from './index'
import getUrl from '../client/getUrl'
import { mapSeries } from 'async'
import * as zlib from 'zlib'

export default {
    myInfo: new Api<MyInfoResponse>('myInfo', {
        action: async (payload, options) => {
            return await getUrl('http://api.bilibili.com/x/member/web/account', options)(payload)
        },
    }),
    memberFollowing: new Api<MemberFollowingResponse>('memberFollowing', {
        require: ['vmid'],
        optional: ['order_type', 'ps', 'pn'],
        action: async (payload, options) => {
            return await getUrl('http://api.bilibili.com/x/relation/followings', options)(payload)
        },
    }),
    myFollowings: new Api<MemberFollowingResponse>('memberFollowing', {
        parents: ['myInfo'],
        optional: ['order_type', 'ps', 'pn'],
        action: async (payload, options) => {
            const myInfo: MyInfoResponse = payload['myInfo']
            const vmid = myInfo.data?.mid
            return await getUrl(
                'http://api.bilibili.com/x/relation/followings',
                options
            )({ vmid, ps: 100, ...payload })
        },
    }),
    videoDanmakuProto: new Api<Buffer[]>('videoDanmakuProto', {
        optional: ['pid', 'segment_index', 'type'],
        parents: ['oid'],
        format: (payload) => {
            const defaultPayload = {
                type: 1,
                segment_index: 1,
            }
            return { ...defaultPayload, ...payload }
        },
        action: async (payload, options) => {
            const oidList: number[] = [payload['oid']].flat()
            return mapSeries(oidList, async (oid) => {
                const p = { ...payload, oid }
                delete p.cid
                return await getUrl<Buffer>('https://api.bilibili.com/x/v2/dm/web/seg.so', {
                    ...options,
                    responseType: 'arraybuffer',
                })(p)
            })
        },
    }),
    videoDanmakuXml: new Api<string[]>('videoDanmakuXml', {
        parents: ['oid'],
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
            return compressed.map((buffer) => zlib.inflateRawSync(buffer).toString())
        },
    }),
}

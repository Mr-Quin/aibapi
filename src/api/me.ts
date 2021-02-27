import Api from './Api'
import { MemberFollowingResponse, MyInfoResponse } from './index'
import getUrl from '../client/getUrl'

export default {
    myInfo: new Api<MyInfoResponse>('myInfo', {
        method: 'get',
        headers: {
            Origin: 'https://www.bilibili.com',
        },
        action: async (payload, options) => {
            return await getUrl('http://api.bilibili.com/x/member/web/account', options)(payload)
        },
    }),
    memberFollowing: new Api<MemberFollowingResponse>('memberFollowing', {
        method: 'get',
        require: ['vmid'],
        optional: ['order_type', 'ps', 'pn'],
        headers: {
            Origin: 'https://www.bilibili.com',
        },
        action: async (payload, options) => {
            return await getUrl('http://api.bilibili.com/x/relation/followings', options)(payload)
        },
    }),
    videoDanmu: new Api<string>('videoDanmu', {
        method: 'get',
        require: ['oid'],
        optional: ['pid', 'segment_index', 'type'],
        headers: {
            Origin: 'https://www.bilibili.com',
        },
        action: async (payload, options) => {
            const defaultPayload = {
                type: 1,
                segment_index: 1,
            }
            return await getUrl('http://api.bilibili.com/x/v2/dm/web/seg.so', {
                ...options,
                responseType: 'text',
            })({ ...defaultPayload, ...payload })
        },
    }),
}

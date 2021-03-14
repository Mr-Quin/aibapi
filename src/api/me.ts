import Api from './Api'
import { GeneralResponse, MemberFollowingResponse } from './index'
import getUrl from '../client/getUrl'

export default {
    myInfo: new Api<MyInfoResponse>('myInfo', {
        action: async (payload, options) => {
            return await getUrl('http://api.bilibili.com/x/member/web/account', options)(payload)
        },
    }),
    myFollowings: new Api<MemberFollowingResponse>('memberFollowing', {
        parents: ['myInfo'],
        optional: ['order_type', 'ps', 'pn'],
        action: async (payload, options) => {
            // omits myInfo from payload
            const { myInfo, ...other }: { myInfo: MyInfoResponse } = payload
            const vmid = myInfo.data?.mid
            console.log(vmid, other)
            return await getUrl(
                'http://api.bilibili.com/x/relation/followings',
                options
            )({ vmid, ...other })
        },
    }),
}

export interface MyInfoResponse extends GeneralResponse {
    data?: MyInfoData
}
export interface MyInfoData {
    mid: number
    uname: string
    userid: string
    sign: string
    birthday: string
    sex: string
    nick_free: boolean
    rank: string
}

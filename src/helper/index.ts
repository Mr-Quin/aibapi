import { Data } from '../api'
import { isValidBvid } from './avbvConverter'

export const generateReferer = (params: Data = {}) => {
    const { bvid, aid, avid, mid } = params
    if (bvid) return `https://www.bilibili.com/video/${bvid}`
    if (aid || avid) return `https://www.bilibili.com/video/av${aid ?? avid}`
    if (mid) return `https://space.bilibili.com/${mid}`
    return null
}

const parseVidType = (videoId: string | number) => {
    if (typeof videoId === 'number' || !isNaN(Number(videoId))) {
        return 'aid'
    } else if (isValidBvid(videoId)) {
        return 'bvid'
    }
    return null
}

// parse vid into aid or bvid
export const parseParamsVid = (params: Data) => {
    const vid: any = params['vid']
    if (vid === undefined || params['aid'] || params['bvid']) return params
    // runtime type check
    if (typeof vid === 'string' || typeof vid === 'number') {
        if (vid === '') throw TypeError(`Invalid vid ${vid}, vid cannot be an empty string`)
        const type = parseVidType(vid)
        if (!type) throw TypeError(`Invalid vid ${vid}`)
        return { ...params, [type]: vid }
    } else {
        throw TypeError(`Vid must be of type string or number`)
    }
}

export { checkResponse, BiliRequestError } from './checkResponse'
export { av2bv, bv2av, isValidBvid } from './avbvConverter'
export { checkPayloadWith, filterPayloadWith } from './payloadShaper'

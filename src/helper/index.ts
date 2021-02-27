import { Data } from '../api'

export const generateReferer = (params: Data = {}) => {
    const { bvid, aid, avid, mid } = params
    if (bvid) return `https://www.bilibili.com/video/${bvid}`
    if (aid || avid) return `https://www.bilibili.com/video/av${aid ?? avid}`
    if (mid) return `https://space.bilibili.com/${mid}`
    return null
}

const parseVidType = (videoId: string | number) => {
    const vid = videoId.toString()
    if (vid.startsWith('BV')) {
        return 'bvid'
    } else return videoId.toString().startsWith('BV') ? 'bvid' : 'aid'
}

const parseVid = (videoId: string) => {
    return videoId.toLowerCase().startsWith('av') ? parseInt(videoId.slice(2), 10) : videoId
}

// parse vid into aid(avid) or bvid
export const parseParamsVid = (params: Data) => {
    const vid = params['vid']?.toString()
    if (!vid || params['aid'] || params['bvid'] || params['avid']) return params
    const type = parseVidType(vid)
    const avid = type === 'aid' ? vid : undefined
    return { ...params, [type]: parseVid(vid), [avid ? 'avid' : '']: avid }
}

export { av2bv, bv2av } from './avbvConverter'
export { checkParamsWith, filterParamsWith } from './payloadMiddleware'

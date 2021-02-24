import { GeneralResponse, VideoAcceptQuality } from './index'

export interface VideoInfoResponse extends GeneralResponse {
    data?: VideoInfoData
}
export interface VideoInfoData {
    bvid: string
    aid: number
    videos: number
    tid: number
    tname: string
    copyright: number
    pic: string
    title: string
    pubdate: number
    ctime: number
    desc: string
    state: number
    duration: number
    rights: VideoRights
    owner: VideoOwner
    stat: VideoStats
    dynamic: string
    cid: number
    dimension: VideoDimension
    no_cache: boolean
    pages: VideoPages[]
    subtitle: VideoSubtitle
    user_garb: UserGarb
}
export interface VideoRights {
    bp: number
    elec: number
    download: number
    movie: number
    pay: number
    hd5: number
    no_reprint: number
    autoplay: number
    ugc_pay: number
    is_cooperation: number
    ugc_pay_preview: number
    no_background: number
    clean_mode: number
    is_stein_gate: number
}
export interface VideoOwner {
    mid: number
    name: string
    face: string
}
export interface VideoStats {
    aid: number
    view: number
    danmaku: number
    reply: number
    favorite: number
    coin: number
    share: number
    now_rank: number
    his_rank: number
    like: number
    dislike: number
    evaluation: string
    argue_msg: string
}
export interface VideoDimension {
    width: number
    height: number
    rotate: number
}
export interface VideoPages {
    cid: number
    page: number
    from: string
    part: string
    duration: number
    vid: string
    weblink: string
    dimension: VideoDimension
}
export interface VideoSubtitle {
    allow_submit: boolean
    list: any[]
}
export interface UserGarb {
    url_image_ani_cut: string
}

export interface VideoStreamResponse extends GeneralResponse {
    data?: VideoStreamData
}
export interface VideoStreamData {
    from: string
    result: string
    message: string
    quality: VideoAcceptQuality
    format: string
    timelength: number
    accept_format: string
    accept_description: string[]
    accept_quality: VideoAcceptQuality[]
    video_codecid: number
    seek_param: string
    seek_type: string
    durl: VideoStreamDurl[]
    support_formats: VideoStreamSupportFormats[]
}
export interface VideoStreamDurl {
    order: number
    length: number
    size: number
    ahead: string
    vhead: string
    url: string
    backup_url?: null
}
export interface VideoStreamSupportFormats {
    quality: VideoAcceptQuality
    format: string
    new_description: string
    display_desc: string
    superscript: string
}

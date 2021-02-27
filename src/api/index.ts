import memberApi from './member'
import videoApi from './video'
import me from './me'
import Api from './Api'

export type ApiKeyMaster =
    | 'aid'
    | 'bvid'
    | 'cid'
    | 'coin'
    | 'like'
    | 'memberAvatar'
    | 'memberInfo'
    | 'uname'
    | 'memberSubmissionCount'
    | 'memberSubmissions'
    | 'memberSubmissionsAll'
    | 'memberVideos'
    | 'memberVideosAll'
    | 'memberVideosAllBvid'
    | 'mid'
    | 'myInfo'
    | 'spacePageCount'
    | 'triple'
    | 'videoInfo'
    | 'videoStream'
    | 'videoTitle'
    | 'memberFollowing'
    | 'videoDanmu'

type Validation = { [k in ApiKeyMaster]: ApiValue }

const validateApi = <T>(t: T) => t

const bilibiliApi = {
    ...memberApi,
    ...videoApi,
    ...me,
}

// check if api contains all keys listed in ApiKeyMaster
validateApi<Validation>(bilibiliApi)

export default bilibiliApi

export type Arrayable<T> = T | T[]
export type ValueOf<T> = T[keyof T]
export type Unwrap<T> = T extends PromiseLike<infer U> ? U : T
export type ExtractGeneric<T> = T extends Api<infer X> ? X : unknown

export type ApiList = typeof bilibiliApi
// export type ApiKeys = keyof ApiList
export type ApiKeys = ApiKeyMaster
export type ApiValue = ApiList[ApiKeys]
export type ApiValues = Arrayable<ApiValue>
export type ApiItem = Api<ApiAcceptedReturns>
export type ApiItems = Arrayable<ApiItem>
export type ApiAcceptedReturns = Arrayable<GeneralResponse | Data | string | number | symbol>
export type ApiReturns = { [k in ApiKeys]: ExtractGeneric<ApiList[k]> }

export type VideoAcceptQuality = 6 | 16 | 32 | 64 | 74 | 80 | 112 | 116 | 120 | 208
export type ParamRequirement = Array<string | string[]>
export type Data = Record<string | symbol | number, any>

export interface GeneralResponse {
    code: number
    message?: string
    ttl?: number
}

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
    dash?: Dash
    durl?: VideoStreamDurl[]
    support_formats: VideoStreamSupportFormats[]
}
export interface VideoStreamSupportFormats {
    quality: VideoAcceptQuality
    format: string
    new_description: string
    display_desc: string
    superscript: string
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
export interface Dash {
    duration: number
    minBufferTime: number
    min_buffer_time: number
    video: DashMediaEntity[]
    audio: DashMediaEntity[]
}
export interface DashMediaEntity {
    id: number
    baseUrl: string
    base_url: string
    backupUrl?: null
    backup_url?: null
    bandwidth: number
    mimeType: string
    mime_type: string
    codecs: string
    width: number
    height: number
    frameRate: string
    frame_rate: string
    sar: string
    startWithSap: number
    start_with_sap: number
    SegmentBase: SegmentBase
    segment_base: Segment_Base
    codecid: number
}
export interface SegmentBase {
    Initialization: string
    indexRange: string
}
export interface Segment_Base {
    initialization: string
    index_range: string
}

export interface SpaceSearchResponse extends GeneralResponse {
    data?: SpaceSearchData
}
export interface SpaceSearchData {
    list: SpaceSearchList
    page: SpaceSearchPage
    episodic_button: EpisodicButton
}
export interface SpaceSearchList {
    tlist: Tlist | null
    vlist: VlistEntity[]
}
export interface Tlist {
    [key: string]: TlistEntity
}
export interface TlistEntity {
    tid: number
    count: number
    name: string
}
export interface VlistEntity {
    comment: number
    typeid: number
    play: number
    pic: string
    subtitle: string
    description: string
    copyright: string
    title: string
    review: number
    author: string
    mid: number
    created: number
    length: string
    video_review: number
    aid: number
    bvid: string
    hide_click: boolean
    is_pay: number
    is_union_video: number
    is_steins_gate: number
}
export interface SpaceSearchPage {
    pn: number
    ps: number
    count: number
}
export interface EpisodicButton {
    text: string
    uri: string
}

export interface MemberInfoResponse extends GeneralResponse {
    data?: MemberInfoData
}
export interface MemberInfoData {
    mid: number
    name: string
    sex: string
    face: string
    sign: string
    rank: number
    level: number
    jointime: number
    moral: number
    silence: number
    birthday: string
    coins: number
    fans_badge: boolean
    official: MemberInfoOfficial
    vip: MemberInfoVip
    pendant: Pendant
    nameplate: Nameplate
    is_followed: boolean
    top_photo: string
    theme: any
    sys_notice: any
    live_room: LiveRoom
}
export interface MemberInfoOfficial {
    role: number
    title: string
    desc: string
    type: number
}
export interface MemberInfoVip {
    type: number
    status: number
    theme_type: number
    label: Label
    avatar_subscript: number
    nickname_color: string
}
export interface Label {
    path: string
    text: string
    label_theme: string
}
export interface Pendant {
    pid: number
    name: string
    image: string
    expire: number
    image_enhance: string
    image_enhance_frame: string
}
export interface Nameplate {
    nid: number
    name: string
    image: string
    image_small: string
    level: string
    condition: string
}
export interface LiveRoom {
    roomStatus: number
    liveStatus: number
    url: string
    title: string
    cover: string
    online: number
    roomid: number
    roundStatus: number
    broadcast_type: number
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

export interface MemberFollowingResponse extends GeneralResponse {
    data?: MemberFollowingData
}
export interface MemberFollowingData {
    list: MemberFollowingList[]
    re_version: number
    total: number
}
export interface MemberFollowingList {
    mid: number
    attribute: number
    mtime: number
    tag: number[] | null
    special: number
    contract_info: ContractInfo
    uname: string
    face: string
    sign: string
    official_verify: OfficialVerify
    vip: MemberFollowingListVip
}
export interface ContractInfo {
    is_contractor: boolean
    ts: number
}
export interface OfficialVerify {
    type: number
    desc: string
}
export interface MemberFollowingListVip {
    vipType: number
    vipDueDate: number
    dueRemark: string
    accessStatus: number
    vipStatus: number
    vipStatusWarn: string
    themeType: number
    label: Label
}
export interface Label {
    path: string
}

export interface TripleResponse extends GeneralResponse {
    data?: TripleData
}
export interface TripleData {
    like: boolean
    coin: boolean
    fav: boolean
    multiply: number
}

export interface CoinResponse extends GeneralResponse {
    data?: CoinData
}
export interface CoinData {
    like: boolean
}

import { GeneralResponse } from './index'

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
    official: Official
    vip: Vip
    pendant: Pendant
    nameplate: Nameplate
    is_followed: boolean
    top_photo: string
    theme: ThemeOrSysNotice
    sys_notice: ThemeOrSysNotice
    live_room: LiveRoom
}
export interface Official {
    role: number
    title: string
    desc: string
    type: number
}
export interface Vip {
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
export interface ThemeOrSysNotice {}
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

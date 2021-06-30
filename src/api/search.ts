import Api from './Api'
import { GeneralResponse } from './index'
import getUrl from '../client/getUrl'

export default {
    search: new Api<SearchResponse>('search', {
        require: ['keyword'],
        action: async (payload, options) => {
            return getUrl(
                'https://api.bilibili.com/x/web-interface/search/all/v2',
                options
            )(payload)
        },
    }),
}

export interface SearchResponse extends GeneralResponse {
    data?: SearchData
}
export interface SearchData {
    seid: string
    page: number
    pagesize: number
    numResults: number
    numPages: number
    suggest_keyword: string
    rqt_type: string
    cost_time: CostTime
    exp_list: ExpList
    egg_hit: number
    pageinfo: Pageinfo
    top_tlist: TopTlist
    show_column: number
    show_module_list: string[]
    result: Result[]
}
export interface CostTime {
    params_check: string
    'get upuser live status': string
    illegal_handler: string
    as_response_format: string
    mysql_request: string
    as_request: string
    save_cache: string
    as_request_format: string
    deserialize_response: string
    total: string
    main_handler: string
}
export interface ExpList {
    '6603': boolean
    '5508': boolean
}
export interface Pageinfo {
    live_room: PageinfoData
    pgc: PageinfoData
    operation_card: PageinfoData
    tv: PageinfoData
    movie: PageinfoData
    bili_user: PageinfoData
    live_master: PageinfoData
    live_all: PageinfoData
    topic: PageinfoData
    upuser: PageinfoData
    live: PageinfoData
    video: PageinfoData
    user: PageinfoData
    bangumi: PageinfoData
    activity: PageinfoData
    media_ft: PageinfoData
    article: PageinfoData
    media_bangumi: PageinfoData
    special: PageinfoData
    live_user: PageinfoData
}
export interface PageinfoData {
    numResults: number
    total: number
    pages: number
}
export interface TopTlist {
    live_room: number
    pgc: number
    operation_card: number
    tv: number
    movie: number
    special: number
    live_master: number
    bili_user: number
    topic: number
    upuser: number
    live: number
    video: number
    user: number
    bangumi: number
    activity: number
    media_ft: number
    article: number
    media_bangumi: number
    card: number
    live_user: number
}
export interface Result {
    result_type: string
    data: Daum[]
}
export interface Daum {
    status?: number
    author?: string
    url?: string
    title?: string
    cover?: string
    pos?: number
    card_type?: number
    state?: number
    corner: any
    card_value?: string
    type?: string
    id?: number
    desc?: string
    game_name?: string
    game_icon?: string
    summary?: string
    game_status?: number
    game_link?: string
    grade?: number
    book_num?: number
    download_num?: number
    comment_num?: number
    platform?: string
    media_id?: number
    season_id?: number
    org_title?: string
    media_type?: number
    areas?: string
    styles?: string
    cv?: string
    staff?: string
    play_state?: number
    goto_url?: string
    pubtime?: number
    media_mode?: number
    is_avid?: boolean
    fix_pubtime_str?: string
    media_score?: MediaScore
    hit_columns?: string[]
    all_net_name?: string
    all_net_icon?: string
    all_net_url?: string
    angle_title?: string
    angle_color?: number
    display_info?: DisplayInfo[]
    hit_epids?: string
    pgc_season_id?: number
    season_type?: number
    season_type_name?: string
    selection_style?: string
    ep_size?: number
    button_text?: string
    is_follow?: number
    is_selection?: number
    eps?: Ep[]
    badges?: Badge2[]
    mid?: number
    uname?: string
    usign?: string
    fans?: number
    videos?: number
    upic?: string
    verify_info?: string
    level?: number
    gender?: number
    is_upuser?: number
    is_live?: number
    room_id?: number
    res?: Re[]
    official_verify?: OfficialVerify
    typeid?: string
    typename?: string
    arcurl?: string
    aid?: number
    bvid?: string
    description?: string
    arcrank?: string
    pic?: string
    play?: number
    video_review?: number
    favorites?: number
    tag?: string
    review?: number
    pubdate?: number
    senddate?: number
    duration?: string
    badgepay?: boolean
    view_type?: string
    is_pay?: number
    is_union_video?: number
    rec_tags: any
    new_rec_tags?: any[]
    rank_score?: number
}
export interface MediaScore {
    user_count: number
    score: number
}
export interface DisplayInfo {
    bg_color_night: string
    text: string
    border_color: string
    bg_style: number
    text_color: string
    bg_color: string
    text_color_night: string
    border_color_night: string
}
export interface Ep {
    id: number
    cover: string
    title: string
    url: string
    release_date: string
    badges: Badge[]
    index_title: string
    long_title: string
}
export interface Badge {
    text: string
    text_color: string
    text_color_night: string
    bg_color: string
    bg_color_night: string
    border_color: string
    border_color_night: string
    bg_style: number
}
export interface Badge2 {
    text: string
    text_color: string
    text_color_night: string
    bg_color: string
    bg_color_night: string
    border_color: string
    border_color_night: string
    bg_style: number
}
export interface Re {
    aid: number
    bvid: string
    title: string
    pubdate: number
    arcurl: string
    pic: string
    play: string
    dm: number
    coin: number
    fav: number
    desc: string
    duration: string
    is_pay: number
    is_union_video: number
}
export interface OfficialVerify {
    type: number
    desc: string
}

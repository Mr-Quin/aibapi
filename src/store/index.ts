import create from 'zustand/vanilla'

export type BiliCredential = {
    SESSDATA: string
    bili_jct: string
    DedeUserID: number | string
    buvid3: string
    sid: string
}

export type BiliOptions = {
    'user-agent': string
    requestDelay: number
    debug: boolean
}

const biliStore = create<BiliCredential & BiliOptions>(() => ({
    SESSDATA: '',
    bili_jct: '',
    DedeUserID: '',
    buvid3: '',
    sid: '',
    'user-agent':
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.146 Safari/537.36',
    requestDelay: 250,
    debug: false,
}))

export default biliStore
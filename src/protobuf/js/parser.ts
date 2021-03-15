import { bilibili } from './dm'

export const decodeDanmaku = (buffer: Buffer) => {
    // const root = await protobuf.load('./src/protobuf/dm.proto')
    // const danmu = root.lookupType('bilibili.community.service.dm.v1.DanmakuElem')
    const err = bilibili.community.service.dm.v1.DmSegMobileReply.verify(buffer)
    if (err) {
        throw err
    }
    return bilibili.community.service.dm.v1.DmSegMobileReply.decode(buffer)
}

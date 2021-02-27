import biliStore from './store'

const qnDefinition = {
    6: 'MP4-240P',
    16: '360P',
    32: '480P', // max for guest
    64: '720P',
    74: '720P60', // need membership
    80: '1080P',
    112: '1080P+', // need membership
    116: '1080P60', // need membership
    120: '4K',
    208: 'MP4-unknown',
}

enum qnLookup {
    'MP4-240P' = 6,
    '360P' = 16,
    '480P' = 32,
    '720P' = 64,
    '720P60' = 74,
    '1080P' = 80,
    '1080P+' = 112,
    '1080P60' = 116,
    '4K' = 120,
    'MP4-unknown' = 208,
}

const isSignedIn = () => biliStore.getState().SESSDATA !== ''

export { isSignedIn, qnDefinition, qnLookup }
export { av2bv, bv2av } from './helper'

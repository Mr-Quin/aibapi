import { GeneralResponse } from '../api'
import biliStore from '../store'

export class BiliRequestError extends Error {
    constructor(message: GeneralResponse) {
        super(`Non-zero response code. Received: ${message.code} ${message.message}`)
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, BiliRequestError)
        }
        this.name = 'BiliRequestError'
    }
}

export const checkResponse = <T extends GeneralResponse>(response: T) => {
    if (response.code !== 0 && biliStore.getState().shouldThrow) {
        throw new BiliRequestError(response)
    }
    return response
}

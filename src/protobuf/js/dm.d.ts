import * as $protobuf from 'protobufjs'
import { Long } from 'protobufjs'
/** Namespace bilibili. */
export namespace bilibili {
    /** Namespace community. */
    namespace community {
        /** Namespace service. */
        namespace service {
            /** Namespace dm. */
            namespace dm {
                /** Namespace v1. */
                namespace v1 {
                    /** Represents a DM */
                    class DM extends $protobuf.rpc.Service {
                        /**
                         * Constructs a new DM service.
                         * @param rpcImpl RPC implementation
                         * @param [requestDelimited=false] Whether requests are length-delimited
                         * @param [responseDelimited=false] Whether responses are length-delimited
                         */
                        constructor(
                            rpcImpl: $protobuf.RPCImpl,
                            requestDelimited?: boolean,
                            responseDelimited?: boolean
                        )

                        /**
                         * Creates new DM service using the specified rpc implementation.
                         * @param rpcImpl RPC implementation
                         * @param [requestDelimited=false] Whether requests are length-delimited
                         * @param [responseDelimited=false] Whether responses are length-delimited
                         * @returns RPC service. Useful where requests and/or responses are streamed.
                         */
                        public static create(
                            rpcImpl: $protobuf.RPCImpl,
                            requestDelimited?: boolean,
                            responseDelimited?: boolean
                        ): DM

                        /**
                         * Calls DmPlayerConfig.
                         * @param request DmPlayerConfigReq message or plain object
                         * @param callback Node-style callback called with the error, if any, and Response
                         */
                        public dmPlayerConfig(
                            request: bilibili.community.service.dm.v1.IDmPlayerConfigReq,
                            callback: bilibili.community.service.dm.v1.DM.DmPlayerConfigCallback
                        ): void

                        /**
                         * Calls DmPlayerConfig.
                         * @param request DmPlayerConfigReq message or plain object
                         * @returns Promise
                         */
                        public dmPlayerConfig(
                            request: bilibili.community.service.dm.v1.IDmPlayerConfigReq
                        ): Promise<bilibili.community.service.dm.v1.Response>

                        /**
                         * Calls DmSegMobile.
                         * @param request DmSegMobileReq message or plain object
                         * @param callback Node-style callback called with the error, if any, and DmSegMobileReply
                         */
                        public dmSegMobile(
                            request: bilibili.community.service.dm.v1.IDmSegMobileReq,
                            callback: bilibili.community.service.dm.v1.DM.DmSegMobileCallback
                        ): void

                        /**
                         * Calls DmSegMobile.
                         * @param request DmSegMobileReq message or plain object
                         * @returns Promise
                         */
                        public dmSegMobile(
                            request: bilibili.community.service.dm.v1.IDmSegMobileReq
                        ): Promise<bilibili.community.service.dm.v1.DmSegMobileReply>

                        /**
                         * Calls DmView.
                         * @param request DmViewReq message or plain object
                         * @param callback Node-style callback called with the error, if any, and DmViewReply
                         */
                        public dmView(
                            request: bilibili.community.service.dm.v1.IDmViewReq,
                            callback: bilibili.community.service.dm.v1.DM.DmViewCallback
                        ): void

                        /**
                         * Calls DmView.
                         * @param request DmViewReq message or plain object
                         * @returns Promise
                         */
                        public dmView(
                            request: bilibili.community.service.dm.v1.IDmViewReq
                        ): Promise<bilibili.community.service.dm.v1.DmViewReply>
                    }

                    namespace DM {
                        /**
                         * Callback as used by {@link bilibili.community.service.dm.v1.DM#dmPlayerConfig}.
                         * @param error Error, if any
                         * @param [response] Response
                         */
                        type DmPlayerConfigCallback = (
                            error: Error | null,
                            response?: bilibili.community.service.dm.v1.Response
                        ) => void

                        /**
                         * Callback as used by {@link bilibili.community.service.dm.v1.DM#dmSegMobile}.
                         * @param error Error, if any
                         * @param [response] DmSegMobileReply
                         */
                        type DmSegMobileCallback = (
                            error: Error | null,
                            response?: bilibili.community.service.dm.v1.DmSegMobileReply
                        ) => void

                        /**
                         * Callback as used by {@link bilibili.community.service.dm.v1.DM#dmView}.
                         * @param error Error, if any
                         * @param [response] DmViewReply
                         */
                        type DmViewCallback = (
                            error: Error | null,
                            response?: bilibili.community.service.dm.v1.DmViewReply
                        ) => void
                    }

                    /** Properties of a DmPlayerConfigReq. */
                    interface IDmPlayerConfigReq {
                        /** DmPlayerConfigReq ts */
                        ts?: number | Long | null

                        /** DmPlayerConfigReq switch */
                        switch?: bilibili.community.service.dm.v1.IPlayerDanmakuSwitch | null

                        /** DmPlayerConfigReq switchSave */
                        switchSave?: bilibili.community.service.dm.v1.IPlayerDanmakuSwitchSave | null

                        /** DmPlayerConfigReq useDefaultConfig */
                        useDefaultConfig?: bilibili.community.service.dm.v1.IPlayerDanmakuUseDefaultConfig | null

                        /** DmPlayerConfigReq aiRecommendedSwitch */
                        aiRecommendedSwitch?: bilibili.community.service.dm.v1.IPlayerDanmakuAiRecommendedSwitch | null

                        /** DmPlayerConfigReq aiRecommendedLevel */
                        aiRecommendedLevel?: bilibili.community.service.dm.v1.IPlayerDanmakuAiRecommendedLevel | null

                        /** DmPlayerConfigReq blocktop */
                        blocktop?: bilibili.community.service.dm.v1.IPlayerDanmakuBlocktop | null

                        /** DmPlayerConfigReq blockscroll */
                        blockscroll?: bilibili.community.service.dm.v1.IPlayerDanmakuBlockscroll | null

                        /** DmPlayerConfigReq blockbottom */
                        blockbottom?: bilibili.community.service.dm.v1.IPlayerDanmakuBlockbottom | null

                        /** DmPlayerConfigReq blockcolorful */
                        blockcolorful?: bilibili.community.service.dm.v1.IPlayerDanmakuBlockcolorful | null

                        /** DmPlayerConfigReq blockrepeat */
                        blockrepeat?: bilibili.community.service.dm.v1.IPlayerDanmakuBlockrepeat | null

                        /** DmPlayerConfigReq blockspecial */
                        blockspecial?: bilibili.community.service.dm.v1.IPlayerDanmakuBlockspecial | null

                        /** DmPlayerConfigReq opacity */
                        opacity?: bilibili.community.service.dm.v1.IPlayerDanmakuOpacity | null

                        /** DmPlayerConfigReq scalingfactor */
                        scalingfactor?: bilibili.community.service.dm.v1.IPlayerDanmakuScalingfactor | null

                        /** DmPlayerConfigReq domain */
                        domain?: bilibili.community.service.dm.v1.IPlayerDanmakuDomain | null

                        /** DmPlayerConfigReq speed */
                        speed?: bilibili.community.service.dm.v1.IPlayerDanmakuSpeed | null

                        /** DmPlayerConfigReq enableblocklist */
                        enableblocklist?: bilibili.community.service.dm.v1.IPlayerDanmakuEnableblocklist | null

                        /** DmPlayerConfigReq inlinePlayerDanmakuSwitch */
                        inlinePlayerDanmakuSwitch?: bilibili.community.service.dm.v1.IInlinePlayerDanmakuSwitch | null
                    }

                    /** Represents a DmPlayerConfigReq. */
                    class DmPlayerConfigReq implements IDmPlayerConfigReq {
                        /**
                         * Constructs a new DmPlayerConfigReq.
                         * @param [properties] Properties to set
                         */
                        constructor(
                            properties?: bilibili.community.service.dm.v1.IDmPlayerConfigReq
                        )

                        /** DmPlayerConfigReq ts. */
                        public ts: number | Long

                        /** DmPlayerConfigReq switch. */
                        public switch?: bilibili.community.service.dm.v1.IPlayerDanmakuSwitch | null

                        /** DmPlayerConfigReq switchSave. */
                        public switchSave?: bilibili.community.service.dm.v1.IPlayerDanmakuSwitchSave | null

                        /** DmPlayerConfigReq useDefaultConfig. */
                        public useDefaultConfig?: bilibili.community.service.dm.v1.IPlayerDanmakuUseDefaultConfig | null

                        /** DmPlayerConfigReq aiRecommendedSwitch. */
                        public aiRecommendedSwitch?: bilibili.community.service.dm.v1.IPlayerDanmakuAiRecommendedSwitch | null

                        /** DmPlayerConfigReq aiRecommendedLevel. */
                        public aiRecommendedLevel?: bilibili.community.service.dm.v1.IPlayerDanmakuAiRecommendedLevel | null

                        /** DmPlayerConfigReq blocktop. */
                        public blocktop?: bilibili.community.service.dm.v1.IPlayerDanmakuBlocktop | null

                        /** DmPlayerConfigReq blockscroll. */
                        public blockscroll?: bilibili.community.service.dm.v1.IPlayerDanmakuBlockscroll | null

                        /** DmPlayerConfigReq blockbottom. */
                        public blockbottom?: bilibili.community.service.dm.v1.IPlayerDanmakuBlockbottom | null

                        /** DmPlayerConfigReq blockcolorful. */
                        public blockcolorful?: bilibili.community.service.dm.v1.IPlayerDanmakuBlockcolorful | null

                        /** DmPlayerConfigReq blockrepeat. */
                        public blockrepeat?: bilibili.community.service.dm.v1.IPlayerDanmakuBlockrepeat | null

                        /** DmPlayerConfigReq blockspecial. */
                        public blockspecial?: bilibili.community.service.dm.v1.IPlayerDanmakuBlockspecial | null

                        /** DmPlayerConfigReq opacity. */
                        public opacity?: bilibili.community.service.dm.v1.IPlayerDanmakuOpacity | null

                        /** DmPlayerConfigReq scalingfactor. */
                        public scalingfactor?: bilibili.community.service.dm.v1.IPlayerDanmakuScalingfactor | null

                        /** DmPlayerConfigReq domain. */
                        public domain?: bilibili.community.service.dm.v1.IPlayerDanmakuDomain | null

                        /** DmPlayerConfigReq speed. */
                        public speed?: bilibili.community.service.dm.v1.IPlayerDanmakuSpeed | null

                        /** DmPlayerConfigReq enableblocklist. */
                        public enableblocklist?: bilibili.community.service.dm.v1.IPlayerDanmakuEnableblocklist | null

                        /** DmPlayerConfigReq inlinePlayerDanmakuSwitch. */
                        public inlinePlayerDanmakuSwitch?: bilibili.community.service.dm.v1.IInlinePlayerDanmakuSwitch | null

                        /**
                         * Creates a new DmPlayerConfigReq instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns DmPlayerConfigReq instance
                         */
                        public static create(
                            properties?: bilibili.community.service.dm.v1.IDmPlayerConfigReq
                        ): bilibili.community.service.dm.v1.DmPlayerConfigReq

                        /**
                         * Encodes the specified DmPlayerConfigReq message. Does not implicitly {@link bilibili.community.service.dm.v1.DmPlayerConfigReq.verify|verify} messages.
                         * @param message DmPlayerConfigReq message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(
                            message: bilibili.community.service.dm.v1.IDmPlayerConfigReq,
                            writer?: $protobuf.Writer
                        ): $protobuf.Writer

                        /**
                         * Encodes the specified DmPlayerConfigReq message, length delimited. Does not implicitly {@link bilibili.community.service.dm.v1.DmPlayerConfigReq.verify|verify} messages.
                         * @param message DmPlayerConfigReq message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(
                            message: bilibili.community.service.dm.v1.IDmPlayerConfigReq,
                            writer?: $protobuf.Writer
                        ): $protobuf.Writer

                        /**
                         * Decodes a DmPlayerConfigReq message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns DmPlayerConfigReq
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(
                            reader: $protobuf.Reader | Uint8Array,
                            length?: number
                        ): bilibili.community.service.dm.v1.DmPlayerConfigReq

                        /**
                         * Decodes a DmPlayerConfigReq message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns DmPlayerConfigReq
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(
                            reader: $protobuf.Reader | Uint8Array
                        ): bilibili.community.service.dm.v1.DmPlayerConfigReq

                        /**
                         * Verifies a DmPlayerConfigReq message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): string | null

                        /**
                         * Creates a DmPlayerConfigReq message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns DmPlayerConfigReq
                         */
                        public static fromObject(object: {
                            [k: string]: any
                        }): bilibili.community.service.dm.v1.DmPlayerConfigReq

                        /**
                         * Creates a plain object from a DmPlayerConfigReq message. Also converts values to other types if specified.
                         * @param message DmPlayerConfigReq
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(
                            message: bilibili.community.service.dm.v1.DmPlayerConfigReq,
                            options?: $protobuf.IConversionOptions
                        ): { [k: string]: any }

                        /**
                         * Converts this DmPlayerConfigReq to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any }
                    }

                    /** Properties of a Response. */
                    interface IResponse {
                        /** Response code */
                        code?: number | null

                        /** Response message */
                        message?: string | null
                    }

                    /** Represents a Response. */
                    class Response implements IResponse {
                        /**
                         * Constructs a new Response.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: bilibili.community.service.dm.v1.IResponse)

                        /** Response code. */
                        public code: number

                        /** Response message. */
                        public message: string

                        /**
                         * Creates a new Response instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Response instance
                         */
                        public static create(
                            properties?: bilibili.community.service.dm.v1.IResponse
                        ): bilibili.community.service.dm.v1.Response

                        /**
                         * Encodes the specified Response message. Does not implicitly {@link bilibili.community.service.dm.v1.Response.verify|verify} messages.
                         * @param message Response message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(
                            message: bilibili.community.service.dm.v1.IResponse,
                            writer?: $protobuf.Writer
                        ): $protobuf.Writer

                        /**
                         * Encodes the specified Response message, length delimited. Does not implicitly {@link bilibili.community.service.dm.v1.Response.verify|verify} messages.
                         * @param message Response message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(
                            message: bilibili.community.service.dm.v1.IResponse,
                            writer?: $protobuf.Writer
                        ): $protobuf.Writer

                        /**
                         * Decodes a Response message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Response
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(
                            reader: $protobuf.Reader | Uint8Array,
                            length?: number
                        ): bilibili.community.service.dm.v1.Response

                        /**
                         * Decodes a Response message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Response
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(
                            reader: $protobuf.Reader | Uint8Array
                        ): bilibili.community.service.dm.v1.Response

                        /**
                         * Verifies a Response message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): string | null

                        /**
                         * Creates a Response message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Response
                         */
                        public static fromObject(object: {
                            [k: string]: any
                        }): bilibili.community.service.dm.v1.Response

                        /**
                         * Creates a plain object from a Response message. Also converts values to other types if specified.
                         * @param message Response
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(
                            message: bilibili.community.service.dm.v1.Response,
                            options?: $protobuf.IConversionOptions
                        ): { [k: string]: any }

                        /**
                         * Converts this Response to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any }
                    }

                    /** Properties of a DmSegMobileReq. */
                    interface IDmSegMobileReq {
                        /** DmSegMobileReq pid */
                        pid?: number | Long | null

                        /** DmSegMobileReq oid */
                        oid?: number | Long | null

                        /** DmSegMobileReq type */
                        type?: number | null

                        /** DmSegMobileReq segmentIndex */
                        segmentIndex?: number | Long | null

                        /** DmSegMobileReq teenagersMode */
                        teenagersMode?: number | null
                    }

                    /** Represents a DmSegMobileReq. */
                    class DmSegMobileReq implements IDmSegMobileReq {
                        /**
                         * Constructs a new DmSegMobileReq.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: bilibili.community.service.dm.v1.IDmSegMobileReq)

                        /** DmSegMobileReq pid. */
                        public pid: number | Long

                        /** DmSegMobileReq oid. */
                        public oid: number | Long

                        /** DmSegMobileReq type. */
                        public type: number

                        /** DmSegMobileReq segmentIndex. */
                        public segmentIndex: number | Long

                        /** DmSegMobileReq teenagersMode. */
                        public teenagersMode: number

                        /**
                         * Creates a new DmSegMobileReq instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns DmSegMobileReq instance
                         */
                        public static create(
                            properties?: bilibili.community.service.dm.v1.IDmSegMobileReq
                        ): bilibili.community.service.dm.v1.DmSegMobileReq

                        /**
                         * Encodes the specified DmSegMobileReq message. Does not implicitly {@link bilibili.community.service.dm.v1.DmSegMobileReq.verify|verify} messages.
                         * @param message DmSegMobileReq message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(
                            message: bilibili.community.service.dm.v1.IDmSegMobileReq,
                            writer?: $protobuf.Writer
                        ): $protobuf.Writer

                        /**
                         * Encodes the specified DmSegMobileReq message, length delimited. Does not implicitly {@link bilibili.community.service.dm.v1.DmSegMobileReq.verify|verify} messages.
                         * @param message DmSegMobileReq message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(
                            message: bilibili.community.service.dm.v1.IDmSegMobileReq,
                            writer?: $protobuf.Writer
                        ): $protobuf.Writer

                        /**
                         * Decodes a DmSegMobileReq message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns DmSegMobileReq
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(
                            reader: $protobuf.Reader | Uint8Array,
                            length?: number
                        ): bilibili.community.service.dm.v1.DmSegMobileReq

                        /**
                         * Decodes a DmSegMobileReq message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns DmSegMobileReq
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(
                            reader: $protobuf.Reader | Uint8Array
                        ): bilibili.community.service.dm.v1.DmSegMobileReq

                        /**
                         * Verifies a DmSegMobileReq message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): string | null

                        /**
                         * Creates a DmSegMobileReq message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns DmSegMobileReq
                         */
                        public static fromObject(object: {
                            [k: string]: any
                        }): bilibili.community.service.dm.v1.DmSegMobileReq

                        /**
                         * Creates a plain object from a DmSegMobileReq message. Also converts values to other types if specified.
                         * @param message DmSegMobileReq
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(
                            message: bilibili.community.service.dm.v1.DmSegMobileReq,
                            options?: $protobuf.IConversionOptions
                        ): { [k: string]: any }

                        /**
                         * Converts this DmSegMobileReq to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any }
                    }

                    /** Properties of a DmSegMobileReply. */
                    interface IDmSegMobileReply {
                        /** DmSegMobileReply elems */
                        elems?: bilibili.community.service.dm.v1.IDanmakuElem[] | null

                        /** DmSegMobileReply state */
                        state?: number | null

                        /** DmSegMobileReply aiFlag */
                        aiFlag?: bilibili.community.service.dm.v1.IDanmakuAIFlag | null
                    }

                    /** Represents a DmSegMobileReply. */
                    class DmSegMobileReply implements IDmSegMobileReply {
                        /**
                         * Constructs a new DmSegMobileReply.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: bilibili.community.service.dm.v1.IDmSegMobileReply)

                        /** DmSegMobileReply elems. */
                        public elems: bilibili.community.service.dm.v1.IDanmakuElem[]

                        /** DmSegMobileReply state. */
                        public state: number

                        /** DmSegMobileReply aiFlag. */
                        public aiFlag?: bilibili.community.service.dm.v1.IDanmakuAIFlag | null

                        /**
                         * Creates a new DmSegMobileReply instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns DmSegMobileReply instance
                         */
                        public static create(
                            properties?: bilibili.community.service.dm.v1.IDmSegMobileReply
                        ): bilibili.community.service.dm.v1.DmSegMobileReply

                        /**
                         * Encodes the specified DmSegMobileReply message. Does not implicitly {@link bilibili.community.service.dm.v1.DmSegMobileReply.verify|verify} messages.
                         * @param message DmSegMobileReply message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(
                            message: bilibili.community.service.dm.v1.IDmSegMobileReply,
                            writer?: $protobuf.Writer
                        ): $protobuf.Writer

                        /**
                         * Encodes the specified DmSegMobileReply message, length delimited. Does not implicitly {@link bilibili.community.service.dm.v1.DmSegMobileReply.verify|verify} messages.
                         * @param message DmSegMobileReply message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(
                            message: bilibili.community.service.dm.v1.IDmSegMobileReply,
                            writer?: $protobuf.Writer
                        ): $protobuf.Writer

                        /**
                         * Decodes a DmSegMobileReply message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns DmSegMobileReply
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(
                            reader: $protobuf.Reader | Uint8Array,
                            length?: number
                        ): bilibili.community.service.dm.v1.DmSegMobileReply

                        /**
                         * Decodes a DmSegMobileReply message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns DmSegMobileReply
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(
                            reader: $protobuf.Reader | Uint8Array
                        ): bilibili.community.service.dm.v1.DmSegMobileReply

                        /**
                         * Verifies a DmSegMobileReply message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): string | null

                        /**
                         * Creates a DmSegMobileReply message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns DmSegMobileReply
                         */
                        public static fromObject(object: {
                            [k: string]: any
                        }): bilibili.community.service.dm.v1.DmSegMobileReply

                        /**
                         * Creates a plain object from a DmSegMobileReply message. Also converts values to other types if specified.
                         * @param message DmSegMobileReply
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(
                            message: bilibili.community.service.dm.v1.DmSegMobileReply,
                            options?: $protobuf.IConversionOptions
                        ): { [k: string]: any }

                        /**
                         * Converts this DmSegMobileReply to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any }
                    }

                    /** Properties of a DmViewReq. */
                    interface IDmViewReq {
                        /** DmViewReq pid */
                        pid?: number | Long | null

                        /** DmViewReq oid */
                        oid?: number | Long | null

                        /** DmViewReq type */
                        type?: number | null

                        /** DmViewReq spmid */
                        spmid?: string | null

                        /** DmViewReq isHardBoot */
                        isHardBoot?: number | null
                    }

                    /** Represents a DmViewReq. */
                    class DmViewReq implements IDmViewReq {
                        /**
                         * Constructs a new DmViewReq.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: bilibili.community.service.dm.v1.IDmViewReq)

                        /** DmViewReq pid. */
                        public pid: number | Long

                        /** DmViewReq oid. */
                        public oid: number | Long

                        /** DmViewReq type. */
                        public type: number

                        /** DmViewReq spmid. */
                        public spmid: string

                        /** DmViewReq isHardBoot. */
                        public isHardBoot: number

                        /**
                         * Creates a new DmViewReq instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns DmViewReq instance
                         */
                        public static create(
                            properties?: bilibili.community.service.dm.v1.IDmViewReq
                        ): bilibili.community.service.dm.v1.DmViewReq

                        /**
                         * Encodes the specified DmViewReq message. Does not implicitly {@link bilibili.community.service.dm.v1.DmViewReq.verify|verify} messages.
                         * @param message DmViewReq message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(
                            message: bilibili.community.service.dm.v1.IDmViewReq,
                            writer?: $protobuf.Writer
                        ): $protobuf.Writer

                        /**
                         * Encodes the specified DmViewReq message, length delimited. Does not implicitly {@link bilibili.community.service.dm.v1.DmViewReq.verify|verify} messages.
                         * @param message DmViewReq message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(
                            message: bilibili.community.service.dm.v1.IDmViewReq,
                            writer?: $protobuf.Writer
                        ): $protobuf.Writer

                        /**
                         * Decodes a DmViewReq message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns DmViewReq
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(
                            reader: $protobuf.Reader | Uint8Array,
                            length?: number
                        ): bilibili.community.service.dm.v1.DmViewReq

                        /**
                         * Decodes a DmViewReq message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns DmViewReq
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(
                            reader: $protobuf.Reader | Uint8Array
                        ): bilibili.community.service.dm.v1.DmViewReq

                        /**
                         * Verifies a DmViewReq message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): string | null

                        /**
                         * Creates a DmViewReq message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns DmViewReq
                         */
                        public static fromObject(object: {
                            [k: string]: any
                        }): bilibili.community.service.dm.v1.DmViewReq

                        /**
                         * Creates a plain object from a DmViewReq message. Also converts values to other types if specified.
                         * @param message DmViewReq
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(
                            message: bilibili.community.service.dm.v1.DmViewReq,
                            options?: $protobuf.IConversionOptions
                        ): { [k: string]: any }

                        /**
                         * Converts this DmViewReq to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any }
                    }

                    /** Properties of a DmViewReply. */
                    interface IDmViewReply {
                        /** DmViewReply closed */
                        closed?: boolean | null

                        /** DmViewReply mask */
                        mask?: bilibili.community.service.dm.v1.IVideoMask | null

                        /** DmViewReply subtitle */
                        subtitle?: bilibili.community.service.dm.v1.IVideoSubtitle | null

                        /** DmViewReply specialDms */
                        specialDms?: string[] | null

                        /** DmViewReply aiFlag */
                        aiFlag?: bilibili.community.service.dm.v1.IDanmakuFlagConfig | null

                        /** DmViewReply playerConfig */
                        playerConfig?: bilibili.community.service.dm.v1.IDanmuPlayerViewConfig | null

                        /** DmViewReply sendBoxStyle */
                        sendBoxStyle?: number | null

                        /** DmViewReply allow */
                        allow?: boolean | null

                        /** DmViewReply checkBox */
                        checkBox?: string | null

                        /** DmViewReply checkBoxShowMsg */
                        checkBoxShowMsg?: string | null

                        /** DmViewReply textPlaceholder */
                        textPlaceholder?: string | null

                        /** DmViewReply inputPlaceholder */
                        inputPlaceholder?: string | null

                        /** DmViewReply reportFilterContent */
                        reportFilterContent?: string[] | null
                    }

                    /** Represents a DmViewReply. */
                    class DmViewReply implements IDmViewReply {
                        /**
                         * Constructs a new DmViewReply.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: bilibili.community.service.dm.v1.IDmViewReply)

                        /** DmViewReply closed. */
                        public closed: boolean

                        /** DmViewReply mask. */
                        public mask?: bilibili.community.service.dm.v1.IVideoMask | null

                        /** DmViewReply subtitle. */
                        public subtitle?: bilibili.community.service.dm.v1.IVideoSubtitle | null

                        /** DmViewReply specialDms. */
                        public specialDms: string[]

                        /** DmViewReply aiFlag. */
                        public aiFlag?: bilibili.community.service.dm.v1.IDanmakuFlagConfig | null

                        /** DmViewReply playerConfig. */
                        public playerConfig?: bilibili.community.service.dm.v1.IDanmuPlayerViewConfig | null

                        /** DmViewReply sendBoxStyle. */
                        public sendBoxStyle: number

                        /** DmViewReply allow. */
                        public allow: boolean

                        /** DmViewReply checkBox. */
                        public checkBox: string

                        /** DmViewReply checkBoxShowMsg. */
                        public checkBoxShowMsg: string

                        /** DmViewReply textPlaceholder. */
                        public textPlaceholder: string

                        /** DmViewReply inputPlaceholder. */
                        public inputPlaceholder: string

                        /** DmViewReply reportFilterContent. */
                        public reportFilterContent: string[]

                        /**
                         * Creates a new DmViewReply instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns DmViewReply instance
                         */
                        public static create(
                            properties?: bilibili.community.service.dm.v1.IDmViewReply
                        ): bilibili.community.service.dm.v1.DmViewReply

                        /**
                         * Encodes the specified DmViewReply message. Does not implicitly {@link bilibili.community.service.dm.v1.DmViewReply.verify|verify} messages.
                         * @param message DmViewReply message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(
                            message: bilibili.community.service.dm.v1.IDmViewReply,
                            writer?: $protobuf.Writer
                        ): $protobuf.Writer

                        /**
                         * Encodes the specified DmViewReply message, length delimited. Does not implicitly {@link bilibili.community.service.dm.v1.DmViewReply.verify|verify} messages.
                         * @param message DmViewReply message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(
                            message: bilibili.community.service.dm.v1.IDmViewReply,
                            writer?: $protobuf.Writer
                        ): $protobuf.Writer

                        /**
                         * Decodes a DmViewReply message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns DmViewReply
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(
                            reader: $protobuf.Reader | Uint8Array,
                            length?: number
                        ): bilibili.community.service.dm.v1.DmViewReply

                        /**
                         * Decodes a DmViewReply message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns DmViewReply
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(
                            reader: $protobuf.Reader | Uint8Array
                        ): bilibili.community.service.dm.v1.DmViewReply

                        /**
                         * Verifies a DmViewReply message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): string | null

                        /**
                         * Creates a DmViewReply message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns DmViewReply
                         */
                        public static fromObject(object: {
                            [k: string]: any
                        }): bilibili.community.service.dm.v1.DmViewReply

                        /**
                         * Creates a plain object from a DmViewReply message. Also converts values to other types if specified.
                         * @param message DmViewReply
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(
                            message: bilibili.community.service.dm.v1.DmViewReply,
                            options?: $protobuf.IConversionOptions
                        ): { [k: string]: any }

                        /**
                         * Converts this DmViewReply to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any }
                    }

                    /** Properties of a DanmakuAIFlag. */
                    interface IDanmakuAIFlag {
                        /** DanmakuAIFlag dmFlags */
                        dmFlags?: bilibili.community.service.dm.v1.IDanmakuFlag[] | null
                    }

                    /** Represents a DanmakuAIFlag. */
                    class DanmakuAIFlag implements IDanmakuAIFlag {
                        /**
                         * Constructs a new DanmakuAIFlag.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: bilibili.community.service.dm.v1.IDanmakuAIFlag)

                        /** DanmakuAIFlag dmFlags. */
                        public dmFlags: bilibili.community.service.dm.v1.IDanmakuFlag[]

                        /**
                         * Creates a new DanmakuAIFlag instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns DanmakuAIFlag instance
                         */
                        public static create(
                            properties?: bilibili.community.service.dm.v1.IDanmakuAIFlag
                        ): bilibili.community.service.dm.v1.DanmakuAIFlag

                        /**
                         * Encodes the specified DanmakuAIFlag message. Does not implicitly {@link bilibili.community.service.dm.v1.DanmakuAIFlag.verify|verify} messages.
                         * @param message DanmakuAIFlag message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(
                            message: bilibili.community.service.dm.v1.IDanmakuAIFlag,
                            writer?: $protobuf.Writer
                        ): $protobuf.Writer

                        /**
                         * Encodes the specified DanmakuAIFlag message, length delimited. Does not implicitly {@link bilibili.community.service.dm.v1.DanmakuAIFlag.verify|verify} messages.
                         * @param message DanmakuAIFlag message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(
                            message: bilibili.community.service.dm.v1.IDanmakuAIFlag,
                            writer?: $protobuf.Writer
                        ): $protobuf.Writer

                        /**
                         * Decodes a DanmakuAIFlag message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns DanmakuAIFlag
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(
                            reader: $protobuf.Reader | Uint8Array,
                            length?: number
                        ): bilibili.community.service.dm.v1.DanmakuAIFlag

                        /**
                         * Decodes a DanmakuAIFlag message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns DanmakuAIFlag
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(
                            reader: $protobuf.Reader | Uint8Array
                        ): bilibili.community.service.dm.v1.DanmakuAIFlag

                        /**
                         * Verifies a DanmakuAIFlag message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): string | null

                        /**
                         * Creates a DanmakuAIFlag message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns DanmakuAIFlag
                         */
                        public static fromObject(object: {
                            [k: string]: any
                        }): bilibili.community.service.dm.v1.DanmakuAIFlag

                        /**
                         * Creates a plain object from a DanmakuAIFlag message. Also converts values to other types if specified.
                         * @param message DanmakuAIFlag
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(
                            message: bilibili.community.service.dm.v1.DanmakuAIFlag,
                            options?: $protobuf.IConversionOptions
                        ): { [k: string]: any }

                        /**
                         * Converts this DanmakuAIFlag to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any }
                    }

                    /** Properties of a DanmakuElem. */
                    interface IDanmakuElem {
                        /** DanmakuElem id */
                        id?: number | Long | null

                        /** DanmakuElem progress */
                        progress?: number | null

                        /** DanmakuElem mode */
                        mode?: number | null

                        /** DanmakuElem fontsize */
                        fontsize?: number | null

                        /** DanmakuElem color */
                        color?: number | null

                        /** DanmakuElem midHash */
                        midHash?: string | null

                        /** DanmakuElem content */
                        content?: string | null

                        /** DanmakuElem ctime */
                        ctime?: number | Long | null

                        /** DanmakuElem weight */
                        weight?: number | null

                        /** DanmakuElem action */
                        action?: string | null

                        /** DanmakuElem pool */
                        pool?: number | null

                        /** DanmakuElem idStr */
                        idStr?: string | null

                        /** DanmakuElem attr */
                        attr?: number | null
                    }

                    /** Represents a DanmakuElem. */
                    class DanmakuElem implements IDanmakuElem {
                        /**
                         * Constructs a new DanmakuElem.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: bilibili.community.service.dm.v1.IDanmakuElem)

                        /** DanmakuElem id. */
                        public id: number | Long

                        /** DanmakuElem progress. */
                        public progress: number

                        /** DanmakuElem mode. */
                        public mode: number

                        /** DanmakuElem fontsize. */
                        public fontsize: number

                        /** DanmakuElem color. */
                        public color: number

                        /** DanmakuElem midHash. */
                        public midHash: string

                        /** DanmakuElem content. */
                        public content: string

                        /** DanmakuElem ctime. */
                        public ctime: number | Long

                        /** DanmakuElem weight. */
                        public weight: number

                        /** DanmakuElem action. */
                        public action: string

                        /** DanmakuElem pool. */
                        public pool: number

                        /** DanmakuElem idStr. */
                        public idStr: string

                        /** DanmakuElem attr. */
                        public attr: number

                        /**
                         * Creates a new DanmakuElem instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns DanmakuElem instance
                         */
                        public static create(
                            properties?: bilibili.community.service.dm.v1.IDanmakuElem
                        ): bilibili.community.service.dm.v1.DanmakuElem

                        /**
                         * Encodes the specified DanmakuElem message. Does not implicitly {@link bilibili.community.service.dm.v1.DanmakuElem.verify|verify} messages.
                         * @param message DanmakuElem message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(
                            message: bilibili.community.service.dm.v1.IDanmakuElem,
                            writer?: $protobuf.Writer
                        ): $protobuf.Writer

                        /**
                         * Encodes the specified DanmakuElem message, length delimited. Does not implicitly {@link bilibili.community.service.dm.v1.DanmakuElem.verify|verify} messages.
                         * @param message DanmakuElem message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(
                            message: bilibili.community.service.dm.v1.IDanmakuElem,
                            writer?: $protobuf.Writer
                        ): $protobuf.Writer

                        /**
                         * Decodes a DanmakuElem message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns DanmakuElem
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(
                            reader: $protobuf.Reader | Uint8Array,
                            length?: number
                        ): bilibili.community.service.dm.v1.DanmakuElem

                        /**
                         * Decodes a DanmakuElem message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns DanmakuElem
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(
                            reader: $protobuf.Reader | Uint8Array
                        ): bilibili.community.service.dm.v1.DanmakuElem

                        /**
                         * Verifies a DanmakuElem message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): string | null

                        /**
                         * Creates a DanmakuElem message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns DanmakuElem
                         */
                        public static fromObject(object: {
                            [k: string]: any
                        }): bilibili.community.service.dm.v1.DanmakuElem

                        /**
                         * Creates a plain object from a DanmakuElem message. Also converts values to other types if specified.
                         * @param message DanmakuElem
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(
                            message: bilibili.community.service.dm.v1.DanmakuElem,
                            options?: $protobuf.IConversionOptions
                        ): { [k: string]: any }

                        /**
                         * Converts this DanmakuElem to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any }
                    }

                    /** Properties of a DanmakuFlag. */
                    interface IDanmakuFlag {
                        /** DanmakuFlag dmid */
                        dmid?: number | Long | null

                        /** DanmakuFlag flag */
                        flag?: number | null
                    }

                    /** Represents a DanmakuFlag. */
                    class DanmakuFlag implements IDanmakuFlag {
                        /**
                         * Constructs a new DanmakuFlag.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: bilibili.community.service.dm.v1.IDanmakuFlag)

                        /** DanmakuFlag dmid. */
                        public dmid: number | Long

                        /** DanmakuFlag flag. */
                        public flag: number

                        /**
                         * Creates a new DanmakuFlag instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns DanmakuFlag instance
                         */
                        public static create(
                            properties?: bilibili.community.service.dm.v1.IDanmakuFlag
                        ): bilibili.community.service.dm.v1.DanmakuFlag

                        /**
                         * Encodes the specified DanmakuFlag message. Does not implicitly {@link bilibili.community.service.dm.v1.DanmakuFlag.verify|verify} messages.
                         * @param message DanmakuFlag message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(
                            message: bilibili.community.service.dm.v1.IDanmakuFlag,
                            writer?: $protobuf.Writer
                        ): $protobuf.Writer

                        /**
                         * Encodes the specified DanmakuFlag message, length delimited. Does not implicitly {@link bilibili.community.service.dm.v1.DanmakuFlag.verify|verify} messages.
                         * @param message DanmakuFlag message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(
                            message: bilibili.community.service.dm.v1.IDanmakuFlag,
                            writer?: $protobuf.Writer
                        ): $protobuf.Writer

                        /**
                         * Decodes a DanmakuFlag message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns DanmakuFlag
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(
                            reader: $protobuf.Reader | Uint8Array,
                            length?: number
                        ): bilibili.community.service.dm.v1.DanmakuFlag

                        /**
                         * Decodes a DanmakuFlag message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns DanmakuFlag
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(
                            reader: $protobuf.Reader | Uint8Array
                        ): bilibili.community.service.dm.v1.DanmakuFlag

                        /**
                         * Verifies a DanmakuFlag message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): string | null

                        /**
                         * Creates a DanmakuFlag message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns DanmakuFlag
                         */
                        public static fromObject(object: {
                            [k: string]: any
                        }): bilibili.community.service.dm.v1.DanmakuFlag

                        /**
                         * Creates a plain object from a DanmakuFlag message. Also converts values to other types if specified.
                         * @param message DanmakuFlag
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(
                            message: bilibili.community.service.dm.v1.DanmakuFlag,
                            options?: $protobuf.IConversionOptions
                        ): { [k: string]: any }

                        /**
                         * Converts this DanmakuFlag to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any }
                    }

                    /** Properties of a DanmakuFlagConfig. */
                    interface IDanmakuFlagConfig {
                        /** DanmakuFlagConfig recFlag */
                        recFlag?: number | null

                        /** DanmakuFlagConfig recText */
                        recText?: string | null

                        /** DanmakuFlagConfig recSwitch */
                        recSwitch?: number | null
                    }

                    /** Represents a DanmakuFlagConfig. */
                    class DanmakuFlagConfig implements IDanmakuFlagConfig {
                        /**
                         * Constructs a new DanmakuFlagConfig.
                         * @param [properties] Properties to set
                         */
                        constructor(
                            properties?: bilibili.community.service.dm.v1.IDanmakuFlagConfig
                        )

                        /** DanmakuFlagConfig recFlag. */
                        public recFlag: number

                        /** DanmakuFlagConfig recText. */
                        public recText: string

                        /** DanmakuFlagConfig recSwitch. */
                        public recSwitch: number

                        /**
                         * Creates a new DanmakuFlagConfig instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns DanmakuFlagConfig instance
                         */
                        public static create(
                            properties?: bilibili.community.service.dm.v1.IDanmakuFlagConfig
                        ): bilibili.community.service.dm.v1.DanmakuFlagConfig

                        /**
                         * Encodes the specified DanmakuFlagConfig message. Does not implicitly {@link bilibili.community.service.dm.v1.DanmakuFlagConfig.verify|verify} messages.
                         * @param message DanmakuFlagConfig message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(
                            message: bilibili.community.service.dm.v1.IDanmakuFlagConfig,
                            writer?: $protobuf.Writer
                        ): $protobuf.Writer

                        /**
                         * Encodes the specified DanmakuFlagConfig message, length delimited. Does not implicitly {@link bilibili.community.service.dm.v1.DanmakuFlagConfig.verify|verify} messages.
                         * @param message DanmakuFlagConfig message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(
                            message: bilibili.community.service.dm.v1.IDanmakuFlagConfig,
                            writer?: $protobuf.Writer
                        ): $protobuf.Writer

                        /**
                         * Decodes a DanmakuFlagConfig message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns DanmakuFlagConfig
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(
                            reader: $protobuf.Reader | Uint8Array,
                            length?: number
                        ): bilibili.community.service.dm.v1.DanmakuFlagConfig

                        /**
                         * Decodes a DanmakuFlagConfig message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns DanmakuFlagConfig
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(
                            reader: $protobuf.Reader | Uint8Array
                        ): bilibili.community.service.dm.v1.DanmakuFlagConfig

                        /**
                         * Verifies a DanmakuFlagConfig message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): string | null

                        /**
                         * Creates a DanmakuFlagConfig message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns DanmakuFlagConfig
                         */
                        public static fromObject(object: {
                            [k: string]: any
                        }): bilibili.community.service.dm.v1.DanmakuFlagConfig

                        /**
                         * Creates a plain object from a DanmakuFlagConfig message. Also converts values to other types if specified.
                         * @param message DanmakuFlagConfig
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(
                            message: bilibili.community.service.dm.v1.DanmakuFlagConfig,
                            options?: $protobuf.IConversionOptions
                        ): { [k: string]: any }

                        /**
                         * Converts this DanmakuFlagConfig to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any }
                    }

                    /** Properties of a DanmuDefaultPlayerConfig. */
                    interface IDanmuDefaultPlayerConfig {
                        /** DanmuDefaultPlayerConfig playerDanmakuUseDefaultConfig */
                        playerDanmakuUseDefaultConfig?: boolean | null

                        /** DanmuDefaultPlayerConfig playerDanmakuAiRecommendedSwitch */
                        playerDanmakuAiRecommendedSwitch?: boolean | null

                        /** DanmuDefaultPlayerConfig playerDanmakuAiRecommendedLevel */
                        playerDanmakuAiRecommendedLevel?: number | null

                        /** DanmuDefaultPlayerConfig playerDanmakuBlocktop */
                        playerDanmakuBlocktop?: boolean | null

                        /** DanmuDefaultPlayerConfig playerDanmakuBlockscroll */
                        playerDanmakuBlockscroll?: boolean | null

                        /** DanmuDefaultPlayerConfig playerDanmakuBlockbottom */
                        playerDanmakuBlockbottom?: boolean | null

                        /** DanmuDefaultPlayerConfig playerDanmakuBlockcolorful */
                        playerDanmakuBlockcolorful?: boolean | null

                        /** DanmuDefaultPlayerConfig playerDanmakuBlockrepeat */
                        playerDanmakuBlockrepeat?: boolean | null

                        /** DanmuDefaultPlayerConfig playerDanmakuBlockspecial */
                        playerDanmakuBlockspecial?: boolean | null

                        /** DanmuDefaultPlayerConfig playerDanmakuOpacity */
                        playerDanmakuOpacity?: number | null

                        /** DanmuDefaultPlayerConfig playerDanmakuScalingfactor */
                        playerDanmakuScalingfactor?: number | null

                        /** DanmuDefaultPlayerConfig playerDanmakuDomain */
                        playerDanmakuDomain?: number | null

                        /** DanmuDefaultPlayerConfig playerDanmakuSpeed */
                        playerDanmakuSpeed?: number | null

                        /** DanmuDefaultPlayerConfig inlinePlayerDanmakuSwitch */
                        inlinePlayerDanmakuSwitch?: boolean | null
                    }

                    /** Represents a DanmuDefaultPlayerConfig. */
                    class DanmuDefaultPlayerConfig implements IDanmuDefaultPlayerConfig {
                        /**
                         * Constructs a new DanmuDefaultPlayerConfig.
                         * @param [properties] Properties to set
                         */
                        constructor(
                            properties?: bilibili.community.service.dm.v1.IDanmuDefaultPlayerConfig
                        )

                        /** DanmuDefaultPlayerConfig playerDanmakuUseDefaultConfig. */
                        public playerDanmakuUseDefaultConfig: boolean

                        /** DanmuDefaultPlayerConfig playerDanmakuAiRecommendedSwitch. */
                        public playerDanmakuAiRecommendedSwitch: boolean

                        /** DanmuDefaultPlayerConfig playerDanmakuAiRecommendedLevel. */
                        public playerDanmakuAiRecommendedLevel: number

                        /** DanmuDefaultPlayerConfig playerDanmakuBlocktop. */
                        public playerDanmakuBlocktop: boolean

                        /** DanmuDefaultPlayerConfig playerDanmakuBlockscroll. */
                        public playerDanmakuBlockscroll: boolean

                        /** DanmuDefaultPlayerConfig playerDanmakuBlockbottom. */
                        public playerDanmakuBlockbottom: boolean

                        /** DanmuDefaultPlayerConfig playerDanmakuBlockcolorful. */
                        public playerDanmakuBlockcolorful: boolean

                        /** DanmuDefaultPlayerConfig playerDanmakuBlockrepeat. */
                        public playerDanmakuBlockrepeat: boolean

                        /** DanmuDefaultPlayerConfig playerDanmakuBlockspecial. */
                        public playerDanmakuBlockspecial: boolean

                        /** DanmuDefaultPlayerConfig playerDanmakuOpacity. */
                        public playerDanmakuOpacity: number

                        /** DanmuDefaultPlayerConfig playerDanmakuScalingfactor. */
                        public playerDanmakuScalingfactor: number

                        /** DanmuDefaultPlayerConfig playerDanmakuDomain. */
                        public playerDanmakuDomain: number

                        /** DanmuDefaultPlayerConfig playerDanmakuSpeed. */
                        public playerDanmakuSpeed: number

                        /** DanmuDefaultPlayerConfig inlinePlayerDanmakuSwitch. */
                        public inlinePlayerDanmakuSwitch: boolean

                        /**
                         * Creates a new DanmuDefaultPlayerConfig instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns DanmuDefaultPlayerConfig instance
                         */
                        public static create(
                            properties?: bilibili.community.service.dm.v1.IDanmuDefaultPlayerConfig
                        ): bilibili.community.service.dm.v1.DanmuDefaultPlayerConfig

                        /**
                         * Encodes the specified DanmuDefaultPlayerConfig message. Does not implicitly {@link bilibili.community.service.dm.v1.DanmuDefaultPlayerConfig.verify|verify} messages.
                         * @param message DanmuDefaultPlayerConfig message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(
                            message: bilibili.community.service.dm.v1.IDanmuDefaultPlayerConfig,
                            writer?: $protobuf.Writer
                        ): $protobuf.Writer

                        /**
                         * Encodes the specified DanmuDefaultPlayerConfig message, length delimited. Does not implicitly {@link bilibili.community.service.dm.v1.DanmuDefaultPlayerConfig.verify|verify} messages.
                         * @param message DanmuDefaultPlayerConfig message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(
                            message: bilibili.community.service.dm.v1.IDanmuDefaultPlayerConfig,
                            writer?: $protobuf.Writer
                        ): $protobuf.Writer

                        /**
                         * Decodes a DanmuDefaultPlayerConfig message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns DanmuDefaultPlayerConfig
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(
                            reader: $protobuf.Reader | Uint8Array,
                            length?: number
                        ): bilibili.community.service.dm.v1.DanmuDefaultPlayerConfig

                        /**
                         * Decodes a DanmuDefaultPlayerConfig message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns DanmuDefaultPlayerConfig
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(
                            reader: $protobuf.Reader | Uint8Array
                        ): bilibili.community.service.dm.v1.DanmuDefaultPlayerConfig

                        /**
                         * Verifies a DanmuDefaultPlayerConfig message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): string | null

                        /**
                         * Creates a DanmuDefaultPlayerConfig message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns DanmuDefaultPlayerConfig
                         */
                        public static fromObject(object: {
                            [k: string]: any
                        }): bilibili.community.service.dm.v1.DanmuDefaultPlayerConfig

                        /**
                         * Creates a plain object from a DanmuDefaultPlayerConfig message. Also converts values to other types if specified.
                         * @param message DanmuDefaultPlayerConfig
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(
                            message: bilibili.community.service.dm.v1.DanmuDefaultPlayerConfig,
                            options?: $protobuf.IConversionOptions
                        ): { [k: string]: any }

                        /**
                         * Converts this DanmuDefaultPlayerConfig to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any }
                    }

                    /** Properties of a DanmuPlayerConfig. */
                    interface IDanmuPlayerConfig {
                        /** DanmuPlayerConfig playerDanmakuSwitch */
                        playerDanmakuSwitch?: boolean | null

                        /** DanmuPlayerConfig playerDanmakuSwitchSave */
                        playerDanmakuSwitchSave?: boolean | null

                        /** DanmuPlayerConfig playerDanmakuUseDefaultConfig */
                        playerDanmakuUseDefaultConfig?: boolean | null

                        /** DanmuPlayerConfig playerDanmakuAiRecommendedSwitch */
                        playerDanmakuAiRecommendedSwitch?: boolean | null

                        /** DanmuPlayerConfig playerDanmakuAiRecommendedLevel */
                        playerDanmakuAiRecommendedLevel?: number | null

                        /** DanmuPlayerConfig playerDanmakuBlocktop */
                        playerDanmakuBlocktop?: boolean | null

                        /** DanmuPlayerConfig playerDanmakuBlockscroll */
                        playerDanmakuBlockscroll?: boolean | null

                        /** DanmuPlayerConfig playerDanmakuBlockbottom */
                        playerDanmakuBlockbottom?: boolean | null

                        /** DanmuPlayerConfig playerDanmakuBlockcolorful */
                        playerDanmakuBlockcolorful?: boolean | null

                        /** DanmuPlayerConfig playerDanmakuBlockrepeat */
                        playerDanmakuBlockrepeat?: boolean | null

                        /** DanmuPlayerConfig playerDanmakuBlockspecial */
                        playerDanmakuBlockspecial?: boolean | null

                        /** DanmuPlayerConfig playerDanmakuOpacity */
                        playerDanmakuOpacity?: number | null

                        /** DanmuPlayerConfig playerDanmakuScalingfactor */
                        playerDanmakuScalingfactor?: number | null

                        /** DanmuPlayerConfig playerDanmakuDomain */
                        playerDanmakuDomain?: number | null

                        /** DanmuPlayerConfig playerDanmakuSpeed */
                        playerDanmakuSpeed?: number | null

                        /** DanmuPlayerConfig playerDanmakuEnableblocklist */
                        playerDanmakuEnableblocklist?: boolean | null

                        /** DanmuPlayerConfig inlinePlayerDanmakuSwitch */
                        inlinePlayerDanmakuSwitch?: boolean | null

                        /** DanmuPlayerConfig inlinePlayerDanmakuConfig */
                        inlinePlayerDanmakuConfig?: number | null
                    }

                    /** Represents a DanmuPlayerConfig. */
                    class DanmuPlayerConfig implements IDanmuPlayerConfig {
                        /**
                         * Constructs a new DanmuPlayerConfig.
                         * @param [properties] Properties to set
                         */
                        constructor(
                            properties?: bilibili.community.service.dm.v1.IDanmuPlayerConfig
                        )

                        /** DanmuPlayerConfig playerDanmakuSwitch. */
                        public playerDanmakuSwitch: boolean

                        /** DanmuPlayerConfig playerDanmakuSwitchSave. */
                        public playerDanmakuSwitchSave: boolean

                        /** DanmuPlayerConfig playerDanmakuUseDefaultConfig. */
                        public playerDanmakuUseDefaultConfig: boolean

                        /** DanmuPlayerConfig playerDanmakuAiRecommendedSwitch. */
                        public playerDanmakuAiRecommendedSwitch: boolean

                        /** DanmuPlayerConfig playerDanmakuAiRecommendedLevel. */
                        public playerDanmakuAiRecommendedLevel: number

                        /** DanmuPlayerConfig playerDanmakuBlocktop. */
                        public playerDanmakuBlocktop: boolean

                        /** DanmuPlayerConfig playerDanmakuBlockscroll. */
                        public playerDanmakuBlockscroll: boolean

                        /** DanmuPlayerConfig playerDanmakuBlockbottom. */
                        public playerDanmakuBlockbottom: boolean

                        /** DanmuPlayerConfig playerDanmakuBlockcolorful. */
                        public playerDanmakuBlockcolorful: boolean

                        /** DanmuPlayerConfig playerDanmakuBlockrepeat. */
                        public playerDanmakuBlockrepeat: boolean

                        /** DanmuPlayerConfig playerDanmakuBlockspecial. */
                        public playerDanmakuBlockspecial: boolean

                        /** DanmuPlayerConfig playerDanmakuOpacity. */
                        public playerDanmakuOpacity: number

                        /** DanmuPlayerConfig playerDanmakuScalingfactor. */
                        public playerDanmakuScalingfactor: number

                        /** DanmuPlayerConfig playerDanmakuDomain. */
                        public playerDanmakuDomain: number

                        /** DanmuPlayerConfig playerDanmakuSpeed. */
                        public playerDanmakuSpeed: number

                        /** DanmuPlayerConfig playerDanmakuEnableblocklist. */
                        public playerDanmakuEnableblocklist: boolean

                        /** DanmuPlayerConfig inlinePlayerDanmakuSwitch. */
                        public inlinePlayerDanmakuSwitch: boolean

                        /** DanmuPlayerConfig inlinePlayerDanmakuConfig. */
                        public inlinePlayerDanmakuConfig: number

                        /**
                         * Creates a new DanmuPlayerConfig instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns DanmuPlayerConfig instance
                         */
                        public static create(
                            properties?: bilibili.community.service.dm.v1.IDanmuPlayerConfig
                        ): bilibili.community.service.dm.v1.DanmuPlayerConfig

                        /**
                         * Encodes the specified DanmuPlayerConfig message. Does not implicitly {@link bilibili.community.service.dm.v1.DanmuPlayerConfig.verify|verify} messages.
                         * @param message DanmuPlayerConfig message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(
                            message: bilibili.community.service.dm.v1.IDanmuPlayerConfig,
                            writer?: $protobuf.Writer
                        ): $protobuf.Writer

                        /**
                         * Encodes the specified DanmuPlayerConfig message, length delimited. Does not implicitly {@link bilibili.community.service.dm.v1.DanmuPlayerConfig.verify|verify} messages.
                         * @param message DanmuPlayerConfig message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(
                            message: bilibili.community.service.dm.v1.IDanmuPlayerConfig,
                            writer?: $protobuf.Writer
                        ): $protobuf.Writer

                        /**
                         * Decodes a DanmuPlayerConfig message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns DanmuPlayerConfig
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(
                            reader: $protobuf.Reader | Uint8Array,
                            length?: number
                        ): bilibili.community.service.dm.v1.DanmuPlayerConfig

                        /**
                         * Decodes a DanmuPlayerConfig message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns DanmuPlayerConfig
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(
                            reader: $protobuf.Reader | Uint8Array
                        ): bilibili.community.service.dm.v1.DanmuPlayerConfig

                        /**
                         * Verifies a DanmuPlayerConfig message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): string | null

                        /**
                         * Creates a DanmuPlayerConfig message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns DanmuPlayerConfig
                         */
                        public static fromObject(object: {
                            [k: string]: any
                        }): bilibili.community.service.dm.v1.DanmuPlayerConfig

                        /**
                         * Creates a plain object from a DanmuPlayerConfig message. Also converts values to other types if specified.
                         * @param message DanmuPlayerConfig
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(
                            message: bilibili.community.service.dm.v1.DanmuPlayerConfig,
                            options?: $protobuf.IConversionOptions
                        ): { [k: string]: any }

                        /**
                         * Converts this DanmuPlayerConfig to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any }
                    }

                    /** Properties of a DanmuPlayerDynamicConfig. */
                    interface IDanmuPlayerDynamicConfig {
                        /** DanmuPlayerDynamicConfig progress */
                        progress?: number | null

                        /** DanmuPlayerDynamicConfig playerDanmakuDomain */
                        playerDanmakuDomain?: number | null
                    }

                    /** Represents a DanmuPlayerDynamicConfig. */
                    class DanmuPlayerDynamicConfig implements IDanmuPlayerDynamicConfig {
                        /**
                         * Constructs a new DanmuPlayerDynamicConfig.
                         * @param [properties] Properties to set
                         */
                        constructor(
                            properties?: bilibili.community.service.dm.v1.IDanmuPlayerDynamicConfig
                        )

                        /** DanmuPlayerDynamicConfig progress. */
                        public progress: number

                        /** DanmuPlayerDynamicConfig playerDanmakuDomain. */
                        public playerDanmakuDomain: number

                        /**
                         * Creates a new DanmuPlayerDynamicConfig instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns DanmuPlayerDynamicConfig instance
                         */
                        public static create(
                            properties?: bilibili.community.service.dm.v1.IDanmuPlayerDynamicConfig
                        ): bilibili.community.service.dm.v1.DanmuPlayerDynamicConfig

                        /**
                         * Encodes the specified DanmuPlayerDynamicConfig message. Does not implicitly {@link bilibili.community.service.dm.v1.DanmuPlayerDynamicConfig.verify|verify} messages.
                         * @param message DanmuPlayerDynamicConfig message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(
                            message: bilibili.community.service.dm.v1.IDanmuPlayerDynamicConfig,
                            writer?: $protobuf.Writer
                        ): $protobuf.Writer

                        /**
                         * Encodes the specified DanmuPlayerDynamicConfig message, length delimited. Does not implicitly {@link bilibili.community.service.dm.v1.DanmuPlayerDynamicConfig.verify|verify} messages.
                         * @param message DanmuPlayerDynamicConfig message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(
                            message: bilibili.community.service.dm.v1.IDanmuPlayerDynamicConfig,
                            writer?: $protobuf.Writer
                        ): $protobuf.Writer

                        /**
                         * Decodes a DanmuPlayerDynamicConfig message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns DanmuPlayerDynamicConfig
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(
                            reader: $protobuf.Reader | Uint8Array,
                            length?: number
                        ): bilibili.community.service.dm.v1.DanmuPlayerDynamicConfig

                        /**
                         * Decodes a DanmuPlayerDynamicConfig message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns DanmuPlayerDynamicConfig
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(
                            reader: $protobuf.Reader | Uint8Array
                        ): bilibili.community.service.dm.v1.DanmuPlayerDynamicConfig

                        /**
                         * Verifies a DanmuPlayerDynamicConfig message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): string | null

                        /**
                         * Creates a DanmuPlayerDynamicConfig message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns DanmuPlayerDynamicConfig
                         */
                        public static fromObject(object: {
                            [k: string]: any
                        }): bilibili.community.service.dm.v1.DanmuPlayerDynamicConfig

                        /**
                         * Creates a plain object from a DanmuPlayerDynamicConfig message. Also converts values to other types if specified.
                         * @param message DanmuPlayerDynamicConfig
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(
                            message: bilibili.community.service.dm.v1.DanmuPlayerDynamicConfig,
                            options?: $protobuf.IConversionOptions
                        ): { [k: string]: any }

                        /**
                         * Converts this DanmuPlayerDynamicConfig to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any }
                    }

                    /** Properties of a DanmuPlayerViewConfig. */
                    interface IDanmuPlayerViewConfig {
                        /** DanmuPlayerViewConfig danmukuDefaultPlayerConfig */
                        danmukuDefaultPlayerConfig?: bilibili.community.service.dm.v1.IDanmuDefaultPlayerConfig | null

                        /** DanmuPlayerViewConfig danmukuPlayerConfig */
                        danmukuPlayerConfig?: bilibili.community.service.dm.v1.IDanmuPlayerConfig | null

                        /** DanmuPlayerViewConfig danmukuPlayerDynamicConfig */
                        danmukuPlayerDynamicConfig?:
                            | bilibili.community.service.dm.v1.IDanmuPlayerDynamicConfig[]
                            | null
                    }

                    /** Represents a DanmuPlayerViewConfig. */
                    class DanmuPlayerViewConfig implements IDanmuPlayerViewConfig {
                        /**
                         * Constructs a new DanmuPlayerViewConfig.
                         * @param [properties] Properties to set
                         */
                        constructor(
                            properties?: bilibili.community.service.dm.v1.IDanmuPlayerViewConfig
                        )

                        /** DanmuPlayerViewConfig danmukuDefaultPlayerConfig. */
                        public danmukuDefaultPlayerConfig?: bilibili.community.service.dm.v1.IDanmuDefaultPlayerConfig | null

                        /** DanmuPlayerViewConfig danmukuPlayerConfig. */
                        public danmukuPlayerConfig?: bilibili.community.service.dm.v1.IDanmuPlayerConfig | null

                        /** DanmuPlayerViewConfig danmukuPlayerDynamicConfig. */
                        public danmukuPlayerDynamicConfig: bilibili.community.service.dm.v1.IDanmuPlayerDynamicConfig[]

                        /**
                         * Creates a new DanmuPlayerViewConfig instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns DanmuPlayerViewConfig instance
                         */
                        public static create(
                            properties?: bilibili.community.service.dm.v1.IDanmuPlayerViewConfig
                        ): bilibili.community.service.dm.v1.DanmuPlayerViewConfig

                        /**
                         * Encodes the specified DanmuPlayerViewConfig message. Does not implicitly {@link bilibili.community.service.dm.v1.DanmuPlayerViewConfig.verify|verify} messages.
                         * @param message DanmuPlayerViewConfig message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(
                            message: bilibili.community.service.dm.v1.IDanmuPlayerViewConfig,
                            writer?: $protobuf.Writer
                        ): $protobuf.Writer

                        /**
                         * Encodes the specified DanmuPlayerViewConfig message, length delimited. Does not implicitly {@link bilibili.community.service.dm.v1.DanmuPlayerViewConfig.verify|verify} messages.
                         * @param message DanmuPlayerViewConfig message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(
                            message: bilibili.community.service.dm.v1.IDanmuPlayerViewConfig,
                            writer?: $protobuf.Writer
                        ): $protobuf.Writer

                        /**
                         * Decodes a DanmuPlayerViewConfig message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns DanmuPlayerViewConfig
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(
                            reader: $protobuf.Reader | Uint8Array,
                            length?: number
                        ): bilibili.community.service.dm.v1.DanmuPlayerViewConfig

                        /**
                         * Decodes a DanmuPlayerViewConfig message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns DanmuPlayerViewConfig
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(
                            reader: $protobuf.Reader | Uint8Array
                        ): bilibili.community.service.dm.v1.DanmuPlayerViewConfig

                        /**
                         * Verifies a DanmuPlayerViewConfig message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): string | null

                        /**
                         * Creates a DanmuPlayerViewConfig message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns DanmuPlayerViewConfig
                         */
                        public static fromObject(object: {
                            [k: string]: any
                        }): bilibili.community.service.dm.v1.DanmuPlayerViewConfig

                        /**
                         * Creates a plain object from a DanmuPlayerViewConfig message. Also converts values to other types if specified.
                         * @param message DanmuPlayerViewConfig
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(
                            message: bilibili.community.service.dm.v1.DanmuPlayerViewConfig,
                            options?: $protobuf.IConversionOptions
                        ): { [k: string]: any }

                        /**
                         * Converts this DanmuPlayerViewConfig to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any }
                    }

                    /** Properties of an InlinePlayerDanmakuSwitch. */
                    interface IInlinePlayerDanmakuSwitch {
                        /** InlinePlayerDanmakuSwitch value */
                        value?: boolean | null
                    }

                    /** Represents an InlinePlayerDanmakuSwitch. */
                    class InlinePlayerDanmakuSwitch implements IInlinePlayerDanmakuSwitch {
                        /**
                         * Constructs a new InlinePlayerDanmakuSwitch.
                         * @param [properties] Properties to set
                         */
                        constructor(
                            properties?: bilibili.community.service.dm.v1.IInlinePlayerDanmakuSwitch
                        )

                        /** InlinePlayerDanmakuSwitch value. */
                        public value: boolean

                        /**
                         * Creates a new InlinePlayerDanmakuSwitch instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns InlinePlayerDanmakuSwitch instance
                         */
                        public static create(
                            properties?: bilibili.community.service.dm.v1.IInlinePlayerDanmakuSwitch
                        ): bilibili.community.service.dm.v1.InlinePlayerDanmakuSwitch

                        /**
                         * Encodes the specified InlinePlayerDanmakuSwitch message. Does not implicitly {@link bilibili.community.service.dm.v1.InlinePlayerDanmakuSwitch.verify|verify} messages.
                         * @param message InlinePlayerDanmakuSwitch message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(
                            message: bilibili.community.service.dm.v1.IInlinePlayerDanmakuSwitch,
                            writer?: $protobuf.Writer
                        ): $protobuf.Writer

                        /**
                         * Encodes the specified InlinePlayerDanmakuSwitch message, length delimited. Does not implicitly {@link bilibili.community.service.dm.v1.InlinePlayerDanmakuSwitch.verify|verify} messages.
                         * @param message InlinePlayerDanmakuSwitch message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(
                            message: bilibili.community.service.dm.v1.IInlinePlayerDanmakuSwitch,
                            writer?: $protobuf.Writer
                        ): $protobuf.Writer

                        /**
                         * Decodes an InlinePlayerDanmakuSwitch message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns InlinePlayerDanmakuSwitch
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(
                            reader: $protobuf.Reader | Uint8Array,
                            length?: number
                        ): bilibili.community.service.dm.v1.InlinePlayerDanmakuSwitch

                        /**
                         * Decodes an InlinePlayerDanmakuSwitch message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns InlinePlayerDanmakuSwitch
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(
                            reader: $protobuf.Reader | Uint8Array
                        ): bilibili.community.service.dm.v1.InlinePlayerDanmakuSwitch

                        /**
                         * Verifies an InlinePlayerDanmakuSwitch message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): string | null

                        /**
                         * Creates an InlinePlayerDanmakuSwitch message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns InlinePlayerDanmakuSwitch
                         */
                        public static fromObject(object: {
                            [k: string]: any
                        }): bilibili.community.service.dm.v1.InlinePlayerDanmakuSwitch

                        /**
                         * Creates a plain object from an InlinePlayerDanmakuSwitch message. Also converts values to other types if specified.
                         * @param message InlinePlayerDanmakuSwitch
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(
                            message: bilibili.community.service.dm.v1.InlinePlayerDanmakuSwitch,
                            options?: $protobuf.IConversionOptions
                        ): { [k: string]: any }

                        /**
                         * Converts this InlinePlayerDanmakuSwitch to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any }
                    }

                    /** Properties of a PlayerDanmakuAiRecommendedLevel. */
                    interface IPlayerDanmakuAiRecommendedLevel {
                        /** PlayerDanmakuAiRecommendedLevel value */
                        value?: boolean | null
                    }

                    /** Represents a PlayerDanmakuAiRecommendedLevel. */
                    class PlayerDanmakuAiRecommendedLevel
                        implements IPlayerDanmakuAiRecommendedLevel {
                        /**
                         * Constructs a new PlayerDanmakuAiRecommendedLevel.
                         * @param [properties] Properties to set
                         */
                        constructor(
                            properties?: bilibili.community.service.dm.v1.IPlayerDanmakuAiRecommendedLevel
                        )

                        /** PlayerDanmakuAiRecommendedLevel value. */
                        public value: boolean

                        /**
                         * Creates a new PlayerDanmakuAiRecommendedLevel instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns PlayerDanmakuAiRecommendedLevel instance
                         */
                        public static create(
                            properties?: bilibili.community.service.dm.v1.IPlayerDanmakuAiRecommendedLevel
                        ): bilibili.community.service.dm.v1.PlayerDanmakuAiRecommendedLevel

                        /**
                         * Encodes the specified PlayerDanmakuAiRecommendedLevel message. Does not implicitly {@link bilibili.community.service.dm.v1.PlayerDanmakuAiRecommendedLevel.verify|verify} messages.
                         * @param message PlayerDanmakuAiRecommendedLevel message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(
                            message: bilibili.community.service.dm.v1.IPlayerDanmakuAiRecommendedLevel,
                            writer?: $protobuf.Writer
                        ): $protobuf.Writer

                        /**
                         * Encodes the specified PlayerDanmakuAiRecommendedLevel message, length delimited. Does not implicitly {@link bilibili.community.service.dm.v1.PlayerDanmakuAiRecommendedLevel.verify|verify} messages.
                         * @param message PlayerDanmakuAiRecommendedLevel message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(
                            message: bilibili.community.service.dm.v1.IPlayerDanmakuAiRecommendedLevel,
                            writer?: $protobuf.Writer
                        ): $protobuf.Writer

                        /**
                         * Decodes a PlayerDanmakuAiRecommendedLevel message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns PlayerDanmakuAiRecommendedLevel
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(
                            reader: $protobuf.Reader | Uint8Array,
                            length?: number
                        ): bilibili.community.service.dm.v1.PlayerDanmakuAiRecommendedLevel

                        /**
                         * Decodes a PlayerDanmakuAiRecommendedLevel message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns PlayerDanmakuAiRecommendedLevel
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(
                            reader: $protobuf.Reader | Uint8Array
                        ): bilibili.community.service.dm.v1.PlayerDanmakuAiRecommendedLevel

                        /**
                         * Verifies a PlayerDanmakuAiRecommendedLevel message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): string | null

                        /**
                         * Creates a PlayerDanmakuAiRecommendedLevel message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns PlayerDanmakuAiRecommendedLevel
                         */
                        public static fromObject(object: {
                            [k: string]: any
                        }): bilibili.community.service.dm.v1.PlayerDanmakuAiRecommendedLevel

                        /**
                         * Creates a plain object from a PlayerDanmakuAiRecommendedLevel message. Also converts values to other types if specified.
                         * @param message PlayerDanmakuAiRecommendedLevel
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(
                            message: bilibili.community.service.dm.v1.PlayerDanmakuAiRecommendedLevel,
                            options?: $protobuf.IConversionOptions
                        ): { [k: string]: any }

                        /**
                         * Converts this PlayerDanmakuAiRecommendedLevel to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any }
                    }

                    /** Properties of a PlayerDanmakuAiRecommendedSwitch. */
                    interface IPlayerDanmakuAiRecommendedSwitch {
                        /** PlayerDanmakuAiRecommendedSwitch value */
                        value?: boolean | null
                    }

                    /** Represents a PlayerDanmakuAiRecommendedSwitch. */
                    class PlayerDanmakuAiRecommendedSwitch
                        implements IPlayerDanmakuAiRecommendedSwitch {
                        /**
                         * Constructs a new PlayerDanmakuAiRecommendedSwitch.
                         * @param [properties] Properties to set
                         */
                        constructor(
                            properties?: bilibili.community.service.dm.v1.IPlayerDanmakuAiRecommendedSwitch
                        )

                        /** PlayerDanmakuAiRecommendedSwitch value. */
                        public value: boolean

                        /**
                         * Creates a new PlayerDanmakuAiRecommendedSwitch instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns PlayerDanmakuAiRecommendedSwitch instance
                         */
                        public static create(
                            properties?: bilibili.community.service.dm.v1.IPlayerDanmakuAiRecommendedSwitch
                        ): bilibili.community.service.dm.v1.PlayerDanmakuAiRecommendedSwitch

                        /**
                         * Encodes the specified PlayerDanmakuAiRecommendedSwitch message. Does not implicitly {@link bilibili.community.service.dm.v1.PlayerDanmakuAiRecommendedSwitch.verify|verify} messages.
                         * @param message PlayerDanmakuAiRecommendedSwitch message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(
                            message: bilibili.community.service.dm.v1.IPlayerDanmakuAiRecommendedSwitch,
                            writer?: $protobuf.Writer
                        ): $protobuf.Writer

                        /**
                         * Encodes the specified PlayerDanmakuAiRecommendedSwitch message, length delimited. Does not implicitly {@link bilibili.community.service.dm.v1.PlayerDanmakuAiRecommendedSwitch.verify|verify} messages.
                         * @param message PlayerDanmakuAiRecommendedSwitch message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(
                            message: bilibili.community.service.dm.v1.IPlayerDanmakuAiRecommendedSwitch,
                            writer?: $protobuf.Writer
                        ): $protobuf.Writer

                        /**
                         * Decodes a PlayerDanmakuAiRecommendedSwitch message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns PlayerDanmakuAiRecommendedSwitch
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(
                            reader: $protobuf.Reader | Uint8Array,
                            length?: number
                        ): bilibili.community.service.dm.v1.PlayerDanmakuAiRecommendedSwitch

                        /**
                         * Decodes a PlayerDanmakuAiRecommendedSwitch message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns PlayerDanmakuAiRecommendedSwitch
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(
                            reader: $protobuf.Reader | Uint8Array
                        ): bilibili.community.service.dm.v1.PlayerDanmakuAiRecommendedSwitch

                        /**
                         * Verifies a PlayerDanmakuAiRecommendedSwitch message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): string | null

                        /**
                         * Creates a PlayerDanmakuAiRecommendedSwitch message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns PlayerDanmakuAiRecommendedSwitch
                         */
                        public static fromObject(object: {
                            [k: string]: any
                        }): bilibili.community.service.dm.v1.PlayerDanmakuAiRecommendedSwitch

                        /**
                         * Creates a plain object from a PlayerDanmakuAiRecommendedSwitch message. Also converts values to other types if specified.
                         * @param message PlayerDanmakuAiRecommendedSwitch
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(
                            message: bilibili.community.service.dm.v1.PlayerDanmakuAiRecommendedSwitch,
                            options?: $protobuf.IConversionOptions
                        ): { [k: string]: any }

                        /**
                         * Converts this PlayerDanmakuAiRecommendedSwitch to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any }
                    }

                    /** Properties of a PlayerDanmakuBlockbottom. */
                    interface IPlayerDanmakuBlockbottom {
                        /** PlayerDanmakuBlockbottom value */
                        value?: boolean | null
                    }

                    /** Represents a PlayerDanmakuBlockbottom. */
                    class PlayerDanmakuBlockbottom implements IPlayerDanmakuBlockbottom {
                        /**
                         * Constructs a new PlayerDanmakuBlockbottom.
                         * @param [properties] Properties to set
                         */
                        constructor(
                            properties?: bilibili.community.service.dm.v1.IPlayerDanmakuBlockbottom
                        )

                        /** PlayerDanmakuBlockbottom value. */
                        public value: boolean

                        /**
                         * Creates a new PlayerDanmakuBlockbottom instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns PlayerDanmakuBlockbottom instance
                         */
                        public static create(
                            properties?: bilibili.community.service.dm.v1.IPlayerDanmakuBlockbottom
                        ): bilibili.community.service.dm.v1.PlayerDanmakuBlockbottom

                        /**
                         * Encodes the specified PlayerDanmakuBlockbottom message. Does not implicitly {@link bilibili.community.service.dm.v1.PlayerDanmakuBlockbottom.verify|verify} messages.
                         * @param message PlayerDanmakuBlockbottom message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(
                            message: bilibili.community.service.dm.v1.IPlayerDanmakuBlockbottom,
                            writer?: $protobuf.Writer
                        ): $protobuf.Writer

                        /**
                         * Encodes the specified PlayerDanmakuBlockbottom message, length delimited. Does not implicitly {@link bilibili.community.service.dm.v1.PlayerDanmakuBlockbottom.verify|verify} messages.
                         * @param message PlayerDanmakuBlockbottom message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(
                            message: bilibili.community.service.dm.v1.IPlayerDanmakuBlockbottom,
                            writer?: $protobuf.Writer
                        ): $protobuf.Writer

                        /**
                         * Decodes a PlayerDanmakuBlockbottom message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns PlayerDanmakuBlockbottom
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(
                            reader: $protobuf.Reader | Uint8Array,
                            length?: number
                        ): bilibili.community.service.dm.v1.PlayerDanmakuBlockbottom

                        /**
                         * Decodes a PlayerDanmakuBlockbottom message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns PlayerDanmakuBlockbottom
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(
                            reader: $protobuf.Reader | Uint8Array
                        ): bilibili.community.service.dm.v1.PlayerDanmakuBlockbottom

                        /**
                         * Verifies a PlayerDanmakuBlockbottom message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): string | null

                        /**
                         * Creates a PlayerDanmakuBlockbottom message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns PlayerDanmakuBlockbottom
                         */
                        public static fromObject(object: {
                            [k: string]: any
                        }): bilibili.community.service.dm.v1.PlayerDanmakuBlockbottom

                        /**
                         * Creates a plain object from a PlayerDanmakuBlockbottom message. Also converts values to other types if specified.
                         * @param message PlayerDanmakuBlockbottom
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(
                            message: bilibili.community.service.dm.v1.PlayerDanmakuBlockbottom,
                            options?: $protobuf.IConversionOptions
                        ): { [k: string]: any }

                        /**
                         * Converts this PlayerDanmakuBlockbottom to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any }
                    }

                    /** Properties of a PlayerDanmakuBlockcolorful. */
                    interface IPlayerDanmakuBlockcolorful {
                        /** PlayerDanmakuBlockcolorful value */
                        value?: boolean | null
                    }

                    /** Represents a PlayerDanmakuBlockcolorful. */
                    class PlayerDanmakuBlockcolorful implements IPlayerDanmakuBlockcolorful {
                        /**
                         * Constructs a new PlayerDanmakuBlockcolorful.
                         * @param [properties] Properties to set
                         */
                        constructor(
                            properties?: bilibili.community.service.dm.v1.IPlayerDanmakuBlockcolorful
                        )

                        /** PlayerDanmakuBlockcolorful value. */
                        public value: boolean

                        /**
                         * Creates a new PlayerDanmakuBlockcolorful instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns PlayerDanmakuBlockcolorful instance
                         */
                        public static create(
                            properties?: bilibili.community.service.dm.v1.IPlayerDanmakuBlockcolorful
                        ): bilibili.community.service.dm.v1.PlayerDanmakuBlockcolorful

                        /**
                         * Encodes the specified PlayerDanmakuBlockcolorful message. Does not implicitly {@link bilibili.community.service.dm.v1.PlayerDanmakuBlockcolorful.verify|verify} messages.
                         * @param message PlayerDanmakuBlockcolorful message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(
                            message: bilibili.community.service.dm.v1.IPlayerDanmakuBlockcolorful,
                            writer?: $protobuf.Writer
                        ): $protobuf.Writer

                        /**
                         * Encodes the specified PlayerDanmakuBlockcolorful message, length delimited. Does not implicitly {@link bilibili.community.service.dm.v1.PlayerDanmakuBlockcolorful.verify|verify} messages.
                         * @param message PlayerDanmakuBlockcolorful message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(
                            message: bilibili.community.service.dm.v1.IPlayerDanmakuBlockcolorful,
                            writer?: $protobuf.Writer
                        ): $protobuf.Writer

                        /**
                         * Decodes a PlayerDanmakuBlockcolorful message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns PlayerDanmakuBlockcolorful
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(
                            reader: $protobuf.Reader | Uint8Array,
                            length?: number
                        ): bilibili.community.service.dm.v1.PlayerDanmakuBlockcolorful

                        /**
                         * Decodes a PlayerDanmakuBlockcolorful message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns PlayerDanmakuBlockcolorful
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(
                            reader: $protobuf.Reader | Uint8Array
                        ): bilibili.community.service.dm.v1.PlayerDanmakuBlockcolorful

                        /**
                         * Verifies a PlayerDanmakuBlockcolorful message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): string | null

                        /**
                         * Creates a PlayerDanmakuBlockcolorful message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns PlayerDanmakuBlockcolorful
                         */
                        public static fromObject(object: {
                            [k: string]: any
                        }): bilibili.community.service.dm.v1.PlayerDanmakuBlockcolorful

                        /**
                         * Creates a plain object from a PlayerDanmakuBlockcolorful message. Also converts values to other types if specified.
                         * @param message PlayerDanmakuBlockcolorful
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(
                            message: bilibili.community.service.dm.v1.PlayerDanmakuBlockcolorful,
                            options?: $protobuf.IConversionOptions
                        ): { [k: string]: any }

                        /**
                         * Converts this PlayerDanmakuBlockcolorful to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any }
                    }

                    /** Properties of a PlayerDanmakuBlockrepeat. */
                    interface IPlayerDanmakuBlockrepeat {
                        /** PlayerDanmakuBlockrepeat value */
                        value?: boolean | null
                    }

                    /** Represents a PlayerDanmakuBlockrepeat. */
                    class PlayerDanmakuBlockrepeat implements IPlayerDanmakuBlockrepeat {
                        /**
                         * Constructs a new PlayerDanmakuBlockrepeat.
                         * @param [properties] Properties to set
                         */
                        constructor(
                            properties?: bilibili.community.service.dm.v1.IPlayerDanmakuBlockrepeat
                        )

                        /** PlayerDanmakuBlockrepeat value. */
                        public value: boolean

                        /**
                         * Creates a new PlayerDanmakuBlockrepeat instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns PlayerDanmakuBlockrepeat instance
                         */
                        public static create(
                            properties?: bilibili.community.service.dm.v1.IPlayerDanmakuBlockrepeat
                        ): bilibili.community.service.dm.v1.PlayerDanmakuBlockrepeat

                        /**
                         * Encodes the specified PlayerDanmakuBlockrepeat message. Does not implicitly {@link bilibili.community.service.dm.v1.PlayerDanmakuBlockrepeat.verify|verify} messages.
                         * @param message PlayerDanmakuBlockrepeat message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(
                            message: bilibili.community.service.dm.v1.IPlayerDanmakuBlockrepeat,
                            writer?: $protobuf.Writer
                        ): $protobuf.Writer

                        /**
                         * Encodes the specified PlayerDanmakuBlockrepeat message, length delimited. Does not implicitly {@link bilibili.community.service.dm.v1.PlayerDanmakuBlockrepeat.verify|verify} messages.
                         * @param message PlayerDanmakuBlockrepeat message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(
                            message: bilibili.community.service.dm.v1.IPlayerDanmakuBlockrepeat,
                            writer?: $protobuf.Writer
                        ): $protobuf.Writer

                        /**
                         * Decodes a PlayerDanmakuBlockrepeat message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns PlayerDanmakuBlockrepeat
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(
                            reader: $protobuf.Reader | Uint8Array,
                            length?: number
                        ): bilibili.community.service.dm.v1.PlayerDanmakuBlockrepeat

                        /**
                         * Decodes a PlayerDanmakuBlockrepeat message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns PlayerDanmakuBlockrepeat
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(
                            reader: $protobuf.Reader | Uint8Array
                        ): bilibili.community.service.dm.v1.PlayerDanmakuBlockrepeat

                        /**
                         * Verifies a PlayerDanmakuBlockrepeat message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): string | null

                        /**
                         * Creates a PlayerDanmakuBlockrepeat message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns PlayerDanmakuBlockrepeat
                         */
                        public static fromObject(object: {
                            [k: string]: any
                        }): bilibili.community.service.dm.v1.PlayerDanmakuBlockrepeat

                        /**
                         * Creates a plain object from a PlayerDanmakuBlockrepeat message. Also converts values to other types if specified.
                         * @param message PlayerDanmakuBlockrepeat
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(
                            message: bilibili.community.service.dm.v1.PlayerDanmakuBlockrepeat,
                            options?: $protobuf.IConversionOptions
                        ): { [k: string]: any }

                        /**
                         * Converts this PlayerDanmakuBlockrepeat to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any }
                    }

                    /** Properties of a PlayerDanmakuBlockscroll. */
                    interface IPlayerDanmakuBlockscroll {
                        /** PlayerDanmakuBlockscroll value */
                        value?: boolean | null
                    }

                    /** Represents a PlayerDanmakuBlockscroll. */
                    class PlayerDanmakuBlockscroll implements IPlayerDanmakuBlockscroll {
                        /**
                         * Constructs a new PlayerDanmakuBlockscroll.
                         * @param [properties] Properties to set
                         */
                        constructor(
                            properties?: bilibili.community.service.dm.v1.IPlayerDanmakuBlockscroll
                        )

                        /** PlayerDanmakuBlockscroll value. */
                        public value: boolean

                        /**
                         * Creates a new PlayerDanmakuBlockscroll instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns PlayerDanmakuBlockscroll instance
                         */
                        public static create(
                            properties?: bilibili.community.service.dm.v1.IPlayerDanmakuBlockscroll
                        ): bilibili.community.service.dm.v1.PlayerDanmakuBlockscroll

                        /**
                         * Encodes the specified PlayerDanmakuBlockscroll message. Does not implicitly {@link bilibili.community.service.dm.v1.PlayerDanmakuBlockscroll.verify|verify} messages.
                         * @param message PlayerDanmakuBlockscroll message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(
                            message: bilibili.community.service.dm.v1.IPlayerDanmakuBlockscroll,
                            writer?: $protobuf.Writer
                        ): $protobuf.Writer

                        /**
                         * Encodes the specified PlayerDanmakuBlockscroll message, length delimited. Does not implicitly {@link bilibili.community.service.dm.v1.PlayerDanmakuBlockscroll.verify|verify} messages.
                         * @param message PlayerDanmakuBlockscroll message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(
                            message: bilibili.community.service.dm.v1.IPlayerDanmakuBlockscroll,
                            writer?: $protobuf.Writer
                        ): $protobuf.Writer

                        /**
                         * Decodes a PlayerDanmakuBlockscroll message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns PlayerDanmakuBlockscroll
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(
                            reader: $protobuf.Reader | Uint8Array,
                            length?: number
                        ): bilibili.community.service.dm.v1.PlayerDanmakuBlockscroll

                        /**
                         * Decodes a PlayerDanmakuBlockscroll message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns PlayerDanmakuBlockscroll
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(
                            reader: $protobuf.Reader | Uint8Array
                        ): bilibili.community.service.dm.v1.PlayerDanmakuBlockscroll

                        /**
                         * Verifies a PlayerDanmakuBlockscroll message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): string | null

                        /**
                         * Creates a PlayerDanmakuBlockscroll message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns PlayerDanmakuBlockscroll
                         */
                        public static fromObject(object: {
                            [k: string]: any
                        }): bilibili.community.service.dm.v1.PlayerDanmakuBlockscroll

                        /**
                         * Creates a plain object from a PlayerDanmakuBlockscroll message. Also converts values to other types if specified.
                         * @param message PlayerDanmakuBlockscroll
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(
                            message: bilibili.community.service.dm.v1.PlayerDanmakuBlockscroll,
                            options?: $protobuf.IConversionOptions
                        ): { [k: string]: any }

                        /**
                         * Converts this PlayerDanmakuBlockscroll to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any }
                    }

                    /** Properties of a PlayerDanmakuBlockspecial. */
                    interface IPlayerDanmakuBlockspecial {
                        /** PlayerDanmakuBlockspecial value */
                        value?: boolean | null
                    }

                    /** Represents a PlayerDanmakuBlockspecial. */
                    class PlayerDanmakuBlockspecial implements IPlayerDanmakuBlockspecial {
                        /**
                         * Constructs a new PlayerDanmakuBlockspecial.
                         * @param [properties] Properties to set
                         */
                        constructor(
                            properties?: bilibili.community.service.dm.v1.IPlayerDanmakuBlockspecial
                        )

                        /** PlayerDanmakuBlockspecial value. */
                        public value: boolean

                        /**
                         * Creates a new PlayerDanmakuBlockspecial instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns PlayerDanmakuBlockspecial instance
                         */
                        public static create(
                            properties?: bilibili.community.service.dm.v1.IPlayerDanmakuBlockspecial
                        ): bilibili.community.service.dm.v1.PlayerDanmakuBlockspecial

                        /**
                         * Encodes the specified PlayerDanmakuBlockspecial message. Does not implicitly {@link bilibili.community.service.dm.v1.PlayerDanmakuBlockspecial.verify|verify} messages.
                         * @param message PlayerDanmakuBlockspecial message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(
                            message: bilibili.community.service.dm.v1.IPlayerDanmakuBlockspecial,
                            writer?: $protobuf.Writer
                        ): $protobuf.Writer

                        /**
                         * Encodes the specified PlayerDanmakuBlockspecial message, length delimited. Does not implicitly {@link bilibili.community.service.dm.v1.PlayerDanmakuBlockspecial.verify|verify} messages.
                         * @param message PlayerDanmakuBlockspecial message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(
                            message: bilibili.community.service.dm.v1.IPlayerDanmakuBlockspecial,
                            writer?: $protobuf.Writer
                        ): $protobuf.Writer

                        /**
                         * Decodes a PlayerDanmakuBlockspecial message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns PlayerDanmakuBlockspecial
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(
                            reader: $protobuf.Reader | Uint8Array,
                            length?: number
                        ): bilibili.community.service.dm.v1.PlayerDanmakuBlockspecial

                        /**
                         * Decodes a PlayerDanmakuBlockspecial message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns PlayerDanmakuBlockspecial
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(
                            reader: $protobuf.Reader | Uint8Array
                        ): bilibili.community.service.dm.v1.PlayerDanmakuBlockspecial

                        /**
                         * Verifies a PlayerDanmakuBlockspecial message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): string | null

                        /**
                         * Creates a PlayerDanmakuBlockspecial message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns PlayerDanmakuBlockspecial
                         */
                        public static fromObject(object: {
                            [k: string]: any
                        }): bilibili.community.service.dm.v1.PlayerDanmakuBlockspecial

                        /**
                         * Creates a plain object from a PlayerDanmakuBlockspecial message. Also converts values to other types if specified.
                         * @param message PlayerDanmakuBlockspecial
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(
                            message: bilibili.community.service.dm.v1.PlayerDanmakuBlockspecial,
                            options?: $protobuf.IConversionOptions
                        ): { [k: string]: any }

                        /**
                         * Converts this PlayerDanmakuBlockspecial to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any }
                    }

                    /** Properties of a PlayerDanmakuBlocktop. */
                    interface IPlayerDanmakuBlocktop {
                        /** PlayerDanmakuBlocktop value */
                        value?: boolean | null
                    }

                    /** Represents a PlayerDanmakuBlocktop. */
                    class PlayerDanmakuBlocktop implements IPlayerDanmakuBlocktop {
                        /**
                         * Constructs a new PlayerDanmakuBlocktop.
                         * @param [properties] Properties to set
                         */
                        constructor(
                            properties?: bilibili.community.service.dm.v1.IPlayerDanmakuBlocktop
                        )

                        /** PlayerDanmakuBlocktop value. */
                        public value: boolean

                        /**
                         * Creates a new PlayerDanmakuBlocktop instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns PlayerDanmakuBlocktop instance
                         */
                        public static create(
                            properties?: bilibili.community.service.dm.v1.IPlayerDanmakuBlocktop
                        ): bilibili.community.service.dm.v1.PlayerDanmakuBlocktop

                        /**
                         * Encodes the specified PlayerDanmakuBlocktop message. Does not implicitly {@link bilibili.community.service.dm.v1.PlayerDanmakuBlocktop.verify|verify} messages.
                         * @param message PlayerDanmakuBlocktop message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(
                            message: bilibili.community.service.dm.v1.IPlayerDanmakuBlocktop,
                            writer?: $protobuf.Writer
                        ): $protobuf.Writer

                        /**
                         * Encodes the specified PlayerDanmakuBlocktop message, length delimited. Does not implicitly {@link bilibili.community.service.dm.v1.PlayerDanmakuBlocktop.verify|verify} messages.
                         * @param message PlayerDanmakuBlocktop message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(
                            message: bilibili.community.service.dm.v1.IPlayerDanmakuBlocktop,
                            writer?: $protobuf.Writer
                        ): $protobuf.Writer

                        /**
                         * Decodes a PlayerDanmakuBlocktop message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns PlayerDanmakuBlocktop
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(
                            reader: $protobuf.Reader | Uint8Array,
                            length?: number
                        ): bilibili.community.service.dm.v1.PlayerDanmakuBlocktop

                        /**
                         * Decodes a PlayerDanmakuBlocktop message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns PlayerDanmakuBlocktop
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(
                            reader: $protobuf.Reader | Uint8Array
                        ): bilibili.community.service.dm.v1.PlayerDanmakuBlocktop

                        /**
                         * Verifies a PlayerDanmakuBlocktop message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): string | null

                        /**
                         * Creates a PlayerDanmakuBlocktop message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns PlayerDanmakuBlocktop
                         */
                        public static fromObject(object: {
                            [k: string]: any
                        }): bilibili.community.service.dm.v1.PlayerDanmakuBlocktop

                        /**
                         * Creates a plain object from a PlayerDanmakuBlocktop message. Also converts values to other types if specified.
                         * @param message PlayerDanmakuBlocktop
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(
                            message: bilibili.community.service.dm.v1.PlayerDanmakuBlocktop,
                            options?: $protobuf.IConversionOptions
                        ): { [k: string]: any }

                        /**
                         * Converts this PlayerDanmakuBlocktop to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any }
                    }

                    /** Properties of a PlayerDanmakuDomain. */
                    interface IPlayerDanmakuDomain {
                        /** PlayerDanmakuDomain value */
                        value?: number | null
                    }

                    /** Represents a PlayerDanmakuDomain. */
                    class PlayerDanmakuDomain implements IPlayerDanmakuDomain {
                        /**
                         * Constructs a new PlayerDanmakuDomain.
                         * @param [properties] Properties to set
                         */
                        constructor(
                            properties?: bilibili.community.service.dm.v1.IPlayerDanmakuDomain
                        )

                        /** PlayerDanmakuDomain value. */
                        public value: number

                        /**
                         * Creates a new PlayerDanmakuDomain instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns PlayerDanmakuDomain instance
                         */
                        public static create(
                            properties?: bilibili.community.service.dm.v1.IPlayerDanmakuDomain
                        ): bilibili.community.service.dm.v1.PlayerDanmakuDomain

                        /**
                         * Encodes the specified PlayerDanmakuDomain message. Does not implicitly {@link bilibili.community.service.dm.v1.PlayerDanmakuDomain.verify|verify} messages.
                         * @param message PlayerDanmakuDomain message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(
                            message: bilibili.community.service.dm.v1.IPlayerDanmakuDomain,
                            writer?: $protobuf.Writer
                        ): $protobuf.Writer

                        /**
                         * Encodes the specified PlayerDanmakuDomain message, length delimited. Does not implicitly {@link bilibili.community.service.dm.v1.PlayerDanmakuDomain.verify|verify} messages.
                         * @param message PlayerDanmakuDomain message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(
                            message: bilibili.community.service.dm.v1.IPlayerDanmakuDomain,
                            writer?: $protobuf.Writer
                        ): $protobuf.Writer

                        /**
                         * Decodes a PlayerDanmakuDomain message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns PlayerDanmakuDomain
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(
                            reader: $protobuf.Reader | Uint8Array,
                            length?: number
                        ): bilibili.community.service.dm.v1.PlayerDanmakuDomain

                        /**
                         * Decodes a PlayerDanmakuDomain message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns PlayerDanmakuDomain
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(
                            reader: $protobuf.Reader | Uint8Array
                        ): bilibili.community.service.dm.v1.PlayerDanmakuDomain

                        /**
                         * Verifies a PlayerDanmakuDomain message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): string | null

                        /**
                         * Creates a PlayerDanmakuDomain message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns PlayerDanmakuDomain
                         */
                        public static fromObject(object: {
                            [k: string]: any
                        }): bilibili.community.service.dm.v1.PlayerDanmakuDomain

                        /**
                         * Creates a plain object from a PlayerDanmakuDomain message. Also converts values to other types if specified.
                         * @param message PlayerDanmakuDomain
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(
                            message: bilibili.community.service.dm.v1.PlayerDanmakuDomain,
                            options?: $protobuf.IConversionOptions
                        ): { [k: string]: any }

                        /**
                         * Converts this PlayerDanmakuDomain to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any }
                    }

                    /** Properties of a PlayerDanmakuEnableblocklist. */
                    interface IPlayerDanmakuEnableblocklist {
                        /** PlayerDanmakuEnableblocklist value */
                        value?: boolean | null
                    }

                    /** Represents a PlayerDanmakuEnableblocklist. */
                    class PlayerDanmakuEnableblocklist implements IPlayerDanmakuEnableblocklist {
                        /**
                         * Constructs a new PlayerDanmakuEnableblocklist.
                         * @param [properties] Properties to set
                         */
                        constructor(
                            properties?: bilibili.community.service.dm.v1.IPlayerDanmakuEnableblocklist
                        )

                        /** PlayerDanmakuEnableblocklist value. */
                        public value: boolean

                        /**
                         * Creates a new PlayerDanmakuEnableblocklist instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns PlayerDanmakuEnableblocklist instance
                         */
                        public static create(
                            properties?: bilibili.community.service.dm.v1.IPlayerDanmakuEnableblocklist
                        ): bilibili.community.service.dm.v1.PlayerDanmakuEnableblocklist

                        /**
                         * Encodes the specified PlayerDanmakuEnableblocklist message. Does not implicitly {@link bilibili.community.service.dm.v1.PlayerDanmakuEnableblocklist.verify|verify} messages.
                         * @param message PlayerDanmakuEnableblocklist message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(
                            message: bilibili.community.service.dm.v1.IPlayerDanmakuEnableblocklist,
                            writer?: $protobuf.Writer
                        ): $protobuf.Writer

                        /**
                         * Encodes the specified PlayerDanmakuEnableblocklist message, length delimited. Does not implicitly {@link bilibili.community.service.dm.v1.PlayerDanmakuEnableblocklist.verify|verify} messages.
                         * @param message PlayerDanmakuEnableblocklist message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(
                            message: bilibili.community.service.dm.v1.IPlayerDanmakuEnableblocklist,
                            writer?: $protobuf.Writer
                        ): $protobuf.Writer

                        /**
                         * Decodes a PlayerDanmakuEnableblocklist message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns PlayerDanmakuEnableblocklist
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(
                            reader: $protobuf.Reader | Uint8Array,
                            length?: number
                        ): bilibili.community.service.dm.v1.PlayerDanmakuEnableblocklist

                        /**
                         * Decodes a PlayerDanmakuEnableblocklist message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns PlayerDanmakuEnableblocklist
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(
                            reader: $protobuf.Reader | Uint8Array
                        ): bilibili.community.service.dm.v1.PlayerDanmakuEnableblocklist

                        /**
                         * Verifies a PlayerDanmakuEnableblocklist message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): string | null

                        /**
                         * Creates a PlayerDanmakuEnableblocklist message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns PlayerDanmakuEnableblocklist
                         */
                        public static fromObject(object: {
                            [k: string]: any
                        }): bilibili.community.service.dm.v1.PlayerDanmakuEnableblocklist

                        /**
                         * Creates a plain object from a PlayerDanmakuEnableblocklist message. Also converts values to other types if specified.
                         * @param message PlayerDanmakuEnableblocklist
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(
                            message: bilibili.community.service.dm.v1.PlayerDanmakuEnableblocklist,
                            options?: $protobuf.IConversionOptions
                        ): { [k: string]: any }

                        /**
                         * Converts this PlayerDanmakuEnableblocklist to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any }
                    }

                    /** Properties of a PlayerDanmakuOpacity. */
                    interface IPlayerDanmakuOpacity {
                        /** PlayerDanmakuOpacity value */
                        value?: number | null
                    }

                    /** Represents a PlayerDanmakuOpacity. */
                    class PlayerDanmakuOpacity implements IPlayerDanmakuOpacity {
                        /**
                         * Constructs a new PlayerDanmakuOpacity.
                         * @param [properties] Properties to set
                         */
                        constructor(
                            properties?: bilibili.community.service.dm.v1.IPlayerDanmakuOpacity
                        )

                        /** PlayerDanmakuOpacity value. */
                        public value: number

                        /**
                         * Creates a new PlayerDanmakuOpacity instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns PlayerDanmakuOpacity instance
                         */
                        public static create(
                            properties?: bilibili.community.service.dm.v1.IPlayerDanmakuOpacity
                        ): bilibili.community.service.dm.v1.PlayerDanmakuOpacity

                        /**
                         * Encodes the specified PlayerDanmakuOpacity message. Does not implicitly {@link bilibili.community.service.dm.v1.PlayerDanmakuOpacity.verify|verify} messages.
                         * @param message PlayerDanmakuOpacity message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(
                            message: bilibili.community.service.dm.v1.IPlayerDanmakuOpacity,
                            writer?: $protobuf.Writer
                        ): $protobuf.Writer

                        /**
                         * Encodes the specified PlayerDanmakuOpacity message, length delimited. Does not implicitly {@link bilibili.community.service.dm.v1.PlayerDanmakuOpacity.verify|verify} messages.
                         * @param message PlayerDanmakuOpacity message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(
                            message: bilibili.community.service.dm.v1.IPlayerDanmakuOpacity,
                            writer?: $protobuf.Writer
                        ): $protobuf.Writer

                        /**
                         * Decodes a PlayerDanmakuOpacity message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns PlayerDanmakuOpacity
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(
                            reader: $protobuf.Reader | Uint8Array,
                            length?: number
                        ): bilibili.community.service.dm.v1.PlayerDanmakuOpacity

                        /**
                         * Decodes a PlayerDanmakuOpacity message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns PlayerDanmakuOpacity
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(
                            reader: $protobuf.Reader | Uint8Array
                        ): bilibili.community.service.dm.v1.PlayerDanmakuOpacity

                        /**
                         * Verifies a PlayerDanmakuOpacity message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): string | null

                        /**
                         * Creates a PlayerDanmakuOpacity message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns PlayerDanmakuOpacity
                         */
                        public static fromObject(object: {
                            [k: string]: any
                        }): bilibili.community.service.dm.v1.PlayerDanmakuOpacity

                        /**
                         * Creates a plain object from a PlayerDanmakuOpacity message. Also converts values to other types if specified.
                         * @param message PlayerDanmakuOpacity
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(
                            message: bilibili.community.service.dm.v1.PlayerDanmakuOpacity,
                            options?: $protobuf.IConversionOptions
                        ): { [k: string]: any }

                        /**
                         * Converts this PlayerDanmakuOpacity to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any }
                    }

                    /** Properties of a PlayerDanmakuScalingfactor. */
                    interface IPlayerDanmakuScalingfactor {
                        /** PlayerDanmakuScalingfactor value */
                        value?: number | null
                    }

                    /** Represents a PlayerDanmakuScalingfactor. */
                    class PlayerDanmakuScalingfactor implements IPlayerDanmakuScalingfactor {
                        /**
                         * Constructs a new PlayerDanmakuScalingfactor.
                         * @param [properties] Properties to set
                         */
                        constructor(
                            properties?: bilibili.community.service.dm.v1.IPlayerDanmakuScalingfactor
                        )

                        /** PlayerDanmakuScalingfactor value. */
                        public value: number

                        /**
                         * Creates a new PlayerDanmakuScalingfactor instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns PlayerDanmakuScalingfactor instance
                         */
                        public static create(
                            properties?: bilibili.community.service.dm.v1.IPlayerDanmakuScalingfactor
                        ): bilibili.community.service.dm.v1.PlayerDanmakuScalingfactor

                        /**
                         * Encodes the specified PlayerDanmakuScalingfactor message. Does not implicitly {@link bilibili.community.service.dm.v1.PlayerDanmakuScalingfactor.verify|verify} messages.
                         * @param message PlayerDanmakuScalingfactor message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(
                            message: bilibili.community.service.dm.v1.IPlayerDanmakuScalingfactor,
                            writer?: $protobuf.Writer
                        ): $protobuf.Writer

                        /**
                         * Encodes the specified PlayerDanmakuScalingfactor message, length delimited. Does not implicitly {@link bilibili.community.service.dm.v1.PlayerDanmakuScalingfactor.verify|verify} messages.
                         * @param message PlayerDanmakuScalingfactor message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(
                            message: bilibili.community.service.dm.v1.IPlayerDanmakuScalingfactor,
                            writer?: $protobuf.Writer
                        ): $protobuf.Writer

                        /**
                         * Decodes a PlayerDanmakuScalingfactor message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns PlayerDanmakuScalingfactor
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(
                            reader: $protobuf.Reader | Uint8Array,
                            length?: number
                        ): bilibili.community.service.dm.v1.PlayerDanmakuScalingfactor

                        /**
                         * Decodes a PlayerDanmakuScalingfactor message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns PlayerDanmakuScalingfactor
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(
                            reader: $protobuf.Reader | Uint8Array
                        ): bilibili.community.service.dm.v1.PlayerDanmakuScalingfactor

                        /**
                         * Verifies a PlayerDanmakuScalingfactor message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): string | null

                        /**
                         * Creates a PlayerDanmakuScalingfactor message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns PlayerDanmakuScalingfactor
                         */
                        public static fromObject(object: {
                            [k: string]: any
                        }): bilibili.community.service.dm.v1.PlayerDanmakuScalingfactor

                        /**
                         * Creates a plain object from a PlayerDanmakuScalingfactor message. Also converts values to other types if specified.
                         * @param message PlayerDanmakuScalingfactor
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(
                            message: bilibili.community.service.dm.v1.PlayerDanmakuScalingfactor,
                            options?: $protobuf.IConversionOptions
                        ): { [k: string]: any }

                        /**
                         * Converts this PlayerDanmakuScalingfactor to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any }
                    }

                    /** Properties of a PlayerDanmakuSpeed. */
                    interface IPlayerDanmakuSpeed {
                        /** PlayerDanmakuSpeed value */
                        value?: number | null
                    }

                    /** Represents a PlayerDanmakuSpeed. */
                    class PlayerDanmakuSpeed implements IPlayerDanmakuSpeed {
                        /**
                         * Constructs a new PlayerDanmakuSpeed.
                         * @param [properties] Properties to set
                         */
                        constructor(
                            properties?: bilibili.community.service.dm.v1.IPlayerDanmakuSpeed
                        )

                        /** PlayerDanmakuSpeed value. */
                        public value: number

                        /**
                         * Creates a new PlayerDanmakuSpeed instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns PlayerDanmakuSpeed instance
                         */
                        public static create(
                            properties?: bilibili.community.service.dm.v1.IPlayerDanmakuSpeed
                        ): bilibili.community.service.dm.v1.PlayerDanmakuSpeed

                        /**
                         * Encodes the specified PlayerDanmakuSpeed message. Does not implicitly {@link bilibili.community.service.dm.v1.PlayerDanmakuSpeed.verify|verify} messages.
                         * @param message PlayerDanmakuSpeed message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(
                            message: bilibili.community.service.dm.v1.IPlayerDanmakuSpeed,
                            writer?: $protobuf.Writer
                        ): $protobuf.Writer

                        /**
                         * Encodes the specified PlayerDanmakuSpeed message, length delimited. Does not implicitly {@link bilibili.community.service.dm.v1.PlayerDanmakuSpeed.verify|verify} messages.
                         * @param message PlayerDanmakuSpeed message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(
                            message: bilibili.community.service.dm.v1.IPlayerDanmakuSpeed,
                            writer?: $protobuf.Writer
                        ): $protobuf.Writer

                        /**
                         * Decodes a PlayerDanmakuSpeed message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns PlayerDanmakuSpeed
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(
                            reader: $protobuf.Reader | Uint8Array,
                            length?: number
                        ): bilibili.community.service.dm.v1.PlayerDanmakuSpeed

                        /**
                         * Decodes a PlayerDanmakuSpeed message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns PlayerDanmakuSpeed
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(
                            reader: $protobuf.Reader | Uint8Array
                        ): bilibili.community.service.dm.v1.PlayerDanmakuSpeed

                        /**
                         * Verifies a PlayerDanmakuSpeed message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): string | null

                        /**
                         * Creates a PlayerDanmakuSpeed message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns PlayerDanmakuSpeed
                         */
                        public static fromObject(object: {
                            [k: string]: any
                        }): bilibili.community.service.dm.v1.PlayerDanmakuSpeed

                        /**
                         * Creates a plain object from a PlayerDanmakuSpeed message. Also converts values to other types if specified.
                         * @param message PlayerDanmakuSpeed
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(
                            message: bilibili.community.service.dm.v1.PlayerDanmakuSpeed,
                            options?: $protobuf.IConversionOptions
                        ): { [k: string]: any }

                        /**
                         * Converts this PlayerDanmakuSpeed to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any }
                    }

                    /** Properties of a PlayerDanmakuSwitch. */
                    interface IPlayerDanmakuSwitch {
                        /** PlayerDanmakuSwitch value */
                        value?: boolean | null
                    }

                    /** Represents a PlayerDanmakuSwitch. */
                    class PlayerDanmakuSwitch implements IPlayerDanmakuSwitch {
                        /**
                         * Constructs a new PlayerDanmakuSwitch.
                         * @param [properties] Properties to set
                         */
                        constructor(
                            properties?: bilibili.community.service.dm.v1.IPlayerDanmakuSwitch
                        )

                        /** PlayerDanmakuSwitch value. */
                        public value: boolean

                        /**
                         * Creates a new PlayerDanmakuSwitch instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns PlayerDanmakuSwitch instance
                         */
                        public static create(
                            properties?: bilibili.community.service.dm.v1.IPlayerDanmakuSwitch
                        ): bilibili.community.service.dm.v1.PlayerDanmakuSwitch

                        /**
                         * Encodes the specified PlayerDanmakuSwitch message. Does not implicitly {@link bilibili.community.service.dm.v1.PlayerDanmakuSwitch.verify|verify} messages.
                         * @param message PlayerDanmakuSwitch message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(
                            message: bilibili.community.service.dm.v1.IPlayerDanmakuSwitch,
                            writer?: $protobuf.Writer
                        ): $protobuf.Writer

                        /**
                         * Encodes the specified PlayerDanmakuSwitch message, length delimited. Does not implicitly {@link bilibili.community.service.dm.v1.PlayerDanmakuSwitch.verify|verify} messages.
                         * @param message PlayerDanmakuSwitch message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(
                            message: bilibili.community.service.dm.v1.IPlayerDanmakuSwitch,
                            writer?: $protobuf.Writer
                        ): $protobuf.Writer

                        /**
                         * Decodes a PlayerDanmakuSwitch message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns PlayerDanmakuSwitch
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(
                            reader: $protobuf.Reader | Uint8Array,
                            length?: number
                        ): bilibili.community.service.dm.v1.PlayerDanmakuSwitch

                        /**
                         * Decodes a PlayerDanmakuSwitch message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns PlayerDanmakuSwitch
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(
                            reader: $protobuf.Reader | Uint8Array
                        ): bilibili.community.service.dm.v1.PlayerDanmakuSwitch

                        /**
                         * Verifies a PlayerDanmakuSwitch message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): string | null

                        /**
                         * Creates a PlayerDanmakuSwitch message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns PlayerDanmakuSwitch
                         */
                        public static fromObject(object: {
                            [k: string]: any
                        }): bilibili.community.service.dm.v1.PlayerDanmakuSwitch

                        /**
                         * Creates a plain object from a PlayerDanmakuSwitch message. Also converts values to other types if specified.
                         * @param message PlayerDanmakuSwitch
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(
                            message: bilibili.community.service.dm.v1.PlayerDanmakuSwitch,
                            options?: $protobuf.IConversionOptions
                        ): { [k: string]: any }

                        /**
                         * Converts this PlayerDanmakuSwitch to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any }
                    }

                    /** Properties of a PlayerDanmakuSwitchSave. */
                    interface IPlayerDanmakuSwitchSave {
                        /** PlayerDanmakuSwitchSave value */
                        value?: boolean | null
                    }

                    /** Represents a PlayerDanmakuSwitchSave. */
                    class PlayerDanmakuSwitchSave implements IPlayerDanmakuSwitchSave {
                        /**
                         * Constructs a new PlayerDanmakuSwitchSave.
                         * @param [properties] Properties to set
                         */
                        constructor(
                            properties?: bilibili.community.service.dm.v1.IPlayerDanmakuSwitchSave
                        )

                        /** PlayerDanmakuSwitchSave value. */
                        public value: boolean

                        /**
                         * Creates a new PlayerDanmakuSwitchSave instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns PlayerDanmakuSwitchSave instance
                         */
                        public static create(
                            properties?: bilibili.community.service.dm.v1.IPlayerDanmakuSwitchSave
                        ): bilibili.community.service.dm.v1.PlayerDanmakuSwitchSave

                        /**
                         * Encodes the specified PlayerDanmakuSwitchSave message. Does not implicitly {@link bilibili.community.service.dm.v1.PlayerDanmakuSwitchSave.verify|verify} messages.
                         * @param message PlayerDanmakuSwitchSave message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(
                            message: bilibili.community.service.dm.v1.IPlayerDanmakuSwitchSave,
                            writer?: $protobuf.Writer
                        ): $protobuf.Writer

                        /**
                         * Encodes the specified PlayerDanmakuSwitchSave message, length delimited. Does not implicitly {@link bilibili.community.service.dm.v1.PlayerDanmakuSwitchSave.verify|verify} messages.
                         * @param message PlayerDanmakuSwitchSave message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(
                            message: bilibili.community.service.dm.v1.IPlayerDanmakuSwitchSave,
                            writer?: $protobuf.Writer
                        ): $protobuf.Writer

                        /**
                         * Decodes a PlayerDanmakuSwitchSave message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns PlayerDanmakuSwitchSave
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(
                            reader: $protobuf.Reader | Uint8Array,
                            length?: number
                        ): bilibili.community.service.dm.v1.PlayerDanmakuSwitchSave

                        /**
                         * Decodes a PlayerDanmakuSwitchSave message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns PlayerDanmakuSwitchSave
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(
                            reader: $protobuf.Reader | Uint8Array
                        ): bilibili.community.service.dm.v1.PlayerDanmakuSwitchSave

                        /**
                         * Verifies a PlayerDanmakuSwitchSave message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): string | null

                        /**
                         * Creates a PlayerDanmakuSwitchSave message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns PlayerDanmakuSwitchSave
                         */
                        public static fromObject(object: {
                            [k: string]: any
                        }): bilibili.community.service.dm.v1.PlayerDanmakuSwitchSave

                        /**
                         * Creates a plain object from a PlayerDanmakuSwitchSave message. Also converts values to other types if specified.
                         * @param message PlayerDanmakuSwitchSave
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(
                            message: bilibili.community.service.dm.v1.PlayerDanmakuSwitchSave,
                            options?: $protobuf.IConversionOptions
                        ): { [k: string]: any }

                        /**
                         * Converts this PlayerDanmakuSwitchSave to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any }
                    }

                    /** Properties of a PlayerDanmakuUseDefaultConfig. */
                    interface IPlayerDanmakuUseDefaultConfig {
                        /** PlayerDanmakuUseDefaultConfig value */
                        value?: boolean | null
                    }

                    /** Represents a PlayerDanmakuUseDefaultConfig. */
                    class PlayerDanmakuUseDefaultConfig implements IPlayerDanmakuUseDefaultConfig {
                        /**
                         * Constructs a new PlayerDanmakuUseDefaultConfig.
                         * @param [properties] Properties to set
                         */
                        constructor(
                            properties?: bilibili.community.service.dm.v1.IPlayerDanmakuUseDefaultConfig
                        )

                        /** PlayerDanmakuUseDefaultConfig value. */
                        public value: boolean

                        /**
                         * Creates a new PlayerDanmakuUseDefaultConfig instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns PlayerDanmakuUseDefaultConfig instance
                         */
                        public static create(
                            properties?: bilibili.community.service.dm.v1.IPlayerDanmakuUseDefaultConfig
                        ): bilibili.community.service.dm.v1.PlayerDanmakuUseDefaultConfig

                        /**
                         * Encodes the specified PlayerDanmakuUseDefaultConfig message. Does not implicitly {@link bilibili.community.service.dm.v1.PlayerDanmakuUseDefaultConfig.verify|verify} messages.
                         * @param message PlayerDanmakuUseDefaultConfig message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(
                            message: bilibili.community.service.dm.v1.IPlayerDanmakuUseDefaultConfig,
                            writer?: $protobuf.Writer
                        ): $protobuf.Writer

                        /**
                         * Encodes the specified PlayerDanmakuUseDefaultConfig message, length delimited. Does not implicitly {@link bilibili.community.service.dm.v1.PlayerDanmakuUseDefaultConfig.verify|verify} messages.
                         * @param message PlayerDanmakuUseDefaultConfig message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(
                            message: bilibili.community.service.dm.v1.IPlayerDanmakuUseDefaultConfig,
                            writer?: $protobuf.Writer
                        ): $protobuf.Writer

                        /**
                         * Decodes a PlayerDanmakuUseDefaultConfig message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns PlayerDanmakuUseDefaultConfig
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(
                            reader: $protobuf.Reader | Uint8Array,
                            length?: number
                        ): bilibili.community.service.dm.v1.PlayerDanmakuUseDefaultConfig

                        /**
                         * Decodes a PlayerDanmakuUseDefaultConfig message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns PlayerDanmakuUseDefaultConfig
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(
                            reader: $protobuf.Reader | Uint8Array
                        ): bilibili.community.service.dm.v1.PlayerDanmakuUseDefaultConfig

                        /**
                         * Verifies a PlayerDanmakuUseDefaultConfig message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): string | null

                        /**
                         * Creates a PlayerDanmakuUseDefaultConfig message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns PlayerDanmakuUseDefaultConfig
                         */
                        public static fromObject(object: {
                            [k: string]: any
                        }): bilibili.community.service.dm.v1.PlayerDanmakuUseDefaultConfig

                        /**
                         * Creates a plain object from a PlayerDanmakuUseDefaultConfig message. Also converts values to other types if specified.
                         * @param message PlayerDanmakuUseDefaultConfig
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(
                            message: bilibili.community.service.dm.v1.PlayerDanmakuUseDefaultConfig,
                            options?: $protobuf.IConversionOptions
                        ): { [k: string]: any }

                        /**
                         * Converts this PlayerDanmakuUseDefaultConfig to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any }
                    }

                    /** Properties of a SubtitleItem. */
                    interface ISubtitleItem {
                        /** SubtitleItem id */
                        id?: number | Long | null

                        /** SubtitleItem idStr */
                        idStr?: string | null

                        /** SubtitleItem lan */
                        lan?: string | null

                        /** SubtitleItem lanDoc */
                        lanDoc?: string | null

                        /** SubtitleItem subtitleUrl */
                        subtitleUrl?: string | null

                        /** SubtitleItem author */
                        author?: bilibili.community.service.dm.v1.IUserInfo | null
                    }

                    /** Represents a SubtitleItem. */
                    class SubtitleItem implements ISubtitleItem {
                        /**
                         * Constructs a new SubtitleItem.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: bilibili.community.service.dm.v1.ISubtitleItem)

                        /** SubtitleItem id. */
                        public id: number | Long

                        /** SubtitleItem idStr. */
                        public idStr: string

                        /** SubtitleItem lan. */
                        public lan: string

                        /** SubtitleItem lanDoc. */
                        public lanDoc: string

                        /** SubtitleItem subtitleUrl. */
                        public subtitleUrl: string

                        /** SubtitleItem author. */
                        public author?: bilibili.community.service.dm.v1.IUserInfo | null

                        /**
                         * Creates a new SubtitleItem instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns SubtitleItem instance
                         */
                        public static create(
                            properties?: bilibili.community.service.dm.v1.ISubtitleItem
                        ): bilibili.community.service.dm.v1.SubtitleItem

                        /**
                         * Encodes the specified SubtitleItem message. Does not implicitly {@link bilibili.community.service.dm.v1.SubtitleItem.verify|verify} messages.
                         * @param message SubtitleItem message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(
                            message: bilibili.community.service.dm.v1.ISubtitleItem,
                            writer?: $protobuf.Writer
                        ): $protobuf.Writer

                        /**
                         * Encodes the specified SubtitleItem message, length delimited. Does not implicitly {@link bilibili.community.service.dm.v1.SubtitleItem.verify|verify} messages.
                         * @param message SubtitleItem message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(
                            message: bilibili.community.service.dm.v1.ISubtitleItem,
                            writer?: $protobuf.Writer
                        ): $protobuf.Writer

                        /**
                         * Decodes a SubtitleItem message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns SubtitleItem
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(
                            reader: $protobuf.Reader | Uint8Array,
                            length?: number
                        ): bilibili.community.service.dm.v1.SubtitleItem

                        /**
                         * Decodes a SubtitleItem message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns SubtitleItem
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(
                            reader: $protobuf.Reader | Uint8Array
                        ): bilibili.community.service.dm.v1.SubtitleItem

                        /**
                         * Verifies a SubtitleItem message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): string | null

                        /**
                         * Creates a SubtitleItem message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns SubtitleItem
                         */
                        public static fromObject(object: {
                            [k: string]: any
                        }): bilibili.community.service.dm.v1.SubtitleItem

                        /**
                         * Creates a plain object from a SubtitleItem message. Also converts values to other types if specified.
                         * @param message SubtitleItem
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(
                            message: bilibili.community.service.dm.v1.SubtitleItem,
                            options?: $protobuf.IConversionOptions
                        ): { [k: string]: any }

                        /**
                         * Converts this SubtitleItem to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any }
                    }

                    /** Properties of a UserInfo. */
                    interface IUserInfo {
                        /** UserInfo mid */
                        mid?: number | Long | null

                        /** UserInfo name */
                        name?: string | null

                        /** UserInfo sex */
                        sex?: string | null

                        /** UserInfo face */
                        face?: string | null

                        /** UserInfo sign */
                        sign?: string | null

                        /** UserInfo rank */
                        rank?: number | null
                    }

                    /** Represents a UserInfo. */
                    class UserInfo implements IUserInfo {
                        /**
                         * Constructs a new UserInfo.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: bilibili.community.service.dm.v1.IUserInfo)

                        /** UserInfo mid. */
                        public mid: number | Long

                        /** UserInfo name. */
                        public name: string

                        /** UserInfo sex. */
                        public sex: string

                        /** UserInfo face. */
                        public face: string

                        /** UserInfo sign. */
                        public sign: string

                        /** UserInfo rank. */
                        public rank: number

                        /**
                         * Creates a new UserInfo instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns UserInfo instance
                         */
                        public static create(
                            properties?: bilibili.community.service.dm.v1.IUserInfo
                        ): bilibili.community.service.dm.v1.UserInfo

                        /**
                         * Encodes the specified UserInfo message. Does not implicitly {@link bilibili.community.service.dm.v1.UserInfo.verify|verify} messages.
                         * @param message UserInfo message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(
                            message: bilibili.community.service.dm.v1.IUserInfo,
                            writer?: $protobuf.Writer
                        ): $protobuf.Writer

                        /**
                         * Encodes the specified UserInfo message, length delimited. Does not implicitly {@link bilibili.community.service.dm.v1.UserInfo.verify|verify} messages.
                         * @param message UserInfo message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(
                            message: bilibili.community.service.dm.v1.IUserInfo,
                            writer?: $protobuf.Writer
                        ): $protobuf.Writer

                        /**
                         * Decodes a UserInfo message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns UserInfo
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(
                            reader: $protobuf.Reader | Uint8Array,
                            length?: number
                        ): bilibili.community.service.dm.v1.UserInfo

                        /**
                         * Decodes a UserInfo message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns UserInfo
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(
                            reader: $protobuf.Reader | Uint8Array
                        ): bilibili.community.service.dm.v1.UserInfo

                        /**
                         * Verifies a UserInfo message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): string | null

                        /**
                         * Creates a UserInfo message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns UserInfo
                         */
                        public static fromObject(object: {
                            [k: string]: any
                        }): bilibili.community.service.dm.v1.UserInfo

                        /**
                         * Creates a plain object from a UserInfo message. Also converts values to other types if specified.
                         * @param message UserInfo
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(
                            message: bilibili.community.service.dm.v1.UserInfo,
                            options?: $protobuf.IConversionOptions
                        ): { [k: string]: any }

                        /**
                         * Converts this UserInfo to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any }
                    }

                    /** Properties of a VideoMask. */
                    interface IVideoMask {
                        /** VideoMask cid */
                        cid?: number | Long | null

                        /** VideoMask plat */
                        plat?: number | null

                        /** VideoMask fps */
                        fps?: number | null

                        /** VideoMask time */
                        time?: number | Long | null

                        /** VideoMask maskUrl */
                        maskUrl?: string | null
                    }

                    /** Represents a VideoMask. */
                    class VideoMask implements IVideoMask {
                        /**
                         * Constructs a new VideoMask.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: bilibili.community.service.dm.v1.IVideoMask)

                        /** VideoMask cid. */
                        public cid: number | Long

                        /** VideoMask plat. */
                        public plat: number

                        /** VideoMask fps. */
                        public fps: number

                        /** VideoMask time. */
                        public time: number | Long

                        /** VideoMask maskUrl. */
                        public maskUrl: string

                        /**
                         * Creates a new VideoMask instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns VideoMask instance
                         */
                        public static create(
                            properties?: bilibili.community.service.dm.v1.IVideoMask
                        ): bilibili.community.service.dm.v1.VideoMask

                        /**
                         * Encodes the specified VideoMask message. Does not implicitly {@link bilibili.community.service.dm.v1.VideoMask.verify|verify} messages.
                         * @param message VideoMask message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(
                            message: bilibili.community.service.dm.v1.IVideoMask,
                            writer?: $protobuf.Writer
                        ): $protobuf.Writer

                        /**
                         * Encodes the specified VideoMask message, length delimited. Does not implicitly {@link bilibili.community.service.dm.v1.VideoMask.verify|verify} messages.
                         * @param message VideoMask message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(
                            message: bilibili.community.service.dm.v1.IVideoMask,
                            writer?: $protobuf.Writer
                        ): $protobuf.Writer

                        /**
                         * Decodes a VideoMask message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns VideoMask
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(
                            reader: $protobuf.Reader | Uint8Array,
                            length?: number
                        ): bilibili.community.service.dm.v1.VideoMask

                        /**
                         * Decodes a VideoMask message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns VideoMask
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(
                            reader: $protobuf.Reader | Uint8Array
                        ): bilibili.community.service.dm.v1.VideoMask

                        /**
                         * Verifies a VideoMask message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): string | null

                        /**
                         * Creates a VideoMask message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns VideoMask
                         */
                        public static fromObject(object: {
                            [k: string]: any
                        }): bilibili.community.service.dm.v1.VideoMask

                        /**
                         * Creates a plain object from a VideoMask message. Also converts values to other types if specified.
                         * @param message VideoMask
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(
                            message: bilibili.community.service.dm.v1.VideoMask,
                            options?: $protobuf.IConversionOptions
                        ): { [k: string]: any }

                        /**
                         * Converts this VideoMask to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any }
                    }

                    /** Properties of a VideoSubtitle. */
                    interface IVideoSubtitle {
                        /** VideoSubtitle lan */
                        lan?: string | null

                        /** VideoSubtitle lanDoc */
                        lanDoc?: string | null

                        /** VideoSubtitle subtitles */
                        subtitles?: bilibili.community.service.dm.v1.ISubtitleItem[] | null
                    }

                    /** Represents a VideoSubtitle. */
                    class VideoSubtitle implements IVideoSubtitle {
                        /**
                         * Constructs a new VideoSubtitle.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: bilibili.community.service.dm.v1.IVideoSubtitle)

                        /** VideoSubtitle lan. */
                        public lan: string

                        /** VideoSubtitle lanDoc. */
                        public lanDoc: string

                        /** VideoSubtitle subtitles. */
                        public subtitles: bilibili.community.service.dm.v1.ISubtitleItem[]

                        /**
                         * Creates a new VideoSubtitle instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns VideoSubtitle instance
                         */
                        public static create(
                            properties?: bilibili.community.service.dm.v1.IVideoSubtitle
                        ): bilibili.community.service.dm.v1.VideoSubtitle

                        /**
                         * Encodes the specified VideoSubtitle message. Does not implicitly {@link bilibili.community.service.dm.v1.VideoSubtitle.verify|verify} messages.
                         * @param message VideoSubtitle message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(
                            message: bilibili.community.service.dm.v1.IVideoSubtitle,
                            writer?: $protobuf.Writer
                        ): $protobuf.Writer

                        /**
                         * Encodes the specified VideoSubtitle message, length delimited. Does not implicitly {@link bilibili.community.service.dm.v1.VideoSubtitle.verify|verify} messages.
                         * @param message VideoSubtitle message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(
                            message: bilibili.community.service.dm.v1.IVideoSubtitle,
                            writer?: $protobuf.Writer
                        ): $protobuf.Writer

                        /**
                         * Decodes a VideoSubtitle message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns VideoSubtitle
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(
                            reader: $protobuf.Reader | Uint8Array,
                            length?: number
                        ): bilibili.community.service.dm.v1.VideoSubtitle

                        /**
                         * Decodes a VideoSubtitle message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns VideoSubtitle
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(
                            reader: $protobuf.Reader | Uint8Array
                        ): bilibili.community.service.dm.v1.VideoSubtitle

                        /**
                         * Verifies a VideoSubtitle message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): string | null

                        /**
                         * Creates a VideoSubtitle message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns VideoSubtitle
                         */
                        public static fromObject(object: {
                            [k: string]: any
                        }): bilibili.community.service.dm.v1.VideoSubtitle

                        /**
                         * Creates a plain object from a VideoSubtitle message. Also converts values to other types if specified.
                         * @param message VideoSubtitle
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(
                            message: bilibili.community.service.dm.v1.VideoSubtitle,
                            options?: $protobuf.IConversionOptions
                        ): { [k: string]: any }

                        /**
                         * Converts this VideoSubtitle to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any }
                    }
                }
            }
        }
    }
}

/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
'use strict'

var $protobuf = require('protobufjs/minimal')

// Common aliases
var $Reader = $protobuf.Reader,
    $Writer = $protobuf.Writer,
    $util = $protobuf.util

// Exported root namespace
var $root = $protobuf.roots['default'] || ($protobuf.roots['default'] = {})

$root.bilibili = (function () {
    /**
     * Namespace bilibili.
     * @exports bilibili
     * @namespace
     */
    var bilibili = {}

    bilibili.community = (function () {
        /**
         * Namespace community.
         * @memberof bilibili
         * @namespace
         */
        var community = {}

        community.service = (function () {
            /**
             * Namespace service.
             * @memberof bilibili.community
             * @namespace
             */
            var service = {}

            service.dm = (function () {
                /**
                 * Namespace dm.
                 * @memberof bilibili.community.service
                 * @namespace
                 */
                var dm = {}

                dm.v1 = (function () {
                    /**
                     * Namespace v1.
                     * @memberof bilibili.community.service.dm
                     * @namespace
                     */
                    var v1 = {}

                    v1.DM = (function () {
                        /**
                         * Constructs a new DM service.
                         * @memberof bilibili.community.service.dm.v1
                         * @classdesc Represents a DM
                         * @extends $protobuf.rpc.Service
                         * @constructor
                         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
                         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
                         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
                         */
                        function DM(rpcImpl, requestDelimited, responseDelimited) {
                            $protobuf.rpc.Service.call(
                                this,
                                rpcImpl,
                                requestDelimited,
                                responseDelimited
                            )
                        }

                        ;(DM.prototype = Object.create(
                            $protobuf.rpc.Service.prototype
                        )).constructor = DM

                        /**
                         * Creates new DM service using the specified rpc implementation.
                         * @function create
                         * @memberof bilibili.community.service.dm.v1.DM
                         * @static
                         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
                         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
                         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
                         * @returns {DM} RPC service. Useful where requests and/or responses are streamed.
                         */
                        DM.create = function create(rpcImpl, requestDelimited, responseDelimited) {
                            return new this(rpcImpl, requestDelimited, responseDelimited)
                        }

                        /**
                         * Callback as used by {@link bilibili.community.service.dm.v1.DM#dmPlayerConfig}.
                         * @memberof bilibili.community.service.dm.v1.DM
                         * @typedef DmPlayerConfigCallback
                         * @type {function}
                         * @param {Error|null} error Error, if any
                         * @param {bilibili.community.service.dm.v1.Response} [response] Response
                         */

                        /**
                         * Calls DmPlayerConfig.
                         * @function dmPlayerConfig
                         * @memberof bilibili.community.service.dm.v1.DM
                         * @instance
                         * @param {bilibili.community.service.dm.v1.IDmPlayerConfigReq} request DmPlayerConfigReq message or plain object
                         * @param {bilibili.community.service.dm.v1.DM.DmPlayerConfigCallback} callback Node-style callback called with the error, if any, and Response
                         * @returns {undefined}
                         * @variation 1
                         */
                        Object.defineProperty(
                            (DM.prototype.dmPlayerConfig = function dmPlayerConfig(
                                request,
                                callback
                            ) {
                                return this.rpcCall(
                                    dmPlayerConfig,
                                    $root.bilibili.community.service.dm.v1.DmPlayerConfigReq,
                                    $root.bilibili.community.service.dm.v1.Response,
                                    request,
                                    callback
                                )
                            }),
                            'name',
                            { value: 'DmPlayerConfig' }
                        )

                        /**
                         * Calls DmPlayerConfig.
                         * @function dmPlayerConfig
                         * @memberof bilibili.community.service.dm.v1.DM
                         * @instance
                         * @param {bilibili.community.service.dm.v1.IDmPlayerConfigReq} request DmPlayerConfigReq message or plain object
                         * @returns {Promise<bilibili.community.service.dm.v1.Response>} Promise
                         * @variation 2
                         */

                        /**
                         * Callback as used by {@link bilibili.community.service.dm.v1.DM#dmSegMobile}.
                         * @memberof bilibili.community.service.dm.v1.DM
                         * @typedef DmSegMobileCallback
                         * @type {function}
                         * @param {Error|null} error Error, if any
                         * @param {bilibili.community.service.dm.v1.DmSegMobileReply} [response] DmSegMobileReply
                         */

                        /**
                         * Calls DmSegMobile.
                         * @function dmSegMobile
                         * @memberof bilibili.community.service.dm.v1.DM
                         * @instance
                         * @param {bilibili.community.service.dm.v1.IDmSegMobileReq} request DmSegMobileReq message or plain object
                         * @param {bilibili.community.service.dm.v1.DM.DmSegMobileCallback} callback Node-style callback called with the error, if any, and DmSegMobileReply
                         * @returns {undefined}
                         * @variation 1
                         */
                        Object.defineProperty(
                            (DM.prototype.dmSegMobile = function dmSegMobile(request, callback) {
                                return this.rpcCall(
                                    dmSegMobile,
                                    $root.bilibili.community.service.dm.v1.DmSegMobileReq,
                                    $root.bilibili.community.service.dm.v1.DmSegMobileReply,
                                    request,
                                    callback
                                )
                            }),
                            'name',
                            { value: 'DmSegMobile' }
                        )

                        /**
                         * Calls DmSegMobile.
                         * @function dmSegMobile
                         * @memberof bilibili.community.service.dm.v1.DM
                         * @instance
                         * @param {bilibili.community.service.dm.v1.IDmSegMobileReq} request DmSegMobileReq message or plain object
                         * @returns {Promise<bilibili.community.service.dm.v1.DmSegMobileReply>} Promise
                         * @variation 2
                         */

                        /**
                         * Callback as used by {@link bilibili.community.service.dm.v1.DM#dmView}.
                         * @memberof bilibili.community.service.dm.v1.DM
                         * @typedef DmViewCallback
                         * @type {function}
                         * @param {Error|null} error Error, if any
                         * @param {bilibili.community.service.dm.v1.DmViewReply} [response] DmViewReply
                         */

                        /**
                         * Calls DmView.
                         * @function dmView
                         * @memberof bilibili.community.service.dm.v1.DM
                         * @instance
                         * @param {bilibili.community.service.dm.v1.IDmViewReq} request DmViewReq message or plain object
                         * @param {bilibili.community.service.dm.v1.DM.DmViewCallback} callback Node-style callback called with the error, if any, and DmViewReply
                         * @returns {undefined}
                         * @variation 1
                         */
                        Object.defineProperty(
                            (DM.prototype.dmView = function dmView(request, callback) {
                                return this.rpcCall(
                                    dmView,
                                    $root.bilibili.community.service.dm.v1.DmViewReq,
                                    $root.bilibili.community.service.dm.v1.DmViewReply,
                                    request,
                                    callback
                                )
                            }),
                            'name',
                            { value: 'DmView' }
                        )

                        /**
                         * Calls DmView.
                         * @function dmView
                         * @memberof bilibili.community.service.dm.v1.DM
                         * @instance
                         * @param {bilibili.community.service.dm.v1.IDmViewReq} request DmViewReq message or plain object
                         * @returns {Promise<bilibili.community.service.dm.v1.DmViewReply>} Promise
                         * @variation 2
                         */

                        return DM
                    })()

                    v1.DmPlayerConfigReq = (function () {
                        /**
                         * Properties of a DmPlayerConfigReq.
                         * @memberof bilibili.community.service.dm.v1
                         * @interface IDmPlayerConfigReq
                         * @property {number|Long|null} [ts] DmPlayerConfigReq ts
                         * @property {bilibili.community.service.dm.v1.IPlayerDanmakuSwitch|null} ["switch"] DmPlayerConfigReq switch
                         * @property {bilibili.community.service.dm.v1.IPlayerDanmakuSwitchSave|null} [switchSave] DmPlayerConfigReq switchSave
                         * @property {bilibili.community.service.dm.v1.IPlayerDanmakuUseDefaultConfig|null} [useDefaultConfig] DmPlayerConfigReq useDefaultConfig
                         * @property {bilibili.community.service.dm.v1.IPlayerDanmakuAiRecommendedSwitch|null} [aiRecommendedSwitch] DmPlayerConfigReq aiRecommendedSwitch
                         * @property {bilibili.community.service.dm.v1.IPlayerDanmakuAiRecommendedLevel|null} [aiRecommendedLevel] DmPlayerConfigReq aiRecommendedLevel
                         * @property {bilibili.community.service.dm.v1.IPlayerDanmakuBlocktop|null} [blocktop] DmPlayerConfigReq blocktop
                         * @property {bilibili.community.service.dm.v1.IPlayerDanmakuBlockscroll|null} [blockscroll] DmPlayerConfigReq blockscroll
                         * @property {bilibili.community.service.dm.v1.IPlayerDanmakuBlockbottom|null} [blockbottom] DmPlayerConfigReq blockbottom
                         * @property {bilibili.community.service.dm.v1.IPlayerDanmakuBlockcolorful|null} [blockcolorful] DmPlayerConfigReq blockcolorful
                         * @property {bilibili.community.service.dm.v1.IPlayerDanmakuBlockrepeat|null} [blockrepeat] DmPlayerConfigReq blockrepeat
                         * @property {bilibili.community.service.dm.v1.IPlayerDanmakuBlockspecial|null} [blockspecial] DmPlayerConfigReq blockspecial
                         * @property {bilibili.community.service.dm.v1.IPlayerDanmakuOpacity|null} [opacity] DmPlayerConfigReq opacity
                         * @property {bilibili.community.service.dm.v1.IPlayerDanmakuScalingfactor|null} [scalingfactor] DmPlayerConfigReq scalingfactor
                         * @property {bilibili.community.service.dm.v1.IPlayerDanmakuDomain|null} [domain] DmPlayerConfigReq domain
                         * @property {bilibili.community.service.dm.v1.IPlayerDanmakuSpeed|null} [speed] DmPlayerConfigReq speed
                         * @property {bilibili.community.service.dm.v1.IPlayerDanmakuEnableblocklist|null} [enableblocklist] DmPlayerConfigReq enableblocklist
                         * @property {bilibili.community.service.dm.v1.IInlinePlayerDanmakuSwitch|null} [inlinePlayerDanmakuSwitch] DmPlayerConfigReq inlinePlayerDanmakuSwitch
                         */

                        /**
                         * Constructs a new DmPlayerConfigReq.
                         * @memberof bilibili.community.service.dm.v1
                         * @classdesc Represents a DmPlayerConfigReq.
                         * @implements IDmPlayerConfigReq
                         * @constructor
                         * @param {bilibili.community.service.dm.v1.IDmPlayerConfigReq=} [properties] Properties to set
                         */
                        function DmPlayerConfigReq(properties) {
                            if (properties)
                                for (
                                    var keys = Object.keys(properties), i = 0;
                                    i < keys.length;
                                    ++i
                                )
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]]
                        }

                        /**
                         * DmPlayerConfigReq ts.
                         * @member {number|Long} ts
                         * @memberof bilibili.community.service.dm.v1.DmPlayerConfigReq
                         * @instance
                         */
                        DmPlayerConfigReq.prototype.ts = $util.Long
                            ? $util.Long.fromBits(0, 0, false)
                            : 0

                        /**
                         * DmPlayerConfigReq switch.
                         * @member {bilibili.community.service.dm.v1.IPlayerDanmakuSwitch|null|undefined} switch
                         * @memberof bilibili.community.service.dm.v1.DmPlayerConfigReq
                         * @instance
                         */
                        DmPlayerConfigReq.prototype['switch'] = null

                        /**
                         * DmPlayerConfigReq switchSave.
                         * @member {bilibili.community.service.dm.v1.IPlayerDanmakuSwitchSave|null|undefined} switchSave
                         * @memberof bilibili.community.service.dm.v1.DmPlayerConfigReq
                         * @instance
                         */
                        DmPlayerConfigReq.prototype.switchSave = null

                        /**
                         * DmPlayerConfigReq useDefaultConfig.
                         * @member {bilibili.community.service.dm.v1.IPlayerDanmakuUseDefaultConfig|null|undefined} useDefaultConfig
                         * @memberof bilibili.community.service.dm.v1.DmPlayerConfigReq
                         * @instance
                         */
                        DmPlayerConfigReq.prototype.useDefaultConfig = null

                        /**
                         * DmPlayerConfigReq aiRecommendedSwitch.
                         * @member {bilibili.community.service.dm.v1.IPlayerDanmakuAiRecommendedSwitch|null|undefined} aiRecommendedSwitch
                         * @memberof bilibili.community.service.dm.v1.DmPlayerConfigReq
                         * @instance
                         */
                        DmPlayerConfigReq.prototype.aiRecommendedSwitch = null

                        /**
                         * DmPlayerConfigReq aiRecommendedLevel.
                         * @member {bilibili.community.service.dm.v1.IPlayerDanmakuAiRecommendedLevel|null|undefined} aiRecommendedLevel
                         * @memberof bilibili.community.service.dm.v1.DmPlayerConfigReq
                         * @instance
                         */
                        DmPlayerConfigReq.prototype.aiRecommendedLevel = null

                        /**
                         * DmPlayerConfigReq blocktop.
                         * @member {bilibili.community.service.dm.v1.IPlayerDanmakuBlocktop|null|undefined} blocktop
                         * @memberof bilibili.community.service.dm.v1.DmPlayerConfigReq
                         * @instance
                         */
                        DmPlayerConfigReq.prototype.blocktop = null

                        /**
                         * DmPlayerConfigReq blockscroll.
                         * @member {bilibili.community.service.dm.v1.IPlayerDanmakuBlockscroll|null|undefined} blockscroll
                         * @memberof bilibili.community.service.dm.v1.DmPlayerConfigReq
                         * @instance
                         */
                        DmPlayerConfigReq.prototype.blockscroll = null

                        /**
                         * DmPlayerConfigReq blockbottom.
                         * @member {bilibili.community.service.dm.v1.IPlayerDanmakuBlockbottom|null|undefined} blockbottom
                         * @memberof bilibili.community.service.dm.v1.DmPlayerConfigReq
                         * @instance
                         */
                        DmPlayerConfigReq.prototype.blockbottom = null

                        /**
                         * DmPlayerConfigReq blockcolorful.
                         * @member {bilibili.community.service.dm.v1.IPlayerDanmakuBlockcolorful|null|undefined} blockcolorful
                         * @memberof bilibili.community.service.dm.v1.DmPlayerConfigReq
                         * @instance
                         */
                        DmPlayerConfigReq.prototype.blockcolorful = null

                        /**
                         * DmPlayerConfigReq blockrepeat.
                         * @member {bilibili.community.service.dm.v1.IPlayerDanmakuBlockrepeat|null|undefined} blockrepeat
                         * @memberof bilibili.community.service.dm.v1.DmPlayerConfigReq
                         * @instance
                         */
                        DmPlayerConfigReq.prototype.blockrepeat = null

                        /**
                         * DmPlayerConfigReq blockspecial.
                         * @member {bilibili.community.service.dm.v1.IPlayerDanmakuBlockspecial|null|undefined} blockspecial
                         * @memberof bilibili.community.service.dm.v1.DmPlayerConfigReq
                         * @instance
                         */
                        DmPlayerConfigReq.prototype.blockspecial = null

                        /**
                         * DmPlayerConfigReq opacity.
                         * @member {bilibili.community.service.dm.v1.IPlayerDanmakuOpacity|null|undefined} opacity
                         * @memberof bilibili.community.service.dm.v1.DmPlayerConfigReq
                         * @instance
                         */
                        DmPlayerConfigReq.prototype.opacity = null

                        /**
                         * DmPlayerConfigReq scalingfactor.
                         * @member {bilibili.community.service.dm.v1.IPlayerDanmakuScalingfactor|null|undefined} scalingfactor
                         * @memberof bilibili.community.service.dm.v1.DmPlayerConfigReq
                         * @instance
                         */
                        DmPlayerConfigReq.prototype.scalingfactor = null

                        /**
                         * DmPlayerConfigReq domain.
                         * @member {bilibili.community.service.dm.v1.IPlayerDanmakuDomain|null|undefined} domain
                         * @memberof bilibili.community.service.dm.v1.DmPlayerConfigReq
                         * @instance
                         */
                        DmPlayerConfigReq.prototype.domain = null

                        /**
                         * DmPlayerConfigReq speed.
                         * @member {bilibili.community.service.dm.v1.IPlayerDanmakuSpeed|null|undefined} speed
                         * @memberof bilibili.community.service.dm.v1.DmPlayerConfigReq
                         * @instance
                         */
                        DmPlayerConfigReq.prototype.speed = null

                        /**
                         * DmPlayerConfigReq enableblocklist.
                         * @member {bilibili.community.service.dm.v1.IPlayerDanmakuEnableblocklist|null|undefined} enableblocklist
                         * @memberof bilibili.community.service.dm.v1.DmPlayerConfigReq
                         * @instance
                         */
                        DmPlayerConfigReq.prototype.enableblocklist = null

                        /**
                         * DmPlayerConfigReq inlinePlayerDanmakuSwitch.
                         * @member {bilibili.community.service.dm.v1.IInlinePlayerDanmakuSwitch|null|undefined} inlinePlayerDanmakuSwitch
                         * @memberof bilibili.community.service.dm.v1.DmPlayerConfigReq
                         * @instance
                         */
                        DmPlayerConfigReq.prototype.inlinePlayerDanmakuSwitch = null

                        /**
                         * Creates a new DmPlayerConfigReq instance using the specified properties.
                         * @function create
                         * @memberof bilibili.community.service.dm.v1.DmPlayerConfigReq
                         * @static
                         * @param {bilibili.community.service.dm.v1.IDmPlayerConfigReq=} [properties] Properties to set
                         * @returns {bilibili.community.service.dm.v1.DmPlayerConfigReq} DmPlayerConfigReq instance
                         */
                        DmPlayerConfigReq.create = function create(properties) {
                            return new DmPlayerConfigReq(properties)
                        }

                        /**
                         * Encodes the specified DmPlayerConfigReq message. Does not implicitly {@link bilibili.community.service.dm.v1.DmPlayerConfigReq.verify|verify} messages.
                         * @function encode
                         * @memberof bilibili.community.service.dm.v1.DmPlayerConfigReq
                         * @static
                         * @param {bilibili.community.service.dm.v1.IDmPlayerConfigReq} message DmPlayerConfigReq message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        DmPlayerConfigReq.encode = function encode(message, writer) {
                            if (!writer) writer = $Writer.create()
                            if (message.ts != null && Object.hasOwnProperty.call(message, 'ts'))
                                writer.uint32(/* id 1, wireType 0 =*/ 8).int64(message.ts)
                            if (
                                message['switch'] != null &&
                                Object.hasOwnProperty.call(message, 'switch')
                            )
                                $root.bilibili.community.service.dm.v1.PlayerDanmakuSwitch.encode(
                                    message['switch'],
                                    writer.uint32(/* id 2, wireType 2 =*/ 18).fork()
                                ).ldelim()
                            if (
                                message.switchSave != null &&
                                Object.hasOwnProperty.call(message, 'switchSave')
                            )
                                $root.bilibili.community.service.dm.v1.PlayerDanmakuSwitchSave.encode(
                                    message.switchSave,
                                    writer.uint32(/* id 3, wireType 2 =*/ 26).fork()
                                ).ldelim()
                            if (
                                message.useDefaultConfig != null &&
                                Object.hasOwnProperty.call(message, 'useDefaultConfig')
                            )
                                $root.bilibili.community.service.dm.v1.PlayerDanmakuUseDefaultConfig.encode(
                                    message.useDefaultConfig,
                                    writer.uint32(/* id 4, wireType 2 =*/ 34).fork()
                                ).ldelim()
                            if (
                                message.aiRecommendedSwitch != null &&
                                Object.hasOwnProperty.call(message, 'aiRecommendedSwitch')
                            )
                                $root.bilibili.community.service.dm.v1.PlayerDanmakuAiRecommendedSwitch.encode(
                                    message.aiRecommendedSwitch,
                                    writer.uint32(/* id 5, wireType 2 =*/ 42).fork()
                                ).ldelim()
                            if (
                                message.aiRecommendedLevel != null &&
                                Object.hasOwnProperty.call(message, 'aiRecommendedLevel')
                            )
                                $root.bilibili.community.service.dm.v1.PlayerDanmakuAiRecommendedLevel.encode(
                                    message.aiRecommendedLevel,
                                    writer.uint32(/* id 6, wireType 2 =*/ 50).fork()
                                ).ldelim()
                            if (
                                message.blocktop != null &&
                                Object.hasOwnProperty.call(message, 'blocktop')
                            )
                                $root.bilibili.community.service.dm.v1.PlayerDanmakuBlocktop.encode(
                                    message.blocktop,
                                    writer.uint32(/* id 7, wireType 2 =*/ 58).fork()
                                ).ldelim()
                            if (
                                message.blockscroll != null &&
                                Object.hasOwnProperty.call(message, 'blockscroll')
                            )
                                $root.bilibili.community.service.dm.v1.PlayerDanmakuBlockscroll.encode(
                                    message.blockscroll,
                                    writer.uint32(/* id 8, wireType 2 =*/ 66).fork()
                                ).ldelim()
                            if (
                                message.blockbottom != null &&
                                Object.hasOwnProperty.call(message, 'blockbottom')
                            )
                                $root.bilibili.community.service.dm.v1.PlayerDanmakuBlockbottom.encode(
                                    message.blockbottom,
                                    writer.uint32(/* id 9, wireType 2 =*/ 74).fork()
                                ).ldelim()
                            if (
                                message.blockcolorful != null &&
                                Object.hasOwnProperty.call(message, 'blockcolorful')
                            )
                                $root.bilibili.community.service.dm.v1.PlayerDanmakuBlockcolorful.encode(
                                    message.blockcolorful,
                                    writer.uint32(/* id 10, wireType 2 =*/ 82).fork()
                                ).ldelim()
                            if (
                                message.blockrepeat != null &&
                                Object.hasOwnProperty.call(message, 'blockrepeat')
                            )
                                $root.bilibili.community.service.dm.v1.PlayerDanmakuBlockrepeat.encode(
                                    message.blockrepeat,
                                    writer.uint32(/* id 11, wireType 2 =*/ 90).fork()
                                ).ldelim()
                            if (
                                message.blockspecial != null &&
                                Object.hasOwnProperty.call(message, 'blockspecial')
                            )
                                $root.bilibili.community.service.dm.v1.PlayerDanmakuBlockspecial.encode(
                                    message.blockspecial,
                                    writer.uint32(/* id 12, wireType 2 =*/ 98).fork()
                                ).ldelim()
                            if (
                                message.opacity != null &&
                                Object.hasOwnProperty.call(message, 'opacity')
                            )
                                $root.bilibili.community.service.dm.v1.PlayerDanmakuOpacity.encode(
                                    message.opacity,
                                    writer.uint32(/* id 13, wireType 2 =*/ 106).fork()
                                ).ldelim()
                            if (
                                message.scalingfactor != null &&
                                Object.hasOwnProperty.call(message, 'scalingfactor')
                            )
                                $root.bilibili.community.service.dm.v1.PlayerDanmakuScalingfactor.encode(
                                    message.scalingfactor,
                                    writer.uint32(/* id 14, wireType 2 =*/ 114).fork()
                                ).ldelim()
                            if (
                                message.domain != null &&
                                Object.hasOwnProperty.call(message, 'domain')
                            )
                                $root.bilibili.community.service.dm.v1.PlayerDanmakuDomain.encode(
                                    message.domain,
                                    writer.uint32(/* id 15, wireType 2 =*/ 122).fork()
                                ).ldelim()
                            if (
                                message.speed != null &&
                                Object.hasOwnProperty.call(message, 'speed')
                            )
                                $root.bilibili.community.service.dm.v1.PlayerDanmakuSpeed.encode(
                                    message.speed,
                                    writer.uint32(/* id 16, wireType 2 =*/ 130).fork()
                                ).ldelim()
                            if (
                                message.enableblocklist != null &&
                                Object.hasOwnProperty.call(message, 'enableblocklist')
                            )
                                $root.bilibili.community.service.dm.v1.PlayerDanmakuEnableblocklist.encode(
                                    message.enableblocklist,
                                    writer.uint32(/* id 17, wireType 2 =*/ 138).fork()
                                ).ldelim()
                            if (
                                message.inlinePlayerDanmakuSwitch != null &&
                                Object.hasOwnProperty.call(message, 'inlinePlayerDanmakuSwitch')
                            )
                                $root.bilibili.community.service.dm.v1.InlinePlayerDanmakuSwitch.encode(
                                    message.inlinePlayerDanmakuSwitch,
                                    writer.uint32(/* id 18, wireType 2 =*/ 146).fork()
                                ).ldelim()
                            return writer
                        }

                        /**
                         * Encodes the specified DmPlayerConfigReq message, length delimited. Does not implicitly {@link bilibili.community.service.dm.v1.DmPlayerConfigReq.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof bilibili.community.service.dm.v1.DmPlayerConfigReq
                         * @static
                         * @param {bilibili.community.service.dm.v1.IDmPlayerConfigReq} message DmPlayerConfigReq message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        DmPlayerConfigReq.encodeDelimited = function encodeDelimited(
                            message,
                            writer
                        ) {
                            return this.encode(message, writer).ldelim()
                        }

                        /**
                         * Decodes a DmPlayerConfigReq message from the specified reader or buffer.
                         * @function decode
                         * @memberof bilibili.community.service.dm.v1.DmPlayerConfigReq
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {bilibili.community.service.dm.v1.DmPlayerConfigReq} DmPlayerConfigReq
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        DmPlayerConfigReq.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader)) reader = $Reader.create(reader)
                            var end = length === undefined ? reader.len : reader.pos + length,
                                message = new $root.bilibili.community.service.dm.v1.DmPlayerConfigReq()
                            while (reader.pos < end) {
                                var tag = reader.uint32()
                                switch (tag >>> 3) {
                                    case 1:
                                        message.ts = reader.int64()
                                        break
                                    case 2:
                                        message[
                                            'switch'
                                        ] = $root.bilibili.community.service.dm.v1.PlayerDanmakuSwitch.decode(
                                            reader,
                                            reader.uint32()
                                        )
                                        break
                                    case 3:
                                        message.switchSave = $root.bilibili.community.service.dm.v1.PlayerDanmakuSwitchSave.decode(
                                            reader,
                                            reader.uint32()
                                        )
                                        break
                                    case 4:
                                        message.useDefaultConfig = $root.bilibili.community.service.dm.v1.PlayerDanmakuUseDefaultConfig.decode(
                                            reader,
                                            reader.uint32()
                                        )
                                        break
                                    case 5:
                                        message.aiRecommendedSwitch = $root.bilibili.community.service.dm.v1.PlayerDanmakuAiRecommendedSwitch.decode(
                                            reader,
                                            reader.uint32()
                                        )
                                        break
                                    case 6:
                                        message.aiRecommendedLevel = $root.bilibili.community.service.dm.v1.PlayerDanmakuAiRecommendedLevel.decode(
                                            reader,
                                            reader.uint32()
                                        )
                                        break
                                    case 7:
                                        message.blocktop = $root.bilibili.community.service.dm.v1.PlayerDanmakuBlocktop.decode(
                                            reader,
                                            reader.uint32()
                                        )
                                        break
                                    case 8:
                                        message.blockscroll = $root.bilibili.community.service.dm.v1.PlayerDanmakuBlockscroll.decode(
                                            reader,
                                            reader.uint32()
                                        )
                                        break
                                    case 9:
                                        message.blockbottom = $root.bilibili.community.service.dm.v1.PlayerDanmakuBlockbottom.decode(
                                            reader,
                                            reader.uint32()
                                        )
                                        break
                                    case 10:
                                        message.blockcolorful = $root.bilibili.community.service.dm.v1.PlayerDanmakuBlockcolorful.decode(
                                            reader,
                                            reader.uint32()
                                        )
                                        break
                                    case 11:
                                        message.blockrepeat = $root.bilibili.community.service.dm.v1.PlayerDanmakuBlockrepeat.decode(
                                            reader,
                                            reader.uint32()
                                        )
                                        break
                                    case 12:
                                        message.blockspecial = $root.bilibili.community.service.dm.v1.PlayerDanmakuBlockspecial.decode(
                                            reader,
                                            reader.uint32()
                                        )
                                        break
                                    case 13:
                                        message.opacity = $root.bilibili.community.service.dm.v1.PlayerDanmakuOpacity.decode(
                                            reader,
                                            reader.uint32()
                                        )
                                        break
                                    case 14:
                                        message.scalingfactor = $root.bilibili.community.service.dm.v1.PlayerDanmakuScalingfactor.decode(
                                            reader,
                                            reader.uint32()
                                        )
                                        break
                                    case 15:
                                        message.domain = $root.bilibili.community.service.dm.v1.PlayerDanmakuDomain.decode(
                                            reader,
                                            reader.uint32()
                                        )
                                        break
                                    case 16:
                                        message.speed = $root.bilibili.community.service.dm.v1.PlayerDanmakuSpeed.decode(
                                            reader,
                                            reader.uint32()
                                        )
                                        break
                                    case 17:
                                        message.enableblocklist = $root.bilibili.community.service.dm.v1.PlayerDanmakuEnableblocklist.decode(
                                            reader,
                                            reader.uint32()
                                        )
                                        break
                                    case 18:
                                        message.inlinePlayerDanmakuSwitch = $root.bilibili.community.service.dm.v1.InlinePlayerDanmakuSwitch.decode(
                                            reader,
                                            reader.uint32()
                                        )
                                        break
                                    default:
                                        reader.skipType(tag & 7)
                                        break
                                }
                            }
                            return message
                        }

                        /**
                         * Decodes a DmPlayerConfigReq message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof bilibili.community.service.dm.v1.DmPlayerConfigReq
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {bilibili.community.service.dm.v1.DmPlayerConfigReq} DmPlayerConfigReq
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        DmPlayerConfigReq.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader)) reader = new $Reader(reader)
                            return this.decode(reader, reader.uint32())
                        }

                        /**
                         * Verifies a DmPlayerConfigReq message.
                         * @function verify
                         * @memberof bilibili.community.service.dm.v1.DmPlayerConfigReq
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        DmPlayerConfigReq.verify = function verify(message) {
                            if (typeof message !== 'object' || message === null)
                                return 'object expected'
                            if (message.ts != null && message.hasOwnProperty('ts'))
                                if (
                                    !$util.isInteger(message.ts) &&
                                    !(
                                        message.ts &&
                                        $util.isInteger(message.ts.low) &&
                                        $util.isInteger(message.ts.high)
                                    )
                                )
                                    return 'ts: integer|Long expected'
                            if (message['switch'] != null && message.hasOwnProperty('switch')) {
                                var error = $root.bilibili.community.service.dm.v1.PlayerDanmakuSwitch.verify(
                                    message['switch']
                                )
                                if (error) return 'switch.' + error
                            }
                            if (
                                message.switchSave != null &&
                                message.hasOwnProperty('switchSave')
                            ) {
                                var error = $root.bilibili.community.service.dm.v1.PlayerDanmakuSwitchSave.verify(
                                    message.switchSave
                                )
                                if (error) return 'switchSave.' + error
                            }
                            if (
                                message.useDefaultConfig != null &&
                                message.hasOwnProperty('useDefaultConfig')
                            ) {
                                var error = $root.bilibili.community.service.dm.v1.PlayerDanmakuUseDefaultConfig.verify(
                                    message.useDefaultConfig
                                )
                                if (error) return 'useDefaultConfig.' + error
                            }
                            if (
                                message.aiRecommendedSwitch != null &&
                                message.hasOwnProperty('aiRecommendedSwitch')
                            ) {
                                var error = $root.bilibili.community.service.dm.v1.PlayerDanmakuAiRecommendedSwitch.verify(
                                    message.aiRecommendedSwitch
                                )
                                if (error) return 'aiRecommendedSwitch.' + error
                            }
                            if (
                                message.aiRecommendedLevel != null &&
                                message.hasOwnProperty('aiRecommendedLevel')
                            ) {
                                var error = $root.bilibili.community.service.dm.v1.PlayerDanmakuAiRecommendedLevel.verify(
                                    message.aiRecommendedLevel
                                )
                                if (error) return 'aiRecommendedLevel.' + error
                            }
                            if (message.blocktop != null && message.hasOwnProperty('blocktop')) {
                                var error = $root.bilibili.community.service.dm.v1.PlayerDanmakuBlocktop.verify(
                                    message.blocktop
                                )
                                if (error) return 'blocktop.' + error
                            }
                            if (
                                message.blockscroll != null &&
                                message.hasOwnProperty('blockscroll')
                            ) {
                                var error = $root.bilibili.community.service.dm.v1.PlayerDanmakuBlockscroll.verify(
                                    message.blockscroll
                                )
                                if (error) return 'blockscroll.' + error
                            }
                            if (
                                message.blockbottom != null &&
                                message.hasOwnProperty('blockbottom')
                            ) {
                                var error = $root.bilibili.community.service.dm.v1.PlayerDanmakuBlockbottom.verify(
                                    message.blockbottom
                                )
                                if (error) return 'blockbottom.' + error
                            }
                            if (
                                message.blockcolorful != null &&
                                message.hasOwnProperty('blockcolorful')
                            ) {
                                var error = $root.bilibili.community.service.dm.v1.PlayerDanmakuBlockcolorful.verify(
                                    message.blockcolorful
                                )
                                if (error) return 'blockcolorful.' + error
                            }
                            if (
                                message.blockrepeat != null &&
                                message.hasOwnProperty('blockrepeat')
                            ) {
                                var error = $root.bilibili.community.service.dm.v1.PlayerDanmakuBlockrepeat.verify(
                                    message.blockrepeat
                                )
                                if (error) return 'blockrepeat.' + error
                            }
                            if (
                                message.blockspecial != null &&
                                message.hasOwnProperty('blockspecial')
                            ) {
                                var error = $root.bilibili.community.service.dm.v1.PlayerDanmakuBlockspecial.verify(
                                    message.blockspecial
                                )
                                if (error) return 'blockspecial.' + error
                            }
                            if (message.opacity != null && message.hasOwnProperty('opacity')) {
                                var error = $root.bilibili.community.service.dm.v1.PlayerDanmakuOpacity.verify(
                                    message.opacity
                                )
                                if (error) return 'opacity.' + error
                            }
                            if (
                                message.scalingfactor != null &&
                                message.hasOwnProperty('scalingfactor')
                            ) {
                                var error = $root.bilibili.community.service.dm.v1.PlayerDanmakuScalingfactor.verify(
                                    message.scalingfactor
                                )
                                if (error) return 'scalingfactor.' + error
                            }
                            if (message.domain != null && message.hasOwnProperty('domain')) {
                                var error = $root.bilibili.community.service.dm.v1.PlayerDanmakuDomain.verify(
                                    message.domain
                                )
                                if (error) return 'domain.' + error
                            }
                            if (message.speed != null && message.hasOwnProperty('speed')) {
                                var error = $root.bilibili.community.service.dm.v1.PlayerDanmakuSpeed.verify(
                                    message.speed
                                )
                                if (error) return 'speed.' + error
                            }
                            if (
                                message.enableblocklist != null &&
                                message.hasOwnProperty('enableblocklist')
                            ) {
                                var error = $root.bilibili.community.service.dm.v1.PlayerDanmakuEnableblocklist.verify(
                                    message.enableblocklist
                                )
                                if (error) return 'enableblocklist.' + error
                            }
                            if (
                                message.inlinePlayerDanmakuSwitch != null &&
                                message.hasOwnProperty('inlinePlayerDanmakuSwitch')
                            ) {
                                var error = $root.bilibili.community.service.dm.v1.InlinePlayerDanmakuSwitch.verify(
                                    message.inlinePlayerDanmakuSwitch
                                )
                                if (error) return 'inlinePlayerDanmakuSwitch.' + error
                            }
                            return null
                        }

                        /**
                         * Creates a DmPlayerConfigReq message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof bilibili.community.service.dm.v1.DmPlayerConfigReq
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {bilibili.community.service.dm.v1.DmPlayerConfigReq} DmPlayerConfigReq
                         */
                        DmPlayerConfigReq.fromObject = function fromObject(object) {
                            if (
                                object instanceof
                                $root.bilibili.community.service.dm.v1.DmPlayerConfigReq
                            )
                                return object
                            var message = new $root.bilibili.community.service.dm.v1.DmPlayerConfigReq()
                            if (object.ts != null)
                                if ($util.Long)
                                    (message.ts = $util.Long.fromValue(object.ts)).unsigned = false
                                else if (typeof object.ts === 'string')
                                    message.ts = parseInt(object.ts, 10)
                                else if (typeof object.ts === 'number') message.ts = object.ts
                                else if (typeof object.ts === 'object')
                                    message.ts = new $util.LongBits(
                                        object.ts.low >>> 0,
                                        object.ts.high >>> 0
                                    ).toNumber()
                            if (object['switch'] != null) {
                                if (typeof object['switch'] !== 'object')
                                    throw TypeError(
                                        '.bilibili.community.service.dm.v1.DmPlayerConfigReq.switch: object expected'
                                    )
                                message[
                                    'switch'
                                ] = $root.bilibili.community.service.dm.v1.PlayerDanmakuSwitch.fromObject(
                                    object['switch']
                                )
                            }
                            if (object.switchSave != null) {
                                if (typeof object.switchSave !== 'object')
                                    throw TypeError(
                                        '.bilibili.community.service.dm.v1.DmPlayerConfigReq.switchSave: object expected'
                                    )
                                message.switchSave = $root.bilibili.community.service.dm.v1.PlayerDanmakuSwitchSave.fromObject(
                                    object.switchSave
                                )
                            }
                            if (object.useDefaultConfig != null) {
                                if (typeof object.useDefaultConfig !== 'object')
                                    throw TypeError(
                                        '.bilibili.community.service.dm.v1.DmPlayerConfigReq.useDefaultConfig: object expected'
                                    )
                                message.useDefaultConfig = $root.bilibili.community.service.dm.v1.PlayerDanmakuUseDefaultConfig.fromObject(
                                    object.useDefaultConfig
                                )
                            }
                            if (object.aiRecommendedSwitch != null) {
                                if (typeof object.aiRecommendedSwitch !== 'object')
                                    throw TypeError(
                                        '.bilibili.community.service.dm.v1.DmPlayerConfigReq.aiRecommendedSwitch: object expected'
                                    )
                                message.aiRecommendedSwitch = $root.bilibili.community.service.dm.v1.PlayerDanmakuAiRecommendedSwitch.fromObject(
                                    object.aiRecommendedSwitch
                                )
                            }
                            if (object.aiRecommendedLevel != null) {
                                if (typeof object.aiRecommendedLevel !== 'object')
                                    throw TypeError(
                                        '.bilibili.community.service.dm.v1.DmPlayerConfigReq.aiRecommendedLevel: object expected'
                                    )
                                message.aiRecommendedLevel = $root.bilibili.community.service.dm.v1.PlayerDanmakuAiRecommendedLevel.fromObject(
                                    object.aiRecommendedLevel
                                )
                            }
                            if (object.blocktop != null) {
                                if (typeof object.blocktop !== 'object')
                                    throw TypeError(
                                        '.bilibili.community.service.dm.v1.DmPlayerConfigReq.blocktop: object expected'
                                    )
                                message.blocktop = $root.bilibili.community.service.dm.v1.PlayerDanmakuBlocktop.fromObject(
                                    object.blocktop
                                )
                            }
                            if (object.blockscroll != null) {
                                if (typeof object.blockscroll !== 'object')
                                    throw TypeError(
                                        '.bilibili.community.service.dm.v1.DmPlayerConfigReq.blockscroll: object expected'
                                    )
                                message.blockscroll = $root.bilibili.community.service.dm.v1.PlayerDanmakuBlockscroll.fromObject(
                                    object.blockscroll
                                )
                            }
                            if (object.blockbottom != null) {
                                if (typeof object.blockbottom !== 'object')
                                    throw TypeError(
                                        '.bilibili.community.service.dm.v1.DmPlayerConfigReq.blockbottom: object expected'
                                    )
                                message.blockbottom = $root.bilibili.community.service.dm.v1.PlayerDanmakuBlockbottom.fromObject(
                                    object.blockbottom
                                )
                            }
                            if (object.blockcolorful != null) {
                                if (typeof object.blockcolorful !== 'object')
                                    throw TypeError(
                                        '.bilibili.community.service.dm.v1.DmPlayerConfigReq.blockcolorful: object expected'
                                    )
                                message.blockcolorful = $root.bilibili.community.service.dm.v1.PlayerDanmakuBlockcolorful.fromObject(
                                    object.blockcolorful
                                )
                            }
                            if (object.blockrepeat != null) {
                                if (typeof object.blockrepeat !== 'object')
                                    throw TypeError(
                                        '.bilibili.community.service.dm.v1.DmPlayerConfigReq.blockrepeat: object expected'
                                    )
                                message.blockrepeat = $root.bilibili.community.service.dm.v1.PlayerDanmakuBlockrepeat.fromObject(
                                    object.blockrepeat
                                )
                            }
                            if (object.blockspecial != null) {
                                if (typeof object.blockspecial !== 'object')
                                    throw TypeError(
                                        '.bilibili.community.service.dm.v1.DmPlayerConfigReq.blockspecial: object expected'
                                    )
                                message.blockspecial = $root.bilibili.community.service.dm.v1.PlayerDanmakuBlockspecial.fromObject(
                                    object.blockspecial
                                )
                            }
                            if (object.opacity != null) {
                                if (typeof object.opacity !== 'object')
                                    throw TypeError(
                                        '.bilibili.community.service.dm.v1.DmPlayerConfigReq.opacity: object expected'
                                    )
                                message.opacity = $root.bilibili.community.service.dm.v1.PlayerDanmakuOpacity.fromObject(
                                    object.opacity
                                )
                            }
                            if (object.scalingfactor != null) {
                                if (typeof object.scalingfactor !== 'object')
                                    throw TypeError(
                                        '.bilibili.community.service.dm.v1.DmPlayerConfigReq.scalingfactor: object expected'
                                    )
                                message.scalingfactor = $root.bilibili.community.service.dm.v1.PlayerDanmakuScalingfactor.fromObject(
                                    object.scalingfactor
                                )
                            }
                            if (object.domain != null) {
                                if (typeof object.domain !== 'object')
                                    throw TypeError(
                                        '.bilibili.community.service.dm.v1.DmPlayerConfigReq.domain: object expected'
                                    )
                                message.domain = $root.bilibili.community.service.dm.v1.PlayerDanmakuDomain.fromObject(
                                    object.domain
                                )
                            }
                            if (object.speed != null) {
                                if (typeof object.speed !== 'object')
                                    throw TypeError(
                                        '.bilibili.community.service.dm.v1.DmPlayerConfigReq.speed: object expected'
                                    )
                                message.speed = $root.bilibili.community.service.dm.v1.PlayerDanmakuSpeed.fromObject(
                                    object.speed
                                )
                            }
                            if (object.enableblocklist != null) {
                                if (typeof object.enableblocklist !== 'object')
                                    throw TypeError(
                                        '.bilibili.community.service.dm.v1.DmPlayerConfigReq.enableblocklist: object expected'
                                    )
                                message.enableblocklist = $root.bilibili.community.service.dm.v1.PlayerDanmakuEnableblocklist.fromObject(
                                    object.enableblocklist
                                )
                            }
                            if (object.inlinePlayerDanmakuSwitch != null) {
                                if (typeof object.inlinePlayerDanmakuSwitch !== 'object')
                                    throw TypeError(
                                        '.bilibili.community.service.dm.v1.DmPlayerConfigReq.inlinePlayerDanmakuSwitch: object expected'
                                    )
                                message.inlinePlayerDanmakuSwitch = $root.bilibili.community.service.dm.v1.InlinePlayerDanmakuSwitch.fromObject(
                                    object.inlinePlayerDanmakuSwitch
                                )
                            }
                            return message
                        }

                        /**
                         * Creates a plain object from a DmPlayerConfigReq message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof bilibili.community.service.dm.v1.DmPlayerConfigReq
                         * @static
                         * @param {bilibili.community.service.dm.v1.DmPlayerConfigReq} message DmPlayerConfigReq
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        DmPlayerConfigReq.toObject = function toObject(message, options) {
                            if (!options) options = {}
                            var object = {}
                            if (options.defaults) {
                                if ($util.Long) {
                                    var long = new $util.Long(0, 0, false)
                                    object.ts =
                                        options.longs === String
                                            ? long.toString()
                                            : options.longs === Number
                                            ? long.toNumber()
                                            : long
                                } else object.ts = options.longs === String ? '0' : 0
                                object['switch'] = null
                                object.switchSave = null
                                object.useDefaultConfig = null
                                object.aiRecommendedSwitch = null
                                object.aiRecommendedLevel = null
                                object.blocktop = null
                                object.blockscroll = null
                                object.blockbottom = null
                                object.blockcolorful = null
                                object.blockrepeat = null
                                object.blockspecial = null
                                object.opacity = null
                                object.scalingfactor = null
                                object.domain = null
                                object.speed = null
                                object.enableblocklist = null
                                object.inlinePlayerDanmakuSwitch = null
                            }
                            if (message.ts != null && message.hasOwnProperty('ts'))
                                if (typeof message.ts === 'number')
                                    object.ts =
                                        options.longs === String ? String(message.ts) : message.ts
                                else
                                    object.ts =
                                        options.longs === String
                                            ? $util.Long.prototype.toString.call(message.ts)
                                            : options.longs === Number
                                            ? new $util.LongBits(
                                                  message.ts.low >>> 0,
                                                  message.ts.high >>> 0
                                              ).toNumber()
                                            : message.ts
                            if (message['switch'] != null && message.hasOwnProperty('switch'))
                                object[
                                    'switch'
                                ] = $root.bilibili.community.service.dm.v1.PlayerDanmakuSwitch.toObject(
                                    message['switch'],
                                    options
                                )
                            if (message.switchSave != null && message.hasOwnProperty('switchSave'))
                                object.switchSave = $root.bilibili.community.service.dm.v1.PlayerDanmakuSwitchSave.toObject(
                                    message.switchSave,
                                    options
                                )
                            if (
                                message.useDefaultConfig != null &&
                                message.hasOwnProperty('useDefaultConfig')
                            )
                                object.useDefaultConfig = $root.bilibili.community.service.dm.v1.PlayerDanmakuUseDefaultConfig.toObject(
                                    message.useDefaultConfig,
                                    options
                                )
                            if (
                                message.aiRecommendedSwitch != null &&
                                message.hasOwnProperty('aiRecommendedSwitch')
                            )
                                object.aiRecommendedSwitch = $root.bilibili.community.service.dm.v1.PlayerDanmakuAiRecommendedSwitch.toObject(
                                    message.aiRecommendedSwitch,
                                    options
                                )
                            if (
                                message.aiRecommendedLevel != null &&
                                message.hasOwnProperty('aiRecommendedLevel')
                            )
                                object.aiRecommendedLevel = $root.bilibili.community.service.dm.v1.PlayerDanmakuAiRecommendedLevel.toObject(
                                    message.aiRecommendedLevel,
                                    options
                                )
                            if (message.blocktop != null && message.hasOwnProperty('blocktop'))
                                object.blocktop = $root.bilibili.community.service.dm.v1.PlayerDanmakuBlocktop.toObject(
                                    message.blocktop,
                                    options
                                )
                            if (
                                message.blockscroll != null &&
                                message.hasOwnProperty('blockscroll')
                            )
                                object.blockscroll = $root.bilibili.community.service.dm.v1.PlayerDanmakuBlockscroll.toObject(
                                    message.blockscroll,
                                    options
                                )
                            if (
                                message.blockbottom != null &&
                                message.hasOwnProperty('blockbottom')
                            )
                                object.blockbottom = $root.bilibili.community.service.dm.v1.PlayerDanmakuBlockbottom.toObject(
                                    message.blockbottom,
                                    options
                                )
                            if (
                                message.blockcolorful != null &&
                                message.hasOwnProperty('blockcolorful')
                            )
                                object.blockcolorful = $root.bilibili.community.service.dm.v1.PlayerDanmakuBlockcolorful.toObject(
                                    message.blockcolorful,
                                    options
                                )
                            if (
                                message.blockrepeat != null &&
                                message.hasOwnProperty('blockrepeat')
                            )
                                object.blockrepeat = $root.bilibili.community.service.dm.v1.PlayerDanmakuBlockrepeat.toObject(
                                    message.blockrepeat,
                                    options
                                )
                            if (
                                message.blockspecial != null &&
                                message.hasOwnProperty('blockspecial')
                            )
                                object.blockspecial = $root.bilibili.community.service.dm.v1.PlayerDanmakuBlockspecial.toObject(
                                    message.blockspecial,
                                    options
                                )
                            if (message.opacity != null && message.hasOwnProperty('opacity'))
                                object.opacity = $root.bilibili.community.service.dm.v1.PlayerDanmakuOpacity.toObject(
                                    message.opacity,
                                    options
                                )
                            if (
                                message.scalingfactor != null &&
                                message.hasOwnProperty('scalingfactor')
                            )
                                object.scalingfactor = $root.bilibili.community.service.dm.v1.PlayerDanmakuScalingfactor.toObject(
                                    message.scalingfactor,
                                    options
                                )
                            if (message.domain != null && message.hasOwnProperty('domain'))
                                object.domain = $root.bilibili.community.service.dm.v1.PlayerDanmakuDomain.toObject(
                                    message.domain,
                                    options
                                )
                            if (message.speed != null && message.hasOwnProperty('speed'))
                                object.speed = $root.bilibili.community.service.dm.v1.PlayerDanmakuSpeed.toObject(
                                    message.speed,
                                    options
                                )
                            if (
                                message.enableblocklist != null &&
                                message.hasOwnProperty('enableblocklist')
                            )
                                object.enableblocklist = $root.bilibili.community.service.dm.v1.PlayerDanmakuEnableblocklist.toObject(
                                    message.enableblocklist,
                                    options
                                )
                            if (
                                message.inlinePlayerDanmakuSwitch != null &&
                                message.hasOwnProperty('inlinePlayerDanmakuSwitch')
                            )
                                object.inlinePlayerDanmakuSwitch = $root.bilibili.community.service.dm.v1.InlinePlayerDanmakuSwitch.toObject(
                                    message.inlinePlayerDanmakuSwitch,
                                    options
                                )
                            return object
                        }

                        /**
                         * Converts this DmPlayerConfigReq to JSON.
                         * @function toJSON
                         * @memberof bilibili.community.service.dm.v1.DmPlayerConfigReq
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        DmPlayerConfigReq.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
                        }

                        return DmPlayerConfigReq
                    })()

                    v1.Response = (function () {
                        /**
                         * Properties of a Response.
                         * @memberof bilibili.community.service.dm.v1
                         * @interface IResponse
                         * @property {number|null} [code] Response code
                         * @property {string|null} [message] Response message
                         */

                        /**
                         * Constructs a new Response.
                         * @memberof bilibili.community.service.dm.v1
                         * @classdesc Represents a Response.
                         * @implements IResponse
                         * @constructor
                         * @param {bilibili.community.service.dm.v1.IResponse=} [properties] Properties to set
                         */
                        function Response(properties) {
                            if (properties)
                                for (
                                    var keys = Object.keys(properties), i = 0;
                                    i < keys.length;
                                    ++i
                                )
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]]
                        }

                        /**
                         * Response code.
                         * @member {number} code
                         * @memberof bilibili.community.service.dm.v1.Response
                         * @instance
                         */
                        Response.prototype.code = 0

                        /**
                         * Response message.
                         * @member {string} message
                         * @memberof bilibili.community.service.dm.v1.Response
                         * @instance
                         */
                        Response.prototype.message = ''

                        /**
                         * Creates a new Response instance using the specified properties.
                         * @function create
                         * @memberof bilibili.community.service.dm.v1.Response
                         * @static
                         * @param {bilibili.community.service.dm.v1.IResponse=} [properties] Properties to set
                         * @returns {bilibili.community.service.dm.v1.Response} Response instance
                         */
                        Response.create = function create(properties) {
                            return new Response(properties)
                        }

                        /**
                         * Encodes the specified Response message. Does not implicitly {@link bilibili.community.service.dm.v1.Response.verify|verify} messages.
                         * @function encode
                         * @memberof bilibili.community.service.dm.v1.Response
                         * @static
                         * @param {bilibili.community.service.dm.v1.IResponse} message Response message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        Response.encode = function encode(message, writer) {
                            if (!writer) writer = $Writer.create()
                            if (message.code != null && Object.hasOwnProperty.call(message, 'code'))
                                writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.code)
                            if (
                                message.message != null &&
                                Object.hasOwnProperty.call(message, 'message')
                            )
                                writer.uint32(/* id 2, wireType 2 =*/ 18).string(message.message)
                            return writer
                        }

                        /**
                         * Encodes the specified Response message, length delimited. Does not implicitly {@link bilibili.community.service.dm.v1.Response.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof bilibili.community.service.dm.v1.Response
                         * @static
                         * @param {bilibili.community.service.dm.v1.IResponse} message Response message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        Response.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim()
                        }

                        /**
                         * Decodes a Response message from the specified reader or buffer.
                         * @function decode
                         * @memberof bilibili.community.service.dm.v1.Response
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {bilibili.community.service.dm.v1.Response} Response
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        Response.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader)) reader = $Reader.create(reader)
                            var end = length === undefined ? reader.len : reader.pos + length,
                                message = new $root.bilibili.community.service.dm.v1.Response()
                            while (reader.pos < end) {
                                var tag = reader.uint32()
                                switch (tag >>> 3) {
                                    case 1:
                                        message.code = reader.int32()
                                        break
                                    case 2:
                                        message.message = reader.string()
                                        break
                                    default:
                                        reader.skipType(tag & 7)
                                        break
                                }
                            }
                            return message
                        }

                        /**
                         * Decodes a Response message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof bilibili.community.service.dm.v1.Response
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {bilibili.community.service.dm.v1.Response} Response
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        Response.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader)) reader = new $Reader(reader)
                            return this.decode(reader, reader.uint32())
                        }

                        /**
                         * Verifies a Response message.
                         * @function verify
                         * @memberof bilibili.community.service.dm.v1.Response
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        Response.verify = function verify(message) {
                            if (typeof message !== 'object' || message === null)
                                return 'object expected'
                            if (message.code != null && message.hasOwnProperty('code'))
                                if (!$util.isInteger(message.code)) return 'code: integer expected'
                            if (message.message != null && message.hasOwnProperty('message'))
                                if (!$util.isString(message.message))
                                    return 'message: string expected'
                            return null
                        }

                        /**
                         * Creates a Response message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof bilibili.community.service.dm.v1.Response
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {bilibili.community.service.dm.v1.Response} Response
                         */
                        Response.fromObject = function fromObject(object) {
                            if (object instanceof $root.bilibili.community.service.dm.v1.Response)
                                return object
                            var message = new $root.bilibili.community.service.dm.v1.Response()
                            if (object.code != null) message.code = object.code | 0
                            if (object.message != null) message.message = String(object.message)
                            return message
                        }

                        /**
                         * Creates a plain object from a Response message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof bilibili.community.service.dm.v1.Response
                         * @static
                         * @param {bilibili.community.service.dm.v1.Response} message Response
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        Response.toObject = function toObject(message, options) {
                            if (!options) options = {}
                            var object = {}
                            if (options.defaults) {
                                object.code = 0
                                object.message = ''
                            }
                            if (message.code != null && message.hasOwnProperty('code'))
                                object.code = message.code
                            if (message.message != null && message.hasOwnProperty('message'))
                                object.message = message.message
                            return object
                        }

                        /**
                         * Converts this Response to JSON.
                         * @function toJSON
                         * @memberof bilibili.community.service.dm.v1.Response
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        Response.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
                        }

                        return Response
                    })()

                    v1.DmSegMobileReq = (function () {
                        /**
                         * Properties of a DmSegMobileReq.
                         * @memberof bilibili.community.service.dm.v1
                         * @interface IDmSegMobileReq
                         * @property {number|Long|null} [pid] DmSegMobileReq pid
                         * @property {number|Long|null} [oid] DmSegMobileReq oid
                         * @property {number|null} [type] DmSegMobileReq type
                         * @property {number|Long|null} [segmentIndex] DmSegMobileReq segmentIndex
                         * @property {number|null} [teenagersMode] DmSegMobileReq teenagersMode
                         */

                        /**
                         * Constructs a new DmSegMobileReq.
                         * @memberof bilibili.community.service.dm.v1
                         * @classdesc Represents a DmSegMobileReq.
                         * @implements IDmSegMobileReq
                         * @constructor
                         * @param {bilibili.community.service.dm.v1.IDmSegMobileReq=} [properties] Properties to set
                         */
                        function DmSegMobileReq(properties) {
                            if (properties)
                                for (
                                    var keys = Object.keys(properties), i = 0;
                                    i < keys.length;
                                    ++i
                                )
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]]
                        }

                        /**
                         * DmSegMobileReq pid.
                         * @member {number|Long} pid
                         * @memberof bilibili.community.service.dm.v1.DmSegMobileReq
                         * @instance
                         */
                        DmSegMobileReq.prototype.pid = $util.Long
                            ? $util.Long.fromBits(0, 0, false)
                            : 0

                        /**
                         * DmSegMobileReq oid.
                         * @member {number|Long} oid
                         * @memberof bilibili.community.service.dm.v1.DmSegMobileReq
                         * @instance
                         */
                        DmSegMobileReq.prototype.oid = $util.Long
                            ? $util.Long.fromBits(0, 0, false)
                            : 0

                        /**
                         * DmSegMobileReq type.
                         * @member {number} type
                         * @memberof bilibili.community.service.dm.v1.DmSegMobileReq
                         * @instance
                         */
                        DmSegMobileReq.prototype.type = 0

                        /**
                         * DmSegMobileReq segmentIndex.
                         * @member {number|Long} segmentIndex
                         * @memberof bilibili.community.service.dm.v1.DmSegMobileReq
                         * @instance
                         */
                        DmSegMobileReq.prototype.segmentIndex = $util.Long
                            ? $util.Long.fromBits(0, 0, false)
                            : 0

                        /**
                         * DmSegMobileReq teenagersMode.
                         * @member {number} teenagersMode
                         * @memberof bilibili.community.service.dm.v1.DmSegMobileReq
                         * @instance
                         */
                        DmSegMobileReq.prototype.teenagersMode = 0

                        /**
                         * Creates a new DmSegMobileReq instance using the specified properties.
                         * @function create
                         * @memberof bilibili.community.service.dm.v1.DmSegMobileReq
                         * @static
                         * @param {bilibili.community.service.dm.v1.IDmSegMobileReq=} [properties] Properties to set
                         * @returns {bilibili.community.service.dm.v1.DmSegMobileReq} DmSegMobileReq instance
                         */
                        DmSegMobileReq.create = function create(properties) {
                            return new DmSegMobileReq(properties)
                        }

                        /**
                         * Encodes the specified DmSegMobileReq message. Does not implicitly {@link bilibili.community.service.dm.v1.DmSegMobileReq.verify|verify} messages.
                         * @function encode
                         * @memberof bilibili.community.service.dm.v1.DmSegMobileReq
                         * @static
                         * @param {bilibili.community.service.dm.v1.IDmSegMobileReq} message DmSegMobileReq message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        DmSegMobileReq.encode = function encode(message, writer) {
                            if (!writer) writer = $Writer.create()
                            if (message.pid != null && Object.hasOwnProperty.call(message, 'pid'))
                                writer.uint32(/* id 1, wireType 0 =*/ 8).int64(message.pid)
                            if (message.oid != null && Object.hasOwnProperty.call(message, 'oid'))
                                writer.uint32(/* id 2, wireType 0 =*/ 16).int64(message.oid)
                            if (message.type != null && Object.hasOwnProperty.call(message, 'type'))
                                writer.uint32(/* id 3, wireType 0 =*/ 24).int32(message.type)
                            if (
                                message.segmentIndex != null &&
                                Object.hasOwnProperty.call(message, 'segmentIndex')
                            )
                                writer
                                    .uint32(/* id 4, wireType 0 =*/ 32)
                                    .int64(message.segmentIndex)
                            if (
                                message.teenagersMode != null &&
                                Object.hasOwnProperty.call(message, 'teenagersMode')
                            )
                                writer
                                    .uint32(/* id 5, wireType 0 =*/ 40)
                                    .int32(message.teenagersMode)
                            return writer
                        }

                        /**
                         * Encodes the specified DmSegMobileReq message, length delimited. Does not implicitly {@link bilibili.community.service.dm.v1.DmSegMobileReq.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof bilibili.community.service.dm.v1.DmSegMobileReq
                         * @static
                         * @param {bilibili.community.service.dm.v1.IDmSegMobileReq} message DmSegMobileReq message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        DmSegMobileReq.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim()
                        }

                        /**
                         * Decodes a DmSegMobileReq message from the specified reader or buffer.
                         * @function decode
                         * @memberof bilibili.community.service.dm.v1.DmSegMobileReq
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {bilibili.community.service.dm.v1.DmSegMobileReq} DmSegMobileReq
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        DmSegMobileReq.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader)) reader = $Reader.create(reader)
                            var end = length === undefined ? reader.len : reader.pos + length,
                                message = new $root.bilibili.community.service.dm.v1.DmSegMobileReq()
                            while (reader.pos < end) {
                                var tag = reader.uint32()
                                switch (tag >>> 3) {
                                    case 1:
                                        message.pid = reader.int64()
                                        break
                                    case 2:
                                        message.oid = reader.int64()
                                        break
                                    case 3:
                                        message.type = reader.int32()
                                        break
                                    case 4:
                                        message.segmentIndex = reader.int64()
                                        break
                                    case 5:
                                        message.teenagersMode = reader.int32()
                                        break
                                    default:
                                        reader.skipType(tag & 7)
                                        break
                                }
                            }
                            return message
                        }

                        /**
                         * Decodes a DmSegMobileReq message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof bilibili.community.service.dm.v1.DmSegMobileReq
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {bilibili.community.service.dm.v1.DmSegMobileReq} DmSegMobileReq
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        DmSegMobileReq.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader)) reader = new $Reader(reader)
                            return this.decode(reader, reader.uint32())
                        }

                        /**
                         * Verifies a DmSegMobileReq message.
                         * @function verify
                         * @memberof bilibili.community.service.dm.v1.DmSegMobileReq
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        DmSegMobileReq.verify = function verify(message) {
                            if (typeof message !== 'object' || message === null)
                                return 'object expected'
                            if (message.pid != null && message.hasOwnProperty('pid'))
                                if (
                                    !$util.isInteger(message.pid) &&
                                    !(
                                        message.pid &&
                                        $util.isInteger(message.pid.low) &&
                                        $util.isInteger(message.pid.high)
                                    )
                                )
                                    return 'pid: integer|Long expected'
                            if (message.oid != null && message.hasOwnProperty('oid'))
                                if (
                                    !$util.isInteger(message.oid) &&
                                    !(
                                        message.oid &&
                                        $util.isInteger(message.oid.low) &&
                                        $util.isInteger(message.oid.high)
                                    )
                                )
                                    return 'oid: integer|Long expected'
                            if (message.type != null && message.hasOwnProperty('type'))
                                if (!$util.isInteger(message.type)) return 'type: integer expected'
                            if (
                                message.segmentIndex != null &&
                                message.hasOwnProperty('segmentIndex')
                            )
                                if (
                                    !$util.isInteger(message.segmentIndex) &&
                                    !(
                                        message.segmentIndex &&
                                        $util.isInteger(message.segmentIndex.low) &&
                                        $util.isInteger(message.segmentIndex.high)
                                    )
                                )
                                    return 'segmentIndex: integer|Long expected'
                            if (
                                message.teenagersMode != null &&
                                message.hasOwnProperty('teenagersMode')
                            )
                                if (!$util.isInteger(message.teenagersMode))
                                    return 'teenagersMode: integer expected'
                            return null
                        }

                        /**
                         * Creates a DmSegMobileReq message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof bilibili.community.service.dm.v1.DmSegMobileReq
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {bilibili.community.service.dm.v1.DmSegMobileReq} DmSegMobileReq
                         */
                        DmSegMobileReq.fromObject = function fromObject(object) {
                            if (
                                object instanceof
                                $root.bilibili.community.service.dm.v1.DmSegMobileReq
                            )
                                return object
                            var message = new $root.bilibili.community.service.dm.v1.DmSegMobileReq()
                            if (object.pid != null)
                                if ($util.Long)
                                    (message.pid = $util.Long.fromValue(
                                        object.pid
                                    )).unsigned = false
                                else if (typeof object.pid === 'string')
                                    message.pid = parseInt(object.pid, 10)
                                else if (typeof object.pid === 'number') message.pid = object.pid
                                else if (typeof object.pid === 'object')
                                    message.pid = new $util.LongBits(
                                        object.pid.low >>> 0,
                                        object.pid.high >>> 0
                                    ).toNumber()
                            if (object.oid != null)
                                if ($util.Long)
                                    (message.oid = $util.Long.fromValue(
                                        object.oid
                                    )).unsigned = false
                                else if (typeof object.oid === 'string')
                                    message.oid = parseInt(object.oid, 10)
                                else if (typeof object.oid === 'number') message.oid = object.oid
                                else if (typeof object.oid === 'object')
                                    message.oid = new $util.LongBits(
                                        object.oid.low >>> 0,
                                        object.oid.high >>> 0
                                    ).toNumber()
                            if (object.type != null) message.type = object.type | 0
                            if (object.segmentIndex != null)
                                if ($util.Long)
                                    (message.segmentIndex = $util.Long.fromValue(
                                        object.segmentIndex
                                    )).unsigned = false
                                else if (typeof object.segmentIndex === 'string')
                                    message.segmentIndex = parseInt(object.segmentIndex, 10)
                                else if (typeof object.segmentIndex === 'number')
                                    message.segmentIndex = object.segmentIndex
                                else if (typeof object.segmentIndex === 'object')
                                    message.segmentIndex = new $util.LongBits(
                                        object.segmentIndex.low >>> 0,
                                        object.segmentIndex.high >>> 0
                                    ).toNumber()
                            if (object.teenagersMode != null)
                                message.teenagersMode = object.teenagersMode | 0
                            return message
                        }

                        /**
                         * Creates a plain object from a DmSegMobileReq message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof bilibili.community.service.dm.v1.DmSegMobileReq
                         * @static
                         * @param {bilibili.community.service.dm.v1.DmSegMobileReq} message DmSegMobileReq
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        DmSegMobileReq.toObject = function toObject(message, options) {
                            if (!options) options = {}
                            var object = {}
                            if (options.defaults) {
                                if ($util.Long) {
                                    var long = new $util.Long(0, 0, false)
                                    object.pid =
                                        options.longs === String
                                            ? long.toString()
                                            : options.longs === Number
                                            ? long.toNumber()
                                            : long
                                } else object.pid = options.longs === String ? '0' : 0
                                if ($util.Long) {
                                    var long = new $util.Long(0, 0, false)
                                    object.oid =
                                        options.longs === String
                                            ? long.toString()
                                            : options.longs === Number
                                            ? long.toNumber()
                                            : long
                                } else object.oid = options.longs === String ? '0' : 0
                                object.type = 0
                                if ($util.Long) {
                                    var long = new $util.Long(0, 0, false)
                                    object.segmentIndex =
                                        options.longs === String
                                            ? long.toString()
                                            : options.longs === Number
                                            ? long.toNumber()
                                            : long
                                } else object.segmentIndex = options.longs === String ? '0' : 0
                                object.teenagersMode = 0
                            }
                            if (message.pid != null && message.hasOwnProperty('pid'))
                                if (typeof message.pid === 'number')
                                    object.pid =
                                        options.longs === String ? String(message.pid) : message.pid
                                else
                                    object.pid =
                                        options.longs === String
                                            ? $util.Long.prototype.toString.call(message.pid)
                                            : options.longs === Number
                                            ? new $util.LongBits(
                                                  message.pid.low >>> 0,
                                                  message.pid.high >>> 0
                                              ).toNumber()
                                            : message.pid
                            if (message.oid != null && message.hasOwnProperty('oid'))
                                if (typeof message.oid === 'number')
                                    object.oid =
                                        options.longs === String ? String(message.oid) : message.oid
                                else
                                    object.oid =
                                        options.longs === String
                                            ? $util.Long.prototype.toString.call(message.oid)
                                            : options.longs === Number
                                            ? new $util.LongBits(
                                                  message.oid.low >>> 0,
                                                  message.oid.high >>> 0
                                              ).toNumber()
                                            : message.oid
                            if (message.type != null && message.hasOwnProperty('type'))
                                object.type = message.type
                            if (
                                message.segmentIndex != null &&
                                message.hasOwnProperty('segmentIndex')
                            )
                                if (typeof message.segmentIndex === 'number')
                                    object.segmentIndex =
                                        options.longs === String
                                            ? String(message.segmentIndex)
                                            : message.segmentIndex
                                else
                                    object.segmentIndex =
                                        options.longs === String
                                            ? $util.Long.prototype.toString.call(
                                                  message.segmentIndex
                                              )
                                            : options.longs === Number
                                            ? new $util.LongBits(
                                                  message.segmentIndex.low >>> 0,
                                                  message.segmentIndex.high >>> 0
                                              ).toNumber()
                                            : message.segmentIndex
                            if (
                                message.teenagersMode != null &&
                                message.hasOwnProperty('teenagersMode')
                            )
                                object.teenagersMode = message.teenagersMode
                            return object
                        }

                        /**
                         * Converts this DmSegMobileReq to JSON.
                         * @function toJSON
                         * @memberof bilibili.community.service.dm.v1.DmSegMobileReq
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        DmSegMobileReq.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
                        }

                        return DmSegMobileReq
                    })()

                    v1.DmSegMobileReply = (function () {
                        /**
                         * Properties of a DmSegMobileReply.
                         * @memberof bilibili.community.service.dm.v1
                         * @interface IDmSegMobileReply
                         * @property {Array.<bilibili.community.service.dm.v1.IDanmakuElem>|null} [elems] DmSegMobileReply elems
                         * @property {number|null} [state] DmSegMobileReply state
                         * @property {bilibili.community.service.dm.v1.IDanmakuAIFlag|null} [aiFlag] DmSegMobileReply aiFlag
                         */

                        /**
                         * Constructs a new DmSegMobileReply.
                         * @memberof bilibili.community.service.dm.v1
                         * @classdesc Represents a DmSegMobileReply.
                         * @implements IDmSegMobileReply
                         * @constructor
                         * @param {bilibili.community.service.dm.v1.IDmSegMobileReply=} [properties] Properties to set
                         */
                        function DmSegMobileReply(properties) {
                            this.elems = []
                            if (properties)
                                for (
                                    var keys = Object.keys(properties), i = 0;
                                    i < keys.length;
                                    ++i
                                )
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]]
                        }

                        /**
                         * DmSegMobileReply elems.
                         * @member {Array.<bilibili.community.service.dm.v1.IDanmakuElem>} elems
                         * @memberof bilibili.community.service.dm.v1.DmSegMobileReply
                         * @instance
                         */
                        DmSegMobileReply.prototype.elems = $util.emptyArray

                        /**
                         * DmSegMobileReply state.
                         * @member {number} state
                         * @memberof bilibili.community.service.dm.v1.DmSegMobileReply
                         * @instance
                         */
                        DmSegMobileReply.prototype.state = 0

                        /**
                         * DmSegMobileReply aiFlag.
                         * @member {bilibili.community.service.dm.v1.IDanmakuAIFlag|null|undefined} aiFlag
                         * @memberof bilibili.community.service.dm.v1.DmSegMobileReply
                         * @instance
                         */
                        DmSegMobileReply.prototype.aiFlag = null

                        /**
                         * Creates a new DmSegMobileReply instance using the specified properties.
                         * @function create
                         * @memberof bilibili.community.service.dm.v1.DmSegMobileReply
                         * @static
                         * @param {bilibili.community.service.dm.v1.IDmSegMobileReply=} [properties] Properties to set
                         * @returns {bilibili.community.service.dm.v1.DmSegMobileReply} DmSegMobileReply instance
                         */
                        DmSegMobileReply.create = function create(properties) {
                            return new DmSegMobileReply(properties)
                        }

                        /**
                         * Encodes the specified DmSegMobileReply message. Does not implicitly {@link bilibili.community.service.dm.v1.DmSegMobileReply.verify|verify} messages.
                         * @function encode
                         * @memberof bilibili.community.service.dm.v1.DmSegMobileReply
                         * @static
                         * @param {bilibili.community.service.dm.v1.IDmSegMobileReply} message DmSegMobileReply message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        DmSegMobileReply.encode = function encode(message, writer) {
                            if (!writer) writer = $Writer.create()
                            if (message.elems != null && message.elems.length)
                                for (var i = 0; i < message.elems.length; ++i)
                                    $root.bilibili.community.service.dm.v1.DanmakuElem.encode(
                                        message.elems[i],
                                        writer.uint32(/* id 1, wireType 2 =*/ 10).fork()
                                    ).ldelim()
                            if (
                                message.state != null &&
                                Object.hasOwnProperty.call(message, 'state')
                            )
                                writer.uint32(/* id 2, wireType 0 =*/ 16).int32(message.state)
                            if (
                                message.aiFlag != null &&
                                Object.hasOwnProperty.call(message, 'aiFlag')
                            )
                                $root.bilibili.community.service.dm.v1.DanmakuAIFlag.encode(
                                    message.aiFlag,
                                    writer.uint32(/* id 3, wireType 2 =*/ 26).fork()
                                ).ldelim()
                            return writer
                        }

                        /**
                         * Encodes the specified DmSegMobileReply message, length delimited. Does not implicitly {@link bilibili.community.service.dm.v1.DmSegMobileReply.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof bilibili.community.service.dm.v1.DmSegMobileReply
                         * @static
                         * @param {bilibili.community.service.dm.v1.IDmSegMobileReply} message DmSegMobileReply message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        DmSegMobileReply.encodeDelimited = function encodeDelimited(
                            message,
                            writer
                        ) {
                            return this.encode(message, writer).ldelim()
                        }

                        /**
                         * Decodes a DmSegMobileReply message from the specified reader or buffer.
                         * @function decode
                         * @memberof bilibili.community.service.dm.v1.DmSegMobileReply
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {bilibili.community.service.dm.v1.DmSegMobileReply} DmSegMobileReply
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        DmSegMobileReply.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader)) reader = $Reader.create(reader)
                            var end = length === undefined ? reader.len : reader.pos + length,
                                message = new $root.bilibili.community.service.dm.v1.DmSegMobileReply()
                            while (reader.pos < end) {
                                var tag = reader.uint32()
                                switch (tag >>> 3) {
                                    case 1:
                                        if (!(message.elems && message.elems.length))
                                            message.elems = []
                                        message.elems.push(
                                            $root.bilibili.community.service.dm.v1.DanmakuElem.decode(
                                                reader,
                                                reader.uint32()
                                            )
                                        )
                                        break
                                    case 2:
                                        message.state = reader.int32()
                                        break
                                    case 3:
                                        message.aiFlag = $root.bilibili.community.service.dm.v1.DanmakuAIFlag.decode(
                                            reader,
                                            reader.uint32()
                                        )
                                        break
                                    default:
                                        reader.skipType(tag & 7)
                                        break
                                }
                            }
                            return message
                        }

                        /**
                         * Decodes a DmSegMobileReply message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof bilibili.community.service.dm.v1.DmSegMobileReply
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {bilibili.community.service.dm.v1.DmSegMobileReply} DmSegMobileReply
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        DmSegMobileReply.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader)) reader = new $Reader(reader)
                            return this.decode(reader, reader.uint32())
                        }

                        /**
                         * Verifies a DmSegMobileReply message.
                         * @function verify
                         * @memberof bilibili.community.service.dm.v1.DmSegMobileReply
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        DmSegMobileReply.verify = function verify(message) {
                            if (typeof message !== 'object' || message === null)
                                return 'object expected'
                            if (message.elems != null && message.hasOwnProperty('elems')) {
                                if (!Array.isArray(message.elems)) return 'elems: array expected'
                                for (var i = 0; i < message.elems.length; ++i) {
                                    var error = $root.bilibili.community.service.dm.v1.DanmakuElem.verify(
                                        message.elems[i]
                                    )
                                    if (error) return 'elems.' + error
                                }
                            }
                            if (message.state != null && message.hasOwnProperty('state'))
                                if (!$util.isInteger(message.state))
                                    return 'state: integer expected'
                            if (message.aiFlag != null && message.hasOwnProperty('aiFlag')) {
                                var error = $root.bilibili.community.service.dm.v1.DanmakuAIFlag.verify(
                                    message.aiFlag
                                )
                                if (error) return 'aiFlag.' + error
                            }
                            return null
                        }

                        /**
                         * Creates a DmSegMobileReply message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof bilibili.community.service.dm.v1.DmSegMobileReply
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {bilibili.community.service.dm.v1.DmSegMobileReply} DmSegMobileReply
                         */
                        DmSegMobileReply.fromObject = function fromObject(object) {
                            if (
                                object instanceof
                                $root.bilibili.community.service.dm.v1.DmSegMobileReply
                            )
                                return object
                            var message = new $root.bilibili.community.service.dm.v1.DmSegMobileReply()
                            if (object.elems) {
                                if (!Array.isArray(object.elems))
                                    throw TypeError(
                                        '.bilibili.community.service.dm.v1.DmSegMobileReply.elems: array expected'
                                    )
                                message.elems = []
                                for (var i = 0; i < object.elems.length; ++i) {
                                    if (typeof object.elems[i] !== 'object')
                                        throw TypeError(
                                            '.bilibili.community.service.dm.v1.DmSegMobileReply.elems: object expected'
                                        )
                                    message.elems[
                                        i
                                    ] = $root.bilibili.community.service.dm.v1.DanmakuElem.fromObject(
                                        object.elems[i]
                                    )
                                }
                            }
                            if (object.state != null) message.state = object.state | 0
                            if (object.aiFlag != null) {
                                if (typeof object.aiFlag !== 'object')
                                    throw TypeError(
                                        '.bilibili.community.service.dm.v1.DmSegMobileReply.aiFlag: object expected'
                                    )
                                message.aiFlag = $root.bilibili.community.service.dm.v1.DanmakuAIFlag.fromObject(
                                    object.aiFlag
                                )
                            }
                            return message
                        }

                        /**
                         * Creates a plain object from a DmSegMobileReply message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof bilibili.community.service.dm.v1.DmSegMobileReply
                         * @static
                         * @param {bilibili.community.service.dm.v1.DmSegMobileReply} message DmSegMobileReply
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        DmSegMobileReply.toObject = function toObject(message, options) {
                            if (!options) options = {}
                            var object = {}
                            if (options.arrays || options.defaults) object.elems = []
                            if (options.defaults) {
                                object.state = 0
                                object.aiFlag = null
                            }
                            if (message.elems && message.elems.length) {
                                object.elems = []
                                for (var j = 0; j < message.elems.length; ++j)
                                    object.elems[
                                        j
                                    ] = $root.bilibili.community.service.dm.v1.DanmakuElem.toObject(
                                        message.elems[j],
                                        options
                                    )
                            }
                            if (message.state != null && message.hasOwnProperty('state'))
                                object.state = message.state
                            if (message.aiFlag != null && message.hasOwnProperty('aiFlag'))
                                object.aiFlag = $root.bilibili.community.service.dm.v1.DanmakuAIFlag.toObject(
                                    message.aiFlag,
                                    options
                                )
                            return object
                        }

                        /**
                         * Converts this DmSegMobileReply to JSON.
                         * @function toJSON
                         * @memberof bilibili.community.service.dm.v1.DmSegMobileReply
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        DmSegMobileReply.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
                        }

                        return DmSegMobileReply
                    })()

                    v1.DmViewReq = (function () {
                        /**
                         * Properties of a DmViewReq.
                         * @memberof bilibili.community.service.dm.v1
                         * @interface IDmViewReq
                         * @property {number|Long|null} [pid] DmViewReq pid
                         * @property {number|Long|null} [oid] DmViewReq oid
                         * @property {number|null} [type] DmViewReq type
                         * @property {string|null} [spmid] DmViewReq spmid
                         * @property {number|null} [isHardBoot] DmViewReq isHardBoot
                         */

                        /**
                         * Constructs a new DmViewReq.
                         * @memberof bilibili.community.service.dm.v1
                         * @classdesc Represents a DmViewReq.
                         * @implements IDmViewReq
                         * @constructor
                         * @param {bilibili.community.service.dm.v1.IDmViewReq=} [properties] Properties to set
                         */
                        function DmViewReq(properties) {
                            if (properties)
                                for (
                                    var keys = Object.keys(properties), i = 0;
                                    i < keys.length;
                                    ++i
                                )
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]]
                        }

                        /**
                         * DmViewReq pid.
                         * @member {number|Long} pid
                         * @memberof bilibili.community.service.dm.v1.DmViewReq
                         * @instance
                         */
                        DmViewReq.prototype.pid = $util.Long ? $util.Long.fromBits(0, 0, false) : 0

                        /**
                         * DmViewReq oid.
                         * @member {number|Long} oid
                         * @memberof bilibili.community.service.dm.v1.DmViewReq
                         * @instance
                         */
                        DmViewReq.prototype.oid = $util.Long ? $util.Long.fromBits(0, 0, false) : 0

                        /**
                         * DmViewReq type.
                         * @member {number} type
                         * @memberof bilibili.community.service.dm.v1.DmViewReq
                         * @instance
                         */
                        DmViewReq.prototype.type = 0

                        /**
                         * DmViewReq spmid.
                         * @member {string} spmid
                         * @memberof bilibili.community.service.dm.v1.DmViewReq
                         * @instance
                         */
                        DmViewReq.prototype.spmid = ''

                        /**
                         * DmViewReq isHardBoot.
                         * @member {number} isHardBoot
                         * @memberof bilibili.community.service.dm.v1.DmViewReq
                         * @instance
                         */
                        DmViewReq.prototype.isHardBoot = 0

                        /**
                         * Creates a new DmViewReq instance using the specified properties.
                         * @function create
                         * @memberof bilibili.community.service.dm.v1.DmViewReq
                         * @static
                         * @param {bilibili.community.service.dm.v1.IDmViewReq=} [properties] Properties to set
                         * @returns {bilibili.community.service.dm.v1.DmViewReq} DmViewReq instance
                         */
                        DmViewReq.create = function create(properties) {
                            return new DmViewReq(properties)
                        }

                        /**
                         * Encodes the specified DmViewReq message. Does not implicitly {@link bilibili.community.service.dm.v1.DmViewReq.verify|verify} messages.
                         * @function encode
                         * @memberof bilibili.community.service.dm.v1.DmViewReq
                         * @static
                         * @param {bilibili.community.service.dm.v1.IDmViewReq} message DmViewReq message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        DmViewReq.encode = function encode(message, writer) {
                            if (!writer) writer = $Writer.create()
                            if (message.pid != null && Object.hasOwnProperty.call(message, 'pid'))
                                writer.uint32(/* id 1, wireType 0 =*/ 8).int64(message.pid)
                            if (message.oid != null && Object.hasOwnProperty.call(message, 'oid'))
                                writer.uint32(/* id 2, wireType 0 =*/ 16).int64(message.oid)
                            if (message.type != null && Object.hasOwnProperty.call(message, 'type'))
                                writer.uint32(/* id 3, wireType 0 =*/ 24).int32(message.type)
                            if (
                                message.spmid != null &&
                                Object.hasOwnProperty.call(message, 'spmid')
                            )
                                writer.uint32(/* id 4, wireType 2 =*/ 34).string(message.spmid)
                            if (
                                message.isHardBoot != null &&
                                Object.hasOwnProperty.call(message, 'isHardBoot')
                            )
                                writer.uint32(/* id 5, wireType 0 =*/ 40).int32(message.isHardBoot)
                            return writer
                        }

                        /**
                         * Encodes the specified DmViewReq message, length delimited. Does not implicitly {@link bilibili.community.service.dm.v1.DmViewReq.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof bilibili.community.service.dm.v1.DmViewReq
                         * @static
                         * @param {bilibili.community.service.dm.v1.IDmViewReq} message DmViewReq message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        DmViewReq.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim()
                        }

                        /**
                         * Decodes a DmViewReq message from the specified reader or buffer.
                         * @function decode
                         * @memberof bilibili.community.service.dm.v1.DmViewReq
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {bilibili.community.service.dm.v1.DmViewReq} DmViewReq
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        DmViewReq.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader)) reader = $Reader.create(reader)
                            var end = length === undefined ? reader.len : reader.pos + length,
                                message = new $root.bilibili.community.service.dm.v1.DmViewReq()
                            while (reader.pos < end) {
                                var tag = reader.uint32()
                                switch (tag >>> 3) {
                                    case 1:
                                        message.pid = reader.int64()
                                        break
                                    case 2:
                                        message.oid = reader.int64()
                                        break
                                    case 3:
                                        message.type = reader.int32()
                                        break
                                    case 4:
                                        message.spmid = reader.string()
                                        break
                                    case 5:
                                        message.isHardBoot = reader.int32()
                                        break
                                    default:
                                        reader.skipType(tag & 7)
                                        break
                                }
                            }
                            return message
                        }

                        /**
                         * Decodes a DmViewReq message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof bilibili.community.service.dm.v1.DmViewReq
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {bilibili.community.service.dm.v1.DmViewReq} DmViewReq
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        DmViewReq.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader)) reader = new $Reader(reader)
                            return this.decode(reader, reader.uint32())
                        }

                        /**
                         * Verifies a DmViewReq message.
                         * @function verify
                         * @memberof bilibili.community.service.dm.v1.DmViewReq
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        DmViewReq.verify = function verify(message) {
                            if (typeof message !== 'object' || message === null)
                                return 'object expected'
                            if (message.pid != null && message.hasOwnProperty('pid'))
                                if (
                                    !$util.isInteger(message.pid) &&
                                    !(
                                        message.pid &&
                                        $util.isInteger(message.pid.low) &&
                                        $util.isInteger(message.pid.high)
                                    )
                                )
                                    return 'pid: integer|Long expected'
                            if (message.oid != null && message.hasOwnProperty('oid'))
                                if (
                                    !$util.isInteger(message.oid) &&
                                    !(
                                        message.oid &&
                                        $util.isInteger(message.oid.low) &&
                                        $util.isInteger(message.oid.high)
                                    )
                                )
                                    return 'oid: integer|Long expected'
                            if (message.type != null && message.hasOwnProperty('type'))
                                if (!$util.isInteger(message.type)) return 'type: integer expected'
                            if (message.spmid != null && message.hasOwnProperty('spmid'))
                                if (!$util.isString(message.spmid)) return 'spmid: string expected'
                            if (message.isHardBoot != null && message.hasOwnProperty('isHardBoot'))
                                if (!$util.isInteger(message.isHardBoot))
                                    return 'isHardBoot: integer expected'
                            return null
                        }

                        /**
                         * Creates a DmViewReq message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof bilibili.community.service.dm.v1.DmViewReq
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {bilibili.community.service.dm.v1.DmViewReq} DmViewReq
                         */
                        DmViewReq.fromObject = function fromObject(object) {
                            if (object instanceof $root.bilibili.community.service.dm.v1.DmViewReq)
                                return object
                            var message = new $root.bilibili.community.service.dm.v1.DmViewReq()
                            if (object.pid != null)
                                if ($util.Long)
                                    (message.pid = $util.Long.fromValue(
                                        object.pid
                                    )).unsigned = false
                                else if (typeof object.pid === 'string')
                                    message.pid = parseInt(object.pid, 10)
                                else if (typeof object.pid === 'number') message.pid = object.pid
                                else if (typeof object.pid === 'object')
                                    message.pid = new $util.LongBits(
                                        object.pid.low >>> 0,
                                        object.pid.high >>> 0
                                    ).toNumber()
                            if (object.oid != null)
                                if ($util.Long)
                                    (message.oid = $util.Long.fromValue(
                                        object.oid
                                    )).unsigned = false
                                else if (typeof object.oid === 'string')
                                    message.oid = parseInt(object.oid, 10)
                                else if (typeof object.oid === 'number') message.oid = object.oid
                                else if (typeof object.oid === 'object')
                                    message.oid = new $util.LongBits(
                                        object.oid.low >>> 0,
                                        object.oid.high >>> 0
                                    ).toNumber()
                            if (object.type != null) message.type = object.type | 0
                            if (object.spmid != null) message.spmid = String(object.spmid)
                            if (object.isHardBoot != null)
                                message.isHardBoot = object.isHardBoot | 0
                            return message
                        }

                        /**
                         * Creates a plain object from a DmViewReq message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof bilibili.community.service.dm.v1.DmViewReq
                         * @static
                         * @param {bilibili.community.service.dm.v1.DmViewReq} message DmViewReq
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        DmViewReq.toObject = function toObject(message, options) {
                            if (!options) options = {}
                            var object = {}
                            if (options.defaults) {
                                if ($util.Long) {
                                    var long = new $util.Long(0, 0, false)
                                    object.pid =
                                        options.longs === String
                                            ? long.toString()
                                            : options.longs === Number
                                            ? long.toNumber()
                                            : long
                                } else object.pid = options.longs === String ? '0' : 0
                                if ($util.Long) {
                                    var long = new $util.Long(0, 0, false)
                                    object.oid =
                                        options.longs === String
                                            ? long.toString()
                                            : options.longs === Number
                                            ? long.toNumber()
                                            : long
                                } else object.oid = options.longs === String ? '0' : 0
                                object.type = 0
                                object.spmid = ''
                                object.isHardBoot = 0
                            }
                            if (message.pid != null && message.hasOwnProperty('pid'))
                                if (typeof message.pid === 'number')
                                    object.pid =
                                        options.longs === String ? String(message.pid) : message.pid
                                else
                                    object.pid =
                                        options.longs === String
                                            ? $util.Long.prototype.toString.call(message.pid)
                                            : options.longs === Number
                                            ? new $util.LongBits(
                                                  message.pid.low >>> 0,
                                                  message.pid.high >>> 0
                                              ).toNumber()
                                            : message.pid
                            if (message.oid != null && message.hasOwnProperty('oid'))
                                if (typeof message.oid === 'number')
                                    object.oid =
                                        options.longs === String ? String(message.oid) : message.oid
                                else
                                    object.oid =
                                        options.longs === String
                                            ? $util.Long.prototype.toString.call(message.oid)
                                            : options.longs === Number
                                            ? new $util.LongBits(
                                                  message.oid.low >>> 0,
                                                  message.oid.high >>> 0
                                              ).toNumber()
                                            : message.oid
                            if (message.type != null && message.hasOwnProperty('type'))
                                object.type = message.type
                            if (message.spmid != null && message.hasOwnProperty('spmid'))
                                object.spmid = message.spmid
                            if (message.isHardBoot != null && message.hasOwnProperty('isHardBoot'))
                                object.isHardBoot = message.isHardBoot
                            return object
                        }

                        /**
                         * Converts this DmViewReq to JSON.
                         * @function toJSON
                         * @memberof bilibili.community.service.dm.v1.DmViewReq
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        DmViewReq.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
                        }

                        return DmViewReq
                    })()

                    v1.DmViewReply = (function () {
                        /**
                         * Properties of a DmViewReply.
                         * @memberof bilibili.community.service.dm.v1
                         * @interface IDmViewReply
                         * @property {boolean|null} [closed] DmViewReply closed
                         * @property {bilibili.community.service.dm.v1.IVideoMask|null} [mask] DmViewReply mask
                         * @property {bilibili.community.service.dm.v1.IVideoSubtitle|null} [subtitle] DmViewReply subtitle
                         * @property {Array.<string>|null} [specialDms] DmViewReply specialDms
                         * @property {bilibili.community.service.dm.v1.IDanmakuFlagConfig|null} [aiFlag] DmViewReply aiFlag
                         * @property {bilibili.community.service.dm.v1.IDanmuPlayerViewConfig|null} [playerConfig] DmViewReply playerConfig
                         * @property {number|null} [sendBoxStyle] DmViewReply sendBoxStyle
                         * @property {boolean|null} [allow] DmViewReply allow
                         * @property {string|null} [checkBox] DmViewReply checkBox
                         * @property {string|null} [checkBoxShowMsg] DmViewReply checkBoxShowMsg
                         * @property {string|null} [textPlaceholder] DmViewReply textPlaceholder
                         * @property {string|null} [inputPlaceholder] DmViewReply inputPlaceholder
                         * @property {Array.<string>|null} [reportFilterContent] DmViewReply reportFilterContent
                         */

                        /**
                         * Constructs a new DmViewReply.
                         * @memberof bilibili.community.service.dm.v1
                         * @classdesc Represents a DmViewReply.
                         * @implements IDmViewReply
                         * @constructor
                         * @param {bilibili.community.service.dm.v1.IDmViewReply=} [properties] Properties to set
                         */
                        function DmViewReply(properties) {
                            this.specialDms = []
                            this.reportFilterContent = []
                            if (properties)
                                for (
                                    var keys = Object.keys(properties), i = 0;
                                    i < keys.length;
                                    ++i
                                )
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]]
                        }

                        /**
                         * DmViewReply closed.
                         * @member {boolean} closed
                         * @memberof bilibili.community.service.dm.v1.DmViewReply
                         * @instance
                         */
                        DmViewReply.prototype.closed = false

                        /**
                         * DmViewReply mask.
                         * @member {bilibili.community.service.dm.v1.IVideoMask|null|undefined} mask
                         * @memberof bilibili.community.service.dm.v1.DmViewReply
                         * @instance
                         */
                        DmViewReply.prototype.mask = null

                        /**
                         * DmViewReply subtitle.
                         * @member {bilibili.community.service.dm.v1.IVideoSubtitle|null|undefined} subtitle
                         * @memberof bilibili.community.service.dm.v1.DmViewReply
                         * @instance
                         */
                        DmViewReply.prototype.subtitle = null

                        /**
                         * DmViewReply specialDms.
                         * @member {Array.<string>} specialDms
                         * @memberof bilibili.community.service.dm.v1.DmViewReply
                         * @instance
                         */
                        DmViewReply.prototype.specialDms = $util.emptyArray

                        /**
                         * DmViewReply aiFlag.
                         * @member {bilibili.community.service.dm.v1.IDanmakuFlagConfig|null|undefined} aiFlag
                         * @memberof bilibili.community.service.dm.v1.DmViewReply
                         * @instance
                         */
                        DmViewReply.prototype.aiFlag = null

                        /**
                         * DmViewReply playerConfig.
                         * @member {bilibili.community.service.dm.v1.IDanmuPlayerViewConfig|null|undefined} playerConfig
                         * @memberof bilibili.community.service.dm.v1.DmViewReply
                         * @instance
                         */
                        DmViewReply.prototype.playerConfig = null

                        /**
                         * DmViewReply sendBoxStyle.
                         * @member {number} sendBoxStyle
                         * @memberof bilibili.community.service.dm.v1.DmViewReply
                         * @instance
                         */
                        DmViewReply.prototype.sendBoxStyle = 0

                        /**
                         * DmViewReply allow.
                         * @member {boolean} allow
                         * @memberof bilibili.community.service.dm.v1.DmViewReply
                         * @instance
                         */
                        DmViewReply.prototype.allow = false

                        /**
                         * DmViewReply checkBox.
                         * @member {string} checkBox
                         * @memberof bilibili.community.service.dm.v1.DmViewReply
                         * @instance
                         */
                        DmViewReply.prototype.checkBox = ''

                        /**
                         * DmViewReply checkBoxShowMsg.
                         * @member {string} checkBoxShowMsg
                         * @memberof bilibili.community.service.dm.v1.DmViewReply
                         * @instance
                         */
                        DmViewReply.prototype.checkBoxShowMsg = ''

                        /**
                         * DmViewReply textPlaceholder.
                         * @member {string} textPlaceholder
                         * @memberof bilibili.community.service.dm.v1.DmViewReply
                         * @instance
                         */
                        DmViewReply.prototype.textPlaceholder = ''

                        /**
                         * DmViewReply inputPlaceholder.
                         * @member {string} inputPlaceholder
                         * @memberof bilibili.community.service.dm.v1.DmViewReply
                         * @instance
                         */
                        DmViewReply.prototype.inputPlaceholder = ''

                        /**
                         * DmViewReply reportFilterContent.
                         * @member {Array.<string>} reportFilterContent
                         * @memberof bilibili.community.service.dm.v1.DmViewReply
                         * @instance
                         */
                        DmViewReply.prototype.reportFilterContent = $util.emptyArray

                        /**
                         * Creates a new DmViewReply instance using the specified properties.
                         * @function create
                         * @memberof bilibili.community.service.dm.v1.DmViewReply
                         * @static
                         * @param {bilibili.community.service.dm.v1.IDmViewReply=} [properties] Properties to set
                         * @returns {bilibili.community.service.dm.v1.DmViewReply} DmViewReply instance
                         */
                        DmViewReply.create = function create(properties) {
                            return new DmViewReply(properties)
                        }

                        /**
                         * Encodes the specified DmViewReply message. Does not implicitly {@link bilibili.community.service.dm.v1.DmViewReply.verify|verify} messages.
                         * @function encode
                         * @memberof bilibili.community.service.dm.v1.DmViewReply
                         * @static
                         * @param {bilibili.community.service.dm.v1.IDmViewReply} message DmViewReply message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        DmViewReply.encode = function encode(message, writer) {
                            if (!writer) writer = $Writer.create()
                            if (
                                message.closed != null &&
                                Object.hasOwnProperty.call(message, 'closed')
                            )
                                writer.uint32(/* id 1, wireType 0 =*/ 8).bool(message.closed)
                            if (message.mask != null && Object.hasOwnProperty.call(message, 'mask'))
                                $root.bilibili.community.service.dm.v1.VideoMask.encode(
                                    message.mask,
                                    writer.uint32(/* id 2, wireType 2 =*/ 18).fork()
                                ).ldelim()
                            if (
                                message.subtitle != null &&
                                Object.hasOwnProperty.call(message, 'subtitle')
                            )
                                $root.bilibili.community.service.dm.v1.VideoSubtitle.encode(
                                    message.subtitle,
                                    writer.uint32(/* id 3, wireType 2 =*/ 26).fork()
                                ).ldelim()
                            if (message.specialDms != null && message.specialDms.length)
                                for (var i = 0; i < message.specialDms.length; ++i)
                                    writer
                                        .uint32(/* id 4, wireType 2 =*/ 34)
                                        .string(message.specialDms[i])
                            if (
                                message.aiFlag != null &&
                                Object.hasOwnProperty.call(message, 'aiFlag')
                            )
                                $root.bilibili.community.service.dm.v1.DanmakuFlagConfig.encode(
                                    message.aiFlag,
                                    writer.uint32(/* id 5, wireType 2 =*/ 42).fork()
                                ).ldelim()
                            if (
                                message.playerConfig != null &&
                                Object.hasOwnProperty.call(message, 'playerConfig')
                            )
                                $root.bilibili.community.service.dm.v1.DanmuPlayerViewConfig.encode(
                                    message.playerConfig,
                                    writer.uint32(/* id 6, wireType 2 =*/ 50).fork()
                                ).ldelim()
                            if (
                                message.sendBoxStyle != null &&
                                Object.hasOwnProperty.call(message, 'sendBoxStyle')
                            )
                                writer
                                    .uint32(/* id 7, wireType 0 =*/ 56)
                                    .int32(message.sendBoxStyle)
                            if (
                                message.allow != null &&
                                Object.hasOwnProperty.call(message, 'allow')
                            )
                                writer.uint32(/* id 8, wireType 0 =*/ 64).bool(message.allow)
                            if (
                                message.checkBox != null &&
                                Object.hasOwnProperty.call(message, 'checkBox')
                            )
                                writer.uint32(/* id 9, wireType 2 =*/ 74).string(message.checkBox)
                            if (
                                message.checkBoxShowMsg != null &&
                                Object.hasOwnProperty.call(message, 'checkBoxShowMsg')
                            )
                                writer
                                    .uint32(/* id 10, wireType 2 =*/ 82)
                                    .string(message.checkBoxShowMsg)
                            if (
                                message.textPlaceholder != null &&
                                Object.hasOwnProperty.call(message, 'textPlaceholder')
                            )
                                writer
                                    .uint32(/* id 11, wireType 2 =*/ 90)
                                    .string(message.textPlaceholder)
                            if (
                                message.inputPlaceholder != null &&
                                Object.hasOwnProperty.call(message, 'inputPlaceholder')
                            )
                                writer
                                    .uint32(/* id 12, wireType 2 =*/ 98)
                                    .string(message.inputPlaceholder)
                            if (
                                message.reportFilterContent != null &&
                                message.reportFilterContent.length
                            )
                                for (var i = 0; i < message.reportFilterContent.length; ++i)
                                    writer
                                        .uint32(/* id 13, wireType 2 =*/ 106)
                                        .string(message.reportFilterContent[i])
                            return writer
                        }

                        /**
                         * Encodes the specified DmViewReply message, length delimited. Does not implicitly {@link bilibili.community.service.dm.v1.DmViewReply.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof bilibili.community.service.dm.v1.DmViewReply
                         * @static
                         * @param {bilibili.community.service.dm.v1.IDmViewReply} message DmViewReply message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        DmViewReply.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim()
                        }

                        /**
                         * Decodes a DmViewReply message from the specified reader or buffer.
                         * @function decode
                         * @memberof bilibili.community.service.dm.v1.DmViewReply
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {bilibili.community.service.dm.v1.DmViewReply} DmViewReply
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        DmViewReply.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader)) reader = $Reader.create(reader)
                            var end = length === undefined ? reader.len : reader.pos + length,
                                message = new $root.bilibili.community.service.dm.v1.DmViewReply()
                            while (reader.pos < end) {
                                var tag = reader.uint32()
                                switch (tag >>> 3) {
                                    case 1:
                                        message.closed = reader.bool()
                                        break
                                    case 2:
                                        message.mask = $root.bilibili.community.service.dm.v1.VideoMask.decode(
                                            reader,
                                            reader.uint32()
                                        )
                                        break
                                    case 3:
                                        message.subtitle = $root.bilibili.community.service.dm.v1.VideoSubtitle.decode(
                                            reader,
                                            reader.uint32()
                                        )
                                        break
                                    case 4:
                                        if (!(message.specialDms && message.specialDms.length))
                                            message.specialDms = []
                                        message.specialDms.push(reader.string())
                                        break
                                    case 5:
                                        message.aiFlag = $root.bilibili.community.service.dm.v1.DanmakuFlagConfig.decode(
                                            reader,
                                            reader.uint32()
                                        )
                                        break
                                    case 6:
                                        message.playerConfig = $root.bilibili.community.service.dm.v1.DanmuPlayerViewConfig.decode(
                                            reader,
                                            reader.uint32()
                                        )
                                        break
                                    case 7:
                                        message.sendBoxStyle = reader.int32()
                                        break
                                    case 8:
                                        message.allow = reader.bool()
                                        break
                                    case 9:
                                        message.checkBox = reader.string()
                                        break
                                    case 10:
                                        message.checkBoxShowMsg = reader.string()
                                        break
                                    case 11:
                                        message.textPlaceholder = reader.string()
                                        break
                                    case 12:
                                        message.inputPlaceholder = reader.string()
                                        break
                                    case 13:
                                        if (
                                            !(
                                                message.reportFilterContent &&
                                                message.reportFilterContent.length
                                            )
                                        )
                                            message.reportFilterContent = []
                                        message.reportFilterContent.push(reader.string())
                                        break
                                    default:
                                        reader.skipType(tag & 7)
                                        break
                                }
                            }
                            return message
                        }

                        /**
                         * Decodes a DmViewReply message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof bilibili.community.service.dm.v1.DmViewReply
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {bilibili.community.service.dm.v1.DmViewReply} DmViewReply
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        DmViewReply.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader)) reader = new $Reader(reader)
                            return this.decode(reader, reader.uint32())
                        }

                        /**
                         * Verifies a DmViewReply message.
                         * @function verify
                         * @memberof bilibili.community.service.dm.v1.DmViewReply
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        DmViewReply.verify = function verify(message) {
                            if (typeof message !== 'object' || message === null)
                                return 'object expected'
                            if (message.closed != null && message.hasOwnProperty('closed'))
                                if (typeof message.closed !== 'boolean')
                                    return 'closed: boolean expected'
                            if (message.mask != null && message.hasOwnProperty('mask')) {
                                var error = $root.bilibili.community.service.dm.v1.VideoMask.verify(
                                    message.mask
                                )
                                if (error) return 'mask.' + error
                            }
                            if (message.subtitle != null && message.hasOwnProperty('subtitle')) {
                                var error = $root.bilibili.community.service.dm.v1.VideoSubtitle.verify(
                                    message.subtitle
                                )
                                if (error) return 'subtitle.' + error
                            }
                            if (
                                message.specialDms != null &&
                                message.hasOwnProperty('specialDms')
                            ) {
                                if (!Array.isArray(message.specialDms))
                                    return 'specialDms: array expected'
                                for (var i = 0; i < message.specialDms.length; ++i)
                                    if (!$util.isString(message.specialDms[i]))
                                        return 'specialDms: string[] expected'
                            }
                            if (message.aiFlag != null && message.hasOwnProperty('aiFlag')) {
                                var error = $root.bilibili.community.service.dm.v1.DanmakuFlagConfig.verify(
                                    message.aiFlag
                                )
                                if (error) return 'aiFlag.' + error
                            }
                            if (
                                message.playerConfig != null &&
                                message.hasOwnProperty('playerConfig')
                            ) {
                                var error = $root.bilibili.community.service.dm.v1.DanmuPlayerViewConfig.verify(
                                    message.playerConfig
                                )
                                if (error) return 'playerConfig.' + error
                            }
                            if (
                                message.sendBoxStyle != null &&
                                message.hasOwnProperty('sendBoxStyle')
                            )
                                if (!$util.isInteger(message.sendBoxStyle))
                                    return 'sendBoxStyle: integer expected'
                            if (message.allow != null && message.hasOwnProperty('allow'))
                                if (typeof message.allow !== 'boolean')
                                    return 'allow: boolean expected'
                            if (message.checkBox != null && message.hasOwnProperty('checkBox'))
                                if (!$util.isString(message.checkBox))
                                    return 'checkBox: string expected'
                            if (
                                message.checkBoxShowMsg != null &&
                                message.hasOwnProperty('checkBoxShowMsg')
                            )
                                if (!$util.isString(message.checkBoxShowMsg))
                                    return 'checkBoxShowMsg: string expected'
                            if (
                                message.textPlaceholder != null &&
                                message.hasOwnProperty('textPlaceholder')
                            )
                                if (!$util.isString(message.textPlaceholder))
                                    return 'textPlaceholder: string expected'
                            if (
                                message.inputPlaceholder != null &&
                                message.hasOwnProperty('inputPlaceholder')
                            )
                                if (!$util.isString(message.inputPlaceholder))
                                    return 'inputPlaceholder: string expected'
                            if (
                                message.reportFilterContent != null &&
                                message.hasOwnProperty('reportFilterContent')
                            ) {
                                if (!Array.isArray(message.reportFilterContent))
                                    return 'reportFilterContent: array expected'
                                for (var i = 0; i < message.reportFilterContent.length; ++i)
                                    if (!$util.isString(message.reportFilterContent[i]))
                                        return 'reportFilterContent: string[] expected'
                            }
                            return null
                        }

                        /**
                         * Creates a DmViewReply message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof bilibili.community.service.dm.v1.DmViewReply
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {bilibili.community.service.dm.v1.DmViewReply} DmViewReply
                         */
                        DmViewReply.fromObject = function fromObject(object) {
                            if (
                                object instanceof $root.bilibili.community.service.dm.v1.DmViewReply
                            )
                                return object
                            var message = new $root.bilibili.community.service.dm.v1.DmViewReply()
                            if (object.closed != null) message.closed = Boolean(object.closed)
                            if (object.mask != null) {
                                if (typeof object.mask !== 'object')
                                    throw TypeError(
                                        '.bilibili.community.service.dm.v1.DmViewReply.mask: object expected'
                                    )
                                message.mask = $root.bilibili.community.service.dm.v1.VideoMask.fromObject(
                                    object.mask
                                )
                            }
                            if (object.subtitle != null) {
                                if (typeof object.subtitle !== 'object')
                                    throw TypeError(
                                        '.bilibili.community.service.dm.v1.DmViewReply.subtitle: object expected'
                                    )
                                message.subtitle = $root.bilibili.community.service.dm.v1.VideoSubtitle.fromObject(
                                    object.subtitle
                                )
                            }
                            if (object.specialDms) {
                                if (!Array.isArray(object.specialDms))
                                    throw TypeError(
                                        '.bilibili.community.service.dm.v1.DmViewReply.specialDms: array expected'
                                    )
                                message.specialDms = []
                                for (var i = 0; i < object.specialDms.length; ++i)
                                    message.specialDms[i] = String(object.specialDms[i])
                            }
                            if (object.aiFlag != null) {
                                if (typeof object.aiFlag !== 'object')
                                    throw TypeError(
                                        '.bilibili.community.service.dm.v1.DmViewReply.aiFlag: object expected'
                                    )
                                message.aiFlag = $root.bilibili.community.service.dm.v1.DanmakuFlagConfig.fromObject(
                                    object.aiFlag
                                )
                            }
                            if (object.playerConfig != null) {
                                if (typeof object.playerConfig !== 'object')
                                    throw TypeError(
                                        '.bilibili.community.service.dm.v1.DmViewReply.playerConfig: object expected'
                                    )
                                message.playerConfig = $root.bilibili.community.service.dm.v1.DanmuPlayerViewConfig.fromObject(
                                    object.playerConfig
                                )
                            }
                            if (object.sendBoxStyle != null)
                                message.sendBoxStyle = object.sendBoxStyle | 0
                            if (object.allow != null) message.allow = Boolean(object.allow)
                            if (object.checkBox != null) message.checkBox = String(object.checkBox)
                            if (object.checkBoxShowMsg != null)
                                message.checkBoxShowMsg = String(object.checkBoxShowMsg)
                            if (object.textPlaceholder != null)
                                message.textPlaceholder = String(object.textPlaceholder)
                            if (object.inputPlaceholder != null)
                                message.inputPlaceholder = String(object.inputPlaceholder)
                            if (object.reportFilterContent) {
                                if (!Array.isArray(object.reportFilterContent))
                                    throw TypeError(
                                        '.bilibili.community.service.dm.v1.DmViewReply.reportFilterContent: array expected'
                                    )
                                message.reportFilterContent = []
                                for (var i = 0; i < object.reportFilterContent.length; ++i)
                                    message.reportFilterContent[i] = String(
                                        object.reportFilterContent[i]
                                    )
                            }
                            return message
                        }

                        /**
                         * Creates a plain object from a DmViewReply message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof bilibili.community.service.dm.v1.DmViewReply
                         * @static
                         * @param {bilibili.community.service.dm.v1.DmViewReply} message DmViewReply
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        DmViewReply.toObject = function toObject(message, options) {
                            if (!options) options = {}
                            var object = {}
                            if (options.arrays || options.defaults) {
                                object.specialDms = []
                                object.reportFilterContent = []
                            }
                            if (options.defaults) {
                                object.closed = false
                                object.mask = null
                                object.subtitle = null
                                object.aiFlag = null
                                object.playerConfig = null
                                object.sendBoxStyle = 0
                                object.allow = false
                                object.checkBox = ''
                                object.checkBoxShowMsg = ''
                                object.textPlaceholder = ''
                                object.inputPlaceholder = ''
                            }
                            if (message.closed != null && message.hasOwnProperty('closed'))
                                object.closed = message.closed
                            if (message.mask != null && message.hasOwnProperty('mask'))
                                object.mask = $root.bilibili.community.service.dm.v1.VideoMask.toObject(
                                    message.mask,
                                    options
                                )
                            if (message.subtitle != null && message.hasOwnProperty('subtitle'))
                                object.subtitle = $root.bilibili.community.service.dm.v1.VideoSubtitle.toObject(
                                    message.subtitle,
                                    options
                                )
                            if (message.specialDms && message.specialDms.length) {
                                object.specialDms = []
                                for (var j = 0; j < message.specialDms.length; ++j)
                                    object.specialDms[j] = message.specialDms[j]
                            }
                            if (message.aiFlag != null && message.hasOwnProperty('aiFlag'))
                                object.aiFlag = $root.bilibili.community.service.dm.v1.DanmakuFlagConfig.toObject(
                                    message.aiFlag,
                                    options
                                )
                            if (
                                message.playerConfig != null &&
                                message.hasOwnProperty('playerConfig')
                            )
                                object.playerConfig = $root.bilibili.community.service.dm.v1.DanmuPlayerViewConfig.toObject(
                                    message.playerConfig,
                                    options
                                )
                            if (
                                message.sendBoxStyle != null &&
                                message.hasOwnProperty('sendBoxStyle')
                            )
                                object.sendBoxStyle = message.sendBoxStyle
                            if (message.allow != null && message.hasOwnProperty('allow'))
                                object.allow = message.allow
                            if (message.checkBox != null && message.hasOwnProperty('checkBox'))
                                object.checkBox = message.checkBox
                            if (
                                message.checkBoxShowMsg != null &&
                                message.hasOwnProperty('checkBoxShowMsg')
                            )
                                object.checkBoxShowMsg = message.checkBoxShowMsg
                            if (
                                message.textPlaceholder != null &&
                                message.hasOwnProperty('textPlaceholder')
                            )
                                object.textPlaceholder = message.textPlaceholder
                            if (
                                message.inputPlaceholder != null &&
                                message.hasOwnProperty('inputPlaceholder')
                            )
                                object.inputPlaceholder = message.inputPlaceholder
                            if (message.reportFilterContent && message.reportFilterContent.length) {
                                object.reportFilterContent = []
                                for (var j = 0; j < message.reportFilterContent.length; ++j)
                                    object.reportFilterContent[j] = message.reportFilterContent[j]
                            }
                            return object
                        }

                        /**
                         * Converts this DmViewReply to JSON.
                         * @function toJSON
                         * @memberof bilibili.community.service.dm.v1.DmViewReply
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        DmViewReply.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
                        }

                        return DmViewReply
                    })()

                    v1.DanmakuAIFlag = (function () {
                        /**
                         * Properties of a DanmakuAIFlag.
                         * @memberof bilibili.community.service.dm.v1
                         * @interface IDanmakuAIFlag
                         * @property {Array.<bilibili.community.service.dm.v1.IDanmakuFlag>|null} [dmFlags] DanmakuAIFlag dmFlags
                         */

                        /**
                         * Constructs a new DanmakuAIFlag.
                         * @memberof bilibili.community.service.dm.v1
                         * @classdesc Represents a DanmakuAIFlag.
                         * @implements IDanmakuAIFlag
                         * @constructor
                         * @param {bilibili.community.service.dm.v1.IDanmakuAIFlag=} [properties] Properties to set
                         */
                        function DanmakuAIFlag(properties) {
                            this.dmFlags = []
                            if (properties)
                                for (
                                    var keys = Object.keys(properties), i = 0;
                                    i < keys.length;
                                    ++i
                                )
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]]
                        }

                        /**
                         * DanmakuAIFlag dmFlags.
                         * @member {Array.<bilibili.community.service.dm.v1.IDanmakuFlag>} dmFlags
                         * @memberof bilibili.community.service.dm.v1.DanmakuAIFlag
                         * @instance
                         */
                        DanmakuAIFlag.prototype.dmFlags = $util.emptyArray

                        /**
                         * Creates a new DanmakuAIFlag instance using the specified properties.
                         * @function create
                         * @memberof bilibili.community.service.dm.v1.DanmakuAIFlag
                         * @static
                         * @param {bilibili.community.service.dm.v1.IDanmakuAIFlag=} [properties] Properties to set
                         * @returns {bilibili.community.service.dm.v1.DanmakuAIFlag} DanmakuAIFlag instance
                         */
                        DanmakuAIFlag.create = function create(properties) {
                            return new DanmakuAIFlag(properties)
                        }

                        /**
                         * Encodes the specified DanmakuAIFlag message. Does not implicitly {@link bilibili.community.service.dm.v1.DanmakuAIFlag.verify|verify} messages.
                         * @function encode
                         * @memberof bilibili.community.service.dm.v1.DanmakuAIFlag
                         * @static
                         * @param {bilibili.community.service.dm.v1.IDanmakuAIFlag} message DanmakuAIFlag message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        DanmakuAIFlag.encode = function encode(message, writer) {
                            if (!writer) writer = $Writer.create()
                            if (message.dmFlags != null && message.dmFlags.length)
                                for (var i = 0; i < message.dmFlags.length; ++i)
                                    $root.bilibili.community.service.dm.v1.DanmakuFlag.encode(
                                        message.dmFlags[i],
                                        writer.uint32(/* id 1, wireType 2 =*/ 10).fork()
                                    ).ldelim()
                            return writer
                        }

                        /**
                         * Encodes the specified DanmakuAIFlag message, length delimited. Does not implicitly {@link bilibili.community.service.dm.v1.DanmakuAIFlag.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof bilibili.community.service.dm.v1.DanmakuAIFlag
                         * @static
                         * @param {bilibili.community.service.dm.v1.IDanmakuAIFlag} message DanmakuAIFlag message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        DanmakuAIFlag.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim()
                        }

                        /**
                         * Decodes a DanmakuAIFlag message from the specified reader or buffer.
                         * @function decode
                         * @memberof bilibili.community.service.dm.v1.DanmakuAIFlag
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {bilibili.community.service.dm.v1.DanmakuAIFlag} DanmakuAIFlag
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        DanmakuAIFlag.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader)) reader = $Reader.create(reader)
                            var end = length === undefined ? reader.len : reader.pos + length,
                                message = new $root.bilibili.community.service.dm.v1.DanmakuAIFlag()
                            while (reader.pos < end) {
                                var tag = reader.uint32()
                                switch (tag >>> 3) {
                                    case 1:
                                        if (!(message.dmFlags && message.dmFlags.length))
                                            message.dmFlags = []
                                        message.dmFlags.push(
                                            $root.bilibili.community.service.dm.v1.DanmakuFlag.decode(
                                                reader,
                                                reader.uint32()
                                            )
                                        )
                                        break
                                    default:
                                        reader.skipType(tag & 7)
                                        break
                                }
                            }
                            return message
                        }

                        /**
                         * Decodes a DanmakuAIFlag message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof bilibili.community.service.dm.v1.DanmakuAIFlag
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {bilibili.community.service.dm.v1.DanmakuAIFlag} DanmakuAIFlag
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        DanmakuAIFlag.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader)) reader = new $Reader(reader)
                            return this.decode(reader, reader.uint32())
                        }

                        /**
                         * Verifies a DanmakuAIFlag message.
                         * @function verify
                         * @memberof bilibili.community.service.dm.v1.DanmakuAIFlag
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        DanmakuAIFlag.verify = function verify(message) {
                            if (typeof message !== 'object' || message === null)
                                return 'object expected'
                            if (message.dmFlags != null && message.hasOwnProperty('dmFlags')) {
                                if (!Array.isArray(message.dmFlags))
                                    return 'dmFlags: array expected'
                                for (var i = 0; i < message.dmFlags.length; ++i) {
                                    var error = $root.bilibili.community.service.dm.v1.DanmakuFlag.verify(
                                        message.dmFlags[i]
                                    )
                                    if (error) return 'dmFlags.' + error
                                }
                            }
                            return null
                        }

                        /**
                         * Creates a DanmakuAIFlag message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof bilibili.community.service.dm.v1.DanmakuAIFlag
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {bilibili.community.service.dm.v1.DanmakuAIFlag} DanmakuAIFlag
                         */
                        DanmakuAIFlag.fromObject = function fromObject(object) {
                            if (
                                object instanceof
                                $root.bilibili.community.service.dm.v1.DanmakuAIFlag
                            )
                                return object
                            var message = new $root.bilibili.community.service.dm.v1.DanmakuAIFlag()
                            if (object.dmFlags) {
                                if (!Array.isArray(object.dmFlags))
                                    throw TypeError(
                                        '.bilibili.community.service.dm.v1.DanmakuAIFlag.dmFlags: array expected'
                                    )
                                message.dmFlags = []
                                for (var i = 0; i < object.dmFlags.length; ++i) {
                                    if (typeof object.dmFlags[i] !== 'object')
                                        throw TypeError(
                                            '.bilibili.community.service.dm.v1.DanmakuAIFlag.dmFlags: object expected'
                                        )
                                    message.dmFlags[
                                        i
                                    ] = $root.bilibili.community.service.dm.v1.DanmakuFlag.fromObject(
                                        object.dmFlags[i]
                                    )
                                }
                            }
                            return message
                        }

                        /**
                         * Creates a plain object from a DanmakuAIFlag message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof bilibili.community.service.dm.v1.DanmakuAIFlag
                         * @static
                         * @param {bilibili.community.service.dm.v1.DanmakuAIFlag} message DanmakuAIFlag
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        DanmakuAIFlag.toObject = function toObject(message, options) {
                            if (!options) options = {}
                            var object = {}
                            if (options.arrays || options.defaults) object.dmFlags = []
                            if (message.dmFlags && message.dmFlags.length) {
                                object.dmFlags = []
                                for (var j = 0; j < message.dmFlags.length; ++j)
                                    object.dmFlags[
                                        j
                                    ] = $root.bilibili.community.service.dm.v1.DanmakuFlag.toObject(
                                        message.dmFlags[j],
                                        options
                                    )
                            }
                            return object
                        }

                        /**
                         * Converts this DanmakuAIFlag to JSON.
                         * @function toJSON
                         * @memberof bilibili.community.service.dm.v1.DanmakuAIFlag
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        DanmakuAIFlag.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
                        }

                        return DanmakuAIFlag
                    })()

                    v1.DanmakuElem = (function () {
                        /**
                         * Properties of a DanmakuElem.
                         * @memberof bilibili.community.service.dm.v1
                         * @interface IDanmakuElem
                         * @property {number|Long|null} [id] DanmakuElem id
                         * @property {number|null} [progress] DanmakuElem progress
                         * @property {number|null} [mode] DanmakuElem mode
                         * @property {number|null} [fontsize] DanmakuElem fontsize
                         * @property {number|null} [color] DanmakuElem color
                         * @property {string|null} [midHash] DanmakuElem midHash
                         * @property {string|null} [content] DanmakuElem content
                         * @property {number|Long|null} [ctime] DanmakuElem ctime
                         * @property {number|null} [weight] DanmakuElem weight
                         * @property {string|null} [action] DanmakuElem action
                         * @property {number|null} [pool] DanmakuElem pool
                         * @property {string|null} [idStr] DanmakuElem idStr
                         * @property {number|null} [attr] DanmakuElem attr
                         */

                        /**
                         * Constructs a new DanmakuElem.
                         * @memberof bilibili.community.service.dm.v1
                         * @classdesc Represents a DanmakuElem.
                         * @implements IDanmakuElem
                         * @constructor
                         * @param {bilibili.community.service.dm.v1.IDanmakuElem=} [properties] Properties to set
                         */
                        function DanmakuElem(properties) {
                            if (properties)
                                for (
                                    var keys = Object.keys(properties), i = 0;
                                    i < keys.length;
                                    ++i
                                )
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]]
                        }

                        /**
                         * DanmakuElem id.
                         * @member {number|Long} id
                         * @memberof bilibili.community.service.dm.v1.DanmakuElem
                         * @instance
                         */
                        DanmakuElem.prototype.id = $util.Long ? $util.Long.fromBits(0, 0, false) : 0

                        /**
                         * DanmakuElem progress.
                         * @member {number} progress
                         * @memberof bilibili.community.service.dm.v1.DanmakuElem
                         * @instance
                         */
                        DanmakuElem.prototype.progress = 0

                        /**
                         * DanmakuElem mode.
                         * @member {number} mode
                         * @memberof bilibili.community.service.dm.v1.DanmakuElem
                         * @instance
                         */
                        DanmakuElem.prototype.mode = 0

                        /**
                         * DanmakuElem fontsize.
                         * @member {number} fontsize
                         * @memberof bilibili.community.service.dm.v1.DanmakuElem
                         * @instance
                         */
                        DanmakuElem.prototype.fontsize = 0

                        /**
                         * DanmakuElem color.
                         * @member {number} color
                         * @memberof bilibili.community.service.dm.v1.DanmakuElem
                         * @instance
                         */
                        DanmakuElem.prototype.color = 0

                        /**
                         * DanmakuElem midHash.
                         * @member {string} midHash
                         * @memberof bilibili.community.service.dm.v1.DanmakuElem
                         * @instance
                         */
                        DanmakuElem.prototype.midHash = ''

                        /**
                         * DanmakuElem content.
                         * @member {string} content
                         * @memberof bilibili.community.service.dm.v1.DanmakuElem
                         * @instance
                         */
                        DanmakuElem.prototype.content = ''

                        /**
                         * DanmakuElem ctime.
                         * @member {number|Long} ctime
                         * @memberof bilibili.community.service.dm.v1.DanmakuElem
                         * @instance
                         */
                        DanmakuElem.prototype.ctime = $util.Long
                            ? $util.Long.fromBits(0, 0, false)
                            : 0

                        /**
                         * DanmakuElem weight.
                         * @member {number} weight
                         * @memberof bilibili.community.service.dm.v1.DanmakuElem
                         * @instance
                         */
                        DanmakuElem.prototype.weight = 0

                        /**
                         * DanmakuElem action.
                         * @member {string} action
                         * @memberof bilibili.community.service.dm.v1.DanmakuElem
                         * @instance
                         */
                        DanmakuElem.prototype.action = ''

                        /**
                         * DanmakuElem pool.
                         * @member {number} pool
                         * @memberof bilibili.community.service.dm.v1.DanmakuElem
                         * @instance
                         */
                        DanmakuElem.prototype.pool = 0

                        /**
                         * DanmakuElem idStr.
                         * @member {string} idStr
                         * @memberof bilibili.community.service.dm.v1.DanmakuElem
                         * @instance
                         */
                        DanmakuElem.prototype.idStr = ''

                        /**
                         * DanmakuElem attr.
                         * @member {number} attr
                         * @memberof bilibili.community.service.dm.v1.DanmakuElem
                         * @instance
                         */
                        DanmakuElem.prototype.attr = 0

                        /**
                         * Creates a new DanmakuElem instance using the specified properties.
                         * @function create
                         * @memberof bilibili.community.service.dm.v1.DanmakuElem
                         * @static
                         * @param {bilibili.community.service.dm.v1.IDanmakuElem=} [properties] Properties to set
                         * @returns {bilibili.community.service.dm.v1.DanmakuElem} DanmakuElem instance
                         */
                        DanmakuElem.create = function create(properties) {
                            return new DanmakuElem(properties)
                        }

                        /**
                         * Encodes the specified DanmakuElem message. Does not implicitly {@link bilibili.community.service.dm.v1.DanmakuElem.verify|verify} messages.
                         * @function encode
                         * @memberof bilibili.community.service.dm.v1.DanmakuElem
                         * @static
                         * @param {bilibili.community.service.dm.v1.IDanmakuElem} message DanmakuElem message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        DanmakuElem.encode = function encode(message, writer) {
                            if (!writer) writer = $Writer.create()
                            if (message.id != null && Object.hasOwnProperty.call(message, 'id'))
                                writer.uint32(/* id 1, wireType 0 =*/ 8).int64(message.id)
                            if (
                                message.progress != null &&
                                Object.hasOwnProperty.call(message, 'progress')
                            )
                                writer.uint32(/* id 2, wireType 0 =*/ 16).int32(message.progress)
                            if (message.mode != null && Object.hasOwnProperty.call(message, 'mode'))
                                writer.uint32(/* id 3, wireType 0 =*/ 24).int32(message.mode)
                            if (
                                message.fontsize != null &&
                                Object.hasOwnProperty.call(message, 'fontsize')
                            )
                                writer.uint32(/* id 4, wireType 0 =*/ 32).int32(message.fontsize)
                            if (
                                message.color != null &&
                                Object.hasOwnProperty.call(message, 'color')
                            )
                                writer.uint32(/* id 5, wireType 0 =*/ 40).uint32(message.color)
                            if (
                                message.midHash != null &&
                                Object.hasOwnProperty.call(message, 'midHash')
                            )
                                writer.uint32(/* id 6, wireType 2 =*/ 50).string(message.midHash)
                            if (
                                message.content != null &&
                                Object.hasOwnProperty.call(message, 'content')
                            )
                                writer.uint32(/* id 7, wireType 2 =*/ 58).string(message.content)
                            if (
                                message.ctime != null &&
                                Object.hasOwnProperty.call(message, 'ctime')
                            )
                                writer.uint32(/* id 8, wireType 0 =*/ 64).int64(message.ctime)
                            if (
                                message.weight != null &&
                                Object.hasOwnProperty.call(message, 'weight')
                            )
                                writer.uint32(/* id 9, wireType 0 =*/ 72).int32(message.weight)
                            if (
                                message.action != null &&
                                Object.hasOwnProperty.call(message, 'action')
                            )
                                writer.uint32(/* id 10, wireType 2 =*/ 82).string(message.action)
                            if (message.pool != null && Object.hasOwnProperty.call(message, 'pool'))
                                writer.uint32(/* id 11, wireType 0 =*/ 88).int32(message.pool)
                            if (
                                message.idStr != null &&
                                Object.hasOwnProperty.call(message, 'idStr')
                            )
                                writer.uint32(/* id 12, wireType 2 =*/ 98).string(message.idStr)
                            if (message.attr != null && Object.hasOwnProperty.call(message, 'attr'))
                                writer.uint32(/* id 13, wireType 0 =*/ 104).int32(message.attr)
                            return writer
                        }

                        /**
                         * Encodes the specified DanmakuElem message, length delimited. Does not implicitly {@link bilibili.community.service.dm.v1.DanmakuElem.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof bilibili.community.service.dm.v1.DanmakuElem
                         * @static
                         * @param {bilibili.community.service.dm.v1.IDanmakuElem} message DanmakuElem message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        DanmakuElem.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim()
                        }

                        /**
                         * Decodes a DanmakuElem message from the specified reader or buffer.
                         * @function decode
                         * @memberof bilibili.community.service.dm.v1.DanmakuElem
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {bilibili.community.service.dm.v1.DanmakuElem} DanmakuElem
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        DanmakuElem.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader)) reader = $Reader.create(reader)
                            var end = length === undefined ? reader.len : reader.pos + length,
                                message = new $root.bilibili.community.service.dm.v1.DanmakuElem()
                            while (reader.pos < end) {
                                var tag = reader.uint32()
                                switch (tag >>> 3) {
                                    case 1:
                                        message.id = reader.int64()
                                        break
                                    case 2:
                                        message.progress = reader.int32()
                                        break
                                    case 3:
                                        message.mode = reader.int32()
                                        break
                                    case 4:
                                        message.fontsize = reader.int32()
                                        break
                                    case 5:
                                        message.color = reader.uint32()
                                        break
                                    case 6:
                                        message.midHash = reader.string()
                                        break
                                    case 7:
                                        message.content = reader.string()
                                        break
                                    case 8:
                                        message.ctime = reader.int64()
                                        break
                                    case 9:
                                        message.weight = reader.int32()
                                        break
                                    case 10:
                                        message.action = reader.string()
                                        break
                                    case 11:
                                        message.pool = reader.int32()
                                        break
                                    case 12:
                                        message.idStr = reader.string()
                                        break
                                    case 13:
                                        message.attr = reader.int32()
                                        break
                                    default:
                                        reader.skipType(tag & 7)
                                        break
                                }
                            }
                            return message
                        }

                        /**
                         * Decodes a DanmakuElem message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof bilibili.community.service.dm.v1.DanmakuElem
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {bilibili.community.service.dm.v1.DanmakuElem} DanmakuElem
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        DanmakuElem.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader)) reader = new $Reader(reader)
                            return this.decode(reader, reader.uint32())
                        }

                        /**
                         * Verifies a DanmakuElem message.
                         * @function verify
                         * @memberof bilibili.community.service.dm.v1.DanmakuElem
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        DanmakuElem.verify = function verify(message) {
                            if (typeof message !== 'object' || message === null)
                                return 'object expected'
                            if (message.id != null && message.hasOwnProperty('id'))
                                if (
                                    !$util.isInteger(message.id) &&
                                    !(
                                        message.id &&
                                        $util.isInteger(message.id.low) &&
                                        $util.isInteger(message.id.high)
                                    )
                                )
                                    return 'id: integer|Long expected'
                            if (message.progress != null && message.hasOwnProperty('progress'))
                                if (!$util.isInteger(message.progress))
                                    return 'progress: integer expected'
                            if (message.mode != null && message.hasOwnProperty('mode'))
                                if (!$util.isInteger(message.mode)) return 'mode: integer expected'
                            if (message.fontsize != null && message.hasOwnProperty('fontsize'))
                                if (!$util.isInteger(message.fontsize))
                                    return 'fontsize: integer expected'
                            if (message.color != null && message.hasOwnProperty('color'))
                                if (!$util.isInteger(message.color))
                                    return 'color: integer expected'
                            if (message.midHash != null && message.hasOwnProperty('midHash'))
                                if (!$util.isString(message.midHash))
                                    return 'midHash: string expected'
                            if (message.content != null && message.hasOwnProperty('content'))
                                if (!$util.isString(message.content))
                                    return 'content: string expected'
                            if (message.ctime != null && message.hasOwnProperty('ctime'))
                                if (
                                    !$util.isInteger(message.ctime) &&
                                    !(
                                        message.ctime &&
                                        $util.isInteger(message.ctime.low) &&
                                        $util.isInteger(message.ctime.high)
                                    )
                                )
                                    return 'ctime: integer|Long expected'
                            if (message.weight != null && message.hasOwnProperty('weight'))
                                if (!$util.isInteger(message.weight))
                                    return 'weight: integer expected'
                            if (message.action != null && message.hasOwnProperty('action'))
                                if (!$util.isString(message.action))
                                    return 'action: string expected'
                            if (message.pool != null && message.hasOwnProperty('pool'))
                                if (!$util.isInteger(message.pool)) return 'pool: integer expected'
                            if (message.idStr != null && message.hasOwnProperty('idStr'))
                                if (!$util.isString(message.idStr)) return 'idStr: string expected'
                            if (message.attr != null && message.hasOwnProperty('attr'))
                                if (!$util.isInteger(message.attr)) return 'attr: integer expected'
                            return null
                        }

                        /**
                         * Creates a DanmakuElem message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof bilibili.community.service.dm.v1.DanmakuElem
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {bilibili.community.service.dm.v1.DanmakuElem} DanmakuElem
                         */
                        DanmakuElem.fromObject = function fromObject(object) {
                            if (
                                object instanceof $root.bilibili.community.service.dm.v1.DanmakuElem
                            )
                                return object
                            var message = new $root.bilibili.community.service.dm.v1.DanmakuElem()
                            if (object.id != null)
                                if ($util.Long)
                                    (message.id = $util.Long.fromValue(object.id)).unsigned = false
                                else if (typeof object.id === 'string')
                                    message.id = parseInt(object.id, 10)
                                else if (typeof object.id === 'number') message.id = object.id
                                else if (typeof object.id === 'object')
                                    message.id = new $util.LongBits(
                                        object.id.low >>> 0,
                                        object.id.high >>> 0
                                    ).toNumber()
                            if (object.progress != null) message.progress = object.progress | 0
                            if (object.mode != null) message.mode = object.mode | 0
                            if (object.fontsize != null) message.fontsize = object.fontsize | 0
                            if (object.color != null) message.color = object.color >>> 0
                            if (object.midHash != null) message.midHash = String(object.midHash)
                            if (object.content != null) message.content = String(object.content)
                            if (object.ctime != null)
                                if ($util.Long)
                                    (message.ctime = $util.Long.fromValue(
                                        object.ctime
                                    )).unsigned = false
                                else if (typeof object.ctime === 'string')
                                    message.ctime = parseInt(object.ctime, 10)
                                else if (typeof object.ctime === 'number')
                                    message.ctime = object.ctime
                                else if (typeof object.ctime === 'object')
                                    message.ctime = new $util.LongBits(
                                        object.ctime.low >>> 0,
                                        object.ctime.high >>> 0
                                    ).toNumber()
                            if (object.weight != null) message.weight = object.weight | 0
                            if (object.action != null) message.action = String(object.action)
                            if (object.pool != null) message.pool = object.pool | 0
                            if (object.idStr != null) message.idStr = String(object.idStr)
                            if (object.attr != null) message.attr = object.attr | 0
                            return message
                        }

                        /**
                         * Creates a plain object from a DanmakuElem message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof bilibili.community.service.dm.v1.DanmakuElem
                         * @static
                         * @param {bilibili.community.service.dm.v1.DanmakuElem} message DanmakuElem
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        DanmakuElem.toObject = function toObject(message, options) {
                            if (!options) options = {}
                            var object = {}
                            if (options.defaults) {
                                if ($util.Long) {
                                    var long = new $util.Long(0, 0, false)
                                    object.id =
                                        options.longs === String
                                            ? long.toString()
                                            : options.longs === Number
                                            ? long.toNumber()
                                            : long
                                } else object.id = options.longs === String ? '0' : 0
                                object.progress = 0
                                object.mode = 0
                                object.fontsize = 0
                                object.color = 0
                                object.midHash = ''
                                object.content = ''
                                if ($util.Long) {
                                    var long = new $util.Long(0, 0, false)
                                    object.ctime =
                                        options.longs === String
                                            ? long.toString()
                                            : options.longs === Number
                                            ? long.toNumber()
                                            : long
                                } else object.ctime = options.longs === String ? '0' : 0
                                object.weight = 0
                                object.action = ''
                                object.pool = 0
                                object.idStr = ''
                                object.attr = 0
                            }
                            if (message.id != null && message.hasOwnProperty('id'))
                                if (typeof message.id === 'number')
                                    object.id =
                                        options.longs === String ? String(message.id) : message.id
                                else
                                    object.id =
                                        options.longs === String
                                            ? $util.Long.prototype.toString.call(message.id)
                                            : options.longs === Number
                                            ? new $util.LongBits(
                                                  message.id.low >>> 0,
                                                  message.id.high >>> 0
                                              ).toNumber()
                                            : message.id
                            if (message.progress != null && message.hasOwnProperty('progress'))
                                object.progress = message.progress
                            if (message.mode != null && message.hasOwnProperty('mode'))
                                object.mode = message.mode
                            if (message.fontsize != null && message.hasOwnProperty('fontsize'))
                                object.fontsize = message.fontsize
                            if (message.color != null && message.hasOwnProperty('color'))
                                object.color = message.color
                            if (message.midHash != null && message.hasOwnProperty('midHash'))
                                object.midHash = message.midHash
                            if (message.content != null && message.hasOwnProperty('content'))
                                object.content = message.content
                            if (message.ctime != null && message.hasOwnProperty('ctime'))
                                if (typeof message.ctime === 'number')
                                    object.ctime =
                                        options.longs === String
                                            ? String(message.ctime)
                                            : message.ctime
                                else
                                    object.ctime =
                                        options.longs === String
                                            ? $util.Long.prototype.toString.call(message.ctime)
                                            : options.longs === Number
                                            ? new $util.LongBits(
                                                  message.ctime.low >>> 0,
                                                  message.ctime.high >>> 0
                                              ).toNumber()
                                            : message.ctime
                            if (message.weight != null && message.hasOwnProperty('weight'))
                                object.weight = message.weight
                            if (message.action != null && message.hasOwnProperty('action'))
                                object.action = message.action
                            if (message.pool != null && message.hasOwnProperty('pool'))
                                object.pool = message.pool
                            if (message.idStr != null && message.hasOwnProperty('idStr'))
                                object.idStr = message.idStr
                            if (message.attr != null && message.hasOwnProperty('attr'))
                                object.attr = message.attr
                            return object
                        }

                        /**
                         * Converts this DanmakuElem to JSON.
                         * @function toJSON
                         * @memberof bilibili.community.service.dm.v1.DanmakuElem
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        DanmakuElem.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
                        }

                        return DanmakuElem
                    })()

                    v1.DanmakuFlag = (function () {
                        /**
                         * Properties of a DanmakuFlag.
                         * @memberof bilibili.community.service.dm.v1
                         * @interface IDanmakuFlag
                         * @property {number|Long|null} [dmid] DanmakuFlag dmid
                         * @property {number|null} [flag] DanmakuFlag flag
                         */

                        /**
                         * Constructs a new DanmakuFlag.
                         * @memberof bilibili.community.service.dm.v1
                         * @classdesc Represents a DanmakuFlag.
                         * @implements IDanmakuFlag
                         * @constructor
                         * @param {bilibili.community.service.dm.v1.IDanmakuFlag=} [properties] Properties to set
                         */
                        function DanmakuFlag(properties) {
                            if (properties)
                                for (
                                    var keys = Object.keys(properties), i = 0;
                                    i < keys.length;
                                    ++i
                                )
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]]
                        }

                        /**
                         * DanmakuFlag dmid.
                         * @member {number|Long} dmid
                         * @memberof bilibili.community.service.dm.v1.DanmakuFlag
                         * @instance
                         */
                        DanmakuFlag.prototype.dmid = $util.Long
                            ? $util.Long.fromBits(0, 0, false)
                            : 0

                        /**
                         * DanmakuFlag flag.
                         * @member {number} flag
                         * @memberof bilibili.community.service.dm.v1.DanmakuFlag
                         * @instance
                         */
                        DanmakuFlag.prototype.flag = 0

                        /**
                         * Creates a new DanmakuFlag instance using the specified properties.
                         * @function create
                         * @memberof bilibili.community.service.dm.v1.DanmakuFlag
                         * @static
                         * @param {bilibili.community.service.dm.v1.IDanmakuFlag=} [properties] Properties to set
                         * @returns {bilibili.community.service.dm.v1.DanmakuFlag} DanmakuFlag instance
                         */
                        DanmakuFlag.create = function create(properties) {
                            return new DanmakuFlag(properties)
                        }

                        /**
                         * Encodes the specified DanmakuFlag message. Does not implicitly {@link bilibili.community.service.dm.v1.DanmakuFlag.verify|verify} messages.
                         * @function encode
                         * @memberof bilibili.community.service.dm.v1.DanmakuFlag
                         * @static
                         * @param {bilibili.community.service.dm.v1.IDanmakuFlag} message DanmakuFlag message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        DanmakuFlag.encode = function encode(message, writer) {
                            if (!writer) writer = $Writer.create()
                            if (message.dmid != null && Object.hasOwnProperty.call(message, 'dmid'))
                                writer.uint32(/* id 1, wireType 0 =*/ 8).int64(message.dmid)
                            if (message.flag != null && Object.hasOwnProperty.call(message, 'flag'))
                                writer.uint32(/* id 2, wireType 0 =*/ 16).uint32(message.flag)
                            return writer
                        }

                        /**
                         * Encodes the specified DanmakuFlag message, length delimited. Does not implicitly {@link bilibili.community.service.dm.v1.DanmakuFlag.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof bilibili.community.service.dm.v1.DanmakuFlag
                         * @static
                         * @param {bilibili.community.service.dm.v1.IDanmakuFlag} message DanmakuFlag message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        DanmakuFlag.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim()
                        }

                        /**
                         * Decodes a DanmakuFlag message from the specified reader or buffer.
                         * @function decode
                         * @memberof bilibili.community.service.dm.v1.DanmakuFlag
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {bilibili.community.service.dm.v1.DanmakuFlag} DanmakuFlag
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        DanmakuFlag.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader)) reader = $Reader.create(reader)
                            var end = length === undefined ? reader.len : reader.pos + length,
                                message = new $root.bilibili.community.service.dm.v1.DanmakuFlag()
                            while (reader.pos < end) {
                                var tag = reader.uint32()
                                switch (tag >>> 3) {
                                    case 1:
                                        message.dmid = reader.int64()
                                        break
                                    case 2:
                                        message.flag = reader.uint32()
                                        break
                                    default:
                                        reader.skipType(tag & 7)
                                        break
                                }
                            }
                            return message
                        }

                        /**
                         * Decodes a DanmakuFlag message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof bilibili.community.service.dm.v1.DanmakuFlag
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {bilibili.community.service.dm.v1.DanmakuFlag} DanmakuFlag
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        DanmakuFlag.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader)) reader = new $Reader(reader)
                            return this.decode(reader, reader.uint32())
                        }

                        /**
                         * Verifies a DanmakuFlag message.
                         * @function verify
                         * @memberof bilibili.community.service.dm.v1.DanmakuFlag
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        DanmakuFlag.verify = function verify(message) {
                            if (typeof message !== 'object' || message === null)
                                return 'object expected'
                            if (message.dmid != null && message.hasOwnProperty('dmid'))
                                if (
                                    !$util.isInteger(message.dmid) &&
                                    !(
                                        message.dmid &&
                                        $util.isInteger(message.dmid.low) &&
                                        $util.isInteger(message.dmid.high)
                                    )
                                )
                                    return 'dmid: integer|Long expected'
                            if (message.flag != null && message.hasOwnProperty('flag'))
                                if (!$util.isInteger(message.flag)) return 'flag: integer expected'
                            return null
                        }

                        /**
                         * Creates a DanmakuFlag message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof bilibili.community.service.dm.v1.DanmakuFlag
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {bilibili.community.service.dm.v1.DanmakuFlag} DanmakuFlag
                         */
                        DanmakuFlag.fromObject = function fromObject(object) {
                            if (
                                object instanceof $root.bilibili.community.service.dm.v1.DanmakuFlag
                            )
                                return object
                            var message = new $root.bilibili.community.service.dm.v1.DanmakuFlag()
                            if (object.dmid != null)
                                if ($util.Long)
                                    (message.dmid = $util.Long.fromValue(
                                        object.dmid
                                    )).unsigned = false
                                else if (typeof object.dmid === 'string')
                                    message.dmid = parseInt(object.dmid, 10)
                                else if (typeof object.dmid === 'number') message.dmid = object.dmid
                                else if (typeof object.dmid === 'object')
                                    message.dmid = new $util.LongBits(
                                        object.dmid.low >>> 0,
                                        object.dmid.high >>> 0
                                    ).toNumber()
                            if (object.flag != null) message.flag = object.flag >>> 0
                            return message
                        }

                        /**
                         * Creates a plain object from a DanmakuFlag message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof bilibili.community.service.dm.v1.DanmakuFlag
                         * @static
                         * @param {bilibili.community.service.dm.v1.DanmakuFlag} message DanmakuFlag
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        DanmakuFlag.toObject = function toObject(message, options) {
                            if (!options) options = {}
                            var object = {}
                            if (options.defaults) {
                                if ($util.Long) {
                                    var long = new $util.Long(0, 0, false)
                                    object.dmid =
                                        options.longs === String
                                            ? long.toString()
                                            : options.longs === Number
                                            ? long.toNumber()
                                            : long
                                } else object.dmid = options.longs === String ? '0' : 0
                                object.flag = 0
                            }
                            if (message.dmid != null && message.hasOwnProperty('dmid'))
                                if (typeof message.dmid === 'number')
                                    object.dmid =
                                        options.longs === String
                                            ? String(message.dmid)
                                            : message.dmid
                                else
                                    object.dmid =
                                        options.longs === String
                                            ? $util.Long.prototype.toString.call(message.dmid)
                                            : options.longs === Number
                                            ? new $util.LongBits(
                                                  message.dmid.low >>> 0,
                                                  message.dmid.high >>> 0
                                              ).toNumber()
                                            : message.dmid
                            if (message.flag != null && message.hasOwnProperty('flag'))
                                object.flag = message.flag
                            return object
                        }

                        /**
                         * Converts this DanmakuFlag to JSON.
                         * @function toJSON
                         * @memberof bilibili.community.service.dm.v1.DanmakuFlag
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        DanmakuFlag.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
                        }

                        return DanmakuFlag
                    })()

                    v1.DanmakuFlagConfig = (function () {
                        /**
                         * Properties of a DanmakuFlagConfig.
                         * @memberof bilibili.community.service.dm.v1
                         * @interface IDanmakuFlagConfig
                         * @property {number|null} [recFlag] DanmakuFlagConfig recFlag
                         * @property {string|null} [recText] DanmakuFlagConfig recText
                         * @property {number|null} [recSwitch] DanmakuFlagConfig recSwitch
                         */

                        /**
                         * Constructs a new DanmakuFlagConfig.
                         * @memberof bilibili.community.service.dm.v1
                         * @classdesc Represents a DanmakuFlagConfig.
                         * @implements IDanmakuFlagConfig
                         * @constructor
                         * @param {bilibili.community.service.dm.v1.IDanmakuFlagConfig=} [properties] Properties to set
                         */
                        function DanmakuFlagConfig(properties) {
                            if (properties)
                                for (
                                    var keys = Object.keys(properties), i = 0;
                                    i < keys.length;
                                    ++i
                                )
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]]
                        }

                        /**
                         * DanmakuFlagConfig recFlag.
                         * @member {number} recFlag
                         * @memberof bilibili.community.service.dm.v1.DanmakuFlagConfig
                         * @instance
                         */
                        DanmakuFlagConfig.prototype.recFlag = 0

                        /**
                         * DanmakuFlagConfig recText.
                         * @member {string} recText
                         * @memberof bilibili.community.service.dm.v1.DanmakuFlagConfig
                         * @instance
                         */
                        DanmakuFlagConfig.prototype.recText = ''

                        /**
                         * DanmakuFlagConfig recSwitch.
                         * @member {number} recSwitch
                         * @memberof bilibili.community.service.dm.v1.DanmakuFlagConfig
                         * @instance
                         */
                        DanmakuFlagConfig.prototype.recSwitch = 0

                        /**
                         * Creates a new DanmakuFlagConfig instance using the specified properties.
                         * @function create
                         * @memberof bilibili.community.service.dm.v1.DanmakuFlagConfig
                         * @static
                         * @param {bilibili.community.service.dm.v1.IDanmakuFlagConfig=} [properties] Properties to set
                         * @returns {bilibili.community.service.dm.v1.DanmakuFlagConfig} DanmakuFlagConfig instance
                         */
                        DanmakuFlagConfig.create = function create(properties) {
                            return new DanmakuFlagConfig(properties)
                        }

                        /**
                         * Encodes the specified DanmakuFlagConfig message. Does not implicitly {@link bilibili.community.service.dm.v1.DanmakuFlagConfig.verify|verify} messages.
                         * @function encode
                         * @memberof bilibili.community.service.dm.v1.DanmakuFlagConfig
                         * @static
                         * @param {bilibili.community.service.dm.v1.IDanmakuFlagConfig} message DanmakuFlagConfig message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        DanmakuFlagConfig.encode = function encode(message, writer) {
                            if (!writer) writer = $Writer.create()
                            if (
                                message.recFlag != null &&
                                Object.hasOwnProperty.call(message, 'recFlag')
                            )
                                writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.recFlag)
                            if (
                                message.recText != null &&
                                Object.hasOwnProperty.call(message, 'recText')
                            )
                                writer.uint32(/* id 2, wireType 2 =*/ 18).string(message.recText)
                            if (
                                message.recSwitch != null &&
                                Object.hasOwnProperty.call(message, 'recSwitch')
                            )
                                writer.uint32(/* id 3, wireType 0 =*/ 24).int32(message.recSwitch)
                            return writer
                        }

                        /**
                         * Encodes the specified DanmakuFlagConfig message, length delimited. Does not implicitly {@link bilibili.community.service.dm.v1.DanmakuFlagConfig.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof bilibili.community.service.dm.v1.DanmakuFlagConfig
                         * @static
                         * @param {bilibili.community.service.dm.v1.IDanmakuFlagConfig} message DanmakuFlagConfig message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        DanmakuFlagConfig.encodeDelimited = function encodeDelimited(
                            message,
                            writer
                        ) {
                            return this.encode(message, writer).ldelim()
                        }

                        /**
                         * Decodes a DanmakuFlagConfig message from the specified reader or buffer.
                         * @function decode
                         * @memberof bilibili.community.service.dm.v1.DanmakuFlagConfig
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {bilibili.community.service.dm.v1.DanmakuFlagConfig} DanmakuFlagConfig
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        DanmakuFlagConfig.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader)) reader = $Reader.create(reader)
                            var end = length === undefined ? reader.len : reader.pos + length,
                                message = new $root.bilibili.community.service.dm.v1.DanmakuFlagConfig()
                            while (reader.pos < end) {
                                var tag = reader.uint32()
                                switch (tag >>> 3) {
                                    case 1:
                                        message.recFlag = reader.int32()
                                        break
                                    case 2:
                                        message.recText = reader.string()
                                        break
                                    case 3:
                                        message.recSwitch = reader.int32()
                                        break
                                    default:
                                        reader.skipType(tag & 7)
                                        break
                                }
                            }
                            return message
                        }

                        /**
                         * Decodes a DanmakuFlagConfig message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof bilibili.community.service.dm.v1.DanmakuFlagConfig
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {bilibili.community.service.dm.v1.DanmakuFlagConfig} DanmakuFlagConfig
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        DanmakuFlagConfig.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader)) reader = new $Reader(reader)
                            return this.decode(reader, reader.uint32())
                        }

                        /**
                         * Verifies a DanmakuFlagConfig message.
                         * @function verify
                         * @memberof bilibili.community.service.dm.v1.DanmakuFlagConfig
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        DanmakuFlagConfig.verify = function verify(message) {
                            if (typeof message !== 'object' || message === null)
                                return 'object expected'
                            if (message.recFlag != null && message.hasOwnProperty('recFlag'))
                                if (!$util.isInteger(message.recFlag))
                                    return 'recFlag: integer expected'
                            if (message.recText != null && message.hasOwnProperty('recText'))
                                if (!$util.isString(message.recText))
                                    return 'recText: string expected'
                            if (message.recSwitch != null && message.hasOwnProperty('recSwitch'))
                                if (!$util.isInteger(message.recSwitch))
                                    return 'recSwitch: integer expected'
                            return null
                        }

                        /**
                         * Creates a DanmakuFlagConfig message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof bilibili.community.service.dm.v1.DanmakuFlagConfig
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {bilibili.community.service.dm.v1.DanmakuFlagConfig} DanmakuFlagConfig
                         */
                        DanmakuFlagConfig.fromObject = function fromObject(object) {
                            if (
                                object instanceof
                                $root.bilibili.community.service.dm.v1.DanmakuFlagConfig
                            )
                                return object
                            var message = new $root.bilibili.community.service.dm.v1.DanmakuFlagConfig()
                            if (object.recFlag != null) message.recFlag = object.recFlag | 0
                            if (object.recText != null) message.recText = String(object.recText)
                            if (object.recSwitch != null) message.recSwitch = object.recSwitch | 0
                            return message
                        }

                        /**
                         * Creates a plain object from a DanmakuFlagConfig message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof bilibili.community.service.dm.v1.DanmakuFlagConfig
                         * @static
                         * @param {bilibili.community.service.dm.v1.DanmakuFlagConfig} message DanmakuFlagConfig
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        DanmakuFlagConfig.toObject = function toObject(message, options) {
                            if (!options) options = {}
                            var object = {}
                            if (options.defaults) {
                                object.recFlag = 0
                                object.recText = ''
                                object.recSwitch = 0
                            }
                            if (message.recFlag != null && message.hasOwnProperty('recFlag'))
                                object.recFlag = message.recFlag
                            if (message.recText != null && message.hasOwnProperty('recText'))
                                object.recText = message.recText
                            if (message.recSwitch != null && message.hasOwnProperty('recSwitch'))
                                object.recSwitch = message.recSwitch
                            return object
                        }

                        /**
                         * Converts this DanmakuFlagConfig to JSON.
                         * @function toJSON
                         * @memberof bilibili.community.service.dm.v1.DanmakuFlagConfig
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        DanmakuFlagConfig.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
                        }

                        return DanmakuFlagConfig
                    })()

                    v1.DanmuDefaultPlayerConfig = (function () {
                        /**
                         * Properties of a DanmuDefaultPlayerConfig.
                         * @memberof bilibili.community.service.dm.v1
                         * @interface IDanmuDefaultPlayerConfig
                         * @property {boolean|null} [playerDanmakuUseDefaultConfig] DanmuDefaultPlayerConfig playerDanmakuUseDefaultConfig
                         * @property {boolean|null} [playerDanmakuAiRecommendedSwitch] DanmuDefaultPlayerConfig playerDanmakuAiRecommendedSwitch
                         * @property {number|null} [playerDanmakuAiRecommendedLevel] DanmuDefaultPlayerConfig playerDanmakuAiRecommendedLevel
                         * @property {boolean|null} [playerDanmakuBlocktop] DanmuDefaultPlayerConfig playerDanmakuBlocktop
                         * @property {boolean|null} [playerDanmakuBlockscroll] DanmuDefaultPlayerConfig playerDanmakuBlockscroll
                         * @property {boolean|null} [playerDanmakuBlockbottom] DanmuDefaultPlayerConfig playerDanmakuBlockbottom
                         * @property {boolean|null} [playerDanmakuBlockcolorful] DanmuDefaultPlayerConfig playerDanmakuBlockcolorful
                         * @property {boolean|null} [playerDanmakuBlockrepeat] DanmuDefaultPlayerConfig playerDanmakuBlockrepeat
                         * @property {boolean|null} [playerDanmakuBlockspecial] DanmuDefaultPlayerConfig playerDanmakuBlockspecial
                         * @property {number|null} [playerDanmakuOpacity] DanmuDefaultPlayerConfig playerDanmakuOpacity
                         * @property {number|null} [playerDanmakuScalingfactor] DanmuDefaultPlayerConfig playerDanmakuScalingfactor
                         * @property {number|null} [playerDanmakuDomain] DanmuDefaultPlayerConfig playerDanmakuDomain
                         * @property {number|null} [playerDanmakuSpeed] DanmuDefaultPlayerConfig playerDanmakuSpeed
                         * @property {boolean|null} [inlinePlayerDanmakuSwitch] DanmuDefaultPlayerConfig inlinePlayerDanmakuSwitch
                         */

                        /**
                         * Constructs a new DanmuDefaultPlayerConfig.
                         * @memberof bilibili.community.service.dm.v1
                         * @classdesc Represents a DanmuDefaultPlayerConfig.
                         * @implements IDanmuDefaultPlayerConfig
                         * @constructor
                         * @param {bilibili.community.service.dm.v1.IDanmuDefaultPlayerConfig=} [properties] Properties to set
                         */
                        function DanmuDefaultPlayerConfig(properties) {
                            if (properties)
                                for (
                                    var keys = Object.keys(properties), i = 0;
                                    i < keys.length;
                                    ++i
                                )
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]]
                        }

                        /**
                         * DanmuDefaultPlayerConfig playerDanmakuUseDefaultConfig.
                         * @member {boolean} playerDanmakuUseDefaultConfig
                         * @memberof bilibili.community.service.dm.v1.DanmuDefaultPlayerConfig
                         * @instance
                         */
                        DanmuDefaultPlayerConfig.prototype.playerDanmakuUseDefaultConfig = false

                        /**
                         * DanmuDefaultPlayerConfig playerDanmakuAiRecommendedSwitch.
                         * @member {boolean} playerDanmakuAiRecommendedSwitch
                         * @memberof bilibili.community.service.dm.v1.DanmuDefaultPlayerConfig
                         * @instance
                         */
                        DanmuDefaultPlayerConfig.prototype.playerDanmakuAiRecommendedSwitch = false

                        /**
                         * DanmuDefaultPlayerConfig playerDanmakuAiRecommendedLevel.
                         * @member {number} playerDanmakuAiRecommendedLevel
                         * @memberof bilibili.community.service.dm.v1.DanmuDefaultPlayerConfig
                         * @instance
                         */
                        DanmuDefaultPlayerConfig.prototype.playerDanmakuAiRecommendedLevel = 0

                        /**
                         * DanmuDefaultPlayerConfig playerDanmakuBlocktop.
                         * @member {boolean} playerDanmakuBlocktop
                         * @memberof bilibili.community.service.dm.v1.DanmuDefaultPlayerConfig
                         * @instance
                         */
                        DanmuDefaultPlayerConfig.prototype.playerDanmakuBlocktop = false

                        /**
                         * DanmuDefaultPlayerConfig playerDanmakuBlockscroll.
                         * @member {boolean} playerDanmakuBlockscroll
                         * @memberof bilibili.community.service.dm.v1.DanmuDefaultPlayerConfig
                         * @instance
                         */
                        DanmuDefaultPlayerConfig.prototype.playerDanmakuBlockscroll = false

                        /**
                         * DanmuDefaultPlayerConfig playerDanmakuBlockbottom.
                         * @member {boolean} playerDanmakuBlockbottom
                         * @memberof bilibili.community.service.dm.v1.DanmuDefaultPlayerConfig
                         * @instance
                         */
                        DanmuDefaultPlayerConfig.prototype.playerDanmakuBlockbottom = false

                        /**
                         * DanmuDefaultPlayerConfig playerDanmakuBlockcolorful.
                         * @member {boolean} playerDanmakuBlockcolorful
                         * @memberof bilibili.community.service.dm.v1.DanmuDefaultPlayerConfig
                         * @instance
                         */
                        DanmuDefaultPlayerConfig.prototype.playerDanmakuBlockcolorful = false

                        /**
                         * DanmuDefaultPlayerConfig playerDanmakuBlockrepeat.
                         * @member {boolean} playerDanmakuBlockrepeat
                         * @memberof bilibili.community.service.dm.v1.DanmuDefaultPlayerConfig
                         * @instance
                         */
                        DanmuDefaultPlayerConfig.prototype.playerDanmakuBlockrepeat = false

                        /**
                         * DanmuDefaultPlayerConfig playerDanmakuBlockspecial.
                         * @member {boolean} playerDanmakuBlockspecial
                         * @memberof bilibili.community.service.dm.v1.DanmuDefaultPlayerConfig
                         * @instance
                         */
                        DanmuDefaultPlayerConfig.prototype.playerDanmakuBlockspecial = false

                        /**
                         * DanmuDefaultPlayerConfig playerDanmakuOpacity.
                         * @member {number} playerDanmakuOpacity
                         * @memberof bilibili.community.service.dm.v1.DanmuDefaultPlayerConfig
                         * @instance
                         */
                        DanmuDefaultPlayerConfig.prototype.playerDanmakuOpacity = 0

                        /**
                         * DanmuDefaultPlayerConfig playerDanmakuScalingfactor.
                         * @member {number} playerDanmakuScalingfactor
                         * @memberof bilibili.community.service.dm.v1.DanmuDefaultPlayerConfig
                         * @instance
                         */
                        DanmuDefaultPlayerConfig.prototype.playerDanmakuScalingfactor = 0

                        /**
                         * DanmuDefaultPlayerConfig playerDanmakuDomain.
                         * @member {number} playerDanmakuDomain
                         * @memberof bilibili.community.service.dm.v1.DanmuDefaultPlayerConfig
                         * @instance
                         */
                        DanmuDefaultPlayerConfig.prototype.playerDanmakuDomain = 0

                        /**
                         * DanmuDefaultPlayerConfig playerDanmakuSpeed.
                         * @member {number} playerDanmakuSpeed
                         * @memberof bilibili.community.service.dm.v1.DanmuDefaultPlayerConfig
                         * @instance
                         */
                        DanmuDefaultPlayerConfig.prototype.playerDanmakuSpeed = 0

                        /**
                         * DanmuDefaultPlayerConfig inlinePlayerDanmakuSwitch.
                         * @member {boolean} inlinePlayerDanmakuSwitch
                         * @memberof bilibili.community.service.dm.v1.DanmuDefaultPlayerConfig
                         * @instance
                         */
                        DanmuDefaultPlayerConfig.prototype.inlinePlayerDanmakuSwitch = false

                        /**
                         * Creates a new DanmuDefaultPlayerConfig instance using the specified properties.
                         * @function create
                         * @memberof bilibili.community.service.dm.v1.DanmuDefaultPlayerConfig
                         * @static
                         * @param {bilibili.community.service.dm.v1.IDanmuDefaultPlayerConfig=} [properties] Properties to set
                         * @returns {bilibili.community.service.dm.v1.DanmuDefaultPlayerConfig} DanmuDefaultPlayerConfig instance
                         */
                        DanmuDefaultPlayerConfig.create = function create(properties) {
                            return new DanmuDefaultPlayerConfig(properties)
                        }

                        /**
                         * Encodes the specified DanmuDefaultPlayerConfig message. Does not implicitly {@link bilibili.community.service.dm.v1.DanmuDefaultPlayerConfig.verify|verify} messages.
                         * @function encode
                         * @memberof bilibili.community.service.dm.v1.DanmuDefaultPlayerConfig
                         * @static
                         * @param {bilibili.community.service.dm.v1.IDanmuDefaultPlayerConfig} message DanmuDefaultPlayerConfig message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        DanmuDefaultPlayerConfig.encode = function encode(message, writer) {
                            if (!writer) writer = $Writer.create()
                            if (
                                message.playerDanmakuUseDefaultConfig != null &&
                                Object.hasOwnProperty.call(message, 'playerDanmakuUseDefaultConfig')
                            )
                                writer
                                    .uint32(/* id 1, wireType 0 =*/ 8)
                                    .bool(message.playerDanmakuUseDefaultConfig)
                            if (
                                message.playerDanmakuAiRecommendedSwitch != null &&
                                Object.hasOwnProperty.call(
                                    message,
                                    'playerDanmakuAiRecommendedSwitch'
                                )
                            )
                                writer
                                    .uint32(/* id 4, wireType 0 =*/ 32)
                                    .bool(message.playerDanmakuAiRecommendedSwitch)
                            if (
                                message.playerDanmakuAiRecommendedLevel != null &&
                                Object.hasOwnProperty.call(
                                    message,
                                    'playerDanmakuAiRecommendedLevel'
                                )
                            )
                                writer
                                    .uint32(/* id 5, wireType 0 =*/ 40)
                                    .int32(message.playerDanmakuAiRecommendedLevel)
                            if (
                                message.playerDanmakuBlocktop != null &&
                                Object.hasOwnProperty.call(message, 'playerDanmakuBlocktop')
                            )
                                writer
                                    .uint32(/* id 6, wireType 0 =*/ 48)
                                    .bool(message.playerDanmakuBlocktop)
                            if (
                                message.playerDanmakuBlockscroll != null &&
                                Object.hasOwnProperty.call(message, 'playerDanmakuBlockscroll')
                            )
                                writer
                                    .uint32(/* id 7, wireType 0 =*/ 56)
                                    .bool(message.playerDanmakuBlockscroll)
                            if (
                                message.playerDanmakuBlockbottom != null &&
                                Object.hasOwnProperty.call(message, 'playerDanmakuBlockbottom')
                            )
                                writer
                                    .uint32(/* id 8, wireType 0 =*/ 64)
                                    .bool(message.playerDanmakuBlockbottom)
                            if (
                                message.playerDanmakuBlockcolorful != null &&
                                Object.hasOwnProperty.call(message, 'playerDanmakuBlockcolorful')
                            )
                                writer
                                    .uint32(/* id 9, wireType 0 =*/ 72)
                                    .bool(message.playerDanmakuBlockcolorful)
                            if (
                                message.playerDanmakuBlockrepeat != null &&
                                Object.hasOwnProperty.call(message, 'playerDanmakuBlockrepeat')
                            )
                                writer
                                    .uint32(/* id 10, wireType 0 =*/ 80)
                                    .bool(message.playerDanmakuBlockrepeat)
                            if (
                                message.playerDanmakuBlockspecial != null &&
                                Object.hasOwnProperty.call(message, 'playerDanmakuBlockspecial')
                            )
                                writer
                                    .uint32(/* id 11, wireType 0 =*/ 88)
                                    .bool(message.playerDanmakuBlockspecial)
                            if (
                                message.playerDanmakuOpacity != null &&
                                Object.hasOwnProperty.call(message, 'playerDanmakuOpacity')
                            )
                                writer
                                    .uint32(/* id 12, wireType 5 =*/ 101)
                                    .float(message.playerDanmakuOpacity)
                            if (
                                message.playerDanmakuScalingfactor != null &&
                                Object.hasOwnProperty.call(message, 'playerDanmakuScalingfactor')
                            )
                                writer
                                    .uint32(/* id 13, wireType 5 =*/ 109)
                                    .float(message.playerDanmakuScalingfactor)
                            if (
                                message.playerDanmakuDomain != null &&
                                Object.hasOwnProperty.call(message, 'playerDanmakuDomain')
                            )
                                writer
                                    .uint32(/* id 14, wireType 5 =*/ 117)
                                    .float(message.playerDanmakuDomain)
                            if (
                                message.playerDanmakuSpeed != null &&
                                Object.hasOwnProperty.call(message, 'playerDanmakuSpeed')
                            )
                                writer
                                    .uint32(/* id 15, wireType 0 =*/ 120)
                                    .int32(message.playerDanmakuSpeed)
                            if (
                                message.inlinePlayerDanmakuSwitch != null &&
                                Object.hasOwnProperty.call(message, 'inlinePlayerDanmakuSwitch')
                            )
                                writer
                                    .uint32(/* id 16, wireType 0 =*/ 128)
                                    .bool(message.inlinePlayerDanmakuSwitch)
                            return writer
                        }

                        /**
                         * Encodes the specified DanmuDefaultPlayerConfig message, length delimited. Does not implicitly {@link bilibili.community.service.dm.v1.DanmuDefaultPlayerConfig.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof bilibili.community.service.dm.v1.DanmuDefaultPlayerConfig
                         * @static
                         * @param {bilibili.community.service.dm.v1.IDanmuDefaultPlayerConfig} message DanmuDefaultPlayerConfig message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        DanmuDefaultPlayerConfig.encodeDelimited = function encodeDelimited(
                            message,
                            writer
                        ) {
                            return this.encode(message, writer).ldelim()
                        }

                        /**
                         * Decodes a DanmuDefaultPlayerConfig message from the specified reader or buffer.
                         * @function decode
                         * @memberof bilibili.community.service.dm.v1.DanmuDefaultPlayerConfig
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {bilibili.community.service.dm.v1.DanmuDefaultPlayerConfig} DanmuDefaultPlayerConfig
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        DanmuDefaultPlayerConfig.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader)) reader = $Reader.create(reader)
                            var end = length === undefined ? reader.len : reader.pos + length,
                                message = new $root.bilibili.community.service.dm.v1.DanmuDefaultPlayerConfig()
                            while (reader.pos < end) {
                                var tag = reader.uint32()
                                switch (tag >>> 3) {
                                    case 1:
                                        message.playerDanmakuUseDefaultConfig = reader.bool()
                                        break
                                    case 4:
                                        message.playerDanmakuAiRecommendedSwitch = reader.bool()
                                        break
                                    case 5:
                                        message.playerDanmakuAiRecommendedLevel = reader.int32()
                                        break
                                    case 6:
                                        message.playerDanmakuBlocktop = reader.bool()
                                        break
                                    case 7:
                                        message.playerDanmakuBlockscroll = reader.bool()
                                        break
                                    case 8:
                                        message.playerDanmakuBlockbottom = reader.bool()
                                        break
                                    case 9:
                                        message.playerDanmakuBlockcolorful = reader.bool()
                                        break
                                    case 10:
                                        message.playerDanmakuBlockrepeat = reader.bool()
                                        break
                                    case 11:
                                        message.playerDanmakuBlockspecial = reader.bool()
                                        break
                                    case 12:
                                        message.playerDanmakuOpacity = reader.float()
                                        break
                                    case 13:
                                        message.playerDanmakuScalingfactor = reader.float()
                                        break
                                    case 14:
                                        message.playerDanmakuDomain = reader.float()
                                        break
                                    case 15:
                                        message.playerDanmakuSpeed = reader.int32()
                                        break
                                    case 16:
                                        message.inlinePlayerDanmakuSwitch = reader.bool()
                                        break
                                    default:
                                        reader.skipType(tag & 7)
                                        break
                                }
                            }
                            return message
                        }

                        /**
                         * Decodes a DanmuDefaultPlayerConfig message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof bilibili.community.service.dm.v1.DanmuDefaultPlayerConfig
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {bilibili.community.service.dm.v1.DanmuDefaultPlayerConfig} DanmuDefaultPlayerConfig
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        DanmuDefaultPlayerConfig.decodeDelimited = function decodeDelimited(
                            reader
                        ) {
                            if (!(reader instanceof $Reader)) reader = new $Reader(reader)
                            return this.decode(reader, reader.uint32())
                        }

                        /**
                         * Verifies a DanmuDefaultPlayerConfig message.
                         * @function verify
                         * @memberof bilibili.community.service.dm.v1.DanmuDefaultPlayerConfig
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        DanmuDefaultPlayerConfig.verify = function verify(message) {
                            if (typeof message !== 'object' || message === null)
                                return 'object expected'
                            if (
                                message.playerDanmakuUseDefaultConfig != null &&
                                message.hasOwnProperty('playerDanmakuUseDefaultConfig')
                            )
                                if (typeof message.playerDanmakuUseDefaultConfig !== 'boolean')
                                    return 'playerDanmakuUseDefaultConfig: boolean expected'
                            if (
                                message.playerDanmakuAiRecommendedSwitch != null &&
                                message.hasOwnProperty('playerDanmakuAiRecommendedSwitch')
                            )
                                if (typeof message.playerDanmakuAiRecommendedSwitch !== 'boolean')
                                    return 'playerDanmakuAiRecommendedSwitch: boolean expected'
                            if (
                                message.playerDanmakuAiRecommendedLevel != null &&
                                message.hasOwnProperty('playerDanmakuAiRecommendedLevel')
                            )
                                if (!$util.isInteger(message.playerDanmakuAiRecommendedLevel))
                                    return 'playerDanmakuAiRecommendedLevel: integer expected'
                            if (
                                message.playerDanmakuBlocktop != null &&
                                message.hasOwnProperty('playerDanmakuBlocktop')
                            )
                                if (typeof message.playerDanmakuBlocktop !== 'boolean')
                                    return 'playerDanmakuBlocktop: boolean expected'
                            if (
                                message.playerDanmakuBlockscroll != null &&
                                message.hasOwnProperty('playerDanmakuBlockscroll')
                            )
                                if (typeof message.playerDanmakuBlockscroll !== 'boolean')
                                    return 'playerDanmakuBlockscroll: boolean expected'
                            if (
                                message.playerDanmakuBlockbottom != null &&
                                message.hasOwnProperty('playerDanmakuBlockbottom')
                            )
                                if (typeof message.playerDanmakuBlockbottom !== 'boolean')
                                    return 'playerDanmakuBlockbottom: boolean expected'
                            if (
                                message.playerDanmakuBlockcolorful != null &&
                                message.hasOwnProperty('playerDanmakuBlockcolorful')
                            )
                                if (typeof message.playerDanmakuBlockcolorful !== 'boolean')
                                    return 'playerDanmakuBlockcolorful: boolean expected'
                            if (
                                message.playerDanmakuBlockrepeat != null &&
                                message.hasOwnProperty('playerDanmakuBlockrepeat')
                            )
                                if (typeof message.playerDanmakuBlockrepeat !== 'boolean')
                                    return 'playerDanmakuBlockrepeat: boolean expected'
                            if (
                                message.playerDanmakuBlockspecial != null &&
                                message.hasOwnProperty('playerDanmakuBlockspecial')
                            )
                                if (typeof message.playerDanmakuBlockspecial !== 'boolean')
                                    return 'playerDanmakuBlockspecial: boolean expected'
                            if (
                                message.playerDanmakuOpacity != null &&
                                message.hasOwnProperty('playerDanmakuOpacity')
                            )
                                if (typeof message.playerDanmakuOpacity !== 'number')
                                    return 'playerDanmakuOpacity: number expected'
                            if (
                                message.playerDanmakuScalingfactor != null &&
                                message.hasOwnProperty('playerDanmakuScalingfactor')
                            )
                                if (typeof message.playerDanmakuScalingfactor !== 'number')
                                    return 'playerDanmakuScalingfactor: number expected'
                            if (
                                message.playerDanmakuDomain != null &&
                                message.hasOwnProperty('playerDanmakuDomain')
                            )
                                if (typeof message.playerDanmakuDomain !== 'number')
                                    return 'playerDanmakuDomain: number expected'
                            if (
                                message.playerDanmakuSpeed != null &&
                                message.hasOwnProperty('playerDanmakuSpeed')
                            )
                                if (!$util.isInteger(message.playerDanmakuSpeed))
                                    return 'playerDanmakuSpeed: integer expected'
                            if (
                                message.inlinePlayerDanmakuSwitch != null &&
                                message.hasOwnProperty('inlinePlayerDanmakuSwitch')
                            )
                                if (typeof message.inlinePlayerDanmakuSwitch !== 'boolean')
                                    return 'inlinePlayerDanmakuSwitch: boolean expected'
                            return null
                        }

                        /**
                         * Creates a DanmuDefaultPlayerConfig message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof bilibili.community.service.dm.v1.DanmuDefaultPlayerConfig
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {bilibili.community.service.dm.v1.DanmuDefaultPlayerConfig} DanmuDefaultPlayerConfig
                         */
                        DanmuDefaultPlayerConfig.fromObject = function fromObject(object) {
                            if (
                                object instanceof
                                $root.bilibili.community.service.dm.v1.DanmuDefaultPlayerConfig
                            )
                                return object
                            var message = new $root.bilibili.community.service.dm.v1.DanmuDefaultPlayerConfig()
                            if (object.playerDanmakuUseDefaultConfig != null)
                                message.playerDanmakuUseDefaultConfig = Boolean(
                                    object.playerDanmakuUseDefaultConfig
                                )
                            if (object.playerDanmakuAiRecommendedSwitch != null)
                                message.playerDanmakuAiRecommendedSwitch = Boolean(
                                    object.playerDanmakuAiRecommendedSwitch
                                )
                            if (object.playerDanmakuAiRecommendedLevel != null)
                                message.playerDanmakuAiRecommendedLevel =
                                    object.playerDanmakuAiRecommendedLevel | 0
                            if (object.playerDanmakuBlocktop != null)
                                message.playerDanmakuBlocktop = Boolean(
                                    object.playerDanmakuBlocktop
                                )
                            if (object.playerDanmakuBlockscroll != null)
                                message.playerDanmakuBlockscroll = Boolean(
                                    object.playerDanmakuBlockscroll
                                )
                            if (object.playerDanmakuBlockbottom != null)
                                message.playerDanmakuBlockbottom = Boolean(
                                    object.playerDanmakuBlockbottom
                                )
                            if (object.playerDanmakuBlockcolorful != null)
                                message.playerDanmakuBlockcolorful = Boolean(
                                    object.playerDanmakuBlockcolorful
                                )
                            if (object.playerDanmakuBlockrepeat != null)
                                message.playerDanmakuBlockrepeat = Boolean(
                                    object.playerDanmakuBlockrepeat
                                )
                            if (object.playerDanmakuBlockspecial != null)
                                message.playerDanmakuBlockspecial = Boolean(
                                    object.playerDanmakuBlockspecial
                                )
                            if (object.playerDanmakuOpacity != null)
                                message.playerDanmakuOpacity = Number(object.playerDanmakuOpacity)
                            if (object.playerDanmakuScalingfactor != null)
                                message.playerDanmakuScalingfactor = Number(
                                    object.playerDanmakuScalingfactor
                                )
                            if (object.playerDanmakuDomain != null)
                                message.playerDanmakuDomain = Number(object.playerDanmakuDomain)
                            if (object.playerDanmakuSpeed != null)
                                message.playerDanmakuSpeed = object.playerDanmakuSpeed | 0
                            if (object.inlinePlayerDanmakuSwitch != null)
                                message.inlinePlayerDanmakuSwitch = Boolean(
                                    object.inlinePlayerDanmakuSwitch
                                )
                            return message
                        }

                        /**
                         * Creates a plain object from a DanmuDefaultPlayerConfig message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof bilibili.community.service.dm.v1.DanmuDefaultPlayerConfig
                         * @static
                         * @param {bilibili.community.service.dm.v1.DanmuDefaultPlayerConfig} message DanmuDefaultPlayerConfig
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        DanmuDefaultPlayerConfig.toObject = function toObject(message, options) {
                            if (!options) options = {}
                            var object = {}
                            if (options.defaults) {
                                object.playerDanmakuUseDefaultConfig = false
                                object.playerDanmakuAiRecommendedSwitch = false
                                object.playerDanmakuAiRecommendedLevel = 0
                                object.playerDanmakuBlocktop = false
                                object.playerDanmakuBlockscroll = false
                                object.playerDanmakuBlockbottom = false
                                object.playerDanmakuBlockcolorful = false
                                object.playerDanmakuBlockrepeat = false
                                object.playerDanmakuBlockspecial = false
                                object.playerDanmakuOpacity = 0
                                object.playerDanmakuScalingfactor = 0
                                object.playerDanmakuDomain = 0
                                object.playerDanmakuSpeed = 0
                                object.inlinePlayerDanmakuSwitch = false
                            }
                            if (
                                message.playerDanmakuUseDefaultConfig != null &&
                                message.hasOwnProperty('playerDanmakuUseDefaultConfig')
                            )
                                object.playerDanmakuUseDefaultConfig =
                                    message.playerDanmakuUseDefaultConfig
                            if (
                                message.playerDanmakuAiRecommendedSwitch != null &&
                                message.hasOwnProperty('playerDanmakuAiRecommendedSwitch')
                            )
                                object.playerDanmakuAiRecommendedSwitch =
                                    message.playerDanmakuAiRecommendedSwitch
                            if (
                                message.playerDanmakuAiRecommendedLevel != null &&
                                message.hasOwnProperty('playerDanmakuAiRecommendedLevel')
                            )
                                object.playerDanmakuAiRecommendedLevel =
                                    message.playerDanmakuAiRecommendedLevel
                            if (
                                message.playerDanmakuBlocktop != null &&
                                message.hasOwnProperty('playerDanmakuBlocktop')
                            )
                                object.playerDanmakuBlocktop = message.playerDanmakuBlocktop
                            if (
                                message.playerDanmakuBlockscroll != null &&
                                message.hasOwnProperty('playerDanmakuBlockscroll')
                            )
                                object.playerDanmakuBlockscroll = message.playerDanmakuBlockscroll
                            if (
                                message.playerDanmakuBlockbottom != null &&
                                message.hasOwnProperty('playerDanmakuBlockbottom')
                            )
                                object.playerDanmakuBlockbottom = message.playerDanmakuBlockbottom
                            if (
                                message.playerDanmakuBlockcolorful != null &&
                                message.hasOwnProperty('playerDanmakuBlockcolorful')
                            )
                                object.playerDanmakuBlockcolorful =
                                    message.playerDanmakuBlockcolorful
                            if (
                                message.playerDanmakuBlockrepeat != null &&
                                message.hasOwnProperty('playerDanmakuBlockrepeat')
                            )
                                object.playerDanmakuBlockrepeat = message.playerDanmakuBlockrepeat
                            if (
                                message.playerDanmakuBlockspecial != null &&
                                message.hasOwnProperty('playerDanmakuBlockspecial')
                            )
                                object.playerDanmakuBlockspecial = message.playerDanmakuBlockspecial
                            if (
                                message.playerDanmakuOpacity != null &&
                                message.hasOwnProperty('playerDanmakuOpacity')
                            )
                                object.playerDanmakuOpacity =
                                    options.json && !isFinite(message.playerDanmakuOpacity)
                                        ? String(message.playerDanmakuOpacity)
                                        : message.playerDanmakuOpacity
                            if (
                                message.playerDanmakuScalingfactor != null &&
                                message.hasOwnProperty('playerDanmakuScalingfactor')
                            )
                                object.playerDanmakuScalingfactor =
                                    options.json && !isFinite(message.playerDanmakuScalingfactor)
                                        ? String(message.playerDanmakuScalingfactor)
                                        : message.playerDanmakuScalingfactor
                            if (
                                message.playerDanmakuDomain != null &&
                                message.hasOwnProperty('playerDanmakuDomain')
                            )
                                object.playerDanmakuDomain =
                                    options.json && !isFinite(message.playerDanmakuDomain)
                                        ? String(message.playerDanmakuDomain)
                                        : message.playerDanmakuDomain
                            if (
                                message.playerDanmakuSpeed != null &&
                                message.hasOwnProperty('playerDanmakuSpeed')
                            )
                                object.playerDanmakuSpeed = message.playerDanmakuSpeed
                            if (
                                message.inlinePlayerDanmakuSwitch != null &&
                                message.hasOwnProperty('inlinePlayerDanmakuSwitch')
                            )
                                object.inlinePlayerDanmakuSwitch = message.inlinePlayerDanmakuSwitch
                            return object
                        }

                        /**
                         * Converts this DanmuDefaultPlayerConfig to JSON.
                         * @function toJSON
                         * @memberof bilibili.community.service.dm.v1.DanmuDefaultPlayerConfig
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        DanmuDefaultPlayerConfig.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
                        }

                        return DanmuDefaultPlayerConfig
                    })()

                    v1.DanmuPlayerConfig = (function () {
                        /**
                         * Properties of a DanmuPlayerConfig.
                         * @memberof bilibili.community.service.dm.v1
                         * @interface IDanmuPlayerConfig
                         * @property {boolean|null} [playerDanmakuSwitch] DanmuPlayerConfig playerDanmakuSwitch
                         * @property {boolean|null} [playerDanmakuSwitchSave] DanmuPlayerConfig playerDanmakuSwitchSave
                         * @property {boolean|null} [playerDanmakuUseDefaultConfig] DanmuPlayerConfig playerDanmakuUseDefaultConfig
                         * @property {boolean|null} [playerDanmakuAiRecommendedSwitch] DanmuPlayerConfig playerDanmakuAiRecommendedSwitch
                         * @property {number|null} [playerDanmakuAiRecommendedLevel] DanmuPlayerConfig playerDanmakuAiRecommendedLevel
                         * @property {boolean|null} [playerDanmakuBlocktop] DanmuPlayerConfig playerDanmakuBlocktop
                         * @property {boolean|null} [playerDanmakuBlockscroll] DanmuPlayerConfig playerDanmakuBlockscroll
                         * @property {boolean|null} [playerDanmakuBlockbottom] DanmuPlayerConfig playerDanmakuBlockbottom
                         * @property {boolean|null} [playerDanmakuBlockcolorful] DanmuPlayerConfig playerDanmakuBlockcolorful
                         * @property {boolean|null} [playerDanmakuBlockrepeat] DanmuPlayerConfig playerDanmakuBlockrepeat
                         * @property {boolean|null} [playerDanmakuBlockspecial] DanmuPlayerConfig playerDanmakuBlockspecial
                         * @property {number|null} [playerDanmakuOpacity] DanmuPlayerConfig playerDanmakuOpacity
                         * @property {number|null} [playerDanmakuScalingfactor] DanmuPlayerConfig playerDanmakuScalingfactor
                         * @property {number|null} [playerDanmakuDomain] DanmuPlayerConfig playerDanmakuDomain
                         * @property {number|null} [playerDanmakuSpeed] DanmuPlayerConfig playerDanmakuSpeed
                         * @property {boolean|null} [playerDanmakuEnableblocklist] DanmuPlayerConfig playerDanmakuEnableblocklist
                         * @property {boolean|null} [inlinePlayerDanmakuSwitch] DanmuPlayerConfig inlinePlayerDanmakuSwitch
                         * @property {number|null} [inlinePlayerDanmakuConfig] DanmuPlayerConfig inlinePlayerDanmakuConfig
                         */

                        /**
                         * Constructs a new DanmuPlayerConfig.
                         * @memberof bilibili.community.service.dm.v1
                         * @classdesc Represents a DanmuPlayerConfig.
                         * @implements IDanmuPlayerConfig
                         * @constructor
                         * @param {bilibili.community.service.dm.v1.IDanmuPlayerConfig=} [properties] Properties to set
                         */
                        function DanmuPlayerConfig(properties) {
                            if (properties)
                                for (
                                    var keys = Object.keys(properties), i = 0;
                                    i < keys.length;
                                    ++i
                                )
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]]
                        }

                        /**
                         * DanmuPlayerConfig playerDanmakuSwitch.
                         * @member {boolean} playerDanmakuSwitch
                         * @memberof bilibili.community.service.dm.v1.DanmuPlayerConfig
                         * @instance
                         */
                        DanmuPlayerConfig.prototype.playerDanmakuSwitch = false

                        /**
                         * DanmuPlayerConfig playerDanmakuSwitchSave.
                         * @member {boolean} playerDanmakuSwitchSave
                         * @memberof bilibili.community.service.dm.v1.DanmuPlayerConfig
                         * @instance
                         */
                        DanmuPlayerConfig.prototype.playerDanmakuSwitchSave = false

                        /**
                         * DanmuPlayerConfig playerDanmakuUseDefaultConfig.
                         * @member {boolean} playerDanmakuUseDefaultConfig
                         * @memberof bilibili.community.service.dm.v1.DanmuPlayerConfig
                         * @instance
                         */
                        DanmuPlayerConfig.prototype.playerDanmakuUseDefaultConfig = false

                        /**
                         * DanmuPlayerConfig playerDanmakuAiRecommendedSwitch.
                         * @member {boolean} playerDanmakuAiRecommendedSwitch
                         * @memberof bilibili.community.service.dm.v1.DanmuPlayerConfig
                         * @instance
                         */
                        DanmuPlayerConfig.prototype.playerDanmakuAiRecommendedSwitch = false

                        /**
                         * DanmuPlayerConfig playerDanmakuAiRecommendedLevel.
                         * @member {number} playerDanmakuAiRecommendedLevel
                         * @memberof bilibili.community.service.dm.v1.DanmuPlayerConfig
                         * @instance
                         */
                        DanmuPlayerConfig.prototype.playerDanmakuAiRecommendedLevel = 0

                        /**
                         * DanmuPlayerConfig playerDanmakuBlocktop.
                         * @member {boolean} playerDanmakuBlocktop
                         * @memberof bilibili.community.service.dm.v1.DanmuPlayerConfig
                         * @instance
                         */
                        DanmuPlayerConfig.prototype.playerDanmakuBlocktop = false

                        /**
                         * DanmuPlayerConfig playerDanmakuBlockscroll.
                         * @member {boolean} playerDanmakuBlockscroll
                         * @memberof bilibili.community.service.dm.v1.DanmuPlayerConfig
                         * @instance
                         */
                        DanmuPlayerConfig.prototype.playerDanmakuBlockscroll = false

                        /**
                         * DanmuPlayerConfig playerDanmakuBlockbottom.
                         * @member {boolean} playerDanmakuBlockbottom
                         * @memberof bilibili.community.service.dm.v1.DanmuPlayerConfig
                         * @instance
                         */
                        DanmuPlayerConfig.prototype.playerDanmakuBlockbottom = false

                        /**
                         * DanmuPlayerConfig playerDanmakuBlockcolorful.
                         * @member {boolean} playerDanmakuBlockcolorful
                         * @memberof bilibili.community.service.dm.v1.DanmuPlayerConfig
                         * @instance
                         */
                        DanmuPlayerConfig.prototype.playerDanmakuBlockcolorful = false

                        /**
                         * DanmuPlayerConfig playerDanmakuBlockrepeat.
                         * @member {boolean} playerDanmakuBlockrepeat
                         * @memberof bilibili.community.service.dm.v1.DanmuPlayerConfig
                         * @instance
                         */
                        DanmuPlayerConfig.prototype.playerDanmakuBlockrepeat = false

                        /**
                         * DanmuPlayerConfig playerDanmakuBlockspecial.
                         * @member {boolean} playerDanmakuBlockspecial
                         * @memberof bilibili.community.service.dm.v1.DanmuPlayerConfig
                         * @instance
                         */
                        DanmuPlayerConfig.prototype.playerDanmakuBlockspecial = false

                        /**
                         * DanmuPlayerConfig playerDanmakuOpacity.
                         * @member {number} playerDanmakuOpacity
                         * @memberof bilibili.community.service.dm.v1.DanmuPlayerConfig
                         * @instance
                         */
                        DanmuPlayerConfig.prototype.playerDanmakuOpacity = 0

                        /**
                         * DanmuPlayerConfig playerDanmakuScalingfactor.
                         * @member {number} playerDanmakuScalingfactor
                         * @memberof bilibili.community.service.dm.v1.DanmuPlayerConfig
                         * @instance
                         */
                        DanmuPlayerConfig.prototype.playerDanmakuScalingfactor = 0

                        /**
                         * DanmuPlayerConfig playerDanmakuDomain.
                         * @member {number} playerDanmakuDomain
                         * @memberof bilibili.community.service.dm.v1.DanmuPlayerConfig
                         * @instance
                         */
                        DanmuPlayerConfig.prototype.playerDanmakuDomain = 0

                        /**
                         * DanmuPlayerConfig playerDanmakuSpeed.
                         * @member {number} playerDanmakuSpeed
                         * @memberof bilibili.community.service.dm.v1.DanmuPlayerConfig
                         * @instance
                         */
                        DanmuPlayerConfig.prototype.playerDanmakuSpeed = 0

                        /**
                         * DanmuPlayerConfig playerDanmakuEnableblocklist.
                         * @member {boolean} playerDanmakuEnableblocklist
                         * @memberof bilibili.community.service.dm.v1.DanmuPlayerConfig
                         * @instance
                         */
                        DanmuPlayerConfig.prototype.playerDanmakuEnableblocklist = false

                        /**
                         * DanmuPlayerConfig inlinePlayerDanmakuSwitch.
                         * @member {boolean} inlinePlayerDanmakuSwitch
                         * @memberof bilibili.community.service.dm.v1.DanmuPlayerConfig
                         * @instance
                         */
                        DanmuPlayerConfig.prototype.inlinePlayerDanmakuSwitch = false

                        /**
                         * DanmuPlayerConfig inlinePlayerDanmakuConfig.
                         * @member {number} inlinePlayerDanmakuConfig
                         * @memberof bilibili.community.service.dm.v1.DanmuPlayerConfig
                         * @instance
                         */
                        DanmuPlayerConfig.prototype.inlinePlayerDanmakuConfig = 0

                        /**
                         * Creates a new DanmuPlayerConfig instance using the specified properties.
                         * @function create
                         * @memberof bilibili.community.service.dm.v1.DanmuPlayerConfig
                         * @static
                         * @param {bilibili.community.service.dm.v1.IDanmuPlayerConfig=} [properties] Properties to set
                         * @returns {bilibili.community.service.dm.v1.DanmuPlayerConfig} DanmuPlayerConfig instance
                         */
                        DanmuPlayerConfig.create = function create(properties) {
                            return new DanmuPlayerConfig(properties)
                        }

                        /**
                         * Encodes the specified DanmuPlayerConfig message. Does not implicitly {@link bilibili.community.service.dm.v1.DanmuPlayerConfig.verify|verify} messages.
                         * @function encode
                         * @memberof bilibili.community.service.dm.v1.DanmuPlayerConfig
                         * @static
                         * @param {bilibili.community.service.dm.v1.IDanmuPlayerConfig} message DanmuPlayerConfig message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        DanmuPlayerConfig.encode = function encode(message, writer) {
                            if (!writer) writer = $Writer.create()
                            if (
                                message.playerDanmakuSwitch != null &&
                                Object.hasOwnProperty.call(message, 'playerDanmakuSwitch')
                            )
                                writer
                                    .uint32(/* id 1, wireType 0 =*/ 8)
                                    .bool(message.playerDanmakuSwitch)
                            if (
                                message.playerDanmakuSwitchSave != null &&
                                Object.hasOwnProperty.call(message, 'playerDanmakuSwitchSave')
                            )
                                writer
                                    .uint32(/* id 2, wireType 0 =*/ 16)
                                    .bool(message.playerDanmakuSwitchSave)
                            if (
                                message.playerDanmakuUseDefaultConfig != null &&
                                Object.hasOwnProperty.call(message, 'playerDanmakuUseDefaultConfig')
                            )
                                writer
                                    .uint32(/* id 3, wireType 0 =*/ 24)
                                    .bool(message.playerDanmakuUseDefaultConfig)
                            if (
                                message.playerDanmakuAiRecommendedSwitch != null &&
                                Object.hasOwnProperty.call(
                                    message,
                                    'playerDanmakuAiRecommendedSwitch'
                                )
                            )
                                writer
                                    .uint32(/* id 4, wireType 0 =*/ 32)
                                    .bool(message.playerDanmakuAiRecommendedSwitch)
                            if (
                                message.playerDanmakuAiRecommendedLevel != null &&
                                Object.hasOwnProperty.call(
                                    message,
                                    'playerDanmakuAiRecommendedLevel'
                                )
                            )
                                writer
                                    .uint32(/* id 5, wireType 0 =*/ 40)
                                    .int32(message.playerDanmakuAiRecommendedLevel)
                            if (
                                message.playerDanmakuBlocktop != null &&
                                Object.hasOwnProperty.call(message, 'playerDanmakuBlocktop')
                            )
                                writer
                                    .uint32(/* id 6, wireType 0 =*/ 48)
                                    .bool(message.playerDanmakuBlocktop)
                            if (
                                message.playerDanmakuBlockscroll != null &&
                                Object.hasOwnProperty.call(message, 'playerDanmakuBlockscroll')
                            )
                                writer
                                    .uint32(/* id 7, wireType 0 =*/ 56)
                                    .bool(message.playerDanmakuBlockscroll)
                            if (
                                message.playerDanmakuBlockbottom != null &&
                                Object.hasOwnProperty.call(message, 'playerDanmakuBlockbottom')
                            )
                                writer
                                    .uint32(/* id 8, wireType 0 =*/ 64)
                                    .bool(message.playerDanmakuBlockbottom)
                            if (
                                message.playerDanmakuBlockcolorful != null &&
                                Object.hasOwnProperty.call(message, 'playerDanmakuBlockcolorful')
                            )
                                writer
                                    .uint32(/* id 9, wireType 0 =*/ 72)
                                    .bool(message.playerDanmakuBlockcolorful)
                            if (
                                message.playerDanmakuBlockrepeat != null &&
                                Object.hasOwnProperty.call(message, 'playerDanmakuBlockrepeat')
                            )
                                writer
                                    .uint32(/* id 10, wireType 0 =*/ 80)
                                    .bool(message.playerDanmakuBlockrepeat)
                            if (
                                message.playerDanmakuBlockspecial != null &&
                                Object.hasOwnProperty.call(message, 'playerDanmakuBlockspecial')
                            )
                                writer
                                    .uint32(/* id 11, wireType 0 =*/ 88)
                                    .bool(message.playerDanmakuBlockspecial)
                            if (
                                message.playerDanmakuOpacity != null &&
                                Object.hasOwnProperty.call(message, 'playerDanmakuOpacity')
                            )
                                writer
                                    .uint32(/* id 12, wireType 5 =*/ 101)
                                    .float(message.playerDanmakuOpacity)
                            if (
                                message.playerDanmakuScalingfactor != null &&
                                Object.hasOwnProperty.call(message, 'playerDanmakuScalingfactor')
                            )
                                writer
                                    .uint32(/* id 13, wireType 5 =*/ 109)
                                    .float(message.playerDanmakuScalingfactor)
                            if (
                                message.playerDanmakuDomain != null &&
                                Object.hasOwnProperty.call(message, 'playerDanmakuDomain')
                            )
                                writer
                                    .uint32(/* id 14, wireType 5 =*/ 117)
                                    .float(message.playerDanmakuDomain)
                            if (
                                message.playerDanmakuSpeed != null &&
                                Object.hasOwnProperty.call(message, 'playerDanmakuSpeed')
                            )
                                writer
                                    .uint32(/* id 15, wireType 0 =*/ 120)
                                    .int32(message.playerDanmakuSpeed)
                            if (
                                message.playerDanmakuEnableblocklist != null &&
                                Object.hasOwnProperty.call(message, 'playerDanmakuEnableblocklist')
                            )
                                writer
                                    .uint32(/* id 16, wireType 0 =*/ 128)
                                    .bool(message.playerDanmakuEnableblocklist)
                            if (
                                message.inlinePlayerDanmakuSwitch != null &&
                                Object.hasOwnProperty.call(message, 'inlinePlayerDanmakuSwitch')
                            )
                                writer
                                    .uint32(/* id 17, wireType 0 =*/ 136)
                                    .bool(message.inlinePlayerDanmakuSwitch)
                            if (
                                message.inlinePlayerDanmakuConfig != null &&
                                Object.hasOwnProperty.call(message, 'inlinePlayerDanmakuConfig')
                            )
                                writer
                                    .uint32(/* id 18, wireType 0 =*/ 144)
                                    .int32(message.inlinePlayerDanmakuConfig)
                            return writer
                        }

                        /**
                         * Encodes the specified DanmuPlayerConfig message, length delimited. Does not implicitly {@link bilibili.community.service.dm.v1.DanmuPlayerConfig.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof bilibili.community.service.dm.v1.DanmuPlayerConfig
                         * @static
                         * @param {bilibili.community.service.dm.v1.IDanmuPlayerConfig} message DanmuPlayerConfig message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        DanmuPlayerConfig.encodeDelimited = function encodeDelimited(
                            message,
                            writer
                        ) {
                            return this.encode(message, writer).ldelim()
                        }

                        /**
                         * Decodes a DanmuPlayerConfig message from the specified reader or buffer.
                         * @function decode
                         * @memberof bilibili.community.service.dm.v1.DanmuPlayerConfig
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {bilibili.community.service.dm.v1.DanmuPlayerConfig} DanmuPlayerConfig
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        DanmuPlayerConfig.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader)) reader = $Reader.create(reader)
                            var end = length === undefined ? reader.len : reader.pos + length,
                                message = new $root.bilibili.community.service.dm.v1.DanmuPlayerConfig()
                            while (reader.pos < end) {
                                var tag = reader.uint32()
                                switch (tag >>> 3) {
                                    case 1:
                                        message.playerDanmakuSwitch = reader.bool()
                                        break
                                    case 2:
                                        message.playerDanmakuSwitchSave = reader.bool()
                                        break
                                    case 3:
                                        message.playerDanmakuUseDefaultConfig = reader.bool()
                                        break
                                    case 4:
                                        message.playerDanmakuAiRecommendedSwitch = reader.bool()
                                        break
                                    case 5:
                                        message.playerDanmakuAiRecommendedLevel = reader.int32()
                                        break
                                    case 6:
                                        message.playerDanmakuBlocktop = reader.bool()
                                        break
                                    case 7:
                                        message.playerDanmakuBlockscroll = reader.bool()
                                        break
                                    case 8:
                                        message.playerDanmakuBlockbottom = reader.bool()
                                        break
                                    case 9:
                                        message.playerDanmakuBlockcolorful = reader.bool()
                                        break
                                    case 10:
                                        message.playerDanmakuBlockrepeat = reader.bool()
                                        break
                                    case 11:
                                        message.playerDanmakuBlockspecial = reader.bool()
                                        break
                                    case 12:
                                        message.playerDanmakuOpacity = reader.float()
                                        break
                                    case 13:
                                        message.playerDanmakuScalingfactor = reader.float()
                                        break
                                    case 14:
                                        message.playerDanmakuDomain = reader.float()
                                        break
                                    case 15:
                                        message.playerDanmakuSpeed = reader.int32()
                                        break
                                    case 16:
                                        message.playerDanmakuEnableblocklist = reader.bool()
                                        break
                                    case 17:
                                        message.inlinePlayerDanmakuSwitch = reader.bool()
                                        break
                                    case 18:
                                        message.inlinePlayerDanmakuConfig = reader.int32()
                                        break
                                    default:
                                        reader.skipType(tag & 7)
                                        break
                                }
                            }
                            return message
                        }

                        /**
                         * Decodes a DanmuPlayerConfig message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof bilibili.community.service.dm.v1.DanmuPlayerConfig
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {bilibili.community.service.dm.v1.DanmuPlayerConfig} DanmuPlayerConfig
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        DanmuPlayerConfig.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader)) reader = new $Reader(reader)
                            return this.decode(reader, reader.uint32())
                        }

                        /**
                         * Verifies a DanmuPlayerConfig message.
                         * @function verify
                         * @memberof bilibili.community.service.dm.v1.DanmuPlayerConfig
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        DanmuPlayerConfig.verify = function verify(message) {
                            if (typeof message !== 'object' || message === null)
                                return 'object expected'
                            if (
                                message.playerDanmakuSwitch != null &&
                                message.hasOwnProperty('playerDanmakuSwitch')
                            )
                                if (typeof message.playerDanmakuSwitch !== 'boolean')
                                    return 'playerDanmakuSwitch: boolean expected'
                            if (
                                message.playerDanmakuSwitchSave != null &&
                                message.hasOwnProperty('playerDanmakuSwitchSave')
                            )
                                if (typeof message.playerDanmakuSwitchSave !== 'boolean')
                                    return 'playerDanmakuSwitchSave: boolean expected'
                            if (
                                message.playerDanmakuUseDefaultConfig != null &&
                                message.hasOwnProperty('playerDanmakuUseDefaultConfig')
                            )
                                if (typeof message.playerDanmakuUseDefaultConfig !== 'boolean')
                                    return 'playerDanmakuUseDefaultConfig: boolean expected'
                            if (
                                message.playerDanmakuAiRecommendedSwitch != null &&
                                message.hasOwnProperty('playerDanmakuAiRecommendedSwitch')
                            )
                                if (typeof message.playerDanmakuAiRecommendedSwitch !== 'boolean')
                                    return 'playerDanmakuAiRecommendedSwitch: boolean expected'
                            if (
                                message.playerDanmakuAiRecommendedLevel != null &&
                                message.hasOwnProperty('playerDanmakuAiRecommendedLevel')
                            )
                                if (!$util.isInteger(message.playerDanmakuAiRecommendedLevel))
                                    return 'playerDanmakuAiRecommendedLevel: integer expected'
                            if (
                                message.playerDanmakuBlocktop != null &&
                                message.hasOwnProperty('playerDanmakuBlocktop')
                            )
                                if (typeof message.playerDanmakuBlocktop !== 'boolean')
                                    return 'playerDanmakuBlocktop: boolean expected'
                            if (
                                message.playerDanmakuBlockscroll != null &&
                                message.hasOwnProperty('playerDanmakuBlockscroll')
                            )
                                if (typeof message.playerDanmakuBlockscroll !== 'boolean')
                                    return 'playerDanmakuBlockscroll: boolean expected'
                            if (
                                message.playerDanmakuBlockbottom != null &&
                                message.hasOwnProperty('playerDanmakuBlockbottom')
                            )
                                if (typeof message.playerDanmakuBlockbottom !== 'boolean')
                                    return 'playerDanmakuBlockbottom: boolean expected'
                            if (
                                message.playerDanmakuBlockcolorful != null &&
                                message.hasOwnProperty('playerDanmakuBlockcolorful')
                            )
                                if (typeof message.playerDanmakuBlockcolorful !== 'boolean')
                                    return 'playerDanmakuBlockcolorful: boolean expected'
                            if (
                                message.playerDanmakuBlockrepeat != null &&
                                message.hasOwnProperty('playerDanmakuBlockrepeat')
                            )
                                if (typeof message.playerDanmakuBlockrepeat !== 'boolean')
                                    return 'playerDanmakuBlockrepeat: boolean expected'
                            if (
                                message.playerDanmakuBlockspecial != null &&
                                message.hasOwnProperty('playerDanmakuBlockspecial')
                            )
                                if (typeof message.playerDanmakuBlockspecial !== 'boolean')
                                    return 'playerDanmakuBlockspecial: boolean expected'
                            if (
                                message.playerDanmakuOpacity != null &&
                                message.hasOwnProperty('playerDanmakuOpacity')
                            )
                                if (typeof message.playerDanmakuOpacity !== 'number')
                                    return 'playerDanmakuOpacity: number expected'
                            if (
                                message.playerDanmakuScalingfactor != null &&
                                message.hasOwnProperty('playerDanmakuScalingfactor')
                            )
                                if (typeof message.playerDanmakuScalingfactor !== 'number')
                                    return 'playerDanmakuScalingfactor: number expected'
                            if (
                                message.playerDanmakuDomain != null &&
                                message.hasOwnProperty('playerDanmakuDomain')
                            )
                                if (typeof message.playerDanmakuDomain !== 'number')
                                    return 'playerDanmakuDomain: number expected'
                            if (
                                message.playerDanmakuSpeed != null &&
                                message.hasOwnProperty('playerDanmakuSpeed')
                            )
                                if (!$util.isInteger(message.playerDanmakuSpeed))
                                    return 'playerDanmakuSpeed: integer expected'
                            if (
                                message.playerDanmakuEnableblocklist != null &&
                                message.hasOwnProperty('playerDanmakuEnableblocklist')
                            )
                                if (typeof message.playerDanmakuEnableblocklist !== 'boolean')
                                    return 'playerDanmakuEnableblocklist: boolean expected'
                            if (
                                message.inlinePlayerDanmakuSwitch != null &&
                                message.hasOwnProperty('inlinePlayerDanmakuSwitch')
                            )
                                if (typeof message.inlinePlayerDanmakuSwitch !== 'boolean')
                                    return 'inlinePlayerDanmakuSwitch: boolean expected'
                            if (
                                message.inlinePlayerDanmakuConfig != null &&
                                message.hasOwnProperty('inlinePlayerDanmakuConfig')
                            )
                                if (!$util.isInteger(message.inlinePlayerDanmakuConfig))
                                    return 'inlinePlayerDanmakuConfig: integer expected'
                            return null
                        }

                        /**
                         * Creates a DanmuPlayerConfig message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof bilibili.community.service.dm.v1.DanmuPlayerConfig
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {bilibili.community.service.dm.v1.DanmuPlayerConfig} DanmuPlayerConfig
                         */
                        DanmuPlayerConfig.fromObject = function fromObject(object) {
                            if (
                                object instanceof
                                $root.bilibili.community.service.dm.v1.DanmuPlayerConfig
                            )
                                return object
                            var message = new $root.bilibili.community.service.dm.v1.DanmuPlayerConfig()
                            if (object.playerDanmakuSwitch != null)
                                message.playerDanmakuSwitch = Boolean(object.playerDanmakuSwitch)
                            if (object.playerDanmakuSwitchSave != null)
                                message.playerDanmakuSwitchSave = Boolean(
                                    object.playerDanmakuSwitchSave
                                )
                            if (object.playerDanmakuUseDefaultConfig != null)
                                message.playerDanmakuUseDefaultConfig = Boolean(
                                    object.playerDanmakuUseDefaultConfig
                                )
                            if (object.playerDanmakuAiRecommendedSwitch != null)
                                message.playerDanmakuAiRecommendedSwitch = Boolean(
                                    object.playerDanmakuAiRecommendedSwitch
                                )
                            if (object.playerDanmakuAiRecommendedLevel != null)
                                message.playerDanmakuAiRecommendedLevel =
                                    object.playerDanmakuAiRecommendedLevel | 0
                            if (object.playerDanmakuBlocktop != null)
                                message.playerDanmakuBlocktop = Boolean(
                                    object.playerDanmakuBlocktop
                                )
                            if (object.playerDanmakuBlockscroll != null)
                                message.playerDanmakuBlockscroll = Boolean(
                                    object.playerDanmakuBlockscroll
                                )
                            if (object.playerDanmakuBlockbottom != null)
                                message.playerDanmakuBlockbottom = Boolean(
                                    object.playerDanmakuBlockbottom
                                )
                            if (object.playerDanmakuBlockcolorful != null)
                                message.playerDanmakuBlockcolorful = Boolean(
                                    object.playerDanmakuBlockcolorful
                                )
                            if (object.playerDanmakuBlockrepeat != null)
                                message.playerDanmakuBlockrepeat = Boolean(
                                    object.playerDanmakuBlockrepeat
                                )
                            if (object.playerDanmakuBlockspecial != null)
                                message.playerDanmakuBlockspecial = Boolean(
                                    object.playerDanmakuBlockspecial
                                )
                            if (object.playerDanmakuOpacity != null)
                                message.playerDanmakuOpacity = Number(object.playerDanmakuOpacity)
                            if (object.playerDanmakuScalingfactor != null)
                                message.playerDanmakuScalingfactor = Number(
                                    object.playerDanmakuScalingfactor
                                )
                            if (object.playerDanmakuDomain != null)
                                message.playerDanmakuDomain = Number(object.playerDanmakuDomain)
                            if (object.playerDanmakuSpeed != null)
                                message.playerDanmakuSpeed = object.playerDanmakuSpeed | 0
                            if (object.playerDanmakuEnableblocklist != null)
                                message.playerDanmakuEnableblocklist = Boolean(
                                    object.playerDanmakuEnableblocklist
                                )
                            if (object.inlinePlayerDanmakuSwitch != null)
                                message.inlinePlayerDanmakuSwitch = Boolean(
                                    object.inlinePlayerDanmakuSwitch
                                )
                            if (object.inlinePlayerDanmakuConfig != null)
                                message.inlinePlayerDanmakuConfig =
                                    object.inlinePlayerDanmakuConfig | 0
                            return message
                        }

                        /**
                         * Creates a plain object from a DanmuPlayerConfig message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof bilibili.community.service.dm.v1.DanmuPlayerConfig
                         * @static
                         * @param {bilibili.community.service.dm.v1.DanmuPlayerConfig} message DanmuPlayerConfig
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        DanmuPlayerConfig.toObject = function toObject(message, options) {
                            if (!options) options = {}
                            var object = {}
                            if (options.defaults) {
                                object.playerDanmakuSwitch = false
                                object.playerDanmakuSwitchSave = false
                                object.playerDanmakuUseDefaultConfig = false
                                object.playerDanmakuAiRecommendedSwitch = false
                                object.playerDanmakuAiRecommendedLevel = 0
                                object.playerDanmakuBlocktop = false
                                object.playerDanmakuBlockscroll = false
                                object.playerDanmakuBlockbottom = false
                                object.playerDanmakuBlockcolorful = false
                                object.playerDanmakuBlockrepeat = false
                                object.playerDanmakuBlockspecial = false
                                object.playerDanmakuOpacity = 0
                                object.playerDanmakuScalingfactor = 0
                                object.playerDanmakuDomain = 0
                                object.playerDanmakuSpeed = 0
                                object.playerDanmakuEnableblocklist = false
                                object.inlinePlayerDanmakuSwitch = false
                                object.inlinePlayerDanmakuConfig = 0
                            }
                            if (
                                message.playerDanmakuSwitch != null &&
                                message.hasOwnProperty('playerDanmakuSwitch')
                            )
                                object.playerDanmakuSwitch = message.playerDanmakuSwitch
                            if (
                                message.playerDanmakuSwitchSave != null &&
                                message.hasOwnProperty('playerDanmakuSwitchSave')
                            )
                                object.playerDanmakuSwitchSave = message.playerDanmakuSwitchSave
                            if (
                                message.playerDanmakuUseDefaultConfig != null &&
                                message.hasOwnProperty('playerDanmakuUseDefaultConfig')
                            )
                                object.playerDanmakuUseDefaultConfig =
                                    message.playerDanmakuUseDefaultConfig
                            if (
                                message.playerDanmakuAiRecommendedSwitch != null &&
                                message.hasOwnProperty('playerDanmakuAiRecommendedSwitch')
                            )
                                object.playerDanmakuAiRecommendedSwitch =
                                    message.playerDanmakuAiRecommendedSwitch
                            if (
                                message.playerDanmakuAiRecommendedLevel != null &&
                                message.hasOwnProperty('playerDanmakuAiRecommendedLevel')
                            )
                                object.playerDanmakuAiRecommendedLevel =
                                    message.playerDanmakuAiRecommendedLevel
                            if (
                                message.playerDanmakuBlocktop != null &&
                                message.hasOwnProperty('playerDanmakuBlocktop')
                            )
                                object.playerDanmakuBlocktop = message.playerDanmakuBlocktop
                            if (
                                message.playerDanmakuBlockscroll != null &&
                                message.hasOwnProperty('playerDanmakuBlockscroll')
                            )
                                object.playerDanmakuBlockscroll = message.playerDanmakuBlockscroll
                            if (
                                message.playerDanmakuBlockbottom != null &&
                                message.hasOwnProperty('playerDanmakuBlockbottom')
                            )
                                object.playerDanmakuBlockbottom = message.playerDanmakuBlockbottom
                            if (
                                message.playerDanmakuBlockcolorful != null &&
                                message.hasOwnProperty('playerDanmakuBlockcolorful')
                            )
                                object.playerDanmakuBlockcolorful =
                                    message.playerDanmakuBlockcolorful
                            if (
                                message.playerDanmakuBlockrepeat != null &&
                                message.hasOwnProperty('playerDanmakuBlockrepeat')
                            )
                                object.playerDanmakuBlockrepeat = message.playerDanmakuBlockrepeat
                            if (
                                message.playerDanmakuBlockspecial != null &&
                                message.hasOwnProperty('playerDanmakuBlockspecial')
                            )
                                object.playerDanmakuBlockspecial = message.playerDanmakuBlockspecial
                            if (
                                message.playerDanmakuOpacity != null &&
                                message.hasOwnProperty('playerDanmakuOpacity')
                            )
                                object.playerDanmakuOpacity =
                                    options.json && !isFinite(message.playerDanmakuOpacity)
                                        ? String(message.playerDanmakuOpacity)
                                        : message.playerDanmakuOpacity
                            if (
                                message.playerDanmakuScalingfactor != null &&
                                message.hasOwnProperty('playerDanmakuScalingfactor')
                            )
                                object.playerDanmakuScalingfactor =
                                    options.json && !isFinite(message.playerDanmakuScalingfactor)
                                        ? String(message.playerDanmakuScalingfactor)
                                        : message.playerDanmakuScalingfactor
                            if (
                                message.playerDanmakuDomain != null &&
                                message.hasOwnProperty('playerDanmakuDomain')
                            )
                                object.playerDanmakuDomain =
                                    options.json && !isFinite(message.playerDanmakuDomain)
                                        ? String(message.playerDanmakuDomain)
                                        : message.playerDanmakuDomain
                            if (
                                message.playerDanmakuSpeed != null &&
                                message.hasOwnProperty('playerDanmakuSpeed')
                            )
                                object.playerDanmakuSpeed = message.playerDanmakuSpeed
                            if (
                                message.playerDanmakuEnableblocklist != null &&
                                message.hasOwnProperty('playerDanmakuEnableblocklist')
                            )
                                object.playerDanmakuEnableblocklist =
                                    message.playerDanmakuEnableblocklist
                            if (
                                message.inlinePlayerDanmakuSwitch != null &&
                                message.hasOwnProperty('inlinePlayerDanmakuSwitch')
                            )
                                object.inlinePlayerDanmakuSwitch = message.inlinePlayerDanmakuSwitch
                            if (
                                message.inlinePlayerDanmakuConfig != null &&
                                message.hasOwnProperty('inlinePlayerDanmakuConfig')
                            )
                                object.inlinePlayerDanmakuConfig = message.inlinePlayerDanmakuConfig
                            return object
                        }

                        /**
                         * Converts this DanmuPlayerConfig to JSON.
                         * @function toJSON
                         * @memberof bilibili.community.service.dm.v1.DanmuPlayerConfig
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        DanmuPlayerConfig.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
                        }

                        return DanmuPlayerConfig
                    })()

                    v1.DanmuPlayerDynamicConfig = (function () {
                        /**
                         * Properties of a DanmuPlayerDynamicConfig.
                         * @memberof bilibili.community.service.dm.v1
                         * @interface IDanmuPlayerDynamicConfig
                         * @property {number|null} [progress] DanmuPlayerDynamicConfig progress
                         * @property {number|null} [playerDanmakuDomain] DanmuPlayerDynamicConfig playerDanmakuDomain
                         */

                        /**
                         * Constructs a new DanmuPlayerDynamicConfig.
                         * @memberof bilibili.community.service.dm.v1
                         * @classdesc Represents a DanmuPlayerDynamicConfig.
                         * @implements IDanmuPlayerDynamicConfig
                         * @constructor
                         * @param {bilibili.community.service.dm.v1.IDanmuPlayerDynamicConfig=} [properties] Properties to set
                         */
                        function DanmuPlayerDynamicConfig(properties) {
                            if (properties)
                                for (
                                    var keys = Object.keys(properties), i = 0;
                                    i < keys.length;
                                    ++i
                                )
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]]
                        }

                        /**
                         * DanmuPlayerDynamicConfig progress.
                         * @member {number} progress
                         * @memberof bilibili.community.service.dm.v1.DanmuPlayerDynamicConfig
                         * @instance
                         */
                        DanmuPlayerDynamicConfig.prototype.progress = 0

                        /**
                         * DanmuPlayerDynamicConfig playerDanmakuDomain.
                         * @member {number} playerDanmakuDomain
                         * @memberof bilibili.community.service.dm.v1.DanmuPlayerDynamicConfig
                         * @instance
                         */
                        DanmuPlayerDynamicConfig.prototype.playerDanmakuDomain = 0

                        /**
                         * Creates a new DanmuPlayerDynamicConfig instance using the specified properties.
                         * @function create
                         * @memberof bilibili.community.service.dm.v1.DanmuPlayerDynamicConfig
                         * @static
                         * @param {bilibili.community.service.dm.v1.IDanmuPlayerDynamicConfig=} [properties] Properties to set
                         * @returns {bilibili.community.service.dm.v1.DanmuPlayerDynamicConfig} DanmuPlayerDynamicConfig instance
                         */
                        DanmuPlayerDynamicConfig.create = function create(properties) {
                            return new DanmuPlayerDynamicConfig(properties)
                        }

                        /**
                         * Encodes the specified DanmuPlayerDynamicConfig message. Does not implicitly {@link bilibili.community.service.dm.v1.DanmuPlayerDynamicConfig.verify|verify} messages.
                         * @function encode
                         * @memberof bilibili.community.service.dm.v1.DanmuPlayerDynamicConfig
                         * @static
                         * @param {bilibili.community.service.dm.v1.IDanmuPlayerDynamicConfig} message DanmuPlayerDynamicConfig message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        DanmuPlayerDynamicConfig.encode = function encode(message, writer) {
                            if (!writer) writer = $Writer.create()
                            if (
                                message.progress != null &&
                                Object.hasOwnProperty.call(message, 'progress')
                            )
                                writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.progress)
                            if (
                                message.playerDanmakuDomain != null &&
                                Object.hasOwnProperty.call(message, 'playerDanmakuDomain')
                            )
                                writer
                                    .uint32(/* id 2, wireType 5 =*/ 21)
                                    .float(message.playerDanmakuDomain)
                            return writer
                        }

                        /**
                         * Encodes the specified DanmuPlayerDynamicConfig message, length delimited. Does not implicitly {@link bilibili.community.service.dm.v1.DanmuPlayerDynamicConfig.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof bilibili.community.service.dm.v1.DanmuPlayerDynamicConfig
                         * @static
                         * @param {bilibili.community.service.dm.v1.IDanmuPlayerDynamicConfig} message DanmuPlayerDynamicConfig message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        DanmuPlayerDynamicConfig.encodeDelimited = function encodeDelimited(
                            message,
                            writer
                        ) {
                            return this.encode(message, writer).ldelim()
                        }

                        /**
                         * Decodes a DanmuPlayerDynamicConfig message from the specified reader or buffer.
                         * @function decode
                         * @memberof bilibili.community.service.dm.v1.DanmuPlayerDynamicConfig
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {bilibili.community.service.dm.v1.DanmuPlayerDynamicConfig} DanmuPlayerDynamicConfig
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        DanmuPlayerDynamicConfig.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader)) reader = $Reader.create(reader)
                            var end = length === undefined ? reader.len : reader.pos + length,
                                message = new $root.bilibili.community.service.dm.v1.DanmuPlayerDynamicConfig()
                            while (reader.pos < end) {
                                var tag = reader.uint32()
                                switch (tag >>> 3) {
                                    case 1:
                                        message.progress = reader.int32()
                                        break
                                    case 2:
                                        message.playerDanmakuDomain = reader.float()
                                        break
                                    default:
                                        reader.skipType(tag & 7)
                                        break
                                }
                            }
                            return message
                        }

                        /**
                         * Decodes a DanmuPlayerDynamicConfig message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof bilibili.community.service.dm.v1.DanmuPlayerDynamicConfig
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {bilibili.community.service.dm.v1.DanmuPlayerDynamicConfig} DanmuPlayerDynamicConfig
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        DanmuPlayerDynamicConfig.decodeDelimited = function decodeDelimited(
                            reader
                        ) {
                            if (!(reader instanceof $Reader)) reader = new $Reader(reader)
                            return this.decode(reader, reader.uint32())
                        }

                        /**
                         * Verifies a DanmuPlayerDynamicConfig message.
                         * @function verify
                         * @memberof bilibili.community.service.dm.v1.DanmuPlayerDynamicConfig
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        DanmuPlayerDynamicConfig.verify = function verify(message) {
                            if (typeof message !== 'object' || message === null)
                                return 'object expected'
                            if (message.progress != null && message.hasOwnProperty('progress'))
                                if (!$util.isInteger(message.progress))
                                    return 'progress: integer expected'
                            if (
                                message.playerDanmakuDomain != null &&
                                message.hasOwnProperty('playerDanmakuDomain')
                            )
                                if (typeof message.playerDanmakuDomain !== 'number')
                                    return 'playerDanmakuDomain: number expected'
                            return null
                        }

                        /**
                         * Creates a DanmuPlayerDynamicConfig message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof bilibili.community.service.dm.v1.DanmuPlayerDynamicConfig
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {bilibili.community.service.dm.v1.DanmuPlayerDynamicConfig} DanmuPlayerDynamicConfig
                         */
                        DanmuPlayerDynamicConfig.fromObject = function fromObject(object) {
                            if (
                                object instanceof
                                $root.bilibili.community.service.dm.v1.DanmuPlayerDynamicConfig
                            )
                                return object
                            var message = new $root.bilibili.community.service.dm.v1.DanmuPlayerDynamicConfig()
                            if (object.progress != null) message.progress = object.progress | 0
                            if (object.playerDanmakuDomain != null)
                                message.playerDanmakuDomain = Number(object.playerDanmakuDomain)
                            return message
                        }

                        /**
                         * Creates a plain object from a DanmuPlayerDynamicConfig message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof bilibili.community.service.dm.v1.DanmuPlayerDynamicConfig
                         * @static
                         * @param {bilibili.community.service.dm.v1.DanmuPlayerDynamicConfig} message DanmuPlayerDynamicConfig
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        DanmuPlayerDynamicConfig.toObject = function toObject(message, options) {
                            if (!options) options = {}
                            var object = {}
                            if (options.defaults) {
                                object.progress = 0
                                object.playerDanmakuDomain = 0
                            }
                            if (message.progress != null && message.hasOwnProperty('progress'))
                                object.progress = message.progress
                            if (
                                message.playerDanmakuDomain != null &&
                                message.hasOwnProperty('playerDanmakuDomain')
                            )
                                object.playerDanmakuDomain =
                                    options.json && !isFinite(message.playerDanmakuDomain)
                                        ? String(message.playerDanmakuDomain)
                                        : message.playerDanmakuDomain
                            return object
                        }

                        /**
                         * Converts this DanmuPlayerDynamicConfig to JSON.
                         * @function toJSON
                         * @memberof bilibili.community.service.dm.v1.DanmuPlayerDynamicConfig
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        DanmuPlayerDynamicConfig.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
                        }

                        return DanmuPlayerDynamicConfig
                    })()

                    v1.DanmuPlayerViewConfig = (function () {
                        /**
                         * Properties of a DanmuPlayerViewConfig.
                         * @memberof bilibili.community.service.dm.v1
                         * @interface IDanmuPlayerViewConfig
                         * @property {bilibili.community.service.dm.v1.IDanmuDefaultPlayerConfig|null} [danmukuDefaultPlayerConfig] DanmuPlayerViewConfig danmukuDefaultPlayerConfig
                         * @property {bilibili.community.service.dm.v1.IDanmuPlayerConfig|null} [danmukuPlayerConfig] DanmuPlayerViewConfig danmukuPlayerConfig
                         * @property {Array.<bilibili.community.service.dm.v1.IDanmuPlayerDynamicConfig>|null} [danmukuPlayerDynamicConfig] DanmuPlayerViewConfig danmukuPlayerDynamicConfig
                         */

                        /**
                         * Constructs a new DanmuPlayerViewConfig.
                         * @memberof bilibili.community.service.dm.v1
                         * @classdesc Represents a DanmuPlayerViewConfig.
                         * @implements IDanmuPlayerViewConfig
                         * @constructor
                         * @param {bilibili.community.service.dm.v1.IDanmuPlayerViewConfig=} [properties] Properties to set
                         */
                        function DanmuPlayerViewConfig(properties) {
                            this.danmukuPlayerDynamicConfig = []
                            if (properties)
                                for (
                                    var keys = Object.keys(properties), i = 0;
                                    i < keys.length;
                                    ++i
                                )
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]]
                        }

                        /**
                         * DanmuPlayerViewConfig danmukuDefaultPlayerConfig.
                         * @member {bilibili.community.service.dm.v1.IDanmuDefaultPlayerConfig|null|undefined} danmukuDefaultPlayerConfig
                         * @memberof bilibili.community.service.dm.v1.DanmuPlayerViewConfig
                         * @instance
                         */
                        DanmuPlayerViewConfig.prototype.danmukuDefaultPlayerConfig = null

                        /**
                         * DanmuPlayerViewConfig danmukuPlayerConfig.
                         * @member {bilibili.community.service.dm.v1.IDanmuPlayerConfig|null|undefined} danmukuPlayerConfig
                         * @memberof bilibili.community.service.dm.v1.DanmuPlayerViewConfig
                         * @instance
                         */
                        DanmuPlayerViewConfig.prototype.danmukuPlayerConfig = null

                        /**
                         * DanmuPlayerViewConfig danmukuPlayerDynamicConfig.
                         * @member {Array.<bilibili.community.service.dm.v1.IDanmuPlayerDynamicConfig>} danmukuPlayerDynamicConfig
                         * @memberof bilibili.community.service.dm.v1.DanmuPlayerViewConfig
                         * @instance
                         */
                        DanmuPlayerViewConfig.prototype.danmukuPlayerDynamicConfig =
                            $util.emptyArray

                        /**
                         * Creates a new DanmuPlayerViewConfig instance using the specified properties.
                         * @function create
                         * @memberof bilibili.community.service.dm.v1.DanmuPlayerViewConfig
                         * @static
                         * @param {bilibili.community.service.dm.v1.IDanmuPlayerViewConfig=} [properties] Properties to set
                         * @returns {bilibili.community.service.dm.v1.DanmuPlayerViewConfig} DanmuPlayerViewConfig instance
                         */
                        DanmuPlayerViewConfig.create = function create(properties) {
                            return new DanmuPlayerViewConfig(properties)
                        }

                        /**
                         * Encodes the specified DanmuPlayerViewConfig message. Does not implicitly {@link bilibili.community.service.dm.v1.DanmuPlayerViewConfig.verify|verify} messages.
                         * @function encode
                         * @memberof bilibili.community.service.dm.v1.DanmuPlayerViewConfig
                         * @static
                         * @param {bilibili.community.service.dm.v1.IDanmuPlayerViewConfig} message DanmuPlayerViewConfig message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        DanmuPlayerViewConfig.encode = function encode(message, writer) {
                            if (!writer) writer = $Writer.create()
                            if (
                                message.danmukuDefaultPlayerConfig != null &&
                                Object.hasOwnProperty.call(message, 'danmukuDefaultPlayerConfig')
                            )
                                $root.bilibili.community.service.dm.v1.DanmuDefaultPlayerConfig.encode(
                                    message.danmukuDefaultPlayerConfig,
                                    writer.uint32(/* id 1, wireType 2 =*/ 10).fork()
                                ).ldelim()
                            if (
                                message.danmukuPlayerConfig != null &&
                                Object.hasOwnProperty.call(message, 'danmukuPlayerConfig')
                            )
                                $root.bilibili.community.service.dm.v1.DanmuPlayerConfig.encode(
                                    message.danmukuPlayerConfig,
                                    writer.uint32(/* id 2, wireType 2 =*/ 18).fork()
                                ).ldelim()
                            if (
                                message.danmukuPlayerDynamicConfig != null &&
                                message.danmukuPlayerDynamicConfig.length
                            )
                                for (var i = 0; i < message.danmukuPlayerDynamicConfig.length; ++i)
                                    $root.bilibili.community.service.dm.v1.DanmuPlayerDynamicConfig.encode(
                                        message.danmukuPlayerDynamicConfig[i],
                                        writer.uint32(/* id 3, wireType 2 =*/ 26).fork()
                                    ).ldelim()
                            return writer
                        }

                        /**
                         * Encodes the specified DanmuPlayerViewConfig message, length delimited. Does not implicitly {@link bilibili.community.service.dm.v1.DanmuPlayerViewConfig.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof bilibili.community.service.dm.v1.DanmuPlayerViewConfig
                         * @static
                         * @param {bilibili.community.service.dm.v1.IDanmuPlayerViewConfig} message DanmuPlayerViewConfig message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        DanmuPlayerViewConfig.encodeDelimited = function encodeDelimited(
                            message,
                            writer
                        ) {
                            return this.encode(message, writer).ldelim()
                        }

                        /**
                         * Decodes a DanmuPlayerViewConfig message from the specified reader or buffer.
                         * @function decode
                         * @memberof bilibili.community.service.dm.v1.DanmuPlayerViewConfig
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {bilibili.community.service.dm.v1.DanmuPlayerViewConfig} DanmuPlayerViewConfig
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        DanmuPlayerViewConfig.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader)) reader = $Reader.create(reader)
                            var end = length === undefined ? reader.len : reader.pos + length,
                                message = new $root.bilibili.community.service.dm.v1.DanmuPlayerViewConfig()
                            while (reader.pos < end) {
                                var tag = reader.uint32()
                                switch (tag >>> 3) {
                                    case 1:
                                        message.danmukuDefaultPlayerConfig = $root.bilibili.community.service.dm.v1.DanmuDefaultPlayerConfig.decode(
                                            reader,
                                            reader.uint32()
                                        )
                                        break
                                    case 2:
                                        message.danmukuPlayerConfig = $root.bilibili.community.service.dm.v1.DanmuPlayerConfig.decode(
                                            reader,
                                            reader.uint32()
                                        )
                                        break
                                    case 3:
                                        if (
                                            !(
                                                message.danmukuPlayerDynamicConfig &&
                                                message.danmukuPlayerDynamicConfig.length
                                            )
                                        )
                                            message.danmukuPlayerDynamicConfig = []
                                        message.danmukuPlayerDynamicConfig.push(
                                            $root.bilibili.community.service.dm.v1.DanmuPlayerDynamicConfig.decode(
                                                reader,
                                                reader.uint32()
                                            )
                                        )
                                        break
                                    default:
                                        reader.skipType(tag & 7)
                                        break
                                }
                            }
                            return message
                        }

                        /**
                         * Decodes a DanmuPlayerViewConfig message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof bilibili.community.service.dm.v1.DanmuPlayerViewConfig
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {bilibili.community.service.dm.v1.DanmuPlayerViewConfig} DanmuPlayerViewConfig
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        DanmuPlayerViewConfig.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader)) reader = new $Reader(reader)
                            return this.decode(reader, reader.uint32())
                        }

                        /**
                         * Verifies a DanmuPlayerViewConfig message.
                         * @function verify
                         * @memberof bilibili.community.service.dm.v1.DanmuPlayerViewConfig
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        DanmuPlayerViewConfig.verify = function verify(message) {
                            if (typeof message !== 'object' || message === null)
                                return 'object expected'
                            if (
                                message.danmukuDefaultPlayerConfig != null &&
                                message.hasOwnProperty('danmukuDefaultPlayerConfig')
                            ) {
                                var error = $root.bilibili.community.service.dm.v1.DanmuDefaultPlayerConfig.verify(
                                    message.danmukuDefaultPlayerConfig
                                )
                                if (error) return 'danmukuDefaultPlayerConfig.' + error
                            }
                            if (
                                message.danmukuPlayerConfig != null &&
                                message.hasOwnProperty('danmukuPlayerConfig')
                            ) {
                                var error = $root.bilibili.community.service.dm.v1.DanmuPlayerConfig.verify(
                                    message.danmukuPlayerConfig
                                )
                                if (error) return 'danmukuPlayerConfig.' + error
                            }
                            if (
                                message.danmukuPlayerDynamicConfig != null &&
                                message.hasOwnProperty('danmukuPlayerDynamicConfig')
                            ) {
                                if (!Array.isArray(message.danmukuPlayerDynamicConfig))
                                    return 'danmukuPlayerDynamicConfig: array expected'
                                for (
                                    var i = 0;
                                    i < message.danmukuPlayerDynamicConfig.length;
                                    ++i
                                ) {
                                    var error = $root.bilibili.community.service.dm.v1.DanmuPlayerDynamicConfig.verify(
                                        message.danmukuPlayerDynamicConfig[i]
                                    )
                                    if (error) return 'danmukuPlayerDynamicConfig.' + error
                                }
                            }
                            return null
                        }

                        /**
                         * Creates a DanmuPlayerViewConfig message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof bilibili.community.service.dm.v1.DanmuPlayerViewConfig
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {bilibili.community.service.dm.v1.DanmuPlayerViewConfig} DanmuPlayerViewConfig
                         */
                        DanmuPlayerViewConfig.fromObject = function fromObject(object) {
                            if (
                                object instanceof
                                $root.bilibili.community.service.dm.v1.DanmuPlayerViewConfig
                            )
                                return object
                            var message = new $root.bilibili.community.service.dm.v1.DanmuPlayerViewConfig()
                            if (object.danmukuDefaultPlayerConfig != null) {
                                if (typeof object.danmukuDefaultPlayerConfig !== 'object')
                                    throw TypeError(
                                        '.bilibili.community.service.dm.v1.DanmuPlayerViewConfig.danmukuDefaultPlayerConfig: object expected'
                                    )
                                message.danmukuDefaultPlayerConfig = $root.bilibili.community.service.dm.v1.DanmuDefaultPlayerConfig.fromObject(
                                    object.danmukuDefaultPlayerConfig
                                )
                            }
                            if (object.danmukuPlayerConfig != null) {
                                if (typeof object.danmukuPlayerConfig !== 'object')
                                    throw TypeError(
                                        '.bilibili.community.service.dm.v1.DanmuPlayerViewConfig.danmukuPlayerConfig: object expected'
                                    )
                                message.danmukuPlayerConfig = $root.bilibili.community.service.dm.v1.DanmuPlayerConfig.fromObject(
                                    object.danmukuPlayerConfig
                                )
                            }
                            if (object.danmukuPlayerDynamicConfig) {
                                if (!Array.isArray(object.danmukuPlayerDynamicConfig))
                                    throw TypeError(
                                        '.bilibili.community.service.dm.v1.DanmuPlayerViewConfig.danmukuPlayerDynamicConfig: array expected'
                                    )
                                message.danmukuPlayerDynamicConfig = []
                                for (var i = 0; i < object.danmukuPlayerDynamicConfig.length; ++i) {
                                    if (typeof object.danmukuPlayerDynamicConfig[i] !== 'object')
                                        throw TypeError(
                                            '.bilibili.community.service.dm.v1.DanmuPlayerViewConfig.danmukuPlayerDynamicConfig: object expected'
                                        )
                                    message.danmukuPlayerDynamicConfig[
                                        i
                                    ] = $root.bilibili.community.service.dm.v1.DanmuPlayerDynamicConfig.fromObject(
                                        object.danmukuPlayerDynamicConfig[i]
                                    )
                                }
                            }
                            return message
                        }

                        /**
                         * Creates a plain object from a DanmuPlayerViewConfig message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof bilibili.community.service.dm.v1.DanmuPlayerViewConfig
                         * @static
                         * @param {bilibili.community.service.dm.v1.DanmuPlayerViewConfig} message DanmuPlayerViewConfig
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        DanmuPlayerViewConfig.toObject = function toObject(message, options) {
                            if (!options) options = {}
                            var object = {}
                            if (options.arrays || options.defaults)
                                object.danmukuPlayerDynamicConfig = []
                            if (options.defaults) {
                                object.danmukuDefaultPlayerConfig = null
                                object.danmukuPlayerConfig = null
                            }
                            if (
                                message.danmukuDefaultPlayerConfig != null &&
                                message.hasOwnProperty('danmukuDefaultPlayerConfig')
                            )
                                object.danmukuDefaultPlayerConfig = $root.bilibili.community.service.dm.v1.DanmuDefaultPlayerConfig.toObject(
                                    message.danmukuDefaultPlayerConfig,
                                    options
                                )
                            if (
                                message.danmukuPlayerConfig != null &&
                                message.hasOwnProperty('danmukuPlayerConfig')
                            )
                                object.danmukuPlayerConfig = $root.bilibili.community.service.dm.v1.DanmuPlayerConfig.toObject(
                                    message.danmukuPlayerConfig,
                                    options
                                )
                            if (
                                message.danmukuPlayerDynamicConfig &&
                                message.danmukuPlayerDynamicConfig.length
                            ) {
                                object.danmukuPlayerDynamicConfig = []
                                for (var j = 0; j < message.danmukuPlayerDynamicConfig.length; ++j)
                                    object.danmukuPlayerDynamicConfig[
                                        j
                                    ] = $root.bilibili.community.service.dm.v1.DanmuPlayerDynamicConfig.toObject(
                                        message.danmukuPlayerDynamicConfig[j],
                                        options
                                    )
                            }
                            return object
                        }

                        /**
                         * Converts this DanmuPlayerViewConfig to JSON.
                         * @function toJSON
                         * @memberof bilibili.community.service.dm.v1.DanmuPlayerViewConfig
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        DanmuPlayerViewConfig.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
                        }

                        return DanmuPlayerViewConfig
                    })()

                    v1.InlinePlayerDanmakuSwitch = (function () {
                        /**
                         * Properties of an InlinePlayerDanmakuSwitch.
                         * @memberof bilibili.community.service.dm.v1
                         * @interface IInlinePlayerDanmakuSwitch
                         * @property {boolean|null} [value] InlinePlayerDanmakuSwitch value
                         */

                        /**
                         * Constructs a new InlinePlayerDanmakuSwitch.
                         * @memberof bilibili.community.service.dm.v1
                         * @classdesc Represents an InlinePlayerDanmakuSwitch.
                         * @implements IInlinePlayerDanmakuSwitch
                         * @constructor
                         * @param {bilibili.community.service.dm.v1.IInlinePlayerDanmakuSwitch=} [properties] Properties to set
                         */
                        function InlinePlayerDanmakuSwitch(properties) {
                            if (properties)
                                for (
                                    var keys = Object.keys(properties), i = 0;
                                    i < keys.length;
                                    ++i
                                )
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]]
                        }

                        /**
                         * InlinePlayerDanmakuSwitch value.
                         * @member {boolean} value
                         * @memberof bilibili.community.service.dm.v1.InlinePlayerDanmakuSwitch
                         * @instance
                         */
                        InlinePlayerDanmakuSwitch.prototype.value = false

                        /**
                         * Creates a new InlinePlayerDanmakuSwitch instance using the specified properties.
                         * @function create
                         * @memberof bilibili.community.service.dm.v1.InlinePlayerDanmakuSwitch
                         * @static
                         * @param {bilibili.community.service.dm.v1.IInlinePlayerDanmakuSwitch=} [properties] Properties to set
                         * @returns {bilibili.community.service.dm.v1.InlinePlayerDanmakuSwitch} InlinePlayerDanmakuSwitch instance
                         */
                        InlinePlayerDanmakuSwitch.create = function create(properties) {
                            return new InlinePlayerDanmakuSwitch(properties)
                        }

                        /**
                         * Encodes the specified InlinePlayerDanmakuSwitch message. Does not implicitly {@link bilibili.community.service.dm.v1.InlinePlayerDanmakuSwitch.verify|verify} messages.
                         * @function encode
                         * @memberof bilibili.community.service.dm.v1.InlinePlayerDanmakuSwitch
                         * @static
                         * @param {bilibili.community.service.dm.v1.IInlinePlayerDanmakuSwitch} message InlinePlayerDanmakuSwitch message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        InlinePlayerDanmakuSwitch.encode = function encode(message, writer) {
                            if (!writer) writer = $Writer.create()
                            if (
                                message.value != null &&
                                Object.hasOwnProperty.call(message, 'value')
                            )
                                writer.uint32(/* id 1, wireType 0 =*/ 8).bool(message.value)
                            return writer
                        }

                        /**
                         * Encodes the specified InlinePlayerDanmakuSwitch message, length delimited. Does not implicitly {@link bilibili.community.service.dm.v1.InlinePlayerDanmakuSwitch.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof bilibili.community.service.dm.v1.InlinePlayerDanmakuSwitch
                         * @static
                         * @param {bilibili.community.service.dm.v1.IInlinePlayerDanmakuSwitch} message InlinePlayerDanmakuSwitch message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        InlinePlayerDanmakuSwitch.encodeDelimited = function encodeDelimited(
                            message,
                            writer
                        ) {
                            return this.encode(message, writer).ldelim()
                        }

                        /**
                         * Decodes an InlinePlayerDanmakuSwitch message from the specified reader or buffer.
                         * @function decode
                         * @memberof bilibili.community.service.dm.v1.InlinePlayerDanmakuSwitch
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {bilibili.community.service.dm.v1.InlinePlayerDanmakuSwitch} InlinePlayerDanmakuSwitch
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        InlinePlayerDanmakuSwitch.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader)) reader = $Reader.create(reader)
                            var end = length === undefined ? reader.len : reader.pos + length,
                                message = new $root.bilibili.community.service.dm.v1.InlinePlayerDanmakuSwitch()
                            while (reader.pos < end) {
                                var tag = reader.uint32()
                                switch (tag >>> 3) {
                                    case 1:
                                        message.value = reader.bool()
                                        break
                                    default:
                                        reader.skipType(tag & 7)
                                        break
                                }
                            }
                            return message
                        }

                        /**
                         * Decodes an InlinePlayerDanmakuSwitch message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof bilibili.community.service.dm.v1.InlinePlayerDanmakuSwitch
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {bilibili.community.service.dm.v1.InlinePlayerDanmakuSwitch} InlinePlayerDanmakuSwitch
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        InlinePlayerDanmakuSwitch.decodeDelimited = function decodeDelimited(
                            reader
                        ) {
                            if (!(reader instanceof $Reader)) reader = new $Reader(reader)
                            return this.decode(reader, reader.uint32())
                        }

                        /**
                         * Verifies an InlinePlayerDanmakuSwitch message.
                         * @function verify
                         * @memberof bilibili.community.service.dm.v1.InlinePlayerDanmakuSwitch
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        InlinePlayerDanmakuSwitch.verify = function verify(message) {
                            if (typeof message !== 'object' || message === null)
                                return 'object expected'
                            if (message.value != null && message.hasOwnProperty('value'))
                                if (typeof message.value !== 'boolean')
                                    return 'value: boolean expected'
                            return null
                        }

                        /**
                         * Creates an InlinePlayerDanmakuSwitch message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof bilibili.community.service.dm.v1.InlinePlayerDanmakuSwitch
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {bilibili.community.service.dm.v1.InlinePlayerDanmakuSwitch} InlinePlayerDanmakuSwitch
                         */
                        InlinePlayerDanmakuSwitch.fromObject = function fromObject(object) {
                            if (
                                object instanceof
                                $root.bilibili.community.service.dm.v1.InlinePlayerDanmakuSwitch
                            )
                                return object
                            var message = new $root.bilibili.community.service.dm.v1.InlinePlayerDanmakuSwitch()
                            if (object.value != null) message.value = Boolean(object.value)
                            return message
                        }

                        /**
                         * Creates a plain object from an InlinePlayerDanmakuSwitch message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof bilibili.community.service.dm.v1.InlinePlayerDanmakuSwitch
                         * @static
                         * @param {bilibili.community.service.dm.v1.InlinePlayerDanmakuSwitch} message InlinePlayerDanmakuSwitch
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        InlinePlayerDanmakuSwitch.toObject = function toObject(message, options) {
                            if (!options) options = {}
                            var object = {}
                            if (options.defaults) object.value = false
                            if (message.value != null && message.hasOwnProperty('value'))
                                object.value = message.value
                            return object
                        }

                        /**
                         * Converts this InlinePlayerDanmakuSwitch to JSON.
                         * @function toJSON
                         * @memberof bilibili.community.service.dm.v1.InlinePlayerDanmakuSwitch
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        InlinePlayerDanmakuSwitch.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
                        }

                        return InlinePlayerDanmakuSwitch
                    })()

                    v1.PlayerDanmakuAiRecommendedLevel = (function () {
                        /**
                         * Properties of a PlayerDanmakuAiRecommendedLevel.
                         * @memberof bilibili.community.service.dm.v1
                         * @interface IPlayerDanmakuAiRecommendedLevel
                         * @property {boolean|null} [value] PlayerDanmakuAiRecommendedLevel value
                         */

                        /**
                         * Constructs a new PlayerDanmakuAiRecommendedLevel.
                         * @memberof bilibili.community.service.dm.v1
                         * @classdesc Represents a PlayerDanmakuAiRecommendedLevel.
                         * @implements IPlayerDanmakuAiRecommendedLevel
                         * @constructor
                         * @param {bilibili.community.service.dm.v1.IPlayerDanmakuAiRecommendedLevel=} [properties] Properties to set
                         */
                        function PlayerDanmakuAiRecommendedLevel(properties) {
                            if (properties)
                                for (
                                    var keys = Object.keys(properties), i = 0;
                                    i < keys.length;
                                    ++i
                                )
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]]
                        }

                        /**
                         * PlayerDanmakuAiRecommendedLevel value.
                         * @member {boolean} value
                         * @memberof bilibili.community.service.dm.v1.PlayerDanmakuAiRecommendedLevel
                         * @instance
                         */
                        PlayerDanmakuAiRecommendedLevel.prototype.value = false

                        /**
                         * Creates a new PlayerDanmakuAiRecommendedLevel instance using the specified properties.
                         * @function create
                         * @memberof bilibili.community.service.dm.v1.PlayerDanmakuAiRecommendedLevel
                         * @static
                         * @param {bilibili.community.service.dm.v1.IPlayerDanmakuAiRecommendedLevel=} [properties] Properties to set
                         * @returns {bilibili.community.service.dm.v1.PlayerDanmakuAiRecommendedLevel} PlayerDanmakuAiRecommendedLevel instance
                         */
                        PlayerDanmakuAiRecommendedLevel.create = function create(properties) {
                            return new PlayerDanmakuAiRecommendedLevel(properties)
                        }

                        /**
                         * Encodes the specified PlayerDanmakuAiRecommendedLevel message. Does not implicitly {@link bilibili.community.service.dm.v1.PlayerDanmakuAiRecommendedLevel.verify|verify} messages.
                         * @function encode
                         * @memberof bilibili.community.service.dm.v1.PlayerDanmakuAiRecommendedLevel
                         * @static
                         * @param {bilibili.community.service.dm.v1.IPlayerDanmakuAiRecommendedLevel} message PlayerDanmakuAiRecommendedLevel message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        PlayerDanmakuAiRecommendedLevel.encode = function encode(message, writer) {
                            if (!writer) writer = $Writer.create()
                            if (
                                message.value != null &&
                                Object.hasOwnProperty.call(message, 'value')
                            )
                                writer.uint32(/* id 1, wireType 0 =*/ 8).bool(message.value)
                            return writer
                        }

                        /**
                         * Encodes the specified PlayerDanmakuAiRecommendedLevel message, length delimited. Does not implicitly {@link bilibili.community.service.dm.v1.PlayerDanmakuAiRecommendedLevel.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof bilibili.community.service.dm.v1.PlayerDanmakuAiRecommendedLevel
                         * @static
                         * @param {bilibili.community.service.dm.v1.IPlayerDanmakuAiRecommendedLevel} message PlayerDanmakuAiRecommendedLevel message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        PlayerDanmakuAiRecommendedLevel.encodeDelimited = function encodeDelimited(
                            message,
                            writer
                        ) {
                            return this.encode(message, writer).ldelim()
                        }

                        /**
                         * Decodes a PlayerDanmakuAiRecommendedLevel message from the specified reader or buffer.
                         * @function decode
                         * @memberof bilibili.community.service.dm.v1.PlayerDanmakuAiRecommendedLevel
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {bilibili.community.service.dm.v1.PlayerDanmakuAiRecommendedLevel} PlayerDanmakuAiRecommendedLevel
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        PlayerDanmakuAiRecommendedLevel.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader)) reader = $Reader.create(reader)
                            var end = length === undefined ? reader.len : reader.pos + length,
                                message = new $root.bilibili.community.service.dm.v1.PlayerDanmakuAiRecommendedLevel()
                            while (reader.pos < end) {
                                var tag = reader.uint32()
                                switch (tag >>> 3) {
                                    case 1:
                                        message.value = reader.bool()
                                        break
                                    default:
                                        reader.skipType(tag & 7)
                                        break
                                }
                            }
                            return message
                        }

                        /**
                         * Decodes a PlayerDanmakuAiRecommendedLevel message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof bilibili.community.service.dm.v1.PlayerDanmakuAiRecommendedLevel
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {bilibili.community.service.dm.v1.PlayerDanmakuAiRecommendedLevel} PlayerDanmakuAiRecommendedLevel
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        PlayerDanmakuAiRecommendedLevel.decodeDelimited = function decodeDelimited(
                            reader
                        ) {
                            if (!(reader instanceof $Reader)) reader = new $Reader(reader)
                            return this.decode(reader, reader.uint32())
                        }

                        /**
                         * Verifies a PlayerDanmakuAiRecommendedLevel message.
                         * @function verify
                         * @memberof bilibili.community.service.dm.v1.PlayerDanmakuAiRecommendedLevel
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        PlayerDanmakuAiRecommendedLevel.verify = function verify(message) {
                            if (typeof message !== 'object' || message === null)
                                return 'object expected'
                            if (message.value != null && message.hasOwnProperty('value'))
                                if (typeof message.value !== 'boolean')
                                    return 'value: boolean expected'
                            return null
                        }

                        /**
                         * Creates a PlayerDanmakuAiRecommendedLevel message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof bilibili.community.service.dm.v1.PlayerDanmakuAiRecommendedLevel
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {bilibili.community.service.dm.v1.PlayerDanmakuAiRecommendedLevel} PlayerDanmakuAiRecommendedLevel
                         */
                        PlayerDanmakuAiRecommendedLevel.fromObject = function fromObject(object) {
                            if (
                                object instanceof
                                $root.bilibili.community.service.dm.v1
                                    .PlayerDanmakuAiRecommendedLevel
                            )
                                return object
                            var message = new $root.bilibili.community.service.dm.v1.PlayerDanmakuAiRecommendedLevel()
                            if (object.value != null) message.value = Boolean(object.value)
                            return message
                        }

                        /**
                         * Creates a plain object from a PlayerDanmakuAiRecommendedLevel message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof bilibili.community.service.dm.v1.PlayerDanmakuAiRecommendedLevel
                         * @static
                         * @param {bilibili.community.service.dm.v1.PlayerDanmakuAiRecommendedLevel} message PlayerDanmakuAiRecommendedLevel
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        PlayerDanmakuAiRecommendedLevel.toObject = function toObject(
                            message,
                            options
                        ) {
                            if (!options) options = {}
                            var object = {}
                            if (options.defaults) object.value = false
                            if (message.value != null && message.hasOwnProperty('value'))
                                object.value = message.value
                            return object
                        }

                        /**
                         * Converts this PlayerDanmakuAiRecommendedLevel to JSON.
                         * @function toJSON
                         * @memberof bilibili.community.service.dm.v1.PlayerDanmakuAiRecommendedLevel
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        PlayerDanmakuAiRecommendedLevel.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
                        }

                        return PlayerDanmakuAiRecommendedLevel
                    })()

                    v1.PlayerDanmakuAiRecommendedSwitch = (function () {
                        /**
                         * Properties of a PlayerDanmakuAiRecommendedSwitch.
                         * @memberof bilibili.community.service.dm.v1
                         * @interface IPlayerDanmakuAiRecommendedSwitch
                         * @property {boolean|null} [value] PlayerDanmakuAiRecommendedSwitch value
                         */

                        /**
                         * Constructs a new PlayerDanmakuAiRecommendedSwitch.
                         * @memberof bilibili.community.service.dm.v1
                         * @classdesc Represents a PlayerDanmakuAiRecommendedSwitch.
                         * @implements IPlayerDanmakuAiRecommendedSwitch
                         * @constructor
                         * @param {bilibili.community.service.dm.v1.IPlayerDanmakuAiRecommendedSwitch=} [properties] Properties to set
                         */
                        function PlayerDanmakuAiRecommendedSwitch(properties) {
                            if (properties)
                                for (
                                    var keys = Object.keys(properties), i = 0;
                                    i < keys.length;
                                    ++i
                                )
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]]
                        }

                        /**
                         * PlayerDanmakuAiRecommendedSwitch value.
                         * @member {boolean} value
                         * @memberof bilibili.community.service.dm.v1.PlayerDanmakuAiRecommendedSwitch
                         * @instance
                         */
                        PlayerDanmakuAiRecommendedSwitch.prototype.value = false

                        /**
                         * Creates a new PlayerDanmakuAiRecommendedSwitch instance using the specified properties.
                         * @function create
                         * @memberof bilibili.community.service.dm.v1.PlayerDanmakuAiRecommendedSwitch
                         * @static
                         * @param {bilibili.community.service.dm.v1.IPlayerDanmakuAiRecommendedSwitch=} [properties] Properties to set
                         * @returns {bilibili.community.service.dm.v1.PlayerDanmakuAiRecommendedSwitch} PlayerDanmakuAiRecommendedSwitch instance
                         */
                        PlayerDanmakuAiRecommendedSwitch.create = function create(properties) {
                            return new PlayerDanmakuAiRecommendedSwitch(properties)
                        }

                        /**
                         * Encodes the specified PlayerDanmakuAiRecommendedSwitch message. Does not implicitly {@link bilibili.community.service.dm.v1.PlayerDanmakuAiRecommendedSwitch.verify|verify} messages.
                         * @function encode
                         * @memberof bilibili.community.service.dm.v1.PlayerDanmakuAiRecommendedSwitch
                         * @static
                         * @param {bilibili.community.service.dm.v1.IPlayerDanmakuAiRecommendedSwitch} message PlayerDanmakuAiRecommendedSwitch message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        PlayerDanmakuAiRecommendedSwitch.encode = function encode(message, writer) {
                            if (!writer) writer = $Writer.create()
                            if (
                                message.value != null &&
                                Object.hasOwnProperty.call(message, 'value')
                            )
                                writer.uint32(/* id 1, wireType 0 =*/ 8).bool(message.value)
                            return writer
                        }

                        /**
                         * Encodes the specified PlayerDanmakuAiRecommendedSwitch message, length delimited. Does not implicitly {@link bilibili.community.service.dm.v1.PlayerDanmakuAiRecommendedSwitch.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof bilibili.community.service.dm.v1.PlayerDanmakuAiRecommendedSwitch
                         * @static
                         * @param {bilibili.community.service.dm.v1.IPlayerDanmakuAiRecommendedSwitch} message PlayerDanmakuAiRecommendedSwitch message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        PlayerDanmakuAiRecommendedSwitch.encodeDelimited = function encodeDelimited(
                            message,
                            writer
                        ) {
                            return this.encode(message, writer).ldelim()
                        }

                        /**
                         * Decodes a PlayerDanmakuAiRecommendedSwitch message from the specified reader or buffer.
                         * @function decode
                         * @memberof bilibili.community.service.dm.v1.PlayerDanmakuAiRecommendedSwitch
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {bilibili.community.service.dm.v1.PlayerDanmakuAiRecommendedSwitch} PlayerDanmakuAiRecommendedSwitch
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        PlayerDanmakuAiRecommendedSwitch.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader)) reader = $Reader.create(reader)
                            var end = length === undefined ? reader.len : reader.pos + length,
                                message = new $root.bilibili.community.service.dm.v1.PlayerDanmakuAiRecommendedSwitch()
                            while (reader.pos < end) {
                                var tag = reader.uint32()
                                switch (tag >>> 3) {
                                    case 1:
                                        message.value = reader.bool()
                                        break
                                    default:
                                        reader.skipType(tag & 7)
                                        break
                                }
                            }
                            return message
                        }

                        /**
                         * Decodes a PlayerDanmakuAiRecommendedSwitch message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof bilibili.community.service.dm.v1.PlayerDanmakuAiRecommendedSwitch
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {bilibili.community.service.dm.v1.PlayerDanmakuAiRecommendedSwitch} PlayerDanmakuAiRecommendedSwitch
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        PlayerDanmakuAiRecommendedSwitch.decodeDelimited = function decodeDelimited(
                            reader
                        ) {
                            if (!(reader instanceof $Reader)) reader = new $Reader(reader)
                            return this.decode(reader, reader.uint32())
                        }

                        /**
                         * Verifies a PlayerDanmakuAiRecommendedSwitch message.
                         * @function verify
                         * @memberof bilibili.community.service.dm.v1.PlayerDanmakuAiRecommendedSwitch
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        PlayerDanmakuAiRecommendedSwitch.verify = function verify(message) {
                            if (typeof message !== 'object' || message === null)
                                return 'object expected'
                            if (message.value != null && message.hasOwnProperty('value'))
                                if (typeof message.value !== 'boolean')
                                    return 'value: boolean expected'
                            return null
                        }

                        /**
                         * Creates a PlayerDanmakuAiRecommendedSwitch message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof bilibili.community.service.dm.v1.PlayerDanmakuAiRecommendedSwitch
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {bilibili.community.service.dm.v1.PlayerDanmakuAiRecommendedSwitch} PlayerDanmakuAiRecommendedSwitch
                         */
                        PlayerDanmakuAiRecommendedSwitch.fromObject = function fromObject(object) {
                            if (
                                object instanceof
                                $root.bilibili.community.service.dm.v1
                                    .PlayerDanmakuAiRecommendedSwitch
                            )
                                return object
                            var message = new $root.bilibili.community.service.dm.v1.PlayerDanmakuAiRecommendedSwitch()
                            if (object.value != null) message.value = Boolean(object.value)
                            return message
                        }

                        /**
                         * Creates a plain object from a PlayerDanmakuAiRecommendedSwitch message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof bilibili.community.service.dm.v1.PlayerDanmakuAiRecommendedSwitch
                         * @static
                         * @param {bilibili.community.service.dm.v1.PlayerDanmakuAiRecommendedSwitch} message PlayerDanmakuAiRecommendedSwitch
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        PlayerDanmakuAiRecommendedSwitch.toObject = function toObject(
                            message,
                            options
                        ) {
                            if (!options) options = {}
                            var object = {}
                            if (options.defaults) object.value = false
                            if (message.value != null && message.hasOwnProperty('value'))
                                object.value = message.value
                            return object
                        }

                        /**
                         * Converts this PlayerDanmakuAiRecommendedSwitch to JSON.
                         * @function toJSON
                         * @memberof bilibili.community.service.dm.v1.PlayerDanmakuAiRecommendedSwitch
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        PlayerDanmakuAiRecommendedSwitch.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
                        }

                        return PlayerDanmakuAiRecommendedSwitch
                    })()

                    v1.PlayerDanmakuBlockbottom = (function () {
                        /**
                         * Properties of a PlayerDanmakuBlockbottom.
                         * @memberof bilibili.community.service.dm.v1
                         * @interface IPlayerDanmakuBlockbottom
                         * @property {boolean|null} [value] PlayerDanmakuBlockbottom value
                         */

                        /**
                         * Constructs a new PlayerDanmakuBlockbottom.
                         * @memberof bilibili.community.service.dm.v1
                         * @classdesc Represents a PlayerDanmakuBlockbottom.
                         * @implements IPlayerDanmakuBlockbottom
                         * @constructor
                         * @param {bilibili.community.service.dm.v1.IPlayerDanmakuBlockbottom=} [properties] Properties to set
                         */
                        function PlayerDanmakuBlockbottom(properties) {
                            if (properties)
                                for (
                                    var keys = Object.keys(properties), i = 0;
                                    i < keys.length;
                                    ++i
                                )
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]]
                        }

                        /**
                         * PlayerDanmakuBlockbottom value.
                         * @member {boolean} value
                         * @memberof bilibili.community.service.dm.v1.PlayerDanmakuBlockbottom
                         * @instance
                         */
                        PlayerDanmakuBlockbottom.prototype.value = false

                        /**
                         * Creates a new PlayerDanmakuBlockbottom instance using the specified properties.
                         * @function create
                         * @memberof bilibili.community.service.dm.v1.PlayerDanmakuBlockbottom
                         * @static
                         * @param {bilibili.community.service.dm.v1.IPlayerDanmakuBlockbottom=} [properties] Properties to set
                         * @returns {bilibili.community.service.dm.v1.PlayerDanmakuBlockbottom} PlayerDanmakuBlockbottom instance
                         */
                        PlayerDanmakuBlockbottom.create = function create(properties) {
                            return new PlayerDanmakuBlockbottom(properties)
                        }

                        /**
                         * Encodes the specified PlayerDanmakuBlockbottom message. Does not implicitly {@link bilibili.community.service.dm.v1.PlayerDanmakuBlockbottom.verify|verify} messages.
                         * @function encode
                         * @memberof bilibili.community.service.dm.v1.PlayerDanmakuBlockbottom
                         * @static
                         * @param {bilibili.community.service.dm.v1.IPlayerDanmakuBlockbottom} message PlayerDanmakuBlockbottom message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        PlayerDanmakuBlockbottom.encode = function encode(message, writer) {
                            if (!writer) writer = $Writer.create()
                            if (
                                message.value != null &&
                                Object.hasOwnProperty.call(message, 'value')
                            )
                                writer.uint32(/* id 1, wireType 0 =*/ 8).bool(message.value)
                            return writer
                        }

                        /**
                         * Encodes the specified PlayerDanmakuBlockbottom message, length delimited. Does not implicitly {@link bilibili.community.service.dm.v1.PlayerDanmakuBlockbottom.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof bilibili.community.service.dm.v1.PlayerDanmakuBlockbottom
                         * @static
                         * @param {bilibili.community.service.dm.v1.IPlayerDanmakuBlockbottom} message PlayerDanmakuBlockbottom message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        PlayerDanmakuBlockbottom.encodeDelimited = function encodeDelimited(
                            message,
                            writer
                        ) {
                            return this.encode(message, writer).ldelim()
                        }

                        /**
                         * Decodes a PlayerDanmakuBlockbottom message from the specified reader or buffer.
                         * @function decode
                         * @memberof bilibili.community.service.dm.v1.PlayerDanmakuBlockbottom
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {bilibili.community.service.dm.v1.PlayerDanmakuBlockbottom} PlayerDanmakuBlockbottom
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        PlayerDanmakuBlockbottom.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader)) reader = $Reader.create(reader)
                            var end = length === undefined ? reader.len : reader.pos + length,
                                message = new $root.bilibili.community.service.dm.v1.PlayerDanmakuBlockbottom()
                            while (reader.pos < end) {
                                var tag = reader.uint32()
                                switch (tag >>> 3) {
                                    case 1:
                                        message.value = reader.bool()
                                        break
                                    default:
                                        reader.skipType(tag & 7)
                                        break
                                }
                            }
                            return message
                        }

                        /**
                         * Decodes a PlayerDanmakuBlockbottom message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof bilibili.community.service.dm.v1.PlayerDanmakuBlockbottom
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {bilibili.community.service.dm.v1.PlayerDanmakuBlockbottom} PlayerDanmakuBlockbottom
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        PlayerDanmakuBlockbottom.decodeDelimited = function decodeDelimited(
                            reader
                        ) {
                            if (!(reader instanceof $Reader)) reader = new $Reader(reader)
                            return this.decode(reader, reader.uint32())
                        }

                        /**
                         * Verifies a PlayerDanmakuBlockbottom message.
                         * @function verify
                         * @memberof bilibili.community.service.dm.v1.PlayerDanmakuBlockbottom
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        PlayerDanmakuBlockbottom.verify = function verify(message) {
                            if (typeof message !== 'object' || message === null)
                                return 'object expected'
                            if (message.value != null && message.hasOwnProperty('value'))
                                if (typeof message.value !== 'boolean')
                                    return 'value: boolean expected'
                            return null
                        }

                        /**
                         * Creates a PlayerDanmakuBlockbottom message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof bilibili.community.service.dm.v1.PlayerDanmakuBlockbottom
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {bilibili.community.service.dm.v1.PlayerDanmakuBlockbottom} PlayerDanmakuBlockbottom
                         */
                        PlayerDanmakuBlockbottom.fromObject = function fromObject(object) {
                            if (
                                object instanceof
                                $root.bilibili.community.service.dm.v1.PlayerDanmakuBlockbottom
                            )
                                return object
                            var message = new $root.bilibili.community.service.dm.v1.PlayerDanmakuBlockbottom()
                            if (object.value != null) message.value = Boolean(object.value)
                            return message
                        }

                        /**
                         * Creates a plain object from a PlayerDanmakuBlockbottom message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof bilibili.community.service.dm.v1.PlayerDanmakuBlockbottom
                         * @static
                         * @param {bilibili.community.service.dm.v1.PlayerDanmakuBlockbottom} message PlayerDanmakuBlockbottom
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        PlayerDanmakuBlockbottom.toObject = function toObject(message, options) {
                            if (!options) options = {}
                            var object = {}
                            if (options.defaults) object.value = false
                            if (message.value != null && message.hasOwnProperty('value'))
                                object.value = message.value
                            return object
                        }

                        /**
                         * Converts this PlayerDanmakuBlockbottom to JSON.
                         * @function toJSON
                         * @memberof bilibili.community.service.dm.v1.PlayerDanmakuBlockbottom
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        PlayerDanmakuBlockbottom.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
                        }

                        return PlayerDanmakuBlockbottom
                    })()

                    v1.PlayerDanmakuBlockcolorful = (function () {
                        /**
                         * Properties of a PlayerDanmakuBlockcolorful.
                         * @memberof bilibili.community.service.dm.v1
                         * @interface IPlayerDanmakuBlockcolorful
                         * @property {boolean|null} [value] PlayerDanmakuBlockcolorful value
                         */

                        /**
                         * Constructs a new PlayerDanmakuBlockcolorful.
                         * @memberof bilibili.community.service.dm.v1
                         * @classdesc Represents a PlayerDanmakuBlockcolorful.
                         * @implements IPlayerDanmakuBlockcolorful
                         * @constructor
                         * @param {bilibili.community.service.dm.v1.IPlayerDanmakuBlockcolorful=} [properties] Properties to set
                         */
                        function PlayerDanmakuBlockcolorful(properties) {
                            if (properties)
                                for (
                                    var keys = Object.keys(properties), i = 0;
                                    i < keys.length;
                                    ++i
                                )
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]]
                        }

                        /**
                         * PlayerDanmakuBlockcolorful value.
                         * @member {boolean} value
                         * @memberof bilibili.community.service.dm.v1.PlayerDanmakuBlockcolorful
                         * @instance
                         */
                        PlayerDanmakuBlockcolorful.prototype.value = false

                        /**
                         * Creates a new PlayerDanmakuBlockcolorful instance using the specified properties.
                         * @function create
                         * @memberof bilibili.community.service.dm.v1.PlayerDanmakuBlockcolorful
                         * @static
                         * @param {bilibili.community.service.dm.v1.IPlayerDanmakuBlockcolorful=} [properties] Properties to set
                         * @returns {bilibili.community.service.dm.v1.PlayerDanmakuBlockcolorful} PlayerDanmakuBlockcolorful instance
                         */
                        PlayerDanmakuBlockcolorful.create = function create(properties) {
                            return new PlayerDanmakuBlockcolorful(properties)
                        }

                        /**
                         * Encodes the specified PlayerDanmakuBlockcolorful message. Does not implicitly {@link bilibili.community.service.dm.v1.PlayerDanmakuBlockcolorful.verify|verify} messages.
                         * @function encode
                         * @memberof bilibili.community.service.dm.v1.PlayerDanmakuBlockcolorful
                         * @static
                         * @param {bilibili.community.service.dm.v1.IPlayerDanmakuBlockcolorful} message PlayerDanmakuBlockcolorful message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        PlayerDanmakuBlockcolorful.encode = function encode(message, writer) {
                            if (!writer) writer = $Writer.create()
                            if (
                                message.value != null &&
                                Object.hasOwnProperty.call(message, 'value')
                            )
                                writer.uint32(/* id 1, wireType 0 =*/ 8).bool(message.value)
                            return writer
                        }

                        /**
                         * Encodes the specified PlayerDanmakuBlockcolorful message, length delimited. Does not implicitly {@link bilibili.community.service.dm.v1.PlayerDanmakuBlockcolorful.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof bilibili.community.service.dm.v1.PlayerDanmakuBlockcolorful
                         * @static
                         * @param {bilibili.community.service.dm.v1.IPlayerDanmakuBlockcolorful} message PlayerDanmakuBlockcolorful message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        PlayerDanmakuBlockcolorful.encodeDelimited = function encodeDelimited(
                            message,
                            writer
                        ) {
                            return this.encode(message, writer).ldelim()
                        }

                        /**
                         * Decodes a PlayerDanmakuBlockcolorful message from the specified reader or buffer.
                         * @function decode
                         * @memberof bilibili.community.service.dm.v1.PlayerDanmakuBlockcolorful
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {bilibili.community.service.dm.v1.PlayerDanmakuBlockcolorful} PlayerDanmakuBlockcolorful
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        PlayerDanmakuBlockcolorful.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader)) reader = $Reader.create(reader)
                            var end = length === undefined ? reader.len : reader.pos + length,
                                message = new $root.bilibili.community.service.dm.v1.PlayerDanmakuBlockcolorful()
                            while (reader.pos < end) {
                                var tag = reader.uint32()
                                switch (tag >>> 3) {
                                    case 1:
                                        message.value = reader.bool()
                                        break
                                    default:
                                        reader.skipType(tag & 7)
                                        break
                                }
                            }
                            return message
                        }

                        /**
                         * Decodes a PlayerDanmakuBlockcolorful message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof bilibili.community.service.dm.v1.PlayerDanmakuBlockcolorful
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {bilibili.community.service.dm.v1.PlayerDanmakuBlockcolorful} PlayerDanmakuBlockcolorful
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        PlayerDanmakuBlockcolorful.decodeDelimited = function decodeDelimited(
                            reader
                        ) {
                            if (!(reader instanceof $Reader)) reader = new $Reader(reader)
                            return this.decode(reader, reader.uint32())
                        }

                        /**
                         * Verifies a PlayerDanmakuBlockcolorful message.
                         * @function verify
                         * @memberof bilibili.community.service.dm.v1.PlayerDanmakuBlockcolorful
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        PlayerDanmakuBlockcolorful.verify = function verify(message) {
                            if (typeof message !== 'object' || message === null)
                                return 'object expected'
                            if (message.value != null && message.hasOwnProperty('value'))
                                if (typeof message.value !== 'boolean')
                                    return 'value: boolean expected'
                            return null
                        }

                        /**
                         * Creates a PlayerDanmakuBlockcolorful message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof bilibili.community.service.dm.v1.PlayerDanmakuBlockcolorful
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {bilibili.community.service.dm.v1.PlayerDanmakuBlockcolorful} PlayerDanmakuBlockcolorful
                         */
                        PlayerDanmakuBlockcolorful.fromObject = function fromObject(object) {
                            if (
                                object instanceof
                                $root.bilibili.community.service.dm.v1.PlayerDanmakuBlockcolorful
                            )
                                return object
                            var message = new $root.bilibili.community.service.dm.v1.PlayerDanmakuBlockcolorful()
                            if (object.value != null) message.value = Boolean(object.value)
                            return message
                        }

                        /**
                         * Creates a plain object from a PlayerDanmakuBlockcolorful message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof bilibili.community.service.dm.v1.PlayerDanmakuBlockcolorful
                         * @static
                         * @param {bilibili.community.service.dm.v1.PlayerDanmakuBlockcolorful} message PlayerDanmakuBlockcolorful
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        PlayerDanmakuBlockcolorful.toObject = function toObject(message, options) {
                            if (!options) options = {}
                            var object = {}
                            if (options.defaults) object.value = false
                            if (message.value != null && message.hasOwnProperty('value'))
                                object.value = message.value
                            return object
                        }

                        /**
                         * Converts this PlayerDanmakuBlockcolorful to JSON.
                         * @function toJSON
                         * @memberof bilibili.community.service.dm.v1.PlayerDanmakuBlockcolorful
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        PlayerDanmakuBlockcolorful.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
                        }

                        return PlayerDanmakuBlockcolorful
                    })()

                    v1.PlayerDanmakuBlockrepeat = (function () {
                        /**
                         * Properties of a PlayerDanmakuBlockrepeat.
                         * @memberof bilibili.community.service.dm.v1
                         * @interface IPlayerDanmakuBlockrepeat
                         * @property {boolean|null} [value] PlayerDanmakuBlockrepeat value
                         */

                        /**
                         * Constructs a new PlayerDanmakuBlockrepeat.
                         * @memberof bilibili.community.service.dm.v1
                         * @classdesc Represents a PlayerDanmakuBlockrepeat.
                         * @implements IPlayerDanmakuBlockrepeat
                         * @constructor
                         * @param {bilibili.community.service.dm.v1.IPlayerDanmakuBlockrepeat=} [properties] Properties to set
                         */
                        function PlayerDanmakuBlockrepeat(properties) {
                            if (properties)
                                for (
                                    var keys = Object.keys(properties), i = 0;
                                    i < keys.length;
                                    ++i
                                )
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]]
                        }

                        /**
                         * PlayerDanmakuBlockrepeat value.
                         * @member {boolean} value
                         * @memberof bilibili.community.service.dm.v1.PlayerDanmakuBlockrepeat
                         * @instance
                         */
                        PlayerDanmakuBlockrepeat.prototype.value = false

                        /**
                         * Creates a new PlayerDanmakuBlockrepeat instance using the specified properties.
                         * @function create
                         * @memberof bilibili.community.service.dm.v1.PlayerDanmakuBlockrepeat
                         * @static
                         * @param {bilibili.community.service.dm.v1.IPlayerDanmakuBlockrepeat=} [properties] Properties to set
                         * @returns {bilibili.community.service.dm.v1.PlayerDanmakuBlockrepeat} PlayerDanmakuBlockrepeat instance
                         */
                        PlayerDanmakuBlockrepeat.create = function create(properties) {
                            return new PlayerDanmakuBlockrepeat(properties)
                        }

                        /**
                         * Encodes the specified PlayerDanmakuBlockrepeat message. Does not implicitly {@link bilibili.community.service.dm.v1.PlayerDanmakuBlockrepeat.verify|verify} messages.
                         * @function encode
                         * @memberof bilibili.community.service.dm.v1.PlayerDanmakuBlockrepeat
                         * @static
                         * @param {bilibili.community.service.dm.v1.IPlayerDanmakuBlockrepeat} message PlayerDanmakuBlockrepeat message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        PlayerDanmakuBlockrepeat.encode = function encode(message, writer) {
                            if (!writer) writer = $Writer.create()
                            if (
                                message.value != null &&
                                Object.hasOwnProperty.call(message, 'value')
                            )
                                writer.uint32(/* id 1, wireType 0 =*/ 8).bool(message.value)
                            return writer
                        }

                        /**
                         * Encodes the specified PlayerDanmakuBlockrepeat message, length delimited. Does not implicitly {@link bilibili.community.service.dm.v1.PlayerDanmakuBlockrepeat.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof bilibili.community.service.dm.v1.PlayerDanmakuBlockrepeat
                         * @static
                         * @param {bilibili.community.service.dm.v1.IPlayerDanmakuBlockrepeat} message PlayerDanmakuBlockrepeat message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        PlayerDanmakuBlockrepeat.encodeDelimited = function encodeDelimited(
                            message,
                            writer
                        ) {
                            return this.encode(message, writer).ldelim()
                        }

                        /**
                         * Decodes a PlayerDanmakuBlockrepeat message from the specified reader or buffer.
                         * @function decode
                         * @memberof bilibili.community.service.dm.v1.PlayerDanmakuBlockrepeat
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {bilibili.community.service.dm.v1.PlayerDanmakuBlockrepeat} PlayerDanmakuBlockrepeat
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        PlayerDanmakuBlockrepeat.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader)) reader = $Reader.create(reader)
                            var end = length === undefined ? reader.len : reader.pos + length,
                                message = new $root.bilibili.community.service.dm.v1.PlayerDanmakuBlockrepeat()
                            while (reader.pos < end) {
                                var tag = reader.uint32()
                                switch (tag >>> 3) {
                                    case 1:
                                        message.value = reader.bool()
                                        break
                                    default:
                                        reader.skipType(tag & 7)
                                        break
                                }
                            }
                            return message
                        }

                        /**
                         * Decodes a PlayerDanmakuBlockrepeat message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof bilibili.community.service.dm.v1.PlayerDanmakuBlockrepeat
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {bilibili.community.service.dm.v1.PlayerDanmakuBlockrepeat} PlayerDanmakuBlockrepeat
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        PlayerDanmakuBlockrepeat.decodeDelimited = function decodeDelimited(
                            reader
                        ) {
                            if (!(reader instanceof $Reader)) reader = new $Reader(reader)
                            return this.decode(reader, reader.uint32())
                        }

                        /**
                         * Verifies a PlayerDanmakuBlockrepeat message.
                         * @function verify
                         * @memberof bilibili.community.service.dm.v1.PlayerDanmakuBlockrepeat
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        PlayerDanmakuBlockrepeat.verify = function verify(message) {
                            if (typeof message !== 'object' || message === null)
                                return 'object expected'
                            if (message.value != null && message.hasOwnProperty('value'))
                                if (typeof message.value !== 'boolean')
                                    return 'value: boolean expected'
                            return null
                        }

                        /**
                         * Creates a PlayerDanmakuBlockrepeat message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof bilibili.community.service.dm.v1.PlayerDanmakuBlockrepeat
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {bilibili.community.service.dm.v1.PlayerDanmakuBlockrepeat} PlayerDanmakuBlockrepeat
                         */
                        PlayerDanmakuBlockrepeat.fromObject = function fromObject(object) {
                            if (
                                object instanceof
                                $root.bilibili.community.service.dm.v1.PlayerDanmakuBlockrepeat
                            )
                                return object
                            var message = new $root.bilibili.community.service.dm.v1.PlayerDanmakuBlockrepeat()
                            if (object.value != null) message.value = Boolean(object.value)
                            return message
                        }

                        /**
                         * Creates a plain object from a PlayerDanmakuBlockrepeat message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof bilibili.community.service.dm.v1.PlayerDanmakuBlockrepeat
                         * @static
                         * @param {bilibili.community.service.dm.v1.PlayerDanmakuBlockrepeat} message PlayerDanmakuBlockrepeat
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        PlayerDanmakuBlockrepeat.toObject = function toObject(message, options) {
                            if (!options) options = {}
                            var object = {}
                            if (options.defaults) object.value = false
                            if (message.value != null && message.hasOwnProperty('value'))
                                object.value = message.value
                            return object
                        }

                        /**
                         * Converts this PlayerDanmakuBlockrepeat to JSON.
                         * @function toJSON
                         * @memberof bilibili.community.service.dm.v1.PlayerDanmakuBlockrepeat
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        PlayerDanmakuBlockrepeat.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
                        }

                        return PlayerDanmakuBlockrepeat
                    })()

                    v1.PlayerDanmakuBlockscroll = (function () {
                        /**
                         * Properties of a PlayerDanmakuBlockscroll.
                         * @memberof bilibili.community.service.dm.v1
                         * @interface IPlayerDanmakuBlockscroll
                         * @property {boolean|null} [value] PlayerDanmakuBlockscroll value
                         */

                        /**
                         * Constructs a new PlayerDanmakuBlockscroll.
                         * @memberof bilibili.community.service.dm.v1
                         * @classdesc Represents a PlayerDanmakuBlockscroll.
                         * @implements IPlayerDanmakuBlockscroll
                         * @constructor
                         * @param {bilibili.community.service.dm.v1.IPlayerDanmakuBlockscroll=} [properties] Properties to set
                         */
                        function PlayerDanmakuBlockscroll(properties) {
                            if (properties)
                                for (
                                    var keys = Object.keys(properties), i = 0;
                                    i < keys.length;
                                    ++i
                                )
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]]
                        }

                        /**
                         * PlayerDanmakuBlockscroll value.
                         * @member {boolean} value
                         * @memberof bilibili.community.service.dm.v1.PlayerDanmakuBlockscroll
                         * @instance
                         */
                        PlayerDanmakuBlockscroll.prototype.value = false

                        /**
                         * Creates a new PlayerDanmakuBlockscroll instance using the specified properties.
                         * @function create
                         * @memberof bilibili.community.service.dm.v1.PlayerDanmakuBlockscroll
                         * @static
                         * @param {bilibili.community.service.dm.v1.IPlayerDanmakuBlockscroll=} [properties] Properties to set
                         * @returns {bilibili.community.service.dm.v1.PlayerDanmakuBlockscroll} PlayerDanmakuBlockscroll instance
                         */
                        PlayerDanmakuBlockscroll.create = function create(properties) {
                            return new PlayerDanmakuBlockscroll(properties)
                        }

                        /**
                         * Encodes the specified PlayerDanmakuBlockscroll message. Does not implicitly {@link bilibili.community.service.dm.v1.PlayerDanmakuBlockscroll.verify|verify} messages.
                         * @function encode
                         * @memberof bilibili.community.service.dm.v1.PlayerDanmakuBlockscroll
                         * @static
                         * @param {bilibili.community.service.dm.v1.IPlayerDanmakuBlockscroll} message PlayerDanmakuBlockscroll message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        PlayerDanmakuBlockscroll.encode = function encode(message, writer) {
                            if (!writer) writer = $Writer.create()
                            if (
                                message.value != null &&
                                Object.hasOwnProperty.call(message, 'value')
                            )
                                writer.uint32(/* id 1, wireType 0 =*/ 8).bool(message.value)
                            return writer
                        }

                        /**
                         * Encodes the specified PlayerDanmakuBlockscroll message, length delimited. Does not implicitly {@link bilibili.community.service.dm.v1.PlayerDanmakuBlockscroll.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof bilibili.community.service.dm.v1.PlayerDanmakuBlockscroll
                         * @static
                         * @param {bilibili.community.service.dm.v1.IPlayerDanmakuBlockscroll} message PlayerDanmakuBlockscroll message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        PlayerDanmakuBlockscroll.encodeDelimited = function encodeDelimited(
                            message,
                            writer
                        ) {
                            return this.encode(message, writer).ldelim()
                        }

                        /**
                         * Decodes a PlayerDanmakuBlockscroll message from the specified reader or buffer.
                         * @function decode
                         * @memberof bilibili.community.service.dm.v1.PlayerDanmakuBlockscroll
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {bilibili.community.service.dm.v1.PlayerDanmakuBlockscroll} PlayerDanmakuBlockscroll
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        PlayerDanmakuBlockscroll.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader)) reader = $Reader.create(reader)
                            var end = length === undefined ? reader.len : reader.pos + length,
                                message = new $root.bilibili.community.service.dm.v1.PlayerDanmakuBlockscroll()
                            while (reader.pos < end) {
                                var tag = reader.uint32()
                                switch (tag >>> 3) {
                                    case 1:
                                        message.value = reader.bool()
                                        break
                                    default:
                                        reader.skipType(tag & 7)
                                        break
                                }
                            }
                            return message
                        }

                        /**
                         * Decodes a PlayerDanmakuBlockscroll message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof bilibili.community.service.dm.v1.PlayerDanmakuBlockscroll
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {bilibili.community.service.dm.v1.PlayerDanmakuBlockscroll} PlayerDanmakuBlockscroll
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        PlayerDanmakuBlockscroll.decodeDelimited = function decodeDelimited(
                            reader
                        ) {
                            if (!(reader instanceof $Reader)) reader = new $Reader(reader)
                            return this.decode(reader, reader.uint32())
                        }

                        /**
                         * Verifies a PlayerDanmakuBlockscroll message.
                         * @function verify
                         * @memberof bilibili.community.service.dm.v1.PlayerDanmakuBlockscroll
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        PlayerDanmakuBlockscroll.verify = function verify(message) {
                            if (typeof message !== 'object' || message === null)
                                return 'object expected'
                            if (message.value != null && message.hasOwnProperty('value'))
                                if (typeof message.value !== 'boolean')
                                    return 'value: boolean expected'
                            return null
                        }

                        /**
                         * Creates a PlayerDanmakuBlockscroll message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof bilibili.community.service.dm.v1.PlayerDanmakuBlockscroll
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {bilibili.community.service.dm.v1.PlayerDanmakuBlockscroll} PlayerDanmakuBlockscroll
                         */
                        PlayerDanmakuBlockscroll.fromObject = function fromObject(object) {
                            if (
                                object instanceof
                                $root.bilibili.community.service.dm.v1.PlayerDanmakuBlockscroll
                            )
                                return object
                            var message = new $root.bilibili.community.service.dm.v1.PlayerDanmakuBlockscroll()
                            if (object.value != null) message.value = Boolean(object.value)
                            return message
                        }

                        /**
                         * Creates a plain object from a PlayerDanmakuBlockscroll message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof bilibili.community.service.dm.v1.PlayerDanmakuBlockscroll
                         * @static
                         * @param {bilibili.community.service.dm.v1.PlayerDanmakuBlockscroll} message PlayerDanmakuBlockscroll
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        PlayerDanmakuBlockscroll.toObject = function toObject(message, options) {
                            if (!options) options = {}
                            var object = {}
                            if (options.defaults) object.value = false
                            if (message.value != null && message.hasOwnProperty('value'))
                                object.value = message.value
                            return object
                        }

                        /**
                         * Converts this PlayerDanmakuBlockscroll to JSON.
                         * @function toJSON
                         * @memberof bilibili.community.service.dm.v1.PlayerDanmakuBlockscroll
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        PlayerDanmakuBlockscroll.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
                        }

                        return PlayerDanmakuBlockscroll
                    })()

                    v1.PlayerDanmakuBlockspecial = (function () {
                        /**
                         * Properties of a PlayerDanmakuBlockspecial.
                         * @memberof bilibili.community.service.dm.v1
                         * @interface IPlayerDanmakuBlockspecial
                         * @property {boolean|null} [value] PlayerDanmakuBlockspecial value
                         */

                        /**
                         * Constructs a new PlayerDanmakuBlockspecial.
                         * @memberof bilibili.community.service.dm.v1
                         * @classdesc Represents a PlayerDanmakuBlockspecial.
                         * @implements IPlayerDanmakuBlockspecial
                         * @constructor
                         * @param {bilibili.community.service.dm.v1.IPlayerDanmakuBlockspecial=} [properties] Properties to set
                         */
                        function PlayerDanmakuBlockspecial(properties) {
                            if (properties)
                                for (
                                    var keys = Object.keys(properties), i = 0;
                                    i < keys.length;
                                    ++i
                                )
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]]
                        }

                        /**
                         * PlayerDanmakuBlockspecial value.
                         * @member {boolean} value
                         * @memberof bilibili.community.service.dm.v1.PlayerDanmakuBlockspecial
                         * @instance
                         */
                        PlayerDanmakuBlockspecial.prototype.value = false

                        /**
                         * Creates a new PlayerDanmakuBlockspecial instance using the specified properties.
                         * @function create
                         * @memberof bilibili.community.service.dm.v1.PlayerDanmakuBlockspecial
                         * @static
                         * @param {bilibili.community.service.dm.v1.IPlayerDanmakuBlockspecial=} [properties] Properties to set
                         * @returns {bilibili.community.service.dm.v1.PlayerDanmakuBlockspecial} PlayerDanmakuBlockspecial instance
                         */
                        PlayerDanmakuBlockspecial.create = function create(properties) {
                            return new PlayerDanmakuBlockspecial(properties)
                        }

                        /**
                         * Encodes the specified PlayerDanmakuBlockspecial message. Does not implicitly {@link bilibili.community.service.dm.v1.PlayerDanmakuBlockspecial.verify|verify} messages.
                         * @function encode
                         * @memberof bilibili.community.service.dm.v1.PlayerDanmakuBlockspecial
                         * @static
                         * @param {bilibili.community.service.dm.v1.IPlayerDanmakuBlockspecial} message PlayerDanmakuBlockspecial message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        PlayerDanmakuBlockspecial.encode = function encode(message, writer) {
                            if (!writer) writer = $Writer.create()
                            if (
                                message.value != null &&
                                Object.hasOwnProperty.call(message, 'value')
                            )
                                writer.uint32(/* id 1, wireType 0 =*/ 8).bool(message.value)
                            return writer
                        }

                        /**
                         * Encodes the specified PlayerDanmakuBlockspecial message, length delimited. Does not implicitly {@link bilibili.community.service.dm.v1.PlayerDanmakuBlockspecial.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof bilibili.community.service.dm.v1.PlayerDanmakuBlockspecial
                         * @static
                         * @param {bilibili.community.service.dm.v1.IPlayerDanmakuBlockspecial} message PlayerDanmakuBlockspecial message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        PlayerDanmakuBlockspecial.encodeDelimited = function encodeDelimited(
                            message,
                            writer
                        ) {
                            return this.encode(message, writer).ldelim()
                        }

                        /**
                         * Decodes a PlayerDanmakuBlockspecial message from the specified reader or buffer.
                         * @function decode
                         * @memberof bilibili.community.service.dm.v1.PlayerDanmakuBlockspecial
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {bilibili.community.service.dm.v1.PlayerDanmakuBlockspecial} PlayerDanmakuBlockspecial
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        PlayerDanmakuBlockspecial.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader)) reader = $Reader.create(reader)
                            var end = length === undefined ? reader.len : reader.pos + length,
                                message = new $root.bilibili.community.service.dm.v1.PlayerDanmakuBlockspecial()
                            while (reader.pos < end) {
                                var tag = reader.uint32()
                                switch (tag >>> 3) {
                                    case 1:
                                        message.value = reader.bool()
                                        break
                                    default:
                                        reader.skipType(tag & 7)
                                        break
                                }
                            }
                            return message
                        }

                        /**
                         * Decodes a PlayerDanmakuBlockspecial message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof bilibili.community.service.dm.v1.PlayerDanmakuBlockspecial
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {bilibili.community.service.dm.v1.PlayerDanmakuBlockspecial} PlayerDanmakuBlockspecial
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        PlayerDanmakuBlockspecial.decodeDelimited = function decodeDelimited(
                            reader
                        ) {
                            if (!(reader instanceof $Reader)) reader = new $Reader(reader)
                            return this.decode(reader, reader.uint32())
                        }

                        /**
                         * Verifies a PlayerDanmakuBlockspecial message.
                         * @function verify
                         * @memberof bilibili.community.service.dm.v1.PlayerDanmakuBlockspecial
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        PlayerDanmakuBlockspecial.verify = function verify(message) {
                            if (typeof message !== 'object' || message === null)
                                return 'object expected'
                            if (message.value != null && message.hasOwnProperty('value'))
                                if (typeof message.value !== 'boolean')
                                    return 'value: boolean expected'
                            return null
                        }

                        /**
                         * Creates a PlayerDanmakuBlockspecial message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof bilibili.community.service.dm.v1.PlayerDanmakuBlockspecial
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {bilibili.community.service.dm.v1.PlayerDanmakuBlockspecial} PlayerDanmakuBlockspecial
                         */
                        PlayerDanmakuBlockspecial.fromObject = function fromObject(object) {
                            if (
                                object instanceof
                                $root.bilibili.community.service.dm.v1.PlayerDanmakuBlockspecial
                            )
                                return object
                            var message = new $root.bilibili.community.service.dm.v1.PlayerDanmakuBlockspecial()
                            if (object.value != null) message.value = Boolean(object.value)
                            return message
                        }

                        /**
                         * Creates a plain object from a PlayerDanmakuBlockspecial message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof bilibili.community.service.dm.v1.PlayerDanmakuBlockspecial
                         * @static
                         * @param {bilibili.community.service.dm.v1.PlayerDanmakuBlockspecial} message PlayerDanmakuBlockspecial
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        PlayerDanmakuBlockspecial.toObject = function toObject(message, options) {
                            if (!options) options = {}
                            var object = {}
                            if (options.defaults) object.value = false
                            if (message.value != null && message.hasOwnProperty('value'))
                                object.value = message.value
                            return object
                        }

                        /**
                         * Converts this PlayerDanmakuBlockspecial to JSON.
                         * @function toJSON
                         * @memberof bilibili.community.service.dm.v1.PlayerDanmakuBlockspecial
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        PlayerDanmakuBlockspecial.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
                        }

                        return PlayerDanmakuBlockspecial
                    })()

                    v1.PlayerDanmakuBlocktop = (function () {
                        /**
                         * Properties of a PlayerDanmakuBlocktop.
                         * @memberof bilibili.community.service.dm.v1
                         * @interface IPlayerDanmakuBlocktop
                         * @property {boolean|null} [value] PlayerDanmakuBlocktop value
                         */

                        /**
                         * Constructs a new PlayerDanmakuBlocktop.
                         * @memberof bilibili.community.service.dm.v1
                         * @classdesc Represents a PlayerDanmakuBlocktop.
                         * @implements IPlayerDanmakuBlocktop
                         * @constructor
                         * @param {bilibili.community.service.dm.v1.IPlayerDanmakuBlocktop=} [properties] Properties to set
                         */
                        function PlayerDanmakuBlocktop(properties) {
                            if (properties)
                                for (
                                    var keys = Object.keys(properties), i = 0;
                                    i < keys.length;
                                    ++i
                                )
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]]
                        }

                        /**
                         * PlayerDanmakuBlocktop value.
                         * @member {boolean} value
                         * @memberof bilibili.community.service.dm.v1.PlayerDanmakuBlocktop
                         * @instance
                         */
                        PlayerDanmakuBlocktop.prototype.value = false

                        /**
                         * Creates a new PlayerDanmakuBlocktop instance using the specified properties.
                         * @function create
                         * @memberof bilibili.community.service.dm.v1.PlayerDanmakuBlocktop
                         * @static
                         * @param {bilibili.community.service.dm.v1.IPlayerDanmakuBlocktop=} [properties] Properties to set
                         * @returns {bilibili.community.service.dm.v1.PlayerDanmakuBlocktop} PlayerDanmakuBlocktop instance
                         */
                        PlayerDanmakuBlocktop.create = function create(properties) {
                            return new PlayerDanmakuBlocktop(properties)
                        }

                        /**
                         * Encodes the specified PlayerDanmakuBlocktop message. Does not implicitly {@link bilibili.community.service.dm.v1.PlayerDanmakuBlocktop.verify|verify} messages.
                         * @function encode
                         * @memberof bilibili.community.service.dm.v1.PlayerDanmakuBlocktop
                         * @static
                         * @param {bilibili.community.service.dm.v1.IPlayerDanmakuBlocktop} message PlayerDanmakuBlocktop message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        PlayerDanmakuBlocktop.encode = function encode(message, writer) {
                            if (!writer) writer = $Writer.create()
                            if (
                                message.value != null &&
                                Object.hasOwnProperty.call(message, 'value')
                            )
                                writer.uint32(/* id 1, wireType 0 =*/ 8).bool(message.value)
                            return writer
                        }

                        /**
                         * Encodes the specified PlayerDanmakuBlocktop message, length delimited. Does not implicitly {@link bilibili.community.service.dm.v1.PlayerDanmakuBlocktop.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof bilibili.community.service.dm.v1.PlayerDanmakuBlocktop
                         * @static
                         * @param {bilibili.community.service.dm.v1.IPlayerDanmakuBlocktop} message PlayerDanmakuBlocktop message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        PlayerDanmakuBlocktop.encodeDelimited = function encodeDelimited(
                            message,
                            writer
                        ) {
                            return this.encode(message, writer).ldelim()
                        }

                        /**
                         * Decodes a PlayerDanmakuBlocktop message from the specified reader or buffer.
                         * @function decode
                         * @memberof bilibili.community.service.dm.v1.PlayerDanmakuBlocktop
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {bilibili.community.service.dm.v1.PlayerDanmakuBlocktop} PlayerDanmakuBlocktop
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        PlayerDanmakuBlocktop.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader)) reader = $Reader.create(reader)
                            var end = length === undefined ? reader.len : reader.pos + length,
                                message = new $root.bilibili.community.service.dm.v1.PlayerDanmakuBlocktop()
                            while (reader.pos < end) {
                                var tag = reader.uint32()
                                switch (tag >>> 3) {
                                    case 1:
                                        message.value = reader.bool()
                                        break
                                    default:
                                        reader.skipType(tag & 7)
                                        break
                                }
                            }
                            return message
                        }

                        /**
                         * Decodes a PlayerDanmakuBlocktop message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof bilibili.community.service.dm.v1.PlayerDanmakuBlocktop
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {bilibili.community.service.dm.v1.PlayerDanmakuBlocktop} PlayerDanmakuBlocktop
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        PlayerDanmakuBlocktop.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader)) reader = new $Reader(reader)
                            return this.decode(reader, reader.uint32())
                        }

                        /**
                         * Verifies a PlayerDanmakuBlocktop message.
                         * @function verify
                         * @memberof bilibili.community.service.dm.v1.PlayerDanmakuBlocktop
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        PlayerDanmakuBlocktop.verify = function verify(message) {
                            if (typeof message !== 'object' || message === null)
                                return 'object expected'
                            if (message.value != null && message.hasOwnProperty('value'))
                                if (typeof message.value !== 'boolean')
                                    return 'value: boolean expected'
                            return null
                        }

                        /**
                         * Creates a PlayerDanmakuBlocktop message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof bilibili.community.service.dm.v1.PlayerDanmakuBlocktop
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {bilibili.community.service.dm.v1.PlayerDanmakuBlocktop} PlayerDanmakuBlocktop
                         */
                        PlayerDanmakuBlocktop.fromObject = function fromObject(object) {
                            if (
                                object instanceof
                                $root.bilibili.community.service.dm.v1.PlayerDanmakuBlocktop
                            )
                                return object
                            var message = new $root.bilibili.community.service.dm.v1.PlayerDanmakuBlocktop()
                            if (object.value != null) message.value = Boolean(object.value)
                            return message
                        }

                        /**
                         * Creates a plain object from a PlayerDanmakuBlocktop message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof bilibili.community.service.dm.v1.PlayerDanmakuBlocktop
                         * @static
                         * @param {bilibili.community.service.dm.v1.PlayerDanmakuBlocktop} message PlayerDanmakuBlocktop
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        PlayerDanmakuBlocktop.toObject = function toObject(message, options) {
                            if (!options) options = {}
                            var object = {}
                            if (options.defaults) object.value = false
                            if (message.value != null && message.hasOwnProperty('value'))
                                object.value = message.value
                            return object
                        }

                        /**
                         * Converts this PlayerDanmakuBlocktop to JSON.
                         * @function toJSON
                         * @memberof bilibili.community.service.dm.v1.PlayerDanmakuBlocktop
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        PlayerDanmakuBlocktop.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
                        }

                        return PlayerDanmakuBlocktop
                    })()

                    v1.PlayerDanmakuDomain = (function () {
                        /**
                         * Properties of a PlayerDanmakuDomain.
                         * @memberof bilibili.community.service.dm.v1
                         * @interface IPlayerDanmakuDomain
                         * @property {number|null} [value] PlayerDanmakuDomain value
                         */

                        /**
                         * Constructs a new PlayerDanmakuDomain.
                         * @memberof bilibili.community.service.dm.v1
                         * @classdesc Represents a PlayerDanmakuDomain.
                         * @implements IPlayerDanmakuDomain
                         * @constructor
                         * @param {bilibili.community.service.dm.v1.IPlayerDanmakuDomain=} [properties] Properties to set
                         */
                        function PlayerDanmakuDomain(properties) {
                            if (properties)
                                for (
                                    var keys = Object.keys(properties), i = 0;
                                    i < keys.length;
                                    ++i
                                )
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]]
                        }

                        /**
                         * PlayerDanmakuDomain value.
                         * @member {number} value
                         * @memberof bilibili.community.service.dm.v1.PlayerDanmakuDomain
                         * @instance
                         */
                        PlayerDanmakuDomain.prototype.value = 0

                        /**
                         * Creates a new PlayerDanmakuDomain instance using the specified properties.
                         * @function create
                         * @memberof bilibili.community.service.dm.v1.PlayerDanmakuDomain
                         * @static
                         * @param {bilibili.community.service.dm.v1.IPlayerDanmakuDomain=} [properties] Properties to set
                         * @returns {bilibili.community.service.dm.v1.PlayerDanmakuDomain} PlayerDanmakuDomain instance
                         */
                        PlayerDanmakuDomain.create = function create(properties) {
                            return new PlayerDanmakuDomain(properties)
                        }

                        /**
                         * Encodes the specified PlayerDanmakuDomain message. Does not implicitly {@link bilibili.community.service.dm.v1.PlayerDanmakuDomain.verify|verify} messages.
                         * @function encode
                         * @memberof bilibili.community.service.dm.v1.PlayerDanmakuDomain
                         * @static
                         * @param {bilibili.community.service.dm.v1.IPlayerDanmakuDomain} message PlayerDanmakuDomain message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        PlayerDanmakuDomain.encode = function encode(message, writer) {
                            if (!writer) writer = $Writer.create()
                            if (
                                message.value != null &&
                                Object.hasOwnProperty.call(message, 'value')
                            )
                                writer.uint32(/* id 1, wireType 5 =*/ 13).float(message.value)
                            return writer
                        }

                        /**
                         * Encodes the specified PlayerDanmakuDomain message, length delimited. Does not implicitly {@link bilibili.community.service.dm.v1.PlayerDanmakuDomain.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof bilibili.community.service.dm.v1.PlayerDanmakuDomain
                         * @static
                         * @param {bilibili.community.service.dm.v1.IPlayerDanmakuDomain} message PlayerDanmakuDomain message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        PlayerDanmakuDomain.encodeDelimited = function encodeDelimited(
                            message,
                            writer
                        ) {
                            return this.encode(message, writer).ldelim()
                        }

                        /**
                         * Decodes a PlayerDanmakuDomain message from the specified reader or buffer.
                         * @function decode
                         * @memberof bilibili.community.service.dm.v1.PlayerDanmakuDomain
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {bilibili.community.service.dm.v1.PlayerDanmakuDomain} PlayerDanmakuDomain
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        PlayerDanmakuDomain.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader)) reader = $Reader.create(reader)
                            var end = length === undefined ? reader.len : reader.pos + length,
                                message = new $root.bilibili.community.service.dm.v1.PlayerDanmakuDomain()
                            while (reader.pos < end) {
                                var tag = reader.uint32()
                                switch (tag >>> 3) {
                                    case 1:
                                        message.value = reader.float()
                                        break
                                    default:
                                        reader.skipType(tag & 7)
                                        break
                                }
                            }
                            return message
                        }

                        /**
                         * Decodes a PlayerDanmakuDomain message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof bilibili.community.service.dm.v1.PlayerDanmakuDomain
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {bilibili.community.service.dm.v1.PlayerDanmakuDomain} PlayerDanmakuDomain
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        PlayerDanmakuDomain.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader)) reader = new $Reader(reader)
                            return this.decode(reader, reader.uint32())
                        }

                        /**
                         * Verifies a PlayerDanmakuDomain message.
                         * @function verify
                         * @memberof bilibili.community.service.dm.v1.PlayerDanmakuDomain
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        PlayerDanmakuDomain.verify = function verify(message) {
                            if (typeof message !== 'object' || message === null)
                                return 'object expected'
                            if (message.value != null && message.hasOwnProperty('value'))
                                if (typeof message.value !== 'number')
                                    return 'value: number expected'
                            return null
                        }

                        /**
                         * Creates a PlayerDanmakuDomain message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof bilibili.community.service.dm.v1.PlayerDanmakuDomain
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {bilibili.community.service.dm.v1.PlayerDanmakuDomain} PlayerDanmakuDomain
                         */
                        PlayerDanmakuDomain.fromObject = function fromObject(object) {
                            if (
                                object instanceof
                                $root.bilibili.community.service.dm.v1.PlayerDanmakuDomain
                            )
                                return object
                            var message = new $root.bilibili.community.service.dm.v1.PlayerDanmakuDomain()
                            if (object.value != null) message.value = Number(object.value)
                            return message
                        }

                        /**
                         * Creates a plain object from a PlayerDanmakuDomain message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof bilibili.community.service.dm.v1.PlayerDanmakuDomain
                         * @static
                         * @param {bilibili.community.service.dm.v1.PlayerDanmakuDomain} message PlayerDanmakuDomain
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        PlayerDanmakuDomain.toObject = function toObject(message, options) {
                            if (!options) options = {}
                            var object = {}
                            if (options.defaults) object.value = 0
                            if (message.value != null && message.hasOwnProperty('value'))
                                object.value =
                                    options.json && !isFinite(message.value)
                                        ? String(message.value)
                                        : message.value
                            return object
                        }

                        /**
                         * Converts this PlayerDanmakuDomain to JSON.
                         * @function toJSON
                         * @memberof bilibili.community.service.dm.v1.PlayerDanmakuDomain
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        PlayerDanmakuDomain.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
                        }

                        return PlayerDanmakuDomain
                    })()

                    v1.PlayerDanmakuEnableblocklist = (function () {
                        /**
                         * Properties of a PlayerDanmakuEnableblocklist.
                         * @memberof bilibili.community.service.dm.v1
                         * @interface IPlayerDanmakuEnableblocklist
                         * @property {boolean|null} [value] PlayerDanmakuEnableblocklist value
                         */

                        /**
                         * Constructs a new PlayerDanmakuEnableblocklist.
                         * @memberof bilibili.community.service.dm.v1
                         * @classdesc Represents a PlayerDanmakuEnableblocklist.
                         * @implements IPlayerDanmakuEnableblocklist
                         * @constructor
                         * @param {bilibili.community.service.dm.v1.IPlayerDanmakuEnableblocklist=} [properties] Properties to set
                         */
                        function PlayerDanmakuEnableblocklist(properties) {
                            if (properties)
                                for (
                                    var keys = Object.keys(properties), i = 0;
                                    i < keys.length;
                                    ++i
                                )
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]]
                        }

                        /**
                         * PlayerDanmakuEnableblocklist value.
                         * @member {boolean} value
                         * @memberof bilibili.community.service.dm.v1.PlayerDanmakuEnableblocklist
                         * @instance
                         */
                        PlayerDanmakuEnableblocklist.prototype.value = false

                        /**
                         * Creates a new PlayerDanmakuEnableblocklist instance using the specified properties.
                         * @function create
                         * @memberof bilibili.community.service.dm.v1.PlayerDanmakuEnableblocklist
                         * @static
                         * @param {bilibili.community.service.dm.v1.IPlayerDanmakuEnableblocklist=} [properties] Properties to set
                         * @returns {bilibili.community.service.dm.v1.PlayerDanmakuEnableblocklist} PlayerDanmakuEnableblocklist instance
                         */
                        PlayerDanmakuEnableblocklist.create = function create(properties) {
                            return new PlayerDanmakuEnableblocklist(properties)
                        }

                        /**
                         * Encodes the specified PlayerDanmakuEnableblocklist message. Does not implicitly {@link bilibili.community.service.dm.v1.PlayerDanmakuEnableblocklist.verify|verify} messages.
                         * @function encode
                         * @memberof bilibili.community.service.dm.v1.PlayerDanmakuEnableblocklist
                         * @static
                         * @param {bilibili.community.service.dm.v1.IPlayerDanmakuEnableblocklist} message PlayerDanmakuEnableblocklist message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        PlayerDanmakuEnableblocklist.encode = function encode(message, writer) {
                            if (!writer) writer = $Writer.create()
                            if (
                                message.value != null &&
                                Object.hasOwnProperty.call(message, 'value')
                            )
                                writer.uint32(/* id 1, wireType 0 =*/ 8).bool(message.value)
                            return writer
                        }

                        /**
                         * Encodes the specified PlayerDanmakuEnableblocklist message, length delimited. Does not implicitly {@link bilibili.community.service.dm.v1.PlayerDanmakuEnableblocklist.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof bilibili.community.service.dm.v1.PlayerDanmakuEnableblocklist
                         * @static
                         * @param {bilibili.community.service.dm.v1.IPlayerDanmakuEnableblocklist} message PlayerDanmakuEnableblocklist message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        PlayerDanmakuEnableblocklist.encodeDelimited = function encodeDelimited(
                            message,
                            writer
                        ) {
                            return this.encode(message, writer).ldelim()
                        }

                        /**
                         * Decodes a PlayerDanmakuEnableblocklist message from the specified reader or buffer.
                         * @function decode
                         * @memberof bilibili.community.service.dm.v1.PlayerDanmakuEnableblocklist
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {bilibili.community.service.dm.v1.PlayerDanmakuEnableblocklist} PlayerDanmakuEnableblocklist
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        PlayerDanmakuEnableblocklist.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader)) reader = $Reader.create(reader)
                            var end = length === undefined ? reader.len : reader.pos + length,
                                message = new $root.bilibili.community.service.dm.v1.PlayerDanmakuEnableblocklist()
                            while (reader.pos < end) {
                                var tag = reader.uint32()
                                switch (tag >>> 3) {
                                    case 1:
                                        message.value = reader.bool()
                                        break
                                    default:
                                        reader.skipType(tag & 7)
                                        break
                                }
                            }
                            return message
                        }

                        /**
                         * Decodes a PlayerDanmakuEnableblocklist message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof bilibili.community.service.dm.v1.PlayerDanmakuEnableblocklist
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {bilibili.community.service.dm.v1.PlayerDanmakuEnableblocklist} PlayerDanmakuEnableblocklist
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        PlayerDanmakuEnableblocklist.decodeDelimited = function decodeDelimited(
                            reader
                        ) {
                            if (!(reader instanceof $Reader)) reader = new $Reader(reader)
                            return this.decode(reader, reader.uint32())
                        }

                        /**
                         * Verifies a PlayerDanmakuEnableblocklist message.
                         * @function verify
                         * @memberof bilibili.community.service.dm.v1.PlayerDanmakuEnableblocklist
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        PlayerDanmakuEnableblocklist.verify = function verify(message) {
                            if (typeof message !== 'object' || message === null)
                                return 'object expected'
                            if (message.value != null && message.hasOwnProperty('value'))
                                if (typeof message.value !== 'boolean')
                                    return 'value: boolean expected'
                            return null
                        }

                        /**
                         * Creates a PlayerDanmakuEnableblocklist message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof bilibili.community.service.dm.v1.PlayerDanmakuEnableblocklist
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {bilibili.community.service.dm.v1.PlayerDanmakuEnableblocklist} PlayerDanmakuEnableblocklist
                         */
                        PlayerDanmakuEnableblocklist.fromObject = function fromObject(object) {
                            if (
                                object instanceof
                                $root.bilibili.community.service.dm.v1.PlayerDanmakuEnableblocklist
                            )
                                return object
                            var message = new $root.bilibili.community.service.dm.v1.PlayerDanmakuEnableblocklist()
                            if (object.value != null) message.value = Boolean(object.value)
                            return message
                        }

                        /**
                         * Creates a plain object from a PlayerDanmakuEnableblocklist message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof bilibili.community.service.dm.v1.PlayerDanmakuEnableblocklist
                         * @static
                         * @param {bilibili.community.service.dm.v1.PlayerDanmakuEnableblocklist} message PlayerDanmakuEnableblocklist
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        PlayerDanmakuEnableblocklist.toObject = function toObject(
                            message,
                            options
                        ) {
                            if (!options) options = {}
                            var object = {}
                            if (options.defaults) object.value = false
                            if (message.value != null && message.hasOwnProperty('value'))
                                object.value = message.value
                            return object
                        }

                        /**
                         * Converts this PlayerDanmakuEnableblocklist to JSON.
                         * @function toJSON
                         * @memberof bilibili.community.service.dm.v1.PlayerDanmakuEnableblocklist
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        PlayerDanmakuEnableblocklist.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
                        }

                        return PlayerDanmakuEnableblocklist
                    })()

                    v1.PlayerDanmakuOpacity = (function () {
                        /**
                         * Properties of a PlayerDanmakuOpacity.
                         * @memberof bilibili.community.service.dm.v1
                         * @interface IPlayerDanmakuOpacity
                         * @property {number|null} [value] PlayerDanmakuOpacity value
                         */

                        /**
                         * Constructs a new PlayerDanmakuOpacity.
                         * @memberof bilibili.community.service.dm.v1
                         * @classdesc Represents a PlayerDanmakuOpacity.
                         * @implements IPlayerDanmakuOpacity
                         * @constructor
                         * @param {bilibili.community.service.dm.v1.IPlayerDanmakuOpacity=} [properties] Properties to set
                         */
                        function PlayerDanmakuOpacity(properties) {
                            if (properties)
                                for (
                                    var keys = Object.keys(properties), i = 0;
                                    i < keys.length;
                                    ++i
                                )
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]]
                        }

                        /**
                         * PlayerDanmakuOpacity value.
                         * @member {number} value
                         * @memberof bilibili.community.service.dm.v1.PlayerDanmakuOpacity
                         * @instance
                         */
                        PlayerDanmakuOpacity.prototype.value = 0

                        /**
                         * Creates a new PlayerDanmakuOpacity instance using the specified properties.
                         * @function create
                         * @memberof bilibili.community.service.dm.v1.PlayerDanmakuOpacity
                         * @static
                         * @param {bilibili.community.service.dm.v1.IPlayerDanmakuOpacity=} [properties] Properties to set
                         * @returns {bilibili.community.service.dm.v1.PlayerDanmakuOpacity} PlayerDanmakuOpacity instance
                         */
                        PlayerDanmakuOpacity.create = function create(properties) {
                            return new PlayerDanmakuOpacity(properties)
                        }

                        /**
                         * Encodes the specified PlayerDanmakuOpacity message. Does not implicitly {@link bilibili.community.service.dm.v1.PlayerDanmakuOpacity.verify|verify} messages.
                         * @function encode
                         * @memberof bilibili.community.service.dm.v1.PlayerDanmakuOpacity
                         * @static
                         * @param {bilibili.community.service.dm.v1.IPlayerDanmakuOpacity} message PlayerDanmakuOpacity message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        PlayerDanmakuOpacity.encode = function encode(message, writer) {
                            if (!writer) writer = $Writer.create()
                            if (
                                message.value != null &&
                                Object.hasOwnProperty.call(message, 'value')
                            )
                                writer.uint32(/* id 1, wireType 5 =*/ 13).float(message.value)
                            return writer
                        }

                        /**
                         * Encodes the specified PlayerDanmakuOpacity message, length delimited. Does not implicitly {@link bilibili.community.service.dm.v1.PlayerDanmakuOpacity.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof bilibili.community.service.dm.v1.PlayerDanmakuOpacity
                         * @static
                         * @param {bilibili.community.service.dm.v1.IPlayerDanmakuOpacity} message PlayerDanmakuOpacity message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        PlayerDanmakuOpacity.encodeDelimited = function encodeDelimited(
                            message,
                            writer
                        ) {
                            return this.encode(message, writer).ldelim()
                        }

                        /**
                         * Decodes a PlayerDanmakuOpacity message from the specified reader or buffer.
                         * @function decode
                         * @memberof bilibili.community.service.dm.v1.PlayerDanmakuOpacity
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {bilibili.community.service.dm.v1.PlayerDanmakuOpacity} PlayerDanmakuOpacity
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        PlayerDanmakuOpacity.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader)) reader = $Reader.create(reader)
                            var end = length === undefined ? reader.len : reader.pos + length,
                                message = new $root.bilibili.community.service.dm.v1.PlayerDanmakuOpacity()
                            while (reader.pos < end) {
                                var tag = reader.uint32()
                                switch (tag >>> 3) {
                                    case 1:
                                        message.value = reader.float()
                                        break
                                    default:
                                        reader.skipType(tag & 7)
                                        break
                                }
                            }
                            return message
                        }

                        /**
                         * Decodes a PlayerDanmakuOpacity message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof bilibili.community.service.dm.v1.PlayerDanmakuOpacity
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {bilibili.community.service.dm.v1.PlayerDanmakuOpacity} PlayerDanmakuOpacity
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        PlayerDanmakuOpacity.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader)) reader = new $Reader(reader)
                            return this.decode(reader, reader.uint32())
                        }

                        /**
                         * Verifies a PlayerDanmakuOpacity message.
                         * @function verify
                         * @memberof bilibili.community.service.dm.v1.PlayerDanmakuOpacity
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        PlayerDanmakuOpacity.verify = function verify(message) {
                            if (typeof message !== 'object' || message === null)
                                return 'object expected'
                            if (message.value != null && message.hasOwnProperty('value'))
                                if (typeof message.value !== 'number')
                                    return 'value: number expected'
                            return null
                        }

                        /**
                         * Creates a PlayerDanmakuOpacity message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof bilibili.community.service.dm.v1.PlayerDanmakuOpacity
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {bilibili.community.service.dm.v1.PlayerDanmakuOpacity} PlayerDanmakuOpacity
                         */
                        PlayerDanmakuOpacity.fromObject = function fromObject(object) {
                            if (
                                object instanceof
                                $root.bilibili.community.service.dm.v1.PlayerDanmakuOpacity
                            )
                                return object
                            var message = new $root.bilibili.community.service.dm.v1.PlayerDanmakuOpacity()
                            if (object.value != null) message.value = Number(object.value)
                            return message
                        }

                        /**
                         * Creates a plain object from a PlayerDanmakuOpacity message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof bilibili.community.service.dm.v1.PlayerDanmakuOpacity
                         * @static
                         * @param {bilibili.community.service.dm.v1.PlayerDanmakuOpacity} message PlayerDanmakuOpacity
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        PlayerDanmakuOpacity.toObject = function toObject(message, options) {
                            if (!options) options = {}
                            var object = {}
                            if (options.defaults) object.value = 0
                            if (message.value != null && message.hasOwnProperty('value'))
                                object.value =
                                    options.json && !isFinite(message.value)
                                        ? String(message.value)
                                        : message.value
                            return object
                        }

                        /**
                         * Converts this PlayerDanmakuOpacity to JSON.
                         * @function toJSON
                         * @memberof bilibili.community.service.dm.v1.PlayerDanmakuOpacity
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        PlayerDanmakuOpacity.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
                        }

                        return PlayerDanmakuOpacity
                    })()

                    v1.PlayerDanmakuScalingfactor = (function () {
                        /**
                         * Properties of a PlayerDanmakuScalingfactor.
                         * @memberof bilibili.community.service.dm.v1
                         * @interface IPlayerDanmakuScalingfactor
                         * @property {number|null} [value] PlayerDanmakuScalingfactor value
                         */

                        /**
                         * Constructs a new PlayerDanmakuScalingfactor.
                         * @memberof bilibili.community.service.dm.v1
                         * @classdesc Represents a PlayerDanmakuScalingfactor.
                         * @implements IPlayerDanmakuScalingfactor
                         * @constructor
                         * @param {bilibili.community.service.dm.v1.IPlayerDanmakuScalingfactor=} [properties] Properties to set
                         */
                        function PlayerDanmakuScalingfactor(properties) {
                            if (properties)
                                for (
                                    var keys = Object.keys(properties), i = 0;
                                    i < keys.length;
                                    ++i
                                )
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]]
                        }

                        /**
                         * PlayerDanmakuScalingfactor value.
                         * @member {number} value
                         * @memberof bilibili.community.service.dm.v1.PlayerDanmakuScalingfactor
                         * @instance
                         */
                        PlayerDanmakuScalingfactor.prototype.value = 0

                        /**
                         * Creates a new PlayerDanmakuScalingfactor instance using the specified properties.
                         * @function create
                         * @memberof bilibili.community.service.dm.v1.PlayerDanmakuScalingfactor
                         * @static
                         * @param {bilibili.community.service.dm.v1.IPlayerDanmakuScalingfactor=} [properties] Properties to set
                         * @returns {bilibili.community.service.dm.v1.PlayerDanmakuScalingfactor} PlayerDanmakuScalingfactor instance
                         */
                        PlayerDanmakuScalingfactor.create = function create(properties) {
                            return new PlayerDanmakuScalingfactor(properties)
                        }

                        /**
                         * Encodes the specified PlayerDanmakuScalingfactor message. Does not implicitly {@link bilibili.community.service.dm.v1.PlayerDanmakuScalingfactor.verify|verify} messages.
                         * @function encode
                         * @memberof bilibili.community.service.dm.v1.PlayerDanmakuScalingfactor
                         * @static
                         * @param {bilibili.community.service.dm.v1.IPlayerDanmakuScalingfactor} message PlayerDanmakuScalingfactor message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        PlayerDanmakuScalingfactor.encode = function encode(message, writer) {
                            if (!writer) writer = $Writer.create()
                            if (
                                message.value != null &&
                                Object.hasOwnProperty.call(message, 'value')
                            )
                                writer.uint32(/* id 1, wireType 5 =*/ 13).float(message.value)
                            return writer
                        }

                        /**
                         * Encodes the specified PlayerDanmakuScalingfactor message, length delimited. Does not implicitly {@link bilibili.community.service.dm.v1.PlayerDanmakuScalingfactor.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof bilibili.community.service.dm.v1.PlayerDanmakuScalingfactor
                         * @static
                         * @param {bilibili.community.service.dm.v1.IPlayerDanmakuScalingfactor} message PlayerDanmakuScalingfactor message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        PlayerDanmakuScalingfactor.encodeDelimited = function encodeDelimited(
                            message,
                            writer
                        ) {
                            return this.encode(message, writer).ldelim()
                        }

                        /**
                         * Decodes a PlayerDanmakuScalingfactor message from the specified reader or buffer.
                         * @function decode
                         * @memberof bilibili.community.service.dm.v1.PlayerDanmakuScalingfactor
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {bilibili.community.service.dm.v1.PlayerDanmakuScalingfactor} PlayerDanmakuScalingfactor
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        PlayerDanmakuScalingfactor.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader)) reader = $Reader.create(reader)
                            var end = length === undefined ? reader.len : reader.pos + length,
                                message = new $root.bilibili.community.service.dm.v1.PlayerDanmakuScalingfactor()
                            while (reader.pos < end) {
                                var tag = reader.uint32()
                                switch (tag >>> 3) {
                                    case 1:
                                        message.value = reader.float()
                                        break
                                    default:
                                        reader.skipType(tag & 7)
                                        break
                                }
                            }
                            return message
                        }

                        /**
                         * Decodes a PlayerDanmakuScalingfactor message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof bilibili.community.service.dm.v1.PlayerDanmakuScalingfactor
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {bilibili.community.service.dm.v1.PlayerDanmakuScalingfactor} PlayerDanmakuScalingfactor
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        PlayerDanmakuScalingfactor.decodeDelimited = function decodeDelimited(
                            reader
                        ) {
                            if (!(reader instanceof $Reader)) reader = new $Reader(reader)
                            return this.decode(reader, reader.uint32())
                        }

                        /**
                         * Verifies a PlayerDanmakuScalingfactor message.
                         * @function verify
                         * @memberof bilibili.community.service.dm.v1.PlayerDanmakuScalingfactor
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        PlayerDanmakuScalingfactor.verify = function verify(message) {
                            if (typeof message !== 'object' || message === null)
                                return 'object expected'
                            if (message.value != null && message.hasOwnProperty('value'))
                                if (typeof message.value !== 'number')
                                    return 'value: number expected'
                            return null
                        }

                        /**
                         * Creates a PlayerDanmakuScalingfactor message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof bilibili.community.service.dm.v1.PlayerDanmakuScalingfactor
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {bilibili.community.service.dm.v1.PlayerDanmakuScalingfactor} PlayerDanmakuScalingfactor
                         */
                        PlayerDanmakuScalingfactor.fromObject = function fromObject(object) {
                            if (
                                object instanceof
                                $root.bilibili.community.service.dm.v1.PlayerDanmakuScalingfactor
                            )
                                return object
                            var message = new $root.bilibili.community.service.dm.v1.PlayerDanmakuScalingfactor()
                            if (object.value != null) message.value = Number(object.value)
                            return message
                        }

                        /**
                         * Creates a plain object from a PlayerDanmakuScalingfactor message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof bilibili.community.service.dm.v1.PlayerDanmakuScalingfactor
                         * @static
                         * @param {bilibili.community.service.dm.v1.PlayerDanmakuScalingfactor} message PlayerDanmakuScalingfactor
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        PlayerDanmakuScalingfactor.toObject = function toObject(message, options) {
                            if (!options) options = {}
                            var object = {}
                            if (options.defaults) object.value = 0
                            if (message.value != null && message.hasOwnProperty('value'))
                                object.value =
                                    options.json && !isFinite(message.value)
                                        ? String(message.value)
                                        : message.value
                            return object
                        }

                        /**
                         * Converts this PlayerDanmakuScalingfactor to JSON.
                         * @function toJSON
                         * @memberof bilibili.community.service.dm.v1.PlayerDanmakuScalingfactor
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        PlayerDanmakuScalingfactor.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
                        }

                        return PlayerDanmakuScalingfactor
                    })()

                    v1.PlayerDanmakuSpeed = (function () {
                        /**
                         * Properties of a PlayerDanmakuSpeed.
                         * @memberof bilibili.community.service.dm.v1
                         * @interface IPlayerDanmakuSpeed
                         * @property {number|null} [value] PlayerDanmakuSpeed value
                         */

                        /**
                         * Constructs a new PlayerDanmakuSpeed.
                         * @memberof bilibili.community.service.dm.v1
                         * @classdesc Represents a PlayerDanmakuSpeed.
                         * @implements IPlayerDanmakuSpeed
                         * @constructor
                         * @param {bilibili.community.service.dm.v1.IPlayerDanmakuSpeed=} [properties] Properties to set
                         */
                        function PlayerDanmakuSpeed(properties) {
                            if (properties)
                                for (
                                    var keys = Object.keys(properties), i = 0;
                                    i < keys.length;
                                    ++i
                                )
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]]
                        }

                        /**
                         * PlayerDanmakuSpeed value.
                         * @member {number} value
                         * @memberof bilibili.community.service.dm.v1.PlayerDanmakuSpeed
                         * @instance
                         */
                        PlayerDanmakuSpeed.prototype.value = 0

                        /**
                         * Creates a new PlayerDanmakuSpeed instance using the specified properties.
                         * @function create
                         * @memberof bilibili.community.service.dm.v1.PlayerDanmakuSpeed
                         * @static
                         * @param {bilibili.community.service.dm.v1.IPlayerDanmakuSpeed=} [properties] Properties to set
                         * @returns {bilibili.community.service.dm.v1.PlayerDanmakuSpeed} PlayerDanmakuSpeed instance
                         */
                        PlayerDanmakuSpeed.create = function create(properties) {
                            return new PlayerDanmakuSpeed(properties)
                        }

                        /**
                         * Encodes the specified PlayerDanmakuSpeed message. Does not implicitly {@link bilibili.community.service.dm.v1.PlayerDanmakuSpeed.verify|verify} messages.
                         * @function encode
                         * @memberof bilibili.community.service.dm.v1.PlayerDanmakuSpeed
                         * @static
                         * @param {bilibili.community.service.dm.v1.IPlayerDanmakuSpeed} message PlayerDanmakuSpeed message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        PlayerDanmakuSpeed.encode = function encode(message, writer) {
                            if (!writer) writer = $Writer.create()
                            if (
                                message.value != null &&
                                Object.hasOwnProperty.call(message, 'value')
                            )
                                writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.value)
                            return writer
                        }

                        /**
                         * Encodes the specified PlayerDanmakuSpeed message, length delimited. Does not implicitly {@link bilibili.community.service.dm.v1.PlayerDanmakuSpeed.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof bilibili.community.service.dm.v1.PlayerDanmakuSpeed
                         * @static
                         * @param {bilibili.community.service.dm.v1.IPlayerDanmakuSpeed} message PlayerDanmakuSpeed message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        PlayerDanmakuSpeed.encodeDelimited = function encodeDelimited(
                            message,
                            writer
                        ) {
                            return this.encode(message, writer).ldelim()
                        }

                        /**
                         * Decodes a PlayerDanmakuSpeed message from the specified reader or buffer.
                         * @function decode
                         * @memberof bilibili.community.service.dm.v1.PlayerDanmakuSpeed
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {bilibili.community.service.dm.v1.PlayerDanmakuSpeed} PlayerDanmakuSpeed
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        PlayerDanmakuSpeed.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader)) reader = $Reader.create(reader)
                            var end = length === undefined ? reader.len : reader.pos + length,
                                message = new $root.bilibili.community.service.dm.v1.PlayerDanmakuSpeed()
                            while (reader.pos < end) {
                                var tag = reader.uint32()
                                switch (tag >>> 3) {
                                    case 1:
                                        message.value = reader.int32()
                                        break
                                    default:
                                        reader.skipType(tag & 7)
                                        break
                                }
                            }
                            return message
                        }

                        /**
                         * Decodes a PlayerDanmakuSpeed message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof bilibili.community.service.dm.v1.PlayerDanmakuSpeed
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {bilibili.community.service.dm.v1.PlayerDanmakuSpeed} PlayerDanmakuSpeed
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        PlayerDanmakuSpeed.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader)) reader = new $Reader(reader)
                            return this.decode(reader, reader.uint32())
                        }

                        /**
                         * Verifies a PlayerDanmakuSpeed message.
                         * @function verify
                         * @memberof bilibili.community.service.dm.v1.PlayerDanmakuSpeed
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        PlayerDanmakuSpeed.verify = function verify(message) {
                            if (typeof message !== 'object' || message === null)
                                return 'object expected'
                            if (message.value != null && message.hasOwnProperty('value'))
                                if (!$util.isInteger(message.value))
                                    return 'value: integer expected'
                            return null
                        }

                        /**
                         * Creates a PlayerDanmakuSpeed message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof bilibili.community.service.dm.v1.PlayerDanmakuSpeed
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {bilibili.community.service.dm.v1.PlayerDanmakuSpeed} PlayerDanmakuSpeed
                         */
                        PlayerDanmakuSpeed.fromObject = function fromObject(object) {
                            if (
                                object instanceof
                                $root.bilibili.community.service.dm.v1.PlayerDanmakuSpeed
                            )
                                return object
                            var message = new $root.bilibili.community.service.dm.v1.PlayerDanmakuSpeed()
                            if (object.value != null) message.value = object.value | 0
                            return message
                        }

                        /**
                         * Creates a plain object from a PlayerDanmakuSpeed message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof bilibili.community.service.dm.v1.PlayerDanmakuSpeed
                         * @static
                         * @param {bilibili.community.service.dm.v1.PlayerDanmakuSpeed} message PlayerDanmakuSpeed
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        PlayerDanmakuSpeed.toObject = function toObject(message, options) {
                            if (!options) options = {}
                            var object = {}
                            if (options.defaults) object.value = 0
                            if (message.value != null && message.hasOwnProperty('value'))
                                object.value = message.value
                            return object
                        }

                        /**
                         * Converts this PlayerDanmakuSpeed to JSON.
                         * @function toJSON
                         * @memberof bilibili.community.service.dm.v1.PlayerDanmakuSpeed
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        PlayerDanmakuSpeed.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
                        }

                        return PlayerDanmakuSpeed
                    })()

                    v1.PlayerDanmakuSwitch = (function () {
                        /**
                         * Properties of a PlayerDanmakuSwitch.
                         * @memberof bilibili.community.service.dm.v1
                         * @interface IPlayerDanmakuSwitch
                         * @property {boolean|null} [value] PlayerDanmakuSwitch value
                         */

                        /**
                         * Constructs a new PlayerDanmakuSwitch.
                         * @memberof bilibili.community.service.dm.v1
                         * @classdesc Represents a PlayerDanmakuSwitch.
                         * @implements IPlayerDanmakuSwitch
                         * @constructor
                         * @param {bilibili.community.service.dm.v1.IPlayerDanmakuSwitch=} [properties] Properties to set
                         */
                        function PlayerDanmakuSwitch(properties) {
                            if (properties)
                                for (
                                    var keys = Object.keys(properties), i = 0;
                                    i < keys.length;
                                    ++i
                                )
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]]
                        }

                        /**
                         * PlayerDanmakuSwitch value.
                         * @member {boolean} value
                         * @memberof bilibili.community.service.dm.v1.PlayerDanmakuSwitch
                         * @instance
                         */
                        PlayerDanmakuSwitch.prototype.value = false

                        /**
                         * Creates a new PlayerDanmakuSwitch instance using the specified properties.
                         * @function create
                         * @memberof bilibili.community.service.dm.v1.PlayerDanmakuSwitch
                         * @static
                         * @param {bilibili.community.service.dm.v1.IPlayerDanmakuSwitch=} [properties] Properties to set
                         * @returns {bilibili.community.service.dm.v1.PlayerDanmakuSwitch} PlayerDanmakuSwitch instance
                         */
                        PlayerDanmakuSwitch.create = function create(properties) {
                            return new PlayerDanmakuSwitch(properties)
                        }

                        /**
                         * Encodes the specified PlayerDanmakuSwitch message. Does not implicitly {@link bilibili.community.service.dm.v1.PlayerDanmakuSwitch.verify|verify} messages.
                         * @function encode
                         * @memberof bilibili.community.service.dm.v1.PlayerDanmakuSwitch
                         * @static
                         * @param {bilibili.community.service.dm.v1.IPlayerDanmakuSwitch} message PlayerDanmakuSwitch message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        PlayerDanmakuSwitch.encode = function encode(message, writer) {
                            if (!writer) writer = $Writer.create()
                            if (
                                message.value != null &&
                                Object.hasOwnProperty.call(message, 'value')
                            )
                                writer.uint32(/* id 1, wireType 0 =*/ 8).bool(message.value)
                            return writer
                        }

                        /**
                         * Encodes the specified PlayerDanmakuSwitch message, length delimited. Does not implicitly {@link bilibili.community.service.dm.v1.PlayerDanmakuSwitch.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof bilibili.community.service.dm.v1.PlayerDanmakuSwitch
                         * @static
                         * @param {bilibili.community.service.dm.v1.IPlayerDanmakuSwitch} message PlayerDanmakuSwitch message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        PlayerDanmakuSwitch.encodeDelimited = function encodeDelimited(
                            message,
                            writer
                        ) {
                            return this.encode(message, writer).ldelim()
                        }

                        /**
                         * Decodes a PlayerDanmakuSwitch message from the specified reader or buffer.
                         * @function decode
                         * @memberof bilibili.community.service.dm.v1.PlayerDanmakuSwitch
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {bilibili.community.service.dm.v1.PlayerDanmakuSwitch} PlayerDanmakuSwitch
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        PlayerDanmakuSwitch.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader)) reader = $Reader.create(reader)
                            var end = length === undefined ? reader.len : reader.pos + length,
                                message = new $root.bilibili.community.service.dm.v1.PlayerDanmakuSwitch()
                            while (reader.pos < end) {
                                var tag = reader.uint32()
                                switch (tag >>> 3) {
                                    case 1:
                                        message.value = reader.bool()
                                        break
                                    default:
                                        reader.skipType(tag & 7)
                                        break
                                }
                            }
                            return message
                        }

                        /**
                         * Decodes a PlayerDanmakuSwitch message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof bilibili.community.service.dm.v1.PlayerDanmakuSwitch
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {bilibili.community.service.dm.v1.PlayerDanmakuSwitch} PlayerDanmakuSwitch
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        PlayerDanmakuSwitch.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader)) reader = new $Reader(reader)
                            return this.decode(reader, reader.uint32())
                        }

                        /**
                         * Verifies a PlayerDanmakuSwitch message.
                         * @function verify
                         * @memberof bilibili.community.service.dm.v1.PlayerDanmakuSwitch
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        PlayerDanmakuSwitch.verify = function verify(message) {
                            if (typeof message !== 'object' || message === null)
                                return 'object expected'
                            if (message.value != null && message.hasOwnProperty('value'))
                                if (typeof message.value !== 'boolean')
                                    return 'value: boolean expected'
                            return null
                        }

                        /**
                         * Creates a PlayerDanmakuSwitch message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof bilibili.community.service.dm.v1.PlayerDanmakuSwitch
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {bilibili.community.service.dm.v1.PlayerDanmakuSwitch} PlayerDanmakuSwitch
                         */
                        PlayerDanmakuSwitch.fromObject = function fromObject(object) {
                            if (
                                object instanceof
                                $root.bilibili.community.service.dm.v1.PlayerDanmakuSwitch
                            )
                                return object
                            var message = new $root.bilibili.community.service.dm.v1.PlayerDanmakuSwitch()
                            if (object.value != null) message.value = Boolean(object.value)
                            return message
                        }

                        /**
                         * Creates a plain object from a PlayerDanmakuSwitch message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof bilibili.community.service.dm.v1.PlayerDanmakuSwitch
                         * @static
                         * @param {bilibili.community.service.dm.v1.PlayerDanmakuSwitch} message PlayerDanmakuSwitch
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        PlayerDanmakuSwitch.toObject = function toObject(message, options) {
                            if (!options) options = {}
                            var object = {}
                            if (options.defaults) object.value = false
                            if (message.value != null && message.hasOwnProperty('value'))
                                object.value = message.value
                            return object
                        }

                        /**
                         * Converts this PlayerDanmakuSwitch to JSON.
                         * @function toJSON
                         * @memberof bilibili.community.service.dm.v1.PlayerDanmakuSwitch
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        PlayerDanmakuSwitch.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
                        }

                        return PlayerDanmakuSwitch
                    })()

                    v1.PlayerDanmakuSwitchSave = (function () {
                        /**
                         * Properties of a PlayerDanmakuSwitchSave.
                         * @memberof bilibili.community.service.dm.v1
                         * @interface IPlayerDanmakuSwitchSave
                         * @property {boolean|null} [value] PlayerDanmakuSwitchSave value
                         */

                        /**
                         * Constructs a new PlayerDanmakuSwitchSave.
                         * @memberof bilibili.community.service.dm.v1
                         * @classdesc Represents a PlayerDanmakuSwitchSave.
                         * @implements IPlayerDanmakuSwitchSave
                         * @constructor
                         * @param {bilibili.community.service.dm.v1.IPlayerDanmakuSwitchSave=} [properties] Properties to set
                         */
                        function PlayerDanmakuSwitchSave(properties) {
                            if (properties)
                                for (
                                    var keys = Object.keys(properties), i = 0;
                                    i < keys.length;
                                    ++i
                                )
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]]
                        }

                        /**
                         * PlayerDanmakuSwitchSave value.
                         * @member {boolean} value
                         * @memberof bilibili.community.service.dm.v1.PlayerDanmakuSwitchSave
                         * @instance
                         */
                        PlayerDanmakuSwitchSave.prototype.value = false

                        /**
                         * Creates a new PlayerDanmakuSwitchSave instance using the specified properties.
                         * @function create
                         * @memberof bilibili.community.service.dm.v1.PlayerDanmakuSwitchSave
                         * @static
                         * @param {bilibili.community.service.dm.v1.IPlayerDanmakuSwitchSave=} [properties] Properties to set
                         * @returns {bilibili.community.service.dm.v1.PlayerDanmakuSwitchSave} PlayerDanmakuSwitchSave instance
                         */
                        PlayerDanmakuSwitchSave.create = function create(properties) {
                            return new PlayerDanmakuSwitchSave(properties)
                        }

                        /**
                         * Encodes the specified PlayerDanmakuSwitchSave message. Does not implicitly {@link bilibili.community.service.dm.v1.PlayerDanmakuSwitchSave.verify|verify} messages.
                         * @function encode
                         * @memberof bilibili.community.service.dm.v1.PlayerDanmakuSwitchSave
                         * @static
                         * @param {bilibili.community.service.dm.v1.IPlayerDanmakuSwitchSave} message PlayerDanmakuSwitchSave message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        PlayerDanmakuSwitchSave.encode = function encode(message, writer) {
                            if (!writer) writer = $Writer.create()
                            if (
                                message.value != null &&
                                Object.hasOwnProperty.call(message, 'value')
                            )
                                writer.uint32(/* id 1, wireType 0 =*/ 8).bool(message.value)
                            return writer
                        }

                        /**
                         * Encodes the specified PlayerDanmakuSwitchSave message, length delimited. Does not implicitly {@link bilibili.community.service.dm.v1.PlayerDanmakuSwitchSave.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof bilibili.community.service.dm.v1.PlayerDanmakuSwitchSave
                         * @static
                         * @param {bilibili.community.service.dm.v1.IPlayerDanmakuSwitchSave} message PlayerDanmakuSwitchSave message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        PlayerDanmakuSwitchSave.encodeDelimited = function encodeDelimited(
                            message,
                            writer
                        ) {
                            return this.encode(message, writer).ldelim()
                        }

                        /**
                         * Decodes a PlayerDanmakuSwitchSave message from the specified reader or buffer.
                         * @function decode
                         * @memberof bilibili.community.service.dm.v1.PlayerDanmakuSwitchSave
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {bilibili.community.service.dm.v1.PlayerDanmakuSwitchSave} PlayerDanmakuSwitchSave
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        PlayerDanmakuSwitchSave.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader)) reader = $Reader.create(reader)
                            var end = length === undefined ? reader.len : reader.pos + length,
                                message = new $root.bilibili.community.service.dm.v1.PlayerDanmakuSwitchSave()
                            while (reader.pos < end) {
                                var tag = reader.uint32()
                                switch (tag >>> 3) {
                                    case 1:
                                        message.value = reader.bool()
                                        break
                                    default:
                                        reader.skipType(tag & 7)
                                        break
                                }
                            }
                            return message
                        }

                        /**
                         * Decodes a PlayerDanmakuSwitchSave message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof bilibili.community.service.dm.v1.PlayerDanmakuSwitchSave
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {bilibili.community.service.dm.v1.PlayerDanmakuSwitchSave} PlayerDanmakuSwitchSave
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        PlayerDanmakuSwitchSave.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader)) reader = new $Reader(reader)
                            return this.decode(reader, reader.uint32())
                        }

                        /**
                         * Verifies a PlayerDanmakuSwitchSave message.
                         * @function verify
                         * @memberof bilibili.community.service.dm.v1.PlayerDanmakuSwitchSave
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        PlayerDanmakuSwitchSave.verify = function verify(message) {
                            if (typeof message !== 'object' || message === null)
                                return 'object expected'
                            if (message.value != null && message.hasOwnProperty('value'))
                                if (typeof message.value !== 'boolean')
                                    return 'value: boolean expected'
                            return null
                        }

                        /**
                         * Creates a PlayerDanmakuSwitchSave message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof bilibili.community.service.dm.v1.PlayerDanmakuSwitchSave
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {bilibili.community.service.dm.v1.PlayerDanmakuSwitchSave} PlayerDanmakuSwitchSave
                         */
                        PlayerDanmakuSwitchSave.fromObject = function fromObject(object) {
                            if (
                                object instanceof
                                $root.bilibili.community.service.dm.v1.PlayerDanmakuSwitchSave
                            )
                                return object
                            var message = new $root.bilibili.community.service.dm.v1.PlayerDanmakuSwitchSave()
                            if (object.value != null) message.value = Boolean(object.value)
                            return message
                        }

                        /**
                         * Creates a plain object from a PlayerDanmakuSwitchSave message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof bilibili.community.service.dm.v1.PlayerDanmakuSwitchSave
                         * @static
                         * @param {bilibili.community.service.dm.v1.PlayerDanmakuSwitchSave} message PlayerDanmakuSwitchSave
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        PlayerDanmakuSwitchSave.toObject = function toObject(message, options) {
                            if (!options) options = {}
                            var object = {}
                            if (options.defaults) object.value = false
                            if (message.value != null && message.hasOwnProperty('value'))
                                object.value = message.value
                            return object
                        }

                        /**
                         * Converts this PlayerDanmakuSwitchSave to JSON.
                         * @function toJSON
                         * @memberof bilibili.community.service.dm.v1.PlayerDanmakuSwitchSave
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        PlayerDanmakuSwitchSave.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
                        }

                        return PlayerDanmakuSwitchSave
                    })()

                    v1.PlayerDanmakuUseDefaultConfig = (function () {
                        /**
                         * Properties of a PlayerDanmakuUseDefaultConfig.
                         * @memberof bilibili.community.service.dm.v1
                         * @interface IPlayerDanmakuUseDefaultConfig
                         * @property {boolean|null} [value] PlayerDanmakuUseDefaultConfig value
                         */

                        /**
                         * Constructs a new PlayerDanmakuUseDefaultConfig.
                         * @memberof bilibili.community.service.dm.v1
                         * @classdesc Represents a PlayerDanmakuUseDefaultConfig.
                         * @implements IPlayerDanmakuUseDefaultConfig
                         * @constructor
                         * @param {bilibili.community.service.dm.v1.IPlayerDanmakuUseDefaultConfig=} [properties] Properties to set
                         */
                        function PlayerDanmakuUseDefaultConfig(properties) {
                            if (properties)
                                for (
                                    var keys = Object.keys(properties), i = 0;
                                    i < keys.length;
                                    ++i
                                )
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]]
                        }

                        /**
                         * PlayerDanmakuUseDefaultConfig value.
                         * @member {boolean} value
                         * @memberof bilibili.community.service.dm.v1.PlayerDanmakuUseDefaultConfig
                         * @instance
                         */
                        PlayerDanmakuUseDefaultConfig.prototype.value = false

                        /**
                         * Creates a new PlayerDanmakuUseDefaultConfig instance using the specified properties.
                         * @function create
                         * @memberof bilibili.community.service.dm.v1.PlayerDanmakuUseDefaultConfig
                         * @static
                         * @param {bilibili.community.service.dm.v1.IPlayerDanmakuUseDefaultConfig=} [properties] Properties to set
                         * @returns {bilibili.community.service.dm.v1.PlayerDanmakuUseDefaultConfig} PlayerDanmakuUseDefaultConfig instance
                         */
                        PlayerDanmakuUseDefaultConfig.create = function create(properties) {
                            return new PlayerDanmakuUseDefaultConfig(properties)
                        }

                        /**
                         * Encodes the specified PlayerDanmakuUseDefaultConfig message. Does not implicitly {@link bilibili.community.service.dm.v1.PlayerDanmakuUseDefaultConfig.verify|verify} messages.
                         * @function encode
                         * @memberof bilibili.community.service.dm.v1.PlayerDanmakuUseDefaultConfig
                         * @static
                         * @param {bilibili.community.service.dm.v1.IPlayerDanmakuUseDefaultConfig} message PlayerDanmakuUseDefaultConfig message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        PlayerDanmakuUseDefaultConfig.encode = function encode(message, writer) {
                            if (!writer) writer = $Writer.create()
                            if (
                                message.value != null &&
                                Object.hasOwnProperty.call(message, 'value')
                            )
                                writer.uint32(/* id 1, wireType 0 =*/ 8).bool(message.value)
                            return writer
                        }

                        /**
                         * Encodes the specified PlayerDanmakuUseDefaultConfig message, length delimited. Does not implicitly {@link bilibili.community.service.dm.v1.PlayerDanmakuUseDefaultConfig.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof bilibili.community.service.dm.v1.PlayerDanmakuUseDefaultConfig
                         * @static
                         * @param {bilibili.community.service.dm.v1.IPlayerDanmakuUseDefaultConfig} message PlayerDanmakuUseDefaultConfig message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        PlayerDanmakuUseDefaultConfig.encodeDelimited = function encodeDelimited(
                            message,
                            writer
                        ) {
                            return this.encode(message, writer).ldelim()
                        }

                        /**
                         * Decodes a PlayerDanmakuUseDefaultConfig message from the specified reader or buffer.
                         * @function decode
                         * @memberof bilibili.community.service.dm.v1.PlayerDanmakuUseDefaultConfig
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {bilibili.community.service.dm.v1.PlayerDanmakuUseDefaultConfig} PlayerDanmakuUseDefaultConfig
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        PlayerDanmakuUseDefaultConfig.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader)) reader = $Reader.create(reader)
                            var end = length === undefined ? reader.len : reader.pos + length,
                                message = new $root.bilibili.community.service.dm.v1.PlayerDanmakuUseDefaultConfig()
                            while (reader.pos < end) {
                                var tag = reader.uint32()
                                switch (tag >>> 3) {
                                    case 1:
                                        message.value = reader.bool()
                                        break
                                    default:
                                        reader.skipType(tag & 7)
                                        break
                                }
                            }
                            return message
                        }

                        /**
                         * Decodes a PlayerDanmakuUseDefaultConfig message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof bilibili.community.service.dm.v1.PlayerDanmakuUseDefaultConfig
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {bilibili.community.service.dm.v1.PlayerDanmakuUseDefaultConfig} PlayerDanmakuUseDefaultConfig
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        PlayerDanmakuUseDefaultConfig.decodeDelimited = function decodeDelimited(
                            reader
                        ) {
                            if (!(reader instanceof $Reader)) reader = new $Reader(reader)
                            return this.decode(reader, reader.uint32())
                        }

                        /**
                         * Verifies a PlayerDanmakuUseDefaultConfig message.
                         * @function verify
                         * @memberof bilibili.community.service.dm.v1.PlayerDanmakuUseDefaultConfig
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        PlayerDanmakuUseDefaultConfig.verify = function verify(message) {
                            if (typeof message !== 'object' || message === null)
                                return 'object expected'
                            if (message.value != null && message.hasOwnProperty('value'))
                                if (typeof message.value !== 'boolean')
                                    return 'value: boolean expected'
                            return null
                        }

                        /**
                         * Creates a PlayerDanmakuUseDefaultConfig message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof bilibili.community.service.dm.v1.PlayerDanmakuUseDefaultConfig
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {bilibili.community.service.dm.v1.PlayerDanmakuUseDefaultConfig} PlayerDanmakuUseDefaultConfig
                         */
                        PlayerDanmakuUseDefaultConfig.fromObject = function fromObject(object) {
                            if (
                                object instanceof
                                $root.bilibili.community.service.dm.v1.PlayerDanmakuUseDefaultConfig
                            )
                                return object
                            var message = new $root.bilibili.community.service.dm.v1.PlayerDanmakuUseDefaultConfig()
                            if (object.value != null) message.value = Boolean(object.value)
                            return message
                        }

                        /**
                         * Creates a plain object from a PlayerDanmakuUseDefaultConfig message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof bilibili.community.service.dm.v1.PlayerDanmakuUseDefaultConfig
                         * @static
                         * @param {bilibili.community.service.dm.v1.PlayerDanmakuUseDefaultConfig} message PlayerDanmakuUseDefaultConfig
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        PlayerDanmakuUseDefaultConfig.toObject = function toObject(
                            message,
                            options
                        ) {
                            if (!options) options = {}
                            var object = {}
                            if (options.defaults) object.value = false
                            if (message.value != null && message.hasOwnProperty('value'))
                                object.value = message.value
                            return object
                        }

                        /**
                         * Converts this PlayerDanmakuUseDefaultConfig to JSON.
                         * @function toJSON
                         * @memberof bilibili.community.service.dm.v1.PlayerDanmakuUseDefaultConfig
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        PlayerDanmakuUseDefaultConfig.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
                        }

                        return PlayerDanmakuUseDefaultConfig
                    })()

                    v1.SubtitleItem = (function () {
                        /**
                         * Properties of a SubtitleItem.
                         * @memberof bilibili.community.service.dm.v1
                         * @interface ISubtitleItem
                         * @property {number|Long|null} [id] SubtitleItem id
                         * @property {string|null} [idStr] SubtitleItem idStr
                         * @property {string|null} [lan] SubtitleItem lan
                         * @property {string|null} [lanDoc] SubtitleItem lanDoc
                         * @property {string|null} [subtitleUrl] SubtitleItem subtitleUrl
                         * @property {bilibili.community.service.dm.v1.IUserInfo|null} [author] SubtitleItem author
                         */

                        /**
                         * Constructs a new SubtitleItem.
                         * @memberof bilibili.community.service.dm.v1
                         * @classdesc Represents a SubtitleItem.
                         * @implements ISubtitleItem
                         * @constructor
                         * @param {bilibili.community.service.dm.v1.ISubtitleItem=} [properties] Properties to set
                         */
                        function SubtitleItem(properties) {
                            if (properties)
                                for (
                                    var keys = Object.keys(properties), i = 0;
                                    i < keys.length;
                                    ++i
                                )
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]]
                        }

                        /**
                         * SubtitleItem id.
                         * @member {number|Long} id
                         * @memberof bilibili.community.service.dm.v1.SubtitleItem
                         * @instance
                         */
                        SubtitleItem.prototype.id = $util.Long
                            ? $util.Long.fromBits(0, 0, false)
                            : 0

                        /**
                         * SubtitleItem idStr.
                         * @member {string} idStr
                         * @memberof bilibili.community.service.dm.v1.SubtitleItem
                         * @instance
                         */
                        SubtitleItem.prototype.idStr = ''

                        /**
                         * SubtitleItem lan.
                         * @member {string} lan
                         * @memberof bilibili.community.service.dm.v1.SubtitleItem
                         * @instance
                         */
                        SubtitleItem.prototype.lan = ''

                        /**
                         * SubtitleItem lanDoc.
                         * @member {string} lanDoc
                         * @memberof bilibili.community.service.dm.v1.SubtitleItem
                         * @instance
                         */
                        SubtitleItem.prototype.lanDoc = ''

                        /**
                         * SubtitleItem subtitleUrl.
                         * @member {string} subtitleUrl
                         * @memberof bilibili.community.service.dm.v1.SubtitleItem
                         * @instance
                         */
                        SubtitleItem.prototype.subtitleUrl = ''

                        /**
                         * SubtitleItem author.
                         * @member {bilibili.community.service.dm.v1.IUserInfo|null|undefined} author
                         * @memberof bilibili.community.service.dm.v1.SubtitleItem
                         * @instance
                         */
                        SubtitleItem.prototype.author = null

                        /**
                         * Creates a new SubtitleItem instance using the specified properties.
                         * @function create
                         * @memberof bilibili.community.service.dm.v1.SubtitleItem
                         * @static
                         * @param {bilibili.community.service.dm.v1.ISubtitleItem=} [properties] Properties to set
                         * @returns {bilibili.community.service.dm.v1.SubtitleItem} SubtitleItem instance
                         */
                        SubtitleItem.create = function create(properties) {
                            return new SubtitleItem(properties)
                        }

                        /**
                         * Encodes the specified SubtitleItem message. Does not implicitly {@link bilibili.community.service.dm.v1.SubtitleItem.verify|verify} messages.
                         * @function encode
                         * @memberof bilibili.community.service.dm.v1.SubtitleItem
                         * @static
                         * @param {bilibili.community.service.dm.v1.ISubtitleItem} message SubtitleItem message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        SubtitleItem.encode = function encode(message, writer) {
                            if (!writer) writer = $Writer.create()
                            if (message.id != null && Object.hasOwnProperty.call(message, 'id'))
                                writer.uint32(/* id 1, wireType 0 =*/ 8).int64(message.id)
                            if (
                                message.idStr != null &&
                                Object.hasOwnProperty.call(message, 'idStr')
                            )
                                writer.uint32(/* id 2, wireType 2 =*/ 18).string(message.idStr)
                            if (message.lan != null && Object.hasOwnProperty.call(message, 'lan'))
                                writer.uint32(/* id 3, wireType 2 =*/ 26).string(message.lan)
                            if (
                                message.lanDoc != null &&
                                Object.hasOwnProperty.call(message, 'lanDoc')
                            )
                                writer.uint32(/* id 4, wireType 2 =*/ 34).string(message.lanDoc)
                            if (
                                message.subtitleUrl != null &&
                                Object.hasOwnProperty.call(message, 'subtitleUrl')
                            )
                                writer
                                    .uint32(/* id 5, wireType 2 =*/ 42)
                                    .string(message.subtitleUrl)
                            if (
                                message.author != null &&
                                Object.hasOwnProperty.call(message, 'author')
                            )
                                $root.bilibili.community.service.dm.v1.UserInfo.encode(
                                    message.author,
                                    writer.uint32(/* id 6, wireType 2 =*/ 50).fork()
                                ).ldelim()
                            return writer
                        }

                        /**
                         * Encodes the specified SubtitleItem message, length delimited. Does not implicitly {@link bilibili.community.service.dm.v1.SubtitleItem.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof bilibili.community.service.dm.v1.SubtitleItem
                         * @static
                         * @param {bilibili.community.service.dm.v1.ISubtitleItem} message SubtitleItem message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        SubtitleItem.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim()
                        }

                        /**
                         * Decodes a SubtitleItem message from the specified reader or buffer.
                         * @function decode
                         * @memberof bilibili.community.service.dm.v1.SubtitleItem
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {bilibili.community.service.dm.v1.SubtitleItem} SubtitleItem
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        SubtitleItem.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader)) reader = $Reader.create(reader)
                            var end = length === undefined ? reader.len : reader.pos + length,
                                message = new $root.bilibili.community.service.dm.v1.SubtitleItem()
                            while (reader.pos < end) {
                                var tag = reader.uint32()
                                switch (tag >>> 3) {
                                    case 1:
                                        message.id = reader.int64()
                                        break
                                    case 2:
                                        message.idStr = reader.string()
                                        break
                                    case 3:
                                        message.lan = reader.string()
                                        break
                                    case 4:
                                        message.lanDoc = reader.string()
                                        break
                                    case 5:
                                        message.subtitleUrl = reader.string()
                                        break
                                    case 6:
                                        message.author = $root.bilibili.community.service.dm.v1.UserInfo.decode(
                                            reader,
                                            reader.uint32()
                                        )
                                        break
                                    default:
                                        reader.skipType(tag & 7)
                                        break
                                }
                            }
                            return message
                        }

                        /**
                         * Decodes a SubtitleItem message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof bilibili.community.service.dm.v1.SubtitleItem
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {bilibili.community.service.dm.v1.SubtitleItem} SubtitleItem
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        SubtitleItem.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader)) reader = new $Reader(reader)
                            return this.decode(reader, reader.uint32())
                        }

                        /**
                         * Verifies a SubtitleItem message.
                         * @function verify
                         * @memberof bilibili.community.service.dm.v1.SubtitleItem
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        SubtitleItem.verify = function verify(message) {
                            if (typeof message !== 'object' || message === null)
                                return 'object expected'
                            if (message.id != null && message.hasOwnProperty('id'))
                                if (
                                    !$util.isInteger(message.id) &&
                                    !(
                                        message.id &&
                                        $util.isInteger(message.id.low) &&
                                        $util.isInteger(message.id.high)
                                    )
                                )
                                    return 'id: integer|Long expected'
                            if (message.idStr != null && message.hasOwnProperty('idStr'))
                                if (!$util.isString(message.idStr)) return 'idStr: string expected'
                            if (message.lan != null && message.hasOwnProperty('lan'))
                                if (!$util.isString(message.lan)) return 'lan: string expected'
                            if (message.lanDoc != null && message.hasOwnProperty('lanDoc'))
                                if (!$util.isString(message.lanDoc))
                                    return 'lanDoc: string expected'
                            if (
                                message.subtitleUrl != null &&
                                message.hasOwnProperty('subtitleUrl')
                            )
                                if (!$util.isString(message.subtitleUrl))
                                    return 'subtitleUrl: string expected'
                            if (message.author != null && message.hasOwnProperty('author')) {
                                var error = $root.bilibili.community.service.dm.v1.UserInfo.verify(
                                    message.author
                                )
                                if (error) return 'author.' + error
                            }
                            return null
                        }

                        /**
                         * Creates a SubtitleItem message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof bilibili.community.service.dm.v1.SubtitleItem
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {bilibili.community.service.dm.v1.SubtitleItem} SubtitleItem
                         */
                        SubtitleItem.fromObject = function fromObject(object) {
                            if (
                                object instanceof
                                $root.bilibili.community.service.dm.v1.SubtitleItem
                            )
                                return object
                            var message = new $root.bilibili.community.service.dm.v1.SubtitleItem()
                            if (object.id != null)
                                if ($util.Long)
                                    (message.id = $util.Long.fromValue(object.id)).unsigned = false
                                else if (typeof object.id === 'string')
                                    message.id = parseInt(object.id, 10)
                                else if (typeof object.id === 'number') message.id = object.id
                                else if (typeof object.id === 'object')
                                    message.id = new $util.LongBits(
                                        object.id.low >>> 0,
                                        object.id.high >>> 0
                                    ).toNumber()
                            if (object.idStr != null) message.idStr = String(object.idStr)
                            if (object.lan != null) message.lan = String(object.lan)
                            if (object.lanDoc != null) message.lanDoc = String(object.lanDoc)
                            if (object.subtitleUrl != null)
                                message.subtitleUrl = String(object.subtitleUrl)
                            if (object.author != null) {
                                if (typeof object.author !== 'object')
                                    throw TypeError(
                                        '.bilibili.community.service.dm.v1.SubtitleItem.author: object expected'
                                    )
                                message.author = $root.bilibili.community.service.dm.v1.UserInfo.fromObject(
                                    object.author
                                )
                            }
                            return message
                        }

                        /**
                         * Creates a plain object from a SubtitleItem message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof bilibili.community.service.dm.v1.SubtitleItem
                         * @static
                         * @param {bilibili.community.service.dm.v1.SubtitleItem} message SubtitleItem
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        SubtitleItem.toObject = function toObject(message, options) {
                            if (!options) options = {}
                            var object = {}
                            if (options.defaults) {
                                if ($util.Long) {
                                    var long = new $util.Long(0, 0, false)
                                    object.id =
                                        options.longs === String
                                            ? long.toString()
                                            : options.longs === Number
                                            ? long.toNumber()
                                            : long
                                } else object.id = options.longs === String ? '0' : 0
                                object.idStr = ''
                                object.lan = ''
                                object.lanDoc = ''
                                object.subtitleUrl = ''
                                object.author = null
                            }
                            if (message.id != null && message.hasOwnProperty('id'))
                                if (typeof message.id === 'number')
                                    object.id =
                                        options.longs === String ? String(message.id) : message.id
                                else
                                    object.id =
                                        options.longs === String
                                            ? $util.Long.prototype.toString.call(message.id)
                                            : options.longs === Number
                                            ? new $util.LongBits(
                                                  message.id.low >>> 0,
                                                  message.id.high >>> 0
                                              ).toNumber()
                                            : message.id
                            if (message.idStr != null && message.hasOwnProperty('idStr'))
                                object.idStr = message.idStr
                            if (message.lan != null && message.hasOwnProperty('lan'))
                                object.lan = message.lan
                            if (message.lanDoc != null && message.hasOwnProperty('lanDoc'))
                                object.lanDoc = message.lanDoc
                            if (
                                message.subtitleUrl != null &&
                                message.hasOwnProperty('subtitleUrl')
                            )
                                object.subtitleUrl = message.subtitleUrl
                            if (message.author != null && message.hasOwnProperty('author'))
                                object.author = $root.bilibili.community.service.dm.v1.UserInfo.toObject(
                                    message.author,
                                    options
                                )
                            return object
                        }

                        /**
                         * Converts this SubtitleItem to JSON.
                         * @function toJSON
                         * @memberof bilibili.community.service.dm.v1.SubtitleItem
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        SubtitleItem.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
                        }

                        return SubtitleItem
                    })()

                    v1.UserInfo = (function () {
                        /**
                         * Properties of a UserInfo.
                         * @memberof bilibili.community.service.dm.v1
                         * @interface IUserInfo
                         * @property {number|Long|null} [mid] UserInfo mid
                         * @property {string|null} [name] UserInfo name
                         * @property {string|null} [sex] UserInfo sex
                         * @property {string|null} [face] UserInfo face
                         * @property {string|null} [sign] UserInfo sign
                         * @property {number|null} [rank] UserInfo rank
                         */

                        /**
                         * Constructs a new UserInfo.
                         * @memberof bilibili.community.service.dm.v1
                         * @classdesc Represents a UserInfo.
                         * @implements IUserInfo
                         * @constructor
                         * @param {bilibili.community.service.dm.v1.IUserInfo=} [properties] Properties to set
                         */
                        function UserInfo(properties) {
                            if (properties)
                                for (
                                    var keys = Object.keys(properties), i = 0;
                                    i < keys.length;
                                    ++i
                                )
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]]
                        }

                        /**
                         * UserInfo mid.
                         * @member {number|Long} mid
                         * @memberof bilibili.community.service.dm.v1.UserInfo
                         * @instance
                         */
                        UserInfo.prototype.mid = $util.Long ? $util.Long.fromBits(0, 0, false) : 0

                        /**
                         * UserInfo name.
                         * @member {string} name
                         * @memberof bilibili.community.service.dm.v1.UserInfo
                         * @instance
                         */
                        UserInfo.prototype.name = ''

                        /**
                         * UserInfo sex.
                         * @member {string} sex
                         * @memberof bilibili.community.service.dm.v1.UserInfo
                         * @instance
                         */
                        UserInfo.prototype.sex = ''

                        /**
                         * UserInfo face.
                         * @member {string} face
                         * @memberof bilibili.community.service.dm.v1.UserInfo
                         * @instance
                         */
                        UserInfo.prototype.face = ''

                        /**
                         * UserInfo sign.
                         * @member {string} sign
                         * @memberof bilibili.community.service.dm.v1.UserInfo
                         * @instance
                         */
                        UserInfo.prototype.sign = ''

                        /**
                         * UserInfo rank.
                         * @member {number} rank
                         * @memberof bilibili.community.service.dm.v1.UserInfo
                         * @instance
                         */
                        UserInfo.prototype.rank = 0

                        /**
                         * Creates a new UserInfo instance using the specified properties.
                         * @function create
                         * @memberof bilibili.community.service.dm.v1.UserInfo
                         * @static
                         * @param {bilibili.community.service.dm.v1.IUserInfo=} [properties] Properties to set
                         * @returns {bilibili.community.service.dm.v1.UserInfo} UserInfo instance
                         */
                        UserInfo.create = function create(properties) {
                            return new UserInfo(properties)
                        }

                        /**
                         * Encodes the specified UserInfo message. Does not implicitly {@link bilibili.community.service.dm.v1.UserInfo.verify|verify} messages.
                         * @function encode
                         * @memberof bilibili.community.service.dm.v1.UserInfo
                         * @static
                         * @param {bilibili.community.service.dm.v1.IUserInfo} message UserInfo message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        UserInfo.encode = function encode(message, writer) {
                            if (!writer) writer = $Writer.create()
                            if (message.mid != null && Object.hasOwnProperty.call(message, 'mid'))
                                writer.uint32(/* id 1, wireType 0 =*/ 8).int64(message.mid)
                            if (message.name != null && Object.hasOwnProperty.call(message, 'name'))
                                writer.uint32(/* id 2, wireType 2 =*/ 18).string(message.name)
                            if (message.sex != null && Object.hasOwnProperty.call(message, 'sex'))
                                writer.uint32(/* id 3, wireType 2 =*/ 26).string(message.sex)
                            if (message.face != null && Object.hasOwnProperty.call(message, 'face'))
                                writer.uint32(/* id 4, wireType 2 =*/ 34).string(message.face)
                            if (message.sign != null && Object.hasOwnProperty.call(message, 'sign'))
                                writer.uint32(/* id 5, wireType 2 =*/ 42).string(message.sign)
                            if (message.rank != null && Object.hasOwnProperty.call(message, 'rank'))
                                writer.uint32(/* id 6, wireType 0 =*/ 48).int32(message.rank)
                            return writer
                        }

                        /**
                         * Encodes the specified UserInfo message, length delimited. Does not implicitly {@link bilibili.community.service.dm.v1.UserInfo.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof bilibili.community.service.dm.v1.UserInfo
                         * @static
                         * @param {bilibili.community.service.dm.v1.IUserInfo} message UserInfo message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        UserInfo.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim()
                        }

                        /**
                         * Decodes a UserInfo message from the specified reader or buffer.
                         * @function decode
                         * @memberof bilibili.community.service.dm.v1.UserInfo
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {bilibili.community.service.dm.v1.UserInfo} UserInfo
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        UserInfo.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader)) reader = $Reader.create(reader)
                            var end = length === undefined ? reader.len : reader.pos + length,
                                message = new $root.bilibili.community.service.dm.v1.UserInfo()
                            while (reader.pos < end) {
                                var tag = reader.uint32()
                                switch (tag >>> 3) {
                                    case 1:
                                        message.mid = reader.int64()
                                        break
                                    case 2:
                                        message.name = reader.string()
                                        break
                                    case 3:
                                        message.sex = reader.string()
                                        break
                                    case 4:
                                        message.face = reader.string()
                                        break
                                    case 5:
                                        message.sign = reader.string()
                                        break
                                    case 6:
                                        message.rank = reader.int32()
                                        break
                                    default:
                                        reader.skipType(tag & 7)
                                        break
                                }
                            }
                            return message
                        }

                        /**
                         * Decodes a UserInfo message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof bilibili.community.service.dm.v1.UserInfo
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {bilibili.community.service.dm.v1.UserInfo} UserInfo
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        UserInfo.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader)) reader = new $Reader(reader)
                            return this.decode(reader, reader.uint32())
                        }

                        /**
                         * Verifies a UserInfo message.
                         * @function verify
                         * @memberof bilibili.community.service.dm.v1.UserInfo
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        UserInfo.verify = function verify(message) {
                            if (typeof message !== 'object' || message === null)
                                return 'object expected'
                            if (message.mid != null && message.hasOwnProperty('mid'))
                                if (
                                    !$util.isInteger(message.mid) &&
                                    !(
                                        message.mid &&
                                        $util.isInteger(message.mid.low) &&
                                        $util.isInteger(message.mid.high)
                                    )
                                )
                                    return 'mid: integer|Long expected'
                            if (message.name != null && message.hasOwnProperty('name'))
                                if (!$util.isString(message.name)) return 'name: string expected'
                            if (message.sex != null && message.hasOwnProperty('sex'))
                                if (!$util.isString(message.sex)) return 'sex: string expected'
                            if (message.face != null && message.hasOwnProperty('face'))
                                if (!$util.isString(message.face)) return 'face: string expected'
                            if (message.sign != null && message.hasOwnProperty('sign'))
                                if (!$util.isString(message.sign)) return 'sign: string expected'
                            if (message.rank != null && message.hasOwnProperty('rank'))
                                if (!$util.isInteger(message.rank)) return 'rank: integer expected'
                            return null
                        }

                        /**
                         * Creates a UserInfo message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof bilibili.community.service.dm.v1.UserInfo
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {bilibili.community.service.dm.v1.UserInfo} UserInfo
                         */
                        UserInfo.fromObject = function fromObject(object) {
                            if (object instanceof $root.bilibili.community.service.dm.v1.UserInfo)
                                return object
                            var message = new $root.bilibili.community.service.dm.v1.UserInfo()
                            if (object.mid != null)
                                if ($util.Long)
                                    (message.mid = $util.Long.fromValue(
                                        object.mid
                                    )).unsigned = false
                                else if (typeof object.mid === 'string')
                                    message.mid = parseInt(object.mid, 10)
                                else if (typeof object.mid === 'number') message.mid = object.mid
                                else if (typeof object.mid === 'object')
                                    message.mid = new $util.LongBits(
                                        object.mid.low >>> 0,
                                        object.mid.high >>> 0
                                    ).toNumber()
                            if (object.name != null) message.name = String(object.name)
                            if (object.sex != null) message.sex = String(object.sex)
                            if (object.face != null) message.face = String(object.face)
                            if (object.sign != null) message.sign = String(object.sign)
                            if (object.rank != null) message.rank = object.rank | 0
                            return message
                        }

                        /**
                         * Creates a plain object from a UserInfo message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof bilibili.community.service.dm.v1.UserInfo
                         * @static
                         * @param {bilibili.community.service.dm.v1.UserInfo} message UserInfo
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        UserInfo.toObject = function toObject(message, options) {
                            if (!options) options = {}
                            var object = {}
                            if (options.defaults) {
                                if ($util.Long) {
                                    var long = new $util.Long(0, 0, false)
                                    object.mid =
                                        options.longs === String
                                            ? long.toString()
                                            : options.longs === Number
                                            ? long.toNumber()
                                            : long
                                } else object.mid = options.longs === String ? '0' : 0
                                object.name = ''
                                object.sex = ''
                                object.face = ''
                                object.sign = ''
                                object.rank = 0
                            }
                            if (message.mid != null && message.hasOwnProperty('mid'))
                                if (typeof message.mid === 'number')
                                    object.mid =
                                        options.longs === String ? String(message.mid) : message.mid
                                else
                                    object.mid =
                                        options.longs === String
                                            ? $util.Long.prototype.toString.call(message.mid)
                                            : options.longs === Number
                                            ? new $util.LongBits(
                                                  message.mid.low >>> 0,
                                                  message.mid.high >>> 0
                                              ).toNumber()
                                            : message.mid
                            if (message.name != null && message.hasOwnProperty('name'))
                                object.name = message.name
                            if (message.sex != null && message.hasOwnProperty('sex'))
                                object.sex = message.sex
                            if (message.face != null && message.hasOwnProperty('face'))
                                object.face = message.face
                            if (message.sign != null && message.hasOwnProperty('sign'))
                                object.sign = message.sign
                            if (message.rank != null && message.hasOwnProperty('rank'))
                                object.rank = message.rank
                            return object
                        }

                        /**
                         * Converts this UserInfo to JSON.
                         * @function toJSON
                         * @memberof bilibili.community.service.dm.v1.UserInfo
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        UserInfo.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
                        }

                        return UserInfo
                    })()

                    v1.VideoMask = (function () {
                        /**
                         * Properties of a VideoMask.
                         * @memberof bilibili.community.service.dm.v1
                         * @interface IVideoMask
                         * @property {number|Long|null} [cid] VideoMask cid
                         * @property {number|null} [plat] VideoMask plat
                         * @property {number|null} [fps] VideoMask fps
                         * @property {number|Long|null} [time] VideoMask time
                         * @property {string|null} [maskUrl] VideoMask maskUrl
                         */

                        /**
                         * Constructs a new VideoMask.
                         * @memberof bilibili.community.service.dm.v1
                         * @classdesc Represents a VideoMask.
                         * @implements IVideoMask
                         * @constructor
                         * @param {bilibili.community.service.dm.v1.IVideoMask=} [properties] Properties to set
                         */
                        function VideoMask(properties) {
                            if (properties)
                                for (
                                    var keys = Object.keys(properties), i = 0;
                                    i < keys.length;
                                    ++i
                                )
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]]
                        }

                        /**
                         * VideoMask cid.
                         * @member {number|Long} cid
                         * @memberof bilibili.community.service.dm.v1.VideoMask
                         * @instance
                         */
                        VideoMask.prototype.cid = $util.Long ? $util.Long.fromBits(0, 0, false) : 0

                        /**
                         * VideoMask plat.
                         * @member {number} plat
                         * @memberof bilibili.community.service.dm.v1.VideoMask
                         * @instance
                         */
                        VideoMask.prototype.plat = 0

                        /**
                         * VideoMask fps.
                         * @member {number} fps
                         * @memberof bilibili.community.service.dm.v1.VideoMask
                         * @instance
                         */
                        VideoMask.prototype.fps = 0

                        /**
                         * VideoMask time.
                         * @member {number|Long} time
                         * @memberof bilibili.community.service.dm.v1.VideoMask
                         * @instance
                         */
                        VideoMask.prototype.time = $util.Long ? $util.Long.fromBits(0, 0, false) : 0

                        /**
                         * VideoMask maskUrl.
                         * @member {string} maskUrl
                         * @memberof bilibili.community.service.dm.v1.VideoMask
                         * @instance
                         */
                        VideoMask.prototype.maskUrl = ''

                        /**
                         * Creates a new VideoMask instance using the specified properties.
                         * @function create
                         * @memberof bilibili.community.service.dm.v1.VideoMask
                         * @static
                         * @param {bilibili.community.service.dm.v1.IVideoMask=} [properties] Properties to set
                         * @returns {bilibili.community.service.dm.v1.VideoMask} VideoMask instance
                         */
                        VideoMask.create = function create(properties) {
                            return new VideoMask(properties)
                        }

                        /**
                         * Encodes the specified VideoMask message. Does not implicitly {@link bilibili.community.service.dm.v1.VideoMask.verify|verify} messages.
                         * @function encode
                         * @memberof bilibili.community.service.dm.v1.VideoMask
                         * @static
                         * @param {bilibili.community.service.dm.v1.IVideoMask} message VideoMask message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        VideoMask.encode = function encode(message, writer) {
                            if (!writer) writer = $Writer.create()
                            if (message.cid != null && Object.hasOwnProperty.call(message, 'cid'))
                                writer.uint32(/* id 1, wireType 0 =*/ 8).int64(message.cid)
                            if (message.plat != null && Object.hasOwnProperty.call(message, 'plat'))
                                writer.uint32(/* id 2, wireType 0 =*/ 16).int32(message.plat)
                            if (message.fps != null && Object.hasOwnProperty.call(message, 'fps'))
                                writer.uint32(/* id 3, wireType 0 =*/ 24).int32(message.fps)
                            if (message.time != null && Object.hasOwnProperty.call(message, 'time'))
                                writer.uint32(/* id 4, wireType 0 =*/ 32).int64(message.time)
                            if (
                                message.maskUrl != null &&
                                Object.hasOwnProperty.call(message, 'maskUrl')
                            )
                                writer.uint32(/* id 5, wireType 2 =*/ 42).string(message.maskUrl)
                            return writer
                        }

                        /**
                         * Encodes the specified VideoMask message, length delimited. Does not implicitly {@link bilibili.community.service.dm.v1.VideoMask.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof bilibili.community.service.dm.v1.VideoMask
                         * @static
                         * @param {bilibili.community.service.dm.v1.IVideoMask} message VideoMask message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        VideoMask.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim()
                        }

                        /**
                         * Decodes a VideoMask message from the specified reader or buffer.
                         * @function decode
                         * @memberof bilibili.community.service.dm.v1.VideoMask
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {bilibili.community.service.dm.v1.VideoMask} VideoMask
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        VideoMask.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader)) reader = $Reader.create(reader)
                            var end = length === undefined ? reader.len : reader.pos + length,
                                message = new $root.bilibili.community.service.dm.v1.VideoMask()
                            while (reader.pos < end) {
                                var tag = reader.uint32()
                                switch (tag >>> 3) {
                                    case 1:
                                        message.cid = reader.int64()
                                        break
                                    case 2:
                                        message.plat = reader.int32()
                                        break
                                    case 3:
                                        message.fps = reader.int32()
                                        break
                                    case 4:
                                        message.time = reader.int64()
                                        break
                                    case 5:
                                        message.maskUrl = reader.string()
                                        break
                                    default:
                                        reader.skipType(tag & 7)
                                        break
                                }
                            }
                            return message
                        }

                        /**
                         * Decodes a VideoMask message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof bilibili.community.service.dm.v1.VideoMask
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {bilibili.community.service.dm.v1.VideoMask} VideoMask
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        VideoMask.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader)) reader = new $Reader(reader)
                            return this.decode(reader, reader.uint32())
                        }

                        /**
                         * Verifies a VideoMask message.
                         * @function verify
                         * @memberof bilibili.community.service.dm.v1.VideoMask
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        VideoMask.verify = function verify(message) {
                            if (typeof message !== 'object' || message === null)
                                return 'object expected'
                            if (message.cid != null && message.hasOwnProperty('cid'))
                                if (
                                    !$util.isInteger(message.cid) &&
                                    !(
                                        message.cid &&
                                        $util.isInteger(message.cid.low) &&
                                        $util.isInteger(message.cid.high)
                                    )
                                )
                                    return 'cid: integer|Long expected'
                            if (message.plat != null && message.hasOwnProperty('plat'))
                                if (!$util.isInteger(message.plat)) return 'plat: integer expected'
                            if (message.fps != null && message.hasOwnProperty('fps'))
                                if (!$util.isInteger(message.fps)) return 'fps: integer expected'
                            if (message.time != null && message.hasOwnProperty('time'))
                                if (
                                    !$util.isInteger(message.time) &&
                                    !(
                                        message.time &&
                                        $util.isInteger(message.time.low) &&
                                        $util.isInteger(message.time.high)
                                    )
                                )
                                    return 'time: integer|Long expected'
                            if (message.maskUrl != null && message.hasOwnProperty('maskUrl'))
                                if (!$util.isString(message.maskUrl))
                                    return 'maskUrl: string expected'
                            return null
                        }

                        /**
                         * Creates a VideoMask message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof bilibili.community.service.dm.v1.VideoMask
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {bilibili.community.service.dm.v1.VideoMask} VideoMask
                         */
                        VideoMask.fromObject = function fromObject(object) {
                            if (object instanceof $root.bilibili.community.service.dm.v1.VideoMask)
                                return object
                            var message = new $root.bilibili.community.service.dm.v1.VideoMask()
                            if (object.cid != null)
                                if ($util.Long)
                                    (message.cid = $util.Long.fromValue(
                                        object.cid
                                    )).unsigned = false
                                else if (typeof object.cid === 'string')
                                    message.cid = parseInt(object.cid, 10)
                                else if (typeof object.cid === 'number') message.cid = object.cid
                                else if (typeof object.cid === 'object')
                                    message.cid = new $util.LongBits(
                                        object.cid.low >>> 0,
                                        object.cid.high >>> 0
                                    ).toNumber()
                            if (object.plat != null) message.plat = object.plat | 0
                            if (object.fps != null) message.fps = object.fps | 0
                            if (object.time != null)
                                if ($util.Long)
                                    (message.time = $util.Long.fromValue(
                                        object.time
                                    )).unsigned = false
                                else if (typeof object.time === 'string')
                                    message.time = parseInt(object.time, 10)
                                else if (typeof object.time === 'number') message.time = object.time
                                else if (typeof object.time === 'object')
                                    message.time = new $util.LongBits(
                                        object.time.low >>> 0,
                                        object.time.high >>> 0
                                    ).toNumber()
                            if (object.maskUrl != null) message.maskUrl = String(object.maskUrl)
                            return message
                        }

                        /**
                         * Creates a plain object from a VideoMask message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof bilibili.community.service.dm.v1.VideoMask
                         * @static
                         * @param {bilibili.community.service.dm.v1.VideoMask} message VideoMask
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        VideoMask.toObject = function toObject(message, options) {
                            if (!options) options = {}
                            var object = {}
                            if (options.defaults) {
                                if ($util.Long) {
                                    var long = new $util.Long(0, 0, false)
                                    object.cid =
                                        options.longs === String
                                            ? long.toString()
                                            : options.longs === Number
                                            ? long.toNumber()
                                            : long
                                } else object.cid = options.longs === String ? '0' : 0
                                object.plat = 0
                                object.fps = 0
                                if ($util.Long) {
                                    var long = new $util.Long(0, 0, false)
                                    object.time =
                                        options.longs === String
                                            ? long.toString()
                                            : options.longs === Number
                                            ? long.toNumber()
                                            : long
                                } else object.time = options.longs === String ? '0' : 0
                                object.maskUrl = ''
                            }
                            if (message.cid != null && message.hasOwnProperty('cid'))
                                if (typeof message.cid === 'number')
                                    object.cid =
                                        options.longs === String ? String(message.cid) : message.cid
                                else
                                    object.cid =
                                        options.longs === String
                                            ? $util.Long.prototype.toString.call(message.cid)
                                            : options.longs === Number
                                            ? new $util.LongBits(
                                                  message.cid.low >>> 0,
                                                  message.cid.high >>> 0
                                              ).toNumber()
                                            : message.cid
                            if (message.plat != null && message.hasOwnProperty('plat'))
                                object.plat = message.plat
                            if (message.fps != null && message.hasOwnProperty('fps'))
                                object.fps = message.fps
                            if (message.time != null && message.hasOwnProperty('time'))
                                if (typeof message.time === 'number')
                                    object.time =
                                        options.longs === String
                                            ? String(message.time)
                                            : message.time
                                else
                                    object.time =
                                        options.longs === String
                                            ? $util.Long.prototype.toString.call(message.time)
                                            : options.longs === Number
                                            ? new $util.LongBits(
                                                  message.time.low >>> 0,
                                                  message.time.high >>> 0
                                              ).toNumber()
                                            : message.time
                            if (message.maskUrl != null && message.hasOwnProperty('maskUrl'))
                                object.maskUrl = message.maskUrl
                            return object
                        }

                        /**
                         * Converts this VideoMask to JSON.
                         * @function toJSON
                         * @memberof bilibili.community.service.dm.v1.VideoMask
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        VideoMask.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
                        }

                        return VideoMask
                    })()

                    v1.VideoSubtitle = (function () {
                        /**
                         * Properties of a VideoSubtitle.
                         * @memberof bilibili.community.service.dm.v1
                         * @interface IVideoSubtitle
                         * @property {string|null} [lan] VideoSubtitle lan
                         * @property {string|null} [lanDoc] VideoSubtitle lanDoc
                         * @property {Array.<bilibili.community.service.dm.v1.ISubtitleItem>|null} [subtitles] VideoSubtitle subtitles
                         */

                        /**
                         * Constructs a new VideoSubtitle.
                         * @memberof bilibili.community.service.dm.v1
                         * @classdesc Represents a VideoSubtitle.
                         * @implements IVideoSubtitle
                         * @constructor
                         * @param {bilibili.community.service.dm.v1.IVideoSubtitle=} [properties] Properties to set
                         */
                        function VideoSubtitle(properties) {
                            this.subtitles = []
                            if (properties)
                                for (
                                    var keys = Object.keys(properties), i = 0;
                                    i < keys.length;
                                    ++i
                                )
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]]
                        }

                        /**
                         * VideoSubtitle lan.
                         * @member {string} lan
                         * @memberof bilibili.community.service.dm.v1.VideoSubtitle
                         * @instance
                         */
                        VideoSubtitle.prototype.lan = ''

                        /**
                         * VideoSubtitle lanDoc.
                         * @member {string} lanDoc
                         * @memberof bilibili.community.service.dm.v1.VideoSubtitle
                         * @instance
                         */
                        VideoSubtitle.prototype.lanDoc = ''

                        /**
                         * VideoSubtitle subtitles.
                         * @member {Array.<bilibili.community.service.dm.v1.ISubtitleItem>} subtitles
                         * @memberof bilibili.community.service.dm.v1.VideoSubtitle
                         * @instance
                         */
                        VideoSubtitle.prototype.subtitles = $util.emptyArray

                        /**
                         * Creates a new VideoSubtitle instance using the specified properties.
                         * @function create
                         * @memberof bilibili.community.service.dm.v1.VideoSubtitle
                         * @static
                         * @param {bilibili.community.service.dm.v1.IVideoSubtitle=} [properties] Properties to set
                         * @returns {bilibili.community.service.dm.v1.VideoSubtitle} VideoSubtitle instance
                         */
                        VideoSubtitle.create = function create(properties) {
                            return new VideoSubtitle(properties)
                        }

                        /**
                         * Encodes the specified VideoSubtitle message. Does not implicitly {@link bilibili.community.service.dm.v1.VideoSubtitle.verify|verify} messages.
                         * @function encode
                         * @memberof bilibili.community.service.dm.v1.VideoSubtitle
                         * @static
                         * @param {bilibili.community.service.dm.v1.IVideoSubtitle} message VideoSubtitle message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        VideoSubtitle.encode = function encode(message, writer) {
                            if (!writer) writer = $Writer.create()
                            if (message.lan != null && Object.hasOwnProperty.call(message, 'lan'))
                                writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.lan)
                            if (
                                message.lanDoc != null &&
                                Object.hasOwnProperty.call(message, 'lanDoc')
                            )
                                writer.uint32(/* id 2, wireType 2 =*/ 18).string(message.lanDoc)
                            if (message.subtitles != null && message.subtitles.length)
                                for (var i = 0; i < message.subtitles.length; ++i)
                                    $root.bilibili.community.service.dm.v1.SubtitleItem.encode(
                                        message.subtitles[i],
                                        writer.uint32(/* id 3, wireType 2 =*/ 26).fork()
                                    ).ldelim()
                            return writer
                        }

                        /**
                         * Encodes the specified VideoSubtitle message, length delimited. Does not implicitly {@link bilibili.community.service.dm.v1.VideoSubtitle.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof bilibili.community.service.dm.v1.VideoSubtitle
                         * @static
                         * @param {bilibili.community.service.dm.v1.IVideoSubtitle} message VideoSubtitle message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        VideoSubtitle.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim()
                        }

                        /**
                         * Decodes a VideoSubtitle message from the specified reader or buffer.
                         * @function decode
                         * @memberof bilibili.community.service.dm.v1.VideoSubtitle
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {bilibili.community.service.dm.v1.VideoSubtitle} VideoSubtitle
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        VideoSubtitle.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader)) reader = $Reader.create(reader)
                            var end = length === undefined ? reader.len : reader.pos + length,
                                message = new $root.bilibili.community.service.dm.v1.VideoSubtitle()
                            while (reader.pos < end) {
                                var tag = reader.uint32()
                                switch (tag >>> 3) {
                                    case 1:
                                        message.lan = reader.string()
                                        break
                                    case 2:
                                        message.lanDoc = reader.string()
                                        break
                                    case 3:
                                        if (!(message.subtitles && message.subtitles.length))
                                            message.subtitles = []
                                        message.subtitles.push(
                                            $root.bilibili.community.service.dm.v1.SubtitleItem.decode(
                                                reader,
                                                reader.uint32()
                                            )
                                        )
                                        break
                                    default:
                                        reader.skipType(tag & 7)
                                        break
                                }
                            }
                            return message
                        }

                        /**
                         * Decodes a VideoSubtitle message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof bilibili.community.service.dm.v1.VideoSubtitle
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {bilibili.community.service.dm.v1.VideoSubtitle} VideoSubtitle
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        VideoSubtitle.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader)) reader = new $Reader(reader)
                            return this.decode(reader, reader.uint32())
                        }

                        /**
                         * Verifies a VideoSubtitle message.
                         * @function verify
                         * @memberof bilibili.community.service.dm.v1.VideoSubtitle
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        VideoSubtitle.verify = function verify(message) {
                            if (typeof message !== 'object' || message === null)
                                return 'object expected'
                            if (message.lan != null && message.hasOwnProperty('lan'))
                                if (!$util.isString(message.lan)) return 'lan: string expected'
                            if (message.lanDoc != null && message.hasOwnProperty('lanDoc'))
                                if (!$util.isString(message.lanDoc))
                                    return 'lanDoc: string expected'
                            if (message.subtitles != null && message.hasOwnProperty('subtitles')) {
                                if (!Array.isArray(message.subtitles))
                                    return 'subtitles: array expected'
                                for (var i = 0; i < message.subtitles.length; ++i) {
                                    var error = $root.bilibili.community.service.dm.v1.SubtitleItem.verify(
                                        message.subtitles[i]
                                    )
                                    if (error) return 'subtitles.' + error
                                }
                            }
                            return null
                        }

                        /**
                         * Creates a VideoSubtitle message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof bilibili.community.service.dm.v1.VideoSubtitle
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {bilibili.community.service.dm.v1.VideoSubtitle} VideoSubtitle
                         */
                        VideoSubtitle.fromObject = function fromObject(object) {
                            if (
                                object instanceof
                                $root.bilibili.community.service.dm.v1.VideoSubtitle
                            )
                                return object
                            var message = new $root.bilibili.community.service.dm.v1.VideoSubtitle()
                            if (object.lan != null) message.lan = String(object.lan)
                            if (object.lanDoc != null) message.lanDoc = String(object.lanDoc)
                            if (object.subtitles) {
                                if (!Array.isArray(object.subtitles))
                                    throw TypeError(
                                        '.bilibili.community.service.dm.v1.VideoSubtitle.subtitles: array expected'
                                    )
                                message.subtitles = []
                                for (var i = 0; i < object.subtitles.length; ++i) {
                                    if (typeof object.subtitles[i] !== 'object')
                                        throw TypeError(
                                            '.bilibili.community.service.dm.v1.VideoSubtitle.subtitles: object expected'
                                        )
                                    message.subtitles[
                                        i
                                    ] = $root.bilibili.community.service.dm.v1.SubtitleItem.fromObject(
                                        object.subtitles[i]
                                    )
                                }
                            }
                            return message
                        }

                        /**
                         * Creates a plain object from a VideoSubtitle message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof bilibili.community.service.dm.v1.VideoSubtitle
                         * @static
                         * @param {bilibili.community.service.dm.v1.VideoSubtitle} message VideoSubtitle
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        VideoSubtitle.toObject = function toObject(message, options) {
                            if (!options) options = {}
                            var object = {}
                            if (options.arrays || options.defaults) object.subtitles = []
                            if (options.defaults) {
                                object.lan = ''
                                object.lanDoc = ''
                            }
                            if (message.lan != null && message.hasOwnProperty('lan'))
                                object.lan = message.lan
                            if (message.lanDoc != null && message.hasOwnProperty('lanDoc'))
                                object.lanDoc = message.lanDoc
                            if (message.subtitles && message.subtitles.length) {
                                object.subtitles = []
                                for (var j = 0; j < message.subtitles.length; ++j)
                                    object.subtitles[
                                        j
                                    ] = $root.bilibili.community.service.dm.v1.SubtitleItem.toObject(
                                        message.subtitles[j],
                                        options
                                    )
                            }
                            return object
                        }

                        /**
                         * Converts this VideoSubtitle to JSON.
                         * @function toJSON
                         * @memberof bilibili.community.service.dm.v1.VideoSubtitle
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        VideoSubtitle.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
                        }

                        return VideoSubtitle
                    })()

                    return v1
                })()

                return dm
            })()

            return service
        })()

        return community
    })()

    return bilibili
})()

module.exports = $root

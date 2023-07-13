//=============================================================================
// Timi Basic
//=============================================================================

/*:
 * @target MZ
 * @plugindesc Timi basic configuration
 * @author Timi (羊羽)
 * @url https://www.tinytsunami.info
 * 
 * @param Basic
 * @text Basic
 * 
 * @param Basic.MouseEnable
 * @text Enable Mouse Input
 * @type boolean
 * @default true
 * @parent Basic
 * 
 * @param Basic.WASDEnable
 * @text Enable WASD Input
 * @type boolean
 * @default false
 * @parent Basic
 * 
 * @param Basic.FullscreenEnable
 * @text Enable Fullscreen
 * @type boolean
 * @default false
 * @parent Basic
 * 
 * @param Basic.MouseImage
 * @text Set Cursor Image
 * @type file
 * @require 1
 * @dir img/system
 * @parent Basic
 * 
 * @param Basic.MessageSE
 * @text Set Message SE
 * @type file
 * @require 1
 * @dir audio/se
 * @parent Basic
 * 
 * @param Basic.AnimationRate
 * @text Set Animation Frame Rate
 * @type number
 * @min 1
 * @default 15
 * @parent Basic
 * 
 * @param Initialize
 * @text Initialize
 * 
 * @param Initialize.Switches
 * @text Set Switches
 * @type struct<Switch>[]
 * @default []
 * @parent Initialize
 * 
 * @param Initialize.Variables
 * @text Set Variables
 * @type struct<Variable>[]
 * @default []
 * @parent Initialize
 *  
 * @help 
 * # Publish by Timi License
 *   - Based on MIT license,
 *   - But you agree your games/works don't use illegal materials
 *     (theft, unauthorized used, violation of the authorization of others,
 *      or infringement of the rights of other materials authors)
 * 
 */

/*~struct~Switch:
 *  
 * @param ID
 * @text Switch ID
 * @type switch
 * @default 0
 * 
 * @param Value
 * @text Default Value
 * @type boolean
 * @default true
 * 
 */

/*~struct~Variable:
 *  
 * @param ID
 * @text Variable ID
 * @type variable
 * @default 0
 * 
 * @param Value
 * @text Default Value
 * @type number
 * @default 0
 * 
 */

/*:zh-TW
 * @target MZ
 * @plugindesc Timi 基本設定
 * @author Timi (羊羽)
 * @url https://www.tinytsunami.info
 * 
 * @param Basic
 * @text 基本設置
 * 
 * @param Basic.MouseEnable
 * @text 開啟滑鼠輸入
 * @type boolean
 * @default true
 * @parent Basic
 * 
 * @param Basic.WASDEnable
 * @text 開啟 WASD 輸入
 * @type boolean
 * @default false
 * @parent Basic
 * 
 * @param Basic.FullscreenEnable
 * @text 啟用全螢幕
 * @type boolean
 * @default false
 * @parent Basic
 * 
 * @param Basic.MouseImage
 * @text 設置滑鼠游標圖示
 * @type file
 * @require 1
 * @dir img/system
 * @parent Basic
 * 
 * @param Basic.MessageSE
 * @text 設置訊息顯示音效
 * @type file
 * @require 1
 * @dir audio/se
 * @parent Basic
 * 
 * @param Basic.AnimationRate
 * @text 設置動畫幀率（僅 MV 模式下有效）
 * @type number
 * @min 1
 * @default 15
 * @parent Basic
 * 
 * @param Initialize
 * @text 初始化設置
 * 
 * @param Initialize.Switches
 * @text 設定初始化開關
 * @type struct<Switch>[]
 * @default []
 * @parent Initialize
 * 
 * @param Initialize.Variables
 * @text 設定初始化變數
 * @type struct<Variable>[]
 * @default []
 * @parent Initialize
 *  
 * @help 
 * # 由 Timi 授權條款發布
 *   - 基於 MIT 授權
 *   - 且您同意您的遊戲或作品不能使用非法素材
 *     （偷竊、未授權使用、侵害授權條款或其他侵害素材作者權益的行為）
 * 
 */

/*~struct~Switch:zh-TW
 *  
 * @param ID
 * @text 開關編號
 * @type switch
 * @default 0
 * 
 * @param Value
 * @text 預設值
 * @type boolean
 * @default true
 * 
 */

/*~struct~Variable:zh-TW
 *  
 * @param ID
 * @text 變數編號
 * @type variable
 * @default 0
 * 
 * @param Value
 * @text 預設值
 * @type number
 * @default 0
 * 
 */
!function(){"use strict";var n="Timi_Basic",e=PluginManager.parameters(n),t={PLUGIN_NAME:n,BASIC:{MOUSE_ENABLE:Boolean("true"===e["Basic.MouseEnable"]),MOUSE_IMAGE:String(e["Basic.MouseImage"]),WASD_ENABLE:Boolean("true"===e["Basic.WASDEnable"]),FULLSCREEN_ENABLE:Boolean("true"===e["Basic.FullscreenEnable"]),MESSAGE_SE:String(e["Basic.MessageSE"]),ANIMATION_RATE:Number(e["Basic.AnimationRate"])},INITIALIZE:{SWITCHES:JsonEx.parse(String(e["Initialize.Switches"])).map(n=>{n=JsonEx.parse(n);return{id:Number(n.ID),value:Boolean("true"===n.Value)}}),VARIABLES:JsonEx.parse(String(e["Initialize.Variables"])).map(n=>{n=JsonEx.parse(n);return{id:Number(n.ID),value:Number(n.Value)}})}};t.BASIC.MOUSE_ENABLE&&""!==t.BASIC.MOUSE_IMAGE&&"null"!==t.BASIC.MOUSE_IMAGE&&"undefined"!==t.BASIC.MOUSE_IMAGE&&(document.body.style.cursor=`url("img/system/${t.BASIC.MOUSE_IMAGE}.png"), auto`),Scene_Map.prototype.createButtons=function(){t.BASIC.MOUSE_ENABLE&&ConfigManager.touchUI&&this.createMenuButton()},Scene_Options.prototype.maxCommands=function(){return t.BASIC.MOUSE_ENABLE?7:6},Window_Options.prototype.addGeneralOptions=function(){this.addCommand(TextManager.alwaysDash,"alwaysDash"),this.addCommand(TextManager.commandRemember,"commandRemember"),t.BASIC.MOUSE_ENABLE&&this.addCommand(TextManager.touchUI,"touchUI")},t.BASIC.MOUSE_ENABLE||(TouchInput._onMouseDown=function(n){},TouchInput._onLeftButtonDown=function(n){},TouchInput._onMiddleButtonDown=function(){},TouchInput._onRightButtonDown=function(n){},TouchInput._onMouseMove=function(n){},TouchInput._onMouseUp=function(n){},TouchInput._onWheel=function(n){},TouchInput._onTouchStart=function(n){},TouchInput._onTouchMove=function(n){},TouchInput._onTouchEnd=function(n){},TouchInput._onTouchCancel=function(){},TouchInput._onLostFocus=function(){},TouchInput._onTrigger=function(n,e){},TouchInput._onCancel=function(n,e){},TouchInput._onMove=function(n,e){},TouchInput._onHover=function(n,e){},TouchInput._onRelease=function(n,e){}),t.BASIC.WASD_ENABLE&&(Input.keyMapper[87]="up",Input.keyMapper[65]="left",Input.keyMapper[83]="down",Input.keyMapper[68]="right");const o=Scene_Boot.prototype.resizeScreen,a=(Scene_Boot.prototype.resizeScreen=function(){o.call(this),t.BASIC.FULLSCREEN_ENABLE&&Graphics._requestFullScreen()},Window_Base.prototype.processCharacter=function(n){var e=n.text[n.index++];e.charCodeAt(0)<32?(this.flushTextState(n),this.processControlCharacter(n,e)):(n.buffer+=e,""!==t.BASIC.MESSAGE_SE&&"null"!==t.BASIC.MESSAGE_SE&&"undefined"!==t.BASIC.MESSAGE_SE&&AudioManager.playSe({name:t.BASIC.MESSAGE_SE,volume:100,pitch:100,pan:0}))},Sprite_AnimationMV.prototype.setupRate=function(){this._rate=60/t.BASIC.ANIMATION_RATE},Game_Switches.prototype.clear),u=(Game_Switches.prototype.clear=function(){a.call(this);for(const n of t.INITIALIZE.SWITCHES)0<n.id&&n.id<$dataSystem.switches.length&&(this._data[n.id]=n.value)},Game_Variables.prototype.clear);Game_Variables.prototype.clear=function(){u.call(this);for(const n of t.INITIALIZE.VARIABLES)0<n.id&&n.id<$dataSystem.variables.length&&(this._data[n.id]=Math.floor(n.value))}}();

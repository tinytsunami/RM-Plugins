//=============================================================================
// Timi Dialog
//=============================================================================

/*:
 * @target MZ
 * @plugindesc Timi dialog system 
 * @author Timi (羊羽)
 * 
 * @param Dialog
 * @text Dialog
 * 
 * @param Dialog.FontSize
 * @text Font Size
 * @type number
 * @default 20
 * @parent Dialog
 * 
 * @param Dialog.FontColor
 * @text Font Color
 * @type text
 * @default #FFFFFF
 * @parent Dialog
 * 
 * @param Dialog.FontOutlineWidth
 * @text Font Outline Width
 * @type number
 * @default 4
 * @parent Dialog
 * 
 * @param Dialog.FontOutlineColor
 * @text Font Outline Color
 * @type text
 * @default #000000
 * @parent Dialog
 * 
 * @param Dialog.WindowExpandingDirection
 * @text Window Expanding Direction
 * @type select
 * @option Horizontal
 * @option Vertical
 * @default Horizontal
 * @parent Dialog
 * 
 * @param Dialog.WindowExpandingSpeed
 * @text Window Expanding Speed
 * @desc The larger the value, the slower. Decays in proportional progression.
 * @type number
 * @default 6
 * @parent Dialog
 * 
 * @param Dialog.WindowOpenThreshold
 * @text Window Open Threshold
 * @desc The larger the value, the slower the window will fully open. Instant on when 0.
 * @type number
 * @max 255
 * @min 0
 * @default 253
 * @parent Dialog
 * 
 * @param Dialog.WindowCloseThreshold
 * @text Window Close Threshold
 * @desc The lower the value, the slower the window will fully close. Instant on when 255.
 * @type number
 * @max 255
 * @min 0
 * @default 2
 * @parent Dialog
 * 
 * @param Dialog.ContentsLineHeight
 * @text Contents Line Height
 * @type number
 * @default 2
 * @parent Dialog
 * 
 * @param Dialog.FaceImagePosition
 * @text Face Image Position
 * @type select
 * @option Top
 * @option Center
 * @option Bottom
 * @option Hidden
 * @default Center
 * @parent Dialog
 * 
 * @param Dialog.FaceImageSize
 * @text Face Image Size
 * @type number
 * @default 72
 * @parent Dialog
 * 
 * @param Dialog.FaceImageSpacing
 * @text Face Image Spacing
 * @desc Set spacing between face Image and contents 
 * @type number
 * @default 20
 * @parent Dialog
 * 
 * @param Dialog.PauseSignDisplay
 * @text Pause Sign Disply 
 * @type boolean
 * @default true
 * @parent Dialog
 * 
 * @param Dialog.PauseSignRX
 * @text Pause Sign Ratio X
 * @desc Set pause sign ratio x base on width (origin point is left-top) of window
 * @type number
 * @decimals 2
 * @default 0.5
 * @parent Dialog
 * 
 * @param Dialog.PauseSignRY
 * @text Pause Sign Ratio Y
 * @desc Set pause sign ratio y base on height (origin point is left-top) of window
 * @type number
 * @decimals 2
 * @default 1.0
 * @parent Dialog
 * 
 * @param Dialog.OutputVariableID
 * @text Dialog Output Variable ID
 * @desc Dialog output message subject ID to variable (for Timi system integration, null if no output)
 * @type variable
 * @default 
 * @parent Dialog
 * 
 * @command SetWindowPositionByFixed
 * @text Set window Position By Fixed
 * @desc Set window position by fixed
 * 
 * @arg WindowX
 * @text Window X
 * @type number
 * @default 0
 * 
 * @arg WindowY
 * @text Window Y
 * @type number
 * @default 0
 * 
 * @command SetWindowPositionByOffset
 * @text Set window Position By Offset
 * @desc Set window position by offset
 * 
 * @arg WindowDX
 * @text Window Offset X
 * @type text
 * @default 0
 * 
 * @arg WindowDY
 * @text Window Offset Y
 * @type text
 * @default 0
 * 
 * @command SetWindowPositionByRatio
 * @text Set window Position By Ratio
 * @desc Set window position by ratio (origin point is the center of window)
 * 
 * @arg WindowRX
 * @text Window Ratio X
 * @type number
 * @decimals 2
 * @default 0.5
 * 
 * @arg WindowRY
 * @text Window Ratio Y
 * @type number
 * @decimals 2
 * @default 0.5
 * 
 * @command ResetWindowPosition
 * @text Reset Window Position
 * @desc Reset window position
 * 
 * @command SetWindowSizeByFixed
 * @text Set window Size By Fixed
 * @desc Set window size by fixed
 * 
 * @arg WindowWidth
 * @text Window Width
 * @desc Keep empty to use automatic calculation based on contents
 * @type number
 * @default 
 * 
 * @arg WindowHeight
 * @text Window Height
 * @desc Keep empty to use automatic calculation based on contents
 * @type number
 * @default 
 * 
 * @command SetWindowSizeByOffset
 * @text Set window Size By Offset
 * @desc Set window size by offset
 * 
 * @arg WindowOffsetWidth
 * @text Window Offset Width
 * @type text
 * @default 0
 * 
 * @arg WindowOffsetHeight
 * @text Window Offset Height
 * @type text
 * @default 0
 * 
 * @command SetWindowSizeByRatio
 * @text Set window Size By Ratio
 * @desc Set window size by Ratio
 * 
 * @arg WindowRatioWidth
 * @text Window Ratio Width
 * @type number
 * @decimals 2
 * @default 0.5
 * 
 * @arg WindowRatioHeight
 * @text Window Ratio Height
 * @type number
 * @decimals 2
 * @default 0.5
 * 
 * @command ResetWindowSize
 * @text Reset Window Size
 * @desc Reset window size
 * 
 * @command SetSubjectToEventSelf
 * @text Set subject To Event (Self)
 * @desc Set subject to event (self)
 * 
 * @command SetSubjectToEventByEventId
 * @text Set subject To Event (By Event ID)
 * @desc Set subject to event (by event ID)
 * 
 * @arg EventId
 * @text Event ID
 * @type number
 * @min 1
 * @default 
 * 
 * @command SetSubjectToPlayer
 * @text Set subject To Player
 * @desc Set subject to player
 * 
 * @command SetSubjectToFollowerByFollowerId
 * @text Set subject To Follower (By Follower ID)
 * @desc Set subject to event (by follower ID)
 * 
 * @arg FollowerId
 * @text Follower ID
 * @desc Player (Follower ID = 0) 
 * @type number
 * @min 0
 * 
 * @command SetSubjectToFollowerByActorId
 * @text Set subject To Follower (By Actor)
 * @desc Set subject to follower (by actor)
 * 
 * @arg ActorId
 * @text Actor
 * @desc Invalid if actor is not in members
 * @type actor
 * 
 * @command SetSubjectToEventByEventIdFromVariable
 * @text Set subject To Event (By Event ID From Variable)
 * @desc Set subject to event (by event ID from variable)
 * 
 * @arg VariableId
 * @text Variable
 * @desc Invalid if event ID from variable is not in map
 * @type variable
 * @default 
 * 
 * @command SetSubjectToFollowerByFollowerIdFromVariable
 * @text Set subject To Follower (By Follower ID From Variable)
 * @desc Set subject to event (by follower ID from variable)
 * 
 * @arg VariableId
 * @text Variable
 * @desc Invalid if follower ID from variable is not in map
 * @type variable
 * @default 
 * 
 * @command SetSubjectToFollowerByActorIdFromVariable
 * @text Set subject To Follower (By Actor From Variable)
 * @desc Set subject to follower (by actor from variable)
 * 
 * @arg VariableId
 * @text Variable
 * @desc Invalid if actor ID from variable is invalid or not in member
 * @type variable
 * @default 
 * 
 * @command ResetSubject
 * @text Reset Subject
 * @desc Reset subject (Same as "Set Subject To Event (Self)")
 * 
 * @help
 * # Important!
 *   - It only affects message window, other windows are not changed,
 *     You should design UI/UX additionally if you use this plugin.
 *  
 * # Publish by Timi License
 *   - Based on MIT license,
 *   - But you agree your games/works don't use illegal materials
 *     (theft, unauthorized used, violation of the authorization of others,
 *      or infringement of the rights of other materials authors)
 * 
 */

/*:zh-TW
 * @target MZ
 * @plugindesc Timi 氣泡對話系統
 * @author Timi (羊羽)
 * 
 * @param Dialog
 * @text 氣泡對話
 * 
 * @param Dialog.FontSize
 * @text 文字大小
 * @type number
 * @default 20
 * @parent Dialog
 * 
 * @param Dialog.FontColor
 * @text 文字顏色
 * @type text
 * @default #FFFFFF
 * @parent Dialog
 * 
 * @param Dialog.FontOutlineWidth
 * @text 文字邊框大小
 * @type number
 * @default 4
 * @parent Dialog
 * 
 * @param Dialog.FontOutlineColor
 * @text 文字邊框顏色
 * @type text
 * @default #000000
 * @parent Dialog
 * 
 * @param Dialog.WindowExpandingDirection
 * @text 視窗展開方向
 * @type select
 * @option 水平展開
 * @value Horizontal
 * @option 垂直展開
 * @value Vertical
 * @default Horizontal
 * @parent Dialog
 * 
 * @param Dialog.WindowExpandingSpeed
 * @text 視窗展開速度
 * @desc 數值越大越慢。以等比級數衰減。
 * @type number
 * @default 6
 * @parent Dialog
 * 
 * @param Dialog.WindowOpenThreshold
 * @text 視窗展開閾值
 * @desc 數值越大越慢完全開啟視窗。為 0 時瞬間開啟。
 * @type number
 * @max 255
 * @min 0
 * @default 253
 * @parent Dialog
 * 
 * @param Dialog.WindowCloseThreshold
 * @text 視窗關閉閾值
 * @desc 數值越小越慢完全關閉視窗。為 255 時瞬間關閉。
 * @type number
 * @max 255
 * @min 0
 * @default 2
 * @parent Dialog
 * 
 * @param Dialog.ContentsLineHeight
 * @text 內容行高
 * @type number
 * @default 2
 * @parent Dialog
 * 
 * @param Dialog.FaceImagePosition
 * @text 臉圖位置
 * @type select
 * @option 置於頂部
 * @value Top
 * @option 置中
 * @value Center
 * @option 置於底部
 * @value Bottom
 * @option 隱藏
 * @value Hidden
 * @default Center
 * @parent Dialog
 * 
 * @param Dialog.FaceImageSize
 * @text 臉圖大小
 * @type number
 * @default 72
 * @parent Dialog
 * 
 * @param Dialog.FaceImageSpacing
 * @text 臉圖邊距
 * @desc 臉圖與文字內容之間的距離
 * @type number
 * @default 20
 * @parent Dialog
 * 
 * @param Dialog.PauseSignDisplay
 * @text 視窗浮標顯示
 * @type boolean
 * @default true
 * @parent Dialog
 * 
 * @param Dialog.PauseSignRX
 * @text 視窗浮標 X 比例位置
 * @desc 設置視窗浮標 X 比例位置（以視窗左上角為原點、以寬度為比例）
 * @type number
 * @decimals 2
 * @default 0.5
 * @parent Dialog
 * 
 * @param Dialog.PauseSignRY
 * @text 視窗浮標 Y 比例位置
 * @desc 設置視窗浮標 Y 比例位置（以視窗左上角為原點、以高度為比例）
 * @type number
 * @decimals 2
 * @default 1.0
 * @parent Dialog
 * 
 * @param Dialog.OutputVariableID
 * @text 氣泡訊息輸出變數
 * @desc 氣泡訊息目標編號的輸出（用於 Timi 系統間的整合，若無目標則輸出 null。）
 * @type variable
 * @default 
 * @parent Dialog
 * 
 * @command SetWindowPositionByFixed
 * @text 設置視窗位置（固定值）
 * 
 * @arg WindowX
 * @text X 座標
 * @type number
 * @default 0
 * 
 * @arg WindowY
 * @text Y 座標
 * @type number
 * @default 0
 * 
 * @command SetWindowPositionByOffset
 * @text 設置視窗位置（相對值）
 * 
 * @arg WindowDX
 * @text X 偏移量
 * @type text
 * @default 0
 * 
 * @arg WindowDY
 * @text Y 偏移量
 * @type text
 * @default 0
 * 
 * @command SetWindowPositionByRatio
 * @text 設置視窗位置（依畫面比例）
 * @desc 本設置以氣泡訊息視窗中心為原點
 * 
 * @arg WindowRX
 * @text X 比例值
 * @type number
 * @decimals 2
 * @default 0.5
 * 
 * @arg WindowRY
 * @text Y 比例值
 * @type number
 * @decimals 2
 * @default 0.5
 * 
 * @command ResetWindowPosition
 * @text 重置視窗位置
 * 
 * @command SetWindowSizeByFixed
 * @text 設置視窗大小（固定值）
 * 
 * @arg WindowWidth
 * @text 視窗寬度
 * @desc 若留空將使用原先的計算數值
 * @type number
 * @default 
 * 
 * @arg WindowHeight
 * @text 視窗高度
 * @desc 若留空將使用原先的計算數值
 * @type number
 * @default 
 * 
 * @command SetWindowSizeByOffset
 * @text 設置視窗大小（相對值）
 * 
 * @arg WindowOffsetWidth
 * @text 視窗寬度增減
 * @type text
 * @default 0
 * 
 * @arg WindowOffsetHeight
 * @text 視窗高度增減
 * @type text
 * @default 0
 * 
 * @command SetWindowSizeByRatio
 * @text 設置視窗大小（畫面比例）
 * 
 * @arg WindowRatioWidth
 * @text 視窗寬度的畫面比例
 * @type number
 * @decimals 2
 * @default 0.5
 * 
 * @arg WindowRatioHeight
 * @text 視窗高度的畫面比例
 * @type number
 * @decimals 2
 * @default 0.5
 * 
 * @command ResetWindowSize
 * @text 重置視窗大小
 * 
 * @command SetSubjectToEventSelf
 * @text 設置對象（該事件）
 * 
 * @command SetSubjectToEventByEventId
 * @text 設置對象（依事件編號）
 * 
 * @arg EventId
 * @text 事件編號
 * @type number
 * @min 1
 * @default 
 * 
 * @command SetSubjectToPlayer
 * @text 設置對象（玩家）
 * 
 * @command SetSubjectToFollowerByFollowerId
 * @text 設置對象（依隊員序）
 * 
 * @arg FollowerId
 * @text 隊員序
 * @desc 玩家（隊員序為 0） 
 * @type number
 * @min 0
 * 
 * @command SetSubjectToFollowerByActorId
 * @text 設置對象（依角色）
 * 
 * @arg ActorId
 * @text 角色
 * @desc 若角色不在隊伍中則無效
 * @type actor
 * 
 * @command SetSubjectToEventByEventIdFromVariable
 * @text 設置對象（由變數指定事件編號）
 * 
 * @arg VariableId
 * @text 變數
 * @desc 若指定事件不在地圖上則無效
 * @type variable
 * @default 
 * 
 * @command SetSubjectToFollowerByFollowerIdFromVariable
 * @text 設置對象（由變數指定隊員序）
 * 
 * @arg VariableId
 * @text 變數
 * @desc 若指定隊員不在地圖上則無效
 * @type variable
 * @default 
 * 
 * @command SetSubjectToFollowerByActorIdFromVariable
 * @text 設置對象（由變數指定角色編號）
 * 
 * @arg VariableId
 * @text 變數
 * @desc 若指定角色不在地圖上則無效
 * @type variable
 * @default 
 * 
 * @command ResetSubject
 * @text 重置對象
 * @desc 效果相當於「設置對象（該事件）」
 * 
 * @help
 * # 重要！
 *   - 本插件只影響訊息視窗，其他相關視窗不受影響。
 *     如果您使用本插件，您應該設計額外的視窗以達到良好的效果。
 *  
 * # 由 Timi 授權條款發布
 *   - 基於 MIT 授權
 *   - 且您同意您的遊戲或作品不能使用非法素材
 *     （偷竊、未授權使用、侵害授權條款或其他侵害素材作者權益的行為）
 * 
 */
!function(){"use strict";var e="Timi_Dialog",i=PluginManager.parameters(e),r={PLUGIN_NAME:e,DIALOG:{FONT_SIZE:Number(i["Dialog.FontSize"]),FONT_COLOR:String(i["Dialog.FontColor"]),FONT_OUTLINE_WIDTH:Number(i["Dialog.FontOutlineWidth"]),FONT_OUTLINE_COLOR:String(i["Dialog.FontOutlineColor"]),WINDOW_EXPANDING_DIRECTION:String(i["Dialog.WindowExpandingDirection"]),WINDOW_EXPANDING_SPEED:Number(i["Dialog.WindowExpandingSpeed"]),WINDOW_OPEN_THRESHOLD:Number(i["Dialog.WindowOpenThreshold"]),WINDOW_CLOSE_THRESHOLD:Number(i["Dialog.WindowCloseThreshold"]),CONTENTS_LINE_HEIGHT:Number(i["Dialog.ContentsLineHeight"]),FACE_IMAGE_POSITION:Number(i["Dialog.FaceImagePosition"]),FACE_IMAGE_SIZE:Number(i["Dialog.FaceImageSize"]),FACE_IMAGE_SPACING:Number(i["Dialog.FaceImageSpacing"]),PAUSE_SIGN_DISPLAY:Boolean(i["Dialog.PauseSignDisplay"]),PAUSE_SIGN_RX:Number(i["Dialog.PauseSignRX"]),PAUSE_SIGN_RY:Number(i["Dialog.PauseSignRY"]),OUTPUT_VARIABLE_ID:Number(i["Dialog.OutputVariableID"])}};Bitmap.prototype.bltScale=function(e,i,t,n,a,o,s,l){this.context.save(),this.context.scale(l,l),this.blt(e,i,t,n,a,o/l,s/l),this.context.restore()},Object.defineProperty(Window.prototype,"openness",{get:function(){return this._openness},set:function(e){this._openness!==e&&(this._openness=e.clamp(0,255),"Horizontal"===r.DIALOG.WINDOW_EXPANDING_DIRECTION&&(this._container.scale.x=this._openness/255,this._container.x=this.width/2*(1-this._openness/255)),"Vertical"===r.DIALOG.WINDOW_EXPANDING_DIRECTION)&&(this._container.scale.y=this._openness/255,this._container.y=this.height/2*(1-this._openness/255))},configurable:!0}),Window.prototype.isOpen=function(){return Math.round(255-this._openness)<=0},Window.prototype.isClosed=function(){return Math.round(+this._openness)<=0};const t=Game_Interpreter.prototype.command101,n=(Game_Interpreter.prototype.command101=function(e){var i;return!$gameMessage.isBusy()&&(0<this._eventId&&!$gameMessage.hasSubject()&&(i=$gameMap.event(this._eventId),$gameMessage.setSubject(i)),t.call(this,e))},Game_Message.prototype.clear),a=(Game_Message.prototype.clear=function(){n.call(this),this._dialogSubject=null,this._dialogWindow={},this.resetWindowSize(),this.resetWindowPosition()},Game_Message.prototype.window=function(){return this._dialogWindow},Game_Message.prototype.setWindowFixedPosition=function(e,i){this._dialogWindow.x=e,this._dialogWindow.y=i,this._dialogWindow.dx=null,this._dialogWindow.dy=null,this._dialogWindow.rx=null,this._dialogWindow.ry=null},Game_Message.prototype.setWindowOffsetPosition=function(e,i){this._dialogWindow.x=null,this._dialogWindow.y=null,this._dialogWindow.dx=e,this._dialogWindow.dy=i,this._dialogWindow.rx=null,this._dialogWindow.ry=null},Game_Message.prototype.setWindowRatioPosition=function(e,i){this._dialogWindow.x=null,this._dialogWindow.y=null,this._dialogWindow.dx=null,this._dialogWindow.dy=null,this._dialogWindow.rx=e,this._dialogWindow.ry=i},Game_Message.prototype.resetWindowPosition=function(){this._dialogWindow.x=null,this._dialogWindow.y=null,this._dialogWindow.dx=null,this._dialogWindow.dy=null,this._dialogWindow.rx=null,this._dialogWindow.ry=null},Game_Message.prototype.setWindowFixedSize=function(e,i){this._dialogWindow.w=e,this._dialogWindow.h=i,this._dialogWindow.dw=null,this._dialogWindow.dh=null,this._dialogWindow.rw=null,this._dialogWindow.rh=null},Game_Message.prototype.setWindowOffsetSize=function(e,i){this._dialogWindow.w=null,this._dialogWindow.h=null,this._dialogWindow.dw=e,this._dialogWindow.dh=i,this._dialogWindow.rw=null,this._dialogWindow.rh=null},Game_Message.prototype.setWindowRatioSize=function(e,i){this._dialogWindow.w=null,this._dialogWindow.h=null,this._dialogWindow.dw=null,this._dialogWindow.dh=null,this._dialogWindow.rw=e,this._dialogWindow.rh=i},Game_Message.prototype.resetWindowSize=function(){this._dialogWindow.w=null,this._dialogWindow.h=null,this._dialogWindow.dw=null,this._dialogWindow.dh=null,this._dialogWindow.rw=null,this._dialogWindow.rh=null},Game_Message.prototype.subject=function(){return this._dialogSubject},Game_Message.prototype.setSubject=function(e){this._dialogSubject=e},Game_Message.prototype.hasSubject=function(){return!!this._dialogSubject},Game_Message.prototype.resetSubject=function(){this._dialogSubject=null},Window_Base.prototype.updateOpen=function(){this._opening&&(this.openness+=(255-this.openness)/Math.max(r.DIALOG.WINDOW_EXPANDING_SPEED,1),this.openness>r.DIALOG.WINDOW_OPEN_THRESHOLD&&(this.openness=255),this.opacity=this.openness,this.isOpen())&&(this._opening=!1)},Window_Base.prototype.updateClose=function(){this._closing&&(this.openness+=(0-this.openness)/Math.max(r.DIALOG.WINDOW_EXPANDING_SPEED,1),this.openness<r.DIALOG.WINDOW_CLOSE_THRESHOLD&&(this.openness=0),this.opacity=this.openness,this.isClosed())&&(this._closing=!1)},Window_Base.prototype.removeEscapeCode=function(e){return e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=e.replace(/\\/g,"")).replace(/\x1b\x1b/g,"\\")).replace(/\x1bV\[(\d+)\]/gi,"")).replace(/\x1bN\[(\d+)\]/gi,"")).replace(/\x1bP\[(\d+)\]/gi,"")).replace(/\x1bG/gi,"")).replace(/\x1bC\[(\d+)\]/gi,"")).replace(/\x1bI\[(\d+)\]/gi,"")).replace(/\x1b{/gi,"")).replace(/\x1b}/gi,"")).replace(/\x1bFS\[(\d+)\]/gi,"")).replace(/\x1bPX\[(\d+)\]/gi,"")).replace(/\x1bPY\[(\d+)\]/gi,"")).replace(/\x1b\$/gi,"")).replace(/\x1b\./gi,"")).replace(/\x1b\|/gi,"")).replace(/\x1b>/gi,"")).replace(/\x1b</gi,"")).replace(/\x1b\^/gi,"")},Window_Message.prototype.lineHeight=function(){return r.DIALOG.FONT_SIZE+r.DIALOG.CONTENTS_LINE_HEIGHT},Window_Message.prototype.resetFontSettings=function(){Window_Base.prototype.resetFontSettings.call(this),this.contents.fontFace=$gameSystem.mainFontFace(),this.contents.fontSize=r.DIALOG.FONT_SIZE,this.contents.textColor=r.DIALOG.FONT_COLOR,this.contents.outlineColor=r.DIALOG.FONT_OUTLINE_COLOR,this.contents.outlineWidth=r.DIALOG.FONT_OUTLINE_WIDTH},Window_Message.prototype.calcContentsWidth=function(e){return e.reduce((e,i)=>{i=this.removeEscapeCode(i),i=this.textWidth(i);return Math.max(Math.ceil(i),e)},0)},Window_Message.prototype.calcContentsHeight=function(e){return e.length*this.lineHeight()},Window_Message.prototype.updatePlacement),o=(Window_Message.prototype.updatePlacement=function(){a.call(this),this.updateSize(),this.updatePosition()},Window_Message.prototype.updateSize=function(){var e,i,t,n=$gameMessage.window(),a=$gameSystem.windowPadding();this._textState&&(i=""!==$gameMessage.faceName(),e=this._textState.text.split("\n"),i?(i=r.DIALOG.FACE_IMAGE_SIZE,t=r.DIALOG.FACE_IMAGE_SPACING,this.width=i+t+this.calcContentsWidth(e)+2*a,this.height=Math.max(i,this.calcContentsHeight(e))+2*a):(this.width=this.calcContentsWidth(e)+2*a,this.height=this.calcContentsHeight(e)+2*a)),this.width=null!==n.w?n.w+2*a:this.width,this.height=null!==n.h?n.h+2*a:this.height,this.width=null!==n.dw?this.width+n.dw:this.width,this.height=null!==n.dh?this.height+n.dh:this.height,this.width=null!==n.rw?Graphics.width*n.rw:this.width,this.height=null!==n.rh?Graphics.height*n.rh:this.height,this.width=Math.max(1,this.width),this.height=Math.max(1,this.height),this.createContents()},Window_Message.prototype.updatePosition=function(){var e=$gameMessage.window(),i=$gameMessage.subject(),t=this.width,n=this.height,a=$gameScreen.zoomScale(),o=$gameMap.tileHeight()*a,s=Math.round($gameScreen.zoomX()*(a-1)),l=Math.round($gameScreen.zoomY()*(a-1));this.x=i.screenX()*a-t/2-s,this.y=i.screenY()*a-o-n-l,this.x=(null!==e.x?e:this).x,this.y=(null!==e.y?e:this).y,this.x=null!==e.dx?this.x+e.dx:this.x,this.y=null!==e.dy?this.y+e.dy:this.y,this.x=null!==e.rx?Graphics.width*e.rx-t/2:this.x,this.y=null!==e.ry?Graphics.height*e.ry-n/2:this.y},Window_Message.prototype.drawMessageFace=function(){var e=r.DIALOG.FACE_IMAGE_SIZE,i=$gameMessage.faceName(),t=$gameMessage.faceIndex(),i=ImageManager.loadFace(i),n=$gameMessage.isRTL(),a=ImageManager.faceWidth,o=ImageManager.faceHeight,s=Math.floor(t%4*a),t=Math.floor(Math.floor(t/4)*o),n=n?this.innerWidth-width-4:4,l=(this.innerHeight-e)/2,e=e/Math.max(a,o);this.contents.bltScale(i,s,t,a,o,n,l,e)},Window_Message.prototype.newLineX=function(e){var i=""!==$gameMessage.faceName(),t=r.DIALOG.FACE_IMAGE_SIZE,n=r.DIALOG.FACE_IMAGE_SPACING,i=i?t+n:0;return e.rtl?this.innerWidth-i:i},Window_Message.prototype._refreshPauseSign),s=(Window_Message.prototype._refreshPauseSign=function(){o.call(this);var e=r.DIALOG.PAUSE_SIGN_RX,i=r.DIALOG.PAUSE_SIGN_RY;this._pauseSignSprite.move(this._width*e,this._height*i)},Window.prototype._updatePauseSign);Window_Message.prototype._updatePauseSign=function(){s.call(this),this._pauseSignSprite.visible=r.DIALOG.PAUSE_SIGN_DISPLAY},PluginManager.registerCommand(r.PLUGIN_NAME,"SetWindowPositionByFixed",function(e){var i=""!==e.WindowX?Number(e.WindowX):null,e=""!==e.WindowY?Number(e.WindowY):null;$gameMessage.setWindowFixedPosition(i,e)}),PluginManager.registerCommand(r.PLUGIN_NAME,"SetWindowPositionByOffset",function(e){var i=""!==e.WindowDX?Number(e.WindowDX):null,e=""!==e.WindowDY?Number(e.WindowDY):null;$gameMessage.setWindowOffsetPosition(i,e)}),PluginManager.registerCommand(r.PLUGIN_NAME,"SetWindowPositionByRatio",function(e){var i=""!==e.WindowRX?Number(e.WindowRX):null,e=""!==e.WindowRY?Number(e.WindowRY):null;$gameMessage.setWindowRatioPosition(i,e)}),PluginManager.registerCommand(r.PLUGIN_NAME,"ResetWindowPosition",function(e){$gameMessage.resetWindowPosition()}),PluginManager.registerCommand(r.PLUGIN_NAME,"SetWindowSizeByFixed",function(e){var i=""!==e.WindowWidth?Number(e.WindowWidth):null,e=""!==e.WindowHeight?Number(e.WindowHeight):null;$gameMessage.setWindowFixedSize(i,e)}),PluginManager.registerCommand(r.PLUGIN_NAME,"SetWindowSizeByOffset",function(e){var i=""!==e.WindowOffsetWidth?Number(e.WindowOffsetWidth):null,e=""!==e.WindowOffsetHeight?Number(e.WindowOffsetHeight):null;$gameMessage.setWindowOffsetSize(i,e)}),PluginManager.registerCommand(r.PLUGIN_NAME,"SetWindowSizeByRatio",function(e){var i=""!==e.WindowRatioWidth?Number(e.WindowRatioWidth):null,e=""!==e.WindowRatioHeight?Number(e.WindowRatioHeight):null;$gameMessage.setWindowRatioSize(i,e)}),PluginManager.registerCommand(r.PLUGIN_NAME,"ResetWindowSize",function(e){$gameMessage.resetWindowSize()}),PluginManager.registerCommand(r.PLUGIN_NAME,"SetSubjectToEventSelf",function(e){var i=this.eventId(),t=$gameMap.event(i);t?($gameMessage.setSubject(t),$gameVariables.setValue(r.DIALOG.OUTPUT_VARIABLE_ID,i)):($gameMessage.resetSubject(),$gameVariables.setValue(r.DIALOG.OUTPUT_VARIABLE_ID,null))}),PluginManager.registerCommand(r.PLUGIN_NAME,"SetSubjectToEventByEventId",function(e){var e=Number(e.EventId),i=$gameMap.event(e);i?($gameMessage.setSubject(i),$gameVariables.setValue(r.DIALOG.OUTPUT_VARIABLE_ID,e)):($gameMessage.resetSubject(),$gameVariables.setValue(r.DIALOG.OUTPUT_VARIABLE_ID,null))}),PluginManager.registerCommand(r.PLUGIN_NAME,"SetSubjectToPlayer",function(e){var i=$gamePlayer;$gameMessage.setSubject(i),$gameVariables.setValue(r.DIALOG.OUTPUT_VARIABLE_ID,0)}),PluginManager.registerCommand(r.PLUGIN_NAME,"SetSubjectToFollowerByFollowerId",function(e){var e=Number(e.FollowerId),i=0===e?$gamePlayer:$gamePlayer.followers().follower(e-1);i?($gameMessage.setSubject(i),$gameVariables.setValue(r.DIALOG.OUTPUT_VARIABLE_ID,e)):($gameMessage.resetSubject(),$gameVariables.setValue(r.DIALOG.OUTPUT_VARIABLE_ID,null))}),PluginManager.registerCommand(r.PLUGIN_NAME,"SetSubjectToFollowerByActorId",function(e){const i=Number(e.ActorId);var e=$gameParty.members().findIndex(e=>e.actorId()===i),t=0===e?$gamePlayer:$gamePlayer.followers().follower(e-1);t?($gameMessage.setSubject(t),$gameVariables.setValue(r.DIALOG.OUTPUT_VARIABLE_ID,e)):($gameMessage.resetSubject(),$gameVariables.setValue(r.DIALOG.OUTPUT_VARIABLE_ID,null))}),PluginManager.registerCommand(r.PLUGIN_NAME,"SetSubjectToEventByEventIdFromVariable",function(e){var e=Number(e.VariableId),e=Number($gameVariables.value(e)),i=$gameMap.event(e);i?($gameMessage.setSubject(i),$gameVariables.setValue(r.DIALOG.OUTPUT_VARIABLE_ID,e)):($gameMessage.resetSubject(),$gameVariables.setValue(r.DIALOG.OUTPUT_VARIABLE_ID,null))}),PluginManager.registerCommand(r.PLUGIN_NAME,"SetSubjectToFollowerByFollowerIdFromVariable",function(e){var e=Number(e.VariableId),e=Number($gameVariables.value(e)),i=0===e?$gamePlayer:$gamePlayer.followers().follower(e-1);i?($gameMessage.setSubject(i),$gameVariables.setValue(r.DIALOG.OUTPUT_VARIABLE_ID,e)):($gameMessage.resetSubject(),$gameVariables.setValue(r.DIALOG.OUTPUT_VARIABLE_ID,null))}),PluginManager.registerCommand(r.PLUGIN_NAME,"SetSubjectToFollowerByActorIdFromVariable",function(e){e=Number(e.VariableId);const i=Number($gameVariables.value(e));var e=$gameParty.members().findIndex(e=>e.actorId()===i),t=0===e?$gamePlayer:$gamePlayer.followers().follower(e-1);t?($gameMessage.setSubject(t),$gameVariables.setValue(r.DIALOG.OUTPUT_VARIABLE_ID,e)):($gameMessage.resetSubject(),$gameVariables.setValue(r.DIALOG.OUTPUT_VARIABLE_ID,null))}),PluginManager.registerCommand(r.PLUGIN_NAME,"ResetSubject",function(e){$gameMessage.resetSubject(),$gameVariables.setValue(r.DIALOG.OUTPUT_VARIABLE_ID,null)})}();

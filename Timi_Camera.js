//=============================================================================
// Timi Camera
//=============================================================================

/*:
 * @target MZ
 * @plugindesc Timi camera system 
 * @author Timi (羊羽)
 * 
 * @param Camera
 * @text Camera
 * 
 * @param Camera.ShackType
 * @text Camera Shack Type
 * @type select
 * @option Horizontal
 * @option Vertical
 * @default Horizontal
 * @parent Camera
 * 
 * @param Camera.StoryModeResolution
 * @text Camera Story Mode Resolution
 * @type select
 * @option 1.85
 * @option 2.35
 * @default 1.85
 * @parent Camera
 * 
 * @param Camera.OutputVariableID
 * @text Camera Output Variable ID
 * @desc Camera output focus subject ID to variable (for Timi system integration, null if no output)
 * @type variable
 * @default 
 * @parent Camera
 * 
 * @command FocusEventSelf
 * @text Focus Event (Self)
 * @desc Camera move and focus to event (self)
 * 
 * @arg Zoom
 * @text Zoom
 * @desc Scaling rate
 * @type number
 * @decimals 1
 * @default 2
 * 
 * @arg Duration
 * @text Duration
 * @desc Focusing duration
 * @type number
 * @default 60
 * 
 * @arg Wait
 * @text Wait
 * @desc Wait focugin to target
 * @type boolean
 * @default true
 * 
 * @command FocusEventByEventId
 * @text Focus Event (By Event ID)
 * @desc Camera move and focus to event (by event ID)
 * 
 * @arg EventId
 * @text Event ID
 * @type number
 * @min 1
 * 
 * @arg Zoom
 * @text Zoom
 * @desc Scaling rate
 * @type number
 * @decimals 1
 * @default 2
 * 
 * @arg Duration
 * @text Duration
 * @desc Focusing duration
 * @type number
 * @default 60
 * 
 * @arg Wait
 * @text Wait
 * @desc Wait focugin to target
 * @type boolean
 * @default true
 * 
 * @command FocusPlayer
 * @text Focus Player
 * @desc Camera move and focus to player
 * 
 * @arg Zoom
 * @text Zoom
 * @desc Scaling rate
 * @type number
 * @decimals 1
 * @default 2
 * 
 * @arg Duration
 * @text Duration
 * @desc Focusing duration
 * @type number
 * @default 60
 * 
 * @arg Wait
 * @text Wait
 * @desc Wait focugin to target
 * @type boolean
 * @default true
 * 
 * @command FocusFollowerByFollowerId
 * @text Focus Follower (By Follower ID)
 * @desc Camera move and focus to follower (by follower ID)
 * 
 * @arg FollowerId
 * @text Follower ID
 * @desc Player (Follower ID = 0) 
 * @type number
 * @min 0
 * 
 * @arg Zoom
 * @text Zoom
 * @desc Scaling rate
 * @type number
 * @decimals 1
 * @default 2
 * 
 * @arg Duration
 * @text Duration
 * @desc Focusing duration
 * @type number
 * @default 60
 * 
 * @arg Wait
 * @text Wait
 * @desc Wait focugin to target
 * @type boolean
 * @default true
 * 
 * @command FocusFollowerByActorId
 * @text Focus Follower (By Actor) 
 * @desc Camera move and focus to follower (by actor)
 * 
 * @arg ActorId
 * @text Actor
 * @desc Invalid if actor is not in members
 * @type actor
 * 
 * @arg Zoom
 * @text Zoom
 * @desc Scaling rate
 * @type number
 * @decimals 1
 * @default 2
 * 
 * @arg Duration
 * @text Duration
 * @desc Focusing duration
 * @type number
 * @default 60
 * 
 * @arg Wait
 * @text Wait
 * @desc Wait focugin to target
 * @type boolean
 * @default true
 * 
 * @command FocusEventByEventIdFromVariable
 * @text Focus Event (By Evnet ID From Variable) 
 * @desc Camera move and focus to event (by event ID from variable)
 * 
 * @arg VariableId
 * @text Variable
 * @desc Invalid if event ID from variable is not in map
 * @type variable
 * @default 
 * 
 * @arg Zoom
 * @text Zoom
 * @desc Scaling rate
 * @type number
 * @decimals 1
 * @default 2
 * 
 * @arg Duration
 * @text Duration
 * @desc Focusing duration
 * @type number
 * @default 60
 * 
 * @arg Wait
 * @text Wait
 * @desc Wait focugin to target
 * @type boolean
 * @default true
 * 
 * @command FocusFollowerByFollowerIdFromVariable
 * @text Focus Follower (By Follower ID From Variable) 
 * @desc Camera move and focus to follower (by follower ID from variable)
 * 
 * @arg VariableId
 * @text Variable
 * @desc Invalid if follower ID from variable is not in map
 * @type variable
 * @default 
 * 
 * @arg Zoom
 * @text Zoom
 * @desc Scaling rate
 * @type number
 * @decimals 1
 * @default 2
 * 
 * @arg Duration
 * @text Duration
 * @desc Focusing duration
 * @type number
 * @default 60
 * 
 * @arg Wait
 * @text Wait
 * @desc Wait focugin to target
 * @type boolean
 * @default true
 * 
 * @command FocusFollowerByActorIdFromVariable
 * @text Focus Follower (By Actor ID From Variable) 
 * @desc Camera move and focus to follower (by actor ID from variable)
 * 
 * @arg VariableId
 * @text Variable
 * @desc Invalid if actor ID from variable is invalid or not in member
 * @type variable
 * @default 
 * 
 * @arg Zoom
 * @text Zoom
 * @desc Scaling rate
 * @type number
 * @decimals 1
 * @default 2
 * 
 * @arg Duration
 * @text Duration
 * @desc Focusing duration
 * @type number
 * @default 60
 * 
 * @arg Wait
 * @text Wait
 * @desc Wait focugin to target
 * @type boolean
 * @default true
 * 
 * @command FocusClear
 * @text Focus Clear
 * @desc Camera move and focus to origin
 * 
 * @arg Duration
 * @text Duration
 * @desc Focusing duration
 * @type number
 * @default 60
 * 
 * @arg Wait
 * @text Wait
 * @desc Wait focugin to target
 * @type boolean
 * @default true
 * 
 * @command StartStoryMode
 * @text Start Story Mode
 * @desc Make camera using movie resolution
 * 
 * @arg Duration
 * @text Duration
 * @desc Focusing duration
 * @type number
 * @default 30
 * 
 * @arg Wait
 * @text Wait
 * @desc Wait focugin to target
 * @type boolean
 * @default true
 * 
 * @command EndStoryMode
 * @text End Story Mode
 * @desc Make camera using game resolution
 * 
 * @arg Duration
 * @text Duration
 * @desc Focusing duration
 * @type number
 * @default 30
 * 
 * @arg Wait
 * @text Wait
 * @desc Wait focugin to target
 * @type boolean
 * @default true
 * 
 * @help 
 * # Publish by Timi License
 *   - Based on MIT license,
 *   - But you agree your games/works don't use illegal materials
 *     (theft, unauthorized used, violation of the authorization of others,
 *      or infringement of the rights of other materials authors)
 * 
 */

/*:zh-TW
 * @target MZ
 * @plugindesc Timi 鏡頭系統 
 * @author Timi (羊羽)
 * 
 * @param Camera
 * @text 鏡頭系統
 * 
 * @param Camera.ShackType
 * @text 鏡頭搖晃類型
 * @type select
 * @option 水平搖晃
 * @value Horizontal
 * @option 垂直搖晃
 * @value Vertical
 * @default 水平搖晃
 * @parent Camera
 * 
 * @param Camera.StoryModeResolution
 * @text 鏡頭故事模式模擬解析度
 * @type select
 * @option 1.85
 * @option 2.35 
 * @default 1.85
 * @parent Camera
 * 
 * @param Camera.OutputVariableID
 * @text 鏡頭輸出變數編號
 * @desc 鏡頭系統輸出關注的目標對象編號到變數（用於 Timi 系統間的整合。若無目標則輸出 null。）
 * @type variable
 * @default 
 * @parent Camera
 * 
 * @command FocusEventSelf
 * @text 聚焦事件（該事件）
 * 
 * @arg Zoom
 * @text 放大率
 * @type number
 * @decimals 1
 * @default 2
 * 
 * @arg Duration
 * @text 持續時間
 * @type number
 * @default 60
 * 
 * @arg Wait
 * @text 等待完成
 * @type boolean
 * @default true
 * 
 * @command FocusEventByEventId
 * @text 聚焦事件（依事件編號）
 * 
 * @arg EventId
 * @text 事件編號
 * @type number
 * @min 1
 * 
 * @arg Zoom
 * @text 放大率
 * @type number
 * @decimals 1
 * @default 2
 * 
 * @arg Duration
 * @text 持續時間
 * @type number
 * @default 60
 * 
 * @arg Wait
 * @text 等待完成
 * @type boolean
 * @default true
 * 
 * @command FocusPlayer
 * @text 聚焦玩家
 * 
 * @arg Zoom
 * @text 放大率
 * @type number
 * @decimals 1
 * @default 2
 * 
 * @arg Duration
 * @text 持續時間
 * @type number
 * @default 60
 * 
 * @arg Wait
 * @text 等待完成
 * @type boolean
 * @default true
 * 
 * @command FocusFollowerByFollowerId
 * @text 聚焦跟隨者（依隊員序）
 * 
 * @arg FollowerId
 * @text 隊員序
 * @desc 玩家（隊員序為 0） 
 * @type number
 * @min 0
 * 
 * @arg Zoom
 * @text 放大率
 * @type number
 * @decimals 1
 * @default 2
 * 
 * @arg Duration
 * @text 持續時間
 * @type number
 * @default 60
 * 
 * @arg Wait
 * @text 等待完成
 * @type boolean
 * @default true
 * 
 * @command FocusFollowerByActorId
 * @text 聚焦跟隨者（依角色）
 * 
 * @arg ActorId
 * @text 角色
 * @desc 若角色不在隊伍中則無效
 * @type actor
 * 
 * @arg Zoom
 * @text 放大率
 * @type number
 * @decimals 1
 * @default 2
 * 
 * @arg Duration
 * @text 持續時間
 * @type number
 * @default 60
 * 
 * @arg Wait
 * @text 等待完成
 * @type boolean
 * @default true
 * 
 * @command FocusEventByEventIdFromVariable
 * @text 聚焦事件（由變數指定事件編號） 
 * 
 * @arg VariableId
 * @text 變數
 * @desc 若指定的事件編號不在地圖上則無效
 * @type variable
 * @default 
 * 
 * @arg Zoom
 * @text 放大率
 * @type number
 * @decimals 1
 * @default 2
 * 
 * @arg Duration
 * @text 持續時間
 * @type number
 * @default 60
 * 
 * @arg Wait
 * @text 等待完成
 * @type boolean
 * @default true
 * 
 * @command FocusFollowerByFollowerIdFromVariable
 * @text 聚焦跟隨者（由變數指定隊員序） 
 * 
 * @arg VariableId
 * @text 變數
 * @desc 若指定的隊員序不在地圖上則無效
 * @type variable
 * @default 
 * 
 * @arg Zoom
 * @text 放大率
 * @type number
 * @decimals 1
 * @default 2
 * 
 * @arg Duration
 * @text 持續時間
 * @type number
 * @default 60
 * 
 * @arg Wait
 * @text 等待完成
 * @type boolean
 * @default true
 * 
 * @command FocusFollowerByActorIdFromVariable
 * @text 聚焦跟隨者（由變數指定角色編號） 
 * 
 * @arg VariableId
 * @text 變數
 * @desc 若指定的角色不在地圖上或不在隊伍中則無效
 * @type variable
 * @default 
 * 
 * @arg Zoom
 * @text 放大率
 * @type number
 * @decimals 1
 * @default 2
 * 
 * @arg Duration
 * @text 持續時間
 * @type number
 * @default 60
 * 
 * @arg Wait
 * @text 等待完成
 * @type boolean
 * @default true
 * 
 * @command FocusClear
 * @text 清除聚焦
 * 
 * @arg Duration
 * @text 持續時間
 * @type number
 * @default 60
 * 
 * @arg Wait
 * @text 等待完成
 * @type boolean
 * @default true
 * 
 * @command StartStoryMode
 * @text 開始故事模式
 * 
 * @arg Duration
 * @text 持續時間
 * @type number
 * @default 30
 * 
 * @arg Wait
 * @text 等待完成
 * @type boolean
 * @default true
 * 
 * @command EndStoryMode
 * @text 結束故事模式
 * 
 * @arg Duration
 * @text 持續時間
 * @type number
 * @default 30
 * 
 * @arg Wait
 * @text 等待完成
 * @type boolean
 * @default true
 * 
 * @help 
 * # 由 Timi 授權條款發布
 *   - 基於 MIT 授權
 *   - 且您同意您的遊戲或作品不能使用非法素材
 *     （偷竊、未授權使用、侵害授權條款或其他侵害素材作者權益的行為）
 * 
 */
!function(){"use strict";var e="Timi_Camera",t=PluginManager.parameters(e),n={PLUGIN_NAME:e,CAMERA:{SHACK_TYPE:String(t["Camera.ShackType"]),STORY_MODE_RESOLUTION:Number(t["Camera.StoryModeResolution"]),OUTPUT_VARIABLE_ID:Number(t["Camera.OutputVariableID"])}};Game_Screen.prototype.clearZoom=function(){this._zoomX=0,this._zoomY=0,this._zoomScale=1,this._zoomXTarget=0,this._zoomYTarget=0,this._zoomScaleTarget=1,this._zoomDuration=0},Game_Screen.prototype.startZoom=function(e,t,a,o){this._zoomXTarget=e,this._zoomYTarget=t,this._zoomScaleTarget=a,this._zoomDuration=o},Game_Screen.prototype.updateZoom=function(){var e;0<this._zoomDuration&&(e=this._zoomDuration,this._zoomX=this._zoomX*(e-1)/e+this._zoomXTarget/e,this._zoomY=this._zoomY*(e-1)/e+this._zoomYTarget/e,this._zoomScale=(this._zoomScale*(e-1)+this._zoomScaleTarget)/e,this._zoomDuration--)},Game_Screen.prototype.isZooming=function(){return 0<this._zoomDuration};const a=Game_Screen.prototype.clear,o=(Game_Screen.prototype.clear=function(){a.call(this),this.clearStoryMode()},Game_Screen.prototype.update),r=(Game_Screen.prototype.update=function(){o.call(this),this.updateStoryMode()},Game_Screen.prototype.clearStoryMode=function(){this._storyMode=0,this._storyModeTarget=0,this._storyDuration=0},Game_Screen.prototype.startStoryMode=function(e){this._storyModeTarget=1,this._storyDuration=e},Game_Screen.prototype.endStoryMode=function(e){this._storyModeTarget=0,this._storyDuration=e},Game_Screen.prototype.updateStoryMode=function(){var e;0<this._storyDuration&&(e=this._storyDuration,this._storyMode=this._storyMode*(e-1)/e+this._storyModeTarget/e,this._storyDuration--)},Game_Screen.prototype.isStoryModing=function(){return 0<this._storyDuration},Game_Screen.prototype.storyMaskHeight=function(){var e=n.CAMERA.STORY_MODE_RESOLUTION,t=Graphics.width,a=Graphics.height;return Math.round((a-t/e)/2)},Game_Screen.prototype.storyMaskOpacity=function(){return 255*this._storyMode},Game_Screen.prototype.storyMaskScale=function(){return 1/$gameScreen.zoomScale()},Game_Screen.prototype.storyMaskTopY=function(){var e=this.storyMaskHeight(),t=$gameScreen.zoomScale(),a=Graphics.height;return e*(this._storyMode-1)/t+(a*t-a)/(2*t)},Game_Screen.prototype.storyMaskBottomY=function(){var e=this.storyMaskHeight(),t=$gameScreen.zoomScale(),a=Graphics.height;return a-e*this._storyMode/t-(a*t-a)/(2*t)},Game_Map.prototype.initialize),i=(Game_Map.prototype.initialize=function(){r.call(this),this._displayTargetX=0,this._displayTargetY=0,this._focusDuration=0},Game_Map.prototype.startFocus=function(e,t,a){this._displayTargetX=e-this.screenTileX()/2+.5,this._displayTargetY=t-this.screenTileY()/2+.5,this._focusDuration=a},Game_Map.prototype.processFocusOverScreen=function(){var e=this._displayTargetX,t=this._displayTargetY,a=$gameScreen.zoomScale(),o=$gameMap.width(),r=$gameMap.height();this._displayTargetX=e.clamp(0,e+o/a/2),this._displayTargetY=t.clamp(0,t+r/a/2)},Game_Map.prototype.update),s=(Game_Map.prototype.update=function(e){i.call(this,e),this.updateFocus()},Game_Map.prototype.updateFocus=function(){var e;0<this._focusDuration&&(e=this._focusDuration,this._displayX=(this._displayX*(e-1)+this._displayTargetX)/e,this._displayY=(this._displayY*(e-1)+this._displayTargetY)/e,this._focusDuration--)},Game_Interpreter.prototype.updateWaitMode);Game_Interpreter.prototype.updateWaitMode=function(){let e=!1;return"camera"===this._waitMode&&(e=$gameMap.isScrolling()||$gameScreen.isZooming()),"storyMode"===this._waitMode&&(e=$gameScreen.isStoryModing()),e||=s.call(this)};let l=Spriteset_Map.prototype.createUpperLayer,m=(Spriteset_Map.prototype.createUpperLayer=function(){l.call(this),this.createStoryMask()},Spriteset_Map.prototype.createStoryMask=function(){var e=Graphics.width,t=$gameScreen.storyMaskHeight(),e=new Bitmap(e,t);e.fillAll("black"),this._storyMaskTop=new Sprite(e),this._storyMaskBottom=new Sprite(e),this.addChild(this._storyMaskTop),this.addChild(this._storyMaskBottom)},Spriteset_Map.prototype.update);Spriteset_Map.prototype.update=function(){m.call(this),this.updateStoryMask()},Spriteset_Map.prototype.updateStoryMask=function(){this._storyMaskTop.y=$gameScreen.storyMaskTopY(),this._storyMaskTop.opacity=$gameScreen.storyMaskOpacity(),this._storyMaskTop.scale.y=$gameScreen.storyMaskScale(),this._storyMaskBottom.y=$gameScreen.storyMaskBottomY(),this._storyMaskBottom.opacity=$gameScreen.storyMaskOpacity(),this._storyMaskBottom.scale.y=$gameScreen.storyMaskScale()},Spriteset_Map.prototype.updatePosition=function(){this.scale.x=$gameScreen.zoomScale(),this.scale.y=$gameScreen.zoomScale(),this.x=-$gameScreen.zoomX(),this.y=-$gameScreen.zoomY(),"Horizontal"===n.CAMERA.SHACK_TYPE&&(this.x+=Math.round($gameScreen.shake())),"Vertical"===n.CAMERA.SHACK_TYPE&&(this.y+=Math.round($gameScreen.shake()))};function u(e,t,a,o,r){var i=(Graphics.width*a-Graphics.width)/2,s=(Graphics.height*a-Graphics.height)/2;r&&this.setWaitMode("camera"),$gameScreen.startZoom(i,s,a,o),$gameMap.startFocus(e,t,o)}PluginManager.registerCommand(n.PLUGIN_NAME,"FocusEventSelf",function(e){var t,a,o,r=this.eventId(),i=$gameMap.event(r);i?(t=i.x,i=i.y,a=Number(e.Zoom),o=Number(e.Duration),e=Boolean("true"===e.Wait),$gameVariables.setValue(n.CAMERA.OUTPUT_VARIABLE_ID,r),u.call(this,t,i,a,o,e)):$gameVariables.setValue(n.CAMERA.OUTPUT_VARIABLE_ID,null)}),PluginManager.registerCommand(n.PLUGIN_NAME,"FocusEventByEventId",function(e){var t,a,o,r=Number(e.EventId),i=$gameMap.event(r);i?(t=i.x,i=i.y,a=Number(e.Zoom),o=Number(e.Duration),e=Boolean("true"===e.Wait),$gameVariables.setValue(n.CAMERA.OUTPUT_VARIABLE_ID,r),u.call(this,t,i,a,o,e)):$gameVariables.setValue(n.CAMERA.OUTPUT_VARIABLE_ID,null)}),PluginManager.registerCommand(n.PLUGIN_NAME,"FocusPlayer",function(e){var t=$gamePlayer,a=t.x,t=t.y,o=Number(e.Zoom),r=Number(e.Duration),e=Boolean("true"===e.Wait);$gameVariables.setValue(n.CAMERA.OUTPUT_VARIABLE_ID,0),u.call(this,a,t,o,r,e)}),PluginManager.registerCommand(n.PLUGIN_NAME,"FocusFollowerByFollowerId",function(e){var t,a,o,r=Number(e.FollowerId),i=0===r?$gamePlayer:$gamePlayer.followers().follower(r-1);i?(t=i.x,i=i.y,a=Number(e.Zoom),o=Number(e.Duration),e=Boolean("true"===e.Wait),$gameVariables.setValue(n.CAMERA.OUTPUT_VARIABLE_ID,r),u.call(this,t,i,a,o,e)):$gameVariables.setValue(n.CAMERA.OUTPUT_VARIABLE_ID,null)}),PluginManager.registerCommand(n.PLUGIN_NAME,"FocusFollowerByActorId",function(e){const t=Number(e.ActorId);var a,o,r,i=$gameParty.members().findIndex(e=>e.actorId()===t),s=0===i?$gamePlayer:$gamePlayer.followers().follower(i-1);s?(a=s.x,s=s.y,o=Number(e.Zoom),r=Number(e.Duration),e=Boolean("true"===e.Wait),$gameVariables.setValue(n.CAMERA.OUTPUT_VARIABLE_ID,i),u.call(this,a,s,o,r,e)):$gameVariables.setValue(n.CAMERA.OUTPUT_VARIABLE_ID,null)}),PluginManager.registerCommand(n.PLUGIN_NAME,"FocusEventByEventIdFromVariable",function(e){var t,a,o,r=Number(e.VariableId),r=Number($gameVariables.value(r)),i=$gameMap.event(r);i?(t=i.x,i=i.y,a=Number(e.Zoom),o=Number(e.Duration),e=Boolean("true"===e.Wait),$gameVariables.setValue(n.CAMERA.OUTPUT_VARIABLE_ID,r),u.call(this,t,i,a,o,e)):$gameVariables.setValue(n.CAMERA.OUTPUT_VARIABLE_ID,null)}),PluginManager.registerCommand(n.PLUGIN_NAME,"FocusFollowerByFollowerIdFromVariable",function(e){var t,a,o,r=Number(e.VariableId),r=Number($gameVariables.value(r)),i=0===r?$gamePlayer:$gamePlayer.followers().follower(r-1);i?(t=i.x,i=i.y,a=Number(e.Zoom),o=Number(e.Duration),e=Boolean("true"===e.Wait),$gameVariables.setValue(n.CAMERA.OUTPUT_VARIABLE_ID,r),u.call(this,t,i,a,o,e)):$gameVariables.setValue(n.CAMERA.OUTPUT_VARIABLE_ID,null)}),PluginManager.registerCommand(n.PLUGIN_NAME,"FocusFollowerByActorIdFromVariable",function(e){var t=Number(e.VariableId);const a=Number($gameVariables.value(t));var o,r,i,t=$gameParty.members().findIndex(e=>e.actorId()===a),s=0===t?$gamePlayer:$gamePlayer.followers().follower(t-1);s?(o=s.x,s=s.y,r=Number(e.Zoom),i=Number(e.Duration),e=Boolean("true"===e.Wait),$gameVariables.setValue(n.CAMERA.OUTPUT_VARIABLE_ID,t),u.call(this,o,s,r,i,e)):$gameVariables.setValue(n.CAMERA.OUTPUT_VARIABLE_ID,null)}),PluginManager.registerCommand(n.PLUGIN_NAME,"FocusClear",function(e){var t=$gamePlayer.x,a=$gamePlayer.y,o=Number(e.Duration),e=Boolean("true"===e.Wait);$gameVariables.setValue(n.CAMERA.OUTPUT_VARIABLE_ID,null),u.call(this,t,a,1,o,e)}),PluginManager.registerCommand(n.PLUGIN_NAME,"StartStoryMode",function(e){var t=Number(e.Duration);Boolean("true"===e.Wait)&&this.setWaitMode("storyMode"),$gameScreen.startStoryMode(t)}),PluginManager.registerCommand(n.PLUGIN_NAME,"EndStoryMode",function(e){var t=Number(e.Duration);Boolean("true"===e.Wait)&&this.setWaitMode("storyMode"),$gameScreen.endStoryMode(t)})}();

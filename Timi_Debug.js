//=============================================================================
// Timi Debug
//=============================================================================

/*:
 * @target MZ
 * @plugindesc Timi debugging mode 
 * @author Timi (羊羽)
 * @url https://www.tinytsunami.info
 * 
 * @help 
 * # Developer FPS Control
 *   - F10: Slow down x2
 *   - F11: Speed up x2
 * 
 * # Other Function
 *   - Remove window.blur pause game feature
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
 * @plugindesc Timi 除錯模式 
 * @author Timi (羊羽)
 * @url https://www.tinytsunami.info
 * 
 * @help 
 * # 開發 FPS 控制
 *   - F10: 降低速度 x2
 *   - F11: 提升速度 x2
 * 
 * # 其他功能
 *   - 移除使用者不關注視窗時，視窗將暫停更新的特徵
 * 
 * # 由 Timi 授權條款發布
 *   - 基於 MIT 授權
 *   - 且您同意您的遊戲或作品不能使用非法素材
 *     （偷竊、未授權使用、侵害授權條款或其他侵害素材作者權益的行為）
 * 
 */
!function(){"use strict";var e="Timi_Debug";PluginManager.parameters(e);function n(){return $gameTemp&&$gameTemp.isPlaytest()}SceneManager._speed=1;const a=SceneManager.isGameActive,t=(SceneManager.isGameActive=function(){return!!n()||a.call(this)},SceneManager.onKeyDown);SceneManager.onKeyDown=function(e){if(t.call(this,e),n()&&!e.ctrlKey&&!e.altKey)switch(e.keyCode){case 121:SceneManager._speed/=2,console.log("Set FPS x "+SceneManager._speed);break;case 122:SceneManager._speed*=2,console.log("Set FPS x "+SceneManager._speed)}},SceneManager.update=function(e){try{var n=this.determineRepeatNumber(e)*this._speed;for(let e=0;e<n;e++)this.updateMain()}catch(e){this.catchException(e)}},PluginManager.registerCommand(e,"do_nothing",e=>{})}();

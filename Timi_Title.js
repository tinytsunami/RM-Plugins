//=============================================================================
// Timi Title
//=============================================================================

/*:
 * @target MZ
 * @plugindesc Timi simply title scene
 * @author Timi (羊羽)
 * @url https://www.tinytsunami.info
 * 
 * @param Title
 * @text Title
 * 
 * @param Title.Jump
 * @text Set Jumpping Title
 * @type select
 * @option None
 * @option First
 * @option Always
 * @default None
 * @parent Title
 * 
 * @param Title.ShowContinue
 * @text Set Continue Option
 * @type select
 * @option Hidden
 * @option IfExist
 * @option Display
 * @default Display
 * @parent Title
 * 
 * @param Title.ShowOption
 * @text Set Setting Option
 * @type select
 * @option Hidden
 * @option Display
 * @default Display
 * @parent Title
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
 * @plugindesc Timi 簡易標題畫面
 * @author Timi (羊羽)
 * @url https://www.tinytsunami.info
 * 
 * @param Title
 * @text 標題畫面
 * 
 * @param Title.Jump
 * @text 跳過標題畫面
 * @type select
 * @option 不跳過
 * @value None
 * @option 首次遊戲跳過
 * @value First
 * @option 總是跳過
 * @value Always
 * @default None
 * @parent Title
 * 
 * @param Title.ShowContinue
 * @text 繼續遊戲選項
 * @type select
 * @option 隱藏
 * @value Hidden
 * @option 如果存在則顯示
 * @value IfExist
 * @option 總是顯示
 * @value Display
 * @default Display
 * @parent Title
 * 
 * @param Title.ShowOption
 * @text 設定遊戲選項
 * @type select
 * @option 隱藏
 * @value Hidden
 * @option 顯示
 * @value Display
 * @default Display
 * @parent Title
 *  
 * @help 
 * # 由 Timi 授權條款發布
 *   - 基於 MIT 授權
 *   - 且您同意您的遊戲或作品不能使用非法素材
 *     （偷竊、未授權使用、侵害授權條款或其他侵害素材作者權益的行為）
 * 
 */
!function(){"use strict";var t="Timi_Title",t=PluginManager.parameters(t),e={JUMP:String(t["Title.Jump"]),SHOW_CONTINUE:String(t["Title.ShowContinue"]),SHOW_OPTION:String(t["Title.ShowOption"])};Scene_Boot.prototype.startNormalGame=function(){this.checkPlayerLocation(),DataManager.setupNewGame(),"First"===e.JUMP?DataManager.isAnySavefileExists()?(SceneManager.goto(Scene_Title),Window_TitleCommand.initCommandPosition()):(this.startFadeOut(1),SceneManager.goto(Scene_Map)):"Always"===e.JUMP?(this.startFadeOut(1),SceneManager.goto(Scene_Map)):(SceneManager.goto(Scene_Title),Window_TitleCommand.initCommandPosition())},Scene_Title.prototype.commandWindowRows=function(){let t=1;return("Display"===e.SHOW_CONTINUE||"IfExist"===e.SHOW_CONTINUE&&Window_TitleCommand.prototype.isContinueEnabled.call(this))&&(t+=1),"Display"===e.SHOW_OPTION&&(t+=1),t},Scene_Title.prototype.commandWindowRect=function(){var t=this.commandWindowRows(),e=$dataSystem.titleCommandWindow.offsetX,n=$dataSystem.titleCommandWindow.offsetY,i=this.mainCommandWidth(),t=this.calcWindowHeight(t,!0),e=(Graphics.boxWidth-i)/2+e,n=Graphics.boxHeight-t-96+n;return new Rectangle(e,n,i,t)},Window_TitleCommand.prototype.makeCommandList=function(){var t=this.isContinueEnabled();this.addCommand(TextManager.newGame,"newGame"),("Display"===e.SHOW_CONTINUE||"IfExist"===e.SHOW_CONTINUE&&this.isContinueEnabled())&&this.addCommand(TextManager.continue_,"continue",t),"Display"===e.SHOW_OPTION&&this.addCommand(TextManager.options,"options")}}();

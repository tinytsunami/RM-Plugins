//=============================================================================
// Timi Weather
//=============================================================================

/*:
 * @target MZ
 * @plugindesc Timi weather improving 
 * @author Timi (羊羽)
 * @url https://www.tinytsunami.info
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
 * @plugindesc Timi 天氣改良 
 * @author Timi (羊羽)
 * @url https://www.tinytsunami.info
 * 
 * @help 
 * # 由 Timi 授權條款發布
 *   - 基於 MIT 授權
 *   - 且您同意您的遊戲或作品不能使用非法素材
 *     （偷竊、未授權使用、侵害授權條款或其他侵害素材作者權益的行為）
 * 
 */
!function(){"use strict";Weather.prototype._createBitmaps=function(){this._rainBitmap=new Bitmap(1,20),this._rainBitmap.fillAll("#ffffff"),this._stormBitmap=new Bitmap(8,4),this._stormBitmap.fillAll("#ffee99"),this._snowBitmap=new Bitmap(4,4),this._snowBitmap.drawCircle(4,4,4,"#ffffff")},Weather.prototype._updateAllSprites=function(){for(var t=Math.floor(40*this.power);this._sprites.length<t;)this._addSprite();for(;this._sprites.length>t;)this._removeSprite();this._sprites.forEach(function(t){this._updateSprite(t),t.x=t.ax-this.origin.x,t.y=t.ay-this.origin.y},this)},Weather.prototype._createDimmer=function(){this._dimmerSprite=new ScreenSprite,this._dimmerSprite.setColor(0,0,0),this.addChild(this._dimmerSprite)},Weather.prototype._updateDimmer=function(){switch(this.type){case"rain":this._updateRainDimmer();break;case"storm":this._updateStormDimmer();break;case"snow":this._updateShowDimmer()}},Weather.prototype._updateRainDimmer=function(){this._dimmerSprite.opacity=Math.floor(12*this.power)},Weather.prototype._updateStormDimmer=function(){this._dimmerSprite.opacity=Math.floor(6*this.power)},Weather.prototype._updateShowDimmer=function(){this._dimmerSprite.opacity=Math.floor(6*this.power)},Weather.prototype._updateRainSprite=function(t){t.bitmap=this._rainBitmap,t.rotation=-Math.PI/36,t.ax-=2*this.power*Math.sin(t.rotation)+Math.cos(t.opacity*Math.PI/180)/2,t.ay+=2*this.power*Math.cos(t.rotation),t.opacity-=2*this.power},Weather.prototype._updateStormSprite=function(t){t.bitmap=this._stormBitmap,t.ax+=this.power,t.ay+=Math.sin(t.opacity*Math.PI/180)-1,t.rotation=4*Math.cos(t.opacity*Math.PI/180),--t.opacity},Weather.prototype._updateSnowSprite=function(t){t.bitmap=this._snowBitmap,t.ax+=Math.sin(2*t.opacity*Math.PI/180)-.2,t.ay+=1,--t.opacity},Weather.prototype._rebornSprite=function(t){switch(this.type){case"rain":this._rebornRainSprite(t);break;case"storm":this._rebornStormSprite(t);break;case"snow":this._rebornSnowSprite(t)}},Weather.prototype._rebornRainSprite=function(t){t.ax=Math.randomInt(Graphics.width+200)-200+this.origin.x,t.ay=Math.randomInt(Graphics.height)-100+this.origin.y,t.opacity=100+Math.randomInt(120)},Weather.prototype._rebornStormSprite=function(t){t.ax=Math.randomInt(2*Graphics.width)-Graphics.width+this.origin.x,t.ay=Math.randomInt(Graphics.height)+this.origin.y,t.opacity=100+Math.randomInt(120)},Weather.prototype._rebornSnowSprite=function(t){t.ax=Math.randomInt(Graphics.width+200)-200+this.origin.x,t.ay=Math.randomInt(2*Graphics.height)-Graphics.height+this.origin.y,t.opacity=100+Math.randomInt(120)}}();

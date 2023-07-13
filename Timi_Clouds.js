//=============================================================================
// Timi Weather
//=============================================================================

/*:
 * @target MZ
 * @plugindesc Timi clouds system
 * @author Timi (羊羽)
 * @url https://www.tinytsunami.info
 * 
 * @param Clouds
 * @text Clouds
 * 
 * @param Clouds.List
 * @text Clouds List
 * @type struct<Clouds>[]
 * @default ["{\"ID\":\"1\",\"Tiles\":\"[]\",\"Count\":\"20\",\"Width\":\"512\",\"Height\":\"256\",\"MinTileCount\":\"11\",\"MaxTileCount\":\"30\",\"MinSpeed\":\"0.05\",\"MaxSpeed\":\"0.10\"}"]
 * @parent Clouds
 * 
 * @help 
 * # Publish by Timi License
 *   - Based on MIT license,
 *   - But you agree your games/works don't use illegal materials
 *     (theft, unauthorized used, violation of the authorization of others,
 *      or infringement of the rights of other materials authors)
 * 
 */

/*~struct~Clouds:
 *  
 * @param ID
 * @text Switch ID
 * @type switch
 * @default 0
 * 
 * @param Tiles
 * @text Tile Images
 * @type file[]
 * @dir img/pictures
 * @default []
 * 
 * @param Count
 * @text Clouds Count
 * @type number
 * @min 1
 * @default 20
 *
 * @param Width
 * @text Clouds Width
 * @type number
 * @min 1
 * @default 512
 *
 * @param Height
 * @text Clouds Height
 * @type number
 * @min 1
 * @default 256
 *
 * @param MinTileCount
 * @text Minimum Tile Count
 * @type number
 * @min 1
 * @default 11
 *
 * @param MaxTileCount
 * @text Maximum Tile Count
 * @type number
 * @min 1
 * @default 30
 *
 * @param MinSpeed
 * @text Minimum Move Speed
 * @number
 * @min 0.01
 * @decimals 2
 * @default 0.05
 * 
 * @param MaxSpeed
 * @text Maximum Move Speed
 * @number
 * @min 0.01
 * @decimals 2
 * @default 0.10
 * 
 * @param Duration
 * @text Fade in/out duration
 * @number
 * @min 1
 * @default 60
 */

/*:zh-TW
 * @target MZ
 * @plugindesc Timi 雲霧系統
 * @author Timi (羊羽)
 * @url https://www.tinytsunami.info
 * 
 * @param Clouds
 * @text 雲霧系統
 * 
 * @param Clouds.List
 * @text 雲霧列表
 * @type struct<Clouds>[]
 * @default ["{\"ID\":\"1\",\"Tiles\":\"[]\",\"Count\":\"20\",\"Width\":\"512\",\"Height\":\"256\",\"MinTileCount\":\"11\",\"MaxTileCount\":\"30\",\"MinSpeed\":\"0.05\",\"MaxSpeed\":\"0.10\"}"]
 * @parent Clouds
 * 
 * @help 
 * # 由 Timi 授權條款發布
 *   - 基於 MIT 授權
 *   - 且您同意您的遊戲或作品不能使用非法素材
 *     （偷竊、未授權使用、侵害授權條款或其他侵害素材作者權益的行為）
 * 
 */

/*~struct~Clouds:zh-TW
 *  
 * @param ID
 * @text 開關編號
 * @type switch
 * @default 0
 * 
 * @param Tiles
 * @text 雲片圖片
 * @desc 雲霧團由雲片構成（若未指定則使用系統預設）
 * @type file[]
 * @dir img/pictures
 * @default []
 * 
 * @param Count
 * @text 雲霧數量
 * @type number
 * @min 1
 * @default 20
 *
 * @param Width
 * @text 雲霧寬度
 * @type number
 * @min 1
 * @default 512
 *
 * @param Height
 * @text 雲霧高度
 * @type number
 * @min 1
 * @default 256
 *
 * @param MinTileCount
 * @text 構成雲霧的最小雲片數量
 * @type number
 * @min 1
 * @default 11
 *
 * @param MaxTileCount
 * @text 構成雲霧的最大雲片數量
 * @type number
 * @min 1
 * @default 30
 *
 * @param MinSpeed
 * @text 雲霧的最小移動速度
 * @number
 * @min 0.01
 * @decimals 2
 * @default 0.05
 * 
 * @param MaxSpeed
 * @text 雲霧的最大移動速度
 * @number
 * @min 0.01
 * @decimals 2
 * @default 0.10
 * 
 * @param Duration
 * @text 持續時間
 * @desc 開關雲霧時的過渡時間
 * @number
 * @min 1
 * @default 60
 */
!function(){"use strict";Bitmap.prototype.bltScale=function(t,i,e,s,h,a,r,o){this.context.save(),this.context.scale(o,o),this.blt(t,i,e,s,h,a/o,r/o),this.context.restore()};var t="Timi_Clouds",t=PluginManager.parameters(t),s={LIST:JsonEx.parse(String(t["Clouds.List"])).map(t=>{t=JsonEx.parse(t);return{id:Number(t.ID),tiles:JsonEx.parse(String(t.Tiles)),count:Number(t.Count),width:Number(t.Width),height:Number(t.Height),min_tile_count:Number(t.MinTileCount),max_tile_count:Number(t.MaxTileCount),min_speed:Number(t.MinSpeed),max_speed:Number(t.MaxSpeed),duration:Number(t.Duration)}})};function h(){this.initialize.apply(this,arguments)}((h.prototype=Object.create(Sprite.prototype)).constructor=h).prototype.initialize=function(t){Sprite.prototype.initialize.call(this),this._id=t.id,this._tiles=t.tiles,this._width=t.width,this._height=t.height,this._min_tile_count=t.min_tile_count,this._max_tile_count=t.max_tile_count,this._min_speed=t.min_speed,this._max_speed=t.max_speed,this._duration=t.duration,this._mx=0,this._my=0,this._frameCount=0,this._isTurnOn=null,this.refresh()},h.prototype.drawTileBitmap=function(){var t;if(Array.isArray(this._tiles)&&0<this._tiles.length)return t=Math.randomInt(this._tiles.length),t=this._tiles[t],ImageManager.loadPicture(t)},h.prototype.refresh=function(){this.initPosition(),this.refreshSpeed(),this.createBitmap()},h.prototype.createBitmap=function(){const r=this._width,o=this._height,p=new Bitmap(r,o);var t=this._min_tile_count,i=this._max_tile_count,e=t+Math.randomInt(i-t);for(let t=0;t<e;t++)this.drawTileBitmap().addLoadListener(t=>{var i=(50+Math.randomInt(150))/100,e=t.width,s=t.height,h=Math.randomInt(r-e*i),a=Math.randomInt(o-s*i);p.bltScale(t,0,0,e,s,h,a,i)});this.bitmap=p,this.opacity=$gameSwitches.value(this._id)?255:0},h.prototype.update=function(){Sprite.prototype.update.call(this),this.updatePosition(),this.updateOpacity()},h.prototype.initPosition=function(){var t=this._width,i=this._height,e=Graphics.width,s=Graphics.height;this._mx=$gameMap.displayX()*$gameMap.tileWidth(),this._my=$gameMap.displayY()*$gameMap.tileHeight(),this.x=Math.randomInt(e+2*t)-t,this.y=Math.randomInt(s+2*i)-i},h.prototype.refreshSpeed=function(){var t=this._min_speed,i=this._max_speed;this._speed=t+Math.random()*(i-t)},h.prototype.refreshPosition=function(){var t=this._width,i=this._height,e=Graphics.width,s=Graphics.height;this._mx=$gameMap.displayX()*$gameMap.tileWidth(),this._my=$gameMap.displayY()*$gameMap.tileHeight(),this.x<-t&&(this.x=e-1,this.y=Math.randomInt(s+2*(i-1))-(i-1)),this.x>e&&(this.x=1-t,this.y=Math.randomInt(s+2*(i-1))-(i-1)),this.y<-i&&(this.x=Math.randomInt(e+2*(t-1))-(t-1),this.y=s-1),this.y>s&&(this.x=Math.randomInt(e+2*(t-1))-(t-1),this.y=1-i)},h.prototype.overScreen=function(){var t=this._width,i=this._height,e=Graphics.width,s=Graphics.height;return this.x<-t||this.x>e||this.y<-i||this.y>s},h.prototype.updatePosition=function(){var t,i;this.overScreen()?(this.refreshSpeed(),this.refreshPosition()):(this.x-=this._speed,t=$gameMap.displayX()*$gameMap.tileWidth(),i=$gameMap.displayY()*$gameMap.tileHeight(),t!=this._mx&&(this.x+=this._mx-t,this._mx=t),i!=this._my&&(this.y+=this._my-i,this._my=i))},h.prototype.updateOpacity=function(){var t=$gameSwitches.value(this._id);this._isTurnOn!==t&&(this._frameCount=this._duration,this._isTurnOn=t),0<this._frameCount&&(this.opacity=(this.opacity*(this._frameCount-1)+(t?255:0))/this._frameCount,--this._frameCount)};const i=Spriteset_Map.prototype.createUpperLayer,e=(Spriteset_Map.prototype.createUpperLayer=function(){i.call(this),this.createClouds()},Spriteset_Map.prototype.update);Spriteset_Map.prototype.update=function(){e.call(this),this.updateClouds()},Spriteset_Map.prototype.createClouds=function(){this._cloudSprites=[];for(var i of s.LIST)for(let t=0;t<i.count;t++){var e=new h(i);this._cloudSprites.push(e),this.addChild(e)}},Spriteset_Map.prototype.updateClouds=function(){this._cloudSprites.forEach(t=>t.update())}}();

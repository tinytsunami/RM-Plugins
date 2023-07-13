//=============================================================================
// Timi Time
//=============================================================================

/*:
 * @target MZ
 * @plugindesc Timi time system 
 * @author Timi (羊羽)
 * @url https://www.tinytsunami.info
 *
 * @param Time
 * @text Time System
 * 
 * @param Time.Type
 * @text Time Type
 * @type select
 * @option GameClock
 * @option ComputerClock
 * @default GameClock
 * @parent Time
 * 
 * @param Time.Cycle
 * @text Time Cycle
 * @type select
 * @option Forever
 * @option Year
 * @option Day
 * @default Day
 * @parent Time
 * 
 * @param Time.PauseSwitchId
 * @text Time Pause Switch ID
 * @type switch
 * @default 0
 * @parent Time
 * 
 * @param Time.MinuteFrames
 * @text Time Minute frames
 * @desc How many frames is a game minute (invalid when use "ComputerClock".)
 * @type number
 * @default 15
 * @parent Time
 * 
 * @param Time.Tints
 * @text Time Tints List
 * @type struct<Color>[]
 * @default ["{\"Moment\":\"4\",\"Red\":\"-128\",\"Green\":\"-96\",\"Blue\":\"-32\",\"Gray\":\"128\",\"Duration\":\"60\"}","{\"Moment\":\"5\",\"Red\":\"-32\",\"Green\":\"-32\",\"Blue\":\"-8\",\"Gray\":\"32\",\"Duration\":\"60\"}","{\"Moment\":\"6\",\"Red\":\"0\",\"Green\":\"0\",\"Blue\":\"0\",\"Gray\":\"16\",\"Duration\":\"60\"}","{\"Moment\":\"11\",\"Red\":\"32\",\"Green\":\"32\",\"Blue\":\"16\",\"Gray\":\"16\",\"Duration\":\"60\"}","{\"Moment\":\"12\",\"Red\":\"32\",\"Green\":\"32\",\"Blue\":\"16\",\"Gray\":\"32\",\"Duration\":\"60\"}","{\"Moment\":\"13\",\"Red\":\"8\",\"Green\":\"0\",\"Blue\":\"0\",\"Gray\":\"16\",\"Duration\":\"60\"}","{\"Moment\":\"16\",\"Red\":\"32\",\"Green\":\"-64\",\"Blue\":\"-96\",\"Gray\":\"32\",\"Duration\":\"60\"}","{\"Moment\":\"17\",\"Red\":\"16\",\"Green\":\"-96\",\"Blue\":\"-128\",\"Gray\":\"16\",\"Duration\":\"60\"}","{\"Moment\":\"18\",\"Red\":\"-160\",\"Green\":\"-160\",\"Blue\":\"-128\",\"Gray\":\"192\",\"Duration\":\"60\"}"]
 * @parent Time
 * 
 * @param Time.OutputVariableID
 * @text Time Output Variable ID
 * @desc Time system output frames to variables (for Timi system integration.)
 * @type variable
 * @default 
 * @parent Time
 * 
 * @help 
 * # Publish by Timi License
 *   - Based on MIT license,
 *   - But you agree your games/works don't use illegal materials
 *     (theft, unauthorized used, violation of the authorization of others,
 *      or infringement of the rights of other materials authors)
 * 
 */

/*~struct~Color:
 *  
 * @param Moment
 * @text Moment (0-23)
 * @type number
 * @max 23
 * @min 0
 * @default 0
 * 
 * @param Red
 * @text Red Tone
 * @type number
 * @max 255
 * @min -255
 * @default 0
 * 
 * @param Green
 * @text Green Tone
 * @type number
 * @max 255
 * @min -255
 * @default 0
 * 
 * @param Blue
 * @text Blue Tone
 * @type number
 * @max 255
 * @min -255
 * @default 0
 * 
 * @param Gray
 * @text Gray Tone
 * @type number
 * @max 255
 * @min 0
 * @default 0
 * 
 * @param Duration
 * @text Duration (Game Minute)
 * @type number
 * @min 1
 * @default 60
 * 
 */

/*:zh-TW
 * @target MZ
 * @plugindesc Timi 時間系統
 * @author Timi (羊羽)
 * @url https://www.tinytsunami.info
 * 
 * @param Time
 * @text 時間系統
 * 
 * @param Time.Type
 * @text 時間類型
 * @type select
 * @option 運行遊戲時鐘
 * @value GameClock
 * @option 錨定電腦時鐘
 * @value ComputerClock
 * @default GameClock
 * @parent Time
 * 
 * @param Time.Cycle
 * @text 時間週期
 * @type select
 * @option 永遠
 * @value Forever
 * @option 每年循環
 * @value Year
 * @option 每日循環
 * @value Day
 * @default Day
 * @parent Time
 * 
 * @param Time.PauseSwitchId
 * @text 時間暫停開關
 * @type switch
 * @default 0
 * @parent Time
 * 
 * @param Time.MinuteFrames
 * @text 時間每分幀率
 * @desc 遊戲分鐘佔多少幀率（當「錨定電腦時鐘」時無效。）
 * @type number
 * @default 15
 * @parent Time
 * 
 * @param Time.Tints
 * @text 時間色調列表
 * @type struct<Color>[]
 * @default ["{\"Moment\":\"4\",\"Red\":\"-128\",\"Green\":\"-96\",\"Blue\":\"-32\",\"Gray\":\"128\",\"Duration\":\"60\"}","{\"Moment\":\"5\",\"Red\":\"-32\",\"Green\":\"-32\",\"Blue\":\"-8\",\"Gray\":\"32\",\"Duration\":\"60\"}","{\"Moment\":\"6\",\"Red\":\"0\",\"Green\":\"0\",\"Blue\":\"0\",\"Gray\":\"16\",\"Duration\":\"60\"}","{\"Moment\":\"11\",\"Red\":\"32\",\"Green\":\"32\",\"Blue\":\"16\",\"Gray\":\"16\",\"Duration\":\"60\"}","{\"Moment\":\"12\",\"Red\":\"32\",\"Green\":\"32\",\"Blue\":\"16\",\"Gray\":\"32\",\"Duration\":\"60\"}","{\"Moment\":\"13\",\"Red\":\"8\",\"Green\":\"0\",\"Blue\":\"0\",\"Gray\":\"16\",\"Duration\":\"60\"}","{\"Moment\":\"16\",\"Red\":\"32\",\"Green\":\"-64\",\"Blue\":\"-96\",\"Gray\":\"32\",\"Duration\":\"60\"}","{\"Moment\":\"17\",\"Red\":\"16\",\"Green\":\"-96\",\"Blue\":\"-128\",\"Gray\":\"16\",\"Duration\":\"60\"}","{\"Moment\":\"18\",\"Red\":\"-160\",\"Green\":\"-160\",\"Blue\":\"-128\",\"Gray\":\"192\",\"Duration\":\"60\"}"]
 * @parent Time
 * 
 * @param Time.OutputVariableID
 * @text 時間系統輸出變數
 * @desc Time system output frames to variables (for Timi system integration.)
 * @type variable
 * @default 
 * @parent Time
 * 
 * @help 
 * # 由 Timi 授權條款發布
 *   - 基於 MIT 授權
 *   - 且您同意您的遊戲或作品不能使用非法素材
 *     （偷竊、未授權使用、侵害授權條款或其他侵害素材作者權益的行為）
 * 
 */

/*~struct~Color:zh-TW
 *  
 * @param Moment
 * @text 時刻（0-23）
 * @type number
 * @max 23
 * @min 0
 * @default 0
 * 
 * @param Red
 * @text 紅色色調
 * @type number
 * @max 255
 * @min -255
 * @default 0
 * 
 * @param Green
 * @text 綠色色調
 * @type number
 * @max 255
 * @min -255
 * @default 0
 * 
 * @param Blue
 * @text 藍色色調
 * @type number
 * @max 255
 * @min -255
 * @default 0
 * 
 * @param Gray
 * @text 灰色色調
 * @type number
 * @max 255
 * @min 0
 * @default 0
 * 
 * @param Duration
 * @text 過渡時間（遊戲分鐘）
 * @type number
 * @min 1
 * @default 60
 * 
 */
(function () {
  'use strict';

  const PLUGIN_NAME = "Timi_Time";
  const PARAMETERS = PluginManager.parameters(PLUGIN_NAME);

  ({

    //=============================================================================
    // Plugin Parameters
    //=============================================================================
    PLUGIN_NAME: PLUGIN_NAME,

    TIME: {
      TIME_VARIABLE: Number(PARAMETERS["Time.TimeVariable"]),
      PAUSE_SWITCH: Number(PARAMETERS["Time.PauseSwitch"]),
      CLOCK_SWITCH: Number(PARAMETERS["Time.ClockSwitch"]),
      MINUTE_FRAMES: Number(PARAMETERS["Time.MinuteFrames"]),
      HOUR_FRAMES: 60 * Number(PARAMETERS["Time.MinuteFrames"]),
      ADAY_FRAMES: 24 * 60 * Number(PARAMETERS["Time.MinuteFrames"]),
      SHADOW: Boolean(PARAMETERS["Time.Shadow"] === "true"),
      TINTS: JSON.parse(parameters['Time.Tints']).map((json) => {
        let obj = JSON.parse(json);
        obj.Moment = Number(obj.Moment);
        obj.Red = Number(obj.Red);
        obj.Green = Number(obj.Green);
        obj.Blue = Number(obj.Blue);
        obj.Gray = Number(obj.Gray);
        obj.Duration = Number(obj.Duration);
        return obj;
      }),
    }

  });

  //===================================================================
  // Sprite Shadow
  //===================================================================
  function Sprite_Shadow() {
      this.initialize.apply(this, arguments);
  }

  Sprite_Shadow.prototype = Object.create(Sprite_Base.prototype);
  Sprite_Shadow.prototype.constructor = Sprite_Shadow;

  Sprite_Shadow.prototype.initialize = function (character) {
      Sprite_Base.prototype.initialize.call(this);
      this.anchor.x = 0.5;
      this.anchor.y = 1;
      this.setBlendColor([0, 0, 0, 255]);
      this._character = character;
  };

  Sprite_Shadow.prototype.update = function () {
      Sprite_Base.prototype.update.call(this);
      this.updateVisibility();
      this.updateBitmap();
      this.updateFrame();
      this.updatePosition();
      this.updateTime();
  };

  Sprite_Shadow.prototype.updateVisibility = function () {
      Sprite_Base.prototype.updateVisibility.call(this);
      if (this._character.isTransparent()) {
          this.visible = false;
      }
  };

  Sprite_Shadow.prototype.updateBitmap = function () {
      if (this.isImageChanged()) {
          this._characterName = this._character.characterName();
          this._characterIndex = this._character.characterIndex();
          this.setShadowBitmap();
      }
  };

  Sprite_Shadow.prototype.isImageChanged = function () {
      return (this._characterName !== this._character.characterName() ||
          this._characterIndex !== this._character.characterIndex());
  };

  Sprite_Shadow.prototype.setShadowBitmap = function () {
      this.bitmap = ImageManager.loadCharacter(this._characterName);
      this._isBigCharacter = ImageManager.isBigCharacter(this._characterName);
  };

  Sprite_Shadow.prototype.updateFrame = function () {
      let pw = this.patternWidth();
      let ph = this.patternHeight();
      let sx = (this.characterBlockX() + this.characterPatternX()) * pw;
      let sy = (this.characterBlockY() + this.characterPatternY()) * ph;
      this.updateHalfBodySprites();
      if (this._bushDepth > 0) {
          let d = this._bushDepth;
          this._upperBody.setFrame(sx, sy, pw, ph - d);
          this._lowerBody.setFrame(sx, sy + ph - d, pw, d);
          this.setFrame(sx, sy, 0, ph);
      } else {
          this.setFrame(sx, sy, pw, ph);
      }
  };

  Sprite_Shadow.prototype.calcRate = function (min, max, pointer, value) {
      pointer = pointer.clamp(min, max);
      return ((pointer - min) / (max - min)) * value + 1e-8;
  };

  Sprite_Shadow.prototype.updateTime = function () {
      let hour = $gameTimeSystem.now() / 15 / 60;
      let skew = (Math.PI / 2) - this.calcRate(5, 19, hour, Math.PI);
      this.skew.x = skew;
      this.scale.y = (0.4 * (1 / Math.cos(skew))).clamp(-3, 3);
      this.opacity = (128 * Math.cos(skew)).clamp(0, 128);
  };

  Sprite_Shadow.prototype.characterBlockX = function () {
      return this._character.characterIndex() % 4 * 3;
  };

  Sprite_Shadow.prototype.characterBlockY = function () {
      return Math.floor(this._character.characterIndex() / 4) * 4;
  };

  Sprite_Shadow.prototype.characterPatternX = function () {
      return this._character.pattern();
  };

  Sprite_Shadow.prototype.characterPatternY = function () {
      return (this._character.direction() - 2) / 2;
  };

  Sprite_Shadow.prototype.patternWidth = function () {
      if (this._isBigCharacter) {
          return this.bitmap.width / 3;
      } else {
          return this.bitmap.width / 12;
      }
  };

  Sprite_Shadow.prototype.patternHeight = function () {
      if (this._isBigCharacter) {
          return this.bitmap.height / 4;
      } else {
          return this.bitmap.height / 8;
      }
  };

  Sprite_Shadow.prototype.updateHalfBodySprites = function () {
      if (this._bushDepth > 0) {
          this.createHalfBodySprites();
          this._upperBody.bitmap = this.bitmap;
          this._upperBody.visible = true;
          this._upperBody.y = - this._bushDepth;
          this._lowerBody.bitmap = this.bitmap;
          this._lowerBody.visible = true;
          this._upperBody.setBlendColor(this.getBlendColor());
          this._lowerBody.setBlendColor(this.getBlendColor());
          this._upperBody.setColorTone(this.getColorTone());
          this._lowerBody.setColorTone(this.getColorTone());
      } else if (this._upperBody) {
          this._upperBody.visible = false;
          this._lowerBody.visible = false;
      }
  };

  Sprite_Shadow.prototype.createHalfBodySprites = function () {
      if (!this._upperBody) {
          this._upperBody = new Sprite();
          this._upperBody.anchor.x = 0.5;
          this._upperBody.anchor.y = 1;
          this.addChild(this._upperBody);
      }
      if (!this._lowerBody) {
          this._lowerBody = new Sprite();
          this._lowerBody.anchor.x = 0.5;
          this._lowerBody.anchor.y = 1;
          this._lowerBody.opacity = 128;
          this.addChild(this._lowerBody);
      }
  };

  Sprite_Shadow.prototype.updatePosition = function () {
      this.x = this._character.screenX();
      this.y = this._character.screenY();
      this.z = this._character.screenZ() - 2;
  };

  //=============================================================================
  // Import
  //=============================================================================

  //======================================================================
  // Global Variable
  //======================================================================
  $gameTimeSystem = new Game_TimeSystem();

  //==================================================================
  // Plugin Command
  //==================================================================
  let _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
  Game_Interpreter.prototype.pluginCommand = function (command, args) {
      _Game_Interpreter_pluginCommand.call(this, command, args);
      if (command === 'Time') {
          switch (args[0]) {
              case 'set':
                  let arr = args[1].split(':');
                  let h = Number(arr[0]);
                  let m = Number(arr[1]);
                  $gameTimeSystem.setTime(h, m);
                  break;
          }
      }
  };

})();

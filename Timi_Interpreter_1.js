//=============================================================================
// Timi Interpreter 1: Command Operation Extend
//=============================================================================

/*:
 * @target MZ
 * @plugindesc Timi Interpreter 1: Command Operation Extend
 * @author Timi (羊羽)
 * @url https://www.tinytsunami.info
 *
 * @command showTextByVariable
 * @text Show Text (Variable)
 * 
 * @arg faceImage
 * @text Face Image
 * @type file
 * @dir img/faces
 * @default 
 * 
 * @arg faceIndex
 * @text Face Index
 * @type number
 * @default 0
 * 
 * @arg background
 * @text Background
 * @type select
 * @option Window
 * @value 0
 * @option Dimming
 * @value 1
 * @option Transparent
 * @value 2
 * @default 0
 * 
 * @arg position
 * @text Position
 * @type select
 * @option Top
 * @value 0
 * @option Middle
 * @value 1
 * @option Bottom
 * @value 2
 * @default 2
 * 
 * @arg name
 * @text Name
 * @type text
 * @default 
 * 
 * @arg contentsByVariable
 * @text Contents (Variable)
 * @type variable
 * @default 0
 * 
 * @command showScrollingTextByVariable
 * @text Show Scrolling Text (Variable)
 * 
 * @arg speed
 * @text Speed
 * @type number
 * @max 8
 * @min 1
 * @default 2
 * 
 * @arg noFast
 * @text No Fast
 * @type boolean
 * @default false
 * 
 * @arg contentsByVariable
 * @text Contents (Variable)
 * @type variable
 * @default 0
 * 
 * @command controlTimerByVariable
 * @text Control Timer (Variable)
 * 
 * @arg isStart
 * @text Operation
 * @type select
 * @option Start
 * @value start
 * @option Stop
 * @value stop
 * @default start
 * 
 * @arg secondsByVariable
 * @text Seconds (Variable)
 * @type variable
 * @default 0
 * 
 * @command changePartyMemberByVariable
 * @text Change Party Member (Variable)
 * 
 * @arg actorIdByVariable
 * @text Actor ID (Variable)
 * @type variable
 * @default 0
 * 
 * @arg isAdd
 * @text Operation
 * @type select
 * @option Add
 * @value add
 * @option Remove
 * @value remove
 * @default add
 * 
 * @arg isInitialize
 * @text Initialize
 * @type boolean
 * @default true
 * 
 * @command changeStateByVariable
 * @text Change State (Variable)
 * 
 * @arg actorIdByVariable
 * @text Actor ID (Variable)
 * @type variable
 * @default 0
 * 
 * @arg isAdd
 * @text Operation
 * @type select
 * @option Add
 * @value add
 * @option Remove
 * @value remove
 * @default add
 * 
 * @arg stateIdByVariable
 * @text State ID (Variable)
 * @type variable
 * @default 0
 * 
 * @command changeSkillByVariable
 * @text Change Skill (Variable)
 * 
 * @arg actorIdByVariable
 * @text Actor ID (Variable)
 * @type variable
 * @default 0
 * 
 * @arg isLearn
 * @text Operation
 * @type select
 * @option Learn
 * @value learn
 * @option Forget
 * @value forget
 * @default learn
 * 
 * @arg skillIdByVariable
 * @text Skill ID (Variable)
 * @type variable
 * @default 0
 * 
 * @command changeEquipmentByVariable
 * @text Change Equipment (Variable)
 * 
 * @arg actorIdByVariable
 * @text Actor ID (Variable)
 * @type variable
 * @default 0
 * 
 * @arg equipTypeByVariable
 * @text Equipment Type (Variable)
 * @type variable
 * @default 0
 * 
 * @arg equipIdByVariable
 * @text Equipment ID (Variable)
 * @type variable
 * @default 0
 * 
 * @command changeNameByVariable
 * @text Change Name (Variable)
 * 
 * @arg actorIdByVariable
 * @text Actor ID (Variable)
 * @type variable
 * @default 0
 * 
 * @arg nameByVariable
 * @text Name (Variable)
 * @type variable
 * @default 0
 * 
 * @command changeClassByVariable
 * @text Change Class (Variable)
 * 
 * @arg actorIdByVariable
 * @text Actor ID (Variable)
 * @type variable
 * @default 0
 * 
 * @arg classIdByVariable
 * @text Class ID (Variable)
 * @type variable
 * @default 0
 * 
 * @arg keepExp
 * @text Keep EXP
 * @type boolean
 * @default false
 * 
 * @command changeNicknameByVariable
 * @text Change Nickname (Variable)
 * 
 * @arg actorIdByVariable
 * @text Actor ID (Variable)
 * @type variable
 * @default 0
 * 
 * @arg nicknameByVariable
 * @text Nickname (Variable)
 * @type variable
 * @default 0
 * 
 * @command changeProfileByVariable
 * @text Change Profile (Variable)
 * 
 * @arg actorIdByVariable
 * @text Actor ID (Variable)
 * @type variable
 * @default 0
 * 
 * @arg profileByVariable
 * @text Profile (Variable)
 * @type variable
 * @default 0
 * 
 * @command scrollMapByVariable
 * @text Scroll Map (Variable)
 * 
 * @arg direction
 * @text Direction
 * @type select
 * @option Down
 * @value 2
 * @option Left
 * @value 4
 * @option Right
 * @value 6
 * @option Up
 * @value 8
 * @default 2
 * 
 * @arg distanceByVariable
 * @text Distance (Variable)
 * @type variable
 * @default 0
 * 
 * @arg speed
 * @text Speed
 * @type select
 * @option 1:1/8
 * @value 1
 * @option 2:1/4
 * @value 2
 * @option 3:1/2
 * @value 3
 * @option 4:Standard
 * @value 4
 * @option 5:x2
 * @value 5
 * @option 6:x4
 * @value 6
 * @default 4
 * 
 * @arg isWait
 * @text Wait
 * @type boolean
 * @default false
 * 
 * @command showAnimationByVariable
 * @text Show Animation (Variable)
 * 
 * @arg characterIdByVariable
 * @text Character ID (Variable)
 * @desc 當變數值 -1 時為玩家
 * @type variable
 * @default 0
 * 
 * @arg animationIdByVariable
 * @text Animation ID (Variable)
 * @type variable
 * @default 0
 * 
 * @arg isWait
 * @text Wait
 * @type boolean
 * @default false
 * 
 * @command showBalloonIconByVariable
 * @text Show Balloon Icon (Variable)
 * 
 * @arg characterIdByVariable
 * @text Character ID (Variable)
 * @desc It's player when value of variable = -1.
 * @type variable
 * @default 0
 * 
 * @arg balloonId
 * @text Balloon ID
 * @type select
 * @option Exclamation Point
 * @value 1
 * @option Question Mark
 * @value 2
 * @option Note
 * @value 3
 * @option Heart-Shaped
 * @value 4
 * @option Anger
 * @value 5
 * @option Sweat
 * @value 6
 * @option Tangled
 * @value 7
 * @option Silence
 * @value 8
 * @option Light Bulb
 * @value 9
 * @option Zzz
 * @value 10
 * @option Custom Definition 1
 * @value 11
 * @option Custom Definition 2
 * @value 12
 * @option Custom Definition 3
 * @value 13
 * @option Custom Definition 4
 * @value 14
 * @option Custom Definition 5
 * @value 15
 * @default 1
 * 
 * @arg isWait
 * @text Wait
 * @type boolean
 * @default false
 * 
 * @command showPictureByVariable
 * @text Show Picture (Variable)
 * 
 * @arg pictureIdByVariable
 * @text Picture ID (Variable)
 * @type variable
 * @default 0
 * 
 * @arg name
 * @text Name
 * @type file
 * @dir img/pictures
 * @default 
 * 
 * @arg origin
 * @text Origin
 * @type select
 * @option Left-Top
 * @value 0
 * @option Center
 * @value 1
 * @default 0
 * 
 * @arg xByVariable
 * @text X (Variable)
 * @type variable
 * @default 0
 * 
 * @arg yByVariable
 * @text Y (Variable)
 * @type variable
 * @default 0
 * 
 * @arg scaleXByVariable
 * @text Scale X (Variable)
 * @type variable
 * @default 0
 * 
 * @arg scaleYByVariable
 * @text Scale Y (Variable)
 * @type variable
 * @default 0
 * 
 * @arg opacityByVariable
 * @text Opacity (Variable)
 * @type variable
 * @default 0
 * 
 * @arg blendMode
 * @text Blend Mode
 * @type select
 * @option Standard
 * @value 0
 * @option Addition
 * @value 1
 * @option Multiple
 * @value 2
 * @option Screen
 * @value 3
 * @default 0
 * 
 * @command movePictureByVariable
 * @text Move Picture (Variable)
 * 
 * @arg pictureIdByVariable
 * @text Picture ID (Variable)
 * @type variable
 * @default 0
 * 
 * @arg origin
 * @text Origin
 * @type select
 * @option Left-Top
 * @value 0
 * @option Center
 * @value 1
 * @default 0
 * 
 * @arg xByVariable
 * @text X (Variable)
 * @type variable
 * @default 0
 * 
 * @arg yByVariable
 * @text Y (Variable)
 * @type variable
 * @default 0
 * 
 * @arg scaleXByVariable
 * @text Scale X (Variable)
 * @type variable
 * @default 0
 * 
 * @arg scaleYByVariable
 * @text Scale Y (Variable)
 * @type variable
 * @default 0
 * 
 * @arg opacityByVariable
 * @text Opacity (Variable)
 * @type variable
 * @default 0
 * 
 * @arg blendMode
 * @text Blend Mode
 * @type select
 * @option Standard
 * @value 0
 * @option Addition
 * @value 1
 * @option Multiple
 * @value 2
 * @option Screen
 * @value 3
 * @default 0
 * 
 * @arg durationByVariable
 * @text Duration (Variable)
 * @type variable
 * @default 0
 * 
 * @arg isWait
 * @text Wait
 * @type boolean
 * @default true
 * 
 * @arg easingType
 * @text Easing Type
 * @type select
 * @option Fixed Speed
 * @value 0
 * @option Start Slowly
 * @value 1
 * @option End Slowly
 * @value 2
 * @option Start and End Slowly
 * @value 3
 * @default 0
 * 
 * @command rotatePictureBySpeedByVariable
 * @text Rotate Picture By Speed (Variable)
 * 
 * @arg pictureIdByVariable
 * @text Picture ID (Variable)
 * @type variable
 * @default 0
 * 
 * @arg speedByVariable
 * @text Speed (Variable)
 * @type variable
 * @default 0
 * 
 * @command rotatePictureByAngleByVariable
 * @text Rotate Picture By Angle (Variable)
 * 
 * @arg pictureIdByVariable
 * @text Picture ID (Variable)
 * @type variable
 * @default 0
 * 
 * @arg angleByVariable
 * @text Angle (Variable)
 * @type variable
 * @default 0
 * 
 * @command tintPictureByVariable
 * @text Tint Picture (Variable)
 * 
 * @arg pictureIdByVariable
 * @text Picture ID (Variable)
 * @type variable
 * @default 0
 * 
 * @arg toneRedByVariable
 * @text Tone Red (Variable)
 * @type variable
 * @default 0
 * 
 * @arg toneGreenByVariable
 * @text Tone Green (Variable)
 * @type variable
 * @default 0
 * 
 * @arg toneBlueByVariable
 * @text Tone Blue (Variable)
 * @type variable
 * @default 0
 * 
 * @arg toneGrayByVariable
 * @text Tone Gray (Variable)
 * @type variable
 * @default 0
 * 
 * @arg durationByVariable
 * @text Duration (Variable)
 * @type variable
 * @default 0
 * 
 * @arg isWait
 * @text Wait
 * @type boolean
 * @default true
 * 
 * @command erasePictureByVariable
 * @text Erase Picture (Variable)
 * 
 * @arg pictureIdByVariable
 * @text Picture ID (Variable)
 * @type variable
 * @default 0
 * 
 * @command waitByVariable
 * @text Wait (Variable)
 * 
 * @arg durationByVariable
 * @text Duration (Variable)
 * @type variable
 * @default 0
 * 
 * @command tintScreenByVariable
 * @text Tint Screen (Variable)
 * 
 * @arg toneRedByVariable
 * @text Tone Red (Variable)
 * @type variable
 * @default 0
 * 
 * @arg toneGreenByVariable
 * @text Tone Green (Variable)
 * @type variable
 * @default 0
 * 
 * @arg toneBlueByVariable
 * @text Tone Blue (Variable)
 * @type variable
 * @default 0
 * 
 * @arg toneGrayByVariable
 * @text Tone Gray (Variable)
 * @type variable
 * @default 0
 * 
 * @arg durationByVariable
 * @text Duration (Variable)
 * @type variable
 * @default 0
 * 
 * @arg isWait
 * @text Wait
 * @type boolean
 * @default true
 * 
 * @command flashScreenByVariable
 * @text Flash Screen (Variable)
 * 
 * @arg toneRedByVariable
 * @text Tone Red (Variable)
 * @type variable
 * @default 0
 * 
 * @arg toneGreenByVariable
 * @text Tone Green (Variable)
 * @type variable
 * @default 0
 * 
 * @arg toneBlueByVariable
 * @text Tone Blue (Variable)
 * @type variable
 * @default 0
 * 
 * @arg levelByVariable
 * @text Level (Variable)
 * @type variable
 * @default 0
 * 
 * @arg durationByVariable
 * @text Duration (Variable)
 * @type variable
 * @default 0
 * 
 * @arg isWait
 * @text Wait
 * @type boolean
 * @default true
 * 
 * @command shakeScreenByVariable
 * @text Shake Screen (Variable)
 * 
 * @arg levelByVariable
 * @text Level (Variable)
 * @type variable
 * @default 0
 * 
 * @arg speedByVariable
 * @text Speed (Variable)
 * @type variable
 * @default 0
 * 
 * @arg durationByVariable
 * @text Duration (Variable)
 * @type variable
 * @default 0
 * 
 * @arg isWait
 * @text Wait
 * @type boolean
 * @default true
 * 
 * @command setWeatherEffectByVariable
 * @text Set Weather Effect (Variable)
 * 
 * @arg type
 * @text Type
 * @type select
 * @option None
 * @value none
 * @option Rain
 * @value rain
 * @option Storm
 * @value storm
 * @option Snow
 * @value snow
 * @default none
 * 
 * @arg levelByVariable
 * @text Level (Variable)
 * @type variable
 * @default 0
 * 
 * @arg durationByVariable
 * @text Duration (Variable)
 * @type variable
 * @default 0
 * 
 * @arg isWait
 * @text Wait
 * @type boolean
 * @default true
 * 
 * @command playBGMByVariable
 * @text Play BGM (Variable)
 * 
 * @arg bgm
 * @text BGM File
 * @type file
 * @dir audio/bgm
 * @default 
 * 
 * @arg volumeByVariable
 * @text Volumn (Variable)
 * @type variable
 * @default 0
 * 
 * @arg pitchByVariable
 * @text Pitch (Variable)
 * @type variable
 * @default 0
 * 
 * @arg panByVariable
 * @text Pan (Variable)
 * @type variable
 * @default 0
 * 
 * @command fadeOutBGMByVariable
 * @text Fade Out BGM (Variable)
 * 
 * @arg durationByVariable
 * @text Duration (Variable)
 * @type variable
 * @default 0
 * 
 * @command playBGSByVariable
 * @text Play BGS (Variable)
 * 
 * @arg bgs
 * @text BGS File
 * @type file
 * @dir audio/bgs
 * @default 
 * 
 * @arg volumeByVariable
 * @text Volumn (Variable)
 * @type variable
 * @default 0
 * 
 * @arg pitchByVariable
 * @text Pitch (Variable)
 * @type variable
 * @default 0
 * 
 * @arg panByVariable
 * @text Pan (Variable)
 * @type variable
 * @default 0
 * 
 * @command fadeOutBGSByVariable
 * @text Fade Out BGS (Variable)
 * 
 * @arg durationByVariable
 * @text Duration (Variable)
 * @type variable
 * @default 0
 * 
 * @command playMEByVariable
 * @text Play ME (Variable)
 * 
 * @arg me
 * @text ME File
 * @type file
 * @dir audio/me
 * @default 
 * 
 * @arg volumeByVariable
 * @text Volumn (Variable)
 * @type variable
 * @default 0
 * 
 * @arg pitchByVariable
 * @text Pitch (Variable)
 * @type variable
 * @default 0
 * 
 * @arg panByVariable
 * @text Pan (Variable)
 * @type variable
 * @default 0
 * 
 * @command playSEByVariable
 * @text Play SE (Variable)
 * 
 * @arg se
 * @text SE File
 * @type file
 * @dir audio/se
 * @default 
 * 
 * @arg volumeByVariable
 * @text Volumn (Variable)
 * @type variable
 * @default 0
 * 
 * @arg pitchByVariable
 * @text Pitch (Variable)
 * @type variable
 * @default 0
 * 
 * @arg panByVariable
 * @text Pan (Variable)
 * @type variable
 * @default 0
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
 * @plugindesc Timi 事件直譯器 1（普通事件指令擴展）
 * @author Timi (羊羽)
 * @url https://www.tinytsunami.info
 * 
 * @command showTextByVariable
 * @text 以變數顯示文字
 * 
 * @arg faceImage
 * @text 臉圖檔案
 * @type file
 * @dir img/faces
 * @default 
 * 
 * @arg faceIndex
 * @text 臉圖索引
 * @type number
 * @default 0
 * 
 * @arg background
 * @text 背景
 * @type select
 * @option 視窗
 * @value 0
 * @option 調光變暗
 * @value 1
 * @option 透明
 * @value 2
 * @default 0
 * 
 * @arg position
 * @text 視窗位置
 * @type select
 * @option 頂部
 * @value 0
 * @option 中間
 * @value 1
 * @option 底部
 * @value 2
 * @default 2
 * 
 * @arg name
 * @text 名稱
 * @type text
 * @default 
 * 
 * @arg contentsByVariable
 * @text 文字（變數）
 * @type variable
 * @default 0
 * 
 * @command showScrollingTextByVariable
 * @text 以變數顯示滾動文字
 * 
 * @arg speed
 * @text 速度
 * @type number
 * @max 8
 * @min 1
 * @default 2
 * 
 * @arg noFast
 * @text 無快轉
 * @type boolean
 * @default false
 * 
 * @arg contentsByVariable
 * @text 文字（變數）
 * @type variable
 * @default 0
 * 
 * @command controlTimerByVariable
 * @text 以變數更改計時器
 * 
 * @arg isStart
 * @text 操作
 * @type select
 * @option 開始
 * @value start
 * @option 停止
 * @value stop
 * @default start
 * 
 * @arg secondsByVariable
 * @text 秒（變數）
 * @type variable
 * @default 0
 * 
 * @command changePartyMemberByVariable
 * @text 以變數更改隊伍成員
 * 
 * @arg actorIdByVariable
 * @text 主角編號（變數）
 * @type variable
 * @default 0
 * 
 * @arg isAdd
 * @text 操作
 * @type select
 * @option 添加
 * @value add
 * @option 移除
 * @value remove
 * @default add
 * 
 * @arg isInitialize
 * @text 初始化
 * @type boolean
 * @default true
 * 
 * @command changeStateByVariable
 * @text 以變數更改狀態
 * 
 * @arg actorIdByVariable
 * @text 主角編號（變數）
 * @type variable
 * @default 0
 * 
 * @arg isAdd
 * @text 操作
 * @type select
 * @option 添加
 * @value add
 * @option 移除
 * @value remove
 * @default add
 * 
 * @arg stateIdByVariable
 * @text 狀態（變數）
 * @type variable
 * @default 0
 * 
 * @command changeSkillByVariable
 * @text 以變數更改技能
 * 
 * @arg actorIdByVariable
 * @text 主角編號（變數）
 * @type variable
 * @default 0
 * 
 * @arg isLearn
 * @text 操作
 * @type select
 * @option 學習
 * @value learn
 * @option 遺忘
 * @value forget
 * @default learn
 * 
 * @arg skillIdByVariable
 * @text 技能（變數）
 * @type variable
 * @default 0
 * 
 * @command changeEquipmentByVariable
 * @text 以變數更改裝備
 * 
 * @arg actorIdByVariable
 * @text 主角編號（變數）
 * @type variable
 * @default 0
 * 
 * @arg equipTypeByVariable
 * @text 裝備類型（變數）
 * @type variable
 * @default 0
 * 
 * @arg equipIdByVariable
 * @text 裝備編號（變數）
 * @type variable
 * @default 0
 * 
 * @command changeNameByVariable
 * @text 以變數更改名稱
 * 
 * @arg actorIdByVariable
 * @text 主角編號（變數）
 * @type variable
 * @default 0
 * 
 * @arg nameByVariable
 * @text 名稱（變數）
 * @type variable
 * @default 0
 * 
 * @command changeClassByVariable
 * @text 以變數更改職業
 * 
 * @arg actorIdByVariable
 * @text 主角編號（變數）
 * @type variable
 * @default 0
 * 
 * @arg classIdByVariable
 * @text 職業（變數）
 * @type variable
 * @default 0
 * 
 * @arg keepExp
 * @text 保存EXP
 * @type boolean
 * @default false
 * 
 * @command changeNicknameByVariable
 * @text 以變數更改暱稱
 * 
 * @arg actorIdByVariable
 * @text 主角編號（變數）
 * @type variable
 * @default 0
 * 
 * @arg nicknameByVariable
 * @text 暱稱（變數）
 * @type variable
 * @default 0
 * 
 * @command changeProfileByVariable
 * @text 以變數更改簡介
 * 
 * @arg actorIdByVariable
 * @text 主角編號（變數）
 * @type variable
 * @default 0
 * 
 * @arg profileByVariable
 * @text 簡介（變數）
 * @type variable
 * @default 0
 * 
 * @command scrollMapByVariable
 * @text 以變數滾動地圖
 * 
 * @arg direction
 * @text 方向
 * @type select
 * @option 下
 * @value 2
 * @option 左
 * @value 4
 * @option 右
 * @value 6
 * @option 上
 * @value 8
 * @default 2
 * 
 * @arg distanceByVariable
 * @text 距離（變數）
 * @type variable
 * @default 0
 * 
 * @arg speed
 * @text 速度
 * @type select
 * @option 1:1/8
 * @value 1
 * @option 2:1/4
 * @value 2
 * @option 3:1/2
 * @value 3
 * @option 4:標準
 * @value 4
 * @option 5:x2
 * @value 5
 * @option 6:x4
 * @value 6
 * @default 4
 * 
 * @arg isWait
 * @text 等待完成
 * @type boolean
 * @default false
 * 
 * @command showAnimationByVariable
 * @text 以變數顯示動畫
 * 
 * @arg characterIdByVariable
 * @text 事件編號（變數）
 * @desc 當變數值 -1 時為玩家
 * @type variable
 * @default 0
 * 
 * @arg animationIdByVariable
 * @text 動畫（變數）
 * @type variable
 * @default 0
 * 
 * @arg isWait
 * @text 等待完成
 * @type boolean
 * @default false
 * 
 * @command showBalloonIconByVariable
 * @text 以變數顯示氣球圖示
 * 
 * @arg characterIdByVariable
 * @text 事件編號（變數）
 * @desc 當變數值 -1 時為玩家
 * @type variable
 * @default 0
 * 
 * @arg balloonId
 * @text 氣球圖示
 * @type select
 * @option 驚嘆號
 * @value 1
 * @option 問號
 * @value 2
 * @option 音符
 * @value 3
 * @option 心形
 * @value 4
 * @option 憤怒
 * @value 5
 * @option 流汗
 * @value 6
 * @option 糾結
 * @value 7
 * @option 沉默
 * @value 8
 * @option 燈泡
 * @value 9
 * @option Zzz
 * @value 10
 * @option 用戶定義 1
 * @value 11
 * @option 用戶定義 2
 * @value 12
 * @option 用戶定義 3
 * @value 13
 * @option 用戶定義 4
 * @value 14
 * @option 用戶定義 5
 * @value 15
 * @default 1
 * 
 * @arg isWait
 * @text 等待完成
 * @type boolean
 * @default false
 * 
 * @command showPictureByVariable
 * @text 以變數顯示圖片
 * 
 * @arg pictureIdByVariable
 * @text 圖片編號（變數）
 * @type variable
 * @default 0
 * 
 * @arg name
 * @text 圖片檔案
 * @type file
 * @dir img/pictures
 * @default 
 * 
 * @arg origin
 * @text 圖片原點
 * @type select
 * @option 左上
 * @value 0
 * @option 中央
 * @value 1
 * @default 0
 * 
 * @arg xByVariable
 * @text 座標 X（變數）
 * @type variable
 * @default 0
 * 
 * @arg yByVariable
 * @text 座標 Y（變數）
 * @type variable
 * @default 0
 * 
 * @arg scaleXByVariable
 * @text 縮放比 X（變數）
 * @type variable
 * @default 0
 * 
 * @arg scaleYByVariable
 * @text 縮放比 Y（變數）
 * @type variable
 * @default 0
 * 
 * @arg opacity
 * @text 不透明度（變數）
 * @type variable
 * @default 0
 * 
 * @arg blendMode
 * @text 合成方式
 * @type select
 * @option 標準
 * @value 0
 * @option 添加
 * @value 1
 * @option 乘
 * @value 2
 * @option 畫面
 * @value 3
 * @default 0
 * 
 * @command movePictureByVariable
 * @text 以變數移動圖片
 * 
 * @arg pictureIdByVariable
 * @text 圖片編號（變數）
 * @type variable
 * @default 0
 * 
 * @arg origin
 * @text 圖片原點
 * @type select
 * @option 左上
 * @value 0
 * @option 中央
 * @value 1
 * @default 0
 * 
 * @arg xByVariable
 * @text 座標 X（變數）
 * @type variable
 * @default 0
 * 
 * @arg yByVariable
 * @text 座標 Y（變數）
 * @type variable
 * @default 0
 * 
 * @arg scaleXByVariable
 * @text 縮放比 X（變數）
 * @type variable
 * @default 0
 * 
 * @arg scaleYByVariable
 * @text 縮放比 Y（變數）
 * @type variable
 * @default 0
 * 
 * @arg opacity
 * @text 不透明度（變數）
 * @type variable
 * @default 0
 * 
 * @arg blendMode
 * @text 合成方式
 * @type select
 * @option 標準
 * @value 0
 * @option 添加
 * @value 1
 * @option 乘
 * @value 2
 * @option 畫面
 * @value 3
 * @default 0
 * 
 * @arg durationByVariable
 * @text 持續時間（變數）
 * @type variable
 * @default 0
 * 
 * @arg isWait
 * @text 等待完成
 * @type boolean
 * @default true
 * 
 * @arg easingType
 * @text 類型
 * @type select
 * @option 固定速度
 * @value 0
 * @option 緩慢開始
 * @value 1
 * @option 緩慢結束
 * @value 2
 * @option 緩慢開始及結束
 * @value 3
 * @default 0
 * 
 * @command rotatePictureBySpeedByVariable
 * @text 以變數旋轉圖片（速度）
 * 
 * @arg pictureIdByVariable
 * @text 圖片編號（變數）
 * @type variable
 * @default 0
 * 
 * @arg speedByVariable
 * @text 轉動速度（變數）
 * @type variable
 * @default 0
 * 
 * @command rotatePictureByAngleByVariable
 * @text 以變數旋轉圖片（角度）
 * 
 * @arg pictureIdByVariable
 * @text 圖片編號（變數）
 * @type variable
 * @default 0
 * 
 * @arg angleByVariable
 * @text 轉動角度（變數）
 * @type variable
 * @default 0
 * 
 * @command tintPictureByVariable
 * @text 以變數著色圖片
 * 
 * @arg pictureIdByVariable
 * @text 圖片編號（變數）
 * @type variable
 * @default 0
 * 
 * @arg toneRedByVariable
 * @text 紅色調（變數）
 * @type variable
 * @default 0
 * 
 * @arg toneGreenByVariable
 * @text 綠色調（變數）
 * @type variable
 * @default 0
 * 
 * @arg toneBlueByVariable
 * @text 藍色調（變數）
 * @type variable
 * @default 0
 * 
 * @arg toneGrayByVariable
 * @text 灰色調（變數）
 * @type variable
 * @default 0
 * 
 * @arg durationByVariable
 * @text 持續時間（變數）
 * @type variable
 * @default 0
 * 
 * @arg isWait
 * @text 等待完成
 * @type boolean
 * @default true
 * 
 * @command erasePictureByVariable
 * @text 以變數擦除圖片
 * 
 * @arg pictureIdByVariable
 * @text 圖片編號（變數）
 * @type variable
 * @default 0
 * 
 * @command waitByVariable
 * @text 以變數等待
 * 
 * @arg durationByVariable
 * @text 持續時間（變數）
 * @type variable
 * @default 0
 * 
 * @command tintScreenByVariable
 * @text 以變數著色畫面
 * 
 * @arg toneRedByVariable
 * @text 紅色調（變數）
 * @type variable
 * @default 0
 * 
 * @arg toneGreenByVariable
 * @text 綠色調（變數）
 * @type variable
 * @default 0
 * 
 * @arg toneBlueByVariable
 * @text 藍色調（變數）
 * @type variable
 * @default 0
 * 
 * @arg toneGrayByVariable
 * @text 灰色調（變數）
 * @type variable
 * @default 0
 * 
 * @arg durationByVariable
 * @text 持續時間（變數）
 * @type variable
 * @default 0
 * 
 * @arg isWait
 * @text 等待完成
 * @type boolean
 * @default true
 * 
 * @command flashScreenByVariable
 * @text 以變數閃光畫面
 * 
 * @arg toneRedByVariable
 * @text 紅色調（變數）
 * @type variable
 * @default 0
 * 
 * @arg toneGreenByVariable
 * @text 綠色調（變數）
 * @type variable
 * @default 0
 * 
 * @arg toneBlueByVariable
 * @text 藍色調（變數）
 * @type variable
 * @default 0
 * 
 * @arg levelByVariable
 * @text 強度（變數）
 * @type variable
 * @default 0
 * 
 * @arg durationByVariable
 * @text 持續時間（變數）
 * @type variable
 * @default 0
 * 
 * @arg isWait
 * @text 等待完成
 * @type boolean
 * @default true
 * 
 * @command shakeScreenByVariable
 * @text 以變數搖動畫面
 * 
 * @arg levelByVariable
 * @text 強度（變數）
 * @type variable
 * @default 0
 * 
 * @arg speedByVariable
 * @text 速度（變數）
 * @type variable
 * @default 0
 * 
 * @arg durationByVariable
 * @text 持續時間（變數）
 * @type variable
 * @default 0
 * 
 * @arg isWait
 * @text 等待完成
 * @type boolean
 * @default true
 * 
 * @command setWeatherEffectByVariable
 * @text 以變數設置天氣效果
 * 
 * @arg type
 * @text 類型
 * @type select
 * @option 無
 * @value none
 * @option 雨
 * @value rain
 * @option 風暴
 * @value storm
 * @option 雪
 * @value snow
 * @default none
 * 
 * @arg levelByVariable
 * @text 強度（變數）
 * @type variable
 * @default 0
 * 
 * @arg durationByVariable
 * @text 持續時間（變數）
 * @type variable
 * @default 0
 * 
 * @arg isWait
 * @text 等待完成
 * @type boolean
 * @default true
 * 
 * @command playBGMByVariable
 * @text 以變數播放 BGM
 * 
 * @arg bgm
 * @text BGM 檔案
 * @type file
 * @dir audio/bgm
 * @default 
 * 
 * @arg volumeByVariable
 * @text 音量（變數）
 * @type variable
 * @default 0
 * 
 * @arg pitchByVariable
 * @text 音調（變數）
 * @type variable
 * @default 0
 * 
 * @arg panByVariable
 * @text 聲向（變數）
 * @type variable
 * @default 0
 * 
 * @command fadeOutBGMByVariable
 * @text 以變數淡出 BGM
 * 
 * @arg durationByVariable
 * @text 持續時間（變數）
 * @type variable
 * @default 0
 * 
 * @command playBGSByVariable
 * @text 以變數播放 BGS
 * 
 * @arg bgs
 * @text BGS 檔案
 * @type file
 * @dir audio/bgs
 * @default 
 * 
 * @arg volumeByVariable
 * @text 音量（變數）
 * @type variable
 * @default 0
 * 
 * @arg pitchByVariable
 * @text 音調（變數）
 * @type variable
 * @default 0
 * 
 * @arg panByVariable
 * @text 聲向（變數）
 * @type variable
 * @default 0
 * 
 * @command fadeOutBGSByVariable
 * @text 以變數淡出 BGS
 * 
 * @arg durationByVariable
 * @text 持續時間（變數）
 * @type variable
 * @default 0
 * 
 * @command playMEByVariable
 * @text 以變數播放 ME
 * 
 * @arg me
 * @text ME 檔案
 * @type file
 * @dir audio/me
 * @default 
 * 
 * @arg volumeByVariable
 * @text 音量（變數）
 * @type variable
 * @default 0
 * 
 * @arg pitchByVariable
 * @text 音調（變數）
 * @type variable
 * @default 0
 * 
 * @arg panByVariable
 * @text 聲向（變數）
 * @type variable
 * @default 0
 * 
 * @command playSEByVariable
 * @text 以變數播放 SE
 * 
 * @arg se
 * @text SE 檔案
 * @type file
 * @dir audio/se
 * @default 
 * 
 * @arg volumeByVariable
 * @text 音量（變數）
 * @type variable
 * @default 0
 * 
 * @arg pitchByVariable
 * @text 音調（變數）
 * @type variable
 * @default 0
 * 
 * @arg panByVariable
 * @text 聲向（變數）
 * @type variable
 * @default 0
 * 
 * @help 
 * # 由 Timi 授權條款發布
 *   - 基於 MIT 授權
 *   - 且您同意您的遊戲或作品不能使用非法素材
 *     （偷竊、未授權使用、侵害授權條款或其他侵害素材作者權益的行為）
 * 
 */
!function(){"use strict";var a="Timi_Interpreter_1";PluginManager.parameters(a);Game_Picture.prototype.setAngle=function(a){this._angle=a},PluginManager.registerCommand(a,"showTextByVariable",function(a){var e=String(a.faceImage),r=Number(a.faceIndex),i=Number(a.background),m=Number(a.position),l=String(a.name),a=String($gameVariables.value(Number(a.contentsByVariable))).split("\n");this.command101([e,r,i,m,l]),a.forEach(a=>$gameMessage.add(a))}),PluginManager.registerCommand(a,"showScrollingTextByVariable",function(a){var e=Number(a.speed),r=Boolean(a.noFast),a=String($gameVariables.value(Number(a.contentsByVariable))).split("\n");this.command105([e,r]),a.forEach(a=>$gameMessage.add(a))}),PluginManager.registerCommand(a,"controlTimerByVariable",function(a){var e="start"===String(a.isStart)?0:1,a=Number($gameVariables.value(Number(a.secondsByVariable)));this.command124([e,a])}),PluginManager.registerCommand(a,"changePartyMemberByVariable",function(a){var e=Number($gameVariables.value(Number(a.actorIdByVariable))),r="add"===String(a.isAdd)?0:1,a=Boolean("true"===a.isInitialize);this.command129([e,r,a])}),PluginManager.registerCommand(a,"changeStateByVariable",function(a){var e=Number($gameVariables.value(Number(a.actorIdByVariable))),r=Number($gameVariables.value(Number(a.stateIdByVariable))),a="add"===String(a.isAdd)?0:1;this.command313([0,e,a,r])}),PluginManager.registerCommand(a,"changeSkillByVariable",function(a){var e=Number($gameVariables.value(Number(a.actorIdByVariable))),r=Number($gameVariables.value(Number(a.skillIdByVariable))),a="learn"===String(a.isLearn)?0:1;this.command318([0,e,a,r])}),PluginManager.registerCommand(a,"changeEquipmentByVariable",function(a){var e=Number($gameVariables.value(Number(a.actorIdByVariable))),r=Number($gameVariables.value(Number(a.equipTypeByVariable))),a=Number($gameVariables.value(Number(a.equipIdByVariable)));this.command319([e,r,a])}),PluginManager.registerCommand(a,"changeNameByVariable",function(a){var e=Number($gameVariables.value(Number(a.actorIdByVariable))),a=Number($gameVariables.value(Number(a.nameByVariable)));this.command320([e,a])}),PluginManager.registerCommand(a,"changeClassByVariable",function(a){var e=Number($gameVariables.value(Number(a.actorIdByVariable))),r=Number($gameVariables.value(Number(a.classIdByVariable))),a=Boolean("true"===a.keepExp);this.command321([e,r,a])}),PluginManager.registerCommand(a,"changeNicknameByVariable",function(a){var e=Number($gameVariables.value(Number(a.actorIdByVariable))),a=String($gameVariables.value(Number(a.nicknameByVariable)));this.command324([e,a])}),PluginManager.registerCommand(a,"changeProfileByVariable",function(a){var e=Number($gameVariables.value(Number(a.actorIdByVariable))),a=String($gameVariables.value(Number(a.profileByVariable)));this.command325([e,a])}),PluginManager.registerCommand(a,"scrollMapByVariable",function(a){var e=Number(a.direction),r=Number($gameVariables.value(Number(a.distanceByVariable))),i=Number(a.speed),a=Boolean("true"===a.isWait);this.command204([e,r,i,a])}),PluginManager.registerCommand(a,"showAnimationByVariable",function(a){var e=Number($gameVariables.value(Number(a.characterIdByVariable))),r=Number($gameVariables.value(Number(a.animationIdByVariable))),a=Boolean("true"===a.isWait);this.command212([e,r,a])}),PluginManager.registerCommand(a,"showBalloonIconByVariable",function(a){var e=Number($gameVariables.value(Number(a.characterIdByVariable))),r=Number(a.balloonId),a=Boolean("true"===a.isWait);this.command213([e,r,a])}),PluginManager.registerCommand(a,"showPictureByVariable",function(a){var e=Number($gameVariables.value(Number(a.pictureIdByVariable))),r=String(a.name),i=Number(a.origin),m=Number($gameVariables.value(Number(a.xByVariable))),l=Number($gameVariables.value(Number(a.yByVariable))),u=Number($gameVariables.value(Number(a.scaleXByVariable))),b=Number($gameVariables.value(Number(a.scaleYByVariable))),n=Number($gameVariables.value(Number(a.opacityByVariable))),a=Number(a.blendMode);this.command231([e,r,i,0,m,l,u,b,n,a])}),PluginManager.registerCommand(a,"movePictureByVariable",function(a){var e=Number($gameVariables.value(Number(a.pictureIdByVariable))),r=Number(a.origin),i=Number($gameVariables.value(Number(a.xByVariable))),m=Number($gameVariables.value(Number(a.yByVariable))),l=Number($gameVariables.value(Number(a.scaleXByVariable))),u=Number($gameVariables.value(Number(a.scaleYByVariable))),b=Number($gameVariables.value(Number(a.opacityByVariable))),n=Number(a.blendMode),t=Number(a.durationByVariable),g=Boolean("true"===a.isWait),a=Number(a.easingType);this.command232([e,0,r,0,i,m,l,u,b,n,t,g,a])}),PluginManager.registerCommand(a,"rotatePictureBySpeedByVariable",function(a){var e=Number($gameVariables.value(Number(a.pictureIdByVariable))),a=Number($gameVariables.value(Number(a.speedByVariable)));this.command233([e,a])}),PluginManager.registerCommand(a,"rotatePictureByAngleByVariable",function(a){var e=Number($gameVariables.value(Number(a.pictureIdByVariable))),a=Number($gameVariables.value(Number(a.angleByVariable))),e=$gameScreen.picture(e);e&&e.setAngle(a)}),PluginManager.registerCommand(a,"tintPictureByVariable",function(a){var e=Number($gameVariables.value(Number(a.pictureIdByVariable))),r=[Number($gameVariables.value(Number(a.toneRedByVariable))),Number($gameVariables.value(Number(a.toneGreenByVariable))),Number($gameVariables.value(Number(a.toneBlueByVariable))),Number($gameVariables.value(Number(a.toneGrayByVariable)))],i=Number($gameVariables.value(Number(a.durationByVariable))),a=Boolean("true"===a.isWait);this.command234([e,r,i,a])}),PluginManager.registerCommand(a,"erasePictureByVariable",function(a){a=Number($gameVariables.value(Number(a.pictureIdByVariable)));this.command235([a])}),PluginManager.registerCommand(a,"waitByVariable",function(a){a=Number($gameVariables.value(Number(a.durationByVariable)));this.command230([a])}),PluginManager.registerCommand(a,"tintScreenByVariable",function(a){var e=[Number($gameVariables.value(Number(a.toneRedByVariable))),Number($gameVariables.value(Number(a.toneGreenByVariable))),Number($gameVariables.value(Number(a.toneBlueByVariable))),Number($gameVariables.value(Number(a.toneGrayByVariable)))],r=Number($gameVariables.value(Number(a.durationByVariable))),a=Boolean("true"===a.isWait);this.command223([e,r,a])}),PluginManager.registerCommand(a,"flashScreenByVariable",function(a){var e=[Number($gameVariables.value(Number(a.toneRedByVariable))),Number($gameVariables.value(Number(a.toneGreenByVariable))),Number($gameVariables.value(Number(a.toneBlueByVariable))),Number($gameVariables.value(Number(a.levelByVariable)))],r=Number($gameVariables.value(Number(a.durationByVariable))),a=Boolean("true"===a.isWait);this.command224([e,r,a])}),PluginManager.registerCommand(a,"shakeScreenByVariable",function(a){var e=Number($gameVariables.value(Number(a.levelByVariable))),r=Number($gameVariables.value(Number(a.speedByVariable))),i=Number($gameVariables.value(Number(a.durationByVariable))),a=Boolean("true"===a.isWait);this.command225([e,r,i,a])}),PluginManager.registerCommand(a,"setWeatherEffectByVariable",function(a){var e=String(a.type),r=Number($gameVariables.value(Number(a.levelByVariable))),i=Number($gameVariables.value(Number(a.durationByVariable))),a=Boolean("true"===a.isWait);this.command236([e,r,i,a])}),PluginManager.registerCommand(a,"playBGMByVariable",function(a){var e=String(a.bgm),r=Number($gameVariables.value(Number(a.volumeByVariable))),i=Number($gameVariables.value(Number(a.pitchByVariable))),a=Number($gameVariables.value(Number(a.panByVariable)));this.command241([{name:e,pan:a,pitch:i,volume:r}])}),PluginManager.registerCommand(a,"fadeOutBGMByVariable",function(a){a=Number($gameVariables.value(Number(a.durationByVariable)));this.command242([a])}),PluginManager.registerCommand(a,"playBGSByVariable",function(a){var e=String(a.bgs),r=Number($gameVariables.value(Number(a.volumeByVariable))),i=Number($gameVariables.value(Number(a.pitchByVariable))),a=Number($gameVariables.value(Number(a.panByVariable)));this.command245([{name:e,pan:a,pitch:i,volume:r}])}),PluginManager.registerCommand(a,"fadeOutBGSByVariable",function(a){a=Number($gameVariables.value(Number(a.durationByVariable)));this.command246([a])}),PluginManager.registerCommand(a,"playMEByVariable",function(a){var e=String(a.me),r=Number($gameVariables.value(Number(a.volumeByVariable))),i=Number($gameVariables.value(Number(a.pitchByVariable))),a=Number($gameVariables.value(Number(a.panByVariable)));this.command249([{name:e,pan:a,pitch:i,volume:r}])}),PluginManager.registerCommand(a,"playSEByVariable",function(a){var e=String(a.se),r=Number($gameVariables.value(Number(a.volumeByVariable))),i=Number($gameVariables.value(Number(a.pitchByVariable))),a=Number($gameVariables.value(Number(a.panByVariable)));this.command250([{name:e,pan:a,pitch:i,volume:r}])})}();

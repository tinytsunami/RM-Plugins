//=============================================================================
// Timi Filter
//=============================================================================

/*:
 * @target MZ
 * @plugindesc Timi screen filter 
 * @author Timi (羊羽)
 * @url https://www.tinytsunami.info.Switch
 * 
 * @param AdjustmentFilter
 * @text Adjustment Filter
 * 
 * @param AdjustmentFilter.Switch
 * @text Switch
 * @type switch
 * @default 0
 * @parent AdjustmentFilter
 * 
 * @param AdjustmentFilter.Gamma
 * @text Gamma
 * @type number
 * @decimals 1
 * @default 0.8
 * @parent AdjustmentFilter
 * 
 * @param AdjustmentFilter.Saturation
 * @text Saturation
 * @type number
 * @decimals 1
 * @default 0.8
 * @parent AdjustmentFilter
 * 
 * @param AdjustmentFilter.Contrast
 * @text Contrast
 * @type number
 * @decimals 1
 * @default 1.6
 * @parent AdjustmentFilter
 * 
 * @param AdjustmentFilter.Brightness
 * @text Brightness
 * @type number
 * @decimals 1
 * @default 1
 * @parent AdjustmentFilter
 * 
 * @param AdjustmentFilter.RedChannel
 * @text Red Channel
 * @type number
 * @decimals 2
 * @default 0.95
 * @parent AdjustmentFilter
 * 
 * @param AdjustmentFilter.GreenChannel
 * @text Green Channel
 * @type number
 * @decimals 2
 * @default 0.95
 * @parent AdjustmentFilter
 * 
 * @param AdjustmentFilter.BlueChannel
 * @text Blue Channel
 * @type number
 * @decimals 2
 * @default 1.1
 * @parent AdjustmentFilter
 * 
 * @param AdvancedBloomFilter
 * @text Advanced Bloom Filter
 * 
 * @param AdvancedBloomFilter.Switch
 * @text Switch
 * @type switch
 * @default 0
 * @parent AdvancedBloomFilter
 * 
 * @param AdvancedBloomFilter.Threshold
 * @text Threshold
 * @type number
 * @decimals 2
 * @default 0.5
 * @parent AdvancedBloomFilter
 * 
 * @param AdvancedBloomFilter.BloomScale
 * @text Bloom Scale
 * @type number
 * @decimals 2
 * @default 1.0
 * @parent AdvancedBloomFilter
 * 
 * @param AdvancedBloomFilter.Brightness
 * @text Brightness
 * @type number
 * @decimals 2
 * @default 1.0
 * @parent AdvancedBloomFilter
 * 
 * @param AdvancedBloomFilter.Blur
 * @text Blur
 * @type number
 * @default 8
 * @parent AdvancedBloomFilter
 * 
 * @param BloomFilter
 * @text Bloom Filter
 * 
 * @param BloomFilter.Switch
 * @text Switch
 * @type switch
 * @default 0
 * @parent BloomFilter
 * 
 * @param BloomFilter.Blur
 * @text Blur
 * @type number
 * @default 8
 * @parent BloomFilter
 * 
 * @param BulgePinchFilter
 * @text Bluge Pinch Filter
 * 
 * @param BulgePinchFilter.Switch
 * @text Switch
 * @type switch
 * @default 0
 * @parent BulgePinchFilter
 * 
 * @param BulgePinchFilter.Rx
 * @text Relative X
 * @type number
 * @decimals 1
 * @default 0.5
 * @parent BulgePinchFilter
 * 
 * @param BulgePinchFilter.Ry
 * @text Relative Y
 * @type number
 * @decimals 1
 * @default 0.5
 * @parent BulgePinchFilter
 * 
 * @param BulgePinchFilter.Radius
 * @text Radius
 * @type number
 * @default 816
 * @parent BulgePinchFilter
 * 
 * @param BulgePinchFilter.Strength
 * @text Strength
 * @type number
 * @default 0.3
 * @decimals 1
 * @parent BulgePinchFilter
 * 
 * @param GlitchFilter
 * @text Glitch Filter
 * 
 * @param GlitchFilter.Switch
 * @text Switch
 * @type switch
 * @default 0
 * @parent GlitchFilter
 * 
 * @param GlitchFilter.Slices
 * @text Slices
 * @type number
 * @default 10
 * @parent GlitchFilter
 * 
 * @param GlitchFilter.Offset
 * @text Offset
 * @type number
 * @default 100
 * @parent GlitchFilter
 * 
 * @param GlitchFilter.Average
 * @text Average
 * @type Boolean
 * @default false
 * @parent GlitchFilter
 * 
 * @param GlitchFilter.MinSize
 * @text Minimum Size
 * @type number
 * @default 8
 * @parent GlitchFilter
 * 
 * @param GlitchFilter.SampleSize
 * @text Sample Size
 * @type number
 * @default 512
 * @parent GlitchFilter
 * 
 * @param RGBSplitFilter
 * @text RGB Split Filter
 * 
 * @param RGBSplitFilter.Switch
 * @text Switch
 * @type switch
 * @default 0
 * @parent RGBSplitFilter
 * 
 * @param RGBSplitFilter.Split
 * @text Split
 * @type number
 * @default 1
 * @parent RGBSplitFilter
 * 
 * @param TiltShiftFilter
 * @text Tilt Shift Filter
 * 
 * @param TiltShiftFilter.Switch
 * @text Switch
 * @type switch
 * @default 0
 * @parent TiltShiftFilter
 * 
 * @param TiltShiftFilter.Blur
 * @text Blur
 * @type number
 * @default 6
 * @parent TiltShiftFilter
 * 
 * @param TiltShiftFilter.BlurRange
 * @text Blur Range
 * @type number
 * @default 300
 * @parent TiltShiftFilter
 * 
 * @param CRTFilter
 * @text CRT Filter
 * 
 * @param CRTFilter.Switch
 * @text Switch
 * @type switch
 * @default 0
 * @parent CRTFilter
 * 
 * @param CRTFilter.Curvature
 * @text Curvature
 * @type number
 * @decimals 1
 * @default 1.0
 * @parent CRTFilter
 * 
 * @param CRTFilter.LineWidth
 * @text Line Width
 * @type number
 * @decimals 1
 * @default 1.0
 * @parent CRTFilter
 * 
 * @param CRTFilter.LineContrast
 * @text Line Contrast
 * @type number
 * @decimals 2
 * @default 0.25
 * @parent CRTFilter
 * 
 * @param CRTFilter.Noise
 * @text Noise
 * @type number
 * @decimals 1
 * @max 1.0
 * @min 0.0
 * @default 0.3
 * @parent CRTFilter
 * 
 * @param CRTFilter.NoiseSize
 * @text Noise Size
 * @type number
 * @decimals 1
 * @default 1.0
 * @parent CRTFilter
 * 
 * @param CRTFilter.Vignetting
 * @text Vignetting
 * @type number
 * @decimals 1
 * @default 0.1
 * @parent CRTFilter
 * 
 * @param CRTFilter.VignettingAlpha
 * @text Vignetting Alpha
 * @type number
 * @decimals 1
 * @max 1.0
 * @min 0.0
 * @default 1.0
 * @parent CRTFilter
 * 
 * @param CRTFilter.VignettingBlur
 * @text Vignetting Blur
 * @type number
 * @decimals 1
 * @max 1.0
 * @min 0.0
 * @default 0.3
 * @parent CRTFilter
 * 
 * @param CRTFilter.Speed
 * @text Speed
 * @type number
 * @decimals 1
 * @max 1.0
 * @min 0.0
 * @default 0.5
 * @parent CRTFilter
 * 
 * @param OldFilmFilter
 * @text Old Film Filter
 * 
 * @param OldFilmFilter.Switch
 * @text Switch
 * @type switch
 * @default 0
 * @parent OldFilmFilter
 * 
 * @param OldFilmFilter.Sepia
 * @text Sepia
 * @type number
 * @decimals 1
 * @max 1.0
 * @min 0.0
 * @default 0.3
 * @parent OldFilmFilter
 * 
 * @param OldFilmFilter.Noise
 * @text Noise
 * @type number
 * @decimals 1
 * @max 1.0
 * @min 0.0
 * @default 0.3
 * @parent OldFilmFilter
 * 
 * @param OldFilmFilter.NoiseSize
 * @text Noise Size
 * @type number
 * @decimals 1
 * @default 1.0
 * @parent OldFilmFilter
 * 
 * @param OldFilmFilter.Scratch
 * @text Scratch
 * @type number
 * @decimals 1
 * @max 1.0
 * @min 0.0
 * @default 0.5
 * @parent OldFilmFilter
 * 
 * @param OldFilmFilter.ScratchDensity
 * @text Scratch Density
 * @type number
 * @decimals 1
 * @max 1.0
 * @min 0.0
 * @default 0.3
 * @parent OldFilmFilter
 * 
 * @param OldFilmFilter.ScratchWidth
 * @text Scratch Width
 * @type number
 * @decimals 1
 * @default 1.0
 * @parent OldFilmFilter
 * 
 * @param OldFilmFilter.Vignetting
 * @text Vignetting
 * @type number
 * @decimals 1
 * @default 0.3
 * @parent OldFilmFilter
 * 
 * @param OldFilmFilter.VignettingAlpha
 * @text Vignetting Alpha
 * @type number
 * @decimals 1
 * @default 1.0
 * @parent OldFilmFilter
 * 
 * @param OldFilmFilter.VignettingBlur
 * @text Vignetting Blur
 * @type number
 * @decimals 1
 * @default 0.3
 * @parent OldFilmFilter
 * 
 * @param PixelateFilter
 * @text Pixelate Filter
 * 
 * @param PixelateFilter.Switch
 * @text Switch
 * @type switch
 * @default 0
 * @parent PixelateFilter
 * 
 * @param PixelateFilter.Size
 * @text Size
 * @type number
 * @default 10
 * @parent PixelateFilter
 * 
 * @param AsciiFilter
 * @text ASCII Filter
 * 
 * @param AsciiFilter.Switch
 * @text Switch
 * @type switch
 * @default 0
 * @parent AsciiFilter
 * 
 * @param AsciiFilter.Size
 * @text Size
 * @type number
 * @default 8
 * @parent AsciiFilter
 * 
 * @param CrossHatchFilter
 * @text Cross Hatch Filter
 * 
 * @param CrossHatchFilter.Switch
 * @text Switch
 * @type switch
 * @default 0
 * @parent CrossHatchFilter
 * 
 * @param DotFilter
 * @text Dot Filter
 * 
 * @param DotFilter.Switch
 * @text Switch
 * @type switch
 * @default 0
 * @parent DotFilter
 * 
 * @param EmbossFilter
 * @text Emboss Filter
 * 
 * @param EmbossFilter.Switch
 * @text Switch
 * @type switch
 * @default 0
 * @parent EmbossFilter
 * 
 * @help 
 * # Publish by Timi License
 *   - Based on MIT license,
 *   - But you agree your games/works don't use illegal materials
 *     (theft, unauthorized used, violation of the authorization of others,
 *      or infringement of the rights of other materials authors)
 * 
 */

/*:
 * @target MZ
 * @plugindesc Timi 畫面濾鏡 
 * @author Timi (羊羽)
 * @url https://www.tinytsunami.info.Switch
 * 
 * @param AdjustmentFilter
 * @text 調整濾鏡
 * 
 * @param AdjustmentFilter.Switch
 * @text 開關編號
 * @type switch
 * @default 0
 * @parent AdjustmentFilter
 * 
 * @param AdjustmentFilter.Gamma
 * @text 伽馬值（Gamma）
 * @type number
 * @decimals 1
 * @default 0.8
 * @parent AdjustmentFilter
 * 
 * @param AdjustmentFilter.Saturation
 * @text 飽和度
 * @type number
 * @decimals 1
 * @default 0.8
 * @parent AdjustmentFilter
 * 
 * @param AdjustmentFilter.Contrast
 * @text 對比度
 * @type number
 * @decimals 1
 * @default 1.6
 * @parent AdjustmentFilter
 * 
 * @param AdjustmentFilter.Brightness
 * @text 亮度
 * @type number
 * @decimals 1
 * @default 1
 * @parent AdjustmentFilter
 * 
 * @param AdjustmentFilter.RedChannel
 * @text 紅色增益
 * @type number
 * @decimals 2
 * @default 0.95
 * @parent AdjustmentFilter
 * 
 * @param AdjustmentFilter.GreenChannel
 * @text 綠色增益
 * @type number
 * @decimals 2
 * @default 0.95
 * @parent AdjustmentFilter
 * 
 * @param AdjustmentFilter.BlueChannel
 * @text 藍色增益
 * @type number
 * @decimals 2
 * @default 1.1
 * @parent AdjustmentFilter
 * 
 * @param AdvancedBloomFilter
 * @text 進階亮光濾鏡
 * 
 * @param AdvancedBloomFilter.Switch
 * @text 開關編號
 * @type switch
 * @default 0
 * @parent AdvancedBloomFilter
 * 
 * @param AdvancedBloomFilter.Threshold
 * @text 閾值
 * @type number
 * @decimals 2
 * @default 0.5
 * @parent AdvancedBloomFilter
 * 
 * @param AdvancedBloomFilter.BloomScale
 * @text 亮光縮放量
 * @type number
 * @decimals 2
 * @default 1.0
 * @parent AdvancedBloomFilter
 * 
 * @param AdvancedBloomFilter.Brightness
 * @text 亮度
 * @type number
 * @decimals 2
 * @default 1.0
 * @parent AdvancedBloomFilter
 * 
 * @param AdvancedBloomFilter.Blur
 * @text 模糊程度
 * @type number
 * @default 8
 * @parent AdvancedBloomFilter
 * 
 * @param BloomFilter
 * @text 亮光濾鏡
 * 
 * @param BloomFilter.Switch
 * @text 開關編號
 * @type switch
 * @default 0
 * @parent BloomFilter
 * 
 * @param BloomFilter.Blur
 * @text 模糊程度
 * @type number
 * @default 8
 * @parent BloomFilter
 * 
 * @param BulgePinchFilter
 * @text 魚眼濾鏡
 * 
 * @param BulgePinchFilter.Switch
 * @text 開關編號
 * @type switch
 * @default 0
 * @parent BulgePinchFilter
 * 
 * @param BulgePinchFilter.Rx
 * @text 座標 X 畫面位置比率
 * @type number
 * @decimals 1
 * @default 0.5
 * @parent BulgePinchFilter
 * 
 * @param BulgePinchFilter.Ry
 * @text 座標 Y 畫面位置比率
 * @type number
 * @decimals 1
 * @default 0.5
 * @parent BulgePinchFilter
 * 
 * @param BulgePinchFilter.Radius
 * @text 半徑
 * @type number
 * @default 816
 * @parent BulgePinchFilter
 * 
 * @param BulgePinchFilter.Strength
 * @text 強度
 * @type number
 * @default 0.3
 * @decimals 1
 * @parent BulgePinchFilter
 * 
 * @param GlitchFilter
 * @text 故障濾鏡
 * 
 * @param GlitchFilter.Switch
 * @text 啟用開關
 * @type switch
 * @default 0
 * @parent GlitchFilter
 * 
 * @param GlitchFilter.Slices
 * @text 碎片數量
 * @type number
 * @default 10
 * @parent GlitchFilter
 * 
 * @param GlitchFilter.Offset
 * @text 偏移量
 * @type number
 * @default 100
 * @parent GlitchFilter
 * 
 * @param GlitchFilter.Average
 * @text 將碎片平均切割
 * @type Boolean
 * @default false
 * @parent GlitchFilter
 * 
 * @param GlitchFilter.MinSize
 * @text 碎片最小大小
 * @type number
 * @default 8
 * @parent GlitchFilter
 * 
 * @param GlitchFilter.SampleSize
 * @text 碎片取樣大小
 * @type number
 * @default 512
 * @parent GlitchFilter
 * 
 * @param RGBSplitFilter
 * @text 三色分裂濾鏡
 * 
 * @param RGBSplitFilter.Switch
 * @text 開關編號
 * @type switch
 * @default 0
 * @parent RGBSplitFilter
 * 
 * @param RGBSplitFilter.Split
 * @text 分裂程度
 * @type number
 * @default 1
 * @parent RGBSplitFilter
 * 
 * @param TiltShiftFilter
 * @text 移軸濾鏡
 * 
 * @param TiltShiftFilter.Switch
 * @text 開關編號
 * @type switch
 * @default 0
 * @parent TiltShiftFilter
 * 
 * @param TiltShiftFilter.Blur
 * @text 模糊程度
 * @type number
 * @default 6
 * @parent TiltShiftFilter
 * 
 * @param TiltShiftFilter.BlurRange
 * @text 模糊範圍
 * @type number
 * @default 300
 * @parent TiltShiftFilter
 * 
 * @param CRTFilter
 * @text 映像管濾鏡
 * 
 * @param CRTFilter.Switch
 * @text 開關編號
 * @type switch
 * @default 0
 * @parent CRTFilter
 * 
 * @param CRTFilter.Curvature
 * @text 曲率
 * @type number
 * @decimals 1
 * @default 1.0
 * @parent CRTFilter
 * 
 * @param CRTFilter.LineWidth
 * @text 掃描線寬
 * @type number
 * @decimals 1
 * @default 1.0
 * @parent CRTFilter
 * 
 * @param CRTFilter.LineContrast
 * @text 掃描線對比度
 * @type number
 * @decimals 2
 * @default 0.25
 * @parent CRTFilter
 * 
 * @param CRTFilter.Noise
 * @text 雜訊程度
 * @type number
 * @decimals 1
 * @max 1.0
 * @min 0.0
 * @default 0.3
 * @parent CRTFilter
 * 
 * @param CRTFilter.NoiseSize
 * @text 雜訊大小
 * @type number
 * @decimals 1
 * @default 1.0
 * @parent CRTFilter
 * 
 * @param CRTFilter.Vignetting
 * @text 漸暈程度
 * @type number
 * @decimals 1
 * @default 0.1
 * @parent CRTFilter
 * 
 * @param CRTFilter.VignettingAlpha
 * @text 漸暈透明度
 * @type number
 * @decimals 1
 * @max 1.0
 * @min 0.0
 * @default 1.0
 * @parent CRTFilter
 * 
 * @param CRTFilter.VignettingBlur
 * @text 漸暈模糊程度
 * @type number
 * @decimals 1
 * @max 1.0
 * @min 0.0
 * @default 0.3
 * @parent CRTFilter
 * 
 * @param CRTFilter.Speed
 * @text 動畫速度
 * @type number
 * @decimals 1
 * @max 1.0
 * @min 0.0
 * @default 0.5
 * @parent CRTFilter
 * 
 * @param OldFilmFilter
 * @text 老電影濾鏡
 * 
 * @param OldFilmFilter.Switch
 * @text 開關編號
 * @type switch
 * @default 0
 * @parent OldFilmFilter
 * 
 * @param OldFilmFilter.Sepia
 * @text 對比度
 * @type number
 * @decimals 1
 * @max 1.0
 * @min 0.0
 * @default 0.3
 * @parent OldFilmFilter
 * 
 * @param OldFilmFilter.Noise
 * @text 雜訊強度
 * @type number
 * @decimals 1
 * @max 1.0
 * @min 0.0
 * @default 0.3
 * @parent OldFilmFilter
 * 
 * @param OldFilmFilter.NoiseSize
 * @text 雜訊大小
 * @type number
 * @decimals 1
 * @default 1.0
 * @parent OldFilmFilter
 * 
 * @param OldFilmFilter.Scratch
 * @text 划痕出現頻率
 * @type number
 * @decimals 1
 * @max 1.0
 * @min 0.0
 * @default 0.5
 * @parent OldFilmFilter
 * 
 * @param OldFilmFilter.ScratchDensity
 * @text 划痕數量密度
 * @type number
 * @decimals 1
 * @max 1.0
 * @min 0.0
 * @default 0.3
 * @parent OldFilmFilter
 * 
 * @param OldFilmFilter.ScratchWidth
 * @text 划痕寬度
 * @type number
 * @decimals 1
 * @default 1.0
 * @parent OldFilmFilter
 * 
 * @param OldFilmFilter.Vignetting
 * @text 漸暈半徑
 * @type number
 * @decimals 1
 * @default 0.3
 * @parent OldFilmFilter
 * 
 * @param OldFilmFilter.VignettingAlpha
 * @text 漸暈不透明度
 * @type number
 * @decimals 1
 * @default 1.0
 * @parent OldFilmFilter
 * 
 * @param OldFilmFilter.VignettingBlur
 * @text 漸暈模糊程度
 * @type number
 * @decimals 1
 * @default 0.3
 * @parent OldFilmFilter
 * 
 * @param PixelateFilter
 * @text 像素化濾鏡
 * 
 * @param PixelateFilter.Switch
 * @text 開關編號
 * @type switch
 * @default 0
 * @parent PixelateFilter
 * 
 * @param PixelateFilter.Size
 * @text 像素大小
 * @type number
 * @default 10
 * @parent PixelateFilter
 * 
 * @param AsciiFilter
 * @text ASCII 濾鏡
 * 
 * @param AsciiFilter.Switch
 * @text 開關編號
 * @type switch
 * @default 0
 * @parent AsciiFilter
 * 
 * @param AsciiFilter.Size
 * @text ASCII 大小
 * @type number
 * @default 8
 * @parent AsciiFilter
 * 
 * @param CrossHatchFilter
 * @text 交叉線濾鏡
 * 
 * @param CrossHatchFilter.Switch
 * @text 開關編號
 * @type switch
 * @default 0
 * @parent CrossHatchFilter
 * 
 * @param DotFilter
 * @text 網點濾鏡
 * 
 * @param DotFilter.Switch
 * @text 開關編號
 * @type switch
 * @default 0
 * @parent DotFilter
 * 
 * @param EmbossFilter
 * @text 浮雕濾鏡
 * 
 * @param EmbossFilter.Switch
 * @text 開關編號
 * @type switch
 * @default 0
 * @parent EmbossFilter
 * 
 * @help 
 * # 由 Timi 授權條款發布
 *   - 基於 MIT 授權
 *   - 且您同意您的遊戲或作品不能使用非法素材
 *     （偷竊、未授權使用、侵害授權條款或其他侵害素材作者權益的行為）
 * 
 */
!function(){"use strict";e={},a=PIXI,s=PIXI,u=PIXI,c=PIXI.utils,f=PIXI,M=PIXI.filters,N=PIXI.filters,j=function(e,t){return(j=Object.setPrototypeOf||({__proto__:[]}instanceof Array?function(e,t){e.__proto__=t}:function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}))(e,t)},_e=function(){return(_e=Object.assign||function(e){for(var t,n=arguments,r=1,i=arguments.length;r<i;r++)for(var o in t=n[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},m="attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}",t(ft,xe=a.Filter),ft.prototype.apply=function(e,t,n,r){this.uniforms.gamma=Math.max(this.gamma,1e-4),this.uniforms.saturation=this.saturation,this.uniforms.contrast=this.contrast,this.uniforms.brightness=this.brightness,this.uniforms.red=this.red,this.uniforms.green=this.green,this.uniforms.blue=this.blue,this.uniforms.alpha=this.alpha,e.applyFilter(this,t,n,r)},et=ft,t(ct,be=a.Filter),Object.defineProperty(ct.prototype,"threshold",{get:function(){return this.uniforms.threshold},set:function(e){this.uniforms.threshold=e},enumerable:!1,configurable:!0}),Se=ct,t(z,ye=a.Filter),z.prototype.apply=function(e,t,n,r){var i,o=this._pixelSize.x/t._frame.width,l=this._pixelSize.y/t._frame.height;if(1===this._quality||0===this._blur)i=this._kernels[0]+.5,this.uniforms.uOffset[0]=i*o,this.uniforms.uOffset[1]=i*l,e.applyFilter(this,t,n,r);else{for(var a,s=e.getFilterTexture(),u=t,c=s,f=this._quality-1,m=0;m<f;m++)i=this._kernels[m]+.5,this.uniforms.uOffset[0]=i*o,this.uniforms.uOffset[1]=i*l,e.applyFilter(this,u,c,1),a=u,u=c,c=a;i=this._kernels[f]+.5,this.uniforms.uOffset[0]=i*o,this.uniforms.uOffset[1]=i*l,e.applyFilter(this,u,n,r),e.returnFilterTexture(s)}},z.prototype._updatePadding=function(){this.padding=Math.ceil(this._kernels.reduce(function(e,t){return e+t+.5},0))},z.prototype._generateKernels=function(){var e=this._blur,t=this._quality,n=[e];if(0<e)for(var r=e,i=e/t,o=1;o<t;o++)n.push(r-=i);this._kernels=n,this._updatePadding()},Object.defineProperty(z.prototype,"kernels",{get:function(){return this._kernels},set:function(e){Array.isArray(e)&&0<e.length?(this._kernels=e,this._quality=e.length,this._blur=Math.max.apply(Math,e)):(this._kernels=[0],this._quality=1)},enumerable:!1,configurable:!0}),Object.defineProperty(z.prototype,"clamp",{get:function(){return this._clamp},enumerable:!1,configurable:!0}),Object.defineProperty(z.prototype,"pixelSize",{get:function(){return this._pixelSize},set:function(e){"number"==typeof e?(this._pixelSize.x=e,this._pixelSize.y=e):Array.isArray(e)?(this._pixelSize.x=e[0],this._pixelSize.y=e[1]):e instanceof s.Point?(this._pixelSize.x=e.x,this._pixelSize.y=e.y):(this._pixelSize.x=1,this._pixelSize.y=1)},enumerable:!1,configurable:!0}),Object.defineProperty(z.prototype,"quality",{get:function(){return this._quality},set:function(e){this._quality=Math.max(1,Math.round(e)),this._generateKernels()},enumerable:!1,configurable:!0}),Object.defineProperty(z.prototype,"blur",{get:function(){return this._blur},set:function(e){this._blur=e,this._generateKernels()},enumerable:!1,configurable:!0}),d=z,t(L,ve=a.Filter),L.prototype.apply=function(e,t,n,r,i){var o=e.getFilterTexture(),i=(this._extractFilter.apply(e,t,o,1,i),e.getFilterTexture());this._blurFilter.apply(e,o,i,1),this.uniforms.bloomScale=this.bloomScale,this.uniforms.brightness=this.brightness,this.uniforms.bloomTexture=i,e.applyFilter(this,t,n,r),e.returnFilterTexture(i),e.returnFilterTexture(o)},Object.defineProperty(L.prototype,"resolution",{get:function(){return this._resolution},set:function(e){this._resolution=e,this._extractFilter&&(this._extractFilter.resolution=e),this._blurFilter&&(this._blurFilter.resolution=e)},enumerable:!1,configurable:!0}),Object.defineProperty(L.prototype,"threshold",{get:function(){return this._extractFilter.threshold},set:function(e){this._extractFilter.threshold=e},enumerable:!1,configurable:!0}),Object.defineProperty(L.prototype,"kernels",{get:function(){return this._blurFilter.kernels},set:function(e){this._blurFilter.kernels=e},enumerable:!1,configurable:!0}),Object.defineProperty(L.prototype,"blur",{get:function(){return this._blurFilter.blur},set:function(e){this._blurFilter.blur=e},enumerable:!1,configurable:!0}),Object.defineProperty(L.prototype,"quality",{get:function(){return this._blurFilter.quality},set:function(e){this._blurFilter.quality=e},enumerable:!1,configurable:!0}),Object.defineProperty(L.prototype,"pixelSize",{get:function(){return this._blurFilter.pixelSize},set:function(e){this._blurFilter.pixelSize=e},enumerable:!1,configurable:!0}),L.defaults={threshold:.5,bloomScale:1,brightness:1,kernels:null,blur:8,quality:4,pixelSize:1,resolution:u.settings.FILTER_RESOLUTION},mt=L,t(ut,ge=a.Filter),Object.defineProperty(ut.prototype,"size",{get:function(){return this.uniforms.pixelSize},set:function(e){this.uniforms.pixelSize=e},enumerable:!1,configurable:!0}),w=ut,t(E,he=a.Filter),E.prototype._updateTransform=function(){this.uniforms.transformX=this._thickness*Math.cos(this._angle),this.uniforms.transformY=this._thickness*Math.sin(this._angle)},Object.defineProperty(E.prototype,"rotation",{get:function(){return this._angle/s.DEG_TO_RAD},set:function(e){this._angle=e*s.DEG_TO_RAD,this._updateTransform()},enumerable:!1,configurable:!0}),Object.defineProperty(E.prototype,"thickness",{get:function(){return this._thickness},set:function(e){this._thickness=e,this._updateTransform()},enumerable:!1,configurable:!0}),Object.defineProperty(E.prototype,"lightColor",{get:function(){return c.rgb2hex(this.uniforms.lightColor)},set:function(e){c.hex2rgb(e,this.uniforms.lightColor)},enumerable:!1,configurable:!0}),Object.defineProperty(E.prototype,"lightAlpha",{get:function(){return this.uniforms.lightAlpha},set:function(e){this.uniforms.lightAlpha=e},enumerable:!1,configurable:!0}),Object.defineProperty(E.prototype,"shadowColor",{get:function(){return c.rgb2hex(this.uniforms.shadowColor)},set:function(e){c.hex2rgb(e,this.uniforms.shadowColor)},enumerable:!1,configurable:!0}),Object.defineProperty(E.prototype,"shadowAlpha",{get:function(){return this.uniforms.shadowAlpha},set:function(e){this.uniforms.shadowAlpha=e},enumerable:!1,configurable:!0}),Ce=E,t(P,pe=a.Filter),P.prototype.apply=function(e,t,n,r){var i=e.getFilterTexture();this.defaultFilter.apply(e,t,n,r),this.blurXFilter.apply(e,t,i,1),this.blurYFilter.apply(e,i,n,0),e.returnFilterTexture(i)},Object.defineProperty(P.prototype,"blur",{get:function(){return this.blurXFilter.blur},set:function(e){this.blurXFilter.blur=this.blurYFilter.blur=e},enumerable:!1,configurable:!0}),Object.defineProperty(P.prototype,"blurX",{get:function(){return this.blurXFilter.blur},set:function(e){this.blurXFilter.blur=e},enumerable:!1,configurable:!0}),Object.defineProperty(P.prototype,"blurY",{get:function(){return this.blurYFilter.blur},set:function(e){this.blurYFilter.blur=e},enumerable:!1,configurable:!0}),Fe=P,t(R,de=a.Filter),R.prototype.apply=function(e,t,n,r){var i=t.filterFrame,o=i.width,i=i.height;this.uniforms.dimensions[0]=o,this.uniforms.dimensions[1]=i,e.applyFilter(this,t,n,r)},Object.defineProperty(R.prototype,"radius",{get:function(){return this.uniforms.radius},set:function(e){this.uniforms.radius=e},enumerable:!1,configurable:!0}),Object.defineProperty(R.prototype,"strength",{get:function(){return this.uniforms.strength},set:function(e){this.uniforms.strength=e},enumerable:!1,configurable:!0}),Object.defineProperty(R.prototype,"center",{get:function(){return this.uniforms.center},set:function(e){this.uniforms.center=e},enumerable:!1,configurable:!0}),R.defaults={center:[.5,.5],radius:100,strength:1},Te=R,t(A,me=a.Filter),A.prototype.apply=function(e,t,n,r){this.uniforms._mix=this.mix,e.applyFilter(this,t,n,r)},Object.defineProperty(A.prototype,"colorSize",{get:function(){return this._size},enumerable:!1,configurable:!0}),Object.defineProperty(A.prototype,"colorMap",{get:function(){return this._colorMap},set:function(e){var t;e&&(null!=(t=e=e instanceof a.Texture?e:a.Texture.from(e))&&t.baseTexture&&(e.baseTexture.scaleMode=this._scaleMode,e.baseTexture.mipmap=f.MIPMAP_MODES.OFF,this._size=e.height,this._sliceSize=1/this._size,this._slicePixelSize=this._sliceSize/this._size,this._sliceInnerSize=this._slicePixelSize*(this._size-1),this.uniforms._size=this._size,this.uniforms._sliceSize=this._sliceSize,this.uniforms._slicePixelSize=this._slicePixelSize,this.uniforms._sliceInnerSize=this._sliceInnerSize,this.uniforms.colorMap=e),this._colorMap=e)},enumerable:!1,configurable:!0}),Object.defineProperty(A.prototype,"nearest",{get:function(){return this._nearest},set:function(e){this._nearest=e,this._scaleMode=e?f.SCALE_MODES.NEAREST:f.SCALE_MODES.LINEAR;e=this._colorMap;e&&e.baseTexture&&(e.baseTexture._glTextures={},e.baseTexture.scaleMode=this._scaleMode,e.baseTexture.mipmap=f.MIPMAP_MODES.OFF,e._updateID++,e.baseTexture.emit("update",e.baseTexture))},enumerable:!1,configurable:!0}),A.prototype.updateColorMap=function(){var e=this._colorMap;e&&e.baseTexture&&(e._updateID++,e.baseTexture.emit("update",e.baseTexture),this.colorMap=e)},A.prototype.destroy=function(e){void 0===e&&(e=!1),this._colorMap&&this._colorMap.destroy(e),me.prototype.destroy.call(this)},Ie=A,t(st,fe=a.Filter),Object.defineProperty(st.prototype,"color",{get:function(){return this._color},set:function(e){var t=this.uniforms.color;"number"==typeof e?(c.hex2rgb(e,t),this._color=e):(t[0]=e[0],t[1]=e[1],t[2]=e[2],this._color=c.rgb2hex(t))},enumerable:!1,configurable:!0}),Object.defineProperty(st.prototype,"alpha",{get:function(){return this._alpha},set:function(e){this.uniforms.alpha=e,this._alpha=e},enumerable:!1,configurable:!0}),Oe=st,t(at,ce=a.Filter),Object.defineProperty(at.prototype,"originalColor",{get:function(){return this._originalColor},set:function(e){var t=this.uniforms.originalColor;"number"==typeof e?(c.hex2rgb(e,t),this._originalColor=e):(t[0]=e[0],t[1]=e[1],t[2]=e[2],this._originalColor=c.rgb2hex(t))},enumerable:!1,configurable:!0}),Object.defineProperty(at.prototype,"newColor",{get:function(){return this._newColor},set:function(e){var t=this.uniforms.newColor;"number"==typeof e?(c.hex2rgb(e,t),this._newColor=e):(t[0]=e[0],t[1]=e[1],t[2]=e[2],this._newColor=c.rgb2hex(t))},enumerable:!1,configurable:!0}),Object.defineProperty(at.prototype,"epsilon",{get:function(){return this.uniforms.epsilon},set:function(e){this.uniforms.epsilon=e},enumerable:!1,configurable:!0}),Ae=at,t(O,ue=a.Filter),Object.defineProperty(O.prototype,"matrix",{get:function(){return this.uniforms.matrix},set:function(e){var n=this;e.forEach(function(e,t){n.uniforms.matrix[t]=e})},enumerable:!1,configurable:!0}),Object.defineProperty(O.prototype,"width",{get:function(){return 1/this.uniforms.texelSize[0]},set:function(e){this.uniforms.texelSize[0]=1/e},enumerable:!1,configurable:!0}),Object.defineProperty(O.prototype,"height",{get:function(){return 1/this.uniforms.texelSize[1]},set:function(e){this.uniforms.texelSize[1]=1/e},enumerable:!1,configurable:!0}),Re=O,t(lt,se=a.Filter),Pe=lt,t(I,ae=a.Filter),I.prototype.apply=function(e,t,n,r){var i=t.filterFrame,o=i.width,i=i.height;this.uniforms.dimensions[0]=o,this.uniforms.dimensions[1]=i,this.uniforms.seed=this.seed,this.uniforms.time=this.time,e.applyFilter(this,t,n,r)},Object.defineProperty(I.prototype,"curvature",{get:function(){return this.uniforms.curvature},set:function(e){this.uniforms.curvature=e},enumerable:!1,configurable:!0}),Object.defineProperty(I.prototype,"lineWidth",{get:function(){return this.uniforms.lineWidth},set:function(e){this.uniforms.lineWidth=e},enumerable:!1,configurable:!0}),Object.defineProperty(I.prototype,"lineContrast",{get:function(){return this.uniforms.lineContrast},set:function(e){this.uniforms.lineContrast=e},enumerable:!1,configurable:!0}),Object.defineProperty(I.prototype,"verticalLine",{get:function(){return this.uniforms.verticalLine},set:function(e){this.uniforms.verticalLine=e},enumerable:!1,configurable:!0}),Object.defineProperty(I.prototype,"noise",{get:function(){return this.uniforms.noise},set:function(e){this.uniforms.noise=e},enumerable:!1,configurable:!0}),Object.defineProperty(I.prototype,"noiseSize",{get:function(){return this.uniforms.noiseSize},set:function(e){this.uniforms.noiseSize=e},enumerable:!1,configurable:!0}),Object.defineProperty(I.prototype,"vignetting",{get:function(){return this.uniforms.vignetting},set:function(e){this.uniforms.vignetting=e},enumerable:!1,configurable:!0}),Object.defineProperty(I.prototype,"vignettingAlpha",{get:function(){return this.uniforms.vignettingAlpha},set:function(e){this.uniforms.vignettingAlpha=e},enumerable:!1,configurable:!0}),Object.defineProperty(I.prototype,"vignettingBlur",{get:function(){return this.uniforms.vignettingBlur},set:function(e){this.uniforms.vignettingBlur=e},enumerable:!1,configurable:!0}),I.defaults={curvature:1,lineWidth:1,lineContrast:.25,verticalLine:!1,noise:0,noiseSize:1,seed:0,vignetting:.3,vignettingAlpha:1,vignettingBlur:.3,time:0},Ee=I,t(ot,le=a.Filter),Object.defineProperty(ot.prototype,"scale",{get:function(){return this.uniforms.scale},set:function(e){this.uniforms.scale=e},enumerable:!1,configurable:!0}),Object.defineProperty(ot.prototype,"angle",{get:function(){return this.uniforms.angle},set:function(e){this.uniforms.angle=e},enumerable:!1,configurable:!0}),Le=ot,t(T,oe=a.Filter),T.prototype.apply=function(e,t,n,r){var i=e.getFilterTexture();this._tintFilter.apply(e,t,i,1),this._blurFilter.apply(e,i,n,r),!0!==this.shadowOnly&&e.applyFilter(this,t,n,0),e.returnFilterTexture(i)},T.prototype._updatePadding=function(){this.padding=this.distance+2*this.blur},T.prototype._updateShift=function(){this._tintFilter.uniforms.shift.set(this.distance*Math.cos(this.angle),this.distance*Math.sin(this.angle))},Object.defineProperty(T.prototype,"resolution",{get:function(){return this._resolution},set:function(e){this._resolution=e,this._tintFilter&&(this._tintFilter.resolution=e),this._blurFilter&&(this._blurFilter.resolution=e)},enumerable:!1,configurable:!0}),Object.defineProperty(T.prototype,"distance",{get:function(){return this._distance},set:function(e){this._distance=e,this._updatePadding(),this._updateShift()},enumerable:!1,configurable:!0}),Object.defineProperty(T.prototype,"rotation",{get:function(){return this.angle/s.DEG_TO_RAD},set:function(e){this.angle=e*s.DEG_TO_RAD,this._updateShift()},enumerable:!1,configurable:!0}),Object.defineProperty(T.prototype,"alpha",{get:function(){return this._tintFilter.uniforms.alpha},set:function(e){this._tintFilter.uniforms.alpha=e},enumerable:!1,configurable:!0}),Object.defineProperty(T.prototype,"color",{get:function(){return c.rgb2hex(this._tintFilter.uniforms.color)},set:function(e){c.hex2rgb(e,this._tintFilter.uniforms.color)},enumerable:!1,configurable:!0}),Object.defineProperty(T.prototype,"kernels",{get:function(){return this._blurFilter.kernels},set:function(e){this._blurFilter.kernels=e},enumerable:!1,configurable:!0}),Object.defineProperty(T.prototype,"blur",{get:function(){return this._blurFilter.blur},set:function(e){this._blurFilter.blur=e,this._updatePadding()},enumerable:!1,configurable:!0}),Object.defineProperty(T.prototype,"quality",{get:function(){return this._blurFilter.quality},set:function(e){this._blurFilter.quality=e},enumerable:!1,configurable:!0}),Object.defineProperty(T.prototype,"pixelSize",{get:function(){return this._blurFilter.pixelSize},set:function(e){this._blurFilter.pixelSize=e},enumerable:!1,configurable:!0}),T.defaults={rotation:45,distance:5,color:0,alpha:.5,shadowOnly:!1,kernels:null,blur:2,quality:3,pixelSize:1,resolution:u.settings.FILTER_RESOLUTION},ze=T,t(it,ie=a.Filter),Object.defineProperty(it.prototype,"strength",{get:function(){return this.uniforms.strength},set:function(e){this.uniforms.strength=e},enumerable:!1,configurable:!0}),we=it,t(F,re=a.Filter),F.prototype.apply=function(e,t,n,r){var i=t.filterFrame,o=i.width,i=i.height;this.uniforms.dimensions[0]=o,this.uniforms.dimensions[1]=i,this.uniforms.aspect=i/o,this.uniforms.seed=this.seed,this.uniforms.offset=this.offset,this.uniforms.fillMode=this.fillMode,e.applyFilter(this,t,n,r)},F.prototype._randomizeSizes=function(){var e=this._sizes,t=this._slices-1,n=this.sampleSize,r=Math.min(this.minSize/n,.9/this._slices);if(this.average)for(var i=this._slices,o=1,l=0;l<t;l++){var a=Math.max(o/(i-l)*(1-.6*Math.random()),r);o-=e[l]=a}else for(var o=1,s=Math.sqrt(1/this._slices),l=0;l<t;l++)a=Math.max(s*o*Math.random(),r),o-=e[l]=a;e[t]=o,this.shuffle()},F.prototype.shuffle=function(){for(var e=this._sizes,t=this._slices-1;0<t;t--){var n=Math.random()*t>>0,r=e[t];e[t]=e[n],e[n]=r}},F.prototype._randomizeOffsets=function(){for(var e=0;e<this._slices;e++)this._offsets[e]=Math.random()*(Math.random()<.5?-1:1)},F.prototype.refresh=function(){this._randomizeSizes(),this._randomizeOffsets(),this.redraw()},F.prototype.redraw=function(){var e=this.sampleSize,t=this.texture,n=this._canvas.getContext("2d");n.clearRect(0,0,8,e);for(var r=0,i=0;i<this._slices;i++){var o=Math.floor(256*this._offsets[i]),l=this._sizes[i]*e;n.fillStyle="rgba("+(0<o?o:0)+", "+(o<0?-o:0)+", 0, 1)",n.fillRect(0,r>>0,e,1+l>>0),r+=l}t.baseTexture.update(),this.uniforms.displacementMap=t},Object.defineProperty(F.prototype,"sizes",{get:function(){return this._sizes},set:function(e){for(var t=Math.min(this._slices,e.length),n=0;n<t;n++)this._sizes[n]=e[n]},enumerable:!1,configurable:!0}),Object.defineProperty(F.prototype,"offsets",{get:function(){return this._offsets},set:function(e){for(var t=Math.min(this._slices,e.length),n=0;n<t;n++)this._offsets[n]=e[n]},enumerable:!1,configurable:!0}),Object.defineProperty(F.prototype,"slices",{get:function(){return this._slices},set:function(e){this._slices!==e&&(this._slices=e,this.uniforms.slices=e,this._sizes=this.uniforms.slicesWidth=new Float32Array(e),this._offsets=this.uniforms.slicesOffset=new Float32Array(e),this.refresh())},enumerable:!1,configurable:!0}),Object.defineProperty(F.prototype,"direction",{get:function(){return this._direction},set:function(e){this._direction!==e&&(e=(this._direction=e)*s.DEG_TO_RAD,this.uniforms.sinDir=Math.sin(e),this.uniforms.cosDir=Math.cos(e))},enumerable:!1,configurable:!0}),Object.defineProperty(F.prototype,"red",{get:function(){return this.uniforms.red},set:function(e){this.uniforms.red=e},enumerable:!1,configurable:!0}),Object.defineProperty(F.prototype,"green",{get:function(){return this.uniforms.green},set:function(e){this.uniforms.green=e},enumerable:!1,configurable:!0}),Object.defineProperty(F.prototype,"blue",{get:function(){return this.uniforms.blue},set:function(e){this.uniforms.blue=e},enumerable:!1,configurable:!0}),F.prototype.destroy=function(){var e;null!=(e=this.texture)&&e.destroy(!0),this.texture=this._canvas=this.red=this.green=this.blue=this._sizes=this._offsets=null},F.defaults={slices:5,offset:100,direction:0,fillMode:0,average:!1,seed:0,red:[0,0],green:[0,0],blue:[0,0],minSize:8,sampleSize:512},F.TRANSPARENT=0,F.ORIGINAL=1,F.LOOP=2,F.CLAMP=3,F.MIRROR=4,De=F,t(C,ne=a.Filter),Object.defineProperty(C.prototype,"color",{get:function(){return c.rgb2hex(this.uniforms.glowColor)},set:function(e){c.hex2rgb(e,this.uniforms.glowColor)},enumerable:!1,configurable:!0}),Object.defineProperty(C.prototype,"outerStrength",{get:function(){return this.uniforms.outerStrength},set:function(e){this.uniforms.outerStrength=e},enumerable:!1,configurable:!0}),Object.defineProperty(C.prototype,"innerStrength",{get:function(){return this.uniforms.innerStrength},set:function(e){this.uniforms.innerStrength=e},enumerable:!1,configurable:!0}),Object.defineProperty(C.prototype,"knockout",{get:function(){return this.uniforms.knockout},set:function(e){this.uniforms.knockout=e},enumerable:!1,configurable:!0}),C.defaults={distance:10,outerStrength:4,innerStrength:0,color:16777215,quality:.1,knockout:!1},Me=C,t(S,te=a.Filter),S.prototype.apply=function(e,t,n,r){var i=t.filterFrame,o=i.width,i=i.height;this.uniforms.light=this.parallel?this._angleLight:this.center,this.uniforms.parallel=this.parallel,this.uniforms.dimensions[0]=o,this.uniforms.dimensions[1]=i,this.uniforms.aspect=i/o,this.uniforms.time=this.time,this.uniforms.alpha=this.alpha,e.applyFilter(this,t,n,r)},Object.defineProperty(S.prototype,"angle",{get:function(){return this._angle},set:function(e){e=(this._angle=e)*s.DEG_TO_RAD;this._angleLight.x=Math.cos(e),this._angleLight.y=Math.sin(e)},enumerable:!1,configurable:!0}),Object.defineProperty(S.prototype,"gain",{get:function(){return this.uniforms.gain},set:function(e){this.uniforms.gain=e},enumerable:!1,configurable:!0}),Object.defineProperty(S.prototype,"lacunarity",{get:function(){return this.uniforms.lacunarity},set:function(e){this.uniforms.lacunarity=e},enumerable:!1,configurable:!0}),Object.defineProperty(S.prototype,"alpha",{get:function(){return this.uniforms.alpha},set:function(e){this.uniforms.alpha=e},enumerable:!1,configurable:!0}),S.defaults={angle:30,gain:.5,lacunarity:2.5,time:0,parallel:!0,center:[0,0],alpha:1},Ne=S,t(_,ee=a.Filter),_.prototype.apply=function(e,t,n,r){var i=this.velocity,o=i.x,i=i.y;this.uniforms.uKernelSize=0!==o||0!==i?this.kernelSize:0,e.applyFilter(this,t,n,r)},Object.defineProperty(_.prototype,"velocity",{get:function(){return this._velocity},set:function(e){this.setVelocity(e)},enumerable:!1,configurable:!0}),_.prototype.setVelocity=function(e){var t,n;Array.isArray(e)?(t=e[0],n=e[1],this._velocity.set(t,n)):this._velocity.copyFrom(e)},_.prototype.velocityChanged=function(){this.uniforms.uVelocity[0]=this._velocity.x,this.uniforms.uVelocity[1]=this._velocity.y,this.padding=1+(Math.max(Math.abs(this._velocity.x),Math.abs(this._velocity.y))>>0)},Object.defineProperty(_.prototype,"offset",{get:function(){return this.uniforms.uOffset},set:function(e){this.uniforms.uOffset=e},enumerable:!1,configurable:!0}),je=_,t(x,Q=a.Filter),Object.defineProperty(x.prototype,"replacements",{get:function(){return this._replacements},set:function(e){var t=this.uniforms.originalColors,n=this.uniforms.targetColors,r=e.length;if(r>this._maxColors)throw new Error("Length of replacements ("+r+") exceeds the maximum colors length ("+this._maxColors+")");t[3*r]=-1;for(var i=0;i<r;i++){var o=e[i],l=o[0],l=("number"==typeof l?l=c.hex2rgb(l):o[0]=c.rgb2hex(l),t[3*i]=l[0],t[3*i+1]=l[1],t[3*i+2]=l[2],o[1]);"number"==typeof l?l=c.hex2rgb(l):o[1]=c.rgb2hex(l),n[3*i]=l[0],n[3*i+1]=l[1],n[3*i+2]=l[2]}this._replacements=e},enumerable:!1,configurable:!0}),x.prototype.refresh=function(){this.replacements=this._replacements},Object.defineProperty(x.prototype,"maxColors",{get:function(){return this._maxColors},enumerable:!1,configurable:!0}),Object.defineProperty(x.prototype,"epsilon",{get:function(){return this.uniforms.epsilon},set:function(e){this.uniforms.epsilon=e},enumerable:!1,configurable:!0}),Be=x,t(b,J=a.Filter),b.prototype.apply=function(e,t,n,r){var i;this.uniforms.dimensions[0]=null==(i=t.filterFrame)?void 0:i.width,this.uniforms.dimensions[1]=null==(i=t.filterFrame)?void 0:i.height,this.uniforms.seed=this.seed,e.applyFilter(this,t,n,r)},Object.defineProperty(b.prototype,"sepia",{get:function(){return this.uniforms.sepia},set:function(e){this.uniforms.sepia=e},enumerable:!1,configurable:!0}),Object.defineProperty(b.prototype,"noise",{get:function(){return this.uniforms.noise},set:function(e){this.uniforms.noise=e},enumerable:!1,configurable:!0}),Object.defineProperty(b.prototype,"noiseSize",{get:function(){return this.uniforms.noiseSize},set:function(e){this.uniforms.noiseSize=e},enumerable:!1,configurable:!0}),Object.defineProperty(b.prototype,"scratch",{get:function(){return this.uniforms.scratch},set:function(e){this.uniforms.scratch=e},enumerable:!1,configurable:!0}),Object.defineProperty(b.prototype,"scratchDensity",{get:function(){return this.uniforms.scratchDensity},set:function(e){this.uniforms.scratchDensity=e},enumerable:!1,configurable:!0}),Object.defineProperty(b.prototype,"scratchWidth",{get:function(){return this.uniforms.scratchWidth},set:function(e){this.uniforms.scratchWidth=e},enumerable:!1,configurable:!0}),Object.defineProperty(b.prototype,"vignetting",{get:function(){return this.uniforms.vignetting},set:function(e){this.uniforms.vignetting=e},enumerable:!1,configurable:!0}),Object.defineProperty(b.prototype,"vignettingAlpha",{get:function(){return this.uniforms.vignettingAlpha},set:function(e){this.uniforms.vignettingAlpha=e},enumerable:!1,configurable:!0}),Object.defineProperty(b.prototype,"vignettingBlur",{get:function(){return this.uniforms.vignettingBlur},set:function(e){this.uniforms.vignettingBlur=e},enumerable:!1,configurable:!0}),b.defaults={sepia:.3,noise:.3,noiseSize:1,scratch:.5,scratchDensity:.3,scratchWidth:1,vignetting:.3,vignettingAlpha:1,vignettingBlur:.3},He=b,t(y,$=a.Filter),y.getAngleStep=function(e){e=Math.max(e*y.MAX_SAMPLES,y.MIN_SAMPLES);return(2*Math.PI/e).toFixed(7)},y.prototype.apply=function(e,t,n,r){this.uniforms.thickness[0]=this._thickness/t._frame.width,this.uniforms.thickness[1]=this._thickness/t._frame.height,e.applyFilter(this,t,n,r)},Object.defineProperty(y.prototype,"color",{get:function(){return c.rgb2hex(this.uniforms.outlineColor)},set:function(e){c.hex2rgb(e,this.uniforms.outlineColor)},enumerable:!1,configurable:!0}),Object.defineProperty(y.prototype,"thickness",{get:function(){return this._thickness},set:function(e){this._thickness=e,this.padding=e},enumerable:!1,configurable:!0}),y.MIN_SAMPLES=1,y.MAX_SAMPLES=100,Ge=y,t(rt,Y=a.Filter),Object.defineProperty(rt.prototype,"size",{get:function(){return this.uniforms.size},set:function(e){this.uniforms.size=e="number"==typeof e?[e,e]:e},enumerable:!1,configurable:!0}),ke=rt,t(v,Z=a.Filter),v.prototype.apply=function(e,t,n,r){this.uniforms.uKernelSize=0!==this._angle?this.kernelSize:0,e.applyFilter(this,t,n,r)},Object.defineProperty(v.prototype,"angle",{get:function(){return this._angle},set:function(e){this._angle=e,this.uniforms.uRadian=e*Math.PI/180},enumerable:!1,configurable:!0}),Object.defineProperty(v.prototype,"center",{get:function(){return this.uniforms.uCenter},set:function(e){this.uniforms.uCenter=e},enumerable:!1,configurable:!0}),Object.defineProperty(v.prototype,"radius",{get:function(){return this.uniforms.uRadius},set:function(e){this.uniforms.uRadius=e=e<0||e===1/0?-1:e},enumerable:!1,configurable:!0}),We=v,t(g,q=a.Filter),g.prototype.apply=function(e,t,n,r){var i;this.uniforms.dimensions[0]=null==(i=t.filterFrame)?void 0:i.width,this.uniforms.dimensions[1]=null==(i=t.filterFrame)?void 0:i.height,this.uniforms.time=this.time,e.applyFilter(this,t,n,r)},Object.defineProperty(g.prototype,"mirror",{get:function(){return this.uniforms.mirror},set:function(e){this.uniforms.mirror=e},enumerable:!1,configurable:!0}),Object.defineProperty(g.prototype,"boundary",{get:function(){return this.uniforms.boundary},set:function(e){this.uniforms.boundary=e},enumerable:!1,configurable:!0}),Object.defineProperty(g.prototype,"amplitude",{get:function(){return this.uniforms.amplitude},set:function(e){this.uniforms.amplitude[0]=e[0],this.uniforms.amplitude[1]=e[1]},enumerable:!1,configurable:!0}),Object.defineProperty(g.prototype,"waveLength",{get:function(){return this.uniforms.waveLength},set:function(e){this.uniforms.waveLength[0]=e[0],this.uniforms.waveLength[1]=e[1]},enumerable:!1,configurable:!0}),Object.defineProperty(g.prototype,"alpha",{get:function(){return this.uniforms.alpha},set:function(e){this.uniforms.alpha[0]=e[0],this.uniforms.alpha[1]=e[1]},enumerable:!1,configurable:!0}),g.defaults={mirror:!0,boundary:.5,amplitude:[0,20],waveLength:[30,100],alpha:[1,1],time:0},Xe=g,t(h,K=a.Filter),Object.defineProperty(h.prototype,"red",{get:function(){return this.uniforms.red},set:function(e){this.uniforms.red=e},enumerable:!1,configurable:!0}),Object.defineProperty(h.prototype,"green",{get:function(){return this.uniforms.green},set:function(e){this.uniforms.green=e},enumerable:!1,configurable:!0}),Object.defineProperty(h.prototype,"blue",{get:function(){return this.uniforms.blue},set:function(e){this.uniforms.blue=e},enumerable:!1,configurable:!0}),Ue=h,t(p,V=a.Filter),p.prototype.apply=function(e,t,n,r){this.uniforms.time=this.time,e.applyFilter(this,t,n,r)},Object.defineProperty(p.prototype,"center",{get:function(){return this.uniforms.center},set:function(e){this.uniforms.center=e},enumerable:!1,configurable:!0}),Object.defineProperty(p.prototype,"amplitude",{get:function(){return this.uniforms.amplitude},set:function(e){this.uniforms.amplitude=e},enumerable:!1,configurable:!0}),Object.defineProperty(p.prototype,"wavelength",{get:function(){return this.uniforms.wavelength},set:function(e){this.uniforms.wavelength=e},enumerable:!1,configurable:!0}),Object.defineProperty(p.prototype,"brightness",{get:function(){return this.uniforms.brightness},set:function(e){this.uniforms.brightness=e},enumerable:!1,configurable:!0}),Object.defineProperty(p.prototype,"speed",{get:function(){return this.uniforms.speed},set:function(e){this.uniforms.speed=e},enumerable:!1,configurable:!0}),Object.defineProperty(p.prototype,"radius",{get:function(){return this.uniforms.radius},set:function(e){this.uniforms.radius=e},enumerable:!1,configurable:!0}),p.defaults={amplitude:30,wavelength:160,brightness:1,speed:500,radius:-1},Ve=p,t(l,U=a.Filter),l.prototype.apply=function(e,t,n,r){var i;this.uniforms.dimensions[0]=null==(i=t.filterFrame)?void 0:i.width,this.uniforms.dimensions[1]=null==(i=t.filterFrame)?void 0:i.height,e.applyFilter(this,t,n,r)},Object.defineProperty(l.prototype,"texture",{get:function(){return this.uniforms.uLightmap},set:function(e){this.uniforms.uLightmap=e},enumerable:!1,configurable:!0}),Object.defineProperty(l.prototype,"color",{get:function(){return this._color},set:function(e){var t=this.uniforms.ambientColor;"number"==typeof e?(c.hex2rgb(e,t),this._color=e):(t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],this._color=c.rgb2hex(t))},enumerable:!1,configurable:!0}),Object.defineProperty(l.prototype,"alpha",{get:function(){return this.uniforms.ambientColor[3]},set:function(e){this.uniforms.ambientColor[3]=e},enumerable:!1,configurable:!0}),Ke=l,t(o,X=a.Filter),o.prototype.updateDelta=function(){this.uniforms.delta.x=0,this.uniforms.delta.y=0},Object.defineProperty(o.prototype,"blur",{get:function(){return this.uniforms.blur},set:function(e){this.uniforms.blur=e},enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"gradientBlur",{get:function(){return this.uniforms.gradientBlur},set:function(e){this.uniforms.gradientBlur=e},enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"start",{get:function(){return this.uniforms.start},set:function(e){this.uniforms.start=e,this.updateDelta()},enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"end",{get:function(){return this.uniforms.end},set:function(e){this.uniforms.end=e,this.updateDelta()},enumerable:!1,configurable:!0}),t(nt,W=qe=o),nt.prototype.updateDelta=function(){var e=this.uniforms.end.x-this.uniforms.start.x,t=this.uniforms.end.y-this.uniforms.start.y,n=Math.sqrt(e*e+t*t);this.uniforms.delta.x=e/n,this.uniforms.delta.y=t/n},Ze=nt,t(tt,k=qe),tt.prototype.updateDelta=function(){var e=this.uniforms.end.x-this.uniforms.start.x,t=this.uniforms.end.y-this.uniforms.start.y,n=Math.sqrt(e*e+t*t);this.uniforms.delta.x=-t/n,this.uniforms.delta.y=e/n},Ye=tt,t(i,G=a.Filter),i.prototype.apply=function(e,t,n,r){var i=e.getFilterTexture();this.tiltShiftXFilter.apply(e,t,i,1),this.tiltShiftYFilter.apply(e,i,n,r),e.returnFilterTexture(i)},Object.defineProperty(i.prototype,"blur",{get:function(){return this.tiltShiftXFilter.blur},set:function(e){this.tiltShiftXFilter.blur=this.tiltShiftYFilter.blur=e},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"gradientBlur",{get:function(){return this.tiltShiftXFilter.gradientBlur},set:function(e){this.tiltShiftXFilter.gradientBlur=this.tiltShiftYFilter.gradientBlur=e},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"start",{get:function(){return this.tiltShiftXFilter.start},set:function(e){this.tiltShiftXFilter.start=this.tiltShiftYFilter.start=e},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"end",{get:function(){return this.tiltShiftXFilter.end},set:function(e){this.tiltShiftXFilter.end=this.tiltShiftYFilter.end=e},enumerable:!1,configurable:!0}),$e=i,t(r,H=a.Filter),Object.defineProperty(r.prototype,"offset",{get:function(){return this.uniforms.offset},set:function(e){this.uniforms.offset=e},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"radius",{get:function(){return this.uniforms.radius},set:function(e){this.uniforms.radius=e},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"angle",{get:function(){return this.uniforms.angle},set:function(e){this.uniforms.angle=e},enumerable:!1,configurable:!0}),r.defaults={radius:200,angle:4,padding:20,offset:new s.Point},Je=r,t(n,B=a.Filter),Object.defineProperty(n.prototype,"center",{get:function(){return this.uniforms.uCenter},set:function(e){this.uniforms.uCenter=e},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"strength",{get:function(){return this.uniforms.uStrength},set:function(e){this.uniforms.uStrength=e},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"innerRadius",{get:function(){return this.uniforms.uInnerRadius},set:function(e){this.uniforms.uInnerRadius=e},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"radius",{get:function(){return this.uniforms.uRadius},set:function(e){this.uniforms.uRadius=e=e<0||e===1/0?-1:e},enumerable:!1,configurable:!0}),n.defaults={strength:.1,center:[0,0],innerRadius:0,radius:-1,maxKernelSize:32},Qe=n,e.AdjustmentFilter=et,e.AdvancedBloomFilter=mt,e.AsciiFilter=w,e.BevelFilter=Ce,e.BloomFilter=Fe,e.BulgePinchFilter=Te,e.CRTFilter=Ee,e.ColorMapFilter=Ie,e.ColorOverlayFilter=Oe,e.ColorReplaceFilter=Ae,e.ConvolutionFilter=Re,e.CrossHatchFilter=Pe,e.DotFilter=Le,e.DropShadowFilter=ze,e.EmbossFilter=we,e.GlitchFilter=De,e.GlowFilter=Me,e.GodrayFilter=Ne,e.KawaseBlurFilter=d,e.MotionBlurFilter=je,e.MultiColorReplaceFilter=Be,e.OldFilmFilter=He,e.OutlineFilter=Ge,e.PixelateFilter=ke,e.RGBSplitFilter=Ue,e.RadialBlurFilter=We,e.ReflectionFilter=Xe,e.ShockwaveFilter=Ve,e.SimpleLightmapFilter=Ke,e.TiltShiftAxisFilter=qe,e.TiltShiftFilter=$e,e.TiltShiftXFilter=Ze,e.TiltShiftYFilter=Ye,e.TwistFilter=Je,e.ZoomBlurFilter=Qe,Object.defineProperty(e,"__esModule",{value:!0});var e,a,s,u,c,f,M,N,j,B,H,G,k,W,X,U,V,K,q,Z,Y,$,J,Q,ee,te,ne,re,ie,oe,le,ae,se,ue,ce,fe,me,de,pe,he,ge,ve,ye,be,xe,_e,m,Se,d,Ce,Fe,Te,Ie,Oe,Ae,Re,Pe,Ee,Le,ze,we,De,Me,Ne,je,Be,He,Ge,ke,We,Xe,Ue,Ve,Ke,qe,Ze,Ye,$e,Je,Qe,et=e;function t(e,t){function n(){this.constructor=e}j(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}function n(e){var e=Object.assign(n.defaults,e),t=e.maxKernelSize,e=function(e,t){var n={};for(i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,i=Object.getOwnPropertySymbols(e);r<i.length;r++)t.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(n[i[r]]=e[i[r]]);return n}(e,["maxKernelSize"]),t=B.call(this,m,"varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform vec4 filterArea;\n\nuniform vec2 uCenter;\nuniform float uStrength;\nuniform float uInnerRadius;\nuniform float uRadius;\n\nconst float MAX_KERNEL_SIZE = ${maxKernelSize};\n\n// author: http://byteblacksmith.com/improvements-to-the-canonical-one-liner-glsl-rand-for-opengl-es-2-0/\nhighp float rand(vec2 co, float seed) {\n    const highp float a = 12.9898, b = 78.233, c = 43758.5453;\n    highp float dt = dot(co + seed, vec2(a, b)), sn = mod(dt, 3.14159);\n    return fract(sin(sn) * c + seed);\n}\n\nvoid main() {\n\n    float minGradient = uInnerRadius * 0.3;\n    float innerRadius = (uInnerRadius + minGradient * 0.5) / filterArea.x;\n\n    float gradient = uRadius * 0.3;\n    float radius = (uRadius - gradient * 0.5) / filterArea.x;\n\n    float countLimit = MAX_KERNEL_SIZE;\n\n    vec2 dir = vec2(uCenter.xy / filterArea.xy - vTextureCoord);\n    float dist = length(vec2(dir.x, dir.y * filterArea.y / filterArea.x));\n\n    float strength = uStrength;\n\n    float delta = 0.0;\n    float gap;\n    if (dist < innerRadius) {\n        delta = innerRadius - dist;\n        gap = minGradient;\n    } else if (radius >= 0.0 && dist > radius) { // radius < 0 means it's infinity\n        delta = dist - radius;\n        gap = gradient;\n    }\n\n    if (delta > 0.0) {\n        float normalCount = gap / filterArea.x;\n        delta = (normalCount - delta) / normalCount;\n        countLimit *= delta;\n        strength *= delta;\n        if (countLimit < 1.0)\n        {\n            gl_FragColor = texture2D(uSampler, vTextureCoord);\n            return;\n        }\n    }\n\n    // randomize the lookup values to hide the fixed number of samples\n    float offset = rand(vTextureCoord, 0.0);\n\n    float total = 0.0;\n    vec4 color = vec4(0.0);\n\n    dir *= strength;\n\n    for (float t = 0.0; t < MAX_KERNEL_SIZE; t++) {\n        float percent = (t + offset) / MAX_KERNEL_SIZE;\n        float weight = 4.0 * (percent - percent * percent);\n        vec2 p = vTextureCoord + dir * percent;\n        vec4 sample = texture2D(uSampler, p);\n\n        // switch to pre-multiplied alpha to correctly blur transparent images\n        // sample.rgb *= sample.a;\n\n        color += sample * weight;\n        total += weight;\n\n        if (t > countLimit){\n            break;\n        }\n    }\n\n    color /= total;\n    // switch back from pre-multiplied alpha\n    // color.rgb /= color.a + 0.00001;\n\n    gl_FragColor = color;\n}\n".replace("${maxKernelSize}",t.toFixed(1)))||this;return Object.assign(t,e),t}function r(e){var t=H.call(this,m,"varying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform float radius;\nuniform float angle;\nuniform vec2 offset;\nuniform vec4 filterArea;\n\nvec2 mapCoord( vec2 coord )\n{\n    coord *= filterArea.xy;\n    coord += filterArea.zw;\n\n    return coord;\n}\n\nvec2 unmapCoord( vec2 coord )\n{\n    coord -= filterArea.zw;\n    coord /= filterArea.xy;\n\n    return coord;\n}\n\nvec2 twist(vec2 coord)\n{\n    coord -= offset;\n\n    float dist = length(coord);\n\n    if (dist < radius)\n    {\n        float ratioDist = (radius - dist) / radius;\n        float angleMod = ratioDist * ratioDist * angle;\n        float s = sin(angleMod);\n        float c = cos(angleMod);\n        coord = vec2(coord.x * c - coord.y * s, coord.x * s + coord.y * c);\n    }\n\n    coord += offset;\n\n    return coord;\n}\n\nvoid main(void)\n{\n\n    vec2 coord = mapCoord(vTextureCoord);\n\n    coord = twist(coord);\n\n    coord = unmapCoord(coord);\n\n    gl_FragColor = texture2D(uSampler, coord );\n\n}\n")||this;return Object.assign(t,r.defaults,e),t}function i(e,t,n,r){void 0===e&&(e=100),void 0===t&&(t=600);var i=G.call(this)||this;return i.tiltShiftXFilter=new Ze(e,t,n,r),i.tiltShiftYFilter=new Ye(e,t,n,r),i}function tt(){return null!==k&&k.apply(this,arguments)||this}function nt(){return null!==W&&W.apply(this,arguments)||this}function o(e,t,n,r){void 0===e&&(e=100),void 0===t&&(t=600);var i=X.call(this,m,"varying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform float blur;\nuniform float gradientBlur;\nuniform vec2 start;\nuniform vec2 end;\nuniform vec2 delta;\nuniform vec2 texSize;\n\nfloat random(vec3 scale, float seed)\n{\n    return fract(sin(dot(gl_FragCoord.xyz + seed, scale)) * 43758.5453 + seed);\n}\n\nvoid main(void)\n{\n    vec4 color = vec4(0.0);\n    float total = 0.0;\n\n    float offset = random(vec3(12.9898, 78.233, 151.7182), 0.0);\n    vec2 normal = normalize(vec2(start.y - end.y, end.x - start.x));\n    float radius = smoothstep(0.0, 1.0, abs(dot(vTextureCoord * texSize - start, normal)) / gradientBlur) * blur;\n\n    for (float t = -30.0; t <= 30.0; t++)\n    {\n        float percent = (t + offset - 0.5) / 30.0;\n        float weight = 1.0 - abs(percent);\n        vec4 sample = texture2D(uSampler, vTextureCoord + delta / texSize * percent * radius);\n        sample.rgb *= sample.a;\n        color += sample * weight;\n        total += weight;\n    }\n\n    color /= total;\n    color.rgb /= color.a + 0.00001;\n\n    gl_FragColor = color;\n}\n")||this;return i.uniforms.blur=e,i.uniforms.gradientBlur=t,i.uniforms.start=n||new s.Point(0,window.innerHeight/2),i.uniforms.end=r||new s.Point(600,window.innerHeight/2),i.uniforms.delta=new s.Point(30,30),i.uniforms.texSize=new s.Point(window.innerWidth,window.innerHeight),i.updateDelta(),i}function l(e,t,n){void 0===t&&(t=0),void 0===n&&(n=1);var r=U.call(this,m,"varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform sampler2D uLightmap;\nuniform vec4 filterArea;\nuniform vec2 dimensions;\nuniform vec4 ambientColor;\nvoid main() {\n    vec4 diffuseColor = texture2D(uSampler, vTextureCoord);\n    vec2 lightCoord = (vTextureCoord * filterArea.xy) / dimensions;\n    vec4 light = texture2D(uLightmap, lightCoord);\n    vec3 ambient = ambientColor.rgb * ambientColor.a;\n    vec3 intensity = ambient + light.rgb;\n    vec3 finalColor = diffuseColor.rgb * intensity;\n    gl_FragColor = vec4(finalColor, diffuseColor.a);\n}\n")||this;return r._color=0,r.uniforms.dimensions=new Float32Array(2),r.uniforms.ambientColor=new Float32Array([0,0,0,n]),r.texture=e,r.color=t,r}function p(e,t,n){void 0===e&&(e=[0,0]),void 0===n&&(n=0);var r=V.call(this,m,"varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform vec4 filterArea;\nuniform vec4 filterClamp;\n\nuniform vec2 center;\n\nuniform float amplitude;\nuniform float wavelength;\n// uniform float power;\nuniform float brightness;\nuniform float speed;\nuniform float radius;\n\nuniform float time;\n\nconst float PI = 3.14159;\n\nvoid main()\n{\n    float halfWavelength = wavelength * 0.5 / filterArea.x;\n    float maxRadius = radius / filterArea.x;\n    float currentRadius = time * speed / filterArea.x;\n\n    float fade = 1.0;\n\n    if (maxRadius > 0.0) {\n        if (currentRadius > maxRadius) {\n            gl_FragColor = texture2D(uSampler, vTextureCoord);\n            return;\n        }\n        fade = 1.0 - pow(currentRadius / maxRadius, 2.0);\n    }\n\n    vec2 dir = vec2(vTextureCoord - center / filterArea.xy);\n    dir.y *= filterArea.y / filterArea.x;\n    float dist = length(dir);\n\n    if (dist <= 0.0 || dist < currentRadius - halfWavelength || dist > currentRadius + halfWavelength) {\n        gl_FragColor = texture2D(uSampler, vTextureCoord);\n        return;\n    }\n\n    vec2 diffUV = normalize(dir);\n\n    float diff = (dist - currentRadius) / halfWavelength;\n\n    float p = 1.0 - pow(abs(diff), 2.0);\n\n    // float powDiff = diff * pow(p, 2.0) * ( amplitude * fade );\n    float powDiff = 1.25 * sin(diff * PI) * p * ( amplitude * fade );\n\n    vec2 offset = diffUV * powDiff / filterArea.xy;\n\n    // Do clamp :\n    vec2 coord = vTextureCoord + offset;\n    vec2 clampedCoord = clamp(coord, filterClamp.xy, filterClamp.zw);\n    vec4 color = texture2D(uSampler, clampedCoord);\n    if (coord != clampedCoord) {\n        color *= max(0.0, 1.0 - length(coord - clampedCoord));\n    }\n\n    // No clamp :\n    // gl_FragColor = texture2D(uSampler, vTextureCoord + offset);\n\n    color.rgb *= 1.0 + (brightness - 1.0) * p * fade;\n\n    gl_FragColor = color;\n}\n")||this;return r.center=e,Object.assign(r,p.defaults,t),r.time=n,r}function h(e,t,n){void 0===e&&(e=[-10,0]),void 0===t&&(t=[0,10]),void 0===n&&(n=[0,0]);var r=K.call(this,m,"precision mediump float;\n\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform vec4 filterArea;\nuniform vec2 red;\nuniform vec2 green;\nuniform vec2 blue;\n\nvoid main(void)\n{\n   gl_FragColor.r = texture2D(uSampler, vTextureCoord + red/filterArea.xy).r;\n   gl_FragColor.g = texture2D(uSampler, vTextureCoord + green/filterArea.xy).g;\n   gl_FragColor.b = texture2D(uSampler, vTextureCoord + blue/filterArea.xy).b;\n   gl_FragColor.a = texture2D(uSampler, vTextureCoord).a;\n}\n")||this;return r.red=e,r.green=t,r.blue=n,r}function g(e){var t=q.call(this,m,"varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\n\nuniform vec4 filterArea;\nuniform vec4 filterClamp;\nuniform vec2 dimensions;\n\nuniform bool mirror;\nuniform float boundary;\nuniform vec2 amplitude;\nuniform vec2 waveLength;\nuniform vec2 alpha;\nuniform float time;\n\nfloat rand(vec2 co) {\n    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);\n}\n\nvoid main(void)\n{\n    vec2 pixelCoord = vTextureCoord.xy * filterArea.xy;\n    vec2 coord = pixelCoord / dimensions;\n\n    if (coord.y < boundary) {\n        gl_FragColor = texture2D(uSampler, vTextureCoord);\n        return;\n    }\n\n    float k = (coord.y - boundary) / (1. - boundary + 0.0001);\n    float areaY = boundary * dimensions.y / filterArea.y;\n    float v = areaY + areaY - vTextureCoord.y;\n    float y = mirror ? v : vTextureCoord.y;\n\n    float _amplitude = ((amplitude.y - amplitude.x) * k + amplitude.x ) / filterArea.x;\n    float _waveLength = ((waveLength.y - waveLength.x) * k + waveLength.x) / filterArea.y;\n    float _alpha = (alpha.y - alpha.x) * k + alpha.x;\n\n    float x = vTextureCoord.x + cos(v * 6.28 / _waveLength - time) * _amplitude;\n    x = clamp(x, filterClamp.x, filterClamp.z);\n\n    vec4 color = texture2D(uSampler, vec2(x, y));\n\n    gl_FragColor = color * _alpha;\n}\n")||this;return t.time=0,t.uniforms.amplitude=new Float32Array(2),t.uniforms.waveLength=new Float32Array(2),t.uniforms.alpha=new Float32Array(2),t.uniforms.dimensions=new Float32Array(2),Object.assign(t,g.defaults,e),t}function v(e,t,n,r){void 0===e&&(e=0),void 0===t&&(t=[0,0]),void 0===n&&(n=5),void 0===r&&(r=-1);var i=Z.call(this,m,"varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform vec4 filterArea;\n\nuniform float uRadian;\nuniform vec2 uCenter;\nuniform float uRadius;\nuniform int uKernelSize;\n\nconst int MAX_KERNEL_SIZE = 2048;\n\nvoid main(void)\n{\n    vec4 color = texture2D(uSampler, vTextureCoord);\n\n    if (uKernelSize == 0)\n    {\n        gl_FragColor = color;\n        return;\n    }\n\n    float aspect = filterArea.y / filterArea.x;\n    vec2 center = uCenter.xy / filterArea.xy;\n    float gradient = uRadius / filterArea.x * 0.3;\n    float radius = uRadius / filterArea.x - gradient * 0.5;\n    int k = uKernelSize - 1;\n\n    vec2 coord = vTextureCoord;\n    vec2 dir = vec2(center - coord);\n    float dist = length(vec2(dir.x, dir.y * aspect));\n\n    float radianStep = uRadian;\n    if (radius >= 0.0 && dist > radius) {\n        float delta = dist - radius;\n        float gap = gradient;\n        float scale = 1.0 - abs(delta / gap);\n        if (scale <= 0.0) {\n            gl_FragColor = color;\n            return;\n        }\n        radianStep *= scale;\n    }\n    radianStep /= float(k);\n\n    float s = sin(radianStep);\n    float c = cos(radianStep);\n    mat2 rotationMatrix = mat2(vec2(c, -s), vec2(s, c));\n\n    for(int i = 0; i < MAX_KERNEL_SIZE - 1; i++) {\n        if (i == k) {\n            break;\n        }\n\n        coord -= center;\n        coord.y *= aspect;\n        coord = rotationMatrix * coord;\n        coord.y /= aspect;\n        coord += center;\n\n        vec4 sample = texture2D(uSampler, coord);\n\n        // switch to pre-multiplied alpha to correctly blur transparent images\n        // sample.rgb *= sample.a;\n\n        color += sample;\n    }\n\n    gl_FragColor = color / float(uKernelSize);\n}\n")||this;return i._angle=0,i.angle=e,i.center=t,i.kernelSize=n,i.radius=r,i}function rt(e){void 0===e&&(e=10);var t=Y.call(this,m,"precision mediump float;\n\nvarying vec2 vTextureCoord;\n\nuniform vec2 size;\nuniform sampler2D uSampler;\n\nuniform vec4 filterArea;\n\nvec2 mapCoord( vec2 coord )\n{\n    coord *= filterArea.xy;\n    coord += filterArea.zw;\n\n    return coord;\n}\n\nvec2 unmapCoord( vec2 coord )\n{\n    coord -= filterArea.zw;\n    coord /= filterArea.xy;\n\n    return coord;\n}\n\nvec2 pixelate(vec2 coord, vec2 size)\n{\n\treturn floor( coord / size ) * size;\n}\n\nvoid main(void)\n{\n    vec2 coord = mapCoord(vTextureCoord);\n\n    coord = pixelate(coord, size);\n\n    coord = unmapCoord(coord);\n\n    gl_FragColor = texture2D(uSampler, coord);\n}\n")||this;return t.size=e,t}function y(e,t,n){void 0===e&&(e=1),void 0===t&&(t=0);var r=$.call(this,m,"varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\n\nuniform vec2 thickness;\nuniform vec4 outlineColor;\nuniform vec4 filterClamp;\n\nconst float DOUBLE_PI = 3.14159265358979323846264 * 2.;\n\nvoid main(void) {\n    vec4 ownColor = texture2D(uSampler, vTextureCoord);\n    vec4 curColor;\n    float maxAlpha = 0.;\n    vec2 displaced;\n    for (float angle = 0.; angle <= DOUBLE_PI; angle += ${angleStep}) {\n        displaced.x = vTextureCoord.x + thickness.x * cos(angle);\n        displaced.y = vTextureCoord.y + thickness.y * sin(angle);\n        curColor = texture2D(uSampler, clamp(displaced, filterClamp.xy, filterClamp.zw));\n        maxAlpha = max(maxAlpha, curColor.a);\n    }\n    float resultAlpha = max(maxAlpha, ownColor.a);\n    gl_FragColor = vec4((ownColor.rgb + outlineColor.rgb * (1. - ownColor.a)) * resultAlpha, resultAlpha);\n}\n".replace(/\$\{angleStep\}/,y.getAngleStep(n=void 0===n?.1:n)))||this;return r._thickness=1,r.uniforms.thickness=new Float32Array([0,0]),r.uniforms.outlineColor=new Float32Array([0,0,0,1]),Object.assign(r,{thickness:e,color:t,quality:n}),r}function b(e,t){void 0===t&&(t=0);var n=J.call(this,m,"varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform vec4 filterArea;\nuniform vec2 dimensions;\n\nuniform float sepia;\nuniform float noise;\nuniform float noiseSize;\nuniform float scratch;\nuniform float scratchDensity;\nuniform float scratchWidth;\nuniform float vignetting;\nuniform float vignettingAlpha;\nuniform float vignettingBlur;\nuniform float seed;\n\nconst float SQRT_2 = 1.414213;\nconst vec3 SEPIA_RGB = vec3(112.0 / 255.0, 66.0 / 255.0, 20.0 / 255.0);\n\nfloat rand(vec2 co) {\n    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);\n}\n\nvec3 Overlay(vec3 src, vec3 dst)\n{\n    // if (dst <= 0.5) then: 2 * src * dst\n    // if (dst > 0.5) then: 1 - 2 * (1 - dst) * (1 - src)\n    return vec3((dst.x <= 0.5) ? (2.0 * src.x * dst.x) : (1.0 - 2.0 * (1.0 - dst.x) * (1.0 - src.x)),\n                (dst.y <= 0.5) ? (2.0 * src.y * dst.y) : (1.0 - 2.0 * (1.0 - dst.y) * (1.0 - src.y)),\n                (dst.z <= 0.5) ? (2.0 * src.z * dst.z) : (1.0 - 2.0 * (1.0 - dst.z) * (1.0 - src.z)));\n}\n\n\nvoid main()\n{\n    gl_FragColor = texture2D(uSampler, vTextureCoord);\n    vec3 color = gl_FragColor.rgb;\n\n    if (sepia > 0.0)\n    {\n        float gray = (color.x + color.y + color.z) / 3.0;\n        vec3 grayscale = vec3(gray);\n\n        color = Overlay(SEPIA_RGB, grayscale);\n\n        color = grayscale + sepia * (color - grayscale);\n    }\n\n    vec2 coord = vTextureCoord * filterArea.xy / dimensions.xy;\n\n    if (vignetting > 0.0)\n    {\n        float outter = SQRT_2 - vignetting * SQRT_2;\n        vec2 dir = vec2(vec2(0.5, 0.5) - coord);\n        dir.y *= dimensions.y / dimensions.x;\n        float darker = clamp((outter - length(dir) * SQRT_2) / ( 0.00001 + vignettingBlur * SQRT_2), 0.0, 1.0);\n        color.rgb *= darker + (1.0 - darker) * (1.0 - vignettingAlpha);\n    }\n\n    if (scratchDensity > seed && scratch != 0.0)\n    {\n        float phase = seed * 256.0;\n        float s = mod(floor(phase), 2.0);\n        float dist = 1.0 / scratchDensity;\n        float d = distance(coord, vec2(seed * dist, abs(s - seed * dist)));\n        if (d < seed * 0.6 + 0.4)\n        {\n            highp float period = scratchDensity * 10.0;\n\n            float xx = coord.x * period + phase;\n            float aa = abs(mod(xx, 0.5) * 4.0);\n            float bb = mod(floor(xx / 0.5), 2.0);\n            float yy = (1.0 - bb) * aa + bb * (2.0 - aa);\n\n            float kk = 2.0 * period;\n            float dw = scratchWidth / dimensions.x * (0.75 + seed);\n            float dh = dw * kk;\n\n            float tine = (yy - (2.0 - dh));\n\n            if (tine > 0.0) {\n                float _sign = sign(scratch);\n\n                tine = s * tine / period + scratch + 0.1;\n                tine = clamp(tine + 1.0, 0.5 + _sign * 0.5, 1.5 + _sign * 0.5);\n\n                color.rgb *= tine;\n            }\n        }\n    }\n\n    if (noise > 0.0 && noiseSize > 0.0)\n    {\n        vec2 pixelCoord = vTextureCoord.xy * filterArea.xy;\n        pixelCoord.x = floor(pixelCoord.x / noiseSize);\n        pixelCoord.y = floor(pixelCoord.y / noiseSize);\n        // vec2 d = pixelCoord * noiseSize * vec2(1024.0 + seed * 512.0, 1024.0 - seed * 512.0);\n        // float _noise = snoise(d) * 0.5;\n        float _noise = rand(pixelCoord * noiseSize * seed) - 0.5;\n        color += _noise * noise;\n    }\n\n    gl_FragColor.rgb = color;\n}\n")||this;return n.seed=0,n.uniforms.dimensions=new Float32Array(2),"number"==typeof e?(n.seed=e,e=void 0):n.seed=t,Object.assign(n,b.defaults,e),n}function x(e,t,n){void 0===t&&(t=.05),void 0===n&&(n=e.length);var r=Q.call(this,m,"varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\n\nuniform float epsilon;\n\nconst int MAX_COLORS = %maxColors%;\n\nuniform vec3 originalColors[MAX_COLORS];\nuniform vec3 targetColors[MAX_COLORS];\n\nvoid main(void)\n{\n    gl_FragColor = texture2D(uSampler, vTextureCoord);\n\n    float alpha = gl_FragColor.a;\n    if (alpha < 0.0001)\n    {\n      return;\n    }\n\n    vec3 color = gl_FragColor.rgb / alpha;\n\n    for(int i = 0; i < MAX_COLORS; i++)\n    {\n      vec3 origColor = originalColors[i];\n      if (origColor.r < 0.0)\n      {\n        break;\n      }\n      vec3 colorDiff = origColor - color;\n      if (length(colorDiff) < epsilon)\n      {\n        vec3 targetColor = targetColors[i];\n        gl_FragColor = vec4((targetColor + colorDiff) * alpha, alpha);\n        return;\n      }\n    }\n}\n".replace(/%maxColors%/g,n.toFixed(0)))||this;return r._replacements=[],r._maxColors=0,r.epsilon=t,r._maxColors=n,r.uniforms.originalColors=new Float32Array(3*n),r.uniforms.targetColors=new Float32Array(3*n),r.replacements=e,r}function _(e,t,n){void 0===e&&(e=[0,0]),void 0===t&&(t=5),void 0===n&&(n=0);var r=ee.call(this,m,"varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform vec4 filterArea;\n\nuniform vec2 uVelocity;\nuniform int uKernelSize;\nuniform float uOffset;\n\nconst int MAX_KERNEL_SIZE = 2048;\n\n// Notice:\n// the perfect way:\n//    int kernelSize = min(uKernelSize, MAX_KERNELSIZE);\n// BUT in real use-case , uKernelSize < MAX_KERNELSIZE almost always.\n// So use uKernelSize directly.\n\nvoid main(void)\n{\n    vec4 color = texture2D(uSampler, vTextureCoord);\n\n    if (uKernelSize == 0)\n    {\n        gl_FragColor = color;\n        return;\n    }\n\n    vec2 velocity = uVelocity / filterArea.xy;\n    float offset = -uOffset / length(uVelocity) - 0.5;\n    int k = uKernelSize - 1;\n\n    for(int i = 0; i < MAX_KERNEL_SIZE - 1; i++) {\n        if (i == k) {\n            break;\n        }\n        vec2 bias = velocity * (float(i) / float(k) + offset);\n        color += texture2D(uSampler, vTextureCoord + bias);\n    }\n    gl_FragColor = color / float(uKernelSize);\n}\n")||this;return r.kernelSize=5,r.uniforms.uVelocity=new Float32Array(2),r._velocity=new s.ObservablePoint(r.velocityChanged,r),r.setVelocity(e),r.kernelSize=t,r.offset=n,r}function S(e){var t=te.call(this,m,"varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform vec4 filterArea;\nuniform vec2 dimensions;\n\nuniform vec2 light;\nuniform bool parallel;\nuniform float aspect;\n\nuniform float gain;\nuniform float lacunarity;\nuniform float time;\nuniform float alpha;\n\n${perlin}\n\nvoid main(void) {\n    vec2 coord = vTextureCoord * filterArea.xy / dimensions.xy;\n\n    float d;\n\n    if (parallel) {\n        float _cos = light.x;\n        float _sin = light.y;\n        d = (_cos * coord.x) + (_sin * coord.y * aspect);\n    } else {\n        float dx = coord.x - light.x / dimensions.x;\n        float dy = (coord.y - light.y / dimensions.y) * aspect;\n        float dis = sqrt(dx * dx + dy * dy) + 0.00001;\n        d = dy / dis;\n    }\n\n    vec3 dir = vec3(d, d, 0.0);\n\n    float noise = turb(dir + vec3(time, 0.0, 62.1 + time) * 0.05, vec3(480.0, 320.0, 480.0), lacunarity, gain);\n    noise = mix(noise, 0.0, 0.3);\n    //fade vertically.\n    vec4 mist = vec4(noise, noise, noise, 1.0) * (1.0 - coord.y);\n    mist.a = 1.0;\n    // apply user alpha\n    mist *= alpha;\n\n    gl_FragColor = texture2D(uSampler, vTextureCoord) + mist;\n\n}\n".replace("${perlin}","vec3 mod289(vec3 x)\n{\n    return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\nvec4 mod289(vec4 x)\n{\n    return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\nvec4 permute(vec4 x)\n{\n    return mod289(((x * 34.0) + 1.0) * x);\n}\nvec4 taylorInvSqrt(vec4 r)\n{\n    return 1.79284291400159 - 0.85373472095314 * r;\n}\nvec3 fade(vec3 t)\n{\n    return t * t * t * (t * (t * 6.0 - 15.0) + 10.0);\n}\n// Classic Perlin noise, periodic variant\nfloat pnoise(vec3 P, vec3 rep)\n{\n    vec3 Pi0 = mod(floor(P), rep); // Integer part, modulo period\n    vec3 Pi1 = mod(Pi0 + vec3(1.0), rep); // Integer part + 1, mod period\n    Pi0 = mod289(Pi0);\n    Pi1 = mod289(Pi1);\n    vec3 Pf0 = fract(P); // Fractional part for interpolation\n    vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0\n    vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);\n    vec4 iy = vec4(Pi0.yy, Pi1.yy);\n    vec4 iz0 = Pi0.zzzz;\n    vec4 iz1 = Pi1.zzzz;\n    vec4 ixy = permute(permute(ix) + iy);\n    vec4 ixy0 = permute(ixy + iz0);\n    vec4 ixy1 = permute(ixy + iz1);\n    vec4 gx0 = ixy0 * (1.0 / 7.0);\n    vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;\n    gx0 = fract(gx0);\n    vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);\n    vec4 sz0 = step(gz0, vec4(0.0));\n    gx0 -= sz0 * (step(0.0, gx0) - 0.5);\n    gy0 -= sz0 * (step(0.0, gy0) - 0.5);\n    vec4 gx1 = ixy1 * (1.0 / 7.0);\n    vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;\n    gx1 = fract(gx1);\n    vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);\n    vec4 sz1 = step(gz1, vec4(0.0));\n    gx1 -= sz1 * (step(0.0, gx1) - 0.5);\n    gy1 -= sz1 * (step(0.0, gy1) - 0.5);\n    vec3 g000 = vec3(gx0.x, gy0.x, gz0.x);\n    vec3 g100 = vec3(gx0.y, gy0.y, gz0.y);\n    vec3 g010 = vec3(gx0.z, gy0.z, gz0.z);\n    vec3 g110 = vec3(gx0.w, gy0.w, gz0.w);\n    vec3 g001 = vec3(gx1.x, gy1.x, gz1.x);\n    vec3 g101 = vec3(gx1.y, gy1.y, gz1.y);\n    vec3 g011 = vec3(gx1.z, gy1.z, gz1.z);\n    vec3 g111 = vec3(gx1.w, gy1.w, gz1.w);\n    vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));\n    g000 *= norm0.x;\n    g010 *= norm0.y;\n    g100 *= norm0.z;\n    g110 *= norm0.w;\n    vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));\n    g001 *= norm1.x;\n    g011 *= norm1.y;\n    g101 *= norm1.z;\n    g111 *= norm1.w;\n    float n000 = dot(g000, Pf0);\n    float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));\n    float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));\n    float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));\n    float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));\n    float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));\n    float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));\n    float n111 = dot(g111, Pf1);\n    vec3 fade_xyz = fade(Pf0);\n    vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);\n    vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);\n    float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);\n    return 2.2 * n_xyz;\n}\nfloat turb(vec3 P, vec3 rep, float lacunarity, float gain)\n{\n    float sum = 0.0;\n    float sc = 1.0;\n    float totalgain = 1.0;\n    for (float i = 0.0; i < 6.0; i++)\n    {\n        sum += totalgain * pnoise(P * sc, rep);\n        sc *= lacunarity;\n        totalgain *= gain;\n    }\n    return abs(sum);\n}\n"))||this,e=(t.parallel=!0,t.time=0,t._angle=0,t.uniforms.dimensions=new Float32Array(2),Object.assign(S.defaults,e));return t._angleLight=new s.Point,t.angle=e.angle,t.gain=e.gain,t.lacunarity=e.lacunarity,t.alpha=e.alpha,t.parallel=e.parallel,t.center=e.center,t.time=e.time,t}function C(e){var t=this,e=Object.assign({},C.defaults,e),n=e.outerStrength,r=e.innerStrength,i=e.color,o=e.knockout,l=e.quality,e=Math.round(e.distance);return(t=ne.call(this,m,"varying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nuniform sampler2D uSampler;\n\nuniform float outerStrength;\nuniform float innerStrength;\n\nuniform vec4 glowColor;\n\nuniform vec4 filterArea;\nuniform vec4 filterClamp;\nuniform bool knockout;\n\nconst float PI = 3.14159265358979323846264;\n\nconst float DIST = __DIST__;\nconst float ANGLE_STEP_SIZE = min(__ANGLE_STEP_SIZE__, PI * 2.0);\nconst float ANGLE_STEP_NUM = ceil(PI * 2.0 / ANGLE_STEP_SIZE);\n\nconst float MAX_TOTAL_ALPHA = ANGLE_STEP_NUM * DIST * (DIST + 1.0) / 2.0;\n\nvoid main(void) {\n    vec2 px = vec2(1.0 / filterArea.x, 1.0 / filterArea.y);\n\n    float totalAlpha = 0.0;\n\n    vec2 direction;\n    vec2 displaced;\n    vec4 curColor;\n\n    for (float angle = 0.0; angle < PI * 2.0; angle += ANGLE_STEP_SIZE) {\n       direction = vec2(cos(angle), sin(angle)) * px;\n\n       for (float curDistance = 0.0; curDistance < DIST; curDistance++) {\n           displaced = clamp(vTextureCoord + direction * \n                   (curDistance + 1.0), filterClamp.xy, filterClamp.zw);\n\n           curColor = texture2D(uSampler, displaced);\n\n           totalAlpha += (DIST - curDistance) * curColor.a;\n       }\n    }\n    \n    curColor = texture2D(uSampler, vTextureCoord);\n\n    float alphaRatio = (totalAlpha / MAX_TOTAL_ALPHA);\n\n    float innerGlowAlpha = (1.0 - alphaRatio) * innerStrength * curColor.a;\n    float innerGlowStrength = min(1.0, innerGlowAlpha);\n    \n    vec4 innerColor = mix(curColor, glowColor, innerGlowStrength);\n\n    float outerGlowAlpha = alphaRatio * outerStrength * (1. - curColor.a);\n    float outerGlowStrength = min(1.0 - innerColor.a, outerGlowAlpha);\n\n    vec4 outerGlowColor = outerGlowStrength * glowColor.rgba;\n    \n    if (knockout) {\n      float resultAlpha = outerGlowAlpha + innerGlowAlpha;\n      gl_FragColor = vec4(glowColor.rgb * resultAlpha, resultAlpha);\n    }\n    else {\n      gl_FragColor = innerColor + outerGlowColor;\n    }\n}\n".replace(/__ANGLE_STEP_SIZE__/gi,""+(1/l/e).toFixed(7)).replace(/__DIST__/gi,e.toFixed(0)+".0"))||this).uniforms.glowColor=new Float32Array([0,0,0,1]),Object.assign(t,{color:i,outerStrength:n,innerStrength:r,padding:e,knockout:o}),t}function F(e){var t=re.call(this,m,"// precision highp float;\n\nvarying vec2 vTextureCoord;\nuniform sampler2D uSampler;\n\nuniform vec4 filterArea;\nuniform vec4 filterClamp;\nuniform vec2 dimensions;\nuniform float aspect;\n\nuniform sampler2D displacementMap;\nuniform float offset;\nuniform float sinDir;\nuniform float cosDir;\nuniform int fillMode;\n\nuniform float seed;\nuniform vec2 red;\nuniform vec2 green;\nuniform vec2 blue;\n\nconst int TRANSPARENT = 0;\nconst int ORIGINAL = 1;\nconst int LOOP = 2;\nconst int CLAMP = 3;\nconst int MIRROR = 4;\n\nvoid main(void)\n{\n    vec2 coord = (vTextureCoord * filterArea.xy) / dimensions;\n\n    if (coord.x > 1.0 || coord.y > 1.0) {\n        return;\n    }\n\n    float cx = coord.x - 0.5;\n    float cy = (coord.y - 0.5) * aspect;\n    float ny = (-sinDir * cx + cosDir * cy) / aspect + 0.5;\n\n    // displacementMap: repeat\n    // ny = ny > 1.0 ? ny - 1.0 : (ny < 0.0 ? 1.0 + ny : ny);\n\n    // displacementMap: mirror\n    ny = ny > 1.0 ? 2.0 - ny : (ny < 0.0 ? -ny : ny);\n\n    vec4 dc = texture2D(displacementMap, vec2(0.5, ny));\n\n    float displacement = (dc.r - dc.g) * (offset / filterArea.x);\n\n    coord = vTextureCoord + vec2(cosDir * displacement, sinDir * displacement * aspect);\n\n    if (fillMode == CLAMP) {\n        coord = clamp(coord, filterClamp.xy, filterClamp.zw);\n    } else {\n        if( coord.x > filterClamp.z ) {\n            if (fillMode == TRANSPARENT) {\n                discard;\n            } else if (fillMode == LOOP) {\n                coord.x -= filterClamp.z;\n            } else if (fillMode == MIRROR) {\n                coord.x = filterClamp.z * 2.0 - coord.x;\n            }\n        } else if( coord.x < filterClamp.x ) {\n            if (fillMode == TRANSPARENT) {\n                discard;\n            } else if (fillMode == LOOP) {\n                coord.x += filterClamp.z;\n            } else if (fillMode == MIRROR) {\n                coord.x *= -filterClamp.z;\n            }\n        }\n\n        if( coord.y > filterClamp.w ) {\n            if (fillMode == TRANSPARENT) {\n                discard;\n            } else if (fillMode == LOOP) {\n                coord.y -= filterClamp.w;\n            } else if (fillMode == MIRROR) {\n                coord.y = filterClamp.w * 2.0 - coord.y;\n            }\n        } else if( coord.y < filterClamp.y ) {\n            if (fillMode == TRANSPARENT) {\n                discard;\n            } else if (fillMode == LOOP) {\n                coord.y += filterClamp.w;\n            } else if (fillMode == MIRROR) {\n                coord.y *= -filterClamp.w;\n            }\n        }\n    }\n\n    gl_FragColor.r = texture2D(uSampler, coord + red * (1.0 - seed * 0.4) / filterArea.xy).r;\n    gl_FragColor.g = texture2D(uSampler, coord + green * (1.0 - seed * 0.3) / filterArea.xy).g;\n    gl_FragColor.b = texture2D(uSampler, coord + blue * (1.0 - seed * 0.2) / filterArea.xy).b;\n    gl_FragColor.a = texture2D(uSampler, coord).a;\n}\n")||this;return t.offset=100,t.fillMode=F.TRANSPARENT,t.average=!1,t.seed=0,t.minSize=8,t.sampleSize=512,t._slices=0,t._offsets=new Float32Array(1),t._sizes=new Float32Array(1),t._direction=-1,t.uniforms.dimensions=new Float32Array(2),t._canvas=document.createElement("canvas"),t._canvas.width=4,t._canvas.height=t.sampleSize,t.texture=a.Texture.from(t._canvas,{scaleMode:f.SCALE_MODES.NEAREST}),Object.assign(t,F.defaults,e),t}function it(e){void 0===e&&(e=5);var t=ie.call(this,m,"precision mediump float;\n\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform float strength;\nuniform vec4 filterArea;\n\n\nvoid main(void)\n{\n\tvec2 onePixel = vec2(1.0 / filterArea);\n\n\tvec4 color;\n\n\tcolor.rgb = vec3(0.5);\n\n\tcolor -= texture2D(uSampler, vTextureCoord - onePixel) * strength;\n\tcolor += texture2D(uSampler, vTextureCoord + onePixel) * strength;\n\n\tcolor.rgb = vec3((color.r + color.g + color.b) / 3.0);\n\n\tfloat alpha = texture2D(uSampler, vTextureCoord).a;\n\n\tgl_FragColor = vec4(color.rgb * alpha, alpha);\n}\n")||this;return t.strength=e,t}function T(e){var t=oe.call(this)||this,e=(t.angle=45,t._distance=5,t._resolution=u.settings.FILTER_RESOLUTION,e?_e(_e({},T.defaults),e):T.defaults),n=e.kernels,r=e.blur,i=e.quality,o=e.pixelSize,l=e.resolution,n=(t._tintFilter=new a.Filter(m,"varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform float alpha;\nuniform vec3 color;\n\nuniform vec2 shift;\nuniform vec4 inputSize;\n\nvoid main(void){\n    vec4 sample = texture2D(uSampler, vTextureCoord - shift * inputSize.zw);\n\n    // Premultiply alpha\n    sample.rgb = color.rgb * sample.a;\n\n    // alpha user alpha\n    sample *= alpha;\n\n    gl_FragColor = sample;\n}"),t._tintFilter.uniforms.color=new Float32Array(4),t._tintFilter.uniforms.shift=new s.Point,t._tintFilter.resolution=l,t._blurFilter=n?new d(n):new d(r,i),t.pixelSize=o,t.resolution=l,e.shadowOnly),r=e.rotation,i=e.distance,o=e.alpha,l=e.color;return t.shadowOnly=n,t.rotation=r,t.distance=i,t.alpha=o,t.color=l,t._updatePadding(),t}function ot(e,t){void 0===e&&(e=1),void 0===t&&(t=5);var n=le.call(this,m,"precision mediump float;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nuniform vec4 filterArea;\nuniform sampler2D uSampler;\n\nuniform float angle;\nuniform float scale;\n\nfloat pattern()\n{\n   float s = sin(angle), c = cos(angle);\n   vec2 tex = vTextureCoord * filterArea.xy;\n   vec2 point = vec2(\n       c * tex.x - s * tex.y,\n       s * tex.x + c * tex.y\n   ) * scale;\n   return (sin(point.x) * sin(point.y)) * 4.0;\n}\n\nvoid main()\n{\n   vec4 color = texture2D(uSampler, vTextureCoord);\n   float average = (color.r + color.g + color.b) / 3.0;\n   gl_FragColor = vec4(vec3(average * 10.0 - 5.0 + pattern()), color.a);\n}\n")||this;return n.scale=e,n.angle=t,n}function I(e){var t=ae.call(this,m,"varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\n\nuniform vec4 filterArea;\nuniform vec2 dimensions;\n\nconst float SQRT_2 = 1.414213;\n\nconst float light = 1.0;\n\nuniform float curvature;\nuniform float lineWidth;\nuniform float lineContrast;\nuniform bool verticalLine;\nuniform float noise;\nuniform float noiseSize;\n\nuniform float vignetting;\nuniform float vignettingAlpha;\nuniform float vignettingBlur;\n\nuniform float seed;\nuniform float time;\n\nfloat rand(vec2 co) {\n    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);\n}\n\nvoid main(void)\n{\n    vec2 pixelCoord = vTextureCoord.xy * filterArea.xy;\n    vec2 dir = vec2(vTextureCoord.xy * filterArea.xy / dimensions - vec2(0.5, 0.5));\n    \n    gl_FragColor = texture2D(uSampler, vTextureCoord);\n    vec3 rgb = gl_FragColor.rgb;\n\n    if (noise > 0.0 && noiseSize > 0.0)\n    {\n        pixelCoord.x = floor(pixelCoord.x / noiseSize);\n        pixelCoord.y = floor(pixelCoord.y / noiseSize);\n        float _noise = rand(pixelCoord * noiseSize * seed) - 0.5;\n        rgb += _noise * noise;\n    }\n\n    if (lineWidth > 0.0)\n    {\n        float _c = curvature > 0. ? curvature : 1.;\n        float k = curvature > 0. ?(length(dir * dir) * 0.25 * _c * _c + 0.935 * _c) : 1.;\n        vec2 uv = dir * k;\n\n        float v = (verticalLine ? uv.x * dimensions.x : uv.y * dimensions.y) * min(1.0, 2.0 / lineWidth ) / _c;\n        float j = 1. + cos(v * 1.2 - time) * 0.5 * lineContrast;\n        rgb *= j;\n        float segment = verticalLine ? mod((dir.x + .5) * dimensions.x, 4.) : mod((dir.y + .5) * dimensions.y, 4.);\n        rgb *= 0.99 + ceil(segment) * 0.015;\n    }\n\n    if (vignetting > 0.0)\n    {\n        float outter = SQRT_2 - vignetting * SQRT_2;\n        float darker = clamp((outter - length(dir) * SQRT_2) / ( 0.00001 + vignettingBlur * SQRT_2), 0.0, 1.0);\n        rgb *= darker + (1.0 - darker) * (1.0 - vignettingAlpha);\n    }\n\n    gl_FragColor.rgb = rgb;\n}\n")||this;return t.time=0,t.seed=0,t.uniforms.dimensions=new Float32Array(2),Object.assign(t,I.defaults,e),t}function lt(){return se.call(this,m,"precision mediump float;\n\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\n\nvoid main(void)\n{\n    float lum = length(texture2D(uSampler, vTextureCoord.xy).rgb);\n\n    gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);\n\n    if (lum < 1.00)\n    {\n        if (mod(gl_FragCoord.x + gl_FragCoord.y, 10.0) == 0.0)\n        {\n            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);\n        }\n    }\n\n    if (lum < 0.75)\n    {\n        if (mod(gl_FragCoord.x - gl_FragCoord.y, 10.0) == 0.0)\n        {\n            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);\n        }\n    }\n\n    if (lum < 0.50)\n    {\n        if (mod(gl_FragCoord.x + gl_FragCoord.y - 5.0, 10.0) == 0.0)\n        {\n            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);\n        }\n    }\n\n    if (lum < 0.3)\n    {\n        if (mod(gl_FragCoord.x - gl_FragCoord.y - 5.0, 10.0) == 0.0)\n        {\n            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);\n        }\n    }\n}\n")||this}function O(e,t,n){void 0===t&&(t=200),void 0===n&&(n=200);var r=ue.call(this,m,"precision mediump float;\n\nvarying mediump vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform vec2 texelSize;\nuniform float matrix[9];\n\nvoid main(void)\n{\n   vec4 c11 = texture2D(uSampler, vTextureCoord - texelSize); // top left\n   vec4 c12 = texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y - texelSize.y)); // top center\n   vec4 c13 = texture2D(uSampler, vec2(vTextureCoord.x + texelSize.x, vTextureCoord.y - texelSize.y)); // top right\n\n   vec4 c21 = texture2D(uSampler, vec2(vTextureCoord.x - texelSize.x, vTextureCoord.y)); // mid left\n   vec4 c22 = texture2D(uSampler, vTextureCoord); // mid center\n   vec4 c23 = texture2D(uSampler, vec2(vTextureCoord.x + texelSize.x, vTextureCoord.y)); // mid right\n\n   vec4 c31 = texture2D(uSampler, vec2(vTextureCoord.x - texelSize.x, vTextureCoord.y + texelSize.y)); // bottom left\n   vec4 c32 = texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y + texelSize.y)); // bottom center\n   vec4 c33 = texture2D(uSampler, vTextureCoord + texelSize); // bottom right\n\n   gl_FragColor =\n       c11 * matrix[0] + c12 * matrix[1] + c13 * matrix[2] +\n       c21 * matrix[3] + c22 * matrix[4] + c23 * matrix[5] +\n       c31 * matrix[6] + c32 * matrix[7] + c33 * matrix[8];\n\n   gl_FragColor.a = c22.a;\n}\n")||this;return r.uniforms.texelSize=new Float32Array(2),r.uniforms.matrix=new Float32Array(9),void 0!==e&&(r.matrix=e),r.width=t,r.height=n,r}function at(e,t,n){void 0===e&&(e=16711680),void 0===t&&(t=0),void 0===n&&(n=.4);var r=ce.call(this,m,"varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform vec3 originalColor;\nuniform vec3 newColor;\nuniform float epsilon;\nvoid main(void) {\n    vec4 currentColor = texture2D(uSampler, vTextureCoord);\n    vec3 colorDiff = originalColor - (currentColor.rgb / max(currentColor.a, 0.0000000001));\n    float colorDistance = length(colorDiff);\n    float doReplace = step(colorDistance, epsilon);\n    gl_FragColor = vec4(mix(currentColor.rgb, (newColor + colorDiff) * currentColor.a, doReplace), currentColor.a);\n}\n")||this;return r._originalColor=16711680,r._newColor=0,r.uniforms.originalColor=new Float32Array(3),r.uniforms.newColor=new Float32Array(3),r.originalColor=e,r.newColor=t,r.epsilon=n,r}function st(e,t){void 0===e&&(e=0),void 0===t&&(t=1);var n=fe.call(this,m,"varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform vec3 color;\nuniform float alpha;\n\nvoid main(void) {\n    vec4 currentColor = texture2D(uSampler, vTextureCoord);\n    gl_FragColor = vec4(mix(currentColor.rgb, color.rgb, currentColor.a * alpha), currentColor.a);\n}\n")||this;return n._color=0,n._alpha=1,n.uniforms.color=new Float32Array(3),n.color=e,n.alpha=t,n}function A(e,t,n){void 0===t&&(t=!1),void 0===n&&(n=1);var r=me.call(this,m,"varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform sampler2D colorMap;\nuniform float _mix;\nuniform float _size;\nuniform float _sliceSize;\nuniform float _slicePixelSize;\nuniform float _sliceInnerSize;\nvoid main() {\n    vec4 color = texture2D(uSampler, vTextureCoord.xy);\n\n    vec4 adjusted;\n    if (color.a > 0.0) {\n        color.rgb /= color.a;\n        float innerWidth = _size - 1.0;\n        float zSlice0 = min(floor(color.b * innerWidth), innerWidth);\n        float zSlice1 = min(zSlice0 + 1.0, innerWidth);\n        float xOffset = _slicePixelSize * 0.5 + color.r * _sliceInnerSize;\n        float s0 = xOffset + (zSlice0 * _sliceSize);\n        float s1 = xOffset + (zSlice1 * _sliceSize);\n        float yOffset = _sliceSize * 0.5 + color.g * (1.0 - _sliceSize);\n        vec4 slice0Color = texture2D(colorMap, vec2(s0,yOffset));\n        vec4 slice1Color = texture2D(colorMap, vec2(s1,yOffset));\n        float zOffset = fract(color.b * innerWidth);\n        adjusted = mix(slice0Color, slice1Color, zOffset);\n\n        color.rgb *= color.a;\n    }\n    gl_FragColor = vec4(mix(color, adjusted, _mix).rgb, color.a);\n\n}")||this;return r.mix=1,r._size=0,r._sliceSize=0,r._slicePixelSize=0,r._sliceInnerSize=0,r._nearest=!1,r._scaleMode=null,r._colorMap=null,r._scaleMode=null,r.nearest=t,r.mix=n,r.colorMap=e,r}function R(e){var t=de.call(this,m,"uniform float radius;\nuniform float strength;\nuniform vec2 center;\nuniform sampler2D uSampler;\nvarying vec2 vTextureCoord;\n\nuniform vec4 filterArea;\nuniform vec4 filterClamp;\nuniform vec2 dimensions;\n\nvoid main()\n{\n    vec2 coord = vTextureCoord * filterArea.xy;\n    coord -= center * dimensions.xy;\n    float distance = length(coord);\n    if (distance < radius) {\n        float percent = distance / radius;\n        if (strength > 0.0) {\n            coord *= mix(1.0, smoothstep(0.0, radius / distance, percent), strength * 0.75);\n        } else {\n            coord *= mix(1.0, pow(percent, 1.0 + strength * 0.75) * radius / distance, 1.0 - percent);\n        }\n    }\n    coord += center * dimensions.xy;\n    coord /= filterArea.xy;\n    vec2 clampedCoord = clamp(coord, filterClamp.xy, filterClamp.zw);\n    vec4 color = texture2D(uSampler, clampedCoord);\n    if (coord != clampedCoord) {\n        color *= max(0.0, 1.0 - length(coord - clampedCoord));\n    }\n\n    gl_FragColor = color;\n}\n")||this;return t.uniforms.dimensions=new Float32Array(2),Object.assign(t,R.defaults,e),t}function P(e,t,n,r){void 0===e&&(e=2),void 0===t&&(t=4),void 0===n&&(n=u.settings.FILTER_RESOLUTION),void 0===r&&(r=5);var i,o,l=pe.call(this)||this;return"number"==typeof e?o=i=e:e instanceof s.Point?(i=e.x,o=e.y):Array.isArray(e)&&(i=e[0],o=e[1]),l.blurXFilter=new N.BlurFilterPass(!0,i,t,n,r),l.blurYFilter=new N.BlurFilterPass(!1,o,t,n,r),l.blurYFilter.blendMode=f.BLEND_MODES.SCREEN,l.defaultFilter=new M.AlphaFilter,l}function E(e){var t=he.call(this,m,"precision mediump float;\n\nvarying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform vec4 filterArea;\n\nuniform float transformX;\nuniform float transformY;\nuniform vec3 lightColor;\nuniform float lightAlpha;\nuniform vec3 shadowColor;\nuniform float shadowAlpha;\n\nvoid main(void) {\n    vec2 transform = vec2(1.0 / filterArea) * vec2(transformX, transformY);\n    vec4 color = texture2D(uSampler, vTextureCoord);\n    float light = texture2D(uSampler, vTextureCoord - transform).a;\n    float shadow = texture2D(uSampler, vTextureCoord + transform).a;\n\n    color.rgb = mix(color.rgb, lightColor, clamp((color.a - light) * lightAlpha, 0.0, 1.0));\n    color.rgb = mix(color.rgb, shadowColor, clamp((color.a - shadow) * shadowAlpha, 0.0, 1.0));\n    gl_FragColor = vec4(color.rgb * color.a, color.a);\n}\n")||this;return t._thickness=2,t._angle=0,t.uniforms.lightColor=new Float32Array(3),t.uniforms.shadowColor=new Float32Array(3),Object.assign(t,{rotation:45,thickness:2,lightColor:16777215,lightAlpha:.7,shadowColor:0,shadowAlpha:.7},e),t.padding=1,t}function ut(e){void 0===e&&(e=8);var t=ge.call(this,m,"varying vec2 vTextureCoord;\n\nuniform vec4 filterArea;\nuniform float pixelSize;\nuniform sampler2D uSampler;\n\nvec2 mapCoord( vec2 coord )\n{\n    coord *= filterArea.xy;\n    coord += filterArea.zw;\n\n    return coord;\n}\n\nvec2 unmapCoord( vec2 coord )\n{\n    coord -= filterArea.zw;\n    coord /= filterArea.xy;\n\n    return coord;\n}\n\nvec2 pixelate(vec2 coord, vec2 size)\n{\n    return floor( coord / size ) * size;\n}\n\nvec2 getMod(vec2 coord, vec2 size)\n{\n    return mod( coord , size) / size;\n}\n\nfloat character(float n, vec2 p)\n{\n    p = floor(p*vec2(4.0, -4.0) + 2.5);\n\n    if (clamp(p.x, 0.0, 4.0) == p.x)\n    {\n        if (clamp(p.y, 0.0, 4.0) == p.y)\n        {\n            if (int(mod(n/exp2(p.x + 5.0*p.y), 2.0)) == 1) return 1.0;\n        }\n    }\n    return 0.0;\n}\n\nvoid main()\n{\n    vec2 coord = mapCoord(vTextureCoord);\n\n    // get the rounded color..\n    vec2 pixCoord = pixelate(coord, vec2(pixelSize));\n    pixCoord = unmapCoord(pixCoord);\n\n    vec4 color = texture2D(uSampler, pixCoord);\n\n    // determine the character to use\n    float gray = (color.r + color.g + color.b) / 3.0;\n\n    float n =  65536.0;             // .\n    if (gray > 0.2) n = 65600.0;    // :\n    if (gray > 0.3) n = 332772.0;   // *\n    if (gray > 0.4) n = 15255086.0; // o\n    if (gray > 0.5) n = 23385164.0; // &\n    if (gray > 0.6) n = 15252014.0; // 8\n    if (gray > 0.7) n = 13199452.0; // @\n    if (gray > 0.8) n = 11512810.0; // #\n\n    // get the mod..\n    vec2 modd = getMod(coord, vec2(pixelSize));\n\n    gl_FragColor = color * character( n, vec2(-1.0) + modd * 2.0);\n\n}\n")||this;return t.size=e,t}function L(e){var t=ve.call(this,m,"uniform sampler2D uSampler;\nvarying vec2 vTextureCoord;\n\nuniform sampler2D bloomTexture;\nuniform float bloomScale;\nuniform float brightness;\n\nvoid main() {\n    vec4 color = texture2D(uSampler, vTextureCoord);\n    color.rgb *= brightness;\n    vec4 bloomColor = vec4(texture2D(bloomTexture, vTextureCoord).rgb, 0.0);\n    bloomColor.rgb *= bloomScale;\n    gl_FragColor = color + bloomColor;\n}\n")||this,e=(t.bloomScale=1,t.brightness=1,t._resolution=u.settings.FILTER_RESOLUTION,"number"==typeof e&&(e={threshold:e}),Object.assign(L.defaults,e)),n=(t.bloomScale=e.bloomScale,t.brightness=e.brightness,e.kernels),r=e.blur,i=e.quality,o=e.pixelSize,l=e.resolution;return t._extractFilter=new Se(e.threshold),t._extractFilter.resolution=l,t._blurFilter=n?new d(n):new d(r,i),t.pixelSize=o,t.resolution=l,t}function z(e,t,n){void 0===e&&(e=4),void 0===t&&(t=3);var r=ye.call(this,m,(n=void 0===n?!1:n)?"\nvarying vec2 vTextureCoord;\nuniform sampler2D uSampler;\n\nuniform vec2 uOffset;\nuniform vec4 filterClamp;\n\nvoid main(void)\n{\n    vec4 color = vec4(0.0);\n\n    // Sample top left pixel\n    color += texture2D(uSampler, clamp(vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y + uOffset.y), filterClamp.xy, filterClamp.zw));\n\n    // Sample top right pixel\n    color += texture2D(uSampler, clamp(vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y + uOffset.y), filterClamp.xy, filterClamp.zw));\n\n    // Sample bottom right pixel\n    color += texture2D(uSampler, clamp(vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y - uOffset.y), filterClamp.xy, filterClamp.zw));\n\n    // Sample bottom left pixel\n    color += texture2D(uSampler, clamp(vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y - uOffset.y), filterClamp.xy, filterClamp.zw));\n\n    // Average\n    color *= 0.25;\n\n    gl_FragColor = color;\n}\n":"\nvarying vec2 vTextureCoord;\nuniform sampler2D uSampler;\n\nuniform vec2 uOffset;\n\nvoid main(void)\n{\n    vec4 color = vec4(0.0);\n\n    // Sample top left pixel\n    color += texture2D(uSampler, vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y + uOffset.y));\n\n    // Sample top right pixel\n    color += texture2D(uSampler, vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y + uOffset.y));\n\n    // Sample bottom right pixel\n    color += texture2D(uSampler, vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y - uOffset.y));\n\n    // Sample bottom left pixel\n    color += texture2D(uSampler, vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y - uOffset.y));\n\n    // Average\n    color *= 0.25;\n\n    gl_FragColor = color;\n}")||this;return r._kernels=[],r._blur=4,r._quality=3,r.uniforms.uOffset=new Float32Array(2),r._pixelSize=new s.Point,r.pixelSize=1,r._clamp=n,Array.isArray(e)?r.kernels=e:(r._blur=e,r.quality=t),r}function ct(e){void 0===e&&(e=.5);var t=be.call(this,m,"\nuniform sampler2D uSampler;\nvarying vec2 vTextureCoord;\n\nuniform float threshold;\n\nvoid main() {\n    vec4 color = texture2D(uSampler, vTextureCoord);\n\n    // A simple & fast algorithm for getting brightness.\n    // It's inaccuracy , but good enought for this feature.\n    float _max = max(max(color.r, color.g), color.b);\n    float _min = min(min(color.r, color.g), color.b);\n    float brightness = (_max + _min) * 0.5;\n\n    if(brightness > threshold) {\n        gl_FragColor = color;\n    } else {\n        gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);\n    }\n}\n")||this;return t.threshold=e,t}function ft(e){var t=xe.call(this,m,"varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\n\nuniform float gamma;\nuniform float contrast;\nuniform float saturation;\nuniform float brightness;\nuniform float red;\nuniform float green;\nuniform float blue;\nuniform float alpha;\n\nvoid main(void)\n{\n    vec4 c = texture2D(uSampler, vTextureCoord);\n\n    if (c.a > 0.0) {\n        c.rgb /= c.a;\n\n        vec3 rgb = pow(c.rgb, vec3(1. / gamma));\n        rgb = mix(vec3(.5), mix(vec3(dot(vec3(.2125, .7154, .0721), rgb)), rgb, saturation), contrast);\n        rgb.r *= red;\n        rgb.g *= green;\n        rgb.b *= blue;\n        c.rgb = rgb * brightness;\n\n        c.rgb *= c.a;\n    }\n\n    gl_FragColor = c * alpha;\n}\n")||this;return t.gamma=1,t.saturation=1,t.contrast=1,t.brightness=1,t.red=1,t.green=1,t.blue=1,t.alpha=1,Object.assign(t,e),t}Object.assign(PIXI.filters,et);var mt="Timi_Filter",w=PluginManager.parameters(mt),D={PLUGIN_NAME:mt,ADJUSTMENT_FILTER:{SWITCH:Number(w["AdjustmentFilter.Switch"]),GAMMA:Number(w["AdjustmentFilter.Gamma"]),SATURATION:Number(w["AdjustmentFilter.Saturation"]),CONTRAST:Number(w["AdjustmentFilter.Contrast"]),BRIGHTNESS:Number(w["AdjustmentFilter.Brightness"]),RED:Number(w["AdjustmentFilter.RedChannel"]),GREEN:Number(w["AdjustmentFilter.GreenChannel"]),BLUE:Number(w["AdjustmentFilter.BlueChannel"])},ADVANCED_BLOOM_FILTER:{SWITCH:Number(w["AdvancedBloomFilter.Switch"]),THRESHOLD:Number(w["AdvancedBloomFilter.Threshold"]),BLOOM_SCALE:Number(w["AdvancedBloomFilter.BloomScale"]),BRIGHTNESS:Number(w["AdvancedBloomFilter.Brightness"]),BLUR:Number(w["AdvancedBloomFilter.Blur"])},BLOOM_FILTER:{SWITCH:Number(w["BloomFilter.Switch"]),BLUR:Number(w["BloomFilter.Blur"])},BULGE_PINCH_FILTER:{SWITCH:Number(w["BulgePinchFilter.Switch"]),RX:Number(w["BulgePinchFilter.Rx"]),RY:Number(w["BulgePinchFilter.Ry"]),RADIUS:Number(w["BulgePinchFilter.Radius"]),STRENGTH:Number(w["BulgePinchFilter.Strength"])},GLITCH_FILTER:{SWITCH:Number(w["GlitchFilter.Switch"]),SLICES:Number(w["GlitchFilter.Slices"]),OFFSET:Number(w["GlitchFilter.Offset"]),AVERAGE:Boolean(w["GlitchFilter.Average"]),MIN_SIZE:Number(w["GlitchFilter.MinSize"]),SAMPLE_SIZE:Number(w["GlitchFilter.SampleSize"])},RGB_SPLIT_FILTER:{SWITCH:Number(w["RGBSplitFilter.Switch"]),SPLIT:Number(w["RGBSplitFilter.Split"])},TILT_SHIFT_FILTER:{SWITCH:Number(w["TiltShiftFilter.Switch"]),BLUR:Number(w["TiltShiftFilter.Blur"]),BLUR_RANGE:Number(w["TiltShiftFilter.BlurRange"])},CRT_FILTER:{SWITCH:Number(w["CRTFilter.Switch"]),CURVATURE:Number(w["CRTFilter.Curvature"]),LINE_WIDTH:Number(w["CRTFilter.LineWidth"]),LINE_CONTRAST:Number(w["CRTFilter.LineContrast"]),NOISE:Number(w["CRTFilter.Noise"]),NOISE_SIZE:Number(w["CRTFilter.NoiseSize"]),VIGNETTING:Number(w["CRTFilter.Vignetting"]),VIGNETTING_ALPHA:Number(w["CRTFilter.VignettingAlpha"]),VIGNETTING_BLUR:Number(w["CRTFilter.VignettingBlur"]),SPEED:Number(w["CRTFilter.Speed"])},OLD_FILM_FILTER:{SWITCH:Number(w["OldFilmFilter.Switch"]),SEPIA:Number(w["OldFilmFilter.Sepia"]),NOISE:Number(w["OldFilmFilter.Noise"]),NOISE_SIZE:Number(w["OldFilmFilter.NoiseSize"]),SCRATCH:Number(w["OldFilmFilter.Scratch"]),SCRATCH_DENSITY:Number(w["OldFilmFilter.ScratchDensity"]),SCRATCH_WIDTH:Number(w["OldFilmFilter.ScratchWidth"]),VIGNETTING:Number(w["OldFilmFilter.Vignetting"]),VIGNETTING_ALPHA:Number(w["OldFilmFilter.VignettingAlpha"]),VIGNETTING_BLUR:Number(w["OldFilmFilter.VignettingBlur"])},PIXELATE_FILTER:{SWITCH:Number(w["PixelateFilter.Switch"]),SIZE:Number(w["PixelateFilter.Size"])},ASCII_FILTER:{SWITCH:Number(w["AsciiFilter.Switch"]),SIZE:Number(w["AsciiFilter.Size"])},CROSS_HATCH_FILTER:{SWITCH:Number(w["CrossHatchFilter.Switch"])},DOT_FILTER:{SWITCH:Number(w["DotFilter.Switch"])},EMBOSS_FILTER:{SWITCH:Number(w["EmbossFilter.Switch"])}};const dt=Scene_Base.prototype.initialize,pt=(Scene_Base.prototype.initialize=function(){dt.call(this),0<D.ADJUSTMENT_FILTER.SWITCH&&(this._adjustmentFilter=new PIXI.filters.AdjustmentFilter({gamma:D.ADJUSTMENT_FILTER.GAMMA,saturation:D.ADJUSTMENT_FILTER.SATURATION,contrast:D.ADJUSTMENT_FILTER.CONTRAST,brightness:D.ADJUSTMENT_FILTER.BRIGHTNESS,red:D.ADJUSTMENT_FILTER.RED,green:D.ADJUSTMENT_FILTER.GREEN,blue:D.ADJUSTMENT_FILTER.BLUE}),this.filters.push(this._adjustmentFilter)),0<D.ADVANCED_BLOOM_FILTER.SWITCH&&(this._advancedBloomFilter=new PIXI.filters.AdvancedBloomFilter({threshold:D.ADVANCED_BLOOM_FILTER.THRESHOLD,bloomScale:D.ADVANCED_BLOOM_FILTER.BLOOM_SCALE,brightness:D.ADVANCED_BLOOM_FILTER.BRIGHTNESS,blur:D.ADVANCED_BLOOM_FILTER.BLUR}),this.filters.push(this._advancedBloomFilter)),0<D.BLOOM_FILTER.SWITCH&&(this._bloomFilter=new PIXI.filters.BloomFilter(D.BLOOM_FILTER.BLUR),this.filters.push(this._bloomFilter)),0<D.BULGE_PINCH_FILTER.SWITCH&&(this._bulgePinchFilter=new PIXI.filters.BulgePinchFilter({center:[D.BULGE_PINCH_FILTER.RX,D.BULGE_PINCH_FILTER.RY],radius:D.BULGE_PINCH_FILTER.RADIUS,strength:D.BULGE_PINCH_FILTER.STRENGTH}),this.filters.push(this._bulgePinchFilter)),0<D.GLITCH_FILTER.SWITCH&&(this._glitchFilter=new PIXI.filters.GlitchFilter({fillMode:2,slices:D.GLITCH_FILTER.SLICES,offset:D.GLITCH_FILTER.OFFSET,average:D.GLITCH_FILTER.AVERAGE,minSize:D.GLITCH_FILTER.MIN_SIZE,sampleSize:D.GLITCH_FILTER.SAMPLE_SIZE}),this.filters.push(this._glitchFilter)),0<D.RGB_SPLIT_FILTER.SWITCH&&(this._RGBSplitFilter=new PIXI.filters.RGBSplitFilter(new PIXI.Point(-D.RGB_SPLIT_FILTER.SPLIT,0),new PIXI.Point(0,D.RGB_SPLIT_FILTER.SPLIT),new PIXI.Point(0,0)),this.filters.push(this._RGBSplitFilter)),0<D.TILT_SHIFT_FILTER.SWITCH&&(this._tiltShiftFilter=new PIXI.filters.TiltShiftFilter(D.TILT_SHIFT_FILTER.BLUR,D.TILT_SHIFT_FILTER.BLUR_RANGE),this.filters.push(this._tiltShiftFilter)),0<D.CRT_FILTER.SWITCH&&(this._CRTFilter=new PIXI.filters.CRTFilter({curvature:D.CRT_FILTER.CURVATURE,lineWidth:D.CRT_FILTER.LINE_WIDTH,lineContrast:D.CRT_FILTER.LINE_CONTRAST,noise:D.CRT_FILTER.NOISE,noiseSize:D.CRT_FILTER.NOISE_SIZE,vignetting:D.CRT_FILTER.VIGNETTING,vignettingAlpha:D.CRT_FILTER.VIGNETTING_ALPHA,vignettingBlur:D.CRT_FILTER.VIGNETTING_BLUR}),this.filters.push(this._CRTFilter)),0<D.OLD_FILM_FILTER.SWITCH&&(this._oldFilmFilter=new PIXI.filters.OldFilmFilter({sepia:D.OLD_FILM_FILTER.SEPIA,noise:D.OLD_FILM_FILTER.NOISE,noiseSize:D.OLD_FILM_FILTER.NOISE_SIZE,scratch:D.OLD_FILM_FILTER.SCRATCH,scratchDensity:D.OLD_FILM_FILTER.SCRATCH_DENSITY,scratchWidth:D.OLD_FILM_FILTER.SCRATCH_WIDTH,vignetting:D.OLD_FILM_FILTER.VIGNETTING,vignettingAlpha:D.OLD_FILM_FILTER.VIGNETTING_ALPHA,vignettingBlur:D.OLD_FILM_FILTER.VIGNETTING_BLUR}),this.filters.push(this._oldFilmFilter)),0<D.PIXELATE_FILTER.SWITCH&&(this._pixelateFilter=new PIXI.filters.PixelateFilter(D.PIXELATE_FILTER.SIZE),this.filters.push(this._pixelateFilter)),0<D.ASCII_FILTER.SWITCH&&(this._asciiFilter=new PIXI.filters.AsciiFilter(D.ASCII_FILTER.SIZE),this.filters.push(this._asciiFilter)),0<D.CROSS_HATCH_FILTER.SWITCH&&(this._crossHatchFilter=new PIXI.filters.CrossHatchFilter,this.filters.push(this._crossHatchFilter)),0<D.DOT_FILTER.SWITCH&&(this._dotFilter=new PIXI.filters.DotFilter,this.filters.push(this._dotFilter)),0<D.EMBOSS_FILTER.SWITCH&&(this._embossFilter=new PIXI.filters.EmbossFilter,this.filters.push(this._embossFilter))},Scene_Base.prototype.update);Scene_Base.prototype.update=function(){pt.call(this),this.updateFilters()},Scene_Base.prototype.updateFilters=function(){0<D.ADJUSTMENT_FILTER.SWITCH&&(this._adjustmentFilter.enabled=$gameSwitches.value(D.ADJUSTMENT_FILTER.SWITCH)),0<D.ADVANCED_BLOOM_FILTER.SWITCH&&(this._advancedBloomFilter.enabled=$gameSwitches.value(D.ADVANCED_BLOOM_FILTER.SWITCH)),0<D.BLOOM_FILTER.SWITCH&&(this._bloomFilter.enabled=$gameSwitches.value(D.BLOOM_FILTER.SWITCH)),0<D.BULGE_PINCH_FILTER.SWITCH&&(this._bulgePinchFilter.enabled=$gameSwitches.value(D.BULGE_PINCH_FILTER.SWITCH)),0<D.GLITCH_FILTER.SWITCH&&(this._glitchFilter.enabled=$gameSwitches.value(D.GLITCH_FILTER.SWITCH)),0<D.RGB_SPLIT_FILTER.SWITCH&&(this._RGBSplitFilter.enabled=$gameSwitches.value(D.RGB_SPLIT_FILTER.SWITCH)),0<D.TILT_SHIFT_FILTER.SWITCH&&(this._tiltShiftFilter.enabled=$gameSwitches.value(D.TILT_SHIFT_FILTER.SWITCH)),0<D.CRT_FILTER.SWITCH&&(this._CRTFilter.enabled=$gameSwitches.value(D.CRT_FILTER.SWITCH),this._CRTFilter.seed=Math.random(),this._CRTFilter.time+=D.CRT_FILTER.SPEED),0<D.OLD_FILM_FILTER.SWITCH&&(this._oldFilmFilter.enabled=$gameSwitches.value(D.OLD_FILM_FILTER.SWITCH),this._oldFilmFilter.seed=Math.random()),0<D.PIXELATE_FILTER.SWITCH&&(this._pixelateFilter.enabled=$gameSwitches.value(D.PIXELATE_FILTER.SWITCH)),0<D.ASCII_FILTER.SWITCH&&(this._asciiFilter.enabled=$gameSwitches.value(D.ASCII_FILTER.SWITCH)),0<D.CROSS_HATCH_FILTER.SWITCH&&(this._crossHatchFilter.enabled=$gameSwitches.value(D.CROSS_HATCH_FILTER.SWITCH)),0<D.DOT_FILTER.SWITCH&&(this._dotFilter.enabled=$gameSwitches.value(D.DOT_FILTER.SWITCH)),0<D.EMBOSS_FILTER.SWITCH&&(this._embossFilter.enabled=$gameSwitches.value(D.EMBOSS_FILTER.SWITCH))}}();

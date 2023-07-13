//=============================================================================
// Timi Interpreter 2: Operation-Related Extend
//=============================================================================

/*:
 * @target MZ
 * @plugindesc Timi Interpreter 2: Operation-Related Extend
 * @author Timi (羊羽)
 * @url https://www.tinytsunami.info
 * 
 * 
 * @command setVraiblesNull
 * @text Set Variables Null
 * 
 * @arg start
 * @text Start Variable
 * @type variable
 * @default 0
 * 
 * @arg end
 * @text End Variable
 * @type variable
 * @default 0
 * 
 * @command checkVariableNull
 * @text Check Variable Null
 * 
 * @arg variableId
 * @text Variable ID
 * @type variable
 * @default 0
 * 
 * @arg switchId
 * @text Switch ID (Output)
 * @type variable
 * @default 0
 * 
 * @command setVariableString
 * @text Set Variable String
 * 
 * @arg variableId
 * @text Variable ID
 * @type variable
 * @default 0
 * 
 * @arg value
 * @text Value
 * @type multiline_string
 * @default 
 * 
 * @command checkVariableString
 * @text Check Variable String
 * 
 * @arg variableId
 * @text Variable ID
 * @type variable
 * @default 0
 * 
 * @arg value
 * @text Value
 * @type string
 * @default 
 * 
 * @arg switchId
 * @text Switch ID (Output)
 * @type variable
 * @default 0
 * 
 * @command switchToVariable
 * @text Switch To Variable
 * 
 * @arg switchId
 * @text Switch ID
 * @type variable
 * @default 0
 * 
 * @arg variableId
 * @text Variable ID (Output)
 * @type variable
 * @default 0
 * 
 * @command variableToSwitch
 * @text Variable To Switch
 * 
 * @arg variableId
 * @text Variable ID
 * @type variable
 * @default 0
 * 
 * @arg switchId
 * @text Switch ID (Output)
 * @type variable
 * @default 0
 * 
 * @command switchToVariableByVariable
 * @text Switch To Variable By Variable
 * 
 * @arg switchIdByVariable
 * @text Switch ID (Variable)
 * @type variable
 * @default 0
 * 
 * @arg variableId
 * @text Variable ID (Output)
 * @type variable
 * @default 0
 * 
 * @command variableToSwitchByVariable
 * @text Variable To Switch By Variable
 * 
 * @arg switchIdByVariable
 * @text Switch ID (Variable)
 * @type variable
 * @default 0
 * 
 * @arg variableId
 * @text Variable ID (Output)
 * @type variable
 * @default 0
 * 
 * @command variableToVariableByVariable
 * @text Variable To Variable By Variable
 * 
 * @arg variableIdByVariable
 * @text Variable ID (Variable)
 * @type variable
 * @default 0
 * 
 * @arg variableId
 * @text Variable ID (Output)
 * @type variable
 * @default 0
 * 
 * @command swapSwitches
 * @text Swap 2 Switches
 * 
 * @arg switchIdA
 * @text Switch ID A
 * @type variable
 * @default 0
 * 
 * @arg switchIdB
 * @text Switch ID B
 * @type variable
 * @default 0
 * 
 * @command swapVariables
 * @text Swap 2 Variables
 * 
 * @arg variableIdA
 * @text Variable ID A
 * @type variable
 * @default 0
 * 
 * @arg variableIdB
 * @text Variable ID B
 * @type variable
 * @default 0
 * 
 * @command controlSwitchByVariable
 * @text Control Switch By Variable
 * 
 * @arg switchIdByVariable
 * @text Switch ID (Variable)
 * @type variable
 * @default 0
 * 
 * @arg operation
 * @text Turn-On
 * @type boolean
 * @default true
 * 
 * @command controlVariableByVariable
 * @text Control Variable By Variable
 * 
 * @arg variableIdByVariable
 * @text Variable ID (Variable)
 * @type variable
 * @default 0
 * 
 * @arg operation
 * @text Operation
 * @type select
 * @option Set
 * @value 0
 * @option Addition
 * @value 1
 * @option Subtraction
 * @value 2
 * @option Multiple
 * @value 3
 * @option Divide
 * @value 4
 * @option Remainder
 * @value 5
 * @default 0
 * 
 * @arg operandByVariable
 * @text Operand (Variable)
 * @type variable
 * @default 0
 * 
 * @command inverseSwitches
 * @text Inverse Switches
 * 
 * @arg start
 * @text Start Switch
 * @type switch
 * @default 0
 * 
 * @arg end
 * @text End Switch
 * @type switch
 * @default 0
 * 
 * @command shuffleSwitches
 * @text Shuffle Switches
 * 
 * @arg start
 * @text Start Switch
 * @type switch
 * @default 0
 * 
 * @arg end
 * @text End Switch
 * @type switch
 * @default 0
 * 
 * @command leftShiftSwitches
 * @text Left-Shift Switches
 * 
 * @arg start
 * @text Start Switch
 * @type switch
 * @default 0
 * 
 * @arg end
 * @text End Switch
 * @type switch
 * @default 0
 * 
 * @arg loop
 * @text Loop
 * @type boolean
 * @default true
 * 
 * @command rightShiftSwitches
 * @text Right-Shift Switches
 * 
 * @arg start
 * @text Start Switch
 * @type switch
 * @default 0
 * 
 * @arg end
 * @text End Switch
 * @type switch
 * @default 0
 * 
 * @arg loop
 * @text Loop
 * @type boolean
 * @default true
 * 
 * @command andSwitches
 * @text And Switches
 * 
 * @arg start
 * @text Start Switch
 * @type switch
 * @default 0
 * 
 * @arg end
 * @text End Switch
 * @type switch
 * @default 0
 * 
 * @arg switchId
 * @text Switch ID (Output)
 * @type switch
 * @default 0
 * 
 * @command orSwitches
 * @text Or Switches
 * 
 * @arg start
 * @text Start Switch
 * @type switch
 * @default 0
 * 
 * @arg end
 * @text End Switch
 * @type switch
 * @default 0
 * 
 * @arg switchId
 * @text Switch ID (Output)
 * @type switch
 * @default 0
 * 
 * @command xorSwitches
 * @text Xor Switches
 * 
 * @arg start
 * @text Start Switch
 * @type switch
 * @default 0
 * 
 * @arg end
 * @text End Switch
 * @type switch
 * @default 0
 * 
 * @arg switchId
 * @text Switch ID (Output)
 * @type switch
 * @default 0
 * 
 * @command sortVariables
 * @text Sort Variables
 * 
 * @arg start
 * @text Start Variable
 * @type variable
 * @default 0
 * 
 * @arg end
 * @text End Variable
 * @type variable
 * @default 0
 * 
 * @arg type
 * @text Type
 * @type select
 * @option Ascending
 * @value ascending
 * @option Descending
 * @value descending
 * @default ascending
 * 
 * @command inverseVariables
 * @text Inverse Variables
 * 
 * @arg start
 * @text Start Variable
 * @type variable
 * @default 0
 * 
 * @arg end
 * @text End Variable
 * @type variable
 * @default 0
 * 
 * @command shuffleVariables
 * @text Shuffle Variables
 * 
 * @arg start
 * @text Start Variable
 * @type variable
 * @default 0
 * 
 * @arg end
 * @text End Variable
 * @type variable
 * @default 0
 * 
 * @command leftShiftVariables
 * @text Left-Shift Variables
 * 
 * @arg start
 * @text Start Variable
 * @type variable
 * @default 0
 * 
 * @arg end
 * @text End Variable
 * @type variable
 * @default 0
 * 
 * @arg loop
 * @text Loop
 * @type boolean
 * @default true
 * 
 * @command rightShiftVariables
 * @text Right-Shift Variables
 * 
 * @arg start
 * @text Start Variable
 * @type variable
 * @default 0
 * 
 * @arg end
 * @text End Variable
 * @type variable
 * @default 0
 * 
 * @arg loop
 * @text Loop
 * @type boolean
 * @default true
 * 
 * @command countVariables
 * @text Count Variables
 * 
 * @arg start
 * @text Start Variable
 * @type variable
 * @default 0
 * 
 * @arg end
 * @text End Variable
 * @type variable
 * @default 0
 * 
 * @arg value
 * @text Target
 * @type number
 * @default 0
 * 
 * @arg variableId
 * @text Variable ID (Output)
 * @type variable
 * @default 0
 * 
 * @command countDistinctVariables
 * @text Count Distinct Variables
 * 
 * @arg start
 * @text Start Variable
 * @type variable
 * @default 0
 * 
 * @arg end
 * @text End Variable
 * @type variable
 * @default 0
 * 
 * @arg variableId
 * @text Variable ID (Output)
 * @type variable
 * @default 0
 * 
 * @command sumVariables
 * @text Sum Variables
 * 
 * @arg start
 * @text Start Variable
 * @type variable
 * @default 0
 * 
 * @arg end
 * @text End Variable
 * @type variable
 * @default 0
 * 
 * @arg variableId
 * @text Variable ID (Output)
 * @type variable
 * @default 0
 * 
 * @command multipleVariables
 * @text Multiple Variables
 * 
 * @arg start
 * @text Start Variable
 * @type variable
 * @default 0
 * 
 * @arg end
 * @text End Variable
 * @type variable
 * @default 0
 * 
 * @arg variableId
 * @text Variable ID (Output)
 * @type variable
 * @default 0
 * 
 * @command minVariables
 * @text Min Variables
 * 
 * @arg start
 * @text Start Variable
 * @type variable
 * @default 0
 * 
 * @arg end
 * @text End Variable
 * @type variable
 * @default 0
 * 
 * @arg variableId
 * @text Variable ID (Output)
 * @type variable
 * @default 0
 * 
 * @command argminVariables
 * @text Argmin Variables
 * 
 * @arg start
 * @text Start Variable
 * @type variable
 * @default 0
 * 
 * @arg end
 * @text End Variable
 * @type variable
 * @default 0
 * 
 * @arg variableId
 * @text Variable ID (Output)
 * @type variable
 * @default 0
 * 
 * @command maxVariables
 * @text Max Variables
 * 
 * @arg start
 * @text Start Variable
 * @type variable
 * @default 0
 * 
 * @arg end
 * @text End Variable
 * @type variable
 * @default 0
 * 
 * @arg variableId
 * @text Variable ID (Output)
 * @type variable
 * @default 0
 * 
 * @command argmaxVariables
 * @text Argmax Variables
 * 
 * @arg start
 * @text Start Variable
 * @type variable
 * @default 0
 * 
 * @arg end
 * @text End Variable
 * @type variable
 * @default 0
 * 
 * @arg variableId
 * @text Variable ID (Output)
 * @type variable
 * @default 0
 * 
 * @command midVariables
 * @text Middle Variables
 * 
 * @arg start
 * @text Start Variable
 * @type variable
 * @default 0
 * 
 * @arg end
 * @text End Variable
 * @type variable
 * @default 0
 * 
 * @arg variableId
 * @text Variable ID (Output)
 * @type variable
 * @default 0
 * 
 * @command avgVariables
 * @text Avg Variables
 * 
 * @arg start
 * @text Start Variable
 * @type variable
 * @default 0
 * 
 * @arg end
 * @text End Variable
 * @type variable
 * @default 0
 * 
 * @arg variableId
 * @text Variable ID (Output)
 * @type variable
 * @default 0
 * 
 * @command andVariables
 * @text And Variables
 * 
 * @arg start
 * @text Start Variable
 * @type variable
 * @default 0
 * 
 * @arg end
 * @text End Variable
 * @type variable
 * @default 0
 * 
 * @arg variableId
 * @text Variable ID (Output)
 * @type variable
 * @default 0
 * 
 * @command orVariables
 * @text Or Variables
 * 
 * @arg start
 * @text Start Variable
 * @type variable
 * @default 0
 * 
 * @arg end
 * @text End Variable
 * @type variable
 * @default 0
 * 
 * @arg variableId
 * @text Variable ID (Output)
 * @type variable
 * @default 0
 * 
 * @command xorVariables
 * @text Xor Variables
 * 
 * @arg start
 * @text Start Variable
 * @type variable
 * @default 0
 * 
 * @arg end
 * @text End Variable
 * @type variable
 * @default 0
 * 
 * @arg variableId
 * @text Variable ID (Output)
 * @type variable
 * @default 0
 * 
 * @command QueueCountVariables
 * @text Queue Count Variables
 * 
 * @arg start
 * @text Start Variable
 * @type variable
 * @default 0
 * 
 * @arg end
 * @text End Variable
 * @type variable
 * @default 0
 * 
 * @arg variableId
 * @text Variable ID (Output)
 * @type variable
 * @default 0
 * 
 * @command QueuePushVariables
 * @text Queue Push Variable
 * 
 * @arg start
 * @text Start Variable
 * @type variable
 * @default 0
 * 
 * @arg end
 * @text End Variable
 * @type variable
 * @default 0
 * 
 * @arg valueByVariable
 * @text Value (Variable)
 * @type variable
 * @default 0
 * 
 * @command QueuePopVariables
 * @text Queue Pop Variable
 * 
 * @arg start
 * @text Start Variable
 * @type variable
 * @default 0
 * 
 * @arg end
 * @text End Variable
 * @type variable
 * @default 0
 * 
 * @arg variableId
 * @text Variable ID (Output)
 * @type variable
 * @default 0
 * 
 * @command StackCountVariables
 * @text Stack Count Variables
 * 
 * @arg start
 * @text Start Variable
 * @type variable
 * @default 0
 * 
 * @arg end
 * @text End Variable
 * @type variable
 * @default 0
 * 
 * @arg variableId
 * @text Variable ID (Output)
 * @type variable
 * @default 0
 * 
 * @command StackPushVariables
 * @text Stack Push Variable
 * 
 * @arg start
 * @text Start Variable
 * @type variable
 * @default 0
 * 
 * @arg end
 * @text End Variable
 * @type variable
 * @default 0
 * 
 * @arg valueByVariable
 * @text Value (Variable)
 * @type variable
 * @default 0
 * 
 * @command StackPopVariables
 * @text Stack Pop Variable
 * 
 * @arg start
 * @text Start Variable
 * @type variable
 * @default 0
 * 
 * @arg end
 * @text End Variable
 * @type variable
 * @default 0
 * 
 * @arg variableId
 * @text Variable ID (Output)
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
 * @plugindesc Timi 事件直譯器 2（運算事件指令擴展）
 * @author Timi (羊羽)
 * @url https://www.tinytsunami.info
 * 
 * @command setVraiblesNull
 * @text 清理範圍變數為 Null
 * 
 * @arg start
 * @text 開始變數編號
 * @type variable
 * @default 0
 * 
 * @arg end
 * @text 結束變數編號
 * @type variable
 * @default 0
 * 
 * @command checkVariableNull
 * @text 檢查變數是否為 Null
 * 
 * @arg variableId
 * @text 變數編號
 * @type variable
 * @default 0
 * 
 * @arg switchId
 * @text 開關編號（輸出）
 * @type variable
 * @default 0
 * 
 * @command setVariableString
 * @text 儲存字串至變數
 * 
 * @arg variableId
 * @text 變數編號
 * @type variable
 * @default 0
 * 
 * @arg value
 * @text 字串值
 * @type multiline_string
 * @default 
 * 
 * @command checkVariableString
 * @text 檢查變數是否包含字串
 * 
 * @arg variableId
 * @text 變數編號
 * @type variable
 * @default 0
 * 
 * @arg value
 * @text 字串值
 * @type string
 * @default 
 * 
 * @arg switchId
 * @text 開關編號（輸出）
 * @type variable
 * @default 0
 * 
 * @command switchToVariable
 * @text 開關轉存至變數
 * 
 * @arg switchId
 * @text 開關編號
 * @type variable
 * @default 0
 * 
 * @arg variableId
 * @text 變數編號（輸出）
 * @type variable
 * @default 0
 * 
 * @command variableToSwitch
 * @text 變數轉存至開關
 * 
 * @arg variableId
 * @text 變數編號
 * @type variable
 * @default 0
 * 
 * @arg switchId
 * @text 開關編號（輸出）
 * @type variable
 * @default 0
 * 
 * @command switchToVariableByVariable
 * @text 以變數轉存開關至變數
 * 
 * @arg switchIdByVariable
 * @text 開關編號（變數）
 * @type variable
 * @default 0
 * 
 * @arg variableId
 * @text 變數編號（輸出）
 * @type variable
 * @default 0
 * 
 * @command variableToSwitchByVariable
 * @text 以變數轉存變數至開關
 * 
 * @arg switchIdByVariable
 * @text 開關編號（變數）
 * @type variable
 * @default 0
 * 
 * @arg variableId
 * @text 變數編號（輸出）
 * @type variable
 * @default 0
 * 
 * @command variableToVariableByVariable
 * @text 以變數轉存變數至變數
 * 
 * @arg variableIdByVariable
 * @text 變數編號（變數）
 * @type variable
 * @default 0
 * 
 * @arg variableId
 * @text 變數編號（輸出）
 * @type variable
 * @default 0
 * 
 * @command swapSwitches
 * @text 交換兩個開關
 * 
 * @arg switchIdA
 * @text 開關編號 A
 * @type variable
 * @default 0
 * 
 * @arg switchIdB
 * @text 開關編號 B
 * @type variable
 * @default 0
 * 
 * @command swapVariables
 * @text 交換兩個變數
 * 
 * @arg variableIdA
 * @text 變數編號 A
 * @type variable
 * @default 0
 * 
 * @arg variableIdB
 * @text 變數編號 B
 * @type variable
 * @default 0
 * 
 * @command controlSwitchByVariable
 * @text 以變數控制開關
 * 
 * @arg switchIdByVariable
 * @text 開關編號（變數）
 * @type variable
 * @default 0
 * 
 * @arg operation
 * @text 操作
 * @type boolean
 * @default true
 * 
 * @command controlVariableByVariable
 * @text 以變數控制變數
 * 
 * @arg variableIdByVariable
 * @text 變數編號（變數）
 * @type variable
 * @default 0
 * 
 * @arg operation
 * @text 操作
 * @type select
 * @option 設置
 * @value 0
 * @option 添加
 * @value 1
 * @option 減
 * @value 2
 * @option 乘
 * @value 3
 * @option 除
 * @value 4
 * @option 剩餘
 * @value 5
 * @default 0
 * 
 * @arg operandByVariable
 * @text 運算元（變數）
 * @type variable
 * @default 0
 * 
 * @command inverseSwitches
 * @text 範圍開關反轉
 * 
 * @arg start
 * @text 開始開關編號
 * @type switch
 * @default 0
 * 
 * @arg end
 * @text結束開關編號
 * @type switch
 * @default 0
 * 
 * @command shuffleSwitches
 * @text 範圍開關洗牌
 * 
 * @arg start
 * @text 開始開關編號
 * @type switch
 * @default 0
 * 
 * @arg end
 * @text結束開關編號
 * @type switch
 * @default 0
 * 
 * @command leftShiftSwitches
 * @text 範圍開關左旋
 * 
 * @arg start
 * @text 開始開關編號
 * @type switch
 * @default 0
 * 
 * @arg end
 * @text結束開關編號
 * @type switch
 * @default 0
 * 
 * @arg loop
 * @text 是否循環
 * @type boolean
 * @default true
 * 
 * @command rightShiftSwitches
 * @text 範圍開關右旋
 * 
 * @arg start
 * @text 開始開關編號
 * @type switch
 * @default 0
 * 
 * @arg end
 * @text結束開關編號
 * @type switch
 * @default 0
 * 
 * @arg loop
 * @text 是否循環
 * @type boolean
 * @default true
 * 
 * @command andSwitches
 * @text 範圍開關取布林和
 * 
 * @arg start
 * @text 開始開關編號
 * @type switch
 * @default 0
 * 
 * @arg end
 * @text結束開關編號
 * @type switch
 * @default 0
 * 
 * @arg switchId
 * @text 開關編號（輸出）
 * @type switch
 * @default 0
 * 
 * @command orSwitches
 * @text 範圍開關取布林或
 * 
 * @arg start
 * @text 開始開關編號
 * @type switch
 * @default 0
 * 
 * @arg end
 * @text結束開關編號
 * @type switch
 * @default 0
 * 
 * @arg switchId
 * @text 開關編號（輸出）
 * @type switch
 * @default 0
 * 
 * @command xorSwitches
 * @text 範圍開關取布林異或
 * 
 * @arg start
 * @text 開始開關編號
 * @type switch
 * @default 0
 * 
 * @arg end
 * @text結束開關編號
 * @type switch
 * @default 0
 * 
 * @arg switchId
 * @text 開關編號（輸出）
 * @type switch
 * @default 0
 * 
 * @command sortVariables
 * @text 範圍變數排序
 * 
 * @arg start
 * @text 開始變數編號
 * @type variable
 * @default 0
 * 
 * @arg end
 * @text 結束變數編號
 * @type variable
 * @default 0
 * 
 * @arg type
 * @text 類型
 * @type select
 * @option 升序
 * @value ascending
 * @option 降序
 * @value descending
 * @default ascending
 * 
 * @command inverseVariables
 * @text 範圍變數反轉
 * 
 * @arg start
 * @text 開始變數編號
 * @type variable
 * @default 0
 * 
 * @arg end
 * @text 結束變數編號
 * @type variable
 * @default 0
 * 
 * @command shuffleVariables
 * @text 範圍變數洗牌
 * 
 * @arg start
 * @text 開始變數編號
 * @type variable
 * @default 0
 * 
 * @arg end
 * @text 結束變數編號
 * @type variable
 * @default 0
 * 
 * @command leftShiftVariables
 * @text 範圍變數左旋
 * 
 * @arg start
 * @text 開始變數編號
 * @type variable
 * @default 0
 * 
 * @arg end
 * @text 結束變數編號
 * @type variable
 * @default 0
 * 
 * @arg loop
 * @text 是否循環
 * @type boolean
 * @default true
 * 
 * @command rightShiftVariables
 * @text 範圍變數右旋
 * 
 * @arg start
 * @text 開始變數編號
 * @type variable
 * @default 0
 * 
 * @arg end
 * @text 結束變數編號
 * @type variable
 * @default 0
 * 
 * @arg loop
 * @text 是否循環
 * @type boolean
 * @default true
 * 
 * @command countVariables
 * @text 範圍變數計數
 * 
 * @arg start
 * @text 開始變數編號
 * @type variable
 * @default 0
 * 
 * @arg end
 * @text 結束變數編號
 * @type variable
 * @default 0
 * 
 * @arg value
 * @text 運算元
 * @type number
 * @default 0
 * 
 * @arg variableId
 * @text 變數編號（輸出）
 * @type variable
 * @default 0
 * 
 * @command countDistinctVariables
 * @text 範圍變數計類
 * 
 * @arg start
 * @text 開始變數編號
 * @type variable
 * @default 0
 * 
 * @arg end
 * @text 結束變數編號
 * @type variable
 * @default 0
 * 
 * @arg variableId
 * @text 變數編號（輸出）
 * @type variable
 * @default 0
 * 
 * @command sumVariables
 * @text 範圍變數取和
 * 
 * @arg start
 * @text 開始變數編號
 * @type variable
 * @default 0
 * 
 * @arg end
 * @text 結束變數編號
 * @type variable
 * @default 0
 * 
 * @arg variableId
 * @text 變數編號（輸出）
 * @type variable
 * @default 0
 * 
 * @command multipleVariables
 * @text 範圍變數取積
 * 
 * @arg start
 * @text 開始變數編號
 * @type variable
 * @default 0
 * 
 * @arg end
 * @text 結束變數編號
 * @type variable
 * @default 0
 * 
 * @arg variableId
 * @text 變數編號（輸出）
 * @type variable
 * @default 0
 * 
 * @command minVariables
 * @text 範圍變數取極小值
 * 
 * @arg start
 * @text 開始變數編號
 * @type variable
 * @default 0
 * 
 * @arg end
 * @text 結束變數編號
 * @type variable
 * @default 0
 * 
 * @arg variableId
 * @text 變數編號（輸出）
 * @type variable
 * @default 0
 * 
 * @command argminVariables
 * @text 範圍變數取極小值索引
 * 
 * @arg start
 * @text 開始變數編號
 * @type variable
 * @default 0
 * 
 * @arg end
 * @text 結束變數編號
 * @type variable
 * @default 0
 * 
 * @arg variableId
 * @text 變數編號（輸出）
 * @type variable
 * @default 0
 * 
 * @command maxVariables
 * @text 範圍變數取極大值
 * 
 * @arg start
 * @text 開始變數編號
 * @type variable
 * @default 0
 * 
 * @arg end
 * @text 結束變數編號
 * @type variable
 * @default 0
 * 
 * @arg variableId
 * @text 變數編號（輸出）
 * @type variable
 * @default 0
 * 
 * @command argmaxVariables
 * @text 範圍變數取極大值索引
 * 
 * @arg start
 * @text 開始變數編號
 * @type variable
 * @default 0
 * 
 * @arg end
 * @text 結束變數編號
 * @type variable
 * @default 0
 * 
 * @arg variableId
 * @text 變數編號（輸出）
 * @type variable
 * @default 0
 * 
 * @command midVariables
 * @text 範圍變數取中位數
 * 
 * @arg start
 * @text 開始變數編號
 * @type variable
 * @default 0
 * 
 * @arg end
 * @text 結束變數編號
 * @type variable
 * @default 0
 * 
 * @arg variableId
 * @text 變數編號（輸出）
 * @type variable
 * @default 0
 * 
 * @command avgVariables
 * @text 範圍變數取平均數
 * 
 * @arg start
 * @text 開始變數編號
 * @type variable
 * @default 0
 * 
 * @arg end
 * @text 結束變數編號
 * @type variable
 * @default 0
 * 
 * @arg variableId
 * @text 變數編號（輸出）
 * @type variable
 * @default 0
 * 
 * @command andVariables
 * @text 範圍變數取布林和
 * 
 * @arg start
 * @text 開始變數編號
 * @type variable
 * @default 0
 * 
 * @arg end
 * @text 結束變數編號
 * @type variable
 * @default 0
 * 
 * @arg variableId
 * @text 變數編號（輸出）
 * @type variable
 * @default 0
 * 
 * @command orVariables
 * @text 範圍變數取布林或
 * 
 * @arg start
 * @text 開始變數編號
 * @type variable
 * @default 0
 * 
 * @arg end
 * @text 結束變數編號
 * @type variable
 * @default 0
 * 
 * @arg variableId
 * @text 變數編號（輸出）
 * @type variable
 * @default 0
 * 
 * @command xorVariables
 * @text 範圍變數取布林異或
 * 
 * @arg start
 * @text 開始變數編號
 * @type variable
 * @default 0
 * 
 * @arg end
 * @text 結束變數編號
 * @type variable
 * @default 0
 * 
 * @arg variableId
 * @text 變數編號（輸出）
 * @type variable
 * @default 0
 * 
 * @command QueueCountVariables
 * @text 將範圍變數視為佇列計數
 * 
 * @arg start
 * @text 開始變數編號
 * @type variable
 * @default 0
 * 
 * @arg end
 * @text 結束變數編號
 * @type variable
 * @default 0
 * 
 * @arg variableId
 * @text 變數編號（輸出）
 * @type variable
 * @default 0
 * 
 * @command QueuePushVariables
 * @text 將範圍變數視為佇列推入
 * 
 * @arg start
 * @text 開始變數編號
 * @type variable
 * @default 0
 * 
 * @arg end
 * @text 結束變數編號
 * @type variable
 * @default 0
 * 
 * @arg valueByVariable
 * @text 值（變數）
 * @type variable
 * @default 0
 * 
 * @command QueuePopVariables
 * @text 將範圍變數視為佇列彈出
 * 
 * @arg start
 * @text 開始變數編號
 * @type variable
 * @default 0
 * 
 * @arg end
 * @text 結束變數編號
 * @type variable
 * @default 0
 * 
 * @arg variableId
 * @text 變數編號（輸出）
 * @type variable
 * @default 0
 * 
 * @command StackCountVariables
 * @text 將範圍變數視為堆疊計數
 * 
 * @arg start
 * @text 開始變數編號
 * @type variable
 * @default 0
 * 
 * @arg end
 * @text 結束變數編號
 * @type variable
 * @default 0
 * 
 * @arg variableId
 * @text 變數編號（輸出）
 * @type variable
 * @default 0
 * 
 * @command StackPushVariables
 * @text 將範圍變數視為堆疊推入
 * 
 * @arg start
 * @text 開始變數編號
 * @type variable
 * @default 0
 * 
 * @arg end
 * @text 結束變數編號
 * @type variable
 * @default 0
 * 
 * @arg valueByVariable
 * @text 值（變數）
 * @type variable
 * @default 0
 * 
 * @command StackPopVariables
 * @text 將範圍變數視為堆疊彈出
 * 
 * @arg start
 * @text 開始變數編號
 * @type variable
 * @default 0
 * 
 * @arg end
 * @text 結束變數編號
 * @type variable
 * @default 0
 * 
 * @arg variableId
 * @text 變數編號（輸出）
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
!function(){"use strict";var e="Timi_Interpreter_2";PluginManager.parameters(e);function u(e,r){for(let a=e;a<=r;a++)for(let e=a+1;e<=r;e++){var l=$gameVariables.value(a),i=$gameVariables.value(e);if(null===l&&null!==i){$gameVariables.setValue(a,i),$gameVariables.setValue(e,null);break}}}Game_Variables.prototype.value=function(e){return this._data[e]},PluginManager.registerCommand(e,"setVraiblesNull",function(e){var a=Number(e.start),r=Number(e.end);for(let e=a;e<=r;e++)$gameVariables.setValue(e,null)}),PluginManager.registerCommand(e,"checkVariableNull",function(e){var a=Number(e.variableId),e=Number(e.switchId);$gameSwitches.setValue(e,null===$gameVariables.value(a))}),PluginManager.registerCommand(e,"setVariableString",function(e){var a=Number(e.variableId),e=String(e.value);$gameVariables.setValue(a,e)}),PluginManager.registerCommand(e,"checkVariableString",function(e){var a=Number(e.variableId),r=Number(e.switchId),e=String(e.value);$gameSwitches.setValue(r,$gameVariables.value(a).includes(e))}),PluginManager.registerCommand(e,"switchToVariable",function(e){var a=Number(e.variableId),e=Number(e.switchId);$gameVariables.setValue(a,!0===$gameSwitches.value(e)?1:0)}),PluginManager.registerCommand(e,"variableToSwitch",function(e){var a=Number(e.variableId),e=Number(e.switchId);$gameSwitches.setValue(e,0!==$gameVariables.value(a))}),PluginManager.registerCommand(e,"switchToVariableByVariable",function(e){var a=Number(e.variableId),e=Number($gameVariables.value(Number(e.switchIdByVariable)));$gameVariables.setValue(a,!0===$gameSwitches.value(e)?1:0)}),PluginManager.registerCommand(e,"variableToSwitchByVariable",function(e){var a=Number($gameVariables.value(Number(e.variableIdByVariable))),e=Number(e.switchId);$gameSwitches.setValue(e,0!==$gameVariables.value(a))}),PluginManager.registerCommand(e,"variableToVariableByVariable",function(e){var a=Number($gameVariables.value(Number(e.variableIdByVariable))),e=Number(e.variableId);$gameVariables.setValue(e,$gameVariables.value(a))}),PluginManager.registerCommand(e,"swapSwitches",function(e){var a=Number(e.switchIdA),e=Number(e.switchIdB),r=$gameSwitches.value(a),l=$gameSwitches.value(e);$gameSwitches.setValue(a,l),$gameSwitches.setValue(e,r)}),PluginManager.registerCommand(e,"swapVariables",function(e){var a=Number(e.variableIdA),e=Number(e.variableIdB),r=$gameVariables.value(a),l=$gameVariables.value(e);$gameVariables.setValue(a,l),$gameVariables.setValue(e,r)}),PluginManager.registerCommand(e,"controlSwitchByVariable",function(e){var a=Number($gameVariables.value(Number(e.switchIdByVariable))),e=Boolean("true"===e.operation);$gameSwitches.setValue(a,e)}),PluginManager.registerCommand(e,"controlVariableByVariable",function(e){var a=Number($gameVariables.value(Number(e.variableIdByVariable))),r=Number(e.operation),e=$gameVariables.value(Number(e.operandByVariable));this.operateVariable(a,r,e)}),PluginManager.registerCommand(e,"inverseSwitches",function(e){var a=Number(e.start),r=Number(e.end);for(let e=a;e<r/2;e++){var l=$gameSwitches.value(e),i=$gameSwitches.value(r-e);$gameSwitches.setValue(e,i),$gameSwitches.setValue(r-e,l)}}),PluginManager.registerCommand(e,"shuffleSwitches",function(e){var a=Number(e.start),r=Number(e.end);for(let e=a;e<=r;e++){var l=e+Math.floor(Math.random()*(r-e+1)),i=$gameSwitches.value(e),u=$gameSwitches.value(l);$gameSwitches.setValue(e,u),$gameSwitches.setValue(l,i)}}),PluginManager.registerCommand(e,"leftShiftSwitches",function(e){var a=Number(e.start),r=Number(e.end),e=Boolean("true"===e.loop),l=$gameSwitches.value(a);for(let e=a;e<r;e++){var i=$gameSwitches.value(e+1);$gameSwitches.setValue(e,i)}e&&$gameSwitches.setValue(r,l)}),PluginManager.registerCommand(e,"rightShiftSwitches",function(e){var a=Number(e.start),r=Number(e.end),e=Boolean("true"===e.loop),l=$gameSwitches.value(r);for(let e=r;e>a;e--){var i=$gameSwitches.value(e-1);$gameSwitches.setValue(e,i)}e&&$gameSwitches.setValue(a,l)}),PluginManager.registerCommand(e,"andSwitches",function(e){var a=Number(e.start),r=Number(e.end),e=Number(e.switchId);const l=!0;for(let e=a;e<=r;e++)if(!1===$gameSwitches.value(e)){l=!1;break}$gameSwitches.setValue(e,l)}),PluginManager.registerCommand(e,"orSwitches",function(e){var a=Number(e.start),r=Number(e.end),e=Number(e.switchId);const l=!1;for(let e=a;e<=r;e++)if(!0===$gameSwitches.value(e)){l=!0;break}$gameSwitches.setValue(e,l)}),PluginManager.registerCommand(e,"xorSwitches",function(e){var a=Number(e.start),r=Number(e.end),e=Number(e.switchId);let l=$gameSwitches.value(a);for(let e=a+1;e<=r;e++)l^=$gameSwitches.value(e);$gameSwitches.setValue(e,l)}),PluginManager.registerCommand(e,"sortVariables",function(e){var r=Number(e.start),l=Number(e.end),i=Boolean("descending"===String(e.type));for(let a=r;a<=l;a++)for(let e=a;e<=l;e++){var u=$gameVariables.value(a),t=$gameVariables.value(e);i&&u<t&&($gameVariables.setValue(a,t),$gameVariables.setValue(e,u)),!i&&t<u&&($gameVariables.setValue(a,t),$gameVariables.setValue(e,u))}}),PluginManager.registerCommand(e,"inverseVariables",function(e){var a=Number(e.start),r=Number(e.end);for(let e=a;e<r/2;e++){var l=$gameVariables.value(e),i=$gameVariables.value(r-e);$gameVariables.setValue(e,i),$gameVariables.setValue(r-e,l)}}),PluginManager.registerCommand(e,"shuffleVariables",function(e){var a=Number(e.start),r=Number(e.end);for(let e=a;e<=r;e++){var l=e+Math.floor(Math.random()*(r-e+1)),i=$gameVariables.value(e),u=$gameVariables.value(l);$gameVariables.setValue(e,u),$gameVariables.setValue(l,i)}}),PluginManager.registerCommand(e,"leftShiftVariables",function(e){var a=Number(e.start),r=Number(e.end),e=Boolean("true"===e.loop),l=$gameVariables.value(a);for(let e=a;e<r;e++){var i=$gameVariables.value(e+1);$gameVariables.setValue(e,i)}e&&$gameVariables.setValue(r,l)}),PluginManager.registerCommand(e,"rightShiftVariables",function(e){var a=Number(e.start),r=Number(e.end),e=Boolean("true"===e.loop),l=$gameVariables.value(r);for(let e=r;e>a;e--){var i=$gameVariables.value(e-1);$gameVariables.setValue(e,i)}e&&$gameVariables.setValue(a,l)}),PluginManager.registerCommand(e,"countVariables",function(e){var a=Number(e.start),r=Number(e.end),l=Number(e.value),e=Number(e.variableId);let i=0;for(let e=a;e<=r;e++)$gameVariables.value(e)===l&&(i+=1);$gameVariables.setValue(e,i)}),PluginManager.registerCommand(e,"countDistinctVariables",function(e){var a=Number(e.start),r=Number(e.end),e=Number(e.variableId),l=[];for(let e=a;e<=r;e++){var i=$gameVariables.value(e);l.includes(i)||l.push(i)}$gameVariables.setValue(e,l.length)}),PluginManager.registerCommand(e,"sumVariables",function(e){var a=Number(e.start),r=Number(e.end),e=Number(e.variableId);let l=0;for(let e=a;e<=r;e++)l+=$gameVariables.value(e);$gameVariables.setValue(e,l)}),PluginManager.registerCommand(e,"multipleVariables",function(e){var a=Number(e.start),r=Number(e.end),e=Number(e.variableId);let l=1;for(let e=a;e<=r;e++)l*=$gameVariables.value(e);$gameVariables.setValue(e,l)}),PluginManager.registerCommand(e,"minVariables",function(e){var a=Number(e.start),r=Number(e.end),e=Number(e.variableId);let l=$gameVariables.value(a);for(let e=a;e<=r;e++){var i=$gameVariables.value(e);i<l&&(l=i)}$gameVariables.setValue(e,l)}),PluginManager.registerCommand(e,"argminVariables",function(e){var a=Number(e.start),r=Number(e.end),e=Number(e.variableId);let l=a;for(let e=a;e<=r;e++){var i=$gameVariables.value(l);$gameVariables.value(e)<i&&(l=e)}$gameVariables.setValue(e,l)}),PluginManager.registerCommand(e,"maxVariables",function(e){var a=Number(e.start),r=Number(e.end),e=Number(e.variableId);let l=$gameVariables.value(a);for(let e=a;e<=r;e++){var i=$gameVariables.value(e);i>l&&(l=i)}$gameVariables.setValue(e,l)}),PluginManager.registerCommand(e,"argmaxVariables",function(e){var a=Number(e.start),r=Number(e.end),e=Number(e.variableId);let l=a;for(let e=a;e<=r;e++)$gameVariables.value(l)<$gameVariables.value(e)&&(l=e);$gameVariables.setValue(e,l)}),PluginManager.registerCommand(e,"midVariables",function(e){var a=Number(e.start),r=Number(e.end),e=Number(e.variableId),l=[];for(let e=a;e<=r;e++)l.push($gameVariables.value(e));l.sort((e,a)=>e-a);var i,u,a=l.length;a%2==0&&(u=l[Math.floor(a/2)],i=l[Math.floor(a/2)+1],$gameVariables.setValue(e,(u+i)/2)),a%2==1&&(u=l[Math.floor(a/2)],$gameVariables.setValue(e,u))}),PluginManager.registerCommand(e,"avgVariables",function(e){var a=Number(e.start),r=Number(e.end),e=Number(e.variableId);let l=0;for(let e=a;e<=r;e++)l+=$gameVariables.value(e);$gameVariables.setValue(e,l/(r-a+1))}),PluginManager.registerCommand(e,"andVariables",function(e){var a=Number(e.start),r=Number(e.end),e=Number(e.variableId);let l=$gameVariables.value(a);for(let e=a+1;e<=r;e++)l&=$gameVariables.value(e);$gameVariables.setValue(e,l)}),PluginManager.registerCommand(e,"orVariables",function(e){var a=Number(e.start),r=Number(e.end),e=Number(e.variableId);let l=$gameVariables.value(a);for(let e=a+1;e<=r;e++)l|=$gameVariables.value(e);$gameVariables.setValue(e,l)}),PluginManager.registerCommand(e,"xorVariables",function(e){var a=Number(e.start),r=Number(e.end),e=Number(e.variableId);let l=$gameVariables.value(a);for(let e=a+1;e<=r;e++)l^=$gameVariables.value(e);$gameVariables.setValue(e,l)}),PluginManager.registerCommand(e,"QueueCountVariables",function(e){var a=Number(e.start),r=Number(e.end),e=Number(e.variableId);let l=0;for(let e=a;e<=r;e++)null!==$gameVariables.value(e)&&(l+=1);u(a,r),$gameVariables.setValue(e,l)}),PluginManager.registerCommand(e,"QueuePushVariables",function(e){var a=Number(e.start),r=Number(e.end),l=$gameVariables.value(Number(e.valueByVariable));for(let e=r;e>=a;e--)if(null===$gameVariables.value(e)){$gameVariables.setValue(e,l);break}u(a,r)}),PluginManager.registerCommand(e,"QueuePopVariables",function(e){var a=Number(e.start),r=Number(e.end),l=Number(e.variableId);for(let e=a;e<=r;e++){var i=$gameVariables.value(e);if(null!==i){$gameVariables.setValue(e,null),$gameVariables.setValue(l,i);break}}u(a,r)}),PluginManager.registerCommand(e,"StackCountVariables",function(e){var a=Number(e.start),r=Number(e.end),e=Number(e.variableId);let l=0;for(let e=a;e<=r;e++)null!==$gameVariables.value(e)&&(l+=1);u(a,r),$gameVariables.setValue(e,l)}),PluginManager.registerCommand(e,"StackPushVariables",function(e){var a=Number(e.start),r=Number(e.end),l=$gameVariables.value(Number(e.valueByVariable));for(let e=r;e>=a;e--)if(null===$gameVariables.value(e)){$gameVariables.setValue(e,l);break}u(a,r)}),PluginManager.registerCommand(e,"StackPopVariables",function(e){var a=Number(e.start),r=Number(e.end),l=Number(e.variableId);for(let e=r;e>=a;e--){var i=$gameVariables.value(e);if(null!==i){$gameVariables.setValue(e,null),$gameVariables.setValue(l,i);break}}u(a,r)})}();

/**
 * The FormatCurrency function returns an expression formatted as a currency value using the currency symbol defined in the computer's control panel.
 * @param {*} Expression Required. The expression to be formatted
 * @param {*} NumDigAfterDec Optional. Indicates how many places to the right of the decimal are displayed. Default is -1 (the computer's regional settings are used)
 * @param {*} IncLeadingDig Optional. Indicates whether or not a leading zero is displayed for fractional values:
 * -2 = TristateUseDefault - Use the computer's regional settings
 * -1 = TristateTrue - True 
 * 0 = TristateFalse - False 
 * @param {*} UseParForNegNum Optional. Indicates whether or not to place negative values within parentheses:
 * -2 = TristateUseDefault - Use the computer's regional settings
 * -1 = TristateTrue - True 
 * 0 = TristateFalse - False 
 * @param {*} GroupDig Optional. Indicates whether or not numbers are grouped using the group delimiter specified in the computer's regional settings:
 * -2 = TristateUseDefault - Use the computer's regional settings
 * -1 = TristateTrue - True 
 * 0 = TristateFalse - False
 */
function FormatCurrency(Expression, NumDigAfterDec, IncLeadingDig, UseParForNegNum, GroupDig) {

}

/**
 * The FormatDateTime function formats and returns a valid date or time expression
 * @param {*} date Required. Any valid date expression (like Date() or Now())
 * @param {*} format Optional. A value that specifies the date/time format to use 
 * Can take the following values:
 * 0 = vbGeneralDate - Default. Returns date: mm/dd/yyyy and time if specified: hh:mm:ss PM/AM.
 * 1 = vbLongDate - Returns date: weekday, monthname, year
 * 2 = vbShortDate - Returns date: mm/dd/yyyy
 * 3 = vbLongTime - Returns time: hh:mm:ss PM/AM 
 * 4 = vbShortTime - Return time: hh:mm
 */
function FormatDateTime(date, format) {

}

/**
 * 
 * @param {*} Expression Required. The expression to be formatted
 * @param {*} NumDigAfterDec Optional. Indicates how many places to the right of the decimal are displayed. Default is -1 (the computer's regional settings are used)
 * @param {*} IncLeadingDig Optional. Indicates whether or not a leading zero is displayed for fractional values:
 * -2 = TristateUseDefault - Use the computer's regional settings
 * -1 = TristateTrue - True 
 * 0 = TristateFalse - False 
 * @param {*} UseParForNegNum Optional. Indicates whether or not to place negative values within parentheses:
 * -2 = TristateUseDefault - Use the computer's regional settings
 * -1 = TristateTrue - True 
 * 0 = TristateFalse - False
 * @param {*} GroupDig Optional. Indicates whether or not numbers are grouped using the group delimiter specified in the computer's regional settings:
 * -2 = TristateUseDefault - Use the computer's regional settings
 * -1 = TristateTrue - True 
 * 0 = TristateFalse - False
 */
function FormatNumber(Expression, NumDigAfterDec, IncLeadingDig, UseParForNegNum, GroupDig) {

}

/**
 * The FormatPercent function returns an expression formatted as a percentage (multiplied by 100) with a trailing % character.
 * @param {*} Expression Required. The expression to be formatted
 * @param {*} NumDigAfterDec Optional. Indicates whether or not a leading zero is displayed for fractional values:
 * -2 = TristateUseDefault - Use the computer's regional settings
 * -1 = TristateTrue - True 
 * 0 = TristateFalse - False
 * @param {*} IncLeadingDig Optional. Indicates whether or not a leading zero is displayed for fractional values:
 * -2 = TristateUseDefault - Use the computer's regional settings
 * -1 = TristateTrue - True 
 * 0 = TristateFalse - False 
 * @param {*} UseParForNegNum Optional. Indicates whether or not to place negative values within parentheses:
 * -2 = TristateUseDefault - Use the computer's regional settings
 * -1 = TristateTrue - True 
 * 0 = TristateFalse - False 
 * @param {*} GroupDig Optional. Indicates whether or not numbers are grouped using the group delimiter specified in the computer's regional settings:
 * -2 = TristateUseDefault - Use the computer's regional settings
 * -1 = TristateTrue - True 
 * 0 = TristateFalse - False
 */
function FormatPercent(Expression, NumDigAfterDec, IncLeadingDig, UseParForNegNum, GroupDig) {

}
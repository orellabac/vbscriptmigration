/**
 * 
 * @param {*} string Required. A string expression. Cannot be an empty string!
 */
function Asc(string) {

}

/**
 * 
 * @param {*} expression Required. Any valid expression. A nonzero value returns True, zero returns False. A run-time error occurs if the expression can not be interpreted as a numeric value
 */
function CBool(expression) {

}

/**
 * 
 * @param {*} expression Required. Any valid expression
 */
function CByte(expression) {

}

/**
 * 
 * @param {*} expression Required. Any valid expression
 */
function CCur(expression) {

}

/**
 * 
 * @param {*} date Required. Any valid date expression (like Date() or Now())
 */
function CDate(date) {

}

/**
 * The CDbl function converts an expression to type Double.
 * The expression must be a numeric value.
 * @param {*} expression Required. Any valid expression
 */
function CDbl(expression) {

}

/**
 * 
 * @param {*} charcode Required. A number that identifies a character
 */
function Chr(charcode) {

}

/**
 * 
 * @param {*} expression Required. Any valid expression
 */
function CInt(expression) {

}

/**
 * 
 * @param {*} expression Required. Any valid expression
 */
function CLng(expression) {

}

/**
 * 
 * @param {*} expression CSng(expression) 
 */
function CSng(expression) {

}

/**
 * 
 * @param {*} expression Required. Any valid expression
 * If expression is:
 * Boolean - then the CStr function will return a string containing true or false.
 * Date - then the CStr function will return a string that contains a date in the short-date format.
 * Null - then a run-time error will occur.
 * Empty - then the CStr function will return an empty string ("").
 * Error - then the CStr function will return a string that contains the word "Error" followed by an error number.
 * Other numeric - then the CStr function will return a string that contains the number.
 */
function CStr(expression) {

}

/**
 * 
 * @param {*} number Required. Any valid expression
 * If number is:
 * Null - then the Hex function returns Null.
 * Empty - then the Hex function returns zero (0).
 * Any other number - then the Hex function returns up to eight hexadecimal characters.
 */
function Hex(number) {

}

/**
 * 
 * @param {*} number Required. Any valid expression
 * If number is:
 * Null - then the Oct function returns Null.
 * Empty - then the Oct function returns zero (0).
 * Any other number - then the Oct function returns up to 11 octal characters.
 */
function Oct(number) {

}
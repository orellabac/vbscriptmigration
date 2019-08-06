/**
 * The Abs function returns the absolute value of a specified number.
 * 
 * Note: If the number parameter contains Null, Null will be returned
 * 
 * Note: If the number parameter is an uninitialized variable, zero will be returned.
 * @param {*} number Required. A numeric expression
 */
function Abs(number) {
    return Math.abs(number);
}

/**
 * The Atn function returns the arctangent of a specified number.
 * @param {*} number Required. A numeric expression
 */
function Atn(number) {
    return Math.atan(number);
}

module.exports = {
    Abs: Abs,
    Atn: Atn
}
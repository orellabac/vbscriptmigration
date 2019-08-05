/**
 * 
 * @param {*} inputstrings Required. A one-dimensional array of strings to be searched
 * @param {*} value Required. The string to search for
 * @param {*} include Optional. A Boolean value that indicates whether to return the substrings that include or exclude value. True returns the subset of the array that contains value as a substring. False returns the subset of the array that does not contain value as a substring. Default is True.
 * @param {*} compare Optional. Specifies the string comparison to use.
Can have one of the following values:
0 = vbBinaryCompare - Perform a binary comparison
1 = vbTextCompare - Perform a textual comparison
 */
function Filter(inputstrings, value, include, compare) {

}

/**
 * Indicates whether a specified variable is an array. If the variable is an array, it returns True, otherwise, it returns False.
 * @param {*} variable IsArray(variable) 
 */
function IsArray(variable) {

}

/**
 * The Join function returns a string that consists of a number of substrings in an array.
 * @param {*} list Required. A one-dimensional array that contains the substrings to be joined
 * @param {*} delimiter Optional. The character(s) used to separate the substrings in the returned string. Default is the space character
 */
function Join(list, delimiter) {

}

/**
 * The LBound function returns the smallest subscript for the indicated dimension of an array.
 * Note: The LBound for any dimension is ALWAYS 0.
 * Tip: Use the LBound function with the UBound function to determine the size of an array.
 * @param {*} arrayname Required. The name of the array variable
 * @param {*} dimension Optional. Which dimension's lower bound to return. 1 = first dimension, 2 = second dimension, and so on. Default is 1
 */
function LBound(arrayname, dimension) {
    return 0;
}

/**
 * 
 * @param {*} expression Required. A string expression that contains substrings and delimiters
 * @param {*} delimiter Optional. A string character used to identify substring limits. Default is the space character
 * @param {*} count Optional. The number of substrings to be returned. -1 indicates that all substrings are returned
 * @param {*} compare Optional. Specifies the string comparison to use.
 * Can have one of the following values:
 * 0 = vbBinaryCompare - Perform a binary comparison
 * 1 = vbTextCompare - Perform a textual comparison
 */
function Split(expression, delimiter, count, compare) {

}

/**
 * 
 * @param {*} arrayname Required. The name of the array variable
 * @param {*} dimension Optional. Which dimension's upper bound to return. 1 = first dimension, 2 = second dimension, and so on. Default is 1
 */
function UBound(arrayname, dimension) {

}
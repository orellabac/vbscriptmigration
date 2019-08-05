/**
 * The InStr function returns the position of the first occurrence of one string within another.
 * The InStr function can return the following values:
 * If string1 is "" - InStr returns 0
 * If string1 is Null - InStr returns Null
 * If string2 is "" - InStr returns start
 * If string2 is Null - InStr returns Null
 * If string2 is not found - InStr returns 0
 * If string2 is found within string1 - InStr returns the position at which match is found
 * If start > Len(string1) - InStr returns 0
 * Tip: Also look at the InStrRev function
 * @param {*} start Optional. Specifies the starting position for each search. The search begins at the first character position (1) by default. This parameter is required if compare is specified
 * @param {*} string1 Required. The string to be searched
 * @param {*} string2 Required. The string expression to search for
 * @param {*} compare Optional. Specifies the string comparison to use. Default is 0
 * Can have one of the following values:
 * 0 = vbBinaryCompare - Perform a binary comparison
 * 1 = vbTextCompare - Perform a textual comparison
 */
function InStr(start, string1, string2, compare) {

}

/**
 * The InStrRev function returns the position of the first occurrence of one string within another. The search begins from the end of string, but the position returned counts from the beginning of the string.
 * The InStrRev function can return the following values:
 * If string1 is "" - InStrRev returns 0
 * If string1 is Null - InStrRev returns Null
 * If string2 is "" - InStrRev returns start
 * If string2 is Null - InStrRev returns Null
 * If string2 is not found - InStrRev returns 0
 * If string2 is found within string1 - InStrRev returns the position at which match is found
 * If start > Len(string1) - InStrRev returns 0
 * Tip: Also look at the InStr function
 * @param {*} string1 Required. The string to be searched
 * @param {*} string2 Required. The string expression to search for
 * @param {*} start Optional. Specifies the starting position for each search. The search begins at the last character position by default (-1)
 * @param {*} compare Optional. Specifies the string comparison to use. Default is 0
 * Can have one of the following values:
 * 0 = vbBinaryCompare - Perform a binary comparison
 * 1 = vbTextCompare - Perform a textual comparison
 */
function InStrRev(string1, string2, start, compare) {

}

/**
 * LCase(string) 
 * @param {*} string Required. The string to be converted to lowercase
 */
function LCase(string) {

}

/**
 * The Left function returns a specified number of characters from the left side of a string.
 * Tip: Use the Len function to find the number of characters in a string.
 * Tip: Also look at the Right function
 * @param {*} string Required. The string to return characters from
 * @param {*} length 
Required. Specifies how many characters to return. If set to 0, an empty string ("") is returned. If set to greater than or equal to the length of the string, the entire string is returned
 */
function Left(string, length) {

}

/**
 * The Len function returns the number of characters in a string.
 * @param {*} string A string expression
 */
function Len(string) {

}

/**
 * The LTrim function removes spaces on the left side of a string.
 * Tip: Also look at the RTrim and the Trim functions.
 * @param {*} string Required. A string expression
 */
function LTrim(string) {

}

/**
 * The RTrim function removes spaces on the right side of a string.
 * Tip: Also look at the LTrim and the Trim functions.
 * @param {*} string Required. A string expression
 */
function RTrim(string) {

}
/**
 *     The Trim function removes spaces on both sides of a string.
 * Tip: Also look at the LTrim and the RTrim functions.
 * @param {*} string Required. A string expression
 */
function Trim(string) {}

/**
 * The Mid function returns a specified number of characters from a string.
 * Tip: Use the Len function to determine the number of characters in a string.
 * @param {*} string Required. The string expression from which characters are returned
 * @param {*} start Required. Specifies the starting position. If set to greater than the number of characters in string, it returns an empty string ("")
 * @param {*} length Optional. The number of characters to return
 */
function Mid(string, start, length) {

}

/**
 * The Replace function replaces a specified part of a string with another string a specified number of times.
 * @param {*} string Required. The string to be searched
 * @param {*} find Required. The part of the string that will be replaced
 * @param {*} replacewith Required. The replacement substring
 * @param {*} start Optional. Specifies the start position. Default is 1. All characters before the start position will be removed.
 * @param {*} count Optional. Specifies the number of substitutions to perform.
Default value is -1, which means make all possible substitutions
 * @param {*} compare Optional. Specifies the string comparison to use. Default is 0
Can have one of the following values:
0 = vbBinaryCompare - Perform a binary comparison
1 = vbTextCompare - Perform a textual comparison
 */
function Replace(string, find, replacewith, start, count, compare) {

}

/**
 * The Right function returns a specified number of characters from the right side of a string.
Tip: Use the Len function to find the number of characters in a string.
Tip: Also look at the Left function.
 * @param {*} string Required. The string to return characters from
 * @param {*} length Required. Specifies how many characters to return. If set to 0, an empty string ("") is returned. If set to greater than or equal to the length of the string, the entire string is returned
 */
function Right(string, length) {

}

/**
 *  

The Space function returns a string that consists of a specified number of spaces.
 * @param {*} number 
Required. The number of spaces you want in the string
 */
function Space(number) {

}
/**
 * The StrComp function compares two strings and returns a value that represents the result of the comparison.
The StrComp function can return one of the following values:
-1 (if string1 < string2)
0 (if string1 = string2)
1 (if string1 > string2)
Null (if string1 or string2 is Null)} 
 * @param {*} string1 Required. A string expression
 * @param {*} string2 Required. A string expression
 * @param {*} compare 
Optional. Specifies the string comparison to use. Default is 0
Can have one of the following values:
0 = vbBinaryCompare - Perform a binary comparison
1 = vbTextCompare - Perform a textual comparison
 */
function StrComp(string1, string2, compare) {

}

/**
 * The String function returns a string that contains a repeating character of a specified length.
 * @param {*} number Required. The length of the returned string
 * @param {*} character Required. The character that will be repeated
 */
function String(number, character) {

}

/**
 * The StrReverse function reverses a string.
 * @param {*} string Required. The string to be reversed
 */
function StrReverse(string) {

}


/**
 * The UCase function converts a specified string to uppercase.
 * @param {*} string Required. The string to be converted to uppercase
 */
function UCase(string) {

}
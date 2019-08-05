/**
 * The CreateObject function creates an object of a specified type.
 * @param {*} servername Required. The name of the application that provides the object
 * @param {*} typename Required. The type/class of the object
 * @param {*} location Optional. Where to create the object
 */
function CreateObject(servername, typename, location) {

}

/**
 * The Eval function evaluates an expression, like a function, and returns the result.
 * @param {*} expression Required. The expression to evaluate
 */
function Eval(expression) {

}


/**
 * The IsEmpty function returns a Boolean value that indicates whether a specified variable has been initialized or not. It returns true if the variable is uninitialized; otherwise, it returns False.
 * @param {*} expression 
 */
function IsEmpty(expression) {

}

/**
 * The IsNull function returns a Boolean value that indicates whether a specified expression contains no valid data (Null). It returns True if expression is Null; otherwise, it returns False.
 * @param {*} expression Required. An expression
 */
function IsNull(expression) {

}

/**
 The IsNumeric function returns a Boolean value that indicates whether a specified expression can be evaluated as a number. It returns True if the expression is recognized as a number; otherwise, it returns False.
Note: If expression is a date the IsNumeric function will return False.
 * @param {*} expression Required. An expression
 */
function IsNumeric(expression) {

}

/**
 * The IsObject function returns a Boolean value that indicates whether the specified expression is an automation object. It returns True if expression is an automation object; otherwise, it returns False.
 * @param {*} expression Required. An expression
 */
function IsObject(expression) {

}

/**
 * The RGB function returns a number that represents an RGB color value.
 * @param {*} red Required. A number from 0 to 255, inclusive, representing the red component of the color
 * @param {*} green Required. A number from 0 to 255, inclusive, representing the green component of the color
 * @param {*} blue Required. A number from 0 to 255, inclusive, representing the blue component of the color
 */
function RGB(red, green, blue) {

}

/**
 * The Round function rounds a number.
 * @param {*} expression Required. The numeric expression to be rounded
 * @param {*} numdecimalplaces  Optional. Specifies how many places to the right of the decimal are included in the rounding. Default is 0
 */
function Round(expression, numdecimalplaces) {

}

/**
 * The ScriptEngine function returns the scripting language in use.
 * This function can return one of the following strings:
 * VBScript - Indicates that Microsoft Visual Basic Scripting Edition is the current scripting engine
 * JScript - Indicates that Microsoft JScript is the current scripting engine
 * VBA - Indicates that Microsoft Visual Basic for Applications is the current scripting engine
 */
function ScriptEngine() {

}

/**
 * The ScriptEngineBuildVersion function returns the build version number of the scripting engine in use.
 */
function ScriptEngineBuildVersion() {

}

/**
 * The ScriptEngineMajorVersion function returns the major version number of the scripting engine in use.
 */
function ScriptEngineMajorVersion() {

}

/**
 * The ScriptEngineMinorVersion function returns the minor version number of the scripting engine in use.
 */
function ScriptEngineMinorVersion() {

}

/**
 * The TypeName function returns the subtype of a specified variable.
The TypeName function can return one of the following values:
Byte - Indicates a byte value
Integer - Indicates an integer value
Long - Indicates a long integer value
Single - Indicates a single-precision floating-point value
Double - Indicates a double-precision floating-point value
Currency - Indicates a currency value
Decimal - Indicates a decimal value
Date - Indicates a date or time value
String - Indicates a character string value
Boolean - Indicates a boolean value; True or False
Empty - Indicates an unitialized variable
Null - Indicates no valid data
<object type> - Indicates the actual type name of an object
Object - Indicates a generic object
Unknown - Indicates an unknown object type
Nothing - Indicates an object variable that doesn't yet refer to an object instance
Error - Indicates an error
 * @param {*} varname Required. A variable name
 */
function TypeName(varname) {

}

/**
 * The VarType function returns a value that indicates the subtype of a specified variable.
The VarType function can return one of the following values:
0 = vbEmpty - Indicates Empty (uninitialized)
1 = vbNull - Indicates Null (no valid data)
2 = vbInteger - Indicates an integer
3 = vbLong - Indicates a long integer
4 = vbSingle - Indicates a single-precision floating-point number
5 = vbDouble - Indicates a double-precision floating-point number
6 = vbCurrency - Indicates a currency
7 = vbDate - Indicates a date
8 = vbString - Indicates a string
9 = vbObject - Indicates an automation object
10 = vbError - Indicates an error
11 = vbBoolean - Indicates a boolean
12 = vbVariant - Indicates a variant (used only with arrays of Variants)
13 = vbDataObject - Indicates a data-access object
17 = vbByte - Indicates a byte
8192 = vbArray - Indicates an array
Note: If the variable is an array VarType() returns 8192 + VarType(array_element). Example: for an array of integer VarType() will return 8192 + 2 = 8194.
 * @param {*} varname Required. A variable name
 */
function VarType(varname) {

}
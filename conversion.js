var moment = require("moment");

/**
 * 
 * @param {*} string Required. A string expression. Cannot be an empty string!
 */
function Asc(string) {
    return String.fromCharCode(string[0]);
}

/**
 * 
 * @param {*} expression Required. Any valid expression. A nonzero value returns True, zero returns False. A run-time error occurs if the expression can not be interpreted as a numeric value
 */
function CBool(expression) {
    if (typeof expression === "string") {
        var asNumber = parseFloat(expression);
        if (asNumber === NaN) {
            throw "Type mismatch CBool";
        }
    }
    return expression > 0;
}

/**
 * 
 * @param {*} expression Required. Any valid expression
 */
function CByte(expression) {
    if (typeof expression === "string") {
        var asNumber = parseFloat(expression);
        if (asNumber === NaN) {
            throw "Type mismatch CByte";
        }
    }
    return Math.round(expression % 255);
}

/**
 * 
 * @param {*} expression Required. Any valid expression
 */
function CCur(expression) {
    return parseFloat(expression.toFixed(4));
}

/**
 * 
 * @param {*} date Required. Any valid date expression (like Date() or Now())
 */
function CDate(date) {
    return moment(date).toDate();
}

/**
 * The CDbl function converts an expression to type Double.
 * The expression must be a numeric value.
 * @param {*} expression Required. Any valid expression
 */
function CDbl(expression) {
    return parseFloat(expression);
}

/**
 * 
 * @param {*} charcode Required. A number that identifies a character
 */
function Chr(charcode) {
    return String.fromCharCode(charcode);
}

/**
 * 
 * @param {*} expression Required. Any valid expression
 */
function CInt(expression) {
    var n = parseInt(expression);
    if (isNaN(n)) {
        throw "Type mismatch CInt";
    }
    if (n < -32768 || n > 32767) {
        throw "Overflow CInt";
    }
}

/**
 * 
 * @param {*} expression Required. Any valid expression
 */
function CLng(expression) {
    var n = parseInt(expression);
    if (isNaN(n)) {
        throw "Type mismatch CLng";
    }
    if (n < -2147483648 || n > 2147483647) {
        throw "Overflow CLng";
    }
}


/**
 * 
 * @param {*} expression CSng(expression) 
 */
function CSng(expression) {
    var n = parseFloat(expression);
    if (isNaN(n)) {
        throw "Type mismatch CSng";
    }
    if (n < -3.402823E38 || n > -1.401298E-45) {
        throw "Overflow CSng";
    }

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
    if (expression === null) {
        throw "Error";
    }
    if (expression === undefined) {
        return "";
    }
    if (expression instanceof Date) {
        // Format to vbShortDate mm/dd/yyyy
        var mm = expression.getMonth() + 1;
        var dd = expression.getDate();
        var yyyy = expression.getFullYear();
        return mm + '/' + dd + '/' + yyyy;
    }
    if (expression instanceof Exception) {
        return "Error " + expression.message;
    }
    return expression.toString();
}

module.exports = {
    Asc: Asc,
    CBool: CBool,
    CByte: CByte,
    CCur: CCur,
    CDate: CDate,
    CDbl: CDbl,
    Chr: Chr,
    CInt: CInt,
    CLng: CLng,
    CSng: CSng,
    CStr: CStr
}
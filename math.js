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

/**
 * The Cos function returns the cosine of a specified number (angle).
 * @param {*} number 	Required. A numeric expression that expresses an angle in radians
 */
function Cos(number) {
    return Math.cos(number);
}

/**
 * The Exp function returns e raised to a power.
 * Note: The value of number cannot exceed 709.782712893.
 * Tip: Also look at the Log function.
 * @param {*} number Required. A valid numeric expression
 */
function Exp(number) {
    return Math.Exp(number);
}


/**
 * The Hex function returns a string that represents the hexadecimal value of a specified number.
 * Note: If number is not a whole number, it is rounded to the nearest whole number before being evaluated.
 * @param {*} number Required. Any valid expression
 * If number is:
 * Null - then the Hex function returns Null.
 * Empty - then the Hex function returns zero (0).
 * Any other number - then the Hex function returns up to eight hexadecimal characters.
 */
function Hex(number) {
    if (number === null) {
        return null;
    }
    if (number === undefined) {
        return 0;
    }
    return number.toString(16);
}

/**
 * The Int function returns the integer part of a specified number.
 * Note: If the number parameter contains Null, Null will be returned.
 * Tip: Also look at the Fix function.
 * @param {*} number Required. A valid numeric expression
 */
function Int(number) {
    return Math.trunc(number);
}

/**
 * The Fix function returns the integer part of a specified number.
 * Note: If the number parameter contains Null, Null will be returned.
 * Tip: Also look at the Int function.
 * @param {*} number Required. A valid numeric expression
 */
function Fix(number) {
    return Math.trunc(number);
}

/**
 * The Log function returns the natural logarithm of a specified number. The natural logarithm is the logarithm to the base e.
 * Note: Negative values are not allowed.
 * Tip: Also look at the Exp function.
 * @param {*} number Required. A valid numeric expression > 0
 */
function Log(number) {
    return Math.log(number);
}

/**
 * The Oct function returns a string that represents the octal value of a specified number.
 * Note: If number is not already a whole number, it is rounded to the nearest whole number before being evaluated.
 * @param {*} number Required. Any valid expression
 * If number is:
 * Null - then the Oct function returns Null.
 * Empty - then the Oct function returns zero (0).
 * Any other number - then the Oct function returns up to 11 octal characters.
 */
function Oct(number) {
    if (number === null) {
        return null;
    }
    if (number === undefined) {
        return 0;
    }
    return number.toString(8);
}

/**
 * The Rnd function returns a random number. The number is always less than 1 but greater or equal to 0.
 * @param {*} number Optional. A valid numeric expression
 * If number is:
 * <0 - Rnd returns the same number every time
 * >0 - Rnd returns the next random number in the sequence
 * =0 - Rnd returns the most recently generated number
 * Not supplied - Rnd returns the next random number in the sequence
 */

function Rnd(number) {
    if (number === undefined || number > 0) {
        this.lastGeneratedRandom = Math.random();
        return this.lastGeneratedRandom;
    }
    if (number === 0) {
        return this.lastGeneratedRandom;
    }
    // Not implemented case for negative number
    return undefined;
}

/**
 * The Sgn function returns an integer that indicates the sign of a specified number.
 * @param {*} number 
 * Required. A valid numeric expression
 * If number is:
 * 
 * >0 - Sgn returns 1
 * =0 - Sgn returns 0
 * <0 - Sgn returns -1
 */
function Sgn(number) {
    if (number > 0) {
        return 1;
    } else if (number === 0) {
        return 0;
    } else {
        return -1;
    }
}

/**
 * The Sin function returns the sine of a specified number (angle).
 * @param {*} number Required. A valid numeric expression that expresses an angle in radians
 */
function Sin(number) {
    return Math.sin(number);
}

/**
 * The Sqr function returns the square root of a number.
 * Note: The number parameter cannot be a negative value.
 * @param {*} number Required. A valid numeric expression >= 0
 */
function Sqr(number) {
    return Math.sqrt(number);
}

/**
 * The Tan function returns the tangent of a specified number (angle).
 * @param {*} number Required. A valid numeric expression that expresses an angle in radians
 */
function Tan(number) {
    return Math.tan(number);
}

module.exports = {
    Abs: Abs,
    Atn: Atn,
    Cos: Cos,
    Exp: Exp,
    Hex: Hex,
    Int: Int,
    Fix: Fix,
    Log: Log,
    Oct: Oct,
    Rnd: Rnd,
    Sgn: Sgn,
    Sin: Sin,
    Sqr: Sqr,
    Tan: Tan
}
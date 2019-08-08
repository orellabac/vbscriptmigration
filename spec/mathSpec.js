var vb_math = require('../math');

describe("math functions", function() {
    it("Abs ", function() {
        /*...*/
        expect(vb_math.Abs(1)).toEqual(1);
        expect(vb_math.Abs(-1)).toEqual(1);
        expect(vb_math.Abs(48.4)).toEqual(48.4);
        expect(vb_math.Abs(-48.4)).toEqual(48.4);
    });
    it("Atn ", function() {
        /*...*/
        expect(vb_math.Atn(89)).toEqual(1.55956084453693);
        expect(vb_math.Atn(8.9)).toEqual(1.45890606062322);
    });
    it("Cos", function() {
        expect(vb_math.Cos(50.0)).toEqual(0.964966028492113);
        expect(vb_math.Cos(-50.0)).toEqual(0.964966028492113);

    });
    it("Exp", function() {
        expect(vb_math.Exp(6.7)).toEqual(812.405825167543);
        expect(vb_math.Exp(6.7)).toEqual(1.23091190267348E-03);
    });
    it("Hex", function() {
        expect(vb_math.Hex(3)).toEqual('3');
        expect(vb_math.Hex(5)).toEqual('5');
        expect(vb_math.Hex(9)).toEqual('9');
        expect(vb_math.Hex(10)).toEqual('A');
        expect(vb_math.Hex(11)).toEqual('B');
        expect(vb_math.Hex(12)).toEqual('C');
        expect(vb_math.Hex(400)).toEqual('190');
        expect(vb_math.Hex(459)).toEqual('1CB');
        expect(vb_math.Hex(460)).toEqual('1CC');
    });
    it("Int", function() {
        expect(vb_math.Int(6.83227)).toEqual(6);
        expect(vb_math.Int(6.23443)).toEqual(6);
    });
    it("Fix", function() {
        expect(vb_math.Fix(6.83227)).toEqual(6);
        expect(vb_math.Fix(6.23443)).toEqual(6);
    });
    it("Log", function() {
        expect(vb_math.Log(38.256783227)).toEqual(3.64432088381777);
    });
    it("Oct", function() {
        expect(vb_math.Oct(3)).toEqual('3');
        expect(vb_math.Oct(5)).toEqual('5');
        expect(vb_math.Oct(9)).toEqual('11');
        expect(vb_math.Oct(10)).toEqual('12');
        expect(vb_math.Oct(11)).toEqual('13');
        expect(vb_math.Oct(12)).toEqual('14');
        expect(vb_math.Oct(400)).toEqual('620');
        expect(vb_math.Oct(459)).toEqual('713');
        expect(vb_math.Oct(460)).toEqual('714');
    });
    it("Rnd", function() {
        expect().nothing();
    });
    it("Sgn", function() {
        expect(vb_math.Sgn(15)).toEqual(1);
        expect(vb_math.Sgn(-5.67)).toEqual(-1);
        expect(vb_math.Sgn(0)).toEqual(0);
    });
    it("Sin", function() {
        expect(vb_math.Sin(47)).toEqual(0.123573122745224);
        expect(vb_math.Sin(-47)).toEqual(-0.123573122745224);
    });
    it("Sqr", function() {
        expect(vb_math.Sqr(9)).toEqual(3);
        expect(vb_math.Sqr(0)).toEqual(0);
        expect(vb_math.Sqr(47)).toEqual(6.85565460040104);
    });
    it("Tan", function() {
        expect(vb_math.Tan(40)).toEqual(-1.1172149309239);
        expect(vb_math.Tan(-40)).toEqual(1.1172149309239);
    });

});
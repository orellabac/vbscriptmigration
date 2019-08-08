var vb_convert = require('../conversion');

describe("conversion functions", function() {
    it("Asc ", function() {
        /*...*/
        expect(vb_convert.Asc('A')).toEqual(65);
        expect(vb_convert.Asc('a')).toEqual(97);
        expect(vb_convert.Asc('F')).toEqual(70);
        expect(vb_convert.Asc('f')).toEqual(102);
        expect(vb_convert.Asc('2')).toEqual(50);
        expect(vb_convert.Asc('#')).toEqual(35);
        expect(vb_convert.Asc('W')).toEqual(87);
        expect(vb_convert.Asc('William')).toEqual(87);
    });
    it("CBool ", function() {
        /*...*/
        expect(vb_convert.CBool(5)).toEqual(true);
        expect(vb_convert.CBool(0)).toEqual(false);
        expect(vb_convert.CBool(-5)).toEqual(true);
    });
    it("CByte ", function() {
        /*...*/
        expect(vb_convert.CByte(0)).toEqual(0);
        expect(vb_convert.CByte(56.8)).toEqual(57);
        expect(vb_convert.CByte(123.2)).toEqual(123);
        expect(vb_convert.CByte(255)).toEqual(255);
    });
    it("CCur ", function() {
        /*...*/
        expect(vb_convert.CCur(30)).toEqual(30);
        expect(vb_convert.CCur(5.9555555555555)).toEqual(5.9556);
    });
    it("CDate ", function() {
        /*...*/
        expect(vb_convert.CDate("April 22, 2010")).toEqual(30);
        //expect(vb_convert.CDate(#4/22/10#)).toEqual();
        expect(vb_convert.CDate("3:18:40 AM")).toEqual(30);
    });
    it("CDbl ", function() {
        /*...*/
        expect(vb_convert.CDbl(134.345)).toEqual(134.345);
        expect(vb_convert.CDbl(14111111113353355.345455)).toEqual(1.41111111133534E+16);

    });
    it("Chr ", function() {
        /*...*/
        expect(vb_convert.Chr(65)).toEqual('A');
        expect(vb_convert.Chr(66)).toEqual('B');
        expect(vb_convert.Chr(67)).toEqual('C');
        expect(vb_convert.Chr(97)).toEqual('a');
        expect(vb_convert.Chr(98)).toEqual('b');
        expect(vb_convert.Chr(99)).toEqual('c');
    });
    it("CInt ", function() {
        /*...*/
        expect(vb_convert.CInt("300")).toEqual(300);
        expect(vb_convert.CInt(36.75)).toEqual(37);
        expect(vb_convert.CInt(-67)).toEqual(-67);
    });
    it("CLng ", function() {
        /*...*/
        expect(vb_convert.CLng("300000")).toEqual(300000);
        expect(vb_convert.CLng(1536.750)).toEqual(1537);
        expect(vb_convert.CLng(-6700000)).toEqual(-6700000);
    });
    it("CSng ", function() {
        /*...*/
        expect(vb_convert.CSng("300000")).toEqual(300000);
        expect(vb_convert.CSng(1536.75263541)).toEqual(1536.753);
        expect(vb_convert.CSng(-6700000)).toEqual(-6700000);
    });
    it("CStr ", function() {
        /*...*/
        expect(vb_convert.CStr("300000")).toEqual(300000);
        //expect(vb_convert.CStr(#10-05-25#)).toEqual(1536.753);
    });
});
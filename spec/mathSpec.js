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
});
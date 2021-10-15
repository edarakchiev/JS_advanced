const {expect} = require('chai')
const rgbToHexColor = require("./06.RGBToHex")

describe("test RGB", () => {
    it('should be true with correct input', function () {
        expect(rgbToHexColor(0, 0, 0)).to.equal("#000000")
    });
    it('should be true with correct input', function () {
        expect(rgbToHexColor(255, 255, 255)).to.equal("#FFFFFF")
    });
    it('should be true with correct input', function () {
        expect(rgbToHexColor(127, 137, 147)).to.equal("#7F8993")
    });
    it('should be undefined, input out of range', function () {
        expect(rgbToHexColor(0, 0, 256)).to.equal(undefined)
    });
    it('should be undefined, input out of range', function () {
        expect(rgbToHexColor(256, 0, 0)).to.equal(undefined)
    });
    it('should be undefined, input out of range', function () {
        expect(rgbToHexColor(0, 256, 0)).to.equal(undefined)
    });
    it('should be undefined, input out of range', function () {
        expect(rgbToHexColor(0, 0, -1)).to.equal(undefined)
    });
    it('should be undefined, input out of range', function () {
        expect(rgbToHexColor(0, -1, 0)).to.equal(undefined)
    });
    it('should be undefined, input out of range', function () {
        expect(rgbToHexColor(-1, 0, 0)).to.equal(undefined)
    });
    it('should be undefined, with input as a string', function () {
        expect(rgbToHexColor("a", 0, 0)).to.equal(undefined)
    });
    it('should be undefined, with input as a string', function () {
        expect(rgbToHexColor(0, "a", 0)).to.equal(undefined)
    })
    it('should be undefined, with input as a string', function () {
        expect(rgbToHexColor(0, 0, "a")).to.equal(undefined)
    })
})
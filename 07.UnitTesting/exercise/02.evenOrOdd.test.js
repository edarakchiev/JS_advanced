const {expect} = require('chai')
const isOddOrEven = require("./02.evenOrOdd")

describe("Check if length is even or odd", () => {
    it('should be undefined with number as input', function () {
        expect(isOddOrEven(1)).to.be.undefined
        expect(isOddOrEven(-1)).to.be.undefined
        expect(isOddOrEven(0)).to.be.undefined
    });
    it('should be undefined with array or object as input', function () {
        expect(isOddOrEven([1, 2, 3])).to.be.undefined
        expect(isOddOrEven(["1", "2", "3"])).to.be.undefined
        expect(isOddOrEven(["1", 2, 3])).to.be.undefined
        expect(isOddOrEven(["a", "b", "c"])).to.be.undefined
    });
    it('should even', function () {
        expect(isOddOrEven("asdf")).to.be.equal("even")
    });
    it('should odd', function () {
        expect(isOddOrEven("asd")).to.be.equal("odd")
    });
})
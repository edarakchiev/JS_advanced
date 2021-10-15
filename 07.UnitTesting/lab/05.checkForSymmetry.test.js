const {expect} = require('chai')
const isSymmetric = require("./05.checkForSymmetry")

describe('test the symmetric', ()=> {
    it('test with correct input data', function () {
        expect(isSymmetric([1,2,2,1])).to.be.true
    });
    it('should be true with symmetric odd data', function () {
        expect(isSymmetric([1,2,1])).to.be.true
    });
    it('should  be false with symmetric input as a string', function () {
        expect(isSymmetric("1221")).to.be.false
    });
    it('should be false with not symmetric input', function () {
        expect(isSymmetric([1,2,3])).to.be.false
    });
    it('should be false with input number', function () {
        expect(isSymmetric(1221)).to.be.false
    });
    it('should be true with symmetric string array ', function () {
        expect(isSymmetric(["a","b","c","b","a"])).to.be.true
    });
    it('should be false', function () {
        expect(isSymmetric(["A","b","c","b","a"])).to.be.false
    });
    it('should be false with different type', function () {
        expect(isSymmetric([1,2,2,"1"])).to.be.false
    });
})


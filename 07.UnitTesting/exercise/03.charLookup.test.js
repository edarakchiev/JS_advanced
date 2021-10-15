const {expect} = require('chai')
const lookupChar = require('./03.charLookup')

describe('Test lookupChar', () => {
    it('should incorrect inputs', function () {
        expect(lookupChar("aabbssdd", "1")).to.be.undefined
        expect(lookupChar(123, 2)).to.be.undefined
        expect(lookupChar({}, 1)).to.be.undefined
        expect(lookupChar([], 0)).to.be.undefined
        expect(lookupChar("qqw124es", [])).to.be.undefined
        expect(lookupChar("qqw124es", {})).to.be.undefined
        expect(lookupChar("qqw124es", 1.1)).to.be.undefined
        expect(lookupChar("qqw124es", -1.1)).to.be.undefined
    });
    it('should be return a', function () {
        expect(lookupChar("abc", 0)).to.be.equal("a")
        expect(lookupChar("abc", 2)).to.be.equal("c")
    });
    it('should be incorrect index', function () {
        expect(lookupChar("abc", -1)).to.be.equal("Incorrect index")
        expect(lookupChar("abc", 3)).to.be.equal("Incorrect index")
        expect(lookupChar("abc", 4)).to.be.equal("Incorrect index")
    });
})
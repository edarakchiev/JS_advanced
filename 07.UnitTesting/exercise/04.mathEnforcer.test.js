const {expect} = require('chai')
const mathEnforcer = require('./04.mathEnforcer')

describe('Test math enforcer', ()=>{
    it('Test add five with correct data', function () {
        expect(mathEnforcer.addFive(7)).to.be.equal(12)
        expect(mathEnforcer.addFive(-7)).to.be.equal(-2)
        expect(mathEnforcer.addFive(-2)).to.be.equal(3)
        expect(mathEnforcer.addFive(-2.2)).to.be.equal(2.8)
        expect(mathEnforcer.addFive(0.2)).closeTo(5.2, 0.1)
    });
    it('should be undefined when input is sting or array or object', function () {
        expect(mathEnforcer.addFive("1")).to.be.undefined
        expect(mathEnforcer.addFive("d")).to.be.undefined
        expect(mathEnforcer.addFive([])).to.be.undefined
        expect(mathEnforcer.addFive({})).to.be.undefined
    });

    it('Test subtract five with correct data', function () {
        expect(mathEnforcer.subtractTen(17)).to.be.equal(7)
        expect(mathEnforcer.subtractTen(-7)).to.be.equal(-17)
        expect(mathEnforcer.subtractTen(3)).to.be.equal(-7)
        expect(mathEnforcer.subtractTen(2.2)).closeTo(-7.8, 0.1)
    });
    it('Subtract should be undefined when input is sting or array or object', function () {
        expect(mathEnforcer.subtractTen("1")).to.be.undefined
        expect(mathEnforcer.subtractTen("d")).to.be.undefined
        expect(mathEnforcer.subtractTen([])).to.be.undefined
        expect(mathEnforcer.subtractTen({})).to.be.undefined
    });

    it('Test sum with correct data', function () {
        expect(mathEnforcer.sum(7, 10)).to.be.equal(17)
        expect(mathEnforcer.sum(-7, 10)).to.be.equal(3)
        expect(mathEnforcer.sum(3, -7)).to.be.equal(-4)
        expect(mathEnforcer.sum(2.2, 1,1)).closeTo(3.3,0.1)
    });
    it('Sum should be undefined when input is sting or array or object', function () {
        expect(mathEnforcer.sum("1", 1)).to.be.undefined
        expect(mathEnforcer.sum("d", 1)).to.be.undefined
        expect(mathEnforcer.sum([], 1)).to.be.undefined
        expect(mathEnforcer.sum({}, 1)).to.be.undefined
        expect(mathEnforcer.sum({}, 1.1)).to.be.undefined
        expect(mathEnforcer.sum(1, "1")).to.be.undefined
        expect(mathEnforcer.sum(1, "d")).to.be.undefined
        expect(mathEnforcer.sum(1, [])).to.be.undefined
        expect(mathEnforcer.sum(1, {})).to.be.undefined
        expect(mathEnforcer.sum(1.1, {})).to.be.undefined
    });
})

const { expect } = require('chai')
const numberOperations = require('./NumberOperations.js')

describe('Test', function () {
    describe('test pow number', function () {
        it('Test pow number', function () {
            expect(numberOperations.powNumber(2)).to.equal(4)
        })
    })
    describe('test number checker', function () {
        it('test when input is not number', function () {
            expect(() => numberOperations.numberChecker('a')).to.throw(Error)
            expect(() => numberOperations.numberChecker('[]')).to.throw(Error)
        })
        it('input < 100', function () {
            expect(numberOperations.numberChecker(99)).to.equal('The number is lower than 100!')
        })
        it('input > 100', function () {
            expect(numberOperations.numberChecker(100)).to.equal('The number is greater or equal to 100!')
        })
    })
    describe('test sum arrays', function () {
        it('test', function () {
            expect(numberOperations.sumArrays([1, 2, 3, 4], [5, 6, 7])).to.have.members([6, 8, 10, 4])
            expect(numberOperations.sumArrays([1, 2, 3], [5, 6, 7])).to.have.members([6, 8, 10])
            expect(numberOperations.sumArrays([1, 2, 3], [5, 6, 7, 8])).to.have.members([6, 8, 10, 8])
        })
    })
})
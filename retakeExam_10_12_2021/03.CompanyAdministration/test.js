const { expect } = require('chai')
const companyAdministration = require('./companyAdministration.js')


describe('Test Company Administration', function () {
    describe('Test hiringEmployee', function () {
        it('Test position not programer', function () {
            expect(() => companyAdministration.hiringEmployee('testName', 'testPosition', 1)).to.throw(Error)
        })
        it('test programer position with 3 or more years expiriance', function () {
            expect(companyAdministration.hiringEmployee('testName', 'Programmer', 3)).to.equal(`testName was successfully hired for the position Programmer.`)
        })
        it('test programer position with  less 3 years expiriance', function () {
            expect(companyAdministration.hiringEmployee('testName', 'Programmer', 2)).to.equal(`testName is not approved for this position.`)
        })
    })
    describe('Test calculate salary', function () {
        it('test with incorrect input hours', function () {
            expect(() => companyAdministration.calculateSalary('a')).to.throw(Error)
            expect(() => companyAdministration.calculateSalary(-1)).to.throw(Error)
            expect(() => companyAdministration.calculateSalary([])).to.throw(Error)
            expect(() => companyAdministration.calculateSalary({})).to.throw(Error)
            expect(() => companyAdministration.calculateSalary('10')).to.throw(Error)
        })
        it('test with hours < 160', function() {
            expect(companyAdministration.calculateSalary(160)).to.equal(2400)
            expect(companyAdministration.calculateSalary(1)).to.equal(15)
        })
        it('test with hours > 160', function() {
            expect(companyAdministration.calculateSalary(161)).to.equal(3415)
            
        })
        describe('Test find Employee', function() {
            it('Test with incorrect input', function(){
                expect(() =>companyAdministration.firedEmployee('test', 1)).to.throw(Error)
                expect(() =>companyAdministration.firedEmployee({}, 1)).to.throw(Error)
                expect(() =>companyAdministration.firedEmployee(0, 1)).to.throw(Error)
                expect(() =>companyAdministration.firedEmployee(['test1', 'test2', 'test3'], '1')).to.throw(Error)
                expect(() =>companyAdministration.firedEmployee(['test1', 'test2', 'test3'], 'a')).to.throw(Error)
                expect(() =>companyAdministration.firedEmployee(['test1', 'test2', 'test3'], 3)).to.throw(Error)
                expect(() =>companyAdministration.firedEmployee(['test1', 'test2', 'test3'], -1)).to.throw(Error)
            })
            it('test with correct input', function(){
                expect(companyAdministration.firedEmployee(['test1', 'test2', 'test3'], 1)).to.equal('test1, test3')
            })
        })
    })
})
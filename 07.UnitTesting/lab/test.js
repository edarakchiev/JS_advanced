const {expect} = require('chai')
const sum = require("./testSum")

describe('Demo Test', () => {
    it('works with 2 and 5', () =>{
        expect(sum(2,5)).to.equal(7)
    })
})


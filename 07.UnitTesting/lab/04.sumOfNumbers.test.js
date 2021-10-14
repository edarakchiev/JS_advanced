const {expect} = require('chai')
const sum = require("./04.sumOfNumbers")


describe('Check functionality', () => {
        it("Check the sum with correct input", () => {
            expect(sum([1, 2, 3, 1])).to.equal(7)
        })
    }
)

//    "test": "echo \"Error: no test specified\" && exit 1"
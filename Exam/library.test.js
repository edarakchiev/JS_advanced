const {expect} = require('chai')
const library = require("./library")

describe('Test the library', () => {

    describe('test calcPriceBook', ()=>{
        it('test calcPriceBook with correct input', () =>{
            expect(library.calcPriceOfBook("test name", 1980)).to.equal(`Price of test name is 10.00`)
            expect(library.calcPriceOfBook("test name", 1981)).to.equal(`Price of test name is 20.00`)
        })
        it('test with incorrect input data', () => {
            expect(() => library.calcPriceOfBook(2, 1999)).to.throw("Invalid input")
            expect(() => library.calcPriceOfBook([], 1999)).to.throw("Invalid input")
            expect(() => library.calcPriceOfBook({}, 1999)).to.throw("Invalid input")
            expect(() => library.calcPriceOfBook({}, "1999")).to.throw("Invalid input")
            expect(() => library.calcPriceOfBook({}, {})).to.throw("Invalid input")
            expect(() => library.calcPriceOfBook({}, [])).to.throw("Invalid input")
            expect(() => library.calcPriceOfBook([], [])).to.throw("Invalid input")
            expect(() => library.calcPriceOfBook([], {})).to.throw("Invalid input")
            expect(() => library.calcPriceOfBook([], "asd")).to.throw("Invalid input")
            expect(() => library.calcPriceOfBook("test name", "asd")).to.throw("Invalid input")
            expect(() => library.calcPriceOfBook("test name", "1990")).to.throw("Invalid input")
            expect(() => library.calcPriceOfBook("test name", [])).to.throw("Invalid input")
            expect(() => library.calcPriceOfBook("test name", {})).to.throw("Invalid input")
        })
    })
    describe('test find book', () => {
        it('test find book', () => {
            expect(() => library.findBook([], "test 1").to.throw("No books currently available"))
            expect(() => library.findBook(["test 1", "test 2", "test 3"], "test 1").to.equal("We found the book you want."))
            expect(() => library.findBook(["test 1", "test 2", "test 3"], "test 14").to.equal("The book you are looking for is not here!"))
        })

    })
    describe('test arrange', () => {
        it('test arrange the books with incorrect input', () => {
            expect(() => library.arrangeTheBooks(-1).to.throw("Invalid input"))
            expect(() => library.arrangeTheBooks(-1.1).to.throw("Invalid input"))
            expect(() => library.arrangeTheBooks(1.1).to.throw("Invalid input"))
        })
        it('test with correct input', () => {
            expect(() => library.arrangeTheBooks(40).to.equal("Great job, the books are arranged."))
            expect(() => library.arrangeTheBooks(0).to.equal("Great job, the books are arranged."))
            expect(() => library.arrangeTheBooks(41).to.equal("Insufficient space, more shelves need to be purchased."))
        })
        it('should ',  () => {
            expect(()=> library.arrangeTheBooks(41).to.equal("Insufficient space, more shelves need to be purchased."))
        });
    })
})

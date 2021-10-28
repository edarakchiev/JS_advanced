const {expect} = require('chai')
const library = require('./03.library.js')

describe('Test library', () => {
    it('test calcPrice with correct input, expect full price', () => {
        expect(library.calcPriceOfBook('Test book', 1981)).to.be.equal('Price of Test book is 20.00')
    })
    it('test calcPrice when price is half', () => {
        expect(library.calcPriceOfBook('Test book', 1980)).to.be.equal('Price of Test book is 10.00')
    })
    it('test calcPrice with incorrect input', ()=> {
        expect(() => library.calcPriceOfBook('Test book', '1980')).to.throw("Invalid input")
        expect(() => library.calcPriceOfBook('Test book', [1980])).to.throw("Invalid input")
        expect(() => library.calcPriceOfBook('Test book', [])).to.throw("Invalid input")
        expect(() => library.calcPriceOfBook('Test book', {})).to.throw("Invalid input")
        expect(() => library.calcPriceOfBook('Test book', 1.1)).to.throw("Invalid input")
        expect(() => library.calcPriceOfBook(1, 1980)).to.throw("Invalid input")
        expect(() => library.calcPriceOfBook([], 1980)).to.throw("Invalid input")
        expect(() => library.calcPriceOfBook({}, 1980)).to.throw("Invalid input")
        expect(() => library.calcPriceOfBook({}, '1980')).to.throw("Invalid input")
        expect(() => library.calcPriceOfBook([], '1980')).to.throw("Invalid input")
        expect(() => library.calcPriceOfBook(1, '1980')).to.throw("Invalid input")
    })
    it('test find book with correct data', () => {
        expect(library.findBook(['book1', 'book2', 'book3'], 'book1')).to.equal("We found the book you want.")
    });
    it('test find book with book when not in array', () => {
        expect(library.findBook(['book1', 'book2', 'book3'], 'book4')).to.be.equal('The book you are looking for is not here!')
    });
    it('test find book with empty array', () => {
        expect(() => library.findBook([], 'book')).throw('No books currently available')
    });
    it('test arrange the books with correct input, when have space', () => {
        expect(library.arrangeTheBooks(40)).to.equal('Great job, the books are arranged.')
        expect(library.arrangeTheBooks(0)).to.equal('Great job, the books are arranged.')
    });
    it('test arrange books when no enough space', () => {
        expect(library.arrangeTheBooks(41)).to.equal('Insufficient space, more shelves need to be purchased.')
    });
    it('test arrange with incorrect input', () => {
        expect(() => library.arrangeTheBooks('5')).throw('Invalid input')
        expect(() => library.arrangeTheBooks('')).throw('Invalid input')
        expect(() => library.arrangeTheBooks(-1)).throw('Invalid input')
        expect(() => library.arrangeTheBooks({})).throw('Invalid input')
        expect(() => library.arrangeTheBooks([])).throw('Invalid input')
    })
})
class Stringer {
    constructor(string, len) {
        this.innerString = string
        this.innerLength = len
        this.result = ''
    }

    increase(number) {
        this.innerLength += number
    }

    decrease(number) {
        this.innerLength -= number
        if (this.innerLength < 0) {
            this.innerLength = 0
        }
    }

    toString() {
        let result = ''
        if (this.innerLength >= this.innerString.length) {
            result = this.innerString
        } else if (0 < this.innerLength < this.innerString.length) {
            result = this.innerString.slice(0, this.innerLength) + "..."
        } else {
            result = "..."
        }
        return result
    }
}


let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4);
console.log(test.toString()); // Test

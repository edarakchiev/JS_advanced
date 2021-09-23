function numbers(nums) {
    let result = []
    for (let n of nums) {
        if (n < 0) {
            result.unshift(n)
        } else {
            result.push(n)
        }
    }
    for (let num of result) {
        console.log((num))
    }
    }


numbers([7, -2, 8, 9])
numbers([3, -2, 0, -1])
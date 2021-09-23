function biggerHalf(numbers) {
    let start = Math.floor(numbers.length / 2)
    numbers.sort((a, b) => a - b)
    let result = numbers.slice(start, numbers.length)
    return result
}

console.log(biggerHalf([4, 7, 2, 5]))
console.log(biggerHalf([3, 19, 14, 7, 2, 19, 6]))
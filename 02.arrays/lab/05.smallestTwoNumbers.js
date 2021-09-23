function smallestNumbers(numbers) {
    numbers.sort((a, b) => a - b)
    let result = numbers.slice(0, 2)

    console.log(result.join(" "))
}

smallestNumbers([30, 15, 50, 5])
smallestNumbers([3, 0, 10, 4, 7, 3])
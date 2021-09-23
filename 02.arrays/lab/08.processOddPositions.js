function oddPosition(numbers) {
    let result = []
    for (let i = 0; i < numbers.length; i++) {
        if (i % 2 != 0) {
            result.push(numbers[i] * 2)
        }
    }
    result.reverse()
    console.log(result.join(" "))
}

oddPosition([10, 15, 20, 25])
oddPosition([3, 0, 10, 4, 7, 3])
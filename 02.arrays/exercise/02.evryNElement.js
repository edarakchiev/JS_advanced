function solve(list, n) {
    let result = []

    for (let i = 0; i < list.length; i += n) {
        result.push(list[i])
    }
    return result
}

console.log(solve(['5', '20', '31', '4', '20'], 2))
console.log(solve(['dsa', 'asd', 'test', 'tset'], 2))
console.log(solve([1, 2, 3, 4, 5, 6, 7, 8], 3))
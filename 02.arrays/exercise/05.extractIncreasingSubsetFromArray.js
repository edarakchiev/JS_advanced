function solve(array) {
    let result = []
    let maxNum = Number.MIN_SAFE_INTEGER
    array.forEach((el) => {
        if (el >= maxNum) {
            result.push(el)
            maxNum = el
        }
    })
    return result
}




console.log(solve([1,3,8,4,10,12,3,2,24]))
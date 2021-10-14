function subSum(array, start, stop) {
    if (!Array.isArray(array)) {
        return NaN
    }
    if (start < 0) {
        start = 0
    }
    if (stop > array.length-1) {
        stop = array.length-1
    }

    let sum = 0
    for (let i = start; i <= stop; i++) {
        if (isNaN(array[i])) {
            return NaN
        }
        sum += Number(array[i])
    }
    return sum
}


console.log(subSum([10, 20, 30, 40, 50, 60], 3, 300))
console.log(subSum([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1))
console.log(subSum([10, 'twenty', 30, 40], 0, 2))
console.log(subSum([], 1, 2))
console.log(subSum('text', 0, 2))
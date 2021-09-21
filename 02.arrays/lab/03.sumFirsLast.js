function sumFirsLast(list) {
    let firstEl = Number(list.shift())
    let lastEl = parseInt(list.pop())
    return firstEl + lastEl
}

console.log(sumFirsLast(['20', '30', '40']))
console.log(sumFirsLast(['5', '10']))
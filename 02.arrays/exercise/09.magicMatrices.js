function magicMatrix(matrix) {
    function checkStatus(sum1, sum2){
        return sum1 === sum2;
    }
    let len = matrix.length
    let sum = 0
    for (let i = 0; i < len; i++) {
         sum += matrix[0][i]
    }
    let game
    for (let r = 0; r < len; r++) {
        let rowSum = 0
        for (let c = 0; c < len; c++) {
            rowSum += matrix[r][c]
        }
        game = checkStatus(sum, rowSum)
        if (!game) {
            break
        }
    }

    for (let c = 0; c < len; c++) {
        let colSum = 0
        for (let r = 0; r < len; r++) {
            colSum += matrix[r][c]
        }
        game = checkStatus(sum, colSum)
        if (!game) {
            break
        }
    }

    console.log(game)
}


magicMatrix([
        [4, 5, 6],
        [6, 5, 4],
        [5, 5, 5]
    ]
)

magicMatrix([[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]
)
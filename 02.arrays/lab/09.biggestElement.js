function biggestElement(matrix) {
    let maxNum = matrix[0][0]
    for (let r=0; r<matrix.length; r++){
        for (let c=0; c<matrix[r].length; c ++){
            if (matrix[r][c] >= maxNum){
                maxNum = matrix[r][c]
            }
        }
    }
    return maxNum
}

console.log(biggestElement([[20, 50, 10],
    [8, 33, 145]]
))
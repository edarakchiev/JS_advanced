function sameNumbers(num) {
    let strNum = `${num}`
    let lenNum = strNum.length

    let tempNum = Number(strNum[0])
    let sumNum = 0
    for (i = 0; i < lenNum; i++) {
        sumNum += Number(strNum[i])
        if (Number(strNum[i]) !== tempNum) {
            numStatus = false
        } else {
            numStatus = true
        }
    }
    console.log(numStatus)
    console.log(sumNum)
}

sameNumbers(12347)
sameNumbers(22222)

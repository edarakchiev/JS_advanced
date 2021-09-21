function evenPosEl(elements) {
    let result = []
    for (let i = 0; i < elements.length; i +=2) {
        result.push(elements[i])
    }
    console.log(result.join(" "))
}

evenPosEl(['20', '30', '40', '50', '60'])
evenPosEl(['5', '10'])
function solve() {
    let text = document.getElementById('input').value.split(".").slice(0, -1)
    console.log(text)
    let result = ''
    let counter = 0
    text.forEach(el => {
        counter++
        if (counter === 1) {
            result += "<p>"
        }
        result += el + "."
        if (counter ===3){
            result += "</p>"
            counter = 0
        }

    })
    let a = document.getElementById("output")
    a.innerHTML = result
}
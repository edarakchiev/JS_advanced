function solve() {
    let text = document.getElementById("text").value
    let naming = document.getElementById("naming-convention").value
    let result = ""
    let splitText = text.split(" ")

    if (naming === "Camel Case") {
        result += splitText[0].toLowerCase()
        for (let i = 1; i < splitText.length; i++) {
            result += splitText[i][0].toUpperCase() + splitText[i].slice(1).toLowerCase()
        }
    } else if (naming === "Pascal Case") {
        for (let i = 0; i < splitText.length; i++) {
            result += splitText[i][0].toUpperCase() + splitText[i].slice(1).toLowerCase()
        }
    } else {
        result = "Error!"
    }
    document.getElementById("result").textContent = result
}
function addItem() {
    let text = document.getElementById("newItemText")
    let ulElement = document.getElementById("items")
    let liElement = document.createElement("li")
    liElement.textContent = text.value
    ulElement.appendChild(liElement)
    let button = document.createElement("a")
    button.textContent = "[Delete]"
    button.href = "#"
    button.addEventListener("click", deleteRow)
    liElement.appendChild(button)

    function deleteRow(ev) {
        const parent = ev.target.parentElement
        parent.remove()
    }

    text.value = ""

}
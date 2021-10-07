function addItem() {
    let liElement = document.createElement("li")
    let text = document.getElementById("newItemText")
    liElement.textContent = text.value
    let ulParent = document.getElementById("items")
    ulParent.appendChild(liElement)
    text.value = ""
}

function toggle() {
    let text = document.getElementById("extra")
    let button = document.getElementsByClassName("button")[0]

    button.textContent = button.textContent === "More" ? "Less" : "More"
    text.style.display = text.style.display === "block" ? "none" : "block"
}
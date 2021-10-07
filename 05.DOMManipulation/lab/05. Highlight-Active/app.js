function focused() {
    let sections = Array.from(document.getElementsByTagName('input'))
    sections.forEach(s => {
        s.addEventListener("focus", onFocus)
        s.addEventListener("blur", onBlur)

    })
    function onFocus(ev){
        ev.target.parentElement.classList.add("focused")
    }
    function onBlur(ev){
        ev.target.parentElement.classList.remove("focused")
    }
}
function deleteByEmail() {
    const input = document.querySelector('input[name="email"]').value
    let deleted = false
    let result = document.getElementById('result')

    let rows = Array.from(document.querySelector("tbody").children)
    rows.forEach(r => {
        if (r.children[1].textContent === input) {
            r.remove()
            deleted = true
        }
    })
    if (deleted){
        result.textContent = "Deleted."
    }else {
        result.textContent = "Not found."
    }
}
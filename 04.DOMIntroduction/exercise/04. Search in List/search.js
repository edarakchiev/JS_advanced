function search() {
    let search = document.getElementById("searchText").value
    let cities = Array.from(document.querySelectorAll("#towns li"))
    let counter = 0
    cities.forEach(c => {
        if (c.textContent.includes(search)) {
            c.style.fontWeight = 'bold'
            c.style.textDecoration = 'underline'
            counter++
        } else {
            c.style.fontWeight = 'normal'
            c.style.textDecoration = ''
        }
    })
    document.getElementById("result").textContent = `${counter} matches found`

}

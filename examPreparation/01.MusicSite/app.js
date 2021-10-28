window.addEventListener('load', solve);

function solve() {
    const genre = document.getElementById('genre')
    const name = document.getElementById('name')
    const author = document.getElementById('author')
    const date = document.getElementById('date')
    const addBtn = document.getElementById('add-btn')
    const collectionOfSongs = document.querySelector('.all-hits-container')
    let likeCount = Number(document.querySelector('.likes p').textContent.split(':')[1])

    addBtn.addEventListener('click', add)

    function add(e) {
        e.preventDefault()
        let h2Genre = document.createElement('h2')
        let h2Name = document.createElement('h2')
        let h2Author = document.createElement('h2')
        let h3Genre = document.createElement('h3')
        let saveBtn = document.createElement('button')
        saveBtn.className = 'save-btn'
    }

}
window.addEventListener('load', solve);

function solve() {
    let genre = document.getElementById('genre')
    let name = document.getElementById('name')
    let author = document.getElementById('author')
    let date = document.getElementById('date')
    let addBtn = document.getElementById('add-btn')

    addBtn.addEventListener('click', add)

    let collectionSongs = document.querySelector('.all-hits-container')
    let savedSongs = document.querySelector('.saved-container')
    let likes = document.querySelector('.likes').children[0]
    let likesCount = Number(likes.textContent.slice(-1))




    function add(e) {
        e.preventDefault()
        // validate input data
        if (genre.value === "" || name.value === "" || author.value === "" || date.value === "") {
            return
        }
        let divSong = document.createElement('div')
        divSong.innerHTML = `<div class = "hits-info"><img src="./static/img/img.png"><h2>Genre: ${genre.value}</h2><h2>Name: ${name.value}</h2><h2>Author: ${author.value}</h2><h3>Date: ${date.value}</h3><button class="save-btn">Save song</button><button class="like-btn">Like song</button><button class="delete-btn">Delete</button></div>`
        collectionSongs.appendChild(divSong)
        // clear the fields
        genre.value =""
        name.value = ""
        author.value = ""
        date.value = ""

        let buttons = divSong.querySelectorAll('button')
        let saveBtn = buttons[0]
        let likeBtn = buttons[1]
        let deleteBtn = buttons[2]

        saveBtn.addEventListener('click', save)
        likeBtn.addEventListener('click', like)
        deleteBtn.addEventListener('click', deleteSong)

        function save(){
            savedSongs.appendChild(divSong)
            saveBtn.remove()
            likeBtn.remove()
        }
        function like(){
            likesCount += 1
            likes.textContent = `Total Likes: ${likesCount}`
            likeBtn.disabled = true
        }
        function deleteSong(){
            divSong.remove()
        }

    }

}
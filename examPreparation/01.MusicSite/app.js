window.addEventListener('load', solve);

function solve() {
    const genre = document.getElementById('genre')
    const name = document.getElementById('name')
    const author = document.getElementById('author')
    const date = document.getElementById('date')
    const addBtn = document.getElementById('add-btn')
    const collectionOfSongs = document.querySelector('.all-hits-container')
    const savedSongs = document.querySelector('.saved-container')
    let likes = document.querySelector('.likes p')
    let likeCount = Number(document.querySelector('.likes p').textContent.split(':')[1])

    addBtn.addEventListener('click', add)

    function add(e) {
        e.preventDefault()

        if (!genre.value || !name.value || !author.value || !date.value) {
            return
        }

        let hitsInfo = document.createElement('div')
        hitsInfo.className = 'hits-info'
        let img = document.createElement('img')
        img.src = './static/img/img.png'
        let h2Genre = document.createElement('h2')
        h2Genre.textContent = `Genre: ${genre.value}`
        let h2Name = document.createElement('h2')
        h2Name.textContent = `Name: ${name.value}`
        let h2Author = document.createElement('h2')
        h2Author.textContent = `Author: ${author.value}`
        let h3Date = document.createElement('h3')
        h3Date.textContent = `Date: ${date.value}`
        let saveBtn = document.createElement('button')
        saveBtn.className = 'save-btn'
        saveBtn.textContent = 'Save song'
        saveBtn.addEventListener('click', saveSong)
        let likeBtn = document.createElement('button')
        likeBtn.className = 'like-btn'
        likeBtn.textContent = 'Like song'
        likeBtn.addEventListener('click', likeSong)
        let deleteBtn = document.createElement('button')
        deleteBtn.className = 'delete-btn'
        deleteBtn.textContent = 'Delete'
        deleteBtn.addEventListener('click', deleteSong)

        hitsInfo.appendChild(img)
        hitsInfo.appendChild(h2Genre)
        hitsInfo.appendChild(h2Name)
        hitsInfo.appendChild(h2Author)
        hitsInfo.appendChild(h3Date)
        hitsInfo.appendChild(saveBtn)
        hitsInfo.appendChild(likeBtn)
        hitsInfo.appendChild(deleteBtn)
        collectionOfSongs.appendChild(hitsInfo)

        genre.value = ""
        name.value = ""
        author.value = ""
        date.value = ""

        function likeSong() {
            likeCount++
            likes.textContent = `Total Likes: ${likeCount}`
            likeBtn.disabled = true
        }
        function saveSong() {
            savedSongs.appendChild(hitsInfo)
            likeBtn.remove()
            saveBtn.remove()
        }
        function deleteSong() {
            hitsInfo.remove()
        }
    }
}


                               '<h2>Genre:Pop</h2><h2>Name:PondeReplay</h2><h2>Author:Rihanna</h2><h3>Date:26.11.2009</h3><buttonclass="save-btn">Savesong</button><buttonclass="like-btn">Likesong</button><buttonclass="delete-btn">Delete</button>'
'<imgsrc="./static/img/img.png"><h2>Genre:Pop</h2><h2>Name:PondeReplay</h2><h2>Author:Rihanna</h2><h3>Date:26.11.2009</h3><buttonclass="save-btn">Savesong</button><buttonclass="like-btn">Likesong</button><buttonclass="delete-btn">Delete</button>'
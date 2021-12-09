function solve(){
   const root = document.querySelector('main section')
   const archive = document.querySelector('.archive-section ol')

   const authorData = document.getElementById('creator')
   const titleData = document.getElementById('title')
   const categoryData = document.getElementById('category')
   const contentData = document.getElementById('content')

   const createBtn = document.querySelector('form button')
   createBtn.addEventListener('click', onCreate)

   let result = []

   function onCreate(event){
      event.preventDefault()

      const author = authorData.value
      const title = titleData.value
      const category = categoryData.value
      const content = contentData.value

      let articleEl = document.createElement('article')
      
      let h1El = document.createElement('h1')
      h1El.textContent = `${title}`
      articleEl.appendChild(h1El)

      let categoryEl = document.createElement('p')
      categoryEl.textContent = 'Category: '
      let strongCategoryEl = document.createElement('strong')
      strongCategoryEl.textContent = `${category}`
      categoryEl.appendChild(strongCategoryEl)
      articleEl.appendChild(categoryEl)

      let creatorEl = document.createElement('p')
      creatorEl.textContent = 'Creator: '
      let strongCreatorEl = document.createElement('strong')
      strongCreatorEl.textContent = `${author}`
      creatorEl.appendChild(strongCreatorEl)
      articleEl.appendChild(creatorEl)

      let contentEl = document.createElement('p')
      contentEl.textContent = `${content}`
      articleEl.appendChild(contentEl)

      let btnDiv = document.createElement('div')
      btnDiv.className = 'buttons'

      let deleteBtn = document.createElement('button')
      deleteBtn.className = 'btn delete'
      deleteBtn.textContent = 'Delete'
      btnDiv.appendChild(deleteBtn)
      deleteBtn.addEventListener('click', onDelete)


      let archiveBtn = document.createElement('button')
      archiveBtn.className = 'btn archive'
      archiveBtn.textContent = 'Archive'
      btnDiv.appendChild(archiveBtn)
      archiveBtn.addEventListener('click', onArchive)


      articleEl.appendChild(btnDiv)

      root.appendChild(articleEl)

      authorData.value = ''
      titleData.value = ''
      categoryData.value = ''
      contentData.value = ''

      function onArchive(event){
         result.push(title)
         // event.target.parentElement.parentElement.innerHTML = ''
         archive.innerHTML = ''

         // const elementArchive = event.target.parentElement.parentElement
         // elementArchive.parentElement.removeChild(elementArchive)
         onDelete(event)
         result.sort((a,b) => a.localeCompare(b))

         for (let e of result) {
            const liEl = document.createElement('li')
            liEl.textContent = `${e}`
            archive.appendChild(liEl)
         }        
      }

      function onDelete(event){
         const element = event.target.parentElement.parentElement
         element.parentElement.removeChild(element)
      }
   }
  }

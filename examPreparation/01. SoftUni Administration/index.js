function solve() {
    const fields = document.querySelectorAll('form input')
    const moduleInput = document.querySelector('form select')
    const addBtn = document.querySelector('form button')
    addBtn.addEventListener('click', add)
    const modules = document.getElementsByClassName('modules')[0]
    let modulesList = []
    const input = {
        lecture: fields[0],
        date: fields[1]
    }

    function add(e) {
        e.preventDefault()

        const lecture = input.lecture.value
        const date = input.date.value
        const module = moduleInput.value.toUpperCase()

        if (module === "Select module" || lecture === "" || date === ""){
            return
        }
        

        let moduleDiv = document.createElement('div')
        moduleDiv.className = 'module'
        let h3Attr = document.createElement("h3")
        h3Attr.textContent = `${module}-MODULE`


        if (!modulesList.includes(module)){
            modulesList.push(module)
            moduleDiv.appendChild(h3Attr)
        }

        console.log(moduleDiv.querySelectorAll('ul'))

        let ulEl = document.createElement('ul')
        let liEl = document.createElement('li')
        let h4Attr = document.createElement('h4')
        h4Attr.textContent = `${lecture} - ${date}`
        let delBtn = document.createElement('button')
        delBtn.textContent = 'Del'
        delBtn.className = 'red'
        delBtn.addEventListener('click', del)

        liEl.appendChild(h4Attr)
        liEl.appendChild(delBtn)
        ulEl.appendChild(liEl)
        moduleDiv.appendChild(ulEl)

        modules.appendChild(moduleDiv)

        function del() {
            liEl.remove()
            let numEl = moduleDiv.querySelectorAll('ul')
            if (numEl.length === 1) {
                h3Attr.remove()
                modulesList.splice(modulesList.indexOf(module), 1)
            }
        }

    }

};
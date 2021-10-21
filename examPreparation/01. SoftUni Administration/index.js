function solve() {
    const fields = document.querySelectorAll('form input')
    const moduleInput = document.querySelector('form select')
    const addBtn = document.querySelector('form button')
    addBtn.addEventListener('click', add)
    let allModules = document.getElementsByClassName('modules')
    const modules = allModules[0]
    let modulesList = []
    let allCourses = []
    const input = {
        lecture: fields[0],
        date: fields[1]
    }

    function add(e) {
        e.preventDefault()


        let course = {
            module: moduleInput.value.toUpperCase(),
            lecture: input.lecture.value,
            date: input.date.value
        }
        if (course.module === "Select module" || course.lecture === "" || course.date === "") {
            return
        }

        allCourses.push(course)
        let moduleDiv = document.createElement('div')
        moduleDiv.className = 'module'
        let h3Attr = document.createElement("h3")
        h3Attr.textContent = `${course.module}-MODULE`


        if (!modulesList.includes(course.module)) {
            modulesList.push(course.module)
            moduleDiv.appendChild(h3Attr)
        }


        let ulEl = document.createElement('ul')
        let liEl = document.createElement('li')
        let h4Attr = document.createElement('h4')
        h4Attr.textContent = `${course.lecture} - ${course.date}`
        let delBtn = document.createElement('button')
        delBtn.textContent = 'Del'
        delBtn.className = 'red'
        delBtn.addEventListener('click', del)

        liEl.appendChild(h4Attr)
        liEl.appendChild(delBtn)
        ulEl.appendChild(liEl)
        moduleDiv.appendChild(ulEl)

        modules.appendChild(moduleDiv)

        Array.from(ulEl.getElementsByTagName('li')).sort((a ,b) => a.input.date.localeCompare(b.input.date))

        function del() {
            liEl.remove()
            h3Attr.remove()
            allCourses.splice(allCourses.indexOf(course), 1)
            if (allCourses.length === 0) {
                moduleDiv.remove()
                modulesList.splice(modulesList.indexOf(course.module), 1)
            }
        }
    }
};
function solve() {
    let fields = document.querySelectorAll('#container input')
    let petList = document.querySelector('#adoption ul')
    let adoptedPet = document.querySelector('#adopted ul')
    let addBtn = document.querySelector('#container button')
    addBtn.addEventListener('click', addPet)

    const input = {
        name: fields[0],
        age: fields[1],
        kind: fields[2],
        owner: fields[3]
    }

    function addPet(e) {
        e.preventDefault()
        let name = input.name.value
        const age = Number(input.age.value)
        const kind = input.kind.value
        const owner = input.owner.value

        if (name === "" || input.age.value === "" || Number.isNaN(age) || kind === "" || owner === "") {
            return
        }


        let pet = document.createElement('li')
        let p = document.createElement('p')
        p.innerHTML = `<strong>${name}</strong> is a <strong>${age}</strong> year old <strong>${kind}</strong>`
        let spanEl = document.createElement('span')
        spanEl.textContent = `Owner: ${owner}`
        let contactBtn = document.createElement('button')
        contactBtn.textContent = 'Contact with owner'
        contactBtn.addEventListener('click', contact)
        pet.appendChild(p)
        pet.appendChild(spanEl)
        pet.appendChild(contactBtn)
        petList.appendChild(pet)

        Array.from(fields).forEach(f => f.value = "")

        function contact() {
            contactBtn.remove()
            let divEl = document.createElement('div')
            let inputField = document.createElement('input')
            inputField.placeholder = 'Enter your names'
            let yesBtn = document.createElement('button')
            yesBtn.textContent = 'Yes! I take it!'
            yesBtn.addEventListener('click', adopt.bind(null, pet, inputField))
            divEl.appendChild(inputField)
            divEl.appendChild(yesBtn)
            pet.appendChild(divEl)
        }
    }

    function adopt(pet, inputField) {
        pet.querySelector('div').remove()
        let checkBtn = document.createElement('button')
        checkBtn.textContent = 'Checked'
        checkBtn.addEventListener('click', checked.bind(null, pet))
        pet.appendChild(checkBtn)
        pet.querySelector('span').textContent = `New Owner: ${inputField.value}`
        adoptedPet.appendChild(pet)
    }

    function checked(pet) {
        pet.remove()
    }
}
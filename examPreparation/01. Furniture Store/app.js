window.addEventListener('load', solve);

function solve() {
    let modelInput = document.getElementById('model')
    let yearInput = document.getElementById('year')
    let descriptionInput = document.getElementById('description')
    let priceInput = document.getElementById('price')
    let addBtn = document.getElementById('add')
    addBtn.addEventListener('click', addFurniture)
    let table = document.getElementById('furniture-list')
    let totalPrice = document.querySelector('.total-price')
    let fullPrice = 0

    function addFurniture(e) {
        e.preventDefault()


        let model = modelInput.value
        let year = Number(yearInput.value)
        let description = descriptionInput.value
        let price = Number(priceInput.value)

        if (model === "" || description === "" || year < 0 || price < 0) {
            return
        }

        let trInfo = document.createElement('tr')
        trInfo.classList.add('info')
        let tdModel = document.createElement('td')
        tdModel.textContent = `${model}`
        let tdPrice = document.createElement('td')
        tdPrice.textContent = `${Number(price).toFixed(2)}`
        let tdButtons = document.createElement('td')
        let moreBtn = document.createElement('button')
        moreBtn.classList.add('moreBtn')
        moreBtn.textContent = 'More Info'


        let buyBtn = document.createElement("button")
        buyBtn.classList.add('buyBtn')
        buyBtn.textContent = 'Buy it'

        tdButtons.appendChild(moreBtn)
        tdButtons.appendChild(buyBtn)

        trInfo.appendChild(tdModel)
        trInfo.appendChild(tdPrice)
        trInfo.appendChild(tdButtons)

        let trMoreInfo = document.createElement('tr')
        trMoreInfo.classList.add('hide')

        buyBtn.addEventListener('click', buy.bind(null, price, trInfo,trMoreInfo))
        moreBtn.addEventListener('click', reveal.bind(null, moreBtn, trMoreInfo))

        let tdYear = document.createElement('td')
        tdYear.textContent = `Year: ${year}`
        let tdInfo = document.createElement('td')
        tdInfo.colSpan = 3
        tdInfo.textContent = `Description: ${description}`

        trMoreInfo.appendChild(tdYear)
        trMoreInfo.appendChild(tdInfo)

        table.appendChild(trInfo)
        table.appendChild(trMoreInfo)

        modelInput.value = ""
        yearInput.value = ""
        descriptionInput.value = ""
        priceInput.value = ""
    }
    function reveal(moreBtn, trMoreInfo) {
        if (moreBtn.textContent === 'More Info') {
            moreBtn.textContent = 'Less Info'
            trMoreInfo.style.display = 'contents'
        } else {
            moreBtn.textContent = 'More Info'
            trMoreInfo.style.display = 'none'
        }
    }

    function buy(price, trInfo,trMoreInfo) {
        fullPrice += price
        totalPrice.textContent = `${fullPrice.toFixed(2)}`
        trInfo.remove()
        trMoreInfo.remove()
    }
}

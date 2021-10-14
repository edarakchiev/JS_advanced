function solve() {
    const [input, output] = document.getElementsByTagName('textarea')
    const parent = document.getElementById('container')
    parent.addEventListener('click', onGenerate)


    function onGenerate(ev) {
        if (ev.target.tagName === "BUTTON" && ev.target.textContent === "Generate") {
            let furnitureObj = JSON.parse(input.value)

            for (let furniture of furnitureObj) {
                let row = document.createElement('tr')

                let imageTd = document.createElement('td')
                let image = document.createElement('img')
                image.src = furniture.img
                imageTd.appendChild(image)

                let nameTd = document.createElement('td')
                let name = document.createElement('p')
                name.textContent = furniture.name
                nameTd.appendChild(name)

                let priceTd = document.createElement('td')
                let price = document.createElement('p')
                price.textContent = furniture.price
                priceTd.appendChild(price)

                let decorationFactorTd = document.createElement('td')
                let decorationFactor = document.createElement('p')
                decorationFactorTd.appendChild(decorationFactor)
                decorationFactor.textContent = furniture.decFactor

                let markTd = document.createElement('td')
                let mark = document.createElement('input')
                mark.type = 'checkbox'
                markTd.appendChild(mark)

                row.appendChild(imageTd)
                row.appendChild(nameTd)
                row.appendChild(priceTd)
                row.appendChild(decorationFactorTd)
                row.appendChild(markTd)
                document.querySelector("tbody").appendChild(row)
            }
        }
    }
}
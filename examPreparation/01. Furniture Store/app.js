window.addEventListener('load', solve);

function solve() {
    let modelInput = document.getElementById('model')
    let yearInput = document.getElementById('year')
    let descriptionInput = document.getElementById('description')
    let priceInput = document.getElementById('price')
    let addBtn = document.getElementById('add')
    addBtn.addEventListener('click', addFurniture)
    let table = document.getElementById('information')
    let totalPrice = Array.from(document.getElementsByClassName('total-price'))[0]
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

        modelInput.value = ""
        yearInput.value = ""
        descriptionInput.value = ""
        priceInput.value = ""

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
        moreBtn.addEventListener('click', reveal)

        let buyBtn = document.createElement("button")
        buyBtn.classList.add('buyBtn')
        buyBtn.textContent = 'Buy it'
        buyBtn.addEventListener('click', buy)
        tdButtons.appendChild(moreBtn)
        tdButtons.appendChild(buyBtn)

        trInfo.appendChild(tdModel)
        trInfo.appendChild(tdPrice)
        trInfo.appendChild(tdButtons)

        let trMoreInfo = document.createElement('tr')
        trMoreInfo.classList.add('hide')

        let tdYear = document.createElement('td')
        tdYear.textContent = `Year: ${year}`
        let tdInfo = document.createElement('td')
        tdInfo.colSpan = 3
        tdInfo.textContent = `Description: ${description}`

        trMoreInfo.appendChild(tdYear)
        trMoreInfo.appendChild(tdInfo)

        table.appendChild(trInfo)
        table.appendChild(trMoreInfo)

        function reveal(e) {
            if (e.target.textContent === 'More Info') {
                e.target.textContent = 'Less Info'
                trMoreInfo.style.display = 'contents'
            } else {
                e.target.textContent = 'More Info'
                trMoreInfo.style.display = 'none'
            }
        }

        function buy(e) {
            fullPrice += price
            totalPrice.textContent = `${fullPrice.toFixed(2)}`
            trInfo.remove()
            trMoreInfo.remove()
        }

    }
}


// window.addEventListener('load', solve);
//
// function solve() {
//     // selecting  elements
//     const modelInput = document.getElementById("model");
//     const yearInput = document.getElementById("year");
//     const descriptionInput = document.getElementById("description");
//     const priceInput = document.getElementById("price");
//     // selecting add button
//     const buttonAdd = document.getElementById("add");
//     buttonAdd.addEventListener("click", addFurniture);
//     // selecting furniture list from the tableRows
//     const furnitureList = document.getElementById('furniture-list');
//     // total price
//     const totalPrice = document.querySelector('.total-price');
//     // making event on the add button
//
//
//     // add button function
//     function addFurniture(e) {
//         e.preventDefault();
//
//         const yearValue = Number(yearInput.value);
//         const priceValue = Number(priceInput.value);
//         if (modelInput.value != "" && descriptionInput.value != "" && yearValue > 0 && priceValue > 0) {
//             const tr = document.createElement("tr");
//             tr.classList.add("info");
//             tr.innerHTML = `<td>${modelInput.value}</td>
//                             <td>${priceValue.toFixed(2)}</td>
//                             <td><button class="moreBtn">More Info</button>
//                                 <button class="buyBtn">Buy it</button>
//                             </td>`;
//             const hideTr = document.createElement("tr");
//             hideTr.classList.add("hide");
//             hideTr.innerHTML = `<td>Year: ${yearValue}</td><td colspan="3">Description: ${descriptionInput.value}</td>`
//
//             furnitureList.appendChild(tr);
//             furnitureList.appendChild(hideTr);
//
//             const moreInfoButtons = tr.querySelectorAll("button");
//             moreInfoButtons[0].addEventListener("click", showMoreInfo);
//             moreInfoButtons[1].addEventListener("click", buyFurniture);
//
//
//
//         }
//         modelInput.value = '';
//         yearInput.value = ''
//         descriptionInput.value = ''
//         priceInput.value = ''
//
//     }
//
//     function showMoreInfo(e) {
//         const moreInfoTr = e.target.parentElement.parentElement.nextElementSibling;
//         if (e.target.textContent == "More Info") {
//             e.target.textContent = "Less Info";
//             moreInfoTr.style.display = "contents";
//         } else {
//             e.target.textContent = "More Info";
//             moreInfoTr.style.display = "none";
//         }
//     }
//
//     function buyFurniture(e) {
//         const tr = e.target.parentElement.parentElement;
//         const hideTr = tr.nextElementSibling;
//
//         hideTr.parentElement.removeChild(hideTr);
//
//         const price = Number(tr.querySelectorAll("td")[1].textContent);
//         totalPrice.textContent = (Number(totalPrice.textContent) + price).toFixed(2);
//
//         tr.parentElement.removeChild(tr);
//     }
// }
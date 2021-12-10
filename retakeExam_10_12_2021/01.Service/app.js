window.addEventListener('load', solve);

function solve() {
    const typeProductData = document.getElementById('type-product')
    const descriptionData = document.getElementById('description')
    const clientNameData = document.getElementById('client-name')
    const phoneData = document.getElementById('client-phone')

    const submitBtn = document.querySelector('form button')
    submitBtn.addEventListener('click', onSubmit)

    const recivedSec = document.getElementById('received-orders')
    const completedOrders = document.getElementById('completed-orders')

    function onSubmit(event) {
        event.preventDefault()

        const typeProduct = typeProductData.value
        const description = descriptionData.value
        const clientName = clientNameData.value
        const phone = phoneData.value

        if (description == '' || clientName == '' || phone == '') {
            return
        }

        let divElement = document.createElement('div')
        divElement.className = 'container'

        let h2El = document.createElement('h2')
        h2El.textContent = `Product type for repair: ${typeProduct}`

        let h3El = document.createElement('h3')
        h3El.textContent = `Client information: ${clientName}, ${phone}`

        let h4El = document.createElement('h4')
        h4El.textContent = `Description of the problem: ${description}`

        let startBtn = document.createElement('button')
        startBtn.className = 'start-btn'
        startBtn.textContent = 'Start repair'
        startBtn.addEventListener('click', onStart)

        let finishBtn = document.createElement('button')
        finishBtn.className = 'finish-btn'
        finishBtn.disabled = true
        finishBtn.textContent = 'Finish repair'
        finishBtn.addEventListener('click', onFinish)

        divElement.appendChild(h2El)
        divElement.appendChild(h3El)
        divElement.appendChild(h4El)
        divElement.appendChild(startBtn)
        divElement.appendChild(finishBtn)

        recivedSec.appendChild(divElement)


        descriptionData.value = ''
        clientNameData.value = ''
        phoneData.value = ''

        function onStart(e) {
            e.target.disabled = true
            e.target.parentElement.querySelector('.finish-btn').disabled = false
        }
        function onFinish(e) {
            const currentDiv = e.target.parentElement
            currentDiv.remove()
            currentDiv.querySelector('.start-btn').remove()
            currentDiv.querySelector('.finish-btn').remove()
            completedOrders.appendChild(currentDiv)

            let clearBtn = document.querySelector('#completed-orders button')
            clearBtn.addEventListener('click', onClear)

            function onClear() {
                // completedOrders.querySelectorAll('div .container').forEach(el => el.remove())
                let res = [...completedOrders.querySelectorAll('div .container')]
                for (let el of res) {
                    el.remove()
                }
                
            }

        }
    }
}

//  error: Orders were not cleared from the section Completed
// orders: expected 2 to equal 0
function solve() {
    document.getElementsByClassName('shopping-cart')[0].addEventListener('click', onClick)
    let products = []
    let output = document.getElementsByTagName('textarea')[0]
    let checkOut = document.getElementsByClassName("checkout")[0]
    checkOut.addEventListener('click', checkOuts)

    function onClick(ev) {
        if (ev.target.tagName === "BUTTON" && ev.target.className === "add-product") {
            let parent = ev.target.parentElement.parentElement
            let product = parent.querySelector('.product-title').textContent
            let price = Number(parent.querySelector('.product-line-price').textContent)
            products.push({
                product,
                price
            })

            output.value += `Added ${product} for ${price.toFixed(2)} to the cart.\n`
        }
    }
    function checkOuts(){
        let result = new Set()
        products.forEach(p => {
            result.add(p.product)
        })
        let totalPrice=0
        products.forEach(p => {
            totalPrice += p.price
        })
        output.value += `You bought ${[...result.keys()].join(" ")} for ${totalPrice.toFixed(2)}.`
    }

}
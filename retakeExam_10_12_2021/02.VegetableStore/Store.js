class VegetableStore {
    constructor(owner, location) {
        this.owner = owner
        this.location = location
        this.availableProducts = []
        
    }
    loadingVegetables(vegetables) {
        let loadedTypes = []
        for (let el of vegetables) {
            let data = el.split(' ')
            let type = data[0]
            let quantity = Number(data[1])
            let price = Number(data[2])



            let currentProduct = this.availableProducts.find(e => e['type'] == type)

            if (currentProduct == undefined) {
                loadedTypes.push(type)
                this.availableProducts.push(
                    {
                        'type': type,
                        'quantity': 0,
                        'price': price
                    }
                )
            }
            let myElement = this.availableProducts.find(e => e['type'] == type)

            myElement['quantity'] += quantity
            if (price > myElement['price']) {
                myElement['price'] = price
            }
        }
        let result = []
        for (let p of loadedTypes) {
            result.push(p)
        }
        return `Successfully added ${result.join(', ')}`
    }

    buyingVegetables(selectedProducts) {
        let totalPrice = 0
        for (let productData of selectedProducts){
            let product = productData.split(' ')
            let productType = product[0]
            let productQuantity = Number(product[1])

            let cProduct = this.availableProducts.find(e => e['type'] == productType)
            if (cProduct == undefined) {
                throw new Error(`${productType} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`)
            }
            if (cProduct.quantity < productQuantity) {
                throw new Error(`The quantity ${productQuantity} for the vegetable ${productType} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`)
            }
            cProduct.quantity -= productQuantity
            totalPrice += (cProduct.price * productQuantity)
        }
        return `Great choice! You must pay the following amount $${totalPrice.toFixed(2)}.`

    }
    rottingVegetable(type, quantity) {
        let rottingProduct = this.availableProducts.find(e => e['type'] == type)
        if (rottingProduct == undefined) {
            throw new Error(`${type} is not available in the store.`)
        }
        if (rottingProduct.quantity < quantity){
            rottingProduct.quantity = 0
            return `The entire quantity of the ${type} has been removed.`
        }
        rottingProduct.quantity -= quantity
        return `Some quantity of the ${type} has been removed.`
    }

    revision() {
        let resultProducts = []
        this.availableProducts.sort((a, b) => (a.price - b.price))
        for (let e of this.availableProducts) {
            resultProducts.push(`${e.type}-${e.quantity}-$${e.price}`)
        }
        let result = `Available vegetables:\n${resultProducts.join('\n')}\nThe owner of the store is ${this.owner}, and the location is ${this.location}.`
        return result
    }
}

// let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
// console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));

// let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
//  console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
//  console.log(vegStore.buyingVegetables(["Okra 1"]));
//  console.log(vegStore.buyingVegetables(["Beans 8", "Okra 1.5"]));
//  console.log(vegStore.buyingVegetables(["Banana 1", "Beans 2"]));


// let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
// console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
// console.log(vegStore.rottingVegetable("Okra", 1));
// console.log(vegStore.rottingVegetable("Okra", 2.5));
// console.log(vegStore.buyingVegetables(["Beans 8", "Okra 1.5"]));

let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
console.log(vegStore.rottingVegetable("Okra", 1));
console.log(vegStore.rottingVegetable("Okra", 2.5));
console.log(vegStore.buyingVegetables(["Beans 8", "Celery 1.5"]));
console.log(vegStore.revision());


                 

Unexpected error: 
expected 'Available vegetables:\nCelery-4.5-$2.5\nBeans-2-$2.8\nOkra-0-$3.5\nThe owner of the store is Jerrie Munro, and the location is 1463 Pette Kyosheta, Sofia.}'
to equal 'Available vegetables:\nCelery-4.5-$2.5\nBeans-2-$2.8\nOkra-0-$3.5\nThe owner of the store is Jerrie Munro, and the location is 1463 Pette Kyosheta, Sofia.'
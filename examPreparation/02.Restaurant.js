class Restaurant {
    constructor(budgetMoney) {
        this.budgetMoney = Number(budgetMoney)
        this.menu = {}
        this.stockProducts = {}
        this.history = []
    }

    loadProducts(prodArray) {
        for (let product of prodArray) {
            let inputData = product.split(" ")
            let prodName = inputData[0]
            let prodQuantity = Number(inputData[1])
            let prodTotalPrice = Number(inputData[2])

            if (prodTotalPrice > this.budgetMoney) {
                this.history.push(`There was not enough money to load ${prodQuantity} ${prodName}`)
                continue
            }
            if (this.stockProducts[prodName] === undefined) {
                this.stockProducts[prodName] = {
                    'quantity': 0,
                    'totalPrice': prodTotalPrice
                }
            }
            this.budgetMoney -= prodTotalPrice
            this.stockProducts[prodName]['quantity'] += prodQuantity
            this.history.push(`Successfully loaded ${prodQuantity} ${prodName}`)
        }
        return this.history.join("\n")
    }

    addToMenu(meal, neededProdArr, price) {
        if (this.menu[meal] === undefined) {
            this.menu[meal] = {
                'products': [],
                'price': price
            }
            for (let productData of neededProdArr) {
                let data = productData.split(' ')
                let name = data[0]
                let quantity = Number(data[1])
                this.menu[meal]['products'].push({
                    'name': name,
                    'quantity': quantity
                })
            }
            let menuLength = Object.keys(this.menu).length
            if (menuLength === 1) {
                return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`
            } else {
                return `Great idea! Now with the ${meal} we have ${menuLength} meals in the menu, other ideas?`
            }
        } else {
            return `The ${meal} is already in the our menu, try something different.`
        }
    }

    showTheMenu() {
        let result = []
        if (Object.keys(this.menu).length === 0) {
            return "Our menu is not ready yet, please come later..."
        } else {
            for (let key in this.menu) {
                result.push(`${key} - $ ${this.menu[key]['price']}`)
            }
        }
        return result.join("\n")
    }

    makeTheOrder(meal) {
        if (this.menu[meal] === undefined) {
            return `There is not ${meal} yet in our menu, do you want to order something else?`
        }
        for (let i = 0; i < this.menu[meal]['products'].length; i++) {
            let currentProduct = this.menu[meal]['products'][i]['name']
            let currentQuantity = this.menu[meal]['products'][i]['quantity']

            if (this.stockProducts[currentProduct] === undefined || this.stockProducts[currentProduct]['quantity'] < currentQuantity) {
                return `For the time being, we cannot complete your order (${meal}), we are very sorry...`
            } else {
                this.stockProducts[currentProduct]['quantity'] -= currentQuantity
            }
        }
        this.budgetMoney += this.menu[meal]['price']
        return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal]['price']}.`

    }
}

let kitchen = new Restaurant(1000);
console.log(kitchen.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']));
console.log("===========================================")
// let kitchen = new Restaurant(1000);
console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));
console.log('===========================================')
// let kitchen = new Restaurant(1000);
console.log(kitchen.showTheMenu());
console.log('===========================================')
kitchen.loadProducts(['Yogurt 30 3', 'Honey 50 4', 'Strawberries 20 10', 'Banana 5 1']);
kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99);
console.log(kitchen.makeTheOrder('frozenYogurt'));
console.log('===========================================')

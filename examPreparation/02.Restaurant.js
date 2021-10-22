class Restaurant {
    constructor(budgetMoney) {
        this.budgetMoney = budgetMoney
        this.menu = {}
        this.stockProduct = {}
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
            if (this.stockProduct[prodName] === undefined){
                this.stockProduct[prodName] = {}
                this.stockProduct[prodName] = {'quantity': prodQuantity,
                    'totalPrice': prodTotalPrice
                }
                this.budgetMoney -= prodTotalPrice
            } else {
                this.stockProduct[prodName]['quantity'] += prodQuantity
            }
            this.history.push(`Successfully loaded ${prodQuantity} ${prodName}`)
        }
        return this.history.join("\n")
    }

    addToMenu(meal, neededProdArr, price) {

    }

    showTheMenu() {

    }

    makeTheOrder(meal) {

    }
}

let kitchen = new Restaurant(1000);
console.log(kitchen.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']));
console.log("===========================================")
// let kitchen = new Restaurant(1000);
// console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
// console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));
// console.log('===========================================')
// let kitchen = new Restaurant(1000);
// console.log(kitchen.showTheMenu());
// console.log('===========================================')
// console.log('===========================================')
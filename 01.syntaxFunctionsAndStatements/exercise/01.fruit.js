function calculateFruit(fruit, weightGr, price) {
    let weightKg = weightGr / 1000
    let money = weightKg * price
    console.log(`I need $${money.toFixed(2)} to buy ${weightKg.toFixed(2)} kilograms ${fruit}.`)
}

// calculateFruit('orange', 2500, 1.80)
// calculateFruit('apple', 1563, 2.35)
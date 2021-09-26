function calories(list) {
    const caloriesObject ={}
    for (let i=0; i < list.length; i+=2){
        let name = list[i]
        let calories = Number(list[i+1])
        caloriesObject[name] = calories
    }
    console.log(caloriesObject)
}

calories(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])
calories(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42'])
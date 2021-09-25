function cityPopulation(array) {
    let city = {}
    for (let el of array) {
        let data= el.split(" <-> ")
        let name = data[0]
        let population = Number(data[1])
        if (city[name] === undefined){
            city[name] = population
        }else
            city[name] += population
    }
    for (let el in city) {
        console.log(`${el} : ${city[el]}`)
    }
}

// cityPopulation(['Sofia <-> 1200000',
//     'Montana <-> 20000',
//     'New York <-> 10000000',
//     'Washington <-> 2345000',
//     'Las Vegas <-> 1000000']
// )
cityPopulation(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']
)
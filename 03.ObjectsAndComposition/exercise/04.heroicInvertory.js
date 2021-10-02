function inventory(list) {
    let heroes = {}
    for (let h of list) {
        [heroName, heroLevel, heroItems] = h.split("/")
        heroes = {"name" : heroName,
       "level" : heroLevel,
        "items" : heroItems}
    }
    console.log(heroes)
}

inventory(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']
)

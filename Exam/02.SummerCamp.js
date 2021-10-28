class SummerCamp {
    constructor(organizer, location) {
        this.organizer = organizer
        this.location = location
        this.priceForTheCamp = {
            'child': 150,
            'student': 300,
            'collegian': 500
        }
        this.listOfParticipants = []
    }

    registerParticipant(name, condition, money) {
        if (this.priceForTheCamp[condition] === undefined) {
            throw new Error("Unsuccessful registration at the camp.")
        }
        for (let objParticipant of this.listOfParticipants) {
            if (objParticipant.name === name) {
                return `The ${name} is already registered at the camp.`
            }
        }
        if (this.priceForTheCamp[condition] > Number(money)) {
            return 'The money is not enough to pay the stay at the camp.'
        }
        this.listOfParticipants.push({
            'name': name,
            'condition': condition,
            'power': 100,
            'wins': 0
        })
        return `The ${name} was successfully registered.`
    }

    unregisterParticipant(name) {
        for (let objParticipant of this.listOfParticipants) {
            if (objParticipant.name === name) {
                return `The ${name} removed successfully.`
            }
        }
        throw Error(`The ${name} is not registered in the camp.`)
    }

    timeToPlay(typeOfGame, participant1, participant2) {
        let p1 = false
        let p2 = false
        let name1
        let name2
        let currentCondition1
        let currentCondition2
        let currentPower1
        let currentPower2
        let currentWins1
        let currentWins2


        for (let objParticipant of this.listOfParticipants) {
            if (objParticipant.name === participant1) {
                p1 = true
            } else if (objParticipant.name === participant2) {
                p2 = true
            }
        }


        if (typeOfGame === 'WaterBalloonFights') {
            if (!p1 && !p2) {
                throw new Error(`Invalid entered name/s.`)
            }

            for (let objParticipant of this.listOfParticipants) {
                if (objParticipant.name === participant1) {
                    name1 = objParticipant.name
                    currentCondition1 = objParticipant.condition
                    currentPower1 = objParticipant.power
                    currentWins1 = objParticipant.wins
                } else if (objParticipant.name === participant2) {
                    name2 = objParticipant.name
                    currentCondition2 = objParticipant.condition
                    currentPower2 = objParticipant.power
                    currentWins2 = objParticipant.wins
                }
            }
            if (currentCondition1 !== currentCondition2) {
                throw Error('Choose players with equal condition.')
            }
            if (currentPower1 > currentPower2) {
                currentWins1 += 1
                return `The ${name1} is winner in the game ${typeOfGame}.`
            } else if (currentPower1 < currentPower2) {
                currentWins2 += 1
                return `The ${name2} is winner in the game ${typeOfGame}.`
            } else {
                return "There is no winner."
            }

        } else if (typeOfGame === 'Battleship') {
            if (!p1) {
                throw new Error(`Invalid entered name/s.`)
            }
            for (let objParticipant of this.listOfParticipants) {
                if (objParticipant.name === participant1) {
                    objParticipant.power += 20
                    objParticipant.wins += 1
                    return `The ${objParticipant.name} successfully completed the game ${typeOfGame}.`
                }
            }
        }
    }
    toString(){
        let result = [`${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`]
        for (let p of this.listOfParticipants.sort((a, b) => b.wins - a.wins)){
            result.push(`${p.name} - ${p.condition} - ${p.power} - ${p.wins}`)
        }
        return result.join("\n")
    }
}

// const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 200));
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.registerParticipant("Leila Wolfe", "childd", 200));


// const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.unregisterParticipant("Petar"));
// console.log(summerCamp.unregisterParticipant("Petar Petarson"));


// const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
// console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
// console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
// console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
// console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));


const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));

console.log(summerCamp.toString());



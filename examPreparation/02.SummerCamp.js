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
            throw new Error('Unsuccessful registration at the camp.')
        }
        if (money < this.priceForTheCamp[condition]) {
            return `The money is not enough to pay the stay at the camp.`
        }
        let isActive = false
        for (let el of this.listOfParticipants) {
            if (el.name === name) {
                isActive = true
            }
        }
        if (isActive) {
            return `The ${name} is already registered at the camp.`
        }

        this.listOfParticipants.push({
            'name': name,
            'condition': condition,
            'power': 100,
            'wins': 0
        })
        return `The ${name} was successfully registered.`
    }
    unregisterParticipant (name) {
        let isActive = false
        for (let el of this.listOfParticipants) {
            if (el.name === name) {
                isActive = true
                const index = this.listOfParticipants.indexOf(el)
                this.listOfParticipants.splice(index, 1)
            }
        }
        if (isActive) {
            return `The ${name} removed successfully.`
        } else {
            throw new Error (`The ${name} is not registered in the camp.`)
        }
    }
    timeToPlay (typeOfGame, participant1, participant2){
        let isActive1 = false
        let isActive2 = false
        let condition1
        let condition2
        let power1
        let power2
        for (let el of this.listOfParticipants) {
            if (el.name === participant1) {
                isActive1 = true
                condition1 = el.condition
                power1 = el.power
            }
            if (el.name === participant2){
                isActive2 = true
                condition2 = el.condition
                power2 = el.power
            }
        }

        if (typeOfGame === 'WaterBalloonFights'){
            if (!isActive1 || !isActive2) {
                throw new Error('Invalid entered name/s.')
            }
            if (condition1 !== condition2){
                throw new Error('Choose players with equal condition.')
            }


        } else if (typeOfGame === 'Battleship'){
            if (!isActive1){
                throw new Error('Invalid entered name.')
            }

            for (let el of this.listOfParticipants) {
                if (el.name === name) {
                    el.power1 += 20
                }
            }
            return `The ${participant1} successfully completed the game ${typeOfGame}.`

        }
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


const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
// console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));

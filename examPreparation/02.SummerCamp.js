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
            if (el.name !== undefined) {
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
        
    }

}


// const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 200));
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.registerParticipant("Leila Wolfe", "childd", 200));

const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.unregisterParticipant("Petar"));
console.log(summerCamp.unregisterParticipant("Petar Petarson"));

function playingCards(face, suit) {
    let suits = {
        "S": "\u2660",
        "H": "\u2665",
        "D": "\u2666 ",
        "C": "\u2663 ",
    }
    let faces = ['2', '3', '4,', '5', '6,', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']

    if (Object.keys(suits).includes(suit) === false || faces.includes(face) === false){
        throw Error("Error")
    }

        return {
            face: face,
            suite: suits[suit],
            toString() {
                return this.face + this.suite
            }
        }

}

card1 = playingCards('A', 'S')
console.log(card1.toString())

card2=playingCards('7', 'S')
console.log(card2.toString())

card3= playingCards('10', 'H')
console.log(card3.toString())

card4= playingCards('1', 'c')
console.log(card4.toString())


function deck(array) {
    function playCards(face, suit) {
        let suits = {
            "S": "\u2660",
            "H": "\u2665",
            "D": "\u2666 ",
            "C": "\u2663 ",
        }
        let faces = ['2', '3', '4,', '5', '6,', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']

        if (Object.keys(suits).includes(suit) === false || faces.includes(face) === false) {
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
    let result = []
    for (let c of array) {
        let face = c.slice(0, -1)
        let suite = c.slice(-1)
        try {
            result.push(playCards(face, suite).toString())
        } catch {
            console.log(`Invalid card: ${face}${suite}`)
            return

        }
    }
    console.log(result.join(" "))
}



deck(['AS', '10D', 'KH', '2C'])
deck(['5S', '3D', 'QD', '1C'])
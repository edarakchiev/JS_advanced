function ticket(array, sortedCr) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination
            this.price = price
            this.status = status
        }
    }

    let result = []
    for (let ticketDescription of array) {
        let splitetdDescription = ticketDescription.split("|")
        let destination = splitetdDescription[0]
        let price = Number(splitetdDescription[1])
        let status = splitetdDescription[2]


        result.push(new Ticket(destination, price, status))
    }
    if (sortedCr === "destination") {
        result = result.sort(function (a, b){
            if (a.destination < b.destination){
                return -1
            }
            if (a.destination > b.destination){
                return 1
            }
            return 0
        })
    } else if (sortedCr === "price"){
        result = result.sort((a, b) => a.price - b.price)
    } else if (sortedCr === "status"){
        result = result.sort(function (a, b){
            if (a.status < b.status){
                return -1
            }
            if (a.status > b.status){
                return 1
            }
            return 0
        })
    }
return result
}

console.log(ticket(['Philadelphia|94.20|available', 'New York City|95.99|available', 'New York City|95.99|sold', 'Boston|126.20|departed'], 'destination'))
console.log(ticket(['Philadelphia|94.20|available', 'New York City|95.99|available', 'New York City|95.99|sold', 'Boston|126.20|departed'], 'status'))


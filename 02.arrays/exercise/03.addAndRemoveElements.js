function operation(commands) {
    let result = []
    let counter = 0
    for (let command of commands) {
        counter += 1
        if (command === "add") {
            result.push(counter)
        }
        else if (command === "remove"){
            result.pop()
        }
    }
    if (result === undefined || result.length == 0){
        console.log("Empty")
    }
    else {
        console.log(result.join("\n"))
    }
}

operation(['add', 'add', 'add', 'add'])
operation(['add', 'add', 'remove', 'add', 'add'])
operation(['remove', 'remove', 'remove'])
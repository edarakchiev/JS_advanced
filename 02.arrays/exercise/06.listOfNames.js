function arrange(names) {
    names.sort()
    for (let i = 0; i < names.length; i++) {
        console.log(`${i+1}.${names[i]}`)
    }
}

arrange(["John", "Bob", "Christina", "Ema"])
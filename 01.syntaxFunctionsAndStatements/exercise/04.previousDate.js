function previousDate(year, month, day) {
    let dateString = year + "-" + month + "-" + day
    let eventDate = new Date(dateString)
    eventDate.setDate(day - 1)
    console.log(`${eventDate.getFullYear()}-${eventDate.getMonth()+1}-${eventDate.getDate()}`)
}

previousDate(2021, 9, 20)
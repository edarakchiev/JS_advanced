function editElement(element, match, replacer) {
    let text = element.textContent
    let matcher = new RegExp(match, 'g')
    element.textContent = text.replace(matcher, replacer)
}
function encodeAndDecodeMessages() {
    document.getElementById('main').addEventListener("click", encode)
    document.getElementById('main').addEventListener("click", decode)


    function getParent(event) {
        return event.target.parentElement
    }

    function encode(ev) {
        if (ev.target.tagName === 'BUTTON' && ev.target.textContent.includes('Encode')) {
            let parent = getParent(ev)
            let text = parent.querySelector('textarea')
            let decodeText = parent.parentElement.children[1].querySelector('textarea')
            let result = ''

            for (let i = 0; i < text.value.length; i++) {
                result += String.fromCharCode(Number(text.value.charCodeAt(i) + 1))
            }
            decodeText.textContent = result
            text.value = ''

        }

    }

    function decode(ev) {
        if (ev.target.tagName === 'BUTTON' && ev.target.textContent.includes('Decode')) {
            let parent = getParent(ev)
            let text = parent.querySelector('textarea')
            let result = ''

            for (let i = 0; i < text.value.length; i++) {
                result += String.fromCharCode(Number(text.value.charCodeAt(i) - 1))
            }
            text.textContent = result
        }
    }
}
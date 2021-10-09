function lockedProfile() {
    const parent = document.getElementById('main')
    parent.addEventListener('click', onClick)

    function onClick(ev) {
        let profile = ev.target.parentElement
        let isActive = profile.querySelector('input[type="radio"][value="unlock"]').checked
        console.log(isActive)
        if (ev.target.tagName === 'BUTTON' && isActive) {
            let  hiddenField = Array.from(profile.querySelectorAll('div'))
                .find(d => d.id.includes("HiddenFields"))
            if (ev.target.textContent === 'Show more'){
                ev.target.textContent = 'Hide it'
                hiddenField.style.display = 'block'
            } else {
                ev.target.textContent = 'Show more'
                hiddenField.style.display = ''
            }
        }
    }
}
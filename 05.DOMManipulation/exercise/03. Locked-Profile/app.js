function lockedProfile() {
    const parent = document.getElementById('main')
    parent.addEventListener('click', onClick)

    function onClick(ev) {
        let isActive = ev.target.parentElement.querySelector('input[type="radio"][value="unlock"]').checked
        if (ev.target.tagName === 'BUTTON' && isActive) {

            let dataDiv = Array.from(ev.target.parentElement.querySelectorAll('div')).find(d => d.id.includes('HiddenFields'))
            if (ev.target.textContent === "Show more"){
                ev.target.textContent = "Hide it"
                dataDiv.style.display = 'block'
            } else {
                ev.target.textContent = "Show more"
                dataDiv.style.display = ''
            }
        }
    }
}
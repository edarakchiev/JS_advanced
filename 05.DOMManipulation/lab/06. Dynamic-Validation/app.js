function validate() {
    let email = document.getElementById('email')
    email.addEventListener('change', checker)


    function checker(ev) {
        const pattern = /^[a-z]+@[a-z]+\.[a-z]+$/
        if (pattern.test(ev.target.value)){
            ev.target.classList.remove('error')
        } else {
            ev.target.classList.add('error')
        }
    }
}
function create(words) {
   const parent = document.getElementById('content')
   parent.addEventListener('click', onClick)
   for (let word of words){
      let divElement = document.createElement('div')
      let para = document.createElement('p')
      para.textContent = word
      para.style.display = 'none'
      divElement.appendChild(para)
      parent.appendChild(divElement)
   }
   function onClick(ev) {
      ev.target.querySelector('P').style.display = ''
   }
}
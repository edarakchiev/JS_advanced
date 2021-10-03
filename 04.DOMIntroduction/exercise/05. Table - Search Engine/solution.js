function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let search = document.getElementById("searchField").value.toLowerCase()
      let rows = Array.from(document.querySelectorAll("tbody tr"))
      rows.forEach(el => {
         if (el.textContent.toLowerCase().includes(search)){
            el.classList.add("select")
         } else {
            el.classList.remove("select")
         }
      })
      document.getElementById("searchField").value = ""
   }
}
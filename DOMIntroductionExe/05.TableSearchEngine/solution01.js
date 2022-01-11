// function solve() {
//    document.querySelector('#searchBtn').addEventListener('click', onClick);

//    const rows = document.querySelectorAll('tbody tr')
   
//    function onClick() {
      
//       const input = document.querySelector('#searchField').value.toLocaleLowerCase();
//      for(let row of rows) {
//         if(row.textContent.toLocaleLowerCase().includes(input)) {
//            row.setAttribute('class','select');
//         } else {
//            row.removeAttribute('class');
//         }
//      }

//    }
// }

function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   const body = document.querySelector('tbody');
  
   
   function onClick() {
      
      const input = document.querySelector('#searchField').value.toLocaleLowerCase();
     body.innerHtml = Array.from(body.children).map(function selectRow(row) {
        if(row.textContent.includes(input)) {
           row.classList.add('select');
        } else {
           row.removeAttribute('class');
        }
        return row;
     })

   }
}
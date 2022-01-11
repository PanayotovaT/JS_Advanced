function generateReport() {

  const textarea = document.getElementById('output');
  const tableRows = Array.from(document.querySelectorAll('table tr'));
  let thCheckbox = document.querySelectorAll('thead th');

  let thArray = Array.from(thCheckbox);

  let array = [];
  let checked = 0;
  for (let i = 1; i < tableRows.length; i++) {
   let row  = Array.from(tableRows[i].children);
   let rowObj = {}
   
   for(let j = 0; j < row.length; j++) {
    let cellContent = row[j].textContent;
    
    if(thArray[j].children[0].checked) {
      checked++;
      let heading = thArray[j].textContent.trim();
      rowObj[heading] = cellContent ;
     
    }

   }
   array.push(rowObj)
  
 }
 if(checked == 0) {
   return;
 } else {
   textarea.value = JSON.stringify(array,null, '\t');

 }

}
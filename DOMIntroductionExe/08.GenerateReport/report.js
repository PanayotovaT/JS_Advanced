function generateReport() {
    let checkboxes = document.querySelectorAll('table>thead>tr>th>input');
    let rows = document.querySelectorAll('tbody>tr');
    const textarea = document.getElementById('output');
    let result = [];

    for(let i = 0; i < rows.length; i++) {
        let obj = {};
        let values = 
        Array.from(rows[i].getElementsByTagName('td')).map((el) => {return el.textContent});
        for(let j = 0; j < checkboxes.length; j++) {
           
            if(checkboxes[j].checked) {
                obj[checkboxes[j].name] = values[j];
            }
        }
       result.push(obj);
    }

    textarea.value = JSON.stringify(result, null, 2)


    // console.log(checkboxes);
    // console.log(rows);
}
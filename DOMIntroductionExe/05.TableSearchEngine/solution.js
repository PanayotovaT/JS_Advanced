function solve() {
    const rows = document.querySelectorAll('.container tbody tr');

    document.getElementById('searchBtn').addEventListener('click', onClick);

    function onClick() {
        const input = document.getElementById('searchField').value.toLocaleLowerCase();
    for(let row of rows) {
        if(row.textContent.toLocaleLowerCase().includes(input)) {
            row.classList.add('select');
        } else {
            row.removeAttribute('class')
        }
    }
        
      

    }
    // rows.map((x) => {
    //     let row  = x.textContent
    //     .split('\n').map(y => {
    //         y = y.trim();
    //        return y;
    //     })
    //     .filter(x => x !== '');
        
    //     if(row.contains(search.value)) {
    //         x.setAttribute('class', 'select');
    //     } else{
    //         x.removeAttribute('class')
    //     } 
    // })
}
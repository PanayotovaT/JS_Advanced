function search() {
    let arr = [...document.querySelectorAll('li')]
    
    const search = document.getElementById('searchText');
    const result = document.getElementById('result');

    let matches = 0;
    arr.forEach((x) => {
        if(x.textContent.toLowerCase().includes(search.value.toLowerCase())) {
            matches++;
            x.style.fontWeight ='bold';
            x.style.textDecoration = 'underline';
        } else {
            x.style.fontWeight = 'none';
            x.style.textDecoration = 'none';

        }
    });
    result.textContent = `${matches} matches found`
}
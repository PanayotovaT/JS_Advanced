function search() {
  let listItems = document.querySelectorAll('#towns>li');
  // > oznachava vsichki elementi, koito sa neposredstveno vytre;
  let input = document.querySelector('#searchText').value;
  let result  = document.getElementById('result');

  let sum = 0;
  for(const li of listItems) {
     if(li.textContent.toLocaleLowerCase().includes(input.toLocaleLowerCase())) {
        li.style.fontWeight = 'bold';
        li.style.textDecoration = 'underline';
        sum++;
     } else {
      li.style.fontWeight = '';
      li.style.textDecoration = '';
     }
  }
  result.textContent = `${sum} matches found`;
 
}

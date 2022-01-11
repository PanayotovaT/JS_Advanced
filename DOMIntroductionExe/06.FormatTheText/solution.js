function solve() {
  const textarea = document.getElementsByTagName('textarea')[0].value

  const output = document.getElementById('output');
  let arr = textarea.split('.').filter(x => x !== '');
  console.log(arr);
  let index = 0;

  let result = []
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i] +'.');
 
    index++;
    if (index === 3) {
      let p = document.createElement('p');
      p.textContent = result.join('');
      output.appendChild(p);
      index = 0;
      result = [];
    } else if (i === arr.length - 1) {
      let p = document.createElement('p');
      p.textContent = result.join('');
      output.appendChild(p);
    }
  }

}
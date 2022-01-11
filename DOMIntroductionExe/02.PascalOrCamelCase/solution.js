function solve() {
    const text = document.getElementById('text').value;
    const convention = document.getElementById('naming-convention').value;
    const span = document.getElementById('result');

    let result = '';
    if(convention == 'Camel Case') {

        result = text.toLowerCase().split(' ');
        const first = result.shift();
        result = result.map(word => {
            let firstL = word[0].toUpperCase();
            let rest = word.slice(1);
            return firstL + rest;
        });
        result.unshift(first);
        result = result.join('');

    } else if (convention == 'Pascal Case') {
      
        result = text.toLowerCase().split(' ').map((word) =>{ let firstL = word[0].toUpperCase();
        let rest = word.slice(1);
        return firstL +rest;
        }).join('');
        
    } else {
        result = 'Error!'
    }
    span.textContent = result;
  }
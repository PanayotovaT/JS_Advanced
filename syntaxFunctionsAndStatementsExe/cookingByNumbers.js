function solve(num, c1, c2, c3, c4, c5) {
    num = Number(num);
    let array = [c1, c2, c3, c4, c5];

    for (let command of array) {
        switch (command) {
            case 'chop':
                num /= 2;
               
                break;
            case 'dice':
                num = Math.sqrt(num);
              
                break;
            case 'spice':
                num++;
            
                break;
            case 'bake':
                num *= 3;
            
                break;
            case 'fillet':
                num = 0.80 * num;
            
                break;
        }
        console.log(num);
    }

}
solve('32', 'chop', 'chop', 'chop', 'chop', 'chop');
solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet');
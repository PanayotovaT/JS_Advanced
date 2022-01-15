function solve(arr, type) {

    let obj = {

        'asc': (a, b) => a - b,
        'desc': (a, b) => b - a
    }
   return arr.sort(obj[type]);
}

console.log(solve([14, 7, 17, 6, 8], 'desc'));
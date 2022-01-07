let myArr = [7, 15, 3, 42, 7, 18];
let moreNumbers = [11, 3, 44, 27, 15, 83];

let sum = myArr.reduce(reducer, 0);
console.log(sum);
console.log(moreNumbers.reduce(reducer, 0));

let average = myArr.reduce((acc, c, i, arr) => acc + c / arr.length, 0);
console.log(average);
console.log(sum / myArr.length);

function reducer(acc, c) {
    return acc + c;
}

// console.log(moreNumbers.reduce((acc, c) => Math.max(acc, c)));
console.log(moreNumbers.reduce((acc, c) => acc > c ? acc : c));
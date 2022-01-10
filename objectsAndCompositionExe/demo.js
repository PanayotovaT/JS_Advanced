let arr = [1, 2, 3, 4, 5];
let arr2 = ['a', 'b', 'c'];

console.log(arr.concat(arr2));
let result = [...arr, ...arr2];
console.log(result);

const obj = [{a: 2}, {a: 5}];
// const [a] = obj;
// console.log(a);
const [,{a}] = obj;
console.log(a);

const [,,x] = arr;
console.log(x);


let myArr = [10, 20, 30, 40, 50, 60];

myArr.splice(1,1);
console.log(myArr);
let result = myArr.splice(1,3);
console.log(myArr);
console.log(result);
myArr.splice(1, 0, 16, 66, 77);
console.log(myArr);

let newArr = [1, 2, 3, 4];
newArr.fill(0, 2, 5);
console.log(newArr);
newArr.fill(3, 0, 2);
console.log(newArr);
newArr.fill(5);
console.log(newArr);

let numArray = [3, 17,5, 0, 53, -8, 15,2, 80, 33];
console.log(numArray);
numArray.sort()
console.log(numArray);
numArray.sort(compareNumbers);
console.log(numArray);
numArray.sort((a,b) => a - b);
console.log(numArray);



function compareNumbers(a, b) {
    return b - a;
}

let string = ['Sofia', 'Alexander', 'Teodora', 'Filip', 'Ivelina', 'snejana'];
string.sort();
console.log(string);
string.sort((a, b) => a.localeCompare(b));
console.log(string);;
string.sort(((a,b) => b.localeCompare(a)));
console.log(string);

let stringToSlice = [5, 16, 76,3, 44, 76, 66, 45, 19, 8, 33];
let str = stringToSlice.slice();
console.log(str);
str = stringToSlice.slice( 0, 3);
console.log(str);
console.log(stringToSlice);
str = stringToSlice.slice(-2);
console.log(str);
str = stringToSlice.slice(-2, 2);
console.log(str);
str = stringToSlice.slice(2, -2);
console.log(str);

let myArray = [1, 7, 12, 33, 44];
console.log(myArray.includes(1));
console.log(myArray.includes(1, 2)); // ot koi index zapochvame da tyrsim
console.log(myArray.indexOf(12));
console.log(myArray.indexOf(50));
myArray.forEach((x, i)=> console.log(`index ${i} --> value ${x}`));

console.log(myArray.some(x => x == 7));
console.log(myArray.some(x => x == 13));//podavame vinagi funkziq
console.log(myArray.find(x => x > 7));
console.log(string.find(x => x[0] == 'T'));
console.log(myArray.filter(x => x > 7));
console.log(string.filter(y => y[0] == 'S'));
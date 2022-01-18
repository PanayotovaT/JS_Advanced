const myMap = new Map();
console.log(myMap);

myMap.set('John', '+1-456-768-888');
myMap.set('Ivan', '+1-234-675-768');

console.log(myMap);
console.log(myMap.get('John'));
myMap.set('John', '+359-886-767-897');
console.log(myMap);

//entry e iterator, ne e masiv;
for(let entry of myMap) {
    console.log(entry);
};
myMap.forEach(x => console.log(x));

console.log(Array.from(myMap));
for(let key of myMap.keys()) {
    console.log( key);
}
for(let value of myMap.values()) {
    console.log(value);
}
console.log(myMap.has('Ivan'));
// myMap.delete('Ivan')
// console.log(myMap.keys());
console.log([...myMap.keys()]);

let keys = myMap.keys();

for(let key of keys) {
    console.log(key);
}

for(let key of keys) {
    console.log('Second key: ', key);
}
//let keys - se konsumira i moje da se polza samo vednuj;
for(let[key, value] of myMap) {
    console.log(`Key: ${key} value: ${value}`);
}

myMap.forEach((x, y)=> console.log(x, y))
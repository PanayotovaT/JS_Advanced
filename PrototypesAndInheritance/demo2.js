// 'use strict'
let myObject = {};
let name = 'George'

Object.defineProperty(myObject, '_name', {value: 'Jo', enumerable: false, writable: true})
Object.defineProperty(myObject, 'name', {
    get() {
        return name;
    },
    set(value) {
        name = value;
    },
    enumerable: true
});
console.log(`Before: ${myObject.name}`);
myObject.name = 'Peter';
console.log(`After: ${myObject.name}`);
console.log(myObject);
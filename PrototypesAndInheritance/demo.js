'use strict';
// const object = {
//     name: 'Ivan',
//     age: 3
// };

// console.log(Object.getOwnPropertyDescriptor(object, 'name'));
// Object.defineProperty(object, 'lastName', {
//     value: 'Jackson', writable: true, enumerable: false, configurable: true
// }) 

// //enumerable ako e false ne se vijda vuv for in i object.keys
// console.log(object.lastName);
// for(let key in object) {
//     console.log(key, object[key])
// }

const myCollection = {};

Object.defineProperty(myCollection, 'size', {
    enumerable: false,
    get: function() {
        return Object.keys(this).length;
    }
});

myCollection['John'] = '+1-342-475-739';
myCollection['Ivan'] = '+1-768-334-465';
myCollection['Joey'] = '+1-728-433-463';

// console.log(myCollection.size);
Object.seal(myCollection);
// myCollection['John'] = '+1-342-475-657';

console.log((Object.getOwnPropertyDescriptor(myCollection, 'John')))

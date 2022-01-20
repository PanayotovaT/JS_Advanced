// 'use strict';
let myObj = {};

Object.defineProperty(myObj, 'name',{
    value: 'Ivan',
    writable: true,
    enumerable: true,
    configurable:false
});
console.log(myObj);
delete myObj.name;
console.log(myObj);

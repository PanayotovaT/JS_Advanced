function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}

Person.prototype.write = function(message) {
    console.log(`${this.firstName} wrote ${message}`);
}
const myPerson = new Person('John', 'Abbot');
const otherPerson = new Person('Mary', 'Jane');

myPerson.write('Hi');
otherPerson.write('Hello');

console.log(myPerson.write == otherPerson.write);
// Person.prototype.write = function(message) {
//     console.log(`Person wrote ${message}`);
// };

// const myPerson = new Person('John', 'Abbot');
// console.log(myPerson);
// console.log(myPerson.hasOwnProperty('write'));
// myPerson.write('hello world!');
// for(let key in myPerson) {
//     console.log(key);
// }

function newOperator(constructor, ...params) {
    //allocate memory
                   //let result = {};
                   //Second varuiant:
                   const result = Object.create(Person.prototype);
    //assign prototype
                   //Object.setPrototypeOf(result, Person.prototype)
    //execute constructor with params
    constructor.apply(result, params)

    //return memory reference
    return result;
}

const firstPerson = newOperator(Person, 'Juan', 'Cuadrado');
const secondPerson = newOperator(Person, 'Alex', 'Sandro');

console.log(firstPerson, secondPerson);
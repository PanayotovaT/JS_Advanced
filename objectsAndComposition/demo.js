const myAssocArray = {
    'first': 5,
    'second': 10,
    'third': 15
};

const keys = Object.keys(myAssocArray);
console.log(keys);
for(let key of keys) {
    console.log(myAssocArray[key]);
}

for(let k in myAssocArray) {
    console.log(`Key ${k} -- value ${myAssocArray[k]}`);
}

const values = Object.values(myAssocArray);
for(let value of values) {
    console.log(`Value ${value}`);
}
const entries = Object.entries(myAssocArray);
console.log(entries);

let myObj = {
    name: 'Alex',
    age: 2,
    sayHi: function() {
        console.log('Hi!');
    }
}
myObj.sayHi();

const newObj = {
    firstName: 'Alex',
    lastName: 'Panayotov',
    fullname(){
        return `${this.firstName} ${this.lastName}`;
    }
}
console.log(newObj.fullname());
const fullname = newObj.fullname;



const person = {
    firstName: 'Sofia',
    lastName: 'Panayotova'
}

person.fullname = fullname;
console.log(person.fullname());

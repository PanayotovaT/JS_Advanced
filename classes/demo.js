class MyClass { 
    constructor(name) {
        this.name = name;
    }
    sayHi() {
        console.log(`${this.name} says hi!`);
    }
}
let obj = {
    name: 'George',
    sayHi() {
        console.log(`${this.name} says hi!`);
    }
};
const myInstance = new MyClass('Peter');
console.log(myInstance);
myInstance.sayHi()
console.log(obj); // <= instance execuston

const myFunc = myInstance.sayHi.bind(myInstance); //ако няма байнд си губи рефернзията;
myFunc(); //<= global execution
obj.sayHi();

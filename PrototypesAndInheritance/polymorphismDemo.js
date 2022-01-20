class Person {
    constructor(name) {
        this.name = name;
    }
    sayHi() {
        console.log(`${this.name} says hi!`);
    }
}

class Employee extends Person{

    constructor(name, salary) {

        super(name);
        this.salary = salary
    }
    collectSalary(salary) {
        console.log(`${this.name} collected ${this.salary}`);
        this.sayHi();
        // super.sayHi();

    }
}

const myEmployee = new Employee('Ivan', 60000);
const myPerson = new Person('John');
const myLiteral = {
    name: 'Mary'
};

function printName(person) {
    console.log(person.name);
}
printName(myEmployee);
printName(myPerson);
printName(myLiteral);
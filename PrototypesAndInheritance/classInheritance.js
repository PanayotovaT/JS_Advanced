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


// Employee.prototype.name ='Employee'
const myEmployee = new Employee('Peter', 60000);
console.log(myEmployee);
myEmployee.collectSalary();
// myEmployee.sayHi();
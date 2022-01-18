    class Person {

        constructor(firstName, lastName, age, email) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
            this.email = email;

        }
        toString() {
            return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`
        }
    }
    const myPerson = new Person('Anna', 'Simpson', 22, 'anna@yahoo.com');
    myPerson.toString();
    console.log(`${myPerson}`);

    console.log(myPerson instanceof Person);
    console.log(myPerson instanceof Object);
    console.log(myPerson instanceof String);

let myObject = {
    firstName: 'Alexander',
    lastName: 'Panayotov',
    fullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

const fullName = myObject.fullName;
console.log(myObject.fullName());

const newObject = {
    firstName: 'Sofia',
    lastName: 'Panayotova'
}

newObject.fullName = fullName;
console.log(newObject.fullName());
const myObj = {
    name: 'Alex',
    lastName: 'Panayotov',
    sayHi: function() {
        console.log('Hi!');
    },
    fullName() {
        return `${this.name} ${this.lastName}`
    }
};

function deepCopy(target) {
    if(Array.isArray(target)) {
        return target.map(deepCopy);
    } else if(typeof target == 'object') {
        return [...Object.entries(target)].reduce((a,[k,v]) => Object.assign(a, {[k]: deepCopy(v)}) , {});
    } else {
        return target;
    }
}

const myCopy = deepCopy(myObj);
console.log(myCopy);
console.log(myObj == myCopy);
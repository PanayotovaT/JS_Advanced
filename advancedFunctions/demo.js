// const myObj = {
//     name: 'Alex',
//     otherFunc() {
//         console.log(this);

//         myFunc();
//         function myFunc() {

            // console.log(this);
//         }
//     }
// };

// myObj.otherFunc();

// document.querySelector('button').addEventListener('click', myObj.otherFunc);
//-----------------------
const myObj = {
    name: 'Alex',

    myFunc() {
        console.log(`My name is ${this.name}`)
    }
}

function myFunc(a, b) {
    console.log(this);
    console.log(a, b);
}

myFunc(5, 3);

myFunc.call(myObj, 6, 14);
myFunc.apply(myObj, [6, 9]);

const boundFunc = myFunc.bind(myObj); // konteksta vinagi e myObj

boundFunc(3, 11);
const funcRef = myObj.myFunc; // ne pazi refernziq
const bindRef = myObj.myFunc.bind(myObj)

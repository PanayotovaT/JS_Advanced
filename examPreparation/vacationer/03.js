class Vacationer {

    constructor(fullName, creditCard = [1111, "", 111]) {
        this.fullName = fullName;
        this.idNumber = this.generateIDNumber();
        if(typeof creditCard[0] !== "number" || typeof creditCard[2] !== "number"){
            throw new Error("Invalid credit card details")
        }
 
        if (creditCard.length < 3) {
            throw new Error("Missing credit card information");
        }
 
        this.creditCard = { cardNumber: creditCard[0], expirationDate: creditCard[1], securityNumber: creditCard[2] };
             
        this.wishList = [];

    }
    
    set creditCard(value) {
        if (value === undefined) {
            this._creditCard = {
                cardNumber: 1111,
                expirationDate: '',
                securityNumber: 111
            }
        } else {
            this._creditCard = value;
        }
    }
    get creditCard() {
        return this._creditCard;
    }

    generateIDNumber() {

        let idNumber = 0;
        let num = '';
        let vowels = ['a', 'e', 'i', 'o', 'u'];
        let lastLetter = this._fullName.lastName[this._fullName.lastName.length - 1];
        if (vowels.includes(lastLetter)) {
            num = '8';
        } else {
            num = '7';
        }
            idNumber = 231 * this._fullName.firstName.charCodeAt(0) + 139 * this._fullName.middleName.length;
            idNumber = idNumber + num;
            return idNumber;
        
    }
    set fullName(value) {
        if (value.length !== 3) {

            throw new Error('Name must include first name, middle name and last name');
        }
        const regex = /^[A-Z][a-z]+ [A-Z][a-z]+ [A-Z][a-z]+$/g;
        let match = regex.test(value.join(' '));
        if (!match) {
            throw new Error('Invalid full name');
        }
        this._fullName = {
            firstName: value[0],
            middleName: value[1],
            lastName: value[2]
        }
    }

    get fullName() {

        return this._fullName;
    }

    addCreditCardInfo(input) {
        if(input.length !== 3) {
            throw new Error('Missing credit card information');
        }
        if(typeof input[0] !== 'number' || typeof input[2] !== 'number') {
            throw new Error('Invalid credit card details');
        }
        this.creditCard.cardNumber = input[0];
        this.creditCard.expirationDate = input[1];
        this.creditCard.securityNumber = input[2];
    }
    addDestinationToWishList(destination) {
        if(this.wishList.includes(destination)) {
            throw new Error('Destination already exists in wishlist');
        }
        this.wishList.push(destination);
        this.wishList = this.wishList.sort((a, b) => a.length - b.length);
    }
    getVacationerInfo() {
        let output = '';
        output += `Name: ${this.fullName.firstName} ${this.fullName.middleName} ${this.fullName.lastName}\nID Number: ${this.idNumber}\nWishlist:\n`;
        if (this.wishList.length == 0) {
            output += "empty\n";
        } else {
            output += `${this.wishList.join(", ")}\n`
        }
        output += `Credit Card:\nCard Number: ${this.creditCard.cardNumber}\nExpiration Date: ${this.creditCard.expirationDate}\nSecurity Number: ${this.creditCard.securityNumber}`;
        return output;
        // let result = [];
        // result.push(`Name: ${this.fullName.firstName} ${this.fullName.middleName} ${this.fullName.lastName}`);
        // result.push(`ID number: ${this.idNumber}`);
        // result.push(`Wishlist:`);
        // if(this.wishList.length == 0) {
        //     result.push('empty');
        // } else {
        //     result.push(`${this.wishList.join(', ')}`)
        // }
        // result.push('Credit Card:');
        // result.push(`Card Number: ${this.creditCard.cardNumber}`);
        // result.push(`Expiration Date: ${this.creditCard.expirationDate}`);
        // result.push(`Security Number: ${this.creditCard.securityNumber}`);
        // return result.join('\n')
    }

}

// Initialize vacationers with 2 and 3 parameters
let vacationer1 = new Vacationer(["Vania", "Ivanova", "Zhivkova"]);
let vacationer2 = new Vacationer(["Tania", "Ivanova", "Zhivkova"], 
[123456789, "10/01/2018", 777]);

// Should throw an error (Invalid full name)
try {
    let vacationer3 = new Vacationer(["Vania", "Ivanova", "ZhiVkova"]);
} catch (err) {
    console.log("Error: " + err.message);
}

// Should throw an error (Missing credit card information)
try {
    let vacationer3 = new Vacationer(["Zdravko", "Georgiev", "Petrov"]);
    vacationer3.addCreditCardInfo([123456789, "20/10/2018"]);
} catch (err) {
    console.log("Error: " + err.message);
}

vacationer1.addDestinationToWishList('Spain');
vacationer1.addDestinationToWishList('Germany');
vacationer1.addDestinationToWishList('Bali');

// Return information about the vacationers
console.log(vacationer1.getVacationerInfo());
console.log(vacationer2.getVacationerInfo());

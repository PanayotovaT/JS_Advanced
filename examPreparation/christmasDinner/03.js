class ChristmasDinner {

    constructor(budget) {
        this.budget = budget;
        this.dishes = [];
        this.products = [];
        this.guests = {};
    }

    set budget(value) {

        if (value < 0) {
            throw new Error(`The budget cannot be a negative number`)
        }
        this._budget = value;
    }

    get budget() {
        return this._budget;
    }

    shopping([productName, price]) {
        if (this.budget < price) {
            throw new Error('Not enough money to buy this product');
        }
        this.budget -= price;
        this.products.push(productName);

        return `You have successfully bought ${productName}!`
    }
    recipes({ recipeName, productsList }) {
        productsList.forEach(x => {
            if (!this.products.includes(x)) {
                throw new Error('We do not have this product');
            }
        });
        this.dishes.push({ recipeName, productsList });
        return `${recipeName} has been successfully cooked!`
    }
    inviteGuests(name, dish) {
        if (!this.dishes.some(x => x.recipeName === dish)) {
            throw new Error('We do not have this dish')
        }

        if (Object.keys(this.guests).includes(name)) {
            throw new Error('This guest has already been invited');
        }

        this.guests[name] = dish;
        return `You have successfully invited ${name}!`;

    }
    showAttendance() {
       let result = [];
       Object.entries(this.guests).forEach(([guestName, dish]) => {
           result.push(`${guestName} will eat ${dish}, which consists of ${this.dishes.find(x => x.recipeName === dish).productsList.join(', ')}`)
       });

       return result.join('\n').trim();
    }
}
let dinner = new ChristmasDinner(300);

dinner.shopping(['Salt', 1]);
dinner.shopping(['Beans', 3]);
dinner.shopping(['Cabbage', 4]);
dinner.shopping(['Rice', 2]);
dinner.shopping(['Savory', 1]);
dinner.shopping(['Peppers', 1]);
dinner.shopping(['Fruits', 40]);
dinner.shopping(['Honey', 10]);
console.log(dinner.budget);
console.log(dinner.recipes({
    recipeName: 'Oshav',
    productsList: ['Fruits', 'Honey']
}));
console.log(dinner.dishes);
dinner.recipes({
    recipeName: 'Folded cabbage leaves filled with rice',
    productsList: ['Cabbage', 'Rice', 'Salt', 'Savory']
});
dinner.recipes({
    recipeName: 'Peppers filled with beans',
    productsList: ['Beans', 'Peppers', 'Salt']
});

dinner.inviteGuests('Ivan', 'Oshav');
dinner.inviteGuests('Petar', 'Folded cabbage leaves filled with rice');
console.log(dinner.inviteGuests('Georgi', 'Peppers filled with beans'));
console.log(dinner.inviteGuests('Georgi2', 'Peppers filled with beans'));


console.log(dinner.showAttendance());
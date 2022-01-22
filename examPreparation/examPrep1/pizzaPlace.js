const { describe } = require('mocha');
const { expect } = require('chai');
const { assert } = require('chai');

let pizzUni = {
    makeAnOrder: function (obj) {

        if (!obj.orderedPizza) {
            throw new Error('You must order at least 1 Pizza to finish the order.');
        } else {
            let result = `You just ordered ${obj.orderedPizza}`
            if (obj.orderedDrink) {
                result += ` and ${obj.orderedDrink}.`
            }
            return result;
        }
    },

    getRemainingWork: function (statusArr) {

        const remainingArr = statusArr.filter(s => s.status != 'ready');

        if (remainingArr.length > 0) {

            let pizzaNames = remainingArr.map(p => p.pizzaName).join(', ')
            let pizzasLeft = `The following pizzas are still preparing: ${pizzaNames}.`

            return pizzasLeft;
        } else {
            return 'All orders are complete!'
        }

    },

    orderType: function (totalSum, typeOfOrder) {
        if (typeOfOrder === 'Carry Out') {
            totalSum -= totalSum * 0.1;

            return totalSum;
        } else if (typeOfOrder === 'Delivery') {

            return totalSum;
        }
    }
}

describe('pizzaPlace unit tests', () => {

    it('make an order', () => {
        let pizza = { orderedPizza: 'pizza', orderedDrink: 'drink' };
        let pizza1 = { orderedDrink: 'drink' };
        let pizza2 = { orderedPizza: 'pizza' };
        let pizza3 = {};

        assert.throw(() => pizzUni.makeAnOrder({ pizza1 }), 'You must order at least 1 Pizza to finish the order.');
        assert.throw(() => pizzUni.makeAnOrder({ pizza3 }), 'You must order at least 1 Pizza to finish the order.');

        assert.equal(pizzUni.makeAnOrder(pizza2), `You just ordered ${pizza2.orderedPizza}`)
        assert.equal(pizzUni.makeAnOrder(pizza), `You just ordered ${pizza.orderedPizza} and ${pizza.orderedDrink}.`)
    });

    it('getRemainingWork', () => {
        //o[{pizzaName: ‘the name of the pizza’, status: ‘ready’ / ‘preparing’ }, …]
        const statusArr = [
            { pizzaName: 'pizza', status: 'ready' },
            { pizzaName: 'pizza1', status: 'ready' },
            { pizzaName: 'pizza2', status: 'preparing' },
            { pizzaName: 'pizza3', status: 'preparing' }
        ];

        const statusArr1 = [
            { pizzaName: 'pizza', status: 'ready' },
            { pizzaName: 'pizza1', status: 'ready' }
        ];

        const statusArr2 = [
            {pizzaName: 'pizza2', status: 'preparing'} ,
            {pizzaName: 'pizza3', status: 'preparing'}
        ];
      
        assert.equal(pizzUni.getRemainingWork(statusArr1), 'All orders are complete!');
        expect(pizzUni.getRemainingWork(statusArr)).to.equal('The following pizzas are still preparing: pizza2, pizza3.');
        expect(pizzUni.getRemainingWork(statusArr2)).to.equal('The following pizzas are still preparing: pizza2, pizza3.');

    });

    it('order type', () => {
        let orderTypeDelivery = 'Delivery';
        let orderTypeCary = 'Carry Out';
        let totalSum = 100;
        let totalSum1 = -100;
        let totalSum2 = 0;

        assert.equal(pizzUni.orderType(totalSum, orderTypeDelivery), 100);
        assert.equal(pizzUni.orderType(totalSum, orderTypeCary), 90);

        assert.equal(pizzUni.orderType(totalSum1, orderTypeDelivery), -100);
        assert.equal(pizzUni.orderType(totalSum1, orderTypeCary), -90);

        assert.equal(pizzUni.orderType(totalSum2, orderTypeDelivery), 0);
        assert.equal(pizzUni.orderType(totalSum2, orderTypeCary), 0);
    })
})
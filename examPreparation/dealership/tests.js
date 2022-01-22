const dealership = require('./dealership');
const expect = require('chai').expect;
const { describe } = require('mocha');

describe('', () => {
    describe('newCarCost', () => {
        //model is supported -> price reduced by model value
        it('returns original price when model unsupported', () => {
            expect(dealership.newCarCost('a', 1)).to.equal(1);
        });
        it('discounted price', () => {
            expect(dealership.newCarCost('Audi A4 B8', 30000)).to.equal(15000);

        })
        //model is not supported -> no discount
    })
    describe('carEquipment', () => {
        //single pick;
        it('single element, single pick', () => {
            expect(dealership.carEquipment(['a'],[ 0])).to.deep.equal(['a'])
        })
        //test overloading - multiple elements, multiple picks;
        it('multiple picks', () => {
            expect(dealership.carEquipment(['a','b', 'c'], [0, 2])).to.deep.equal(['a', 'c']);
            expect(dealership.carEquipment(['a', 'b', 'c'], [1])).to.deep.equal(['b']);
        })
    })
    describe('euroCategory', () => {
        //category is below threshold;
        it('category is below threshold', () =>{
            expect(dealership.euroCategory(1)).to.equal('Your euro category is low, so there is no discount from the final price!');
        });

        it('category is above threshhold', () => {
            expect(dealership.euroCategory(5)).to.equal(`We have added 5% discount to the final price: 14250.`)
        });

        it('edge case, category is at treshold', () => {
            expect(dealership.euroCategory(4)).to.equal(`We have added 5% discount to the final price: 14250.`);
        })
        //category is above threshhold;
        //category is at treshold; edge case
    })
})
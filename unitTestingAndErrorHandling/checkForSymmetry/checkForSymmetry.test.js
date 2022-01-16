const {expect} = require('chai');
const isSymmetric = require('./checkForSymmetry');

describe ('isSymmetric', () => {
    it('returns true for valid symmetric input', () => {
        expect(isSymmetric([1, 1])).to.equal(true);
    });

    it('returns false for valid non-symmetric input', () => {
        expect(isSymmetric([1, 2])).to.equal(false);
    });

    it('returns false for invalid argument', () => {
        expect(isSymmetric('a')).to.equal(false);
    });
    
    it('returns false for type-coerced elements', () => {
        expect(isSymmetric([1,'1'])).to.equal(false);
    })

    //test overloading
    it('returns true for valid symmetric odd element array', () => {
        expect(isSymmetric([1,1,1])).to.equal(true);
    });
    it('returns true for valid symmetric string array', () => {
        expect(isSymmetric(['a', 'a'])).to.equal(true);
    });
    it('returns false for valid non-symmetric string array', () => {
        expect(isSymmetric(['a', 'b'])).to.equal(false);
    })
});
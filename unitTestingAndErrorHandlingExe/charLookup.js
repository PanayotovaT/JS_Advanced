const describe = require('mocha').describe;
const assert = require('chai').assert;

function lookupChar(string, index) {
    if (typeof (string) !== 'string' || !Number.isInteger(index)) {
        return undefined;
    }
    if (string.length <= index || index < 0) {
        return "Incorrect index";
    }

    return string.charAt(index);
}
describe('char lookup', () => {
    it('type of string', () => {
        assert.isUndefined(lookupChar(1, 1), '', 'Message:');
        assert.isUndefined(lookupChar('abc', 1.2));
        assert.isUndefined(lookupChar('abc', 'a'));
    });
    it('check the index', () => {
        assert.equal(lookupChar('abc', -1), 'Incorrect index');
        assert.equal(lookupChar('abc', 3), 'Incorrect index');
    });
    it('checking the result', () => {
        assert.equal(lookupChar('abc', 0), 'a');
        assert.equal(lookupChar('abc', 2), 'c');
    });
});
const { expect } = require('chai');
const rgbToHexColor = require('./RGBtoHEX');

describe('rgbToHexColor tests', () => {
    it('converts black to hex', () => {
        expect(rgbToHexColor(0, 0, 0)).to.equal('#000000');
    });
    it('converts white to hex', () => {
        expect(rgbToHexColor(255, 255, 255)).to.equal('#FFFFFF')
    });
    it('returns undefined for string params', () => {
        expect(rgbToHexColor('a', 'a', 'a')).to.be.undefined;
    }); 
    it('converts red to hex', () => {
        expect(rgbToHexColor(255, 0, 0)).to.equal('#FF0000');
    });
    it('converts green to hex', () => {
        expect(rgbToHexColor(0, 255, 0)).to.equal('#00FF00');
    });
    it('converts blue to hex', () => {
        expect(rgbToHexColor(0, 0, 255)).to.equal('#0000FF');
    });
    it('returns undefined for negative values', () => {
        expect(rgbToHexColor(0, 0, -1)).to.be.undefined;
    });
    it('returns undefined for negative values', () => {
        expect(rgbToHexColor(0, -1, 0)).to.be.undefined;
    });
    it('returns undefined for negative values', () => {
        expect(rgbToHexColor(-1, 0, 0)).to.be.undefined;
    });
    it('returns undefined for values greater than 255', () => {
        expect(rgbToHexColor(0, 0, 256)).to.be.undefined;
    });
    it('returns undefined for values greater than 255', () => {
        expect(rgbToHexColor(0, 256, 0)).to.be.undefined;
    });
    it('returns undefined for values greater than 255', () => {
        expect(rgbToHexColor(256, 0, 0)).to.be.undefined;
    });

    //test overloading
    it('converts random color to hex test 1', () => {
        expect(rgbToHexColor(10, 22, 73)).to.equal('#0A1649');
    });
    it('converts random color to hex test 2', () => {
        expect(rgbToHexColor(128,0,0)).to.equal('#800000');
    });
    it('converts random color to hex test 3', () => {
        expect(rgbToHexColor(10,22,73)).to.equal('#0A1649');
    });
});
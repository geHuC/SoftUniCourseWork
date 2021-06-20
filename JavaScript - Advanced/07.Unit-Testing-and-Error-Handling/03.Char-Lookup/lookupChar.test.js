const { assert } = require('chai');
const lookupChar = require('../03.Char-Lookup/lookupChar');

describe('Char lookup tests', () =>{
    it('Should work Correctly', () =>{
        const expResult = 'a';
        const result = lookupChar('char',2);
        assert.equal(result,expResult);
    });
    it('Should return undefine when not string', () =>{
        const expected = undefined;
        assert.equal(lookupChar(1,1),expected);
        assert.equal(lookupChar(2.2,1),expected);
        assert.equal(lookupChar([],1),expected);
        assert.equal(lookupChar({},1),expected);
    });
    it('Should return undefine when not number', () =>{
        const expected = undefined;
        assert.equal(lookupChar('result',1.1),expected);
        assert.equal(lookupChar('result','1'),expected);
        assert.equal(lookupChar('result','one'),expected);
        assert.equal(lookupChar('result',[]),expected);
        assert.equal(lookupChar('result',{}),expected);
    });
    it('Should return index out of bounds', () =>{
        const expected = 'Incorrect index';
        assert.equal(lookupChar('result',-1),expected);
        assert.equal(lookupChar('result',120),expected);
    });
})

const { assert } = require('chai');
const isOddOrEven = require('../02.Even-or-Odd/isOddOrEven');

describe('Test 123', () => {
    it('Should return undefined', () =>
    {
        assert.equal(isOddOrEven(3),undefined);
        assert.equal(isOddOrEven(true),undefined);
        assert.equal(isOddOrEven([1,2,3]),undefined);
        assert.equal(isOddOrEven({}),undefined);
    })
    it('Should return even', () =>
    {
        assert.equal(isOddOrEven('aa'),'even');
    })
    it('Should return odd', () =>
    {
        assert.equal(isOddOrEven('aaa'),'odd');
    })
    it('Should return odd', () =>
    {
        assert.equal(isOddOrEven('aaa'),'odd');
        assert.equal(isOddOrEven('aaa'),'odd');
        assert.equal(isOddOrEven('aa'),'even');
        assert.equal(isOddOrEven('aaa'),'odd');
    })

})
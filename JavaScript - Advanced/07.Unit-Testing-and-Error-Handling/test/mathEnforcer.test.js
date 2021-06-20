const { assert } = require('chai');
const mathEnforcer = require('../04.Math-Enforcer/mathEnforcer');

describe('mathEnforcer', () =>{
    describe('addFive tests', () =>{
        it('Should Work', () =>{
            assert.equal(mathEnforcer.addFive(5),10);
            assert.equal(mathEnforcer.addFive(-5),0);
            assert.closeTo(mathEnforcer.addFive(1.2),6.2,0.01)
        });
        it('Should break when not number', () =>{
            const expected = undefined;
            assert.equal(mathEnforcer.addFive('5'),expected);
            assert.equal(mathEnforcer.addFive('another'),expected);
            assert.equal(mathEnforcer.addFive({}),expected);
            assert.equal(mathEnforcer.addFive([]),expected);
            assert.equal(mathEnforcer.addFive(undefined),expected);
            assert.equal(mathEnforcer.addFive(true),expected);
        });
    })
    describe('subrtactTen',() =>{
        it('Should break when not number', () =>{
        const expected = undefined;
        assert.equal(mathEnforcer.subtractTen('5'),expected);
        assert.equal(mathEnforcer.subtractTen('another'),expected);
        assert.equal(mathEnforcer.subtractTen({}),expected);
        assert.equal(mathEnforcer.subtractTen([]),expected);
        assert.equal(mathEnforcer.subtractTen(undefined),expected);
        assert.equal(mathEnforcer.subtractTen(true),expected);
    });
        it('Should work',() =>{
            assert.equal(mathEnforcer.subtractTen(20),10);
            assert.equal(mathEnforcer.subtractTen(-20),-30);
            assert.equal(mathEnforcer.subtractTen(10),0);
            assert.closeTo(mathEnforcer.subtractTen(12.25),2.25,0.01);
        })
        
    })
    describe('sum', () =>{
        it('should work',() =>{
            assert.equal(mathEnforcer.sum(5,6),11);
            assert.equal(mathEnforcer.sum(2,-3),-1);
            assert.equal(mathEnforcer.sum(-2,-3),-5);
            assert.closeTo(mathEnforcer.sum(5.5,1.6),7.1,0.01);
            assert.closeTo(mathEnforcer.sum(2.2,-1.1),1.1,0.01);
        })
        it('should break', () =>{
            const expected = undefined;
            assert.equal(mathEnforcer.sum('1',1),expected);
            assert.equal(mathEnforcer.sum('1','a'),expected);
            assert.equal(mathEnforcer.sum(null,1),expected);
            assert.equal(mathEnforcer.sum({},1),expected);
            assert.equal(mathEnforcer.sum([],1),expected);
            assert.equal(mathEnforcer.sum(undefined,1),expected);
            assert.equal(mathEnforcer.sum(1,undefined),expected);
            assert.equal(mathEnforcer.sum(1,null),expected);
        })
    })
})

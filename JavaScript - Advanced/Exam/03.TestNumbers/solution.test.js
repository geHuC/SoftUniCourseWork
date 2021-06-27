let{assert} = require('chai');

const testNumbers = {
    sumNumbers: function (num1, num2) {
        let sum = 0;

        if (typeof(num1) !== 'number' || typeof(num2) !== 'number') {
            return undefined;
        } else {
            sum = (num1 + num2).toFixed(2);
            return sum
        }
    },
    numberChecker: function (input) {
        input = Number(input);

        if (isNaN(input)) {
            throw new Error('The input is not a number!');
        }

        if (input % 2 === 0) {
            return 'The number is even!';
        } else {
            return 'The number is odd!';
        }

    },
    averageSumArray: function (arr) {

        let arraySum = 0;

        for (let i = 0; i < arr.length; i++) {
            arraySum += arr[i]
        }

        return arraySum / arr.length
    }
};


describe("Test numbers?", function() {
    describe("sumNumbers", function() {
        it("returns undefined", function() {
           assert.equal(testNumbers.sumNumbers(null,null),undefined);
           assert.equal(testNumbers.sumNumbers('1','2'),undefined);
           assert.equal(testNumbers.sumNumbers([],[]),undefined);
           assert.equal(testNumbers.sumNumbers([1],1),undefined);
           assert.equal(testNumbers.sumNumbers('1',2),undefined);
           assert.equal(testNumbers.sumNumbers(2,[2]),undefined);
           assert.equal(testNumbers.sumNumbers(3,'1'),undefined);
           assert.equal(testNumbers.sumNumbers(),undefined);
        });
        it("works", function() {
            assert.equal(testNumbers.sumNumbers(1,1),(1+1).toFixed(2));
            assert.equal(testNumbers.sumNumbers(-5,1),(-5+1).toFixed(2));
            assert.equal(testNumbers.sumNumbers(-5,-5),(-5+-5).toFixed(2));
            assert.equal(testNumbers.sumNumbers(2.3,1.2),(2.3+1.2).toFixed(2));
            assert.equal(testNumbers.sumNumbers(-2.3,1.2),(-2.3+1.2).toFixed(2));
            assert.equal(testNumbers.sumNumbers(-2.3,-1.2),(-2.3+-1.2).toFixed(2));
        });
     });
     describe("numberChecker …", function() {
        it("throws", function() {
            //assert.throws(()=> testNumbers.numberChecker(null),Error,'The input is not a number!');
            assert.throws(()=> testNumbers.numberChecker(NaN),Error,'The input is not a number!');
            //assert.throws(()=> testNumbers.numberChecker('1'),Error,'The input is not a number!');
            assert.throws(()=> testNumbers.numberChecker('string'),Error,'The input is not a number!',1);
            assert.throws(()=> testNumbers.numberChecker([1,2]),Error,'The input is not a number!',2);
            assert.throws(()=> testNumbers.numberChecker({2:1}),Error,'The input is not a number!',3);
            assert.throws(()=> testNumbers.numberChecker(),Error,'The input is not a number!',4);
        });
        it("WORKS   ", function() {
            assert.equal(testNumbers.numberChecker(1),'The number is odd!');
            assert.equal(testNumbers.numberChecker(11),'The number is odd!');
            assert.equal(testNumbers.numberChecker(-11),'The number is odd!');
            assert.equal(testNumbers.numberChecker([1]),'The number is odd!');
            assert.equal(testNumbers.numberChecker(`1`),'The number is odd!');
            assert.equal(testNumbers.numberChecker('11'),'The number is odd!');
            assert.equal(testNumbers.numberChecker('22'),'The number is even!');
            assert.equal(testNumbers.numberChecker(22),'The number is even!');
            assert.equal(testNumbers.numberChecker(2),'The number is even!');
            assert.equal(testNumbers.numberChecker([22]),'The number is even!');
            assert.equal(testNumbers.numberChecker(-12),'The number is even!');
        });
     });
     describe("AverageSumArray", function() {
        it("works", function() {
           assert.closeTo(testNumbers.averageSumArray([1,2,3,4,5]),[1,2,3,4,5].reduce( (acc, x) => acc += x /5,0),0.01);
          assert.closeTo(testNumbers.averageSumArray([-1,2,-3,4,5]),[-1,2,-3,4,5].reduce((acc, x) => acc += x /5,0),0.01);
           assert.closeTo(testNumbers.averageSumArray([2.2,.3,4.5,4.14,5]),[2.2,.3,4.5,4.14,5].reduce((acc, x) => acc += x /5,0),0.01);
           assert.closeTo(testNumbers.averageSumArray([-1,-2,-3,-4,-5]),[-1,-2,-3,-4,-5].reduce((acc, x) => acc += x /5,0),0.01);
           assert.isNaN(testNumbers.averageSumArray(['d','-c','a','d','e']));
        });
     });
});

const { assert } = require('chai');

const numberOperations = {
    powNumber: function (num) {
        return num * num;
    },
    numberChecker: function (input) {
        input = Number(input);

        if (isNaN(input)) {
            throw new Error('The input is not a number!');
        }

        if (input < 100) {
            return 'The number is lower than 100!';
        } else {
            return 'The number is greater or equal to 100!';
        }      
    },
    sumArrays: function (array1, array2) {

        const longerArr = array1.length > array2.length ? array1 : array2;
        const rounds = array1.length < array2.length ? array1.length : array2.length;

        const resultArr = [];

        for (let i = 0; i < rounds; i++) {
            resultArr.push(array1[i] + array2[i]);
        }

        resultArr.push(...longerArr.slice(rounds));

        return resultArr;
    }
};

describe("Number Operation Tests", function() {
    describe("Power", function() {
        it("Returns correclly", function() {
            assert.equal(numberOperations.powNumber(2),4);
        });
     });
     describe("Number checker", function() {
        it("thows NaN", function() {
            assert.throw(() => numberOperations.numberChecker(),Error);
            assert.throw(() => numberOperations.numberChecker(NaN),Error);
            assert.throw(() => numberOperations.numberChecker('string'),Error);
        });
        it("less than", function() {
            assert.equal(numberOperations.numberChecker(99.9),'The number is lower than 100!');
            assert.equal(numberOperations.numberChecker(-100),'The number is lower than 100!');
            assert.equal(numberOperations.numberChecker('25'),'The number is lower than 100!');
            assert.equal(numberOperations.numberChecker(Number.MIN_VALUE),'The number is lower than 100!');
        });
        it("greater than", function() {
            assert.equal(numberOperations.numberChecker(100),'The number is greater or equal to 100!');
            assert.equal(numberOperations.numberChecker('111.25'),'The number is greater or equal to 100!');
            assert.equal(numberOperations.numberChecker(Number.MAX_VALUE),'The number is greater or equal to 100!');
        });
     });
     describe("sumArrays", function() {
        it("Returns correclly", function() {
            let arr1 = [2,3,4,5];
            let arr2 = [1,2,3,4];
            assert.deepEqual(numberOperations.sumArrays(arr1,arr2),[3,5,7,9]);
        });
        it("finds longer correctly", function() {
            let arr1 = [2,3,4,5,6];
            let arr2 = [1,2,3,4];
            assert.deepEqual(numberOperations.sumArrays(arr1,arr2),[3,5,7,9,6]);
        });
     });
});


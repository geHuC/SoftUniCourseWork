const {assert} = require('chai');

let dealership = {
    newCarCost: function (oldCarModel, newCarPrice) {

        let discountForOldCar = {
            'Audi A4 B8': 15000,
            'Audi A6 4K': 20000,
            'Audi A8 D5': 25000,
            'Audi TT 8J': 14000,
        }

        if (discountForOldCar.hasOwnProperty(oldCarModel)) {
            let discount = discountForOldCar[oldCarModel];
            let finalPrice = newCarPrice - discount;
            return finalPrice;
        } else {
            return newCarPrice;
        }
    },

    carEquipment: function (extrasArr, indexArr) {
        let selectedExtras = [];
        indexArr.forEach(i => {
            selectedExtras.push(extrasArr[i])
        });

        return selectedExtras;
    },

    euroCategory: function (category) {
        if (category >= 4) {
            let price = this.newCarCost('Audi A4 B8', 30000);
            let total = price - (price * 0.05)
            return `We have added 5% discount to the final price: ${total}.`;
        } else {
            return 'Your euro category is low, so there is no discount from the final price!';
        }
    }
}


describe("Tests …", function() {
    describe("newCarCost", function() {

        it("DiscountsProperly", function() {
            assert.equal(dealership.newCarCost('Audi A4 B8',30000),15000);
            assert.equal(dealership.newCarCost('Audi A6 4K',30000),10000);
            assert.equal(dealership.newCarCost('Audi A8 D5',30000),5000);
            assert.equal(dealership.newCarCost('Audi TT 8J',30000),16000);
        });
        it("ignoresDiscount", function() {
            
            assert.equal(dealership.newCarCost('BMW A4 B8',30000),30000);
            assert.equal(dealership.newCarCost('BMW',90000),90000);
        });
     });
     describe("carEquipment", function() {

        it("returns correctly", function() {
            let arr1 = ['rims','seats','sunroof','doors'];
            let arr2 = [0,2,3];
            let arr3 = ['rims','sunroof','doors'];
            assert.deepEqual(dealership.carEquipment(arr1, arr2), arr3);
        });
     });
     describe("euroCategoy", function() {

        it("lowCategory", function() {
            assert.equal(dealership.euroCategory(2),'Your euro category is low, so there is no discount from the final price!');
            assert.equal(dealership.euroCategory(-2.2),'Your euro category is low, so there is no discount from the final price!');
        });
        it("addsDiscount", function() {
            assert.equal(dealership.euroCategory(4),`We have added 5% discount to the final price: 14250.`);
            assert.equal(dealership.euroCategory(Number.MAX_VALUE),`We have added 5% discount to the final price: 14250.`);
        });
     });
});

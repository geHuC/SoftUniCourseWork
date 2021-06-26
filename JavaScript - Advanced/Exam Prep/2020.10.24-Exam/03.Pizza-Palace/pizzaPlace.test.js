const {assert} = require('chai');
let pizzUni = {
    makeAnOrder: function (obj) {

        if (!obj.orderedPizza) {
            throw new Error('You must order at least 1 Pizza to finish the order.');
        } else {
            let result = `You just ordered ${obj.orderedPizza}`
            if (obj.orderedDrink) {
                result += ` and ${obj.orderedDrink}.`
            }
            return result;
        }
    },

    getRemainingWork: function (statusArr) {

        const remainingArr = statusArr.filter(s => s.status != 'ready');

        if (remainingArr.length > 0) {

            let pizzaNames = remainingArr.map(p => p.pizzaName).join(', ')
            let pizzasLeft = `The following pizzas are still preparing: ${pizzaNames}.`

            return pizzasLeft;
        } else {
            return 'All orders are complete!'
        }

    },

    orderType: function (totalSum, typeOfOrder) {
        if (typeOfOrder === 'Carry Out') {
            totalSum -= totalSum * 0.1;

            return totalSum;
        } else if (typeOfOrder === 'Delivery') {

            return totalSum;
        }
    }
}

describe("pizzUni", function() {
    describe("makeAnOrder", function() {

        it("works", function() {
            let order = {orderedPizza:'margarita', orderedDrink:'coke'};
            assert.equal(pizzUni.makeAnOrder(order),`You just ordered margarita and coke.`);
            assert.equal(pizzUni.makeAnOrder({orderedPizza: `margarita`}),`You just ordered margarita`);
        });
        it("throws", function() {
            //assert.throws(() => pizzUni.makeAnOrder(), Error,'You must order at least 1 Pizza to finish the order.');
            assert.throws(() => pizzUni.makeAnOrder({}), Error,'You must order at least 1 Pizza to finish the order.');
            //assert.throws(() => pizzUni.makeAnOrder(null), Error,'You must order at least 1 Pizza to finish the order.');
            assert.throws(() => pizzUni.makeAnOrder({orderedDrink:'water'}), Error,'You must order at least 1 Pizza to finish the order.');
        });

     });
     describe("getRemainingWork / Ordertype", function() {
        it("works", function() {
            let statusArr = [{pizzaName: 'pica',status:'ready'},{pizzaName: 'hleb',status:'preparing'}, {pizzaName: 'pitka', status:'preparing'}];
            let statusArr2 = [{pizzaName: 'pica',status:'ready'},{pizzaName: 'hleb',status:'ready'}, {pizzaName: 'pitka', status:'ready'}];
            assert.equal(pizzUni.getRemainingWork(statusArr),'The following pizzas are still preparing: hleb, pitka.');
            assert.equal(pizzUni.getRemainingWork(statusArr2),'All orders are complete!');
        });
        it("order works", function() {
            assert.equal(pizzUni.orderType(50,'Delivery'),50);
            assert.equal(pizzUni.orderType('50','Delivery'),50);
            assert.equal(pizzUni.orderType('50','Carry Out'),45);
            assert.equal(pizzUni.orderType(100,'Carry Out'),90);
        });
     });

});

function solve(initialProducts, order) {
    let stock = initialProducts.reduce((acc, curr, i) => {
        if (i % 2 == 0) {
            acc[curr] = Number(initialProducts[i + 1]);
        }
        return acc;
    }, {});
    for (let i = 0; i < order.length; i++) {
        if (i % 2 == 0) {
            stock[order[i]] ? stock[order[i]] += Number(order[i + 1]) : stock[order[i]] = Number(order[i + 1]);
        }
    }
    Object.keys(stock).forEach(x => console.log(`${x} -> ${stock[x]}`));
}

//Test Cases
solve([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]);
console.log('\n-----------------\n');
solve([
    'Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'
],
    [
        'Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30'
    ]
);
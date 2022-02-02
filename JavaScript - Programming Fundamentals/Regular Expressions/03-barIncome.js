function solve(input) {
    const pattern = /^%[A-Z][a-z]+%.*<\w+>.*\|\d+\|.*\d+\.?\d*\$$/;
    let total = 0;
    for (const x of input) {
        if (x == 'end of shift') break;
        if (pattern.test(x)) {
            const name = x.match(/%([A-Za-z]+)%/)[1];
            const purchase = x.match(/<(\w+)>/)[1];
            const quantity = Number(x.match(/\|(\d+)\|/)[1]);
            const price = Number(x.match(/(\d+\.?\d*)\$/)[1]);
            const totalPrice = quantity * price;
            console.log(`${name}: ${purchase} - ${totalPrice.toFixed(2)}`);
            total += totalPrice;
        }
    }
    console.log(`Total income: ${total.toFixed(2)}`);
}

//Test Cases
solve(['%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift']);
console.log('\n-----------------\n');
solve(['%InvalidName%<Croissant>|2|10.3$',
    '%Peter%<Gum>1.3$',
    '%Maria%<Cola>|1|2.4',
    '%Valid%<Valid>valid|10|valid20$',
    'end of shift']);
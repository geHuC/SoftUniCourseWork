function solve(input) {
    const pattern = /^>>[A-Z].*<<\d+\.?\d*!\d+/;
    let total = 0;
    let bough = [];
    for (const x of input) {
        if (x == 'Purchase') {
            console.log('Bought furniture:');
            if (bough.length > 0) console.log(bough.join('\n'));
            console.log(`Total money spend: ${total.toFixed(2)}`);
            break;
        }
        if (pattern.test(x)) {
            const name = x.match(/>>([A-Z].*)<</)[1];
            const price = Number(x.match(/<<(\d+\.?\d*)!/)[1]);
            const quantity = Number(x.match(/!(\d+)/)[1]);
            bough.push(name);
            total += price * quantity;
        }
    }
}

//Test Cases
solve(['>>Sofa<<312.23!3',
    '>>TV<<300!5',
    '>Invalid<<!5',
    'Purchase']);
console.log('\n-----------------\n');
solve(['>>Laptop<<312.2323!3',
    '>>TV<<300.21314!5',
    '>Invalid<<!5',
    '>>TV<<300.21314!20',
    '>>Invalid<!5',
    '>>TV<<30.21314!5',
    '>>Invalid<<!!5',
    'Purchase']);
console.log('\n-----------------\n');
solve(['>Invalid<<!4',
    '>Invalid<<!2',
    '>Invalid<<!5',
    'Purchase']);
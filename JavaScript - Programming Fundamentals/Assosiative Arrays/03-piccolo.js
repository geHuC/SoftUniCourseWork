function solve(input) {
    let park = new Set();
    input.forEach(x => {
        const [action, number] = x.split(', ');
        action == 'IN' ? park.add(number) : park.delete(number);
    });
    console.log(
        park.size > 0 ? [...park].sort((a, b) => a.localeCompare(b)).join('\n') : 'Parking Lot is Empty'
    );
}

//Test Cases
solve(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CB9876HH',
    'IN, CA2822UU']
);
console.log('\n-----------------\n');
solve(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'OUT, CA1234TA']
);
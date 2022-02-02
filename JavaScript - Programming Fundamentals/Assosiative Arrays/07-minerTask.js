function solve(input) {
    let storage = {}
    input.forEach((x, i) => {
        if (i % 2 == 0) {
            storage[x] ? storage[x] += Number(input[i + 1]) : storage[x] = Number(input[i + 1]);
        }
    });
    Object.keys(storage).forEach(x => console.log(`${x} -> ${storage[x]}`))
}

//Test Cases
solve([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17'
]);
console.log('\n-----------------\n');
solve([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
]);
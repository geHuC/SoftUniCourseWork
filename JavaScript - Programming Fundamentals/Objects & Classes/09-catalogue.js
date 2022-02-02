function solve(input) {
    let catalogue = {};
    input.forEach(x => {
        const char = x.charAt(0);
        const [name, quantity] = x.split(' : ');
        catalogue[char] ? catalogue[char].push(`${name}: ${quantity}`) : catalogue[char] = [`${name}: ${quantity}`];
    });
    Object.keys(catalogue).sort((a, b) => a.localeCompare(b)).forEach(x => {
        console.log(x);
        console.log(`  ${catalogue[x].sort((a, b) => a.localeCompare(b)).join(`\n  `)}`);
    });
}

//Test Cases
solve([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]);
console.log('\n-----------------\n');
solve([
    'Omlet : 5.4',
    'Shirt : 15',
    'Cake : 59'
]);
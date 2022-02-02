function solve(input) {
    input.forEach(x => {
        const y = Number(x.toString().split('').reverse().join(''));
        if (x == y) {
            console.log('true');
        } else {
            console.log('false');
        }
    });
}

//Test Cases
solve([123, 323, 421, 121]);
console.log('\n-----------------\n');
solve([32,2,232,1010]);
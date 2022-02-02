function solve(n) {
    for (let i = 0; i < n; i++) {
        console.log(`${n} `.repeat(n).trimEnd());
    }
}

//Test Cases
solve(3);
console.log('\n-----------------\n');
solve(7);
console.log('\n-----------------\n');
solve(2);
console.log('\n-----------------\n');
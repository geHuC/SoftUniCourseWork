function solve(n) {
    let sum = 1;
    for (let i = 2; i < n; i++) {
        if (n % i == 0) sum += i;
    }
    n === sum ? console.log('We have a perfect number!') : console.log('It\'s not so perfect.');
}

//Test Cases
solve(6);
console.log('\n-----------------\n');
solve(28);
console.log('\n-----------------\n');
solve(1236498);
console.log('\n-----------------\n');
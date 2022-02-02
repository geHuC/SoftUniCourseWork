function solve(a, b) {
    console.log((factorial(a)/factorial(b)).toFixed(2));

    function factorial(x) {
        if (x === 0 || x === 1) {
            return 1;
        }
        for (let i = x - 1; i >= 1; i--) {
            x = x * i;
        }
        return x
    }
}

//Test Cases
solve(5,2);
console.log('\n-----------------\n');
solve(6,2);
console.log('\n-----------------\n');
solve(3,3);
console.log('\n-----------------\n');
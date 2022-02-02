function solve(...params) {
    params.sort((a, b) => a - b);
    console.log(params[0]);
}

//Test Cases
solve(2, 5, 3);
console.log('\n-----------------\n');
solve(600, 342, 123);
console.log('\n-----------------\n');
solve(25, 21, 4);
console.log('\n-----------------\n');
solve(2, 2, 2);
console.log('\n-----------------\n');
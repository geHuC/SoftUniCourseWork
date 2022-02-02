function solve(a, b, c) {
    function sum(a, b) {
        return a + b;
    }
    function subtract(a, b) {
        return a - b;
    }
    
    console.log(subtract(sum(a, b), c));
}


//Test Cases
solve(23, 6, 10);
console.log('\n-----------------\n');
solve(1, 17, 30);
console.log('\n-----------------\n');
solve(42, 58, 100);
console.log('\n-----------------\n');
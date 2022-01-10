function triangleOfNumbers(n){
    for (let i = 1; i <= n; i++) {
        console.log(`${i} `.repeat(i).trimEnd());
    }
}

//Test Cases

triangleOfNumbers(3);
console.log('\n----------------------------------------\n');
triangleOfNumbers(5);
console.log('\n----------------------------------------\n');
triangleOfNumbers(6);
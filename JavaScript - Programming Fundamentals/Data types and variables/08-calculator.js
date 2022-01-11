function calc(n1, op, n2) {
    const operations = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => a / b,
    }

    console.log(operations[op](n1, n2).toFixed(2));
}

//Test Cases
calc(5,'+',10);
console.log('\n-----------------\n');
calc(25.5,'-',3);
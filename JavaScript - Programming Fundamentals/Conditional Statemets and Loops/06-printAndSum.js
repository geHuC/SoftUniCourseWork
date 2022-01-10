function printAndSum(start, end) {
    let numbers = [];
    let sum = 0;
    for (let i = start; i <= end; i++) {
        numbers.push(i);
        sum += i;
    }
    console.log(numbers.join(' '));
    console.log(`Sum: ${sum}`);
}

//Test Cases
printAndSum(5, 10);
console.log('\n----------------------------------------\n');
printAndSum(0, 26);
console.log('\n----------------------------------------\n');
printAndSum(50, 60);
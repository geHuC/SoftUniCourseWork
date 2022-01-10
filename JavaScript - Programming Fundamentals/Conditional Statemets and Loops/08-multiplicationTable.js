function multiplicationTable(number) {
    for (let i = 1; i < 11; i++) {
        console.log(`${number} X ${i} = ${number*i}`);
    }
}

//Test Cases
multiplicationTable(5);
console.log('\n----------------------------------------\n');
multiplicationTable(2);
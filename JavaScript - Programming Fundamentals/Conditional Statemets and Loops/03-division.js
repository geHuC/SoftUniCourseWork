function division(number) {
    let topDiv = null;
    switch (true) {
        case number % 10 === 0:
            topDiv = 10
            break;
        case number % 7 === 0:
            topDiv = 7
            break;
        case number % 6 === 0:
            topDiv = 6
            break;
        case number % 3 === 0:
            topDiv = 3
            break;
        case number % 2 === 0:
            topDiv = 2
            break;
    }
    topDiv
        ? console.log(`The number is divisible by ${topDiv}`)
        : console.log('Not divisible');
}

//Test Cases
division(30);
console.log('\n----------------------------------------\n');
division(15);
console.log('\n----------------------------------------\n');
division(12);
console.log('\n----------------------------------------\n');
division(1643);
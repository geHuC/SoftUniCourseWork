function sumDigits(input) {
    console.log(input.toString().split('').reduce((acc, cur) => acc += parseInt(cur), 0));
}

//Test Cases
sumDigits(245678);
console.log('\n-----------------\n');
sumDigits(97561);
console.log('\n-----------------\n');
sumDigits(543);
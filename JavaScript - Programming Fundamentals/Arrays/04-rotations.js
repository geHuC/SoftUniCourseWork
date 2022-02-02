function sum(array, rotations) {
    for (let i = 0; i < rotations % array.length; i++) {
        array.push(array.shift());
    }
    console.log(array.join(' '));
}

//Test Cases 
sum([51, 47, 32, 61, 21], 2);
console.log('\n-----------------\n');
sum([32, 21, 61, 1], 4);
console.log('\n-----------------\n');
sum([2, 4, 15, 31], 5);
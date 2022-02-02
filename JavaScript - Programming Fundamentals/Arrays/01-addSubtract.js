function sum(arr) {
    const modified = arr.map((x, i) => x % 2 === 0 ? x + i : x - i);
    console.log(modified);
    console.log(arr.reduce((a, b) => a + b, 0));
    console.log(modified.reduce((a, b) => a + b, 0));
}

//Test Cases 
sum([5, 15, 23, 56, 35]);
console.log('\n-----------------\n');
sum([-5, 11, 3, 0, 2]);
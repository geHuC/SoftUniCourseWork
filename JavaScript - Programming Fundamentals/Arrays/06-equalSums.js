function sum(array) {
    let index = null;
    for (let i = 0; i < array.length; i++) {
        let right = 0;
        let left = 0;
        for (let j = i + 1; j < array.length; j++) {
            right += array[j];
        }
        for (let k = 0; k < i; k++) {
            left += array[k];
        }
        if (right === left) index = i.toString();
    }
    console.log((index ? index : 'no'));
}

//Test Cases 
sum([1, 2, 3, 3]);
console.log('\n-----------------\n');
sum([1, 2]);
console.log('\n-----------------\n');
sum([1]);
console.log('\n-----------------\n');
sum([1, 2, 3]);
console.log('\n-----------------\n');
sum([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);
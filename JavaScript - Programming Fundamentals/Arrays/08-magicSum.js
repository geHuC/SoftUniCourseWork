function sum(array, sum) {
    for (let i = 0; i < array.length; i++) {
        for (let k = i + 1; k < array.length; k++) {
            if ((array[i] + array[k]) == sum) {
                console.log(`${array[i]} ${array[k]}`);
                break;
            }
        }
    }
}

function sum2(array, sum) {
    for (let i = 0; i < array.length; i++) {
        for (let k = 0; k < array.length; k++) {
            if (i == k) break;
            if ((array[i] + array[k]) == sum) console.log(`${array[k]} ${array[i]}`);
        }
    }
}

//Test Cases 
sum([1, 7, 6, 2, 19, 23], 8);
console.log('\n-----------------\n');
sum([14, 20, 60, 13, 7, 19, 8], 27);
console.log('\n-----------------\n');
sum([1, 2, 3, 4, 5, 6], 6);
function sum(array) {
    let maxNums = [];
    for (let i = 0; i < array.length; i++) {
        let isTop = true;
        for (let j = i+1; j < array.length; j++) {
            if(array[j] >= array[i]) isTop = false;
        }
        if(isTop) maxNums.push(array[i]);
    }
    console.log(maxNums.join(' '));
}

//Test Cases 
sum([1, 4, 3, 2]);
console.log('\n-----------------\n');
sum([14, 24, 3, 19, 15, 17]);
console.log('\n-----------------\n');
sum([41, 41, 34, 20]);
console.log('\n-----------------\n');
sum([27, 19, 42, 2, 13, 45, 48]);
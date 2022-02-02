function sum(array) {
    let longest = [];
    let current = [array[0]];
    for (let i = 1; i < array.length; i++) {
        if(array[i-1] == array[i]) {
            current.push(array[i])
        } else {
            current = [array[i]];
        }
        if(current.length > longest.length) longest = [...current];
    }
    console.log(longest.join(' '));
}

//Test Cases 
sum([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
console.log('\n-----------------\n');
sum([1, 1, 1, 2, 3, 1, 3, 3]);
console.log('\n-----------------\n');
sum([4, 4, 4, 4]);
console.log('\n-----------------\n');
sum([0, 1, 1, 5, 2, 2, 6, 3, 3]);
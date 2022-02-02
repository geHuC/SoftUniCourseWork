function sum(arr1, arr2) {
    arr1.forEach(x => {
        arr2.forEach(y => {
            if (x === y) console.log(x);
        })
    });
}

//Test Cases 
sum(['Hey', 'hello', 2, 4, 'Peter', 'e'], ['Petar', 10, 'hey', 4, 'hello', '2']);
console.log('\n-----------------\n');
sum(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '], ['s', 'o', 'c', 'i', 'a', 'l']);
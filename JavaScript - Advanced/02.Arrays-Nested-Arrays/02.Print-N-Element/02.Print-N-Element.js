function printElement(array, step){
    let toReturn = [];
    for (let index = 0; index < array.length; index += step) {
        toReturn.push(array[index]);
    }
    return toReturn;
}

// Test Cases
console.log(printElement(['5', '20', '31', '4', '20'], 2));
console.log(printElement(['dsa', 'asd', 'test', 'tset'], 2));
console.log(printElement(['1', '2', '3', '4', '5'], 6));
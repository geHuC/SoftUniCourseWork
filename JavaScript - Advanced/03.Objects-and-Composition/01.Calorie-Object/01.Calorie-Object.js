function createObject(input){
    let object = {};
    for (let i = 0; i < input.length; i += 2) {
        object[input[i]] = Number([input[i+1]]);
    }
    return object;
}

// Test Cases
createObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
createObject(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']);
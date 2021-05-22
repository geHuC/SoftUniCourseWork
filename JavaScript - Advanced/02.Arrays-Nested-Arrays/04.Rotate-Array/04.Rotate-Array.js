function rotateArray(data,rotations){
    for (let index = 0; index < rotations; index++) {
       data.unshift(data.pop());
    }
    console.log(data.join(' '));
}

//Test Cases
rotateArray(['1', '2', '3', '4'], 2);
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple'], 15);
function magicMatrices(matrix){
    let areEqual = true;
    let x = 0;
    for (let index = 0; index < matrix[0].length; index++) {
        const element = matrix[0][index];
        x+= element;
    }
    for (let row = 0; row < matrix.length; row++) {
        let rowSum = 0;
        for (let col = 0; col < matrix[row].length; col++) {
            rowSum += matrix[row][col];
            let colSum = 0;
            for (let index = 0; index < matrix.length; index++) {
                const element = matrix[index][col];
                colSum += element;
            }
            if(colSum !== x){
                areEqual = false;
            }
        }
        if (rowSum !== x){
            areEqual = false;
        }
    }
    return areEqual;
}

//Test Cases
console.log(magicMatrices(
    [[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
   ));
   console.log(magicMatrices(
    [[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]
   ));
   console.log(magicMatrices(
    [[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]
   ));
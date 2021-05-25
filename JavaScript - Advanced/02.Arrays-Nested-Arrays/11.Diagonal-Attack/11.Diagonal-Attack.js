function diagonalAttack(input){
    let matrix = [];
    input.forEach(x => matrix.push(x.split(' ')));
    let leftDiagonal = 0;
    let rightDiagonal = 0;
    for (let index = 0; index < matrix.length; index++) {
        leftDiagonal +=  parseInt(matrix[index][index]);
        rightDiagonal += parseInt(matrix[(matrix.length-1)-index][index]);
    }
    if(leftDiagonal === rightDiagonal){
        for (let row = 0; row < matrix.length; row++) {
            for (let col = 0; col < matrix[row].length; col++) {
                if(row !== col && col !== ((matrix.length -1) -row)){
                    matrix[row][col] = leftDiagonal;
                }    
            } 
        }
    }
    printMatrix();
    function printMatrix(){
        matrix.forEach(x => console.log(x.join(' ')));
    }
}

//Test Cases
diagonalAttack(
['5 3 12 3 1',
'11 4 23 2 5',
'101 12 3 21 10',
'1 4 5 2 2',
'5 22 33 11 1']
);
diagonalAttack(
['1 1 1',
'1 1 1',
'1 1 0']
);
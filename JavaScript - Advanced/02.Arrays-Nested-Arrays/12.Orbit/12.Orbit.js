function orbit(input){
    let matrix = [];
    let rows = input[0];
    let cols = input[1];
    let startRow = input[2];
    let startCol = input[3];
    let currentValue = 1;
    for (let index = 0; index < rows; index++) {
        matrix.push(new Array());
    }
    matrix[startRow][startCol] = currentValue;

    for (let ring = 1; ring < rows; ring++) {
        currentValue++;
        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
                if(row <= startRow + ring && row >= startRow - ring){
                    if(col <= startCol + ring && col >= startCol - ring){
                        if(isIn(row,startCol+ring)){
                            matrix[row][startCol+ring] = currentValue;
                        }
                        if(isIn(row,startCol-ring)){
                            matrix[row][startCol-ring] = currentValue;
                        }
                        if(isIn(startRow + ring,col)){
                            matrix[startRow + ring][col] = currentValue;
                        }
                        if(isIn(startRow - ring,col)){
                            matrix[startRow - ring][col] = currentValue;
                        }
                    }
                }
            }        
        }
        
    }
    printMatrix();
    function isIn(row, col){
        if(row <0 || row >= rows || col < 0 || col >= cols){
            return false;
        }
        return true;
    }
    function printMatrix(){
        matrix.forEach(x => console.log(x.join(' ')));
    }
}

//Test Cases
orbit([4, 4, 0, 0]);
orbit([5, 5, 2, 2]);
orbit([3, 3, 2, 2]);
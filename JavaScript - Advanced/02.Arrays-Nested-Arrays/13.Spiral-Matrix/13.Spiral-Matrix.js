function spiralMatrix(rows, cols){
    let direction = 'right';
    let row = 0;
    let col = 0;
    let matrix = Array.from(Array(rows),() => new Array(cols));
    for (let i = 0; i < rows*cols; i++) {
        matrix[row][col] = i+1;
        switch (direction){
            case 'right': 
            if(col + 1 >= cols || matrix[row][col+1]){
                direction = 'down';
                row++;
                break;
            }
            col++;
            break;
            case 'down':  
            if(row + 1 >= rows || matrix[row +1][col]){
                direction = 'left';
                col--;
                break;
            }
            row++;
            break;
            case 'left': 
            if(col - 1 < 0 || matrix[row][col-1]){
                direction = 'up';
                row--;
                break;
            }
            col--;
            break;
            case 'up': 
            if(row - 1 < 0 || matrix[row -1][col]){
                direction = 'right';
                col++;
                break;
            }
            row--;
            break;
        }
    }
    printMatrix();
    function printMatrix(){
        matrix.forEach(x => console.log(x.join(' ')));
    }
}

//Test Cases
spiralMatrix(3,3);
spiralMatrix(5,5);
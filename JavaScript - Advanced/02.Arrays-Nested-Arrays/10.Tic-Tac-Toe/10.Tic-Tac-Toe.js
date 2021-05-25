function ticTacToe(commands){
    let stage = 
    [[false, false, false],
    [false, false, false],
    [false, false, false]];
    
    let currentPlayer = 'X';
    let completedMoves = 0;
    for (let index = 0; index < commands.length; index++) {
        const command = commands[index];
        let coordinates = command.split(' ');
        let row = parseInt(coordinates[0]);
        let col = parseInt(coordinates[1]);
        if(markStage(row,col)){
            console.log(`Player ${currentPlayer} wins!`);
            printStage();
            return;
        }
        if(completedMoves == 9){
            break;
        }
    }
    console.log('The game ended! Nobody wins :(');
    printStage();

    // functions
    function markStage(row,col){
        if(stage[row][col] === false){
            stage[row][col] = currentPlayer;
            if(checkWin()){
                return true;
            }
            changePlayer();
            completedMoves++;
            return false;
        }
        console.log('This place is already taken. Please choose another!');
        return false;
    }
    function checkWin()
    {
        for (let row = 0; row < stage.length; row++) {

            if (stage[row][0] === stage[row][1] && stage[row][1] === stage[row][2] && stage[row][0] !== false){
                return true;
            }

            for (let col = 0; col < stage[row].length; col++) {
                if (stage[0][col] === stage[1][col] && stage[1][col] === stage[2][col] && stage[0][col] !== false){
                    return true;
                }
            }
        }
        if(stage[0][0] === stage[1][1] && stage[1][1]=== stage[2][2] && stage[0][0] !== false)
        {
            return true;
        }
        if(stage[0][2] === stage[1][1] && stage[1][1]=== stage[2][0] && stage[0][2] !== false)
        {
            return true;
        }
        return false;
    }
    function changePlayer(){
        if (currentPlayer === 'X'){
            currentPlayer = 'O';
        }else{
            currentPlayer = 'X';
        }
    }
    function printStage(){
        stage.forEach(x => console.log(x.join('\t')));
    }
}

//Test Cases
ticTacToe(["0 1",
"0 0",
"0 2", 
"2 0",
"1 0",
"1 1",
"1 2",
"2 2",
"2 1",
"0 0"]
);
ticTacToe(["0 0",
 "0 0",
 "1 1",
 "0 1",
 "1 2",
 "0 2",
 "2 2",
 "1 2",
 "2 2",
 "2 1"]
);
ticTacToe(["0 1",
"0 0",
"0 2",
"2 0",
"1 0",
"1 2",
"1 1",
"2 1",
"2 2",
"0 0"]
);
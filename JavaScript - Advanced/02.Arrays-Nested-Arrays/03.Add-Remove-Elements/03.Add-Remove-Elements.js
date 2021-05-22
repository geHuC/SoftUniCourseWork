function addRemoveElements(commands){
    let numContainer = [];
    let currentNumber = 0;
    for (let index = 0; index < commands.length; index++) {
        const element = commands[index];
        currentNumber++;
        switch(element){
            case 'add':
                numContainer.push(currentNumber);
                break;
            case 'remove':
                numContainer.pop();
                break;
        }
    }
    if (numContainer.length >0){
        numContainer.forEach(element => {
            console.log(element);
        });
    }else{
        console.log('Empty');
    }
}

//Test Cases
addRemoveElements(['remove', 'remove', 'remove']);
addRemoveElements(['add', 'add', 'remove', 'add', 'add']);
addRemoveElements(['add', 'add', 'add', 'add']);
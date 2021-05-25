function doubleSort(list){
    list.sort((a,b)=>{
    if(a.length === b.length){
        return a.localeCompare(b, 'en', { sensitivity: 'base' });
    }
    return a.length > b.length ? 1 : -1;
    });
    console.log(list.join('\n'));
}

//Test Cases
doubleSort(['alpha', 'beta', 'gamma']);
doubleSort(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);
doubleSort(['test', 'Deny', 'omen', 'Default']);
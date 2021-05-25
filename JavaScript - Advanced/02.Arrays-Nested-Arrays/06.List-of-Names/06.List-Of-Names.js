function listOfNames(list){
    list.sort((a,b) => a.localeCompare(b));
    for (let index = 0; index < list.length; index++) {
        const element = list[index];
        console.log(`${index+1}.${element}`);
    }
}

//Test Cases
listOfNames(["John", "Bob", "Christina", "Ema"]);
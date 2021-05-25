function numberSort(list){
    let sortedArray = [];
    let listLength = list.length;
    list.sort((a, b) => a - b);
    for (let index = 0; index < listLength; index++) {
        const element = list[index];
        if(index % 2 === 0)
        {
            sortedArray.push(list.shift());
        }else{
            sortedArray.push(list.pop());
        }
    }  
    return sortedArray;
}

//Test Cases
console.log(numberSort([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]))
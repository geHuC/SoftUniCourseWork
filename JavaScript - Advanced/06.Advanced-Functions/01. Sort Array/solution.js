function solve(arr,type){
    type == 'asc' ? arr.sort((a,b) => a - b) : arr.sort((a,b) => b - a);
    return arr;
}

//Test cases
console.log(solve([14, 7, 17, 6, 8], 'asc'));
console.log([14, 7, 17, 6, 8], 'desc');
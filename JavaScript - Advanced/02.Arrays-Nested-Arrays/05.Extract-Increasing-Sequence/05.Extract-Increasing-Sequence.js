function extractSequence(sequence){
    let biggestNum = sequence.shift();
    let nonDecreasingSequence = [];
    nonDecreasingSequence.push(biggestNum);
    for (let index = 0; index < sequence.length; index++) {
        const element = sequence[index];
        if (element >= biggestNum)
        {
            biggestNum = element;
            nonDecreasingSequence.push(biggestNum);
        }
    }
    return nonDecreasingSequence;
}

//Test Cases
console.log(extractSequence([1, 3, 8, 4, 10, 12, 3, 2, 24]));
console.log(extractSequence([1, 2, 3, 4]));
console.log(extractSequence([20, 3, 2, 15, 6, 1]));
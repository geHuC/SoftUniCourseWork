function solve(input) {
    const [sentence, ...words] = input;
    let toTest = sentence.split(' ').map(x => { return { word: x, count: 0 } });
    toTest.forEach(x => {
        words.forEach(y => {
            if (x.word == y) x.count += 1;
        })
    });
    toTest.sort((a, b) => b.count - a.count);
    toTest.forEach(x => {
        console.log(`${x.word} - ${x.count}`);
    })
}

//Test Cases
solve([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurances', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
]);
console.log('\n-----------------\n');
solve([
    'is the',
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence'
]);
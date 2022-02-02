function solve(word, string) {
    const pattern = new RegExp(`\\b${word}\\b`,'i');
    console.log(
        pattern.test(string) ? word : `${word} not found!`
    );
}

//Test Cases
solve('JavaScript',
    'JavaScript is the best programming language');
console.log('\n-----------------\n');
solve('python',
    'JavaScript is the best programming language');
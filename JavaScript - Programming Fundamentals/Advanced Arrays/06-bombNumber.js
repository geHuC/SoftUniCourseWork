function solve(sequence, criteria) {
    const [bomb, neighbours] = criteria;
    for (let i = 0; i < sequence.length; i++) {
        if (sequence[i] === bomb) {
            const start = i - neighbours;
            const end = i + neighbours;
            for (let j = start; j <= end; j++) {
                if (j >= 0 || j < sequence.length) {
                    sequence[j] = 'x';
                }
            }
        }
    }
    console.log(sequence.reduce((acc, x) => x != 'x' ? acc += Number(x) : acc, 0));
}

//Test Cases
solve([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);
console.log('\n-----------------\n');
solve([1, 4, 4, 2, 8, 9, 1], [9, 3]);
console.log('\n-----------------\n');
solve([1, 7, 7, 1, 2, 3], [7, 1]);
function solve(sequence, criteria) {
    const [slice, remove, find] = criteria;
    let occurences = sequence.slice(0, slice).slice(remove).reduce((acc, x) => x === find ? acc += 1 : acc, 0);
    console.log(`Number ${find} occurs ${occurences} times.`);
}

//Test Cases
solve([5, 2, 3, 3, 1, 6], [5, 2, 3]);
console.log('\n-----------------\n');
solve([7, 1, 5, 8, 2, 7], [3, 1, 5]);
function solve(input) {
    console.log(input.sort((a, b) => a.length - b.length == 0 ? a.localeCompare(b) : a.length - b.length).join('\n'));
}

//Test Cases
solve(['alpha', 'beta', 'gamma']);
console.log('\n-----------------\n');
solve(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);
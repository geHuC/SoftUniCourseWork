function solve(input) {
    const sorted = input.sort((a, b) => b - a);
    let result = [];
    for (let i = 0; i < sorted.length / 2; i++) {
        if (i != sorted.length - 1 - i) {
            result.push(sorted[i]);
            result.push(sorted[sorted.length - i - 1]);
        }
        else{
            result.push(sorted[i])
        }
    }
    console.log(result.join(' '));
}

//Test Cases
solve([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
console.log('\n-----------------\n');
solve([34, 2, 32, 45, 690, 6, 32, 7, 19, 47]);
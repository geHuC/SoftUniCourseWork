function solve(input) {
    let res = [];
    let prev = '';
    input.split('').forEach(x => {
        if (x != prev) {
            prev = x;
            res.push(x);
        }
    })
    console.log(res.join(''));
}

//Test Cases
solve('aaaaabbbbbcdddeeeedssaa');
console.log('\n-----------------\n');
solve('qqqwerqwecccwd');
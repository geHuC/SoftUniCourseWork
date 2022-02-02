function solve(first, second) {
    let result = [];
    let start = first.charCodeAt(0) + 1;
    let end = second.charCodeAt(0);
    if (start > end) {
        end = first.charCodeAt(0);
        start = second.charCodeAt(0) + 1;
    }
    for (let i = start; i < end; i++) {
        result.push(String.fromCharCode(i));
    }
    console.log(result.join(' '));
}

solve('a', 'd');
console.log('\n-----------------\n');
solve('#', ':');
console.log('\n-----------------\n');
solve('C', '#');
console.log('\n-----------------\n');
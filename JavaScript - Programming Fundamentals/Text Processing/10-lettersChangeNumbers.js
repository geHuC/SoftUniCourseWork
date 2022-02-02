function solve(input) {
    let operations = input.split(' ');
    let sum = 0;
    for (const x of operations) {
        if (x == '') continue;
        const firstOp = x.slice(0, 1).charCodeAt(0);
        const secondOp = x.slice(x.length - 1).charCodeAt(0);
        const num = Number(x.slice(1, x.length - 1));
        let iSum = 0;
        firstOp < 97 ? iSum += (num / (firstOp - 64)) : iSum += ((num * (firstOp - 96)));
        secondOp < 97 ? iSum -= (secondOp - 64) : iSum += (secondOp - 96);
        sum += iSum
    }
    console.log(sum.toFixed(2));
}

//Test Cases
// solve('A12b s17G');
console.log('\n-----------------\n');
solve('P34562Z q2576f   H456z');
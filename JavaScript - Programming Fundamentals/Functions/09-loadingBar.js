function solve(n) {
    let bar = ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.'];
    for (let i = 0; i < (n / 10); i++) {
        bar[i] = '%';
    }
    if(n == 100){
        console.log(`100% Complete!\n[${bar.join('')}]`);
    } else{
        console.log(`${n}% [${bar.join('')}]\nStill loading...`);
    }
}

//Test Cases
solve(30);
console.log('\n-----------------\n');
solve(50);
console.log('\n-----------------\n');
solve(100);
console.log('\n-----------------\n');
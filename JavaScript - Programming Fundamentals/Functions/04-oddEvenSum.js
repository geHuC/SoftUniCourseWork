function solve(n) {
    let odd = 0;
    let even = 0;
    n.toString().split('').forEach(x => {
        if (Number(x) % 2 == 0){
            even += Number(x);
        } else {
            odd += Number(x);
        }
    });
    console.log(`Odd sum = ${odd}, Even sum = ${even}`);
}

//Test Cases
solve(1000435);
console.log('\n-----------------\n');
solve(3495892137259234);
console.log('\n-----------------\n');
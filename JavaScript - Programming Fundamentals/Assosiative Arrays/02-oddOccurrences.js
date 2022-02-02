function solve(input) {
    const words = input.toLowerCase().split(' ');
    let count = new Map();
    words.forEach(x => {
        count.has(x) ? count.set(x, (count.get(x) + 1)) : count.set(x, 1);
    })
    let toReturn = '';
    count.forEach((v, k) => {
        if (v % 2 != 0) toReturn += ` ${k}`;
    })
    console.log(toReturn);
}

//Test Cases
solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
console.log('\n-----------------\n');
solve('Cake IS SWEET is Soft CAKE sweet Food');
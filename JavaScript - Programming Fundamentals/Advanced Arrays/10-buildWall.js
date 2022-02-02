function solve(input) {
    const costPerYard = 1900;
    const concretePerFeet = 195;
    let wall = input.map(x => Number(x));
    let concretePerDay = [];
    let totalConcrete = 0;
    const min = Math.min(...wall);
    for (let i = min; i < 30; i++) {
        let dailyConcrete = 0;
        for (let j = 0; j < wall.length; j++) {
            if (wall[j] < 30) {
                dailyConcrete += concretePerFeet;
                wall[j] += 1;
                totalConcrete += concretePerFeet;
            }
        }
        concretePerDay.push(dailyConcrete);
    }
    console.log(`${concretePerDay.join(', ')}\n${totalConcrete*costPerYard} pesos`);
}

//Test Cases
solve([21, 25, 28]);
console.log('\n-----------------\n');
solve([17]);
console.log('\n-----------------\n');
solve([17, 22, 17, 19, 17]);
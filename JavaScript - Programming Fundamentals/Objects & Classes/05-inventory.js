function solve(input) {
    let heroes = [];
    input.forEach(x => {
        const [name, level, ...items] = x.split(' / ');
        heroes.push({ name, level: Number(level), items });
    })
    heroes.sort((a, b) => a.level - b.level);
    heroes.forEach(x => console.log(`Hero: ${x.name}\nlevel => ${x.level}\nitems => ${x.items.join(', ')}`))
}

//Test Cases
solve([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]);
console.log('\n-----------------\n');
solve([
    'Batman / 2 / Banana, Gun',
    'Superman / 18 / Sword',
    'Poppy / 28 / Sentinel, Antara'
]);
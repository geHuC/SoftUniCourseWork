function solve(input) {
    let materials = { 'fragments': 0, 'motes': 0, 'shards': 0 };
    const formated = input.split(' ').map((x, i) => i % 2 == 0 ? Number(x) : x.toLowerCase());
    for (let i = 0; i < formated.length; i += 2) {
        const material = formated[i + 1];
        const quantity = formated[i];
        materials[material] ? materials[material] += quantity : materials[material] = quantity;
        if (materials[material] >= 250) {
            if (material == 'fragments') {
                materials[material] -= 250;
                console.log(`Valanyr obtained!`);
                break;
            } else if (material == 'shards') {
                materials[material] -= 250;
                console.log(`Shadowmourne obtained!`);
                break;
            } else if (material == 'motes') {
                materials[material] -= 250;
                console.log(`Dragonwrath obtained!`);
                break;
            }
        }
    }
    Object.entries(materials).filter(x => x[0] == 'fragments' || x[0] == 'shards' || x[0] == 'motes')
        .sort((a, b) => b[1] - a[1] == 0 ? a[0].localeCompare(b[0]) : b[1] - a[1])
        .forEach(material => {
            console.log(`${material[0]}: ${material[1]}`);
        });
    Object.entries(materials).filter(x => x[0] !== 'fragments' && x[0] !== 'shards' && x[0] !== 'motes')
        .sort((a, b) => a[0].localeCompare(b[0]))
        .forEach(material => {
            console.log(`${material[0]}: ${material[1]}`);
        });
}

//Test Cases
solve('3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards');
console.log('\n-----------------\n');
solve('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver');
function piramid(base, increment) {
    let materials = {
        stone: 0,
        marble: 0,
        lapis: 0,
        gold: 0
    }
    let rows = 0;
    let curRow = 0
    for (let i = base; i > 0; i = i - 2) {
        rows++;
        curRow++;
        if (i <= 2) {
            materials.gold = (i * i) * increment;
            break;
        }
        if (curRow === 5) {
            materials.lapis += ((4 * i) - 4) * increment;
            curRow = 0;
        } else {
            materials.marble += ((4 * i) - 4) * increment;
        }
        materials.stone += ((i * i) - ((4 * i) - 4)) * increment;
    }
    console.log(
        `Stone required: ${Math.ceil(materials.stone)}\nMarble required: ${Math.ceil(materials.marble)}\nLapis Lazuli required: ${Math.ceil(materials.lapis)}\nGold required: ${Math.ceil(materials.gold)}\nFinal pyramid height: ${Math.floor((rows * increment))}`
    );
}

//Test Cases
console.log('\n----------------------------------------\n');
piramid(11, 0.75);
console.log('\n----------------------------------------\n');
piramid(12, 1);
console.log('\n----------------------------------------\n');
piramid(23, 0.5)

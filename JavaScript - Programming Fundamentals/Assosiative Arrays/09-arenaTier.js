function solve(input) {
    let storage = {};
    const print = () => {
        Object.entries(storage).sort((a, b) => b[1].totalPower - a[1].totalPower).forEach(x => {
            console.log(`${x[0]}: ${x[1].totalPower} skill`);
            Object.keys(x[1].skills).sort((a, b) => x[1].skills[b] - x[1].skills[a] == 0 ? a.localeCompare(b) : x[1].skills[b] - x[1].skills[a]).forEach(skill => console.log(`- ${skill} <!> ${x[1].skills[skill]}`));
        });

    }
    const fight = (fighters) => {
        const [g1, g2] = fighters.split(' vs ');
        if (storage[g1] && storage[g2]) {
            for (const [skillG1, powerG1] of Object.entries(storage[g1].skills)) {
                for (const [skillG2, powerG2] of Object.entries(storage[g2].skills)) {
                    if (skillG1 == skillG2) {
                        powerG1 > powerG2 ? delete storage[g2] : delete storage[g1];
                        return;
                    }
                }
            }
        }
    }
    for (const x of input) {
        if (x == 'Ave Cesar') {
            print();
            break;
        }

        const [gladiator, skill, power] = x.split(' -> ');
        if (!skill) { fight(x); continue; }

        storage[gladiator] ? null : storage[gladiator] = { totalPower: 0, skills: {} };

        if (storage[gladiator].skills[skill]) {
            if (storage[gladiator].skills[skill] < Number(power)) {
                storage[gladiator].totalPower += (Number(power) - storage[gladiator].skills[skill]);
                storage[gladiator].skills[skill] = Number(power);
            }
        } else {
            storage[gladiator].skills[skill] = Number(power);
            storage[gladiator].totalPower += (Number(power));
        }
    }

}

//Test Cases
solve([
    'Peter -> BattleCry -> 400',
    'Alex -> PowerPunch -> 300',
    'Stefan -> Duck -> 200',
    'Stefan -> Tiger -> 250',
    'Ave Cesar'
]);
console.log('\n-----------------\n');
solve([
    'Peter -> Duck -> 400',
    'Julius -> Shield -> 150',
    'Gladius -> Heal -> 200',
    'Gladius -> Support -> 250',
    'Gladius -> Shield -> 250',
    'Peter vs Gladius',
    'Gladius vs Julius',
    'Gladius vs Maximilian',
    'Ave Cesar'
]);
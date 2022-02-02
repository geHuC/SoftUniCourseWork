function solve(input) {
    let storage = {};
    input.forEach(x => {
        const [name, draw] = x.split(': ');
        const cards = draw.split(', ');
        storage[name] ? storage[name] = new Set([...storage[name], ...cards]) : storage[name] = new Set(cards);
    });
    const type = { 'S': 4, 'H': 3, 'D': 2, 'C': 1, };
    const power = { '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10, 'J': 11, 'Q': 12, 'K': 13, 'A': 14 };
    Object.keys(storage).forEach(x => {
        let sum = 0;
        storage[x].forEach(card => {
            let [p, t, k] = card.split('');
            k ? p = `${p}${t}` : k = t;
            sum += power[p] * type[k];
        })
        console.log(`${x}: ${sum}`);
    })
}

//Test Cases
solve([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
]);
console.log('\n-----------------\n');
solve([
    'John: 2C, 4H, 9H, AS, QS',
    'Slav: 3H, 10S, JC, KD, 5S, 10S',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Slav: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'John: JD, JD, JD, JD'
]);
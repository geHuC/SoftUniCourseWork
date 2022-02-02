function solve(sequence, criteria) {
    for (let i = 0; i < criteria.length; i++) {
        const el = criteria[i];
        const [command, index, ...variables] = el.split(' ');
        const switcher = {
            'add': () => sequence.splice(index, 0, variables[0]),
            'addMany': () => sequence.splice(index, 0, ...variables),
            'contains': () => console.log(sequence.findIndex(x => x == index)),
            'remove': () => sequence.splice(index, 1),
            'shift': () => sequence = rotator(sequence, index),
            'sumPairs': () => sequence = sequence.reduce((acc, x, i) => i % 2 == 0 ? [...acc, (Number(x) + (i + 1 < sequence.length ? Number(sequence[i + 1]) : 0))] : acc, []),
            'print': () => console.log(`[ ${sequence.join(', ')} ]`)
        }
        switcher[command]();
        if (command === 'print') break;
    }
    function rotator(array, rotations) {
        for (let i = 0; i < rotations % array.length; i++) {
            array.push(array.shift());
        }
        return array;
    }
}

//Test Cases
solve([1, 2, 4, 5, 6, 7], ['add 1 8', 'contains 1', 'contains 3', 'print']);
console.log('\n-----------------\n');
solve([1, 2, 3, 4, 5], ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']);
console.log('\n-----------------\n');
solve([2, 2, 4, 2, 4], ["add 1 4", "sumPairs", "print"]);
console.log('\n-----------------\n');
solve([1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2], ["sumPairs",'print', "sumPairs", "addMany 0 -1 -2 -3", "print"]);
function solve(input) {
    let [train, max, ...commands] = input;
    train = train.split(' ').map(x => Number(x));
    max = Number(max);
    let actions = commands.map(x => {
        let y = x.split(' ');
        if (y[1]) {
            return { type: 'add', count: Number(y[1]) };
        } else {
            return { type: 'people', count: Number(y[0]) }
        }
    });
    for (let i = 0; i < actions.length; i++) {
        const element = actions[i];
        if (element.type == 'add') {
            train.push(element.count);
        } else {
            for (let j = 0; j < train.length; j++) {
                if (train[j] + element.count <= max) {
                    train[j] = train[j] + element.count;
                    break;
                }
            }
        }
    }
    console.log(train.join(' '));
}

//Test Cases
solve(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75']);
console.log('\n-----------------\n');
solve(['0 0 0 10 2 4',
    '10',
    'Add 10',
    '10',
    '10',
    '10',
    '8',
    '6']);
function solve(input) {
    let guest = new Set();
    let vip = new Set();
    let attending = false;
    for (let i = 0; i < input.length; i++) {
        if (input[i] == 'PARTY') { attending = true; continue; };
        if (!attending) {
            !isNaN(Number(input[i].charAt(0))) ? vip.add(input[i]) : guest.add(input[i]);
        } else {
            vip.delete(input[i]);
            guest.delete(input[i]);
        }
    }
    guest.size + vip.size !== 0 
    ?
    console.log(`${guest.size + vip.size}\n${[...vip, ...guest].join('\n')}`)
    : console.log(0);
}

//Test Cases
solve(['7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc'
]);
console.log('\n-----------------\n');
solve(['m8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'xys2FYzn',
    'MDzcM9ZK',
    'PARTY',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'm8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ'
]);
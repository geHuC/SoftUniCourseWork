function solve(input) {
    const participants = input[0].split(', ').reduce((acc, cur) => { return { ...acc, [cur]: 0 } }, {});
    const race = input.slice(1);
    for (const x of race) {
        if (x == 'end of race') break;
        const participant = [...x.matchAll(/[A-Za-z]/g)].reduce((acc, cur) => acc + cur[0], '');
        const score = [...x.matchAll(/[0-9]/g)].reduce((acc, cur) => acc + Number(cur[0]), 0);
        participants[participant] >= 0 ? participants[participant] += score : null;
    }
    const results = Object.entries(participants).sort((a, b) => b[1] - a[1]);
    console.log(`1st place: ${results[0][0]}\n2nd place: ${results[1][0]}\n3rd place: ${results[2][0]}`);
}

//Test Cases
solve(['George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@ ',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race']);
console.log('\n-----------------\n');
solve(['Ronald, Bill, Tom, Timmy, Maggie, Michonne',
    'Mi*&^%$ch123o!#$%#nne787) ',
    '%$$B(*&&)i89ll)*&) ',
    'R**(on%^&ald992) ',
    'T(*^^%immy77) ',
    'Ma10**$#g0g0g0i0e',
    'end of race']);
function solve(input) {
    const [tests, ...messages] = input;
    let attacked = [];
    let destroyed = [];
    for (let i = 0; i < Number(tests); i++) {
        const message = messages[i];
        const key = message.match(/[star]/ig).length;
        const decripted = message.split('').map(x => String.fromCharCode(x.charCodeAt(0) - key)).join('');
        const pattern = /.*@([A-Za-z]+).*:(\d+).*!([AD])!.*->(\d+).*/g;
        if (pattern.test(decripted)) {
            const name = decripted.match(/@([A-Za-z]+)/)[1];
            // const population = decripted.match(/:(\d+)/)[1];
            const type = decripted.match(/!([AD])!/)[1];
            // const soldiers = decripted.match(/->(\d+)/)[1];
            type == 'A' ? attacked.push(name) : destroyed.push(name)
        }
    }
    attacked.sort((a, b) => a.localeCompare(b));
    destroyed.sort((a, b) => a.localeCompare(b));
    console.log(`Attacked planets: ${attacked.length}`);
    attacked.length ? console.log(`-> ${attacked.join('\n-> ')}`) : null;
    console.log(`Destroyed planets: ${destroyed.length}`);
    destroyed.length ? console.log(`-> ${destroyed.join('\n-> ')}`) : null;
}

//Test Cases
solve(['2',
    ' STCDoghudd4=63333$D$0A53333',
    'EHfsytsnhf?8555&I&2C9555SR']);
console.log('\n-----------------\n');
solve(['3',
    "tt(''DGsvywgerx>6444444444%H%1B9444",
    'GQhrr|A977777(H(TTTT',
    'EHfsytsnhf?8555&I&2C9555SR']);
function solve(input) {
    const [fistWord, secondWord, replacer] = input;
    let key = replacer.toUpperCase().split('');
    let concat = `${fistWord}${secondWord}`.split('');
    for (let i = 0; i < concat.length; i++) {
        console.log();
        if (/[aieou]/i.test(concat[i])) {
            concat[i] = key[0];
            key.push(key.shift());
        }
    }
    console.log(`Your generated password is ${concat.reverse().join('')}`);
}

//Test Cases
solve([
    'ilovepizza', 'ihatevegetables',
    'orange'
]);
console.log('\n-----------------\n');
solve([
    'easymoneyeazylife', 'atleasttencharacters', 'absolute'
]);
console.log('\n-----------------\n');
solve([
    'areyousureaboutthisone', 'notquitebutitrustyou', 'disturbed'
]);
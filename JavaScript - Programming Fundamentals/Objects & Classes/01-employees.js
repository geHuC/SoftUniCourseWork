function solve(input) {
    const employees = input.map(x => { return { name: x, id: x.length } });
    employees.forEach(x => console.log(`Name: ${x.name} -- Personal Number: ${x.id}`));
}

//Test Cases
solve([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]);
console.log('\n-----------------\n');
solve([
    'Samuel Jackson',
    'Will Smith',
    'Bruce Willis',
    'Tom Holland'
]);
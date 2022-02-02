function solve(input) {
    let companies = {};
    input.forEach(x => {
        const [company, id] = x.split(' -> ');
        companies[company] ? null : companies[company] = new Set(); //cant create a new set with string turns it int set of chars
        companies[company].add(id);
    });
    Object.keys(companies).sort((a, b) => a.localeCompare(b)).forEach(company => {
        console.log(company);
        companies[company].forEach(x => console.log(`-- ${x}`));
    })
}

//Test Cases
solve([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
]);
console.log('\n-----------------\n');
solve([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
]);
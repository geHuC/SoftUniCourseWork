function solve(input) {
    let attendees = [];
    for (let i = 0; i < input.length; i++) {
        let [person, x, action] = input[i].split(' ');
        if (action == 'going!') {
            attendees.some(x => x == person) ? console.log(`${person} is already in the list!`) : attendees.push(person);
        } else {
            attendees.some(x => x == person) ? attendees = attendees.filter(x => x !== person) : console.log(`${person} is not in the list!`);
        }
    }
    console.log(attendees.join('\n'));
}

//Test Cases
solve(['Allie is going!',
    'George is going!',
    'John is not going!',
    'George is not going!']);
console.log('\n-----------------\n');
solve(['Tom is going!',
    'Annie is going!',
    'Tom is going!',
    'Garry is going!',
    'Jerry is going!']);
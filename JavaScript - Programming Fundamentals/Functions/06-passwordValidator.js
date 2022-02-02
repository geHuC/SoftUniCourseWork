function solve(password) {
    let errors = [];
    if (password.length > 10 || password.length < 6) errors.push('Password must be between 6 and 10 characters');
    if (!/^\w+$/.test(password)) errors.push('Password must consist only of letters and digits');
    if ((password.match(/\d/g) || []).length < 2) errors.push('Password must have at least 2 digits');
    errors.length > 0 ? console.log(errors.join('\n')) : console.log("Password is valid");
}

//Test Cases
solve('logIn');
console.log('\n-----------------\n');
solve('MyPass123');
console.log('\n-----------------\n');
solve('Pa$s$s');
console.log('\n-----------------\n');
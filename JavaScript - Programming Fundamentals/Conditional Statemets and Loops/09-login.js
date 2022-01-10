function login(input) {
    const [user, ...passwords] = input;
    const passwordToMatch = user.split('').reverse().join('');
    let tries = 0;
    for (let i = 0; i < passwords.length; i++) {
        tries++;
        if (passwords[i] === passwordToMatch) {
            console.log(`User ${user} logged in.`);
            break;
        } else {
            if (tries === 4) {
                console.log(`User ${user} blocked!`);
                break;
            } else {
                console.log('Incorrect password. Try again.');
            }
        }
    }
}

login(['Acer','login','go','let me in','recA']);
console.log('\n----------------------------------------\n');
login(['momo','omom']);
console.log('\n----------------------------------------\n');
login(['sunny','rainy','cloudy','sunny','not sunny']);

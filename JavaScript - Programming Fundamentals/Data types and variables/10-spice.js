function spice(amount) {
    let days = 0;
    let total = 0;
    for (let i = amount; i >= 100; i = i - 10) {
        days++;
        total += (i - 26);
    }
    if (total > 0) total -= 26;
    if (total < 0) total = 0;
    console.log(days);
    console.log(total);
}

spice(111);
console.log('\n-----------------\n');
spice(450);
console.log('\n-----------------\n');
spice(10);
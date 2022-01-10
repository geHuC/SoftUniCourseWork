function bitcoin(input) {
    const exchange = {
        btc: 11949.16,
        gold: 67.51
    }
    let totalBtc = 0;
    let dayOfBtc = null;
    let money = 0;

    for (let i = 0; i < input.length; i++) {
        if ((i + 1) % 3 === 0) {
            money += (input[i] - (input[i] * 0.3)) * exchange.gold;
        } else {
            money += input[i] * exchange.gold;
        }
        if (money >= exchange.btc) {
            if (!dayOfBtc) dayOfBtc = i + 1;
            let btc = Math.floor(money / exchange.btc)
            totalBtc += btc;
            money -= btc * exchange.btc;
        }
    }
    console.log(`Bought bitcoins: ${totalBtc}`);
    if (dayOfBtc) console.log(`Day of the first purchased bitcoin: ${dayOfBtc}`);
    console.log(`Left money: ${money.toFixed(2)} lv.`);
}


//Test Cases
bitcoin([100, 200, 300])
console.log('\n----------------------------------------\n');
bitcoin([50, 100])
console.log('\n----------------------------------------\n');
bitcoin([3124.15, 504.212, 2511.124])
console.log('\n----------------------------------------\n');
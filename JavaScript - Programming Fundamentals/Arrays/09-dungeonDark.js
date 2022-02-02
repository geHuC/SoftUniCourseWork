function solve([input]) {
    const actions = input.split('|').map(x => x.split(' '));
    let health = 100;
    let money = 0;
    for (let i = 0; i < actions.length; i++) {
        if (health <= 0) break;
        const [type, value] = actions[i];
        switch (type) {
            case 'potion':
                let healValue = Number(value);
                if (health + healValue > 100) {
                    healValue = 100 - health;
                    health = 100;
                } else {
                    health += healValue;
                }
                console.log(`You healed for ${healValue} hp.`);
                console.log(`Current health: ${health} hp.`);
                break;
            case 'chest':
                money += Number(value);
                console.log(`You found ${value} coins.`);
                break;
            default:
                health -= Number(value);
                if (health <= 0) {
                    console.log(`You died! Killed by ${type}.`);
                    console.log(`Best room: ${i + 1}`);
                } else {
                    console.log(`You slayed ${type}.`)
                }
                break;
        }
    }
    if (health > 0) console.log(`You've made it!\nCoins: ${money}\nHealth: ${health}`);
}

//Test Cases 
solve(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);
console.log('\n-----------------\n');
solve(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);
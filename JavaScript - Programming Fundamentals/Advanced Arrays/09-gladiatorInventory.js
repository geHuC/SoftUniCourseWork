function solve(input) {
    let [inventory, ...actions] = input;
    inventory = inventory.split(' ');
    for (let i = 0; i < actions.length; i++) {
        const [command, item] = actions[i].split(' ');
        const switcher = {
            'Buy': () => inventory.some(x => x == item) ? null : inventory.push(item),
            'Trash': () => inventory.some(x => x == item) ? inventory = inventory.filter(x => x != item) : null,
            'Repair': () => inventory.some(x => x == item) ? inventory.push(inventory.splice(inventory.indexOf(item), 1)[0]) : null,
            'Upgrade': () => {
                const [name, upgrade] = item.split('-');
                const index = inventory.findIndex(x => x == name);
                index >= 0 ? inventory.splice(index + 1, 0, `${name}:${upgrade}`) : null;
            }
        }
        switcher[command]();
    }
    console.log(inventory.join(' '));
}

//Test Cases
solve(['SWORD Shield Spear',
    'Buy Bag',
    'Trash Shield',
    'Repair Spear',
    'Upgrade SWORD-Steel']);
console.log('\n-----------------\n');
solve(['SWORD Shield Spear',
    'Trash Bow',
    'Repair Shield',
    'Upgrade Helmet-V']);
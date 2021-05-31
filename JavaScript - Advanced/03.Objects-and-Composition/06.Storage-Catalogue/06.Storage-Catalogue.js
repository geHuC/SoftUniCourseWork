function storageCatalogue(input){
    let data = input.sort();
    let category = '';
    let toReturn = '';
    category.in
    for (const entry of data) {
        if(entry[0] !== category){
            toReturn = toReturn + entry[0] + '\n';
            category = entry[0];
        }       
        toReturn = toReturn + '  ' + entry.split(' : ').join(': ') + '\n';
    }
    return toReturn;
}

//Test Cases
console.log(storageCatalogue(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']
));
console.log(storageCatalogue(['Banana : 2',
'Rubic\'s Cube : 5',
'Raspberry P : 4999',
'Rolex : 100000',
'Rollon : 10',
'Rali Car : 2000000',
'Pesho : 0.000001',
'Barrel : 10']
));
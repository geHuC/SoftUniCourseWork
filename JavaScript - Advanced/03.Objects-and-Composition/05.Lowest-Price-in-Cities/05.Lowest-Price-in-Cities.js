function lowestPrice(input){
    let products = {};
    let result = '';
    for (const data of input) {
        let [town,product,price] = data.split(' | ');
        products[product] ? products[product][town] = price : products[product] = {[town]: price};
    }
    for (const key in products) {
        let arr = Object.entries(products[key]).sort((a,b) => a[1] - b[1]);
        result += `${key} -> ${arr[0][1]} (${arr[0][0]})\n`;
    }
    return result.trim();
}

//Test Cases
console.log(lowestPrice(['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10']
));
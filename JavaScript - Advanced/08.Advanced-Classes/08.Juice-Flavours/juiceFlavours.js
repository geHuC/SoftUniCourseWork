function solution(input) {
    let quantityObj = {}
    let bottlesMap = new Map();
    for (const iterator of input) {
        let [name, quantity] = iterator.split(' => ');
        if(!quantityObj.hasOwnProperty(name)){
            quantityObj[name] = 0;
        }
        quantityObj[name] += Number(quantity);
        if(quantityObj[name] >= 1000){
            if(!bottlesMap.has(name)){
                bottlesMap.set(name,0);
            }
            let currBottles = Math.trunc(quantityObj[name] / 1000);
            let totalBottles = bottlesMap.get(name) + currBottles;
            bottlesMap.set(name,totalBottles);
            quantityObj[name] %= 1000;
        }
        
    }
    for (const [key,value] of bottlesMap.entries()) {
        console.log(`${key} => ${value}`);
    }
}
//Test Cases
solution(['Orange => 2000',
'Peach => 1432',
'Banana => 450',
'Peach => 600',
'Strawberry => 549'])
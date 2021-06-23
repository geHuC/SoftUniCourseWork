function solution(input) {
    let register = new Map();
    for (const iterator of input) {
        let [make,model,quantity] = iterator.split(' | ');
        if(!register.has(make)){
            register.set(make,new Map());
        }
        if(!register.get(make).has(model)){
            register.get(make).set(model,0);
        }
        let newQuantity = register.get(make).get(model) + Number(quantity);
        register.get(make).set(model,newQuantity);
    }
    for (const [make,modelMap] of register) {
        console.log(make);
        for (const [model,quantity] of modelMap) {
            console.log(`###${model} -> ${quantity}`);
        }
    }
}

//Test Cases
solution(['Audi | Q7 | 1000',
'Audi | Q6 | 100',
'BMW | X5 | 1000',
'BMW | X6 | 100',
'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C4 | 22',
'Citroen | C5 | 10']
)
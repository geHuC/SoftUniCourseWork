function calculatePrice(type,weight,ppkg){
    let cost = (ppkg * weight)/1000;
    let weightKG = weight/1000;
    console.log(`I need $${cost.toFixed(2)} to buy ${weightKG.toFixed(2)} kilograms ${type}.`);
}


//Test Cases
//calculatePrice('apple', 1563, 2.35);
//calculatePrice('orange', 2500, 1.80);
function cookingByNumbers(){
    let num = arguments[0];
    for (let i = 1; i <6; i++){
        switch(arguments[i]){
            case 'chop':
                num = num / 2;
                break;
            case 'dice':
                num = Math.sqrt(num);
                break;
            case 'spice':
                num += 1;
                break;
            case 'bake':
                num *= 3;
                break;
            case 'fillet':
                num = num - (0.2*num);
                break;
        }
        console.log(num)
    }
}

//Test Cases
//cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');
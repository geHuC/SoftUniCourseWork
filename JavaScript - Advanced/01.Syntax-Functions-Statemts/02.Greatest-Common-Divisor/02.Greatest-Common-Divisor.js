function greatestCommonDivisor(fist,second){
    let biggestNumber = 1;
    let ceiling = fist > second ? fist : second;

    //Very slow
    for (let i = 1; i < ceiling; i++){
        if( fist % i == 0 && second % i == 0) {
            biggestNumber = i;
        }
    }
    console.log(biggestNumber);
}

//Test Cases
greatestCommonDivisor(15,5);
greatestCommonDivisor(2154,458);
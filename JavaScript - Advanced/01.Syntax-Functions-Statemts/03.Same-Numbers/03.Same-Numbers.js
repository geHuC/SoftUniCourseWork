function sameNumbers(num){
    let sum = 0;
    let firstDigit = num % 10;
    let areEqual = true;
    
    while (num){
        let lastDigit = num % 10;
        sum += lastDigit;
        num = (num - lastDigit) / 10;
        if  (lastDigit != firstDigit){
            areEqual = false;
        }
    }
    console.log(areEqual)
    console.log(sum);
}


//Test Cases
sameNumbers(2222222);
sameNumbers(1234);
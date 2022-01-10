function leapYear(year){
    if(year % 4 === 0 && year % 100 !== 0){
        console.log('yes');
    }else if (year % 400 === 0){
        console.log('yes');
    } else{
        console.log('no');
    }
}

//Test cases
leapYear(1984);
console.log('\n----------------------------------------\n');
leapYear(2003);
console.log('\n----------------------------------------\n');
leapYear(4);
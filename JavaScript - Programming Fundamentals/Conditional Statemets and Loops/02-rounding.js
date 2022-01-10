function rounding(number, places) {
    console.log(parseFloat(number.toFixed(places > 15 ? 15 : places)));
}

//Test Cases
rounding('3.1415926535897932384626433832795,2');
console.log('\n----------------------------------------\n');
rounding('10.5,3');
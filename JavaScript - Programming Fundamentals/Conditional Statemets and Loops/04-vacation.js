function vacation(size, type, day) {
    const priceTable = {
        'Students': {
            'Friday': 8.45,
            'Saturday': 9.80,
            'Sunday': 10.46
        },
        'Business': {
            'Friday': 10.90,
            'Saturday': 15.60,
            'Sunday': 16
        },
        'Regular': {
            'Friday': 15,
            'Saturday': 20,
            'Sunday': 22.50
        }
    };
    let totalPrice = priceTable[type][day] * size;

    let discount = 0;
    if (type === 'Students' && size >= 30) {
        discount = totalPrice * 0.15;
    } else if (type === 'Business' && size >= 100) {
        discount = priceTable[type][day] * 10;
    } else if (type === 'Regular' && size >= 10 && size <= 20) {
        discount = totalPrice * 0.05;
    }

    console.log(`Total price: ${(totalPrice - discount).toFixed(2)}`);
}

//Test cases
vacation(30, "Students", "Sunday");
console.log('\n----------------------------------------\n');
vacation(40, "Regular", "Saturday");
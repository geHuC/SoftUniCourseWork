function roadRadar(speed, area){
    const dictionary ={
        motorway: 130,
        interstate: 90,
        city: 50,
        residential: 20
    };

    let speedLimit = dictionary[area];
    if (speedLimit>= speed){
        console.log(`Driving ${speed} km/h in a ${speedLimit} zone`)
    }else{
        let status ='reckless driving';
        let speedDifference = speed - speedLimit;
        if (speedDifference <= 40){
            status = 'excessive speeding';
        }
        if (speedDifference <= 20){
            status = 'speeding';
        }

        console.log(`The speed is ${speedDifference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
    }

}

//Test Cases
roadRadar(40,'city');
roadRadar(21,'residential');
roadRadar(120,'interstate');
roadRadar(200,'motorway');
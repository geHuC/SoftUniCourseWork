function carFactory(input){
    let car = {};
    let engine = {};
    let carriage = {};
    let wheels = [];
    car.model = input.model;
    carriage.type = input.carriage;
    carriage.color = input.color;
    if(input.power <= 200){
        engine.volume = 3500;
        engine.power = 200;
    }
    if(input.power <= 120){
        engine.volume = 2400;
        engine.power = 120;
    }
    if(input.power <= 90){
        engine.volume = 1800;
        engine.power = 90;
    }
    if(input.wheelsize %2 ===0){
        input.wheelsize = input.wheelsize-1;
    }
    wheels = new Array(4).fill(input.wheelsize);
    car.carriage = carriage;
    car.wheels = wheels;
    car.engine = engine;
    return car;
}

//Test Cases
carFactory({ model: 'VW Golf II',
power: 90,
color: 'blue',
carriage: 'hatchback',
wheelsize: 14 }
);
carFactory({ model: 'Opel Vectra',
power: 110,
color: 'grey',
carriage: 'coupe',
wheelsize: 17 }
);
function solve(input) {

    function getEngine(power) {

        const engines = [
            { power: 90, volume: 1800 },
            { power: 120, volume: 2400 },
            { power: 200, volume: 3500 }
        ]

        // let result;
        // for(let i = 0; i < engines.length; i++) {
        //     if(engines[i].power >= power) {
        //         result = engines[i];
        //         break;
        //     }
        // }
        // return result;
        return engines.find(el => el.power >= power);
    }

    function getCarriage(type, color) {
        return {type, color}
    }
    
    function getWheels(wheelSize) {
        let wheel = Math.floor(wheelSize) % 2 === 0 ? Math.floor(wheelSize) - 1 : Math.floor(wheelSize);
        let wheels = Array(4).fill(wheel);
        return wheels;
    }
    return {
        model: input.model,
        engine: getEngine(input.power),
        carriage: getCarriage(input.carriage, input.color),
        wheels: getWheels(input.wheelsize)
    }
}

console.log(solve({ model: 'Opel Vectra',
power: 110,
color: 'grey',
carriage: 'coupe',
wheelsize: 17 }));
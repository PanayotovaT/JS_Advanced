function solve(name, population, treasury) {

    let myObject = {
        name: name,
    };
    myObject.population = population;
    myObject.treasury = treasury;

    return myObject;
}
console.log(solve('Tortuga',
    7000,
    15000))
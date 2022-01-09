function solve(townsArray) {

    let towns = {}
    for (let town of townsArray) {
        let [city, population] = town.split(' <-> ');
        population =Number(population);

        if (towns.hasOwnProperty(city)) {
            population += towns[city];
        }
        towns[city] = population;
    }
    for (let [city, population] of Object.entries(towns)) {
        console.log(`${city} : ${population}`);
    }
}
// console.log(solve(['Sofia <-> 1200000',
// 'Montana <-> 20000',
// 'New York <-> 10000000',
// 'Washington <-> 2345000',
// 'Las Vegas <-> 1000000']));

solve(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']);
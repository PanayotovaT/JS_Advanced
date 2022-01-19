function solve(arr) {

    let result = arr
    .map((line) => line.split(' | '))
    .reduce((storage, cars) => {
        let [brand, model, quantity] = cars;

        if(!storage.has(brand)) {
            storage.set(brand, new Map());
        }
        if (!storage.get(brand).has(model)) {
            storage.get(brand).set(model, 0);
        }
        let value = Number(storage.get(brand).get(model));
        storage.get(brand).set(model, value + Number(quantity));
        return storage;
    }, new Map());
    let resultString = [];
    for(let [brand,cars] of result.entries()) {
        let result = `${brand}\n`;
       for(let [name, quantity] of cars.entries()) {
        result += `###${name} -> ${quantity}\n`;
    }
    resultString.push(result);
        
        
    }
   return resultString.join('');
}

console.log(solve(['Audi | Q7 | 1000',
'Audi | Q6 | 100',
'BMW | X5 | 1000',
'BMW | X6 | 100',
'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C4 | 22',
'Citroen | C5 | 10']));
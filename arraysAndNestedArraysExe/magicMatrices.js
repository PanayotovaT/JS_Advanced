function solve(array) {
    let rowSums = [];
    let colSums = [];

    for (let i = 0; i < array.length; i++) {
        let row = array[i];
        let sum = row.reduce((a, b) => a + b, 0);
        rowSums.push(sum);
    }

    for (let i = 0; i < array.length; i++) {
        let newRow = [];
        for (let y = 0; y < array.length; y++) {
            
            newRow.push(array[y][i])
        }
        let sum = newRow.reduce((a, b) => a + b, 0);
        colSums.push(sum);
    }
    return rowSums.concat(colSums).every((el, i, arr) => el === arr[0]);
}
console.log(solve([
    [11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]
]));
console.log(solve([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]
]));
console.log(solve([[1, 0, 0], [0, 0, 1], [0, 1, 0]]));
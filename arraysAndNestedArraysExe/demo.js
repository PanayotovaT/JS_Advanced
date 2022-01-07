function solve(array) {

    let rows = [];
    let rowsSum = [];
    let columns = [];
    let columnsSum = [];

    for (let i = 0; i < array.length; i++) {
        let row = array[i];
        rows.push(row);
        let sum = 0;
        sum = row.reduce((a, b) => a + b, 0);
        rowsSum.push(sum);
    }

    for(let i = 0; i < array.length; i++) {
        let column = [];
        let sum = 0;
        for(let y = 0; y < array.length; y++) {
            let el = array[y][i];
            column.push(el);
        }
        columns.push(column);
        sum = column.reduce((a, b) => a + b, 0);
        columnsSum.push(sum);
    }

    
    return {rows, rowsSum, columns, columnsSum}
}
console.log(solve([
    [1, 7, 13],
    [5, 8, 22],
    [11, 4, 6]
]));
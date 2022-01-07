let jaggedMatrix = [
    [4, 6, 3, 0],
    [2, 1, -2],
    [-5, 17],
    [7, 3, 9, 12]
];

for (let row of jaggedMatrix) {
    // for (let num of row) {
    //     console.log(num);
    // }
}

let result = jaggedMatrix.reduce(reduceMatrix);
console.log(result);
/**
 * @param {[]} acc
 * @param {[]} c
 */

function reduceMatrix(acc, c) {
    return acc.concat(c);
}

let result2 = jaggedMatrix.reduce((acc, c) => acc.concat(c));
console.log(result2);
function solve(x1, y1, x2, y2) {

    function getResult(x1, y1, x2, y2) {
        //sqrt((x_2 - x_1)^2 + (y_2 - y_1)^2)

        const distance  = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

        return Number.isInteger(distance) ? 'is valid' : 'is invalid'
    }

    return `{${x1}, ${y1}} to {0, 0} ${getResult(x1, y1, 0, 0)}\n{${x2}, ${y2}} to {0, 0} ${getResult(x2, y2, 0, 0)}\n{${x1}, ${y1}} to {${x2}, ${y2}} ${getResult(x1, y1, x2, y2)}`
}

console.log(solve(3, 0, 0, 4));
console.log(solve(2, 1, 1, 1));
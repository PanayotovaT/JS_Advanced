function solve(array) {

    return array.reduce(function (result, current, index, initialArray) {
        if (current >= result[result.length - 1] || result.length === 0) {
            result.push(current);
            return result;
        }
        return result;
    }, [])

}

console.log(solve([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]))
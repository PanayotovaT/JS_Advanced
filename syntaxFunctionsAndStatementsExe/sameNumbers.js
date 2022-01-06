function solve(number) {

    const string = number.toString();
    let isSame = true;
    let sum = 0

    for (let i = 0; i < string.length; i++) {
        let next = string[i + 1]
        if (string[i] !== string[i + 1] && next !== undefined) {
            isSame = false;
        }
        sum += Number(string[i]);
    }
    return `${isSame}\n${sum}`

}
console.log(solve(2222222));
console.log(solve(1234));
function solve(...params) {

    let total = params.reduce((a, c) => a + c.length, 0);

    console.log(total);
    console.log(Math.floor(total / params.length));

}
solve('chocolate', 'ice cream', 'cake', 'hi');
solve('pasta', '5', '22.3')
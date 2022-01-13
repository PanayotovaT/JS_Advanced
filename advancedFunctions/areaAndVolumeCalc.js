function figureArea(area, vol, dataAsJSON) {

    const figures = JSON.parse(dataAsJSON);
    // const result = [];

    // for(let figure of figures) {
    //     const output = {
    //         area: area.call(figure),
    //         volume: vol.call(figure)
    //     }
    //     result.push(output)
    // }
    // return result;
    const result = figures.map(figure => ({ area: area.call(figure),
        volume: vol.call(figure)}))

    return result;
}

const example1 = `[
    { "x": "1", "y": "2", "z": "10" },
    { "x": "7", "y": "7", "z": "10" },
    { "x": "5", "y": "2", "z": "10" }
]`;
console.log(figureArea(area, vol, example1));

function area() {
    return Math.abs(this.x * this.y);
};

function vol() {
    return Math.abs(this.x * this.y * this.z);
};
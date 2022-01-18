class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    get diameter() {
        return this.radius * 2;
    }

    set diameter(value) {

        if (typeof value !== 'number') {
            throw new Error('Type is incorrect')
        }
        this.radius = value / 2;
    }

    get area() {
        return this.radius ** 2 * Math.PI;
    }
}

// const myCircle = new Circle(3);
// console.log(myCircle.diameter);
// myCircle.diameter = 8;
// console.log(`Radius: `,myCircle.r);
// console.log(myCircle.area);

let c = new Circle(2);
console.log(`Radius: ${c.radius}`);
console.log(`Diameter: ${c.diameter}`);
console.log(`Area: ${c.area}`);
c.diameter = 1.6;
console.log(`Radius: ${c.radius}`);
console.log(`Diameter: ${c.diameter}`);
console.log(`Area: ${c.area}`);
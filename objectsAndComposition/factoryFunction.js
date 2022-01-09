function createRect(width, height) {

    const myRect = { width, height};
    myRect.getArea = () => {
        return myRect.width * myRect.height;
    }
    return myRect;

}
let myRect = createRect(7, 13);

// console.log(createRect(7, 13).getArea());
console.log(myRect.getArea());
let getArea = myRect.getArea;
console.log(getArea());
myRect = createRect(7, 10);
console.log(myRect.getArea());


function solve(steps, footPrint, SpeedKmH ) {

    const speed = SpeedKmH * 1000 /3600;
    const distance = steps * footPrint;
    const rest = Math.floor(distance / 500) * 60;
    const time = distance / speed + rest; 
    const hours = Math.floor(time / 3600).toString();
    const minutes = Math.floor((time - hours * 3600)/ 60).toString();
    const seconds = Math.round(time - hours * 3600 - minutes * 60).toString();

    return `${hours.padStart(2, 0)}:${minutes.padStart(2, 0)}:${seconds.padStart(2, 0)}`
}
console.log(solve(4000, 0.60, 5));
console.log(solve(2564, 0.70, 5.5));
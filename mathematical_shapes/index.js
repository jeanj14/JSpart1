let side = 9;
let diagonal = side * Math.sqrt(2);
console.log("Diagonal = " + diagonal.toFixed(2));

let a = 5, b = 6, c = 7;
let s = (a + b + c) / 2;
let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
console.log("Area = " + area.toFixed(2));

let radius = 4;
let circumference = 2 * Math.PI * radius;
let circleArea = Math.PI * Math.pow(radius, 2);
console.log("Circumference = " + circumference.toFixed(2));
console.log("Area = " + circleArea.toFixed(2));
const [a1, b1, c1, a2, b2, c2] = [1, 3, 2, 9, 2, 7];
const det1 = c1*b2 - c2*b1;
const det2 = a1*c2 - a2*c1;
const det = a1*b2 -a2*b1;

let x1 = det1/det;
let x2 = det2/det;

console.log('x1 = '+x1+', x2 = '+x2);

const pow = (a, b) => {return Math.pow(a, b);}
let pi = pow.bind(null, Math.PI);
let exp = pow.bind(null, Math.E);
let x = pow.bind(null, 7);
console.log(pi(2));
console.log(exp(2));
console.log(x(2));

const curry = (b) => { return (a) => { return pow(a, b); }; }
let y = curry(2);
let i = curry(3);
let j = curry(4);
console.log(y(4));
console.log(i(2));
console.log(j(4));

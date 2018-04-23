const add1 = (a, b) => (b == 0) ? a : add1(++a, --b);
console.log(add1(10,5));

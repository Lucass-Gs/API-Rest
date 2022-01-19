let line = [6, 6, 6, 6];

const reducer = (prev, current) => prev + current;

console.log(line.reduce(reducer) - 3);
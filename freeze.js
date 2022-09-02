const bottle = { color: 'yello', price: 50, isCleaned: true, capacity: 1 };
const keys = Object.keys(bottle);
// console.log(keys);
const values = Object.values(bottle);
// console.log(values);

const pair = Object.entries(bottle);
// console.log(pair)

console.log(bottle);
// delete bottle.isCleaned;
Object.freeze(bottle);
bottle.price = 1500;
bottle.height = 12;
console.log(bottle);

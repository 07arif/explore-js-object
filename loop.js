const numbers = [12, 25, 65, 73, 54];
/*
for (const number of numbers) {
    console.log(number);
}
*/

const bottle = { color: 'yello', price: 50, isCleaned: true, capacity: 1 };
const keys = Object.keys(bottle);
console.log(keys);
/*
3 way to read object properties
1.bottle.color
2. bottle['color']
3.bottle[key]
*/
//for of loop
for (const key of keys) {
    // console.log(key, bottle[key]);
}

// for in loop
for (const key in bottle) {
    console.log(key, bottle[key]);
}
//advanced
const pair = Object.entries(bottle)
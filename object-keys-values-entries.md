Object.keys(obj), Object.values(obj), and Object.entries(obj) are methods for iterating over plain objects in JavaScript. These are similar to map.keys(), map.values(), and map.entries(), with the difference that they must be called with the object as an argument (Object.keys(obj)) instead of on the object itself (obj.keys()).

These methods return an array, not just an iterable. They ignore properties with Symbol as keys, but you can use Object.getOwnPropertySymbols or Reflect.ownKeys(obj) to get symbolic keys.

Object.keys(obj): Returns array of keys.
Object.values(obj): Returns array of values.
Object.entries(obj): Returns array of key-value pairs.

let user = { name: "John", age: 30 };
Object.keys(user); // ["name", "age"]
Object.values(user); // ["John", 30]
Object.entries(user); // [ ["name","John"], ["age",30] ]
You can loop over property values:


for (let value of Object.values(user)) {
alert(value); // John, then 30
}
Objects lack some array methods like map, filter, etc. You can use Object.entries and Object.fromEntries to apply them:


let prices = { banana: 1, orange: 2, meat: 4 };
let doublePrices = Object.fromEntries(
Object.entries(prices).map(entry => [entry[0], entry[1] * 2])
);
alert(doublePrices.meat); // 8
The code above converts object to array, doubles the prices, then turns it back into an object.
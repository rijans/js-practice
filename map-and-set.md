Map

A Map is a collection of keyed data items, similar to an Object, but allows keys of any type. It has methods such as set(key, value), get(key), has(key), delete(key), clear(), and a property size. Unlike objects, keys are not converted to strings. Any type of key is possible. Map can also use objects as keys.

Example:

let map = new Map();
map.set('1', 'str1');   // a string key
map.set(1, 'num1');     // a numeric key
map.set(true, 'bool1'); // a boolean key
alert( map.get(1) );    // 'num1'
alert( map.get('1') );  // 'str1'
alert( map.size );      // 3
Set

A Set is a collection of unique values (without keys), where each value may occur only once. It has methods such as add(value), delete(value), has(value), clear(), and a property size. The main feature is that repeated calls of set.add(value) with the same value don’t do anything. That’s the reason why each value appears in a Set only once.

Example:

let set = new Set();
let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };
set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);
alert( set.size ); // 3
for (let user of set) {
alert(user.name); // John (then Pete and Mary)
}
Object.entries and Object.fromEntries

Object.entries(obj) returns an array of key/value pairs for an object in the format that Map needs. Object.fromEntries does the reverse: given an array of [key, value] pairs, it creates an object from them.

Example:

let obj = {
name: "John",
age: 30
};
let map = new Map(Object.entries(obj));
alert( map.get('name') ); // John

let prices = Object.fromEntries([
['banana', 1],
['orange', 2],
['meat', 4]
]);
alert(prices.orange); // 2
Iteration over Map and Set

For looping over a map, there are 3 methods: map.keys(), map.values(), map.entries(). The iteration goes in the same order as the values were inserted. Map preserves this order, unlike a regular Object. For Set, we can loop over a set either with for..of or using forEach.

Example:

let set = new Set(["oranges", "apples", "bananas"]);
for (let value of set) alert(value);
set.forEach((value, valueAgain, set) => {
alert(value);
});

**Map and Set are iterables.

WeakMap and WeakSet in JavaScript provide a way to store object references that don't prevent garbage collection. They are often used as secondary data structures, allowing associated data to be automatically cleaned up when no other references to the objects exist.

Regular Map and Array structures keep objects in memory as long as the structure itself is alive:


let john = { name: "John" };
let array = [ john ];
john = null;  // Object 'john' still exists in the array
WeakMap, however, doesn't prevent garbage collection of keys:


let weakMap = new WeakMap();
let obj = {};
weakMap.set(obj, "ok");
obj = null;  // 'obj' is removed from memory and 'weakMap'
The keys in a WeakMap have to be objects. If the object key is only found in WeakMap, it's automatically deleted from memory and WeakMap. However, WeakMap doesn't support iteration, keys(), values(), and entries() methods due to technical reasons. It only supports set(key, value), get(key), delete(key), and has(key) methods.

WeakSet works similarly, storing objects while they're reachable and removing them when they aren't. However, it's used for "yes/no" facts, like tracking if a user has visited a site:


let visitedSet = new WeakSet();
let john = { name: "John" };
visitedSet.add(john);
john = null;  // 'john' will be removed from 'visitedSet'
The limitations of WeakMap and WeakSet are the lack of iteration and inability to retrieve all content. They mainly serve as additional storage, allowing objects to be automatically removed by the garbage collector once they're not reachable.

WeakMap is Map-like collection that allows only objects as keys and removes them together with associated value once they become inaccessible by other means.

WeakSet is Set-like collection that stores only objects and removes them once they become inaccessible by other means.
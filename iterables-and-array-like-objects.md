Iterables and array-like Objects

Iterables are objects that implement the Symbol.iterator method, as described above.
Array-likes are objects that have indexes and length, so they look like arrays. (Strings are both iterable (for..of works on them) and array-like (they have numeric indexes and length).)

Details:
Iterable objects in JavaScript are generalizations of arrays that can be used in a for..of loop, including arrays, strings, and any object that implements the method named Symbol.iterator.

The Symbol.iterator method returns an iterator object, which must contain a next() method that returns an object of the form {done: Boolean, value: any}; done:true means the loop is finished, otherwise, value is the next value.

Implementing the iterable protocol on an object involves defining a Symbol.iterator function on it, which returns an object with a next() method. Example:

let range = {from: 1, to: 5};
range[Symbol.iterator] = function() { return { /* iterator object */}; };

Iterables separate the concerns of iteration from the object being iterated over, and it's possible to have infinite iterators.

In addition to iterables, JavaScript also has array-like objects that have indexes and length, but may not be iterable.

Array.from() is a method that creates a "real" Array from an iterable or array-like object, allowing array methods to be used on it.
Example of using Array.from():
let arr = Array.from({0: "Hello", 1: "World", length: 2}); // ["Hello", "World"]

Array.from() can also accept a mapping function as a second argument to transform elements during conversion.

String is both iterable (for..of works on them) and array-like (they have numeric indexes and length).

Most built-in methods assume they work with iterables or array-likes instead of "real" arrays, as it's more abstract.
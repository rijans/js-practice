Here are the key points and examples from the JavaScript Arrays page:

Array Declaration: Arrays in JavaScript are used to store multiple values in a single variable. They can be declared in
two ways:

Using the Array object: let arr = new Array();
Using square brackets: let arr = [];
Example: let fruits = ["Apple", "Orange", "Plum"];
Accessing Array Elements: Elements in an array can be accessed using their index (starting from 0).
Example: alert(fruits[0]); // Apple

Modifying Array Elements: Elements in an array can be replaced or new elements can be added using their index.
Example: fruits[2] = 'Pear'; // now ["Apple", "Orange", "Pear"]

Array Length: The total count of elements in an array is its length.
Example: alert(fruits.length); // 3

Mixed Type Arrays: Arrays can store elements of any type.
Example: let arr = [ 'Apple', { name: 'John' }, true, function() { alert('hello'); } ];

**IMPORTANT**
STACK: Last item is removed/added. Last-in-first-out (LIFO). push() and pop() methods are used to add and remove elements.
ARRAY: First item is removed/added. First-in-first-out (FIFO). shift() and unshift() methods are used to add and remove elements.

Arrays in JavaScript can work both as a queue and as a stack.

Array Methods: Arrays have several methods to manipulate, add, or remove elements. Some of them are:

push(): Adds new elements to the end of an array.
pop(): Removes the last element from an array.
shift(): Removes the first element from an array.
unshift(): Adds new elements to the beginning of an array.
Multidimensional Arrays: Arrays can have items that are also arrays, useful for storing matrices.
Example:

let matrix = [  [1, 2, 3],
[4, 5, 6],
[7, 8, 9]
];
alert(matrix[1][1]); // 5, the central element
Array Comparison: Arrays in JavaScript shouldn't be compared with operator ==. Instead, compare them item-by-item in a
loop or using iteration methods.

Array Truncation: If we decrease the length of an array manually, the array is truncated. This process is irreversible.
Example:

let arr = [1, 2, 3, 4, 5];
arr.length = 2; // truncate to 2 elements
alert(arr); // [1, 2]
Array Loops: Arrays can be looped over using various methods like for, for..of, and for..in (though for..in is not
recommended for arrays).

Remember, arrays are special structures to work with ordered data. They provide special methods for that. Arrays are
carefully tuned inside JavaScript engines to work with contiguous ordered data, so use them this way. If you need
arbitrary keys, you probably require a regular object {}.
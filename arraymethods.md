https://javascript.info/array-methods

For, simple Add/remove items, we already know:

arr.push(...items) – adds items to the end,
arr.pop() – extracts an item from the end,
arr.shift() – extracts an item from the beginning,
arr.unshift(...items) – adds items to the beginning.

*splice*
The arr.splice method is a swiss army knife for arrays. It can do everything: insert, remove and replace elements:
arr.splice(start[, deleteCount, elem1, ..., elemN]);

When deleting an item from an array, we can use delete because it's an object, but it leaves a hole in the array, with
having empty slot in the place of the removed element. So, better to use splice for that.

**Remove**
arr.splice(index[, deleteCount])

```javascript
let arr = ["I", "study", "JavaScript"];
let removed = arr.splice(1, 1); // from index 1 remove 1 element
alert(arr); // ["I", "JavaScript"]
alert(removed); // ["study"]
```

**Remove and replace**

```javascript
let arr = ["I", "study", "JavaScript", "right", "now"];
// remove 3 first elements and replace them with another
let removed = arr.splice(0, 3, "Let's", "dance");
alert(arr) // now ["Let's", "dance", "right", "now"]
alert(removed); // ["I", "study", "JavaScript"] <-- array of removed elements
```

**Insert or add**
The splice method is also able to insert the elements without any removals. For that we need to set deleteCount to 0:

```javascript
let arr = ["I", "study", "JavaScript"];

// from index 2
// delete 0
// then insert "complex" and "language"
arr.splice(2, 0, "complex", "language");

alert(arr); // "I", "study", "complex", "language", "JavaScript"
```

**Negative indexes**
Here and in other array methods, negative indexes are allowed. They specify the position from the end of the array, like
here:

```javascript
let arr = [1, 2, 5];

// from index -1 (one step from the end)
// delete 0 elements,
// then insert 3 and 4
arr.splice(-1, 0, 3, 4);

alert(arr); // 1,2,3,4,5
```

**slice**
The syntax is:
arr.slice([startIndex], [endIndex])
Here startIndex is inclusive and endIndex is exclusive (means end item will not be included).
It returns a new array copying to it all items from index start to end (not including end). Both start and end can be
negative, in that case position from array end is assumed.

```javascript
let arr = ["t", "e", "s", "t"];

alert(arr.slice(1, 3)); // e,s (copy from 1 to 3)
alert(arr.slice(-2)); // s,t (copy from -2 till the end)
```

Notes:

1. slice does not modify the array, but returns a new one.
2. If we omit the second argument, then slice goes till the end of the array.
3. Negative values for start/end are allowed, they specify positions from the array end.
4. **The second parameter in the slice() method specifies the ending index, but it does not include the element at the
   ending index.

**concat**
arr.concat(arg1, arg2...) accepts any number of arguments – either arrays or values or mix of them, and returns the new
array that includes the values from arr, then arg1, arg2 etc.

```javascript
let arr = [1, 2];

// create an array from: arr and [3,4]
alert(arr.concat([3, 4])); // 1,2,3,4

// create an array from: arr and [3,4] and [5,6]
alert(arr.concat([3, 4], [5, 6])); // 1,2,3,4,5,6

// create an array from: arr and [3,4], then add values 5 and 6
alert(arr.concat([3, 4], 5, 6)); // 1,2,3,4,5,6
```

Note: Normally, it only copies elements from arrays. Other objects, even if they look like arrays, are added as a whole:

```javascript
let arr = [1, 2];

let arrayLike = {
    0: "something",
    length: 1
};

alert(arr.concat(arrayLike)); // 1,2,[object Object]
```

But if the object has a special Symbol.isConcatSpreadable property, then it’s treated as an array by concat:

```javascript
let arr = [1, 2];

let arrayLike = {
    0: "something",
    1: "else",
    [Symbol.isConcatSpreadable]: true,
    length: 2
};

alert(arr.concat(arrayLike)); // 1,2,something,else
```

**Searching in array**
arr.indexOf(item, from) – looks for item starting from index from, and returns the index where it was found, otherwise
-1.
arr.includes(item, from) – looks for item starting from index from, returns true if found.
arr.lastIndexOf(item, from) – same, but looks from right to left.
arr.find(function) – looks for a single (first) element that makes the function return true.
arr.findIndex(function) – looks for a single (first) element that makes the function return true, returns its index or
-1 if not found.
arr.findLastIndex(function) – same as findIndex, but looks from right to left.
arr.filter(function) – filter elements through the function, returns matched values in a new array.

Note:
The includes method handles NaN correctly
A minor, but noteworthy feature of includes is that it correctly handles NaN, unlike indexOf:

const arr = [NaN];
alert( arr.indexOf(NaN) ); // -1 (wrong, should be 0)
alert( arr.includes(NaN) );// true (correct)
That’s because includes was added to JavaScript much later and uses the more up to date comparison algorithm internally.

**Transform an array**
arr.map(function) – calls the function for each element of the array and returns the array of results.
arr.sort(function) – sorts the array in-place, then returns it.
Notes with arr.sort():

1. By default, the sort() method sorts the values as strings in alphabetical and ascending order.
2. This works well for strings ("Apple" comes before "Banana"). However, if numbers are sorted as strings, "25" is
   bigger than "100", because "2" is bigger than "1".
3. Because of this, the sort() method will produce an incorrect result when sorting numbers.
4. You can fix this by providing a "compare function" (See below).
5. The purpose of the compare function is to define an alternative sort order.
6. The compare function should return a negative, zero, or positive value, depending on the arguments, like:
   function(a, b){return a-b}
7. When the sort() method compares two values, it sends the values to the compare function, and sorts the values
   according to the returned (negative, zero, positive) value.
8. If the result is negative a is sorted before b.
9. If the result is positive b is sorted before a.
10. If the result is 0 no changes are done with the sort order of the two values.
11. Example:
    ```javascript
    let arr = [ 1, 2, 15 ];
    // the method reorders the content of arr (and returns it)
    arr.sort();
    alert( arr );  // 1, 15, 2
    ```
12. The items are sorted as strings by default. But we can change the order by providing a comparator function.
13. The comparator function looks at pairs of elements (a, b), and returns:
    a negative number if a should be before b.
    a positive number if a should be after b.
    zero if they are equivalent.
14. For instance, to sort as numbers, we need to return a positive number when a is greater than b and a negative number
    when a is less than b.
15. Like this:
    ```javascript
    function compareNumeric(a, b) {
      if (a > b) return 1;
      if (a == b) return 0;
      if (a < b) return -1;
    }

    let arr = [ 1, 2, 15 ];

    arr.sort(compareNumeric);

    alert(arr);  // 1, 2, 15
    ```
16. The compare function can be written as a short function declaration:
    ```javascript
    arr.sort( (a, b) => a - b );
    ```
17. The function can return any number. Not necessarily 1 or -1.
18. For instance, if we have a big array of objects to sort, and each object has a name property, we can use arr.sort((
    a, b) => a.name > b.name ? 1 : -1).
19. That’s called a “comparator” function, because it compares values to sort them.
20. If such function is passed, then the array is sorted according to the value it returns:
    ```javascript
    let arr = [ 1, 2, 15 ];

    // the method reorders the content of arr (and returns it)
    arr.sort(function(a, b) { return a - b; });

    alert(arr);  // 1, 2, 15
    ```

using localecompare
for many languages there exists a special method str.localeCompare to compare strings “correctly” according to the
language. The method is a little bit slower, but more reliable:

```javascript
let countries = ['Österreich', 'Andorra', 'Vietnam'];

alert(countries.sort((a, b) => a > b ? 1 : -1)); // Andorra, Vietnam, Österreich (wrong)

alert(countries.sort((a, b) => a.localeCompare(b))); // Andorra,Österreich,Vietnam (correct!)
```

* arr.reverse() – reverses the array in-place, then returns it.


* Split a string into an array using `str.split(delim)`.
* For example, `let names = 'Bilbo, Gandalf, Nazgul'; let arr = names.split(', ');`
* Join an array into a string using `arr.join(glue)`.
* For example, `let arr = ['Bilbo', 'Gandalf', 'Nazgul']; let str = arr.join(';');`

*array.reduce()*

The arr.reduce and arr.reduceRight (runs operation from right) methods in JavaScript calculates on every item (while
carries last calculated value to next operation) and returns single value based on an array.
Syntax: let value = arr.reduce((accumulator, item, index, array) => {...}, [initial]);.
The function is applied to each array element, carrying the result to the next call. The accumulator is the result of
previous function calls, item is the current array element, index its position, and array is the array itself. Initial
is the initial value for accumulator.

Example: let result = [1, 2, 3, 4, 5].reduce((sum, current) => sum + current, 0); // Returns 15

It's possible to omit the initial value, but if the array is empty, reduce without initial value gives an error. So,
it's advisable to always specify the initial value. The method arr.reduceRight works similarly but iterates from right
to left.

*Check is Array*

To check if a value is an array, use `Array.isArray()`.
`
Array.isArray([]) // true
Array.isArray({}) // false
`






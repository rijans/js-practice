Basics from https://javascript.info/object

*Object Declaration types

```javascript
let user = new Object(); //Object Constructor
let user = {}; //Object Literal
```

*Computed/Variable Properties

```javascript
let fruit = 'apple';
let bag = {
    [fruit]: 5,
};
```

*Property Existence Test
Also doesn't work if property exists but is set to undefined

```javascript
let user = {};
alert(user.noSuchProperty === undefined); // true means "no such property"
```

* Better property existence test

```javascript
let user = {name: "John", age: 30};
alert("age" in user); // true, user.age exists
alert("blabla" in user); // false, user.blabla doesn't exist
```

* Non string or symbol property keys are converted to strings

```javascript
 let obj = {
    0: "test" // same as "0": "test"
};

// both alerts access the same property (the number 0 is converted to string "0")
alert(obj["0"]); // test
alert(obj[0]); // test (same property)

// Another thing:
let obj = {
    0: "test",
    "0": 1,
};
alert(obj); // will print {0: 1} because the key "0" is the same as 0
```

* Objects properties cannot be accessed with keys of type number**

```javascript
alert(obj
.0
) // error: missing ) after argument list
```

*There’s a minor gotcha with a special property named __proto__. We can’t set it to a non-object value:

```let obj = {};
obj.__proto__ = 5; // assign a number
alert(obj.__proto__); // [object Object] - the value is an object, didn't work as intended
```

* To walk over all keys of an object, we can use for..in loop which is different from for(;;) loop

```javascript
let user = {
    name: "John",
    age: 30,
    isAdmin: true
};

for (let key in user) {
    // keys
    alert(key);  // name, age, isAdmin
    // values for the keys
    alert(user[key]); // John, 30, true
}
```

* If we loop over an object, do we get all properties in the same order they were added?
* The short answer is: "may not", because they are “ordered in a special fashion”: integer properties are sorted, others
  appear in creation order. The details follow. The phone codes go in the ascending sorted order, because they are
  integers. So we see 1, 41, 44, 49. The “integer property” term here means a string that can be converted to-and-from
  an integer without a change.

```let codes = {
"49": "Germany",
"41": "Switzerland",
"44": "Great Britain",
// ..,
"1": "USA"
};

for (let code in codes) {
alert(code); // 1, 41, 44, 49
}```




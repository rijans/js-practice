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
alert(obj.0) // error: missing ) after argument list
```

*There’s a minor gotcha with a special property named __proto__. We can’t set it to a non-object value:

```let obj = {};
obj.__proto__ = 5; // assign a number
alert(obj.__proto__); // [object Object] - the value is an object, didn't work as intended
```




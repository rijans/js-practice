https://javascript.info/primitives-methods

JS provides methods and properties that work with primitives (except null and undefined which are called most
primitive). They are available temporarily as objects called "Object Wrapper", then disappear. String, Number, etc can
have different methods and properties.

Constructors String/Number/Boolean are for internal use only. Using them for primitives is possible, but highly
discouraged.

```javascript
alert(typeof 0); // "number"

alert(typeof new Number(0)); // "object"!
```

On the other hand, using the same functions String/Number/Boolean without new is totally fine as hey convert a value to
the corresponding type: to a string, a number, or a boolean (primitive).

```javascript
let num = Number("123"); // convert a string to number
```




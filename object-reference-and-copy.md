*Copy by Reference
A variable assigned to an object stores not the object itself, but its “address in memory” – in other words “a reference” to it. When an object variable is copied, the reference is copied, but the object itself is not duplicated.

```javascript
let user = { name: "John" };
let admin = user; // copy the reference
```

*Comparison by Reference
Two objects are equal only if they are the same object.

```javascript
let a = {};
let b = a; // copy the reference

alert( a == b ); // true, both variables reference the same object
alert( a === b ); // true

//**independent objects are not equal, even though they look alike
let a = {};
let b = {}; // two independent objects
alert( a == b ); // false
```

* We can use the method Object.assign to copy all properties from one object into another:

```javascript
let user = { name: "John" };
let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

// copies all properties from permissions1 and permissions2 into user
Object.assign(user, permissions1, permissions2);

// now user = { name: "John", canView: true, canEdit: true }

// or clone single object
let clone = Object.assign({}, user);
```

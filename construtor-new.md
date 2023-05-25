// https://javascript.info/constructor-new
*Constructor Function*
Constructor functions technically are regular functions. There are two conventions though:

1. They are named with capital letter first.
2. They should be executed only with "new" operator.
3. Arrow functions are not to be used as constructors (because they have no this).

```javascript
function User(name) {
    this.name = name;
    this.isAdmin = false;
}

let user = new User("Jack");

alert(user.name); // Jack
alert(user.isAdmin); // false
```

*When a function is executed with new, it does the following steps:*

```javascript
function User(name) {
    // this = {};  (implicitly)

    // add properties to this
    this.name = name;
    this.isAdmin = false;

    // return this;  (implicitly)
}
```

*Immediately called constructor function*
This constructor can’t be called again, because it is not saved anywhere, just created and called. It encloses the code.

```javascript
let user = new function () {
    this.name = "John";
    this.isAdmin = false;

    // ...other code for user creation
    // maybe complex logic and statements
    // local variables etc
};
```

*Constructor mode test: new.target*
Inside a function, we can check whether it was called with new or without it, using a special new.target property.

```javascript

function User() {
    alert(new.target);
}

// without "new":
User(); // undefined

// with "new":
new User(); // function User { ... }
```

*Return from constructors*

Constructors should not have return statements. But if there is a return,

1. If return is called with an object, then the object is returned instead of this.
2. If return is called with a primitive, it’s ignored.

```javascript
function BigUser() {
    this.name = "John";
    return {name: "Godzilla"};  // <-- returns this object
}

function SmallUser() {
    this.name = "John";
    return; // <-- returns this
}

alert(new SmallUser().name);  // John
```

*We can omit parentheses for constructors*

```javascript
let user = new User; // <-- no parentheses
// same as
let user = new User();
```


// https://javascript.info/object-methods

* When using 'this' in a method, 'this' refers to the object the method is called on

```javascript
let user = {
    name: "John",
    age: 30,
    sayHi() {
        // "this" is the "current object"
        alert(this.name);
    }
};
user.sayHi(); // John
```

*Technically, it’s also possible to access the object without this, by referencing it via the outer variable. But it's
not recommended.

```javascript
let user = {
    name: "John",
    age: 30,
    sayHi() {
        alert(user.name); // "user" instead of "this"
    }
};
user.sayHi(); // John
```

* When using 'this' in a function, 'this' refers to the global object (except strict mode)

```javascript
function sayHi() {
    alert(this);
}

sayHi(); // window
```

* In "strict mode", when a function is called as a method, 'this' is undefined

```javascript
"use strict";

function sayHi() {
    alert(this);
}

sayHi(); // undefined
```

*The value of this is evaluated during the run-time, depending on the context. In JavaScript this is “free”, its value
is evaluated at call-time and does not depend on where the method was declared, but rather on what object is “before the
dot”. This is called "unbound this", where other languages have "bound this".

* Arrow functions are special: they don’t have their “own” this. If we reference this from such a function, it’s taken
  from the outer “normal” function.

```javascript
let user = {
    firstName: "Ilya",
    sayHi() {
        let arrow = () => alert(this.firstName);
        arrow();
    }
};

user.sayHi(); // Ilya
```

// But here it will return window (need to test more and discuss with others)

```javascript
let user = {
  firstName: "Ilya",
  sayHi: () => {
    let arrow = () => console.log(this);
    arrow();
  }
};

user.sayHi(); // window

//but
let ladder = {
  step: 0,
  up: () => {
    let c = () => {
      return this
    };
    c();
  },

};

ladder.up(); //undefined why?
```

// Also this will return window

```let user = {
firstName: "Ilya",
sayHi: () => {
console.log(this);
}
};

user.sayHi(); //window
```

**Method Chaining**
```javascript
let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep() {
        alert(this.step);
        return this;
    }
};

ladder.up().up().down().showStep().down().showStep(); // shows 1 then 0
```


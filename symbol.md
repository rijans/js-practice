// https://javascript.info/symbol
Symbol is a primitive type for unique identifiers.
Symbols are created with Symbol() call with an optional description (name). Symbols are always different values, even if they have the same name.

*Objet property key types*
string type, or
symbol type.

Otherwise, if one uses another type, such as number, it’s autoconverted to string. So that obj[1] is the same as
obj["1"], and obj[true] is the same as obj["true"].

*Unique*
Symbols are guaranteed to be unique. Even if we create many symbols with exactly the same description, they are
different values. Symbols are different, even if they have the same name, same description.

```javascript
let id1 = Symbol("id");
let id2 = Symbol("id");

alert(id1 == id2); // false
```

*Symbols don't auto converted to string*

```javascript
let id = Symbol("id");
alert(id); // TypeError: Cannot convert a Symbol value to a string

let id = Symbol("id");
alert(id.toString()); // Symbol(id), now it works

let id = Symbol("id");
alert(id.description); // id
```

*Hidden properties of symbol*
https://javascript.info/symbol#hidden-properties

*Symbols are skipped by for...in, Object.keys*

*Global Symbols*
If we want to have same-named symbols across different parts of our application, we can use the global symbol. To
achieve that, we need to call Symbol.for(key) with a string key. That call checks the global registry, and if there’s a
symbol described as key, then returns it, otherwise creates a new symbol.for(key) and stores it in the registry by the
given key.

```javascript
// read/create from the global registry
let id = Symbol.for("id"); // if the symbol did not exist, it is created

// read it again (maybe from another part of the code)
let idAgain = Symbol.for("id");

// the same symbol
alert(id === idAgain); // true
```

*Symbol.keyFor*
The Symbol.keyFor internally uses the global symbol registry to look up the key for the symbol. So it doesn’t work for
non-global symbols. If the symbol is not global, it won’t be able to find it and returns undefined.

```javascript
let globalSymbol = Symbol.for("name");
let localSymbol = Symbol("name");

alert( Symbol.keyFor(globalSymbol) ); // name, global symbol
alert( Symbol.keyFor(localSymbol) ); // undefined, not global

alert( localSymbol.description ); // name
```
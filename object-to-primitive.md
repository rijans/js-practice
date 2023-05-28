In JavaScript, mathematical operations on objects are uncommon and usually due to coding errors, with some exceptions
like date manipulation (Date objects)

Object Conversion Rules

1. There is no conversion to boolean. They are always true in boolean context. Only numeric and string conversions are
   possible.
2. Numeric conversion occurs during object subtraction or with mathematical functions, e.g., subtracting Date objects
   gives the time difference.
3. String conversion typically occurs when outputting an object like with alert(obj).

The object-to-primitive conversion is called automatically by many built-in functions and operators that expect a
primitive as a value. JS decides the conversion based on "hints".

There are 3 types (hints) of it:

1. "string" (for alert and other operations that need a string)
2. "number" (for maths)
3. "default" (few operators, usually objects implement it the same way as "number")
   The specification describes explicitly which operator uses which hint.

The conversion algorithm is:

1. Call obj[Symbol.toPrimitive](hint) if the method exists,
2. Otherwise if hint is "string"
   try calling obj.toString() or obj.valueOf(), whatever exists.
3. Otherwise if hint is "number" or "default"
   try calling obj.valueOf() or obj.toString(), whatever exists.
   All these methods must return a primitive to work (if defined).

**By default, a plain object has following toString and valueOf methods:

1. The toString method returns a string "[object Object]".
2. The valueOf method returns the object itself.

In practice, it’s often enough to implement only obj.toString() as a “catch-all” method for string conversions that
should return a “human-readable” representation of an object, for logging or debugging purposes.
https://javascript.info/number

**Two types of nums**

1. Regular numbers, stored in 64-bit format, at maximum of -(2^53-1) to 2^53-1. Also known as "double precision floating
   point numbers" or "doubles" for short.
   52 to store digits, 11 for decimal point, and 1 bit is for the sign.
2. BigInt numbers are to represent integers of arbitrary length. A BigInt number is created by appending n to the end of
   an integer like xxxxxn.

**Ways to write a Number**

Using Underscores: let billion = 1000000000; and let billion = 1_000_000_000; are the same. The second is easier to
read. It's for  “syntactic sugar”. JS ignores the underscores.

Using e sign:

```javascript
let billion = 1e9;  // 1 billion, literally: 1 and 9 zeroes
alert(7.3e9);  // 7.3 billions (same as 7300000000 or 7_300_000_000)
```

In other words, e multiplies the number with the given zeroes count.

```javascript
1e3 === 1 * 1000; // e3 means *1000
1.23e6 === 1.23 * 1000000; // e6 means *1000000
```

In other words, a negative number after "e" means a division by 1 with the given number of zeroes:

```javascript
// -3 divides by 1 with 3 zeroes
1e-3 === 1 / 1000; // 0.001

// -6 divides by 1 with 6 zeroes
1.23e-6 === 1.23 / 1000000; // 0.00000123

// an example with a bigger number
1234e-2 === 1234 / 100; // 12.34, decimal point moves 2 times
```

**Hex, Binary and Octal numbers**

Hex (base 16)
alert( 0xff ); // 255
alert( 0xFF ); // 255 (the same, case doesn't matter)
0xff == 0xFF // true

Binary (Base 2)
alert( 0b11111111 ); // 255

Octal (Base 8)
alert( 0o377 ); // 255

**toString(base)**
The method num.toString(base) returns a string representation of num in the numeral system with the given base. The base
can vary from 2 to 36. By default it’s 10.

```javascript
let num = 255;

alert(num.toString(16));  // ff
alert(num.toString(2));   // 11111111
```

base=16 is used for hex colors, character encodings etc, digits can be 0..9 or A..F.

base=2 is mostly for debugging bitwise operations, digits can be 0 or 1.

base=36 is the maximum, digits can be 0..9 or A..Z. It is mainly used for shortening long strings like shortening urls.

Two dots to call a method

```javascript
alert(123456..toString(36)); // 2n9c (Opposite is parseInt(str, radix))
```

Because JS reads the first dot as a decimal point, not a part of a number. So the second dot is treated as a property.

**Rounding in JavaScript**

Math.floor: Rounds down (3.1 to 3, -1.1 to -2)
Math.ceil: Rounds up (3.1 to 4, -1.1 to -1)
Math.round: Rounds to nearest integer (3.1 to 3, 3.6 to 4; 3.5 to 4)
Math.trunc: Truncates decimal without rounding (3.1 to 3, -1.1 to -1)

Round to n-th digit:

Multiply, round, divide:

1. Math.round(num * 100) / 100 for 2 decimal digits.
2. toFixed(n): Rounds to n digits, returns string: (12.31).toFixed(1) for "12.3", (12.35).toFixed(1) for "12.4"
3. toFixed appends zeroes if decimal part is shorter: num.toFixed(5) for "12.34000"
4. Convert toFixed string result to number with unary plus or Number() like +num.toFixed(5)

**Imprecise calculations**

Numbers are internally represented in 64-bit format IEEE-754. 52 bits for digits, 11 for decimal point position, 1 for
sign.

Large numbers may overflow to Infinity, e.g., alert(1e500); // Infinity.
"Precision loss" happens due to binary representation of fractions, e.g., alert(0.1+0.2==0.3); // false, alert(
0.1+0.2); // 0.30000000000000004.

Fractions like 0.1, 0.2 are unending in binary. No way to store exactly 0.1 or 0.2 in binary, similar to storing 1/3 in
decimal which becomes endless 0.3333333333333333...

IEEE-754 rounds to nearest number, causing "precision loss", e.g., alert(0.1.toFixed(20)); // 0.10000000000000000555.

Issue exists in many languages like PHP, Java, C, Perl, Ruby as they use same numeric format.

To work around, round result using toFixed(n), e.g., let sum = 0.1 + 0.2; alert( +sum.toFixed(2) ); // 0.3.

Can also multiply numbers to make them integers, do math, then divide back. Reduces but doesn't remove error completely,
e.g., alert((0.1*10 + 0.2*10) / 10); // 0.3, alert((0.28*100 + 0.14*100) / 100); // 0.4200000000000001.

If possible, avoid fractions by storing in smallest units. Round them when necessary.

Large numbers may lose precision, e.g., alert(9999999999999999); // shows 10000000000000000.

Two zeroes exist: 0 and -0, due to sign being a single bit. In most cases, they're treated as same. and 0 === -0 is
true.

**isNaN and isFinite**

isNaN(value) converts (Number.isNaN doesn't convert) its argument to a number and then tests it for being NaN.
alert( isNaN(NaN) ); // true
alert( isNaN("str") ); // true

NaN cannot be compared with anything, including itself, e.g.,
alert( NaN === NaN ); // false.
alert( NaN == NaN ); // false.  (Number.isNaN is more strict)
NaN works with Object.is(NaN, NaN) === true. Note that Object.is(0, -0) === false

isFinite(value) converts (Number.isNan doesn't convert) its argument to a number and returns true if it’s a regular number, not NaN/Infinity/-Infinity

isFinite("123") // true
Number.isFinite("123") // false (Number.isFinite is more strict)

isFinite and isNaN mostly give opposite bollen values, e.g., 
alert( isNaN("123") ); // false, 
alert( isFinite("123")
); // true. 
Except Infinity/-Infinity, e.g., 
alert( isNaN(Infinity) ); // false, 
alert( isFinite(Infinity) ); // false.



Object.is
It works with NaN: Object.is(NaN, NaN) === true, that’s a good thing.
Values 0 and -0 are different: Object.is(0, -0) === false.
In all other cases, Object.is(a, b) is the same as a === b.

**parseInt and parseFloat**

Numeric conversion using a plus + or Number() is strict. If a value is not exactly a number, it fails: alert( +"100px" ); // NaN.

That's why parseInt and parseFloat are more flexible. They read a number from a string until they can't.

```javascript
alert( parseInt('100px') ); // 100
alert( parseFloat('12.5em') ); // 12.5

alert( parseInt('12.3') ); // 12, only the integer part is returned
alert( parseFloat('12.3.4') ); // 12.3, the second point stops the reading
alert( parseInt('a123') ); // NaN, the first symbol stops the process
```

parseInt(str, radix) parses the string str into an integer number of the numeral system with given radix (from 2 to 36).

```javascript
alert( parseInt('0xff', 16) ); // 255
alert( parseInt('ff', 16) ); // 255, without 0x also works
alert( parseInt('2n9c', 36) ); // 123456
```

Other Math functions

```javascript
alert(Math.random()); // 0.1234567894322 (Returns a random number from 0 to 1 (not including 1))
alert(Math.max(3, 5, -10, 0, 1)); // 5
alert(Math.min(1, 2)); // 1
alert(Math.pow(2, 10)); // 2 in power 10 = 1024
```


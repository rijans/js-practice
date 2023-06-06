https://javascript.info/string

**Coercion**
Whenever you try to access a property of a string str, JavaScript coerces the string value to an object, by new String(str). Same happens for other primitives except null and undefined.This object is called a wrapper object.

**String and Backticks**
JavaScript uses UTF-16 (specifically UCS-2 encoding) as its internal representation for strings. This means that each character in a JavaScript string is represented by one or two 16-bit code units. Each character has a corresponding numeric code.

Strings can be enclosed within either single quotes, double quotes or backticks. Backticks allow a string to span multiple lines. It is still possible to create multiline strings with single and double quotes by using a so-called “newline character”, written as \n.

Backticks also allow us to specify a “template function” before the first backtick. The syntax is: func`string`. The function func is called automatically, receives the string and embedded expressions and can process them. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#tagged_templates

All special characters start with a backslash character \. It is also called an “escape character”.

**Accessing Characters**

string[index] returns the character at index. The first character is at index 0, the last – at string.length - 1.
string.at(positiveOrNegativePosition) returns the character at index. The first character is at index 0, the last is at - 1.

```javascript
let str = `Hello`;

// the first character
alert( str[0] ); // H
alert( str.at(0) ); // H

// the last character
alert( str[str.length - 1] ); // o
alert( str.at(-1) ); // o

alert( str[-2] ); // undefined
alert( str.at(-2) ); // l
```
We can also iterate over characters using for..of.

**Strings are Immutable**

```javascript
let str = 'Hi';

str[0] = 'h'; // error
alert( str[0] ); // doesn't work
```
**Searching for a substring**

**str.indexOf**
It looks for the substr in str, starting from the given position pos, and returns the position where the match was found or -1 if nothing can be found.

```javascript
let str = 'Widget with id';

alert( str.indexOf('Widget') ); // 0, because 'Widget' is found at the beginning
alert( str.indexOf('widget') ); // -1, not found, the search is case-sensitive

alert( str.indexOf("id") ); // 1, "id" is found at the position 1 (..idget with id)
```
**str.includes**
The more modern method str.includes(substr, pos) returns true/false depending on whether str contains substr within.
```javascript
alert( "Widget".includes("id") ); // true
alert( "Widget".includes("id", 3) ); // false, from position 3 there is no "id"
```
There are other methods like str.startsWith(substr, pos) / str.endsWith(substr, pos) that check whether str starts or ends with substr.

**Getting a substring**

JavaScript offers 3 methods for substring extraction: slice, substring, and substr. Here 3rd param is optional.

slice(start, end): Extracts from start to end (excluding end). Allows negative indices, which count from string end. E.g., "stringify".slice(0, 5) returns 'strin'.

substring(start, end): Similar to slice but doesn't support negatives, treats them as 0. Swaps start and end if start > end.

substr(start, length): Extracts 'length' characters from 'start'. Negative 'start' means counting from the end. Not recommended as it's not in core JavaScript spec but works in most environments.

**Comparing strings**
String comparisons in JavaScript are done character-by-character in alphabetical order, with some peculiarities. Lowercase letters are always greater than uppercase, and letters with diacritical marks are considered "out of order".

```javascript
alert( 'a' > 'Z' ); // true
alert( 'Österreich' > 'Zealand' ); // true
```
This behavior is because strings in JavaScript are encoded using UTF-16, assigning a numeric code to each character.

You can use str.codePointAt(pos) to get the character's numeric code and String.fromCodePoint(code) to create a character by its numeric code. For example:

```javascript
alert( "Z".codePointAt(0) ); // 90
alert( "z".codePointAt(0) ); // 122
alert( String.fromCodePoint(90) ); // Z
```
When comparing, the numeric codes are used, making 'a' > 'Z' as 97 > 90. Lowercase letters' codes are greater than uppercase letters, and certain letters like 'Ö' have codes greater than the entire a-z range.

Now let’s see the characters with codes 65..220 (the latin alphabet and a little bit extra) by making a string of them:

```javascript
let str = '';

for (let i = 65; i <= 220; i++) {
  str += String.fromCodePoint(i);
}

alert( str );
// Output:
// ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~
// ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜ
```
**Best way to compare strings**

To compare strings according to the language, use: localeCompare, otherwise they are compared by character codes. Luckily, modern browsers support the internationalization standard ECMA-402. It provides a special method to compare strings in different languages, following their rules. The call str.localeCompare(str2) returns an integer indicating whether str is less, equal or greater than str2 according to the language rules:

Returns a negative number if str is less than str2.
Returns a positive number if str is greater than str2.
Returns 0 if they are equivalent.
For instance:
alert( 'Österreich'.localeCompare('Zealand') ); // -1

**Changing the case**

str.toUpperCase() / str.toLowerCase() returns the case-changed string.

**Other Methods**
str.trim() – removes (“trims”) spaces from the beginning and end of the string.
str.repeat(n) – repeats the string n times.




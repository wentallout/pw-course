# Quick Guide to JavaScript Array Predicates

What is a Predicate Method? A method that uses a function returning true/false to test elements. Think of it as asking
questions about array elements. The 5 Key Methods

## 1. every() - "Are ALL elements like this?"

```js
const scores = [85, 90, 78];
scores.every((score) => score > 70); // true
// Use when: Checking if all items meet a condition
// Name pattern: checkIfAll...
```

## some() - "Is there ANY element like this?"

```js
const ages = [18, 21, 16, 25];
ages.some((age) => age < 18); // true
// Use when: Checking if at least one item meets a condition
// Name pattern: checkIfHas..., checkIfAny...
```

## filter() - "Give me ALL elements like this"

```js
const scores = [85, 90, 78];
scores.filter((score) => score > 80); // [85, 90]
// Use when: Creating a new array with matching elements
// Name pattern: filter...
```

## find() - "Give me the FIRST element like this"

```js
const words = ['apple', 'banana', 'cherry'];
words.find((word) => word.length > 5); // "banana"
// Use when: Finding single matching element
// Name pattern: find..., findFirst...
```

## findIndex() - "What's the POSITION of the first element like this?

```js
const scores = [85, 90, 78];
scores.findIndex((score) => score > 85); // 1
// Use when: Finding position of matching element
// Name pattern: findIndexOf...
```

## Memory Tips

-   every and some return booleans (yes/no answers)
-   filter returns many items (plural)
-   find returns one item (singular)
-   findIndex returns a number (position)

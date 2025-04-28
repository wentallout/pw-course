# Lesson 5

## DOM

Document Object Model

VD:

```html
<div>
    <input id="fullName" type="text" />
</div>
```

DOM can be visualized as a tree.

## Selector

### Xpath

You can go from the top to find your element (absolute)

Or you can use the attribute of your DOM to find it (relative)

## Playwright basic syntax

### test

`test` needs to be imported before using

### test.step

`test.step` to create steps for your test

test step needs to be map 1-1 with test case for easier maintain.

### goto

```js
await test.goto('https://google.com');
```

### locator

```js
await page.locator('//input').fill('Playwright Viet Nam');
```

## Strange case when using async/await with forEach

In conclusion, using "async/await" with "forEach" in JavaScript is a common misconception. The problem is that people
are misunderstanding how "await" works and think that by using "async" on the callback function passed to "forEach",
they are making that function asynchronous. However, the callback function is still synchronous and "await" does not
work inside of it. To fix this problem, we can use a regular "for" loop or the "map" method with "Promise.all" to wait
for all the promises to complete. I hope this article has helped clear up any confusion and you now have a better
understanding of how "async/await" and "forEach" work in JavaScript.

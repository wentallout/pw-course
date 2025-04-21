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

`test.goto('https://google.com')`

### locator

```js
page.locator('//input').fill('Playwright Viet Nam');
```

# Playwright Test Automation Project

This project contains automated tests using Playwright Test framework for web testing.

## Prerequisites

-   Node.js 18 or higher
-   npm (Node Package Manager)

## Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

## Project Structure

-   `tests/` - Contains the main test files
-   `tests-examples/` - Contains example tests including a todo app test suite
-   `playwright.config.ts` - Playwright configuration file

## Running Tests

Run all tests in headless mode:

```bash
npx playwright test
```

Run tests with UI mode:

```bash
npx playwright test --ui
```

Run tests in specific browser:

```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

## Test Report

After test execution, you can view the HTML report:

```bash
npx playwright show-report
```

## Supported Browsers

-   Chromium
-   Firefox
-   WebKit (Safari)

## Configuration

The project is configured to run tests:

-   In parallel
-   With automatic retries on CI
-   With HTML reporting
-   With trace capture on first retry

See `playwright.config.ts` for detailed configuration options.


##

### Mutating Methods (modify original array):
- push() - adds to end
- pop() - removes from end
- unshift() - adds to beginning
- shift() - removes from beginning
- splice() - adds/removes elements anywhere
- reverse() - reverses array
- sort() - sorts array
- fill() - fills elements with value

Methods thêm/xóa ở đầu/cuối:
Thêm (push, unshift) → return độ dài mới
Xóa (pop, shift) → return phần tử bị xóa
Method thêm/xóa ở giữa:
splice → return mảng các phần tử bị xóa
Methods biến đổi toàn bộ mảng:
reverse, sort, fill → return chính mảng đã biến đổi

### Non-Mutating Methods (return new array, original unchanged):

map() - transforms elements
filter() - filters elements
concat() - combines arrays
slice() - extracts portion of array
join() - creates string from array
reduce() - reduces to single value
forEach() - just loops, returns nothing
indexOf() - finds index
includes() - checks if element exists
find() - finds element
findIndex() - finds element index
some() - checks if some pass test
every() - checks if all pass test




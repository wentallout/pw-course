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

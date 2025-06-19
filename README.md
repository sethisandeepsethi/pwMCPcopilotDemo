# Sauce Demo Playwright Tests

This project contains automated UI tests for the [SauceDemo](https://www.saucedemo.com) website using Playwright.

## Project Structure

```
├── contexts/
│   └── webtestcontext     # Test generation context configuration
├── prompts/
│   └── checkout.txt       # Test scenarios in natural language
├── tests/
│   └── saucedemo.spec.ts  # Playwright test implementations
├── playwright.config.ts   # Playwright configuration
└── package.json          # Project dependencies
```

## Setup

1. Install dependencies:
```sh
npm install
```

2. Install Playwright browsers:
```sh
npx playwright install
```

## Running Tests

Run all tests:
```sh
npx playwright test
```

Run tests with UI mode:
```sh
npx playwright test --ui
```

View latest HTML report:
```sh
npx playwright show-report
```

## Test Scenarios

The project currently includes the following test scenarios:

- Complete checkout flow:
  - Login with standard user
  - Add items to cart
  - Complete checkout process
  - Verify order confirmation

## Configuration

Tests are configured to run on three browsers:
- Chromium
- Firefox
- WebKit

See [playwright.config.ts](playwright.config.ts) for detailed configuration options.

## Development

To add new tests:
1. Create a scenario description in the `prompts` directory
2. Implement the test in the `tests` directory using Playwright's test framework
3. Use page object pattern and data-test attributes for
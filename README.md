# Gainbridge Mobile QA Automation

Mobile automation testing framework for the Gainbridge project. Built with WebdriverIO and Appium.

## Tech Stack
* **Language:** TypeScript
* **Framework:** WebdriverIO (v9)
* **Mobile Driver:** Appium
* **Test Runner:** Mocha
* **Reporting:** Allure

## Prerequisites
* Node.js (v18+)
* Appium Server
* Android Emulator or iOS Simulator

## Installation

1. Clone the repository.
2. Install project dependencies:
```bash
npm install
```

## Running Tests

Ensure your Appium server is running and a device/emulator is connected before executing the tests.

* **Smoke suite:** ```bash
npm run test:smoke
```
* **Regression suite:** ```bash
npm run test:regression
```
* **Gesture tests:** ```bash
npm run test:actions
```

## Project Structure
* `src/pages/` - Page Object models for UI screens.
* `src/components/` - Reusable UI elements and widgets.
* `src/specs/` - Test files categorized by suites.
* `src/utils/` - Helper functions, custom gestures, and locators.

## Code Quality & Reporting

* **Run Linter:** `npm run lint`
* **Format Code:** `npm run format`
* **Generate & Open Report:** `npm run report`
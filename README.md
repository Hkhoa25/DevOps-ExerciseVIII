This is a template for Installing initial, testing (Mocha) and Coveralls Dependencies
# Usage

## Initialization

npm init -y

## Dependencies Installation

npm install mocha chai --save-dev

npm install mocha-lcov-reporter --save-dev

npm install --save-dev mocha chai nyc coveralls

## Running Tests

npm test

## Running Coveralls

npm run coveralls

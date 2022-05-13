// @ts-check
const { devices } = require('@playwright/test');

const config = {
  testDir: './tests',

  timeout: 30 * 1000,
  expect: {

    timeout: 5000
  },

  reporter: [['allure-playwright', { outputFolder: 'my-allure-results' }]],
  //reporter: 'html',
  use: {

    headless: false,
    browserName: 'chromium'

  },

};

module.exports = config;
